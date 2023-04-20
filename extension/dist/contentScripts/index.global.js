var E2 = Object.defineProperty;
var $2 = (e, t, n) => t in e ? E2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var K = (e, t, n) => ($2(e, typeof t != "symbol" ? t + "" : t, n), n);
function A2(e, t) {
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
var P2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function kh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Gy = { exports: {} };
(function(e, t) {
  (function(n, r) {
    r(e);
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : P2, function(n) {
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
          constructor(P, T = void 0) {
            super(T), this.createItem = P;
          }
          get(P) {
            return this.has(P) || this.set(P, this.createItem(P)), super.get(P);
          }
        }
        const u = (E) => E && typeof E == "object" && typeof E.then == "function", c = (E, P) => (...T) => {
          l.runtime.lastError ? E.reject(new Error(l.runtime.lastError.message)) : P.singleCallbackArg || T.length <= 1 && P.singleCallbackArg !== !1 ? E.resolve(T[0]) : E.resolve(T);
        }, f = (E) => E == 1 ? "argument" : "arguments", d = (E, P) => function(R, ...N) {
          if (N.length < P.minArgs)
            throw new Error(`Expected at least ${P.minArgs} ${f(P.minArgs)} for ${E}(), got ${N.length}`);
          if (N.length > P.maxArgs)
            throw new Error(`Expected at most ${P.maxArgs} ${f(P.maxArgs)} for ${E}(), got ${N.length}`);
          return new Promise((D, z) => {
            if (P.fallbackToNoCallback)
              try {
                R[E](...N, c({
                  resolve: D,
                  reject: z
                }, P));
              } catch (F) {
                console.warn(`${E} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, F), R[E](...N), P.fallbackToNoCallback = !1, P.noCallback = !0, D();
              }
            else
              P.noCallback ? (R[E](...N), D()) : R[E](...N, c({
                resolve: D,
                reject: z
              }, P));
          });
        }, g = (E, P, T) => new Proxy(P, {
          apply(R, N, D) {
            return T.call(N, E, ...D);
          }
        });
        let h = Function.call.bind(Object.prototype.hasOwnProperty);
        const v = (E, P = {}, T = {}) => {
          let R = /* @__PURE__ */ Object.create(null), N = {
            has(z, F) {
              return F in E || F in R;
            },
            get(z, F, _) {
              if (F in R)
                return R[F];
              if (!(F in E))
                return;
              let H = E[F];
              if (typeof H == "function")
                if (typeof P[F] == "function")
                  H = g(E, E[F], P[F]);
                else if (h(T, F)) {
                  let M = d(F, T[F]);
                  H = g(E, E[F], M);
                } else
                  H = H.bind(E);
              else if (typeof H == "object" && H !== null && (h(P, F) || h(T, F)))
                H = v(H, P[F], T[F]);
              else if (h(T, "*"))
                H = v(H, P[F], T["*"]);
              else
                return Object.defineProperty(R, F, {
                  configurable: !0,
                  enumerable: !0,
                  get() {
                    return E[F];
                  },
                  set(M) {
                    E[F] = M;
                  }
                }), H;
              return R[F] = H, H;
            },
            set(z, F, _, H) {
              return F in R ? R[F] = _ : E[F] = _, !0;
            },
            defineProperty(z, F, _) {
              return Reflect.defineProperty(R, F, _);
            },
            deleteProperty(z, F) {
              return Reflect.deleteProperty(R, F);
            }
          }, D = Object.create(E);
          return new Proxy(D, N);
        }, w = (E) => ({
          addListener(P, T, ...R) {
            P.addListener(E.get(T), ...R);
          },
          hasListener(P, T) {
            return P.hasListener(E.get(T));
          },
          removeListener(P, T) {
            P.removeListener(E.get(T));
          }
        }), p = new a((E) => typeof E != "function" ? E : function(T) {
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
          E(R);
        });
        let y = !1;
        const x = new a((E) => typeof E != "function" ? E : function(T, R, N) {
          let D = !1, z, F = new Promise((I) => {
            z = function(O) {
              y || (console.warn(o, new Error().stack), y = !0), D = !0, I(O);
            };
          }), _;
          try {
            _ = E(T, R, z);
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
          reject: E,
          resolve: P
        }, T) => {
          l.runtime.lastError ? l.runtime.lastError.message === r ? P() : E(new Error(l.runtime.lastError.message)) : T && T.__mozWebExtensionPolyfillReject__ ? E(new Error(T.message)) : P(T);
        }, A = (E, P, T, ...R) => {
          if (R.length < P.minArgs)
            throw new Error(`Expected at least ${P.minArgs} ${f(P.minArgs)} for ${E}(), got ${R.length}`);
          if (R.length > P.maxArgs)
            throw new Error(`Expected at most ${P.maxArgs} ${f(P.maxArgs)} for ${E}(), got ${R.length}`);
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
})(Gy);
const it = Gy.exports;
let Ky = () => ({
  events: {},
  emit(e, ...t) {
    (this.events[e] || []).forEach((n) => n(...t));
  },
  on(e, t) {
    return (this.events[e] = this.events[e] || []).push(t), () => this.events[e] = (this.events[e] || []).filter((n) => n !== t);
  }
});
class Za extends Error {
  constructor(t) {
    super(Za._prepareSuperMessage(t)), Object.defineProperty(this, "name", {
      value: "NonError",
      configurable: !0,
      writable: !0
    }), Error.captureStackTrace && Error.captureStackTrace(this, Za);
  }
  static _prepareSuperMessage(t) {
    try {
      return JSON.stringify(t);
    } catch {
      return String(t);
    }
  }
}
const _2 = [
  { property: "name", enumerable: !1 },
  { property: "message", enumerable: !1 },
  { property: "stack", enumerable: !1 },
  { property: "code", enumerable: !0 }
], kd = Symbol(".toJSON called"), R2 = (e) => {
  e[kd] = !0;
  const t = e.toJSON();
  return delete e[kd], t;
}, Ch = ({
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
  if (typeof e.toJSON == "function" && e[kd] !== !0)
    return R2(e);
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
        i++, l[s] = Ch({
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
  for (const { property: s, enumerable: a } of _2)
    typeof e[s] == "string" && Object.defineProperty(l, s, {
      value: e[s],
      enumerable: r ? !0 : a,
      configurable: !0,
      writable: !0
    });
  return l;
}, T2 = (e, t = {}) => {
  const { maxDepth: n = Number.POSITIVE_INFINITY } = t;
  return typeof e == "object" && e !== null ? Ch({
    from: e,
    seen: [],
    forceEnumerable: !0,
    maxDepth: n,
    depth: 0
  }) : typeof e == "function" ? `[Function: ${e.name || "anonymous"}]` : e;
}, I2 = (e, t = {}) => {
  const { maxDepth: n = Number.POSITIVE_INFINITY } = t;
  if (e instanceof Error)
    return e;
  if (typeof e == "object" && e !== null && !Array.isArray(e)) {
    const r = new Error();
    return Ch({
      from: e,
      seen: [],
      to_: r,
      maxDepth: n,
      depth: 0
    }), r;
  }
  return new Za(e);
};
var O2 = {
  serializeError: T2,
  deserializeError: I2
}, Xu = { exports: {} };
const N2 = (e) => typeof crypto < "u" && typeof crypto.getRandomValues == "function" ? () => {
  const t = crypto.getRandomValues(new Uint8Array(1))[0];
  return (t >= e ? t % e : t).toString(e);
} : () => Math.floor(Math.random() * e).toString(e), Yy = (e = 7, t = !1) => Array.from({ length: e }, N2(t ? 16 : 36)).join("");
Xu.exports = Yy;
Xu.exports.default = Yy;
var M2 = Object.defineProperty, D2 = Object.defineProperties, L2 = Object.getOwnPropertyDescriptors, Ig = Object.getOwnPropertySymbols, F2 = Object.prototype.hasOwnProperty, z2 = Object.prototype.propertyIsEnumerable, Og = (e, t, n) => t in e ? M2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Xy = (e, t) => {
  for (var n in t || (t = {}))
    F2.call(t, n) && Og(e, n, t[n]);
  if (Ig)
    for (var n of Ig(t))
      z2.call(t, n) && Og(e, n, t[n]);
  return e;
}, Zy = (e, t) => D2(e, L2(t)), B2 = /^((?:background$)|devtools|content-script|window)(?:@(\d+))?$/, Jy = (e) => {
  const [, t, n] = e.match(B2) || [];
  return {
    context: t,
    tabId: +n
  };
}, ef = (e) => it[e], Me = ef("devtools") ? "devtools" : ef("tabs") ? "background" : ef("extension") ? "content-script" : typeof document < "u" ? "window" : null, Ng = Xu.exports(), Cd = /* @__PURE__ */ new Map(), ex = /* @__PURE__ */ new Map(), Ed = /* @__PURE__ */ new Set(), $d = /* @__PURE__ */ new Map(), Ur = null, Ja, tx;
j2();
function j2() {
  if (Me === null)
    throw new Error("Unable to detect runtime context i.e webext-bridge can't figure out what to do");
  if ((Me === "window" || Me === "content-script") && window.addEventListener("message", V2), Me === "content-script" && top === window && (Ur = it.runtime.connect(), Ur.onMessage.addListener((e) => {
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
    const t = e.name || `content-script@${e.sender.tab.id}`, { tabId: n } = Jy(t);
    !n || ($d.set(t, e), Ed.forEach((r) => {
      r.resolvedDestination === t && (e.postMessage(r.message), Ed.delete(r));
    }), e.onDisconnect.addListener(() => {
      $d.delete(t);
    }), e.onMessage.addListener((r) => {
      var o;
      (o = r == null ? void 0 : r.origin) != null && o.context && (r.origin.tabId = n, Zo(r));
    }));
  });
}
function Zo(e) {
  const { origin: t, destination: n } = e;
  if (!e.hops.includes(Ng) && (e.hops.push(Ng), !(Me === "content-script" && [n, t].some((r) => (r == null ? void 0 : r.context) === "window") && !tx))) {
    if (!n)
      return H2(e);
    if (n.context) {
      if (Me === "window")
        return Ad(window, e);
      if (Me === "content-script" && n.context === "window")
        return e.destination = null, Ad(window, e);
      if (Me === "devtools" || Me === "content-script")
        return n.context === "background" && (e.destination = null), Ur.postMessage(e);
      if (Me === "background") {
        const { context: r, tabId: o } = n, { tabId: i } = t;
        r !== "window" ? e.destination = null : e.destination.tabId = null;
        const l = `${r === "window" ? "content-script" : r}@${o || i}`, s = $d.get(l);
        s ? s.postMessage(e) : Ed.add({ resolvedDestination: l, message: e });
      }
    }
  }
}
async function H2(e) {
  const { transactionId: t, messageID: n, messageType: r } = e, o = () => {
    const l = Cd.get(t);
    if (l) {
      const { err: s, data: a } = e;
      if (s) {
        const u = s, c = self[u.name], f = new (typeof c == "function" ? c : Error)(u.message);
        for (const d in u)
          f[d] = u[d];
        l.reject(f);
      } else
        l.resolve(a);
      Cd.delete(t);
    }
  }, i = async () => {
    let l, s, a = !1;
    try {
      const u = ex.get(n);
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
      if (s && (e.err = O2.serializeError(s)), Zo(Zy(Xy({}, e), {
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
async function V2({ data: e, ports: t }) {
  if (!(Me === "content-script" && !tx)) {
    if (e.cmd === "__crx_bridge_verify_listening" && e.scope === Ja && e.context !== Me)
      t[0].postMessage(!0);
    else if (e.cmd === "__crx_bridge_route_message" && e.scope === Ja && e.context !== Me) {
      const { payload: n } = e;
      Me === "content-script" && (n.origin = {
        context: "window",
        tabId: null
      }), Zo(n);
    }
  }
}
function Ad(e, t) {
  U2();
  const n = new MessageChannel(), r = setTimeout(() => {
    n.port1.onmessage = null, Ad(e, t);
  }, 300);
  n.port1.onmessage = () => {
    clearTimeout(r), e.postMessage({
      cmd: "__crx_bridge_route_message",
      scope: Ja,
      context: Me,
      payload: t
    }, "*");
  }, e.postMessage({
    cmd: "__crx_bridge_verify_listening",
    scope: Ja,
    context: Me
  }, "*", [n.port2]);
}
function U2() {
  throw new Error(`webext-bridge uses window.postMessage to talk with other "window"(s), for message routing and stuff,which is global/conflicting operation in case there are other scripts using webext-bridge. Call Bridge#setNamespace(nsps) to isolate your app. Example: setNamespace('com.facebook.react-devtools'). Make sure to use same namespace across all your scripts whereever window.postMessage is likely to be used\``);
}
function Zu(e, t) {
  ex.set(e, t);
}
async function gl(e, t, n = "background") {
  const r = typeof n == "string" ? Jy(n) : n, o = "Bridge#sendMessage ->";
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
      transactionId: Xu.exports(),
      origin: { context: Me, tabId: null },
      hops: [],
      timestamp: Date.now()
    };
    Cd.set(s.transactionId, { resolve: i, reject: l }), Zo(s);
  });
}
var Lo = class {
  constructor(e) {
    this.handleStreamClose = () => {
      this.isClosed || (this.isClosed = !0, this.emitter.emit("closed", !0), this.emitter.events = {});
    }, this.internalInfo = e, this.emitter = Ky(), this.isClosed = !1, Lo.initDone || (Zu("__crx_bridge_stream_transfer__", (t) => {
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
    gl("__crx_bridge_stream_transfer__", {
      streamId: this.internalInfo.streamId,
      streamTransfer: e,
      action: "transfer"
    }, this.internalInfo.endpoint);
  }
  close(e) {
    e && this.send(e), this.handleStreamClose(), gl("__crx_bridge_stream_transfer__", {
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
var W2 = /* @__PURE__ */ new Map(), q2 = Ky();
Zu("__crx_bridge_stream_open__", (e) => new Promise((t) => {
  const { sender: n, data: r } = e, { channel: o } = r;
  let i = !1, l = () => {
  };
  const s = () => {
    const a = W2.get(o);
    typeof a == "function" ? (a(new Eh(Zy(Xy({}, r), { endpoint: n }))), i && l(), t(!0)) : i || (i = !0, l = q2.on("did-change-stream-callbacks", s));
  };
  s();
}));
var m = { exports: {} }, de = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _s = Symbol.for("react.element"), Q2 = Symbol.for("react.portal"), G2 = Symbol.for("react.fragment"), K2 = Symbol.for("react.strict_mode"), Y2 = Symbol.for("react.profiler"), X2 = Symbol.for("react.provider"), Z2 = Symbol.for("react.context"), J2 = Symbol.for("react.forward_ref"), eE = Symbol.for("react.suspense"), tE = Symbol.for("react.memo"), nE = Symbol.for("react.lazy"), Mg = Symbol.iterator;
function rE(e) {
  return e === null || typeof e != "object" ? null : (e = Mg && e[Mg] || e["@@iterator"], typeof e == "function" ? e : null);
}
var nx = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, rx = Object.assign, ox = {};
function Pi(e, t, n) {
  this.props = e, this.context = t, this.refs = ox, this.updater = n || nx;
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
function ix() {
}
ix.prototype = Pi.prototype;
function $h(e, t, n) {
  this.props = e, this.context = t, this.refs = ox, this.updater = n || nx;
}
var Ah = $h.prototype = new ix();
Ah.constructor = $h;
rx(Ah, Pi.prototype);
Ah.isPureReactComponent = !0;
var Dg = Array.isArray, lx = Object.prototype.hasOwnProperty, Ph = { current: null }, sx = { key: !0, ref: !0, __self: !0, __source: !0 };
function ax(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      lx.call(t, r) && !sx.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: _s, type: e, key: i, ref: l, props: o, _owner: Ph.current };
}
function oE(e, t) {
  return { $$typeof: _s, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function _h(e) {
  return typeof e == "object" && e !== null && e.$$typeof === _s;
}
function iE(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Lg = /\/+/g;
function tf(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? iE("" + e.key) : t.toString(36);
}
function Ia(e, t, n, r, o) {
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
          case _s:
          case Q2:
            l = !0;
        }
    }
  if (l)
    return l = e, o = o(l), e = r === "" ? "." + tf(l, 0) : r, Dg(o) ? (n = "", e != null && (n = e.replace(Lg, "$&/") + "/"), Ia(o, t, n, "", function(u) {
      return u;
    })) : o != null && (_h(o) && (o = oE(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(Lg, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Dg(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + tf(i, s);
      l += Ia(i, t, n, a, o);
    }
  else if (a = rE(e), typeof a == "function")
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, a = r + tf(i, s++), l += Ia(i, t, n, a, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Ks(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Ia(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function lE(e) {
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
var ht = { current: null }, Oa = { transition: null }, sE = { ReactCurrentDispatcher: ht, ReactCurrentBatchConfig: Oa, ReactCurrentOwner: Ph };
de.Children = { map: Ks, forEach: function(e, t, n) {
  Ks(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ks(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ks(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!_h(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
de.Component = Pi;
de.Fragment = G2;
de.Profiler = Y2;
de.PureComponent = $h;
de.StrictMode = K2;
de.Suspense = eE;
de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sE;
de.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = rx({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Ph.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (a in t)
      lx.call(t, a) && !sx.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
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
  return { $$typeof: _s, type: e.type, key: o, ref: i, props: r, _owner: l };
};
de.createContext = function(e) {
  return e = { $$typeof: Z2, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: X2, _context: e }, e.Consumer = e;
};
de.createElement = ax;
de.createFactory = function(e) {
  var t = ax.bind(null, e);
  return t.type = e, t;
};
de.createRef = function() {
  return { current: null };
};
de.forwardRef = function(e) {
  return { $$typeof: J2, render: e };
};
de.isValidElement = _h;
de.lazy = function(e) {
  return { $$typeof: nE, _payload: { _status: -1, _result: e }, _init: lE };
};
de.memo = function(e, t) {
  return { $$typeof: tE, type: e, compare: t === void 0 ? null : t };
};
de.startTransition = function(e) {
  var t = Oa.transition;
  Oa.transition = {};
  try {
    e();
  } finally {
    Oa.transition = t;
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
})(m);
const He = /* @__PURE__ */ kh(m.exports), aE = /* @__PURE__ */ A2({
  __proto__: null,
  default: He
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
function uE(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Rh(...e) {
  return (t) => e.forEach(
    (n) => uE(n, t)
  );
}
function xe(...e) {
  return m.exports.useCallback(Rh(...e), e);
}
function vo(e, t = []) {
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
    cE(o, ...t)
  ];
}
function cE(...e) {
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
var hn = { exports: {} }, It = {}, ux = { exports: {} }, cx = {};
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
          var ne = 2 * (k + 1) - 1, ue = M[ne], ee = ne + 1, Q = M[ee];
          if (0 > o(ue, O))
            ee < C && 0 > o(Q, ue) ? (M[k] = Q, M[ee] = O, k = ee) : (M[k] = ue, M[ne] = O, k = ne);
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
        I !== null && H(b, I.startTime - M);
      }
  }
  function A(M, I) {
    h = !1, v && (v = !1, p(E), E = -1), g = !0;
    var O = d;
    try {
      for (x(I), f = n(a); f !== null && (!(f.expirationTime > I) || M && !R()); ) {
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
        ne !== null && H(b, ne.startTime - I), J = !1;
      }
      return J;
    } finally {
      f = null, d = O, g = !1;
    }
  }
  var S = !1, $ = null, E = -1, P = 5, T = -1;
  function R() {
    return !(e.unstable_now() - T < P);
  }
  function N() {
    if ($ !== null) {
      var M = e.unstable_now();
      T = M;
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
    $ = M, S || (S = !0, D());
  }
  function H(M, I) {
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
    return C = O + C, M = { id: c++, callback: I, priorityLevel: M, startTime: O, expirationTime: C, sortIndex: -1 }, O > k ? (M.sortIndex = O, t(u, M), n(a) === null && M === n(u) && (v ? (p(E), E = -1) : v = !0, H(b, O - k))) : (M.sortIndex = C, t(a, M), h || g || (h = !0, _(A))), M;
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
})(cx);
(function(e) {
  e.exports = cx;
})(ux);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fx = m.exports, Tt = ux.exports;
function j(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var dx = /* @__PURE__ */ new Set(), Bl = {};
function yo(e, t) {
  pi(e, t), pi(e + "Capture", t);
}
function pi(e, t) {
  for (Bl[e] = t, e = 0; e < t.length; e++)
    dx.add(t[e]);
}
var jn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Pd = Object.prototype.hasOwnProperty, fE = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Fg = {}, zg = {};
function dE(e) {
  return Pd.call(zg, e) ? !0 : Pd.call(Fg, e) ? !1 : fE.test(e) ? zg[e] = !0 : (Fg[e] = !0, !1);
}
function pE(e, t, n, r) {
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
function hE(e, t, n, r) {
  if (t === null || typeof t > "u" || pE(e, t, n, r))
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
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (hE(t, n, o, r) && (n = null), r || o === null ? dE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Kn = fx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ys = Symbol.for("react.element"), zo = Symbol.for("react.portal"), Bo = Symbol.for("react.fragment"), Nh = Symbol.for("react.strict_mode"), _d = Symbol.for("react.profiler"), px = Symbol.for("react.provider"), hx = Symbol.for("react.context"), Mh = Symbol.for("react.forward_ref"), Rd = Symbol.for("react.suspense"), Td = Symbol.for("react.suspense_list"), Dh = Symbol.for("react.memo"), dr = Symbol.for("react.lazy"), mx = Symbol.for("react.offscreen"), Bg = Symbol.iterator;
function Vi(e) {
  return e === null || typeof e != "object" ? null : (e = Bg && e[Bg] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Oe = Object.assign, nf;
function ul(e) {
  if (nf === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      nf = t && t[1] || "";
    }
  return `
` + nf + e;
}
var rf = !1;
function of(e, t) {
  if (!e || rf)
    return "";
  rf = !0;
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
    rf = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ul(e) : "";
}
function mE(e) {
  switch (e.tag) {
    case 5:
      return ul(e.type);
    case 16:
      return ul("Lazy");
    case 13:
      return ul("Suspense");
    case 19:
      return ul("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = of(e.type, !1), e;
    case 11:
      return e = of(e.type.render, !1), e;
    case 1:
      return e = of(e.type, !0), e;
    default:
      return "";
  }
}
function Id(e) {
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
    case _d:
      return "Profiler";
    case Nh:
      return "StrictMode";
    case Rd:
      return "Suspense";
    case Td:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case hx:
        return (e.displayName || "Context") + ".Consumer";
      case px:
        return (e._context.displayName || "Context") + ".Provider";
      case Mh:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Dh:
        return t = e.displayName || null, t !== null ? t : Id(e.type) || "Memo";
      case dr:
        t = e._payload, e = e._init;
        try {
          return Id(e(t));
        } catch {
        }
    }
  return null;
}
function gE(e) {
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
      return Id(t);
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
function gx(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function vE(e) {
  var t = gx(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Xs(e) {
  e._valueTracker || (e._valueTracker = vE(e));
}
function vx(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = gx(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function eu(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Od(e, t) {
  var n = t.checked;
  return Oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n != null ? n : e._wrapperState.initialChecked });
}
function jg(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Or(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function yx(e, t) {
  t = t.checked, t != null && Oh(e, "checked", t, !1);
}
function Nd(e, t) {
  yx(e, t);
  var n = Or(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Md(e, t.type, n) : t.hasOwnProperty("defaultValue") && Md(e, t.type, Or(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Hg(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Md(e, t, n) {
  (t !== "number" || eu(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var cl = Array.isArray;
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
function Dd(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(j(91));
  return Oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Vg(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(j(92));
      if (cl(n)) {
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
function xx(e, t) {
  var n = Or(t.value), r = Or(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ug(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function wx(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ld(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? wx(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Zs, bx = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Zs = Zs || document.createElement("div"), Zs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Zs.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function jl(e, t) {
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
}, yE = ["Webkit", "ms", "Moz", "O"];
Object.keys(vl).forEach(function(e) {
  yE.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), vl[t] = vl[e];
  });
});
function Sx(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || vl.hasOwnProperty(e) && vl[e] ? ("" + t).trim() : t + "px";
}
function kx(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = Sx(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var xE = Oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Fd(e, t) {
  if (t) {
    if (xE[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function zd(e, t) {
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
var Bd = null;
function Lh(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var jd = null, ei = null, ti = null;
function Wg(e) {
  if (e = Is(e)) {
    if (typeof jd != "function")
      throw Error(j(280));
    var t = e.stateNode;
    t && (t = rc(t), jd(e.stateNode, e.type, t));
  }
}
function Cx(e) {
  ei ? ti ? ti.push(e) : ti = [e] : ei = e;
}
function Ex() {
  if (ei) {
    var e = ei, t = ti;
    if (ti = ei = null, Wg(e), t)
      for (e = 0; e < t.length; e++)
        Wg(t[e]);
  }
}
function $x(e, t) {
  return e(t);
}
function Ax() {
}
var lf = !1;
function Px(e, t, n) {
  if (lf)
    return e(t, n);
  lf = !0;
  try {
    return $x(e, t, n);
  } finally {
    lf = !1, (ei !== null || ti !== null) && (Ax(), Ex());
  }
}
function Hl(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = rc(n);
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
var Hd = !1;
if (jn)
  try {
    var Ui = {};
    Object.defineProperty(Ui, "passive", { get: function() {
      Hd = !0;
    } }), window.addEventListener("test", Ui, Ui), window.removeEventListener("test", Ui, Ui);
  } catch {
    Hd = !1;
  }
function wE(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var yl = !1, tu = null, nu = !1, Vd = null, bE = { onError: function(e) {
  yl = !0, tu = e;
} };
function SE(e, t, n, r, o, i, l, s, a) {
  yl = !1, tu = null, wE.apply(bE, arguments);
}
function kE(e, t, n, r, o, i, l, s, a) {
  if (SE.apply(this, arguments), yl) {
    if (yl) {
      var u = tu;
      yl = !1, tu = null;
    } else
      throw Error(j(198));
    nu || (nu = !0, Vd = u);
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
function _x(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function qg(e) {
  if (xo(e) !== e)
    throw Error(j(188));
}
function CE(e) {
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
function Rx(e) {
  return e = CE(e), e !== null ? Tx(e) : null;
}
function Tx(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Tx(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Ix = Tt.unstable_scheduleCallback, Qg = Tt.unstable_cancelCallback, EE = Tt.unstable_shouldYield, $E = Tt.unstable_requestPaint, Fe = Tt.unstable_now, AE = Tt.unstable_getCurrentPriorityLevel, Fh = Tt.unstable_ImmediatePriority, Ox = Tt.unstable_UserBlockingPriority, ru = Tt.unstable_NormalPriority, PE = Tt.unstable_LowPriority, Nx = Tt.unstable_IdlePriority, Ju = null, Sn = null;
function _E(e) {
  if (Sn && typeof Sn.onCommitFiberRoot == "function")
    try {
      Sn.onCommitFiberRoot(Ju, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var un = Math.clz32 ? Math.clz32 : IE, RE = Math.log, TE = Math.LN2;
function IE(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (RE(e) / TE | 0) | 0;
}
var Js = 64, ea = 4194304;
function fl(e) {
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
function ou(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? r = fl(s) : (i &= l, i !== 0 && (r = fl(i)));
  } else
    l = n & ~o, l !== 0 ? r = fl(l) : i !== 0 && (r = fl(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && (t & o) === 0 && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - un(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function OE(e, t) {
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
function NE(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - un(i), s = 1 << l, a = o[l];
    a === -1 ? ((s & n) === 0 || (s & r) !== 0) && (o[l] = OE(s, t)) : a <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function Ud(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Mx() {
  var e = Js;
  return Js <<= 1, (Js & 4194240) === 0 && (Js = 64), e;
}
function sf(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Rs(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - un(t), e[t] = n;
}
function ME(e, t) {
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
function Dx(e) {
  return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
}
var Lx, Bh, Fx, zx, Bx, Wd = !1, ta = [], kr = null, Cr = null, Er = null, Vl = /* @__PURE__ */ new Map(), Ul = /* @__PURE__ */ new Map(), hr = [], DE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
      Vl.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ul.delete(t.pointerId);
  }
}
function Wi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Is(t), t !== null && Bh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function LE(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return kr = Wi(kr, e, t, n, r, o), !0;
    case "dragenter":
      return Cr = Wi(Cr, e, t, n, r, o), !0;
    case "mouseover":
      return Er = Wi(Er, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Vl.set(i, Wi(Vl.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Ul.set(i, Wi(Ul.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function jx(e) {
  var t = eo(e.target);
  if (t !== null) {
    var n = xo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = _x(n), t !== null) {
          e.blockedOn = t, Bx(e.priority, function() {
            Fx(n);
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
function Na(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = qd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Bd = r, n.target.dispatchEvent(r), Bd = null;
    } else
      return t = Is(n), t !== null && Bh(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Kg(e, t, n) {
  Na(e) && n.delete(t);
}
function FE() {
  Wd = !1, kr !== null && Na(kr) && (kr = null), Cr !== null && Na(Cr) && (Cr = null), Er !== null && Na(Er) && (Er = null), Vl.forEach(Kg), Ul.forEach(Kg);
}
function qi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Wd || (Wd = !0, Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority, FE)));
}
function Wl(e) {
  function t(o) {
    return qi(o, e);
  }
  if (0 < ta.length) {
    qi(ta[0], e);
    for (var n = 1; n < ta.length; n++) {
      var r = ta[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (kr !== null && qi(kr, e), Cr !== null && qi(Cr, e), Er !== null && qi(Er, e), Vl.forEach(t), Ul.forEach(t), n = 0; n < hr.length; n++)
    r = hr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < hr.length && (n = hr[0], n.blockedOn === null); )
    jx(n), n.blockedOn === null && hr.shift();
}
var ni = Kn.ReactCurrentBatchConfig, iu = !0;
function zE(e, t, n, r) {
  var o = be, i = ni.transition;
  ni.transition = null;
  try {
    be = 1, jh(e, t, n, r);
  } finally {
    be = o, ni.transition = i;
  }
}
function BE(e, t, n, r) {
  var o = be, i = ni.transition;
  ni.transition = null;
  try {
    be = 4, jh(e, t, n, r);
  } finally {
    be = o, ni.transition = i;
  }
}
function jh(e, t, n, r) {
  if (iu) {
    var o = qd(e, t, n, r);
    if (o === null)
      vf(e, t, r, lu, n), Gg(e, r);
    else if (LE(o, e, t, n, r))
      r.stopPropagation();
    else if (Gg(e, r), t & 4 && -1 < DE.indexOf(e)) {
      for (; o !== null; ) {
        var i = Is(o);
        if (i !== null && Lx(i), i = qd(e, t, n, r), i === null && vf(e, t, r, lu, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      vf(e, t, r, null, n);
  }
}
var lu = null;
function qd(e, t, n, r) {
  if (lu = null, e = Lh(r), e = eo(e), e !== null)
    if (t = xo(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = _x(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return lu = e, null;
}
function Hx(e) {
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
      switch (AE()) {
        case Fh:
          return 1;
        case Ox:
          return 4;
        case ru:
        case PE:
          return 16;
        case Nx:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gr = null, Hh = null, Ma = null;
function Vx() {
  if (Ma)
    return Ma;
  var e, t = Hh, n = t.length, r, o = "value" in gr ? gr.value : gr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++)
    ;
  return Ma = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Da(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function na() {
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
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? na : Yg, this.isPropagationStopped = Yg, this;
  }
  return Oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = na);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = na);
  }, persist: function() {
  }, isPersistent: na }), t;
}
var _i = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Vh = Ot(_i), Ts = Oe({}, _i, { view: 0, detail: 0 }), jE = Ot(Ts), af, uf, Qi, ec = Oe({}, Ts, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Uh, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Qi && (Qi && e.type === "mousemove" ? (af = e.screenX - Qi.screenX, uf = e.screenY - Qi.screenY) : uf = af = 0, Qi = e), af);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : uf;
} }), Xg = Ot(ec), HE = Oe({}, ec, { dataTransfer: 0 }), VE = Ot(HE), UE = Oe({}, Ts, { relatedTarget: 0 }), cf = Ot(UE), WE = Oe({}, _i, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qE = Ot(WE), QE = Oe({}, _i, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), GE = Ot(QE), KE = Oe({}, _i, { data: 0 }), Zg = Ot(KE), YE = {
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
}, XE = {
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
}, ZE = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function JE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ZE[e]) ? !!t[e] : !1;
}
function Uh() {
  return JE;
}
var e$ = Oe({}, Ts, { key: function(e) {
  if (e.key) {
    var t = YE[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Da(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? XE[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Uh, charCode: function(e) {
  return e.type === "keypress" ? Da(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Da(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), t$ = Ot(e$), n$ = Oe({}, ec, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Jg = Ot(n$), r$ = Oe({}, Ts, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Uh }), o$ = Ot(r$), i$ = Oe({}, _i, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), l$ = Ot(i$), s$ = Oe({}, ec, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), a$ = Ot(s$), u$ = [9, 13, 27, 32], Wh = jn && "CompositionEvent" in window, xl = null;
jn && "documentMode" in document && (xl = document.documentMode);
var c$ = jn && "TextEvent" in window && !xl, Ux = jn && (!Wh || xl && 8 < xl && 11 >= xl), e0 = String.fromCharCode(32), t0 = !1;
function Wx(e, t) {
  switch (e) {
    case "keyup":
      return u$.indexOf(t.keyCode) !== -1;
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
function qx(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var jo = !1;
function f$(e, t) {
  switch (e) {
    case "compositionend":
      return qx(t);
    case "keypress":
      return t.which !== 32 ? null : (t0 = !0, e0);
    case "textInput":
      return e = t.data, e === e0 && t0 ? null : e;
    default:
      return null;
  }
}
function d$(e, t) {
  if (jo)
    return e === "compositionend" || !Wh && Wx(e, t) ? (e = Vx(), Ma = Hh = gr = null, jo = !1, e) : null;
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
      return Ux && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var p$ = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function n0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!p$[e.type] : t === "textarea";
}
function Qx(e, t, n, r) {
  Cx(r), t = su(t, "onChange"), 0 < t.length && (n = new Vh("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var wl = null, ql = null;
function h$(e) {
  ow(e, 0);
}
function tc(e) {
  var t = Uo(e);
  if (vx(t))
    return e;
}
function m$(e, t) {
  if (e === "change")
    return t;
}
var Gx = !1;
if (jn) {
  var ff;
  if (jn) {
    var df = "oninput" in document;
    if (!df) {
      var r0 = document.createElement("div");
      r0.setAttribute("oninput", "return;"), df = typeof r0.oninput == "function";
    }
    ff = df;
  } else
    ff = !1;
  Gx = ff && (!document.documentMode || 9 < document.documentMode);
}
function o0() {
  wl && (wl.detachEvent("onpropertychange", Kx), ql = wl = null);
}
function Kx(e) {
  if (e.propertyName === "value" && tc(ql)) {
    var t = [];
    Qx(t, ql, e, Lh(e)), Px(h$, t);
  }
}
function g$(e, t, n) {
  e === "focusin" ? (o0(), wl = t, ql = n, wl.attachEvent("onpropertychange", Kx)) : e === "focusout" && o0();
}
function v$(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return tc(ql);
}
function y$(e, t) {
  if (e === "click")
    return tc(t);
}
function x$(e, t) {
  if (e === "input" || e === "change")
    return tc(t);
}
function w$(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var dn = typeof Object.is == "function" ? Object.is : w$;
function Ql(e, t) {
  if (dn(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Pd.call(t, o) || !dn(e[o], t[o]))
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
function Yx(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Yx(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Xx() {
  for (var e = window, t = eu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = eu(e.document);
  }
  return t;
}
function qh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function b$(e) {
  var t = Xx(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Yx(n.ownerDocument.documentElement, n)) {
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
var S$ = jn && "documentMode" in document && 11 >= document.documentMode, Ho = null, Qd = null, bl = null, Gd = !1;
function s0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Gd || Ho == null || Ho !== eu(r) || (r = Ho, "selectionStart" in r && qh(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), bl && Ql(bl, r) || (bl = r, r = su(Qd, "onSelect"), 0 < r.length && (t = new Vh("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ho)));
}
function ra(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Vo = { animationend: ra("Animation", "AnimationEnd"), animationiteration: ra("Animation", "AnimationIteration"), animationstart: ra("Animation", "AnimationStart"), transitionend: ra("Transition", "TransitionEnd") }, pf = {}, Zx = {};
jn && (Zx = document.createElement("div").style, "AnimationEvent" in window || (delete Vo.animationend.animation, delete Vo.animationiteration.animation, delete Vo.animationstart.animation), "TransitionEvent" in window || delete Vo.transitionend.transition);
function nc(e) {
  if (pf[e])
    return pf[e];
  if (!Vo[e])
    return e;
  var t = Vo[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Zx)
      return pf[e] = t[n];
  return e;
}
var Jx = nc("animationend"), ew = nc("animationiteration"), tw = nc("animationstart"), nw = nc("transitionend"), rw = /* @__PURE__ */ new Map(), a0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Dr(e, t) {
  rw.set(e, t), yo(t, [e]);
}
for (var hf = 0; hf < a0.length; hf++) {
  var mf = a0[hf], k$ = mf.toLowerCase(), C$ = mf[0].toUpperCase() + mf.slice(1);
  Dr(k$, "on" + C$);
}
Dr(Jx, "onAnimationEnd");
Dr(ew, "onAnimationIteration");
Dr(tw, "onAnimationStart");
Dr("dblclick", "onDoubleClick");
Dr("focusin", "onFocus");
Dr("focusout", "onBlur");
Dr(nw, "onTransitionEnd");
pi("onMouseEnter", ["mouseout", "mouseover"]);
pi("onMouseLeave", ["mouseout", "mouseover"]);
pi("onPointerEnter", ["pointerout", "pointerover"]);
pi("onPointerLeave", ["pointerout", "pointerover"]);
yo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
yo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
yo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
yo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
yo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var dl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), E$ = new Set("cancel close invalid load scroll toggle".split(" ").concat(dl));
function u0(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, kE(r, t, void 0, e), e.currentTarget = null;
}
function ow(e, t) {
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
  if (nu)
    throw e = Vd, nu = !1, Vd = null, e;
}
function $e(e, t) {
  var n = t[Jd];
  n === void 0 && (n = t[Jd] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (iw(t, e, 2, !1), n.add(r));
}
function gf(e, t, n) {
  var r = 0;
  t && (r |= 4), iw(n, e, r, t);
}
var oa = "_reactListening" + Math.random().toString(36).slice(2);
function Gl(e) {
  if (!e[oa]) {
    e[oa] = !0, dx.forEach(function(n) {
      n !== "selectionchange" && (E$.has(n) || gf(n, !1, e), gf(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[oa] || (t[oa] = !0, gf("selectionchange", !1, t));
  }
}
function iw(e, t, n, r) {
  switch (Hx(t)) {
    case 1:
      var o = zE;
      break;
    case 4:
      o = BE;
      break;
    default:
      o = jh;
  }
  n = o.bind(null, t, n, e), o = void 0, !Hd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function vf(e, t, n, r, o) {
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
  Px(function() {
    var u = i, c = Lh(n), f = [];
    e: {
      var d = rw.get(e);
      if (d !== void 0) {
        var g = Vh, h = e;
        switch (e) {
          case "keypress":
            if (Da(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = t$;
            break;
          case "focusin":
            h = "focus", g = cf;
            break;
          case "focusout":
            h = "blur", g = cf;
            break;
          case "beforeblur":
          case "afterblur":
            g = cf;
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
            g = VE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = o$;
            break;
          case Jx:
          case ew:
          case tw:
            g = qE;
            break;
          case nw:
            g = l$;
            break;
          case "scroll":
            g = jE;
            break;
          case "wheel":
            g = a$;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = GE;
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
          if (x.tag === 5 && b !== null && (x = b, p !== null && (b = Hl(y, p), b != null && v.push(Kl(y, b, x)))), w)
            break;
          y = y.return;
        }
        0 < v.length && (d = new g(d, h, null, n, c), f.push({ event: d, listeners: v }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== Bd && (h = n.relatedTarget || n.fromElement) && (eo(h) || h[Hn]))
          break e;
        if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (h = n.relatedTarget || n.toElement, g = u, h = h ? eo(h) : null, h !== null && (w = xo(h), h !== w || h.tag !== 5 && h.tag !== 6) && (h = null)) : (g = null, h = u), g !== h)) {
          if (v = Xg, b = "onMouseLeave", p = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (v = Jg, b = "onPointerLeave", p = "onPointerEnter", y = "pointer"), w = g == null ? d : Uo(g), x = h == null ? d : Uo(h), d = new v(b, y + "leave", g, n, c), d.target = w, d.relatedTarget = x, b = null, eo(c) === u && (v = new v(p, y + "enter", h, n, c), v.target = x, v.relatedTarget = w, b = v), w = b, g && h)
            t: {
              for (v = g, p = h, y = 0, x = v; x; x = $o(x))
                y++;
              for (x = 0, b = p; b; b = $o(b))
                x++;
              for (; 0 < y - x; )
                v = $o(v), y--;
              for (; 0 < x - y; )
                p = $o(p), x--;
              for (; y--; ) {
                if (v === p || p !== null && v === p.alternate)
                  break t;
                v = $o(v), p = $o(p);
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
          var A = m$;
        else if (n0(d))
          if (Gx)
            A = x$;
          else {
            A = v$;
            var S = g$;
          }
        else
          (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (A = y$);
        if (A && (A = A(e, u))) {
          Qx(f, A, n, c);
          break e;
        }
        S && S(e, d, u), e === "focusout" && (S = d._wrapperState) && S.controlled && d.type === "number" && Md(d, "number", d.value);
      }
      switch (S = u ? Uo(u) : window, e) {
        case "focusin":
          (n0(S) || S.contentEditable === "true") && (Ho = S, Qd = u, bl = null);
          break;
        case "focusout":
          bl = Qd = Ho = null;
          break;
        case "mousedown":
          Gd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Gd = !1, s0(f, n, c);
          break;
        case "selectionchange":
          if (S$)
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
        jo ? Wx(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Ux && n.locale !== "ko" && (jo || E !== "onCompositionStart" ? E === "onCompositionEnd" && jo && ($ = Vx()) : (gr = c, Hh = "value" in gr ? gr.value : gr.textContent, jo = !0)), S = su(u, E), 0 < S.length && (E = new Zg(E, e, null, n, c), f.push({ event: E, listeners: S }), $ ? E.data = $ : ($ = qx(n), $ !== null && (E.data = $)))), ($ = c$ ? f$(e, n) : d$(e, n)) && (u = su(u, "onBeforeInput"), 0 < u.length && (c = new Zg("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = $));
    }
    ow(f, t);
  });
}
function Kl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function su(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Hl(e, n), i != null && r.unshift(Kl(e, i, o)), i = Hl(e, t), i != null && r.push(Kl(e, i, o))), e = e.return;
  }
  return r;
}
function $o(e) {
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
    s.tag === 5 && u !== null && (s = u, o ? (a = Hl(n, i), a != null && l.unshift(Kl(n, a, s))) : o || (a = Hl(n, i), a != null && l.push(Kl(n, a, s)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var $$ = /\r\n?/g, A$ = /\u0000|\uFFFD/g;
function f0(e) {
  return (typeof e == "string" ? e : "" + e).replace($$, `
`).replace(A$, "");
}
function ia(e, t, n) {
  if (t = f0(t), f0(e) !== t && n)
    throw Error(j(425));
}
function au() {
}
var Kd = null, Yd = null;
function Xd(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Zd = typeof setTimeout == "function" ? setTimeout : void 0, P$ = typeof clearTimeout == "function" ? clearTimeout : void 0, d0 = typeof Promise == "function" ? Promise : void 0, _$ = typeof queueMicrotask == "function" ? queueMicrotask : typeof d0 < "u" ? function(e) {
  return d0.resolve(null).then(e).catch(R$);
} : Zd;
function R$(e) {
  setTimeout(function() {
    throw e;
  });
}
function yf(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Wl(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Wl(t);
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
var Ri = Math.random().toString(36).slice(2), bn = "__reactFiber$" + Ri, Yl = "__reactProps$" + Ri, Hn = "__reactContainer$" + Ri, Jd = "__reactEvents$" + Ri, T$ = "__reactListeners$" + Ri, I$ = "__reactHandles$" + Ri;
function eo(e) {
  var t = e[bn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Hn] || n[bn]) {
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
function Is(e) {
  return e = e[bn] || e[Hn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Uo(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(j(33));
}
function rc(e) {
  return e[Yl] || null;
}
var ep = [], Wo = -1;
function Lr(e) {
  return { current: e };
}
function Pe(e) {
  0 > Wo || (e.current = ep[Wo], ep[Wo] = null, Wo--);
}
function Ee(e, t) {
  Wo++, ep[Wo] = e.current, e.current = t;
}
var Nr = {}, lt = Lr(Nr), bt = Lr(!1), so = Nr;
function hi(e, t) {
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
function uu() {
  Pe(bt), Pe(lt);
}
function h0(e, t, n) {
  if (lt.current !== Nr)
    throw Error(j(168));
  Ee(lt, t), Ee(bt, n);
}
function lw(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(j(108, gE(e) || "Unknown", o));
  return Oe({}, n, r);
}
function cu(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nr, so = lt.current, Ee(lt, e), Ee(bt, bt.current), !0;
}
function m0(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(j(169));
  n ? (e = lw(e, t, so), r.__reactInternalMemoizedMergedChildContext = e, Pe(bt), Pe(lt), Ee(lt, e)) : Pe(bt), Ee(bt, n);
}
var Dn = null, oc = !1, xf = !1;
function sw(e) {
  Dn === null ? Dn = [e] : Dn.push(e);
}
function O$(e) {
  oc = !0, sw(e);
}
function Fr() {
  if (!xf && Dn !== null) {
    xf = !0;
    var e = 0, t = be;
    try {
      var n = Dn;
      for (be = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Dn = null, oc = !1;
    } catch (o) {
      throw Dn !== null && (Dn = Dn.slice(e + 1)), Ix(Fh, Fr), o;
    } finally {
      be = t, xf = !1;
    }
  }
  return null;
}
var qo = [], Qo = 0, fu = null, du = 0, Dt = [], Lt = 0, ao = null, Ln = 1, Fn = "";
function Wr(e, t) {
  qo[Qo++] = du, qo[Qo++] = fu, fu = e, du = t;
}
function aw(e, t, n) {
  Dt[Lt++] = Ln, Dt[Lt++] = Fn, Dt[Lt++] = ao, ao = e;
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
  e.return !== null && (Wr(e, 1), aw(e, 1, 0));
}
function Gh(e) {
  for (; e === fu; )
    fu = qo[--Qo], qo[Qo] = null, du = qo[--Qo], qo[Qo] = null;
  for (; e === ao; )
    ao = Dt[--Lt], Dt[Lt] = null, Fn = Dt[--Lt], Dt[Lt] = null, Ln = Dt[--Lt], Dt[Lt] = null;
}
var _t = null, $t = null, Re = !1, nn = null;
function uw(e, t) {
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
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ao !== null ? { id: Ln, overflow: Fn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, _t = e, $t = null, !0) : !1;
    default:
      return !1;
  }
}
function tp(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function np(e) {
  if (Re) {
    var t = $t;
    if (t) {
      var n = t;
      if (!g0(e, t)) {
        if (tp(e))
          throw Error(j(418));
        t = $r(n.nextSibling);
        var r = _t;
        t && g0(e, t) ? uw(r, n) : (e.flags = e.flags & -4097 | 2, Re = !1, _t = e);
      }
    } else {
      if (tp(e))
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
function la(e) {
  if (e !== _t)
    return !1;
  if (!Re)
    return v0(e), Re = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Xd(e.type, e.memoizedProps)), t && (t = $t)) {
    if (tp(e))
      throw cw(), Error(j(418));
    for (; t; )
      uw(e, t), t = $r(t.nextSibling);
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
function cw() {
  for (var e = $t; e; )
    e = $r(e.nextSibling);
}
function mi() {
  $t = _t = null, Re = !1;
}
function Kh(e) {
  nn === null ? nn = [e] : nn.push(e);
}
var N$ = Kn.ReactCurrentBatchConfig;
function en(e, t) {
  if (e && e.defaultProps) {
    t = Oe({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var pu = Lr(null), hu = null, Go = null, Yh = null;
function Xh() {
  Yh = Go = hu = null;
}
function Zh(e) {
  var t = pu.current;
  Pe(pu), e._currentValue = t;
}
function rp(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function ri(e, t) {
  hu = e, Yh = Go = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (wt = !0), e.firstContext = null);
}
function qt(e) {
  var t = e._currentValue;
  if (Yh !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Go === null) {
      if (hu === null)
        throw Error(j(308));
      Go = e, hu.dependencies = { lanes: 0, firstContext: e };
    } else
      Go = Go.next = e;
  return t;
}
var to = null;
function Jh(e) {
  to === null ? to = [e] : to.push(e);
}
function fw(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Jh(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Vn(e, r);
}
function Vn(e, t) {
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
function dw(e, t) {
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
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Vn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Jh(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Vn(e, n);
}
function La(e, t, n) {
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
function mu(e, t, n, r) {
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
    co |= l, e.lanes = l, e.memoizedState = f;
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
var pw = new fx.Component().refs;
function op(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ic = { isMounted: function(e) {
  return (e = e._reactInternals) ? xo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = pt(), o = _r(e), i = zn(r, o);
  i.payload = t, n != null && (i.callback = n), t = Ar(e, i, o), t !== null && (cn(t, e, o, r), La(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = pt(), o = _r(e), i = zn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Ar(e, i, o), t !== null && (cn(t, e, o, r), La(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = pt(), r = _r(e), o = zn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Ar(e, o, r), t !== null && (cn(t, e, r, n), La(t, e, r));
} };
function w0(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Ql(n, r) || !Ql(o, i) : !0;
}
function hw(e, t, n) {
  var r = !1, o = Nr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = qt(i) : (o = St(t) ? so : lt.current, r = t.contextTypes, i = (r = r != null) ? hi(e, o) : Nr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ic, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function b0(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ic.enqueueReplaceState(t, t.state, null);
}
function ip(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = pw, em(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = qt(i) : (i = St(t) ? so : lt.current, o.context = hi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (op(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ic.enqueueReplaceState(o, o.state, null), mu(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
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
        s === pw && (s = o.refs = {}), l === null ? delete s[i] : s[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(j(284));
    if (!n._owner)
      throw Error(j(290, e));
  }
  return e;
}
function sa(e, t) {
  throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function S0(e) {
  var t = e._init;
  return t(e._payload);
}
function mw(e) {
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
    return y === null || y.tag !== 6 ? (y = $f(x, p.mode, b), y.return = p, y) : (y = o(y, x), y.return = p, y);
  }
  function a(p, y, x, b) {
    var A = x.type;
    return A === Bo ? c(p, y, x.props.children, b, x.key) : y !== null && (y.elementType === A || typeof A == "object" && A !== null && A.$$typeof === dr && S0(A) === y.type) ? (b = o(y, x.props), b.ref = Gi(p, y, x), b.return = p, b) : (b = Va(x.type, x.key, x.props, null, p.mode, b), b.ref = Gi(p, y, x), b.return = p, b);
  }
  function u(p, y, x, b) {
    return y === null || y.tag !== 4 || y.stateNode.containerInfo !== x.containerInfo || y.stateNode.implementation !== x.implementation ? (y = Af(x, p.mode, b), y.return = p, y) : (y = o(y, x.children || []), y.return = p, y);
  }
  function c(p, y, x, b, A) {
    return y === null || y.tag !== 7 ? (y = oo(x, p.mode, b, A), y.return = p, y) : (y = o(y, x), y.return = p, y);
  }
  function f(p, y, x) {
    if (typeof y == "string" && y !== "" || typeof y == "number")
      return y = $f("" + y, p.mode, x), y.return = p, y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ys:
          return x = Va(y.type, y.key, y.props, null, p.mode, x), x.ref = Gi(p, null, y), x.return = p, x;
        case zo:
          return y = Af(y, p.mode, x), y.return = p, y;
        case dr:
          var b = y._init;
          return f(p, b(y._payload), x);
      }
      if (cl(y) || Vi(y))
        return y = oo(y, p.mode, x, null), y.return = p, y;
      sa(p, y);
    }
    return null;
  }
  function d(p, y, x, b) {
    var A = y !== null ? y.key : null;
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return A !== null ? null : s(p, y, "" + x, b);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ys:
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
      if (cl(x) || Vi(x))
        return A !== null ? null : c(p, y, x, b, null);
      sa(p, x);
    }
    return null;
  }
  function g(p, y, x, b, A) {
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return p = p.get(x) || null, s(y, p, "" + b, A);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ys:
          return p = p.get(b.key === null ? x : b.key) || null, a(y, p, b, A);
        case zo:
          return p = p.get(b.key === null ? x : b.key) || null, u(y, p, b, A);
        case dr:
          var S = b._init;
          return g(p, y, x, S(b._payload), A);
      }
      if (cl(b) || Vi(b))
        return p = p.get(x) || null, c(y, p, b, A, null);
      sa(y, b);
    }
    return null;
  }
  function h(p, y, x, b) {
    for (var A = null, S = null, $ = y, E = y = 0, P = null; $ !== null && E < x.length; E++) {
      $.index > E ? (P = $, $ = null) : P = $.sibling;
      var T = d(p, $, x[E], b);
      if (T === null) {
        $ === null && ($ = P);
        break;
      }
      e && $ && T.alternate === null && t(p, $), y = i(T, y, E), S === null ? A = T : S.sibling = T, S = T, $ = P;
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
    return e && $.forEach(function(R) {
      return t(p, R);
    }), Re && Wr(p, E), A;
  }
  function v(p, y, x, b) {
    var A = Vi(x);
    if (typeof A != "function")
      throw Error(j(150));
    if (x = A.call(x), x == null)
      throw Error(j(151));
    for (var S = A = null, $ = y, E = y = 0, P = null, T = x.next(); $ !== null && !T.done; E++, T = x.next()) {
      $.index > E ? (P = $, $ = null) : P = $.sibling;
      var R = d(p, $, T.value, b);
      if (R === null) {
        $ === null && ($ = P);
        break;
      }
      e && $ && R.alternate === null && t(p, $), y = i(R, y, E), S === null ? A = R : S.sibling = R, S = R, $ = P;
    }
    if (T.done)
      return n(
        p,
        $
      ), Re && Wr(p, E), A;
    if ($ === null) {
      for (; !T.done; E++, T = x.next())
        T = f(p, T.value, b), T !== null && (y = i(T, y, E), S === null ? A = T : S.sibling = T, S = T);
      return Re && Wr(p, E), A;
    }
    for ($ = r(p, $); !T.done; E++, T = x.next())
      T = g($, p, E, T.value, b), T !== null && (e && T.alternate !== null && $.delete(T.key === null ? E : T.key), y = i(T, y, E), S === null ? A = T : S.sibling = T, S = T);
    return e && $.forEach(function(N) {
      return t(p, N);
    }), Re && Wr(p, E), A;
  }
  function w(p, y, x, b) {
    if (typeof x == "object" && x !== null && x.type === Bo && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ys:
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
            y = Af(x, p.mode, b), y.return = p, p = y;
          }
          return l(p);
        case dr:
          return S = x._init, w(p, y, S(x._payload), b);
      }
      if (cl(x))
        return h(p, y, x, b);
      if (Vi(x))
        return v(p, y, x, b);
      sa(p, x);
    }
    return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, y !== null && y.tag === 6 ? (n(p, y.sibling), y = o(y, x), y.return = p, p = y) : (n(p, y), y = $f(x, p.mode, b), y.return = p, p = y), l(p)) : n(p, y);
  }
  return w;
}
var gi = mw(!0), gw = mw(!1), Os = {}, kn = Lr(Os), Xl = Lr(Os), Zl = Lr(Os);
function no(e) {
  if (e === Os)
    throw Error(j(174));
  return e;
}
function tm(e, t) {
  switch (Ee(Zl, t), Ee(Xl, e), Ee(kn, Os), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ld(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ld(t, e);
  }
  Pe(kn), Ee(kn, t);
}
function vi() {
  Pe(kn), Pe(Xl), Pe(Zl);
}
function vw(e) {
  no(Zl.current);
  var t = no(kn.current), n = Ld(t, e.type);
  t !== n && (Ee(Xl, e), Ee(kn, n));
}
function nm(e) {
  Xl.current === e && (Pe(kn), Pe(Xl));
}
var Te = Lr(0);
function gu(e) {
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
var wf = [];
function rm() {
  for (var e = 0; e < wf.length; e++)
    wf[e]._workInProgressVersionPrimary = null;
  wf.length = 0;
}
var Fa = Kn.ReactCurrentDispatcher, bf = Kn.ReactCurrentBatchConfig, uo = 0, Ie = null, qe = null, Ge = null, vu = !1, Sl = !1, Jl = 0, M$ = 0;
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
  if (uo = i, Ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Fa.current = e === null || e.memoizedState === null ? z$ : B$, e = n(r, o), Sl) {
    i = 0;
    do {
      if (Sl = !1, Jl = 0, 25 <= i)
        throw Error(j(301));
      i += 1, Ge = qe = null, t.updateQueue = null, Fa.current = j$, e = n(r, o);
    } while (Sl);
  }
  if (Fa.current = yu, t = qe !== null && qe.next !== null, uo = 0, Ge = qe = Ie = null, vu = !1, t)
    throw Error(j(300));
  return e;
}
function lm() {
  var e = Jl !== 0;
  return Jl = 0, e;
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
function es(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Sf(e) {
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
      if ((uo & c) === c)
        a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (s = a = f, l = r) : a = a.next = f, Ie.lanes |= c, co |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? l = r : a.next = s, dn(r, t.memoizedState) || (wt = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Ie.lanes |= i, co |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function kf(e) {
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
function yw() {
}
function xw(e, t) {
  var n = Ie, r = Qt(), o = t(), i = !dn(r.memoizedState, o);
  if (i && (r.memoizedState = o, wt = !0), r = r.queue, sm(Sw.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ge !== null && Ge.memoizedState.tag & 1) {
    if (n.flags |= 2048, ts(9, bw.bind(null, n, r, o, t), void 0, null), Ye === null)
      throw Error(j(349));
    (uo & 30) !== 0 || ww(n, t, o);
  }
  return o;
}
function ww(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function bw(e, t, n, r) {
  t.value = n, t.getSnapshot = r, kw(t) && Cw(e);
}
function Sw(e, t, n) {
  return n(function() {
    kw(t) && Cw(e);
  });
}
function kw(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dn(e, n);
  } catch {
    return !0;
  }
}
function Cw(e) {
  var t = Vn(e, 1);
  t !== null && cn(t, e, 1, -1);
}
function k0(e) {
  var t = vn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: es, lastRenderedState: e }, t.queue = e, e = e.dispatch = F$.bind(null, Ie, e), [t.memoizedState, e];
}
function ts(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ew() {
  return Qt().memoizedState;
}
function za(e, t, n, r) {
  var o = vn();
  Ie.flags |= e, o.memoizedState = ts(1 | t, n, void 0, r === void 0 ? null : r);
}
function lc(e, t, n, r) {
  var o = Qt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (qe !== null) {
    var l = qe.memoizedState;
    if (i = l.destroy, r !== null && om(r, l.deps)) {
      o.memoizedState = ts(t, n, i, r);
      return;
    }
  }
  Ie.flags |= e, o.memoizedState = ts(1 | t, n, i, r);
}
function C0(e, t) {
  return za(8390656, 8, e, t);
}
function sm(e, t) {
  return lc(2048, 8, e, t);
}
function $w(e, t) {
  return lc(4, 2, e, t);
}
function Aw(e, t) {
  return lc(4, 4, e, t);
}
function Pw(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function _w(e, t, n) {
  return n = n != null ? n.concat([e]) : null, lc(4, 4, Pw.bind(null, t, e), n);
}
function am() {
}
function Rw(e, t) {
  var n = Qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && om(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Tw(e, t) {
  var n = Qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && om(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Iw(e, t, n) {
  return (uo & 21) === 0 ? (e.baseState && (e.baseState = !1, wt = !0), e.memoizedState = n) : (dn(n, t) || (n = Mx(), Ie.lanes |= n, co |= n, e.baseState = !0), t);
}
function D$(e, t) {
  var n = be;
  be = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = bf.transition;
  bf.transition = {};
  try {
    e(!1), t();
  } finally {
    be = n, bf.transition = r;
  }
}
function Ow() {
  return Qt().memoizedState;
}
function L$(e, t, n) {
  var r = _r(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Nw(e))
    Mw(t, n);
  else if (n = fw(e, t, n, r), n !== null) {
    var o = pt();
    cn(n, e, r, o), Dw(n, t, r);
  }
}
function F$(e, t, n) {
  var r = _r(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Nw(e))
    Mw(t, o);
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
    n = fw(e, t, o, r), n !== null && (o = pt(), cn(n, e, r, o), Dw(n, t, r));
  }
}
function Nw(e) {
  var t = e.alternate;
  return e === Ie || t !== null && t === Ie;
}
function Mw(e, t) {
  Sl = vu = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Dw(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, zh(e, n);
  }
}
var yu = { readContext: qt, useCallback: tt, useContext: tt, useEffect: tt, useImperativeHandle: tt, useInsertionEffect: tt, useLayoutEffect: tt, useMemo: tt, useReducer: tt, useRef: tt, useState: tt, useDebugValue: tt, useDeferredValue: tt, useTransition: tt, useMutableSource: tt, useSyncExternalStore: tt, useId: tt, unstable_isNewReconciler: !1 }, z$ = { readContext: qt, useCallback: function(e, t) {
  return vn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: qt, useEffect: C0, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, za(
    4194308,
    4,
    Pw.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return za(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return za(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = vn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = vn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = L$.bind(null, Ie, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = vn();
  return e = { current: e }, t.memoizedState = e;
}, useState: k0, useDebugValue: am, useDeferredValue: function(e) {
  return vn().memoizedState = e;
}, useTransition: function() {
  var e = k0(!1), t = e[0];
  return e = D$.bind(null, e[1]), vn().memoizedState = e, [t, e];
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
    (uo & 30) !== 0 || ww(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, C0(Sw.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ts(9, bw.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = vn(), t = Ye.identifierPrefix;
  if (Re) {
    var n = Fn, r = Ln;
    n = (r & ~(1 << 32 - un(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Jl++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = M$++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, B$ = {
  readContext: qt,
  useCallback: Rw,
  useContext: qt,
  useEffect: sm,
  useImperativeHandle: _w,
  useInsertionEffect: $w,
  useLayoutEffect: Aw,
  useMemo: Tw,
  useReducer: Sf,
  useRef: Ew,
  useState: function() {
    return Sf(es);
  },
  useDebugValue: am,
  useDeferredValue: function(e) {
    var t = Qt();
    return Iw(t, qe.memoizedState, e);
  },
  useTransition: function() {
    var e = Sf(es)[0], t = Qt().memoizedState;
    return [e, t];
  },
  useMutableSource: yw,
  useSyncExternalStore: xw,
  useId: Ow,
  unstable_isNewReconciler: !1
}, j$ = { readContext: qt, useCallback: Rw, useContext: qt, useEffect: sm, useImperativeHandle: _w, useInsertionEffect: $w, useLayoutEffect: Aw, useMemo: Tw, useReducer: kf, useRef: Ew, useState: function() {
  return kf(es);
}, useDebugValue: am, useDeferredValue: function(e) {
  var t = Qt();
  return qe === null ? t.memoizedState = e : Iw(t, qe.memoizedState, e);
}, useTransition: function() {
  var e = kf(es)[0], t = Qt().memoizedState;
  return [e, t];
}, useMutableSource: yw, useSyncExternalStore: xw, useId: Ow, unstable_isNewReconciler: !1 };
function yi(e, t) {
  try {
    var n = "", r = t;
    do
      n += mE(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Cf(e, t, n) {
  return { value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null };
}
function lp(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var H$ = typeof WeakMap == "function" ? WeakMap : Map;
function Lw(e, t, n) {
  n = zn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    wu || (wu = !0, gp = r), lp(e, t);
  }, n;
}
function Fw(e, t, n) {
  n = zn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      lp(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    lp(e, t), typeof r != "function" && (Pr === null ? Pr = /* @__PURE__ */ new Set([this]) : Pr.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function E0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new H$();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = n5.bind(null, e, t, n), t.then(e, e));
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
var V$ = Kn.ReactCurrentOwner, wt = !1;
function ft(e, t, n, r) {
  t.child = e === null ? gw(t, null, n, r) : gi(t, e.child, n, r);
}
function P0(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return ri(t, o), r = im(e, t, n, r, i, o), n = lm(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Un(e, t, o)) : (Re && n && Qh(t), t.flags |= 1, ft(e, t, r, o), t.child);
}
function _0(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !gm(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, zw(e, t, i, r, o)) : (e = Va(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, (e.lanes & o) === 0) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ql, n(l, r) && e.ref === t.ref)
      return Un(e, t, o);
  }
  return t.flags |= 1, e = Rr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function zw(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ql(i, r) && e.ref === t.ref)
      if (wt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        (e.flags & 131072) !== 0 && (wt = !0);
      else
        return t.lanes = e.lanes, Un(e, t, o);
  }
  return sp(e, t, n, r, o);
}
function Bw(e, t, n) {
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
function jw(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function sp(e, t, n, r, o) {
  var i = St(n) ? so : lt.current;
  return i = hi(t, i), ri(t, o), n = im(e, t, n, r, i, o), r = lm(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Un(e, t, o)) : (Re && r && Qh(t), t.flags |= 1, ft(e, t, n, o), t.child);
}
function R0(e, t, n, r, o) {
  if (St(n)) {
    var i = !0;
    cu(t);
  } else
    i = !1;
  if (ri(t, o), t.stateNode === null)
    Ba(e, t), hw(t, n, r), ip(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var a = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = qt(u) : (u = St(n) ? so : lt.current, u = hi(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && b0(t, l, r, u), pr = !1;
    var d = t.memoizedState;
    l.state = d, mu(t, r, l, o), a = t.memoizedState, s !== r || d !== a || bt.current || pr ? (typeof c == "function" && (op(t, n, c, r), a = t.memoizedState), (s = pr || w0(t, n, s, r, d, a, u)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, dw(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : en(t.type, s), l.props = u, f = t.pendingProps, d = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = qt(a) : (a = St(n) ? so : lt.current, a = hi(t, a));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== f || d !== a) && b0(t, l, r, a), pr = !1, d = t.memoizedState, l.state = d, mu(t, r, l, o);
    var h = t.memoizedState;
    s !== f || d !== h || bt.current || pr ? (typeof g == "function" && (op(t, n, g, r), h = t.memoizedState), (u = pr || w0(t, n, u, r, d, h, a) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, h, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, h, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), l.props = r, l.state = h, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ap(e, t, n, r, i, o);
}
function ap(e, t, n, r, o, i) {
  jw(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
    return o && m0(t, n, !1), Un(e, t, i);
  r = t.stateNode, V$.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = gi(t, e.child, null, i), t.child = gi(t, null, s, i)) : ft(e, t, s, i), t.memoizedState = r.state, o && m0(t, n, !0), t.child;
}
function Hw(e) {
  var t = e.stateNode;
  t.pendingContext ? h0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && h0(e, t.context, !1), tm(e, t.containerInfo);
}
function T0(e, t, n, r, o) {
  return mi(), Kh(o), t.flags |= 256, ft(e, t, n, r), t.child;
}
var up = { dehydrated: null, treeContext: null, retryLane: 0 };
function cp(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Vw(e, t, n) {
  var r = t.pendingProps, o = Te.current, i = !1, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Ee(Te, o & 1), e === null)
    return np(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = uc(l, r, 0, null), e = oo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = cp(n), t.memoizedState = up, e) : um(t, l));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return U$(e, t, l, r, s, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, s = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return (l & 1) === 0 && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Rr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = Rr(s, i) : (i = oo(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? cp(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = up, r;
  }
  return i = e.child, e = i.sibling, r = Rr(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function um(e, t) {
  return t = uc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function aa(e, t, n, r) {
  return r !== null && Kh(r), gi(t, e.child, null, n), e = um(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function U$(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Cf(Error(j(422))), aa(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = uc({ mode: "visible", children: r.children }, o, 0, null), i = oo(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && gi(t, e.child, null, l), t.child.memoizedState = cp(l), t.memoizedState = up, i);
  if ((t.mode & 1) === 0)
    return aa(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, i = Error(j(419)), r = Cf(i, r, void 0), aa(e, t, l, r);
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
      o = (o & (r.suspendedLanes | l)) !== 0 ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Vn(e, o), cn(r, e, o, -1));
    }
    return mm(), r = Cf(Error(j(421))), aa(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = r5.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, $t = $r(o.nextSibling), _t = t, Re = !0, nn = null, e !== null && (Dt[Lt++] = Ln, Dt[Lt++] = Fn, Dt[Lt++] = ao, Ln = e.id, Fn = e.overflow, ao = t), t = um(t, r.children), t.flags |= 4096, t);
}
function I0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), rp(e.return, t, n);
}
function Ef(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Uw(e, t, n) {
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
          e = n.alternate, e !== null && gu(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ef(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && gu(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Ef(t, !0, n, null, i);
        break;
      case "together":
        Ef(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ba(e, t) {
  (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Un(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), co |= t.lanes, (n & t.childLanes) === 0)
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
function W$(e, t, n) {
  switch (t.tag) {
    case 3:
      Hw(t), mi();
      break;
    case 5:
      vw(t);
      break;
    case 1:
      St(t.type) && cu(t);
      break;
    case 4:
      tm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Ee(pu, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Ee(Te, Te.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Vw(e, t, n) : (Ee(Te, Te.current & 1), e = Un(e, t, n), e !== null ? e.sibling : null);
      Ee(Te, Te.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
        if (r)
          return Uw(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ee(Te, Te.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Bw(e, t, n);
  }
  return Un(e, t, n);
}
var Ww, fp, qw, Qw;
Ww = function(e, t) {
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
fp = function() {
};
qw = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, no(kn.current);
    var i = null;
    switch (n) {
      case "input":
        o = Od(e, o), r = Od(e, r), i = [];
        break;
      case "select":
        o = Oe({}, o, { value: void 0 }), r = Oe({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Dd(e, o), r = Dd(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = au);
    }
    Fd(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (l in s)
            s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Bl.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Bl.hasOwnProperty(u) ? (a != null && u === "onScroll" && $e("scroll", e), i || s === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Qw = function(e, t, n, r) {
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
function q$(e, t, n) {
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
      return St(t.type) && uu(), nt(t), null;
    case 3:
      return r = t.stateNode, vi(), Pe(bt), Pe(lt), rm(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (la(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, nn !== null && (xp(nn), nn = null))), fp(e, t), nt(t), null;
    case 5:
      nm(t);
      var o = no(Zl.current);
      if (n = t.type, e !== null && t.stateNode != null)
        qw(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(j(166));
          return nt(t), null;
        }
        if (e = no(kn.current), la(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[bn] = t, r[Yl] = i, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < dl.length; o++)
                $e(dl[o], r);
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
              Vg(r, i), $e("invalid", r);
          }
          Fd(n, i), o = null;
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && ia(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && ia(
                r.textContent,
                s,
                e
              ), o = ["children", "" + s]) : Bl.hasOwnProperty(l) && s != null && l === "onScroll" && $e("scroll", r);
            }
          switch (n) {
            case "input":
              Xs(r), Hg(r, i, !0);
              break;
            case "textarea":
              Xs(r), Ug(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = au);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = wx(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[bn] = t, e[Yl] = r, Ww(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = zd(n, r), n) {
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
                for (o = 0; o < dl.length; o++)
                  $e(dl[o], e);
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
                jg(e, r), o = Od(e, r), $e("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Oe({}, r, { value: void 0 }), $e("invalid", e);
                break;
              case "textarea":
                Vg(e, r), o = Dd(e, r), $e("invalid", e);
                break;
              default:
                o = r;
            }
            Fd(n, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style" ? kx(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && bx(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && jl(e, a) : typeof a == "number" && jl(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Bl.hasOwnProperty(i) ? a != null && i === "onScroll" && $e("scroll", e) : a != null && Oh(e, i, a, l));
              }
            switch (n) {
              case "input":
                Xs(e), Hg(e, r, !1);
                break;
              case "textarea":
                Xs(e), Ug(e);
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
                typeof o.onClick == "function" && (e.onclick = au);
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
        Qw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(j(166));
        if (n = no(Zl.current), no(kn.current), la(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[bn] = t, (i = r.nodeValue !== n) && (e = _t, e !== null))
            switch (e.tag) {
              case 3:
                ia(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ia(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[bn] = t, t.stateNode = r;
      }
      return nt(t), null;
    case 13:
      if (Pe(Te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Re && $t !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          cw(), mi(), t.flags |= 98560, i = !1;
        else if (i = la(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(j(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(j(317));
            i[bn] = t;
          } else
            mi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
          nt(t), i = !1;
        } else
          nn !== null && (xp(nn), nn = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Te.current & 1) !== 0 ? Qe === 0 && (Qe = 3) : mm())), t.updateQueue !== null && (t.flags |= 4), nt(t), null);
    case 4:
      return vi(), fp(e, t), e === null && Gl(t.stateNode.containerInfo), nt(t), null;
    case 10:
      return Zh(t.type._context), nt(t), null;
    case 17:
      return St(t.type) && uu(), nt(t), null;
    case 19:
      if (Pe(Te), i = t.memoizedState, i === null)
        return nt(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null)
        if (r)
          Ki(i, !1);
        else {
          if (Qe !== 0 || e !== null && (e.flags & 128) !== 0)
            for (e = t.child; e !== null; ) {
              if (l = gu(e), l !== null) {
                for (t.flags |= 128, Ki(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return Ee(Te, Te.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Fe() > xi && (t.flags |= 128, r = !0, Ki(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = gu(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ki(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !Re)
              return nt(t), null;
          } else
            2 * Fe() - i.renderingStartTime > xi && n !== 1073741824 && (t.flags |= 128, r = !0, Ki(i, !1), t.lanes = 4194304);
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
function Q$(e, t) {
  switch (Gh(t), t.tag) {
    case 1:
      return St(t.type) && uu(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return vi(), Pe(bt), Pe(lt), rm(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return nm(t), null;
    case 13:
      if (Pe(Te), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(j(340));
        mi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Pe(Te), null;
    case 4:
      return vi(), null;
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
var ua = !1, rt = !1, G$ = typeof WeakSet == "function" ? WeakSet : Set, Y = null;
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
function dp(e, t, n) {
  try {
    n();
  } catch (r) {
    Ne(e, t, r);
  }
}
var O0 = !1;
function K$(e, t) {
  if (Kd = iu, e = Xx(), qh(e)) {
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
  for (Yd = { focusedElem: e, selectionRange: n }, iu = !1, Y = t; Y !== null; )
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
function kl(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && dp(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function sc(e, t) {
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
function pp(e) {
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
function Gw(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Gw(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[bn], delete t[Yl], delete t[Jd], delete t[T$], delete t[I$])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Kw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function N0(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Kw(e.return))
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
function hp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = au));
  else if (r !== 4 && (e = e.child, e !== null))
    for (hp(e, t, n), e = e.sibling; e !== null; )
      hp(e, t, n), e = e.sibling;
}
function mp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (mp(e, t, n), e = e.sibling; e !== null; )
      mp(e, t, n), e = e.sibling;
}
var Xe = null, tn = !1;
function lr(e, t, n) {
  for (n = n.child; n !== null; )
    Yw(e, t, n), n = n.sibling;
}
function Yw(e, t, n) {
  if (Sn && typeof Sn.onCommitFiberUnmount == "function")
    try {
      Sn.onCommitFiberUnmount(Ju, n);
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
      Xe !== null && (tn ? (e = Xe, n = n.stateNode, e.nodeType === 8 ? yf(e.parentNode, n) : e.nodeType === 1 && yf(e, n), Wl(e)) : yf(Xe, n.stateNode));
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
          i = i.tag, l !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && dp(n, t, l), o = o.next;
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
    n === null && (n = e.stateNode = new G$()), t.forEach(function(r) {
      var o = o5.bind(null, e, r);
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
        Yw(i, l, o), Xe = null, tn = !1;
        var a = o.alternate;
        a !== null && (a.return = null), o.return = null;
      } catch (u) {
        Ne(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Xw(t, e), t = t.sibling;
}
function Xw(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Xt(t, e), gn(e), r & 4) {
        try {
          kl(3, e, e.return), sc(3, e);
        } catch (v) {
          Ne(e, e.return, v);
        }
        try {
          kl(5, e, e.return);
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
          jl(o, "");
        } catch (v) {
          Ne(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && yx(o, i), zd(s, l);
            var u = zd(s, i);
            for (l = 0; l < a.length; l += 2) {
              var c = a[l], f = a[l + 1];
              c === "style" ? kx(o, f) : c === "dangerouslySetInnerHTML" ? bx(o, f) : c === "children" ? jl(o, f) : Oh(o, c, f, u);
            }
            switch (s) {
              case "input":
                Nd(o, i);
                break;
              case "textarea":
                xx(o, i);
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
            o[Yl] = i;
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
          Wl(t.containerInfo);
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
                  kl(4, d, d.return);
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
                  o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = f.stateNode, a = f.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Sx("display", l));
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
          if (Kw(n)) {
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
          r.flags & 32 && (jl(o, ""), r.flags &= -33);
          var i = N0(e);
          mp(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = N0(e);
          hp(e, s, l);
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
function Y$(e, t, n) {
  Y = e, Zw(e);
}
function Zw(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Y !== null; ) {
    var o = Y, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || ua;
      if (!l) {
        var s = o.alternate, a = s !== null && s.memoizedState !== null || rt;
        s = ua;
        var u = rt;
        if (ua = l, (rt = a) && !u)
          for (Y = o; Y !== null; )
            l = Y, a = l.child, l.tag === 22 && l.memoizedState !== null ? F0(o) : a !== null ? (a.return = l, Y = a) : F0(o);
        for (; i !== null; )
          Y = i, Zw(i), i = i.sibling;
        Y = o, ua = s, rt = u;
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
              rt || sc(5, t);
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
                    f !== null && Wl(f);
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
        rt || t.flags & 512 && pp(t);
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
            sc(4, t);
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
            pp(t);
          } catch (a) {
            Ne(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            pp(t);
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
var X$ = Math.ceil, xu = Kn.ReactCurrentDispatcher, cm = Kn.ReactCurrentOwner, Wt = Kn.ReactCurrentBatchConfig, ge = 0, Ye = null, Ve = null, Je = 0, Et = 0, Yo = Lr(0), Qe = 0, ns = null, co = 0, ac = 0, fm = 0, Cl = null, xt = null, dm = 0, xi = 1 / 0, In = null, wu = !1, gp = null, Pr = null, ca = !1, vr = null, bu = 0, El = 0, vp = null, ja = -1, Ha = 0;
function pt() {
  return (ge & 6) !== 0 ? Fe() : ja !== -1 ? ja : ja = Fe();
}
function _r(e) {
  return (e.mode & 1) === 0 ? 1 : (ge & 2) !== 0 && Je !== 0 ? Je & -Je : N$.transition !== null ? (Ha === 0 && (Ha = Mx()), Ha) : (e = be, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Hx(e.type)), e);
}
function cn(e, t, n, r) {
  if (50 < El)
    throw El = 0, vp = null, Error(j(185));
  Rs(e, n, r), ((ge & 2) === 0 || e !== Ye) && (e === Ye && ((ge & 2) === 0 && (ac |= n), Qe === 4 && mr(e, Je)), kt(e, r), n === 1 && ge === 0 && (t.mode & 1) === 0 && (xi = Fe() + 500, oc && Fr()));
}
function kt(e, t) {
  var n = e.callbackNode;
  NE(e, t);
  var r = ou(e, e === Ye ? Je : 0);
  if (r === 0)
    n !== null && Qg(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Qg(n), t === 1)
      e.tag === 0 ? O$(z0.bind(null, e)) : sw(z0.bind(null, e)), _$(function() {
        (ge & 6) === 0 && Fr();
      }), n = null;
    else {
      switch (Dx(r)) {
        case 1:
          n = Fh;
          break;
        case 4:
          n = Ox;
          break;
        case 16:
          n = ru;
          break;
        case 536870912:
          n = Nx;
          break;
        default:
          n = ru;
      }
      n = lb(n, Jw.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Jw(e, t) {
  if (ja = -1, Ha = 0, (ge & 6) !== 0)
    throw Error(j(327));
  var n = e.callbackNode;
  if (oi() && e.callbackNode !== n)
    return null;
  var r = ou(e, e === Ye ? Je : 0);
  if (r === 0)
    return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t)
    t = Su(e, r);
  else {
    t = r;
    var o = ge;
    ge |= 2;
    var i = tb();
    (Ye !== e || Je !== t) && (In = null, xi = Fe() + 500, ro(e, t));
    do
      try {
        e5();
        break;
      } catch (s) {
        eb(e, s);
      }
    while (1);
    Xh(), xu.current = i, ge = o, Ve !== null ? t = 0 : (Ye = null, Je = 0, t = Qe);
  }
  if (t !== 0) {
    if (t === 2 && (o = Ud(e), o !== 0 && (r = o, t = yp(e, o))), t === 1)
      throw n = ns, ro(e, 0), mr(e, r), kt(e, Fe()), n;
    if (t === 6)
      mr(e, r);
    else {
      if (o = e.current.alternate, (r & 30) === 0 && !Z$(o) && (t = Su(e, r), t === 2 && (i = Ud(e), i !== 0 && (r = i, t = yp(e, i))), t === 1))
        throw n = ns, ro(e, 0), mr(e, r), kt(e, Fe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          qr(e, xt, In);
          break;
        case 3:
          if (mr(e, r), (r & 130023424) === r && (t = dm + 500 - Fe(), 10 < t)) {
            if (ou(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              pt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Zd(qr.bind(null, e, xt, In), t);
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
          if (r = o, r = Fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * X$(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Zd(qr.bind(null, e, xt, In), r);
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
  return kt(e, Fe()), e.callbackNode === n ? Jw.bind(null, e) : null;
}
function yp(e, t) {
  var n = Cl;
  return e.current.memoizedState.isDehydrated && (ro(e, t).flags |= 256), e = Su(e, t), e !== 2 && (t = xt, xt = n, t !== null && xp(t)), e;
}
function xp(e) {
  xt === null ? xt = e : xt.push.apply(xt, e);
}
function Z$(e) {
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
  for (t &= ~fm, t &= ~ac, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - un(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function z0(e) {
  if ((ge & 6) !== 0)
    throw Error(j(327));
  oi();
  var t = ou(e, 0);
  if ((t & 1) === 0)
    return kt(e, Fe()), null;
  var n = Su(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ud(e);
    r !== 0 && (t = r, n = yp(e, r));
  }
  if (n === 1)
    throw n = ns, ro(e, 0), mr(e, t), kt(e, Fe()), n;
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
    ge = n, ge === 0 && (xi = Fe() + 500, oc && Fr());
  }
}
function fo(e) {
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
  if (n !== -1 && (e.timeoutHandle = -1, P$(n)), Ve !== null)
    for (n = Ve.return; n !== null; ) {
      var r = n;
      switch (Gh(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && uu();
          break;
        case 3:
          vi(), Pe(bt), Pe(lt), rm();
          break;
        case 5:
          nm(r);
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
          Zh(r.type._context);
          break;
        case 22:
        case 23:
          hm();
      }
      n = n.return;
    }
  if (Ye = e, Ve = e = Rr(e.current, null), Je = Et = t, Qe = 0, ns = null, fm = ac = co = 0, xt = Cl = null, to !== null) {
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
function eb(e, t) {
  do {
    var n = Ve;
    try {
      if (Xh(), Fa.current = yu, vu) {
        for (var r = Ie.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        vu = !1;
      }
      if (uo = 0, Ge = qe = Ie = null, Sl = !1, Jl = 0, cm.current = null, n === null || n.return === null) {
        Qe = 1, ns = t, Ve = null;
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
            (w.flags & 65536) === 0 && (w.flags |= 256), A0(w, l, s, i, t), Kh(yi(a, s));
            break e;
          }
        }
        i = a = yi(a, s), Qe !== 4 && (Qe = 2), Cl === null ? Cl = [i] : Cl.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = Lw(i, a, t);
              y0(i, p);
              break e;
            case 1:
              s = a;
              var y = i.type, x = i.stateNode;
              if ((i.flags & 128) === 0 && (typeof y.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Pr === null || !Pr.has(x)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var b = Fw(i, s, t);
                y0(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      rb(n);
    } catch (A) {
      t = A, Ve === n && n !== null && (Ve = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function tb() {
  var e = xu.current;
  return xu.current = yu, e === null ? yu : e;
}
function mm() {
  (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4), Ye === null || (co & 268435455) === 0 && (ac & 268435455) === 0 || mr(Ye, Je);
}
function Su(e, t) {
  var n = ge;
  ge |= 2;
  var r = tb();
  (Ye !== e || Je !== t) && (In = null, ro(e, t));
  do
    try {
      J$();
      break;
    } catch (o) {
      eb(e, o);
    }
  while (1);
  if (Xh(), ge = n, xu.current = r, Ve !== null)
    throw Error(j(261));
  return Ye = null, Je = 0, Qe;
}
function J$() {
  for (; Ve !== null; )
    nb(Ve);
}
function e5() {
  for (; Ve !== null && !EE(); )
    nb(Ve);
}
function nb(e) {
  var t = ib(e.alternate, e, Et);
  e.memoizedProps = e.pendingProps, t === null ? rb(e) : Ve = t, cm.current = null;
}
function rb(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, (t.flags & 32768) === 0) {
      if (n = q$(n, t, Et), n !== null) {
        Ve = n;
        return;
      }
    } else {
      if (n = Q$(n, t), n !== null) {
        n.flags &= 32767, Ve = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Qe = 6, Ve = null;
        return;
      }
    }
    if (t = t.sibling, t !== null) {
      Ve = t;
      return;
    }
    Ve = t = e;
  } while (t !== null);
  Qe === 0 && (Qe = 5);
}
function qr(e, t, n) {
  var r = be, o = Wt.transition;
  try {
    Wt.transition = null, be = 1, t5(e, t, n, r);
  } finally {
    Wt.transition = o, be = r;
  }
  return null;
}
function t5(e, t, n, r) {
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
  if (ME(e, i), e === Ye && (Ve = Ye = null, Je = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ca || (ca = !0, lb(ru, function() {
    return oi(), null;
  })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
    i = Wt.transition, Wt.transition = null;
    var l = be;
    be = 1;
    var s = ge;
    ge |= 4, cm.current = null, K$(e, n), Xw(n, e), b$(Yd), iu = !!Kd, Yd = Kd = null, e.current = n, Y$(n), $E(), ge = s, be = l, Wt.transition = i;
  } else
    e.current = n;
  if (ca && (ca = !1, vr = e, bu = o), i = e.pendingLanes, i === 0 && (Pr = null), _E(n.stateNode), kt(e, Fe()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (wu)
    throw wu = !1, e = gp, gp = null, e;
  return (bu & 1) !== 0 && e.tag !== 0 && oi(), i = e.pendingLanes, (i & 1) !== 0 ? e === vp ? El++ : (El = 0, vp = e) : El = 0, Fr(), null;
}
function oi() {
  if (vr !== null) {
    var e = Dx(bu), t = Wt.transition, n = be;
    try {
      if (Wt.transition = null, be = 16 > e ? 16 : e, vr === null)
        var r = !1;
      else {
        if (e = vr, vr = null, bu = 0, (ge & 6) !== 0)
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
                      kl(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null)
                    f.return = c, Y = f;
                  else
                    for (; Y !== null; ) {
                      c = Y;
                      var d = c.sibling, g = c.return;
                      if (Gw(c), c === u) {
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
                      kl(9, i, i.return);
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
                        sc(9, s);
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
            Sn.onPostCommitFiberRoot(Ju, e);
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
  t = yi(n, t), t = Lw(e, t, 1), e = Ar(e, t, 1), t = pt(), e !== null && (Rs(e, 1, t), kt(e, t));
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
          e = yi(n, e), e = Fw(t, e, 1), t = Ar(t, e, 1), e = pt(), t !== null && (Rs(t, 1, e), kt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function n5(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = pt(), e.pingedLanes |= e.suspendedLanes & n, Ye === e && (Je & n) === n && (Qe === 4 || Qe === 3 && (Je & 130023424) === Je && 500 > Fe() - dm ? ro(e, 0) : fm |= n), kt(e, t);
}
function ob(e, t) {
  t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ea, ea <<= 1, (ea & 130023424) === 0 && (ea = 4194304)));
  var n = pt();
  e = Vn(e, t), e !== null && (Rs(e, t, n), kt(e, n));
}
function r5(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ob(e, n);
}
function o5(e, t) {
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
  r !== null && r.delete(t), ob(e, n);
}
var ib;
ib = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || bt.current)
      wt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return wt = !1, W$(e, t, n);
      wt = (e.flags & 131072) !== 0;
    }
  else
    wt = !1, Re && (t.flags & 1048576) !== 0 && aw(t, du, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ba(e, t), e = t.pendingProps;
      var o = hi(t, lt.current);
      ri(t, n), o = im(null, t, r, e, o, n);
      var i = lm();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, St(r) ? (i = !0, cu(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, em(t), o.updater = ic, t.stateNode = o, o._reactInternals = t, ip(t, r, e, n), t = ap(null, t, r, !0, i, n)) : (t.tag = 0, Re && i && Qh(t), ft(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ba(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = l5(r), e = en(r, e), o) {
          case 0:
            t = sp(null, t, r, e, n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : en(r, o), sp(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : en(r, o), R0(e, t, r, o, n);
    case 3:
      e: {
        if (Hw(t), e === null)
          throw Error(j(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, dw(e, t), mu(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = yi(Error(j(423)), t), t = T0(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = yi(Error(j(424)), t), t = T0(e, t, r, n, o);
            break e;
          } else
            for ($t = $r(t.stateNode.containerInfo.firstChild), _t = t, Re = !0, nn = null, n = gw(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (mi(), r === o) {
            t = Un(e, t, n);
            break e;
          }
          ft(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return vw(t), e === null && np(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, Xd(r, o) ? l = null : i !== null && Xd(r, i) && (t.flags |= 32), jw(e, t), ft(e, t, l, n), t.child;
    case 6:
      return e === null && np(t), null;
    case 13:
      return Vw(e, t, n);
    case 4:
      return tm(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = gi(t, null, r, n) : ft(e, t, r, n), t.child;
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
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, Ee(pu, r._currentValue), r._currentValue = l, i !== null)
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
                    i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), rp(
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
                l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), rp(l, n, t), l = i.sibling;
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
      return zw(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : en(r, o), Ba(e, t), t.tag = 1, St(r) ? (e = !0, cu(t)) : e = !1, ri(t, n), hw(t, r, o), ip(t, r, o, n), ap(null, t, r, !0, e, n);
    case 19:
      return Uw(e, t, n);
    case 22:
      return Bw(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function lb(e, t) {
  return Ix(e, t);
}
function i5(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ut(e, t, n, r) {
  return new i5(e, t, n, r);
}
function gm(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function l5(e) {
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
        case _d:
          return e = Ut(12, n, t, o | 2), e.elementType = _d, e.lanes = i, e;
        case Rd:
          return e = Ut(13, n, t, o), e.elementType = Rd, e.lanes = i, e;
        case Td:
          return e = Ut(19, n, t, o), e.elementType = Td, e.lanes = i, e;
        case mx:
          return uc(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case px:
                l = 10;
                break e;
              case hx:
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
function uc(e, t, n, r) {
  return e = Ut(22, e, r, t), e.elementType = mx, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function $f(e, t, n) {
  return e = Ut(6, e, null, t), e.lanes = n, e;
}
function Af(e, t, n) {
  return t = Ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function s5(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = sf(0), this.expirationTimes = sf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = sf(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function vm(e, t, n, r, o, i, l, s, a) {
  return e = new s5(e, t, n, s, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ut(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, em(i), e;
}
function a5(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: zo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function sb(e) {
  if (!e)
    return Nr;
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
      return lw(e, n, t);
  }
  return t;
}
function ab(e, t, n, r, o, i, l, s, a) {
  return e = vm(n, r, !0, e, o, i, l, s, a), e.context = sb(null), n = e.current, r = pt(), o = _r(n), i = zn(r, o), i.callback = t != null ? t : null, Ar(n, i, o), e.current.lanes = o, Rs(e, o, r), kt(e, r), e;
}
function cc(e, t, n, r) {
  var o = t.current, i = pt(), l = _r(o);
  return n = sb(n), t.context === null ? t.context = n : t.pendingContext = n, t = zn(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ar(o, t, l), e !== null && (cn(e, o, l, i), La(e, o, l)), l;
}
function ku(e) {
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
function u5() {
  return null;
}
var ub = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function xm(e) {
  this._internalRoot = e;
}
fc.prototype.render = xm.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(j(409));
  cc(e, t, null, null);
};
fc.prototype.unmount = xm.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    fo(function() {
      cc(null, e, null, null);
    }), t[Hn] = null;
  }
};
function fc(e) {
  this._internalRoot = e;
}
fc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = zx();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < hr.length && t !== 0 && t < hr[n].priority; n++)
      ;
    hr.splice(n, 0, e), n === 0 && jx(e);
  }
};
function wm(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function dc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function H0() {
}
function c5(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = ku(l);
        i.call(u);
      };
    }
    var l = ab(t, r, e, 0, null, !1, !1, "", H0);
    return e._reactRootContainer = l, e[Hn] = l.current, Gl(e.nodeType === 8 ? e.parentNode : e), fo(), l;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = ku(a);
      s.call(u);
    };
  }
  var a = vm(e, 0, !1, null, null, !1, !1, "", H0);
  return e._reactRootContainer = a, e[Hn] = a.current, Gl(e.nodeType === 8 ? e.parentNode : e), fo(function() {
    cc(t, a, n, r);
  }), a;
}
function pc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var a = ku(l);
        s.call(a);
      };
    }
    cc(t, l, e, o);
  } else
    l = c5(n, t, e, o, r);
  return ku(l);
}
Lx = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = fl(t.pendingLanes);
        n !== 0 && (zh(t, n | 1), kt(t, Fe()), (ge & 6) === 0 && (xi = Fe() + 500, Fr()));
      }
      break;
    case 13:
      fo(function() {
        var r = Vn(e, 1);
        if (r !== null) {
          var o = pt();
          cn(r, e, 1, o);
        }
      }), ym(e, 1);
  }
};
Bh = function(e) {
  if (e.tag === 13) {
    var t = Vn(e, 134217728);
    if (t !== null) {
      var n = pt();
      cn(t, e, 134217728, n);
    }
    ym(e, 134217728);
  }
};
Fx = function(e) {
  if (e.tag === 13) {
    var t = _r(e), n = Vn(e, t);
    if (n !== null) {
      var r = pt();
      cn(n, e, t, r);
    }
    ym(e, t);
  }
};
zx = function() {
  return be;
};
Bx = function(e, t) {
  var n = be;
  try {
    return be = e, t();
  } finally {
    be = n;
  }
};
jd = function(e, t, n) {
  switch (t) {
    case "input":
      if (Nd(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = rc(r);
            if (!o)
              throw Error(j(90));
            vx(r), Nd(r, o);
          }
        }
      }
      break;
    case "textarea":
      xx(e, n);
      break;
    case "select":
      t = n.value, t != null && Jo(e, !!n.multiple, t, !1);
  }
};
$x = pm;
Ax = fo;
var f5 = { usingClientEntryPoint: !1, Events: [Is, Uo, rc, Cx, Ex, pm] }, Yi = { findFiberByHostInstance: eo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, d5 = { bundleType: Yi.bundleType, version: Yi.version, rendererPackageName: Yi.rendererPackageName, rendererConfig: Yi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Kn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Rx(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Yi.findFiberByHostInstance || u5, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var fa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fa.isDisabled && fa.supportsFiber)
    try {
      Ju = fa.inject(d5), Sn = fa;
    } catch {
    }
}
It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = f5;
It.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!wm(t))
    throw Error(j(200));
  return a5(e, t, null, n);
};
It.createRoot = function(e, t) {
  if (!wm(e))
    throw Error(j(299));
  var n = !1, r = "", o = ub;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = vm(e, 1, !1, null, null, n, !1, r, o), e[Hn] = t.current, Gl(e.nodeType === 8 ? e.parentNode : e), new xm(t);
};
It.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e)));
  return e = Rx(t), e = e === null ? null : e.stateNode, e;
};
It.flushSync = function(e) {
  return fo(e);
};
It.hydrate = function(e, t, n) {
  if (!dc(t))
    throw Error(j(200));
  return pc(null, e, t, !0, n);
};
It.hydrateRoot = function(e, t, n) {
  if (!wm(e))
    throw Error(j(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = ub;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = ab(t, null, e, 1, n != null ? n : null, o, !1, i, l), e[Hn] = t.current, Gl(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new fc(t);
};
It.render = function(e, t, n) {
  if (!dc(t))
    throw Error(j(200));
  return pc(null, e, t, !1, n);
};
It.unmountComponentAtNode = function(e) {
  if (!dc(e))
    throw Error(j(40));
  return e._reactRootContainer ? (fo(function() {
    pc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Hn] = null;
    });
  }), !0) : !1;
};
It.unstable_batchedUpdates = pm;
It.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!dc(n))
    throw Error(j(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(j(38));
  return pc(e, t, n, !1, r);
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
const cb = /* @__PURE__ */ kh(hn.exports), wi = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = m.exports.Children.toArray(n), i = o.find(h5);
  if (i) {
    const l = i.props.children, s = o.map((a) => a === i ? m.exports.Children.count(l) > 1 ? m.exports.Children.only(null) : /* @__PURE__ */ m.exports.isValidElement(l) ? l.props.children : null : a);
    return /* @__PURE__ */ m.exports.createElement(wp, G({}, r, {
      ref: t
    }), /* @__PURE__ */ m.exports.isValidElement(l) ? /* @__PURE__ */ m.exports.cloneElement(l, void 0, s) : null);
  }
  return /* @__PURE__ */ m.exports.createElement(wp, G({}, r, {
    ref: t
  }), n);
});
wi.displayName = "Slot";
const wp = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ m.exports.isValidElement(n) ? /* @__PURE__ */ m.exports.cloneElement(n, {
    ...m5(r, n.props),
    ref: Rh(t, n.ref)
  }) : m.exports.Children.count(n) > 1 ? m.exports.Children.only(null) : null;
});
wp.displayName = "SlotClone";
const p5 = ({ children: e }) => /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, e);
function h5(e) {
  return /* @__PURE__ */ m.exports.isValidElement(e) && e.type === p5;
}
function m5(e, t) {
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
const g5 = [
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
], Ue = g5.reduce((e, t) => {
  const n = /* @__PURE__ */ m.exports.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, s = i ? wi : t;
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
function v5(e, t) {
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
function y5(e, t = globalThis == null ? void 0 : globalThis.document) {
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
const bp = "dismissableLayer.update", x5 = "dismissableLayer.pointerDownOutside", w5 = "dismissableLayer.focusOutside";
let V0;
const b5 = /* @__PURE__ */ m.exports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), bm = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: i, onFocusOutside: l, onInteractOutside: s, onDismiss: a, ...u } = e, c = m.exports.useContext(b5), [f, d] = m.exports.useState(null), g = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = m.exports.useState({}), v = xe(
    t,
    (E) => d(E)
  ), w = Array.from(c.layers), [p] = [
    ...c.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = w.indexOf(p), x = f ? w.indexOf(f) : -1, b = c.layersWithOutsidePointerEventsDisabled.size > 0, A = x >= y, S = S5((E) => {
    const P = E.target, T = [
      ...c.branches
    ].some(
      (R) => R.contains(P)
    );
    !A || T || (i == null || i(E), s == null || s(E), E.defaultPrevented || a == null || a());
  }, g), $ = k5((E) => {
    const P = E.target;
    [
      ...c.branches
    ].some(
      (R) => R.contains(P)
    ) || (l == null || l(E), s == null || s(E), E.defaultPrevented || a == null || a());
  }, g);
  return y5((E) => {
    x === c.layers.size - 1 && (o == null || o(E), !E.defaultPrevented && a && (E.preventDefault(), a()));
  }, g), m.exports.useEffect(() => {
    if (!!f)
      return r && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (V0 = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), U0(), () => {
        r && c.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = V0);
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
    return document.addEventListener(bp, E), () => document.removeEventListener(bp, E);
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
function S5(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e), r = m.exports.useRef(!1), o = m.exports.useRef(() => {
  });
  return m.exports.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let c = function() {
          fb(x5, n, u, {
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
function k5(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e), r = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && fb(w5, n, {
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
  const e = new CustomEvent(bp);
  document.dispatchEvent(e);
}
function fb(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? v5(o, i) : o.dispatchEvent(i);
}
let Pf = 0;
function hc() {
  m.exports.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : W0()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : W0()), Pf++, () => {
      Pf === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Pf--;
    };
  }, []);
}
function W0() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const _f = "focusScope.autoFocusOnMount", Rf = "focusScope.autoFocusOnUnmount", q0 = {
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
        const p = new CustomEvent(_f, q0);
        s.addEventListener(_f, u), s.dispatchEvent(p), p.defaultPrevented || (C5(_5(db(s)), {
          select: !0
        }), document.activeElement === v && Qr(s));
      }
      return () => {
        s.removeEventListener(_f, u), setTimeout(() => {
          const p = new CustomEvent(Rf, q0);
          s.addEventListener(Rf, c), s.dispatchEvent(p), p.defaultPrevented || Qr(v != null ? v : document.body, {
            select: !0
          }), s.removeEventListener(Rf, c), G0.remove(g);
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
      const y = v.currentTarget, [x, b] = E5(y);
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
function C5(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Qr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function E5(e) {
  const t = db(e), n = Q0(t, e), r = Q0(t.reverse(), e);
  return [
    n,
    r
  ];
}
function db(e) {
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
    if (!$5(n, {
      upTo: t
    }))
      return n;
}
function $5(e, { upTo: t }) {
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
function A5(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Qr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && A5(e) && t && e.select();
  }
}
const G0 = P5();
function P5() {
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
function _5(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Ze = Boolean(globalThis == null ? void 0 : globalThis.document) ? m.exports.useLayoutEffect : () => {
}, R5 = aE["useId".toString()] || (() => {
});
let T5 = 0;
function Bn(e) {
  const [t, n] = m.exports.useState(R5());
  return Ze(() => {
    e || n(
      (r) => r != null ? r : String(T5++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function wo(e) {
  return e.split("-")[0];
}
function Ns(e) {
  return e.split("-")[1];
}
function Ti(e) {
  return ["top", "bottom"].includes(wo(e)) ? "x" : "y";
}
function km(e) {
  return e === "y" ? "height" : "width";
}
function Y0(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = r.x + r.width / 2 - o.width / 2, l = r.y + r.height / 2 - o.height / 2, s = Ti(t), a = km(s), u = r[a] / 2 - o[a] / 2, c = wo(t), f = s === "x";
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
  switch (Ns(t)) {
    case "start":
      d[s] -= u * (n && f ? -1 : 1);
      break;
    case "end":
      d[s] += u * (n && f ? -1 : 1);
      break;
  }
  return d;
}
const I5 = async (e, t, n) => {
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
function O5(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function pb(e) {
  return typeof e != "number" ? O5(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Cu(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function rs(e, t) {
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
  } = t, h = pb(g), w = s[d ? f === "floating" ? "reference" : "floating" : f], p = Cu(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: a
  })), y = Cu(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const N5 = Math.min, Gr = Math.max;
function Sp(e, t, n) {
  return Gr(e, N5(t, n));
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
    const u = pb(r), c = {
      x: o,
      y: i
    }, f = Ti(l), d = Ns(l), g = km(f), h = await a.getDimensions(n), v = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", p = s.reference[g] + s.reference[f] - c[f] - s.floating[g], y = c[f] - s.reference[f], x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(n));
    let b = x ? f === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
    b === 0 && (b = s.floating[g]);
    const A = p / 2 - y / 2, S = u[v], $ = b - h[g] - u[w], E = b / 2 - h[g] / 2 + A, P = Sp(S, E, $), N = (d === "start" ? u[v] : u[w]) > 0 && E !== P && s.reference[g] <= s.floating[g] ? E < S ? S - E : $ - E : 0;
    return {
      [f]: c[f] - N,
      data: {
        [f]: P,
        centerOffset: E - P
      }
    };
  }
}), M5 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Eu(e) {
  return e.replace(/left|right|bottom|top/g, (t) => M5[t]);
}
function D5(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ns(e), o = Ti(e), i = km(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = Eu(l)), {
    main: l,
    cross: Eu(l)
  };
}
const L5 = {
  start: "end",
  end: "start"
};
function Z0(e) {
  return e.replace(/start|end/g, (t) => L5[t]);
}
const F5 = ["top", "right", "bottom", "left"];
function z5(e) {
  const t = Eu(e);
  return [Z0(e), t, Z0(t)];
}
const B5 = function(e) {
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
      } = e, v = wo(r), p = f || (v === l || !g ? [Eu(l)] : z5(l)), y = [l, ...p], x = await rs(t, h), b = [];
      let A = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (u && b.push(x[v]), c) {
        const {
          main: P,
          cross: T
        } = D5(r, i, await (s.isRTL == null ? void 0 : s.isRTL(a.floating)));
        b.push(x[P], x[T]);
      }
      if (A = [...A, {
        placement: r,
        overflows: b
      }], !b.every((P) => P <= 0)) {
        var S, $;
        const P = ((S = ($ = o.flip) == null ? void 0 : $.index) != null ? S : 0) + 1, T = y[P];
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
            var E;
            const N = (E = A.map((D) => [D, D.overflows.filter((z) => z > 0).reduce((z, F) => z + F, 0)]).sort((D, z) => D[1] - z[1])[0]) == null ? void 0 : E[0].placement;
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
function J0(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function e1(e) {
  return F5.some((t) => e[t] >= 0);
}
const j5 = function(e) {
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
          const i = await rs(r, {
            ...n,
            elementContext: "reference"
          }), l = J0(i, o.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: e1(l)
            }
          };
        }
        case "escaped": {
          const i = await rs(r, {
            ...n,
            altBoundary: !0
          }), l = J0(i, o.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: e1(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function H5(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = wo(n), s = Ns(n), a = Ti(n) === "x", u = ["left", "top"].includes(l) ? -1 : 1, c = i && a ? -1 : 1, f = typeof t == "function" ? t(e) : t;
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
const V5 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await H5(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
};
function hb(e) {
  return e === "x" ? "y" : "x";
}
const U5 = function(e) {
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
      }, c = await rs(t, a), f = Ti(wo(o)), d = hb(f);
      let g = u[f], h = u[d];
      if (i) {
        const w = f === "y" ? "top" : "left", p = f === "y" ? "bottom" : "right", y = g + c[w], x = g - c[p];
        g = Sp(y, g, x);
      }
      if (l) {
        const w = d === "y" ? "top" : "left", p = d === "y" ? "bottom" : "right", y = h + c[w], x = h - c[p];
        h = Sp(y, h, x);
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
}, W5 = function(e) {
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
      }, f = Ti(o), d = hb(f);
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
        const A = f === "y" ? "width" : "height", S = ["top", "left"].includes(wo(o)), $ = i.reference[d] - i.floating[A] + (S && (p = (y = l.offset) == null ? void 0 : y[d]) != null ? p : 0) + (S ? 0 : w.crossAxis), E = i.reference[d] + i.reference[A] + (S ? 0 : (x = (b = l.offset) == null ? void 0 : b[d]) != null ? x : 0) - (S ? w.crossAxis : 0);
        h < $ ? h = $ : h > E && (h = E);
      }
      return {
        [f]: g,
        [d]: h
      };
    }
  };
}, q5 = function(e) {
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
      } = e, a = await rs(t, s), u = wo(n), c = Ns(n);
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
function mb(e) {
  return e && e.document && e.location && e.alert && e.setInterval;
}
function Yn(e) {
  if (e == null)
    return window;
  if (!mb(e)) {
    const t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ms(e) {
  return Yn(e).getComputedStyle(e);
}
function Wn(e) {
  return mb(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function gb() {
  const e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map((t) => t.brand + "/" + t.version).join(" ") : navigator.userAgent;
}
function Cn(e) {
  return e instanceof Yn(e).HTMLElement;
}
function Mr(e) {
  return e instanceof Yn(e).Element;
}
function Q5(e) {
  return e instanceof Yn(e).Node;
}
function Cm(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Yn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function mc(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r
  } = Ms(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n);
}
function G5(e) {
  return ["table", "td", "th"].includes(Wn(e));
}
function vb(e) {
  const t = /firefox/i.test(gb()), n = Ms(e);
  return n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].includes(n.willChange) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1);
}
function yb() {
  return !/^((?!chrome|android).)*safari/i.test(gb());
}
const t1 = Math.min, $l = Math.max, $u = Math.round;
function qn(e, t, n) {
  var r, o, i, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect();
  let a = 1, u = 1;
  t && Cn(e) && (a = e.offsetWidth > 0 && $u(s.width) / e.offsetWidth || 1, u = e.offsetHeight > 0 && $u(s.height) / e.offsetHeight || 1);
  const c = Mr(e) ? Yn(e) : window, f = !yb() && n, d = (s.left + (f && (r = (o = c.visualViewport) == null ? void 0 : o.offsetLeft) != null ? r : 0)) / a, g = (s.top + (f && (i = (l = c.visualViewport) == null ? void 0 : l.offsetTop) != null ? i : 0)) / u, h = s.width / a, v = s.height / u;
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
  return ((Q5(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function gc(e) {
  return Mr(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function xb(e) {
  return qn(zr(e)).left + gc(e).scrollLeft;
}
function K5(e) {
  const t = qn(e);
  return $u(t.width) !== e.offsetWidth || $u(t.height) !== e.offsetHeight;
}
function Y5(e, t, n) {
  const r = Cn(t), o = zr(t), i = qn(
    e,
    r && K5(t),
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
    if ((Wn(t) !== "body" || mc(o)) && (l = gc(t)), Cn(t)) {
      const a = qn(t, !0);
      s.x = a.x + t.clientLeft, s.y = a.y + t.clientTop;
    } else
      o && (s.x = xb(o));
  return {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function wb(e) {
  return Wn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Cm(e) ? e.host : null) || zr(e);
}
function n1(e) {
  return !Cn(e) || getComputedStyle(e).position === "fixed" ? null : e.offsetParent;
}
function X5(e) {
  let t = wb(e);
  for (Cm(t) && (t = t.host); Cn(t) && !["html", "body"].includes(Wn(t)); ) {
    if (vb(t))
      return t;
    t = t.parentNode;
  }
  return null;
}
function kp(e) {
  const t = Yn(e);
  let n = n1(e);
  for (; n && G5(n) && getComputedStyle(n).position === "static"; )
    n = n1(n);
  return n && (Wn(n) === "html" || Wn(n) === "body" && getComputedStyle(n).position === "static" && !vb(n)) ? t : n || X5(e) || t;
}
function r1(e) {
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
function Z5(e) {
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
  if ((o || !o && r !== "fixed") && ((Wn(n) !== "body" || mc(i)) && (l = gc(n)), Cn(n))) {
    const a = qn(n, !0);
    s.x = a.x + n.clientLeft, s.y = a.y + n.clientTop;
  }
  return {
    ...t,
    x: t.x - l.scrollLeft + s.x,
    y: t.y - l.scrollTop + s.y
  };
}
function J5(e, t) {
  const n = Yn(e), r = zr(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, s = 0, a = 0;
  if (o) {
    i = o.width, l = o.height;
    const u = yb();
    (u || !u && t === "fixed") && (s = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s,
    y: a
  };
}
function eA(e) {
  var t;
  const n = zr(e), r = gc(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = $l(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = $l(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let s = -r.scrollLeft + xb(e);
  const a = -r.scrollTop;
  return Ms(o || n).direction === "rtl" && (s += $l(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: l,
    x: s,
    y: a
  };
}
function bb(e) {
  const t = wb(e);
  return ["html", "body", "#document"].includes(Wn(t)) ? e.ownerDocument.body : Cn(t) && mc(t) ? t : bb(t);
}
function Au(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = bb(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Yn(r), l = o ? [i].concat(i.visualViewport || [], mc(r) ? r : []) : r, s = t.concat(l);
  return o ? s : s.concat(Au(l));
}
function tA(e, t) {
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
function nA(e, t) {
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
function o1(e, t, n) {
  return t === "viewport" ? Cu(J5(e, n)) : Mr(t) ? nA(t, n) : Cu(eA(zr(e)));
}
function rA(e) {
  const t = Au(e), r = ["absolute", "fixed"].includes(Ms(e).position) && Cn(e) ? kp(e) : e;
  return Mr(r) ? t.filter((o) => Mr(o) && tA(o, r) && Wn(o) !== "body") : [];
}
function oA(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? rA(t) : [].concat(n), r], s = l[0], a = l.reduce((u, c) => {
    const f = o1(t, c, o);
    return u.top = $l(f.top, u.top), u.right = t1(f.right, u.right), u.bottom = t1(f.bottom, u.bottom), u.left = $l(f.left, u.left), u;
  }, o1(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
const iA = {
  getClippingRect: oA,
  convertOffsetParentRelativeRectToViewportRelativeRect: Z5,
  isElement: Mr,
  getDimensions: r1,
  getOffsetParent: kp,
  getDocumentElement: zr,
  getElementRects: (e) => {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    return {
      reference: Y5(t, kp(n), r),
      floating: {
        ...r1(n),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => Ms(e).direction === "rtl"
};
function lA(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = !0,
    animationFrame: s = !1
  } = r, a = o && !s, u = i && !s, c = a || u ? [...Mr(e) ? Au(e) : [], ...Au(t)] : [];
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
const sA = (e, t, n) => I5(e, t, {
  platform: iA,
  ...n
});
var Cp = typeof document < "u" ? m.exports.useLayoutEffect : m.exports.useEffect;
function Ep(e, t) {
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
        if (!Ep(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !Ep(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function aA(e) {
  const t = m.exports.useRef(e);
  return Cp(() => {
    t.current = e;
  }), t;
}
function uA(e) {
  let {
    middleware: t,
    placement: n = "bottom",
    strategy: r = "absolute",
    whileElementsMounted: o
  } = e === void 0 ? {} : e;
  const i = m.exports.useRef(null), l = m.exports.useRef(null), s = aA(o), a = m.exports.useRef(null), [u, c] = m.exports.useState({
    x: null,
    y: null,
    strategy: r,
    placement: n,
    middlewareData: {}
  }), [f, d] = m.exports.useState(t);
  Ep(f == null ? void 0 : f.map((x) => {
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
    !i.current || !l.current || sA(i.current, l.current, {
      middleware: f,
      placement: n,
      strategy: r
    }).then((x) => {
      h.current && hn.exports.flushSync(() => {
        c(x);
      });
    });
  }, [f, n, r]);
  Cp(() => {
    h.current && g();
  }, [g]);
  const h = m.exports.useRef(!1);
  Cp(() => (h.current = !0, () => {
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
const cA = (e) => {
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
function fA(e) {
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
const Sb = "Popper", [Em, vc] = vo(Sb), [dA, kb] = Em(Sb), pA = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.exports.useState(null);
  return /* @__PURE__ */ m.exports.createElement(dA, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, hA = "PopperAnchor", mA = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, i = kb(hA, n), l = m.exports.useRef(null), s = xe(t, l);
  return m.exports.useEffect(() => {
    i.onAnchorChange((r == null ? void 0 : r.current) || l.current);
  }), r ? null : /* @__PURE__ */ m.exports.createElement(Ue.div, G({}, o, {
    ref: s
  }));
}), Pu = "PopperContent", [gA, VF] = Em(Pu), [vA, yA] = Em(Pu, {
  hasParent: !1,
  positionUpdateFns: /* @__PURE__ */ new Set()
}), xA = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n, r, o, i, l, s, a, u;
  const { __scopePopper: c, side: f = "bottom", sideOffset: d = 0, align: g = "center", alignOffset: h = 0, arrowPadding: v = 0, collisionBoundary: w = [], collisionPadding: p = 0, sticky: y = "partial", hideWhenDetached: x = !1, avoidCollisions: b = !0, onPlaced: A, ...S } = e, $ = kb(Pu, c), [E, P] = m.exports.useState(null), T = xe(
    t,
    (or) => P(or)
  ), [R, N] = m.exports.useState(null), D = fA(R), z = (n = D == null ? void 0 : D.width) !== null && n !== void 0 ? n : 0, F = (r = D == null ? void 0 : D.height) !== null && r !== void 0 ? r : 0, _ = f + (g !== "center" ? "-" + g : ""), H = typeof p == "number" ? p : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...p
  }, M = Array.isArray(w) ? w : [
    w
  ], I = M.length > 0, O = {
    padding: H,
    boundary: M.filter(bA),
    altBoundary: I
  }, { reference: k, floating: C, strategy: J, x: ne, y: ue, placement: ee, middlewareData: Q, update: ie } = uA({
    strategy: "fixed",
    placement: _,
    whileElementsMounted: lA,
    middleware: [
      SA(),
      V5({
        mainAxis: d + F,
        alignmentAxis: h
      }),
      b ? U5({
        mainAxis: !0,
        crossAxis: !1,
        limiter: y === "partial" ? W5() : void 0,
        ...O
      }) : void 0,
      R ? cA({
        element: R,
        padding: v
      }) : void 0,
      b ? B5({
        ...O
      }) : void 0,
      q5({
        ...O,
        apply: ({ elements: or, availableWidth: Xc, availableHeight: Zc }) => {
          or.floating.style.setProperty("--radix-popper-available-width", `${Xc}px`), or.floating.style.setProperty("--radix-popper-available-height", `${Zc}px`);
        }
      }),
      kA({
        arrowWidth: z,
        arrowHeight: F
      }),
      x ? j5({
        strategy: "referenceHidden"
      }) : void 0
    ].filter(wA)
  });
  Ze(() => {
    k($.anchor);
  }, [
    k,
    $.anchor
  ]);
  const we = ne !== null && ue !== null, [ce, pe] = Cb(ee), se = ze(A);
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
  const { hasParent: Gs, positionUpdateFns: nr } = yA(Pu, c), rr = !Gs;
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
    "data-align": pe,
    ...S,
    ref: T,
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
  }, /* @__PURE__ */ m.exports.createElement(gA, {
    scope: c,
    placedSide: ce,
    onArrowChange: N,
    arrowX: at,
    arrowY: ut,
    shouldHideArrow: jr
  }, rr ? /* @__PURE__ */ m.exports.createElement(vA, {
    scope: c,
    hasParent: !0,
    positionUpdateFns: nr
  }, /* @__PURE__ */ m.exports.createElement(Ue.div, Bi)) : /* @__PURE__ */ m.exports.createElement(Ue.div, Bi)));
});
function wA(e) {
  return e !== void 0;
}
function bA(e) {
  return e !== null;
}
const SA = () => ({
  name: "anchorCssProperties",
  fn(e) {
    const { rects: t, elements: n } = e, { width: r, height: o } = t.reference;
    return n.floating.style.setProperty("--radix-popper-anchor-width", `${r}px`), n.floating.style.setProperty("--radix-popper-anchor-height", `${o}px`), {};
  }
}), kA = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, i, l;
    const { placement: s, rects: a, middlewareData: u } = t, f = ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, d = f ? 0 : e.arrowWidth, g = f ? 0 : e.arrowHeight, [h, v] = Cb(s), w = {
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
function Cb(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Eb = pA, $b = mA, Ab = xA, Pb = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ cb.createPortal(/* @__PURE__ */ m.exports.createElement(Ue.div, G({}, o, {
    ref: t
  })), r) : null;
});
function CA(e, t) {
  return m.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const mn = (e) => {
  const { present: t, children: n } = e, r = EA(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : m.exports.Children.only(n), i = xe(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ m.exports.cloneElement(o, {
    ref: i
  }) : null;
};
mn.displayName = "Presence";
function EA(e) {
  const [t, n] = m.exports.useState(), r = m.exports.useRef({}), o = m.exports.useRef(e), i = m.exports.useRef("none"), l = e ? "mounted" : "unmounted", [s, a] = CA(l, {
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
    const u = da(r.current);
    i.current = s === "mounted" ? u : "none";
  }, [
    s
  ]), Ze(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const d = i.current, g = da(u);
      e ? a("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(c && d !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    a
  ]), Ze(() => {
    if (t) {
      const u = (f) => {
        const g = da(r.current).includes(f.animationName);
        f.target === t && g && hn.exports.flushSync(
          () => a("ANIMATION_END")
        );
      }, c = (f) => {
        f.target === t && (i.current = da(r.current));
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
function da(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function os({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = $A({
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
function $A({ defaultProp: e, onChange: t }) {
  const n = m.exports.useState(e), [r] = n, o = m.exports.useRef(r), i = ze(t);
  return m.exports.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
var AA = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ao = /* @__PURE__ */ new WeakMap(), pa = /* @__PURE__ */ new WeakMap(), ha = {}, Tf = 0, _b = function(e) {
  return e && (e.host || _b(e.parentNode));
}, PA = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = _b(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, _A = function(e, t, n, r) {
  var o = PA(t, Array.isArray(e) ? e : [e]);
  ha[n] || (ha[n] = /* @__PURE__ */ new WeakMap());
  var i = ha[n], l = [], s = /* @__PURE__ */ new Set(), a = new Set(o), u = function(f) {
    !f || s.has(f) || (s.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var c = function(f) {
    !f || a.has(f) || Array.prototype.forEach.call(f.children, function(d) {
      if (s.has(d))
        c(d);
      else {
        var g = d.getAttribute(r), h = g !== null && g !== "false", v = (Ao.get(d) || 0) + 1, w = (i.get(d) || 0) + 1;
        Ao.set(d, v), i.set(d, w), l.push(d), v === 1 && h && pa.set(d, !0), w === 1 && d.setAttribute(n, "true"), h || d.setAttribute(r, "true");
      }
    });
  };
  return c(t), s.clear(), Tf++, function() {
    l.forEach(function(f) {
      var d = Ao.get(f) - 1, g = i.get(f) - 1;
      Ao.set(f, d), i.set(f, g), d || (pa.has(f) || f.removeAttribute(r), pa.delete(f)), g || f.removeAttribute(n);
    }), Tf--, Tf || (Ao = /* @__PURE__ */ new WeakMap(), Ao = /* @__PURE__ */ new WeakMap(), pa = /* @__PURE__ */ new WeakMap(), ha = {});
  };
}, yc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || AA(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), _A(r, o, n, "aria-hidden")) : function() {
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
function Rb(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Al = "right-scroll-bar-position", Pl = "width-before-scroll-bar", RA = "with-scroll-bars-hidden", TA = "--removed-body-scroll-bar-size";
function IA(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function OA(e, t) {
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
function Tb(e, t) {
  return OA(t || null, function(n) {
    return e.forEach(function(r) {
      return IA(r, n);
    });
  });
}
var xc = { exports: {} }, wc = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var NA = m.exports, MA = Symbol.for("react.element"), DA = Symbol.for("react.fragment"), LA = Object.prototype.hasOwnProperty, FA = NA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, zA = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ib(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t)
    LA.call(t, r) && !zA.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: MA, type: e, key: i, ref: l, props: o, _owner: FA.current };
}
wc.Fragment = DA;
wc.jsx = Ib;
wc.jsxs = Ib;
(function(e) {
  e.exports = wc;
})(xc);
const Xn = xc.exports.Fragment, B = xc.exports.jsx, fe = xc.exports.jsxs;
function BA(e) {
  return e;
}
function jA(e, t) {
  t === void 0 && (t = BA);
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
function Ob(e) {
  e === void 0 && (e = {});
  var t = jA(null);
  return t.options = ot({ async: !0, ssr: !1 }, e), t;
}
var Nb = function(e) {
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
Nb.isSideCarExport = !0;
function Mb(e, t) {
  return e.useMedium(t), Nb;
}
var Db = Ob(), If = function() {
}, bc = m.exports.forwardRef(function(e, t) {
  var n = m.exports.useRef(null), r = m.exports.useState({
    onScrollCapture: If,
    onWheelCapture: If,
    onTouchMoveCapture: If
  }), o = r[0], i = r[1], l = e.forwardProps, s = e.children, a = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, g = e.noIsolation, h = e.inert, v = e.allowPinchZoom, w = e.as, p = w === void 0 ? "div" : w, y = $m(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = d, b = Tb([n, t]), A = ot(ot({}, y), o);
  return /* @__PURE__ */ fe(Xn, {
    children: [c && /* @__PURE__ */ B(x, {
      sideCar: Db,
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
  fullWidth: Pl,
  zeroRight: Al
};
var HA = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function VA() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = HA();
  return t && e.setAttribute("nonce", t), e;
}
function UA(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function WA(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var qA = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = VA()) && (UA(t, n), WA(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, QA = function() {
  var e = qA();
  return function(t, n) {
    m.exports.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Am = function() {
  var e = QA(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, GA = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Of = function(e) {
  return parseInt(e || "", 10) || 0;
}, KA = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Of(n), Of(r), Of(o)];
}, YA = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return GA;
  var t = KA(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, XA = Am(), ZA = function(e, t, n, r) {
  var o = e.left, i = e.top, l = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(RA, ` {
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
  
  .`).concat(Al, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Pl, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Al, " .").concat(Al, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Pl, " .").concat(Pl, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(TA, ": ").concat(s, `px;
  }
`);
}, Lb = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = m.exports.useMemo(function() {
    return YA(o);
  }, [o]);
  return /* @__PURE__ */ B(XA, {
    styles: ZA(i, !t, o, n ? "" : "!important")
  });
}, $p = !1;
if (typeof window < "u")
  try {
    var ma = Object.defineProperty({}, "passive", {
      get: function() {
        return $p = !0, !0;
      }
    });
    window.addEventListener("test", ma, ma), window.removeEventListener("test", ma, ma);
  } catch {
    $p = !1;
  }
var Po = $p ? { passive: !1 } : !1, JA = function(e) {
  return e.tagName === "TEXTAREA";
}, Fb = function(e, t) {
  var n = window.getComputedStyle(e);
  return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !JA(e) && n[t] === "visible");
}, eP = function(e) {
  return Fb(e, "overflowY");
}, tP = function(e) {
  return Fb(e, "overflowX");
}, i1 = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = zb(e, n);
    if (r) {
      var o = Bb(e, n), i = o[1], l = o[2];
      if (i > l)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, nP = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, rP = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, zb = function(e, t) {
  return e === "v" ? eP(t) : tP(t);
}, Bb = function(e, t) {
  return e === "v" ? nP(t) : rP(t);
}, oP = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, iP = function(e, t, n, r, o) {
  var i = oP(e, window.getComputedStyle(t).direction), l = i * r, s = n.target, a = t.contains(s), u = !1, c = l > 0, f = 0, d = 0;
  do {
    var g = Bb(e, s), h = g[0], v = g[1], w = g[2], p = v - w - i * h;
    (h || p) && zb(e, s) && (f += p, d += h), s = s.parentNode;
  } while (!a && s !== document.body || a && (t.contains(s) || t === s));
  return (c && (o && f === 0 || !o && l > f) || !c && (o && d === 0 || !o && -l > d)) && (u = !0), u;
}, ga = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, l1 = function(e) {
  return [e.deltaX, e.deltaY];
}, s1 = function(e) {
  return e && "current" in e ? e.current : e;
}, lP = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, sP = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, aP = 0, _o = [];
function uP(e) {
  var t = m.exports.useRef([]), n = m.exports.useRef([0, 0]), r = m.exports.useRef(), o = m.exports.useState(aP++)[0], i = m.exports.useState(function() {
    return Am();
  })[0], l = m.exports.useRef(e);
  m.exports.useEffect(function() {
    l.current = e;
  }, [e]), m.exports.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Rb([e.lockRef.current], (e.shards || []).map(s1), !0).filter(Boolean);
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
    var p = ga(v), y = n.current, x = "deltaX" in v ? v.deltaX : y[0] - p[0], b = "deltaY" in v ? v.deltaY : y[1] - p[1], A, S = v.target, $ = Math.abs(x) > Math.abs(b) ? "h" : "v";
    if ("touches" in v && $ === "h" && S.type === "range")
      return !1;
    var E = i1($, S);
    if (!E)
      return !0;
    if (E ? A = $ : (A = $ === "v" ? "h" : "v", E = i1($, S)), !E)
      return !1;
    if (!r.current && "changedTouches" in v && (x || b) && (r.current = A), !A)
      return !0;
    var P = r.current || A;
    return iP(P, w, v, P === "h" ? x : b, !0);
  }, []), a = m.exports.useCallback(function(v) {
    var w = v;
    if (!(!_o.length || _o[_o.length - 1] !== i)) {
      var p = "deltaY" in w ? l1(w) : ga(w), y = t.current.filter(function(A) {
        return A.name === w.type && A.target === w.target && lP(A.delta, p);
      })[0];
      if (y && y.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!y) {
        var x = (l.current.shards || []).map(s1).filter(Boolean).filter(function(A) {
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
    n.current = ga(v), r.current = void 0;
  }, []), f = m.exports.useCallback(function(v) {
    u(v.type, l1(v), v.target, s(v, e.lockRef.current));
  }, []), d = m.exports.useCallback(function(v) {
    u(v.type, ga(v), v.target, s(v, e.lockRef.current));
  }, []);
  m.exports.useEffect(function() {
    return _o.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", a, Po), document.addEventListener("touchmove", a, Po), document.addEventListener("touchstart", c, Po), function() {
      _o = _o.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", a, Po), document.removeEventListener("touchmove", a, Po), document.removeEventListener("touchstart", c, Po);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return /* @__PURE__ */ fe(Xn, {
    children: [h ? /* @__PURE__ */ B(i, {
      styles: sP(o)
    }) : null, g ? /* @__PURE__ */ B(Lb, {
      gapMode: "margin"
    }) : null]
  });
}
const cP = Mb(Db, uP);
var jb = m.exports.forwardRef(function(e, t) {
  return /* @__PURE__ */ B(bc, {
    ...ot({}, e, {
      ref: t,
      sideCar: cP
    })
  });
});
jb.classNames = bc.classNames;
const Hb = jb, Vb = "Popover", [Ub, UF] = vo(Vb, [
  vc
]), Pm = vc(), [fP, Ds] = Ub(Vb), dP = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !1 } = e, s = Pm(t), a = m.exports.useRef(null), [u, c] = m.exports.useState(!1), [f = !1, d] = os({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(Eb, s, /* @__PURE__ */ m.exports.createElement(fP, {
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
}, pP = "PopoverTrigger", hP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopover: n, ...r } = e, o = Ds(pP, n), i = Pm(n), l = xe(t, o.triggerRef), s = /* @__PURE__ */ m.exports.createElement(Ue.button, G({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": qb(o.open)
  }, r, {
    ref: l,
    onClick: ae(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? s : /* @__PURE__ */ m.exports.createElement($b, G({
    asChild: !0
  }, i), s);
}), mP = "PopoverPortal", [WF, gP] = Ub(mP, {
  forceMount: void 0
}), is = "PopoverContent", vP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = gP(is, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = Ds(is, e.__scopePopover);
  return /* @__PURE__ */ m.exports.createElement(mn, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement(yP, G({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(xP, G({}, o, {
    ref: t
  })));
}), yP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Ds(is, e.__scopePopover), r = m.exports.useRef(null), o = xe(t, r), i = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const l = r.current;
    if (l)
      return yc(l);
  }, []), /* @__PURE__ */ m.exports.createElement(Hb, {
    as: wi,
    allowPinchZoom: !0
  }, /* @__PURE__ */ m.exports.createElement(Wb, G({}, e, {
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
}), xP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Ds(is, e.__scopePopover), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement(Wb, G({}, e, {
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
}), Wb = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, disableOutsidePointerEvents: l, onEscapeKeyDown: s, onPointerDownOutside: a, onFocusOutside: u, onInteractOutside: c, ...f } = e, d = Ds(is, n), g = Pm(n);
  return hc(), /* @__PURE__ */ m.exports.createElement(Sm, {
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
  }, /* @__PURE__ */ m.exports.createElement(Ab, G({
    "data-state": qb(d.open),
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
function qb(e) {
  return e ? "open" : "closed";
}
const wP = dP, bP = hP, SP = vP, Qb = "Dialog", [Gb, qF] = vo(Qb), [kP, Ls] = Gb(Qb), CP = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !0 } = e, s = m.exports.useRef(null), a = m.exports.useRef(null), [u = !1, c] = os({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(kP, {
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
}, Kb = "DialogPortal", [EP, $P] = Gb(Kb, {
  forceMount: void 0
}), AP = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Ls(Kb, t);
  return /* @__PURE__ */ m.exports.createElement(EP, {
    scope: t,
    forceMount: n
  }, m.exports.Children.map(
    r,
    (l) => /* @__PURE__ */ m.exports.createElement(mn, {
      present: n || i.open
    }, /* @__PURE__ */ m.exports.createElement(Pb, {
      asChild: !0,
      container: o
    }, l))
  ));
}, ls = "DialogContent", PP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = $P(ls, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Ls(ls, e.__scopeDialog);
  return /* @__PURE__ */ m.exports.createElement(mn, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement(_P, G({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(RP, G({}, o, {
    ref: t
  })));
}), _P = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Ls(ls, e.__scopeDialog), r = m.exports.useRef(null), o = xe(t, n.contentRef, r);
  return m.exports.useEffect(() => {
    const i = r.current;
    if (i)
      return yc(i);
  }, []), /* @__PURE__ */ m.exports.createElement(Yb, G({}, e, {
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
}), RP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Ls(ls, e.__scopeDialog), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement(Yb, G({}, e, {
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
}), Yb = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, s = Ls(ls, n), a = m.exports.useRef(null), u = xe(t, a);
  return hc(), /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement(Sm, {
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
    "data-state": TP(s.open)
  }, l, {
    ref: u,
    onDismiss: () => s.onOpenChange(!1)
  }))), !1);
});
function TP(e) {
  return e ? "open" : "closed";
}
const IP = CP, OP = AP, NP = PP, _m = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = m.exports.Children.toArray(n), i = o.find(DP);
  if (i) {
    const l = i.props.children, s = o.map((a) => a === i ? m.exports.Children.count(l) > 1 ? m.exports.Children.only(null) : /* @__PURE__ */ m.exports.isValidElement(l) ? l.props.children : null : a);
    return /* @__PURE__ */ m.exports.createElement(Ap, G({}, r, {
      ref: t
    }), /* @__PURE__ */ m.exports.isValidElement(l) ? /* @__PURE__ */ m.exports.cloneElement(l, void 0, s) : null);
  }
  return /* @__PURE__ */ m.exports.createElement(Ap, G({}, r, {
    ref: t
  }), n);
});
_m.displayName = "Slot";
const Ap = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ m.exports.isValidElement(n) ? /* @__PURE__ */ m.exports.cloneElement(n, {
    ...LP(r, n.props),
    ref: Rh(t, n.ref)
  }) : m.exports.Children.count(n) > 1 ? m.exports.Children.only(null) : null;
});
Ap.displayName = "SlotClone";
const MP = ({ children: e }) => /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, e);
function DP(e) {
  return /* @__PURE__ */ m.exports.isValidElement(e) && e.type === MP;
}
function LP(e, t) {
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
const FP = [
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
], Sc = FP.reduce((e, t) => {
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
function zP(e, t) {
  e && hn.exports.flushSync(
    () => e.dispatchEvent(t)
  );
}
function BP(e) {
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
const Pp = "dismissableLayer.update", jP = "dismissableLayer.pointerDownOutside", HP = "dismissableLayer.focusOutside";
let a1;
const VP = /* @__PURE__ */ m.exports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), UP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: l, onDismiss: s, ...a } = e, u = m.exports.useContext(VP), [c, f] = m.exports.useState(null), [, d] = m.exports.useState({}), g = xe(
    t,
    (S) => f(S)
  ), h = Array.from(u.layers), [v] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = h.indexOf(v), p = c ? h.indexOf(c) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, x = p >= w, b = WP((S) => {
    const $ = S.target, E = [
      ...u.branches
    ].some(
      (P) => P.contains($)
    );
    !x || E || (o == null || o(S), l == null || l(S), S.defaultPrevented || s == null || s());
  }), A = qP((S) => {
    const $ = S.target;
    [
      ...u.branches
    ].some(
      (P) => P.contains($)
    ) || (i == null || i(S), l == null || l(S), S.defaultPrevented || s == null || s());
  });
  return BP((S) => {
    p === u.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && s && (S.preventDefault(), s()));
  }), m.exports.useEffect(() => {
    if (!!c)
      return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (a1 = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), u1(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = a1);
      };
  }, [
    c,
    n,
    u
  ]), m.exports.useEffect(() => () => {
    !c || (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), u1());
  }, [
    c,
    u
  ]), m.exports.useEffect(() => {
    const S = () => d({});
    return document.addEventListener(Pp, S), () => document.removeEventListener(Pp, S);
  }, []), /* @__PURE__ */ m.exports.createElement(Sc.div, G({}, a, {
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
function WP(e) {
  const t = ze(e), n = m.exports.useRef(!1), r = m.exports.useRef(() => {
  });
  return m.exports.useEffect(() => {
    const o = (l) => {
      if (l.target && !n.current) {
        let u = function() {
          Xb(jP, t, a, {
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
function qP(e) {
  const t = ze(e), n = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const r = (o) => {
      o.target && !n.current && Xb(HP, t, {
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
function u1() {
  const e = new CustomEvent(Pp);
  document.dispatchEvent(e);
}
function Xb(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? zP(o, i) : o.dispatchEvent(i);
}
const Nf = "focusScope.autoFocusOnMount", Mf = "focusScope.autoFocusOnUnmount", c1 = {
  bubbles: !1,
  cancelable: !0
}, QP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
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
      d1.add(g);
      const v = document.activeElement;
      if (!s.contains(v)) {
        const p = new CustomEvent(Nf, c1);
        s.addEventListener(Nf, u), s.dispatchEvent(p), p.defaultPrevented || (GP(JP(Zb(s)), {
          select: !0
        }), document.activeElement === v && Kr(s));
      }
      return () => {
        s.removeEventListener(Nf, u), setTimeout(() => {
          const p = new CustomEvent(Mf, c1);
          s.addEventListener(Mf, c), s.dispatchEvent(p), p.defaultPrevented || Kr(v != null ? v : document.body, {
            select: !0
          }), s.removeEventListener(Mf, c), d1.remove(g);
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
      const y = v.currentTarget, [x, b] = KP(y);
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
  return /* @__PURE__ */ m.exports.createElement(Sc.div, G({
    tabIndex: -1
  }, l, {
    ref: d,
    onKeyDown: h
  }));
});
function GP(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Kr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function KP(e) {
  const t = Zb(e), n = f1(t, e), r = f1(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Zb(e) {
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
function f1(e, t) {
  for (const n of e)
    if (!YP(n, {
      upTo: t
    }))
      return n;
}
function YP(e, { upTo: t }) {
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
function XP(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Kr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && XP(e) && t && e.select();
  }
}
const d1 = ZP();
function ZP() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = p1(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = p1(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function p1(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function JP(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const e3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ cb.createPortal(/* @__PURE__ */ m.exports.createElement(Sc.div, G({}, o, {
    ref: t
  })), r) : null;
});
var Jb = Ob(), Df = function() {
}, kc = m.exports.forwardRef(function(e, t) {
  var n = m.exports.useRef(null), r = m.exports.useState({
    onScrollCapture: Df,
    onWheelCapture: Df,
    onTouchMoveCapture: Df
  }), o = r[0], i = r[1], l = e.forwardProps, s = e.children, a = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, g = e.noIsolation, h = e.inert, v = e.allowPinchZoom, w = e.as, p = w === void 0 ? "div" : w, y = $m(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = d, b = Tb([n, t]), A = ot(ot({}, y), o);
  return /* @__PURE__ */ fe(Xn, {
    children: [c && /* @__PURE__ */ B(x, {
      sideCar: Jb,
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
kc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
kc.classNames = {
  fullWidth: Pl,
  zeroRight: Al
};
var _p = !1;
if (typeof window < "u")
  try {
    var va = Object.defineProperty({}, "passive", {
      get: function() {
        return _p = !0, !0;
      }
    });
    window.addEventListener("test", va, va), window.removeEventListener("test", va, va);
  } catch {
    _p = !1;
  }
var Ro = _p ? { passive: !1 } : !1, t3 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, n3 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, h1 = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = eS(e, n);
    if (r) {
      var o = tS(e, n), i = o[1], l = o[2];
      if (i > l)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, r3 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, o3 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, eS = function(e, t) {
  return e === "v" ? t3(t) : n3(t);
}, tS = function(e, t) {
  return e === "v" ? r3(t) : o3(t);
}, i3 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, l3 = function(e, t, n, r, o) {
  var i = i3(e, window.getComputedStyle(t).direction), l = i * r, s = n.target, a = t.contains(s), u = !1, c = l > 0, f = 0, d = 0;
  do {
    var g = tS(e, s), h = g[0], v = g[1], w = g[2], p = v - w - i * h;
    (h || p) && eS(e, s) && (f += p, d += h), s = s.parentNode;
  } while (!a && s !== document.body || a && (t.contains(s) || t === s));
  return (c && (o && f === 0 || !o && l > f) || !c && (o && d === 0 || !o && -l > d)) && (u = !0), u;
}, ya = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, m1 = function(e) {
  return [e.deltaX, e.deltaY];
}, g1 = function(e) {
  return e && "current" in e ? e.current : e;
}, s3 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, a3 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, u3 = 0, To = [];
function c3(e) {
  var t = m.exports.useRef([]), n = m.exports.useRef([0, 0]), r = m.exports.useRef(), o = m.exports.useState(u3++)[0], i = m.exports.useState(function() {
    return Am();
  })[0], l = m.exports.useRef(e);
  m.exports.useEffect(function() {
    l.current = e;
  }, [e]), m.exports.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Rb([e.lockRef.current], (e.shards || []).map(g1), !0).filter(Boolean);
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
    var p = ya(v), y = n.current, x = "deltaX" in v ? v.deltaX : y[0] - p[0], b = "deltaY" in v ? v.deltaY : y[1] - p[1], A, S = v.target, $ = Math.abs(x) > Math.abs(b) ? "h" : "v";
    if ("touches" in v && $ === "h" && S.type === "range")
      return !1;
    var E = h1($, S);
    if (!E)
      return !0;
    if (E ? A = $ : (A = $ === "v" ? "h" : "v", E = h1($, S)), !E)
      return !1;
    if (!r.current && "changedTouches" in v && (x || b) && (r.current = A), !A)
      return !0;
    var P = r.current || A;
    return l3(P, w, v, P === "h" ? x : b, !0);
  }, []), a = m.exports.useCallback(function(v) {
    var w = v;
    if (!(!To.length || To[To.length - 1] !== i)) {
      var p = "deltaY" in w ? m1(w) : ya(w), y = t.current.filter(function(A) {
        return A.name === w.type && A.target === w.target && s3(A.delta, p);
      })[0];
      if (y && y.should) {
        w.preventDefault();
        return;
      }
      if (!y) {
        var x = (l.current.shards || []).map(g1).filter(Boolean).filter(function(A) {
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
    n.current = ya(v), r.current = void 0;
  }, []), f = m.exports.useCallback(function(v) {
    u(v.type, m1(v), v.target, s(v, e.lockRef.current));
  }, []), d = m.exports.useCallback(function(v) {
    u(v.type, ya(v), v.target, s(v, e.lockRef.current));
  }, []);
  m.exports.useEffect(function() {
    return To.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", a, Ro), document.addEventListener("touchmove", a, Ro), document.addEventListener("touchstart", c, Ro), function() {
      To = To.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", a, Ro), document.removeEventListener("touchmove", a, Ro), document.removeEventListener("touchstart", c, Ro);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return /* @__PURE__ */ fe(Xn, {
    children: [h ? /* @__PURE__ */ B(i, {
      styles: a3(o)
    }) : null, g ? /* @__PURE__ */ B(Lb, {
      gapMode: "margin"
    }) : null]
  });
}
const f3 = Mb(Jb, c3);
var nS = m.exports.forwardRef(function(e, t) {
  return /* @__PURE__ */ B(kc, {
    ...ot({}, e, {
      ref: t,
      sideCar: f3
    })
  });
});
nS.classNames = kc.classNames;
const d3 = nS, rS = "Dialog", [oS, QF] = vo(rS), [p3, bo] = oS(rS), h3 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !0 } = e, s = m.exports.useRef(null), a = m.exports.useRef(null), [u = !1, c] = os({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(p3, {
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
}, iS = "DialogPortal", [m3, lS] = oS(iS, {
  forceMount: void 0
}), g3 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = bo(iS, t);
  return /* @__PURE__ */ m.exports.createElement(m3, {
    scope: t,
    forceMount: n
  }, m.exports.Children.map(
    r,
    (l) => /* @__PURE__ */ m.exports.createElement(mn, {
      present: n || i.open
    }, /* @__PURE__ */ m.exports.createElement(e3, {
      asChild: !0,
      container: o
    }, l))
  ));
}, Rp = "DialogOverlay", v3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = lS(Rp, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = bo(Rp, e.__scopeDialog);
  return i.modal ? /* @__PURE__ */ m.exports.createElement(mn, {
    present: r || i.open
  }, /* @__PURE__ */ m.exports.createElement(y3, G({}, o, {
    ref: t
  }))) : null;
}), y3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = bo(Rp, n);
  return /* @__PURE__ */ m.exports.createElement(d3, {
    as: _m,
    allowPinchZoom: !0,
    shards: [
      o.contentRef
    ]
  }, /* @__PURE__ */ m.exports.createElement(Sc.div, G({
    "data-state": aS(o.open)
  }, r, {
    ref: t,
    style: {
      pointerEvents: "auto",
      ...r.style
    }
  })));
}), ss = "DialogContent", x3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = lS(ss, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = bo(ss, e.__scopeDialog);
  return /* @__PURE__ */ m.exports.createElement(mn, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement(w3, G({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(b3, G({}, o, {
    ref: t
  })));
}), w3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = bo(ss, e.__scopeDialog), r = m.exports.useRef(null), o = xe(t, n.contentRef, r);
  return m.exports.useEffect(() => {
    const i = r.current;
    if (i)
      return yc(i);
  }, []), /* @__PURE__ */ m.exports.createElement(sS, G({}, e, {
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
}), b3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = bo(ss, e.__scopeDialog), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement(sS, G({}, e, {
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
}), sS = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, s = bo(ss, n), a = m.exports.useRef(null), u = xe(t, a);
  return hc(), /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement(QP, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ m.exports.createElement(UP, G({
    role: "dialog",
    id: s.contentId,
    "aria-describedby": s.descriptionId,
    "aria-labelledby": s.titleId,
    "data-state": aS(s.open)
  }, l, {
    ref: u,
    onDismiss: () => s.onOpenChange(!1)
  }))), !1);
});
function aS(e) {
  return e ? "open" : "closed";
}
const S3 = h3, k3 = g3, C3 = v3, E3 = x3;
var v1 = 1, $3 = 0.9, A3 = 0.3, Lf = 0.1, P3 = 0, Ff = 0.999, _3 = 0.9999, R3 = 0.99, y1 = /[\\\/\-_+.# \t"@\[\(\{&]/, T3 = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function Tp(e, t, n, r, o, i) {
  if (i === t.length)
    return o === e.length ? v1 : R3;
  for (var l = r.charAt(i), s = n.indexOf(l, o), a = 0, u, c, f; s >= 0; )
    u = Tp(e, t, n, r, s + 1, i + 1), u > a && (s === o ? u *= v1 : y1.test(e.charAt(s - 1)) ? (u *= $3, f = e.slice(o, s - 1).match(T3), f && o > 0 && (u *= Math.pow(Ff, f.length))) : y1.test(e.slice(o, s - 1)) ? (u *= P3, o > 0 && (u *= Math.pow(Ff, s - o))) : (u *= A3, o > 0 && (u *= Math.pow(Ff, s - o))), e.charAt(s) !== t.charAt(i) && (u *= _3)), u < Lf && n.charAt(s - 1) === r.charAt(i + 1) && n.charAt(s - 1) !== r.charAt(i) && (c = Tp(e, t, n, r, s + 1, i + 2), c * Lf > u && (u = c * Lf)), u > a && (a = u), s = n.indexOf(l, s + 1);
  return a;
}
function I3(e, t) {
  return Tp(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var O3 = I3, N3 = '[cmdk-list-sizer=""]', Xi = '[cmdk-group=""]', zf = '[cmdk-group-items=""]', M3 = '[cmdk-group-heading=""]', uS = '[cmdk-item=""]', x1 = `${uS}:not([aria-disabled="true"])`, Ip = "cmdk-item-select", fr = "data-value", D3 = (e, t) => O3(e, t), cS = m.exports.createContext(void 0), Fs = () => m.exports.useContext(cS), fS = m.exports.createContext(void 0), Rm = () => m.exports.useContext(fS), dS = m.exports.createContext(void 0), pS = m.exports.forwardRef((e, t) => {
  let n = m.exports.useRef(null), r = Fo(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = Fo(() => /* @__PURE__ */ new Set()), i = Fo(() => /* @__PURE__ */ new Map()), l = Fo(() => /* @__PURE__ */ new Map()), s = Fo(() => /* @__PURE__ */ new Set()), a = hS(e), { label: u, children: c, value: f, onValueChange: d, filter: g, shouldFilter: h, ...v } = e, w = m.exports.useId(), p = m.exports.useId(), y = m.exports.useId(), x = Q3();
  Ii(() => {
    if (f !== void 0) {
      let I = f.trim().toLowerCase();
      r.current.value = I, x(6, T), b.emit();
    }
  }, [f]);
  let b = m.exports.useMemo(() => ({ subscribe: (I) => (s.current.add(I), () => s.current.delete(I)), snapshot: () => r.current, setState: (I, O, k) => {
    var C, J, ne;
    if (!Object.is(r.current[I], O)) {
      if (r.current[I] = O, I === "search")
        P(), $(), x(1, E);
      else if (I === "value")
        if (((C = a.current) == null ? void 0 : C.value) !== void 0) {
          (ne = (J = a.current).onValueChange) == null || ne.call(J, O);
          return;
        } else
          k || x(5, T);
      b.emit();
    }
  }, emit: () => {
    s.current.forEach((I) => I());
  } }), []), A = m.exports.useMemo(() => ({ value: (I, O) => {
    O !== l.current.get(I) && (l.current.set(I, O), r.current.filtered.items.set(I, S(O)), x(2, () => {
      $(), b.emit();
    }));
  }, item: (I, O) => (o.current.add(I), O && (i.current.has(O) ? i.current.get(O).add(I) : i.current.set(O, /* @__PURE__ */ new Set([I]))), x(3, () => {
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
    var O;
    let k = (C = (O = a.current) == null ? void 0 : O.filter) != null ? C : D3;
    return I ? k(I, r.current.search) : 0;
  }
  function $() {
    if (!n.current || !r.current.search || a.current.shouldFilter === !1)
      return;
    let I = r.current.filtered.items, O = [];
    r.current.filtered.groups.forEach((C) => {
      let J = i.current.get(C), ne = 0;
      J.forEach((ue) => {
        let ee = I.get(ue);
        ne = Math.max(ee, ne);
      }), O.push([C, ne]);
    });
    let k = n.current.querySelector(N3);
    N().sort((C, J) => {
      var ee, Q;
      let ne = C.getAttribute(fr), ue = J.getAttribute(fr);
      return ((ee = I.get(ue)) != null ? ee : 0) - ((Q = I.get(ne)) != null ? Q : 0);
    }).forEach((C) => {
      let J = C.closest(zf);
      J ? J.appendChild(C.parentElement === J ? C : C.closest(`${zf} > *`)) : k.appendChild(C.parentElement === k ? C : C.closest(`${zf} > *`));
    }), O.sort((C, J) => J[1] - C[1]).forEach((C) => {
      let J = n.current.querySelector(`${Xi}[${fr}="${C[0]}"]`);
      J == null || J.parentElement.appendChild(J);
    });
  }
  function E() {
    let I = N().find((k) => !k.ariaDisabled), O = I == null ? void 0 : I.getAttribute(fr);
    b.setState("value", O || void 0);
  }
  function P() {
    if (!r.current.search || a.current.shouldFilter === !1) {
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
    C && (((I = C.parentElement) == null ? void 0 : I.firstChild) === C && ((k = (O = C.closest(Xi)) == null ? void 0 : O.querySelector(M3)) == null || k.scrollIntoView({ block: "nearest" })), C.scrollIntoView({ block: "nearest" }));
  }
  function R() {
    return n.current.querySelector(`${uS}[aria-selected="true"]`);
  }
  function N() {
    return Array.from(n.current.querySelectorAll(x1));
  }
  function D(I) {
    let O = N()[I];
    O && b.setState("value", O.getAttribute(fr));
  }
  function z(I) {
    var O;
    let k = R(), C = N(), J = C.findIndex((ue) => ue === k), ne = C[J + I];
    (O = a.current) != null && O.loop && (ne = J + I < 0 ? C[C.length - 1] : J + I === C.length ? C[0] : C[J + I]), ne && b.setState("value", ne.getAttribute(fr));
  }
  function F(I) {
    let O = R(), k = O == null ? void 0 : O.closest(Xi), C;
    for (; k && !C; )
      k = I > 0 ? W3(k, Xi) : q3(k, Xi), C = k == null ? void 0 : k.querySelector(x1);
    C ? b.setState("value", C.getAttribute(fr)) : z(I);
  }
  let _ = () => D(N().length - 1), H = (I) => {
    I.preventDefault(), I.metaKey ? _() : I.altKey ? F(1) : z(1);
  }, M = (I) => {
    I.preventDefault(), I.metaKey ? D(0) : I.altKey ? F(-1) : z(-1);
  };
  return m.exports.createElement("div", { ref: zs([n, t]), ...v, "cmdk-root": "", onKeyDown: (I) => {
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
          let k = R();
          if (k) {
            let C = new Event(Ip);
            k.dispatchEvent(C);
          }
        }
      }
  } }, m.exports.createElement("label", { "cmdk-label": "", htmlFor: A.inputId, id: A.labelId, style: G3 }, u), m.exports.createElement(fS.Provider, { value: b }, m.exports.createElement(cS.Provider, { value: A }, c)));
}), L3 = m.exports.forwardRef((e, t) => {
  let n = m.exports.useId(), r = m.exports.useRef(null), o = m.exports.useContext(dS), i = Fs(), l = hS(e);
  Ii(() => i.item(n, o), []);
  let s = mS(n, r, [e.value, e.children, r]), a = Rm(), u = Qn((p) => p.value && p.value === s.current), c = Qn((p) => i.filter() === !1 ? !0 : p.search ? p.filtered.items.get(n) > 0 : !0);
  m.exports.useEffect(() => {
    let p = r.current;
    if (!(!p || e.disabled))
      return p.addEventListener(Ip, f), () => p.removeEventListener(Ip, f);
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
  return m.exports.createElement("div", { ref: zs([r, t]), ...w, "cmdk-item": "", role: "option", "aria-disabled": g || void 0, "aria-selected": u || void 0, "data-selected": u || void 0, onPointerMove: g ? void 0 : d, onClick: g ? void 0 : f }, e.children);
}), F3 = m.exports.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, i = m.exports.useId(), l = m.exports.useRef(null), s = m.exports.useRef(null), a = m.exports.useId(), u = Fs(), c = Qn((d) => u.filter() === !1 ? !0 : d.search ? d.filtered.groups.has(i) : !0);
  Ii(() => u.group(i), []), mS(i, l, [e.value, e.heading, s]);
  let f = m.exports.createElement(dS.Provider, { value: i }, r);
  return m.exports.createElement("div", { ref: zs([l, t]), ...o, "cmdk-group": "", role: "presentation", hidden: c ? void 0 : !0 }, n && m.exports.createElement("div", { ref: s, "cmdk-group-heading": "", "aria-hidden": !0, id: a }, n), m.exports.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? a : void 0 }, f));
}), z3 = m.exports.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = m.exports.useRef(null), i = Qn((l) => !l.search);
  return !n && !i ? null : m.exports.createElement("div", { ref: zs([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), B3 = m.exports.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, i = Rm(), l = Qn((a) => a.search), s = Fs();
  return m.exports.useEffect(() => {
    e.value != null && i.setState("search", e.value);
  }, [e.value]), m.exports.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": s.listId, "aria-labelledby": s.labelId, id: s.inputId, type: "text", value: o ? e.value : l, onChange: (a) => {
    o || i.setState("search", a.target.value), n == null || n(a.target.value);
  } });
}), j3 = m.exports.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = m.exports.useRef(null), i = m.exports.useRef(null), l = Fs();
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
  }, []), m.exports.createElement("div", { ref: zs([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: l.listId, "aria-labelledby": l.inputId }, m.exports.createElement("div", { ref: i, "cmdk-list-sizer": "" }, n));
}), H3 = m.exports.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...i } = e;
  return m.exports.createElement(S3, { open: n, onOpenChange: r }, m.exports.createElement(k3, { container: o }, m.exports.createElement(C3, { "cmdk-overlay": "" }), m.exports.createElement(E3, { "aria-label": e.label, "cmdk-dialog": "" }, m.exports.createElement(pS, { ref: t, ...i }))));
}), V3 = m.exports.forwardRef((e, t) => {
  let n = m.exports.useRef(!0), r = Qn((o) => o.filtered.count === 0);
  return m.exports.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : m.exports.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), U3 = m.exports.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return m.exports.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, m.exports.createElement("div", { "aria-hidden": !0 }, r));
}), ln = Object.assign(pS, { List: j3, Item: L3, Input: B3, Group: F3, Separator: z3, Dialog: H3, Empty: V3, Loading: U3 });
function W3(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function q3(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function hS(e) {
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
function zs(e) {
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
function mS(e, t, n) {
  let r = m.exports.useRef(), o = Fs();
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
var Q3 = () => {
  let [e, t] = m.exports.useState(), n = Fo(() => /* @__PURE__ */ new Map());
  return Ii(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, G3 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
let Tm = js();
const re = (e) => Bs(e, Tm);
let Im = js();
re.write = (e) => Bs(e, Im);
let Cc = js();
re.onStart = (e) => Bs(e, Cc);
let Om = js();
re.onFrame = (e) => Bs(e, Om);
let Nm = js();
re.onFinish = (e) => Bs(e, Nm);
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
  return ii.splice(gS(n), 0, o), xr += 1, vS(), o;
};
let gS = (e) => ~(~ii.findIndex((t) => t.time > e) || ~ii.length);
re.cancel = (e) => {
  Cc.delete(e), Om.delete(e), Tm.delete(e), Im.delete(e), Nm.delete(e);
};
re.sync = (e) => {
  Op = !0, re.batchedUpdates(e), Op = !1;
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
    Cc.delete(n), t = null;
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
  re.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : xS();
};
let yr = -1, xr = 0, Op = !1;
function Bs(e, t) {
  Op ? (t.delete(e), e(0)) : (t.add(e), vS());
}
function vS() {
  yr < 0 && (yr = 0, re.frameLoop !== "demand" && Mm(yS));
}
function K3() {
  yr = -1;
}
function yS() {
  ~yr && (Mm(yS), re.batchedUpdates(xS));
}
function xS() {
  let e = yr;
  yr = re.now();
  let t = gS(yr);
  t && (wS(ii.splice(0, t), (n) => n.handler()), xr -= t), Cc.flush(), Tm.flush(e ? Math.min(64, yr - e) : 16.667), Om.flush(), Im.flush(), Nm.flush(), xr || K3();
}
function js() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return {
    add(n) {
      xr += t == e && !e.has(n) ? 1 : 0, e.add(n);
    },
    delete(n) {
      return xr -= t == e && e.has(n) ? 1 : 0, e.delete(n);
    },
    flush(n) {
      t.size && (e = /* @__PURE__ */ new Set(), xr -= t.size, wS(t, (r) => r(n) && e.add(r)), xr += e.size, t = e);
    }
  };
}
function wS(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      re.catch(r);
    }
  });
}
function Np() {
}
const Y3 = (e, t, n) => Object.defineProperty(e, t, {
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
function _l(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), he(n, t);
  }
}
const pl = (e, ...t) => _l(e, (n) => n(...t)), bS = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
let Dm, SS, Tr = null, kS = !1, Lm = Np;
const X3 = (e) => {
  e.to && (SS = e.to), e.now && (re.now = e.now), e.colors !== void 0 && (Tr = e.colors), e.skipAnimation != null && (kS = e.skipAnimation), e.createStringInterpolator && (Dm = e.createStringInterpolator), e.requestAnimationFrame && re.use(e.requestAnimationFrame), e.batchedUpdates && (re.batchedUpdates = e.batchedUpdates), e.willAdvance && (Lm = e.willAdvance), e.frameLoop && (re.frameLoop = e.frameLoop);
};
var $n = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get createStringInterpolator() {
    return Dm;
  },
  get to() {
    return SS;
  },
  get colors() {
    return Tr;
  },
  get skipAnimation() {
    return kS;
  },
  get willAdvance() {
    return Lm;
  },
  assign: X3
});
const Rl = /* @__PURE__ */ new Set();
let jt = [], Bf = [], _u = 0;
const Ec = {
  get idle() {
    return !Rl.size && !jt.length;
  },
  start(e) {
    _u > e.priority ? (Rl.add(e), re.onStart(Z3)) : (CS(e), re(Mp));
  },
  advance: Mp,
  sort(e) {
    if (_u)
      re.onFrame(() => Ec.sort(e));
    else {
      const t = jt.indexOf(e);
      ~t && (jt.splice(t, 1), ES(e));
    }
  },
  clear() {
    jt = [], Rl.clear();
  }
};
function Z3() {
  Rl.forEach(CS), Rl.clear(), re(Mp);
}
function CS(e) {
  jt.includes(e) || ES(e);
}
function ES(e) {
  jt.splice(J3(jt, (t) => t.priority > e.priority), 0, e);
}
function Mp(e) {
  const t = Bf;
  for (let n = 0; n < jt.length; n++) {
    const r = jt[n];
    _u = r.priority, r.idle || (Lm(r), r.advance(e), r.idle || t.push(r));
  }
  return _u = 0, Bf = jt, Bf.length = 0, jt = t, jt.length > 0;
}
function J3(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
const e_ = {
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
}, sn = "[-+]?\\d*\\.?\\d+", Ru = sn + "%";
function $c(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const t_ = new RegExp("rgb" + $c(sn, sn, sn)), n_ = new RegExp("rgba" + $c(sn, sn, sn, sn)), r_ = new RegExp("hsl" + $c(sn, Ru, Ru)), o_ = new RegExp("hsla" + $c(sn, Ru, Ru, sn)), i_ = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, l_ = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, s_ = /^#([0-9a-fA-F]{6})$/, a_ = /^#([0-9a-fA-F]{8})$/;
function u_(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = s_.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Tr && Tr[e] !== void 0 ? Tr[e] : (t = t_.exec(e)) ? (Io(t[1]) << 24 | Io(t[2]) << 16 | Io(t[3]) << 8 | 255) >>> 0 : (t = n_.exec(e)) ? (Io(t[1]) << 24 | Io(t[2]) << 16 | Io(t[3]) << 8 | S1(t[4])) >>> 0 : (t = i_.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = a_.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = l_.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = r_.exec(e)) ? (w1(b1(t[1]), xa(t[2]), xa(t[3])) | 255) >>> 0 : (t = o_.exec(e)) ? (w1(b1(t[1]), xa(t[2]), xa(t[3])) | S1(t[4])) >>> 0 : null;
}
function jf(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function w1(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, i = jf(o, r, e + 1 / 3), l = jf(o, r, e), s = jf(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(l * 255) << 16 | Math.round(s * 255) << 8;
}
function Io(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function b1(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function S1(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function xa(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function k1(e) {
  let t = u_(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, o = (t & 65280) >>> 8, i = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${o}, ${i})`;
}
const as = (e, t, n) => {
  if (W.fun(e))
    return e;
  if (W.arr(e))
    return as({
      range: e,
      output: t,
      extrapolate: n
    });
  if (W.str(e.output[0]))
    return Dm(e);
  const r = e, o = r.output, i = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", s = r.extrapolateRight || r.extrapolate || "extend", a = r.easing || ((u) => u);
  return (u) => {
    const c = f_(u, i);
    return c_(u, i[c], i[c + 1], o[c], o[c + 1], a, l, s, r.map);
  };
};
function c_(e, t, n, r, o, i, l, s, a) {
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
function f_(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
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
const bi = Symbol.for("FluidValue.get"), po = Symbol.for("FluidValue.observers"), Ft = (e) => Boolean(e && e[bi]), vt = (e) => e && e[bi] ? e[bi]() : e, C1 = (e) => e[po] || null;
function d_(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function us(e, t) {
  let n = e[po];
  n && n.forEach((r) => {
    d_(r, t);
  });
}
class $S {
  constructor(t) {
    if (this[bi] = void 0, this[po] = void 0, !t && !(t = this.get))
      throw Error("Unknown getter");
    p_(this, t);
  }
}
const p_ = (e, t) => AS(e, bi, t);
function Oi(e, t) {
  if (e[bi]) {
    let n = e[po];
    n || AS(e, po, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function cs(e, t) {
  let n = e[po];
  if (n && n.has(t)) {
    const r = n.size - 1;
    r ? n.delete(t) : e[po] = null, e.observerRemoved && e.observerRemoved(r, t);
  }
}
const AS = (e, t, n) => Object.defineProperty(e, t, {
  value: n,
  writable: !0,
  configurable: !0
}), Ua = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, h_ = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, E1 = new RegExp(`(${Ua.source})(%|[a-z]+)`, "i"), m_ = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Ac = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, PS = (e) => {
  const [t, n] = g_(e);
  if (!t || bS())
    return e;
  const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  if (r)
    return r.trim();
  if (n && n.startsWith("--")) {
    const o = window.getComputedStyle(document.documentElement).getPropertyValue(n);
    return o || e;
  } else {
    if (n && Ac.test(n))
      return PS(n);
    if (n)
      return n;
  }
  return e;
}, g_ = (e) => {
  const t = Ac.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
};
let Hf;
const v_ = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`, _S = (e) => {
  Hf || (Hf = Tr ? new RegExp(`(${Object.keys(Tr).join("|")})(?!\\w)`, "g") : /^\b$/);
  const t = e.output.map((i) => vt(i).replace(Ac, PS).replace(h_, k1).replace(Hf, k1)), n = t.map((i) => i.match(Ua).map(Number)), o = n[0].map((i, l) => n.map((s) => {
    if (!(l in s))
      throw Error('The arity of each "output" value must be equal');
    return s[l];
  })).map((i) => as(Dp({}, e, {
    output: i
  })));
  return (i) => {
    var l;
    const s = !E1.test(t[0]) && ((l = t.find((u) => E1.test(u))) == null ? void 0 : l.replace(Ua, ""));
    let a = 0;
    return t[0].replace(Ua, () => `${o[a++](i)}${s || ""}`).replace(m_, v_);
  };
}, Fm = "react-spring: ", RS = (e) => {
  const t = e;
  let n = !1;
  if (typeof t != "function")
    throw new TypeError(`${Fm}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, y_ = RS(console.warn);
function x_() {
  y_(`${Fm}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
const w_ = RS(console.warn);
function b_() {
  w_(`${Fm}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function Pc(e) {
  return W.str(e) && (e[0] == "#" || /\d/.test(e) || !bS() && Ac.test(e) || e in (Tr || {}));
}
const zm = typeof window < "u" && window.document && window.document.createElement ? m.exports.useLayoutEffect : m.exports.useEffect, S_ = () => {
  const e = m.exports.useRef(!1);
  return zm(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function TS() {
  const e = m.exports.useState()[1], t = S_();
  return () => {
    t.current && e(Math.random());
  };
}
function k_(e, t) {
  const [n] = m.exports.useState(() => ({
    inputs: t,
    result: e()
  })), r = m.exports.useRef(), o = r.current;
  let i = o;
  return i ? Boolean(t && i.inputs && C_(t, i.inputs)) || (i = {
    inputs: t,
    result: e()
  }) : i = n, m.exports.useEffect(() => {
    r.current = i, o == n && (n.inputs = n.result = void 0);
  }, [i]), i.result;
}
function C_(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
const IS = (e) => m.exports.useEffect(e, E_), E_ = [];
function $1(e) {
  const t = m.exports.useRef();
  return m.exports.useEffect(() => {
    t.current = e;
  }), t.current;
}
const fs = Symbol.for("Animated:node"), $_ = (e) => !!e && e[fs] === e, xn = (e) => e && e[fs], Bm = (e, t) => Y3(e, fs, t), _c = (e) => e && e[fs] && e[fs].getPayload();
class OS {
  constructor() {
    this.payload = void 0, Bm(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}
class Ni extends OS {
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
class Si extends Ni {
  constructor(t) {
    super(0), this._string = null, this._toString = void 0, this._toString = as({
      output: [t, t]
    });
  }
  static create(t) {
    return new Si(t);
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
    t && (this._toString = as({
      output: [this.getValue(), t]
    })), this._value = 0, super.reset();
  }
}
const Tu = {
  dependencies: null
};
class Rc extends OS {
  constructor(t) {
    super(), this.source = t, this.setValue(t);
  }
  getValue(t) {
    const n = {};
    return En(this.source, (r, o) => {
      $_(r) ? n[o] = r.getValue(t) : Ft(r) ? n[o] = vt(r) : t || (n[o] = r);
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
    Tu.dependencies && Ft(t) && Tu.dependencies.add(t);
    const n = _c(t);
    n && he(n, (r) => this.add(r));
  }
}
class jm extends Rc {
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
    return t.length == n.length ? n.map((r, o) => r.setValue(t[o])).some(Boolean) : (super.setValue(t.map(A_)), !0);
  }
}
function A_(e) {
  return (Pc(e) ? Si : Ni).create(e);
}
function Lp(e) {
  const t = xn(e);
  return t ? t.constructor : W.arr(e) ? jm : Pc(e) ? Si : Ni;
}
function Fp() {
  return Fp = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Fp.apply(this, arguments);
}
const A1 = (e, t) => {
  const n = !W.fun(e) || e.prototype && e.prototype.isReactComponent;
  return m.exports.forwardRef((r, o) => {
    const i = m.exports.useRef(null), l = n && m.exports.useCallback((h) => {
      i.current = R_(o, h);
    }, [o]), [s, a] = __(r, t), u = TS(), c = () => {
      const h = i.current;
      if (n && !h)
        return;
      (h ? t.applyAnimatedValues(h, s.getValue(!0)) : !1) === !1 && u();
    }, f = new P_(c, a), d = m.exports.useRef();
    zm(() => (d.current = f, he(a, (h) => Oi(h, f)), () => {
      d.current && (he(d.current.deps, (h) => cs(h, d.current)), re.cancel(d.current.update));
    })), m.exports.useEffect(c, []), IS(() => () => {
      const h = d.current;
      he(h.deps, (v) => cs(v, h));
    });
    const g = t.getComponentProps(s.getValue());
    return /* @__PURE__ */ B(e, {
      ...g,
      ref: l
    });
  });
};
class P_ {
  constructor(t, n) {
    this.update = t, this.deps = n;
  }
  eventObserved(t) {
    t.type == "change" && re.write(this.update);
  }
}
function __(e, t) {
  const n = /* @__PURE__ */ new Set();
  return Tu.dependencies = n, e.style && (e = Fp({}, e, {
    style: t.createAnimatedStyle(e.style)
  })), e = new Rc(e), Tu.dependencies = null, [e, n];
}
function R_(e, t) {
  return e && (W.fun(e) ? e(t) : e.current = t), t;
}
const P1 = Symbol.for("AnimatedComponent"), T_ = (e, {
  applyAnimatedValues: t = () => !1,
  createAnimatedStyle: n = (o) => new Rc(o),
  getComponentProps: r = (o) => o
} = {}) => {
  const o = {
    applyAnimatedValues: t,
    createAnimatedStyle: n,
    getComponentProps: r
  }, i = (l) => {
    const s = _1(l) || "Anonymous";
    return W.str(l) ? l = i[l] || (i[l] = A1(l, o)) : l = l[P1] || (l[P1] = A1(l, o)), l.displayName = `Animated(${s})`, l;
  };
  return En(e, (l, s) => {
    W.arr(e) && (s = _1(l)), i[s] = i(l);
  }), {
    animated: i
  };
}, _1 = (e) => W.str(e) ? e : e && W.str(e.displayName) ? e.displayName : W.fun(e) && e.name || null;
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
const Tl = (e, t) => e === !0 || !!(t && e && (W.fun(e) ? e(t) : At(e).includes(t))), NS = (e, t) => W.obj(e) ? t && e[t] : e, MS = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, I_ = (e) => e, Hm = (e, t = I_) => {
  let n = O_;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  const r = {};
  for (const o of n) {
    const i = t(e[o], o);
    W.und(i) || (r[o] = i);
  }
  return r;
}, O_ = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], N_ = {
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
function M_(e) {
  const t = {};
  let n = 0;
  if (En(e, (r, o) => {
    N_[o] || (t[o] = r, n++);
  }), n)
    return t;
}
function DS(e) {
  const t = M_(e);
  if (t) {
    const n = {
      to: t
    };
    return En(e, (r, o) => o in t || (n[o] = r)), n;
  }
  return Ke({}, e);
}
function ds(e) {
  return e = vt(e), W.arr(e) ? e.map(ds) : Pc(e) ? $n.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function D_(e) {
  for (const t in e)
    return !0;
  return !1;
}
function zp(e) {
  return W.fun(e) || W.arr(e) && W.obj(e[0]);
}
function L_(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function F_(e, t) {
  if (t && e.ref !== t) {
    var n;
    (n = e.ref) == null || n.delete(e), t.add(e), e.ref = t;
  }
}
const z_ = {
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
}, Iu = 1.70158, wa = Iu * 1.525, R1 = Iu + 1, T1 = 2 * Math.PI / 3, I1 = 2 * Math.PI / 4.5, ba = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, B_ = {
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
  easeInBack: (e) => R1 * e * e * e - Iu * e * e,
  easeOutBack: (e) => 1 + R1 * Math.pow(e - 1, 3) + Iu * Math.pow(e - 1, 2),
  easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((wa + 1) * 2 * e - wa) / 2 : (Math.pow(2 * e - 2, 2) * ((wa + 1) * (e * 2 - 2) + wa) + 2) / 2,
  easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * T1),
  easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * T1) + 1,
  easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * I1)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * I1) / 2 + 1,
  easeInBounce: (e) => 1 - ba(1 - e),
  easeOutBounce: ba,
  easeInOutBounce: (e) => e < 0.5 ? (1 - ba(1 - 2 * e)) / 2 : (1 + ba(2 * e - 1)) / 2
}, Bp = Ke({}, z_.default, {
  mass: 1,
  damping: 1,
  easing: B_.linear,
  clamp: !1
});
class j_ {
  constructor() {
    this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, Bp);
  }
}
function H_(e, t, n) {
  n && (n = Ke({}, n), O1(n, t), t = Ke({}, n, t)), O1(e, t), Object.assign(e, t);
  for (const l in Bp)
    e[l] == null && (e[l] = Bp[l]);
  let {
    mass: r,
    frequency: o,
    damping: i
  } = e;
  return W.und(o) || (o < 0.01 && (o = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / o, 2) * r, e.friction = 4 * Math.PI * i * r / o), e;
}
function O1(e, t) {
  if (!W.und(t.decay))
    e.duration = void 0;
  else {
    const n = !W.und(t.tension) || !W.und(t.friction);
    (n || !W.und(t.frequency) || !W.und(t.damping) || !W.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
const N1 = [];
class V_ {
  constructor() {
    this.changed = !1, this.values = N1, this.toValues = null, this.fromValues = N1, this.to = void 0, this.from = void 0, this.config = new j_(), this.immediate = !1;
  }
}
function LS(e, {
  key: t,
  props: n,
  defaultProps: r,
  state: o,
  actions: i
}) {
  return new Promise((l, s) => {
    var a;
    let u, c, f = Tl((a = n.cancel) != null ? a : r == null ? void 0 : r.cancel, t);
    if (f)
      h();
    else {
      W.und(n.pause) || (o.paused = Tl(n.pause, t));
      let v = r == null ? void 0 : r.pause;
      v !== !0 && (v = o.paused || Tl(v, t)), u = Zr(n.delay || 0, t), v ? (o.resumeQueue.add(g), i.pause()) : (i.resume(), g());
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
const Vm = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? li(e.get()) : t.every((n) => n.noop) ? FS(e.get()) : rn(e.get(), t.every((n) => n.finished)), FS = (e) => ({
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
function zS(e, t, n, r) {
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
    const u = Hm(t, (w, p) => p === "onRest" ? void 0 : w);
    let c, f;
    const d = new Promise((w, p) => (c = w, f = p)), g = (w) => {
      const p = o <= (n.cancelId || 0) && li(r) || o !== n.asyncId && rn(r, !1);
      if (p)
        throw w.result = p, f(w), w;
    }, h = (w, p) => {
      const y = new M1(), x = new D1();
      return (async () => {
        if ($n.skipAnimation)
          throw ps(n), x.result = rn(r, !1), f(x), x;
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
      return ps(n), rn(r, !1);
    try {
      let w;
      W.arr(e) ? w = (async (p) => {
        for (const y of p)
          await h(y);
      })(e) : w = Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([w.then(c), d]), v = rn(r.get(), !0, !1);
    } catch (w) {
      if (w instanceof M1)
        v = w.result;
      else if (w instanceof D1)
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
function ps(e, t) {
  _l(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
class M1 extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."), this.result = void 0;
  }
}
class D1 extends Error {
  constructor() {
    super("SkipAnimationSignal"), this.result = void 0;
  }
}
const jp = (e) => e instanceof Um;
let U_ = 1;
class Um extends $S {
  constructor(...t) {
    super(...t), this.id = U_++, this.key = void 0, this._priority = 0;
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
    return x_(), $n.to(this, t);
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
    us(this, {
      type: "change",
      parent: this,
      value: t,
      idle: n
    });
  }
  _onPriorityChange(t) {
    this.idle || Ec.sort(this), us(this, {
      type: "priority",
      parent: this,
      priority: t
    });
  }
}
const ho = Symbol.for("SpringPhase"), BS = 1, Hp = 2, Vp = 4, Vf = (e) => (e[ho] & BS) > 0, sr = (e) => (e[ho] & Hp) > 0, Zi = (e) => (e[ho] & Vp) > 0, L1 = (e, t) => t ? e[ho] |= Hp | BS : e[ho] &= ~Hp, F1 = (e, t) => t ? e[ho] |= Vp : e[ho] &= ~Vp;
class W_ extends Um {
  constructor(t, n) {
    if (super(), this.key = void 0, this.animation = new V_(), this.queue = void 0, this.defaultProps = {}, this._state = {
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
    return Vf(this);
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
    const s = _c(o.to);
    !s && Ft(o.to) && (l = At(vt(o.to))), o.values.forEach((c, f) => {
      if (c.done)
        return;
      const d = c.constructor == Si ? 1 : s ? s[f].lastPosition : l[f];
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
            const T = 1, R = Math.ceil(t / T);
            for (let N = 0; N < R && (E = Math.abs(y) > b, !(!E && (g = Math.abs(d - h) <= x, g))); ++N) {
              S && (P = h == d || h > d == $, P && (y = -y * A, h = d));
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
    })], Promise.all(r.map((o) => this._update(o))).then((o) => Vm(this, o));
  }
  stop(t) {
    const {
      to: n
    } = this.animation;
    return this._focus(this.get()), ps(this._state, t && this._lastCallId), re.batchedUpdates(() => this._stop(n, t)), this;
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
    r = W.obj(r) ? r[n] : r, (r == null || zp(r)) && (r = void 0), o = W.obj(o) ? o[n] : o, o == null && (o = void 0);
    const i = {
      to: r,
      from: o
    };
    return Vf(this) || (t.reverse && ([r, o] = [o, r]), o = vt(o), W.und(o) ? xn(this) || this._set(r) : this._set(o)), i;
  }
  _update(t, n) {
    let r = Ke({}, t);
    const {
      key: o,
      defaultProps: i
    } = this;
    r.default && Object.assign(i, Hm(r, (a, u) => /^on/.test(u) ? NS(a, o) : a)), B1(this, r, "onProps"), el(this, "onProps", r, this);
    const l = this._prepareNode(r);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    const s = this._state;
    return LS(++this._lastCallId, {
      key: o,
      props: r,
      defaultProps: i,
      state: s,
      actions: {
        pause: () => {
          Zi(this) || (F1(this, !0), pl(s.pauseQueue), el(this, "onPause", rn(this, Ji(this, this.animation.to)), this));
        },
        resume: () => {
          Zi(this) && (F1(this, !1), sr(this) && this._resume(), pl(s.resumeQueue), el(this, "onResume", rn(this, Ji(this, this.animation.to)), this));
        },
        start: this._merge.bind(this, l)
      }
    }).then((a) => {
      if (r.loop && a.finished && !(n && a.noop)) {
        const u = jS(r);
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
    const v = zp(n.to), {
      config: w
    } = a, {
      decay: p,
      velocity: y
    } = w;
    (o || i) && (w.velocity = 0), n.config && !v && H_(w, Zr(n.config, l), n.config !== s.config ? Zr(s.config, l) : void 0);
    let x = xn(this);
    if (!x || W.und(f))
      return r(rn(this, !0));
    const b = W.und(n.reset) ? i && !n.default : !W.und(d) && Tl(n.reset, l), A = b ? d : this.get(), S = ds(f), $ = W.num(S) || W.arr(S) || Pc(S), E = !v && (!$ || Tl(s.immediate || n.immediate, l));
    if (h) {
      const N = Lp(f);
      if (N !== x.constructor)
        if (E)
          x = this._set(S);
        else
          throw Error(`Cannot animate between ${x.constructor.name} and ${N.name}, as the "to" prop suggests`);
    }
    const P = x.constructor;
    let T = Ft(f), R = !1;
    if (!T) {
      const N = b || !Vf(this) && g;
      (h || N) && (R = On(ds(A), S), T = !R), (!On(a.immediate, E) && !E || !On(w.decay, p) || !On(w.velocity, y)) && (T = !0);
    }
    if (R && sr(this) && (a.changed && !b ? T = !0 : T || this._stop(u)), !v && ((T || Ft(u)) && (a.values = x.getPayload(), a.toValues = Ft(f) ? null : P == Si ? [1] : At(S)), a.immediate != E && (a.immediate = E, !E && !b && this._set(u)), T)) {
      const {
        onRest: N
      } = a;
      he(Q_, (z) => B1(this, n, z));
      const D = rn(this, Ji(this, u));
      pl(this._pendingCalls, D), this._pendingCalls.add(r), a.changed && re.batchedUpdates(() => {
        a.changed = !b, N == null || N(D, this), b ? Zr(s.onRest, D) : a.onStart == null || a.onStart(D, this);
      });
    }
    b && this._set(A), v ? r(zS(n.to, n, this._state, this)) : T ? this._start() : sr(this) && !h ? this._pendingCalls.add(r) : r(FS(A));
  }
  _focus(t) {
    const n = this.animation;
    t !== n.to && (C1(this) && this._detach(), n.to = t, C1(this) && this._attach());
  }
  _attach() {
    let t = 0;
    const {
      to: n
    } = this.animation;
    Ft(n) && (Oi(n, this), jp(n) && (t = n.priority + 1)), this.priority = t;
  }
  _detach() {
    const {
      to: t
    } = this.animation;
    Ft(t) && cs(t, this);
  }
  _set(t, n = !0) {
    const r = vt(t);
    if (!W.und(r)) {
      const o = xn(this);
      if (!o || !On(r, o.getValue())) {
        const i = Lp(r);
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
    xn(this).reset(vt(t.to)), t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)), sr(this) || (L1(this, !0), Zi(this) || this._resume());
  }
  _resume() {
    $n.skipAnimation ? this.finish() : Ec.start(this);
  }
  _stop(t, n) {
    if (sr(this)) {
      L1(this, !1);
      const r = this.animation;
      he(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), us(this, {
        type: "idle",
        parent: this
      });
      const o = n ? li(this.get()) : rn(this.get(), Ji(this, t != null ? t : r.to));
      pl(this._pendingCalls, o), r.changed && (r.changed = !1, el(this, "onRest", o, this));
    }
  }
}
function Ji(e, t) {
  const n = ds(t), r = ds(e.get());
  return On(r, n);
}
function jS(e, t = e.loop, n = e.to) {
  let r = Zr(t);
  if (r) {
    const o = r !== !0 && DS(r), i = (o || e).reverse, l = !o || o.reset;
    return hs(Ke({}, e, {
      loop: t,
      default: !1,
      pause: void 0,
      to: !i || zp(n) ? n : void 0,
      from: l ? e.from : void 0,
      reset: l
    }, o));
  }
}
function hs(e) {
  const {
    to: t,
    from: n
  } = e = DS(e), r = /* @__PURE__ */ new Set();
  return W.obj(t) && z1(t, r), W.obj(n) && z1(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function q_(e) {
  const t = hs(e);
  return W.und(t.default) && (t.default = Hm(t)), t;
}
function z1(e, t) {
  En(e, (n, r) => n != null && t.add(r));
}
const Q_ = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function B1(e, t, n) {
  e.animation[n] = t[n] !== MS(t, n) ? NS(t[n], e.key) : void 0;
}
function el(e, t, ...n) {
  var r, o, i, l;
  (r = (o = e.animation)[t]) == null || r.call(o, ...n), (i = (l = e.defaultProps)[t]) == null || i.call(l, ...n);
}
const G_ = ["onStart", "onChange", "onRest"];
let K_ = 1;
class Y_ {
  constructor(t, n) {
    this.id = K_++, this.springs = {}, this.queue = [], this.ref = void 0, this._flush = void 0, this._initialProps = void 0, this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._item = void 0, this._state = {
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
    return t && this.queue.push(hs(t)), this;
  }
  start(t) {
    let {
      queue: n
    } = this;
    return t ? n = At(t).map(hs) : this.queue = [], this._flush ? this._flush(this, n) : (qS(this, n), Up(this, n));
  }
  stop(t, n) {
    if (t !== !!t && (n = t), n) {
      const r = this.springs;
      he(At(n), (o) => r[o].stop(!!t));
    } else
      ps(this._state, this._lastAsyncId), this.each((r) => r.stop(!!t));
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
    (o && !this._started || i && !this._started) && (this._started = !0, _l(t, ([a, u]) => {
      u.value = this.get(), a(u, this, this._item);
    }));
    const l = !o && this._started, s = i || l && r.size ? this.get() : null;
    i && n.size && _l(n, ([a, u]) => {
      u.value = s, a(u, this, this._item);
    }), l && (this._started = !1, _l(r, ([a, u]) => {
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
function Up(e, t) {
  return Promise.all(t.map((n) => HS(e, n))).then((n) => Vm(e, n));
}
async function HS(e, t, n) {
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
  c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : he(G_, (v) => {
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
  t.pause === !f.paused ? (f.paused = t.pause, pl(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
  const d = (r || Object.keys(e.springs)).map((v) => e.springs[v].start(t)), g = t.cancel === !0 || MS(t, "cancel") === !0;
  (c || g && f.asyncId) && d.push(LS(++e._lastAsyncId, {
    props: t,
    state: f,
    actions: {
      pause: Np,
      resume: Np,
      start(v, w) {
        g ? (ps(f, e._lastAsyncId), w(li(e))) : (v.onRest = s, w(zS(c, v, f, e)));
      }
    }
  })), f.paused && await new Promise((v) => {
    f.resumeQueue.add(v);
  });
  const h = Vm(e, await Promise.all(d));
  if (l && h.finished && !(n && h.noop)) {
    const v = jS(t, l, o);
    if (v)
      return qS(e, [v]), HS(e, v, !0);
  }
  return a && re.batchedUpdates(() => a(h, e, e.item)), h;
}
function j1(e, t) {
  const n = Ke({}, e.springs);
  return t && he(At(t), (r) => {
    W.und(r.keys) && (r = hs(r)), W.obj(r.to) || (r = Ke({}, r, {
      to: void 0
    })), WS(n, r, (o) => US(o));
  }), VS(e, n), n;
}
function VS(e, t) {
  En(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, Oi(n, e));
  });
}
function US(e, t) {
  const n = new W_();
  return n.key = e, t && Oi(n, t), n;
}
function WS(e, t, n) {
  t.keys && he(t.keys, (r) => {
    (e[r] || (e[r] = n(r)))._prepareNode(t);
  });
}
function qS(e, t) {
  he(t, (n) => {
    WS(e.springs, n, (r) => US(r, e));
  });
}
function X_(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const Z_ = ["children"], Tc = (e) => {
  let {
    children: t
  } = e, n = X_(e, Z_);
  const r = m.exports.useContext(Ou), o = n.pause || !!r.pause, i = n.immediate || !!r.immediate;
  n = k_(() => ({
    pause: o,
    immediate: i
  }), [o, i]);
  const {
    Provider: l
  } = Ou;
  return /* @__PURE__ */ B(l, {
    value: n,
    children: t
  });
}, Ou = J_(Tc, {});
Tc.Provider = Ou.Provider;
Tc.Consumer = Ou.Consumer;
function J_(e, t) {
  return Object.assign(e, m.exports.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
const e4 = () => {
  const e = [], t = function(o) {
    b_();
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
function t4(e, t, n) {
  const r = W.fun(t) && t;
  r && !n && (n = []);
  const o = m.exports.useMemo(() => r || arguments.length == 3 ? e4() : void 0, []), i = m.exports.useRef(0), l = TS(), s = m.exports.useMemo(() => ({
    ctrls: [],
    queue: [],
    flush(p, y) {
      const x = j1(p, y);
      return i.current > 0 && !s.queue.length && !Object.keys(x).some((A) => !p.springs[A]) ? Up(p, y) : new Promise((A) => {
        VS(p, x), s.queue.push(() => {
          A(Up(p, y));
        }), l();
      });
    }
  }), []), a = m.exports.useRef([...s.ctrls]), u = [], c = $1(e) || 0;
  m.exports.useMemo(() => {
    he(a.current.slice(e, c), (p) => {
      L_(p, o), p.stop(!0);
    }), a.current.length = e, f(c, e);
  }, [e]), m.exports.useMemo(() => {
    f(0, Math.min(c, e));
  }, n);
  function f(p, y) {
    for (let x = p; x < y; x++) {
      const b = a.current[x] || (a.current[x] = new Y_(null, s.flush)), A = r ? r(x, b) : t[x];
      A && (u[x] = q_(A));
    }
  }
  const d = a.current.map((p, y) => j1(p, u[y])), g = m.exports.useContext(Tc), h = $1(g), v = g !== h && D_(g);
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
      b && (F_(y, b.ref), y.ref ? y.queue.push(b) : y.start(b));
    });
  }), IS(() => () => {
    he(s.ctrls, (p) => p.stop(!0));
  });
  const w = d.map((p) => Ke({}, p));
  return o ? [w, o] : w;
}
function n4(e, t) {
  const n = W.fun(e), [[r], o] = t4(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, o] : r;
}
let H1;
(function(e) {
  e.MOUNT = "mount", e.ENTER = "enter", e.UPDATE = "update", e.LEAVE = "leave";
})(H1 || (H1 = {}));
class r4 extends Um {
  constructor(t, n) {
    super(), this.key = void 0, this.idle = !0, this.calc = void 0, this._active = /* @__PURE__ */ new Set(), this.source = t, this.calc = as(...n);
    const r = this._get(), o = Lp(r);
    Bm(this, o.create(r));
  }
  advance(t) {
    const n = this._get(), r = this.get();
    On(n, r) || (xn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && V1(this._active) && Uf(this);
  }
  _get() {
    const t = W.arr(this.source) ? this.source.map(vt) : At(vt(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !V1(this._active) && (this.idle = !1, he(_c(this), (t) => {
      t.done = !1;
    }), $n.skipAnimation ? (re.batchedUpdates(() => this.advance()), Uf(this)) : Ec.start(this));
  }
  _attach() {
    let t = 1;
    he(At(this.source), (n) => {
      Ft(n) && Oi(n, this), jp(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1));
    }), this.priority = t, this._start();
  }
  _detach() {
    he(At(this.source), (t) => {
      Ft(t) && cs(t, this);
    }), this._active.clear(), Uf(this);
  }
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = At(this.source).reduce((n, r) => Math.max(n, (jp(r) ? r.priority : 0) + 1), 0));
  }
}
function o4(e) {
  return e.idle !== !1;
}
function V1(e) {
  return !e.size || Array.from(e).every(o4);
}
function Uf(e) {
  e.idle || (e.idle = !0, he(_c(e), (t) => {
    t.done = !0;
  }), us(e, {
    type: "idle",
    parent: e
  }));
}
$n.assign({
  createStringInterpolator: _S,
  to: (e, t) => new r4(e, t)
});
function Wm(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const i4 = ["style", "children", "scrollTop", "scrollLeft"], QS = /^--/;
function l4(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !QS.test(e) && !(Il.hasOwnProperty(e) && Il[e]) ? t + "px" : ("" + t).trim();
}
const U1 = {};
function s4(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", r = t, {
    style: o,
    children: i,
    scrollTop: l,
    scrollLeft: s
  } = r, a = Wm(r, i4), u = Object.values(a), c = Object.keys(a).map((f) => n || e.hasAttribute(f) ? f : U1[f] || (U1[f] = f.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  i !== void 0 && (e.textContent = i);
  for (let f in o)
    if (o.hasOwnProperty(f)) {
      const d = l4(f, o[f]);
      QS.test(f) ? e.style.setProperty(f, d) : e.style[f] = d;
    }
  c.forEach((f, d) => {
    e.setAttribute(f, u[d]);
  }), l !== void 0 && (e.scrollTop = l), s !== void 0 && (e.scrollLeft = s);
}
let Il = {
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
const a4 = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), u4 = ["Webkit", "Ms", "Moz", "O"];
Il = Object.keys(Il).reduce((e, t) => (u4.forEach((n) => e[a4(n, t)] = e[t]), e), Il);
const c4 = ["x", "y", "z"], f4 = /^(matrix|translate|scale|rotate|skew)/, d4 = /^(translate)/, p4 = /^(rotate|skew)/, Wf = (e, t) => W.num(e) && e !== 0 ? e + t : e, Wa = (e, t) => W.arr(e) ? e.every((n) => Wa(n, t)) : W.num(e) ? e === t : parseFloat(e) === t;
class h4 extends Rc {
  constructor(t) {
    let {
      x: n,
      y: r,
      z: o
    } = t, i = Wm(t, c4);
    const l = [], s = [];
    (n || r || o) && (l.push([n || 0, r || 0, o || 0]), s.push((a) => [`translate3d(${a.map((u) => Wf(u, "px")).join(",")})`, Wa(a, 0)])), En(i, (a, u) => {
      if (u === "transform")
        l.push([a || ""]), s.push((c) => [c, c === ""]);
      else if (f4.test(u)) {
        if (delete i[u], W.und(a))
          return;
        const c = d4.test(u) ? "px" : p4.test(u) ? "deg" : "";
        l.push(At(a)), s.push(u === "rotate3d" ? ([f, d, g, h]) => [`rotate3d(${f},${d},${g},${Wf(h, c)})`, Wa(h, 0)] : (f) => [`${u}(${f.map((d) => Wf(d, c)).join(",")})`, Wa(f, u.startsWith("scale") ? 1 : 0)]);
      }
    }), l.length && (i.transform = new m4(l, s)), super(i);
  }
}
class m4 extends $S {
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
    t == 0 && he(this.inputs, (n) => he(n, (r) => Ft(r) && cs(r, this)));
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), us(this, t);
  }
}
const g4 = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], v4 = ["scrollTop", "scrollLeft"];
$n.assign({
  batchedUpdates: hn.exports.unstable_batchedUpdates,
  createStringInterpolator: _S,
  colors: e_
});
const y4 = T_(g4, {
  applyAnimatedValues: s4,
  createAnimatedStyle: (e) => new h4(e),
  getComponentProps: (e) => Wm(e, v4)
}), x4 = y4.animated;
function GS(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = GS(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function W1() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = GS(t)) && (r && (r += " "), r += n);
  return r;
}
function w4(e, t, { includes: n = [], ...r } = {}) {
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
var ke = "colors", ct = "sizes", X = "space", KS = { gap: X, gridGap: X, columnGap: X, gridColumnGap: X, rowGap: X, gridRowGap: X, inset: X, insetBlock: X, insetBlockEnd: X, insetBlockStart: X, insetInline: X, insetInlineEnd: X, insetInlineStart: X, margin: X, marginTop: X, marginRight: X, marginBottom: X, marginLeft: X, marginBlock: X, marginBlockEnd: X, marginBlockStart: X, marginInline: X, marginInlineEnd: X, marginInlineStart: X, padding: X, paddingTop: X, paddingRight: X, paddingBottom: X, paddingLeft: X, paddingBlock: X, paddingBlockEnd: X, paddingBlockStart: X, paddingInline: X, paddingInlineEnd: X, paddingInlineStart: X, top: X, right: X, bottom: X, left: X, scrollMargin: X, scrollMarginTop: X, scrollMarginRight: X, scrollMarginBottom: X, scrollMarginLeft: X, scrollMarginX: X, scrollMarginY: X, scrollMarginBlock: X, scrollMarginBlockEnd: X, scrollMarginBlockStart: X, scrollMarginInline: X, scrollMarginInlineEnd: X, scrollMarginInlineStart: X, scrollPadding: X, scrollPaddingTop: X, scrollPaddingRight: X, scrollPaddingBottom: X, scrollPaddingLeft: X, scrollPaddingX: X, scrollPaddingY: X, scrollPaddingBlock: X, scrollPaddingBlockEnd: X, scrollPaddingBlockStart: X, scrollPaddingInline: X, scrollPaddingInlineEnd: X, scrollPaddingInlineStart: X, fontSize: "fontSizes", background: ke, backgroundColor: ke, backgroundImage: ke, borderImage: ke, border: ke, borderBlock: ke, borderBlockEnd: ke, borderBlockStart: ke, borderBottom: ke, borderBottomColor: ke, borderColor: ke, borderInline: ke, borderInlineEnd: ke, borderInlineStart: ke, borderLeft: ke, borderLeftColor: ke, borderRight: ke, borderRightColor: ke, borderTop: ke, borderTopColor: ke, caretColor: ke, color: ke, columnRuleColor: ke, fill: ke, outline: ke, outlineColor: ke, stroke: ke, textDecorationColor: ke, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: ct, minBlockSize: ct, maxBlockSize: ct, inlineSize: ct, minInlineSize: ct, maxInlineSize: ct, width: ct, minWidth: ct, maxWidth: ct, height: ct, minHeight: ct, maxHeight: ct, flexBasis: ct, gridTemplateColumns: ct, gridTemplateRows: ct, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, b4 = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, Mi = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n, ...r) => {
    const o = ((i) => JSON.stringify(i, b4))(t);
    return o in e ? e[o] : e[o] = n(t, ...r);
  };
}, io = Symbol.for("sxs.internal"), qm = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), q1 = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: S4 } = Object.prototype, Wp = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), k4 = /\s+(?![^()]*\))/, Oo = (e) => (t) => e(...typeof t == "string" ? String(t).split(k4) : [t]), Q1 = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: Oo((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: Oo((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: Oo((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: Oo((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: Oo((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: Oo((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, qf = /([\d.]+)([^]*)/, C4 = (e, t) => e.length ? e.reduce((n, r) => (n.push(...t.map((o) => o.includes("&") ? o.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(o) ? `:is(${r})` : r) : r + " " + o)), n), []) : t, E4 = (e, t) => e in $4 && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (n, r, o, i) => r + (o === "stretch" ? `-moz-available${i};${Wp(e)}:${r}-webkit-fill-available` : `-moz-fit-content${i};${Wp(e)}:${r}fit-content`) + i) : String(t), $4 = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, Gn = (e) => e ? e + "-" : "", YS = (e, t, n) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (r, o, i, l, s) => l == "$" == !!i ? r : (o || l == "--" ? "calc(" : "") + "var(--" + (l === "$" ? Gn(t) + (s.includes("$") ? "" : Gn(n)) + s.replace(/\$/g, "-") : s) + ")" + (o || l == "--" ? "*" + (o || "") + (i || "1") + ")" : "")), A4 = /\s*,\s*(?![^()]*\))/, P4 = Object.prototype.toString, Xo = (e, t, n, r, o) => {
  let i, l, s;
  const a = (u, c, f) => {
    let d, g;
    const h = (v) => {
      for (d in v) {
        const y = d.charCodeAt(0) === 64, x = y && Array.isArray(v[d]) ? v[d] : [v[d]];
        for (g of x) {
          const b = /[A-Z]/.test(p = d) ? p : p.replace(/-[^]/g, (S) => S[1].toUpperCase()), A = typeof g == "object" && g && g.toString === P4 && (!r.utils[b] || !c.length);
          if (b in r.utils && !A) {
            const S = r.utils[b];
            if (S !== l) {
              l = S, h(S(g)), l = null;
              continue;
            }
          } else if (b in Q1) {
            const S = Q1[b];
            if (S !== s) {
              s = S, h(S(g)), s = null;
              continue;
            }
          }
          if (y && (w = d.slice(1) in r.media ? "@media " + r.media[d.slice(1)] : d, d = w.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (S, $, E, P, T, R) => {
            const N = qf.test($), D = 0.0625 * (N ? -1 : 1), [z, F] = N ? [P, $] : [$, P];
            return "(" + (E[0] === "=" ? "" : E[0] === ">" === N ? "max-" : "min-") + z + ":" + (E[0] !== "=" && E.length === 1 ? F.replace(qf, (_, H, M) => Number(H) + D * (E === ">" ? 1 : -1) + M) : F) + (T ? ") and (" + (T[0] === ">" ? "min-" : "max-") + z + ":" + (T.length === 1 ? R.replace(qf, (_, H, M) => Number(H) + D * (T === ">" ? -1 : 1) + M) : R) : "") + ")";
          })), A) {
            const S = y ? f.concat(d) : [...f], $ = y ? [...c] : C4(c, d.split(A4));
            i !== void 0 && o(G1(...i)), i = void 0, a(g, $, S);
          } else
            i === void 0 && (i = [[], c, f]), d = y || d.charCodeAt(0) !== 36 ? d : `--${Gn(r.prefix)}${d.slice(1).replace(/\$/g, "-")}`, g = A ? g : typeof g == "number" ? g && b in _4 ? String(g) + "px" : String(g) : YS(E4(b, g == null ? "" : g), r.prefix, r.themeMap[b]), i[0].push(`${y ? `${d} ` : `${Wp(d)}:`}${g}`);
        }
      }
      var w, p;
    };
    h(u), i !== void 0 && o(G1(...i)), i = void 0;
  };
  a(e, t, n);
}, G1 = (e, t, n) => `${n.map((r) => `${r}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(n.length ? n.length + 1 : 0).join("}")}`, _4 = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, K1 = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), lo = (e) => ((t) => {
  let n, r = "";
  for (n = Math.abs(t); n > 52; n = n / 52 | 0)
    r = K1(n % 52) + r;
  return K1(n % 52) + r;
})(((t, n) => {
  let r = n.length;
  for (; r; )
    t = 33 * t ^ n.charCodeAt(--r);
  return t;
})(5381, JSON.stringify(e)) >>> 0), hl = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], R4 = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, T4 = (e) => {
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
      if (R4(s)) {
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
          const g = d.slice(14, -3).trim().split(/\s+/), h = hl[g[0]];
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
    for (let s = hl.length - 1; s >= 0; --s) {
      const a = hl[s];
      if (!l[a]) {
        const u = hl[s + 1], c = l[u] ? l[u].index : i.cssRules.length;
        i.insertRule("@media{}", c), i.insertRule(`--sxs{--sxs:${s}}`, c), l[a] = { group: i.cssRules[c + 1], index: c, cache: /* @__PURE__ */ new Set([s]) };
      }
      I4(l[a]);
    }
  };
  return r(), t;
}, I4 = (e) => {
  const t = e.group;
  let n = t.cssRules.length;
  e.apply = (r) => {
    try {
      t.insertRule(r, n), ++n;
    } catch {
    }
  };
}, tl = Symbol(), O4 = Mi(), Y1 = (e, t) => O4(e, () => (...n) => {
  let r = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const o of n)
    if (o != null)
      if (o[io]) {
        r.type == null && (r.type = o[io].type);
        for (const i of o[io].composers)
          r.composers.add(i);
      } else
        o.constructor !== Object || o.$$typeof ? r.type == null && (r.type = o) : r.composers.add(N4(o, e));
  return r.type == null && (r.type = "span"), r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]), M4(e, r, t);
}), N4 = ({ variants: e, compoundVariants: t, defaultVariants: n, ...r }, o) => {
  const i = `${Gn(o.prefix)}c-${lo(r)}`, l = [], s = [], a = /* @__PURE__ */ Object.create(null), u = [];
  for (const d in n)
    a[d] = String(n[d]);
  if (typeof e == "object" && e)
    for (const d in e) {
      c = a, f = d, S4.call(c, f) || (a[d] = "undefined");
      const g = e[d];
      for (const h in g) {
        const v = { [d]: String(h) };
        String(h) === "undefined" && u.push(d);
        const w = g[h], p = [v, w, !q1(w)];
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
      const v = [h, g, !q1(g)];
      s.push(v);
    }
  return [i, r, l, s, a, u];
}, M4 = (e, t, n) => {
  const [r, o, i, l] = D4(t.composers), s = typeof t.type == "function" || t.type.$$typeof ? ((f) => {
    function d() {
      for (let g = 0; g < d[tl].length; g++) {
        const [h, v] = d[tl][g];
        f.rules[h].apply(v);
      }
      return d[tl] = [], null;
    }
    return d[tl] = [], d.rules = {}, hl.forEach((g) => d.rules[g] = { apply: (h) => d[tl].push([g, h]) }), d;
  })(n) : null, a = (s || n).rules, u = `.${r}${o.length > 1 ? `:where(.${o.slice(1).join(".")})` : ""}`, c = (f) => {
    f = typeof f == "object" && f || L4;
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
      const A = X1(x, h, e.media), S = X1(b, h, e.media, !0);
      for (const $ of A)
        if ($ !== void 0)
          for (const [E, P, T] of $) {
            const R = `${p}-${lo(P)}-${E}`;
            v.add(R);
            const N = (T ? n.rules.resonevar : n.rules.onevar).cache, D = T ? a.resonevar : a.onevar;
            N.has(R) || (N.add(R), Xo(P, [`.${R}`], [], e, (z) => {
              D.apply(z);
            }));
          }
      for (const $ of S)
        if ($ !== void 0)
          for (const [E, P] of $) {
            const T = `${p}-${lo(P)}-${E}`;
            v.add(T), n.rules.allvar.cache.has(T) || (n.rules.allvar.cache.add(T), Xo(P, [`.${T}`], [], e, (R) => {
              a.allvar.apply(R);
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
}, D4 = (e) => {
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
}, X1 = (e, t, n, r) => {
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
}, L4 = {}, F4 = Mi(), z4 = (e, t) => F4(e, () => (...n) => {
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
}), B4 = Mi(), j4 = (e, t) => B4(e, () => (n) => {
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
}), H4 = class {
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
}, V4 = Mi(), U4 = (e, t) => V4(e, () => (n, r) => {
  r = typeof n == "object" && n || Object(r);
  const o = `.${n = (n = typeof n == "string" ? n : "") || `${Gn(e.prefix)}t-${lo(r)}`}`, i = {}, l = [];
  for (const a in r) {
    i[a] = {};
    for (const u in r[a]) {
      const c = `--${Gn(e.prefix)}${a}-${u}`, f = YS(String(r[a][u]), e.prefix, a);
      i[a][u] = new H4(u, f, a, e.prefix), l.push(`${c}:${f}`);
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
}), W4 = Mi(), q4 = Mi(), Q4 = (e) => {
  const t = ((n) => {
    let r = !1;
    const o = W4(n, (i) => {
      r = !0;
      const l = "prefix" in (i = typeof i == "object" && i || {}) ? String(i.prefix) : "", s = typeof i.media == "object" && i.media || {}, a = typeof i.root == "object" ? i.root || null : globalThis.document || null, u = typeof i.theme == "object" && i.theme || {}, c = { prefix: l, media: s, theme: u, themeMap: typeof i.themeMap == "object" && i.themeMap || { ...KS }, utils: typeof i.utils == "object" && i.utils || {} }, f = T4(a), d = { css: Y1(c, f), globalCss: z4(c, f), keyframes: j4(c, f), createTheme: U4(c, f), reset() {
        f.reset(), d.theme.toString();
      }, theme: {}, sheet: f, config: c, prefix: l, getCssText: f.toString, toString: f.toString };
      return String(d.theme = d.createTheme(u)), d;
    });
    return r || o.reset(), o;
  })(e);
  return t.styled = (({ config: n, sheet: r }) => q4(n, () => {
    const o = Y1(n, r);
    return (...i) => {
      const l = o(...i), s = l[io].type, a = He.forwardRef((u, c) => {
        const f = u && u.as || s, { props: d, deferredInjector: g } = l(u);
        return delete d.as, d.ref = c, g ? He.createElement(He.Fragment, null, He.createElement(f, d), He.createElement(g, null)) : He.createElement(f, d);
      });
      return a.className = l.className, a.displayName = `Styled.${s.displayName || s.name || s}`, a.selector = l.selector, a.toString = () => l.selector, a[io] = l[io], a;
    };
  }))(t), t;
};
function G4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ms(e, t) {
  return ms = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, ms(e, t);
}
function K4(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ms(e, t);
}
function qp(e) {
  return qp = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, qp(e);
}
function Y4(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function X4() {
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
function qa(e, t, n) {
  return X4() ? qa = Reflect.construct : qa = function(o, i, l) {
    var s = [null];
    s.push.apply(s, i);
    var a = Function.bind.apply(o, s), u = new a();
    return l && ms(u, l.prototype), u;
  }, qa.apply(null, arguments);
}
function Qp(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Qp = function(r) {
    if (r === null || !Y4(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return qa(r, arguments, qp(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ms(o, r);
  }, Qp(e);
}
var wr = /* @__PURE__ */ function(e) {
  K4(t, e);
  function t(n) {
    var r;
    return r = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + n + " for more information.") || this, G4(r);
  }
  return t;
}(/* @__PURE__ */ Qp(Error)), Z4 = /--[\S]*/g;
function J4(e, t) {
  if (!e || !e.match(Z4))
    throw new wr(73);
  var n;
  if (typeof document < "u" && document.documentElement !== null && (n = getComputedStyle(document.documentElement).getPropertyValue(e)), n)
    return n.trim();
  if (t)
    return t;
  throw new wr(74);
}
function Qf(e) {
  return Math.round(e * 255);
}
function eR(e, t, n) {
  return Qf(e) + "," + Qf(t) + "," + Qf(n);
}
function Z1(e, t, n, r) {
  if (r === void 0 && (r = eR), t === 0)
    return r(n, n, n);
  var o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * t, l = i * (1 - Math.abs(o % 2 - 1)), s = 0, a = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, a = l) : o >= 1 && o < 2 ? (s = l, a = i) : o >= 2 && o < 3 ? (a = i, u = l) : o >= 3 && o < 4 ? (a = l, u = i) : o >= 4 && o < 5 ? (s = l, u = i) : o >= 5 && o < 6 && (s = i, u = l);
  var c = n - i / 2, f = s + c, d = a + c, g = u + c;
  return r(f, d, g);
}
var J1 = {
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
function tR(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return J1[t] ? "#" + J1[t] : e;
}
var nR = /^#[a-fA-F0-9]{6}$/, rR = /^#[a-fA-F0-9]{8}$/, oR = /^#[a-fA-F0-9]{3}$/, iR = /^#[a-fA-F0-9]{4}$/, Gf = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i, lR = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i, sR = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, aR = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
function uR(e) {
  if (typeof e != "string")
    throw new wr(3);
  var t = tR(e);
  if (t.match(nR))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(rR)) {
    var n = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: n
    };
  }
  if (t.match(oR))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(iR)) {
    var r = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: r
    };
  }
  var o = Gf.exec(t);
  if (o)
    return {
      red: parseInt("" + o[1], 10),
      green: parseInt("" + o[2], 10),
      blue: parseInt("" + o[3], 10)
    };
  var i = lR.exec(t.substring(0, 50));
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
      alpha: parseFloat("" + i[4])
    };
  var l = sR.exec(t);
  if (l) {
    var s = parseInt("" + l[1], 10), a = parseInt("" + l[2], 10) / 100, u = parseInt("" + l[3], 10) / 100, c = "rgb(" + Z1(s, a, u) + ")", f = Gf.exec(c);
    if (!f)
      throw new wr(4, t, c);
    return {
      red: parseInt("" + f[1], 10),
      green: parseInt("" + f[2], 10),
      blue: parseInt("" + f[3], 10)
    };
  }
  var d = aR.exec(t.substring(0, 50));
  if (d) {
    var g = parseInt("" + d[1], 10), h = parseInt("" + d[2], 10) / 100, v = parseInt("" + d[3], 10) / 100, w = "rgb(" + Z1(g, h, v) + ")", p = Gf.exec(w);
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
var cR = function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, ev = cR;
function No(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function tv(e, t, n) {
  if (typeof e == "number" && typeof t == "number" && typeof n == "number")
    return ev("#" + No(e) + No(t) + No(n));
  if (typeof e == "object" && t === void 0 && n === void 0)
    return ev("#" + No(e.red) + No(e.green) + No(e.blue));
  throw new wr(6);
}
function fR(e, t, n, r) {
  if (typeof e == "string" && typeof t == "number") {
    var o = uR(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof n == "number" && typeof r == "number")
      return r >= 1 ? tv(e, t, n) : "rgba(" + e + "," + t + "," + n + "," + r + ")";
    if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0)
      return e.alpha >= 1 ? tv(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new wr(7);
}
const nv = {
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
}, rv = (e) => e.map((t) => `${t} cubic-bezier(0.4, 0, 0.2, 1) 150ms`).join(","), Nt = {
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
}, Qm = Q4({
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
    space: nv,
    sizes: {
      ...nv,
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
      default: rv([
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
      colors: rv([
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
      backgroundColor: fR(J4("--mayumi-colors-underPageBackgroundColor", "#1e1e1e"), 0.85),
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
  themeMap: KS
}), dR = Qm.styled;
Qm.globalCss;
Qm.getCssText;
var ov = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Jt = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, pR = (...e) => [...e].flat().filter(Boolean), XS = (e, t) => {
  let n = {};
  for (let r in e)
    t != null && t.hasOwnProperty(r) ? n[r] = typeof e[r] == "object" ? XS(e[r], t[r]) : t[r] + " " + e[r] : n[r] = e[r];
  for (let r in t)
    n.hasOwnProperty(r) || (n[r] = t[r]);
  return n;
}, iv = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
function hR() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = ZS(t)) && (r && (r += " "), r += n);
  return r;
}
function ZS(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = ZS(e[r])) && (n && (n += " "), n += t);
  return n;
}
function Gp() {
  return Gp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Gp.apply(this, arguments);
}
var Gm = "-";
function mR(e) {
  var t = vR(e);
  function n(o) {
    var i = o.split(Gm);
    return i[0] === "" && i.length !== 1 && i.shift(), JS(i, t) || gR(o);
  }
  function r(o) {
    return e.conflictingClassGroups[o] || [];
  }
  return {
    getClassGroupId: n,
    getConflictingClassGroupIds: r
  };
}
function JS(e, t) {
  var n;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], o = t.nextPart.get(r), i = o ? JS(e.slice(1), o) : void 0;
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
var lv = /^\[(.+)\]$/;
function gR(e) {
  if (lv.test(e)) {
    var t = lv.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function vR(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = xR(Object.entries(e.classGroups), n);
  return o.forEach(function(i) {
    var l = i[0], s = i[1];
    Kp(s, r, l, t);
  }), r;
}
function Kp(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var i = o === "" ? t : sv(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (yR(o)) {
        Kp(o(r), t, n, r);
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
      Kp(a, sv(t, s), n, r);
    });
  });
}
function sv(e, t) {
  var n = e;
  return t.split(Gm).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function yR(e) {
  return e.isThemeGetter;
}
function xR(e, t) {
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
function wR(e) {
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
var ek = "!";
function bR(e) {
  var t = e.separator || ":";
  return function(r) {
    for (var o = 0, i = [], l = 0, s = 0; s < r.length; s++) {
      var a = r[s];
      o === 0 && a === t[0] && (t.length === 1 || r.slice(s, s + t.length) === t) && (i.push(r.slice(l, s)), l = s + t.length), a === "[" ? o++ : a === "]" && o--;
    }
    var u = i.length === 0 ? r : r.substring(l), c = u.startsWith(ek), f = c ? u.substring(1) : u;
    return {
      modifiers: i,
      hasImportantModifier: c,
      baseClassName: f
    };
  };
}
function SR(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function kR(e) {
  return Gp({
    cache: wR(e.cacheSize),
    splitModifiers: bR(e)
  }, mR(e));
}
var CR = /\s+/;
function ER(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(CR).map(function(l) {
    var s = n(l), a = s.modifiers, u = s.hasImportantModifier, c = s.baseClassName, f = r(c);
    if (!f)
      return {
        isTailwindClass: !1,
        originalClassName: l
      };
    var d = SR(a).join(":"), g = u ? d + ek : d;
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
function Yp() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, i, l = s;
  function s(u) {
    var c = t[0], f = t.slice(1), d = f.reduce(function(g, h) {
      return h(g);
    }, c());
    return r = kR(d), o = r.cache.get, i = r.cache.set, l = a, a(u);
  }
  function a(u) {
    var c = o(u);
    if (c)
      return c;
    var f = ER(u, r);
    return i(u, f), f;
  }
  return function() {
    return l(hR.apply(null, arguments));
  };
}
function _e(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var tk = /^\[(?:([a-z-]+):)?(.+)\]$/i, $R = /^\d+\/\d+$/, AR = /* @__PURE__ */ new Set(["px", "full", "screen"]), PR = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, _R = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))/, RR = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Zt(e) {
  return Ol(e) || AR.has(e) || $R.test(e) || Yr(e);
}
function Yr(e) {
  return So(e, "length", MR);
}
function TR(e) {
  return So(e, "size", nk);
}
function IR(e) {
  return So(e, "position", nk);
}
function OR(e) {
  return So(e, "url", DR);
}
function Kf(e) {
  return So(e, "number", Ol);
}
function Ol(e) {
  return !Number.isNaN(Number(e));
}
function nl(e) {
  return av(e) || So(e, "number", av);
}
function Be(e) {
  return tk.test(e);
}
function rl() {
  return !0;
}
function ar(e) {
  return PR.test(e);
}
function NR(e) {
  return So(e, "", LR);
}
function So(e, t, n) {
  var r = tk.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function MR(e) {
  return _R.test(e);
}
function nk() {
  return !1;
}
function DR(e) {
  return e.startsWith("url(");
}
function av(e) {
  return Number.isInteger(Number(e));
}
function LR(e) {
  return RR.test(e);
}
function Xp() {
  var e = _e("colors"), t = _e("spacing"), n = _e("blur"), r = _e("brightness"), o = _e("borderColor"), i = _e("borderRadius"), l = _e("borderSpacing"), s = _e("borderWidth"), a = _e("contrast"), u = _e("grayscale"), c = _e("hueRotate"), f = _e("invert"), d = _e("gap"), g = _e("gradientColorStops"), h = _e("inset"), v = _e("margin"), w = _e("opacity"), p = _e("padding"), y = _e("saturate"), x = _e("scale"), b = _e("sepia"), A = _e("skew"), S = _e("space"), $ = _e("translate"), E = function() {
    return ["auto", "contain", "none"];
  }, P = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, T = function() {
    return ["auto", t];
  }, R = function() {
    return ["", Zt];
  }, N = function() {
    return ["auto", Ol, Be];
  }, D = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, z = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, F = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, _ = function() {
    return ["start", "end", "center", "between", "around", "evenly"];
  }, H = function() {
    return ["", "0", Be];
  }, M = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, I = function() {
    return [Ol, Kf];
  }, O = function() {
    return [Ol, Be];
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
      borderWidth: R(),
      contrast: I(),
      grayscale: H(),
      hueRotate: O(),
      invert: H(),
      gap: [t],
      gradientColorStops: [e],
      inset: T(),
      margin: T(),
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
        grow: H()
      }],
      shrink: [{
        shrink: H()
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
        "col-start": N()
      }],
      "col-end": [{
        "col-end": N()
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
        "row-start": N()
      }],
      "row-end": [{
        "row-end": N()
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Kf]
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
        bg: [].concat(D(), [IR])
      }],
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      "bg-size": [{
        bg: ["auto", "cover", "contain", TR]
      }],
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, OR]
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
        "ring-offset": [Zt]
      }],
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      shadow: [{
        shadow: ["", "inner", "none", ar, NR]
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
        duration: O()
      }],
      ease: [{
        ease: ["linear", "in", "out", "in-out", Be]
      }],
      delay: [{
        delay: O()
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
        stroke: [Zt, Kf]
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
var FR = /* @__PURE__ */ Yp(Xp);
function zR(e, t) {
  for (var n in t)
    rk(e, n, t[n]);
  return e;
}
var BR = Object.prototype.hasOwnProperty, jR = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function rk(e, t, n) {
  if (!BR.call(e, t) || jR.has(typeof n) || n === null) {
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
      rk(e[t], r, n[r]);
  }
}
function HR(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return typeof e == "function" ? Yp.apply(void 0, [Xp, e].concat(n)) : Yp.apply(void 0, [function() {
    return zR(Xp(), e);
  }].concat(n));
}
var Nu = (...e) => e.flat(1 / 0).filter(Boolean).join(" "), ol = (...e) => (t = {}) => t.twMerge ? (Jt(t.twMergeConfig) ? FR : HR(t.twMergeConfig))(Nu(e)) : Nu(e), uv = (e, t) => {
  let n = {};
  return typeof e != "object" || typeof t != "object" || Object.keys(e).forEach((r) => {
    t[r] ? n[r] = Nu([e[r], t[r]]) : n[r] = e[r];
  }), n;
}, VR = { twMerge: !0, twMergeConfig: {} }, UR = (e, t = VR) => {
  var n, r, o, i, l;
  let { slots: s = {}, variants: a = {}, compoundVariants: u = [], defaultVariants: c = {} } = e, f = Nu((n = e == null ? void 0 : e.extend) == null ? void 0 : n.base, e == null ? void 0 : e.base), d = XS(a, (r = e == null ? void 0 : e.extend) == null ? void 0 : r.variants), g = Object.assign({}, (o = e == null ? void 0 : e.extend) == null ? void 0 : o.defaultVariants, c), h = Jt(s) ? {} : { base: e == null ? void 0 : e.base, ...s }, v = Jt((i = e == null ? void 0 : e.extend) == null ? void 0 : i.slots) ? h : uv((l = e == null ? void 0 : e.extend) == null ? void 0 : l.slots, Jt(h) ? { base: e == null ? void 0 : e.base } : h), w = (y) => {
    var x, b, A;
    if (Jt(d) && Jt(s) && Jt((x = e == null ? void 0 : e.extend) == null ? void 0 : x.slots))
      return ol(f, y == null ? void 0 : y.class, y == null ? void 0 : y.className)(t);
    if (u && !Array.isArray(u))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof u}`);
    let S = (z, F, _ = [], H) => {
      let M = _;
      if (typeof F == "string")
        M.push(iv(F).split(" ").map((I) => `${z}:${I}`));
      else if (Array.isArray(F))
        M.push(F.flatMap((I) => `${z}:${I}`));
      else if (typeof F == "object" && typeof H == "string") {
        let I = F == null ? void 0 : F[H];
        if (I && typeof I == "string") {
          let O = iv(I);
          M[H] = M[H] ? [...M[H], ...O.split(" ").map((k) => `${z}:${k}`)] : O.split(" ").map((k) => `${z}:${k}`);
        } else
          Array.isArray(I) && I.length > 0 && (M[H] = I.flatMap((O) => `${z}:${O}`));
      }
      return M;
    }, $ = (z, F = d, _ = null) => {
      let H = F == null ? void 0 : F[z];
      if (typeof H != "object" || Jt(H))
        return null;
      let M = y == null ? void 0 : y[z], I = g == null ? void 0 : g[z], O = [];
      if (M === null)
        return null;
      let k = ov(M);
      typeof k == "object" && (O = Object.keys(k).reduce((J, ne) => {
        let ue = k[ne], ee = H == null ? void 0 : H[ue];
        return ne === "initial" ? (I = ue, J) : S(ne, ee, J, _);
      }, []));
      let C = H[k] || H[ov(I)];
      return typeof O == "object" && typeof _ == "string" && O[_] ? uv(O, C) : O.length > 0 ? [C, ...O] : C;
    }, E = () => d ? Object.keys(d).map((z) => $(z, d)) : null, P = (z) => !d || typeof d != "object" ? null : Object.keys(d).map((F) => {
      let _ = $(F, d, z);
      return z === "base" && typeof _ == "string" ? _ : _ && _[z];
    }).filter(Boolean), T = y && Object.fromEntries(Object.entries(y).filter(([, z]) => z !== void 0)), R = (z = []) => z == null ? void 0 : z.filter(({ class: F, className: _, ...H }) => Object.entries(H).every(([M, I]) => {
      var O;
      let k = typeof (y == null ? void 0 : y[M]) == "object" ? (O = y[M]) == null ? void 0 : O.initial : {}, C = { ...g, ...k, ...T };
      return Array.isArray(I) ? I.includes(C[M]) : C[M] === I;
    })).flatMap(({ class: F, className: _ }) => [F, _]), N = () => {
      var z;
      let F = R(u), _ = R((z = e == null ? void 0 : e.extend) == null ? void 0 : z.compoundVariants);
      return pR(_, F);
    }, D = () => {
      let z = N();
      return Array.isArray(z) ? z.reduce((F, _) => (typeof _ == "string" && (F.base = ol(F.base, _)(t)), typeof _ == "object" && Object.entries(_).forEach(([H, M]) => {
        F[H] = ol(F[H], M)(t);
      }), F), {}) : z;
    };
    if (!Jt(s) || !Jt((b = e == null ? void 0 : e.extend) == null ? void 0 : b.slots)) {
      let z = (A = D()) != null ? A : [];
      return { ...typeof v == "object" && !Jt(v) ? Object.keys(v).reduce((F, _) => (F[_] = (H) => ol(v[_], P(_), z == null ? void 0 : z[_], H == null ? void 0 : H.class, H == null ? void 0 : H.className)(t), F), {}) : {} };
    }
    return ol(f, E(), N(), y == null ? void 0 : y.class, y == null ? void 0 : y.className)(t);
  }, p = () => {
    if (!(!d || typeof d != "object"))
      return Object.keys(d);
  };
  return w.variantKeys = p(), w.base = f, w.slots = v, w.variants = d, w.defaultVariants = g, w.compoundVariants = u, w;
};
const WR = UR({
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
}), qR = dR("div", {
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
}), QR = {
  mass: 1,
  tension: 210,
  friction: 26,
  precision: 0.01,
  velocity: 0
}, Km = He.forwardRef(({
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
  const p = n4({
    transform: c ? "scale(1, 1)" : "scale(1.2, 1.5)",
    duration: 50,
    config: QR
  });
  w4(u, () => f(!1));
  const {
    base: y,
    effect: x,
    input: b
  } = WR({
    focus: c,
    light: l,
    ghost: i,
    size: r
  });
  return /* @__PURE__ */ fe(qR, {
    style: e,
    className: W1("mayumi-input", y(), t),
    css: o,
    size: r,
    children: [n && /* @__PURE__ */ B("span", {
      className: "mayumi-input-icon",
      children: n
    }), !i && !l && He.createElement(x4.div, {
      className: W1("mayumi-input-effect", x()),
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
function ok(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = ok(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function ki() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = ok(e)) && (r && (r += " "), r += t);
  return r;
}
const cv = (e) => {
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
}, GR = (e) => e ? cv(e) : cv;
var ik = { exports: {} }, lk = {}, sk = { exports: {} }, ak = {};
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
function KR(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var YR = typeof Object.is == "function" ? Object.is : KR, XR = Ci.useState, ZR = Ci.useEffect, JR = Ci.useLayoutEffect, eT = Ci.useDebugValue;
function tT(e, t) {
  var n = t(), r = XR({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return JR(function() {
    o.value = n, o.getSnapshot = t, Yf(o) && i({ inst: o });
  }, [e, n, t]), ZR(function() {
    return Yf(o) && i({ inst: o }), e(function() {
      Yf(o) && i({ inst: o });
    });
  }, [e]), eT(n), n;
}
function Yf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !YR(e, n);
  } catch {
    return !0;
  }
}
function nT(e, t) {
  return t();
}
var rT = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? nT : tT;
ak.useSyncExternalStore = Ci.useSyncExternalStore !== void 0 ? Ci.useSyncExternalStore : rT;
(function(e) {
  e.exports = ak;
})(sk);
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ic = m.exports, oT = sk.exports;
function iT(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var lT = typeof Object.is == "function" ? Object.is : iT, sT = oT.useSyncExternalStore, aT = Ic.useRef, uT = Ic.useEffect, cT = Ic.useMemo, fT = Ic.useDebugValue;
lk.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = aT(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else
    l = i.current;
  i = cT(function() {
    function a(g) {
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
      return a(t());
    }, d === null ? void 0 : function() {
      return a(d());
    }];
  }, [t, n, r, o]);
  var s = sT(e, i[0], i[1]);
  return uT(function() {
    l.hasValue = !0, l.value = s;
  }, [s]), fT(s), s;
};
(function(e) {
  e.exports = lk;
})(ik);
const dT = /* @__PURE__ */ kh(ik.exports), { useSyncExternalStoreWithSelector: pT } = dT;
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
const fv = (e) => {
  ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? GR(e) : e, n = (r, o) => hT(t, r, o);
  return Object.assign(n, t), n;
}, Ym = (e) => e ? fv(e) : fv;
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
      const i = (s) => s === null ? null : JSON.parse(s), l = (o = t.getItem(r)) != null ? o : null;
      return l instanceof Promise ? l.then(i) : i(l);
    },
    setItem: (r, o) => t.setItem(r, JSON.stringify(o)),
    removeItem: (r) => t.removeItem(r)
  };
}
const gs = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return gs(r)(n);
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
        return gs(r)(n);
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
  const c = gs(i.serialize), f = () => {
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
    return gs(u.getItem.bind(u))(i.name).then((y) => {
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
}, gT = (e, t) => (n, r, o) => {
  let i = {
    storage: Xm(() => localStorage),
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
    return gs(u.getItem.bind(u))(i.name).then((p) => {
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
}, vT = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? (({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), mT(e, t)) : gT(e, t), uk = vT, yT = {
  getItem: async (e) => (await it.storage.local.get(e))[e],
  setItem(e, t) {
    return it.storage.local.set({ [e]: t });
  },
  removeItem(e) {
    return it.storage.local.remove(e);
  }
}, xT = {
  getItem: async (e) => (await it.storage.sync.get(e))[e],
  setItem(e, t) {
    return it.storage.sync.set({ [e]: t });
  },
  removeItem(e) {
    return it.storage.sync.remove(e);
  }
}, wT = (e, t) => (n, r, o) => {
  const i = (l, s, a) => {
    const u = a === void 0 ? { type: "anonymous" } : typeof a == "string" ? { type: a } : a;
    console.group(`%c action: ${t.name} : ${u.type}`, "font-weight: bold;"), console.log("%c prev state:", "color: gray; font-weight: bold;", r()), console.log("%c action:", "color: #0066db; font-weight: bold;", u), n(l, s), console.log("%cnext state:", "color: #006b3b; font-weight: bold;", r()), console.groupEnd();
  };
  return o.setState = i, e(i, r, o);
}, Zm = wT, vs = Ym()(
  Zm(
    uk(
      (e) => ({
        conventions: {},
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
          } : (o = o.map((s) => s.id === n.id ? {
            ...s,
            ...n
          } : s), {
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
        storage: Xm(() => yT)
      }
    ),
    {
      name: "aiflow-message-store"
    }
  )
), ys = Ym()(
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
), ck = Ym()(
  Zm(
    uk(
      (e) => ({
        set(t) {
          e(t, !1, "set");
        }
      }),
      { name: "user-config-store", storage: Xm(() => xT) }
    ),
    {
      name: "user-config-store"
    }
  )
), Qa = "ask-chatgpt", xs = "ask-chatgpt-with", Ei = "translate-with", si = "summary-with", Zp = "ask-chatgpt-with-page", Mu = "config-page", Du = "translate-with-page", Xr = "home-page", bT = "OPENAI_API_KEY", dv = "options", pv = () => {
  var e;
  return (e = document.querySelector('input[name="q"]')) == null ? void 0 : e.value;
};
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
function Jp(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function kT(e) {
  const t = e + "CollectionProvider", [n, r] = vo(t), [o, i] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), l = (g) => {
    const { scope: h, children: v } = g, w = He.useRef(null), p = He.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ He.createElement(o, {
      scope: h,
      itemMap: p,
      collectionRef: w
    }, v);
  }, s = e + "CollectionSlot", a = /* @__PURE__ */ He.forwardRef((g, h) => {
    const { scope: v, children: w } = g, p = i(s, v), y = xe(h, p.collectionRef);
    return /* @__PURE__ */ He.createElement(wi, {
      ref: y
    }, w);
  }), u = e + "CollectionItemSlot", c = "data-radix-collection-item", f = /* @__PURE__ */ He.forwardRef((g, h) => {
    const { scope: v, children: w, ...p } = g, y = He.useRef(null), x = xe(h, y), b = i(u, v);
    return He.useEffect(() => (b.itemMap.set(y, {
      ref: y,
      ...p
    }), () => void b.itemMap.delete(y))), /* @__PURE__ */ He.createElement(wi, {
      [c]: "",
      ref: x
    }, w);
  });
  function d(g) {
    const h = i(e + "CollectionConsumer", g);
    return He.useCallback(() => {
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
const CT = /* @__PURE__ */ m.exports.createContext(void 0);
function fk(e) {
  const t = m.exports.useContext(CT);
  return e || t || "ltr";
}
function ET(e) {
  const t = m.exports.useRef({
    value: e,
    previous: e
  });
  return m.exports.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const $T = /* @__PURE__ */ m.exports.forwardRef((e, t) => /* @__PURE__ */ m.exports.createElement(Ue.span, G({}, e, {
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
], Oc = "Select", [Nc, Mc, _T] = kT(Oc), [Di, GF] = vo(Oc, [
  _T,
  vc
]), Jm = vc(), [RT, ko] = Di(Oc), [TT, IT] = Di(Oc), OT = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: i, value: l, defaultValue: s, onValueChange: a, dir: u, name: c, autoComplete: f, disabled: d, required: g } = e, h = Jm(t), [v, w] = m.exports.useState(null), [p, y] = m.exports.useState(null), [x, b] = m.exports.useState(!1), A = fk(u), [S = !1, $] = os({
    prop: r,
    defaultProp: o,
    onChange: i
  }), [E, P] = os({
    prop: l,
    defaultProp: s,
    onChange: a
  }), T = m.exports.useRef(null), R = v ? Boolean(v.closest("form")) : !0, [N, D] = m.exports.useState(/* @__PURE__ */ new Set()), z = Array.from(N).map(
    (F) => F.props.value
  ).join(";");
  return /* @__PURE__ */ m.exports.createElement(Eb, h, /* @__PURE__ */ m.exports.createElement(RT, {
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
    triggerPointerDownPosRef: T,
    disabled: d
  }, /* @__PURE__ */ m.exports.createElement(Nc.Provider, {
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
        const H = new Set(_);
        return H.delete(F), H;
      });
    }, [])
  }, n)), R ? /* @__PURE__ */ m.exports.createElement(hk, {
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
  }) : null, Array.from(N)) : null));
}, NT = "SelectTrigger", MT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = Jm(n), l = ko(NT, n), s = l.disabled || r, a = xe(t, l.onTriggerChange), u = Mc(n), [c, f, d] = mk((h) => {
    const v = u().filter(
      (y) => !y.disabled
    ), w = v.find(
      (y) => y.value === l.value
    ), p = gk(v, h, w);
    p !== void 0 && l.onValueChange(p.value);
  }), g = () => {
    s || (l.onOpenChange(!0), d());
  };
  return /* @__PURE__ */ m.exports.createElement($b, G({
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
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && f(h.key), !(v && h.key === " ") && AT.includes(h.key) && (g(), h.preventDefault());
    })
  })));
}), DT = "SelectValue", LT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: i, placeholder: l, ...s } = e, a = ko(DT, n), { onValueNodeHasChildrenChange: u } = a, c = i !== void 0, f = xe(t, a.onValueNodeChange);
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
}), FT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ m.exports.createElement(Ue.span, G({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "\u25BC");
}), zT = (e) => /* @__PURE__ */ m.exports.createElement(Pb, G({
  asChild: !0
}, e)), $i = "SelectContent", BT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = ko($i, e.__scopeSelect), [r, o] = m.exports.useState();
  if (Ze(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const i = r;
    return i ? /* @__PURE__ */ hn.exports.createPortal(/* @__PURE__ */ m.exports.createElement(dk, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ m.exports.createElement(Nc.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ m.exports.createElement("div", null, e.children))), i) : null;
  }
  return /* @__PURE__ */ m.exports.createElement(jT, G({}, e, {
    ref: t
  }));
}), Nn = 10, [dk, Co] = Di($i), jT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
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
  } = e, y = ko($i, n), [x, b] = m.exports.useState(null), [A, S] = m.exports.useState(null), $ = xe(
    t,
    (Q) => b(Q)
  ), [E, P] = m.exports.useState(null), [T, R] = m.exports.useState(null), N = Mc(n), [D, z] = m.exports.useState(!1), F = m.exports.useRef(!1);
  m.exports.useEffect(() => {
    if (x)
      return yc(x);
  }, [
    x
  ]), hc();
  const _ = m.exports.useCallback((Q) => {
    const [ie, ...we] = N().map(
      (se) => se.ref.current
    ), [ce] = we.slice(-1), pe = document.activeElement;
    for (const se of Q)
      if (se === pe || (se == null || se.scrollIntoView({
        block: "nearest"
      }), se === ie && A && (A.scrollTop = 0), se === ce && A && (A.scrollTop = A.scrollHeight), se == null || se.focus(), document.activeElement !== pe))
        return;
  }, [
    N,
    A
  ]), H = m.exports.useCallback(
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
      const ie = (ce) => {
        var pe, se, at, ut;
        Q = {
          x: Math.abs(Math.round(ce.pageX) - ((pe = (se = I.current) === null || se === void 0 ? void 0 : se.x) !== null && pe !== void 0 ? pe : 0)),
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
  const [O, k] = mk((Q) => {
    const ie = N().filter(
      (pe) => !pe.disabled
    ), we = ie.find(
      (pe) => pe.ref.current === document.activeElement
    ), ce = gk(ie, Q, we);
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
    (y.value !== void 0 && y.value === ie || ce) && R(Q);
  }, [
    y.value
  ]), ue = r === "popper" ? hv : HT, ee = ue === hv ? {
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
  return /* @__PURE__ */ m.exports.createElement(dk, {
    scope: n,
    content: x,
    viewport: A,
    onViewportChange: S,
    itemRefCallback: C,
    selectedItem: E,
    onItemLeave: J,
    itemTextRefCallback: ne,
    focusSelectedItem: H,
    selectedItemText: T,
    position: r,
    isPositioned: D,
    searchRef: O
  }, /* @__PURE__ */ m.exports.createElement(Hb, {
    as: wi,
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
        let ce = N().filter(
          (pe) => !pe.disabled
        ).map(
          (pe) => pe.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(Q.key) && (ce = ce.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(Q.key)) {
          const pe = Q.target, se = ce.indexOf(pe);
          ce = ce.slice(se + 1);
        }
        setTimeout(
          () => _(ce)
        ), Q.preventDefault();
      }
    })
  }))))));
}), HT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = ko($i, n), l = Co($i, n), [s, a] = m.exports.useState(null), [u, c] = m.exports.useState(null), f = xe(
    t,
    ($) => c($)
  ), d = Mc(n), g = m.exports.useRef(!1), h = m.exports.useRef(!0), { viewport: v, selectedItem: w, selectedItemText: p, focusSelectedItem: y } = l, x = m.exports.useCallback(() => {
    if (i.trigger && i.valueNode && s && u && v && w && p) {
      const $ = i.trigger.getBoundingClientRect(), E = u.getBoundingClientRect(), P = i.valueNode.getBoundingClientRect(), T = p.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const pe = T.left - E.left, se = P.left - pe, at = $.left - se, ut = $.width + at, jr = Math.max(ut, E.width), er = window.innerWidth - Nn, tr = Jp(se, [
          Nn,
          er - jr
        ]);
        s.style.minWidth = ut + "px", s.style.left = tr + "px";
      } else {
        const pe = E.right - T.right, se = window.innerWidth - P.right - pe, at = window.innerWidth - $.right - se, ut = $.width + at, jr = Math.max(ut, E.width), er = window.innerWidth - Nn, tr = Jp(se, [
          Nn,
          er - jr
        ]);
        s.style.minWidth = ut + "px", s.style.right = tr + "px";
      }
      const R = d(), N = window.innerHeight - Nn * 2, D = v.scrollHeight, z = window.getComputedStyle(u), F = parseInt(z.borderTopWidth, 10), _ = parseInt(z.paddingTop, 10), H = parseInt(z.borderBottomWidth, 10), M = parseInt(z.paddingBottom, 10), I = F + _ + D + M + H, O = Math.min(w.offsetHeight * 5, I), k = window.getComputedStyle(v), C = parseInt(k.paddingTop, 10), J = parseInt(k.paddingBottom, 10), ne = $.top + $.height / 2 - Nn, ue = N - ne, ee = w.offsetHeight / 2, Q = w.offsetTop + ee, ie = F + _ + Q, we = I - ie;
      if (ie <= ne) {
        const pe = w === R[R.length - 1].ref.current;
        s.style.bottom = "0px";
        const se = u.clientHeight - v.offsetTop - v.offsetHeight, at = Math.max(ue, ee + (pe ? J : 0) + se + H), ut = ie + at;
        s.style.height = ut + "px";
      } else {
        const pe = w === R[0].ref.current;
        s.style.top = "0px";
        const at = Math.max(ne, F + v.offsetTop + (pe ? C : 0) + ee) + we;
        s.style.height = at + "px", v.scrollTop = ie - ne + v.offsetTop;
      }
      s.style.margin = `${Nn}px 0`, s.style.minHeight = O + "px", s.style.maxHeight = N + "px", r == null || r(), requestAnimationFrame(
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
  return /* @__PURE__ */ m.exports.createElement(VT, {
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
}), hv = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Nn, ...i } = e, l = Jm(n);
  return /* @__PURE__ */ m.exports.createElement(Ab, G({}, l, i, {
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
}), [VT, eg] = Di($i, {}), mv = "SelectViewport", UT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Co(mv, n), i = eg(mv, n), l = xe(t, o.onViewportChange), s = m.exports.useRef(0);
  return /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ m.exports.createElement(Nc.Slot, {
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
}), WT = "SelectGroup";
Di(WT);
const eh = "SelectItem", [qT, QT] = Di(eh), GT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: i, ...l } = e, s = ko(eh, n), a = Co(eh, n), u = s.value === r, [c, f] = m.exports.useState(i != null ? i : ""), [d, g] = m.exports.useState(!1), h = xe(t, (p) => {
    var y;
    return (y = a.itemRefCallback) === null || y === void 0 ? void 0 : y.call(a, p, r, o);
  }), v = Bn(), w = () => {
    o || (s.onValueChange(r), s.onOpenChange(!1));
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
  }, /* @__PURE__ */ m.exports.createElement(Nc.ItemSlot, {
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
      ((y = a.searchRef) === null || y === void 0 ? void 0 : y.current) !== "" && p.key === " " || (PT.includes(p.key) && w(), p.key === " " && p.preventDefault());
    })
  }))));
}), Sa = "SelectItemText", KT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...i } = e, l = ko(Sa, n), s = Co(Sa, n), a = QT(Sa, n), u = IT(Sa, n), [c, f] = m.exports.useState(null), d = xe(
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
}), gv = "SelectScrollUpButton", YT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Co(gv, e.__scopeSelect), r = eg(gv, e.__scopeSelect), [o, i] = m.exports.useState(!1), l = xe(t, r.onScrollButtonChange);
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
  ]), o ? /* @__PURE__ */ m.exports.createElement(pk, G({}, e, {
    ref: l,
    onAutoScroll: () => {
      const { viewport: s, selectedItem: a } = n;
      s && a && (s.scrollTop = s.scrollTop - a.offsetHeight);
    }
  })) : null;
}), vv = "SelectScrollDownButton", XT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Co(vv, e.__scopeSelect), r = eg(vv, e.__scopeSelect), [o, i] = m.exports.useState(!1), l = xe(t, r.onScrollButtonChange);
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
  ]), o ? /* @__PURE__ */ m.exports.createElement(pk, G({}, e, {
    ref: l,
    onAutoScroll: () => {
      const { viewport: s, selectedItem: a } = n;
      s && a && (s.scrollTop = s.scrollTop + a.offsetHeight);
    }
  })) : null;
}), pk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = Co("SelectScrollButton", n), l = m.exports.useRef(null), s = Mc(n), a = m.exports.useCallback(() => {
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
}), hk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { value: n, ...r } = e, o = m.exports.useRef(null), i = xe(t, o), l = ET(n);
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
  ]), /* @__PURE__ */ m.exports.createElement($T, {
    asChild: !0
  }, /* @__PURE__ */ m.exports.createElement("select", G({}, r, {
    ref: i,
    defaultValue: n
  })));
});
hk.displayName = "BubbleSelect";
function mk(e) {
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
function gk(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (u) => u === t[0]
  ) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let l = ZT(e, Math.max(i, 0));
  o.length === 1 && (l = l.filter(
    (u) => u !== n
  ));
  const a = l.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return a !== n ? a : void 0;
}
function ZT(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const JT = OT, e6 = MT, t6 = LT, n6 = FT, r6 = zT, o6 = BT, i6 = UT, l6 = GT, s6 = KT, a6 = YT, u6 = XT, c6 = {
  int: "Afrikaans",
  native: "Afrikaans"
}, f6 = {
  int: "Albanian",
  native: "Shqip"
}, d6 = {
  int: "Arabic",
  native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
}, p6 = {
  int: "Armenian",
  native: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576"
}, h6 = {
  int: "Assamese",
  native: "\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE"
}, m6 = {
  int: "Azerbaijani",
  native: "Az\u0259rbaycan dili"
}, g6 = {
  int: "Basque",
  native: "Euskara"
}, v6 = {
  int: "Belarusian",
  native: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F"
}, y6 = {
  int: "Bengali",
  native: "\u09AC\u09BE\u0982\u09B2\u09BE"
}, x6 = {
  int: "Bosnian",
  native: "Bosanski"
}, w6 = {
  int: "Breton",
  native: "Brezhoneg"
}, b6 = {
  int: "Bulgarian",
  native: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"
}, S6 = {
  int: "Burmese",
  native: "\u1019\u103C\u1014\u103A\u1019\u102C\u1018\u102C\u101E\u102C"
}, k6 = {
  int: "Catalan / Valencian",
  native: "Catal\xE0"
}, C6 = {
  int: "Czech",
  native: "\u010Ce\u0161tina"
}, E6 = {
  int: "Danish",
  native: "Dansk"
}, $6 = {
  int: "Dutch",
  native: "Nederlands"
}, A6 = {
  int: "English",
  native: "English"
}, P6 = {
  int: "Esperanto",
  native: "Esperanto"
}, _6 = {
  int: "Estonian",
  native: "Eesti"
}, R6 = {
  int: "Faroese",
  native: "F\xF8royskt"
}, T6 = {
  int: "Finnish",
  native: "Suomi"
}, I6 = {
  int: "French",
  native: "Fran\xE7ais"
}, O6 = {
  int: "Galician",
  native: "Galego"
}, N6 = {
  int: "Georgian",
  native: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8"
}, M6 = {
  int: "German",
  native: "Deutsch"
}, D6 = {
  int: "Greek",
  native: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"
}, L6 = {
  int: "Guarani",
  native: "Ava\xF1e'\u1EBD"
}, F6 = {
  int: "Gujarati",
  native: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0"
}, z6 = {
  int: "Hausa",
  native: "Hrvatski"
}, B6 = {
  int: "Hausa",
  native: "Hausa"
}, j6 = {
  int: "Hebrew",
  native: "\u05E2\u05D1\u05E8\u05D9\u05EA"
}, H6 = {
  int: "Hindi",
  native: "\u0939\u093F\u0928\u094D\u0926\u0940"
}, V6 = {
  int: "Hungarian",
  native: "Magyar"
}, U6 = {
  int: "Icelandic",
  native: "\xCDslenska"
}, W6 = {
  int: "Indonesian",
  native: "Bahasa Indonesia"
}, q6 = {
  int: "Irish",
  native: "Gaeilge"
}, Q6 = {
  int: "Italian",
  native: "Italiano"
}, G6 = {
  int: "Japanese",
  native: "\u65E5\u672C\u8A9E"
}, K6 = {
  int: "Javanese",
  native: "Basa Jawa"
}, Y6 = {
  int: "Kannada",
  native: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"
}, X6 = {
  int: "Kazakh",
  native: "\u049A\u0430\u0437\u0430\u049B\u0448\u0430"
}, Z6 = {
  int: "Khmer",
  native: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A"
}, J6 = {
  int: "Korean",
  native: "\uD55C\uAD6D\uC5B4"
}, eI = {
  int: "Kurdish",
  native: "Kurd\xEE (Kurmanc\xEE)"
}, tI = {
  int: "Latin",
  native: "lingua latina"
}, nI = {
  int: "Latvian",
  native: "Latvie\u0161u"
}, rI = {
  int: "Lithuanian",
  native: "Lietuvi\u0173"
}, oI = {
  int: "Macedonian",
  native: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438"
}, iI = {
  int: "Malagasy",
  native: "Malagasy"
}, lI = {
  int: "Malay",
  native: "Bahasa Melayu"
}, sI = {
  int: "Malayalam",
  native: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02"
}, aI = {
  int: "Marathi",
  native: "\u092E\u0930\u093E\u0920\u0940"
}, uI = {
  int: "Mongolian",
  native: "\u041C\u043E\u043D\u0433\u043E\u043B"
}, cI = {
  int: "Nepali",
  native: "\u0928\u0947\u092A\u093E\u0932\u0940"
}, fI = {
  int: "Norwegian (bokmal)",
  native: "Norsk (bokm\xE5l)"
}, dI = {
  int: "Norwegian Nynorsk",
  native: "Norsk (nynorsk)"
}, pI = {
  int: "Oriya",
  native: "\u0B13\u0B21\u0B3C\u0B3F\u0B06"
}, hI = {
  int: "Pashto",
  native: "\u067E\u069A\u062A\u0648"
}, mI = {
  int: "Persian",
  native: "\u0641\u0627\u0631\u0633\u06CC"
}, gI = {
  int: "Polish",
  native: "Polski"
}, vI = {
  int: "Portuguese",
  native: "Portugu\xEAs"
}, yI = {
  int: "Punjabi",
  native: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40"
}, xI = {
  int: "Romanian",
  native: "Rom\xE2n\u0103"
}, wI = {
  int: "Russian",
  native: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
}, bI = {
  int: "Rwandi",
  native: "Ikinyarwanda"
}, SI = {
  int: "Sardinian",
  native: "Sardu"
}, kI = {
  int: "Serbian",
  native: "\u0421\u0440\u043F\u0441\u043A\u0438"
}, CI = {
  int: "Silesian",
  native: "\u015Bl\u014Dnsk\u014F g\u014Fdka"
}, EI = {
  int: "Simplified Chinese",
  native: "\u4E2D\u6587"
}, $I = {
  int: "Sinhala",
  native: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD"
}, AI = {
  int: "Slovak",
  native: "Sloven\u010Dina"
}, PI = {
  int: "Slovenian",
  native: "Sloven\u0161\u010Dina"
}, _I = {
  int: "Somali",
  native: "Af-Soomaali"
}, RI = {
  int: "Sorani Kurdish",
  native: "\u06A9\u0648\u0631\u062F\u06CC\u06CC \u0646\u0627\u0648\u06D5\u0646\u062F\u06CC"
}, TI = {
  int: "Spanish",
  native: "Espa\xF1ol"
}, II = {
  int: "Swahili",
  native: "Kiswahili"
}, OI = {
  int: "Swedish",
  native: "Svenska"
}, NI = {
  int: "Syriac",
  native: "\u0723\u0718\u072A\u071D\u071D\u0710"
}, MI = {
  int: "Tagalog / Filipino",
  native: "Filipino"
}, DI = {
  int: "Tajik",
  native: "\u0422\u043E\u04B7\u0438\u043A\u04E3"
}, LI = {
  int: "Tamazight",
  native: "\u2D5C\u2D30\u2D4E\u2D30\u2D63\u2D49\u2D56\u2D5C"
}, FI = {
  int: "Tamil",
  native: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"
}, zI = {
  int: "Telugu",
  native: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"
}, BI = {
  int: "Thai",
  native: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22"
}, jI = {
  int: "Turkish",
  native: "T\xFCrk\xE7e"
}, HI = {
  int: "Ukrainian",
  native: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"
}, VI = {
  int: "Urdu",
  native: "\u0627\u0631\u062F\u0648"
}, UI = {
  int: "Uzbek",
  native: "O'zbek"
}, WI = {
  int: "Vietnamese",
  native: "Ti\u1EBFng Vi\u1EC7t"
}, qI = {
  int: "Visayan",
  native: "Bisaya"
}, QI = {
  int: "Welsh",
  native: "Cymraeg"
}, GI = {
  int: "West Frisian",
  native: "Frysk"
}, yv = {
  af: c6,
  sq: f6,
  ar: d6,
  hy: p6,
  as: h6,
  az: m6,
  eu: g6,
  be: v6,
  bn: y6,
  bs: x6,
  br: w6,
  bg: b6,
  my: S6,
  ca: k6,
  cs: C6,
  da: E6,
  nl: $6,
  en: A6,
  eo: P6,
  et: _6,
  fo: R6,
  fi: T6,
  fr: I6,
  gl: O6,
  ka: N6,
  de: M6,
  el: D6,
  gn: L6,
  gu: F6,
  hr: z6,
  ha: B6,
  he: j6,
  hi: H6,
  hu: V6,
  is: U6,
  id: W6,
  ga: q6,
  it: Q6,
  ja: G6,
  jv: K6,
  kn: Y6,
  kk: X6,
  km: Z6,
  ko: J6,
  ku: eI,
  la: tI,
  lv: nI,
  lt: rI,
  mk: oI,
  mg: iI,
  ms: lI,
  ml: sI,
  mr: aI,
  mn: uI,
  ne: cI,
  nb: fI,
  nn: dI,
  or: pI,
  ps: hI,
  fa: mI,
  pl: gI,
  pt: vI,
  pa: yI,
  ro: xI,
  ru: wI,
  rw: bI,
  sc: SI,
  sr: kI,
  sz: CI,
  zh: EI,
  si: $I,
  sk: AI,
  sl: PI,
  so: _I,
  cb: RI,
  es: TI,
  sw: II,
  sv: OI,
  sy: NI,
  tl: MI,
  tg: DI,
  tz: LI,
  ta: FI,
  te: zI,
  th: BI,
  tr: jI,
  uk: HI,
  ur: VI,
  uz: UI,
  vi: WI,
  cx: qI,
  cy: QI,
  fy: GI
}, vk = He.forwardRef(({
  children: e,
  className: t,
  ...n
}, r) => /* @__PURE__ */ B(l6, {
  className: ki("relative flex h-[25px] select-none items-center rounded-[3px] pr-[35px] pl-[25px] text-[13px] leading-none text-mayumi-gray-1200 data-[disabled]:pointer-events-none data-[highlighted]:bg-mayumi-gray-400 data-[disabled]:text-mayumi-gray-800 data-[highlighted]:outline-none", t),
  ...n,
  ref: r,
  children: /* @__PURE__ */ B(s6, {
    children: e
  })
}));
vk.displayName = "SelectItem";
const KI = (e) => {
  var n;
  const t = ck();
  return /* @__PURE__ */ fe(JT, {
    value: (n = t[dv]) == null ? void 0 : n[Ei].lang,
    onValueChange: (r) => {
      var o;
      (o = e.onValueChange) == null || o.call(e, r), t.set({
        [dv]: {
          [Ei]: {
            lang: r
          }
        }
      });
    },
    children: [/* @__PURE__ */ fe(e6, {
      className: "inline-flex items-center justify-center gap-[5px] rounded bg-gray2 px-3 py-1 text-xs text-mayumi-gray-1200 outline-none hover:bg-mayumi-gray-300 focus:shadow-[0_0_0_1px] focus:shadow-gray7 data-[placeholder]:text-mayumi-gray-900",
      "aria-label": "lang",
      autoFocus: !1,
      tabIndex: 2,
      children: [/* @__PURE__ */ B(t6, {
        placeholder: "Select a Language..."
      }), /* @__PURE__ */ B(n6, {
        className: "text-mayumi-gray-1200",
        children: /* @__PURE__ */ B("i", {
          className: "gg-chevron-down/0.75"
        })
      })]
    }), /* @__PURE__ */ B(r6, {
      container: e.container.current,
      children: /* @__PURE__ */ fe(o6, {
        className: "overflow-hidden rounded-md bg-gray2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]",
        children: [/* @__PURE__ */ B(a6, {
          className: "flex h-[25px] cursor-default items-center justify-center bg-gray2 text-mayumi-gray-1200",
          children: /* @__PURE__ */ B("i", {
            className: "gg-chevron-up/0.75"
          })
        }), /* @__PURE__ */ B(i6, {
          className: "p-[5px]",
          children: Object.keys(yv).map((r) => {
            const o = yv[r];
            return /* @__PURE__ */ B(vk, {
              value: o.int,
              children: o.int
            }, r);
          })
        }), /* @__PURE__ */ B(u6, {
          className: "flex h-[25px] cursor-default items-center justify-center bg-gray2 text-mayumi-gray-1200",
          children: /* @__PURE__ */ B("i", {
            className: "gg-chevron-down/0.75"
          })
        })]
      })
    })]
  });
}, YI = (e) => /* @__PURE__ */ m.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 6V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V6H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H17ZM15 5H9V6H15V5ZM17 8H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8Z", fill: "currentColor" })), XI = (e) => /* @__PURE__ */ m.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 5.5H9C10.1046 5.5 11 6.39543 11 7.5V16.5C11 17.0523 10.5523 17.5 10 17.5H4C3.44772 17.5 3 17.0523 3 16.5V6.5C3 5.94772 3.44772 5.5 4 5.5ZM14 19.5C13.6494 19.5 13.3128 19.4398 13 19.3293V19.5C13 20.0523 12.5523 20.5 12 20.5C11.4477 20.5 11 20.0523 11 19.5V19.3293C10.6872 19.4398 10.3506 19.5 10 19.5H4C2.34315 19.5 1 18.1569 1 16.5V6.5C1 4.84315 2.34315 3.5 4 3.5H9C10.1947 3.5 11.2671 4.02376 12 4.85418C12.7329 4.02376 13.8053 3.5 15 3.5H20C21.6569 3.5 23 4.84315 23 6.5V16.5C23 18.1569 21.6569 19.5 20 19.5H14ZM13 7.5V16.5C13 17.0523 13.4477 17.5 14 17.5H20C20.5523 17.5 21 17.0523 21 16.5V6.5C21 5.94772 20.5523 5.5 20 5.5H15C13.8954 5.5 13 6.39543 13 7.5ZM5 7.5H9V9.5H5V7.5ZM15 7.5H19V9.5H15V7.5ZM19 10.5H15V12.5H19V10.5ZM5 10.5H9V12.5H5V10.5ZM19 13.5H15V15.5H19V13.5ZM5 13.5H9V15.5H5V13.5Z", fill: "currentColor" })), ZI = (e) => /* @__PURE__ */ m.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z", fill: "currentColor" }), /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z", fill: "currentColor" })), JI = () => ({
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
});
function eO(e, t) {
  return m.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const yk = "ScrollArea", [xk, KF] = vo(yk), [tO, Pn] = xk(yk), nO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: i = 600, ...l } = e, [s, a] = m.exports.useState(null), [u, c] = m.exports.useState(null), [f, d] = m.exports.useState(null), [g, h] = m.exports.useState(null), [v, w] = m.exports.useState(null), [p, y] = m.exports.useState(0), [x, b] = m.exports.useState(0), [A, S] = m.exports.useState(!1), [$, E] = m.exports.useState(!1), P = xe(
    t,
    (R) => a(R)
  ), T = fk(o);
  return /* @__PURE__ */ m.exports.createElement(tO, {
    scope: n,
    type: r,
    dir: T,
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
}), rO = "ScrollAreaViewport", oO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, i = Pn(rO, n), l = m.exports.useRef(null), s = xe(t, l, i.onViewportChange);
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
}), Zn = "ScrollAreaScrollbar", iO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Pn(Zn, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: l } = o, s = e.orientation === "horizontal";
  return m.exports.useEffect(() => (s ? i(!0) : l(!0), () => {
    s ? i(!1) : l(!1);
  }), [
    s,
    i,
    l
  ]), o.type === "hover" ? /* @__PURE__ */ m.exports.createElement(lO, G({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ m.exports.createElement(sO, G({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ m.exports.createElement(wk, G({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ m.exports.createElement(tg, G({}, r, {
    ref: t
  })) : null;
}), lO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
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
  }, /* @__PURE__ */ m.exports.createElement(wk, G({
    "data-state": i ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), sO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Pn(Zn, e.__scopeScrollArea), i = e.orientation === "horizontal", l = Lc(
    () => a("SCROLL_END"),
    100
  ), [s, a] = eO("hidden", {
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
  }, /* @__PURE__ */ m.exports.createElement(tg, G({
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
}), wk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Pn(Zn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [i, l] = m.exports.useState(!1), s = e.orientation === "horizontal", a = Lc(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, c = n.viewport.offsetHeight < n.viewport.scrollHeight;
      l(s ? u : c);
    }
  }, 10);
  return Fu(n.viewport, a), Fu(n.content, a), /* @__PURE__ */ m.exports.createElement(mn, {
    present: r || i
  }, /* @__PURE__ */ m.exports.createElement(tg, G({
    "data-state": i ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), tg = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Pn(Zn, e.__scopeScrollArea), i = m.exports.useRef(null), l = m.exports.useRef(0), [s, a] = m.exports.useState({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), u = kk(s.viewport, s.content), c = {
    ...r,
    sizes: s,
    onSizesChange: a,
    hasThumb: Boolean(u > 0 && u < 1),
    onThumbChange: (d) => i.current = d,
    onThumbPointerUp: () => l.current = 0,
    onThumbPointerDown: (d) => l.current = d
  };
  function f(d, g) {
    return pO(d, l.current, s, g);
  }
  return n === "horizontal" ? /* @__PURE__ */ m.exports.createElement(aO, G({}, c, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && i.current) {
        const d = o.viewport.scrollLeft, g = xv(d, s, o.dir);
        i.current.style.transform = `translate3d(${g}px, 0, 0)`;
      }
    },
    onWheelScroll: (d) => {
      o.viewport && (o.viewport.scrollLeft = d);
    },
    onDragScroll: (d) => {
      o.viewport && (o.viewport.scrollLeft = f(d, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ m.exports.createElement(uO, G({}, c, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && i.current) {
        const d = o.viewport.scrollTop, g = xv(d, s);
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
}), aO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = Pn(Zn, e.__scopeScrollArea), [l, s] = m.exports.useState(), a = m.exports.useRef(null), u = xe(t, a, i.onScrollbarXChange);
  return m.exports.useEffect(() => {
    a.current && s(getComputedStyle(a.current));
  }, [
    a
  ]), /* @__PURE__ */ m.exports.createElement(Sk, G({
    "data-orientation": "horizontal"
  }, o, {
    ref: u,
    sizes: n,
    style: {
      bottom: 0,
      left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: Dc(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (c) => e.onThumbPointerDown(c.x),
    onDragScroll: (c) => e.onDragScroll(c.x),
    onWheelScroll: (c, f) => {
      if (i.viewport) {
        const d = i.viewport.scrollLeft + c.deltaX;
        e.onWheelScroll(d), Ek(d, f) && c.preventDefault();
      }
    },
    onResize: () => {
      a.current && i.viewport && l && r({
        content: i.viewport.scrollWidth,
        viewport: i.viewport.offsetWidth,
        scrollbar: {
          size: a.current.clientWidth,
          paddingStart: Lu(l.paddingLeft),
          paddingEnd: Lu(l.paddingRight)
        }
      });
    }
  }));
}), uO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = Pn(Zn, e.__scopeScrollArea), [l, s] = m.exports.useState(), a = m.exports.useRef(null), u = xe(t, a, i.onScrollbarYChange);
  return m.exports.useEffect(() => {
    a.current && s(getComputedStyle(a.current));
  }, [
    a
  ]), /* @__PURE__ */ m.exports.createElement(Sk, G({
    "data-orientation": "vertical"
  }, o, {
    ref: u,
    sizes: n,
    style: {
      top: 0,
      right: i.dir === "ltr" ? 0 : void 0,
      left: i.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: Dc(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (c) => e.onThumbPointerDown(c.y),
    onDragScroll: (c) => e.onDragScroll(c.y),
    onWheelScroll: (c, f) => {
      if (i.viewport) {
        const d = i.viewport.scrollTop + c.deltaY;
        e.onWheelScroll(d), Ek(d, f) && c.preventDefault();
      }
    },
    onResize: () => {
      a.current && i.viewport && l && r({
        content: i.viewport.scrollHeight,
        viewport: i.viewport.offsetHeight,
        scrollbar: {
          size: a.current.clientHeight,
          paddingStart: Lu(l.paddingTop),
          paddingEnd: Lu(l.paddingBottom)
        }
      });
    }
  }));
}), [cO, bk] = xk(Zn), Sk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: i, onThumbPointerUp: l, onThumbPointerDown: s, onThumbPositionChange: a, onDragScroll: u, onWheelScroll: c, onResize: f, ...d } = e, g = Pn(Zn, n), [h, v] = m.exports.useState(null), w = xe(
    t,
    (P) => v(P)
  ), p = m.exports.useRef(null), y = m.exports.useRef(""), x = g.viewport, b = r.content - r.viewport, A = ze(c), S = ze(a), $ = Lc(f, 10);
  function E(P) {
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
  ]), Fu(h, $), Fu(g.content, $), /* @__PURE__ */ m.exports.createElement(cO, {
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
      const T = P.target;
      T.hasPointerCapture(P.pointerId) && T.releasePointerCapture(P.pointerId), document.body.style.webkitUserSelect = y.current, p.current = null;
    })
  })));
}), th = "ScrollAreaThumb", fO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = bk(th, e.__scopeScrollArea);
  return /* @__PURE__ */ m.exports.createElement(mn, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ m.exports.createElement(dO, G({
    ref: t
  }, r)));
}), dO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, i = Pn(th, n), l = bk(th, n), { onThumbPositionChange: s } = l, a = xe(
    t,
    (f) => l.onThumbChange(f)
  ), u = m.exports.useRef(), c = Lc(() => {
    u.current && (u.current(), u.current = void 0);
  }, 100);
  return m.exports.useEffect(() => {
    const f = i.viewport;
    if (f) {
      const d = () => {
        if (c(), !u.current) {
          const g = hO(f, s);
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
function Lu(e) {
  return e ? parseInt(e, 10) : 0;
}
function kk(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Dc(e) {
  const t = kk(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function pO(e, t, n, r = "ltr") {
  const o = Dc(n), i = o / 2, l = t || i, s = o - l, a = n.scrollbar.paddingStart + l, u = n.scrollbar.size - n.scrollbar.paddingEnd - s, c = n.content - n.viewport, f = r === "ltr" ? [
    0,
    c
  ] : [
    c * -1,
    0
  ];
  return Ck([
    a,
    u
  ], f)(e);
}
function xv(e, t, n = "ltr") {
  const r = Dc(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, l = t.content - t.viewport, s = i - r, a = n === "ltr" ? [
    0,
    l
  ] : [
    l * -1,
    0
  ], u = Jp(e, a);
  return Ck([
    0,
    l
  ], [
    0,
    s
  ])(u);
}
function Ck(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Ek(e, t) {
  return e > 0 && e < t;
}
const hO = (e, t = () => {
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
function Lc(e, t) {
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
function Fu(e, t) {
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
const mO = nO, gO = oO, wv = iO, bv = fO, Sv = (e) => typeof e == "object" && e != null && e.nodeType === 1, kv = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", Xf = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const n = getComputedStyle(e, null);
    return kv(n.overflowY, t) || kv(n.overflowX, t) || ((r) => {
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
}, ka = (e, t, n, r, o, i, l, s) => i < e && l > t || i > e && l < t ? 0 : i <= e && s <= n || l >= t && s >= n ? i - e - r : l > t && s < n || i < e && s > n ? l - t + o : 0, vO = (e) => {
  const t = e.parentElement;
  return t == null ? e.getRootNode().host || null : t;
}, Cv = (e, t) => {
  var n, r, o, i;
  if (typeof document > "u")
    return [];
  const { scrollMode: l, block: s, inline: a, boundary: u, skipOverflowHiddenElements: c } = t, f = typeof u == "function" ? u : (N) => N !== u;
  if (!Sv(e))
    throw new TypeError("Invalid target");
  const d = document.scrollingElement || document.documentElement, g = [];
  let h = e;
  for (; Sv(h) && f(h); ) {
    if (h = vO(h), h === d) {
      g.push(h);
      break;
    }
    h != null && h === document.body && Xf(h) && !Xf(document.documentElement) || h != null && Xf(h, c) && g.push(h);
  }
  const v = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth, w = (i = (o = window.visualViewport) == null ? void 0 : o.height) != null ? i : innerHeight, { scrollX: p, scrollY: y } = window, { height: x, width: b, top: A, right: S, bottom: $, left: E } = e.getBoundingClientRect();
  let P = s === "start" || s === "nearest" ? A : s === "end" ? $ : A + x / 2, T = a === "center" ? E + b / 2 : a === "end" ? S : E;
  const R = [];
  for (let N = 0; N < g.length; N++) {
    const D = g[N], { height: z, width: F, top: _, right: H, bottom: M, left: I } = D.getBoundingClientRect();
    if (l === "if-needed" && A >= 0 && E >= 0 && $ <= w && S <= v && A >= _ && $ <= M && E >= I && S <= H)
      return R;
    const O = getComputedStyle(D), k = parseInt(O.borderLeftWidth, 10), C = parseInt(O.borderTopWidth, 10), J = parseInt(O.borderRightWidth, 10), ne = parseInt(O.borderBottomWidth, 10);
    let ue = 0, ee = 0;
    const Q = "offsetWidth" in D ? D.offsetWidth - D.clientWidth - k - J : 0, ie = "offsetHeight" in D ? D.offsetHeight - D.clientHeight - C - ne : 0, we = "offsetWidth" in D ? D.offsetWidth === 0 ? 0 : F / D.offsetWidth : 0, ce = "offsetHeight" in D ? D.offsetHeight === 0 ? 0 : z / D.offsetHeight : 0;
    if (d === D)
      ue = s === "start" ? P : s === "end" ? P - w : s === "nearest" ? ka(y, y + w, w, C, ne, y + P, y + P + x, x) : P - w / 2, ee = a === "start" ? T : a === "center" ? T - v / 2 : a === "end" ? T - v : ka(p, p + v, v, k, J, p + T, p + T + b, b), ue = Math.max(0, ue + y), ee = Math.max(0, ee + p);
    else {
      ue = s === "start" ? P - _ - C : s === "end" ? P - M + ne + ie : s === "nearest" ? ka(_, M, z, C, ne + ie, P, P + x, x) : P - (_ + z / 2) + ie / 2, ee = a === "start" ? T - I - k : a === "center" ? T - (I + F / 2) + Q / 2 : a === "end" ? T - H + J + Q : ka(I, H, F, k, J + Q, T, T + b, b);
      const { scrollLeft: pe, scrollTop: se } = D;
      ue = Math.max(0, Math.min(se + ue / ce, D.scrollHeight - z / ce + ie)), ee = Math.max(0, Math.min(pe + ee / we, D.scrollWidth - F / we + Q)), P += se - ue, T += pe - ee;
    }
    R.push({ el: D, top: ue, left: ee });
  }
  return R;
}, yO = (e) => e === !1 ? { block: "end", inline: "nearest" } : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e) ? e : { block: "start", inline: "nearest" };
function xO(e, t) {
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
    return t.behavior(Cv(e, t));
  const n = typeof t == "boolean" || t == null ? void 0 : t.behavior;
  for (const { el: r, top: o, left: i } of Cv(e, yO(t)))
    r.scroll({ top: o, left: i, behavior: n });
}
function Ev(e) {
  if (e)
    throw e;
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var $k = function(t) {
  return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}, Ga = Object.prototype.hasOwnProperty, Ak = Object.prototype.toString, $v = Object.defineProperty, Av = Object.getOwnPropertyDescriptor, Pv = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : Ak.call(t) === "[object Array]";
}, _v = function(t) {
  if (!t || Ak.call(t) !== "[object Object]")
    return !1;
  var n = Ga.call(t, "constructor"), r = t.constructor && t.constructor.prototype && Ga.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var o;
  for (o in t)
    ;
  return typeof o > "u" || Ga.call(t, o);
}, Rv = function(t, n) {
  $v && n.name === "__proto__" ? $v(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, Tv = function(t, n) {
  if (n === "__proto__")
    if (Ga.call(t, n)) {
      if (Av)
        return Av(t, n).value;
    } else
      return;
  return t[n];
}, Iv = function e() {
  var t, n, r, o, i, l, s = arguments[0], a = 1, u = arguments.length, c = !1;
  for (typeof s == "boolean" && (c = s, s = arguments[1] || {}, a = 2), (s == null || typeof s != "object" && typeof s != "function") && (s = {}); a < u; ++a)
    if (t = arguments[a], t != null)
      for (n in t)
        r = Tv(s, n), o = Tv(t, n), s !== o && (c && o && (_v(o) || (i = Pv(o))) ? (i ? (i = !1, l = r && Pv(r) ? r : []) : l = r && _v(r) ? r : {}, Rv(s, { name: n, newValue: e(c, l, o) })) : typeof o < "u" && Rv(s, { name: n, newValue: o }));
  return s;
};
function nh(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function wO() {
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
      o = u, c ? bO(c, s)(...u) : l(null, ...u);
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
function bO(e, t) {
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
function Nl(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Ov(e.position) : "start" in e || "end" in e ? Ov(e) : "line" in e || "column" in e ? rh(e) : "";
}
function rh(e) {
  return Nv(e && e.line) + ":" + Nv(e && e.column);
}
function Ov(e) {
  return rh(e && e.start) + "-" + rh(e && e.end);
}
function Nv(e) {
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
    n && ("type" in n || "position" in n ? n.position && (i = n.position) : "start" in n || "end" in n ? i = n : ("line" in n || "column" in n) && (i.start = n)), this.name = Nl(n) || "1:1", this.message = typeof t == "object" ? t.message : t, this.stack = "", typeof t == "object" && t.stack && (this.stack = t.stack), this.reason = this.message, this.fatal, this.line = i.start.line, this.column = i.start.column, this.position = i, this.source = o[0], this.ruleId = o[1], this.file, this.actual, this.expected, this.url, this.note;
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
const yn = { basename: SO, dirname: kO, extname: CO, join: EO, sep: "/" };
function SO(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Hs(e);
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
function kO(e) {
  if (Hs(e), e.length === 0)
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
function CO(e) {
  Hs(e);
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
function EO(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Hs(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : $O(n);
}
function $O(e) {
  Hs(e);
  const t = e.charCodeAt(0) === 47;
  let n = AO(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function AO(e, t) {
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
function Hs(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const PO = { cwd: _O };
function _O() {
  return "/";
}
function oh(e) {
  return e !== null && typeof e == "object" && e.href && e.origin;
}
function RO(e) {
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
  return TO(e);
}
function TO(e) {
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
const Zf = ["history", "path", "basename", "stem", "extname", "dirname"];
class IO {
  constructor(t) {
    let n;
    t ? typeof t == "string" || OO(t) ? n = { value: t } : oh(t) ? n = { path: t } : n = t : n = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = PO.cwd(), this.value, this.stored, this.result, this.map;
    let r = -1;
    for (; ++r < Zf.length; ) {
      const i = Zf[r];
      i in n && n[i] !== void 0 && n[i] !== null && (this[i] = i === "history" ? [...n[i]] : n[i]);
    }
    let o;
    for (o in n)
      Zf.includes(o) || (this[o] = n[o]);
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(t) {
    oh(t) && (t = RO(t)), ed(t, "path"), this.path !== t && this.history.push(t);
  }
  get dirname() {
    return typeof this.path == "string" ? yn.dirname(this.path) : void 0;
  }
  set dirname(t) {
    Mv(this.basename, "dirname"), this.path = yn.join(t || "", this.basename);
  }
  get basename() {
    return typeof this.path == "string" ? yn.basename(this.path) : void 0;
  }
  set basename(t) {
    ed(t, "basename"), Jf(t, "basename"), this.path = yn.join(this.dirname || "", t);
  }
  get extname() {
    return typeof this.path == "string" ? yn.extname(this.path) : void 0;
  }
  set extname(t) {
    if (Jf(t, "extname"), Mv(this.dirname, "extname"), t) {
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
    ed(t, "stem"), Jf(t, "stem"), this.path = yn.join(this.dirname || "", t + (this.extname || ""));
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
function Jf(e, t) {
  if (e && e.includes(yn.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + yn.sep + "`"
    );
}
function ed(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Mv(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function OO(e) {
  return $k(e);
}
const NO = _k().freeze(), Pk = {}.hasOwnProperty;
function _k() {
  const e = wO(), t = [];
  let n = {}, r, o = -1;
  return i.data = l, i.Parser = void 0, i.Compiler = void 0, i.freeze = s, i.attachers = t, i.use = a, i.parse = u, i.stringify = c, i.run = f, i.runSync = d, i.process = g, i.processSync = h, i;
  function i() {
    const v = _k();
    let w = -1;
    for (; ++w < t.length; )
      v.use(...t[w]);
    return v.data(Iv(!0, {}, n)), v;
  }
  function l(v, w) {
    return typeof v == "string" ? arguments.length === 2 ? (rd("data", r), n[v] = w, i) : Pk.call(n, v) && n[v] || null : v ? (rd("data", r), n = v, i) : n;
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
    if (rd("use", r), v != null)
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
      P ? (nh(P[1]) && nh($) && ($ = Iv(!0, P[1], $)), P[1] = $) : t.push([...arguments]);
    }
  }
  function u(v) {
    i.freeze();
    const w = il(v), p = i.Parser;
    return td("parse", p), Dv(p, "parse") ? new p(String(w), w).parse() : p(String(w), w);
  }
  function c(v, w) {
    i.freeze();
    const p = il(w), y = i.Compiler;
    return nd("stringify", y), Lv(v), Dv(y, "compile") ? new y(v, p).compile() : y(v, p);
  }
  function f(v, w, p) {
    if (Lv(v), i.freeze(), !p && typeof w == "function" && (p = w, w = void 0), !p)
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
    return i.run(v, w, x), Fv("runSync", "run", y), p;
    function x(b, A) {
      Ev(b), p = A, y = !0;
    }
  }
  function g(v, w) {
    if (i.freeze(), td("process", i.Parser), nd("process", i.Compiler), !w)
      return new Promise(p);
    p(null, w);
    function p(y, x) {
      const b = il(v);
      i.run(i.parse(b), b, (S, $, E) => {
        if (S || !$ || !E)
          A(S);
        else {
          const P = i.stringify($, E);
          P == null || (LO(P) ? E.value = P : E.result = P), A(S, E);
        }
      });
      function A(S, $) {
        S || !$ ? x(S) : y ? y($) : w(null, $);
      }
    }
  }
  function h(v) {
    let w;
    i.freeze(), td("processSync", i.Parser), nd("processSync", i.Compiler);
    const p = il(v);
    return i.process(p, y), Fv("processSync", "process", w), p;
    function y(x) {
      w = !0, Ev(x);
    }
  }
}
function Dv(e, t) {
  return typeof e == "function" && e.prototype && (MO(e.prototype) || t in e.prototype);
}
function MO(e) {
  let t;
  for (t in e)
    if (Pk.call(e, t))
      return !0;
  return !1;
}
function td(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Parser`");
}
function nd(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Compiler`");
}
function rd(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Lv(e) {
  if (!nh(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Fv(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function il(e) {
  return DO(e) ? e : new IO(e);
}
function DO(e) {
  return Boolean(
    e && typeof e == "object" && "message" in e && "messages" in e
  );
}
function LO(e) {
  return typeof e == "string" || $k(e);
}
const FO = {};
function zO(e, t) {
  const n = t || FO, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, o = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Rk(e, r, o);
}
function Rk(e, t, n) {
  if (BO(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return zv(e.children, t, n);
  }
  return Array.isArray(e) ? zv(e, t, n) : "";
}
function zv(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; )
    r[o] = Rk(e[o], t, n);
  return r.join("");
}
function BO(e) {
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
const Bv = {}.hasOwnProperty;
function Tk(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    jO(t, e[n]);
  return t;
}
function jO(e, t) {
  let n;
  for (n in t) {
    const o = (Bv.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n];
    let l;
    for (l in i) {
      Bv.call(o, l) || (o[l] = []);
      const s = i[l];
      HO(
        o[l],
        Array.isArray(s) ? s : s ? [s] : []
      );
    }
  }
}
function HO(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Rt(e, 0, 0, r);
}
const VO = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, Ht = Br(/[A-Za-z]/), zu = Br(/\d/), UO = Br(/[\dA-Fa-f]/), dt = Br(/[\dA-Za-z]/), WO = Br(/[!-/:-@[-`{-~]/), jv = Br(/[#-'*+\--9=?A-Z^-~]/);
function ws(e) {
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
const Fc = Br(/\s/), zc = Br(VO);
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
const qO = {
  tokenize: QO
};
function QO(e) {
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
const GO = {
  tokenize: KO
}, Hv = {
  tokenize: YO
};
function KO(e) {
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
      Hv,
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
      Hv,
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
      let E = $, P, T;
      for (; E--; )
        if (t.events[E][0] === "exit" && t.events[E][1].type === "chunkFlow") {
          if (P) {
            T = t.events[E][1].end;
            break;
          }
          P = !0;
        }
      for (p(r), S = $; S < t.events.length; )
        t.events[S][1].end = Object.assign({}, T), S++;
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
function YO(e, t, n) {
  return ve(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function Bu(e) {
  if (e === null || De(e) || Fc(e))
    return 1;
  if (zc(e))
    return 2;
}
function Bc(e, t, n) {
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
  tokenize: ZO,
  resolveAll: XO
};
function XO(e, t) {
  let n = -1, r, o, i, l, s, a, u, c;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          a = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const f = Object.assign({}, e[r][1].end), d = Object.assign({}, e[n][1].start);
          Vv(f, -a), Vv(d, a), l = {
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
            Bc(
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
function ZO(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, o = Bu(r);
  let i;
  return l;
  function l(a) {
    return e.enter("attentionSequence"), i = a, s(a);
  }
  function s(a) {
    if (a === i)
      return e.consume(a), s;
    const u = e.exit("attentionSequence"), c = Bu(a), f = !c || c === 2 && o || n.includes(a), d = !o || o === 2 && c || n.includes(r);
    return u._open = Boolean(i === 42 ? f : f && (o || !d)), u._close = Boolean(i === 42 ? d : d && (c || !f)), t(a);
  }
}
function Vv(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const JO = {
  name: "autolink",
  tokenize: e7
};
function e7(e, t, n) {
  let r = 1;
  return o;
  function o(h) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i;
  }
  function i(h) {
    return Ht(h) ? (e.consume(h), l) : jv(h) ? u(h) : n(h);
  }
  function l(h) {
    return h === 43 || h === 45 || h === 46 || dt(h) ? s(h) : u(h);
  }
  function s(h) {
    return h === 58 ? (e.consume(h), a) : (h === 43 || h === 45 || h === 46 || dt(h)) && r++ < 32 ? (e.consume(h), s) : u(h);
  }
  function a(h) {
    return h === 62 ? (e.exit("autolinkProtocol"), g(h)) : h === null || h === 32 || h === 60 || ws(h) ? n(h) : (e.consume(h), a);
  }
  function u(h) {
    return h === 64 ? (e.consume(h), r = 0, c) : jv(h) ? (e.consume(h), u) : n(h);
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
  tokenize: t7,
  partial: !0
};
function t7(e, t, n) {
  return ve(e, r, "linePrefix");
  function r(o) {
    return o === null || Z(o) ? t(o) : n(o);
  }
}
const Ik = {
  name: "blockQuote",
  tokenize: n7,
  continuation: {
    tokenize: r7
  },
  exit: o7
};
function n7(e, t, n) {
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
function r7(e, t, n) {
  return ve(
    e,
    e.attempt(Ik, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function o7(e) {
  e.exit("blockQuote");
}
const Ok = {
  name: "characterEscape",
  tokenize: i7
};
function i7(e, t, n) {
  return r;
  function r(i) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(i), e.exit("escapeMarker"), o;
  }
  function o(i) {
    return WO(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i);
  }
}
const Uv = document.createElement("i");
function ng(e) {
  const t = "&" + e + ";";
  Uv.innerHTML = t;
  const n = Uv.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
const Nk = {
  name: "characterReference",
  tokenize: l7
};
function l7(e, t, n) {
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
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), i = 6, l = UO, c) : (e.enter("characterReferenceValue"), i = 7, l = zu, c(f));
  }
  function c(f) {
    let d;
    return f === 59 && o ? (d = e.exit("characterReferenceValue"), l === dt && !ng(r.sliceSerialize(d)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)) : l(f) && o++ < i ? (e.consume(f), c) : n(f);
  }
}
const Wv = {
  name: "codeFenced",
  tokenize: s7,
  concrete: !0
};
function s7(e, t, n) {
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
    return T;
    function T(N) {
      return S.enter("lineEnding"), S.consume(N), S.exit("lineEnding"), R;
    }
    function R(N) {
      return P.parser.lazy[P.now().line] ? E(N) : $(N);
    }
  }
  function A(S, $, E) {
    let P = 0;
    return ve(
      S,
      T,
      "linePrefix",
      this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
    function T(D) {
      return S.enter("codeFencedFence"), S.enter("codeFencedFenceSequence"), R(D);
    }
    function R(D) {
      return D === u ? (S.consume(D), P++, R) : P < a ? E(D) : (S.exit("codeFencedFenceSequence"), ve(S, N, "whitespace")(D));
    }
    function N(D) {
      return D === null || Z(D) ? (S.exit("codeFencedFence"), $(D)) : E(D);
    }
  }
}
const od = {
  name: "codeIndented",
  tokenize: u7
}, a7 = {
  tokenize: c7,
  partial: !0
};
function u7(e, t, n) {
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
    return u === null ? a(u) : Z(u) ? e.attempt(a7, l, a)(u) : (e.enter("codeFlowValue"), s(u));
  }
  function s(u) {
    return u === null || Z(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), s);
  }
  function a(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function c7(e, t, n) {
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
const f7 = {
  name: "codeText",
  tokenize: h7,
  resolve: d7,
  previous: p7
};
function d7(e) {
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
function p7(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function h7(e, t, n) {
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
function Mk(e) {
  const t = {};
  let n = -1, r, o, i, l, s, a, u;
  for (; ++n < e.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = e[n], n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix" && (a = r[1]._tokenizer.events, i = 0, i < a.length && a[i][1].type === "lineEndingBlank" && (i += 2), i < a.length && a[i][1].type === "content"))
      for (; ++i < a.length && a[i][1].type !== "content"; )
        a[i][1].type === "chunkText" && (a[i][1]._isInFirstContentOfListItem = !0, i++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, m7(e, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (i = n, o = void 0; i-- && (l = e[i], l[1].type === "lineEnding" || l[1].type === "lineEndingBlank"); )
        l[0] === "enter" && (o && (e[o][1].type = "lineEndingBlank"), l[1].type = "lineEnding", o = i);
      o && (r[1].end = Object.assign({}, e[o][1].start), s = e.slice(o, n), s.unshift(r), Rt(e, o, n - o + 1, s));
    }
  }
  return !u;
}
function m7(e, t) {
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
const g7 = {
  tokenize: x7,
  resolve: y7
}, v7 = {
  tokenize: w7,
  partial: !0
};
function y7(e) {
  return Mk(e), e;
}
function x7(e, t) {
  let n;
  return r;
  function r(s) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), o(s);
  }
  function o(s) {
    return s === null ? i(s) : Z(s) ? e.check(
      v7,
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
function w7(e, t, n) {
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
function Dk(e, t, n, r, o, i, l, s, a) {
  const u = a || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(p) {
    return p === 60 ? (e.enter(r), e.enter(o), e.enter(i), e.consume(p), e.exit(i), d) : p === null || p === 41 || ws(p) ? n(p) : (e.enter(r), e.enter(l), e.enter(s), e.enter("chunkString", {
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
    return p === 40 ? ++c > u ? n(p) : (e.consume(p), v) : p === 41 ? c-- ? (e.consume(p), v) : (e.exit("chunkString"), e.exit(s), e.exit(l), e.exit(r), t(p)) : p === null || De(p) ? c ? n(p) : (e.exit("chunkString"), e.exit(s), e.exit(l), e.exit(r), t(p)) : ws(p) ? n(p) : (e.consume(p), p === 92 ? w : v);
  }
  function w(p) {
    return p === 40 || p === 41 || p === 92 ? (e.consume(p), v) : v(p);
  }
}
function Lk(e, t, n, r, o, i) {
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
function Fk(e, t, n, r, o, i) {
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
function Ml(e, t) {
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
const b7 = {
  name: "definition",
  tokenize: k7
}, S7 = {
  tokenize: C7,
  partial: !0
};
function k7(e, t, n) {
  const r = this;
  let o;
  return i;
  function i(a) {
    return e.enter("definition"), Lk.call(
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
    ), a === 58 ? (e.enter("definitionMarker"), e.consume(a), e.exit("definitionMarker"), Ml(
      e,
      Dk(
        e,
        e.attempt(
          S7,
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
function C7(e, t, n) {
  return r;
  function r(l) {
    return De(l) ? Ml(e, o)(l) : n(l);
  }
  function o(l) {
    return l === 34 || l === 39 || l === 40 ? Fk(
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
const E7 = {
  name: "hardBreakEscape",
  tokenize: $7
};
function $7(e, t, n) {
  return r;
  function r(i) {
    return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(i), o;
  }
  function o(i) {
    return Z(i) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(i)) : n(i);
  }
}
const A7 = {
  name: "headingAtx",
  tokenize: _7,
  resolve: P7
};
function P7(e, t) {
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
function _7(e, t, n) {
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
const R7 = [
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
], qv = ["pre", "script", "style", "textarea"], T7 = {
  name: "htmlFlow",
  tokenize: N7,
  resolveTo: O7,
  concrete: !0
}, I7 = {
  tokenize: M7,
  partial: !0
};
function O7(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function N7(e, t, n) {
  const r = this;
  let o, i, l, s, a;
  return u;
  function u(C) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(C), c;
  }
  function c(C) {
    return C === 33 ? (e.consume(C), f) : C === 47 ? (e.consume(C), h) : C === 63 ? (e.consume(C), o = 3, r.interrupt ? t : I) : Ht(C) ? (e.consume(C), l = String.fromCharCode(C), i = !0, v) : n(C);
  }
  function f(C) {
    return C === 45 ? (e.consume(C), o = 2, d) : C === 91 ? (e.consume(C), o = 5, l = "CDATA[", s = 0, g) : Ht(C) ? (e.consume(C), o = 4, r.interrupt ? t : I) : n(C);
  }
  function d(C) {
    return C === 45 ? (e.consume(C), r.interrupt ? t : I) : n(C);
  }
  function g(C) {
    return C === l.charCodeAt(s++) ? (e.consume(C), s === l.length ? r.interrupt ? t : R : g) : n(C);
  }
  function h(C) {
    return Ht(C) ? (e.consume(C), l = String.fromCharCode(C), v) : n(C);
  }
  function v(C) {
    return C === null || C === 47 || C === 62 || De(C) ? C !== 47 && i && qv.includes(l.toLowerCase()) ? (o = 1, r.interrupt ? t(C) : R(C)) : R7.includes(l.toLowerCase()) ? (o = 6, C === 47 ? (e.consume(C), w) : r.interrupt ? t(C) : R(C)) : (o = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(C) : i ? y(C) : p(C)) : C === 45 || dt(C) ? (e.consume(C), l += String.fromCharCode(C), v) : n(C);
  }
  function w(C) {
    return C === 62 ? (e.consume(C), r.interrupt ? t : R) : n(C);
  }
  function p(C) {
    return ye(C) ? (e.consume(C), p) : P(C);
  }
  function y(C) {
    return C === 47 ? (e.consume(C), P) : C === 58 || C === 95 || Ht(C) ? (e.consume(C), x) : ye(C) ? (e.consume(C), y) : P(C);
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
    return C === 62 ? (e.consume(C), T) : n(C);
  }
  function T(C) {
    return ye(C) ? (e.consume(C), T) : C === null || Z(C) ? R(C) : n(C);
  }
  function R(C) {
    return C === 45 && o === 2 ? (e.consume(C), F) : C === 60 && o === 1 ? (e.consume(C), _) : C === 62 && o === 4 ? (e.consume(C), O) : C === 63 && o === 3 ? (e.consume(C), I) : C === 93 && o === 5 ? (e.consume(C), M) : Z(C) && (o === 6 || o === 7) ? e.check(
      I7,
      O,
      N
    )(C) : C === null || Z(C) ? N(C) : (e.consume(C), R);
  }
  function N(C) {
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
    )(C) : (e.enter("htmlFlowData"), R(C));
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
    return C === 45 ? (e.consume(C), I) : R(C);
  }
  function _(C) {
    return C === 47 ? (e.consume(C), l = "", H) : R(C);
  }
  function H(C) {
    return C === 62 && qv.includes(l.toLowerCase()) ? (e.consume(C), O) : Ht(C) && l.length < 8 ? (e.consume(C), l += String.fromCharCode(C), H) : R(C);
  }
  function M(C) {
    return C === 93 ? (e.consume(C), I) : R(C);
  }
  function I(C) {
    return C === 62 ? (e.consume(C), O) : C === 45 && o === 2 ? (e.consume(C), I) : R(C);
  }
  function O(C) {
    return C === null || Z(C) ? (e.exit("htmlFlowData"), k(C)) : (e.consume(C), O);
  }
  function k(C) {
    return e.exit("htmlFlow"), t(C);
  }
}
function M7(e, t, n) {
  return r;
  function r(o) {
    return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), e.attempt(Vs, t, n);
  }
}
const D7 = {
  name: "htmlText",
  tokenize: L7
};
function L7(e, t, n) {
  const r = this;
  let o, i, l, s;
  return a;
  function a(k) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(k), u;
  }
  function u(k) {
    return k === 33 ? (e.consume(k), c) : k === 47 ? (e.consume(k), $) : k === 63 ? (e.consume(k), A) : Ht(k) ? (e.consume(k), T) : n(k);
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
    return k === null ? n(k) : k === 45 ? (e.consume(k), v) : Z(k) ? (s = h, M(k)) : (e.consume(k), h);
  }
  function v(k) {
    return k === 45 ? (e.consume(k), O) : h(k);
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
    return k === 62 ? O(k) : k === 93 ? (e.consume(k), x) : p(k);
  }
  function b(k) {
    return k === null || k === 62 ? O(k) : Z(k) ? (s = b, M(k)) : (e.consume(k), b);
  }
  function A(k) {
    return k === null ? n(k) : k === 63 ? (e.consume(k), S) : Z(k) ? (s = A, M(k)) : (e.consume(k), A);
  }
  function S(k) {
    return k === 62 ? O(k) : A(k);
  }
  function $(k) {
    return Ht(k) ? (e.consume(k), E) : n(k);
  }
  function E(k) {
    return k === 45 || dt(k) ? (e.consume(k), E) : P(k);
  }
  function P(k) {
    return Z(k) ? (s = P, M(k)) : ye(k) ? (e.consume(k), P) : O(k);
  }
  function T(k) {
    return k === 45 || dt(k) ? (e.consume(k), T) : k === 47 || k === 62 || De(k) ? R(k) : n(k);
  }
  function R(k) {
    return k === 47 ? (e.consume(k), O) : k === 58 || k === 95 || Ht(k) ? (e.consume(k), N) : Z(k) ? (s = R, M(k)) : ye(k) ? (e.consume(k), R) : O(k);
  }
  function N(k) {
    return k === 45 || k === 46 || k === 58 || k === 95 || dt(k) ? (e.consume(k), N) : D(k);
  }
  function D(k) {
    return k === 61 ? (e.consume(k), z) : Z(k) ? (s = D, M(k)) : ye(k) ? (e.consume(k), D) : R(k);
  }
  function z(k) {
    return k === null || k === 60 || k === 61 || k === 62 || k === 96 ? n(k) : k === 34 || k === 39 ? (e.consume(k), o = k, F) : Z(k) ? (s = z, M(k)) : ye(k) ? (e.consume(k), z) : (e.consume(k), o = void 0, H);
  }
  function F(k) {
    return k === o ? (e.consume(k), _) : k === null ? n(k) : Z(k) ? (s = F, M(k)) : (e.consume(k), F);
  }
  function _(k) {
    return k === 62 || k === 47 || De(k) ? R(k) : n(k);
  }
  function H(k) {
    return k === null || k === 34 || k === 39 || k === 60 || k === 61 || k === 96 ? n(k) : k === 62 || De(k) ? R(k) : (e.consume(k), H);
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
  function O(k) {
    return k === 62 ? (e.consume(k), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(k);
  }
}
const rg = {
  name: "labelEnd",
  tokenize: V7,
  resolveTo: H7,
  resolveAll: j7
}, F7 = {
  tokenize: U7
}, z7 = {
  tokenize: W7
}, B7 = {
  tokenize: q7
};
function j7(e) {
  let t = -1, n;
  for (; ++t < e.length; )
    n = e[t][1], (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++);
  return e;
}
function H7(e, t) {
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
    Bc(
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
function V7(e, t, n) {
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
      F7,
      t,
      l ? t : u
    )(c) : c === 91 ? e.attempt(
      z7,
      t,
      l ? e.attempt(B7, t, u) : u
    )(c) : l ? t(c) : u(c);
  }
  function u(c) {
    return i._balanced = !0, n(c);
  }
}
function U7(e, t, n) {
  return r;
  function r(a) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(a), e.exit("resourceMarker"), Ml(e, o);
  }
  function o(a) {
    return a === 41 ? s(a) : Dk(
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
    return De(a) ? Ml(e, l)(a) : s(a);
  }
  function l(a) {
    return a === 34 || a === 39 || a === 40 ? Fk(
      e,
      Ml(e, s),
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
function W7(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return Lk.call(
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
function q7(e, t, n) {
  return r;
  function r(i) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), o;
  }
  function o(i) {
    return i === 93 ? (e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), e.exit("reference"), t) : n(i);
  }
}
const Q7 = {
  name: "labelStartImage",
  tokenize: G7,
  resolveAll: rg.resolveAll
};
function G7(e, t, n) {
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
const K7 = {
  name: "labelStartLink",
  tokenize: Y7,
  resolveAll: rg.resolveAll
};
function Y7(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), i;
  }
  function i(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const id = {
  name: "lineEnding",
  tokenize: X7
};
function X7(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ve(e, t, "linePrefix");
  }
}
const Ka = {
  name: "thematicBreak",
  tokenize: Z7
};
function Z7(e, t, n) {
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
  tokenize: t8,
  continuation: {
    tokenize: n8
  },
  exit: o8
}, J7 = {
  tokenize: i8,
  partial: !0
}, e8 = {
  tokenize: r8,
  partial: !0
};
function t8(e, t, n) {
  const r = this, o = r.events[r.events.length - 1];
  let i = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0, l = 0;
  return s;
  function s(g) {
    const h = r.containerState.type || (g === 42 || g === 43 || g === 45 ? "listUnordered" : "listOrdered");
    if (h === "listUnordered" ? !r.containerState.marker || g === r.containerState.marker : zu(g)) {
      if (r.containerState.type || (r.containerState.type = h, e.enter(h, {
        _container: !0
      })), h === "listUnordered")
        return e.enter("listItemPrefix"), g === 42 || g === 45 ? e.check(Ka, n, u)(g) : u(g);
      if (!r.interrupt || g === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), a(g);
    }
    return n(g);
  }
  function a(g) {
    return zu(g) && ++l < 10 ? (e.consume(g), a) : (!r.interrupt || l < 2) && (r.containerState.marker ? g === r.containerState.marker : g === 41 || g === 46) ? (e.exit("listItemValue"), u(g)) : n(g);
  }
  function u(g) {
    return e.enter("listItemMarker"), e.consume(g), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || g, e.check(
      Vs,
      r.interrupt ? n : c,
      e.attempt(
        J7,
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
function n8(e, t, n) {
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
    return r.containerState.furtherBlankLines || !ye(s) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(s)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(e8, t, l)(s));
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
function r8(e, t, n) {
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
function o8(e) {
  e.exit(this.containerState.type);
}
function i8(e, t, n) {
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
const Qv = {
  name: "setextUnderline",
  tokenize: s8,
  resolveTo: l8
};
function l8(e, t) {
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
function s8(e, t, n) {
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
const a8 = {
  tokenize: u8
};
function u8(e) {
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
          e.attempt(g7, o)
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
const c8 = {
  resolveAll: Bk()
}, f8 = zk("string"), d8 = zk("text");
function zk(e) {
  return {
    tokenize: t,
    resolveAll: Bk(
      e === "text" ? p8 : void 0
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
function Bk(e) {
  return t;
  function t(n, r) {
    let o = -1, i;
    for (; ++o <= n.length; )
      i === void 0 ? n[o] && n[o][1].type === "data" && (i = o, o++) : (!n[o] || n[o][1].type !== "data") && (o !== i + 2 && (n[i][1].end = n[o - 1][1].end, n.splice(i + 2, o - i - 2), o = i + 2), i = void 0);
    return e ? e(n, r) : n;
  }
}
function p8(e, t) {
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
function h8(e, t, n) {
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
  function f(R) {
    return l = zt(l, R), w(), l[l.length - 1] !== null ? [] : (E(t, 0), u.events = Bc(i, u.events, u), u.events);
  }
  function d(R, N) {
    return g8(g(R), N);
  }
  function g(R) {
    return m8(l, R);
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
    Z(R) ? (r.line++, r.column = 1, r.offset += R === -3 ? 2 : 1, T()) : R !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = R;
  }
  function x(R, N) {
    const D = N || {};
    return D.type = R, D.start = h(), u.events.push(["enter", D, u]), s.push(D), D;
  }
  function b(R) {
    const N = s.pop();
    return N.end = h(), u.events.push(["exit", N, u]), N;
  }
  function A(R, N) {
    E(R, N.from);
  }
  function S(R, N) {
    N.restore();
  }
  function $(R, N) {
    return D;
    function D(z, F, _) {
      let H, M, I, O;
      return Array.isArray(z) ? C(z) : "tokenize" in z ? C([z]) : k(z);
      function k(ee) {
        return Q;
        function Q(ie) {
          const we = ie !== null && ee[ie], ce = ie !== null && ee.null, pe = [
            ...Array.isArray(we) ? we : we ? [we] : [],
            ...Array.isArray(ce) ? ce : ce ? [ce] : []
          ];
          return C(pe)(ie);
        }
      }
      function C(ee) {
        return H = ee, M = 0, ee.length === 0 ? _ : J(ee[M]);
      }
      function J(ee) {
        return Q;
        function Q(ie) {
          return O = P(), I = ee, ee.partial || (u.currentConstruct = ee), ee.name && u.parser.constructs.disable.null.includes(ee.name) ? ue() : ee.tokenize.call(
            N ? Object.assign(Object.create(u), N) : u,
            a,
            ne,
            ue
          )(ie);
        }
      }
      function ne(ee) {
        return R(I, O), F;
      }
      function ue(ee) {
        return O.restore(), ++M < H.length ? J(H[M]) : _;
      }
    }
  }
  function E(R, N) {
    R.resolveAll && !i.includes(R) && i.push(R), R.resolve && Rt(
      u.events,
      N,
      u.events.length - N,
      R.resolve(u.events.slice(N), u)
    ), R.resolveTo && (u.events = R.resolveTo(u.events, u));
  }
  function P() {
    const R = h(), N = u.previous, D = u.currentConstruct, z = u.events.length, F = Array.from(s);
    return {
      restore: _,
      from: z
    };
    function _() {
      r = R, u.previous = N, u.currentConstruct = D, u.events.length = z, s = F, T();
    }
  }
  function T() {
    r.line in o && r.column < 2 && (r.column = o[r.line], r.offset += o[r.line] - 1);
  }
}
function m8(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, o = t.end._index, i = t.end._bufferIndex;
  let l;
  return n === o ? l = [e[n].slice(r, i)] : (l = e.slice(n, o), r > -1 && (l[0] = l[0].slice(r)), i > 0 && l.push(e[o].slice(0, i))), l;
}
function g8(e, t) {
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
const v8 = {
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
  [62]: Ik
}, y8 = {
  [91]: b7
}, x8 = {
  [-2]: od,
  [-1]: od,
  [32]: od
}, w8 = {
  [35]: A7,
  [42]: Ka,
  [45]: [Qv, Ka],
  [60]: T7,
  [61]: Qv,
  [95]: Ka,
  [96]: Wv,
  [126]: Wv
}, b8 = {
  [38]: Nk,
  [92]: Ok
}, S8 = {
  [-5]: id,
  [-4]: id,
  [-3]: id,
  [33]: Q7,
  [38]: Nk,
  [42]: ih,
  [60]: [JO, D7],
  [91]: K7,
  [92]: [E7, Ok],
  [93]: rg,
  [95]: ih,
  [96]: f7
}, k8 = {
  null: [ih, c8]
}, C8 = {
  null: [42, 95]
}, E8 = {
  null: []
}, $8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  document: v8,
  contentInitial: y8,
  flowInitial: x8,
  flow: w8,
  string: b8,
  text: S8,
  insideSpan: k8,
  attentionMarkers: C8,
  disable: E8
}, Symbol.toStringTag, { value: "Module" }));
function A8(e = {}) {
  const t = Tk(
    [$8].concat(e.extensions || [])
  ), n = {
    defined: [],
    lazy: {},
    constructs: t,
    content: r(qO),
    document: r(GO),
    flow: r(a8),
    string: r(f8),
    text: r(d8)
  };
  return n;
  function r(o) {
    return i;
    function i(l) {
      return h8(n, o, l);
    }
  }
}
const Gv = /[\0\t\n\r]/g;
function P8() {
  let e = 1, t = "", n = !0, r;
  return o;
  function o(i, l, s) {
    const a = [];
    let u, c, f, d, g;
    for (i = t + i.toString(l), f = 0, t = "", n && (i.charCodeAt(0) === 65279 && f++, n = void 0); f < i.length; ) {
      if (Gv.lastIndex = f, u = Gv.exec(i), d = u && u.index !== void 0 ? u.index : i.length, g = i.charCodeAt(d), !u) {
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
function _8(e) {
  for (; !Mk(e); )
    ;
  return e;
}
function jk(e, t) {
  const n = Number.parseInt(e, t);
  return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "\uFFFD" : String.fromCharCode(n);
}
const R8 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Hk(e) {
  return e.replace(R8, T8);
}
function T8(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const o = n.charCodeAt(1), i = o === 120 || o === 88;
    return jk(n.slice(i ? 2 : 1), i ? 16 : 10);
  }
  return ng(n) || e;
}
const Vk = {}.hasOwnProperty, I8 = function(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), O8(n)(
    _8(
      A8(n).document().write(P8()(e, t, !0))
    )
  );
};
function O8(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: s(rr),
      autolinkProtocol: R,
      autolinkEmail: R,
      atxHeading: s(er),
      blockQuote: s(pe),
      characterEscape: R,
      characterReference: R,
      codeFenced: s(se),
      codeFencedFenceInfo: a,
      codeFencedFenceMeta: a,
      codeIndented: s(se, a),
      codeText: s(at, a),
      codeTextData: R,
      data: R,
      codeFlowValue: R,
      definition: s(ut),
      definitionDestinationString: a,
      definitionLabelString: a,
      definitionTitleString: a,
      emphasis: s(jr),
      hardBreakEscape: s(tr),
      hardBreakTrailing: s(tr),
      htmlFlow: s(Gs, a),
      htmlFlowData: R,
      htmlText: s(Gs, a),
      htmlTextData: R,
      image: s(nr),
      label: a,
      link: s(rr),
      listItem: s(or),
      listItemValue: h,
      listOrdered: s(Bi, g),
      listUnordered: s(Bi),
      paragraph: s(Xc),
      reference: ue,
      referenceString: a,
      resourceDestinationString: a,
      resourceTitleString: a,
      setextHeading: s(er),
      strong: s(Zc),
      thematicBreak: s(C2)
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: $,
      autolink: c(),
      autolinkEmail: ce,
      autolinkProtocol: we,
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
      setextHeading: c(T),
      setextHeadingLineSequence: P,
      setextHeadingText: E,
      strong: c(),
      thematicBreak: c()
    }
  };
  Uk(t, (e || {}).mdastExtensions || []);
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
      Vk.call(Yt, L[Ce][1].type) && Yt[L[Ce][1].type].call(
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
      (Yt[1] || Kv).call(te, void 0, Yt[0]);
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
    let Se = q - 1, Ce = -1, Yt = !1, ir, Rn, ji, Hi;
    for (; ++Se <= te; ) {
      const Le = L[Se];
      if (Le[1].type === "listUnordered" || Le[1].type === "listOrdered" || Le[1].type === "blockQuote" ? (Le[0] === "enter" ? Ce++ : Ce--, Hi = void 0) : Le[1].type === "lineEndingBlank" ? Le[0] === "enter" && (ir && !Hi && !Ce && !ji && (ji = Se), Hi = void 0) : Le[1].type === "linePrefix" || Le[1].type === "listItemValue" || Le[1].type === "listItemMarker" || Le[1].type === "listItemPrefix" || Le[1].type === "listItemPrefixWhitespace" || (Hi = void 0), !Ce && Le[0] === "enter" && Le[1].type === "listItemPrefix" || Ce === -1 && Le[0] === "exit" && (Le[1].type === "listUnordered" || Le[1].type === "listOrdered")) {
        if (ir) {
          let Jc = Se;
          for (Rn = void 0; Jc--; ) {
            const Tn = L[Jc];
            if (Tn[1].type === "lineEnding" || Tn[1].type === "lineEndingBlank") {
              if (Tn[0] === "exit")
                continue;
              Rn && (L[Rn][1].type = "lineEndingBlank", Yt = !0), Tn[1].type = "lineEnding", Rn = Jc;
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
        }, L.splice(Se, 0, ["enter", ir, Le[2]]), Se++, te++, ji = void 0, Hi = !0);
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
      Se[0].type !== L.type && (q ? q.call(this, L, Se[0]) : (Se[1] || Kv).call(this, L, Se[0]));
    else
      throw new Error(
        "Cannot close `" + L.type + "` (" + Nl({
          start: L.start,
          end: L.end
        }) + "): it\u2019s not open"
      );
    return te.position.end = ur(L.end), te;
  }
  function d() {
    return zO(this.stack.pop());
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
  function T() {
    i("setextHeadingSlurpLineEnding");
  }
  function R(L) {
    const q = this.stack[this.stack.length - 1];
    let te = q.children[q.children.length - 1];
    (!te || te.type !== "text") && (te = k2(), te.position = {
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
    te.label = Hk(q), te.identifier = fn(q).toLowerCase();
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
    te ? (Se = jk(
      q,
      te === "characterReferenceMarkerNumeric" ? 10 : 16
    ), i("characterReferenceType")) : Se = ng(q);
    const Ce = this.stack.pop();
    Ce.value += Se, Ce.position.end = ur(L.end);
  }
  function we(L) {
    N.call(this, L);
    const q = this.stack[this.stack.length - 1];
    q.url = this.sliceSerialize(L);
  }
  function ce(L) {
    N.call(this, L);
    const q = this.stack[this.stack.length - 1];
    q.url = "mailto:" + this.sliceSerialize(L);
  }
  function pe() {
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
  function Gs() {
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
  function Xc() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Zc() {
    return {
      type: "strong",
      children: []
    };
  }
  function k2() {
    return {
      type: "text",
      value: ""
    };
  }
  function C2() {
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
function Uk(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Uk(e, r) : N8(e, r);
  }
}
function N8(e, t) {
  let n;
  for (n in t)
    if (Vk.call(t, n)) {
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
function Kv(e, t) {
  throw e ? new Error(
    "Cannot close `" + e.type + "` (" + Nl({
      start: e.start,
      end: e.end
    }) + "): a different token (`" + t.type + "`, " + Nl({
      start: t.start,
      end: t.end
    }) + ") is open"
  ) : new Error(
    "Cannot close document, a token (`" + t.type + "`, " + Nl({
      start: t.start,
      end: t.end
    }) + ") is still open"
  );
}
function M8(e) {
  Object.assign(this, { Parser: (n) => {
    const r = this.data("settings");
    return I8(
      n,
      Object.assign({}, r, e, {
        extensions: this.data("micromarkExtensions") || [],
        mdastExtensions: this.data("fromMarkdownExtensions") || []
      })
    );
  } });
}
var Wk = { exports: {} };
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
})(Wk);
const D8 = Wk.exports, Ca = Object.assign(Hr(Error), {
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
    const o = n && D8(n, ...r);
    return new e(o);
  }
}
const Ea = {}.hasOwnProperty, Yv = {
  yaml: "-",
  toml: "+"
};
function og(e) {
  const t = [];
  let n = -1;
  const r = Array.isArray(e) ? e : e ? [e] : ["yaml"];
  for (; ++n < r.length; )
    t[n] = L8(r[n]);
  return t;
}
function L8(e) {
  let t = e;
  if (typeof t == "string") {
    if (!Ea.call(Yv, t))
      throw Ca("Missing matter definition for `%s`", t);
    t = {
      type: t,
      marker: Yv[t]
    };
  } else if (typeof t != "object")
    throw Ca("Expected matter to be an object, not `%j`", t);
  if (!Ea.call(t, "type"))
    throw Ca("Missing `type` in matter `%j`", t);
  if (!Ea.call(t, "fence") && !Ea.call(t, "marker"))
    throw Ca("Missing `marker` or `fence` in matter `%j`", t);
  return t;
}
function F8(e) {
  const t = og(e), n = {};
  let r = -1;
  for (; ++r < t.length; ) {
    const o = t[r], i = lh(o, "open").charCodeAt(0), l = z8(o), s = n[i];
    Array.isArray(s) ? s.push(l) : n[i] = [l];
  }
  return {
    flow: n
  };
}
function z8(e) {
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
  return e.marker ? Xv(e.marker, t).repeat(3) : Xv(e.fence, t);
}
function Xv(e, t) {
  return typeof e == "string" ? e : e[t];
}
function B8(e) {
  const t = og(e), n = {}, r = {};
  let o = -1;
  for (; ++o < t.length; ) {
    const i = t[o];
    n[i.type] = j8(i), r[i.type] = H8, r[i.type + "Value"] = V8;
  }
  return { enter: n, exit: r };
}
function j8(e) {
  return t;
  function t(n) {
    this.enter({ type: e.type, value: "" }, n), this.buffer();
  }
}
function H8(e) {
  const t = this.resume(), n = this.exit(e);
  n.value = t.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
}
function V8(e) {
  this.config.enter.data.call(this, e), this.config.exit.data.call(this, e);
}
function U8(e) {
  const t = [], n = {}, r = og(e);
  let o = -1;
  for (; ++o < r.length; ) {
    const i = r[o];
    n[i.type] = W8(i), t.push({ atBreak: !0, character: sh(i, "open").charAt(0) });
  }
  return { unsafe: t, handlers: n };
}
function W8(e) {
  const t = sh(e, "open"), n = sh(e, "close");
  return r;
  function r(o) {
    return t + (o.value ? `
` + o.value : "") + `
` + n;
  }
}
function sh(e, t) {
  return e.marker ? Zv(e.marker, t).repeat(3) : Zv(e.fence, t);
}
function Zv(e, t) {
  return typeof e == "string" ? e : e[t];
}
function q8(e = "yaml") {
  const t = this.data();
  n("micromarkExtensions", F8(e)), n("fromMarkdownExtensions", B8(e)), n("toMarkdownExtensions", U8(e));
  function n(r, o) {
    (t[r] ? t[r] : t[r] = []).push(o);
  }
}
const Q8 = {
  tokenize: Z8,
  partial: !0
}, qk = {
  tokenize: J8,
  partial: !0
}, Qk = {
  tokenize: eN,
  partial: !0
}, ai = {
  tokenize: nN,
  partial: !0
}, Gk = {
  tokenize: tN,
  partial: !0
}, Kk = {
  tokenize: Y8,
  previous: Zk
}, Yk = {
  tokenize: X8,
  previous: lg
}, Jn = {
  tokenize: K8,
  previous: Jk
}, _n = {}, G8 = {
  text: _n
};
let Vr = 48;
for (; Vr < 123; )
  _n[Vr] = Jn, Vr++, Vr === 58 ? Vr = 65 : Vr === 91 && (Vr = 97);
_n[43] = Jn;
_n[45] = Jn;
_n[46] = Jn;
_n[95] = Jn;
_n[72] = [Jn, Yk];
_n[104] = [Jn, Yk];
_n[87] = [Jn, Kk];
_n[119] = [Jn, Kk];
function K8(e, t, n) {
  const r = this;
  let o, i;
  return l;
  function l(g) {
    return !Jv(g) || !Jk(r.previous) || sg(r.events) ? n(g) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(g));
  }
  function s(g) {
    return Jv(g) ? (e.consume(g), s) : g === 64 ? (e.consume(g), a) : n(g);
  }
  function a(g) {
    return g === 46 ? e.check(ai, d, u)(g) : g === 45 || g === 95 ? e.check(ai, n, c)(g) : dt(g) ? (!i && zu(g) && (i = !0), e.consume(g), a) : d(g);
  }
  function u(g) {
    return e.consume(g), o = !0, i = void 0, a;
  }
  function c(g) {
    return e.consume(g), f;
  }
  function f(g) {
    return g === 46 ? e.check(ai, n, u)(g) : a(g);
  }
  function d(g) {
    return o && !i ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(g)) : n(g);
  }
}
function Y8(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return l !== 87 && l !== 119 || !Zk(r.previous) || sg(r.events) ? n(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(
      Q8,
      e.attempt(qk, e.attempt(Qk, i), n),
      n
    )(l));
  }
  function i(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(l);
  }
}
function X8(e, t, n) {
  const r = this;
  return o;
  function o(h) {
    return h !== 72 && h !== 104 || !lg(r.previous) || sg(r.events) ? n(h) : (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), e.consume(h), i);
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
    return h === null || ws(h) || Fc(h) || zc(h) ? n(h) : e.attempt(qk, e.attempt(Qk, g), n)(h);
  }
  function g(h) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(h);
  }
}
function Z8(e, t, n) {
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
function J8(e, t, n) {
  let r, o;
  return i;
  function i(a) {
    return a === 38 ? e.check(
      Gk,
      s,
      l
    )(a) : a === 46 || a === 95 ? e.check(ai, s, l)(a) : a === null || ws(a) || Fc(a) || a !== 45 && zc(a) ? s(a) : (e.consume(a), i);
  }
  function l(a) {
    return a === 46 ? (o = r, r = void 0, e.consume(a), i) : (a === 95 && (r = !0), e.consume(a), i);
  }
  function s(a) {
    return !o && !r ? t(a) : n(a);
  }
}
function eN(e, t) {
  let n = 0;
  return r;
  function r(l) {
    return l === 38 ? e.check(
      Gk,
      t,
      o
    )(l) : (l === 40 && n++, l === 41 ? e.check(
      ai,
      i,
      o
    )(l) : ig(l) ? t(l) : Xk(l) ? e.check(ai, t, o)(l) : (e.consume(l), r));
  }
  function o(l) {
    return e.consume(l), r;
  }
  function i(l) {
    return n--, n < 0 ? t(l) : o(l);
  }
}
function tN(e, t, n) {
  return r;
  function r(l) {
    return e.consume(l), o;
  }
  function o(l) {
    return Ht(l) ? (e.consume(l), o) : l === 59 ? (e.consume(l), i) : n(l);
  }
  function i(l) {
    return ig(l) ? t(l) : n(l);
  }
}
function nN(e, t, n) {
  return r;
  function r(i) {
    return e.consume(i), o;
  }
  function o(i) {
    return Xk(i) ? (e.consume(i), o) : ig(i) ? t(i) : n(i);
  }
}
function Xk(e) {
  return e === 33 || e === 34 || e === 39 || e === 41 || e === 42 || e === 44 || e === 46 || e === 58 || e === 59 || e === 60 || e === 63 || e === 95 || e === 126;
}
function ig(e) {
  return e === null || e === 60 || De(e);
}
function Jv(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || dt(e);
}
function Zk(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 126 || De(e);
}
function lg(e) {
  return e === null || !Ht(e);
}
function Jk(e) {
  return e !== 47 && lg(e);
}
function sg(e) {
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
const rN = {
  tokenize: fN,
  partial: !0
};
function oN() {
  return {
    document: {
      [91]: {
        tokenize: aN,
        continuation: {
          tokenize: uN
        },
        exit: cN
      }
    },
    text: {
      [91]: {
        tokenize: sN
      },
      [93]: {
        add: "after",
        tokenize: iN,
        resolveTo: lN
      }
    }
  };
}
function iN(e, t, n) {
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
function lN(e, t) {
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
function sN(e, t, n) {
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
function aN(e, t, n) {
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
function uN(e, t, n) {
  return e.check(Vs, t, e.attempt(rN, t, n));
}
function cN(e) {
  e.exit("gfmFootnoteDefinition");
}
function fN(e, t, n) {
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
function dN(e) {
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
              Bc(g, l.slice(u + 1, a), s)
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
      const v = Bu(u);
      if (h === 126)
        return f > 1 ? a(h) : (l.consume(h), f++, g);
      if (f < 2 && !n)
        return a(h);
      const w = l.exit("strikethroughSequenceTemporary"), p = Bu(h);
      return w._open = !p || p === 2 && Boolean(v), w._close = !v || v === 2 && Boolean(p), s(h);
    }
  }
}
const pN = {
  flow: {
    null: {
      tokenize: mN,
      resolve: hN
    }
  }
}, ey = {
  tokenize: gN,
  partial: !0
};
function hN(e, t) {
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
function mN(e, t, n) {
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
      ey,
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
    return e.enter("tableRow"), _ === 124 ? E(_) : (e.enter("temporaryTableCellContent"), R(_));
  }
  function E(_) {
    return e.enter("tableCellDivider"), e.consume(_), e.exit("tableCellDivider"), P;
  }
  function P(_) {
    return _ === null || Z(_) ? D(_) : ye(_) ? (e.enter("whitespace"), e.consume(_), T) : _ === 124 ? E(_) : (e.enter("temporaryTableCellContent"), R(_));
  }
  function T(_) {
    return ye(_) ? (e.consume(_), T) : (e.exit("whitespace"), P(_));
  }
  function R(_) {
    return _ === null || _ === 124 || De(_) ? (e.exit("temporaryTableCellContent"), P(_)) : (e.consume(_), _ === 92 ? N : R);
  }
  function N(_) {
    return _ === 92 || _ === 124 ? (e.consume(_), R) : R(_);
  }
  function D(_) {
    return e.exit("tableRow"), _ === null ? z(_) : e.check(
      ey,
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
  function F(_, H, M) {
    return I;
    function I(k) {
      return _.enter("lineEnding"), _.consume(k), _.exit("lineEnding"), ve(_, O, "linePrefix");
    }
    function O(k) {
      if (r.parser.lazy[r.now().line] || k === null || Z(k))
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
function gN(e, t, n) {
  let r = 0;
  return o;
  function o(l) {
    return e.enter("check"), e.consume(l), i;
  }
  function i(l) {
    return l === -1 || l === 32 ? (e.consume(l), r++, r === 4 ? t : i) : l === null || De(l) ? t(l) : n(l);
  }
}
const vN = {
  tokenize: xN
}, yN = {
  text: {
    [91]: vN
  }
};
function xN(e, t, n) {
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
        tokenize: wN
      },
      t,
      n
    )(a) : n(a);
  }
}
function wN(e, t, n) {
  return ve(e, r, "whitespace");
  function r(o) {
    return o === null ? n(o) : t(o);
  }
}
function bN(e) {
  return Tk([
    G8,
    oN(),
    dN(e),
    pN,
    yN
  ]);
}
function ju(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, o = n.indexOf(t);
  for (; o !== -1; )
    r++, o = n.indexOf(t, o + t.length);
  return r;
}
function SN(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const ag = function(e) {
  if (e == null)
    return $N;
  if (typeof e == "string")
    return EN(e);
  if (typeof e == "object")
    return Array.isArray(e) ? kN(e) : CN(e);
  if (typeof e == "function")
    return jc(e);
  throw new Error("Expected function, string, or object as test");
};
function kN(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = ag(e[n]);
  return jc(r);
  function r(...o) {
    let i = -1;
    for (; ++i < t.length; )
      if (t[i].call(this, ...o))
        return !0;
    return !1;
  }
}
function CN(e) {
  return jc(t);
  function t(n) {
    let r;
    for (r in e)
      if (n[r] !== e[r])
        return !1;
    return !0;
  }
}
function EN(e) {
  return jc(t);
  function t(n) {
    return n && n.type === e;
  }
}
function jc(e) {
  return t;
  function t(n, ...r) {
    return Boolean(
      n && typeof n == "object" && "type" in n && Boolean(e.call(this, n, ...r))
    );
  }
}
function $N() {
  return !0;
}
const AN = !0, ty = !1, PN = "skip", eC = function(e, t, n, r) {
  typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
  const o = ag(t), i = r ? -1 : 1;
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
      if ((!t || o(s, a, u[u.length - 1] || null)) && (d = _N(n(s, u)), d[0] === ty))
        return d;
      if (s.children && d[0] !== PN)
        for (h = (r ? s.children.length : -1) + i, v = u.concat(s); h > -1 && h < s.children.length; ) {
          if (g = l(s.children[h], h, v)(), g[0] === ty)
            return g;
          h = typeof g[1] == "number" ? g[1] : h + i;
        }
      return d;
    }
  }
};
function _N(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [AN, e] : [e];
}
const RN = {}.hasOwnProperty, TN = function(e, t, n, r) {
  let o, i;
  typeof t == "string" || t instanceof RegExp ? (i = [[t, n]], o = r) : (i = t, o = n), o || (o = {});
  const l = ag(o.ignore || []), s = IN(i);
  let a = -1;
  for (; ++a < s.length; )
    eC(e, "text", u);
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
function IN(e) {
  const t = [];
  if (typeof e != "object")
    throw new TypeError("Expected array or object as schema");
  if (Array.isArray(e)) {
    let n = -1;
    for (; ++n < e.length; )
      t.push([
        ny(e[n][0]),
        ry(e[n][1])
      ]);
  } else {
    let n;
    for (n in e)
      RN.call(e, n) && t.push([ny(n), ry(e[n])]);
  }
  return t;
}
function ny(e) {
  return typeof e == "string" ? new RegExp(SN(e), "g") : e;
}
function ry(e) {
  return typeof e == "function" ? e : () => e;
}
const ld = "phrasing", sd = ["autolink", "link", "image", "label"], ON = {
  transforms: [BN],
  enter: {
    literalAutolink: MN,
    literalAutolinkEmail: ad,
    literalAutolinkHttp: ad,
    literalAutolinkWww: ad
  },
  exit: {
    literalAutolink: zN,
    literalAutolinkEmail: FN,
    literalAutolinkHttp: DN,
    literalAutolinkWww: LN
  }
}, NN = {
  unsafe: [
    {
      character: "@",
      before: "[+\\-.\\w]",
      after: "[\\-.\\w]",
      inConstruct: ld,
      notInConstruct: sd
    },
    {
      character: ".",
      before: "[Ww]",
      after: "[\\-.\\w]",
      inConstruct: ld,
      notInConstruct: sd
    },
    { character: ":", before: "[ps]", after: "\\/", inConstruct: ld, notInConstruct: sd }
  ]
};
function MN(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function ad(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function DN(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function LN(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.url = "http://" + this.sliceSerialize(e);
}
function FN(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function zN(e) {
  this.exit(e);
}
function BN(e) {
  TN(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, jN],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, HN]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function jN(e, t, n, r, o) {
  let i = "";
  if (!tC(o) || (/^w/i.test(t) && (n = t + n, t = "", i = "http://"), !VN(n)))
    return !1;
  const l = UN(n + r);
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
function HN(e, t, n, r) {
  return !tC(r, !0) || /[-\d_]$/.test(n) ? !1 : {
    type: "link",
    title: null,
    url: "mailto:" + t + "@" + n,
    children: [{ type: "text", value: t + "@" + n }]
  };
}
function VN(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function UN(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const o = ju(e, "(");
  let i = ju(e, ")");
  for (; r !== -1 && o > i; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), i++;
  return [e, n];
}
function tC(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Fc(n) || zc(n)) && (!t || n !== 47);
}
function nC(e) {
  return e.label || !e.identifier ? e.label || "" : Hk(e.identifier);
}
function WN(e, t, n) {
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
      i.move(qN(a, o[s + 1], e, t))
    );
  }
  return r.pop(), l.join("");
}
function qN(e, t, n, r) {
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
const QN = /\r?\n|\r/g;
function GN(e, t) {
  const n = [];
  let r = 0, o = 0, i;
  for (; i = QN.exec(e); )
    l(e.slice(r, i.index)), n.push(i[0]), r = i.index + i[0].length, o++;
  return l(e.slice(r)), n.join("");
  function l(s) {
    n.push(t(s, o, !s));
  }
}
function rC(e) {
  if (!e._compiled) {
    const t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
    e._compiled = new RegExp(
      (t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""),
      "g"
    );
  }
  return e._compiled;
}
function KN(e, t) {
  return oy(e, t.inConstruct, !0) && !oy(e, t.notInConstruct, !1);
}
function oy(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function oC(e, t, n) {
  const r = (n.before || "") + (t || "") + (n.after || ""), o = [], i = [], l = {};
  let s = -1;
  for (; ++s < e.unsafe.length; ) {
    const c = e.unsafe[s];
    if (!KN(e.stack, c))
      continue;
    const f = rC(c);
    let d;
    for (; d = f.exec(r); ) {
      const g = "before" in c || Boolean(c.atBreak), h = "after" in c, v = d.index + (g ? d[1].length : 0);
      o.includes(v) ? (l[v].before && !g && (l[v].before = !1), l[v].after && !h && (l[v].after = !1)) : (o.push(v), l[v] = { before: g, after: h });
    }
  }
  o.sort(YN);
  let a = n.before ? n.before.length : 0;
  const u = r.length - (n.after ? n.after.length : 0);
  for (s = -1; ++s < o.length; ) {
    const c = o[s];
    c < a || c >= u || c + 1 < u && o[s + 1] === c + 1 && l[c].after && !l[c + 1].before && !l[c + 1].after || o[s - 1] === c - 1 && l[c].before && !l[c - 1].before && !l[c - 1].after || (a !== c && i.push(iy(r.slice(a, c), "\\")), a = c, /[!-/:-@[-`{-~]/.test(r.charAt(c)) && (!n.encode || !n.encode.includes(r.charAt(c))) ? i.push("\\") : (i.push(
      "&#x" + r.charCodeAt(c).toString(16).toUpperCase() + ";"
    ), a++));
  }
  return i.push(iy(r.slice(a, u), n.after)), i.join("");
}
function YN(e, t) {
  return e - t;
}
function iy(e, t) {
  const n = /\\(?=[!-/:-@[-`{-~])/g, r = [], o = [], i = e + t;
  let l = -1, s = 0, a;
  for (; a = n.exec(i); )
    r.push(a.index);
  for (; ++l < r.length; )
    s !== r[l] && o.push(e.slice(s, r[l])), o.push("\\"), s = r[l];
  return o.push(e.slice(s)), o.join("");
}
function Hc(e) {
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
iC.peek = s9;
function XN() {
  return {
    enter: {
      gfmFootnoteDefinition: JN,
      gfmFootnoteDefinitionLabelString: e9,
      gfmFootnoteCall: r9,
      gfmFootnoteCallString: o9
    },
    exit: {
      gfmFootnoteDefinition: n9,
      gfmFootnoteDefinitionLabelString: t9,
      gfmFootnoteCall: l9,
      gfmFootnoteCallString: i9
    }
  };
}
function ZN() {
  return {
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: a9, footnoteReference: iC }
  };
}
function JN(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function e9() {
  this.buffer();
}
function t9(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.label = t, n.identifier = fn(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function n9(e) {
  this.exit(e);
}
function r9(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function o9() {
  this.buffer();
}
function i9(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.label = t, n.identifier = fn(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function l9(e) {
  this.exit(e);
}
function iC(e, t, n, r) {
  const o = Hc(r);
  let i = o.move("[^");
  const l = n.enter("footnoteReference"), s = n.enter("reference");
  return i += o.move(
    oC(n, nC(e), {
      ...o.current(),
      before: i,
      after: "]"
    })
  ), s(), l(), i += o.move("]"), i;
}
function s9() {
  return "[";
}
function a9(e, t, n, r) {
  const o = Hc(r);
  let i = o.move("[^");
  const l = n.enter("footnoteDefinition"), s = n.enter("label");
  return i += o.move(
    oC(n, nC(e), {
      ...o.current(),
      before: i,
      after: "]"
    })
  ), s(), i += o.move(
    "]:" + (e.children && e.children.length > 0 ? " " : "")
  ), o.shift(4), i += o.move(
    GN(WN(e, n, o.current()), u9)
  ), l(), i;
}
function u9(e, t, n) {
  return t === 0 ? e : (n ? "" : "    ") + e;
}
function lC(e, t, n) {
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
const c9 = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
sC.peek = m9;
const f9 = {
  canContainEols: ["delete"],
  enter: { strikethrough: p9 },
  exit: { strikethrough: h9 }
}, d9 = {
  unsafe: [
    {
      character: "~",
      inConstruct: "phrasing",
      notInConstruct: c9
    }
  ],
  handlers: { delete: sC }
};
function p9(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function h9(e) {
  this.exit(e);
}
function sC(e, t, n, r) {
  const o = Hc(r), i = n.enter("strikethrough");
  let l = o.move("~~");
  return l += lC(e, n, {
    ...o.current(),
    before: l,
    after: "~"
  }), l += o.move("~~"), i(), l;
}
function m9() {
  return "~";
}
aC.peek = g9;
function aC(e, t, n) {
  let r = e.value || "", o = "`", i = -1;
  for (; new RegExp("(^|[^`])" + o + "([^`]|$)").test(r); )
    o += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++i < n.unsafe.length; ) {
    const l = n.unsafe[i], s = rC(l);
    let a;
    if (!!l.atBreak)
      for (; a = s.exec(r); ) {
        let u = a.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(a.index + 1);
      }
  }
  return o + r + o;
}
function g9() {
  return "`";
}
function v9(e, t = {}) {
  const n = (t.align || []).concat(), r = t.stringLength || x9, o = [], i = [], l = [], s = [];
  let a = 0, u = -1;
  for (; ++u < e.length; ) {
    const h = [], v = [];
    let w = -1;
    for (e[u].length > a && (a = e[u].length); ++w < e[u].length; ) {
      const p = y9(e[u][w]);
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
      o[c] = ly(n[c]);
  else {
    const h = ly(n);
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
function y9(e) {
  return e == null ? "" : String(e);
}
function x9(e) {
  return e.length;
}
function ly(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
const w9 = {
  enter: {
    table: b9,
    tableData: sy,
    tableHeader: sy,
    tableRow: k9
  },
  exit: {
    codeText: C9,
    table: S9,
    tableData: ud,
    tableHeader: ud,
    tableRow: ud
  }
};
function b9(e) {
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
function S9(e) {
  this.exit(e), this.setData("inTable");
}
function k9(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function ud(e) {
  this.exit(e);
}
function sy(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function C9(e) {
  let t = this.resume();
  this.getData("inTable") && (t = t.replace(/\\([\\|])/g, E9));
  const n = this.stack[this.stack.length - 1];
  n.value = t, this.exit(e);
}
function E9(e, t) {
  return t === "|" ? t : e;
}
function $9(e) {
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
    const p = v.enter("tableCell"), y = v.enter("phrasing"), x = lC(g, v, {
      ...w,
      before: i,
      after: i
    });
    return y(), p(), x;
  }
  function u(g, h) {
    return v9(g, {
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
    let w = aC(g, h, v);
    return v.stack.includes("tableCell") && (w = w.replace(/\|/g, "\\$&")), w;
  }
}
function A9(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function P9(e) {
  const t = e.options.listItemIndent || "tab";
  if (t === 1 || t === "1")
    return "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function _9(e, t, n, r) {
  const o = P9(n);
  let i = n.bulletCurrent || A9(n);
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
const R9 = {
  exit: {
    taskListCheckValueChecked: ay,
    taskListCheckValueUnchecked: ay,
    paragraph: I9
  }
}, T9 = {
  unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
  handlers: { listItem: O9 }
};
function ay(e) {
  const t = this.stack[this.stack.length - 2];
  t.checked = e.type === "taskListCheckValueChecked";
}
function I9(e) {
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
function O9(e, t, n, r) {
  const o = e.children[0], i = typeof e.checked == "boolean" && o && o.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", s = Hc(r);
  i && s.move(l);
  let a = _9(e, t, n, {
    ...r,
    ...s.current()
  });
  return i && (a = a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), a;
  function u(c) {
    return c + l;
  }
}
function N9() {
  return [
    ON,
    XN(),
    f9,
    w9,
    R9
  ];
}
function M9(e) {
  return {
    extensions: [
      NN,
      ZN(),
      d9,
      $9(e),
      T9
    ]
  };
}
function D9(e = {}) {
  const t = this.data();
  n("micromarkExtensions", bN(e)), n("fromMarkdownExtensions", N9()), n("toMarkdownExtensions", M9(e));
  function n(r, o) {
    (t[r] ? t[r] : t[r] = []).push(o);
  }
}
function L9(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function F9(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function z9(e, t) {
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
function B9(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function j9(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function uC(e, t) {
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
function H9(e, t) {
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
  }, uC(e, {
    type: "footnoteReference",
    identifier: o,
    position: t.position
  });
}
function V9(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function U9(e, t) {
  if (e.dangerous) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
  return null;
}
function cC(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return { type: "text", value: "![" + t.alt + r };
  const o = e.all(t), i = o[0];
  i && i.type === "text" ? i.value = "[" + i.value : o.unshift({ type: "text", value: "[" });
  const l = o[o.length - 1];
  return l && l.type === "text" ? l.value += r : o.push({ type: "text", value: r }), o;
}
function W9(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return cC(e, t);
  const r = { src: Li(n.url || ""), alt: t.alt };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const o = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function q9(e, t) {
  const n = { src: Li(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Q9(e, t) {
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
function G9(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return cC(e, t);
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
function K9(e, t) {
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
function Y9(e, t, n) {
  const r = e.all(t), o = n ? X9(n) : fC(t), i = {}, l = [];
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
function X9(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = fC(n[r]);
  }
  return t;
}
function fC(e) {
  const t = e.spread;
  return t == null ? e.children.length > 1 : t;
}
function Z9(e, t) {
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
function J9(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function eM(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function tM(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const ug = dC("start"), cg = dC("end");
function nM(e) {
  return { start: ug(e), end: cg(e) };
}
function dC(e) {
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
function rM(e, t) {
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
    }, s = ug(t.children[1]), a = cg(t.children[t.children.length - 1]);
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
function oM(e, t, n) {
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
function iM(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const uy = 9, cy = 32;
function lM(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), o = 0;
  const i = [];
  for (; r; )
    i.push(
      fy(t.slice(o, r.index), o > 0, !0),
      r[0]
    ), o = r.index + r[0].length, r = n.exec(t);
  return i.push(fy(t.slice(o), o > 0, !1)), i.join("");
}
function fy(e, t, n) {
  let r = 0, o = e.length;
  if (t) {
    let i = e.codePointAt(r);
    for (; i === uy || i === cy; )
      r++, i = e.codePointAt(r);
  }
  if (n) {
    let i = e.codePointAt(o - 1);
    for (; i === uy || i === cy; )
      o--, i = e.codePointAt(o - 1);
  }
  return o > r ? e.slice(r, o) : "";
}
function sM(e, t) {
  const n = { type: "text", value: lM(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function aM(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const uM = {
  blockquote: L9,
  break: F9,
  code: z9,
  delete: B9,
  emphasis: j9,
  footnoteReference: uC,
  footnote: H9,
  heading: V9,
  html: U9,
  imageReference: W9,
  image: q9,
  inlineCode: Q9,
  linkReference: G9,
  link: K9,
  listItem: Y9,
  list: Z9,
  paragraph: J9,
  root: eM,
  strong: tM,
  table: rM,
  tableCell: iM,
  tableRow: oM,
  text: sM,
  thematicBreak: aM,
  toml: $a,
  yaml: $a,
  definition: $a,
  footnoteDefinition: $a
};
function $a() {
  return null;
}
const pC = function(e, t, n, r) {
  typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), eC(e, t, o, r);
  function o(i, l) {
    const s = l[l.length - 1];
    return n(
      i,
      s ? s.children.indexOf(i) : null,
      s
    );
  }
};
function cM(e) {
  return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column;
}
const dy = {}.hasOwnProperty;
function fM(e) {
  const t = /* @__PURE__ */ Object.create(null);
  if (!e || !e.type)
    throw new Error("mdast-util-definitions expected node");
  return pC(e, "definition", (r) => {
    const o = py(r.identifier);
    o && !dy.call(t, o) && (t[o] = r);
  }), n;
  function n(r) {
    const o = py(r);
    return o && dy.call(t, o) ? t[o] : null;
  }
}
function py(e) {
  return String(e || "").toUpperCase();
}
const Hu = {}.hasOwnProperty;
function dM(e, t) {
  const n = t || {}, r = n.allowDangerousHtml || !1, o = {};
  return l.dangerous = r, l.clobberPrefix = n.clobberPrefix === void 0 || n.clobberPrefix === null ? "user-content-" : n.clobberPrefix, l.footnoteLabel = n.footnoteLabel || "Footnotes", l.footnoteLabelTagName = n.footnoteLabelTagName || "h2", l.footnoteLabelProperties = n.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l.footnoteBackLabel = n.footnoteBackLabel || "Back to content", l.unknownHandler = n.unknownHandler, l.passThrough = n.passThrough, l.handlers = { ...uM, ...n.handlers }, l.definition = fM(e), l.footnoteById = o, l.footnoteOrder = [], l.footnoteCounts = {}, l.patch = pM, l.applyData = hM, l.one = s, l.all = a, l.wrap = gM, l.augment = i, pC(e, "footnoteDefinition", (u) => {
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
      cM(f) || (c.position = { start: ug(f), end: cg(f) });
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
    return hC(l, u, c);
  }
  function a(u) {
    return fg(l, u);
  }
}
function pM(e, t) {
  e.position && (t.position = nM(e));
}
function hM(e, t) {
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
function hC(e, t, n) {
  const r = t && t.type;
  if (!r)
    throw new Error("Expected node, got `" + t + "`");
  return Hu.call(e.handlers, r) ? e.handlers[r](e, t, n) : e.passThrough && e.passThrough.includes(r) ? "children" in t ? { ...t, children: fg(e, t) } : t : e.unknownHandler ? e.unknownHandler(e, t, n) : mM(e, t);
}
function fg(e, t) {
  const n = [];
  if ("children" in t) {
    const r = t.children;
    let o = -1;
    for (; ++o < r.length; ) {
      const i = hC(e, r[o], t);
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
function mM(e, t) {
  const n = t.data || {}, r = "value" in t && !(Hu.call(n, "hProperties") || Hu.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: fg(e, t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function gM(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function vM(e) {
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
function mC(e, t) {
  const n = dM(e, t), r = n.one(e, null), o = vM(n);
  return o && r.children.push({ type: "text", value: `
` }, o), Array.isArray(r) ? { type: "root", children: r } : r;
}
const yM = function(e, t) {
  return e && "run" in e ? wM(e, t) : bM(e || t);
}, xM = yM;
function wM(e, t) {
  return (n, r, o) => {
    e.run(mC(n, t), r, (i) => {
      o(i);
    });
  };
}
function bM(e) {
  return (t) => mC(t, e);
}
class Us {
  constructor(t, n, r) {
    this.property = t, this.normal = n, r && (this.space = r);
  }
}
Us.prototype.property = {};
Us.prototype.normal = {};
Us.prototype.space = null;
function gC(e, t) {
  const n = {}, r = {};
  let o = -1;
  for (; ++o < e.length; )
    Object.assign(n, e[o].property), Object.assign(r, e[o].normal);
  return new Us(n, r, t);
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
let SM = 0;
const le = Eo(), je = Eo(), vC = Eo(), V = Eo(), Ae = Eo(), ui = Eo(), Ct = Eo();
function Eo() {
  return 2 ** ++SM;
}
const uh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: le,
  booleanish: je,
  overloadedBoolean: vC,
  number: V,
  spaceSeparated: Ae,
  commaSeparated: ui,
  commaOrSpaceSeparated: Ct
}, Symbol.toStringTag, { value: "Module" })), cd = Object.keys(uh);
class dg extends Kt {
  constructor(t, n, r, o) {
    let i = -1;
    if (super(t, n), hy(this, "space", o), typeof r == "number")
      for (; ++i < cd.length; ) {
        const l = cd[i];
        hy(this, cd[i], (r & uh[l]) === uh[l]);
      }
  }
}
dg.prototype.defined = !0;
function hy(e, t, n) {
  n && (e[t] = n);
}
const kM = {}.hasOwnProperty;
function Fi(e) {
  const t = {}, n = {};
  let r;
  for (r in e.properties)
    if (kM.call(e.properties, r)) {
      const o = e.properties[r], i = new dg(
        r,
        e.transform(e.attributes || {}, r),
        o,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0), t[r] = i, n[ah(r)] = r, n[ah(i.attribute)] = r;
    }
  return new Us(t, n, e.space);
}
const yC = Fi({
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
}), xC = Fi({
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function wC(e, t) {
  return t in e ? e[t] : t;
}
function bC(e, t) {
  return wC(e, t.toLowerCase());
}
const SC = Fi({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: bC,
  properties: { xmlns: null, xmlnsXLink: null }
}), kC = Fi({
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: je,
    ariaAutoComplete: null,
    ariaBusy: je,
    ariaChecked: je,
    ariaColCount: V,
    ariaColIndex: V,
    ariaColSpan: V,
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
    ariaLevel: V,
    ariaLive: null,
    ariaModal: je,
    ariaMultiLine: je,
    ariaMultiSelectable: je,
    ariaOrientation: null,
    ariaOwns: Ae,
    ariaPlaceholder: null,
    ariaPosInSet: V,
    ariaPressed: je,
    ariaReadOnly: je,
    ariaRelevant: null,
    ariaRequired: je,
    ariaRoleDescription: Ae,
    ariaRowCount: V,
    ariaRowIndex: V,
    ariaRowSpan: V,
    ariaSelected: je,
    ariaSetSize: V,
    ariaSort: null,
    ariaValueMax: V,
    ariaValueMin: V,
    ariaValueNow: V,
    ariaValueText: null,
    role: null
  }
}), CM = Fi({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: bC,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: ui,
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
    contentEditable: je,
    controls: le,
    controlsList: Ae,
    coords: V | ui,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: le,
    defer: le,
    dir: null,
    dirName: null,
    disabled: le,
    download: vC,
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
    spellCheck: je,
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
    value: je,
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
    scrolling: je,
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
}), EM = Fi({
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
  transform: wC,
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
    g1: ui,
    g2: ui,
    glyphName: ui,
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
}), $M = /^data[-\w.:]+$/i, my = /-[a-z]/g, AM = /[A-Z]/g;
function PM(e, t) {
  const n = ah(t);
  let r = t, o = Kt;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && $M.test(t)) {
    if (t.charAt(4) === "-") {
      const i = t.slice(5).replace(my, RM);
      r = "data" + i.charAt(0).toUpperCase() + i.slice(1);
    } else {
      const i = t.slice(4);
      if (!my.test(i)) {
        let l = i.replace(AM, _M);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    o = dg;
  }
  return new o(r, t);
}
function _M(e) {
  return "-" + e.toLowerCase();
}
function RM(e) {
  return e.charAt(1).toUpperCase();
}
const TM = gC([xC, yC, SC, kC, CM], "html"), CC = gC([xC, yC, SC, kC, EM], "svg"), IM = [
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
], gy = {}.hasOwnProperty;
function OM(e, t) {
  const n = t || {};
  function r(o, ...i) {
    let l = r.invalid;
    const s = r.handlers;
    if (o && gy.call(o, e)) {
      const a = String(o[e]);
      l = gy.call(s, a) ? s[a] : r.unknown;
    }
    if (l)
      return l.call(this, o, ...i);
  }
  return r.handlers = n.handlers || {}, r.invalid = n.invalid, r.unknown = n.unknown, r;
}
function NM(e, t) {
  if (e = e.replace(
    t.subset ? MM(t.subset) : /["&'<>`]/g,
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
function MM(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t.push(e[n].replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"));
  return new RegExp("(?:" + t.join("|") + ")", "g");
}
function DM(e, t, n) {
  const r = "&#x" + e.toString(16).toUpperCase();
  return n && t && !/[\dA-Fa-f]/.test(String.fromCharCode(t)) ? r : r + ";";
}
function LM(e, t, n) {
  const r = "&#" + String(e);
  return n && t && !/\d/.test(String.fromCharCode(t)) ? r : r + ";";
}
const FM = [
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
], fd = {
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
}, zM = [
  "cent",
  "copy",
  "divide",
  "gt",
  "lt",
  "not",
  "para",
  "times"
], EC = {}.hasOwnProperty, ch = {};
let Aa;
for (Aa in fd)
  EC.call(fd, Aa) && (ch[fd[Aa]] = Aa);
function BM(e, t, n, r) {
  const o = String.fromCharCode(e);
  if (EC.call(ch, o)) {
    const i = ch[o], l = "&" + i;
    return n && FM.includes(i) && !zM.includes(i) && (!r || t && t !== 61 && /[^\da-z]/i.test(String.fromCharCode(t))) ? l : l + ";";
  }
  return "";
}
function jM(e, t, n) {
  let r = DM(e, t, n.omitOptionalSemicolons), o;
  if ((n.useNamedReferences || n.useShortestReferences) && (o = BM(
    e,
    t,
    n.omitOptionalSemicolons,
    n.attribute
  )), (n.useShortestReferences || !o) && n.useShortestReferences) {
    const i = LM(e, t, n.omitOptionalSemicolons);
    i.length < r.length && (r = i);
  }
  return o && (!n.useShortestReferences || o.length < r.length) ? o : r;
}
function ci(e, t) {
  return NM(e, Object.assign({ format: jM }, t));
}
function HM(e, t, n, r) {
  return r.settings.bogusComments ? "<?" + ci(
    e.value,
    Object.assign({}, r.settings.characterReferences, { subset: [">"] })
  ) + ">" : "<!--" + e.value.replace(/^>|^->|<!--|-->|--!>|<!-$/g, o) + "-->";
  function o(i) {
    return ci(
      i,
      Object.assign({}, r.settings.characterReferences, {
        subset: ["<", ">"]
      })
    );
  }
}
function VM(e, t, n, r) {
  return "<!" + (r.settings.upperDoctype ? "DOCTYPE" : "doctype") + (r.settings.tightDoctype ? "" : " ") + "html>";
}
function UM(e, t) {
  const n = t || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
function WM(e) {
  return e.join(" ").trim();
}
function pg(e) {
  const t = e && typeof e == "object" && e.type === "text" ? e.value || "" : e;
  return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === "";
}
const We = AC(1), $C = AC(-1);
function AC(e) {
  return t;
  function t(n, r, o) {
    const i = n ? n.children : [];
    let l = (r || 0) + e, s = i && i[l];
    if (!o)
      for (; s && pg(s); )
        l += e, s = i[l];
    return s;
  }
}
const qM = {}.hasOwnProperty;
function PC(e) {
  return t;
  function t(n, r, o) {
    return qM.call(e, n.tagName) && e[n.tagName](n, r, o);
  }
}
const hg = PC({
  html: QM,
  head: dd,
  body: GM,
  p: KM,
  li: YM,
  dt: XM,
  dd: ZM,
  rt: vy,
  rp: vy,
  optgroup: JM,
  option: eD,
  menuitem: tD,
  colgroup: dd,
  caption: dd,
  thead: nD,
  tbody: rD,
  tfoot: oD,
  tr: iD,
  td: yy,
  th: yy
});
function dd(e, t, n) {
  const r = We(n, t, !0);
  return !r || r.type !== "comment" && !(r.type === "text" && pg(r.value.charAt(0)));
}
function QM(e, t, n) {
  const r = We(n, t);
  return !r || r.type !== "comment";
}
function GM(e, t, n) {
  const r = We(n, t);
  return !r || r.type !== "comment";
}
function KM(e, t, n) {
  const r = We(n, t);
  return r ? r.type === "element" && (r.tagName === "address" || r.tagName === "article" || r.tagName === "aside" || r.tagName === "blockquote" || r.tagName === "details" || r.tagName === "div" || r.tagName === "dl" || r.tagName === "fieldset" || r.tagName === "figcaption" || r.tagName === "figure" || r.tagName === "footer" || r.tagName === "form" || r.tagName === "h1" || r.tagName === "h2" || r.tagName === "h3" || r.tagName === "h4" || r.tagName === "h5" || r.tagName === "h6" || r.tagName === "header" || r.tagName === "hgroup" || r.tagName === "hr" || r.tagName === "main" || r.tagName === "menu" || r.tagName === "nav" || r.tagName === "ol" || r.tagName === "p" || r.tagName === "pre" || r.tagName === "section" || r.tagName === "table" || r.tagName === "ul") : !n || !(n.type === "element" && (n.tagName === "a" || n.tagName === "audio" || n.tagName === "del" || n.tagName === "ins" || n.tagName === "map" || n.tagName === "noscript" || n.tagName === "video"));
}
function YM(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && r.tagName === "li";
}
function XM(e, t, n) {
  const r = We(n, t);
  return r && r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function ZM(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function vy(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "rp" || r.tagName === "rt");
}
function JM(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && r.tagName === "optgroup";
}
function eD(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "option" || r.tagName === "optgroup");
}
function tD(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "menuitem" || r.tagName === "hr" || r.tagName === "menu");
}
function nD(e, t, n) {
  const r = We(n, t);
  return r && r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function rD(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function oD(e, t, n) {
  return !We(n, t);
}
function iD(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && r.tagName === "tr";
}
function yy(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "td" || r.tagName === "th");
}
const lD = PC({
  html: sD,
  head: aD,
  body: uD,
  colgroup: cD,
  tbody: fD
});
function sD(e) {
  const t = We(e, -1);
  return !t || t.type !== "comment";
}
function aD(e) {
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
function uD(e) {
  const t = We(e, -1, !0);
  return !t || t.type !== "comment" && !(t.type === "text" && pg(t.value.charAt(0))) && !(t.type === "element" && (t.tagName === "meta" || t.tagName === "link" || t.tagName === "script" || t.tagName === "style" || t.tagName === "template"));
}
function cD(e, t, n) {
  const r = $C(n, t), o = We(e, -1, !0);
  return n && r && r.type === "element" && r.tagName === "colgroup" && hg(r, n.children.indexOf(r), n) ? !1 : o && o.type === "element" && o.tagName === "col";
}
function fD(e, t, n) {
  const r = $C(n, t), o = We(e, -1);
  return n && r && r.type === "element" && (r.tagName === "thead" || r.tagName === "tbody") && hg(r, n.children.indexOf(r), n) ? !1 : o && o.type === "element" && o.tagName === "tr";
}
const Pa = {
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
function dD(e, t, n, r) {
  const o = r.schema, i = o.space === "svg" ? !1 : r.settings.omitOptionalTags;
  let l = o.space === "svg" ? r.settings.closeEmptyElements : r.settings.voids.includes(e.tagName.toLowerCase());
  const s = [];
  let a;
  o.space === "html" && e.tagName === "svg" && (r.schema = CC);
  const u = pD(r, e.properties), c = r.all(
    o.space === "html" && e.tagName === "template" ? e.content : e
  );
  return r.schema = o, c && (l = !1), (u || !i || !lD(e, t, n)) && (s.push("<", e.tagName, u ? " " + u : ""), l && (o.space === "svg" || r.settings.closeSelfClosing) && (a = u.charAt(u.length - 1), (!r.settings.tightSelfClosing || a === "/" || a && a !== '"' && a !== "'") && s.push(" "), s.push("/")), s.push(">")), s.push(c), !l && (!i || !hg(e, t, n)) && s.push("</" + e.tagName + ">"), s.join("");
}
function pD(e, t) {
  const n = [];
  let r = -1, o;
  if (t) {
    for (o in t)
      if (t[o] !== void 0 && t[o] !== null) {
        const i = hD(e, o, t[o]);
        i && n.push(i);
      }
  }
  for (; ++r < n.length; ) {
    const i = e.settings.tightAttributes ? n[r].charAt(n[r].length - 1) : null;
    r !== n.length - 1 && i !== '"' && i !== "'" && (n[r] += " ");
  }
  return n.join("");
}
function hD(e, t, n) {
  const r = PM(e.schema, t), o = e.settings.allowParseErrors && e.schema.space === "html" ? 0 : 1, i = e.settings.allowDangerousCharacters ? 0 : 1;
  let l = e.quote, s;
  if (r.overloadedBoolean && (n === r.attribute || n === "") ? n = !0 : (r.boolean || r.overloadedBoolean && typeof n != "string") && (n = Boolean(n)), n == null || n === !1 || typeof n == "number" && Number.isNaN(n))
    return "";
  const a = ci(
    r.attribute,
    Object.assign({}, e.settings.characterReferences, {
      subset: Pa.name[o][i]
    })
  );
  return n === !0 || (n = Array.isArray(n) ? (r.commaSeparated ? UM : WM)(n, {
    padLeft: !e.settings.tightCommaSeparatedLists
  }) : String(n), e.settings.collapseEmptyAttributes && !n) ? a : (e.settings.preferUnquoted && (s = ci(
    n,
    Object.assign({}, e.settings.characterReferences, {
      subset: Pa.unquoted[o][i],
      attribute: !0
    })
  )), s !== n && (e.settings.quoteSmart && ju(n, l) > ju(n, e.alternative) && (l = e.alternative), s = l + ci(
    n,
    Object.assign({}, e.settings.characterReferences, {
      subset: (l === "'" ? Pa.single : Pa.double)[o][i],
      attribute: !0
    })
  ) + l), a + (s && "=" + s));
}
function _C(e, t, n, r) {
  return n && n.type === "element" && (n.tagName === "script" || n.tagName === "style") ? e.value : ci(
    e.value,
    Object.assign({}, r.settings.characterReferences, {
      subset: ["<", "&"]
    })
  );
}
function mD(e, t, n, r) {
  return r.settings.allowDangerousHtml ? e.value : _C(e, t, n, r);
}
function gD(e, t, n, r) {
  return r.all(e);
}
const vD = OM("type", {
  invalid: yD,
  unknown: xD,
  handlers: { comment: HM, doctype: VM, element: dD, raw: mD, root: gD, text: _C }
});
function yD(e) {
  throw new Error("Expected node, not `" + e + "`");
}
function xD(e) {
  throw new Error("Cannot compile unknown node `" + e.type + "`");
}
function wD(e, t) {
  const n = t || {}, r = n.quote || '"', o = r === '"' ? "'" : '"';
  if (r !== '"' && r !== "'")
    throw new Error("Invalid quote `" + r + "`, expected `'` or `\"`");
  return {
    one: bD,
    all: SD,
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
      voids: n.voids || IM,
      characterReferences: n.characterReferences || n.entities || {},
      closeSelfClosing: n.closeSelfClosing || !1,
      closeEmptyElements: n.closeEmptyElements || !1
    },
    schema: n.space === "svg" ? CC : TM,
    quote: r,
    alternative: o
  }.one(
    Array.isArray(e) ? { type: "root", children: e } : e,
    void 0,
    void 0
  );
}
function bD(e, t, n) {
  return vD(e, t, n, this);
}
function SD(e) {
  const t = [], n = e && e.children || [];
  let r = -1;
  for (; ++r < n.length; )
    t[r] = this.one(n[r], r, e);
  return t.join("");
}
function kD(e) {
  const t = this.data("settings"), n = Object.assign({}, t, e);
  Object.assign(this, { Compiler: r });
  function r(o) {
    return wD(o, n);
  }
}
function CD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
      n.hasOwnProperty(r) && (e[r] = n[r]);
  }
  return e;
}
function fh(e, t) {
  return Array(t + 1).join(e);
}
function ED(e) {
  return e.replace(/^\n*/, "");
}
function $D(e) {
  for (var t = e.length; t > 0 && e[t - 1] === `
`; )
    t--;
  return e.substring(0, t);
}
var AD = [
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
function mg(e) {
  return gg(e, AD);
}
var RC = [
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
function TC(e) {
  return gg(e, RC);
}
function PD(e) {
  return OC(e, RC);
}
var IC = [
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
function _D(e) {
  return gg(e, IC);
}
function RD(e) {
  return OC(e, IC);
}
function gg(e, t) {
  return t.indexOf(e.nodeName) >= 0;
}
function OC(e, t) {
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
      var o = fh(r === 1 ? "=" : "-", e.length);
      return `

` + e + `
` + o + `

`;
    } else
      return `

` + fh("#", r) + " " + e + `

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
    var c = fh(l, s);
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
    var n = t.getAttribute("href"), r = Vu(t.getAttribute("title"));
    return r && (r = ' "' + r + '"'), "[" + e + "](" + n + r + ")";
  }
};
st.referenceLink = {
  filter: function(e, t) {
    return t.linkStyle === "referenced" && e.nodeName === "A" && e.getAttribute("href");
  },
  replacement: function(e, t, n) {
    var r = t.getAttribute("href"), o = Vu(t.getAttribute("title"));
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
    var n = Vu(t.getAttribute("alt")), r = t.getAttribute("src") || "", o = Vu(t.getAttribute("title")), i = o ? ' "' + o + '"' : "";
    return r ? "![" + n + "](" + r + i + ")" : "";
  }
};
function Vu(e) {
  return e ? e.replace(/(\n+\s*)+/g, `
`) : "";
}
function NC(e) {
  this.options = e, this._keep = [], this._remove = [], this.blankRule = {
    replacement: e.blankReplacement
  }, this.keepReplacement = e.keepReplacement, this.defaultRule = {
    replacement: e.defaultReplacement
  }, this.array = [];
  for (var t in e.rules)
    this.array.push(e.rules[t]);
}
NC.prototype = {
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
    return (t = pd(this.array, e, this.options)) || (t = pd(this._keep, e, this.options)) || (t = pd(this._remove, e, this.options)) ? t : this.defaultRule;
  },
  forEach: function(e) {
    for (var t = 0; t < this.array.length; t++)
      e(this.array[t], t);
  }
};
function pd(e, t, n) {
  for (var r = 0; r < e.length; r++) {
    var o = e[r];
    if (TD(o, t, n))
      return o;
  }
}
function TD(e, t, n) {
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
function ID(e) {
  var t = e.element, n = e.isBlock, r = e.isVoid, o = e.isPre || function(f) {
    return f.nodeName === "PRE";
  };
  if (!(!t.firstChild || o(t))) {
    for (var i = null, l = !1, s = null, a = xy(s, t, o); a !== t; ) {
      if (a.nodeType === 3 || a.nodeType === 4) {
        var u = a.data.replace(/[ \r\n\t]+/g, " ");
        if ((!i || / $/.test(i.data)) && !l && u[0] === " " && (u = u.substr(1)), !u) {
          a = hd(a);
          continue;
        }
        a.data = u, i = a;
      } else if (a.nodeType === 1)
        n(a) || a.nodeName === "BR" ? (i && (i.data = i.data.replace(/ $/, "")), i = null, l = !1) : r(a) || o(a) ? (i = null, l = !0) : i && (l = !1);
      else {
        a = hd(a);
        continue;
      }
      var c = xy(s, a, o);
      s = a, a = c;
    }
    i && (i.data = i.data.replace(/ $/, ""), i.data || hd(i));
  }
}
function hd(e) {
  var t = e.nextSibling || e.parentNode;
  return e.parentNode.removeChild(e), t;
}
function xy(e, t, n) {
  return e && e.parentNode === t || n(t) ? t.nextSibling || t.parentNode : t.firstChild || t.nextSibling || t.parentNode;
}
var MC = typeof window < "u" ? window : {};
function OD() {
  var e = MC.DOMParser, t = !1;
  try {
    new e().parseFromString("", "text/html") && (t = !0);
  } catch {
  }
  return t;
}
function ND() {
  var e = function() {
  };
  return MD() ? e.prototype.parseFromString = function(t) {
    var n = new window.ActiveXObject("htmlfile");
    return n.designMode = "on", n.open(), n.write(t), n.close(), n;
  } : e.prototype.parseFromString = function(t) {
    var n = document.implementation.createHTMLDocument("");
    return n.open(), n.write(t), n.close(), n;
  }, e;
}
function MD() {
  var e = !1;
  try {
    document.implementation.createHTMLDocument("").open();
  } catch {
    window.ActiveXObject && (e = !0);
  }
  return e;
}
var DD = OD() ? MC.DOMParser : ND();
function LD(e, t) {
  var n;
  if (typeof e == "string") {
    var r = FD().parseFromString(
      '<x-turndown id="turndown-root">' + e + "</x-turndown>",
      "text/html"
    );
    n = r.getElementById("turndown-root");
  } else
    n = e.cloneNode(!0);
  return ID({
    element: n,
    isBlock: mg,
    isVoid: TC,
    isPre: t.preformattedCode ? zD : null
  }), n;
}
var md;
function FD() {
  return md = md || new DD(), md;
}
function zD(e) {
  return e.nodeName === "PRE" || e.nodeName === "CODE";
}
function BD(e, t) {
  return e.isBlock = mg(e), e.isCode = e.nodeName === "CODE" || e.parentNode.isCode, e.isBlank = jD(e), e.flankingWhitespace = HD(e, t), e;
}
function jD(e) {
  return !TC(e) && !_D(e) && /^\s*$/i.test(e.textContent) && !PD(e) && !RD(e);
}
function HD(e, t) {
  if (e.isBlock || t.preformattedCode && e.isCode)
    return { leading: "", trailing: "" };
  var n = VD(e.textContent);
  return n.leadingAscii && wy("left", e, t) && (n.leading = n.leadingNonAscii), n.trailingAscii && wy("right", e, t) && (n.trailing = n.trailingNonAscii), { leading: n.leading, trailing: n.trailing };
}
function VD(e) {
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
function wy(e, t, n) {
  var r, o, i;
  return e === "left" ? (r = t.previousSibling, o = / $/) : (r = t.nextSibling, o = /^ /), r && (r.nodeType === 3 ? i = o.test(r.nodeValue) : n.preformattedCode && r.nodeName === "CODE" ? i = !1 : r.nodeType === 1 && !mg(r) && (i = o.test(r.textContent))), i;
}
var UD = Array.prototype.reduce, WD = [
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
function Uu(e) {
  if (!(this instanceof Uu))
    return new Uu(e);
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
  this.options = CD({}, t, e), this.rules = new NC(this.options);
}
Uu.prototype = {
  turndown: function(e) {
    if (!GD(e))
      throw new TypeError(
        e + " is not a string, or an element/document/fragment node."
      );
    if (e === "")
      return "";
    var t = DC.call(this, new LD(e, this.options));
    return qD.call(this, t);
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
    return WD.reduce(function(t, n) {
      return t.replace(n[0], n[1]);
    }, e);
  }
};
function DC(e) {
  var t = this;
  return UD.call(e.childNodes, function(n, r) {
    r = new BD(r, t.options);
    var o = "";
    return r.nodeType === 3 ? o = r.isCode ? r.nodeValue : t.escape(r.nodeValue) : r.nodeType === 1 && (o = QD.call(t, r)), LC(n, o);
  }, "");
}
function qD(e) {
  var t = this;
  return this.rules.forEach(function(n) {
    typeof n.append == "function" && (e = LC(e, n.append(t.options)));
  }), e.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "");
}
function QD(e) {
  var t = this.rules.forNode(e), n = DC.call(this, e), r = e.flankingWhitespace;
  return (r.leading || r.trailing) && (n = n.trim()), r.leading + t.replacement(n, e, this.options) + r.trailing;
}
function LC(e, t) {
  var n = $D(e), r = ED(t), o = Math.max(e.length - n.length, t.length - r.length), i = `

`.substring(0, o);
  return n + i + r;
}
function GD(e) {
  return e != null && (typeof e == "string" || e.nodeType && (e.nodeType === 1 || e.nodeType === 9 || e.nodeType === 11));
}
async function KD(e) {
  if (!e)
    return "";
  const t = await NO().use(M8).use(q8).use(D9).use(xM).use(kD).process(e);
  return String(t);
}
async function YD(e) {
  const t = new Uu({
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
const XD = ({
  content: e
}) => {
  const [t, n] = m.exports.useState("");
  return m.exports.useEffect(() => {
    KD(e).then((r) => {
      n(r);
    });
  }, [e]), t;
}, FC = (e) => {
  const t = XD(e);
  return /* @__PURE__ */ B("div", {
    className: "prose prose-sm prose-invert",
    dangerouslySetInnerHTML: {
      __html: t
    }
  });
}, zC = m.exports.memo(({
  message: e
}) => /* @__PURE__ */ fe("div", {
  className: ki("flex flex-col gap-2 p-4 text-sm text-mayumi-gray-1100", {
    "bg-mayumi-gray-200": e.role === "user",
    "bg-mayumi-gray-300": e.role === "assistant"
  }),
  children: [/* @__PURE__ */ B("div", {
    className: "flex-0 rounded-md text-mayumi-gray-1200",
    children: e.role === "user" ? "You:" : "Assistant:"
  }), /* @__PURE__ */ B("div", {
    className: "flex-1 rounded-md",
    children: /* @__PURE__ */ B(FC, {
      content: e.text
    })
  })]
}), (e, t) => e.message.text === t.message.text);
zC.displayName = "MessageItem";
const ZD = (e) => {
  var a;
  const t = m.exports.useRef(null), n = m.exports.useRef(null), {
    conventions: r,
    updateOrUpsertConventions: o
  } = vs(), [i] = m.exports.useState(e.action), l = (a = r[i]) != null ? a : [];
  function s() {
    var c, f, d;
    const u = ((f = (c = t.current) == null ? void 0 : c.children.length) != null ? f : 1) - 1;
    ((d = t.current) == null ? void 0 : d.children[u]) && n.current && setTimeout(() => {
      xO(n.current, {
        behavior: "smooth",
        scrollMode: "if-needed"
      });
    }, 80);
  }
  return vs.subscribe((u, c) => {
    var f, d;
    ((f = c.conventions[i]) == null ? void 0 : f.length) !== ((d = u.conventions[i]) == null ? void 0 : d.length) && s();
  }), m.exports.useEffect(() => {
    Zu(Qa, (u) => {
      const {
        data: c
      } = u;
      o(c.action, c.message);
    }), s();
  }, [o]), /* @__PURE__ */ B("div", {
    className: "aiflow-chat-in-command flex-1 bg-mayumi-gray-200",
    children: /* @__PURE__ */ fe(mO, {
      className: "pointer-events-auto h-[400px] overflow-hidden pt-2",
      children: [/* @__PURE__ */ B(gO, {
        className: "h-full w-full rounded",
        children: /* @__PURE__ */ fe("div", {
          ref: t,
          children: [l.map((u) => /* @__PURE__ */ B(zC, {
            message: u
          }, u.id)), /* @__PURE__ */ B("div", {
            ref: n
          })]
        })
      }), /* @__PURE__ */ B(wv, {
        className: "flex touch-none select-none bg-transparent p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col",
        orientation: "vertical",
        children: /* @__PURE__ */ B(bv, {
          className: "relative flex-1 rounded-[10px] bg-transparent before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
        })
      }), /* @__PURE__ */ B(wv, {
        className: "flex touch-none select-none bg-transparent p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col",
        orientation: "horizontal",
        children: /* @__PURE__ */ B(bv, {
          className: "relative flex-1 rounded-[10px] bg-transparent before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
        })
      })]
    })
  });
}, vg = (e) => e.replace("-page", "");
function dh(e, t = {}, n) {
  for (const r in e) {
    const o = e[r], i = n ? `${n}:${r}` : r;
    typeof o == "object" && o !== null ? dh(o, t, i) : typeof o == "function" && (t[i] = o);
  }
  return t;
}
const JD = { run: (e) => e() }, eL = () => JD, BC = typeof console.createTask < "u" ? console.createTask : eL;
function tL(e, t) {
  const n = t.shift(), r = BC(n);
  return e.reduce(
    (o, i) => o.then(() => r.run(() => i(...t))),
    Promise.resolve()
  );
}
function nL(e, t) {
  const n = t.shift(), r = BC(n);
  return Promise.all(e.map((o) => r.run(() => o(...t))));
}
function gd(e, t) {
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
    const n = dh(t), r = Object.keys(n).map(
      (o) => this.hook(o, n[o])
    );
    return () => {
      for (const o of r.splice(0, r.length))
        o();
    };
  }
  removeHooks(t) {
    const n = dh(t);
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
    this._before && gd(this._before, o);
    const i = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      r
    );
    return i instanceof Promise ? i.finally(() => {
      this._after && o && gd(this._after, o);
    }) : (this._after && o && gd(this._after, o), i);
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
const jC = oL(), HC = (e, t = {}) => {
  const n = () => {
    const r = setInterval(() => {
      e.current && (e.current.focus(), clearInterval(r));
    }, 10);
  };
  t.name && jC.hook(t.name, n), n();
}, iL = JI();
function lL() {
  const [e, t] = m.exports.useState(""), n = m.exports.useRef(), r = m.exports.useRef(null), o = m.exports.useRef(null), i = m.exports.useRef(null), l = m.exports.useRef(null), [s, a] = m.exports.useState([Xr]), u = s[s.length - 1], [c, f] = m.exports.useState(!1), {
    upsertConventions: d
  } = vs(), {
    open: g,
    setOpen: h,
    toggle: v,
    updateChatOpen: w
  } = ys(), p = m.exports.useCallback(() => {
    a((E) => {
      const P = [...E];
      return P.splice(-1, 1), P;
    }), jC.callHook("command-input");
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
      a((T) => [...T, E]);
      return;
    }
    if (E === xs && (f(!0), await gl(Qa, {
      text: P == null ? void 0 : P.text,
      action: xs
    }, "background"), f(!1)), E === Ei && (f(!0), await gl(Qa, {
      text: P == null ? void 0 : P.text,
      action: Ei
    }, "background"), f(!1)), E === si) {
      const T = await YD(document.body), R = await gl(Qa, {
        text: T,
        action: si
      }, "background");
      d(si, R.message);
    }
    t("");
  }, [d]);
  m.exports.useEffect(() => {
    const E = (P) => {
      if (P.key === "j" && P.metaKey && (v(), u === Mu && p(), w(!1)), P.key === "Escape" && u === Xr && !ys.getState().subCommandOpen) {
        h(!1), w(!1);
        return;
      }
      P.key === "Escape" && u !== Xr && (p(), setTimeout(() => {
        var T;
        (T = i.current) == null || T.focus();
      }, 100));
    };
    return document.addEventListener("keydown", E), () => document.removeEventListener("keydown", E);
  }, [w, u, p, v, h]), HC(i, {
    name: "command-input"
  });
  const A = u === Xr, S = u === Du || u === Zp, $ = u === Du;
  return /* @__PURE__ */ fe(Xn, {
    children: [/* @__PURE__ */ B(IP, {
      open: g,
      children: /* @__PURE__ */ B(OP, {
        container: r.current,
        children: /* @__PURE__ */ B(NP, {
          "cmdk-dialog": "",
          className: "z-50 shadow-lg",
          children: /* @__PURE__ */ fe(ln, {
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
                children: s.map((E) => /* @__PURE__ */ B("div", {
                  className: "rounded-md bg-mayumi-gray-700 px-3 py-1 text-xs uppercase text-mayumi-gray-1100 shadow",
                  children: vg(E)
                }, E))
              }), $ && /* @__PURE__ */ B(KI, {
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
              className: ki({
                hidden: !A
              }),
              placeholder: "Search for commands...",
              onKeyDown: (E) => {
                var P;
                E.key === "Enter" && y(), !(u === Xr || ((P = n.current) == null ? void 0 : P.length)) && E.key === "Backspace" && (E.preventDefault(), p(), y());
              }
            }, "cmdk-input"), A && /* @__PURE__ */ B("hr", {
              "cmdk-raycast-loader": ""
            }), /* @__PURE__ */ fe(ln.List, {
              className: "min-h-[400px]",
              ref: l,
              children: [u === Xr && /* @__PURE__ */ B(sL, {
                onSelect: b
              }), u === Mu && /* @__PURE__ */ B(aL, {
                onExit: p
              }), S && /* @__PURE__ */ B(uL, {
                page: u
              })]
            }), /* @__PURE__ */ fe("div", {
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
  } = vs(), {
    updateChatOpen: n,
    setOpen: r
  } = ys();
  return /* @__PURE__ */ fe(Xn, {
    children: [/* @__PURE__ */ B(ln.Empty, {
      children: "No results found."
    }), /* @__PURE__ */ fe(ln.Group, {
      heading: "Commands",
      children: [/* @__PURE__ */ fe(Mo, {
        isCommand: !0,
        value: "open-convenstions-history",
        onSelect: () => {
          r(!1), n(!0);
        },
        children: [/* @__PURE__ */ B(XI, {}), "View History"]
      }), /* @__PURE__ */ fe(Mo, {
        isCommand: !0,
        value: "clear-storage",
        onSelect: () => {
          t(), iL.clear();
        },
        children: [/* @__PURE__ */ B(YI, {}), "Clear Storage"]
      }), /* @__PURE__ */ fe(Mo, {
        isCommand: !0,
        onSelect: () => e(Mu),
        value: Mu,
        children: [/* @__PURE__ */ B(ZI, {}), "Config"]
      }), /* @__PURE__ */ fe(Mo, {
        isCommand: !0,
        onSelect: () => e(Zp),
        value: Zp,
        children: [/* @__PURE__ */ B("i", {
          className: "gg-girl/0.8 text-mayumi-gray-1200"
        }), "Ask ChatGPT"]
      }), /* @__PURE__ */ fe(Mo, {
        isCommand: !0,
        onSelect: () => e(Du),
        value: Du,
        children: [/* @__PURE__ */ B(ST, {
          className: "fill-mayumi-gray-1200/1"
        }), "Tranasplate"]
      }), /* @__PURE__ */ fe(Mo, {
        isCommand: !0,
        value: si,
        children: [/* @__PURE__ */ B("i", {
          className: "gg-notes/0.8 text-mayumi-gray-1200"
        }), "Summary"]
      })]
    })]
  });
}
function aL(e) {
  const t = ck();
  return /* @__PURE__ */ B("div", {
    className: "flex flex-col items-center justify-center p-4 pt-8",
    children: /* @__PURE__ */ B(Km, {
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
  return HC(o, {
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
  } = ys(), [, s] = m.exports.useState(), a = m.exports.useRef(null), u = n !== Xr;
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
  }, [o, t]), /* @__PURE__ */ fe(wP, {
    open: o,
    onOpenChange: (c) => {
      !u || l(c);
    },
    modal: !0,
    children: [/* @__PURE__ */ fe(bP, {
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
    }), /* @__PURE__ */ B(SP, {
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
      children: /* @__PURE__ */ fe(ln, {
        loop: !0,
        shouldFilter: !1,
        children: [/* @__PURE__ */ B(ln.List, {
          children: /* @__PURE__ */ fe(ln.Group, {
            heading: n == null ? void 0 : n.toUpperCase(),
            children: [n === xs && /* @__PURE__ */ B(dL, {
              onSelect: r
            }), n === Ei && /* @__PURE__ */ B(pL, {
              onSelect: r
            }), n === si && /* @__PURE__ */ B(hL, {
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
  return /* @__PURE__ */ fe(Xn, {
    children: [/* @__PURE__ */ B(Wu, {
      value: "search-input",
      onSelect: () => {
        e(xs, {
          text: pv()
        });
      },
      shortcut: "\u21B5",
      children: /* @__PURE__ */ B("span", {
        className: "truncate",
        children: (n = pv()) != null ? n : "Search input"
      })
    }), /* @__PURE__ */ B(Wu, {
      onSelect: () => {
        e(xs, {
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
    children: /* @__PURE__ */ B(Wu, {
      onSelect: () => {
        e(Ei, {
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
    children: /* @__PURE__ */ B(Wu, {
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
function Mo({
  children: e,
  value: t,
  isCommand: n = !1,
  onSelect: r,
  disabled: o = !1
}) {
  return /* @__PURE__ */ fe(ln.Item, {
    disabled: o,
    value: t,
    onSelect: r,
    children: [e, /* @__PURE__ */ B("span", {
      "cmdk-raycast-meta": "",
      children: n ? "Command" : "Application"
    })]
  });
}
function Wu({
  children: e,
  shortcut: t,
  value: n,
  onSelect: r
}) {
  return /* @__PURE__ */ fe(ln.Item, {
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
var yg = qs(), oe = (e) => Ws(e, yg), xg = qs();
oe.write = (e) => Ws(e, xg);
var Vc = qs();
oe.onStart = (e) => Ws(e, Vc);
var wg = qs();
oe.onFrame = (e) => Ws(e, wg);
var bg = qs();
oe.onFinish = (e) => Ws(e, bg);
var fi = [];
oe.setTimeout = (e, t) => {
  let n = oe.now() + t, r = () => {
    let i = fi.findIndex((l) => l.cancel == r);
    ~i && fi.splice(i, 1), Sr -= ~i ? 1 : 0;
  }, o = { time: n, handler: e, cancel: r };
  return fi.splice(VC(n), 0, o), Sr += 1, UC(), o;
};
var VC = (e) => ~(~fi.findIndex((t) => t.time > e) || ~fi.length);
oe.cancel = (e) => {
  Vc.delete(e), wg.delete(e), bg.delete(e), yg.delete(e), xg.delete(e);
};
oe.sync = (e) => {
  ph = !0, oe.batchedUpdates(e), ph = !1;
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
    Vc.delete(n), t = null;
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
  oe.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : qC();
};
var br = -1, Sr = 0, ph = !1;
function Ws(e, t) {
  ph ? (t.delete(e), e(0)) : (t.add(e), UC());
}
function UC() {
  br < 0 && (br = 0, oe.frameLoop !== "demand" && Sg(WC));
}
function mL() {
  br = -1;
}
function WC() {
  ~br && (Sg(WC), oe.batchedUpdates(qC));
}
function qC() {
  let e = br;
  br = oe.now();
  let t = VC(br);
  if (t && (QC(fi.splice(0, t), (n) => n.handler()), Sr -= t), !Sr) {
    mL();
    return;
  }
  Vc.flush(), yg.flush(e ? Math.min(64, br - e) : 16.667), wg.flush(), xg.flush(), bg.flush();
}
function qs() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return { add(n) {
    Sr += t == e && !e.has(n) ? 1 : 0, e.add(n);
  }, delete(n) {
    return Sr -= t == e && e.has(n) ? 1 : 0, e.delete(n);
  }, flush(n) {
    t.size && (e = /* @__PURE__ */ new Set(), Sr -= t.size, QC(t, (r) => r(n) && e.add(r)), Sr += e.size, t = e);
  } };
}
function QC(e, t) {
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
vL(pn, { assign: () => xL, colors: () => Ir, createStringInterpolator: () => Cg, skipAnimation: () => KC, to: () => GC, willAdvance: () => Eg });
function hh() {
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
function Dl(e, t) {
  if (e.size) {
    let n = Array.from(e);
    e.clear(), me(n, t);
  }
}
var ml = (e, ...t) => Dl(e, (n) => n(...t)), kg = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), Cg, GC, Ir = null, KC = !1, Eg = hh, xL = (e) => {
  e.to && (GC = e.to), e.now && (oe.now = e.now), e.colors !== void 0 && (Ir = e.colors), e.skipAnimation != null && (KC = e.skipAnimation), e.createStringInterpolator && (Cg = e.createStringInterpolator), e.requestAnimationFrame && oe.use(e.requestAnimationFrame), e.batchedUpdates && (oe.batchedUpdates = e.batchedUpdates), e.willAdvance && (Eg = e.willAdvance), e.frameLoop && (oe.frameLoop = e.frameLoop);
}, Ll = /* @__PURE__ */ new Set(), Vt = [], vd = [], qu = 0, Uc = { get idle() {
  return !Ll.size && !Vt.length;
}, start(e) {
  qu > e.priority ? (Ll.add(e), oe.onStart(wL)) : (YC(e), oe(mh));
}, advance: mh, sort(e) {
  if (qu)
    oe.onFrame(() => Uc.sort(e));
  else {
    let t = Vt.indexOf(e);
    ~t && (Vt.splice(t, 1), XC(e));
  }
}, clear() {
  Vt = [], Ll.clear();
} };
function wL() {
  Ll.forEach(YC), Ll.clear(), oe(mh);
}
function YC(e) {
  Vt.includes(e) || XC(e);
}
function XC(e) {
  Vt.splice(bL(Vt, (t) => t.priority > e.priority), 0, e);
}
function mh(e) {
  let t = vd;
  for (let n = 0; n < Vt.length; n++) {
    let r = Vt[n];
    qu = r.priority, r.idle || (Eg(r), r.advance(e), r.idle || t.push(r));
  }
  return qu = 0, vd = Vt, vd.length = 0, Vt = t, Vt.length > 0;
}
function bL(e, t) {
  let n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var SL = (e, t, n) => Math.min(Math.max(n, e), t), kL = { transparent: 0, aliceblue: 4042850303, antiquewhite: 4209760255, aqua: 16777215, aquamarine: 2147472639, azure: 4043309055, beige: 4126530815, bisque: 4293182719, black: 255, blanchedalmond: 4293643775, blue: 65535, blueviolet: 2318131967, brown: 2771004159, burlywood: 3736635391, burntsienna: 3934150143, cadetblue: 1604231423, chartreuse: 2147418367, chocolate: 3530104575, coral: 4286533887, cornflowerblue: 1687547391, cornsilk: 4294499583, crimson: 3692313855, cyan: 16777215, darkblue: 35839, darkcyan: 9145343, darkgoldenrod: 3095792639, darkgray: 2846468607, darkgreen: 6553855, darkgrey: 2846468607, darkkhaki: 3182914559, darkmagenta: 2332068863, darkolivegreen: 1433087999, darkorange: 4287365375, darkorchid: 2570243327, darkred: 2332033279, darksalmon: 3918953215, darkseagreen: 2411499519, darkslateblue: 1211993087, darkslategray: 793726975, darkslategrey: 793726975, darkturquoise: 13554175, darkviolet: 2483082239, deeppink: 4279538687, deepskyblue: 12582911, dimgray: 1768516095, dimgrey: 1768516095, dodgerblue: 512819199, firebrick: 2988581631, floralwhite: 4294635775, forestgreen: 579543807, fuchsia: 4278255615, gainsboro: 3705462015, ghostwhite: 4177068031, gold: 4292280575, goldenrod: 3668254975, gray: 2155905279, green: 8388863, greenyellow: 2919182335, grey: 2155905279, honeydew: 4043305215, hotpink: 4285117695, indianred: 3445382399, indigo: 1258324735, ivory: 4294963455, khaki: 4041641215, lavender: 3873897215, lavenderblush: 4293981695, lawngreen: 2096890111, lemonchiffon: 4294626815, lightblue: 2916673279, lightcoral: 4034953471, lightcyan: 3774873599, lightgoldenrodyellow: 4210742015, lightgray: 3553874943, lightgreen: 2431553791, lightgrey: 3553874943, lightpink: 4290167295, lightsalmon: 4288707327, lightseagreen: 548580095, lightskyblue: 2278488831, lightslategray: 2005441023, lightslategrey: 2005441023, lightsteelblue: 2965692159, lightyellow: 4294959359, lime: 16711935, limegreen: 852308735, linen: 4210091775, magenta: 4278255615, maroon: 2147483903, mediumaquamarine: 1724754687, mediumblue: 52735, mediumorchid: 3126187007, mediumpurple: 2473647103, mediumseagreen: 1018393087, mediumslateblue: 2070474495, mediumspringgreen: 16423679, mediumturquoise: 1221709055, mediumvioletred: 3340076543, midnightblue: 421097727, mintcream: 4127193855, mistyrose: 4293190143, moccasin: 4293178879, navajowhite: 4292783615, navy: 33023, oldlace: 4260751103, olive: 2155872511, olivedrab: 1804477439, orange: 4289003775, orangered: 4282712319, orchid: 3664828159, palegoldenrod: 4008225535, palegreen: 2566625535, paleturquoise: 2951671551, palevioletred: 3681588223, papayawhip: 4293907967, peachpuff: 4292524543, peru: 3448061951, pink: 4290825215, plum: 3718307327, powderblue: 2967529215, purple: 2147516671, rebeccapurple: 1714657791, red: 4278190335, rosybrown: 3163525119, royalblue: 1097458175, saddlebrown: 2336560127, salmon: 4202722047, sandybrown: 4104413439, seagreen: 780883967, seashell: 4294307583, sienna: 2689740287, silver: 3233857791, skyblue: 2278484991, slateblue: 1784335871, slategray: 1887473919, slategrey: 1887473919, snow: 4294638335, springgreen: 16744447, steelblue: 1182971135, tan: 3535047935, teal: 8421631, thistle: 3636451583, tomato: 4284696575, turquoise: 1088475391, violet: 4001558271, wheat: 4125012991, white: 4294967295, whitesmoke: 4126537215, yellow: 4294902015, yellowgreen: 2597139199 }, an = "[-+]?\\d*\\.?\\d+", Qu = an + "%";
function Wc(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var CL = new RegExp("rgb" + Wc(an, an, an)), EL = new RegExp("rgba" + Wc(an, an, an, an)), $L = new RegExp("hsl" + Wc(an, Qu, Qu)), AL = new RegExp("hsla" + Wc(an, Qu, Qu, an)), PL = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, _L = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, RL = /^#([0-9a-fA-F]{6})$/, TL = /^#([0-9a-fA-F]{8})$/;
function IL(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = RL.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Ir && Ir[e] !== void 0 ? Ir[e] : (t = CL.exec(e)) ? (Do(t[1]) << 24 | Do(t[2]) << 16 | Do(t[3]) << 8 | 255) >>> 0 : (t = EL.exec(e)) ? (Do(t[1]) << 24 | Do(t[2]) << 16 | Do(t[3]) << 8 | ky(t[4])) >>> 0 : (t = PL.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = TL.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = _L.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = $L.exec(e)) ? (by(Sy(t[1]), _a(t[2]), _a(t[3])) | 255) >>> 0 : (t = AL.exec(e)) ? (by(Sy(t[1]), _a(t[2]), _a(t[3])) | ky(t[4])) >>> 0 : null;
}
function yd(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function by(e, t, n) {
  let r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, i = yd(o, r, e + 1 / 3), l = yd(o, r, e), s = yd(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(l * 255) << 16 | Math.round(s * 255) << 8;
}
function Do(e) {
  let t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Sy(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function ky(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function _a(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Cy(e) {
  let t = IL(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, o = (t & 65280) >>> 8, i = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${o}, ${i})`;
}
var bs = (e, t, n) => {
  if (U.fun(e))
    return e;
  if (U.arr(e))
    return bs({ range: e, output: t, extrapolate: n });
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
}, Gu = 1.70158, Ra = Gu * 1.525, Ey = Gu + 1, $y = 2 * Math.PI / 3, Ay = 2 * Math.PI / 4.5, Ta = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, DL = { linear: (e) => e, easeInQuad: (e) => e * e, easeOutQuad: (e) => 1 - (1 - e) * (1 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2, easeInCubic: (e) => e * e * e, easeOutCubic: (e) => 1 - Math.pow(1 - e, 3), easeInOutCubic: (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2, easeInQuart: (e) => e * e * e * e, easeOutQuart: (e) => 1 - Math.pow(1 - e, 4), easeInOutQuart: (e) => e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2, easeInQuint: (e) => e * e * e * e * e, easeOutQuint: (e) => 1 - Math.pow(1 - e, 5), easeInOutQuint: (e) => e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2, easeInSine: (e) => 1 - Math.cos(e * Math.PI / 2), easeOutSine: (e) => Math.sin(e * Math.PI / 2), easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2, easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * e - 10), easeOutExpo: (e) => e === 1 ? 1 : 1 - Math.pow(2, -10 * e), easeInOutExpo: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2, easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)), easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)), easeInOutCirc: (e) => e < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2, easeInBack: (e) => Ey * e * e * e - Gu * e * e, easeOutBack: (e) => 1 + Ey * Math.pow(e - 1, 3) + Gu * Math.pow(e - 1, 2), easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((Ra + 1) * 2 * e - Ra) / 2 : (Math.pow(2 * e - 2, 2) * ((Ra + 1) * (e * 2 - 2) + Ra) + 2) / 2, easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * $y), easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * $y) + 1, easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Ay)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Ay) / 2 + 1, easeInBounce: (e) => 1 - Ta(1 - e), easeOutBounce: Ta, easeInOutBounce: (e) => e < 0.5 ? (1 - Ta(1 - 2 * e)) / 2 : (1 + Ta(2 * e - 1)) / 2, steps: ML }, Ai = Symbol.for("FluidValue.get"), mo = Symbol.for("FluidValue.observers"), Bt = (e) => Boolean(e && e[Ai]), yt = (e) => e && e[Ai] ? e[Ai]() : e, Py = (e) => e[mo] || null;
function LL(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function Ss(e, t) {
  let n = e[mo];
  n && n.forEach((r) => {
    LL(r, t);
  });
}
var BF, jF, Qy, ZC = (Qy = class {
  constructor(e) {
    K(this, BF);
    K(this, jF);
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    FL(this, e);
  }
}, BF = Ai, jF = mo, Qy), FL = (e, t) => JC(e, Ai, t);
function zi(e, t) {
  if (e[Ai]) {
    let n = e[mo];
    n || JC(e, mo, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function ks(e, t) {
  let n = e[mo];
  if (n && n.has(t)) {
    let r = n.size - 1;
    r ? n.delete(t) : e[mo] = null, e.observerRemoved && e.observerRemoved(r, t);
  }
}
var JC = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), Ya = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, zL = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, _y = new RegExp(`(${Ya.source})(%|[a-z]+)`, "i"), BL = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, qc = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, e2 = (e) => {
  let [t, n] = jL(e);
  if (!t || kg())
    return e;
  let r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  return r ? r.trim() : n && n.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(n) || e : n && qc.test(n) ? e2(n) : n || e;
}, jL = (e) => {
  let t = qc.exec(e);
  if (!t)
    return [,];
  let [, n, r] = t;
  return [n, r];
}, xd, HL = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`, t2 = (e) => {
  xd || (xd = Ir ? new RegExp(`(${Object.keys(Ir).join("|")})(?!\\w)`, "g") : /^\b$/);
  let t = e.output.map((o) => yt(o).replace(qc, e2).replace(zL, Cy).replace(xd, Cy)), n = t.map((o) => o.match(Ya).map(Number)), r = n[0].map((o, i) => n.map((l) => {
    if (!(i in l))
      throw Error('The arity of each "output" value must be equal');
    return l[i];
  })).map((o) => bs({ ...e, output: o }));
  return (o) => {
    var s;
    let i = !_y.test(t[0]) && ((s = t.find((a) => _y.test(a))) == null ? void 0 : s.replace(Ya, "")), l = 0;
    return t[0].replace(Ya, () => `${r[l++](o)}${i || ""}`).replace(BL, HL);
  };
}, $g = "react-spring: ", n2 = (e) => {
  let t = e, n = !1;
  if (typeof t != "function")
    throw new TypeError(`${$g}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, VL = n2(console.warn);
function UL() {
  VL(`${$g}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var WL = n2(console.warn);
function qL() {
  WL(`${$g}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function Qc(e) {
  return U.str(e) && (e[0] == "#" || /\d/.test(e) || !kg() && qc.test(e) || e in (Ir || {}));
}
var Ag = kg() ? m.exports.useEffect : m.exports.useLayoutEffect, QL = () => {
  let e = m.exports.useRef(!1);
  return Ag(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function r2() {
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
var o2 = (e) => m.exports.useEffect(e, YL), YL = [];
function Ry(e) {
  let t = m.exports.useRef();
  return m.exports.useEffect(() => {
    t.current = e;
  }), t.current;
}
var Cs = Symbol.for("Animated:node"), XL = (e) => !!e && e[Cs] === e, wn = (e) => e && e[Cs], Pg = (e, t) => yL(e, Cs, t), Gc = (e) => e && e[Cs] && e[Cs].getPayload(), i2 = class {
  constructor() {
    K(this, "payload");
    Pg(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}, Qs = class extends i2 {
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
    return new Qs(t);
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
}, Es = class extends Qs {
  constructor(t) {
    super(0);
    K(this, "_string", null);
    K(this, "_toString");
    this._toString = bs({ output: [t, t] });
  }
  static create(t) {
    return new Es(t);
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
    t && (this._toString = bs({ output: [this.getValue(), t] })), this._value = 0, super.reset();
  }
}, Ku = { dependencies: null }, Kc = class extends i2 {
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
    Ku.dependencies && Bt(e) && Ku.dependencies.add(e);
    let t = Gc(e);
    t && me(t, (n) => this.add(n));
  }
}, l2 = class extends Kc {
  constructor(e) {
    super(e);
  }
  static create(e) {
    return new l2(e);
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
  return (Qc(e) ? Es : Qs).create(e);
}
function gh(e) {
  let t = wn(e);
  return t ? t.constructor : U.arr(e) ? l2 : Qc(e) ? Es : Qs;
}
var Ty = (e, t) => {
  let n = !U.fun(e) || e.prototype && e.prototype.isReactComponent;
  return m.exports.forwardRef((r, o) => {
    let i = m.exports.useRef(null), l = n && m.exports.useCallback((h) => {
      i.current = tF(o, h);
    }, [o]), [s, a] = eF(r, t), u = r2(), c = () => {
      let h = i.current;
      n && !h || (h ? t.applyAnimatedValues(h, s.getValue(!0)) : !1) === !1 && u();
    }, f = new JL(c, a), d = m.exports.useRef();
    Ag(() => (d.current = f, me(a, (h) => zi(h, f)), () => {
      d.current && (me(d.current.deps, (h) => ks(h, d.current)), oe.cancel(d.current.update));
    })), m.exports.useEffect(c, []), o2(() => () => {
      let h = d.current;
      me(h.deps, (v) => ks(v, h));
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
  return Ku.dependencies = n, e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }), e = new Kc(e), Ku.dependencies = null, [e, n];
}
function tF(e, t) {
  return e && (U.fun(e) ? e(t) : e.current = t), t;
}
var Iy = Symbol.for("AnimatedComponent"), nF = (e, { applyAnimatedValues: t = () => !1, createAnimatedStyle: n = (o) => new Kc(o), getComponentProps: r = (o) => o } = {}) => {
  let o = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r }, i = (l) => {
    let s = Oy(l) || "Anonymous";
    return U.str(l) ? l = i[l] || (i[l] = Ty(l, o)) : l = l[Iy] || (l[Iy] = Ty(l, o)), l.displayName = `Animated(${s})`, l;
  };
  return An(e, (l, s) => {
    U.arr(e) && (s = Oy(l)), i[s] = i(l);
  }), { animated: i };
}, Oy = (e) => U.str(e) ? e : e && U.str(e.displayName) ? e.displayName : U.fun(e) && e.name || null;
function Jr(e, ...t) {
  return U.fun(e) ? e(...t) : e;
}
var Fl = (e, t) => e === !0 || !!(t && e && (U.fun(e) ? e(t) : Pt(e).includes(t))), s2 = (e, t) => U.obj(e) ? t && e[t] : e, a2 = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, rF = (e) => e, _g = (e, t = rF) => {
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
function u2(e) {
  let t = lF(e);
  if (t) {
    let n = { to: t };
    return An(e, (r, o) => o in t || (n[o] = r)), n;
  }
  return { ...e };
}
function $s(e) {
  return e = yt(e), U.arr(e) ? e.map($s) : Qc(e) ? pn.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e;
}
function sF(e) {
  for (let t in e)
    return !0;
  return !1;
}
function vh(e) {
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
var c2 = { default: { tension: 170, friction: 26 }, gentle: { tension: 120, friction: 14 }, wobbly: { tension: 180, friction: 12 }, stiff: { tension: 210, friction: 20 }, slow: { tension: 280, friction: 60 }, molasses: { tension: 280, friction: 120 } }, yh = { ...c2.default, mass: 1, damping: 1, easing: DL.linear, clamp: !1 }, cF = class {
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
    Object.assign(this, yh);
  }
};
function fF(e, t, n) {
  n && (n = { ...n }, Ny(n, t), t = { ...n, ...t }), Ny(e, t), Object.assign(e, t);
  for (let l in yh)
    e[l] == null && (e[l] = yh[l]);
  let { mass: r, frequency: o, damping: i } = e;
  return U.und(o) || (o < 0.01 && (o = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / o, 2) * r, e.friction = 4 * Math.PI * i * r / o), e;
}
function Ny(e, t) {
  if (!U.und(t.decay))
    e.duration = void 0;
  else {
    let n = !U.und(t.tension) || !U.und(t.friction);
    (n || !U.und(t.frequency) || !U.und(t.damping) || !U.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
var My = [], dF = class {
  constructor() {
    K(this, "changed", !1);
    K(this, "values", My);
    K(this, "toValues", null);
    K(this, "fromValues", My);
    K(this, "to");
    K(this, "from");
    K(this, "config", new cF());
    K(this, "immediate", !1);
  }
};
function f2(e, { key: t, props: n, defaultProps: r, state: o, actions: i }) {
  return new Promise((l, s) => {
    var h;
    let a, u, c = Fl((h = n.cancel) != null ? h : r == null ? void 0 : r.cancel, t);
    if (c)
      g();
    else {
      U.und(n.pause) || (o.paused = Fl(n.pause, t));
      let v = r == null ? void 0 : r.pause;
      v !== !0 && (v = o.paused || Fl(v, t)), a = Jr(n.delay || 0, t), v ? (o.resumeQueue.add(d), i.pause()) : (i.resume(), d());
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
var Rg = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? di(e.get()) : t.every((n) => n.noop) ? d2(e.get()) : on(e.get(), t.every((n) => n.finished)), d2 = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }), on = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }), di = (e) => ({ value: e, cancelled: !0, finished: !1 });
function p2(e, t, n, r) {
  let { callId: o, parentId: i, onRest: l } = t, { asyncTo: s, promise: a } = n;
  return !i && e === s && !t.reset ? a : n.promise = (async () => {
    n.asyncId = o, n.asyncTo = e;
    let u = _g(t, (w, p) => p === "onRest" ? void 0 : w), c, f, d = new Promise((w, p) => (c = w, f = p)), g = (w) => {
      let p = o <= (n.cancelId || 0) && di(r) || o !== n.asyncId && on(r, !1);
      if (p)
        throw w.result = p, f(w), w;
    }, h = (w, p) => {
      let y = new Dy(), x = new Ly();
      return (async () => {
        if (pn.skipAnimation)
          throw As(n), x.result = on(r, !1), f(x), x;
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
      return As(n), on(r, !1);
    try {
      let w;
      U.arr(e) ? w = (async (p) => {
        for (let y of p)
          await h(y);
      })(e) : w = Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([w.then(c), d]), v = on(r.get(), !0, !1);
    } catch (w) {
      if (w instanceof Dy)
        v = w.result;
      else if (w instanceof Ly)
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
function As(e, t) {
  Dl(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
var Dy = class extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
    K(this, "result");
  }
}, Ly = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
    K(this, "result");
  }
}, xh = (e) => e instanceof Tg, pF = 1, Tg = class extends ZC {
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
    Ss(this, { type: "change", parent: this, value: t, idle: n });
  }
  _onPriorityChange(t) {
    this.idle || Uc.sort(this), Ss(this, { type: "priority", parent: this, priority: t });
  }
}, go = Symbol.for("SpringPhase"), h2 = 1, wh = 2, bh = 4, wd = (e) => (e[go] & h2) > 0, cr = (e) => (e[go] & wh) > 0, ll = (e) => (e[go] & bh) > 0, Fy = (e, t) => t ? e[go] |= wh | h2 : e[go] &= ~wh, zy = (e, t) => t ? e[go] |= bh : e[go] &= ~bh, hF = class extends Tg {
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
    return !(cr(this) || this._state.asyncTo) || ll(this);
  }
  get goal() {
    return yt(this.animation.to);
  }
  get velocity() {
    let t = wn(this);
    return t instanceof Qs ? t.lastVelocity || 0 : t.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return wd(this);
  }
  get isAnimating() {
    return cr(this);
  }
  get isPaused() {
    return ll(this);
  }
  get isDelayed() {
    return this._state.delayed;
  }
  advance(t) {
    let n = !0, r = !1, o = this.animation, { config: i, toValues: l } = o, s = Gc(o.to);
    !s && Bt(o.to) && (l = Pt(yt(o.to))), o.values.forEach((c, f) => {
      if (c.done)
        return;
      let d = c.constructor == Es ? 1 : s ? s[f].lastPosition : l[f], g = o.immediate, h = d;
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
            let b = i.restVelocity || x / 10, A = i.clamp ? 0 : i.bounce, S = !U.und(A), $ = w == d ? c.v0 > 0 : w < d, E, P = !1, T = 1, R = Math.ceil(t / T);
            for (let N = 0; N < R && (E = Math.abs(y) > b, !(!E && (g = Math.abs(d - h) <= x, g))); ++N) {
              S && (P = h == d || h > d == $, P && (y = -y * A, h = d));
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
    return this._focus(this.get()), As(this._state, t && this._lastCallId), oe.batchedUpdates(() => this._stop(n, t)), this;
  }
  reset() {
    this._update({ reset: !0 });
  }
  eventObserved(t) {
    t.type == "change" ? this._start() : t.type == "priority" && (this.priority = t.priority + 1);
  }
  _prepareNode(t) {
    let n = this.key || "", { to: r, from: o } = t;
    r = U.obj(r) ? r[n] : r, (r == null || vh(r)) && (r = void 0), o = U.obj(o) ? o[n] : o, o == null && (o = void 0);
    let i = { to: r, from: o };
    return wd(this) || (t.reverse && ([r, o] = [o, r]), o = yt(o), U.und(o) ? wn(this) || this._set(r) : this._set(o)), i;
  }
  _update({ ...t }, n) {
    let { key: r, defaultProps: o } = this;
    t.default && Object.assign(o, _g(t, (s, a) => /^on/.test(a) ? s2(s, r) : s)), jy(this, t, "onProps"), al(this, "onProps", t, this);
    let i = this._prepareNode(t);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    let l = this._state;
    return f2(++this._lastCallId, { key: r, props: t, defaultProps: o, state: l, actions: { pause: () => {
      ll(this) || (zy(this, !0), ml(l.pauseQueue), al(this, "onPause", on(this, sl(this, this.animation.to)), this));
    }, resume: () => {
      ll(this) && (zy(this, !1), cr(this) && this._resume(), ml(l.resumeQueue), al(this, "onResume", on(this, sl(this, this.animation.to)), this));
    }, start: this._merge.bind(this, i) } }).then((s) => {
      if (t.loop && s.finished && !(n && s.noop)) {
        let a = m2(t);
        if (a)
          return this._update(a, !0);
      }
      return s;
    });
  }
  _merge(t, n, r) {
    if (n.cancel)
      return this.stop(!0), r(di(this));
    let o = !U.und(t.to), i = !U.und(t.from);
    if (o || i)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return r(di(this));
    let { key: l, defaultProps: s, animation: a } = this, { to: u, from: c } = a, { to: f = u, from: d = c } = t;
    i && !o && (!n.default || U.und(f)) && (f = d), n.reverse && ([f, d] = [d, f]);
    let g = !Mn(d, c);
    g && (a.from = d), d = yt(d);
    let h = !Mn(f, u);
    h && this._focus(f);
    let v = vh(n.to), { config: w } = a, { decay: p, velocity: y } = w;
    (o || i) && (w.velocity = 0), n.config && !v && fF(w, Jr(n.config, l), n.config !== s.config ? Jr(s.config, l) : void 0);
    let x = wn(this);
    if (!x || U.und(f))
      return r(on(this, !0));
    let b = U.und(n.reset) ? i && !n.default : !U.und(d) && Fl(n.reset, l), A = b ? d : this.get(), S = $s(f), $ = U.num(S) || U.arr(S) || Qc(S), E = !v && (!$ || Fl(s.immediate || n.immediate, l));
    if (h) {
      let N = gh(f);
      if (N !== x.constructor)
        if (E)
          x = this._set(S);
        else
          throw Error(`Cannot animate between ${x.constructor.name} and ${N.name}, as the "to" prop suggests`);
    }
    let P = x.constructor, T = Bt(f), R = !1;
    if (!T) {
      let N = b || !wd(this) && g;
      (h || N) && (R = Mn($s(A), S), T = !R), (!Mn(a.immediate, E) && !E || !Mn(w.decay, p) || !Mn(w.velocity, y)) && (T = !0);
    }
    if (R && cr(this) && (a.changed && !b ? T = !0 : T || this._stop(u)), !v && ((T || Bt(u)) && (a.values = x.getPayload(), a.toValues = Bt(f) ? null : P == Es ? [1] : Pt(S)), a.immediate != E && (a.immediate = E, !E && !b && this._set(u)), T)) {
      let { onRest: N } = a;
      me(gF, (z) => jy(this, n, z));
      let D = on(this, sl(this, u));
      ml(this._pendingCalls, D), this._pendingCalls.add(r), a.changed && oe.batchedUpdates(() => {
        var z;
        a.changed = !b, N == null || N(D, this), b ? Jr(s.onRest, D) : (z = a.onStart) == null || z.call(a, D, this);
      });
    }
    b && this._set(A), v ? r(p2(n.to, n, this._state, this)) : T ? this._start() : cr(this) && !h ? this._pendingCalls.add(r) : r(d2(A));
  }
  _focus(t) {
    let n = this.animation;
    t !== n.to && (Py(this) && this._detach(), n.to = t, Py(this) && this._attach());
  }
  _attach() {
    let t = 0, { to: n } = this.animation;
    Bt(n) && (zi(n, this), xh(n) && (t = n.priority + 1)), this.priority = t;
  }
  _detach() {
    let { to: t } = this.animation;
    Bt(t) && ks(t, this);
  }
  _set(t, n = !0) {
    let r = yt(t);
    if (!U.und(r)) {
      let o = wn(this);
      if (!o || !Mn(r, o.getValue())) {
        let i = gh(r);
        !o || o.constructor != i ? Pg(this, i.create(r)) : o.setValue(r), o && oe.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return wn(this);
  }
  _onStart() {
    let t = this.animation;
    t.changed || (t.changed = !0, al(this, "onStart", on(this, sl(this, t.to)), this));
  }
  _onChange(t, n) {
    n || (this._onStart(), Jr(this.animation.onChange, t, this)), Jr(this.defaultProps.onChange, t, this), super._onChange(t, n);
  }
  _start() {
    let t = this.animation;
    wn(this).reset(yt(t.to)), t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)), cr(this) || (Fy(this, !0), ll(this) || this._resume());
  }
  _resume() {
    pn.skipAnimation ? this.finish() : Uc.start(this);
  }
  _stop(t, n) {
    if (cr(this)) {
      Fy(this, !1);
      let r = this.animation;
      me(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Ss(this, { type: "idle", parent: this });
      let o = n ? di(this.get()) : on(this.get(), sl(this, t != null ? t : r.to));
      ml(this._pendingCalls, o), r.changed && (r.changed = !1, al(this, "onRest", o, this));
    }
  }
};
function sl(e, t) {
  let n = $s(t), r = $s(e.get());
  return Mn(r, n);
}
function m2(e, t = e.loop, n = e.to) {
  let r = Jr(t);
  if (r) {
    let o = r !== !0 && u2(r), i = (o || e).reverse, l = !o || o.reset;
    return Ps({ ...e, loop: t, default: !1, pause: void 0, to: !i || vh(n) ? n : void 0, from: l ? e.from : void 0, reset: l, ...o });
  }
}
function Ps(e) {
  let { to: t, from: n } = e = u2(e), r = /* @__PURE__ */ new Set();
  return U.obj(t) && By(t, r), U.obj(n) && By(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function mF(e) {
  let t = Ps(e);
  return U.und(t.default) && (t.default = _g(t)), t;
}
function By(e, t) {
  An(e, (n, r) => n != null && t.add(r));
}
var gF = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function jy(e, t, n) {
  e.animation[n] = t[n] !== a2(t, n) ? s2(t[n], e.key) : void 0;
}
function al(e, t, ...n) {
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
    return e && this.queue.push(Ps(e)), this;
  }
  start(e) {
    let { queue: t } = this;
    return e ? t = Pt(e).map(Ps) : this.queue = [], this._flush ? this._flush(this, t) : (w2(this, t), Sh(this, t));
  }
  stop(e, t) {
    if (e !== !!e && (t = e), t) {
      let n = this.springs;
      me(Pt(t), (r) => n[r].stop(!!e));
    } else
      As(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
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
    (r && !this._started || o && !this._started) && (this._started = !0, Dl(e, ([s, a]) => {
      a.value = this.get(), s(a, this, this._item);
    }));
    let i = !r && this._started, l = o || i && n.size ? this.get() : null;
    o && t.size && Dl(t, ([s, a]) => {
      a.value = l, s(a, this, this._item);
    }), i && (this._started = !1, Dl(n, ([s, a]) => {
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
function Sh(e, t) {
  return Promise.all(t.map((n) => g2(e, n))).then((n) => Rg(e, n));
}
async function g2(e, t, n) {
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
  t.pause === !f.paused ? (f.paused = t.pause, ml(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
  let d = (r || Object.keys(e.springs)).map((v) => e.springs[v].start(t)), g = t.cancel === !0 || a2(t, "cancel") === !0;
  (c || g && f.asyncId) && d.push(f2(++e._lastAsyncId, { props: t, state: f, actions: { pause: hh, resume: hh, start(v, w) {
    g ? (As(f, e._lastAsyncId), w(di(e))) : (v.onRest = s, w(p2(c, v, f, e)));
  } } })), f.paused && await new Promise((v) => {
    f.resumeQueue.add(v);
  });
  let h = Rg(e, await Promise.all(d));
  if (l && h.finished && !(n && h.noop)) {
    let v = m2(t, l, o);
    if (v)
      return w2(e, [v]), g2(e, v, !0);
  }
  return a && oe.batchedUpdates(() => a(h, e, e.item)), h;
}
function Hy(e, t) {
  let n = { ...e.springs };
  return t && me(Pt(t), (r) => {
    U.und(r.keys) && (r = Ps(r)), U.obj(r.to) || (r = { ...r, to: void 0 }), x2(n, r, (o) => y2(o));
  }), v2(e, n), n;
}
function v2(e, t) {
  An(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, zi(n, e));
  });
}
function y2(e, t) {
  let n = new hF();
  return n.key = e, t && zi(n, t), n;
}
function x2(e, t, n) {
  t.keys && me(t.keys, (r) => {
    (e[r] || (e[r] = n(r)))._prepareNode(t);
  });
}
function w2(e, t) {
  me(t, (n) => {
    x2(e.springs, n, (r) => y2(r, e));
  });
}
var Yc = ({ children: e, ...t }) => {
  let n = m.exports.useContext(Yu), r = t.pause || !!n.pause, o = t.immediate || !!n.immediate;
  t = GL(() => ({ pause: r, immediate: o }), [r, o]);
  let { Provider: i } = Yu;
  return m.exports.createElement(i, { value: t }, e);
}, Yu = wF(Yc, {});
Yc.Provider = Yu.Provider;
Yc.Consumer = Yu.Consumer;
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
  let o = m.exports.useMemo(() => r || arguments.length == 3 ? bF() : void 0, []), i = m.exports.useRef(0), l = r2(), s = m.exports.useMemo(() => ({ ctrls: [], queue: [], flush(p, y) {
    let x = Hy(p, y);
    return i.current > 0 && !s.queue.length && !Object.keys(x).some((b) => !p.springs[b]) ? Sh(p, y) : new Promise((b) => {
      v2(p, x), s.queue.push(() => {
        b(Sh(p, y));
      }), l();
    });
  } }), []), a = m.exports.useRef([...s.ctrls]), u = [], c = Ry(e) || 0;
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
  let d = a.current.map((p, y) => Hy(p, u[y])), g = m.exports.useContext(Yc), h = Ry(g), v = g !== h && sF(g);
  Ag(() => {
    i.current++, s.ctrls = a.current;
    let { queue: p } = s;
    p.length && (s.queue = [], me(p, (y) => y())), me(a.current, (y, x) => {
      o == null || o.add(y), v && y.start({ default: g });
      let b = u[x];
      b && (uF(y, b.ref), y.ref ? y.queue.push(b) : y.start(b));
    });
  }), o2(() => () => {
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
    this.source = t, this.calc = bs(...n);
    let r = this._get(), o = gh(r);
    Pg(this, o.create(r));
  }
  advance(t) {
    let n = this._get(), r = this.get();
    Mn(n, r) || (wn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && Vy(this._active) && bd(this);
  }
  _get() {
    let t = U.arr(this.source) ? this.source.map(yt) : Pt(yt(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !Vy(this._active) && (this.idle = !1, me(Gc(this), (t) => {
      t.done = !1;
    }), pn.skipAnimation ? (oe.batchedUpdates(() => this.advance()), bd(this)) : Uc.start(this));
  }
  _attach() {
    let t = 1;
    me(Pt(this.source), (n) => {
      Bt(n) && zi(n, this), xh(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1));
    }), this.priority = t, this._start();
  }
  _detach() {
    me(Pt(this.source), (t) => {
      Bt(t) && ks(t, this);
    }), this._active.clear(), bd(this);
  }
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = Pt(this.source).reduce((n, r) => Math.max(n, (xh(r) ? r.priority : 0) + 1), 0));
  }
};
function EF(e) {
  return e.idle !== !1;
}
function Vy(e) {
  return !e.size || Array.from(e).every(EF);
}
function bd(e) {
  e.idle || (e.idle = !0, me(Gc(e), (t) => {
    t.done = !0;
  }), Ss(e, { type: "idle", parent: e }));
}
pn.assign({ createStringInterpolator: t2, to: (e, t) => new CF(e, t) });
var b2 = /^--/;
function $F(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !b2.test(e) && !(zl.hasOwnProperty(e) && zl[e]) ? t + "px" : ("" + t).trim();
}
var Uy = {};
function AF(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  let n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: r, children: o, scrollTop: i, scrollLeft: l, viewBox: s, ...a } = t, u = Object.values(a), c = Object.keys(a).map((f) => n || e.hasAttribute(f) ? f : Uy[f] || (Uy[f] = f.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  o !== void 0 && (e.textContent = o);
  for (let f in r)
    if (r.hasOwnProperty(f)) {
      let d = $F(f, r[f]);
      b2.test(f) ? e.style.setProperty(f, d) : e.style[f] = d;
    }
  c.forEach((f, d) => {
    e.setAttribute(f, u[d]);
  }), i !== void 0 && (e.scrollTop = i), l !== void 0 && (e.scrollLeft = l), s !== void 0 && e.setAttribute("viewBox", s);
}
var zl = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, PF = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), _F = ["Webkit", "Ms", "Moz", "O"];
zl = Object.keys(zl).reduce((e, t) => (_F.forEach((n) => e[PF(n, t)] = e[t]), e), zl);
var RF = /^(matrix|translate|scale|rotate|skew)/, TF = /^(translate)/, IF = /^(rotate|skew)/, Sd = (e, t) => U.num(e) && e !== 0 ? e + t : e, Xa = (e, t) => U.arr(e) ? e.every((n) => Xa(n, t)) : U.num(e) ? e === t : parseFloat(e) === t, OF = class extends Kc {
  constructor({ x: e, y: t, z: n, ...r }) {
    let o = [], i = [];
    (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((l) => [`translate3d(${l.map((s) => Sd(s, "px")).join(",")})`, Xa(l, 0)])), An(r, (l, s) => {
      if (s === "transform")
        o.push([l || ""]), i.push((a) => [a, a === ""]);
      else if (RF.test(s)) {
        if (delete r[s], U.und(l))
          return;
        let a = TF.test(s) ? "px" : IF.test(s) ? "deg" : "";
        o.push(Pt(l)), i.push(s === "rotate3d" ? ([u, c, f, d]) => [`rotate3d(${u},${c},${f},${Sd(d, a)})`, Xa(d, 0)] : (u) => [`${s}(${u.map((c) => Sd(c, a)).join(",")})`, Xa(u, s.startsWith("scale") ? 1 : 0)]);
      }
    }), o.length && (r.transform = new NF(o, i)), super(r);
  }
}, NF = class extends ZC {
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
    t == 0 && me(this.inputs, (n) => me(n, (r) => Bt(r) && ks(r, this)));
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), Ss(this, t);
  }
}, MF = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
pn.assign({ batchedUpdates: hn.exports.unstable_batchedUpdates, createStringInterpolator: t2, colors: kL });
var DF = nF(MF, { applyAnimatedValues: AF, createAnimatedStyle: (e) => new OF(e), getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n }), Wy = DF.animated;
const LF = ({
  message: e
}) => /* @__PURE__ */ fe("div", {
  className: ki("flex flex-col gap-2 p-4 text-sm text-mayumi-gray-1100", {
    "bg-mayumi-gray-200": e.role === "user",
    "bg-mayumi-gray-300": e.role === "assistant"
  }),
  children: [/* @__PURE__ */ B("div", {
    className: "flex-0 text-mayumi-gray-1200",
    children: e.role === "user" ? "You:" : "Assistant:"
  }), /* @__PURE__ */ B("div", {
    className: "flex-1",
    children: /* @__PURE__ */ B(FC, {
      content: e.text
    })
  })]
}), FF = () => {
  const {
    toggleChatOpen: e,
    chatOpen: t
  } = ys(), {
    conventions: n
  } = vs(), [r, o] = m.exports.useState(null), i = kF({
    h: t ? 600 : 0,
    w: t ? 500 : 150,
    opacity: t ? 1 : 0,
    config: c2.default
  }), l = Object.keys(n), s = r || l[0], a = s ? n[s] : [];
  return /* @__PURE__ */ fe(Wy.div, {
    style: {
      opacity: i.opacity
    },
    className: "aiflow-chat leading-1em fixed right-0 bottom-0 z-40 m-5 flex max-w-[500px] flex-col overflow-hidden rounded-lg border border-mayumi-gray-700 bg-mayumi-gray-200 font-sans shadow-lg",
    children: [/* @__PURE__ */ fe("div", {
      onClick: () => {
        e();
      },
      className: ki("flex-0 flex cursor-pointer select-none items-center justify-between border-mayumi-gray-700 p-3 text-mayumi-gray-1100 hover:bg-mayumi-gray-400", {
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
    }), /* @__PURE__ */ fe(Wy.div, {
      style: {
        height: i.h,
        width: i.w
      },
      className: "flex",
      children: [/* @__PURE__ */ B("div", {
        className: "grid min-w-[150px] grid-flow-row auto-rows-max border-r border-mayumi-gray-700 p-2 font-semibold",
        children: l.map((u) => /* @__PURE__ */ B("div", {
          className: ki("flex items-center rounded-md py-2 px-3 text-sm hover:bg-mayumi-blue-400 hover:text-mayumi-gray-1200", {
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
        children: a.map((u, c) => /* @__PURE__ */ B(LF, {
          message: u
        }, c))
      })]
    })]
  });
}, zF = () => /* @__PURE__ */ fe("div", {
  className: "dark",
  children: [/* @__PURE__ */ B(lL, {}), /* @__PURE__ */ B(FF, {})]
});
var S2, qy = hn.exports;
S2 = qy.createRoot, qy.hydrateRoot;
(() => {
  var i;
  console.info("[aiflow] Hello world from content script"), Zu("tab-prev", ({
    data: l
  }) => {
    console.log(`[aiflow] Navigate from page "${l.title}"`);
  });
  const e = document.createElement("div"), t = document.createElement("div");
  e.className = "aiflow", e.id = "aiflow";
  const n = document.createElement("link"), r = ((i = e.attachShadow) == null ? void 0 : i.call(e, {
    mode: "closed"
  })) || e;
  n.setAttribute("rel", "stylesheet"), n.setAttribute("href", it.runtime.getURL("dist/contentScripts/style.css")), r.appendChild(n), r.appendChild(t), document.body.appendChild(e), S2(t).render(/* @__PURE__ */ B(zF, {}));
})();
