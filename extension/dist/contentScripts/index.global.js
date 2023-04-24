var PC = Object.defineProperty;
var _C = (e, t, n) => t in e ? PC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var G = (e, t, n) => (_C(e, typeof t != "symbol" ? t + "" : t, n), n);
function RC(e, t) {
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
var IC = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nx = { exports: {} };
(function(e, t) {
  (function(n, r) {
    r(e);
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : IC, function(n) {
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
        const u = ($) => $ && typeof $ == "object" && typeof $.then == "function", c = ($, P) => (...R) => {
          l.runtime.lastError ? $.reject(new Error(l.runtime.lastError.message)) : P.singleCallbackArg || R.length <= 1 && P.singleCallbackArg !== !1 ? $.resolve(R[0]) : $.resolve(R);
        }, f = ($) => $ == 1 ? "argument" : "arguments", d = ($, P) => function(I, ...T) {
          if (T.length < P.minArgs)
            throw new Error(`Expected at least ${P.minArgs} ${f(P.minArgs)} for ${$}(), got ${T.length}`);
          if (T.length > P.maxArgs)
            throw new Error(`Expected at most ${P.maxArgs} ${f(P.maxArgs)} for ${$}(), got ${T.length}`);
          return new Promise((L, B) => {
            if (P.fallbackToNoCallback)
              try {
                I[$](...T, c({
                  resolve: L,
                  reject: B
                }, P));
              } catch (z) {
                console.warn(`${$} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, z), I[$](...T), P.fallbackToNoCallback = !1, P.noCallback = !0, L();
              }
            else
              P.noCallback ? (I[$](...T), L()) : I[$](...T, c({
                resolve: L,
                reject: B
              }, P));
          });
        }, g = ($, P, R) => new Proxy(P, {
          apply(I, T, L) {
            return R.call(T, $, ...L);
          }
        });
        let h = Function.call.bind(Object.prototype.hasOwnProperty);
        const v = ($, P = {}, R = {}) => {
          let I = /* @__PURE__ */ Object.create(null), T = {
            has(B, z) {
              return z in $ || z in I;
            },
            get(B, z, _) {
              if (z in I)
                return I[z];
              if (!(z in $))
                return;
              let H = $[z];
              if (typeof H == "function")
                if (typeof P[z] == "function")
                  H = g($, $[z], P[z]);
                else if (h(R, z)) {
                  let N = d(z, R[z]);
                  H = g($, $[z], N);
                } else
                  H = H.bind($);
              else if (typeof H == "object" && H !== null && (h(P, z) || h(R, z)))
                H = v(H, P[z], R[z]);
              else if (h(R, "*"))
                H = v(H, P[z], R["*"]);
              else
                return Object.defineProperty(I, z, {
                  configurable: !0,
                  enumerable: !0,
                  get() {
                    return $[z];
                  },
                  set(N) {
                    $[z] = N;
                  }
                }), H;
              return I[z] = H, H;
            },
            set(B, z, _, H) {
              return z in I ? I[z] = _ : $[z] = _, !0;
            },
            defineProperty(B, z, _) {
              return Reflect.defineProperty(I, z, _);
            },
            deleteProperty(B, z) {
              return Reflect.deleteProperty(I, z);
            }
          }, L = Object.create($);
          return new Proxy(L, T);
        }, w = ($) => ({
          addListener(P, R, ...I) {
            P.addListener($.get(R), ...I);
          },
          hasListener(P, R) {
            return P.hasListener($.get(R));
          },
          removeListener(P, R) {
            P.removeListener($.get(R));
          }
        }), p = new a(($) => typeof $ != "function" ? $ : function(R) {
          const I = v(
            R,
            {},
            {
              getContent: {
                minArgs: 0,
                maxArgs: 0
              }
            }
          );
          $(I);
        });
        let y = !1;
        const x = new a(($) => typeof $ != "function" ? $ : function(R, I, T) {
          let L = !1, B, z = new Promise((O) => {
            B = function(M) {
              y || (console.warn(o, new Error().stack), y = !0), L = !0, O(M);
            };
          }), _;
          try {
            _ = $(R, I, B);
          } catch (O) {
            _ = Promise.reject(O);
          }
          const H = _ !== !0 && u(_);
          if (_ !== !0 && !H && !L)
            return !1;
          const N = (O) => {
            O.then((M) => {
              T(M);
            }, (M) => {
              let k;
              M && (M instanceof Error || typeof M.message == "string") ? k = M.message : k = "An unexpected error occurred", T({
                __mozWebExtensionPolyfillReject__: !0,
                message: k
              });
            }).catch((M) => {
              console.error("Failed to send onMessage rejected reply", M);
            });
          };
          return N(H ? _ : z), !0;
        }), b = ({
          reject: $,
          resolve: P
        }, R) => {
          l.runtime.lastError ? l.runtime.lastError.message === r ? P() : $(new Error(l.runtime.lastError.message)) : R && R.__mozWebExtensionPolyfillReject__ ? $(new Error(R.message)) : P(R);
        }, A = ($, P, R, ...I) => {
          if (I.length < P.minArgs)
            throw new Error(`Expected at least ${P.minArgs} ${f(P.minArgs)} for ${$}(), got ${I.length}`);
          if (I.length > P.maxArgs)
            throw new Error(`Expected at most ${P.maxArgs} ${f(P.maxArgs)} for ${$}(), got ${I.length}`);
          return new Promise((T, L) => {
            const B = b.bind(null, {
              resolve: T,
              reject: L
            });
            I.push(B), R.sendMessage(...I);
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
        return s.privacy = {
          network: {
            "*": E
          },
          services: {
            "*": E
          },
          websites: {
            "*": E
          }
        }, v(l, S, s);
      };
      if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id)
        throw new Error("This script should only be loaded in a browser extension.");
      n.exports = i(chrome);
    } else
      n.exports = browser;
  });
})(nx);
const ot = nx.exports;
let rx = () => ({
  events: {},
  emit(e, ...t) {
    (this.events[e] || []).forEach((n) => n(...t));
  },
  on(e, t) {
    return (this.events[e] = this.events[e] || []).push(t), () => this.events[e] = (this.events[e] || []).filter((n) => n !== t);
  }
});
class cu extends Error {
  constructor(t) {
    super(cu._prepareSuperMessage(t)), Object.defineProperty(this, "name", {
      value: "NonError",
      configurable: !0,
      writable: !0
    }), Error.captureStackTrace && Error.captureStackTrace(this, cu);
  }
  static _prepareSuperMessage(t) {
    try {
      return JSON.stringify(t);
    } catch {
      return String(t);
    }
  }
}
const OC = [
  { property: "name", enumerable: !1 },
  { property: "message", enumerable: !1 },
  { property: "stack", enumerable: !1 },
  { property: "code", enumerable: !0 }
], Td = Symbol(".toJSON called"), TC = (e) => {
  e[Td] = !0;
  const t = e.toJSON();
  return delete e[Td], t;
}, Nh = ({
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
  if (typeof e.toJSON == "function" && e[Td] !== !0)
    return TC(e);
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
        i++, l[s] = Nh({
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
  for (const { property: s, enumerable: a } of OC)
    typeof e[s] == "string" && Object.defineProperty(l, s, {
      value: e[s],
      enumerable: r ? !0 : a,
      configurable: !0,
      writable: !0
    });
  return l;
}, MC = (e, t = {}) => {
  const { maxDepth: n = Number.POSITIVE_INFINITY } = t;
  return typeof e == "object" && e !== null ? Nh({
    from: e,
    seen: [],
    forceEnumerable: !0,
    maxDepth: n,
    depth: 0
  }) : typeof e == "function" ? `[Function: ${e.name || "anonymous"}]` : e;
}, NC = (e, t = {}) => {
  const { maxDepth: n = Number.POSITIVE_INFINITY } = t;
  if (e instanceof Error)
    return e;
  if (typeof e == "object" && e !== null && !Array.isArray(e)) {
    const r = new Error();
    return Nh({
      from: e,
      seen: [],
      to_: r,
      maxDepth: n,
      depth: 0
    }), r;
  }
  return new cu(e);
};
var DC = {
  serializeError: MC,
  deserializeError: NC
}, lc = { exports: {} };
const LC = (e) => typeof crypto < "u" && typeof crypto.getRandomValues == "function" ? () => {
  const t = crypto.getRandomValues(new Uint8Array(1))[0];
  return (t >= e ? t % e : t).toString(e);
} : () => Math.floor(Math.random() * e).toString(e), ox = (e = 7, t = !1) => Array.from({ length: e }, LC(t ? 16 : 36)).join("");
lc.exports = ox;
lc.exports.default = ox;
var FC = Object.defineProperty, zC = Object.defineProperties, BC = Object.getOwnPropertyDescriptors, jg = Object.getOwnPropertySymbols, jC = Object.prototype.hasOwnProperty, HC = Object.prototype.propertyIsEnumerable, Hg = (e, t, n) => t in e ? FC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ix = (e, t) => {
  for (var n in t || (t = {}))
    jC.call(t, n) && Hg(e, n, t[n]);
  if (jg)
    for (var n of jg(t))
      HC.call(t, n) && Hg(e, n, t[n]);
  return e;
}, lx = (e, t) => zC(e, BC(t)), VC = /^((?:background$)|devtools|content-script|window)(?:@(\d+))?$/, sx = (e) => {
  const [, t, n] = e.match(VC) || [];
  return {
    context: t,
    tabId: +n
  };
}, cf = (e) => ot[e], Ne = cf("devtools") ? "devtools" : cf("tabs") ? "background" : cf("extension") ? "content-script" : typeof document < "u" ? "window" : null, Vg = lc.exports(), Md = /* @__PURE__ */ new Map(), ax = /* @__PURE__ */ new Map(), Nd = /* @__PURE__ */ new Set(), Dd = /* @__PURE__ */ new Map(), qr = null, fu, ux;
UC();
function UC() {
  if (Ne === null)
    throw new Error("Unable to detect runtime context i.e webext-bridge can't figure out what to do");
  if ((Ne === "window" || Ne === "content-script") && window.addEventListener("message", qC), Ne === "content-script" && top === window && (qr = ot.runtime.connect(), qr.onMessage.addListener((e) => {
    ri(e);
  })), Ne === "devtools") {
    const { tabId: e } = ot.devtools.inspectedWindow, t = `devtools@${e}`;
    qr = ot.runtime.connect(void 0, { name: t }), qr.onMessage.addListener((n) => {
      ri(n);
    }), qr.onDisconnect.addListener(() => {
      qr = null;
    });
  }
  Ne === "background" && ot.runtime.onConnect.addListener((e) => {
    const t = e.name || `content-script@${e.sender.tab.id}`, { tabId: n } = sx(t);
    !n || (Dd.set(t, e), Nd.forEach((r) => {
      r.resolvedDestination === t && (e.postMessage(r.message), Nd.delete(r));
    }), e.onDisconnect.addListener(() => {
      Dd.delete(t);
    }), e.onMessage.addListener((r) => {
      var o;
      (o = r == null ? void 0 : r.origin) != null && o.context && (r.origin.tabId = n, ri(r));
    }));
  });
}
function ri(e) {
  const { origin: t, destination: n } = e;
  if (!e.hops.includes(Vg) && (e.hops.push(Vg), !(Ne === "content-script" && [n, t].some((r) => (r == null ? void 0 : r.context) === "window") && !ux))) {
    if (!n)
      return WC(e);
    if (n.context) {
      if (Ne === "window")
        return Ld(window, e);
      if (Ne === "content-script" && n.context === "window")
        return e.destination = null, Ld(window, e);
      if (Ne === "devtools" || Ne === "content-script")
        return n.context === "background" && (e.destination = null), qr.postMessage(e);
      if (Ne === "background") {
        const { context: r, tabId: o } = n, { tabId: i } = t;
        r !== "window" ? e.destination = null : e.destination.tabId = null;
        const l = `${r === "window" ? "content-script" : r}@${o || i}`, s = Dd.get(l);
        s ? s.postMessage(e) : Nd.add({ resolvedDestination: l, message: e });
      }
    }
  }
}
async function WC(e) {
  const { transactionId: t, messageID: n, messageType: r } = e, o = () => {
    const l = Md.get(t);
    if (l) {
      const { err: s, data: a } = e;
      if (s) {
        const u = s, c = self[u.name], f = new (typeof c == "function" ? c : Error)(u.message);
        for (const d in u)
          f[d] = u[d];
        l.reject(f);
      } else
        l.resolve(a);
      Md.delete(t);
    }
  }, i = async () => {
    let l, s, a = !1;
    try {
      const u = ax.get(n);
      if (typeof u == "function")
        l = await u({
          sender: e.origin,
          id: n,
          data: e.data,
          timestamp: e.timestamp
        });
      else
        throw a = !0, new Error(`[webext-bridge] No handler registered in '${Ne}' to accept messages with id '${n}'`);
    } catch (u) {
      s = u;
    } finally {
      if (s && (e.err = DC.serializeError(s)), ri(lx(ix({}, e), {
        messageType: "reply",
        data: l,
        origin: { context: Ne, tabId: null },
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
async function qC({ data: e, ports: t }) {
  if (!(Ne === "content-script" && !ux)) {
    if (e.cmd === "__crx_bridge_verify_listening" && e.scope === fu && e.context !== Ne)
      t[0].postMessage(!0);
    else if (e.cmd === "__crx_bridge_route_message" && e.scope === fu && e.context !== Ne) {
      const { payload: n } = e;
      Ne === "content-script" && (n.origin = {
        context: "window",
        tabId: null
      }), ri(n);
    }
  }
}
function Ld(e, t) {
  QC();
  const n = new MessageChannel(), r = setTimeout(() => {
    n.port1.onmessage = null, Ld(e, t);
  }, 300);
  n.port1.onmessage = () => {
    clearTimeout(r), e.postMessage({
      cmd: "__crx_bridge_route_message",
      scope: fu,
      context: Ne,
      payload: t
    }, "*");
  }, e.postMessage({
    cmd: "__crx_bridge_verify_listening",
    scope: fu,
    context: Ne
  }, "*", [n.port2]);
}
function QC() {
  throw new Error(`webext-bridge uses window.postMessage to talk with other "window"(s), for message routing and stuff,which is global/conflicting operation in case there are other scripts using webext-bridge. Call Bridge#setNamespace(nsps) to isolate your app. Example: setNamespace('com.facebook.react-devtools'). Make sure to use same namespace across all your scripts whereever window.postMessage is likely to be used\``);
}
function sc(e, t) {
  ax.set(e, t);
}
async function Cl(e, t, n = "background") {
  const r = typeof n == "string" ? sx(n) : n, o = "Bridge#sendMessage ->";
  if (!r.context)
    throw new TypeError(`${o} Destination must be any one of known destinations`);
  if (Ne === "background") {
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
      transactionId: lc.exports(),
      origin: { context: Ne, tabId: null },
      hops: [],
      timestamp: Date.now()
    };
    Md.set(s.transactionId, { resolve: i, reject: l }), ri(s);
  });
}
var Ho = class {
  constructor(e) {
    this.handleStreamClose = () => {
      this.isClosed || (this.isClosed = !0, this.emitter.emit("closed", !0), this.emitter.events = {});
    }, this.internalInfo = e, this.emitter = rx(), this.isClosed = !1, Ho.initDone || (sc("__crx_bridge_stream_transfer__", (t) => {
      const { streamId: n, streamTransfer: r, action: o } = t.data, i = Ho.openStreams.get(n);
      i && !i.isClosed && (o === "transfer" && i.emitter.emit("message", r), o === "close" && (Ho.openStreams.delete(n), i.handleStreamClose()));
    }), Ho.initDone = !0), Ho.openStreams.set(e.streamId, this);
  }
  get info() {
    return this.internalInfo;
  }
  send(e) {
    if (this.isClosed)
      throw new Error("Attempting to send a message over closed stream. Use stream.onClose(<callback>) to keep an eye on stream status");
    Cl("__crx_bridge_stream_transfer__", {
      streamId: this.internalInfo.streamId,
      streamTransfer: e,
      action: "transfer"
    }, this.internalInfo.endpoint);
  }
  close(e) {
    e && this.send(e), this.handleStreamClose(), Cl("__crx_bridge_stream_transfer__", {
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
}, Dh = Ho;
Dh.initDone = !1;
Dh.openStreams = /* @__PURE__ */ new Map();
var GC = /* @__PURE__ */ new Map(), KC = rx();
sc("__crx_bridge_stream_open__", (e) => new Promise((t) => {
  const { sender: n, data: r } = e, { channel: o } = r;
  let i = !1, l = () => {
  };
  const s = () => {
    const a = GC.get(o);
    typeof a == "function" ? (a(new Dh(lx(ix({}, r), { endpoint: n }))), i && l(), t(!0)) : i || (i = !0, l = KC.on("did-change-stream-callbacks", s));
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
var Ts = Symbol.for("react.element"), YC = Symbol.for("react.portal"), XC = Symbol.for("react.fragment"), ZC = Symbol.for("react.strict_mode"), JC = Symbol.for("react.profiler"), e$ = Symbol.for("react.provider"), t$ = Symbol.for("react.context"), n$ = Symbol.for("react.forward_ref"), r$ = Symbol.for("react.suspense"), o$ = Symbol.for("react.memo"), i$ = Symbol.for("react.lazy"), Ug = Symbol.iterator;
function l$(e) {
  return e === null || typeof e != "object" ? null : (e = Ug && e[Ug] || e["@@iterator"], typeof e == "function" ? e : null);
}
var cx = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, fx = Object.assign, dx = {};
function Ni(e, t, n) {
  this.props = e, this.context = t, this.refs = dx, this.updater = n || cx;
}
Ni.prototype.isReactComponent = {};
Ni.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ni.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function px() {
}
px.prototype = Ni.prototype;
function Lh(e, t, n) {
  this.props = e, this.context = t, this.refs = dx, this.updater = n || cx;
}
var Fh = Lh.prototype = new px();
Fh.constructor = Lh;
fx(Fh, Ni.prototype);
Fh.isPureReactComponent = !0;
var Wg = Array.isArray, hx = Object.prototype.hasOwnProperty, zh = { current: null }, mx = { key: !0, ref: !0, __self: !0, __source: !0 };
function gx(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      hx.call(t, r) && !mx.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: Ts, type: e, key: i, ref: l, props: o, _owner: zh.current };
}
function s$(e, t) {
  return { $$typeof: Ts, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Bh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ts;
}
function a$(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var qg = /\/+/g;
function ff(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? a$("" + e.key) : t.toString(36);
}
function Ba(e, t, n, r, o) {
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
          case Ts:
          case YC:
            l = !0;
        }
    }
  if (l)
    return l = e, o = o(l), e = r === "" ? "." + ff(l, 0) : r, Wg(o) ? (n = "", e != null && (n = e.replace(qg, "$&/") + "/"), Ba(o, t, n, "", function(u) {
      return u;
    })) : o != null && (Bh(o) && (o = s$(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(qg, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Wg(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + ff(i, s);
      l += Ba(i, t, n, a, o);
    }
  else if (a = l$(e), typeof a == "function")
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, a = r + ff(i, s++), l += Ba(i, t, n, a, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function ea(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Ba(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function u$(e) {
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
var pt = { current: null }, ja = { transition: null }, c$ = { ReactCurrentDispatcher: pt, ReactCurrentBatchConfig: ja, ReactCurrentOwner: zh };
fe.Children = { map: ea, forEach: function(e, t, n) {
  ea(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ea(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ea(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Bh(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
fe.Component = Ni;
fe.Fragment = XC;
fe.Profiler = JC;
fe.PureComponent = Lh;
fe.StrictMode = ZC;
fe.Suspense = r$;
fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c$;
fe.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = fx({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = zh.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (a in t)
      hx.call(t, a) && !mx.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
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
  return { $$typeof: Ts, type: e.type, key: o, ref: i, props: r, _owner: l };
};
fe.createContext = function(e) {
  return e = { $$typeof: t$, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: e$, _context: e }, e.Consumer = e;
};
fe.createElement = gx;
fe.createFactory = function(e) {
  var t = gx.bind(null, e);
  return t.type = e, t;
};
fe.createRef = function() {
  return { current: null };
};
fe.forwardRef = function(e) {
  return { $$typeof: n$, render: e };
};
fe.isValidElement = Bh;
fe.lazy = function(e) {
  return { $$typeof: i$, _payload: { _status: -1, _result: e }, _init: u$ };
};
fe.memo = function(e, t) {
  return { $$typeof: o$, type: e, compare: t === void 0 ? null : t };
};
fe.startTransition = function(e) {
  var t = ja.transition;
  ja.transition = {};
  try {
    e();
  } finally {
    ja.transition = t;
  }
};
fe.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
fe.useCallback = function(e, t) {
  return pt.current.useCallback(e, t);
};
fe.useContext = function(e) {
  return pt.current.useContext(e);
};
fe.useDebugValue = function() {
};
fe.useDeferredValue = function(e) {
  return pt.current.useDeferredValue(e);
};
fe.useEffect = function(e, t) {
  return pt.current.useEffect(e, t);
};
fe.useId = function() {
  return pt.current.useId();
};
fe.useImperativeHandle = function(e, t, n) {
  return pt.current.useImperativeHandle(e, t, n);
};
fe.useInsertionEffect = function(e, t) {
  return pt.current.useInsertionEffect(e, t);
};
fe.useLayoutEffect = function(e, t) {
  return pt.current.useLayoutEffect(e, t);
};
fe.useMemo = function(e, t) {
  return pt.current.useMemo(e, t);
};
fe.useReducer = function(e, t, n) {
  return pt.current.useReducer(e, t, n);
};
fe.useRef = function(e) {
  return pt.current.useRef(e);
};
fe.useState = function(e) {
  return pt.current.useState(e);
};
fe.useSyncExternalStore = function(e, t, n) {
  return pt.current.useSyncExternalStore(e, t, n);
};
fe.useTransition = function() {
  return pt.current.useTransition();
};
fe.version = "18.2.0";
(function(e) {
  e.exports = fe;
})(m);
const je = /* @__PURE__ */ Mh(m.exports), vx = /* @__PURE__ */ RC({
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
function f$(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function yx(...e) {
  return (t) => e.forEach(
    (n) => f$(n, t)
  );
}
function Ce(...e) {
  return m.exports.useCallback(yx(...e), e);
}
function Di(e, t = []) {
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
    d$(o, ...t)
  ];
}
function d$(...e) {
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
var Kt = { exports: {} }, Ot = {}, xx = { exports: {} }, wx = {};
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
  function t(N, O) {
    var M = N.length;
    N.push(O);
    e:
      for (; 0 < M; ) {
        var k = M - 1 >>> 1, C = N[k];
        if (0 < o(C, O))
          N[k] = O, N[M] = C, M = k;
        else
          break e;
      }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0)
      return null;
    var O = N[0], M = N.pop();
    if (M !== O) {
      N[0] = M;
      e:
        for (var k = 0, C = N.length, J = C >>> 1; k < J; ) {
          var ne = 2 * (k + 1) - 1, se = N[ne], ee = ne + 1, Q = N[ee];
          if (0 > o(se, M))
            ee < C && 0 > o(Q, se) ? (N[k] = Q, N[ee] = M, k = ee) : (N[k] = se, N[ne] = M, k = ne);
          else if (ee < C && 0 > o(Q, M))
            N[k] = Q, N[ee] = M, k = ee;
          else
            break e;
        }
    }
    return O;
  }
  function o(N, O) {
    var M = N.sortIndex - O.sortIndex;
    return M !== 0 ? M : N.id - O.id;
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
  function x(N) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null)
        r(u);
      else if (O.startTime <= N)
        r(u), O.sortIndex = O.expirationTime, t(a, O);
      else
        break;
      O = n(u);
    }
  }
  function b(N) {
    if (v = !1, x(N), !h)
      if (n(a) !== null)
        h = !0, _(A);
      else {
        var O = n(u);
        O !== null && H(b, O.startTime - N);
      }
  }
  function A(N, O) {
    h = !1, v && (v = !1, p($), $ = -1), g = !0;
    var M = d;
    try {
      for (x(O), f = n(a); f !== null && (!(f.expirationTime > O) || N && !I()); ) {
        var k = f.callback;
        if (typeof k == "function") {
          f.callback = null, d = f.priorityLevel;
          var C = k(f.expirationTime <= O);
          O = e.unstable_now(), typeof C == "function" ? f.callback = C : f === n(a) && r(a), x(O);
        } else
          r(a);
        f = n(a);
      }
      if (f !== null)
        var J = !0;
      else {
        var ne = n(u);
        ne !== null && H(b, ne.startTime - O), J = !1;
      }
      return J;
    } finally {
      f = null, d = M, g = !1;
    }
  }
  var S = !1, E = null, $ = -1, P = 5, R = -1;
  function I() {
    return !(e.unstable_now() - R < P);
  }
  function T() {
    if (E !== null) {
      var N = e.unstable_now();
      R = N;
      var O = !0;
      try {
        O = E(!0, N);
      } finally {
        O ? L() : (S = !1, E = null);
      }
    } else
      S = !1;
  }
  var L;
  if (typeof y == "function")
    L = function() {
      y(T);
    };
  else if (typeof MessageChannel < "u") {
    var B = new MessageChannel(), z = B.port2;
    B.port1.onmessage = T, L = function() {
      z.postMessage(null);
    };
  } else
    L = function() {
      w(T, 0);
    };
  function _(N) {
    E = N, S || (S = !0, L());
  }
  function H(N, O) {
    $ = w(function() {
      N(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    h || g || (h = !0, _(A));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(N) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = d;
    }
    var M = d;
    d = O;
    try {
      return N();
    } finally {
      d = M;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, O) {
    switch (N) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        N = 3;
    }
    var M = d;
    d = N;
    try {
      return O();
    } finally {
      d = M;
    }
  }, e.unstable_scheduleCallback = function(N, O, M) {
    var k = e.unstable_now();
    switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? k + M : k) : M = k, N) {
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
    return C = M + C, N = { id: c++, callback: O, priorityLevel: N, startTime: M, expirationTime: C, sortIndex: -1 }, M > k ? (N.sortIndex = M, t(u, N), n(a) === null && N === n(u) && (v ? (p($), $ = -1) : v = !0, H(b, M - k))) : (N.sortIndex = C, t(a, N), h || g || (h = !0, _(A))), N;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(N) {
    var O = d;
    return function() {
      var M = d;
      d = O;
      try {
        return N.apply(this, arguments);
      } finally {
        d = M;
      }
    };
  };
})(wx);
(function(e) {
  e.exports = wx;
})(xx);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bx = m.exports, It = xx.exports;
function j(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Sx = /* @__PURE__ */ new Set(), ql = {};
function So(e, t) {
  xi(e, t), xi(e + "Capture", t);
}
function xi(e, t) {
  for (ql[e] = t, e = 0; e < t.length; e++)
    Sx.add(t[e]);
}
var Un = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Fd = Object.prototype.hasOwnProperty, p$ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Qg = {}, Gg = {};
function h$(e) {
  return Fd.call(Gg, e) ? !0 : Fd.call(Qg, e) ? !1 : p$.test(e) ? Gg[e] = !0 : (Qg[e] = !0, !1);
}
function m$(e, t, n, r) {
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
function g$(e, t, n, r) {
  if (t === null || typeof t > "u" || m$(e, t, n, r))
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
function ht(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var Je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Je[e] = new ht(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Je[t] = new ht(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Je[e] = new ht(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Je[e] = new ht(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Je[e] = new ht(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Je[e] = new ht(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Je[e] = new ht(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Je[e] = new ht(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Je[e] = new ht(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var jh = /[\-:]([a-z])/g;
function Hh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    jh,
    Hh
  );
  Je[t] = new ht(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(jh, Hh);
  Je[t] = new ht(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(jh, Hh);
  Je[t] = new ht(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Je[e] = new ht(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Je.xlinkHref = new ht("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Je[e] = new ht(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Vh(e, t, n, r) {
  var o = Je.hasOwnProperty(t) ? Je[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (g$(t, n, o, r) && (n = null), r || o === null ? h$(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xn = bx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ta = Symbol.for("react.element"), Uo = Symbol.for("react.portal"), Wo = Symbol.for("react.fragment"), Uh = Symbol.for("react.strict_mode"), zd = Symbol.for("react.profiler"), kx = Symbol.for("react.provider"), Cx = Symbol.for("react.context"), Wh = Symbol.for("react.forward_ref"), Bd = Symbol.for("react.suspense"), jd = Symbol.for("react.suspense_list"), qh = Symbol.for("react.memo"), dr = Symbol.for("react.lazy"), $x = Symbol.for("react.offscreen"), Kg = Symbol.iterator;
function Xi(e) {
  return e === null || typeof e != "object" ? null : (e = Kg && e[Kg] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Te = Object.assign, df;
function vl(e) {
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
    pf = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? vl(e) : "";
}
function v$(e) {
  switch (e.tag) {
    case 5:
      return vl(e.type);
    case 16:
      return vl("Lazy");
    case 13:
      return vl("Suspense");
    case 19:
      return vl("SuspenseList");
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
function Hd(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Wo:
      return "Fragment";
    case Uo:
      return "Portal";
    case zd:
      return "Profiler";
    case Uh:
      return "StrictMode";
    case Bd:
      return "Suspense";
    case jd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Cx:
        return (e.displayName || "Context") + ".Consumer";
      case kx:
        return (e._context.displayName || "Context") + ".Provider";
      case Wh:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case qh:
        return t = e.displayName || null, t !== null ? t : Hd(e.type) || "Memo";
      case dr:
        t = e._payload, e = e._init;
        try {
          return Hd(e(t));
        } catch {
        }
    }
  return null;
}
function y$(e) {
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
      return Hd(t);
    case 8:
      return t === Uh ? "StrictMode" : "Mode";
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
function Mr(e) {
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
function Ex(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function x$(e) {
  var t = Ex(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function na(e) {
  e._valueTracker || (e._valueTracker = x$(e));
}
function Ax(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ex(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function du(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Vd(e, t) {
  var n = t.checked;
  return Te({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n != null ? n : e._wrapperState.initialChecked });
}
function Yg(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Mr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Px(e, t) {
  t = t.checked, t != null && Vh(e, "checked", t, !1);
}
function Ud(e, t) {
  Px(e, t);
  var n = Mr(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Wd(e, t.type, n) : t.hasOwnProperty("defaultValue") && Wd(e, t.type, Mr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Xg(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Wd(e, t, n) {
  (t !== "number" || du(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var yl = Array.isArray;
function oi(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Mr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function qd(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(j(91));
  return Te({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Zg(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(j(92));
      if (yl(n)) {
        if (1 < n.length)
          throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Mr(n) };
}
function _x(e, t) {
  var n = Mr(t.value), r = Mr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Jg(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Rx(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Qd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Rx(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ra, Ix = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (ra = ra || document.createElement("div"), ra.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ra.firstChild; e.firstChild; )
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
var $l = {
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
}, w$ = ["Webkit", "ms", "Moz", "O"];
Object.keys($l).forEach(function(e) {
  w$.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), $l[t] = $l[e];
  });
});
function Ox(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || $l.hasOwnProperty(e) && $l[e] ? ("" + t).trim() : t + "px";
}
function Tx(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = Ox(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var b$ = Te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Gd(e, t) {
  if (t) {
    if (b$[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Kd(e, t) {
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
var Yd = null;
function Qh(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Xd = null, ii = null, li = null;
function e0(e) {
  if (e = Ds(e)) {
    if (typeof Xd != "function")
      throw Error(j(280));
    var t = e.stateNode;
    t && (t = dc(t), Xd(e.stateNode, e.type, t));
  }
}
function Mx(e) {
  ii ? li ? li.push(e) : li = [e] : ii = e;
}
function Nx() {
  if (ii) {
    var e = ii, t = li;
    if (li = ii = null, e0(e), t)
      for (e = 0; e < t.length; e++)
        e0(t[e]);
  }
}
function Dx(e, t) {
  return e(t);
}
function Lx() {
}
var mf = !1;
function Fx(e, t, n) {
  if (mf)
    return e(t, n);
  mf = !0;
  try {
    return Dx(e, t, n);
  } finally {
    mf = !1, (ii !== null || li !== null) && (Lx(), Nx());
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
    throw Error(j(231, t, typeof n));
  return n;
}
var Zd = !1;
if (Un)
  try {
    var Zi = {};
    Object.defineProperty(Zi, "passive", { get: function() {
      Zd = !0;
    } }), window.addEventListener("test", Zi, Zi), window.removeEventListener("test", Zi, Zi);
  } catch {
    Zd = !1;
  }
function S$(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var El = !1, pu = null, hu = !1, Jd = null, k$ = { onError: function(e) {
  El = !0, pu = e;
} };
function C$(e, t, n, r, o, i, l, s, a) {
  El = !1, pu = null, S$.apply(k$, arguments);
}
function $$(e, t, n, r, o, i, l, s, a) {
  if (C$.apply(this, arguments), El) {
    if (El) {
      var u = pu;
      El = !1, pu = null;
    } else
      throw Error(j(198));
    hu || (hu = !0, Jd = u);
  }
}
function ko(e) {
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
function zx(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function t0(e) {
  if (ko(e) !== e)
    throw Error(j(188));
}
function E$(e) {
  var t = e.alternate;
  if (!t) {
    if (t = ko(e), t === null)
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
          return t0(o), e;
        if (i === r)
          return t0(o), t;
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
function Bx(e) {
  return e = E$(e), e !== null ? jx(e) : null;
}
function jx(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = jx(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Hx = It.unstable_scheduleCallback, n0 = It.unstable_cancelCallback, A$ = It.unstable_shouldYield, P$ = It.unstable_requestPaint, Fe = It.unstable_now, _$ = It.unstable_getCurrentPriorityLevel, Gh = It.unstable_ImmediatePriority, Vx = It.unstable_UserBlockingPriority, mu = It.unstable_NormalPriority, R$ = It.unstable_LowPriority, Ux = It.unstable_IdlePriority, ac = null, Cn = null;
function I$(e) {
  if (Cn && typeof Cn.onCommitFiberRoot == "function")
    try {
      Cn.onCommitFiberRoot(ac, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var fn = Math.clz32 ? Math.clz32 : M$, O$ = Math.log, T$ = Math.LN2;
function M$(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (O$(e) / T$ | 0) | 0;
}
var oa = 64, ia = 4194304;
function xl(e) {
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
function gu(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? r = xl(s) : (i &= l, i !== 0 && (r = xl(i)));
  } else
    l = n & ~o, l !== 0 ? r = xl(l) : i !== 0 && (r = xl(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && (t & o) === 0 && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - fn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function N$(e, t) {
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
function D$(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - fn(i), s = 1 << l, a = o[l];
    a === -1 ? ((s & n) === 0 || (s & r) !== 0) && (o[l] = N$(s, t)) : a <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function ep(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Wx() {
  var e = oa;
  return oa <<= 1, (oa & 4194240) === 0 && (oa = 64), e;
}
function gf(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Ms(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - fn(t), e[t] = n;
}
function L$(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - fn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Kh(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - fn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var we = 0;
function qx(e) {
  return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
}
var Qx, Yh, Gx, Kx, Yx, tp = !1, la = [], Cr = null, $r = null, Er = null, Kl = /* @__PURE__ */ new Map(), Yl = /* @__PURE__ */ new Map(), mr = [], F$ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function r0(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Cr = null;
      break;
    case "dragenter":
    case "dragleave":
      $r = null;
      break;
    case "mouseover":
    case "mouseout":
      Er = null;
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
function Ji(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Ds(t), t !== null && Yh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function z$(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Cr = Ji(Cr, e, t, n, r, o), !0;
    case "dragenter":
      return $r = Ji($r, e, t, n, r, o), !0;
    case "mouseover":
      return Er = Ji(Er, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Kl.set(i, Ji(Kl.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Yl.set(i, Ji(Yl.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Xx(e) {
  var t = to(e.target);
  if (t !== null) {
    var n = ko(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = zx(n), t !== null) {
          e.blockedOn = t, Yx(e.priority, function() {
            Gx(n);
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
function Ha(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = np(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Yd = r, n.target.dispatchEvent(r), Yd = null;
    } else
      return t = Ds(n), t !== null && Yh(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function o0(e, t, n) {
  Ha(e) && n.delete(t);
}
function B$() {
  tp = !1, Cr !== null && Ha(Cr) && (Cr = null), $r !== null && Ha($r) && ($r = null), Er !== null && Ha(Er) && (Er = null), Kl.forEach(o0), Yl.forEach(o0);
}
function el(e, t) {
  e.blockedOn === t && (e.blockedOn = null, tp || (tp = !0, It.unstable_scheduleCallback(It.unstable_NormalPriority, B$)));
}
function Xl(e) {
  function t(o) {
    return el(o, e);
  }
  if (0 < la.length) {
    el(la[0], e);
    for (var n = 1; n < la.length; n++) {
      var r = la[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Cr !== null && el(Cr, e), $r !== null && el($r, e), Er !== null && el(Er, e), Kl.forEach(t), Yl.forEach(t), n = 0; n < mr.length; n++)
    r = mr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < mr.length && (n = mr[0], n.blockedOn === null); )
    Xx(n), n.blockedOn === null && mr.shift();
}
var si = Xn.ReactCurrentBatchConfig, vu = !0;
function j$(e, t, n, r) {
  var o = we, i = si.transition;
  si.transition = null;
  try {
    we = 1, Xh(e, t, n, r);
  } finally {
    we = o, si.transition = i;
  }
}
function H$(e, t, n, r) {
  var o = we, i = si.transition;
  si.transition = null;
  try {
    we = 4, Xh(e, t, n, r);
  } finally {
    we = o, si.transition = i;
  }
}
function Xh(e, t, n, r) {
  if (vu) {
    var o = np(e, t, n, r);
    if (o === null)
      Ef(e, t, r, yu, n), r0(e, r);
    else if (z$(o, e, t, n, r))
      r.stopPropagation();
    else if (r0(e, r), t & 4 && -1 < F$.indexOf(e)) {
      for (; o !== null; ) {
        var i = Ds(o);
        if (i !== null && Qx(i), i = np(e, t, n, r), i === null && Ef(e, t, r, yu, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      Ef(e, t, r, null, n);
  }
}
var yu = null;
function np(e, t, n, r) {
  if (yu = null, e = Qh(r), e = to(e), e !== null)
    if (t = ko(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = zx(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return yu = e, null;
}
function Zx(e) {
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
      switch (_$()) {
        case Gh:
          return 1;
        case Vx:
          return 4;
        case mu:
        case R$:
          return 16;
        case Ux:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var vr = null, Zh = null, Va = null;
function Jx() {
  if (Va)
    return Va;
  var e, t = Zh, n = t.length, r, o = "value" in vr ? vr.value : vr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++)
    ;
  return Va = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Ua(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function sa() {
  return !0;
}
function i0() {
  return !1;
}
function Tt(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? sa : i0, this.isPropagationStopped = i0, this;
  }
  return Te(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = sa);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = sa);
  }, persist: function() {
  }, isPersistent: sa }), t;
}
var Li = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Jh = Tt(Li), Ns = Te({}, Li, { view: 0, detail: 0 }), V$ = Tt(Ns), vf, yf, tl, uc = Te({}, Ns, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: em, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== tl && (tl && e.type === "mousemove" ? (vf = e.screenX - tl.screenX, yf = e.screenY - tl.screenY) : yf = vf = 0, tl = e), vf);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : yf;
} }), l0 = Tt(uc), U$ = Te({}, uc, { dataTransfer: 0 }), W$ = Tt(U$), q$ = Te({}, Ns, { relatedTarget: 0 }), xf = Tt(q$), Q$ = Te({}, Li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), G$ = Tt(Q$), K$ = Te({}, Li, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Y$ = Tt(K$), X$ = Te({}, Li, { data: 0 }), s0 = Tt(X$), Z$ = {
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
}, J$ = {
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
}, eE = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function tE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = eE[e]) ? !!t[e] : !1;
}
function em() {
  return tE;
}
var nE = Te({}, Ns, { key: function(e) {
  if (e.key) {
    var t = Z$[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Ua(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? J$[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: em, charCode: function(e) {
  return e.type === "keypress" ? Ua(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ua(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), rE = Tt(nE), oE = Te({}, uc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), a0 = Tt(oE), iE = Te({}, Ns, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: em }), lE = Tt(iE), sE = Te({}, Li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), aE = Tt(sE), uE = Te({}, uc, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), cE = Tt(uE), fE = [9, 13, 27, 32], tm = Un && "CompositionEvent" in window, Al = null;
Un && "documentMode" in document && (Al = document.documentMode);
var dE = Un && "TextEvent" in window && !Al, ew = Un && (!tm || Al && 8 < Al && 11 >= Al), u0 = String.fromCharCode(32), c0 = !1;
function tw(e, t) {
  switch (e) {
    case "keyup":
      return fE.indexOf(t.keyCode) !== -1;
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
function nw(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var qo = !1;
function pE(e, t) {
  switch (e) {
    case "compositionend":
      return nw(t);
    case "keypress":
      return t.which !== 32 ? null : (c0 = !0, u0);
    case "textInput":
      return e = t.data, e === u0 && c0 ? null : e;
    default:
      return null;
  }
}
function hE(e, t) {
  if (qo)
    return e === "compositionend" || !tm && tw(e, t) ? (e = Jx(), Va = Zh = vr = null, qo = !1, e) : null;
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
      return ew && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var mE = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function f0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!mE[e.type] : t === "textarea";
}
function rw(e, t, n, r) {
  Mx(r), t = xu(t, "onChange"), 0 < t.length && (n = new Jh("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Pl = null, Zl = null;
function gE(e) {
  hw(e, 0);
}
function cc(e) {
  var t = Ko(e);
  if (Ax(t))
    return e;
}
function vE(e, t) {
  if (e === "change")
    return t;
}
var ow = !1;
if (Un) {
  var wf;
  if (Un) {
    var bf = "oninput" in document;
    if (!bf) {
      var d0 = document.createElement("div");
      d0.setAttribute("oninput", "return;"), bf = typeof d0.oninput == "function";
    }
    wf = bf;
  } else
    wf = !1;
  ow = wf && (!document.documentMode || 9 < document.documentMode);
}
function p0() {
  Pl && (Pl.detachEvent("onpropertychange", iw), Zl = Pl = null);
}
function iw(e) {
  if (e.propertyName === "value" && cc(Zl)) {
    var t = [];
    rw(t, Zl, e, Qh(e)), Fx(gE, t);
  }
}
function yE(e, t, n) {
  e === "focusin" ? (p0(), Pl = t, Zl = n, Pl.attachEvent("onpropertychange", iw)) : e === "focusout" && p0();
}
function xE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return cc(Zl);
}
function wE(e, t) {
  if (e === "click")
    return cc(t);
}
function bE(e, t) {
  if (e === "input" || e === "change")
    return cc(t);
}
function SE(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var hn = typeof Object.is == "function" ? Object.is : SE;
function Jl(e, t) {
  if (hn(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Fd.call(t, o) || !hn(e[o], t[o]))
      return !1;
  }
  return !0;
}
function h0(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function m0(e, t) {
  var n = h0(e);
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
    n = h0(n);
  }
}
function lw(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? lw(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function sw() {
  for (var e = window, t = du(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = du(e.document);
  }
  return t;
}
function nm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function kE(e) {
  var t = sw(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && lw(n.ownerDocument.documentElement, n)) {
    if (r !== null && nm(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = m0(n, i);
        var l = m0(
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
var CE = Un && "documentMode" in document && 11 >= document.documentMode, Qo = null, rp = null, _l = null, op = !1;
function g0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  op || Qo == null || Qo !== du(r) || (r = Qo, "selectionStart" in r && nm(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), _l && Jl(_l, r) || (_l = r, r = xu(rp, "onSelect"), 0 < r.length && (t = new Jh("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Qo)));
}
function aa(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Go = { animationend: aa("Animation", "AnimationEnd"), animationiteration: aa("Animation", "AnimationIteration"), animationstart: aa("Animation", "AnimationStart"), transitionend: aa("Transition", "TransitionEnd") }, Sf = {}, aw = {};
Un && (aw = document.createElement("div").style, "AnimationEvent" in window || (delete Go.animationend.animation, delete Go.animationiteration.animation, delete Go.animationstart.animation), "TransitionEvent" in window || delete Go.transitionend.transition);
function fc(e) {
  if (Sf[e])
    return Sf[e];
  if (!Go[e])
    return e;
  var t = Go[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in aw)
      return Sf[e] = t[n];
  return e;
}
var uw = fc("animationend"), cw = fc("animationiteration"), fw = fc("animationstart"), dw = fc("transitionend"), pw = /* @__PURE__ */ new Map(), v0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Lr(e, t) {
  pw.set(e, t), So(t, [e]);
}
for (var kf = 0; kf < v0.length; kf++) {
  var Cf = v0[kf], $E = Cf.toLowerCase(), EE = Cf[0].toUpperCase() + Cf.slice(1);
  Lr($E, "on" + EE);
}
Lr(uw, "onAnimationEnd");
Lr(cw, "onAnimationIteration");
Lr(fw, "onAnimationStart");
Lr("dblclick", "onDoubleClick");
Lr("focusin", "onFocus");
Lr("focusout", "onBlur");
Lr(dw, "onTransitionEnd");
xi("onMouseEnter", ["mouseout", "mouseover"]);
xi("onMouseLeave", ["mouseout", "mouseover"]);
xi("onPointerEnter", ["pointerout", "pointerover"]);
xi("onPointerLeave", ["pointerout", "pointerover"]);
So("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
So("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
So("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
So("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
So("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
So("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var wl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), AE = new Set("cancel close invalid load scroll toggle".split(" ").concat(wl));
function y0(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, $$(r, t, void 0, e), e.currentTarget = null;
}
function hw(e, t) {
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
          y0(o, s, u), i = a;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== i && o.isPropagationStopped())
            break e;
          y0(o, s, u), i = a;
        }
    }
  }
  if (hu)
    throw e = Jd, hu = !1, Jd = null, e;
}
function Ee(e, t) {
  var n = t[up];
  n === void 0 && (n = t[up] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (mw(t, e, 2, !1), n.add(r));
}
function $f(e, t, n) {
  var r = 0;
  t && (r |= 4), mw(n, e, r, t);
}
var ua = "_reactListening" + Math.random().toString(36).slice(2);
function es(e) {
  if (!e[ua]) {
    e[ua] = !0, Sx.forEach(function(n) {
      n !== "selectionchange" && (AE.has(n) || $f(n, !1, e), $f(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ua] || (t[ua] = !0, $f("selectionchange", !1, t));
  }
}
function mw(e, t, n, r) {
  switch (Zx(t)) {
    case 1:
      var o = j$;
      break;
    case 4:
      o = H$;
      break;
    default:
      o = Xh;
  }
  n = o.bind(null, t, n, e), o = void 0, !Zd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
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
            if (l = to(s), l === null)
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
  Fx(function() {
    var u = i, c = Qh(n), f = [];
    e: {
      var d = pw.get(e);
      if (d !== void 0) {
        var g = Jh, h = e;
        switch (e) {
          case "keypress":
            if (Ua(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = rE;
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
            g = l0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = W$;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = lE;
            break;
          case uw:
          case cw:
          case fw:
            g = G$;
            break;
          case dw:
            g = aE;
            break;
          case "scroll":
            g = V$;
            break;
          case "wheel":
            g = cE;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Y$;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = a0;
        }
        var v = (t & 4) !== 0, w = !v && e === "scroll", p = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var y = u, x; y !== null; ) {
          x = y;
          var b = x.stateNode;
          if (x.tag === 5 && b !== null && (x = b, p !== null && (b = Gl(y, p), b != null && v.push(ts(y, b, x)))), w)
            break;
          y = y.return;
        }
        0 < v.length && (d = new g(d, h, null, n, c), f.push({ event: d, listeners: v }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== Yd && (h = n.relatedTarget || n.fromElement) && (to(h) || h[Wn]))
          break e;
        if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (h = n.relatedTarget || n.toElement, g = u, h = h ? to(h) : null, h !== null && (w = ko(h), h !== w || h.tag !== 5 && h.tag !== 6) && (h = null)) : (g = null, h = u), g !== h)) {
          if (v = l0, b = "onMouseLeave", p = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (v = a0, b = "onPointerLeave", p = "onPointerEnter", y = "pointer"), w = g == null ? d : Ko(g), x = h == null ? d : Ko(h), d = new v(b, y + "leave", g, n, c), d.target = w, d.relatedTarget = x, b = null, to(c) === u && (v = new v(p, y + "enter", h, n, c), v.target = x, v.relatedTarget = w, b = v), w = b, g && h)
            t: {
              for (v = g, p = h, y = 0, x = v; x; x = Io(x))
                y++;
              for (x = 0, b = p; b; b = Io(b))
                x++;
              for (; 0 < y - x; )
                v = Io(v), y--;
              for (; 0 < x - y; )
                p = Io(p), x--;
              for (; y--; ) {
                if (v === p || p !== null && v === p.alternate)
                  break t;
                v = Io(v), p = Io(p);
              }
              v = null;
            }
          else
            v = null;
          g !== null && x0(f, d, g, v, !1), h !== null && w !== null && x0(f, w, h, v, !0);
        }
      }
      e: {
        if (d = u ? Ko(u) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file")
          var A = vE;
        else if (f0(d))
          if (ow)
            A = bE;
          else {
            A = xE;
            var S = yE;
          }
        else
          (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (A = wE);
        if (A && (A = A(e, u))) {
          rw(f, A, n, c);
          break e;
        }
        S && S(e, d, u), e === "focusout" && (S = d._wrapperState) && S.controlled && d.type === "number" && Wd(d, "number", d.value);
      }
      switch (S = u ? Ko(u) : window, e) {
        case "focusin":
          (f0(S) || S.contentEditable === "true") && (Qo = S, rp = u, _l = null);
          break;
        case "focusout":
          _l = rp = Qo = null;
          break;
        case "mousedown":
          op = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          op = !1, g0(f, n, c);
          break;
        case "selectionchange":
          if (CE)
            break;
        case "keydown":
        case "keyup":
          g0(f, n, c);
      }
      var E;
      if (tm)
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
        qo ? tw(e, n) && ($ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && ($ = "onCompositionStart");
      $ && (ew && n.locale !== "ko" && (qo || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && qo && (E = Jx()) : (vr = c, Zh = "value" in vr ? vr.value : vr.textContent, qo = !0)), S = xu(u, $), 0 < S.length && ($ = new s0($, e, null, n, c), f.push({ event: $, listeners: S }), E ? $.data = E : (E = nw(n), E !== null && ($.data = E)))), (E = dE ? pE(e, n) : hE(e, n)) && (u = xu(u, "onBeforeInput"), 0 < u.length && (c = new s0("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = E));
    }
    hw(f, t);
  });
}
function ts(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function xu(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Gl(e, n), i != null && r.unshift(ts(e, i, o)), i = Gl(e, t), i != null && r.push(ts(e, i, o))), e = e.return;
  }
  return r;
}
function Io(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function x0(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, u = s.stateNode;
    if (a !== null && a === r)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (a = Gl(n, i), a != null && l.unshift(ts(n, a, s))) : o || (a = Gl(n, i), a != null && l.push(ts(n, a, s)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var PE = /\r\n?/g, _E = /\u0000|\uFFFD/g;
function w0(e) {
  return (typeof e == "string" ? e : "" + e).replace(PE, `
`).replace(_E, "");
}
function ca(e, t, n) {
  if (t = w0(t), w0(e) !== t && n)
    throw Error(j(425));
}
function wu() {
}
var ip = null, lp = null;
function sp(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ap = typeof setTimeout == "function" ? setTimeout : void 0, RE = typeof clearTimeout == "function" ? clearTimeout : void 0, b0 = typeof Promise == "function" ? Promise : void 0, IE = typeof queueMicrotask == "function" ? queueMicrotask : typeof b0 < "u" ? function(e) {
  return b0.resolve(null).then(e).catch(OE);
} : ap;
function OE(e) {
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
function S0(e) {
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
var Fi = Math.random().toString(36).slice(2), bn = "__reactFiber$" + Fi, ns = "__reactProps$" + Fi, Wn = "__reactContainer$" + Fi, up = "__reactEvents$" + Fi, TE = "__reactListeners$" + Fi, ME = "__reactHandles$" + Fi;
function to(e) {
  var t = e[bn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Wn] || n[bn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = S0(e); e !== null; ) {
          if (n = e[bn])
            return n;
          e = S0(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ds(e) {
  return e = e[bn] || e[Wn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Ko(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(j(33));
}
function dc(e) {
  return e[ns] || null;
}
var cp = [], Yo = -1;
function Fr(e) {
  return { current: e };
}
function Pe(e) {
  0 > Yo || (e.current = cp[Yo], cp[Yo] = null, Yo--);
}
function $e(e, t) {
  Yo++, cp[Yo] = e.current, e.current = t;
}
var Nr = {}, it = Fr(Nr), wt = Fr(!1), ao = Nr;
function wi(e, t) {
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
function bt(e) {
  return e = e.childContextTypes, e != null;
}
function bu() {
  Pe(wt), Pe(it);
}
function k0(e, t, n) {
  if (it.current !== Nr)
    throw Error(j(168));
  $e(it, t), $e(wt, n);
}
function gw(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(j(108, y$(e) || "Unknown", o));
  return Te({}, n, r);
}
function Su(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nr, ao = it.current, $e(it, e), $e(wt, wt.current), !0;
}
function C0(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(j(169));
  n ? (e = gw(e, t, ao), r.__reactInternalMemoizedMergedChildContext = e, Pe(wt), Pe(it), $e(it, e)) : Pe(wt), $e(wt, n);
}
var zn = null, pc = !1, Pf = !1;
function vw(e) {
  zn === null ? zn = [e] : zn.push(e);
}
function NE(e) {
  pc = !0, vw(e);
}
function zr() {
  if (!Pf && zn !== null) {
    Pf = !0;
    var e = 0, t = we;
    try {
      var n = zn;
      for (we = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      zn = null, pc = !1;
    } catch (o) {
      throw zn !== null && (zn = zn.slice(e + 1)), Hx(Gh, zr), o;
    } finally {
      we = t, Pf = !1;
    }
  }
  return null;
}
var Xo = [], Zo = 0, ku = null, Cu = 0, Lt = [], Ft = 0, uo = null, Bn = 1, jn = "";
function Qr(e, t) {
  Xo[Zo++] = Cu, Xo[Zo++] = ku, ku = e, Cu = t;
}
function yw(e, t, n) {
  Lt[Ft++] = Bn, Lt[Ft++] = jn, Lt[Ft++] = uo, uo = e;
  var r = Bn;
  e = jn;
  var o = 32 - fn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - fn(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, Bn = 1 << 32 - fn(t) + o | n << o | r, jn = i + e;
  } else
    Bn = 1 << i | n << o | r, jn = e;
}
function rm(e) {
  e.return !== null && (Qr(e, 1), yw(e, 1, 0));
}
function om(e) {
  for (; e === ku; )
    ku = Xo[--Zo], Xo[Zo] = null, Cu = Xo[--Zo], Xo[Zo] = null;
  for (; e === uo; )
    uo = Lt[--Ft], Lt[Ft] = null, jn = Lt[--Ft], Lt[Ft] = null, Bn = Lt[--Ft], Lt[Ft] = null;
}
var _t = null, Et = null, Re = !1, on = null;
function xw(e, t) {
  var n = Wt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function $0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, _t = e, Et = Ar(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, _t = e, Et = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = uo !== null ? { id: Bn, overflow: jn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Wt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, _t = e, Et = null, !0) : !1;
    default:
      return !1;
  }
}
function fp(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function dp(e) {
  if (Re) {
    var t = Et;
    if (t) {
      var n = t;
      if (!$0(e, t)) {
        if (fp(e))
          throw Error(j(418));
        t = Ar(n.nextSibling);
        var r = _t;
        t && $0(e, t) ? xw(r, n) : (e.flags = e.flags & -4097 | 2, Re = !1, _t = e);
      }
    } else {
      if (fp(e))
        throw Error(j(418));
      e.flags = e.flags & -4097 | 2, Re = !1, _t = e;
    }
  }
}
function E0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  _t = e;
}
function fa(e) {
  if (e !== _t)
    return !1;
  if (!Re)
    return E0(e), Re = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !sp(e.type, e.memoizedProps)), t && (t = Et)) {
    if (fp(e))
      throw ww(), Error(j(418));
    for (; t; )
      xw(e, t), t = Ar(t.nextSibling);
  }
  if (E0(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Et = Ar(e.nextSibling);
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
    Et = _t ? Ar(e.stateNode.nextSibling) : null;
  return !0;
}
function ww() {
  for (var e = Et; e; )
    e = Ar(e.nextSibling);
}
function bi() {
  Et = _t = null, Re = !1;
}
function im(e) {
  on === null ? on = [e] : on.push(e);
}
var DE = Xn.ReactCurrentBatchConfig;
function nn(e, t) {
  if (e && e.defaultProps) {
    t = Te({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var $u = Fr(null), Eu = null, Jo = null, lm = null;
function sm() {
  lm = Jo = Eu = null;
}
function am(e) {
  var t = $u.current;
  Pe($u), e._currentValue = t;
}
function pp(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function ai(e, t) {
  Eu = e, lm = Jo = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (xt = !0), e.firstContext = null);
}
function Qt(e) {
  var t = e._currentValue;
  if (lm !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Jo === null) {
      if (Eu === null)
        throw Error(j(308));
      Jo = e, Eu.dependencies = { lanes: 0, firstContext: e };
    } else
      Jo = Jo.next = e;
  return t;
}
var no = null;
function um(e) {
  no === null ? no = [e] : no.push(e);
}
function bw(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, um(t)) : (n.next = o.next, o.next = n), t.interleaved = n, qn(e, r);
}
function qn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var pr = !1;
function cm(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Sw(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Hn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Pr(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, (me & 2) !== 0) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, qn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, um(r)) : (t.next = o.next, o.next = t), r.interleaved = t, qn(e, n);
}
function Wa(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Kh(e, n);
  }
}
function A0(e, t) {
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
function Au(e, t, n, r) {
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
              f = Te({}, f, d);
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
function P0(e, t, n) {
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
var kw = new bx.Component().refs;
function hp(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Te({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hc = { isMounted: function(e) {
  return (e = e._reactInternals) ? ko(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ft(), o = Rr(e), i = Hn(r, o);
  i.payload = t, n != null && (i.callback = n), t = Pr(e, i, o), t !== null && (dn(t, e, o, r), Wa(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ft(), o = Rr(e), i = Hn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Pr(e, i, o), t !== null && (dn(t, e, o, r), Wa(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ft(), r = Rr(e), o = Hn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Pr(e, o, r), t !== null && (dn(t, e, r, n), Wa(t, e, r));
} };
function _0(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Jl(n, r) || !Jl(o, i) : !0;
}
function Cw(e, t, n) {
  var r = !1, o = Nr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Qt(i) : (o = bt(t) ? ao : it.current, r = t.contextTypes, i = (r = r != null) ? wi(e, o) : Nr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function R0(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hc.enqueueReplaceState(t, t.state, null);
}
function mp(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = kw, cm(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Qt(i) : (i = bt(t) ? ao : it.current, o.context = wi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (hp(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && hc.enqueueReplaceState(o, o.state, null), Au(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function nl(e, t, n) {
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
        s === kw && (s = o.refs = {}), l === null ? delete s[i] : s[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(j(284));
    if (!n._owner)
      throw Error(j(290, e));
  }
  return e;
}
function da(e, t) {
  throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function I0(e) {
  var t = e._init;
  return t(e._payload);
}
function $w(e) {
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
    return p = Ir(p, y), p.index = 0, p.sibling = null, p;
  }
  function i(p, y, x) {
    return p.index = x, e ? (x = p.alternate, x !== null ? (x = x.index, x < y ? (p.flags |= 2, y) : x) : (p.flags |= 2, y)) : (p.flags |= 1048576, y);
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, y, x, b) {
    return y === null || y.tag !== 6 ? (y = Nf(x, p.mode, b), y.return = p, y) : (y = o(y, x), y.return = p, y);
  }
  function a(p, y, x, b) {
    var A = x.type;
    return A === Wo ? c(p, y, x.props.children, b, x.key) : y !== null && (y.elementType === A || typeof A == "object" && A !== null && A.$$typeof === dr && I0(A) === y.type) ? (b = o(y, x.props), b.ref = nl(p, y, x), b.return = p, b) : (b = Xa(x.type, x.key, x.props, null, p.mode, b), b.ref = nl(p, y, x), b.return = p, b);
  }
  function u(p, y, x, b) {
    return y === null || y.tag !== 4 || y.stateNode.containerInfo !== x.containerInfo || y.stateNode.implementation !== x.implementation ? (y = Df(x, p.mode, b), y.return = p, y) : (y = o(y, x.children || []), y.return = p, y);
  }
  function c(p, y, x, b, A) {
    return y === null || y.tag !== 7 ? (y = io(x, p.mode, b, A), y.return = p, y) : (y = o(y, x), y.return = p, y);
  }
  function f(p, y, x) {
    if (typeof y == "string" && y !== "" || typeof y == "number")
      return y = Nf("" + y, p.mode, x), y.return = p, y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ta:
          return x = Xa(y.type, y.key, y.props, null, p.mode, x), x.ref = nl(p, null, y), x.return = p, x;
        case Uo:
          return y = Df(y, p.mode, x), y.return = p, y;
        case dr:
          var b = y._init;
          return f(p, b(y._payload), x);
      }
      if (yl(y) || Xi(y))
        return y = io(y, p.mode, x, null), y.return = p, y;
      da(p, y);
    }
    return null;
  }
  function d(p, y, x, b) {
    var A = y !== null ? y.key : null;
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return A !== null ? null : s(p, y, "" + x, b);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ta:
          return x.key === A ? a(p, y, x, b) : null;
        case Uo:
          return x.key === A ? u(p, y, x, b) : null;
        case dr:
          return A = x._init, d(
            p,
            y,
            A(x._payload),
            b
          );
      }
      if (yl(x) || Xi(x))
        return A !== null ? null : c(p, y, x, b, null);
      da(p, x);
    }
    return null;
  }
  function g(p, y, x, b, A) {
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return p = p.get(x) || null, s(y, p, "" + b, A);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case ta:
          return p = p.get(b.key === null ? x : b.key) || null, a(y, p, b, A);
        case Uo:
          return p = p.get(b.key === null ? x : b.key) || null, u(y, p, b, A);
        case dr:
          var S = b._init;
          return g(p, y, x, S(b._payload), A);
      }
      if (yl(b) || Xi(b))
        return p = p.get(x) || null, c(y, p, b, A, null);
      da(y, b);
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
      return n(p, E), Re && Qr(p, $), A;
    if (E === null) {
      for (; $ < x.length; $++)
        E = f(p, x[$], b), E !== null && (y = i(E, y, $), S === null ? A = E : S.sibling = E, S = E);
      return Re && Qr(p, $), A;
    }
    for (E = r(p, E); $ < x.length; $++)
      P = g(E, p, $, x[$], b), P !== null && (e && P.alternate !== null && E.delete(P.key === null ? $ : P.key), y = i(P, y, $), S === null ? A = P : S.sibling = P, S = P);
    return e && E.forEach(function(I) {
      return t(p, I);
    }), Re && Qr(p, $), A;
  }
  function v(p, y, x, b) {
    var A = Xi(x);
    if (typeof A != "function")
      throw Error(j(150));
    if (x = A.call(x), x == null)
      throw Error(j(151));
    for (var S = A = null, E = y, $ = y = 0, P = null, R = x.next(); E !== null && !R.done; $++, R = x.next()) {
      E.index > $ ? (P = E, E = null) : P = E.sibling;
      var I = d(p, E, R.value, b);
      if (I === null) {
        E === null && (E = P);
        break;
      }
      e && E && I.alternate === null && t(p, E), y = i(I, y, $), S === null ? A = I : S.sibling = I, S = I, E = P;
    }
    if (R.done)
      return n(
        p,
        E
      ), Re && Qr(p, $), A;
    if (E === null) {
      for (; !R.done; $++, R = x.next())
        R = f(p, R.value, b), R !== null && (y = i(R, y, $), S === null ? A = R : S.sibling = R, S = R);
      return Re && Qr(p, $), A;
    }
    for (E = r(p, E); !R.done; $++, R = x.next())
      R = g(E, p, $, R.value, b), R !== null && (e && R.alternate !== null && E.delete(R.key === null ? $ : R.key), y = i(R, y, $), S === null ? A = R : S.sibling = R, S = R);
    return e && E.forEach(function(T) {
      return t(p, T);
    }), Re && Qr(p, $), A;
  }
  function w(p, y, x, b) {
    if (typeof x == "object" && x !== null && x.type === Wo && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ta:
          e: {
            for (var A = x.key, S = y; S !== null; ) {
              if (S.key === A) {
                if (A = x.type, A === Wo) {
                  if (S.tag === 7) {
                    n(p, S.sibling), y = o(S, x.props.children), y.return = p, p = y;
                    break e;
                  }
                } else if (S.elementType === A || typeof A == "object" && A !== null && A.$$typeof === dr && I0(A) === S.type) {
                  n(p, S.sibling), y = o(S, x.props), y.ref = nl(p, S, x), y.return = p, p = y;
                  break e;
                }
                n(p, S);
                break;
              } else
                t(p, S);
              S = S.sibling;
            }
            x.type === Wo ? (y = io(x.props.children, p.mode, b, x.key), y.return = p, p = y) : (b = Xa(x.type, x.key, x.props, null, p.mode, b), b.ref = nl(p, y, x), b.return = p, p = b);
          }
          return l(p);
        case Uo:
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
        case dr:
          return S = x._init, w(p, y, S(x._payload), b);
      }
      if (yl(x))
        return h(p, y, x, b);
      if (Xi(x))
        return v(p, y, x, b);
      da(p, x);
    }
    return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, y !== null && y.tag === 6 ? (n(p, y.sibling), y = o(y, x), y.return = p, p = y) : (n(p, y), y = Nf(x, p.mode, b), y.return = p, p = y), l(p)) : n(p, y);
  }
  return w;
}
var Si = $w(!0), Ew = $w(!1), Ls = {}, $n = Fr(Ls), rs = Fr(Ls), os = Fr(Ls);
function ro(e) {
  if (e === Ls)
    throw Error(j(174));
  return e;
}
function fm(e, t) {
  switch ($e(os, t), $e(rs, e), $e($n, Ls), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Qd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Qd(t, e);
  }
  Pe($n), $e($n, t);
}
function ki() {
  Pe($n), Pe(rs), Pe(os);
}
function Aw(e) {
  ro(os.current);
  var t = ro($n.current), n = Qd(t, e.type);
  t !== n && ($e(rs, e), $e($n, n));
}
function dm(e) {
  rs.current === e && (Pe($n), Pe(rs));
}
var Ie = Fr(0);
function Pu(e) {
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
function pm() {
  for (var e = 0; e < _f.length; e++)
    _f[e]._workInProgressVersionPrimary = null;
  _f.length = 0;
}
var qa = Xn.ReactCurrentDispatcher, Rf = Xn.ReactCurrentBatchConfig, co = 0, Oe = null, We = null, Qe = null, _u = !1, Rl = !1, is = 0, LE = 0;
function et() {
  throw Error(j(321));
}
function hm(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!hn(e[n], t[n]))
      return !1;
  return !0;
}
function mm(e, t, n, r, o, i) {
  if (co = i, Oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, qa.current = e === null || e.memoizedState === null ? jE : HE, e = n(r, o), Rl) {
    i = 0;
    do {
      if (Rl = !1, is = 0, 25 <= i)
        throw Error(j(301));
      i += 1, Qe = We = null, t.updateQueue = null, qa.current = VE, e = n(r, o);
    } while (Rl);
  }
  if (qa.current = Ru, t = We !== null && We.next !== null, co = 0, Qe = We = Oe = null, _u = !1, t)
    throw Error(j(300));
  return e;
}
function gm() {
  var e = is !== 0;
  return is = 0, e;
}
function vn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Qe === null ? Oe.memoizedState = Qe = e : Qe = Qe.next = e, Qe;
}
function Gt() {
  if (We === null) {
    var e = Oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = We.next;
  var t = Qe === null ? Oe.memoizedState : Qe.next;
  if (t !== null)
    Qe = t, We = e;
  else {
    if (e === null)
      throw Error(j(310));
    We = e, e = { memoizedState: We.memoizedState, baseState: We.baseState, baseQueue: We.baseQueue, queue: We.queue, next: null }, Qe === null ? Oe.memoizedState = Qe = e : Qe = Qe.next = e;
  }
  return Qe;
}
function ls(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function If(e) {
  var t = Gt(), n = t.queue;
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
        a === null ? (s = a = f, l = r) : a = a.next = f, Oe.lanes |= c, fo |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? l = r : a.next = s, hn(r, t.memoizedState) || (xt = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Oe.lanes |= i, fo |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Of(e) {
  var t = Gt(), n = t.queue;
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
    hn(i, t.memoizedState) || (xt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Pw() {
}
function _w(e, t) {
  var n = Oe, r = Gt(), o = t(), i = !hn(r.memoizedState, o);
  if (i && (r.memoizedState = o, xt = !0), r = r.queue, vm(Ow.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Qe !== null && Qe.memoizedState.tag & 1) {
    if (n.flags |= 2048, ss(9, Iw.bind(null, n, r, o, t), void 0, null), Ke === null)
      throw Error(j(349));
    (co & 30) !== 0 || Rw(n, t, o);
  }
  return o;
}
function Rw(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Oe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Iw(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Tw(t) && Mw(e);
}
function Ow(e, t, n) {
  return n(function() {
    Tw(t) && Mw(e);
  });
}
function Tw(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !hn(e, n);
  } catch {
    return !0;
  }
}
function Mw(e) {
  var t = qn(e, 1);
  t !== null && dn(t, e, 1, -1);
}
function O0(e) {
  var t = vn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ls, lastRenderedState: e }, t.queue = e, e = e.dispatch = BE.bind(null, Oe, e), [t.memoizedState, e];
}
function ss(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Oe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Nw() {
  return Gt().memoizedState;
}
function Qa(e, t, n, r) {
  var o = vn();
  Oe.flags |= e, o.memoizedState = ss(1 | t, n, void 0, r === void 0 ? null : r);
}
function mc(e, t, n, r) {
  var o = Gt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (We !== null) {
    var l = We.memoizedState;
    if (i = l.destroy, r !== null && hm(r, l.deps)) {
      o.memoizedState = ss(t, n, i, r);
      return;
    }
  }
  Oe.flags |= e, o.memoizedState = ss(1 | t, n, i, r);
}
function T0(e, t) {
  return Qa(8390656, 8, e, t);
}
function vm(e, t) {
  return mc(2048, 8, e, t);
}
function Dw(e, t) {
  return mc(4, 2, e, t);
}
function Lw(e, t) {
  return mc(4, 4, e, t);
}
function Fw(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function zw(e, t, n) {
  return n = n != null ? n.concat([e]) : null, mc(4, 4, Fw.bind(null, t, e), n);
}
function ym() {
}
function Bw(e, t) {
  var n = Gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hm(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function jw(e, t) {
  var n = Gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hm(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Hw(e, t, n) {
  return (co & 21) === 0 ? (e.baseState && (e.baseState = !1, xt = !0), e.memoizedState = n) : (hn(n, t) || (n = Wx(), Oe.lanes |= n, fo |= n, e.baseState = !0), t);
}
function FE(e, t) {
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
function Vw() {
  return Gt().memoizedState;
}
function zE(e, t, n) {
  var r = Rr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Uw(e))
    Ww(t, n);
  else if (n = bw(e, t, n, r), n !== null) {
    var o = ft();
    dn(n, e, r, o), qw(n, t, r);
  }
}
function BE(e, t, n) {
  var r = Rr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Uw(e))
    Ww(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var l = t.lastRenderedState, s = i(l, n);
        if (o.hasEagerState = !0, o.eagerState = s, hn(s, l)) {
          var a = t.interleaved;
          a === null ? (o.next = o, um(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = bw(e, t, o, r), n !== null && (o = ft(), dn(n, e, r, o), qw(n, t, r));
  }
}
function Uw(e) {
  var t = e.alternate;
  return e === Oe || t !== null && t === Oe;
}
function Ww(e, t) {
  Rl = _u = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function qw(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Kh(e, n);
  }
}
var Ru = { readContext: Qt, useCallback: et, useContext: et, useEffect: et, useImperativeHandle: et, useInsertionEffect: et, useLayoutEffect: et, useMemo: et, useReducer: et, useRef: et, useState: et, useDebugValue: et, useDeferredValue: et, useTransition: et, useMutableSource: et, useSyncExternalStore: et, useId: et, unstable_isNewReconciler: !1 }, jE = { readContext: Qt, useCallback: function(e, t) {
  return vn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Qt, useEffect: T0, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Qa(
    4194308,
    4,
    Fw.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Qa(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Qa(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = vn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = vn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = zE.bind(null, Oe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = vn();
  return e = { current: e }, t.memoizedState = e;
}, useState: O0, useDebugValue: ym, useDeferredValue: function(e) {
  return vn().memoizedState = e;
}, useTransition: function() {
  var e = O0(!1), t = e[0];
  return e = FE.bind(null, e[1]), vn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Oe, o = vn();
  if (Re) {
    if (n === void 0)
      throw Error(j(407));
    n = n();
  } else {
    if (n = t(), Ke === null)
      throw Error(j(349));
    (co & 30) !== 0 || Rw(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, T0(Ow.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ss(9, Iw.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = vn(), t = Ke.identifierPrefix;
  if (Re) {
    var n = jn, r = Bn;
    n = (r & ~(1 << 32 - fn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = is++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = LE++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, HE = {
  readContext: Qt,
  useCallback: Bw,
  useContext: Qt,
  useEffect: vm,
  useImperativeHandle: zw,
  useInsertionEffect: Dw,
  useLayoutEffect: Lw,
  useMemo: jw,
  useReducer: If,
  useRef: Nw,
  useState: function() {
    return If(ls);
  },
  useDebugValue: ym,
  useDeferredValue: function(e) {
    var t = Gt();
    return Hw(t, We.memoizedState, e);
  },
  useTransition: function() {
    var e = If(ls)[0], t = Gt().memoizedState;
    return [e, t];
  },
  useMutableSource: Pw,
  useSyncExternalStore: _w,
  useId: Vw,
  unstable_isNewReconciler: !1
}, VE = { readContext: Qt, useCallback: Bw, useContext: Qt, useEffect: vm, useImperativeHandle: zw, useInsertionEffect: Dw, useLayoutEffect: Lw, useMemo: jw, useReducer: Of, useRef: Nw, useState: function() {
  return Of(ls);
}, useDebugValue: ym, useDeferredValue: function(e) {
  var t = Gt();
  return We === null ? t.memoizedState = e : Hw(t, We.memoizedState, e);
}, useTransition: function() {
  var e = Of(ls)[0], t = Gt().memoizedState;
  return [e, t];
}, useMutableSource: Pw, useSyncExternalStore: _w, useId: Vw, unstable_isNewReconciler: !1 };
function Ci(e, t) {
  try {
    var n = "", r = t;
    do
      n += v$(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Tf(e, t, n) {
  return { value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null };
}
function gp(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var UE = typeof WeakMap == "function" ? WeakMap : Map;
function Qw(e, t, n) {
  n = Hn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ou || (Ou = !0, Ep = r), gp(e, t);
  }, n;
}
function Gw(e, t, n) {
  n = Hn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      gp(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    gp(e, t), typeof r != "function" && (_r === null ? _r = /* @__PURE__ */ new Set([this]) : _r.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function M0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new UE();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = o5.bind(null, e, t, n), t.then(e, e));
}
function N0(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function D0(e, t, n, r, o) {
  return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Hn(-1, 1), t.tag = 2, Pr(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
}
var WE = Xn.ReactCurrentOwner, xt = !1;
function ut(e, t, n, r) {
  t.child = e === null ? Ew(t, null, n, r) : Si(t, e.child, n, r);
}
function L0(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return ai(t, o), r = mm(e, t, n, r, i, o), n = gm(), e !== null && !xt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Qn(e, t, o)) : (Re && n && rm(t), t.flags |= 1, ut(e, t, r, o), t.child);
}
function F0(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Em(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Kw(e, t, i, r, o)) : (e = Xa(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, (e.lanes & o) === 0) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Jl, n(l, r) && e.ref === t.ref)
      return Qn(e, t, o);
  }
  return t.flags |= 1, e = Ir(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Kw(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Jl(i, r) && e.ref === t.ref)
      if (xt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        (e.flags & 131072) !== 0 && (xt = !0);
      else
        return t.lanes = e.lanes, Qn(e, t, o);
  }
  return vp(e, t, n, r, o);
}
function Yw(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $e(ti, $t), $t |= n;
    else {
      if ((n & 1073741824) === 0)
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, $e(ti, $t), $t |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, $e(ti, $t), $t |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, $e(ti, $t), $t |= r;
  return ut(e, t, o, n), t.child;
}
function Xw(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function vp(e, t, n, r, o) {
  var i = bt(n) ? ao : it.current;
  return i = wi(t, i), ai(t, o), n = mm(e, t, n, r, i, o), r = gm(), e !== null && !xt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Qn(e, t, o)) : (Re && r && rm(t), t.flags |= 1, ut(e, t, n, o), t.child);
}
function z0(e, t, n, r, o) {
  if (bt(n)) {
    var i = !0;
    Su(t);
  } else
    i = !1;
  if (ai(t, o), t.stateNode === null)
    Ga(e, t), Cw(t, n, r), mp(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var a = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Qt(u) : (u = bt(n) ? ao : it.current, u = wi(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && R0(t, l, r, u), pr = !1;
    var d = t.memoizedState;
    l.state = d, Au(t, r, l, o), a = t.memoizedState, s !== r || d !== a || wt.current || pr ? (typeof c == "function" && (hp(t, n, c, r), a = t.memoizedState), (s = pr || _0(t, n, s, r, d, a, u)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, Sw(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : nn(t.type, s), l.props = u, f = t.pendingProps, d = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = Qt(a) : (a = bt(n) ? ao : it.current, a = wi(t, a));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== f || d !== a) && R0(t, l, r, a), pr = !1, d = t.memoizedState, l.state = d, Au(t, r, l, o);
    var h = t.memoizedState;
    s !== f || d !== h || wt.current || pr ? (typeof g == "function" && (hp(t, n, g, r), h = t.memoizedState), (u = pr || _0(t, n, u, r, d, h, a) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, h, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, h, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), l.props = r, l.state = h, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return yp(e, t, n, r, i, o);
}
function yp(e, t, n, r, o, i) {
  Xw(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
    return o && C0(t, n, !1), Qn(e, t, i);
  r = t.stateNode, WE.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = Si(t, e.child, null, i), t.child = Si(t, null, s, i)) : ut(e, t, s, i), t.memoizedState = r.state, o && C0(t, n, !0), t.child;
}
function Zw(e) {
  var t = e.stateNode;
  t.pendingContext ? k0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && k0(e, t.context, !1), fm(e, t.containerInfo);
}
function B0(e, t, n, r, o) {
  return bi(), im(o), t.flags |= 256, ut(e, t, n, r), t.child;
}
var xp = { dehydrated: null, treeContext: null, retryLane: 0 };
function wp(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Jw(e, t, n) {
  var r = t.pendingProps, o = Ie.current, i = !1, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), $e(Ie, o & 1), e === null)
    return dp(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = yc(l, r, 0, null), e = io(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = wp(n), t.memoizedState = xp, e) : xm(t, l));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return qE(e, t, l, r, s, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, s = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return (l & 1) === 0 && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Ir(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = Ir(s, i) : (i = io(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? wp(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = xp, r;
  }
  return i = e.child, e = i.sibling, r = Ir(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function xm(e, t) {
  return t = yc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function pa(e, t, n, r) {
  return r !== null && im(r), Si(t, e.child, null, n), e = xm(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function qE(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Tf(Error(j(422))), pa(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = yc({ mode: "visible", children: r.children }, o, 0, null), i = io(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && Si(t, e.child, null, l), t.child.memoizedState = wp(l), t.memoizedState = xp, i);
  if ((t.mode & 1) === 0)
    return pa(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, i = Error(j(419)), r = Tf(i, r, void 0), pa(e, t, l, r);
  }
  if (s = (l & e.childLanes) !== 0, xt || s) {
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
      o = (o & (r.suspendedLanes | l)) !== 0 ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, qn(e, o), dn(r, e, o, -1));
    }
    return $m(), r = Tf(Error(j(421))), pa(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = i5.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Et = Ar(o.nextSibling), _t = t, Re = !0, on = null, e !== null && (Lt[Ft++] = Bn, Lt[Ft++] = jn, Lt[Ft++] = uo, Bn = e.id, jn = e.overflow, uo = t), t = xm(t, r.children), t.flags |= 4096, t);
}
function j0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), pp(e.return, t, n);
}
function Mf(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function eb(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (ut(e, t, r.children, n), r = Ie.current, (r & 2) !== 0)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && j0(e, n, t);
          else if (e.tag === 19)
            j0(e, n, t);
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
  if ($e(Ie, r), (t.mode & 1) === 0)
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && Pu(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Mf(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Pu(e) === null) {
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
function Ga(e, t) {
  (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Qn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), fo |= t.lanes, (n & t.childLanes) === 0)
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(j(153));
  if (t.child !== null) {
    for (e = t.child, n = Ir(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Ir(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function QE(e, t, n) {
  switch (t.tag) {
    case 3:
      Zw(t), bi();
      break;
    case 5:
      Aw(t);
      break;
    case 1:
      bt(t.type) && Su(t);
      break;
    case 4:
      fm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      $e($u, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? ($e(Ie, Ie.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Jw(e, t, n) : ($e(Ie, Ie.current & 1), e = Qn(e, t, n), e !== null ? e.sibling : null);
      $e(Ie, Ie.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
        if (r)
          return eb(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), $e(Ie, Ie.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Yw(e, t, n);
  }
  return Qn(e, t, n);
}
var tb, bp, nb, rb;
tb = function(e, t) {
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
bp = function() {
};
nb = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, ro($n.current);
    var i = null;
    switch (n) {
      case "input":
        o = Vd(e, o), r = Vd(e, r), i = [];
        break;
      case "select":
        o = Te({}, o, { value: void 0 }), r = Te({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = qd(e, o), r = qd(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = wu);
    }
    Gd(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (l in s)
            s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ql.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ql.hasOwnProperty(u) ? (a != null && u === "onScroll" && Ee("scroll", e), i || s === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
rb = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function rl(e, t) {
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
function GE(e, t, n) {
  var r = t.pendingProps;
  switch (om(t), t.tag) {
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
      return bt(t.type) && bu(), tt(t), null;
    case 3:
      return r = t.stateNode, ki(), Pe(wt), Pe(it), pm(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (fa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, on !== null && (_p(on), on = null))), bp(e, t), tt(t), null;
    case 5:
      dm(t);
      var o = ro(os.current);
      if (n = t.type, e !== null && t.stateNode != null)
        nb(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(j(166));
          return tt(t), null;
        }
        if (e = ro($n.current), fa(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[bn] = t, r[ns] = i, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < wl.length; o++)
                Ee(wl[o], r);
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
              Yg(r, i), Ee("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Ee("invalid", r);
              break;
            case "textarea":
              Zg(r, i), Ee("invalid", r);
          }
          Gd(n, i), o = null;
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && ca(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && ca(
                r.textContent,
                s,
                e
              ), o = ["children", "" + s]) : ql.hasOwnProperty(l) && s != null && l === "onScroll" && Ee("scroll", r);
            }
          switch (n) {
            case "input":
              na(r), Xg(r, i, !0);
              break;
            case "textarea":
              na(r), Jg(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = wu);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Rx(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[bn] = t, e[ns] = r, tb(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Kd(n, r), n) {
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
                for (o = 0; o < wl.length; o++)
                  Ee(wl[o], e);
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
                Yg(e, r), o = Vd(e, r), Ee("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Te({}, r, { value: void 0 }), Ee("invalid", e);
                break;
              case "textarea":
                Zg(e, r), o = qd(e, r), Ee("invalid", e);
                break;
              default:
                o = r;
            }
            Gd(n, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style" ? Tx(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Ix(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Ql(e, a) : typeof a == "number" && Ql(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ql.hasOwnProperty(i) ? a != null && i === "onScroll" && Ee("scroll", e) : a != null && Vh(e, i, a, l));
              }
            switch (n) {
              case "input":
                na(e), Xg(e, r, !1);
                break;
              case "textarea":
                na(e), Jg(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Mr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? oi(e, !!r.multiple, i, !1) : r.defaultValue != null && oi(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = wu);
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
        rb(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(j(166));
        if (n = ro(os.current), ro($n.current), fa(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[bn] = t, (i = r.nodeValue !== n) && (e = _t, e !== null))
            switch (e.tag) {
              case 3:
                ca(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ca(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[bn] = t, t.stateNode = r;
      }
      return tt(t), null;
    case 13:
      if (Pe(Ie), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Re && Et !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          ww(), bi(), t.flags |= 98560, i = !1;
        else if (i = fa(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(j(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(j(317));
            i[bn] = t;
          } else
            bi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
          tt(t), i = !1;
        } else
          on !== null && (_p(on), on = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ie.current & 1) !== 0 ? qe === 0 && (qe = 3) : $m())), t.updateQueue !== null && (t.flags |= 4), tt(t), null);
    case 4:
      return ki(), bp(e, t), e === null && es(t.stateNode.containerInfo), tt(t), null;
    case 10:
      return am(t.type._context), tt(t), null;
    case 17:
      return bt(t.type) && bu(), tt(t), null;
    case 19:
      if (Pe(Ie), i = t.memoizedState, i === null)
        return tt(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null)
        if (r)
          rl(i, !1);
        else {
          if (qe !== 0 || e !== null && (e.flags & 128) !== 0)
            for (e = t.child; e !== null; ) {
              if (l = Pu(e), l !== null) {
                for (t.flags |= 128, rl(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return $e(Ie, Ie.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Fe() > $i && (t.flags |= 128, r = !0, rl(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Pu(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), rl(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !Re)
              return tt(t), null;
          } else
            2 * Fe() - i.renderingStartTime > $i && n !== 1073741824 && (t.flags |= 128, r = !0, rl(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Fe(), t.sibling = null, n = Ie.current, $e(Ie, r ? n & 1 | 2 : n & 1), t) : (tt(t), null);
    case 22:
    case 23:
      return Cm(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? ($t & 1073741824) !== 0 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function KE(e, t) {
  switch (om(t), t.tag) {
    case 1:
      return bt(t.type) && bu(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ki(), Pe(wt), Pe(it), pm(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return dm(t), null;
    case 13:
      if (Pe(Ie), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(j(340));
        bi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Pe(Ie), null;
    case 4:
      return ki(), null;
    case 10:
      return am(t.type._context), null;
    case 22:
    case 23:
      return Cm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ha = !1, nt = !1, YE = typeof WeakSet == "function" ? WeakSet : Set, K = null;
function ei(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Me(e, t, r);
      }
    else
      n.current = null;
}
function Sp(e, t, n) {
  try {
    n();
  } catch (r) {
    Me(e, t, r);
  }
}
var H0 = !1;
function XE(e, t) {
  if (ip = vu, e = sw(), nm(e)) {
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
  for (lp = { focusedElem: e, selectionRange: n }, vu = !1, K = t; K !== null; )
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
                  var v = h.memoizedProps, w = h.memoizedState, p = t.stateNode, y = p.getSnapshotBeforeUpdate(t.elementType === t.type ? v : nn(t.type, v), w);
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
          Me(t, t.return, b);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, K = e;
          break;
        }
        K = t.return;
      }
  return h = H0, H0 = !1, h;
}
function Il(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Sp(t, n, i);
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
function kp(e) {
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
function ob(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ob(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[bn], delete t[ns], delete t[up], delete t[TE], delete t[ME])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ib(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function V0(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ib(e.return))
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
function Cp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = wu));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Cp(e, t, n), e = e.sibling; e !== null; )
      Cp(e, t, n), e = e.sibling;
}
function $p(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for ($p(e, t, n), e = e.sibling; e !== null; )
      $p(e, t, n), e = e.sibling;
}
var Ye = null, rn = !1;
function sr(e, t, n) {
  for (n = n.child; n !== null; )
    lb(e, t, n), n = n.sibling;
}
function lb(e, t, n) {
  if (Cn && typeof Cn.onCommitFiberUnmount == "function")
    try {
      Cn.onCommitFiberUnmount(ac, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      nt || ei(n, t);
    case 6:
      var r = Ye, o = rn;
      Ye = null, sr(e, t, n), Ye = r, rn = o, Ye !== null && (rn ? (e = Ye, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ye.removeChild(n.stateNode));
      break;
    case 18:
      Ye !== null && (rn ? (e = Ye, n = n.stateNode, e.nodeType === 8 ? Af(e.parentNode, n) : e.nodeType === 1 && Af(e, n), Xl(e)) : Af(Ye, n.stateNode));
      break;
    case 4:
      r = Ye, o = rn, Ye = n.stateNode.containerInfo, rn = !0, sr(e, t, n), Ye = r, rn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!nt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Sp(n, t, l), o = o.next;
        } while (o !== r);
      }
      sr(e, t, n);
      break;
    case 1:
      if (!nt && (ei(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          Me(n, t, s);
        }
      sr(e, t, n);
      break;
    case 21:
      sr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (nt = (r = nt) || n.memoizedState !== null, sr(e, t, n), nt = r) : sr(e, t, n);
      break;
    default:
      sr(e, t, n);
  }
}
function U0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new YE()), t.forEach(function(r) {
      var o = l5.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Jt(e, t) {
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
                Ye = s.stateNode, rn = !1;
                break e;
              case 3:
                Ye = s.stateNode.containerInfo, rn = !0;
                break e;
              case 4:
                Ye = s.stateNode.containerInfo, rn = !0;
                break e;
            }
            s = s.return;
          }
        if (Ye === null)
          throw Error(j(160));
        lb(i, l, o), Ye = null, rn = !1;
        var a = o.alternate;
        a !== null && (a.return = null), o.return = null;
      } catch (u) {
        Me(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      sb(t, e), t = t.sibling;
}
function sb(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Jt(t, e), gn(e), r & 4) {
        try {
          Il(3, e, e.return), gc(3, e);
        } catch (v) {
          Me(e, e.return, v);
        }
        try {
          Il(5, e, e.return);
        } catch (v) {
          Me(e, e.return, v);
        }
      }
      break;
    case 1:
      Jt(t, e), gn(e), r & 512 && n !== null && ei(n, n.return);
      break;
    case 5:
      if (Jt(t, e), gn(e), r & 512 && n !== null && ei(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Ql(o, "");
        } catch (v) {
          Me(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && Px(o, i), Kd(s, l);
            var u = Kd(s, i);
            for (l = 0; l < a.length; l += 2) {
              var c = a[l], f = a[l + 1];
              c === "style" ? Tx(o, f) : c === "dangerouslySetInnerHTML" ? Ix(o, f) : c === "children" ? Ql(o, f) : Vh(o, c, f, u);
            }
            switch (s) {
              case "input":
                Ud(o, i);
                break;
              case "textarea":
                _x(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null ? oi(o, !!i.multiple, g, !1) : d !== !!i.multiple && (i.defaultValue != null ? oi(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : oi(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ns] = i;
          } catch (v) {
            Me(e, e.return, v);
          }
      }
      break;
    case 6:
      if (Jt(t, e), gn(e), r & 4) {
        if (e.stateNode === null)
          throw Error(j(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (v) {
          Me(e, e.return, v);
        }
      }
      break;
    case 3:
      if (Jt(t, e), gn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Xl(t.containerInfo);
        } catch (v) {
          Me(e, e.return, v);
        }
      break;
    case 4:
      Jt(t, e), gn(e);
      break;
    case 13:
      Jt(t, e), gn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Sm = Fe())), r & 4 && U0(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (nt = (u = nt) || c, Jt(t, e), nt = u) : Jt(t, e), gn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && (e.mode & 1) !== 0)
          for (K = e, c = e.child; c !== null; ) {
            for (f = K = c; K !== null; ) {
              switch (d = K, g = d.child, d.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Il(4, d, d.return);
                  break;
                case 1:
                  ei(d, d.return);
                  var h = d.stateNode;
                  if (typeof h.componentWillUnmount == "function") {
                    r = d, n = d.return;
                    try {
                      t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount();
                    } catch (v) {
                      Me(r, n, v);
                    }
                  }
                  break;
                case 5:
                  ei(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    q0(f);
                    continue;
                  }
              }
              g !== null ? (g.return = d, K = g) : q0(f);
            }
            c = c.sibling;
          }
        e:
          for (c = null, f = e; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = f.stateNode, a = f.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Ox("display", l));
                } catch (v) {
                  Me(e, e.return, v);
                }
              }
            } else if (f.tag === 6) {
              if (c === null)
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (v) {
                  Me(e, e.return, v);
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
      Jt(t, e), gn(e), r & 4 && U0(e);
      break;
    case 21:
      break;
    default:
      Jt(
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
          if (ib(n)) {
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
          r.flags & 32 && (Ql(o, ""), r.flags &= -33);
          var i = V0(e);
          $p(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = V0(e);
          Cp(e, s, l);
          break;
        default:
          throw Error(j(161));
      }
    } catch (a) {
      Me(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ZE(e, t, n) {
  K = e, ab(e);
}
function ab(e, t, n) {
  for (var r = (e.mode & 1) !== 0; K !== null; ) {
    var o = K, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || ha;
      if (!l) {
        var s = o.alternate, a = s !== null && s.memoizedState !== null || nt;
        s = ha;
        var u = nt;
        if (ha = l, (nt = a) && !u)
          for (K = o; K !== null; )
            l = K, a = l.child, l.tag === 22 && l.memoizedState !== null ? Q0(o) : a !== null ? (a.return = l, K = a) : Q0(o);
        for (; i !== null; )
          K = i, ab(i), i = i.sibling;
        K = o, ha = s, nt = u;
      }
      W0(e);
    } else
      (o.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = o, K = i) : W0(e);
  }
}
function W0(e) {
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
                  var o = t.elementType === t.type ? n.memoizedProps : nn(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && P0(t, i, r);
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
                P0(t, l, n);
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
              throw Error(j(163));
          }
        nt || t.flags & 512 && kp(t);
      } catch (d) {
        Me(t, t.return, d);
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
function q0(e) {
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
function Q0(e) {
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
          } catch (a) {
            Me(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Me(t, o, a);
            }
          }
          var i = t.return;
          try {
            kp(t);
          } catch (a) {
            Me(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            kp(t);
          } catch (a) {
            Me(t, l, a);
          }
      }
    } catch (a) {
      Me(t, t.return, a);
    }
    if (t === e) {
      K = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, K = s;
      break;
    }
    K = t.return;
  }
}
var JE = Math.ceil, Iu = Xn.ReactCurrentDispatcher, wm = Xn.ReactCurrentOwner, qt = Xn.ReactCurrentBatchConfig, me = 0, Ke = null, He = null, Ze = 0, $t = 0, ti = Fr(0), qe = 0, as = null, fo = 0, vc = 0, bm = 0, Ol = null, yt = null, Sm = 0, $i = 1 / 0, Mn = null, Ou = !1, Ep = null, _r = null, ma = !1, yr = null, Tu = 0, Tl = 0, Ap = null, Ka = -1, Ya = 0;
function ft() {
  return (me & 6) !== 0 ? Fe() : Ka !== -1 ? Ka : Ka = Fe();
}
function Rr(e) {
  return (e.mode & 1) === 0 ? 1 : (me & 2) !== 0 && Ze !== 0 ? Ze & -Ze : DE.transition !== null ? (Ya === 0 && (Ya = Wx()), Ya) : (e = we, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Zx(e.type)), e);
}
function dn(e, t, n, r) {
  if (50 < Tl)
    throw Tl = 0, Ap = null, Error(j(185));
  Ms(e, n, r), ((me & 2) === 0 || e !== Ke) && (e === Ke && ((me & 2) === 0 && (vc |= n), qe === 4 && gr(e, Ze)), St(e, r), n === 1 && me === 0 && (t.mode & 1) === 0 && ($i = Fe() + 500, pc && zr()));
}
function St(e, t) {
  var n = e.callbackNode;
  D$(e, t);
  var r = gu(e, e === Ke ? Ze : 0);
  if (r === 0)
    n !== null && n0(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && n0(n), t === 1)
      e.tag === 0 ? NE(G0.bind(null, e)) : vw(G0.bind(null, e)), IE(function() {
        (me & 6) === 0 && zr();
      }), n = null;
    else {
      switch (qx(r)) {
        case 1:
          n = Gh;
          break;
        case 4:
          n = Vx;
          break;
        case 16:
          n = mu;
          break;
        case 536870912:
          n = Ux;
          break;
        default:
          n = mu;
      }
      n = gb(n, ub.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ub(e, t) {
  if (Ka = -1, Ya = 0, (me & 6) !== 0)
    throw Error(j(327));
  var n = e.callbackNode;
  if (ui() && e.callbackNode !== n)
    return null;
  var r = gu(e, e === Ke ? Ze : 0);
  if (r === 0)
    return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t)
    t = Mu(e, r);
  else {
    t = r;
    var o = me;
    me |= 2;
    var i = fb();
    (Ke !== e || Ze !== t) && (Mn = null, $i = Fe() + 500, oo(e, t));
    do
      try {
        n5();
        break;
      } catch (s) {
        cb(e, s);
      }
    while (1);
    sm(), Iu.current = i, me = o, He !== null ? t = 0 : (Ke = null, Ze = 0, t = qe);
  }
  if (t !== 0) {
    if (t === 2 && (o = ep(e), o !== 0 && (r = o, t = Pp(e, o))), t === 1)
      throw n = as, oo(e, 0), gr(e, r), St(e, Fe()), n;
    if (t === 6)
      gr(e, r);
    else {
      if (o = e.current.alternate, (r & 30) === 0 && !e5(o) && (t = Mu(e, r), t === 2 && (i = ep(e), i !== 0 && (r = i, t = Pp(e, i))), t === 1))
        throw n = as, oo(e, 0), gr(e, r), St(e, Fe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Gr(e, yt, Mn);
          break;
        case 3:
          if (gr(e, r), (r & 130023424) === r && (t = Sm + 500 - Fe(), 10 < t)) {
            if (gu(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              ft(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = ap(Gr.bind(null, e, yt, Mn), t);
            break;
          }
          Gr(e, yt, Mn);
          break;
        case 4:
          if (gr(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - fn(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = Fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * JE(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ap(Gr.bind(null, e, yt, Mn), r);
            break;
          }
          Gr(e, yt, Mn);
          break;
        case 5:
          Gr(e, yt, Mn);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return St(e, Fe()), e.callbackNode === n ? ub.bind(null, e) : null;
}
function Pp(e, t) {
  var n = Ol;
  return e.current.memoizedState.isDehydrated && (oo(e, t).flags |= 256), e = Mu(e, t), e !== 2 && (t = yt, yt = n, t !== null && _p(t)), e;
}
function _p(e) {
  yt === null ? yt = e : yt.push.apply(yt, e);
}
function e5(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!hn(i(), o))
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
  for (t &= ~bm, t &= ~vc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - fn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function G0(e) {
  if ((me & 6) !== 0)
    throw Error(j(327));
  ui();
  var t = gu(e, 0);
  if ((t & 1) === 0)
    return St(e, Fe()), null;
  var n = Mu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ep(e);
    r !== 0 && (t = r, n = Pp(e, r));
  }
  if (n === 1)
    throw n = as, oo(e, 0), gr(e, t), St(e, Fe()), n;
  if (n === 6)
    throw Error(j(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Gr(e, yt, Mn), St(e, Fe()), null;
}
function km(e, t) {
  var n = me;
  me |= 1;
  try {
    return e(t);
  } finally {
    me = n, me === 0 && ($i = Fe() + 500, pc && zr());
  }
}
function po(e) {
  yr !== null && yr.tag === 0 && (me & 6) === 0 && ui();
  var t = me;
  me |= 1;
  var n = qt.transition, r = we;
  try {
    if (qt.transition = null, we = 1, e)
      return e();
  } finally {
    we = r, qt.transition = n, me = t, (me & 6) === 0 && zr();
  }
}
function Cm() {
  $t = ti.current, Pe(ti);
}
function oo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, RE(n)), He !== null)
    for (n = He.return; n !== null; ) {
      var r = n;
      switch (om(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && bu();
          break;
        case 3:
          ki(), Pe(wt), Pe(it), pm();
          break;
        case 5:
          dm(r);
          break;
        case 4:
          ki();
          break;
        case 13:
          Pe(Ie);
          break;
        case 19:
          Pe(Ie);
          break;
        case 10:
          am(r.type._context);
          break;
        case 22:
        case 23:
          Cm();
      }
      n = n.return;
    }
  if (Ke = e, He = e = Ir(e.current, null), Ze = $t = t, qe = 0, as = null, bm = vc = fo = 0, yt = Ol = null, no !== null) {
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
function cb(e, t) {
  do {
    var n = He;
    try {
      if (sm(), qa.current = Ru, _u) {
        for (var r = Oe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        _u = !1;
      }
      if (co = 0, Qe = We = Oe = null, Rl = !1, is = 0, wm.current = null, n === null || n.return === null) {
        qe = 1, as = t, He = null;
        break;
      }
      e: {
        var i = e, l = n.return, s = n, a = t;
        if (t = Ze, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = s, f = c.tag;
          if ((c.mode & 1) === 0 && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var g = N0(l);
          if (g !== null) {
            g.flags &= -257, D0(g, l, s, i, t), g.mode & 1 && M0(i, u, t), t = g, a = u;
            var h = t.updateQueue;
            if (h === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(a), t.updateQueue = v;
            } else
              h.add(a);
            break e;
          } else {
            if ((t & 1) === 0) {
              M0(i, u, t), $m();
              break e;
            }
            a = Error(j(426));
          }
        } else if (Re && s.mode & 1) {
          var w = N0(l);
          if (w !== null) {
            (w.flags & 65536) === 0 && (w.flags |= 256), D0(w, l, s, i, t), im(Ci(a, s));
            break e;
          }
        }
        i = a = Ci(a, s), qe !== 4 && (qe = 2), Ol === null ? Ol = [i] : Ol.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = Qw(i, a, t);
              A0(i, p);
              break e;
            case 1:
              s = a;
              var y = i.type, x = i.stateNode;
              if ((i.flags & 128) === 0 && (typeof y.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (_r === null || !_r.has(x)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var b = Gw(i, s, t);
                A0(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      pb(n);
    } catch (A) {
      t = A, He === n && n !== null && (He = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function fb() {
  var e = Iu.current;
  return Iu.current = Ru, e === null ? Ru : e;
}
function $m() {
  (qe === 0 || qe === 3 || qe === 2) && (qe = 4), Ke === null || (fo & 268435455) === 0 && (vc & 268435455) === 0 || gr(Ke, Ze);
}
function Mu(e, t) {
  var n = me;
  me |= 2;
  var r = fb();
  (Ke !== e || Ze !== t) && (Mn = null, oo(e, t));
  do
    try {
      t5();
      break;
    } catch (o) {
      cb(e, o);
    }
  while (1);
  if (sm(), me = n, Iu.current = r, He !== null)
    throw Error(j(261));
  return Ke = null, Ze = 0, qe;
}
function t5() {
  for (; He !== null; )
    db(He);
}
function n5() {
  for (; He !== null && !A$(); )
    db(He);
}
function db(e) {
  var t = mb(e.alternate, e, $t);
  e.memoizedProps = e.pendingProps, t === null ? pb(e) : He = t, wm.current = null;
}
function pb(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, (t.flags & 32768) === 0) {
      if (n = GE(n, t, $t), n !== null) {
        He = n;
        return;
      }
    } else {
      if (n = KE(n, t), n !== null) {
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
function Gr(e, t, n) {
  var r = we, o = qt.transition;
  try {
    qt.transition = null, we = 1, r5(e, t, n, r);
  } finally {
    qt.transition = o, we = r;
  }
  return null;
}
function r5(e, t, n, r) {
  do
    ui();
  while (yr !== null);
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
  if (L$(e, i), e === Ke && (He = Ke = null, Ze = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ma || (ma = !0, gb(mu, function() {
    return ui(), null;
  })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
    i = qt.transition, qt.transition = null;
    var l = we;
    we = 1;
    var s = me;
    me |= 4, wm.current = null, XE(e, n), sb(n, e), kE(lp), vu = !!ip, lp = ip = null, e.current = n, ZE(n), P$(), me = s, we = l, qt.transition = i;
  } else
    e.current = n;
  if (ma && (ma = !1, yr = e, Tu = o), i = e.pendingLanes, i === 0 && (_r = null), I$(n.stateNode), St(e, Fe()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ou)
    throw Ou = !1, e = Ep, Ep = null, e;
  return (Tu & 1) !== 0 && e.tag !== 0 && ui(), i = e.pendingLanes, (i & 1) !== 0 ? e === Ap ? Tl++ : (Tl = 0, Ap = e) : Tl = 0, zr(), null;
}
function ui() {
  if (yr !== null) {
    var e = qx(Tu), t = qt.transition, n = we;
    try {
      if (qt.transition = null, we = 16 > e ? 16 : e, yr === null)
        var r = !1;
      else {
        if (e = yr, yr = null, Tu = 0, (me & 6) !== 0)
          throw Error(j(331));
        var o = me;
        for (me |= 4, K = e.current; K !== null; ) {
          var i = K, l = i.child;
          if ((K.flags & 16) !== 0) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (K = u; K !== null; ) {
                  var c = K;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Il(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null)
                    f.return = c, K = f;
                  else
                    for (; K !== null; ) {
                      c = K;
                      var d = c.sibling, g = c.return;
                      if (ob(c), c === u) {
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
                      Il(9, i, i.return);
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
                if (s = K, (s.flags & 2048) !== 0)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        gc(9, s);
                    }
                  } catch (A) {
                    Me(s, s.return, A);
                  }
                if (s === l) {
                  K = null;
                  break e;
                }
                var b = s.sibling;
                if (b !== null) {
                  b.return = s.return, K = b;
                  break e;
                }
                K = s.return;
              }
        }
        if (me = o, zr(), Cn && typeof Cn.onPostCommitFiberRoot == "function")
          try {
            Cn.onPostCommitFiberRoot(ac, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      we = n, qt.transition = t;
    }
  }
  return !1;
}
function K0(e, t, n) {
  t = Ci(n, t), t = Qw(e, t, 1), e = Pr(e, t, 1), t = ft(), e !== null && (Ms(e, 1, t), St(e, t));
}
function Me(e, t, n) {
  if (e.tag === 3)
    K0(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        K0(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (_r === null || !_r.has(r))) {
          e = Ci(n, e), e = Gw(t, e, 1), t = Pr(t, e, 1), e = ft(), t !== null && (Ms(t, 1, e), St(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function o5(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ft(), e.pingedLanes |= e.suspendedLanes & n, Ke === e && (Ze & n) === n && (qe === 4 || qe === 3 && (Ze & 130023424) === Ze && 500 > Fe() - Sm ? oo(e, 0) : bm |= n), St(e, t);
}
function hb(e, t) {
  t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ia, ia <<= 1, (ia & 130023424) === 0 && (ia = 4194304)));
  var n = ft();
  e = qn(e, t), e !== null && (Ms(e, t, n), St(e, n));
}
function i5(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), hb(e, n);
}
function l5(e, t) {
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
  r !== null && r.delete(t), hb(e, n);
}
var mb;
mb = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || wt.current)
      xt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return xt = !1, QE(e, t, n);
      xt = (e.flags & 131072) !== 0;
    }
  else
    xt = !1, Re && (t.flags & 1048576) !== 0 && yw(t, Cu, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ga(e, t), e = t.pendingProps;
      var o = wi(t, it.current);
      ai(t, n), o = mm(null, t, r, e, o, n);
      var i = gm();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, bt(r) ? (i = !0, Su(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, cm(t), o.updater = hc, t.stateNode = o, o._reactInternals = t, mp(t, r, e, n), t = yp(null, t, r, !0, i, n)) : (t.tag = 0, Re && i && rm(t), ut(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ga(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = a5(r), e = nn(r, e), o) {
          case 0:
            t = vp(null, t, r, e, n);
            break e;
          case 1:
            t = z0(null, t, r, e, n);
            break e;
          case 11:
            t = L0(null, t, r, e, n);
            break e;
          case 14:
            t = F0(null, t, r, nn(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : nn(r, o), vp(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : nn(r, o), z0(e, t, r, o, n);
    case 3:
      e: {
        if (Zw(t), e === null)
          throw Error(j(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Sw(e, t), Au(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Ci(Error(j(423)), t), t = B0(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Ci(Error(j(424)), t), t = B0(e, t, r, n, o);
            break e;
          } else
            for (Et = Ar(t.stateNode.containerInfo.firstChild), _t = t, Re = !0, on = null, n = Ew(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (bi(), r === o) {
            t = Qn(e, t, n);
            break e;
          }
          ut(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Aw(t), e === null && dp(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, sp(r, o) ? l = null : i !== null && sp(r, i) && (t.flags |= 32), Xw(e, t), ut(e, t, l, n), t.child;
    case 6:
      return e === null && dp(t), null;
    case 13:
      return Jw(e, t, n);
    case 4:
      return fm(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Si(t, null, r, n) : ut(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : nn(r, o), L0(e, t, r, o, n);
    case 7:
      return ut(e, t, t.pendingProps, n), t.child;
    case 8:
      return ut(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ut(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, $e($u, r._currentValue), r._currentValue = l, i !== null)
          if (hn(i.value, l)) {
            if (i.children === o.children && !wt.current) {
              t = Qn(e, t, n);
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
                      a = Hn(-1, n & -n), a.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                      }
                    }
                    i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), pp(
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
                l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), pp(l, n, t), l = i.sibling;
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
        ut(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, ai(t, n), o = Qt(o), r = r(o), t.flags |= 1, ut(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = nn(r, t.pendingProps), o = nn(r.type, o), F0(e, t, r, o, n);
    case 15:
      return Kw(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : nn(r, o), Ga(e, t), t.tag = 1, bt(r) ? (e = !0, Su(t)) : e = !1, ai(t, n), Cw(t, r, o), mp(t, r, o, n), yp(null, t, r, !0, e, n);
    case 19:
      return eb(e, t, n);
    case 22:
      return Yw(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function gb(e, t) {
  return Hx(e, t);
}
function s5(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Wt(e, t, n, r) {
  return new s5(e, t, n, r);
}
function Em(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function a5(e) {
  if (typeof e == "function")
    return Em(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Wh)
      return 11;
    if (e === qh)
      return 14;
  }
  return 2;
}
function Ir(e, t) {
  var n = e.alternate;
  return n === null ? (n = Wt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Xa(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function")
    Em(e) && (l = 1);
  else if (typeof e == "string")
    l = 5;
  else
    e:
      switch (e) {
        case Wo:
          return io(n.children, o, i, t);
        case Uh:
          l = 8, o |= 8;
          break;
        case zd:
          return e = Wt(12, n, t, o | 2), e.elementType = zd, e.lanes = i, e;
        case Bd:
          return e = Wt(13, n, t, o), e.elementType = Bd, e.lanes = i, e;
        case jd:
          return e = Wt(19, n, t, o), e.elementType = jd, e.lanes = i, e;
        case $x:
          return yc(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case kx:
                l = 10;
                break e;
              case Cx:
                l = 9;
                break e;
              case Wh:
                l = 11;
                break e;
              case qh:
                l = 14;
                break e;
              case dr:
                l = 16, r = null;
                break e;
            }
          throw Error(j(130, e == null ? e : typeof e, ""));
      }
  return t = Wt(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function io(e, t, n, r) {
  return e = Wt(7, e, r, t), e.lanes = n, e;
}
function yc(e, t, n, r) {
  return e = Wt(22, e, r, t), e.elementType = $x, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Nf(e, t, n) {
  return e = Wt(6, e, null, t), e.lanes = n, e;
}
function Df(e, t, n) {
  return t = Wt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function u5(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gf(0), this.expirationTimes = gf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gf(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Am(e, t, n, r, o, i, l, s, a) {
  return e = new u5(e, t, n, s, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Wt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, cm(i), e;
}
function c5(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Uo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function vb(e) {
  if (!e)
    return Nr;
  e = e._reactInternals;
  e: {
    if (ko(e) !== e || e.tag !== 1)
      throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (bt(t.type)) {
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
    if (bt(n))
      return gw(e, n, t);
  }
  return t;
}
function yb(e, t, n, r, o, i, l, s, a) {
  return e = Am(n, r, !0, e, o, i, l, s, a), e.context = vb(null), n = e.current, r = ft(), o = Rr(n), i = Hn(r, o), i.callback = t != null ? t : null, Pr(n, i, o), e.current.lanes = o, Ms(e, o, r), St(e, r), e;
}
function xc(e, t, n, r) {
  var o = t.current, i = ft(), l = Rr(o);
  return n = vb(n), t.context === null ? t.context = n : t.pendingContext = n, t = Hn(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Pr(o, t, l), e !== null && (dn(e, o, l, i), Wa(e, o, l)), l;
}
function Nu(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Y0(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Pm(e, t) {
  Y0(e, t), (e = e.alternate) && Y0(e, t);
}
function f5() {
  return null;
}
var xb = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function _m(e) {
  this._internalRoot = e;
}
wc.prototype.render = _m.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(j(409));
  xc(e, t, null, null);
};
wc.prototype.unmount = _m.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    po(function() {
      xc(null, e, null, null);
    }), t[Wn] = null;
  }
};
function wc(e) {
  this._internalRoot = e;
}
wc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Kx();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < mr.length && t !== 0 && t < mr[n].priority; n++)
      ;
    mr.splice(n, 0, e), n === 0 && Xx(e);
  }
};
function Rm(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function bc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function X0() {
}
function d5(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Nu(l);
        i.call(u);
      };
    }
    var l = yb(t, r, e, 0, null, !1, !1, "", X0);
    return e._reactRootContainer = l, e[Wn] = l.current, es(e.nodeType === 8 ? e.parentNode : e), po(), l;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = Nu(a);
      s.call(u);
    };
  }
  var a = Am(e, 0, !1, null, null, !1, !1, "", X0);
  return e._reactRootContainer = a, e[Wn] = a.current, es(e.nodeType === 8 ? e.parentNode : e), po(function() {
    xc(t, a, n, r);
  }), a;
}
function Sc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var a = Nu(l);
        s.call(a);
      };
    }
    xc(t, l, e, o);
  } else
    l = d5(n, t, e, o, r);
  return Nu(l);
}
Qx = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xl(t.pendingLanes);
        n !== 0 && (Kh(t, n | 1), St(t, Fe()), (me & 6) === 0 && ($i = Fe() + 500, zr()));
      }
      break;
    case 13:
      po(function() {
        var r = qn(e, 1);
        if (r !== null) {
          var o = ft();
          dn(r, e, 1, o);
        }
      }), Pm(e, 1);
  }
};
Yh = function(e) {
  if (e.tag === 13) {
    var t = qn(e, 134217728);
    if (t !== null) {
      var n = ft();
      dn(t, e, 134217728, n);
    }
    Pm(e, 134217728);
  }
};
Gx = function(e) {
  if (e.tag === 13) {
    var t = Rr(e), n = qn(e, t);
    if (n !== null) {
      var r = ft();
      dn(n, e, t, r);
    }
    Pm(e, t);
  }
};
Kx = function() {
  return we;
};
Yx = function(e, t) {
  var n = we;
  try {
    return we = e, t();
  } finally {
    we = n;
  }
};
Xd = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ud(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = dc(r);
            if (!o)
              throw Error(j(90));
            Ax(r), Ud(r, o);
          }
        }
      }
      break;
    case "textarea":
      _x(e, n);
      break;
    case "select":
      t = n.value, t != null && oi(e, !!n.multiple, t, !1);
  }
};
Dx = km;
Lx = po;
var p5 = { usingClientEntryPoint: !1, Events: [Ds, Ko, dc, Mx, Nx, km] }, ol = { findFiberByHostInstance: to, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, h5 = { bundleType: ol.bundleType, version: ol.version, rendererPackageName: ol.rendererPackageName, rendererConfig: ol.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Xn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Bx(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ol.findFiberByHostInstance || f5, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ga = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ga.isDisabled && ga.supportsFiber)
    try {
      ac = ga.inject(h5), Cn = ga;
    } catch {
    }
}
Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = p5;
Ot.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Rm(t))
    throw Error(j(200));
  return c5(e, t, null, n);
};
Ot.createRoot = function(e, t) {
  if (!Rm(e))
    throw Error(j(299));
  var n = !1, r = "", o = xb;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Am(e, 1, !1, null, null, n, !1, r, o), e[Wn] = t.current, es(e.nodeType === 8 ? e.parentNode : e), new _m(t);
};
Ot.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e)));
  return e = Bx(t), e = e === null ? null : e.stateNode, e;
};
Ot.flushSync = function(e) {
  return po(e);
};
Ot.hydrate = function(e, t, n) {
  if (!bc(t))
    throw Error(j(200));
  return Sc(null, e, t, !0, n);
};
Ot.hydrateRoot = function(e, t, n) {
  if (!Rm(e))
    throw Error(j(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = xb;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = yb(t, null, e, 1, n != null ? n : null, o, !1, i, l), e[Wn] = t.current, es(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new wc(t);
};
Ot.render = function(e, t, n) {
  if (!bc(t))
    throw Error(j(200));
  return Sc(null, e, t, !1, n);
};
Ot.unmountComponentAtNode = function(e) {
  if (!bc(e))
    throw Error(j(40));
  return e._reactRootContainer ? (po(function() {
    Sc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Wn] = null;
    });
  }), !0) : !1;
};
Ot.unstable_batchedUpdates = km;
Ot.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!bc(n))
    throw Error(j(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(j(38));
  return Sc(e, t, n, !1, r);
};
Ot.version = "18.2.0-next-9e3b772b8-20220608";
(function(e) {
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), e.exports = Ot;
})(Kt);
const wb = /* @__PURE__ */ Mh(Kt.exports), Ei = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = m.exports.Children.toArray(n), i = o.find(g5);
  if (i) {
    const l = i.props.children, s = o.map((a) => a === i ? m.exports.Children.count(l) > 1 ? m.exports.Children.only(null) : /* @__PURE__ */ m.exports.isValidElement(l) ? l.props.children : null : a);
    return /* @__PURE__ */ m.exports.createElement(Rp, Z({}, r, {
      ref: t
    }), /* @__PURE__ */ m.exports.isValidElement(l) ? /* @__PURE__ */ m.exports.cloneElement(l, void 0, s) : null);
  }
  return /* @__PURE__ */ m.exports.createElement(Rp, Z({}, r, {
    ref: t
  }), n);
});
Ei.displayName = "Slot";
const Rp = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ m.exports.isValidElement(n) ? /* @__PURE__ */ m.exports.cloneElement(n, {
    ...v5(r, n.props),
    ref: yx(t, n.ref)
  }) : m.exports.Children.count(n) > 1 ? m.exports.Children.only(null) : null;
});
Rp.displayName = "SlotClone";
const m5 = ({ children: e }) => /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, e);
function g5(e) {
  return /* @__PURE__ */ m.exports.isValidElement(e) && e.type === m5;
}
function v5(e, t) {
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
const y5 = [
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
], Ve = y5.reduce((e, t) => {
  const n = /* @__PURE__ */ m.exports.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, s = i ? Ei : t;
    return m.exports.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ m.exports.createElement(s, Z({}, l, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function x5(e, t) {
  e && Kt.exports.flushSync(
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
function w5(e, t = globalThis == null ? void 0 : globalThis.document) {
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
const Ip = "dismissableLayer.update", b5 = "dismissableLayer.pointerDownOutside", S5 = "dismissableLayer.focusOutside";
let Z0;
const k5 = /* @__PURE__ */ m.exports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Im = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: i, onFocusOutside: l, onInteractOutside: s, onDismiss: a, ...u } = e, c = m.exports.useContext(k5), [f, d] = m.exports.useState(null), g = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = m.exports.useState({}), v = Ce(
    t,
    ($) => d($)
  ), w = Array.from(c.layers), [p] = [
    ...c.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = w.indexOf(p), x = f ? w.indexOf(f) : -1, b = c.layersWithOutsidePointerEventsDisabled.size > 0, A = x >= y, S = C5(($) => {
    const P = $.target, R = [
      ...c.branches
    ].some(
      (I) => I.contains(P)
    );
    !A || R || (i == null || i($), s == null || s($), $.defaultPrevented || a == null || a());
  }, g), E = $5(($) => {
    const P = $.target;
    [
      ...c.branches
    ].some(
      (I) => I.contains(P)
    ) || (l == null || l($), s == null || s($), $.defaultPrevented || a == null || a());
  }, g);
  return w5(($) => {
    x === c.layers.size - 1 && (o == null || o($), !$.defaultPrevented && a && ($.preventDefault(), a()));
  }, g), m.exports.useEffect(() => {
    if (!!f)
      return r && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Z0 = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), J0(), () => {
        r && c.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = Z0);
      };
  }, [
    f,
    g,
    r,
    c
  ]), m.exports.useEffect(() => () => {
    !f || (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), J0());
  }, [
    f,
    c
  ]), m.exports.useEffect(() => {
    const $ = () => h({});
    return document.addEventListener(Ip, $), () => document.removeEventListener(Ip, $);
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
function C5(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rt(e), r = m.exports.useRef(!1), o = m.exports.useRef(() => {
  });
  return m.exports.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let c = function() {
          bb(b5, n, u, {
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
function $5(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rt(e), r = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && bb(S5, n, {
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
function J0() {
  const e = new CustomEvent(Ip);
  document.dispatchEvent(e);
}
function bb(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? x5(o, i) : o.dispatchEvent(i);
}
let Lf = 0;
function Om() {
  m.exports.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : e1()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : e1()), Lf++, () => {
      Lf === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Lf--;
    };
  }, []);
}
function e1() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const Ff = "focusScope.autoFocusOnMount", zf = "focusScope.autoFocusOnUnmount", t1 = {
  bubbles: !1,
  cancelable: !0
}, Tm = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l } = e, [s, a] = m.exports.useState(null), u = rt(o), c = rt(i), f = m.exports.useRef(null), d = Ce(
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
      r1.add(g);
      const v = document.activeElement;
      if (!s.contains(v)) {
        const p = new CustomEvent(Ff, t1);
        s.addEventListener(Ff, u), s.dispatchEvent(p), p.defaultPrevented || (E5(I5(Sb(s)), {
          select: !0
        }), document.activeElement === v && Kr(s));
      }
      return () => {
        s.removeEventListener(Ff, u), setTimeout(() => {
          const p = new CustomEvent(zf, t1);
          s.addEventListener(zf, c), s.dispatchEvent(p), p.defaultPrevented || Kr(v != null ? v : document.body, {
            select: !0
          }), s.removeEventListener(zf, c), r1.remove(g);
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
      const y = v.currentTarget, [x, b] = A5(y);
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
  return /* @__PURE__ */ m.exports.createElement(Ve.div, Z({
    tabIndex: -1
  }, l, {
    ref: d,
    onKeyDown: h
  }));
});
function E5(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Kr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function A5(e) {
  const t = Sb(e), n = n1(t, e), r = n1(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Sb(e) {
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
function n1(e, t) {
  for (const n of e)
    if (!P5(n, {
      upTo: t
    }))
      return n;
}
function P5(e, { upTo: t }) {
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
function _5(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Kr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && _5(e) && t && e.select();
  }
}
const r1 = R5();
function R5() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = o1(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = o1(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function o1(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function I5(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Xe = Boolean(globalThis == null ? void 0 : globalThis.document) ? m.exports.useLayoutEffect : () => {
}, O5 = vx["useId".toString()] || (() => {
});
let T5 = 0;
function ci(e) {
  const [t, n] = m.exports.useState(O5());
  return Xe(() => {
    e || n(
      (r) => r != null ? r : String(T5++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function Co(e) {
  return e.split("-")[0];
}
function Fs(e) {
  return e.split("-")[1];
}
function zi(e) {
  return ["top", "bottom"].includes(Co(e)) ? "x" : "y";
}
function Mm(e) {
  return e === "y" ? "height" : "width";
}
function i1(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = r.x + r.width / 2 - o.width / 2, l = r.y + r.height / 2 - o.height / 2, s = zi(t), a = Mm(s), u = r[a] / 2 - o[a] / 2, c = Co(t), f = s === "x";
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
  switch (Fs(t)) {
    case "start":
      d[s] -= u * (n && f ? -1 : 1);
      break;
    case "end":
      d[s] += u * (n && f ? -1 : 1);
      break;
  }
  return d;
}
const M5 = async (e, t, n) => {
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
  } = i1(a, r, s), f = r, d = {}, g = 0;
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
      } = i1(a, f, s)), h = -1;
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
function N5(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function kb(e) {
  return typeof e != "number" ? N5(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Du(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function us(e, t) {
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
  } = t, h = kb(g), w = s[d ? f === "floating" ? "reference" : "floating" : f], p = Du(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: a
  })), y = Du(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const D5 = Math.min, Yr = Math.max;
function Op(e, t, n) {
  return Yr(e, D5(t, n));
}
const l1 = (e) => ({
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
    const u = kb(r), c = {
      x: o,
      y: i
    }, f = zi(l), d = Fs(l), g = Mm(f), h = await a.getDimensions(n), v = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", p = s.reference[g] + s.reference[f] - c[f] - s.floating[g], y = c[f] - s.reference[f], x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(n));
    let b = x ? f === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
    b === 0 && (b = s.floating[g]);
    const A = p / 2 - y / 2, S = u[v], E = b - h[g] - u[w], $ = b / 2 - h[g] / 2 + A, P = Op(S, $, E), T = (d === "start" ? u[v] : u[w]) > 0 && $ !== P && s.reference[g] <= s.floating[g] ? $ < S ? S - $ : E - $ : 0;
    return {
      [f]: c[f] - T,
      data: {
        [f]: P,
        centerOffset: $ - P
      }
    };
  }
}), L5 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Lu(e) {
  return e.replace(/left|right|bottom|top/g, (t) => L5[t]);
}
function F5(e, t, n) {
  n === void 0 && (n = !1);
  const r = Fs(e), o = zi(e), i = Mm(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = Lu(l)), {
    main: l,
    cross: Lu(l)
  };
}
const z5 = {
  start: "end",
  end: "start"
};
function s1(e) {
  return e.replace(/start|end/g, (t) => z5[t]);
}
const B5 = ["top", "right", "bottom", "left"];
function j5(e) {
  const t = Lu(e);
  return [s1(e), t, s1(t)];
}
const H5 = function(e) {
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
      } = e, v = Co(r), p = f || (v === l || !g ? [Lu(l)] : j5(l)), y = [l, ...p], x = await us(t, h), b = [];
      let A = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (u && b.push(x[v]), c) {
        const {
          main: P,
          cross: R
        } = F5(r, i, await (s.isRTL == null ? void 0 : s.isRTL(a.floating)));
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
        let I = "bottom";
        switch (d) {
          case "bestFit": {
            var $;
            const T = ($ = A.map((L) => [L, L.overflows.filter((B) => B > 0).reduce((B, z) => B + z, 0)]).sort((L, B) => L[1] - B[1])[0]) == null ? void 0 : $[0].placement;
            T && (I = T);
            break;
          }
          case "initialPlacement":
            I = l;
            break;
        }
        if (r !== I)
          return {
            reset: {
              placement: I
            }
          };
      }
      return {};
    }
  };
};
function a1(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function u1(e) {
  return B5.some((t) => e[t] >= 0);
}
const V5 = function(e) {
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
          const i = await us(r, {
            ...n,
            elementContext: "reference"
          }), l = a1(i, o.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: u1(l)
            }
          };
        }
        case "escaped": {
          const i = await us(r, {
            ...n,
            altBoundary: !0
          }), l = a1(i, o.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: u1(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function U5(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = Co(n), s = Fs(n), a = zi(n) === "x", u = ["left", "top"].includes(l) ? -1 : 1, c = i && a ? -1 : 1, f = typeof t == "function" ? t(e) : t;
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
const W5 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await U5(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
};
function Cb(e) {
  return e === "x" ? "y" : "x";
}
const q5 = function(e) {
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
      }, c = await us(t, a), f = zi(Co(o)), d = Cb(f);
      let g = u[f], h = u[d];
      if (i) {
        const w = f === "y" ? "top" : "left", p = f === "y" ? "bottom" : "right", y = g + c[w], x = g - c[p];
        g = Op(y, g, x);
      }
      if (l) {
        const w = d === "y" ? "top" : "left", p = d === "y" ? "bottom" : "right", y = h + c[w], x = h - c[p];
        h = Op(y, h, x);
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
}, Q5 = function(e) {
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
      }, f = zi(o), d = Cb(f);
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
        const A = f === "y" ? "height" : "width", S = i.reference[f] - i.floating[A] + w.mainAxis, E = i.reference[f] + i.reference[A] - w.mainAxis;
        g < S ? g = S : g > E && (g = E);
      }
      if (u) {
        var p, y, x, b;
        const A = f === "y" ? "width" : "height", S = ["top", "left"].includes(Co(o)), E = i.reference[d] - i.floating[A] + (S && (p = (y = l.offset) == null ? void 0 : y[d]) != null ? p : 0) + (S ? 0 : w.crossAxis), $ = i.reference[d] + i.reference[A] + (S ? 0 : (x = (b = l.offset) == null ? void 0 : b[d]) != null ? x : 0) - (S ? w.crossAxis : 0);
        h < E ? h = E : h > $ && (h = $);
      }
      return {
        [f]: g,
        [d]: h
      };
    }
  };
}, G5 = function(e) {
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
      } = e, a = await us(t, s), u = Co(n), c = Fs(n);
      let f, d;
      u === "top" || u === "bottom" ? (f = u, d = c === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (d = u, f = c === "end" ? "top" : "bottom");
      const g = Yr(a.left, 0), h = Yr(a.right, 0), v = Yr(a.top, 0), w = Yr(a.bottom, 0), p = {
        availableHeight: r.floating.height - (["left", "right"].includes(n) ? 2 * (v !== 0 || w !== 0 ? v + w : Yr(a.top, a.bottom)) : a[f]),
        availableWidth: r.floating.width - (["top", "bottom"].includes(n) ? 2 * (g !== 0 || h !== 0 ? g + h : Yr(a.left, a.right)) : a[d])
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
function $b(e) {
  return e && e.document && e.location && e.alert && e.setInterval;
}
function Zn(e) {
  if (e == null)
    return window;
  if (!$b(e)) {
    const t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function zs(e) {
  return Zn(e).getComputedStyle(e);
}
function Gn(e) {
  return $b(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function Eb() {
  const e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map((t) => t.brand + "/" + t.version).join(" ") : navigator.userAgent;
}
function En(e) {
  return e instanceof Zn(e).HTMLElement;
}
function Dr(e) {
  return e instanceof Zn(e).Element;
}
function K5(e) {
  return e instanceof Zn(e).Node;
}
function Nm(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Zn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function kc(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r
  } = zs(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n);
}
function Y5(e) {
  return ["table", "td", "th"].includes(Gn(e));
}
function Ab(e) {
  const t = /firefox/i.test(Eb()), n = zs(e);
  return n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].includes(n.willChange) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1);
}
function Pb() {
  return !/^((?!chrome|android).)*safari/i.test(Eb());
}
const c1 = Math.min, Ml = Math.max, Fu = Math.round;
function Kn(e, t, n) {
  var r, o, i, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect();
  let a = 1, u = 1;
  t && En(e) && (a = e.offsetWidth > 0 && Fu(s.width) / e.offsetWidth || 1, u = e.offsetHeight > 0 && Fu(s.height) / e.offsetHeight || 1);
  const c = Dr(e) ? Zn(e) : window, f = !Pb() && n, d = (s.left + (f && (r = (o = c.visualViewport) == null ? void 0 : o.offsetLeft) != null ? r : 0)) / a, g = (s.top + (f && (i = (l = c.visualViewport) == null ? void 0 : l.offsetTop) != null ? i : 0)) / u, h = s.width / a, v = s.height / u;
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
function Br(e) {
  return ((K5(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Cc(e) {
  return Dr(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function _b(e) {
  return Kn(Br(e)).left + Cc(e).scrollLeft;
}
function X5(e) {
  const t = Kn(e);
  return Fu(t.width) !== e.offsetWidth || Fu(t.height) !== e.offsetHeight;
}
function Z5(e, t, n) {
  const r = En(t), o = Br(t), i = Kn(
    e,
    r && X5(t),
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
    if ((Gn(t) !== "body" || kc(o)) && (l = Cc(t)), En(t)) {
      const a = Kn(t, !0);
      s.x = a.x + t.clientLeft, s.y = a.y + t.clientTop;
    } else
      o && (s.x = _b(o));
  return {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function Rb(e) {
  return Gn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Nm(e) ? e.host : null) || Br(e);
}
function f1(e) {
  return !En(e) || getComputedStyle(e).position === "fixed" ? null : e.offsetParent;
}
function J5(e) {
  let t = Rb(e);
  for (Nm(t) && (t = t.host); En(t) && !["html", "body"].includes(Gn(t)); ) {
    if (Ab(t))
      return t;
    t = t.parentNode;
  }
  return null;
}
function Tp(e) {
  const t = Zn(e);
  let n = f1(e);
  for (; n && Y5(n) && getComputedStyle(n).position === "static"; )
    n = f1(n);
  return n && (Gn(n) === "html" || Gn(n) === "body" && getComputedStyle(n).position === "static" && !Ab(n)) ? t : n || J5(e) || t;
}
function d1(e) {
  if (En(e))
    return {
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const t = Kn(e);
  return {
    width: t.width,
    height: t.height
  };
}
function eA(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = En(n), i = Br(n);
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
  if ((o || !o && r !== "fixed") && ((Gn(n) !== "body" || kc(i)) && (l = Cc(n)), En(n))) {
    const a = Kn(n, !0);
    s.x = a.x + n.clientLeft, s.y = a.y + n.clientTop;
  }
  return {
    ...t,
    x: t.x - l.scrollLeft + s.x,
    y: t.y - l.scrollTop + s.y
  };
}
function tA(e, t) {
  const n = Zn(e), r = Br(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, s = 0, a = 0;
  if (o) {
    i = o.width, l = o.height;
    const u = Pb();
    (u || !u && t === "fixed") && (s = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s,
    y: a
  };
}
function nA(e) {
  var t;
  const n = Br(e), r = Cc(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ml(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = Ml(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let s = -r.scrollLeft + _b(e);
  const a = -r.scrollTop;
  return zs(o || n).direction === "rtl" && (s += Ml(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: l,
    x: s,
    y: a
  };
}
function Ib(e) {
  const t = Rb(e);
  return ["html", "body", "#document"].includes(Gn(t)) ? e.ownerDocument.body : En(t) && kc(t) ? t : Ib(t);
}
function zu(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Ib(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Zn(r), l = o ? [i].concat(i.visualViewport || [], kc(r) ? r : []) : r, s = t.concat(l);
  return o ? s : s.concat(zu(l));
}
function rA(e, t) {
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Nm(n)) {
    let r = t;
    do {
      if (r && e === r)
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function oA(e, t) {
  const n = Kn(e, !1, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft;
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
function p1(e, t, n) {
  return t === "viewport" ? Du(tA(e, n)) : Dr(t) ? oA(t, n) : Du(nA(Br(e)));
}
function iA(e) {
  const t = zu(e), r = ["absolute", "fixed"].includes(zs(e).position) && En(e) ? Tp(e) : e;
  return Dr(r) ? t.filter((o) => Dr(o) && rA(o, r) && Gn(o) !== "body") : [];
}
function lA(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? iA(t) : [].concat(n), r], s = l[0], a = l.reduce((u, c) => {
    const f = p1(t, c, o);
    return u.top = Ml(f.top, u.top), u.right = c1(f.right, u.right), u.bottom = c1(f.bottom, u.bottom), u.left = Ml(f.left, u.left), u;
  }, p1(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
const sA = {
  getClippingRect: lA,
  convertOffsetParentRelativeRectToViewportRelativeRect: eA,
  isElement: Dr,
  getDimensions: d1,
  getOffsetParent: Tp,
  getDocumentElement: Br,
  getElementRects: (e) => {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    return {
      reference: Z5(t, Tp(n), r),
      floating: {
        ...d1(n),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => zs(e).direction === "rtl"
};
function aA(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = !0,
    animationFrame: s = !1
  } = r, a = o && !s, u = i && !s, c = a || u ? [...Dr(e) ? zu(e) : [], ...zu(t)] : [];
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
    }), Dr(e) && !s && f.observe(e), f.observe(t);
  }
  let d, g = s ? Kn(e) : null;
  s && h();
  function h() {
    const v = Kn(e);
    g && (v.x !== g.x || v.y !== g.y || v.width !== g.width || v.height !== g.height) && n(), g = v, d = requestAnimationFrame(h);
  }
  return n(), () => {
    var v;
    c.forEach((w) => {
      a && w.removeEventListener("scroll", n), u && w.removeEventListener("resize", n);
    }), (v = f) == null || v.disconnect(), f = null, s && cancelAnimationFrame(d);
  };
}
const uA = (e, t, n) => M5(e, t, {
  platform: sA,
  ...n
});
var Mp = typeof document < "u" ? m.exports.useLayoutEffect : m.exports.useEffect;
function Np(e, t) {
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
        if (!Np(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !Np(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function cA(e) {
  const t = m.exports.useRef(e);
  return Mp(() => {
    t.current = e;
  }), t;
}
function fA(e) {
  let {
    middleware: t,
    placement: n = "bottom",
    strategy: r = "absolute",
    whileElementsMounted: o
  } = e === void 0 ? {} : e;
  const i = m.exports.useRef(null), l = m.exports.useRef(null), s = cA(o), a = m.exports.useRef(null), [u, c] = m.exports.useState({
    x: null,
    y: null,
    strategy: r,
    placement: n,
    middlewareData: {}
  }), [f, d] = m.exports.useState(t);
  Np(f == null ? void 0 : f.map((x) => {
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
    !i.current || !l.current || uA(i.current, l.current, {
      middleware: f,
      placement: n,
      strategy: r
    }).then((x) => {
      h.current && Kt.exports.flushSync(() => {
        c(x);
      });
    });
  }, [f, n, r]);
  Mp(() => {
    h.current && g();
  }, [g]);
  const h = m.exports.useRef(!1);
  Mp(() => (h.current = !0, () => {
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
const dA = (e) => {
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
      return r(t) ? t.current != null ? l1({
        element: t.current,
        padding: n
      }).fn(o) : {} : t ? l1({
        element: t,
        padding: n
      }).fn(o) : {};
    }
  };
};
function pA(e) {
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
const Ob = "Popper", [Dm, $c] = Di(Ob), [hA, Tb] = Dm(Ob), mA = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.exports.useState(null);
  return /* @__PURE__ */ m.exports.createElement(hA, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, gA = "PopperAnchor", vA = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, i = Tb(gA, n), l = m.exports.useRef(null), s = Ce(t, l);
  return m.exports.useEffect(() => {
    i.onAnchorChange((r == null ? void 0 : r.current) || l.current);
  }), r ? null : /* @__PURE__ */ m.exports.createElement(Ve.div, Z({}, o, {
    ref: s
  }));
}), Bu = "PopperContent", [yA, yz] = Dm(Bu), [xA, wA] = Dm(Bu, {
  hasParent: !1,
  positionUpdateFns: /* @__PURE__ */ new Set()
}), bA = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n, r, o, i, l, s, a, u;
  const { __scopePopper: c, side: f = "bottom", sideOffset: d = 0, align: g = "center", alignOffset: h = 0, arrowPadding: v = 0, collisionBoundary: w = [], collisionPadding: p = 0, sticky: y = "partial", hideWhenDetached: x = !1, avoidCollisions: b = !0, onPlaced: A, ...S } = e, E = Tb(Bu, c), [$, P] = m.exports.useState(null), R = Ce(
    t,
    (ir) => P(ir)
  ), [I, T] = m.exports.useState(null), L = pA(I), B = (n = L == null ? void 0 : L.width) !== null && n !== void 0 ? n : 0, z = (r = L == null ? void 0 : L.height) !== null && r !== void 0 ? r : 0, _ = f + (g !== "center" ? "-" + g : ""), H = typeof p == "number" ? p : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...p
  }, N = Array.isArray(w) ? w : [
    w
  ], O = N.length > 0, M = {
    padding: H,
    boundary: N.filter(kA),
    altBoundary: O
  }, { reference: k, floating: C, strategy: J, x: ne, y: se, placement: ee, middlewareData: Q, update: ie } = fA({
    strategy: "fixed",
    placement: _,
    whileElementsMounted: aA,
    middleware: [
      CA(),
      W5({
        mainAxis: d + z,
        alignmentAxis: h
      }),
      b ? q5({
        mainAxis: !0,
        crossAxis: !1,
        limiter: y === "partial" ? Q5() : void 0,
        ...M
      }) : void 0,
      I ? dA({
        element: I,
        padding: v
      }) : void 0,
      b ? H5({
        ...M
      }) : void 0,
      G5({
        ...M,
        apply: ({ elements: ir, availableWidth: sf, availableHeight: af }) => {
          ir.floating.style.setProperty("--radix-popper-available-width", `${sf}px`), ir.floating.style.setProperty("--radix-popper-available-height", `${af}px`);
        }
      }),
      $A({
        arrowWidth: B,
        arrowHeight: z
      }),
      x ? V5({
        strategy: "referenceHidden"
      }) : void 0
    ].filter(SA)
  });
  Xe(() => {
    k(E.anchor);
  }, [
    k,
    E.anchor
  ]);
  const xe = ne !== null && se !== null, [ue, de] = Mb(ee), ae = rt(A);
  Xe(() => {
    xe && (ae == null || ae());
  }, [
    xe,
    ae
  ]);
  const lt = (o = Q.arrow) === null || o === void 0 ? void 0 : o.x, st = (i = Q.arrow) === null || i === void 0 ? void 0 : i.y, Vr = ((l = Q.arrow) === null || l === void 0 ? void 0 : l.centerOffset) !== 0, [tr, nr] = m.exports.useState();
  Xe(() => {
    $ && nr(window.getComputedStyle($).zIndex);
  }, [
    $
  ]);
  const { hasParent: Js, positionUpdateFns: rr } = wA(Bu, c), or = !Js;
  m.exports.useLayoutEffect(() => {
    if (!or)
      return rr.add(ie), () => {
        rr.delete(ie);
      };
  }, [
    or,
    rr,
    ie
  ]), Xe(() => {
    or && xe && Array.from(rr).reverse().forEach(
      (ir) => requestAnimationFrame(ir)
    );
  }, [
    or,
    xe,
    rr
  ]);
  const Gi = {
    "data-side": ue,
    "data-align": de,
    ...S,
    ref: R,
    style: {
      ...S.style,
      animation: xe ? void 0 : "none",
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
      transform: xe ? `translate3d(${Math.round(ne)}px, ${Math.round(se)}px, 0)` : "translate3d(0, -200%, 0)",
      minWidth: "max-content",
      zIndex: tr,
      ["--radix-popper-transform-origin"]: [
        (a = Q.transformOrigin) === null || a === void 0 ? void 0 : a.x,
        (u = Q.transformOrigin) === null || u === void 0 ? void 0 : u.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ m.exports.createElement(yA, {
    scope: c,
    placedSide: ue,
    onArrowChange: T,
    arrowX: lt,
    arrowY: st,
    shouldHideArrow: Vr
  }, or ? /* @__PURE__ */ m.exports.createElement(xA, {
    scope: c,
    hasParent: !0,
    positionUpdateFns: rr
  }, /* @__PURE__ */ m.exports.createElement(Ve.div, Gi)) : /* @__PURE__ */ m.exports.createElement(Ve.div, Gi)));
});
function SA(e) {
  return e !== void 0;
}
function kA(e) {
  return e !== null;
}
const CA = () => ({
  name: "anchorCssProperties",
  fn(e) {
    const { rects: t, elements: n } = e, { width: r, height: o } = t.reference;
    return n.floating.style.setProperty("--radix-popper-anchor-width", `${r}px`), n.floating.style.setProperty("--radix-popper-anchor-height", `${o}px`), {};
  }
}), $A = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, i, l;
    const { placement: s, rects: a, middlewareData: u } = t, f = ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, d = f ? 0 : e.arrowWidth, g = f ? 0 : e.arrowHeight, [h, v] = Mb(s), w = {
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
function Mb(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Nb = mA, Db = vA, Lb = bA, Fb = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ wb.createPortal(/* @__PURE__ */ m.exports.createElement(Ve.div, Z({}, o, {
    ref: t
  })), r) : null;
});
function EA(e, t) {
  return m.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const jr = (e) => {
  const { present: t, children: n } = e, r = AA(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : m.exports.Children.only(n), i = Ce(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ m.exports.cloneElement(o, {
    ref: i
  }) : null;
};
jr.displayName = "Presence";
function AA(e) {
  const [t, n] = m.exports.useState(), r = m.exports.useRef({}), o = m.exports.useRef(e), i = m.exports.useRef("none"), l = e ? "mounted" : "unmounted", [s, a] = EA(l, {
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
    const u = va(r.current);
    i.current = s === "mounted" ? u : "none";
  }, [
    s
  ]), Xe(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const d = i.current, g = va(u);
      e ? a("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(c && d !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    a
  ]), Xe(() => {
    if (t) {
      const u = (f) => {
        const g = va(r.current).includes(f.animationName);
        f.target === t && g && Kt.exports.flushSync(
          () => a("ANIMATION_END")
        );
      }, c = (f) => {
        f.target === t && (i.current = va(r.current));
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
function va(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ju({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = PA({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, l = i ? e : r, s = rt(n), a = m.exports.useCallback((u) => {
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
function PA({ defaultProp: e, onChange: t }) {
  const n = m.exports.useState(e), [r] = n, o = m.exports.useRef(r), i = rt(t);
  return m.exports.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
var _A = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Oo = /* @__PURE__ */ new WeakMap(), ya = /* @__PURE__ */ new WeakMap(), xa = {}, Bf = 0, zb = function(e) {
  return e && (e.host || zb(e.parentNode));
}, RA = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = zb(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, IA = function(e, t, n, r) {
  var o = RA(t, Array.isArray(e) ? e : [e]);
  xa[n] || (xa[n] = /* @__PURE__ */ new WeakMap());
  var i = xa[n], l = [], s = /* @__PURE__ */ new Set(), a = new Set(o), u = function(f) {
    !f || s.has(f) || (s.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var c = function(f) {
    !f || a.has(f) || Array.prototype.forEach.call(f.children, function(d) {
      if (s.has(d))
        c(d);
      else {
        var g = d.getAttribute(r), h = g !== null && g !== "false", v = (Oo.get(d) || 0) + 1, w = (i.get(d) || 0) + 1;
        Oo.set(d, v), i.set(d, w), l.push(d), v === 1 && h && ya.set(d, !0), w === 1 && d.setAttribute(n, "true"), h || d.setAttribute(r, "true");
      }
    });
  };
  return c(t), s.clear(), Bf++, function() {
    l.forEach(function(f) {
      var d = Oo.get(f) - 1, g = i.get(f) - 1;
      Oo.set(f, d), i.set(f, g), d || (ya.has(f) || f.removeAttribute(r), ya.delete(f)), g || f.removeAttribute(n);
    }), Bf--, Bf || (Oo = /* @__PURE__ */ new WeakMap(), Oo = /* @__PURE__ */ new WeakMap(), ya = /* @__PURE__ */ new WeakMap(), xa = {});
  };
}, Lm = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || _A(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), IA(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Sn = function() {
  return Sn = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Sn.apply(this, arguments);
};
function Bb(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function OA(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Za = "right-scroll-bar-position", Ja = "width-before-scroll-bar", TA = "with-scroll-bars-hidden", MA = "--removed-body-scroll-bar-size";
function NA(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function DA(e, t) {
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
function LA(e, t) {
  return DA(t || null, function(n) {
    return e.forEach(function(r) {
      return NA(r, n);
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
var FA = m.exports, zA = Symbol.for("react.element"), BA = Symbol.for("react.fragment"), jA = Object.prototype.hasOwnProperty, HA = FA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, VA = { key: !0, ref: !0, __self: !0, __source: !0 };
function jb(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t)
    jA.call(t, r) && !VA.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: zA, type: e, key: i, ref: l, props: o, _owner: HA.current };
}
Ac.Fragment = BA;
Ac.jsx = jb;
Ac.jsxs = jb;
(function(e) {
  e.exports = Ac;
})(Ec);
const Mt = Ec.exports.Fragment, D = Ec.exports.jsx, ce = Ec.exports.jsxs;
function UA(e) {
  return e;
}
function WA(e, t) {
  t === void 0 && (t = UA);
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
function qA(e) {
  e === void 0 && (e = {});
  var t = WA(null);
  return t.options = Sn({ async: !0, ssr: !1 }, e), t;
}
var Hb = function(e) {
  var t = e.sideCar, n = Bb(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return /* @__PURE__ */ D(r, {
    ...Sn({}, n)
  });
};
Hb.isSideCarExport = !0;
function QA(e, t) {
  return e.useMedium(t), Hb;
}
var Vb = qA(), jf = function() {
}, Pc = m.exports.forwardRef(function(e, t) {
  var n = m.exports.useRef(null), r = m.exports.useState({
    onScrollCapture: jf,
    onWheelCapture: jf,
    onTouchMoveCapture: jf
  }), o = r[0], i = r[1], l = e.forwardProps, s = e.children, a = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, g = e.noIsolation, h = e.inert, v = e.allowPinchZoom, w = e.as, p = w === void 0 ? "div" : w, y = Bb(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = d, b = LA([n, t]), A = Sn(Sn({}, y), o);
  return /* @__PURE__ */ ce(Mt, {
    children: [c && /* @__PURE__ */ D(x, {
      sideCar: Vb,
      removeScrollBar: u,
      shards: f,
      noIsolation: g,
      inert: h,
      setCallbacks: i,
      allowPinchZoom: !!v,
      lockRef: n
    }), l ? m.exports.cloneElement(m.exports.Children.only(s), Sn(Sn({}, A), {
      ref: b
    })) : /* @__PURE__ */ D(p, {
      ...Sn({}, A, {
        className: a,
        ref: b
      }),
      children: s
    })]
  });
});
Pc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Pc.classNames = {
  fullWidth: Ja,
  zeroRight: Za
};
var GA = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function KA() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = GA();
  return t && e.setAttribute("nonce", t), e;
}
function YA(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function XA(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ZA = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = KA()) && (YA(t, n), XA(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, JA = function() {
  var e = ZA();
  return function(t, n) {
    m.exports.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ub = function() {
  var e = JA(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, e3 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Hf = function(e) {
  return parseInt(e || "", 10) || 0;
}, t3 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Hf(n), Hf(r), Hf(o)];
}, n3 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return e3;
  var t = t3(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, r3 = Ub(), o3 = function(e, t, n, r) {
  var o = e.left, i = e.top, l = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(TA, ` {
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
  
  .`).concat(Za, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Ja, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Za, " .").concat(Za, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ja, " .").concat(Ja, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(MA, ": ").concat(s, `px;
  }
`);
}, i3 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = m.exports.useMemo(function() {
    return n3(o);
  }, [o]);
  return /* @__PURE__ */ D(r3, {
    styles: o3(i, !t, o, n ? "" : "!important")
  });
}, Dp = !1;
if (typeof window < "u")
  try {
    var wa = Object.defineProperty({}, "passive", {
      get: function() {
        return Dp = !0, !0;
      }
    });
    window.addEventListener("test", wa, wa), window.removeEventListener("test", wa, wa);
  } catch {
    Dp = !1;
  }
var To = Dp ? { passive: !1 } : !1, l3 = function(e) {
  return e.tagName === "TEXTAREA";
}, Wb = function(e, t) {
  var n = window.getComputedStyle(e);
  return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !l3(e) && n[t] === "visible");
}, s3 = function(e) {
  return Wb(e, "overflowY");
}, a3 = function(e) {
  return Wb(e, "overflowX");
}, h1 = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = qb(e, n);
    if (r) {
      var o = Qb(e, n), i = o[1], l = o[2];
      if (i > l)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, u3 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, c3 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, qb = function(e, t) {
  return e === "v" ? s3(t) : a3(t);
}, Qb = function(e, t) {
  return e === "v" ? u3(t) : c3(t);
}, f3 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, d3 = function(e, t, n, r, o) {
  var i = f3(e, window.getComputedStyle(t).direction), l = i * r, s = n.target, a = t.contains(s), u = !1, c = l > 0, f = 0, d = 0;
  do {
    var g = Qb(e, s), h = g[0], v = g[1], w = g[2], p = v - w - i * h;
    (h || p) && qb(e, s) && (f += p, d += h), s = s.parentNode;
  } while (!a && s !== document.body || a && (t.contains(s) || t === s));
  return (c && (o && f === 0 || !o && l > f) || !c && (o && d === 0 || !o && -l > d)) && (u = !0), u;
}, ba = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, m1 = function(e) {
  return [e.deltaX, e.deltaY];
}, g1 = function(e) {
  return e && "current" in e ? e.current : e;
}, p3 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, h3 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, m3 = 0, Mo = [];
function g3(e) {
  var t = m.exports.useRef([]), n = m.exports.useRef([0, 0]), r = m.exports.useRef(), o = m.exports.useState(m3++)[0], i = m.exports.useState(function() {
    return Ub();
  })[0], l = m.exports.useRef(e);
  m.exports.useEffect(function() {
    l.current = e;
  }, [e]), m.exports.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = OA([e.lockRef.current], (e.shards || []).map(g1), !0).filter(Boolean);
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
    var p = ba(v), y = n.current, x = "deltaX" in v ? v.deltaX : y[0] - p[0], b = "deltaY" in v ? v.deltaY : y[1] - p[1], A, S = v.target, E = Math.abs(x) > Math.abs(b) ? "h" : "v";
    if ("touches" in v && E === "h" && S.type === "range")
      return !1;
    var $ = h1(E, S);
    if (!$)
      return !0;
    if ($ ? A = E : (A = E === "v" ? "h" : "v", $ = h1(E, S)), !$)
      return !1;
    if (!r.current && "changedTouches" in v && (x || b) && (r.current = A), !A)
      return !0;
    var P = r.current || A;
    return d3(P, w, v, P === "h" ? x : b, !0);
  }, []), a = m.exports.useCallback(function(v) {
    var w = v;
    if (!(!Mo.length || Mo[Mo.length - 1] !== i)) {
      var p = "deltaY" in w ? m1(w) : ba(w), y = t.current.filter(function(A) {
        return A.name === w.type && A.target === w.target && p3(A.delta, p);
      })[0];
      if (y && y.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!y) {
        var x = (l.current.shards || []).map(g1).filter(Boolean).filter(function(A) {
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
    n.current = ba(v), r.current = void 0;
  }, []), f = m.exports.useCallback(function(v) {
    u(v.type, m1(v), v.target, s(v, e.lockRef.current));
  }, []), d = m.exports.useCallback(function(v) {
    u(v.type, ba(v), v.target, s(v, e.lockRef.current));
  }, []);
  m.exports.useEffect(function() {
    return Mo.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", a, To), document.addEventListener("touchmove", a, To), document.addEventListener("touchstart", c, To), function() {
      Mo = Mo.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", a, To), document.removeEventListener("touchmove", a, To), document.removeEventListener("touchstart", c, To);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return /* @__PURE__ */ ce(Mt, {
    children: [h ? /* @__PURE__ */ D(i, {
      styles: h3(o)
    }) : null, g ? /* @__PURE__ */ D(i3, {
      gapMode: "margin"
    }) : null]
  });
}
const v3 = QA(Vb, g3);
var Gb = m.exports.forwardRef(function(e, t) {
  return /* @__PURE__ */ D(Pc, {
    ...Sn({}, e, {
      ref: t,
      sideCar: v3
    })
  });
});
Gb.classNames = Pc.classNames;
const Kb = Gb, Yb = "Popover", [Xb, xz] = Di(Yb, [
  $c
]), Fm = $c(), [y3, Bs] = Xb(Yb), x3 = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !1 } = e, s = Fm(t), a = m.exports.useRef(null), [u, c] = m.exports.useState(!1), [f = !1, d] = ju({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(Nb, s, /* @__PURE__ */ m.exports.createElement(y3, {
    scope: t,
    contentId: ci(),
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
}, w3 = "PopoverTrigger", b3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopover: n, ...r } = e, o = Bs(w3, n), i = Fm(n), l = Ce(t, o.triggerRef), s = /* @__PURE__ */ m.exports.createElement(Ve.button, Z({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Jb(o.open)
  }, r, {
    ref: l,
    onClick: ye(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? s : /* @__PURE__ */ m.exports.createElement(Db, Z({
    asChild: !0
  }, i), s);
}), S3 = "PopoverPortal", [wz, k3] = Xb(S3, {
  forceMount: void 0
}), cs = "PopoverContent", C3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = k3(cs, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = Bs(cs, e.__scopePopover);
  return /* @__PURE__ */ m.exports.createElement(jr, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement($3, Z({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(E3, Z({}, o, {
    ref: t
  })));
}), $3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Bs(cs, e.__scopePopover), r = m.exports.useRef(null), o = Ce(t, r), i = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const l = r.current;
    if (l)
      return Lm(l);
  }, []), /* @__PURE__ */ m.exports.createElement(Kb, {
    as: Ei,
    allowPinchZoom: !0
  }, /* @__PURE__ */ m.exports.createElement(Zb, Z({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ye(e.onCloseAutoFocus, (l) => {
      var s;
      l.preventDefault(), i.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: ye(e.onPointerDownOutside, (l) => {
      const s = l.detail.originalEvent, a = s.button === 0 && s.ctrlKey === !0, u = s.button === 2 || a;
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
}), E3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Bs(cs, e.__scopePopover), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement(Zb, Z({}, e, {
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
}), Zb = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, disableOutsidePointerEvents: l, onEscapeKeyDown: s, onPointerDownOutside: a, onFocusOutside: u, onInteractOutside: c, ...f } = e, d = Bs(cs, n), g = Fm(n);
  return Om(), /* @__PURE__ */ m.exports.createElement(Tm, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ m.exports.createElement(Im, {
    asChild: !0,
    disableOutsidePointerEvents: l,
    onInteractOutside: c,
    onEscapeKeyDown: s,
    onPointerDownOutside: a,
    onFocusOutside: u,
    onDismiss: () => d.onOpenChange(!1)
  }, /* @__PURE__ */ m.exports.createElement(Lb, Z({
    "data-state": Jb(d.open),
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
function Jb(e) {
  return e ? "open" : "closed";
}
const A3 = x3, P3 = b3, _3 = C3, eS = "Dialog", [tS, bz] = Di(eS), [R3, js] = tS(eS), I3 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !0 } = e, s = m.exports.useRef(null), a = m.exports.useRef(null), [u = !1, c] = ju({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(R3, {
    scope: t,
    triggerRef: s,
    contentRef: a,
    contentId: ci(),
    titleId: ci(),
    descriptionId: ci(),
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
}, nS = "DialogPortal", [O3, T3] = tS(nS, {
  forceMount: void 0
}), M3 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = js(nS, t);
  return /* @__PURE__ */ m.exports.createElement(O3, {
    scope: t,
    forceMount: n
  }, m.exports.Children.map(
    r,
    (l) => /* @__PURE__ */ m.exports.createElement(jr, {
      present: n || i.open
    }, /* @__PURE__ */ m.exports.createElement(Fb, {
      asChild: !0,
      container: o
    }, l))
  ));
}, fs = "DialogContent", N3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = T3(fs, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = js(fs, e.__scopeDialog);
  return /* @__PURE__ */ m.exports.createElement(jr, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement(D3, Z({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(L3, Z({}, o, {
    ref: t
  })));
}), D3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = js(fs, e.__scopeDialog), r = m.exports.useRef(null), o = Ce(t, n.contentRef, r);
  return m.exports.useEffect(() => {
    const i = r.current;
    if (i)
      return Lm(i);
  }, []), /* @__PURE__ */ m.exports.createElement(rS, Z({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ye(e.onCloseAutoFocus, (i) => {
      var l;
      i.preventDefault(), (l = n.triggerRef.current) === null || l === void 0 || l.focus();
    }),
    onPointerDownOutside: ye(e.onPointerDownOutside, (i) => {
      const l = i.detail.originalEvent, s = l.button === 0 && l.ctrlKey === !0;
      (l.button === 2 || s) && i.preventDefault();
    }),
    onFocusOutside: ye(
      e.onFocusOutside,
      (i) => i.preventDefault()
    )
  }));
}), L3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = js(fs, e.__scopeDialog), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement(rS, Z({}, e, {
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
}), rS = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, s = js(fs, n), a = m.exports.useRef(null), u = Ce(t, a);
  return Om(), /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement(Tm, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ m.exports.createElement(Im, Z({
    role: "dialog",
    id: s.contentId,
    "aria-describedby": s.descriptionId,
    "aria-labelledby": s.titleId,
    "data-state": F3(s.open)
  }, l, {
    ref: u,
    onDismiss: () => s.onOpenChange(!1)
  }))), !1);
});
function F3(e) {
  return e ? "open" : "closed";
}
const z3 = I3, B3 = M3, j3 = N3;
function dt() {
  return dt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, dt.apply(this, arguments);
}
function fi(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function H3(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function oS(...e) {
  return (t) => e.forEach(
    (n) => H3(n, t)
  );
}
function Hs(...e) {
  return m.exports.useCallback(oS(...e), e);
}
function V3(e, t = []) {
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
    U3(o, ...t)
  ];
}
function U3(...e) {
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
const Lp = Boolean(globalThis == null ? void 0 : globalThis.document) ? m.exports.useLayoutEffect : () => {
}, W3 = vx["useId".toString()] || (() => {
});
let q3 = 0;
function Vf(e) {
  const [t, n] = m.exports.useState(W3());
  return Lp(() => {
    e || n(
      (r) => r != null ? r : String(q3++)
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
function Q3({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = G3({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, l = i ? e : r, s = ho(n), a = m.exports.useCallback((u) => {
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
function G3({ defaultProp: e, onChange: t }) {
  const n = m.exports.useState(e), [r] = n, o = m.exports.useRef(r), i = ho(t);
  return m.exports.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
const zm = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = m.exports.Children.toArray(n), i = o.find(Y3);
  if (i) {
    const l = i.props.children, s = o.map((a) => a === i ? m.exports.Children.count(l) > 1 ? m.exports.Children.only(null) : /* @__PURE__ */ m.exports.isValidElement(l) ? l.props.children : null : a);
    return /* @__PURE__ */ m.exports.createElement(Fp, dt({}, r, {
      ref: t
    }), /* @__PURE__ */ m.exports.isValidElement(l) ? /* @__PURE__ */ m.exports.cloneElement(l, void 0, s) : null);
  }
  return /* @__PURE__ */ m.exports.createElement(Fp, dt({}, r, {
    ref: t
  }), n);
});
zm.displayName = "Slot";
const Fp = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ m.exports.isValidElement(n) ? /* @__PURE__ */ m.exports.cloneElement(n, {
    ...X3(r, n.props),
    ref: oS(t, n.ref)
  }) : m.exports.Children.count(n) > 1 ? m.exports.Children.only(null) : null;
});
Fp.displayName = "SlotClone";
const K3 = ({ children: e }) => /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, e);
function Y3(e) {
  return /* @__PURE__ */ m.exports.isValidElement(e) && e.type === K3;
}
function X3(e, t) {
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
const Z3 = [
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
], _c = Z3.reduce((e, t) => {
  const n = /* @__PURE__ */ m.exports.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, s = i ? zm : t;
    return m.exports.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ m.exports.createElement(s, dt({}, l, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function J3(e, t) {
  e && Kt.exports.flushSync(
    () => e.dispatchEvent(t)
  );
}
function eP(e) {
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
const zp = "dismissableLayer.update", tP = "dismissableLayer.pointerDownOutside", nP = "dismissableLayer.focusOutside";
let v1;
const rP = /* @__PURE__ */ m.exports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), oP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: l, onDismiss: s, ...a } = e, u = m.exports.useContext(rP), [c, f] = m.exports.useState(null), [, d] = m.exports.useState({}), g = Hs(
    t,
    (S) => f(S)
  ), h = Array.from(u.layers), [v] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = h.indexOf(v), p = c ? h.indexOf(c) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, x = p >= w, b = iP((S) => {
    const E = S.target, $ = [
      ...u.branches
    ].some(
      (P) => P.contains(E)
    );
    !x || $ || (o == null || o(S), l == null || l(S), S.defaultPrevented || s == null || s());
  }), A = lP((S) => {
    const E = S.target;
    [
      ...u.branches
    ].some(
      (P) => P.contains(E)
    ) || (i == null || i(S), l == null || l(S), S.defaultPrevented || s == null || s());
  });
  return eP((S) => {
    p === u.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && s && (S.preventDefault(), s()));
  }), m.exports.useEffect(() => {
    if (!!c)
      return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (v1 = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), y1(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = v1);
      };
  }, [
    c,
    n,
    u
  ]), m.exports.useEffect(() => () => {
    !c || (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), y1());
  }, [
    c,
    u
  ]), m.exports.useEffect(() => {
    const S = () => d({});
    return document.addEventListener(zp, S), () => document.removeEventListener(zp, S);
  }, []), /* @__PURE__ */ m.exports.createElement(_c.div, dt({}, a, {
    ref: g,
    style: {
      pointerEvents: y ? x ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: fi(e.onFocusCapture, A.onFocusCapture),
    onBlurCapture: fi(e.onBlurCapture, A.onBlurCapture),
    onPointerDownCapture: fi(e.onPointerDownCapture, b.onPointerDownCapture)
  }));
});
function iP(e) {
  const t = ho(e), n = m.exports.useRef(!1), r = m.exports.useRef(() => {
  });
  return m.exports.useEffect(() => {
    const o = (l) => {
      if (l.target && !n.current) {
        let u = function() {
          iS(tP, t, a, {
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
function lP(e) {
  const t = ho(e), n = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const r = (o) => {
      o.target && !n.current && iS(nP, t, {
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
function y1() {
  const e = new CustomEvent(zp);
  document.dispatchEvent(e);
}
function iS(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? J3(o, i) : o.dispatchEvent(i);
}
const Uf = "focusScope.autoFocusOnMount", Wf = "focusScope.autoFocusOnUnmount", x1 = {
  bubbles: !1,
  cancelable: !0
}, sP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l } = e, [s, a] = m.exports.useState(null), u = ho(o), c = ho(i), f = m.exports.useRef(null), d = Hs(
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
        s.contains(b) ? f.current = b : Xr(f.current, {
          select: !0
        });
      }, y = function(x) {
        g.paused || !s || s.contains(x.relatedTarget) || Xr(f.current, {
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
      b1.add(g);
      const v = document.activeElement;
      if (!s.contains(v)) {
        const p = new CustomEvent(Uf, x1);
        s.addEventListener(Uf, u), s.dispatchEvent(p), p.defaultPrevented || (aP(pP(lS(s)), {
          select: !0
        }), document.activeElement === v && Xr(s));
      }
      return () => {
        s.removeEventListener(Uf, u), setTimeout(() => {
          const p = new CustomEvent(Wf, x1);
          s.addEventListener(Wf, c), s.dispatchEvent(p), p.defaultPrevented || Xr(v != null ? v : document.body, {
            select: !0
          }), s.removeEventListener(Wf, c), b1.remove(g);
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
      const y = v.currentTarget, [x, b] = uP(y);
      x && b ? !v.shiftKey && p === b ? (v.preventDefault(), n && Xr(x, {
        select: !0
      })) : v.shiftKey && p === x && (v.preventDefault(), n && Xr(b, {
        select: !0
      })) : p === y && v.preventDefault();
    }
  }, [
    n,
    r,
    g.paused
  ]);
  return /* @__PURE__ */ m.exports.createElement(_c.div, dt({
    tabIndex: -1
  }, l, {
    ref: d,
    onKeyDown: h
  }));
});
function aP(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Xr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function uP(e) {
  const t = lS(e), n = w1(t, e), r = w1(t.reverse(), e);
  return [
    n,
    r
  ];
}
function lS(e) {
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
function w1(e, t) {
  for (const n of e)
    if (!cP(n, {
      upTo: t
    }))
      return n;
}
function cP(e, { upTo: t }) {
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
function fP(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Xr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && fP(e) && t && e.select();
  }
}
const b1 = dP();
function dP() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = S1(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = S1(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function S1(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function pP(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const hP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ wb.createPortal(/* @__PURE__ */ m.exports.createElement(_c.div, dt({}, o, {
    ref: t
  })), r) : null;
});
function mP(e, t) {
  return m.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const Rc = (e) => {
  const { present: t, children: n } = e, r = gP(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : m.exports.Children.only(n), i = Hs(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ m.exports.cloneElement(o, {
    ref: i
  }) : null;
};
Rc.displayName = "Presence";
function gP(e) {
  const [t, n] = m.exports.useState(), r = m.exports.useRef({}), o = m.exports.useRef(e), i = m.exports.useRef("none"), l = e ? "mounted" : "unmounted", [s, a] = mP(l, {
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
    const u = Sa(r.current);
    i.current = s === "mounted" ? u : "none";
  }, [
    s
  ]), Lp(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const d = i.current, g = Sa(u);
      e ? a("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(c && d !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    a
  ]), Lp(() => {
    if (t) {
      const u = (f) => {
        const g = Sa(r.current).includes(f.animationName);
        f.target === t && g && Kt.exports.flushSync(
          () => a("ANIMATION_END")
        );
      }, c = (f) => {
        f.target === t && (i.current = Sa(r.current));
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
function Sa(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let qf = 0;
function vP() {
  m.exports.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : k1()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : k1()), qf++, () => {
      qf === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), qf--;
    };
  }, []);
}
function k1() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var kn = function() {
  return kn = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, kn.apply(this, arguments);
};
function sS(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function yP(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var eu = "right-scroll-bar-position", tu = "width-before-scroll-bar", xP = "with-scroll-bars-hidden", wP = "--removed-body-scroll-bar-size";
function bP(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function SP(e, t) {
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
function kP(e, t) {
  return SP(t || null, function(n) {
    return e.forEach(function(r) {
      return bP(r, n);
    });
  });
}
function CP(e) {
  return e;
}
function $P(e, t) {
  t === void 0 && (t = CP);
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
function EP(e) {
  e === void 0 && (e = {});
  var t = $P(null);
  return t.options = kn({ async: !0, ssr: !1 }, e), t;
}
var aS = function(e) {
  var t = e.sideCar, n = sS(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return /* @__PURE__ */ D(r, {
    ...kn({}, n)
  });
};
aS.isSideCarExport = !0;
function AP(e, t) {
  return e.useMedium(t), aS;
}
var uS = EP(), Qf = function() {
}, Ic = m.exports.forwardRef(function(e, t) {
  var n = m.exports.useRef(null), r = m.exports.useState({
    onScrollCapture: Qf,
    onWheelCapture: Qf,
    onTouchMoveCapture: Qf
  }), o = r[0], i = r[1], l = e.forwardProps, s = e.children, a = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, g = e.noIsolation, h = e.inert, v = e.allowPinchZoom, w = e.as, p = w === void 0 ? "div" : w, y = sS(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = d, b = kP([n, t]), A = kn(kn({}, y), o);
  return /* @__PURE__ */ ce(Mt, {
    children: [c && /* @__PURE__ */ D(x, {
      sideCar: uS,
      removeScrollBar: u,
      shards: f,
      noIsolation: g,
      inert: h,
      setCallbacks: i,
      allowPinchZoom: !!v,
      lockRef: n
    }), l ? m.exports.cloneElement(m.exports.Children.only(s), kn(kn({}, A), {
      ref: b
    })) : /* @__PURE__ */ D(p, {
      ...kn({}, A, {
        className: a,
        ref: b
      }),
      children: s
    })]
  });
});
Ic.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ic.classNames = {
  fullWidth: tu,
  zeroRight: eu
};
var PP = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function _P() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = PP();
  return t && e.setAttribute("nonce", t), e;
}
function RP(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function IP(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var OP = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = _P()) && (RP(t, n), IP(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, TP = function() {
  var e = OP();
  return function(t, n) {
    m.exports.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, cS = function() {
  var e = TP(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, MP = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Gf = function(e) {
  return parseInt(e || "", 10) || 0;
}, NP = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Gf(n), Gf(r), Gf(o)];
}, DP = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return MP;
  var t = NP(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, LP = cS(), FP = function(e, t, n, r) {
  var o = e.left, i = e.top, l = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(xP, ` {
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
  
  .`).concat(eu, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(tu, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(eu, " .").concat(eu, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(tu, " .").concat(tu, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(wP, ": ").concat(s, `px;
  }
`);
}, zP = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = m.exports.useMemo(function() {
    return DP(o);
  }, [o]);
  return /* @__PURE__ */ D(LP, {
    styles: FP(i, !t, o, n ? "" : "!important")
  });
}, Bp = !1;
if (typeof window < "u")
  try {
    var ka = Object.defineProperty({}, "passive", {
      get: function() {
        return Bp = !0, !0;
      }
    });
    window.addEventListener("test", ka, ka), window.removeEventListener("test", ka, ka);
  } catch {
    Bp = !1;
  }
var No = Bp ? { passive: !1 } : !1, BP = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, jP = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, C1 = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = fS(e, n);
    if (r) {
      var o = dS(e, n), i = o[1], l = o[2];
      if (i > l)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, HP = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, VP = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, fS = function(e, t) {
  return e === "v" ? BP(t) : jP(t);
}, dS = function(e, t) {
  return e === "v" ? HP(t) : VP(t);
}, UP = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, WP = function(e, t, n, r, o) {
  var i = UP(e, window.getComputedStyle(t).direction), l = i * r, s = n.target, a = t.contains(s), u = !1, c = l > 0, f = 0, d = 0;
  do {
    var g = dS(e, s), h = g[0], v = g[1], w = g[2], p = v - w - i * h;
    (h || p) && fS(e, s) && (f += p, d += h), s = s.parentNode;
  } while (!a && s !== document.body || a && (t.contains(s) || t === s));
  return (c && (o && f === 0 || !o && l > f) || !c && (o && d === 0 || !o && -l > d)) && (u = !0), u;
}, Ca = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, $1 = function(e) {
  return [e.deltaX, e.deltaY];
}, E1 = function(e) {
  return e && "current" in e ? e.current : e;
}, qP = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, QP = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, GP = 0, Do = [];
function KP(e) {
  var t = m.exports.useRef([]), n = m.exports.useRef([0, 0]), r = m.exports.useRef(), o = m.exports.useState(GP++)[0], i = m.exports.useState(function() {
    return cS();
  })[0], l = m.exports.useRef(e);
  m.exports.useEffect(function() {
    l.current = e;
  }, [e]), m.exports.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = yP([e.lockRef.current], (e.shards || []).map(E1), !0).filter(Boolean);
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
    var p = Ca(v), y = n.current, x = "deltaX" in v ? v.deltaX : y[0] - p[0], b = "deltaY" in v ? v.deltaY : y[1] - p[1], A, S = v.target, E = Math.abs(x) > Math.abs(b) ? "h" : "v";
    if ("touches" in v && E === "h" && S.type === "range")
      return !1;
    var $ = C1(E, S);
    if (!$)
      return !0;
    if ($ ? A = E : (A = E === "v" ? "h" : "v", $ = C1(E, S)), !$)
      return !1;
    if (!r.current && "changedTouches" in v && (x || b) && (r.current = A), !A)
      return !0;
    var P = r.current || A;
    return WP(P, w, v, P === "h" ? x : b, !0);
  }, []), a = m.exports.useCallback(function(v) {
    var w = v;
    if (!(!Do.length || Do[Do.length - 1] !== i)) {
      var p = "deltaY" in w ? $1(w) : Ca(w), y = t.current.filter(function(A) {
        return A.name === w.type && A.target === w.target && qP(A.delta, p);
      })[0];
      if (y && y.should) {
        w.preventDefault();
        return;
      }
      if (!y) {
        var x = (l.current.shards || []).map(E1).filter(Boolean).filter(function(A) {
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
    n.current = Ca(v), r.current = void 0;
  }, []), f = m.exports.useCallback(function(v) {
    u(v.type, $1(v), v.target, s(v, e.lockRef.current));
  }, []), d = m.exports.useCallback(function(v) {
    u(v.type, Ca(v), v.target, s(v, e.lockRef.current));
  }, []);
  m.exports.useEffect(function() {
    return Do.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", a, No), document.addEventListener("touchmove", a, No), document.addEventListener("touchstart", c, No), function() {
      Do = Do.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", a, No), document.removeEventListener("touchmove", a, No), document.removeEventListener("touchstart", c, No);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return /* @__PURE__ */ ce(Mt, {
    children: [h ? /* @__PURE__ */ D(i, {
      styles: QP(o)
    }) : null, g ? /* @__PURE__ */ D(zP, {
      gapMode: "margin"
    }) : null]
  });
}
const YP = AP(uS, KP);
var pS = m.exports.forwardRef(function(e, t) {
  return /* @__PURE__ */ D(Ic, {
    ...kn({}, e, {
      ref: t,
      sideCar: YP
    })
  });
});
pS.classNames = Ic.classNames;
const XP = pS;
var ZP = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Lo = /* @__PURE__ */ new WeakMap(), $a = /* @__PURE__ */ new WeakMap(), Ea = {}, Kf = 0, JP = function(e, t, n) {
  t === void 0 && (t = ZP(e)), n === void 0 && (n = "data-aria-hidden");
  var r = Array.isArray(e) ? e : [e];
  Ea[n] || (Ea[n] = /* @__PURE__ */ new WeakMap());
  var o = Ea[n], i = [], l = /* @__PURE__ */ new Set(), s = function(u) {
    !u || l.has(u) || (l.add(u), s(u.parentNode));
  };
  r.forEach(s);
  var a = function(u) {
    !u || r.indexOf(u) >= 0 || Array.prototype.forEach.call(u.children, function(c) {
      if (l.has(c))
        a(c);
      else {
        var f = c.getAttribute("aria-hidden"), d = f !== null && f !== "false", g = (Lo.get(c) || 0) + 1, h = (o.get(c) || 0) + 1;
        Lo.set(c, g), o.set(c, h), i.push(c), g === 1 && d && $a.set(c, !0), h === 1 && c.setAttribute(n, "true"), d || c.setAttribute("aria-hidden", "true");
      }
    });
  };
  return a(t), l.clear(), Kf++, function() {
    i.forEach(function(u) {
      var c = Lo.get(u) - 1, f = o.get(u) - 1;
      Lo.set(u, c), o.set(u, f), c || ($a.has(u) || u.removeAttribute("aria-hidden"), $a.delete(u)), f || u.removeAttribute(n);
    }), Kf--, Kf || (Lo = /* @__PURE__ */ new WeakMap(), Lo = /* @__PURE__ */ new WeakMap(), $a = /* @__PURE__ */ new WeakMap(), Ea = {});
  };
};
const hS = "Dialog", [mS, Sz] = V3(hS), [e_, $o] = mS(hS), t_ = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !0 } = e, s = m.exports.useRef(null), a = m.exports.useRef(null), [u = !1, c] = Q3({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(e_, {
    scope: t,
    triggerRef: s,
    contentRef: a,
    contentId: Vf(),
    titleId: Vf(),
    descriptionId: Vf(),
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
}, gS = "DialogPortal", [n_, vS] = mS(gS, {
  forceMount: void 0
}), r_ = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = $o(gS, t);
  return /* @__PURE__ */ m.exports.createElement(n_, {
    scope: t,
    forceMount: n
  }, m.exports.Children.map(
    r,
    (l) => /* @__PURE__ */ m.exports.createElement(Rc, {
      present: n || i.open
    }, /* @__PURE__ */ m.exports.createElement(hP, {
      asChild: !0,
      container: o
    }, l))
  ));
}, jp = "DialogOverlay", o_ = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = vS(jp, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = $o(jp, e.__scopeDialog);
  return i.modal ? /* @__PURE__ */ m.exports.createElement(Rc, {
    present: r || i.open
  }, /* @__PURE__ */ m.exports.createElement(i_, dt({}, o, {
    ref: t
  }))) : null;
}), i_ = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = $o(jp, n);
  return /* @__PURE__ */ m.exports.createElement(XP, {
    as: zm,
    allowPinchZoom: !0,
    shards: [
      o.contentRef
    ]
  }, /* @__PURE__ */ m.exports.createElement(_c.div, dt({
    "data-state": xS(o.open)
  }, r, {
    ref: t,
    style: {
      pointerEvents: "auto",
      ...r.style
    }
  })));
}), ds = "DialogContent", l_ = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = vS(ds, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = $o(ds, e.__scopeDialog);
  return /* @__PURE__ */ m.exports.createElement(Rc, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement(s_, dt({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(a_, dt({}, o, {
    ref: t
  })));
}), s_ = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = $o(ds, e.__scopeDialog), r = m.exports.useRef(null), o = Hs(t, n.contentRef, r);
  return m.exports.useEffect(() => {
    const i = r.current;
    if (i)
      return JP(i);
  }, []), /* @__PURE__ */ m.exports.createElement(yS, dt({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: fi(e.onCloseAutoFocus, (i) => {
      var l;
      i.preventDefault(), (l = n.triggerRef.current) === null || l === void 0 || l.focus();
    }),
    onPointerDownOutside: fi(e.onPointerDownOutside, (i) => {
      const l = i.detail.originalEvent, s = l.button === 0 && l.ctrlKey === !0;
      (l.button === 2 || s) && i.preventDefault();
    }),
    onFocusOutside: fi(
      e.onFocusOutside,
      (i) => i.preventDefault()
    )
  }));
}), a_ = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = $o(ds, e.__scopeDialog), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement(yS, dt({}, e, {
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
}), yS = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, s = $o(ds, n), a = m.exports.useRef(null), u = Hs(t, a);
  return vP(), /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement(sP, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ m.exports.createElement(oP, dt({
    role: "dialog",
    id: s.contentId,
    "aria-describedby": s.descriptionId,
    "aria-labelledby": s.titleId,
    "data-state": xS(s.open)
  }, l, {
    ref: u,
    onDismiss: () => s.onOpenChange(!1)
  }))), !1);
});
function xS(e) {
  return e ? "open" : "closed";
}
const u_ = t_, c_ = r_, f_ = o_, d_ = l_;
var A1 = 1, p_ = 0.9, h_ = 0.3, Yf = 0.1, m_ = 0, Xf = 0.999, g_ = 0.9999, v_ = 0.99, P1 = /[\\\/\-_+.# \t"@\[\(\{&]/, y_ = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function Hp(e, t, n, r, o, i) {
  if (i === t.length)
    return o === e.length ? A1 : v_;
  for (var l = r.charAt(i), s = n.indexOf(l, o), a = 0, u, c, f; s >= 0; )
    u = Hp(e, t, n, r, s + 1, i + 1), u > a && (s === o ? u *= A1 : P1.test(e.charAt(s - 1)) ? (u *= p_, f = e.slice(o, s - 1).match(y_), f && o > 0 && (u *= Math.pow(Xf, f.length))) : P1.test(e.slice(o, s - 1)) ? (u *= m_, o > 0 && (u *= Math.pow(Xf, s - o))) : (u *= h_, o > 0 && (u *= Math.pow(Xf, s - o))), e.charAt(s) !== t.charAt(i) && (u *= g_)), u < Yf && n.charAt(s - 1) === r.charAt(i + 1) && n.charAt(s - 1) !== r.charAt(i) && (c = Hp(e, t, n, r, s + 1, i + 2), c * Yf > u && (u = c * Yf)), u > a && (a = u), s = n.indexOf(l, s + 1);
  return a;
}
function x_(e, t) {
  return Hp(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var w_ = x_, b_ = '[cmdk-list-sizer=""]', il = '[cmdk-group=""]', Zf = '[cmdk-group-items=""]', S_ = '[cmdk-group-heading=""]', Bm = '[cmdk-item=""]', _1 = `${Bm}:not([aria-disabled="true"])`, Vp = "cmdk-item-select", Nn = "data-value", k_ = (e, t) => w_(e, t), wS = m.exports.createContext(void 0), Vs = () => m.exports.useContext(wS), bS = m.exports.createContext(void 0), jm = () => m.exports.useContext(bS), SS = m.exports.createContext(void 0), kS = m.exports.forwardRef((e, t) => {
  let n = m.exports.useRef(null), r = Vo(() => {
    var O;
    return { search: "", value: (O = e.value) != null ? O : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), o = Vo(() => /* @__PURE__ */ new Set()), i = Vo(() => /* @__PURE__ */ new Map()), l = Vo(() => /* @__PURE__ */ new Map()), s = Vo(() => /* @__PURE__ */ new Set()), a = CS(e), { label: u, children: c, value: f, onValueChange: d, filter: g, shouldFilter: h, ...v } = e, w = m.exports.useId(), p = m.exports.useId(), y = m.exports.useId(), x = M_();
  Bi(() => {
    if (f !== void 0) {
      let O = f.trim().toLowerCase();
      r.current.value = O, x(6, R), b.emit();
    }
  }, [f]);
  let b = m.exports.useMemo(() => ({ subscribe: (O) => (s.current.add(O), () => s.current.delete(O)), snapshot: () => r.current, setState: (O, M, k) => {
    var C, J, ne;
    if (!Object.is(r.current[O], M)) {
      if (r.current[O] = M, O === "search")
        P(), E(), x(1, $);
      else if (O === "value")
        if (((C = a.current) == null ? void 0 : C.value) !== void 0) {
          let se = M != null ? M : "";
          (ne = (J = a.current).onValueChange) == null || ne.call(J, se);
          return;
        } else
          k || x(5, R);
      b.emit();
    }
  }, emit: () => {
    s.current.forEach((O) => O());
  } }), []), A = m.exports.useMemo(() => ({ value: (O, M) => {
    M !== l.current.get(O) && (l.current.set(O, M), r.current.filtered.items.set(O, S(M)), x(2, () => {
      E(), b.emit();
    }));
  }, item: (O, M) => (o.current.add(O), M && (i.current.has(M) ? i.current.get(M).add(O) : i.current.set(M, /* @__PURE__ */ new Set([O]))), x(3, () => {
    P(), E(), r.current.value || $(), b.emit();
  }), () => {
    l.current.delete(O), o.current.delete(O), r.current.filtered.items.delete(O);
    let k = I();
    x(4, () => {
      P(), (k == null ? void 0 : k.getAttribute("id")) === O && $(), b.emit();
    });
  }), group: (O) => (i.current.has(O) || i.current.set(O, /* @__PURE__ */ new Set()), () => {
    l.current.delete(O), i.current.delete(O);
  }), filter: () => a.current.shouldFilter, label: u || e["aria-label"], commandRef: n, listId: w, inputId: y, labelId: p }), []);
  function S(O) {
    var C;
    var M;
    let k = (C = (M = a.current) == null ? void 0 : M.filter) != null ? C : k_;
    return O ? k(O, r.current.search) : 0;
  }
  function E() {
    if (!n.current || !r.current.search || a.current.shouldFilter === !1)
      return;
    let O = r.current.filtered.items, M = [];
    r.current.filtered.groups.forEach((C) => {
      let J = i.current.get(C), ne = 0;
      J.forEach((se) => {
        let ee = O.get(se);
        ne = Math.max(ee, ne);
      }), M.push([C, ne]);
    });
    let k = n.current.querySelector(b_);
    T().sort((C, J) => {
      var ee, Q;
      let ne = C.getAttribute(Nn), se = J.getAttribute(Nn);
      return ((ee = O.get(se)) != null ? ee : 0) - ((Q = O.get(ne)) != null ? Q : 0);
    }).forEach((C) => {
      let J = C.closest(Zf);
      J ? J.appendChild(C.parentElement === J ? C : C.closest(`${Zf} > *`)) : k.appendChild(C.parentElement === k ? C : C.closest(`${Zf} > *`));
    }), M.sort((C, J) => J[1] - C[1]).forEach((C) => {
      let J = n.current.querySelector(`${il}[${Nn}="${C[0]}"]`);
      J == null || J.parentElement.appendChild(J);
    });
  }
  function $() {
    let O = T().find((k) => !k.ariaDisabled), M = O == null ? void 0 : O.getAttribute(Nn);
    b.setState("value", M || void 0);
  }
  function P() {
    if (!r.current.search || a.current.shouldFilter === !1) {
      r.current.filtered.count = o.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let O = 0;
    for (let M of o.current) {
      let k = l.current.get(M), C = S(k);
      r.current.filtered.items.set(M, C), C > 0 && O++;
    }
    for (let [M, k] of i.current)
      for (let C of k)
        if (r.current.filtered.items.get(C) > 0) {
          r.current.filtered.groups.add(M);
          break;
        }
    r.current.filtered.count = O;
  }
  function R() {
    var O, M, k;
    let C = I();
    C && (((O = C.parentElement) == null ? void 0 : O.firstChild) === C && ((k = (M = C.closest(il)) == null ? void 0 : M.querySelector(S_)) == null || k.scrollIntoView({ block: "nearest" })), C.scrollIntoView({ block: "nearest" }));
  }
  function I() {
    var O;
    return (O = n.current) == null ? void 0 : O.querySelector(`${Bm}[aria-selected="true"]`);
  }
  function T() {
    return Array.from(n.current.querySelectorAll(_1));
  }
  function L(O) {
    let M = T()[O];
    M && b.setState("value", M.getAttribute(Nn));
  }
  function B(O) {
    var M;
    let k = I(), C = T(), J = C.findIndex((se) => se === k), ne = C[J + O];
    (M = a.current) != null && M.loop && (ne = J + O < 0 ? C[C.length - 1] : J + O === C.length ? C[0] : C[J + O]), ne && b.setState("value", ne.getAttribute(Nn));
  }
  function z(O) {
    let M = I(), k = M == null ? void 0 : M.closest(il), C;
    for (; k && !C; )
      k = O > 0 ? O_(k, il) : T_(k, il), C = k == null ? void 0 : k.querySelector(_1);
    C ? b.setState("value", C.getAttribute(Nn)) : B(O);
  }
  let _ = () => L(T().length - 1), H = (O) => {
    O.preventDefault(), O.metaKey ? _() : O.altKey ? z(1) : B(1);
  }, N = (O) => {
    O.preventDefault(), O.metaKey ? L(0) : O.altKey ? z(-1) : B(-1);
  };
  return m.exports.createElement("div", { ref: Us([n, t]), ...v, "cmdk-root": "", onKeyDown: (O) => {
    var M;
    if ((M = v.onKeyDown) == null || M.call(v, O), !O.defaultPrevented)
      switch (O.key) {
        case "n":
        case "j": {
          O.ctrlKey && H(O);
          break;
        }
        case "ArrowDown": {
          H(O);
          break;
        }
        case "p":
        case "k": {
          O.ctrlKey && N(O);
          break;
        }
        case "ArrowUp": {
          N(O);
          break;
        }
        case "Home": {
          O.preventDefault(), L(0);
          break;
        }
        case "End": {
          O.preventDefault(), _();
          break;
        }
        case "Enter": {
          O.preventDefault();
          let k = I();
          if (k) {
            let C = new Event(Vp);
            k.dispatchEvent(C);
          }
        }
      }
  } }, m.exports.createElement("label", { "cmdk-label": "", htmlFor: A.inputId, id: A.labelId, style: N_ }, u), m.exports.createElement(bS.Provider, { value: b }, m.exports.createElement(wS.Provider, { value: A }, c)));
}), C_ = m.exports.forwardRef((e, t) => {
  let n = m.exports.useId(), r = m.exports.useRef(null), o = m.exports.useContext(SS), i = Vs(), l = CS(e);
  Bi(() => i.item(n, o), []);
  let s = $S(n, r, [e.value, e.children, r]), a = jm(), u = mo((p) => p.value && p.value === s.current), c = mo((p) => e.forceMount || i.filter() === !1 ? !0 : p.search ? p.filtered.items.get(n) > 0 : !0);
  m.exports.useEffect(() => {
    let p = r.current;
    if (!(!p || e.disabled))
      return p.addEventListener(Vp, f), () => p.removeEventListener(Vp, f);
  }, [c, e.onSelect, e.disabled]);
  function f() {
    var p, y;
    d(), (y = (p = l.current).onSelect) == null || y.call(p, s.current);
  }
  function d() {
    a.setState("value", s.current, !0);
  }
  if (!c)
    return null;
  let { disabled: g, value: h, onSelect: v, ...w } = e;
  return m.exports.createElement("div", { ref: Us([r, t]), ...w, id: n, "cmdk-item": "", role: "option", "aria-disabled": g || void 0, "aria-selected": u || void 0, "data-disabled": g || void 0, "data-selected": u || void 0, onPointerMove: g ? void 0 : d, onClick: g ? void 0 : f }, e.children);
}), $_ = m.exports.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, i = m.exports.useId(), l = m.exports.useRef(null), s = m.exports.useRef(null), a = m.exports.useId(), u = Vs(), c = mo((d) => e.forceMount || u.filter() === !1 ? !0 : d.search ? d.filtered.groups.has(i) : !0);
  Bi(() => u.group(i), []), $S(i, l, [e.value, e.heading, s]);
  let f = m.exports.createElement(SS.Provider, { value: i }, r);
  return m.exports.createElement("div", { ref: Us([l, t]), ...o, "cmdk-group": "", role: "presentation", hidden: c ? void 0 : !0 }, n && m.exports.createElement("div", { ref: s, "cmdk-group-heading": "", "aria-hidden": !0, id: a }, n), m.exports.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? a : void 0 }, f));
}), E_ = m.exports.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = m.exports.useRef(null), i = mo((l) => !l.search);
  return !n && !i ? null : m.exports.createElement("div", { ref: Us([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), A_ = m.exports.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, i = jm(), l = mo((c) => c.search), s = mo((c) => c.value), a = Vs(), u = m.exports.useMemo(() => {
    var c;
    let f = (c = a.commandRef.current) == null ? void 0 : c.querySelector(`${Bm}[${Nn}="${s}"]`);
    return f == null ? void 0 : f.getAttribute("id");
  }, [s, a.commandRef]);
  return m.exports.useEffect(() => {
    e.value != null && i.setState("search", e.value);
  }, [e.value]), m.exports.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": a.listId, "aria-labelledby": a.labelId, "aria-activedescendant": u, id: a.inputId, type: "text", value: o ? e.value : l, onChange: (c) => {
    o || i.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), P_ = m.exports.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = m.exports.useRef(null), i = m.exports.useRef(null), l = Vs();
  return m.exports.useEffect(() => {
    if (i.current && o.current) {
      let s = i.current, a = o.current, u, c = new ResizeObserver(() => {
        u = requestAnimationFrame(() => {
          let f = s.offsetHeight;
          a.style.setProperty("--cmdk-list-height", f.toFixed(1) + "px");
        });
      });
      return c.observe(s), () => {
        cancelAnimationFrame(u), c.unobserve(s);
      };
    }
  }, []), m.exports.createElement("div", { ref: Us([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: l.listId, "aria-labelledby": l.inputId }, m.exports.createElement("div", { ref: i, "cmdk-list-sizer": "" }, n));
}), __ = m.exports.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: i, container: l, ...s } = e;
  return m.exports.createElement(u_, { open: n, onOpenChange: r }, m.exports.createElement(c_, { container: l }, m.exports.createElement(f_, { "cmdk-overlay": "", className: o }), m.exports.createElement(d_, { "aria-label": e.label, "cmdk-dialog": "", className: i }, m.exports.createElement(kS, { ref: t, ...s }))));
}), R_ = m.exports.forwardRef((e, t) => {
  let n = m.exports.useRef(!0), r = mo((o) => o.filtered.count === 0);
  return m.exports.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : m.exports.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), I_ = m.exports.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return m.exports.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, m.exports.createElement("div", { "aria-hidden": !0 }, r));
}), an = Object.assign(kS, { List: P_, Item: C_, Input: A_, Group: $_, Separator: E_, Dialog: __, Empty: R_, Loading: I_ });
function O_(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function T_(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function CS(e) {
  let t = m.exports.useRef(e);
  return Bi(() => {
    t.current = e;
  }), t;
}
var Bi = typeof window > "u" ? m.exports.useEffect : m.exports.useLayoutEffect;
function Vo(e) {
  let t = m.exports.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Us(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function mo(e) {
  let t = jm(), n = () => e(t.snapshot());
  return m.exports.useSyncExternalStore(t.subscribe, n, n);
}
function $S(e, t, n) {
  let r = m.exports.useRef(), o = Vs();
  return Bi(() => {
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
    o.value(e, l), (i = t.current) == null || i.setAttribute(Nn, l), r.current = l;
  }), r;
}
var M_ = () => {
  let [e, t] = m.exports.useState(), n = Vo(() => /* @__PURE__ */ new Map());
  return Bi(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, N_ = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
let Hm = qs();
const re = (e) => Ws(e, Hm);
let Vm = qs();
re.write = (e) => Ws(e, Vm);
let Oc = qs();
re.onStart = (e) => Ws(e, Oc);
let Um = qs();
re.onFrame = (e) => Ws(e, Um);
let Wm = qs();
re.onFinish = (e) => Ws(e, Wm);
let di = [];
re.setTimeout = (e, t) => {
  let n = re.now() + t, r = () => {
    let i = di.findIndex((l) => l.cancel == r);
    ~i && di.splice(i, 1), wr -= ~i ? 1 : 0;
  }, o = {
    time: n,
    handler: e,
    cancel: r
  };
  return di.splice(ES(n), 0, o), wr += 1, AS(), o;
};
let ES = (e) => ~(~di.findIndex((t) => t.time > e) || ~di.length);
re.cancel = (e) => {
  Oc.delete(e), Um.delete(e), Hm.delete(e), Vm.delete(e), Wm.delete(e);
};
re.sync = (e) => {
  Up = !0, re.batchedUpdates(e), Up = !1;
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
let qm = typeof window < "u" ? window.requestAnimationFrame : () => {
};
re.use = (e) => qm = e;
re.now = typeof performance < "u" ? () => performance.now() : Date.now;
re.batchedUpdates = (e) => e();
re.catch = console.error;
re.frameLoop = "always";
re.advance = () => {
  re.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : _S();
};
let xr = -1, wr = 0, Up = !1;
function Ws(e, t) {
  Up ? (t.delete(e), e(0)) : (t.add(e), AS());
}
function AS() {
  xr < 0 && (xr = 0, re.frameLoop !== "demand" && qm(PS));
}
function D_() {
  xr = -1;
}
function PS() {
  ~xr && (qm(PS), re.batchedUpdates(_S));
}
function _S() {
  let e = xr;
  xr = re.now();
  let t = ES(xr);
  t && (RS(di.splice(0, t), (n) => n.handler()), wr -= t), Oc.flush(), Hm.flush(e ? Math.min(64, xr - e) : 16.667), Um.flush(), Vm.flush(), Wm.flush(), wr || D_();
}
function qs() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return {
    add(n) {
      wr += t == e && !e.has(n) ? 1 : 0, e.add(n);
    },
    delete(n) {
      return wr -= t == e && e.has(n) ? 1 : 0, e.delete(n);
    },
    flush(n) {
      t.size && (e = /* @__PURE__ */ new Set(), wr -= t.size, RS(t, (r) => r(n) && e.add(r)), wr += e.size, t = e);
    }
  };
}
function RS(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      re.catch(r);
    }
  });
}
function Wp() {
}
const L_ = (e, t, n) => Object.defineProperty(e, t, {
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
function Dn(e, t) {
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
function An(e, t, n) {
  if (W.arr(e)) {
    for (let r = 0; r < e.length; r++)
      t.call(n, e[r], `${r}`);
    return;
  }
  for (const r in e)
    e.hasOwnProperty(r) && t.call(n, e[r], r);
}
const At = (e) => W.und(e) ? [] : W.arr(e) ? e : [e];
function Nl(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), pe(n, t);
  }
}
const bl = (e, ...t) => Nl(e, (n) => n(...t)), IS = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
let Qm, OS, Or = null, TS = !1, Gm = Wp;
const F_ = (e) => {
  e.to && (OS = e.to), e.now && (re.now = e.now), e.colors !== void 0 && (Or = e.colors), e.skipAnimation != null && (TS = e.skipAnimation), e.createStringInterpolator && (Qm = e.createStringInterpolator), e.requestAnimationFrame && re.use(e.requestAnimationFrame), e.batchedUpdates && (re.batchedUpdates = e.batchedUpdates), e.willAdvance && (Gm = e.willAdvance), e.frameLoop && (re.frameLoop = e.frameLoop);
};
var Pn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get createStringInterpolator() {
    return Qm;
  },
  get to() {
    return OS;
  },
  get colors() {
    return Or;
  },
  get skipAnimation() {
    return TS;
  },
  get willAdvance() {
    return Gm;
  },
  assign: F_
});
const Dl = /* @__PURE__ */ new Set();
let Ht = [], Jf = [], Hu = 0;
const Tc = {
  get idle() {
    return !Dl.size && !Ht.length;
  },
  start(e) {
    Hu > e.priority ? (Dl.add(e), re.onStart(z_)) : (MS(e), re(qp));
  },
  advance: qp,
  sort(e) {
    if (Hu)
      re.onFrame(() => Tc.sort(e));
    else {
      const t = Ht.indexOf(e);
      ~t && (Ht.splice(t, 1), NS(e));
    }
  },
  clear() {
    Ht = [], Dl.clear();
  }
};
function z_() {
  Dl.forEach(MS), Dl.clear(), re(qp);
}
function MS(e) {
  Ht.includes(e) || NS(e);
}
function NS(e) {
  Ht.splice(B_(Ht, (t) => t.priority > e.priority), 0, e);
}
function qp(e) {
  const t = Jf;
  for (let n = 0; n < Ht.length; n++) {
    const r = Ht[n];
    Hu = r.priority, r.idle || (Gm(r), r.advance(e), r.idle || t.push(r));
  }
  return Hu = 0, Jf = Ht, Jf.length = 0, Ht = t, Ht.length > 0;
}
function B_(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
const j_ = {
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
}, un = "[-+]?\\d*\\.?\\d+", Vu = un + "%";
function Mc(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const H_ = new RegExp("rgb" + Mc(un, un, un)), V_ = new RegExp("rgba" + Mc(un, un, un, un)), U_ = new RegExp("hsl" + Mc(un, Vu, Vu)), W_ = new RegExp("hsla" + Mc(un, Vu, Vu, un)), q_ = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Q_ = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, G_ = /^#([0-9a-fA-F]{6})$/, K_ = /^#([0-9a-fA-F]{8})$/;
function Y_(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = G_.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Or && Or[e] !== void 0 ? Or[e] : (t = H_.exec(e)) ? (Fo(t[1]) << 24 | Fo(t[2]) << 16 | Fo(t[3]) << 8 | 255) >>> 0 : (t = V_.exec(e)) ? (Fo(t[1]) << 24 | Fo(t[2]) << 16 | Fo(t[3]) << 8 | O1(t[4])) >>> 0 : (t = q_.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = K_.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Q_.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = U_.exec(e)) ? (R1(I1(t[1]), Aa(t[2]), Aa(t[3])) | 255) >>> 0 : (t = W_.exec(e)) ? (R1(I1(t[1]), Aa(t[2]), Aa(t[3])) | O1(t[4])) >>> 0 : null;
}
function ed(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function R1(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, i = ed(o, r, e + 1 / 3), l = ed(o, r, e), s = ed(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(l * 255) << 16 | Math.round(s * 255) << 8;
}
function Fo(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function I1(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function O1(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Aa(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function T1(e) {
  let t = Y_(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, o = (t & 65280) >>> 8, i = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${o}, ${i})`;
}
const ps = (e, t, n) => {
  if (W.fun(e))
    return e;
  if (W.arr(e))
    return ps({
      range: e,
      output: t,
      extrapolate: n
    });
  if (W.str(e.output[0]))
    return Qm(e);
  const r = e, o = r.output, i = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", s = r.extrapolateRight || r.extrapolate || "extend", a = r.easing || ((u) => u);
  return (u) => {
    const c = Z_(u, i);
    return X_(u, i[c], i[c + 1], o[c], o[c + 1], a, l, s, r.map);
  };
};
function X_(e, t, n, r, o, i, l, s, a) {
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
function Z_(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
function Qp() {
  return Qp = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Qp.apply(this, arguments);
}
const Ai = Symbol.for("FluidValue.get"), go = Symbol.for("FluidValue.observers"), zt = (e) => Boolean(e && e[Ai]), gt = (e) => e && e[Ai] ? e[Ai]() : e, M1 = (e) => e[go] || null;
function J_(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function hs(e, t) {
  let n = e[go];
  n && n.forEach((r) => {
    J_(r, t);
  });
}
class DS {
  constructor(t) {
    if (this[Ai] = void 0, this[go] = void 0, !t && !(t = this.get))
      throw Error("Unknown getter");
    e4(this, t);
  }
}
const e4 = (e, t) => LS(e, Ai, t);
function ji(e, t) {
  if (e[Ai]) {
    let n = e[go];
    n || LS(e, go, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function ms(e, t) {
  let n = e[go];
  if (n && n.has(t)) {
    const r = n.size - 1;
    r ? n.delete(t) : e[go] = null, e.observerRemoved && e.observerRemoved(r, t);
  }
}
const LS = (e, t, n) => Object.defineProperty(e, t, {
  value: n,
  writable: !0,
  configurable: !0
}), nu = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, t4 = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, N1 = new RegExp(`(${nu.source})(%|[a-z]+)`, "i"), n4 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Nc = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, FS = (e) => {
  const [t, n] = r4(e);
  if (!t || IS())
    return e;
  const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  if (r)
    return r.trim();
  if (n && n.startsWith("--")) {
    const o = window.getComputedStyle(document.documentElement).getPropertyValue(n);
    return o || e;
  } else {
    if (n && Nc.test(n))
      return FS(n);
    if (n)
      return n;
  }
  return e;
}, r4 = (e) => {
  const t = Nc.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
};
let td;
const o4 = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`, zS = (e) => {
  td || (td = Or ? new RegExp(`(${Object.keys(Or).join("|")})(?!\\w)`, "g") : /^\b$/);
  const t = e.output.map((i) => gt(i).replace(Nc, FS).replace(t4, T1).replace(td, T1)), n = t.map((i) => i.match(nu).map(Number)), o = n[0].map((i, l) => n.map((s) => {
    if (!(l in s))
      throw Error('The arity of each "output" value must be equal');
    return s[l];
  })).map((i) => ps(Qp({}, e, {
    output: i
  })));
  return (i) => {
    var l;
    const s = !N1.test(t[0]) && ((l = t.find((u) => N1.test(u))) == null ? void 0 : l.replace(nu, ""));
    let a = 0;
    return t[0].replace(nu, () => `${o[a++](i)}${s || ""}`).replace(n4, o4);
  };
}, Km = "react-spring: ", BS = (e) => {
  const t = e;
  let n = !1;
  if (typeof t != "function")
    throw new TypeError(`${Km}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, i4 = BS(console.warn);
function l4() {
  i4(`${Km}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
const s4 = BS(console.warn);
function a4() {
  s4(`${Km}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function Dc(e) {
  return W.str(e) && (e[0] == "#" || /\d/.test(e) || !IS() && Nc.test(e) || e in (Or || {}));
}
const Ym = typeof window < "u" && window.document && window.document.createElement ? m.exports.useLayoutEffect : m.exports.useEffect, u4 = () => {
  const e = m.exports.useRef(!1);
  return Ym(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function jS() {
  const e = m.exports.useState()[1], t = u4();
  return () => {
    t.current && e(Math.random());
  };
}
function c4(e, t) {
  const [n] = m.exports.useState(() => ({
    inputs: t,
    result: e()
  })), r = m.exports.useRef(), o = r.current;
  let i = o;
  return i ? Boolean(t && i.inputs && f4(t, i.inputs)) || (i = {
    inputs: t,
    result: e()
  }) : i = n, m.exports.useEffect(() => {
    r.current = i, o == n && (n.inputs = n.result = void 0);
  }, [i]), i.result;
}
function f4(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
const HS = (e) => m.exports.useEffect(e, d4), d4 = [];
function D1(e) {
  const t = m.exports.useRef();
  return m.exports.useEffect(() => {
    t.current = e;
  }), t.current;
}
const gs = Symbol.for("Animated:node"), p4 = (e) => !!e && e[gs] === e, xn = (e) => e && e[gs], Xm = (e, t) => L_(e, gs, t), Lc = (e) => e && e[gs] && e[gs].getPayload();
class VS {
  constructor() {
    this.payload = void 0, Xm(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}
class Hi extends VS {
  constructor(t) {
    super(), this.done = !0, this.elapsedTime = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.v0 = void 0, this.durationProgress = 0, this._value = t, W.num(this._value) && (this.lastPosition = this._value);
  }
  static create(t) {
    return new Hi(t);
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
class Pi extends Hi {
  constructor(t) {
    super(0), this._string = null, this._toString = void 0, this._toString = ps({
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
    t && (this._toString = ps({
      output: [this.getValue(), t]
    })), this._value = 0, super.reset();
  }
}
const Uu = {
  dependencies: null
};
class Fc extends VS {
  constructor(t) {
    super(), this.source = t, this.setValue(t);
  }
  getValue(t) {
    const n = {};
    return An(this.source, (r, o) => {
      p4(r) ? n[o] = r.getValue(t) : zt(r) ? n[o] = gt(r) : t || (n[o] = r);
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
      return An(t, this._addToPayload, n), Array.from(n);
    }
  }
  _addToPayload(t) {
    Uu.dependencies && zt(t) && Uu.dependencies.add(t);
    const n = Lc(t);
    n && pe(n, (r) => this.add(r));
  }
}
class Zm extends Fc {
  constructor(t) {
    super(t);
  }
  static create(t) {
    return new Zm(t);
  }
  getValue() {
    return this.source.map((t) => t.getValue());
  }
  setValue(t) {
    const n = this.getPayload();
    return t.length == n.length ? n.map((r, o) => r.setValue(t[o])).some(Boolean) : (super.setValue(t.map(h4)), !0);
  }
}
function h4(e) {
  return (Dc(e) ? Pi : Hi).create(e);
}
function Gp(e) {
  const t = xn(e);
  return t ? t.constructor : W.arr(e) ? Zm : Dc(e) ? Pi : Hi;
}
function Kp() {
  return Kp = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Kp.apply(this, arguments);
}
const L1 = (e, t) => {
  const n = !W.fun(e) || e.prototype && e.prototype.isReactComponent;
  return m.exports.forwardRef((r, o) => {
    const i = m.exports.useRef(null), l = n && m.exports.useCallback((h) => {
      i.current = v4(o, h);
    }, [o]), [s, a] = g4(r, t), u = jS(), c = () => {
      const h = i.current;
      if (n && !h)
        return;
      (h ? t.applyAnimatedValues(h, s.getValue(!0)) : !1) === !1 && u();
    }, f = new m4(c, a), d = m.exports.useRef();
    Ym(() => (d.current = f, pe(a, (h) => ji(h, f)), () => {
      d.current && (pe(d.current.deps, (h) => ms(h, d.current)), re.cancel(d.current.update));
    })), m.exports.useEffect(c, []), HS(() => () => {
      const h = d.current;
      pe(h.deps, (v) => ms(v, h));
    });
    const g = t.getComponentProps(s.getValue());
    return /* @__PURE__ */ D(e, {
      ...g,
      ref: l
    });
  });
};
class m4 {
  constructor(t, n) {
    this.update = t, this.deps = n;
  }
  eventObserved(t) {
    t.type == "change" && re.write(this.update);
  }
}
function g4(e, t) {
  const n = /* @__PURE__ */ new Set();
  return Uu.dependencies = n, e.style && (e = Kp({}, e, {
    style: t.createAnimatedStyle(e.style)
  })), e = new Fc(e), Uu.dependencies = null, [e, n];
}
function v4(e, t) {
  return e && (W.fun(e) ? e(t) : e.current = t), t;
}
const F1 = Symbol.for("AnimatedComponent"), y4 = (e, {
  applyAnimatedValues: t = () => !1,
  createAnimatedStyle: n = (o) => new Fc(o),
  getComponentProps: r = (o) => o
} = {}) => {
  const o = {
    applyAnimatedValues: t,
    createAnimatedStyle: n,
    getComponentProps: r
  }, i = (l) => {
    const s = z1(l) || "Anonymous";
    return W.str(l) ? l = i[l] || (i[l] = L1(l, o)) : l = l[F1] || (l[F1] = L1(l, o)), l.displayName = `Animated(${s})`, l;
  };
  return An(e, (l, s) => {
    W.arr(e) && (s = z1(l)), i[s] = i(l);
  }), {
    animated: i
  };
}, z1 = (e) => W.str(e) ? e : e && W.str(e.displayName) ? e.displayName : W.fun(e) && e.name || null;
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
function Jr(e, ...t) {
  return W.fun(e) ? e(...t) : e;
}
const Ll = (e, t) => e === !0 || !!(t && e && (W.fun(e) ? e(t) : At(e).includes(t))), US = (e, t) => W.obj(e) ? t && e[t] : e, WS = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, x4 = (e) => e, Jm = (e, t = x4) => {
  let n = w4;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  const r = {};
  for (const o of n) {
    const i = t(e[o], o);
    W.und(i) || (r[o] = i);
  }
  return r;
}, w4 = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], b4 = {
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
function S4(e) {
  const t = {};
  let n = 0;
  if (An(e, (r, o) => {
    b4[o] || (t[o] = r, n++);
  }), n)
    return t;
}
function qS(e) {
  const t = S4(e);
  if (t) {
    const n = {
      to: t
    };
    return An(e, (r, o) => o in t || (n[o] = r)), n;
  }
  return Ge({}, e);
}
function vs(e) {
  return e = gt(e), W.arr(e) ? e.map(vs) : Dc(e) ? Pn.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function k4(e) {
  for (const t in e)
    return !0;
  return !1;
}
function Yp(e) {
  return W.fun(e) || W.arr(e) && W.obj(e[0]);
}
function C4(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function $4(e, t) {
  if (t && e.ref !== t) {
    var n;
    (n = e.ref) == null || n.delete(e), t.add(e), e.ref = t;
  }
}
const E4 = {
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
}, Wu = 1.70158, Pa = Wu * 1.525, B1 = Wu + 1, j1 = 2 * Math.PI / 3, H1 = 2 * Math.PI / 4.5, _a = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, A4 = {
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
  easeInBack: (e) => B1 * e * e * e - Wu * e * e,
  easeOutBack: (e) => 1 + B1 * Math.pow(e - 1, 3) + Wu * Math.pow(e - 1, 2),
  easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((Pa + 1) * 2 * e - Pa) / 2 : (Math.pow(2 * e - 2, 2) * ((Pa + 1) * (e * 2 - 2) + Pa) + 2) / 2,
  easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * j1),
  easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * j1) + 1,
  easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * H1)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * H1) / 2 + 1,
  easeInBounce: (e) => 1 - _a(1 - e),
  easeOutBounce: _a,
  easeInOutBounce: (e) => e < 0.5 ? (1 - _a(1 - 2 * e)) / 2 : (1 + _a(2 * e - 1)) / 2
}, Xp = Ge({}, E4.default, {
  mass: 1,
  damping: 1,
  easing: A4.linear,
  clamp: !1
});
class P4 {
  constructor() {
    this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, Xp);
  }
}
function _4(e, t, n) {
  n && (n = Ge({}, n), V1(n, t), t = Ge({}, n, t)), V1(e, t), Object.assign(e, t);
  for (const l in Xp)
    e[l] == null && (e[l] = Xp[l]);
  let {
    mass: r,
    frequency: o,
    damping: i
  } = e;
  return W.und(o) || (o < 0.01 && (o = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / o, 2) * r, e.friction = 4 * Math.PI * i * r / o), e;
}
function V1(e, t) {
  if (!W.und(t.decay))
    e.duration = void 0;
  else {
    const n = !W.und(t.tension) || !W.und(t.friction);
    (n || !W.und(t.frequency) || !W.und(t.damping) || !W.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
const U1 = [];
class R4 {
  constructor() {
    this.changed = !1, this.values = U1, this.toValues = null, this.fromValues = U1, this.to = void 0, this.from = void 0, this.config = new P4(), this.immediate = !1;
  }
}
function QS(e, {
  key: t,
  props: n,
  defaultProps: r,
  state: o,
  actions: i
}) {
  return new Promise((l, s) => {
    var a;
    let u, c, f = Ll((a = n.cancel) != null ? a : r == null ? void 0 : r.cancel, t);
    if (f)
      h();
    else {
      W.und(n.pause) || (o.paused = Ll(n.pause, t));
      let v = r == null ? void 0 : r.pause;
      v !== !0 && (v = o.paused || Ll(v, t)), u = Jr(n.delay || 0, t), v ? (o.resumeQueue.add(g), i.pause()) : (i.resume(), g());
    }
    function d() {
      o.resumeQueue.add(g), o.timeouts.delete(c), c.cancel(), u = c.time - re.now();
    }
    function g() {
      u > 0 && !Pn.skipAnimation ? (o.delayed = !0, c = re.setTimeout(h, u), o.pauseQueue.add(d), o.timeouts.add(c)) : h();
    }
    function h() {
      o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(c), e <= (o.cancelId || 0) && (f = !0);
      try {
        i.start(Ge({}, n, {
          callId: e,
          cancel: f
        }), l);
      } catch (v) {
        s(v);
      }
    }
  });
}
const eg = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? pi(e.get()) : t.every((n) => n.noop) ? GS(e.get()) : ln(e.get(), t.every((n) => n.finished)), GS = (e) => ({
  value: e,
  noop: !0,
  finished: !0,
  cancelled: !1
}), ln = (e, t, n = !1) => ({
  value: e,
  finished: t,
  cancelled: n
}), pi = (e) => ({
  value: e,
  cancelled: !0,
  finished: !1
});
function KS(e, t, n, r) {
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
    const u = Jm(t, (w, p) => p === "onRest" ? void 0 : w);
    let c, f;
    const d = new Promise((w, p) => (c = w, f = p)), g = (w) => {
      const p = o <= (n.cancelId || 0) && pi(r) || o !== n.asyncId && ln(r, !1);
      if (p)
        throw w.result = p, f(w), w;
    }, h = (w, p) => {
      const y = new W1(), x = new q1();
      return (async () => {
        if (Pn.skipAnimation)
          throw ys(n), x.result = ln(r, !1), f(x), x;
        g(y);
        const b = W.obj(w) ? Ge({}, w) : Ge({}, p, {
          to: w
        });
        b.parentId = o, An(u, (S, E) => {
          W.und(b[E]) && (b[E] = S);
        });
        const A = await r.start(b);
        return g(y), n.paused && await new Promise((S) => {
          n.resumeQueue.add(S);
        }), A;
      })();
    };
    let v;
    if (Pn.skipAnimation)
      return ys(n), ln(r, !1);
    try {
      let w;
      W.arr(e) ? w = (async (p) => {
        for (const y of p)
          await h(y);
      })(e) : w = Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([w.then(c), d]), v = ln(r.get(), !0, !1);
    } catch (w) {
      if (w instanceof W1)
        v = w.result;
      else if (w instanceof q1)
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
function ys(e, t) {
  Nl(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
class W1 extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."), this.result = void 0;
  }
}
class q1 extends Error {
  constructor() {
    super("SkipAnimationSignal"), this.result = void 0;
  }
}
const Zp = (e) => e instanceof tg;
let I4 = 1;
class tg extends DS {
  constructor(...t) {
    super(...t), this.id = I4++, this.key = void 0, this._priority = 0;
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
    return Pn.to(this, t);
  }
  interpolate(...t) {
    return l4(), Pn.to(this, t);
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
    hs(this, {
      type: "change",
      parent: this,
      value: t,
      idle: n
    });
  }
  _onPriorityChange(t) {
    this.idle || Tc.sort(this), hs(this, {
      type: "priority",
      parent: this,
      priority: t
    });
  }
}
const vo = Symbol.for("SpringPhase"), YS = 1, Jp = 2, eh = 4, nd = (e) => (e[vo] & YS) > 0, ar = (e) => (e[vo] & Jp) > 0, ll = (e) => (e[vo] & eh) > 0, Q1 = (e, t) => t ? e[vo] |= Jp | YS : e[vo] &= ~Jp, G1 = (e, t) => t ? e[vo] |= eh : e[vo] &= ~eh;
class O4 extends tg {
  constructor(t, n) {
    if (super(), this.key = void 0, this.animation = new R4(), this.queue = void 0, this.defaultProps = {}, this._state = {
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
    return !(ar(this) || this._state.asyncTo) || ll(this);
  }
  get goal() {
    return gt(this.animation.to);
  }
  get velocity() {
    const t = xn(this);
    return t instanceof Hi ? t.lastVelocity || 0 : t.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return nd(this);
  }
  get isAnimating() {
    return ar(this);
  }
  get isPaused() {
    return ll(this);
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
    const s = Lc(o.to);
    !s && zt(o.to) && (l = At(gt(o.to))), o.values.forEach((c, f) => {
      if (c.done)
        return;
      const d = c.constructor == Pi ? 1 : s ? s[f].lastPosition : l[f];
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
            const R = 1, I = Math.ceil(t / R);
            for (let T = 0; T < I && ($ = Math.abs(y) > b, !(!$ && (g = Math.abs(d - h) <= x, g))); ++T) {
              S && (P = h == d || h > d == E, P && (y = -y * A, h = d));
              const L = -i.tension * 1e-6 * (h - d), B = -i.friction * 1e-3 * y, z = (L + B) / i.mass;
              y = y + z * R, h = h + y * R;
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
      const c = gt(o.to);
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
    })], Promise.all(r.map((o) => this._update(o))).then((o) => eg(this, o));
  }
  stop(t) {
    const {
      to: n
    } = this.animation;
    return this._focus(this.get()), ys(this._state, t && this._lastCallId), re.batchedUpdates(() => this._stop(n, t)), this;
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
    r = W.obj(r) ? r[n] : r, (r == null || Yp(r)) && (r = void 0), o = W.obj(o) ? o[n] : o, o == null && (o = void 0);
    const i = {
      to: r,
      from: o
    };
    return nd(this) || (t.reverse && ([r, o] = [o, r]), o = gt(o), W.und(o) ? xn(this) || this._set(r) : this._set(o)), i;
  }
  _update(t, n) {
    let r = Ge({}, t);
    const {
      key: o,
      defaultProps: i
    } = this;
    r.default && Object.assign(i, Jm(r, (a, u) => /^on/.test(u) ? US(a, o) : a)), Y1(this, r, "onProps"), al(this, "onProps", r, this);
    const l = this._prepareNode(r);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    const s = this._state;
    return QS(++this._lastCallId, {
      key: o,
      props: r,
      defaultProps: i,
      state: s,
      actions: {
        pause: () => {
          ll(this) || (G1(this, !0), bl(s.pauseQueue), al(this, "onPause", ln(this, sl(this, this.animation.to)), this));
        },
        resume: () => {
          ll(this) && (G1(this, !1), ar(this) && this._resume(), bl(s.resumeQueue), al(this, "onResume", ln(this, sl(this, this.animation.to)), this));
        },
        start: this._merge.bind(this, l)
      }
    }).then((a) => {
      if (r.loop && a.finished && !(n && a.noop)) {
        const u = XS(r);
        if (u)
          return this._update(u, !0);
      }
      return a;
    });
  }
  _merge(t, n, r) {
    if (n.cancel)
      return this.stop(!0), r(pi(this));
    const o = !W.und(t.to), i = !W.und(t.from);
    if (o || i)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return r(pi(this));
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
    const g = !Dn(d, c);
    g && (a.from = d), d = gt(d);
    const h = !Dn(f, u);
    h && this._focus(f);
    const v = Yp(n.to), {
      config: w
    } = a, {
      decay: p,
      velocity: y
    } = w;
    (o || i) && (w.velocity = 0), n.config && !v && _4(w, Jr(n.config, l), n.config !== s.config ? Jr(s.config, l) : void 0);
    let x = xn(this);
    if (!x || W.und(f))
      return r(ln(this, !0));
    const b = W.und(n.reset) ? i && !n.default : !W.und(d) && Ll(n.reset, l), A = b ? d : this.get(), S = vs(f), E = W.num(S) || W.arr(S) || Dc(S), $ = !v && (!E || Ll(s.immediate || n.immediate, l));
    if (h) {
      const T = Gp(f);
      if (T !== x.constructor)
        if ($)
          x = this._set(S);
        else
          throw Error(`Cannot animate between ${x.constructor.name} and ${T.name}, as the "to" prop suggests`);
    }
    const P = x.constructor;
    let R = zt(f), I = !1;
    if (!R) {
      const T = b || !nd(this) && g;
      (h || T) && (I = Dn(vs(A), S), R = !I), (!Dn(a.immediate, $) && !$ || !Dn(w.decay, p) || !Dn(w.velocity, y)) && (R = !0);
    }
    if (I && ar(this) && (a.changed && !b ? R = !0 : R || this._stop(u)), !v && ((R || zt(u)) && (a.values = x.getPayload(), a.toValues = zt(f) ? null : P == Pi ? [1] : At(S)), a.immediate != $ && (a.immediate = $, !$ && !b && this._set(u)), R)) {
      const {
        onRest: T
      } = a;
      pe(M4, (B) => Y1(this, n, B));
      const L = ln(this, sl(this, u));
      bl(this._pendingCalls, L), this._pendingCalls.add(r), a.changed && re.batchedUpdates(() => {
        a.changed = !b, T == null || T(L, this), b ? Jr(s.onRest, L) : a.onStart == null || a.onStart(L, this);
      });
    }
    b && this._set(A), v ? r(KS(n.to, n, this._state, this)) : R ? this._start() : ar(this) && !h ? this._pendingCalls.add(r) : r(GS(A));
  }
  _focus(t) {
    const n = this.animation;
    t !== n.to && (M1(this) && this._detach(), n.to = t, M1(this) && this._attach());
  }
  _attach() {
    let t = 0;
    const {
      to: n
    } = this.animation;
    zt(n) && (ji(n, this), Zp(n) && (t = n.priority + 1)), this.priority = t;
  }
  _detach() {
    const {
      to: t
    } = this.animation;
    zt(t) && ms(t, this);
  }
  _set(t, n = !0) {
    const r = gt(t);
    if (!W.und(r)) {
      const o = xn(this);
      if (!o || !Dn(r, o.getValue())) {
        const i = Gp(r);
        !o || o.constructor != i ? Xm(this, i.create(r)) : o.setValue(r), o && re.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return xn(this);
  }
  _onStart() {
    const t = this.animation;
    t.changed || (t.changed = !0, al(this, "onStart", ln(this, sl(this, t.to)), this));
  }
  _onChange(t, n) {
    n || (this._onStart(), Jr(this.animation.onChange, t, this)), Jr(this.defaultProps.onChange, t, this), super._onChange(t, n);
  }
  _start() {
    const t = this.animation;
    xn(this).reset(gt(t.to)), t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)), ar(this) || (Q1(this, !0), ll(this) || this._resume());
  }
  _resume() {
    Pn.skipAnimation ? this.finish() : Tc.start(this);
  }
  _stop(t, n) {
    if (ar(this)) {
      Q1(this, !1);
      const r = this.animation;
      pe(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), hs(this, {
        type: "idle",
        parent: this
      });
      const o = n ? pi(this.get()) : ln(this.get(), sl(this, t != null ? t : r.to));
      bl(this._pendingCalls, o), r.changed && (r.changed = !1, al(this, "onRest", o, this));
    }
  }
}
function sl(e, t) {
  const n = vs(t), r = vs(e.get());
  return Dn(r, n);
}
function XS(e, t = e.loop, n = e.to) {
  let r = Jr(t);
  if (r) {
    const o = r !== !0 && qS(r), i = (o || e).reverse, l = !o || o.reset;
    return xs(Ge({}, e, {
      loop: t,
      default: !1,
      pause: void 0,
      to: !i || Yp(n) ? n : void 0,
      from: l ? e.from : void 0,
      reset: l
    }, o));
  }
}
function xs(e) {
  const {
    to: t,
    from: n
  } = e = qS(e), r = /* @__PURE__ */ new Set();
  return W.obj(t) && K1(t, r), W.obj(n) && K1(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function T4(e) {
  const t = xs(e);
  return W.und(t.default) && (t.default = Jm(t)), t;
}
function K1(e, t) {
  An(e, (n, r) => n != null && t.add(r));
}
const M4 = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function Y1(e, t, n) {
  e.animation[n] = t[n] !== WS(t, n) ? US(t[n], e.key) : void 0;
}
function al(e, t, ...n) {
  var r, o, i, l;
  (r = (o = e.animation)[t]) == null || r.call(o, ...n), (i = (l = e.defaultProps)[t]) == null || i.call(l, ...n);
}
const N4 = ["onStart", "onChange", "onRest"];
let D4 = 1;
class L4 {
  constructor(t, n) {
    this.id = D4++, this.springs = {}, this.queue = [], this.ref = void 0, this._flush = void 0, this._initialProps = void 0, this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._item = void 0, this._state = {
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
    return t && this.queue.push(xs(t)), this;
  }
  start(t) {
    let {
      queue: n
    } = this;
    return t ? n = At(t).map(xs) : this.queue = [], this._flush ? this._flush(this, n) : (nk(this, n), th(this, n));
  }
  stop(t, n) {
    if (t !== !!t && (n = t), n) {
      const r = this.springs;
      pe(At(n), (o) => r[o].stop(!!t));
    } else
      ys(this._state, this._lastAsyncId), this.each((r) => r.stop(!!t));
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
    An(this.springs, t);
  }
  _onFrame() {
    const {
      onStart: t,
      onChange: n,
      onRest: r
    } = this._events, o = this._active.size > 0, i = this._changed.size > 0;
    (o && !this._started || i && !this._started) && (this._started = !0, Nl(t, ([a, u]) => {
      u.value = this.get(), a(u, this, this._item);
    }));
    const l = !o && this._started, s = i || l && r.size ? this.get() : null;
    i && n.size && Nl(n, ([a, u]) => {
      u.value = s, a(u, this, this._item);
    }), l && (this._started = !1, Nl(r, ([a, u]) => {
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
function th(e, t) {
  return Promise.all(t.map((n) => ZS(e, n))).then((n) => eg(e, n));
}
async function ZS(e, t, n) {
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
  c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : pe(N4, (v) => {
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
  t.pause === !f.paused ? (f.paused = t.pause, bl(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
  const d = (r || Object.keys(e.springs)).map((v) => e.springs[v].start(t)), g = t.cancel === !0 || WS(t, "cancel") === !0;
  (c || g && f.asyncId) && d.push(QS(++e._lastAsyncId, {
    props: t,
    state: f,
    actions: {
      pause: Wp,
      resume: Wp,
      start(v, w) {
        g ? (ys(f, e._lastAsyncId), w(pi(e))) : (v.onRest = s, w(KS(c, v, f, e)));
      }
    }
  })), f.paused && await new Promise((v) => {
    f.resumeQueue.add(v);
  });
  const h = eg(e, await Promise.all(d));
  if (l && h.finished && !(n && h.noop)) {
    const v = XS(t, l, o);
    if (v)
      return nk(e, [v]), ZS(e, v, !0);
  }
  return a && re.batchedUpdates(() => a(h, e, e.item)), h;
}
function X1(e, t) {
  const n = Ge({}, e.springs);
  return t && pe(At(t), (r) => {
    W.und(r.keys) && (r = xs(r)), W.obj(r.to) || (r = Ge({}, r, {
      to: void 0
    })), tk(n, r, (o) => ek(o));
  }), JS(e, n), n;
}
function JS(e, t) {
  An(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, ji(n, e));
  });
}
function ek(e, t) {
  const n = new O4();
  return n.key = e, t && ji(n, t), n;
}
function tk(e, t, n) {
  t.keys && pe(t.keys, (r) => {
    (e[r] || (e[r] = n(r)))._prepareNode(t);
  });
}
function nk(e, t) {
  pe(t, (n) => {
    tk(e.springs, n, (r) => ek(r, e));
  });
}
function F4(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const z4 = ["children"], zc = (e) => {
  let {
    children: t
  } = e, n = F4(e, z4);
  const r = m.exports.useContext(qu), o = n.pause || !!r.pause, i = n.immediate || !!r.immediate;
  n = c4(() => ({
    pause: o,
    immediate: i
  }), [o, i]);
  const {
    Provider: l
  } = qu;
  return /* @__PURE__ */ D(l, {
    value: n,
    children: t
  });
}, qu = B4(zc, {});
zc.Provider = qu.Provider;
zc.Consumer = qu.Consumer;
function B4(e, t) {
  return Object.assign(e, m.exports.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
const j4 = () => {
  const e = [], t = function(o) {
    a4();
    const i = [];
    return pe(e, (l, s) => {
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
        const s = this._getProps(r, i, l);
        s && o.push(i.start(s));
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
function H4(e, t, n) {
  const r = W.fun(t) && t;
  r && !n && (n = []);
  const o = m.exports.useMemo(() => r || arguments.length == 3 ? j4() : void 0, []), i = m.exports.useRef(0), l = jS(), s = m.exports.useMemo(() => ({
    ctrls: [],
    queue: [],
    flush(p, y) {
      const x = X1(p, y);
      return i.current > 0 && !s.queue.length && !Object.keys(x).some((A) => !p.springs[A]) ? th(p, y) : new Promise((A) => {
        JS(p, x), s.queue.push(() => {
          A(th(p, y));
        }), l();
      });
    }
  }), []), a = m.exports.useRef([...s.ctrls]), u = [], c = D1(e) || 0;
  m.exports.useMemo(() => {
    pe(a.current.slice(e, c), (p) => {
      C4(p, o), p.stop(!0);
    }), a.current.length = e, f(c, e);
  }, [e]), m.exports.useMemo(() => {
    f(0, Math.min(c, e));
  }, n);
  function f(p, y) {
    for (let x = p; x < y; x++) {
      const b = a.current[x] || (a.current[x] = new L4(null, s.flush)), A = r ? r(x, b) : t[x];
      A && (u[x] = T4(A));
    }
  }
  const d = a.current.map((p, y) => X1(p, u[y])), g = m.exports.useContext(zc), h = D1(g), v = g !== h && k4(g);
  Ym(() => {
    i.current++, s.ctrls = a.current;
    const {
      queue: p
    } = s;
    p.length && (s.queue = [], pe(p, (y) => y())), pe(a.current, (y, x) => {
      o == null || o.add(y), v && y.start({
        default: g
      });
      const b = u[x];
      b && ($4(y, b.ref), y.ref ? y.queue.push(b) : y.start(b));
    });
  }), HS(() => () => {
    pe(s.ctrls, (p) => p.stop(!0));
  });
  const w = d.map((p) => Ge({}, p));
  return o ? [w, o] : w;
}
function V4(e, t) {
  const n = W.fun(e), [[r], o] = H4(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, o] : r;
}
let Z1;
(function(e) {
  e.MOUNT = "mount", e.ENTER = "enter", e.UPDATE = "update", e.LEAVE = "leave";
})(Z1 || (Z1 = {}));
class U4 extends tg {
  constructor(t, n) {
    super(), this.key = void 0, this.idle = !0, this.calc = void 0, this._active = /* @__PURE__ */ new Set(), this.source = t, this.calc = ps(...n);
    const r = this._get(), o = Gp(r);
    Xm(this, o.create(r));
  }
  advance(t) {
    const n = this._get(), r = this.get();
    Dn(n, r) || (xn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && J1(this._active) && rd(this);
  }
  _get() {
    const t = W.arr(this.source) ? this.source.map(gt) : At(gt(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !J1(this._active) && (this.idle = !1, pe(Lc(this), (t) => {
      t.done = !1;
    }), Pn.skipAnimation ? (re.batchedUpdates(() => this.advance()), rd(this)) : Tc.start(this));
  }
  _attach() {
    let t = 1;
    pe(At(this.source), (n) => {
      zt(n) && ji(n, this), Zp(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1));
    }), this.priority = t, this._start();
  }
  _detach() {
    pe(At(this.source), (t) => {
      zt(t) && ms(t, this);
    }), this._active.clear(), rd(this);
  }
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = At(this.source).reduce((n, r) => Math.max(n, (Zp(r) ? r.priority : 0) + 1), 0));
  }
}
function W4(e) {
  return e.idle !== !1;
}
function J1(e) {
  return !e.size || Array.from(e).every(W4);
}
function rd(e) {
  e.idle || (e.idle = !0, pe(Lc(e), (t) => {
    t.done = !0;
  }), hs(e, {
    type: "idle",
    parent: e
  }));
}
Pn.assign({
  createStringInterpolator: zS,
  to: (e, t) => new U4(e, t)
});
function ng(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const q4 = ["style", "children", "scrollTop", "scrollLeft"], rk = /^--/;
function Q4(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !rk.test(e) && !(Fl.hasOwnProperty(e) && Fl[e]) ? t + "px" : ("" + t).trim();
}
const ev = {};
function G4(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", r = t, {
    style: o,
    children: i,
    scrollTop: l,
    scrollLeft: s
  } = r, a = ng(r, q4), u = Object.values(a), c = Object.keys(a).map((f) => n || e.hasAttribute(f) ? f : ev[f] || (ev[f] = f.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  i !== void 0 && (e.textContent = i);
  for (let f in o)
    if (o.hasOwnProperty(f)) {
      const d = Q4(f, o[f]);
      rk.test(f) ? e.style.setProperty(f, d) : e.style[f] = d;
    }
  c.forEach((f, d) => {
    e.setAttribute(f, u[d]);
  }), l !== void 0 && (e.scrollTop = l), s !== void 0 && (e.scrollLeft = s);
}
let Fl = {
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
const K4 = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), Y4 = ["Webkit", "Ms", "Moz", "O"];
Fl = Object.keys(Fl).reduce((e, t) => (Y4.forEach((n) => e[K4(n, t)] = e[t]), e), Fl);
const X4 = ["x", "y", "z"], Z4 = /^(matrix|translate|scale|rotate|skew)/, J4 = /^(translate)/, eR = /^(rotate|skew)/, od = (e, t) => W.num(e) && e !== 0 ? e + t : e, ru = (e, t) => W.arr(e) ? e.every((n) => ru(n, t)) : W.num(e) ? e === t : parseFloat(e) === t;
class tR extends Fc {
  constructor(t) {
    let {
      x: n,
      y: r,
      z: o
    } = t, i = ng(t, X4);
    const l = [], s = [];
    (n || r || o) && (l.push([n || 0, r || 0, o || 0]), s.push((a) => [`translate3d(${a.map((u) => od(u, "px")).join(",")})`, ru(a, 0)])), An(i, (a, u) => {
      if (u === "transform")
        l.push([a || ""]), s.push((c) => [c, c === ""]);
      else if (Z4.test(u)) {
        if (delete i[u], W.und(a))
          return;
        const c = J4.test(u) ? "px" : eR.test(u) ? "deg" : "";
        l.push(At(a)), s.push(u === "rotate3d" ? ([f, d, g, h]) => [`rotate3d(${f},${d},${g},${od(h, c)})`, ru(h, 0)] : (f) => [`${u}(${f.map((d) => od(d, c)).join(",")})`, ru(f, u.startsWith("scale") ? 1 : 0)]);
      }
    }), l.length && (i.transform = new nR(l, s)), super(i);
  }
}
class nR extends DS {
  constructor(t, n) {
    super(), this._value = null, this.inputs = t, this.transforms = n;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let t = "", n = !0;
    return pe(this.inputs, (r, o) => {
      const i = gt(r[0]), [l, s] = this.transforms[o](W.arr(i) ? i : r.map(gt));
      t += " " + l, n = n && s;
    }), n ? "none" : t;
  }
  observerAdded(t) {
    t == 1 && pe(this.inputs, (n) => pe(n, (r) => zt(r) && ji(r, this)));
  }
  observerRemoved(t) {
    t == 0 && pe(this.inputs, (n) => pe(n, (r) => zt(r) && ms(r, this)));
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), hs(this, t);
  }
}
const rR = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], oR = ["scrollTop", "scrollLeft"];
Pn.assign({
  batchedUpdates: Kt.exports.unstable_batchedUpdates,
  createStringInterpolator: zS,
  colors: j_
});
const iR = y4(rR, {
  applyAnimatedValues: G4,
  createAnimatedStyle: (e) => new tR(e),
  getComponentProps: (e) => ng(e, oR)
}), lR = iR.animated;
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
function tv() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = ok(t)) && (r && (r += " "), r += n);
  return r;
}
function sR(e, t, { includes: n = [], ...r } = {}) {
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
var Se = "colors", at = "sizes", Y = "space", ik = { gap: Y, gridGap: Y, columnGap: Y, gridColumnGap: Y, rowGap: Y, gridRowGap: Y, inset: Y, insetBlock: Y, insetBlockEnd: Y, insetBlockStart: Y, insetInline: Y, insetInlineEnd: Y, insetInlineStart: Y, margin: Y, marginTop: Y, marginRight: Y, marginBottom: Y, marginLeft: Y, marginBlock: Y, marginBlockEnd: Y, marginBlockStart: Y, marginInline: Y, marginInlineEnd: Y, marginInlineStart: Y, padding: Y, paddingTop: Y, paddingRight: Y, paddingBottom: Y, paddingLeft: Y, paddingBlock: Y, paddingBlockEnd: Y, paddingBlockStart: Y, paddingInline: Y, paddingInlineEnd: Y, paddingInlineStart: Y, top: Y, right: Y, bottom: Y, left: Y, scrollMargin: Y, scrollMarginTop: Y, scrollMarginRight: Y, scrollMarginBottom: Y, scrollMarginLeft: Y, scrollMarginX: Y, scrollMarginY: Y, scrollMarginBlock: Y, scrollMarginBlockEnd: Y, scrollMarginBlockStart: Y, scrollMarginInline: Y, scrollMarginInlineEnd: Y, scrollMarginInlineStart: Y, scrollPadding: Y, scrollPaddingTop: Y, scrollPaddingRight: Y, scrollPaddingBottom: Y, scrollPaddingLeft: Y, scrollPaddingX: Y, scrollPaddingY: Y, scrollPaddingBlock: Y, scrollPaddingBlockEnd: Y, scrollPaddingBlockStart: Y, scrollPaddingInline: Y, scrollPaddingInlineEnd: Y, scrollPaddingInlineStart: Y, fontSize: "fontSizes", background: Se, backgroundColor: Se, backgroundImage: Se, borderImage: Se, border: Se, borderBlock: Se, borderBlockEnd: Se, borderBlockStart: Se, borderBottom: Se, borderBottomColor: Se, borderColor: Se, borderInline: Se, borderInlineEnd: Se, borderInlineStart: Se, borderLeft: Se, borderLeftColor: Se, borderRight: Se, borderRightColor: Se, borderTop: Se, borderTopColor: Se, caretColor: Se, color: Se, columnRuleColor: Se, fill: Se, outline: Se, outlineColor: Se, stroke: Se, textDecorationColor: Se, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: at, minBlockSize: at, maxBlockSize: at, inlineSize: at, minInlineSize: at, maxInlineSize: at, width: at, minWidth: at, maxWidth: at, height: at, minHeight: at, maxHeight: at, flexBasis: at, gridTemplateColumns: at, gridTemplateRows: at, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, aR = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, Vi = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n, ...r) => {
    const o = ((i) => JSON.stringify(i, aR))(t);
    return o in e ? e[o] : e[o] = n(t, ...r);
  };
}, lo = Symbol.for("sxs.internal"), rg = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), nv = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: uR } = Object.prototype, nh = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), cR = /\s+(?![^()]*\))/, zo = (e) => (t) => e(...typeof t == "string" ? String(t).split(cR) : [t]), rv = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: zo((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: zo((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: zo((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: zo((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: zo((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: zo((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, id = /([\d.]+)([^]*)/, fR = (e, t) => e.length ? e.reduce((n, r) => (n.push(...t.map((o) => o.includes("&") ? o.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(o) ? `:is(${r})` : r) : r + " " + o)), n), []) : t, dR = (e, t) => e in pR && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (n, r, o, i) => r + (o === "stretch" ? `-moz-available${i};${nh(e)}:${r}-webkit-fill-available` : `-moz-fit-content${i};${nh(e)}:${r}fit-content`) + i) : String(t), pR = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, Yn = (e) => e ? e + "-" : "", lk = (e, t, n) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (r, o, i, l, s) => l == "$" == !!i ? r : (o || l == "--" ? "calc(" : "") + "var(--" + (l === "$" ? Yn(t) + (s.includes("$") ? "" : Yn(n)) + s.replace(/\$/g, "-") : s) + ")" + (o || l == "--" ? "*" + (o || "") + (i || "1") + ")" : "")), hR = /\s*,\s*(?![^()]*\))/, mR = Object.prototype.toString, ni = (e, t, n, r, o) => {
  let i, l, s;
  const a = (u, c, f) => {
    let d, g;
    const h = (v) => {
      for (d in v) {
        const y = d.charCodeAt(0) === 64, x = y && Array.isArray(v[d]) ? v[d] : [v[d]];
        for (g of x) {
          const b = /[A-Z]/.test(p = d) ? p : p.replace(/-[^]/g, (S) => S[1].toUpperCase()), A = typeof g == "object" && g && g.toString === mR && (!r.utils[b] || !c.length);
          if (b in r.utils && !A) {
            const S = r.utils[b];
            if (S !== l) {
              l = S, h(S(g)), l = null;
              continue;
            }
          } else if (b in rv) {
            const S = rv[b];
            if (S !== s) {
              s = S, h(S(g)), s = null;
              continue;
            }
          }
          if (y && (w = d.slice(1) in r.media ? "@media " + r.media[d.slice(1)] : d, d = w.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (S, E, $, P, R, I) => {
            const T = id.test(E), L = 0.0625 * (T ? -1 : 1), [B, z] = T ? [P, E] : [E, P];
            return "(" + ($[0] === "=" ? "" : $[0] === ">" === T ? "max-" : "min-") + B + ":" + ($[0] !== "=" && $.length === 1 ? z.replace(id, (_, H, N) => Number(H) + L * ($ === ">" ? 1 : -1) + N) : z) + (R ? ") and (" + (R[0] === ">" ? "min-" : "max-") + B + ":" + (R.length === 1 ? I.replace(id, (_, H, N) => Number(H) + L * (R === ">" ? -1 : 1) + N) : I) : "") + ")";
          })), A) {
            const S = y ? f.concat(d) : [...f], E = y ? [...c] : fR(c, d.split(hR));
            i !== void 0 && o(ov(...i)), i = void 0, a(g, E, S);
          } else
            i === void 0 && (i = [[], c, f]), d = y || d.charCodeAt(0) !== 36 ? d : `--${Yn(r.prefix)}${d.slice(1).replace(/\$/g, "-")}`, g = A ? g : typeof g == "number" ? g && b in gR ? String(g) + "px" : String(g) : lk(dR(b, g == null ? "" : g), r.prefix, r.themeMap[b]), i[0].push(`${y ? `${d} ` : `${nh(d)}:`}${g}`);
        }
      }
      var w, p;
    };
    h(u), i !== void 0 && o(ov(...i)), i = void 0;
  };
  a(e, t, n);
}, ov = (e, t, n) => `${n.map((r) => `${r}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(n.length ? n.length + 1 : 0).join("}")}`, gR = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, iv = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), so = (e) => ((t) => {
  let n, r = "";
  for (n = Math.abs(t); n > 52; n = n / 52 | 0)
    r = iv(n % 52) + r;
  return iv(n % 52) + r;
})(((t, n) => {
  let r = n.length;
  for (; r; )
    t = 33 * t ^ n.charCodeAt(--r);
  return t;
})(5381, JSON.stringify(e)) >>> 0), Sl = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], vR = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, yR = (e) => {
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
      if (vR(s)) {
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
          const g = d.slice(14, -3).trim().split(/\s+/), h = Sl[g[0]];
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
    for (let s = Sl.length - 1; s >= 0; --s) {
      const a = Sl[s];
      if (!l[a]) {
        const u = Sl[s + 1], c = l[u] ? l[u].index : i.cssRules.length;
        i.insertRule("@media{}", c), i.insertRule(`--sxs{--sxs:${s}}`, c), l[a] = { group: i.cssRules[c + 1], index: c, cache: /* @__PURE__ */ new Set([s]) };
      }
      xR(l[a]);
    }
  };
  return r(), t;
}, xR = (e) => {
  const t = e.group;
  let n = t.cssRules.length;
  e.apply = (r) => {
    try {
      t.insertRule(r, n), ++n;
    } catch {
    }
  };
}, ul = Symbol(), wR = Vi(), lv = (e, t) => wR(e, () => (...n) => {
  let r = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const o of n)
    if (o != null)
      if (o[lo]) {
        r.type == null && (r.type = o[lo].type);
        for (const i of o[lo].composers)
          r.composers.add(i);
      } else
        o.constructor !== Object || o.$$typeof ? r.type == null && (r.type = o) : r.composers.add(bR(o, e));
  return r.type == null && (r.type = "span"), r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]), SR(e, r, t);
}), bR = ({ variants: e, compoundVariants: t, defaultVariants: n, ...r }, o) => {
  const i = `${Yn(o.prefix)}c-${so(r)}`, l = [], s = [], a = /* @__PURE__ */ Object.create(null), u = [];
  for (const d in n)
    a[d] = String(n[d]);
  if (typeof e == "object" && e)
    for (const d in e) {
      c = a, f = d, uR.call(c, f) || (a[d] = "undefined");
      const g = e[d];
      for (const h in g) {
        const v = { [d]: String(h) };
        String(h) === "undefined" && u.push(d);
        const w = g[h], p = [v, w, !nv(w)];
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
      const v = [h, g, !nv(g)];
      s.push(v);
    }
  return [i, r, l, s, a, u];
}, SR = (e, t, n) => {
  const [r, o, i, l] = kR(t.composers), s = typeof t.type == "function" || t.type.$$typeof ? ((f) => {
    function d() {
      for (let g = 0; g < d[ul].length; g++) {
        const [h, v] = d[ul][g];
        f.rules[h].apply(v);
      }
      return d[ul] = [], null;
    }
    return d[ul] = [], d.rules = {}, Sl.forEach((g) => d.rules[g] = { apply: (h) => d[ul].push([g, h]) }), d;
  })(n) : null, a = (s || n).rules, u = `.${r}${o.length > 1 ? `:where(.${o.slice(1).join(".")})` : ""}`, c = (f) => {
    f = typeof f == "object" && f || CR;
    const { css: d, ...g } = f, h = {};
    for (const p in i)
      if (delete g[p], p in f) {
        let y = f[p];
        typeof y == "object" && y ? h[p] = { "@initial": i[p], ...y } : (y = String(y), h[p] = y !== "undefined" || l.has(p) ? y : i[p]);
      } else
        h[p] = i[p];
    const v = /* @__PURE__ */ new Set([...o]);
    for (const [p, y, x, b] of t.composers) {
      n.rules.styled.cache.has(p) || (n.rules.styled.cache.add(p), ni(y, [`.${p}`], [], e, (E) => {
        a.styled.apply(E);
      }));
      const A = sv(x, h, e.media), S = sv(b, h, e.media, !0);
      for (const E of A)
        if (E !== void 0)
          for (const [$, P, R] of E) {
            const I = `${p}-${so(P)}-${$}`;
            v.add(I);
            const T = (R ? n.rules.resonevar : n.rules.onevar).cache, L = R ? a.resonevar : a.onevar;
            T.has(I) || (T.add(I), ni(P, [`.${I}`], [], e, (B) => {
              L.apply(B);
            }));
          }
      for (const E of S)
        if (E !== void 0)
          for (const [$, P] of E) {
            const R = `${p}-${so(P)}-${$}`;
            v.add(R), n.rules.allvar.cache.has(R) || (n.rules.allvar.cache.add(R), ni(P, [`.${R}`], [], e, (I) => {
              a.allvar.apply(I);
            }));
          }
    }
    if (typeof d == "object" && d) {
      const p = `${r}-i${so(d)}-css`;
      v.add(p), n.rules.inline.cache.has(p) || (n.rules.inline.cache.add(p), ni(d, [`.${p}`], [], e, (y) => {
        a.inline.apply(y);
      }));
    }
    for (const p of String(f.className || "").trim().split(/\s+/))
      p && v.add(p);
    const w = g.className = [...v].join(" ");
    return { type: t.type, className: w, selector: u, props: g, toString: () => w, deferredInjector: s };
  };
  return rg(c, { className: r, selector: u, [lo]: t, toString: () => (n.rules.styled.cache.has(r) || c(), r) });
}, kR = (e) => {
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
}, sv = (e, t, n, r) => {
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
}, CR = {}, $R = Vi(), ER = (e, t) => $R(e, () => (...n) => {
  const r = () => {
    for (let o of n) {
      o = typeof o == "object" && o || {};
      let i = so(o);
      if (!t.rules.global.cache.has(i)) {
        if (t.rules.global.cache.add(i), "@import" in o) {
          let l = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let s of [].concat(o["@import"]))
            s = s.includes('"') || s.includes("'") ? s : `"${s}"`, t.sheet.insertRule(`@import ${s};`, l++);
          delete o["@import"];
        }
        ni(o, [], [], e, (l) => {
          t.rules.global.apply(l);
        });
      }
    }
    return "";
  };
  return rg(r, { toString: r });
}), AR = Vi(), PR = (e, t) => AR(e, () => (n) => {
  const r = `${Yn(e.prefix)}k-${so(n)}`, o = () => {
    if (!t.rules.global.cache.has(r)) {
      t.rules.global.cache.add(r);
      const i = [];
      ni(n, [], [], e, (s) => i.push(s));
      const l = `@keyframes ${r}{${i.join("")}}`;
      t.rules.global.apply(l);
    }
    return r;
  };
  return rg(o, { get name() {
    return o();
  }, toString: o });
}), _R = class {
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
}, RR = Vi(), IR = (e, t) => RR(e, () => (n, r) => {
  r = typeof n == "object" && n || Object(r);
  const o = `.${n = (n = typeof n == "string" ? n : "") || `${Yn(e.prefix)}t-${so(r)}`}`, i = {}, l = [];
  for (const a in r) {
    i[a] = {};
    for (const u in r[a]) {
      const c = `--${Yn(e.prefix)}${a}-${u}`, f = lk(String(r[a][u]), e.prefix, a);
      i[a][u] = new _R(u, f, a, e.prefix), l.push(`${c}:${f}`);
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
}), OR = Vi(), TR = Vi(), MR = (e) => {
  const t = ((n) => {
    let r = !1;
    const o = OR(n, (i) => {
      r = !0;
      const l = "prefix" in (i = typeof i == "object" && i || {}) ? String(i.prefix) : "", s = typeof i.media == "object" && i.media || {}, a = typeof i.root == "object" ? i.root || null : globalThis.document || null, u = typeof i.theme == "object" && i.theme || {}, c = { prefix: l, media: s, theme: u, themeMap: typeof i.themeMap == "object" && i.themeMap || { ...ik }, utils: typeof i.utils == "object" && i.utils || {} }, f = yR(a), d = { css: lv(c, f), globalCss: ER(c, f), keyframes: PR(c, f), createTheme: IR(c, f), reset() {
        f.reset(), d.theme.toString();
      }, theme: {}, sheet: f, config: c, prefix: l, getCssText: f.toString, toString: f.toString };
      return String(d.theme = d.createTheme(u)), d;
    });
    return r || o.reset(), o;
  })(e);
  return t.styled = (({ config: n, sheet: r }) => TR(n, () => {
    const o = lv(n, r);
    return (...i) => {
      const l = o(...i), s = l[lo].type, a = je.forwardRef((u, c) => {
        const f = u && u.as || s, { props: d, deferredInjector: g } = l(u);
        return delete d.as, d.ref = c, g ? je.createElement(je.Fragment, null, je.createElement(f, d), je.createElement(g, null)) : je.createElement(f, d);
      });
      return a.className = l.className, a.displayName = `Styled.${s.displayName || s.name || s}`, a.selector = l.selector, a.toString = () => l.selector, a[lo] = l[lo], a;
    };
  }))(t), t;
};
function NR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ws(e, t) {
  return ws = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, ws(e, t);
}
function DR(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ws(e, t);
}
function rh(e) {
  return rh = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, rh(e);
}
function LR(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function FR() {
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
function ou(e, t, n) {
  return FR() ? ou = Reflect.construct : ou = function(o, i, l) {
    var s = [null];
    s.push.apply(s, i);
    var a = Function.bind.apply(o, s), u = new a();
    return l && ws(u, l.prototype), u;
  }, ou.apply(null, arguments);
}
function oh(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return oh = function(r) {
    if (r === null || !LR(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return ou(r, arguments, rh(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ws(o, r);
  }, oh(e);
}
var br = /* @__PURE__ */ function(e) {
  DR(t, e);
  function t(n) {
    var r;
    return r = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + n + " for more information.") || this, NR(r);
  }
  return t;
}(/* @__PURE__ */ oh(Error)), zR = /--[\S]*/g;
function BR(e, t) {
  if (!e || !e.match(zR))
    throw new br(73);
  var n;
  if (typeof document < "u" && document.documentElement !== null && (n = getComputedStyle(document.documentElement).getPropertyValue(e)), n)
    return n.trim();
  if (t)
    return t;
  throw new br(74);
}
function ld(e) {
  return Math.round(e * 255);
}
function jR(e, t, n) {
  return ld(e) + "," + ld(t) + "," + ld(n);
}
function av(e, t, n, r) {
  if (r === void 0 && (r = jR), t === 0)
    return r(n, n, n);
  var o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * t, l = i * (1 - Math.abs(o % 2 - 1)), s = 0, a = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, a = l) : o >= 1 && o < 2 ? (s = l, a = i) : o >= 2 && o < 3 ? (a = i, u = l) : o >= 3 && o < 4 ? (a = l, u = i) : o >= 4 && o < 5 ? (s = l, u = i) : o >= 5 && o < 6 && (s = i, u = l);
  var c = n - i / 2, f = s + c, d = a + c, g = u + c;
  return r(f, d, g);
}
var uv = {
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
function HR(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return uv[t] ? "#" + uv[t] : e;
}
var VR = /^#[a-fA-F0-9]{6}$/, UR = /^#[a-fA-F0-9]{8}$/, WR = /^#[a-fA-F0-9]{3}$/, qR = /^#[a-fA-F0-9]{4}$/, sd = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i, QR = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i, GR = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, KR = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
function YR(e) {
  if (typeof e != "string")
    throw new br(3);
  var t = HR(e);
  if (t.match(VR))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(UR)) {
    var n = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: n
    };
  }
  if (t.match(WR))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(qR)) {
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
  var i = QR.exec(t.substring(0, 50));
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
      alpha: parseFloat("" + i[4])
    };
  var l = GR.exec(t);
  if (l) {
    var s = parseInt("" + l[1], 10), a = parseInt("" + l[2], 10) / 100, u = parseInt("" + l[3], 10) / 100, c = "rgb(" + av(s, a, u) + ")", f = sd.exec(c);
    if (!f)
      throw new br(4, t, c);
    return {
      red: parseInt("" + f[1], 10),
      green: parseInt("" + f[2], 10),
      blue: parseInt("" + f[3], 10)
    };
  }
  var d = KR.exec(t.substring(0, 50));
  if (d) {
    var g = parseInt("" + d[1], 10), h = parseInt("" + d[2], 10) / 100, v = parseInt("" + d[3], 10) / 100, w = "rgb(" + av(g, h, v) + ")", p = sd.exec(w);
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
var XR = function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, cv = XR;
function Bo(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function fv(e, t, n) {
  if (typeof e == "number" && typeof t == "number" && typeof n == "number")
    return cv("#" + Bo(e) + Bo(t) + Bo(n));
  if (typeof e == "object" && t === void 0 && n === void 0)
    return cv("#" + Bo(e.red) + Bo(e.green) + Bo(e.blue));
  throw new br(6);
}
function ZR(e, t, n, r) {
  if (typeof e == "string" && typeof t == "number") {
    var o = YR(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof n == "number" && typeof r == "number")
      return r >= 1 ? fv(e, t, n) : "rgba(" + e + "," + t + "," + n + "," + r + ")";
    if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0)
      return e.alpha >= 1 ? fv(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new br(7);
}
const dv = {
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
}, pv = (e) => e.map((t) => `${t} cubic-bezier(0.4, 0, 0.2, 1) 150ms`).join(","), Nt = {
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
}, Dt = {
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
}, og = MR({
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
      "gray-100": Dt[100]({ opacityValue: 1 }),
      "gray-200": Dt[200]({ opacityValue: 1 }),
      "gray-300": Dt[300]({ opacityValue: 1 }),
      "gray-400": Dt[400]({ opacityValue: 1 }),
      "gray-500": Dt[500]({ opacityValue: 1 }),
      "gray-600": Dt[600]({ opacityValue: 1 }),
      "gray-700": Dt[700]({ opacityValue: 1 }),
      "gray-800": Dt[800]({ opacityValue: 1 }),
      "gray-900": Dt[900]({ opacityValue: 1 }),
      "gray-1000": Dt[1e3]({ opacityValue: 1 }),
      "gray-1100": Dt[1100]({ opacityValue: 1 }),
      "gray-1200": Dt[1200]({ opacityValue: 1 }),
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
    space: dv,
    sizes: {
      ...dv,
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
      default: pv([
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
      colors: pv([
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
      backgroundColor: ZR(BR("--mayumi-colors-underPageBackgroundColor", "#1e1e1e"), 0.85),
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
  themeMap: ik
}), JR = og.styled;
og.globalCss;
og.getCssText;
var hv = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, tn = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, e6 = (...e) => [...e].flat().filter(Boolean), sk = (e, t) => {
  let n = {};
  for (let r in e)
    t != null && t.hasOwnProperty(r) ? n[r] = typeof e[r] == "object" ? sk(e[r], t[r]) : t[r] + " " + e[r] : n[r] = e[r];
  for (let r in t)
    n.hasOwnProperty(r) || (n[r] = t[r]);
  return n;
}, mv = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
function t6() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = ak(t)) && (r && (r += " "), r += n);
  return r;
}
function ak(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = ak(e[r])) && (n && (n += " "), n += t);
  return n;
}
function ih() {
  return ih = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ih.apply(this, arguments);
}
var ig = "-";
function n6(e) {
  var t = o6(e);
  function n(o) {
    var i = o.split(ig);
    return i[0] === "" && i.length !== 1 && i.shift(), uk(i, t) || r6(o);
  }
  function r(o) {
    return e.conflictingClassGroups[o] || [];
  }
  return {
    getClassGroupId: n,
    getConflictingClassGroupIds: r
  };
}
function uk(e, t) {
  var n;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], o = t.nextPart.get(r), i = o ? uk(e.slice(1), o) : void 0;
  if (i)
    return i;
  if (t.validators.length !== 0) {
    var l = e.join(ig);
    return (n = t.validators.find(function(s) {
      var a = s.validator;
      return a(l);
    })) == null ? void 0 : n.classGroupId;
  }
}
var gv = /^\[(.+)\]$/;
function r6(e) {
  if (gv.test(e)) {
    var t = gv.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function o6(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = l6(Object.entries(e.classGroups), n);
  return o.forEach(function(i) {
    var l = i[0], s = i[1];
    lh(s, r, l, t);
  }), r;
}
function lh(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var i = o === "" ? t : vv(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (i6(o)) {
        lh(o(r), t, n, r);
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
      lh(a, vv(t, s), n, r);
    });
  });
}
function vv(e, t) {
  var n = e;
  return t.split(ig).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function i6(e) {
  return e.isThemeGetter;
}
function l6(e, t) {
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
function s6(e) {
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
var ck = "!";
function a6(e) {
  var t = e.separator || ":";
  return function(r) {
    for (var o = 0, i = [], l = 0, s = 0; s < r.length; s++) {
      var a = r[s];
      o === 0 && a === t[0] && (t.length === 1 || r.slice(s, s + t.length) === t) && (i.push(r.slice(l, s)), l = s + t.length), a === "[" ? o++ : a === "]" && o--;
    }
    var u = i.length === 0 ? r : r.substring(l), c = u.startsWith(ck), f = c ? u.substring(1) : u;
    return {
      modifiers: i,
      hasImportantModifier: c,
      baseClassName: f
    };
  };
}
function u6(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function c6(e) {
  return ih({
    cache: s6(e.cacheSize),
    splitModifiers: a6(e)
  }, n6(e));
}
var f6 = /\s+/;
function d6(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(f6).map(function(l) {
    var s = n(l), a = s.modifiers, u = s.hasImportantModifier, c = s.baseClassName, f = r(c);
    if (!f)
      return {
        isTailwindClass: !1,
        originalClassName: l
      };
    var d = u6(a).join(":"), g = u ? d + ck : d;
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
function sh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, i, l = s;
  function s(u) {
    var c = t[0], f = t.slice(1), d = f.reduce(function(g, h) {
      return h(g);
    }, c());
    return r = c6(d), o = r.cache.get, i = r.cache.set, l = a, a(u);
  }
  function a(u) {
    var c = o(u);
    if (c)
      return c;
    var f = d6(u, r);
    return i(u, f), f;
  }
  return function() {
    return l(t6.apply(null, arguments));
  };
}
function _e(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var fk = /^\[(?:([a-z-]+):)?(.+)\]$/i, p6 = /^\d+\/\d+$/, h6 = /* @__PURE__ */ new Set(["px", "full", "screen"]), m6 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, g6 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))/, v6 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function en(e) {
  return zl(e) || h6.has(e) || p6.test(e) || Zr(e);
}
function Zr(e) {
  return Eo(e, "length", S6);
}
function y6(e) {
  return Eo(e, "size", dk);
}
function x6(e) {
  return Eo(e, "position", dk);
}
function w6(e) {
  return Eo(e, "url", k6);
}
function ad(e) {
  return Eo(e, "number", zl);
}
function zl(e) {
  return !Number.isNaN(Number(e));
}
function cl(e) {
  return yv(e) || Eo(e, "number", yv);
}
function ze(e) {
  return fk.test(e);
}
function fl() {
  return !0;
}
function ur(e) {
  return m6.test(e);
}
function b6(e) {
  return Eo(e, "", C6);
}
function Eo(e, t, n) {
  var r = fk.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function S6(e) {
  return g6.test(e);
}
function dk() {
  return !1;
}
function k6(e) {
  return e.startsWith("url(");
}
function yv(e) {
  return Number.isInteger(Number(e));
}
function C6(e) {
  return v6.test(e);
}
function ah() {
  var e = _e("colors"), t = _e("spacing"), n = _e("blur"), r = _e("brightness"), o = _e("borderColor"), i = _e("borderRadius"), l = _e("borderSpacing"), s = _e("borderWidth"), a = _e("contrast"), u = _e("grayscale"), c = _e("hueRotate"), f = _e("invert"), d = _e("gap"), g = _e("gradientColorStops"), h = _e("inset"), v = _e("margin"), w = _e("opacity"), p = _e("padding"), y = _e("saturate"), x = _e("scale"), b = _e("sepia"), A = _e("skew"), S = _e("space"), E = _e("translate"), $ = function() {
    return ["auto", "contain", "none"];
  }, P = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, R = function() {
    return ["auto", t];
  }, I = function() {
    return ["", en];
  }, T = function() {
    return ["auto", zl, ze];
  }, L = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, B = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, z = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, _ = function() {
    return ["start", "end", "center", "between", "around", "evenly"];
  }, H = function() {
    return ["", "0", ze];
  }, N = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, O = function() {
    return [zl, ad];
  }, M = function() {
    return [zl, ze];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [fl],
      spacing: [en],
      blur: ["none", "", ur, Zr],
      brightness: O(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ur, Zr],
      borderSpacing: [t],
      borderWidth: I(),
      contrast: O(),
      grayscale: H(),
      hueRotate: M(),
      invert: H(),
      gap: [t],
      gradientColorStops: [e],
      inset: R(),
      margin: R(),
      opacity: O(),
      padding: [t],
      saturate: O(),
      scale: O(),
      sepia: H(),
      skew: M(),
      space: [t],
      translate: [t]
    },
    classGroups: {
      aspect: [{
        aspect: ["auto", "square", "video", ze]
      }],
      container: ["container"],
      columns: [{
        columns: [ur]
      }],
      "break-after": [{
        "break-after": N()
      }],
      "break-before": [{
        "break-before": N()
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
        object: [].concat(L(), [ze])
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
        z: ["auto", cl]
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
        order: ["first", "last", "none", cl]
      }],
      "grid-cols": [{
        "grid-cols": [fl]
      }],
      "col-start-end": [{
        col: ["auto", {
          span: [cl]
        }, ze]
      }],
      "col-start": [{
        "col-start": T()
      }],
      "col-end": [{
        "col-end": T()
      }],
      "grid-rows": [{
        "grid-rows": [fl]
      }],
      "row-start-end": [{
        row: ["auto", {
          span: [cl]
        }, ze]
      }],
      "row-start": [{
        "row-start": T()
      }],
      "row-end": [{
        "row-end": T()
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
        "min-w": ["min", "max", "fit", en]
      }],
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [ur]
        }, ur, Zr]
      }],
      h: [{
        h: [t, "auto", "min", "max", "fit"]
      }],
      "min-h": [{
        "min-h": ["min", "max", "fit", en]
      }],
      "max-h": [{
        "max-h": [t, "min", "max", "fit"]
      }],
      "font-size": [{
        text: ["base", ur, Zr]
      }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ad]
      }],
      "font-family": [{
        font: [fl]
      }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Zr]
      }],
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", en]
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
        decoration: [].concat(B(), ["wavy"])
      }],
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", en]
      }],
      "underline-offset": [{
        "underline-offset": ["auto", en]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Zr]
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
        bg: [].concat(L(), [x6])
      }],
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      "bg-size": [{
        bg: ["auto", "cover", "contain", y6]
      }],
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, w6]
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
        border: [].concat(B(), ["hidden"])
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
        divide: B()
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
        outline: [""].concat(B())
      }],
      "outline-offset": [{
        "outline-offset": [en]
      }],
      "outline-w": [{
        outline: [en]
      }],
      "outline-color": [{
        outline: [e]
      }],
      "ring-w": [{
        ring: I()
      }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{
        ring: [e]
      }],
      "ring-opacity": [{
        "ring-opacity": [w]
      }],
      "ring-offset-w": [{
        "ring-offset": [en]
      }],
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      shadow: [{
        shadow: ["", "inner", "none", ur, b6]
      }],
      "shadow-color": [{
        shadow: [fl]
      }],
      opacity: [{
        opacity: [w]
      }],
      "mix-blend": [{
        "mix-blend": z()
      }],
      "bg-blend": [{
        "bg-blend": z()
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
        "drop-shadow": ["", "none", ur, ze]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ze]
      }],
      duration: [{
        duration: M()
      }],
      ease: [{
        ease: ["linear", "in", "out", "in-out", ze]
      }],
      delay: [{
        delay: M()
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
        rotate: [cl, ze]
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
        stroke: [en, ad]
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
var $6 = /* @__PURE__ */ sh(ah);
function E6(e, t) {
  for (var n in t)
    pk(e, n, t[n]);
  return e;
}
var A6 = Object.prototype.hasOwnProperty, P6 = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function pk(e, t, n) {
  if (!A6.call(e, t) || P6.has(typeof n) || n === null) {
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
      pk(e[t], r, n[r]);
  }
}
function _6(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return typeof e == "function" ? sh.apply(void 0, [ah, e].concat(n)) : sh.apply(void 0, [function() {
    return E6(ah(), e);
  }].concat(n));
}
var Qu = (...e) => e.flat(1 / 0).filter(Boolean).join(" "), dl = (...e) => (t = {}) => t.twMerge ? (tn(t.twMergeConfig) ? $6 : _6(t.twMergeConfig))(Qu(e)) : Qu(e), xv = (e, t) => {
  let n = {};
  return typeof e != "object" || typeof t != "object" || Object.keys(e).forEach((r) => {
    t[r] ? n[r] = Qu([e[r], t[r]]) : n[r] = e[r];
  }), n;
}, R6 = { twMerge: !0, twMergeConfig: {} }, I6 = (e, t = R6) => {
  var n, r, o, i, l;
  let { slots: s = {}, variants: a = {}, compoundVariants: u = [], defaultVariants: c = {} } = e, f = Qu((n = e == null ? void 0 : e.extend) == null ? void 0 : n.base, e == null ? void 0 : e.base), d = sk(a, (r = e == null ? void 0 : e.extend) == null ? void 0 : r.variants), g = Object.assign({}, (o = e == null ? void 0 : e.extend) == null ? void 0 : o.defaultVariants, c), h = tn(s) ? {} : { base: e == null ? void 0 : e.base, ...s }, v = tn((i = e == null ? void 0 : e.extend) == null ? void 0 : i.slots) ? h : xv((l = e == null ? void 0 : e.extend) == null ? void 0 : l.slots, tn(h) ? { base: e == null ? void 0 : e.base } : h), w = (y) => {
    var x, b, A;
    if (tn(d) && tn(s) && tn((x = e == null ? void 0 : e.extend) == null ? void 0 : x.slots))
      return dl(f, y == null ? void 0 : y.class, y == null ? void 0 : y.className)(t);
    if (u && !Array.isArray(u))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof u}`);
    let S = (B, z, _ = [], H) => {
      let N = _;
      if (typeof z == "string")
        N.push(mv(z).split(" ").map((O) => `${B}:${O}`));
      else if (Array.isArray(z))
        N.push(z.flatMap((O) => `${B}:${O}`));
      else if (typeof z == "object" && typeof H == "string") {
        let O = z == null ? void 0 : z[H];
        if (O && typeof O == "string") {
          let M = mv(O);
          N[H] = N[H] ? [...N[H], ...M.split(" ").map((k) => `${B}:${k}`)] : M.split(" ").map((k) => `${B}:${k}`);
        } else
          Array.isArray(O) && O.length > 0 && (N[H] = O.flatMap((M) => `${B}:${M}`));
      }
      return N;
    }, E = (B, z = d, _ = null) => {
      let H = z == null ? void 0 : z[B];
      if (typeof H != "object" || tn(H))
        return null;
      let N = y == null ? void 0 : y[B], O = g == null ? void 0 : g[B], M = [];
      if (N === null)
        return null;
      let k = hv(N);
      typeof k == "object" && (M = Object.keys(k).reduce((J, ne) => {
        let se = k[ne], ee = H == null ? void 0 : H[se];
        return ne === "initial" ? (O = se, J) : S(ne, ee, J, _);
      }, []));
      let C = H[k] || H[hv(O)];
      return typeof M == "object" && typeof _ == "string" && M[_] ? xv(M, C) : M.length > 0 ? [C, ...M] : C;
    }, $ = () => d ? Object.keys(d).map((B) => E(B, d)) : null, P = (B) => !d || typeof d != "object" ? null : Object.keys(d).map((z) => {
      let _ = E(z, d, B);
      return B === "base" && typeof _ == "string" ? _ : _ && _[B];
    }).filter(Boolean), R = y && Object.fromEntries(Object.entries(y).filter(([, B]) => B !== void 0)), I = (B = []) => B == null ? void 0 : B.filter(({ class: z, className: _, ...H }) => Object.entries(H).every(([N, O]) => {
      var M;
      let k = typeof (y == null ? void 0 : y[N]) == "object" ? (M = y[N]) == null ? void 0 : M.initial : {}, C = { ...g, ...k, ...R };
      return Array.isArray(O) ? O.includes(C[N]) : C[N] === O;
    })).flatMap(({ class: z, className: _ }) => [z, _]), T = () => {
      var B;
      let z = I(u), _ = I((B = e == null ? void 0 : e.extend) == null ? void 0 : B.compoundVariants);
      return e6(_, z);
    }, L = () => {
      let B = T();
      return Array.isArray(B) ? B.reduce((z, _) => (typeof _ == "string" && (z.base = dl(z.base, _)(t)), typeof _ == "object" && Object.entries(_).forEach(([H, N]) => {
        z[H] = dl(z[H], N)(t);
      }), z), {}) : B;
    };
    if (!tn(s) || !tn((b = e == null ? void 0 : e.extend) == null ? void 0 : b.slots)) {
      let B = (A = L()) != null ? A : [];
      return { ...typeof v == "object" && !tn(v) ? Object.keys(v).reduce((z, _) => (z[_] = (H) => dl(v[_], P(_), B == null ? void 0 : B[_], H == null ? void 0 : H.class, H == null ? void 0 : H.className)(t), z), {}) : {} };
    }
    return dl(f, $(), T(), y == null ? void 0 : y.class, y == null ? void 0 : y.className)(t);
  }, p = () => {
    if (!(!d || typeof d != "object"))
      return Object.keys(d);
  };
  return w.variantKeys = p(), w.base = f, w.slots = v, w.variants = d, w.defaultVariants = g, w.compoundVariants = u, w;
};
const O6 = I6({
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
}), T6 = JR("div", {
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
}), M6 = {
  mass: 1,
  tension: 210,
  friction: 26,
  precision: 0.01,
  velocity: 0
}, lg = je.forwardRef(({
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
  const p = V4({
    transform: c ? "scale(1, 1)" : "scale(1.2, 1.5)",
    duration: 50,
    config: M6
  });
  sR(u, () => f(!1));
  const {
    base: y,
    effect: x,
    input: b
  } = O6({
    focus: c,
    light: l,
    ghost: i,
    size: r
  });
  return /* @__PURE__ */ ce(T6, {
    style: e,
    className: tv("mayumi-input", y(), t),
    css: o,
    size: r,
    children: [n && /* @__PURE__ */ D("span", {
      className: "mayumi-input-icon",
      children: n
    }), !i && !l && je.createElement(lR.div, {
      className: tv("mayumi-input-effect", x()),
      style: p
    }), /* @__PURE__ */ D("input", {
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
lg.displayName = "input";
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
function _i() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = hk(e)) && (r && (r += " "), r += t);
  return r;
}
function Ri({
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
    children: [e, /* @__PURE__ */ D("span", {
      "cmdk-raycast-meta": "",
      children: n ? "Command" : "Application"
    })]
  });
}
function Ao({
  children: e,
  shortcut: t,
  value: n,
  onSelect: r
}) {
  return /* @__PURE__ */ ce(an.Item, {
    value: n,
    onSelect: r,
    children: [e, /* @__PURE__ */ D("div", {
      "cmdk-raycast-submenu-shortcuts": "",
      children: t.split(" ").map((o) => /* @__PURE__ */ D("kbd", {
        children: o
      }, o))
    })]
  });
}
const wv = (e) => {
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
}, N6 = (e) => e ? wv(e) : wv;
var mk = { exports: {} }, gk = {}, vk = { exports: {} }, yk = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ii = m.exports;
function D6(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var L6 = typeof Object.is == "function" ? Object.is : D6, F6 = Ii.useState, z6 = Ii.useEffect, B6 = Ii.useLayoutEffect, j6 = Ii.useDebugValue;
function H6(e, t) {
  var n = t(), r = F6({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return B6(function() {
    o.value = n, o.getSnapshot = t, ud(o) && i({ inst: o });
  }, [e, n, t]), z6(function() {
    return ud(o) && i({ inst: o }), e(function() {
      ud(o) && i({ inst: o });
    });
  }, [e]), j6(n), n;
}
function ud(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !L6(e, n);
  } catch {
    return !0;
  }
}
function V6(e, t) {
  return t();
}
var U6 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? V6 : H6;
yk.useSyncExternalStore = Ii.useSyncExternalStore !== void 0 ? Ii.useSyncExternalStore : U6;
(function(e) {
  e.exports = yk;
})(vk);
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bc = m.exports, W6 = vk.exports;
function q6(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Q6 = typeof Object.is == "function" ? Object.is : q6, G6 = W6.useSyncExternalStore, K6 = Bc.useRef, Y6 = Bc.useEffect, X6 = Bc.useMemo, Z6 = Bc.useDebugValue;
gk.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = K6(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else
    l = i.current;
  i = X6(function() {
    function a(g) {
      if (!u) {
        if (u = !0, c = g, g = r(g), o !== void 0 && l.hasValue) {
          var h = l.value;
          if (o(h, g))
            return f = h;
        }
        return f = g;
      }
      if (h = f, Q6(c, g))
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
  var s = G6(e, i[0], i[1]);
  return Y6(function() {
    l.hasValue = !0, l.value = s;
  }, [s]), Z6(s), s;
};
(function(e) {
  e.exports = gk;
})(mk);
const J6 = /* @__PURE__ */ Mh(mk.exports), { useSyncExternalStoreWithSelector: eI } = J6;
function tI(e, t = e.getState, n) {
  const r = eI(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return m.exports.useDebugValue(r), r;
}
const bv = (e) => {
  ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? N6(e) : e, n = (r, o) => tI(t, r, o);
  return Object.assign(n, t), n;
}, sg = (e) => e ? bv(e) : bv;
function ag(e) {
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
const bs = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return bs(r)(n);
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
        return bs(r)(n);
      }
    };
  }
}, nI = (e, t) => (n, r, o) => {
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
  const c = bs(i.serialize), f = () => {
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
    return bs(u.getItem.bind(u))(i.name).then((y) => {
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
}, rI = (e, t) => (n, r, o) => {
  let i = {
    storage: ag(() => localStorage),
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
    return bs(u.getItem.bind(u))(i.name).then((p) => {
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
}, oI = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? (({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), nI(e, t)) : rI(e, t), xk = oI, iI = {
  getItem: async (e) => (await ot.storage.local.get(e))[e],
  setItem(e, t) {
    return ot.storage.local.set({ [e]: t });
  },
  removeItem(e) {
    return ot.storage.local.remove(e);
  }
}, lI = {
  getItem: async (e) => (await ot.storage.sync.get(e))[e],
  setItem(e, t) {
    return ot.storage.sync.set({ [e]: t });
  },
  removeItem(e) {
    return ot.storage.sync.remove(e);
  }
}, sI = (e, t) => (n, r, o) => {
  const i = (l, s, a) => {
    const u = a === void 0 ? { type: "anonymous" } : typeof a == "string" ? { type: a } : a;
    console.group(`%c action: ${t.name} : ${u.type}`, "font-weight: bold;"), console.log("%c prev state:", "color: gray; font-weight: bold;", r()), console.log("%c action:", "color: #0066db; font-weight: bold;", u), n(l, s), console.log("%cnext state:", "color: #006b3b; font-weight: bold;", r()), console.groupEnd();
  };
  return o.setState = i, e(i, r, o);
}, ug = sI, yo = sg()(
  ug(
    xk(
      (e) => ({
        conventions: {},
        newConvention: async (t) => e((n) => ({
          conventions: {
            ...n.conventions,
            [t]: []
          }
        }), !1, "newConvention"),
        upsertConventions: async (t, n) => e((r) => {
          var i;
          const o = (i = r.conventions[t]) != null ? i : [];
          return {
            conventions: {
              ...r.conventions,
              [t]: n ? o.concat(n) : o
            }
          };
        }, !1, "upsertConventions"),
        updateOrUpsertConventions: async (t, n) => e((r) => {
          var l;
          let o = (l = r.conventions[t]) != null ? l : [];
          const i = o[o.length - 1];
          return (i == null ? void 0 : i.id) !== n.id ? {
            conventions: {
              ...r.conventions,
              [t]: n ? o.concat(n) : o
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
        storage: ag(() => iI)
      }
    ),
    {
      name: "aiflow-message-store"
    }
  )
), Vn = sg()(
  ug(
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
), wk = sg()(
  ug(
    xk(
      (e) => ({
        set(t) {
          e(t, !1, "set");
        }
      }),
      { name: "user-config-store", storage: ag(() => lI) }
    ),
    {
      name: "user-config-store"
    }
  )
), iu = "ask-chatgpt", Gu = "ask-chatgpt-with", Ss = "translate-with", aI = "summary-with", uI = "open-convenstions-history", cI = "clear-storage", kt = {
  ASK_CHATGPT_WITH: Gu,
  TRANSLATE_WITH: Ss,
  SUMMARY_WITH: aI,
  OPEN_HISTORY: uI,
  CLEAR_STORAGE: cI
}, Oi = "ask-chatgpt-with-page", uh = "config-page", xo = "translate-with-page", hr = "home-page", ks = {
  ASK_CHATGPT_PAGE: Oi,
  CONFIG_PAGE: uh,
  TRANSLATE_WITH_PAGE: xo,
  HOME_PAGE: hr
}, fI = "OPENAI_API_KEY", Sv = "options", dI = (e) => /* @__PURE__ */ m.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 5.5H9C10.1046 5.5 11 6.39543 11 7.5V16.5C11 17.0523 10.5523 17.5 10 17.5H4C3.44772 17.5 3 17.0523 3 16.5V6.5C3 5.94772 3.44772 5.5 4 5.5ZM14 19.5C13.6494 19.5 13.3128 19.4398 13 19.3293V19.5C13 20.0523 12.5523 20.5 12 20.5C11.4477 20.5 11 20.0523 11 19.5V19.3293C10.6872 19.4398 10.3506 19.5 10 19.5H4C2.34315 19.5 1 18.1569 1 16.5V6.5C1 4.84315 2.34315 3.5 4 3.5H9C10.1947 3.5 11.2671 4.02376 12 4.85418C12.7329 4.02376 13.8053 3.5 15 3.5H20C21.6569 3.5 23 4.84315 23 6.5V16.5C23 18.1569 21.6569 19.5 20 19.5H14ZM13 7.5V16.5C13 17.0523 13.4477 17.5 14 17.5H20C20.5523 17.5 21 17.0523 21 16.5V6.5C21 5.94772 20.5523 5.5 20 5.5H15C13.8954 5.5 13 6.39543 13 7.5ZM5 7.5H9V9.5H5V7.5ZM15 7.5H19V9.5H15V7.5ZM19 10.5H15V12.5H19V10.5ZM5 10.5H9V12.5H5V10.5ZM19 13.5H15V15.5H19V13.5ZM5 13.5H9V15.5H5V13.5Z", fill: "currentColor" }));
function pI() {
  const {
    updateHistoryOpen: e,
    setOpen: t
  } = Vn();
  return /* @__PURE__ */ ce(Ri, {
    isCommand: !0,
    value: kt.OPEN_HISTORY,
    onSelect: () => {
      t(!1), e(!0);
    },
    children: [/* @__PURE__ */ D(dI, {}), "View History"]
  });
}
function hI() {
  const {
    updateHistoryOpen: e,
    setOpen: t
  } = Vn();
  return /* @__PURE__ */ D(Mt, {
    children: /* @__PURE__ */ D(Ao, {
      value: kt.OPEN_HISTORY,
      onSelect: () => {
        t(!1), e(!0);
      },
      shortcut: "\u21B5",
      children: /* @__PURE__ */ D("span", {
        className: "truncate",
        children: "View History"
      })
    })
  });
}
const mI = () => ({
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
}), gI = (e) => /* @__PURE__ */ m.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 6V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V6H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H17ZM15 5H9V6H15V5ZM17 8H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8Z", fill: "currentColor" })), bk = mI();
function vI() {
  const {
    clear: e
  } = yo();
  return /* @__PURE__ */ ce(Ri, {
    isCommand: !0,
    value: kt.CLEAR_STORAGE,
    onSelect: () => {
      e(), bk.clear();
    },
    children: [/* @__PURE__ */ D(gI, {}), "Clear Storage"]
  });
}
function yI() {
  const {
    clear: e
  } = yo();
  return /* @__PURE__ */ D(Mt, {
    children: /* @__PURE__ */ D(Ao, {
      value: kt.CLEAR_STORAGE,
      onSelect: () => {
        e(), bk.clear();
      },
      shortcut: "\u21B5",
      children: /* @__PURE__ */ D("span", {
        className: "truncate",
        children: "Clear Storage"
      })
    })
  });
}
const xI = (e) => /* @__PURE__ */ m.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z", fill: "currentColor" }), /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z", fill: "currentColor" }));
function wI({
  onSelect: e
}) {
  return /* @__PURE__ */ ce(Ri, {
    isCommand: !0,
    onSelect: () => e(ks.CONFIG_PAGE),
    value: ks.CONFIG_PAGE,
    children: [/* @__PURE__ */ D(xI, {}), "Config"]
  });
}
function bI({
  onSelect: e
}) {
  return /* @__PURE__ */ D(Mt, {
    children: /* @__PURE__ */ D(Ao, {
      value: ks.CONFIG_PAGE,
      onSelect: () => e(ks.CONFIG_PAGE),
      shortcut: "\u21B5",
      children: /* @__PURE__ */ D("span", {
        className: "truncate",
        children: "Config"
      })
    })
  });
}
function SI({
  onSelect: e
}) {
  return /* @__PURE__ */ ce(Ri, {
    isCommand: !0,
    onSelect: () => e(kt.SUMMARY_WITH),
    value: kt.SUMMARY_WITH,
    children: [/* @__PURE__ */ D("i", {
      className: "gg-notes/0.8 text-mayumi-gray-1200"
    }), "Summary"]
  });
}
function kI({
  onSelect: e
}) {
  return /* @__PURE__ */ D(Mt, {
    children: /* @__PURE__ */ D(Ao, {
      value: kt.SUMMARY_WITH,
      onSelect: () => e(kt.SUMMARY_WITH),
      shortcut: "\u21B5",
      children: /* @__PURE__ */ D("span", {
        className: "truncate",
        children: "Summary current page"
      })
    })
  });
}
const kv = () => {
  var e;
  return (e = document.querySelector('input[name="q"]')) == null ? void 0 : e.value;
};
function CI(e) {
  return /* @__PURE__ */ D("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    ...e,
    children: /* @__PURE__ */ D("g", {
      fill: "none",
      children: /* @__PURE__ */ D("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5zm4 3a1 1 0 0 0-2 0v1H4a1 1 0 0 0 0 2h6.432a8.323 8.323 0 0 1-1.117 3.127L7.753 8.34a1 1 0 1 0-1.506 1.32l1.837 2.098C6.7 13.231 5.1 14 4 14a1 1 0 1 0 0 2c1.806 0 3.83-1.111 5.406-2.732l.341.39a1 1 0 0 0 1.506-1.316l-.567-.648c.908-1.341 1.573-2.941 1.76-4.694H14a1 1 0 1 0 0-2H9V4zm7.894 5.553a1 1 0 0 0-1.788 0l-3 6a.998.998 0 0 0-.055.13l-1 3a1 1 0 0 0 1.898.633L13.72 17h4.558l.772 2.316a1 1 0 0 0 1.898-.632l-1-3a.998.998 0 0 0-.055-.131l-3-6zM16 12.236L17.382 15h-2.764L16 12.236z",
        fill: "currentColor"
      })
    })
  });
}
function ch(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function $I(e) {
  const t = e + "CollectionProvider", [n, r] = Di(t), [o, i] = n(t, {
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
  }, s = e + "CollectionSlot", a = /* @__PURE__ */ je.forwardRef((g, h) => {
    const { scope: v, children: w } = g, p = i(s, v), y = Ce(h, p.collectionRef);
    return /* @__PURE__ */ je.createElement(Ei, {
      ref: y
    }, w);
  }), u = e + "CollectionItemSlot", c = "data-radix-collection-item", f = /* @__PURE__ */ je.forwardRef((g, h) => {
    const { scope: v, children: w, ...p } = g, y = je.useRef(null), x = Ce(h, y), b = i(u, v);
    return je.useEffect(() => (b.itemMap.set(y, {
      ref: y,
      ...p
    }), () => void b.itemMap.delete(y))), /* @__PURE__ */ je.createElement(Ei, {
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
      Slot: a,
      ItemSlot: f
    },
    d,
    r
  ];
}
const EI = /* @__PURE__ */ m.exports.createContext(void 0);
function Sk(e) {
  const t = m.exports.useContext(EI);
  return e || t || "ltr";
}
function AI(e) {
  const t = m.exports.useRef({
    value: e,
    previous: e
  });
  return m.exports.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const PI = /* @__PURE__ */ m.exports.forwardRef((e, t) => /* @__PURE__ */ m.exports.createElement(Ve.span, Z({}, e, {
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
}))), _I = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], RI = [
  " ",
  "Enter"
], jc = "Select", [Hc, Vc, II] = $I(jc), [Ui, kz] = Di(jc, [
  II,
  $c
]), cg = $c(), [OI, Po] = Ui(jc), [TI, MI] = Ui(jc), NI = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: i, value: l, defaultValue: s, onValueChange: a, dir: u, name: c, autoComplete: f, disabled: d, required: g } = e, h = cg(t), [v, w] = m.exports.useState(null), [p, y] = m.exports.useState(null), [x, b] = m.exports.useState(!1), A = Sk(u), [S = !1, E] = ju({
    prop: r,
    defaultProp: o,
    onChange: i
  }), [$, P] = ju({
    prop: l,
    defaultProp: s,
    onChange: a
  }), R = m.exports.useRef(null), I = v ? Boolean(v.closest("form")) : !0, [T, L] = m.exports.useState(/* @__PURE__ */ new Set()), B = Array.from(T).map(
    (z) => z.props.value
  ).join(";");
  return /* @__PURE__ */ m.exports.createElement(Nb, h, /* @__PURE__ */ m.exports.createElement(OI, {
    required: g,
    scope: t,
    trigger: v,
    onTriggerChange: w,
    valueNode: p,
    onValueNodeChange: y,
    valueNodeHasChildren: x,
    onValueNodeHasChildrenChange: b,
    contentId: ci(),
    value: $,
    onValueChange: P,
    open: S,
    onOpenChange: E,
    dir: A,
    triggerPointerDownPosRef: R,
    disabled: d
  }, /* @__PURE__ */ m.exports.createElement(Hc.Provider, {
    scope: t
  }, /* @__PURE__ */ m.exports.createElement(TI, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: m.exports.useCallback((z) => {
      L(
        (_) => new Set(_).add(z)
      );
    }, []),
    onNativeOptionRemove: m.exports.useCallback((z) => {
      L((_) => {
        const H = new Set(_);
        return H.delete(z), H;
      });
    }, [])
  }, n)), I ? /* @__PURE__ */ m.exports.createElement($k, {
    key: B,
    "aria-hidden": !0,
    required: g,
    tabIndex: -1,
    name: c,
    autoComplete: f,
    value: $,
    onChange: (z) => P(z.target.value),
    disabled: d
  }, $ === void 0 ? /* @__PURE__ */ m.exports.createElement("option", {
    value: ""
  }) : null, Array.from(T)) : null));
}, DI = "SelectTrigger", LI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = cg(n), l = Po(DI, n), s = l.disabled || r, a = Ce(t, l.onTriggerChange), u = Vc(n), [c, f, d] = Ek((h) => {
    const v = u().filter(
      (y) => !y.disabled
    ), w = v.find(
      (y) => y.value === l.value
    ), p = Ak(v, h, w);
    p !== void 0 && l.onValueChange(p.value);
  }), g = () => {
    s || (l.onOpenChange(!0), d());
  };
  return /* @__PURE__ */ m.exports.createElement(Db, Z({
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
    disabled: s,
    "data-disabled": s ? "" : void 0,
    "data-placeholder": l.value === void 0 ? "" : void 0
  }, o, {
    ref: a,
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
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && f(h.key), !(v && h.key === " ") && _I.includes(h.key) && (g(), h.preventDefault());
    })
  })));
}), FI = "SelectValue", zI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: i, placeholder: l, ...s } = e, a = Po(FI, n), { onValueNodeHasChildrenChange: u } = a, c = i !== void 0, f = Ce(t, a.onValueNodeChange);
  return Xe(() => {
    u(c);
  }, [
    u,
    c
  ]), /* @__PURE__ */ m.exports.createElement(Ve.span, Z({}, s, {
    ref: f,
    style: {
      pointerEvents: "none"
    }
  }), a.value === void 0 && l !== void 0 ? l : i);
}), BI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ m.exports.createElement(Ve.span, Z({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "\u25BC");
}), jI = (e) => /* @__PURE__ */ m.exports.createElement(Fb, Z({
  asChild: !0
}, e)), Ti = "SelectContent", HI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Po(Ti, e.__scopeSelect), [r, o] = m.exports.useState();
  if (Xe(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const i = r;
    return i ? /* @__PURE__ */ Kt.exports.createPortal(/* @__PURE__ */ m.exports.createElement(kk, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ m.exports.createElement(Hc.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ m.exports.createElement("div", null, e.children))), i) : null;
  }
  return /* @__PURE__ */ m.exports.createElement(VI, Z({}, e, {
    ref: t
  }));
}), Ln = 10, [kk, _o] = Ui(Ti), VI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
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
  } = e, y = Po(Ti, n), [x, b] = m.exports.useState(null), [A, S] = m.exports.useState(null), E = Ce(
    t,
    (Q) => b(Q)
  ), [$, P] = m.exports.useState(null), [R, I] = m.exports.useState(null), T = Vc(n), [L, B] = m.exports.useState(!1), z = m.exports.useRef(!1);
  m.exports.useEffect(() => {
    if (x)
      return Lm(x);
  }, [
    x
  ]), Om();
  const _ = m.exports.useCallback((Q) => {
    const [ie, ...xe] = T().map(
      (ae) => ae.ref.current
    ), [ue] = xe.slice(-1), de = document.activeElement;
    for (const ae of Q)
      if (ae === de || (ae == null || ae.scrollIntoView({
        block: "nearest"
      }), ae === ie && A && (A.scrollTop = 0), ae === ue && A && (A.scrollTop = A.scrollHeight), ae == null || ae.focus(), document.activeElement !== de))
        return;
  }, [
    T,
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
    L && H();
  }, [
    L,
    H
  ]);
  const { onOpenChange: N, triggerPointerDownPosRef: O } = y;
  m.exports.useEffect(() => {
    if (x) {
      let Q = {
        x: 0,
        y: 0
      };
      const ie = (ue) => {
        var de, ae, lt, st;
        Q = {
          x: Math.abs(Math.round(ue.pageX) - ((de = (ae = O.current) === null || ae === void 0 ? void 0 : ae.x) !== null && de !== void 0 ? de : 0)),
          y: Math.abs(Math.round(ue.pageY) - ((lt = (st = O.current) === null || st === void 0 ? void 0 : st.y) !== null && lt !== void 0 ? lt : 0))
        };
      }, xe = (ue) => {
        Q.x <= 10 && Q.y <= 10 ? ue.preventDefault() : x.contains(ue.target) || N(!1), document.removeEventListener("pointermove", ie), O.current = null;
      };
      return O.current !== null && (document.addEventListener("pointermove", ie), document.addEventListener("pointerup", xe, {
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
    N,
    O
  ]), m.exports.useEffect(() => {
    const Q = () => N(!1);
    return window.addEventListener("blur", Q), window.addEventListener("resize", Q), () => {
      window.removeEventListener("blur", Q), window.removeEventListener("resize", Q);
    };
  }, [
    N
  ]);
  const [M, k] = Ek((Q) => {
    const ie = T().filter(
      (de) => !de.disabled
    ), xe = ie.find(
      (de) => de.ref.current === document.activeElement
    ), ue = Ak(ie, Q, xe);
    ue && setTimeout(
      () => ue.ref.current.focus()
    );
  }), C = m.exports.useCallback((Q, ie, xe) => {
    const ue = !z.current && !xe;
    (y.value !== void 0 && y.value === ie || ue) && (P(Q), ue && (z.current = !0));
  }, [
    y.value
  ]), J = m.exports.useCallback(
    () => x == null ? void 0 : x.focus(),
    [
      x
    ]
  ), ne = m.exports.useCallback((Q, ie, xe) => {
    const ue = !z.current && !xe;
    (y.value !== void 0 && y.value === ie || ue) && I(Q);
  }, [
    y.value
  ]), se = r === "popper" ? Cv : UI, ee = se === Cv ? {
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
  return /* @__PURE__ */ m.exports.createElement(kk, {
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
    isPositioned: L,
    searchRef: M
  }, /* @__PURE__ */ m.exports.createElement(Kb, {
    as: Ei,
    allowPinchZoom: !0
  }, /* @__PURE__ */ m.exports.createElement(Tm, {
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
  }, /* @__PURE__ */ m.exports.createElement(Im, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: i,
    onPointerDownOutside: l,
    onFocusOutside: (Q) => Q.preventDefault(),
    onDismiss: () => y.onOpenChange(!1)
  }, /* @__PURE__ */ m.exports.createElement(se, Z({
    role: "listbox",
    id: y.contentId,
    "data-state": y.open ? "open" : "closed",
    dir: y.dir,
    onContextMenu: (Q) => Q.preventDefault()
  }, p, ee, {
    onPlaced: () => B(!0),
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
        let ue = T().filter(
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
          const de = Q.target, ae = ue.indexOf(de);
          ue = ue.slice(ae + 1);
        }
        setTimeout(
          () => _(ue)
        ), Q.preventDefault();
      }
    })
  }))))));
}), UI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = Po(Ti, n), l = _o(Ti, n), [s, a] = m.exports.useState(null), [u, c] = m.exports.useState(null), f = Ce(
    t,
    (E) => c(E)
  ), d = Vc(n), g = m.exports.useRef(!1), h = m.exports.useRef(!0), { viewport: v, selectedItem: w, selectedItemText: p, focusSelectedItem: y } = l, x = m.exports.useCallback(() => {
    if (i.trigger && i.valueNode && s && u && v && w && p) {
      const E = i.trigger.getBoundingClientRect(), $ = u.getBoundingClientRect(), P = i.valueNode.getBoundingClientRect(), R = p.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const de = R.left - $.left, ae = P.left - de, lt = E.left - ae, st = E.width + lt, Vr = Math.max(st, $.width), tr = window.innerWidth - Ln, nr = ch(ae, [
          Ln,
          tr - Vr
        ]);
        s.style.minWidth = st + "px", s.style.left = nr + "px";
      } else {
        const de = $.right - R.right, ae = window.innerWidth - P.right - de, lt = window.innerWidth - E.right - ae, st = E.width + lt, Vr = Math.max(st, $.width), tr = window.innerWidth - Ln, nr = ch(ae, [
          Ln,
          tr - Vr
        ]);
        s.style.minWidth = st + "px", s.style.right = nr + "px";
      }
      const I = d(), T = window.innerHeight - Ln * 2, L = v.scrollHeight, B = window.getComputedStyle(u), z = parseInt(B.borderTopWidth, 10), _ = parseInt(B.paddingTop, 10), H = parseInt(B.borderBottomWidth, 10), N = parseInt(B.paddingBottom, 10), O = z + _ + L + N + H, M = Math.min(w.offsetHeight * 5, O), k = window.getComputedStyle(v), C = parseInt(k.paddingTop, 10), J = parseInt(k.paddingBottom, 10), ne = E.top + E.height / 2 - Ln, se = T - ne, ee = w.offsetHeight / 2, Q = w.offsetTop + ee, ie = z + _ + Q, xe = O - ie;
      if (ie <= ne) {
        const de = w === I[I.length - 1].ref.current;
        s.style.bottom = "0px";
        const ae = u.clientHeight - v.offsetTop - v.offsetHeight, lt = Math.max(se, ee + (de ? J : 0) + ae + H), st = ie + lt;
        s.style.height = st + "px";
      } else {
        const de = w === I[0].ref.current;
        s.style.top = "0px";
        const lt = Math.max(ne, z + v.offsetTop + (de ? C : 0) + ee) + xe;
        s.style.height = lt + "px", v.scrollTop = ie - ne + v.offsetTop;
      }
      s.style.margin = `${Ln}px 0`, s.style.minHeight = M + "px", s.style.maxHeight = T + "px", r == null || r(), requestAnimationFrame(
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
  return /* @__PURE__ */ m.exports.createElement(WI, {
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
  }, /* @__PURE__ */ m.exports.createElement(Ve.div, Z({}, o, {
    ref: f,
    style: {
      boxSizing: "border-box",
      maxHeight: "100%",
      ...o.style
    }
  }))));
}), Cv = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Ln, ...i } = e, l = cg(n);
  return /* @__PURE__ */ m.exports.createElement(Lb, Z({}, l, i, {
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
}), [WI, fg] = Ui(Ti, {}), $v = "SelectViewport", qI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = _o($v, n), i = fg($v, n), l = Ce(t, o.onViewportChange), s = m.exports.useRef(0);
  return /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ m.exports.createElement(Hc.Slot, {
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
    onScroll: ye(r.onScroll, (a) => {
      const u = a.currentTarget, { contentWrapper: c, shouldExpandOnScrollRef: f } = i;
      if (f != null && f.current && c) {
        const d = Math.abs(s.current - u.scrollTop);
        if (d > 0) {
          const g = window.innerHeight - Ln * 2, h = parseFloat(c.style.minHeight), v = parseFloat(c.style.height), w = Math.max(h, v);
          if (w < g) {
            const p = w + d, y = Math.min(g, p), x = p - y;
            c.style.height = y + "px", c.style.bottom === "0px" && (u.scrollTop = x > 0 ? x : 0, c.style.justifyContent = "flex-end");
          }
        }
      }
      s.current = u.scrollTop;
    })
  }))));
}), QI = "SelectGroup";
Ui(QI);
const fh = "SelectItem", [GI, KI] = Ui(fh), YI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: i, ...l } = e, s = Po(fh, n), a = _o(fh, n), u = s.value === r, [c, f] = m.exports.useState(i != null ? i : ""), [d, g] = m.exports.useState(!1), h = Ce(t, (p) => {
    var y;
    return (y = a.itemRefCallback) === null || y === void 0 ? void 0 : y.call(a, p, r, o);
  }), v = ci(), w = () => {
    o || (s.onValueChange(r), s.onOpenChange(!1));
  };
  return /* @__PURE__ */ m.exports.createElement(GI, {
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
  }, /* @__PURE__ */ m.exports.createElement(Hc.ItemSlot, {
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
        (y = a.onItemLeave) === null || y === void 0 || y.call(a);
      } else
        p.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: ye(l.onPointerLeave, (p) => {
      if (p.currentTarget === document.activeElement) {
        var y;
        (y = a.onItemLeave) === null || y === void 0 || y.call(a);
      }
    }),
    onKeyDown: ye(l.onKeyDown, (p) => {
      var y;
      ((y = a.searchRef) === null || y === void 0 ? void 0 : y.current) !== "" && p.key === " " || (RI.includes(p.key) && w(), p.key === " " && p.preventDefault());
    })
  }))));
}), Ra = "SelectItemText", XI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...i } = e, l = Po(Ra, n), s = _o(Ra, n), a = KI(Ra, n), u = MI(Ra, n), [c, f] = m.exports.useState(null), d = Ce(
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
  return Xe(() => (v(h), () => w(h)), [
    v,
    w,
    h
  ]), /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement(Ve.span, Z({
    id: a.textId
  }, i, {
    ref: d
  })), a.isSelected && l.valueNode && !l.valueNodeHasChildren ? /* @__PURE__ */ Kt.exports.createPortal(i.children, l.valueNode) : null);
}), Ev = "SelectScrollUpButton", ZI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = _o(Ev, e.__scopeSelect), r = fg(Ev, e.__scopeSelect), [o, i] = m.exports.useState(!1), l = Ce(t, r.onScrollButtonChange);
  return Xe(() => {
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
  ]), o ? /* @__PURE__ */ m.exports.createElement(Ck, Z({}, e, {
    ref: l,
    onAutoScroll: () => {
      const { viewport: s, selectedItem: a } = n;
      s && a && (s.scrollTop = s.scrollTop - a.offsetHeight);
    }
  })) : null;
}), Av = "SelectScrollDownButton", JI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = _o(Av, e.__scopeSelect), r = fg(Av, e.__scopeSelect), [o, i] = m.exports.useState(!1), l = Ce(t, r.onScrollButtonChange);
  return Xe(() => {
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
  ]), o ? /* @__PURE__ */ m.exports.createElement(Ck, Z({}, e, {
    ref: l,
    onAutoScroll: () => {
      const { viewport: s, selectedItem: a } = n;
      s && a && (s.scrollTop = s.scrollTop + a.offsetHeight);
    }
  })) : null;
}), Ck = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = _o("SelectScrollButton", n), l = m.exports.useRef(null), s = Vc(n), a = m.exports.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return m.exports.useEffect(() => () => a(), [
    a
  ]), Xe(() => {
    var u;
    const c = s().find(
      (f) => f.ref.current === document.activeElement
    );
    c == null || (u = c.ref.current) === null || u === void 0 || u.scrollIntoView({
      block: "nearest"
    });
  }, [
    s
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
      a();
    })
  }));
}), $k = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { value: n, ...r } = e, o = m.exports.useRef(null), i = Ce(t, o), l = AI(n);
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
  ]), /* @__PURE__ */ m.exports.createElement(PI, {
    asChild: !0
  }, /* @__PURE__ */ m.exports.createElement("select", Z({}, r, {
    ref: i,
    defaultValue: n
  })));
});
$k.displayName = "BubbleSelect";
function Ek(e) {
  const t = rt(e), n = m.exports.useRef(""), r = m.exports.useRef(0), o = m.exports.useCallback((l) => {
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
function Ak(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (u) => u === t[0]
  ) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let l = eO(e, Math.max(i, 0));
  o.length === 1 && (l = l.filter(
    (u) => u !== n
  ));
  const a = l.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return a !== n ? a : void 0;
}
function eO(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const tO = NI, nO = LI, rO = zI, oO = BI, iO = jI, lO = HI, sO = qI, aO = YI, uO = XI, cO = ZI, fO = JI, dO = {
  int: "Afrikaans",
  native: "Afrikaans"
}, pO = {
  int: "Albanian",
  native: "Shqip"
}, hO = {
  int: "Arabic",
  native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
}, mO = {
  int: "Armenian",
  native: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576"
}, gO = {
  int: "Assamese",
  native: "\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE"
}, vO = {
  int: "Azerbaijani",
  native: "Az\u0259rbaycan dili"
}, yO = {
  int: "Basque",
  native: "Euskara"
}, xO = {
  int: "Belarusian",
  native: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F"
}, wO = {
  int: "Bengali",
  native: "\u09AC\u09BE\u0982\u09B2\u09BE"
}, bO = {
  int: "Bosnian",
  native: "Bosanski"
}, SO = {
  int: "Breton",
  native: "Brezhoneg"
}, kO = {
  int: "Bulgarian",
  native: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"
}, CO = {
  int: "Burmese",
  native: "\u1019\u103C\u1014\u103A\u1019\u102C\u1018\u102C\u101E\u102C"
}, $O = {
  int: "Catalan / Valencian",
  native: "Catal\xE0"
}, EO = {
  int: "Czech",
  native: "\u010Ce\u0161tina"
}, AO = {
  int: "Danish",
  native: "Dansk"
}, PO = {
  int: "Dutch",
  native: "Nederlands"
}, _O = {
  int: "English",
  native: "English"
}, RO = {
  int: "Esperanto",
  native: "Esperanto"
}, IO = {
  int: "Estonian",
  native: "Eesti"
}, OO = {
  int: "Faroese",
  native: "F\xF8royskt"
}, TO = {
  int: "Finnish",
  native: "Suomi"
}, MO = {
  int: "French",
  native: "Fran\xE7ais"
}, NO = {
  int: "Galician",
  native: "Galego"
}, DO = {
  int: "Georgian",
  native: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8"
}, LO = {
  int: "German",
  native: "Deutsch"
}, FO = {
  int: "Greek",
  native: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"
}, zO = {
  int: "Guarani",
  native: "Ava\xF1e'\u1EBD"
}, BO = {
  int: "Gujarati",
  native: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0"
}, jO = {
  int: "Hausa",
  native: "Hrvatski"
}, HO = {
  int: "Hausa",
  native: "Hausa"
}, VO = {
  int: "Hebrew",
  native: "\u05E2\u05D1\u05E8\u05D9\u05EA"
}, UO = {
  int: "Hindi",
  native: "\u0939\u093F\u0928\u094D\u0926\u0940"
}, WO = {
  int: "Hungarian",
  native: "Magyar"
}, qO = {
  int: "Icelandic",
  native: "\xCDslenska"
}, QO = {
  int: "Indonesian",
  native: "Bahasa Indonesia"
}, GO = {
  int: "Irish",
  native: "Gaeilge"
}, KO = {
  int: "Italian",
  native: "Italiano"
}, YO = {
  int: "Japanese",
  native: "\u65E5\u672C\u8A9E"
}, XO = {
  int: "Javanese",
  native: "Basa Jawa"
}, ZO = {
  int: "Kannada",
  native: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"
}, JO = {
  int: "Kazakh",
  native: "\u049A\u0430\u0437\u0430\u049B\u0448\u0430"
}, eT = {
  int: "Khmer",
  native: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A"
}, tT = {
  int: "Korean",
  native: "\uD55C\uAD6D\uC5B4"
}, nT = {
  int: "Kurdish",
  native: "Kurd\xEE (Kurmanc\xEE)"
}, rT = {
  int: "Latin",
  native: "lingua latina"
}, oT = {
  int: "Latvian",
  native: "Latvie\u0161u"
}, iT = {
  int: "Lithuanian",
  native: "Lietuvi\u0173"
}, lT = {
  int: "Macedonian",
  native: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438"
}, sT = {
  int: "Malagasy",
  native: "Malagasy"
}, aT = {
  int: "Malay",
  native: "Bahasa Melayu"
}, uT = {
  int: "Malayalam",
  native: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02"
}, cT = {
  int: "Marathi",
  native: "\u092E\u0930\u093E\u0920\u0940"
}, fT = {
  int: "Mongolian",
  native: "\u041C\u043E\u043D\u0433\u043E\u043B"
}, dT = {
  int: "Nepali",
  native: "\u0928\u0947\u092A\u093E\u0932\u0940"
}, pT = {
  int: "Norwegian (bokmal)",
  native: "Norsk (bokm\xE5l)"
}, hT = {
  int: "Norwegian Nynorsk",
  native: "Norsk (nynorsk)"
}, mT = {
  int: "Oriya",
  native: "\u0B13\u0B21\u0B3C\u0B3F\u0B06"
}, gT = {
  int: "Pashto",
  native: "\u067E\u069A\u062A\u0648"
}, vT = {
  int: "Persian",
  native: "\u0641\u0627\u0631\u0633\u06CC"
}, yT = {
  int: "Polish",
  native: "Polski"
}, xT = {
  int: "Portuguese",
  native: "Portugu\xEAs"
}, wT = {
  int: "Punjabi",
  native: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40"
}, bT = {
  int: "Romanian",
  native: "Rom\xE2n\u0103"
}, ST = {
  int: "Russian",
  native: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
}, kT = {
  int: "Rwandi",
  native: "Ikinyarwanda"
}, CT = {
  int: "Sardinian",
  native: "Sardu"
}, $T = {
  int: "Serbian",
  native: "\u0421\u0440\u043F\u0441\u043A\u0438"
}, ET = {
  int: "Silesian",
  native: "\u015Bl\u014Dnsk\u014F g\u014Fdka"
}, AT = {
  int: "Simplified Chinese",
  native: "\u4E2D\u6587"
}, PT = {
  int: "Sinhala",
  native: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD"
}, _T = {
  int: "Slovak",
  native: "Sloven\u010Dina"
}, RT = {
  int: "Slovenian",
  native: "Sloven\u0161\u010Dina"
}, IT = {
  int: "Somali",
  native: "Af-Soomaali"
}, OT = {
  int: "Sorani Kurdish",
  native: "\u06A9\u0648\u0631\u062F\u06CC\u06CC \u0646\u0627\u0648\u06D5\u0646\u062F\u06CC"
}, TT = {
  int: "Spanish",
  native: "Espa\xF1ol"
}, MT = {
  int: "Swahili",
  native: "Kiswahili"
}, NT = {
  int: "Swedish",
  native: "Svenska"
}, DT = {
  int: "Syriac",
  native: "\u0723\u0718\u072A\u071D\u071D\u0710"
}, LT = {
  int: "Tagalog / Filipino",
  native: "Filipino"
}, FT = {
  int: "Tajik",
  native: "\u0422\u043E\u04B7\u0438\u043A\u04E3"
}, zT = {
  int: "Tamazight",
  native: "\u2D5C\u2D30\u2D4E\u2D30\u2D63\u2D49\u2D56\u2D5C"
}, BT = {
  int: "Tamil",
  native: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"
}, jT = {
  int: "Telugu",
  native: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"
}, HT = {
  int: "Thai",
  native: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22"
}, VT = {
  int: "Turkish",
  native: "T\xFCrk\xE7e"
}, UT = {
  int: "Ukrainian",
  native: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"
}, WT = {
  int: "Urdu",
  native: "\u0627\u0631\u062F\u0648"
}, qT = {
  int: "Uzbek",
  native: "O'zbek"
}, QT = {
  int: "Vietnamese",
  native: "Ti\u1EBFng Vi\u1EC7t"
}, GT = {
  int: "Visayan",
  native: "Bisaya"
}, KT = {
  int: "Welsh",
  native: "Cymraeg"
}, YT = {
  int: "West Frisian",
  native: "Frysk"
}, Pv = {
  af: dO,
  sq: pO,
  ar: hO,
  hy: mO,
  as: gO,
  az: vO,
  eu: yO,
  be: xO,
  bn: wO,
  bs: bO,
  br: SO,
  bg: kO,
  my: CO,
  ca: $O,
  cs: EO,
  da: AO,
  nl: PO,
  en: _O,
  eo: RO,
  et: IO,
  fo: OO,
  fi: TO,
  fr: MO,
  gl: NO,
  ka: DO,
  de: LO,
  el: FO,
  gn: zO,
  gu: BO,
  hr: jO,
  ha: HO,
  he: VO,
  hi: UO,
  hu: WO,
  is: qO,
  id: QO,
  ga: GO,
  it: KO,
  ja: YO,
  jv: XO,
  kn: ZO,
  kk: JO,
  km: eT,
  ko: tT,
  ku: nT,
  la: rT,
  lv: oT,
  lt: iT,
  mk: lT,
  mg: sT,
  ms: aT,
  ml: uT,
  mr: cT,
  mn: fT,
  ne: dT,
  nb: pT,
  nn: hT,
  or: mT,
  ps: gT,
  fa: vT,
  pl: yT,
  pt: xT,
  pa: wT,
  ro: bT,
  ru: ST,
  rw: kT,
  sc: CT,
  sr: $T,
  sz: ET,
  zh: AT,
  si: PT,
  sk: _T,
  sl: RT,
  so: IT,
  cb: OT,
  es: TT,
  sw: MT,
  sv: NT,
  sy: DT,
  tl: LT,
  tg: FT,
  tz: zT,
  ta: BT,
  te: jT,
  th: HT,
  tr: VT,
  uk: UT,
  ur: WT,
  uz: qT,
  vi: QT,
  cx: GT,
  cy: KT,
  fy: YT
}, Pk = je.forwardRef(({
  children: e,
  className: t,
  ...n
}, r) => /* @__PURE__ */ D(aO, {
  className: _i("relative flex h-[25px] select-none items-center rounded-[3px] pr-[35px] pl-[25px] text-[13px] leading-none text-mayumi-gray-1200 data-[disabled]:pointer-events-none data-[highlighted]:bg-mayumi-gray-400 data-[disabled]:text-mayumi-gray-800 data-[highlighted]:outline-none", t),
  ...n,
  ref: r,
  children: /* @__PURE__ */ D(uO, {
    children: e
  })
}));
Pk.displayName = "SelectItem";
const XT = (e) => {
  var n;
  const t = wk();
  return /* @__PURE__ */ ce(tO, {
    value: (n = t[Sv]) == null ? void 0 : n[Ss].lang,
    onValueChange: (r) => {
      var o;
      (o = e.onValueChange) == null || o.call(e, r), t.set({
        [Sv]: {
          [Ss]: {
            lang: r
          }
        }
      });
    },
    children: [/* @__PURE__ */ ce(nO, {
      className: "inline-flex items-center justify-center gap-[5px] rounded bg-gray2 px-3 py-1 text-xs text-mayumi-gray-1200 outline-none hover:bg-mayumi-gray-300 focus:shadow-[0_0_0_1px] focus:shadow-gray7 data-[placeholder]:text-mayumi-gray-900",
      "aria-label": "lang",
      autoFocus: !1,
      tabIndex: 2,
      children: [/* @__PURE__ */ D(rO, {
        placeholder: "Select a Language..."
      }), /* @__PURE__ */ D(oO, {
        className: "text-mayumi-gray-1200",
        children: /* @__PURE__ */ D("i", {
          className: "gg-chevron-down/0.75"
        })
      })]
    }), /* @__PURE__ */ D(iO, {
      container: e.container.current,
      children: /* @__PURE__ */ ce(lO, {
        className: "overflow-hidden rounded-md bg-gray2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]",
        children: [/* @__PURE__ */ D(cO, {
          className: "flex h-[25px] cursor-default items-center justify-center bg-gray2 text-mayumi-gray-1200",
          children: /* @__PURE__ */ D("i", {
            className: "gg-chevron-up/0.75"
          })
        }), /* @__PURE__ */ D(sO, {
          className: "p-[5px]",
          children: Object.keys(Pv).map((r) => {
            const o = Pv[r];
            return /* @__PURE__ */ D(Pk, {
              value: o.int,
              children: o.int
            }, r);
          })
        }), /* @__PURE__ */ D(fO, {
          className: "flex h-[25px] cursor-default items-center justify-center bg-gray2 text-mayumi-gray-1200",
          children: /* @__PURE__ */ D("i", {
            className: "gg-chevron-down/0.75"
          })
        })]
      })
    })]
  });
};
function ZT(e, t) {
  return m.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const _k = "ScrollArea", [Rk, Cz] = Di(_k), [JT, Rn] = Rk(_k), e7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: i = 600, ...l } = e, [s, a] = m.exports.useState(null), [u, c] = m.exports.useState(null), [f, d] = m.exports.useState(null), [g, h] = m.exports.useState(null), [v, w] = m.exports.useState(null), [p, y] = m.exports.useState(0), [x, b] = m.exports.useState(0), [A, S] = m.exports.useState(!1), [E, $] = m.exports.useState(!1), P = Ce(
    t,
    (I) => a(I)
  ), R = Sk(o);
  return /* @__PURE__ */ m.exports.createElement(JT, {
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
}), t7 = "ScrollAreaViewport", n7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, i = Rn(t7, n), l = m.exports.useRef(null), s = Ce(t, l, i.onViewportChange);
  return /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ m.exports.createElement(Ve.div, Z({
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
}), Jn = "ScrollAreaScrollbar", r7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Rn(Jn, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: l } = o, s = e.orientation === "horizontal";
  return m.exports.useEffect(() => (s ? i(!0) : l(!0), () => {
    s ? i(!1) : l(!1);
  }), [
    s,
    i,
    l
  ]), o.type === "hover" ? /* @__PURE__ */ m.exports.createElement(o7, Z({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ m.exports.createElement(i7, Z({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ m.exports.createElement(Ik, Z({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ m.exports.createElement(dg, Z({}, r, {
    ref: t
  })) : null;
}), o7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Rn(Jn, e.__scopeScrollArea), [i, l] = m.exports.useState(!1);
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
  ]), /* @__PURE__ */ m.exports.createElement(jr, {
    present: n || i
  }, /* @__PURE__ */ m.exports.createElement(Ik, Z({
    "data-state": i ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), i7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Rn(Jn, e.__scopeScrollArea), i = e.orientation === "horizontal", l = Wc(
    () => a("SCROLL_END"),
    100
  ), [s, a] = ZT("hidden", {
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
  ]), /* @__PURE__ */ m.exports.createElement(jr, {
    present: n || s !== "hidden"
  }, /* @__PURE__ */ m.exports.createElement(dg, Z({
    "data-state": s === "hidden" ? "hidden" : "visible"
  }, r, {
    ref: t,
    onPointerEnter: ye(
      e.onPointerEnter,
      () => a("POINTER_ENTER")
    ),
    onPointerLeave: ye(
      e.onPointerLeave,
      () => a("POINTER_LEAVE")
    )
  })));
}), Ik = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Rn(Jn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [i, l] = m.exports.useState(!1), s = e.orientation === "horizontal", a = Wc(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, c = n.viewport.offsetHeight < n.viewport.scrollHeight;
      l(s ? u : c);
    }
  }, 10);
  return Yu(n.viewport, a), Yu(n.content, a), /* @__PURE__ */ m.exports.createElement(jr, {
    present: r || i
  }, /* @__PURE__ */ m.exports.createElement(dg, Z({
    "data-state": i ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), dg = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Rn(Jn, e.__scopeScrollArea), i = m.exports.useRef(null), l = m.exports.useRef(0), [s, a] = m.exports.useState({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), u = Mk(s.viewport, s.content), c = {
    ...r,
    sizes: s,
    onSizesChange: a,
    hasThumb: Boolean(u > 0 && u < 1),
    onThumbChange: (d) => i.current = d,
    onThumbPointerUp: () => l.current = 0,
    onThumbPointerDown: (d) => l.current = d
  };
  function f(d, g) {
    return f7(d, l.current, s, g);
  }
  return n === "horizontal" ? /* @__PURE__ */ m.exports.createElement(l7, Z({}, c, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && i.current) {
        const d = o.viewport.scrollLeft, g = _v(d, s, o.dir);
        i.current.style.transform = `translate3d(${g}px, 0, 0)`;
      }
    },
    onWheelScroll: (d) => {
      o.viewport && (o.viewport.scrollLeft = d);
    },
    onDragScroll: (d) => {
      o.viewport && (o.viewport.scrollLeft = f(d, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ m.exports.createElement(s7, Z({}, c, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && i.current) {
        const d = o.viewport.scrollTop, g = _v(d, s);
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
}), l7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = Rn(Jn, e.__scopeScrollArea), [l, s] = m.exports.useState(), a = m.exports.useRef(null), u = Ce(t, a, i.onScrollbarXChange);
  return m.exports.useEffect(() => {
    a.current && s(getComputedStyle(a.current));
  }, [
    a
  ]), /* @__PURE__ */ m.exports.createElement(Tk, Z({
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
        e.onWheelScroll(d), Dk(d, f) && c.preventDefault();
      }
    },
    onResize: () => {
      a.current && i.viewport && l && r({
        content: i.viewport.scrollWidth,
        viewport: i.viewport.offsetWidth,
        scrollbar: {
          size: a.current.clientWidth,
          paddingStart: Ku(l.paddingLeft),
          paddingEnd: Ku(l.paddingRight)
        }
      });
    }
  }));
}), s7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = Rn(Jn, e.__scopeScrollArea), [l, s] = m.exports.useState(), a = m.exports.useRef(null), u = Ce(t, a, i.onScrollbarYChange);
  return m.exports.useEffect(() => {
    a.current && s(getComputedStyle(a.current));
  }, [
    a
  ]), /* @__PURE__ */ m.exports.createElement(Tk, Z({
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
        e.onWheelScroll(d), Dk(d, f) && c.preventDefault();
      }
    },
    onResize: () => {
      a.current && i.viewport && l && r({
        content: i.viewport.scrollHeight,
        viewport: i.viewport.offsetHeight,
        scrollbar: {
          size: a.current.clientHeight,
          paddingStart: Ku(l.paddingTop),
          paddingEnd: Ku(l.paddingBottom)
        }
      });
    }
  }));
}), [a7, Ok] = Rk(Jn), Tk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: i, onThumbPointerUp: l, onThumbPointerDown: s, onThumbPositionChange: a, onDragScroll: u, onWheelScroll: c, onResize: f, ...d } = e, g = Rn(Jn, n), [h, v] = m.exports.useState(null), w = Ce(
    t,
    (P) => v(P)
  ), p = m.exports.useRef(null), y = m.exports.useRef(""), x = g.viewport, b = r.content - r.viewport, A = rt(c), S = rt(a), E = Wc(f, 10);
  function $(P) {
    if (p.current) {
      const R = P.clientX - p.current.left, I = P.clientY - p.current.top;
      u({
        x: R,
        y: I
      });
    }
  }
  return m.exports.useEffect(() => {
    const P = (R) => {
      const I = R.target;
      (h == null ? void 0 : h.contains(I)) && A(R, b);
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
  ]), Yu(h, E), Yu(g.content, E), /* @__PURE__ */ m.exports.createElement(a7, {
    scope: n,
    scrollbar: h,
    hasThumb: o,
    onThumbChange: rt(i),
    onThumbPointerUp: rt(l),
    onThumbPositionChange: S,
    onThumbPointerDown: rt(s)
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
}), dh = "ScrollAreaThumb", u7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Ok(dh, e.__scopeScrollArea);
  return /* @__PURE__ */ m.exports.createElement(jr, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ m.exports.createElement(c7, Z({
    ref: t
  }, r)));
}), c7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, i = Rn(dh, n), l = Ok(dh, n), { onThumbPositionChange: s } = l, a = Ce(
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
          const g = d7(f, s);
          u.current = g, s();
        }
      };
      return s(), f.addEventListener("scroll", d), () => f.removeEventListener("scroll", d);
    }
  }, [
    i.viewport,
    c,
    s
  ]), /* @__PURE__ */ m.exports.createElement(Ve.div, Z({
    "data-state": l.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: a,
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
function Ku(e) {
  return e ? parseInt(e, 10) : 0;
}
function Mk(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Uc(e) {
  const t = Mk(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function f7(e, t, n, r = "ltr") {
  const o = Uc(n), i = o / 2, l = t || i, s = o - l, a = n.scrollbar.paddingStart + l, u = n.scrollbar.size - n.scrollbar.paddingEnd - s, c = n.content - n.viewport, f = r === "ltr" ? [
    0,
    c
  ] : [
    c * -1,
    0
  ];
  return Nk([
    a,
    u
  ], f)(e);
}
function _v(e, t, n = "ltr") {
  const r = Uc(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, l = t.content - t.viewport, s = i - r, a = n === "ltr" ? [
    0,
    l
  ] : [
    l * -1,
    0
  ], u = ch(e, a);
  return Nk([
    0,
    l
  ], [
    0,
    s
  ])(u);
}
function Nk(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Dk(e, t) {
  return e > 0 && e < t;
}
const d7 = (e, t = () => {
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
function Yu(e, t) {
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
const p7 = e7, h7 = n7, Rv = r7, Iv = u7, Ov = (e) => typeof e == "object" && e != null && e.nodeType === 1, Tv = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", cd = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const n = getComputedStyle(e, null);
    return Tv(n.overflowY, t) || Tv(n.overflowX, t) || ((r) => {
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
}, Ia = (e, t, n, r, o, i, l, s) => i < e && l > t || i > e && l < t ? 0 : i <= e && s <= n || l >= t && s >= n ? i - e - r : l > t && s < n || i < e && s > n ? l - t + o : 0, m7 = (e) => {
  const t = e.parentElement;
  return t == null ? e.getRootNode().host || null : t;
}, Mv = (e, t) => {
  var n, r, o, i;
  if (typeof document > "u")
    return [];
  const { scrollMode: l, block: s, inline: a, boundary: u, skipOverflowHiddenElements: c } = t, f = typeof u == "function" ? u : (T) => T !== u;
  if (!Ov(e))
    throw new TypeError("Invalid target");
  const d = document.scrollingElement || document.documentElement, g = [];
  let h = e;
  for (; Ov(h) && f(h); ) {
    if (h = m7(h), h === d) {
      g.push(h);
      break;
    }
    h != null && h === document.body && cd(h) && !cd(document.documentElement) || h != null && cd(h, c) && g.push(h);
  }
  const v = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth, w = (i = (o = window.visualViewport) == null ? void 0 : o.height) != null ? i : innerHeight, { scrollX: p, scrollY: y } = window, { height: x, width: b, top: A, right: S, bottom: E, left: $ } = e.getBoundingClientRect();
  let P = s === "start" || s === "nearest" ? A : s === "end" ? E : A + x / 2, R = a === "center" ? $ + b / 2 : a === "end" ? S : $;
  const I = [];
  for (let T = 0; T < g.length; T++) {
    const L = g[T], { height: B, width: z, top: _, right: H, bottom: N, left: O } = L.getBoundingClientRect();
    if (l === "if-needed" && A >= 0 && $ >= 0 && E <= w && S <= v && A >= _ && E <= N && $ >= O && S <= H)
      return I;
    const M = getComputedStyle(L), k = parseInt(M.borderLeftWidth, 10), C = parseInt(M.borderTopWidth, 10), J = parseInt(M.borderRightWidth, 10), ne = parseInt(M.borderBottomWidth, 10);
    let se = 0, ee = 0;
    const Q = "offsetWidth" in L ? L.offsetWidth - L.clientWidth - k - J : 0, ie = "offsetHeight" in L ? L.offsetHeight - L.clientHeight - C - ne : 0, xe = "offsetWidth" in L ? L.offsetWidth === 0 ? 0 : z / L.offsetWidth : 0, ue = "offsetHeight" in L ? L.offsetHeight === 0 ? 0 : B / L.offsetHeight : 0;
    if (d === L)
      se = s === "start" ? P : s === "end" ? P - w : s === "nearest" ? Ia(y, y + w, w, C, ne, y + P, y + P + x, x) : P - w / 2, ee = a === "start" ? R : a === "center" ? R - v / 2 : a === "end" ? R - v : Ia(p, p + v, v, k, J, p + R, p + R + b, b), se = Math.max(0, se + y), ee = Math.max(0, ee + p);
    else {
      se = s === "start" ? P - _ - C : s === "end" ? P - N + ne + ie : s === "nearest" ? Ia(_, N, B, C, ne + ie, P, P + x, x) : P - (_ + B / 2) + ie / 2, ee = a === "start" ? R - O - k : a === "center" ? R - (O + z / 2) + Q / 2 : a === "end" ? R - H + J + Q : Ia(O, H, z, k, J + Q, R, R + b, b);
      const { scrollLeft: de, scrollTop: ae } = L;
      se = Math.max(0, Math.min(ae + se / ue, L.scrollHeight - B / ue + ie)), ee = Math.max(0, Math.min(de + ee / xe, L.scrollWidth - z / xe + Q)), P += ae - se, R += de - ee;
    }
    I.push({ el: L, top: se, left: ee });
  }
  return I;
}, g7 = (e) => e === !1 ? { block: "end", inline: "nearest" } : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e) ? e : { block: "start", inline: "nearest" };
function v7(e, t) {
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
    return t.behavior(Mv(e, t));
  const n = typeof t == "boolean" || t == null ? void 0 : t.behavior;
  for (const { el: r, top: o, left: i } of Mv(e, g7(t)))
    r.scroll({ top: o, left: i, behavior: n });
}
function Nv(e) {
  if (e)
    throw e;
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Lk = function(t) {
  return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}, lu = Object.prototype.hasOwnProperty, Fk = Object.prototype.toString, Dv = Object.defineProperty, Lv = Object.getOwnPropertyDescriptor, Fv = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : Fk.call(t) === "[object Array]";
}, zv = function(t) {
  if (!t || Fk.call(t) !== "[object Object]")
    return !1;
  var n = lu.call(t, "constructor"), r = t.constructor && t.constructor.prototype && lu.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var o;
  for (o in t)
    ;
  return typeof o > "u" || lu.call(t, o);
}, Bv = function(t, n) {
  Dv && n.name === "__proto__" ? Dv(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, jv = function(t, n) {
  if (n === "__proto__")
    if (lu.call(t, n)) {
      if (Lv)
        return Lv(t, n).value;
    } else
      return;
  return t[n];
}, Hv = function e() {
  var t, n, r, o, i, l, s = arguments[0], a = 1, u = arguments.length, c = !1;
  for (typeof s == "boolean" && (c = s, s = arguments[1] || {}, a = 2), (s == null || typeof s != "object" && typeof s != "function") && (s = {}); a < u; ++a)
    if (t = arguments[a], t != null)
      for (n in t)
        r = jv(s, n), o = jv(t, n), s !== o && (c && o && (zv(o) || (i = Fv(o))) ? (i ? (i = !1, l = r && Fv(r) ? r : []) : l = r && zv(r) ? r : {}, Bv(s, { name: n, newValue: e(c, l, o) })) : typeof o < "u" && Bv(s, { name: n, newValue: o }));
  return s;
};
function ph(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function y7() {
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
      o = u, c ? x7(c, s)(...u) : l(null, ...u);
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
function x7(e, t) {
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
function Bl(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Vv(e.position) : "start" in e || "end" in e ? Vv(e) : "line" in e || "column" in e ? hh(e) : "";
}
function hh(e) {
  return Uv(e && e.line) + ":" + Uv(e && e.column);
}
function Vv(e) {
  return hh(e && e.start) + "-" + hh(e && e.end);
}
function Uv(e) {
  return e && typeof e == "number" ? e : 1;
}
class Yt extends Error {
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
Yt.prototype.file = "";
Yt.prototype.name = "";
Yt.prototype.reason = "";
Yt.prototype.message = "";
Yt.prototype.stack = "";
Yt.prototype.fatal = null;
Yt.prototype.column = null;
Yt.prototype.line = null;
Yt.prototype.source = null;
Yt.prototype.ruleId = null;
Yt.prototype.position = null;
const yn = { basename: w7, dirname: b7, extname: S7, join: k7, sep: "/" };
function w7(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Qs(e);
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
function b7(e) {
  if (Qs(e), e.length === 0)
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
function S7(e) {
  Qs(e);
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
function k7(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Qs(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : C7(n);
}
function C7(e) {
  Qs(e);
  const t = e.charCodeAt(0) === 47;
  let n = $7(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function $7(e, t) {
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
function Qs(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const E7 = { cwd: A7 };
function A7() {
  return "/";
}
function mh(e) {
  return e !== null && typeof e == "object" && e.href && e.origin;
}
function P7(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!mh(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return _7(e);
}
function _7(e) {
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
class R7 {
  constructor(t) {
    let n;
    t ? typeof t == "string" || I7(t) ? n = { value: t } : mh(t) ? n = { path: t } : n = t : n = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = E7.cwd(), this.value, this.stored, this.result, this.map;
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
    mh(t) && (t = P7(t)), pd(t, "path"), this.path !== t && this.history.push(t);
  }
  get dirname() {
    return typeof this.path == "string" ? yn.dirname(this.path) : void 0;
  }
  set dirname(t) {
    Wv(this.basename, "dirname"), this.path = yn.join(t || "", this.basename);
  }
  get basename() {
    return typeof this.path == "string" ? yn.basename(this.path) : void 0;
  }
  set basename(t) {
    pd(t, "basename"), dd(t, "basename"), this.path = yn.join(this.dirname || "", t);
  }
  get extname() {
    return typeof this.path == "string" ? yn.extname(this.path) : void 0;
  }
  set extname(t) {
    if (dd(t, "extname"), Wv(this.dirname, "extname"), t) {
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
    pd(t, "stem"), dd(t, "stem"), this.path = yn.join(this.dirname || "", t + (this.extname || ""));
  }
  toString(t) {
    return (this.value || "").toString(t || void 0);
  }
  message(t, n, r) {
    const o = new Yt(t, n, r);
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
  if (e && e.includes(yn.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + yn.sep + "`"
    );
}
function pd(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Wv(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function I7(e) {
  return Lk(e);
}
const O7 = Bk().freeze(), zk = {}.hasOwnProperty;
function Bk() {
  const e = y7(), t = [];
  let n = {}, r, o = -1;
  return i.data = l, i.Parser = void 0, i.Compiler = void 0, i.freeze = s, i.attachers = t, i.use = a, i.parse = u, i.stringify = c, i.run = f, i.runSync = d, i.process = g, i.processSync = h, i;
  function i() {
    const v = Bk();
    let w = -1;
    for (; ++w < t.length; )
      v.use(...t[w]);
    return v.data(Hv(!0, {}, n)), v;
  }
  function l(v, w) {
    return typeof v == "string" ? arguments.length === 2 ? (gd("data", r), n[v] = w, i) : zk.call(n, v) && n[v] || null : v ? (gd("data", r), n = v, i) : n;
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
      P ? (ph(P[1]) && ph(E) && (E = Hv(!0, P[1], E)), P[1] = E) : t.push([...arguments]);
    }
  }
  function u(v) {
    i.freeze();
    const w = pl(v), p = i.Parser;
    return hd("parse", p), qv(p, "parse") ? new p(String(w), w).parse() : p(String(w), w);
  }
  function c(v, w) {
    i.freeze();
    const p = pl(w), y = i.Compiler;
    return md("stringify", y), Qv(v), qv(y, "compile") ? new y(v, p).compile() : y(v, p);
  }
  function f(v, w, p) {
    if (Qv(v), i.freeze(), !p && typeof w == "function" && (p = w, w = void 0), !p)
      return new Promise(y);
    y(null, p);
    function y(x, b) {
      e.run(v, pl(w), A);
      function A(S, E, $) {
        E = E || v, S ? b(S) : x ? x(E) : p(null, E, $);
      }
    }
  }
  function d(v, w) {
    let p, y;
    return i.run(v, w, x), Gv("runSync", "run", y), p;
    function x(b, A) {
      Nv(b), p = A, y = !0;
    }
  }
  function g(v, w) {
    if (i.freeze(), hd("process", i.Parser), md("process", i.Compiler), !w)
      return new Promise(p);
    p(null, w);
    function p(y, x) {
      const b = pl(v);
      i.run(i.parse(b), b, (S, E, $) => {
        if (S || !E || !$)
          A(S);
        else {
          const P = i.stringify(E, $);
          P == null || (N7(P) ? $.value = P : $.result = P), A(S, $);
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
    const p = pl(v);
    return i.process(p, y), Gv("processSync", "process", w), p;
    function y(x) {
      w = !0, Nv(x);
    }
  }
}
function qv(e, t) {
  return typeof e == "function" && e.prototype && (T7(e.prototype) || t in e.prototype);
}
function T7(e) {
  let t;
  for (t in e)
    if (zk.call(e, t))
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
function Qv(e) {
  if (!ph(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Gv(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function pl(e) {
  return M7(e) ? e : new R7(e);
}
function M7(e) {
  return Boolean(
    e && typeof e == "object" && "message" in e && "messages" in e
  );
}
function N7(e) {
  return typeof e == "string" || Lk(e);
}
const D7 = {};
function L7(e, t) {
  const n = t || D7, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, o = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return jk(e, r, o);
}
function jk(e, t, n) {
  if (F7(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Kv(e.children, t, n);
  }
  return Array.isArray(e) ? Kv(e, t, n) : "";
}
function Kv(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; )
    r[o] = jk(e[o], t, n);
  return r.join("");
}
function F7(e) {
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
function Bt(e, t) {
  return e.length > 0 ? (Rt(e, e.length, 0, t), e) : t;
}
const Yv = {}.hasOwnProperty;
function Hk(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    z7(t, e[n]);
  return t;
}
function z7(e, t) {
  let n;
  for (n in t) {
    const o = (Yv.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n];
    let l;
    for (l in i) {
      Yv.call(o, l) || (o[l] = []);
      const s = i[l];
      B7(
        o[l],
        Array.isArray(s) ? s : s ? [s] : []
      );
    }
  }
}
function B7(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Rt(e, 0, 0, r);
}
const j7 = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, Vt = Hr(/[A-Za-z]/), Xu = Hr(/\d/), H7 = Hr(/[\dA-Fa-f]/), ct = Hr(/[\dA-Za-z]/), V7 = Hr(/[!-/:-@[-`{-~]/), Xv = Hr(/[#-'*+\--9=?A-Z^-~]/);
function Cs(e) {
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
const qc = Hr(/\s/), Qc = Hr(j7);
function Hr(e) {
  return t;
  function t(n) {
    return n !== null && e.test(String.fromCharCode(n));
  }
}
function ge(e, t, n, r) {
  const o = r ? r - 1 : Number.POSITIVE_INFINITY;
  let i = 0;
  return l;
  function l(a) {
    return ve(a) ? (e.enter(n), s(a)) : t(a);
  }
  function s(a) {
    return ve(a) && i++ < o ? (e.consume(a), s) : (e.exit(n), t(a));
  }
}
const U7 = {
  tokenize: W7
};
function W7(e) {
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
    return e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), ge(e, t, "linePrefix");
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
    return X(s) ? (e.consume(s), e.exit("chunkText"), i) : (e.consume(s), l);
  }
}
const q7 = {
  tokenize: Q7
}, Zv = {
  tokenize: G7
};
function Q7(e) {
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
      Zv,
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
      Zv,
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
    return X(x) ? (e.consume(x), w(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(x), v);
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
function G7(e, t, n) {
  return ge(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function Zu(e) {
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
const gh = {
  name: "attention",
  tokenize: Y7,
  resolveAll: K7
};
function K7(e, t) {
  let n = -1, r, o, i, l, s, a, u, c;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          a = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const f = Object.assign({}, e[r][1].end), d = Object.assign({}, e[n][1].start);
          Jv(f, -a), Jv(d, a), l = {
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
          }, e[r][1].end = Object.assign({}, l.start), e[n][1].start = Object.assign({}, s.end), u = [], e[r][1].end.offset - e[r][1].start.offset && (u = Bt(u, [
            ["enter", e[r][1], t],
            ["exit", e[r][1], t]
          ])), u = Bt(u, [
            ["enter", o, t],
            ["enter", l, t],
            ["exit", l, t],
            ["enter", i, t]
          ]), u = Bt(
            u,
            Gc(
              t.parser.constructs.insideSpan.null,
              e.slice(r + 1, n),
              t
            )
          ), u = Bt(u, [
            ["exit", i, t],
            ["enter", s, t],
            ["exit", s, t],
            ["exit", o, t]
          ]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, u = Bt(u, [
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
function Y7(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, o = Zu(r);
  let i;
  return l;
  function l(a) {
    return e.enter("attentionSequence"), i = a, s(a);
  }
  function s(a) {
    if (a === i)
      return e.consume(a), s;
    const u = e.exit("attentionSequence"), c = Zu(a), f = !c || c === 2 && o || n.includes(a), d = !o || o === 2 && c || n.includes(r);
    return u._open = Boolean(i === 42 ? f : f && (o || !d)), u._close = Boolean(i === 42 ? d : d && (c || !f)), t(a);
  }
}
function Jv(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const X7 = {
  name: "autolink",
  tokenize: Z7
};
function Z7(e, t, n) {
  let r = 1;
  return o;
  function o(h) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i;
  }
  function i(h) {
    return Vt(h) ? (e.consume(h), l) : Xv(h) ? u(h) : n(h);
  }
  function l(h) {
    return h === 43 || h === 45 || h === 46 || ct(h) ? s(h) : u(h);
  }
  function s(h) {
    return h === 58 ? (e.consume(h), a) : (h === 43 || h === 45 || h === 46 || ct(h)) && r++ < 32 ? (e.consume(h), s) : u(h);
  }
  function a(h) {
    return h === 62 ? (e.exit("autolinkProtocol"), g(h)) : h === null || h === 32 || h === 60 || Cs(h) ? n(h) : (e.consume(h), a);
  }
  function u(h) {
    return h === 64 ? (e.consume(h), r = 0, c) : Xv(h) ? (e.consume(h), u) : n(h);
  }
  function c(h) {
    return ct(h) ? f(h) : n(h);
  }
  function f(h) {
    return h === 46 ? (e.consume(h), r = 0, c) : h === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", g(h)) : d(h);
  }
  function d(h) {
    return (h === 45 || ct(h)) && r++ < 63 ? (e.consume(h), h === 45 ? d : f) : n(h);
  }
  function g(h) {
    return e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t;
  }
}
const Gs = {
  tokenize: J7,
  partial: !0
};
function J7(e, t, n) {
  return ge(e, r, "linePrefix");
  function r(o) {
    return o === null || X(o) ? t(o) : n(o);
  }
}
const Vk = {
  name: "blockQuote",
  tokenize: e8,
  continuation: {
    tokenize: t8
  },
  exit: n8
};
function e8(e, t, n) {
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
    return ve(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function t8(e, t, n) {
  return ge(
    e,
    e.attempt(Vk, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function n8(e) {
  e.exit("blockQuote");
}
const Uk = {
  name: "characterEscape",
  tokenize: r8
};
function r8(e, t, n) {
  return r;
  function r(i) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(i), e.exit("escapeMarker"), o;
  }
  function o(i) {
    return V7(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i);
  }
}
const ey = document.createElement("i");
function pg(e) {
  const t = "&" + e + ";";
  ey.innerHTML = t;
  const n = ey.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
const Wk = {
  name: "characterReference",
  tokenize: o8
};
function o8(e, t, n) {
  const r = this;
  let o = 0, i, l;
  return s;
  function s(f) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), a;
  }
  function a(f) {
    return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), i = 31, l = ct, c(f));
  }
  function u(f) {
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), i = 6, l = H7, c) : (e.enter("characterReferenceValue"), i = 7, l = Xu, c(f));
  }
  function c(f) {
    let d;
    return f === 59 && o ? (d = e.exit("characterReferenceValue"), l === ct && !pg(r.sliceSerialize(d)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)) : l(f) && o++ < i ? (e.consume(f), c) : n(f);
  }
}
const ty = {
  name: "codeFenced",
  tokenize: i8,
  concrete: !0
};
function i8(e, t, n) {
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
    return S === u ? (e.consume(S), a++, f) : (e.exit("codeFencedFenceSequence"), a < 3 ? n(S) : ge(e, d, "whitespace")(S));
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
        s ? ge(
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
    return S === null || X(S) ? (e.exit("codeFlowValue"), p(S)) : (e.consume(S), y);
  }
  function x(S) {
    return e.exit("codeFenced"), t(S);
  }
  function b(S, E, $) {
    const P = this;
    return R;
    function R(T) {
      return S.enter("lineEnding"), S.consume(T), S.exit("lineEnding"), I;
    }
    function I(T) {
      return P.parser.lazy[P.now().line] ? $(T) : E(T);
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
    function R(L) {
      return S.enter("codeFencedFence"), S.enter("codeFencedFenceSequence"), I(L);
    }
    function I(L) {
      return L === u ? (S.consume(L), P++, I) : P < a ? $(L) : (S.exit("codeFencedFenceSequence"), ge(S, T, "whitespace")(L));
    }
    function T(L) {
      return L === null || X(L) ? (S.exit("codeFencedFence"), E(L)) : $(L);
    }
  }
}
const vd = {
  name: "codeIndented",
  tokenize: s8
}, l8 = {
  tokenize: a8,
  partial: !0
};
function s8(e, t, n) {
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
    return u === null ? a(u) : X(u) ? e.attempt(l8, l, a)(u) : (e.enter("codeFlowValue"), s(u));
  }
  function s(u) {
    return u === null || X(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), s);
  }
  function a(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function a8(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : X(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : ge(e, i, "linePrefix", 4 + 1)(l);
  }
  function i(l) {
    const s = r.events[r.events.length - 1];
    return s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(l) : X(l) ? o(l) : n(l);
  }
}
const u8 = {
  name: "codeText",
  tokenize: d8,
  resolve: c8,
  previous: f8
};
function c8(e) {
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
function f8(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function d8(e, t, n) {
  let r = 0, o, i;
  return l;
  function l(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), s(f);
  }
  function s(f) {
    return f === 96 ? (e.consume(f), r++, s) : (e.exit("codeTextSequence"), a(f));
  }
  function a(f) {
    return f === null ? n(f) : f === 96 ? (i = e.enter("codeTextSequence"), o = 0, c(f)) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), a) : X(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), a) : (e.enter("codeTextData"), u(f));
  }
  function u(f) {
    return f === null || f === 32 || f === 96 || X(f) ? (e.exit("codeTextData"), a(f)) : (e.consume(f), u);
  }
  function c(f) {
    return f === 96 ? (e.consume(f), o++, c) : o === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (i.type = "codeTextData", u(f));
  }
}
function qk(e) {
  const t = {};
  let n = -1, r, o, i, l, s, a, u;
  for (; ++n < e.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = e[n], n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix" && (a = r[1]._tokenizer.events, i = 0, i < a.length && a[i][1].type === "lineEndingBlank" && (i += 2), i < a.length && a[i][1].type === "content"))
      for (; ++i < a.length && a[i][1].type !== "content"; )
        a[i][1].type === "chunkText" && (a[i][1]._isInFirstContentOfListItem = !0, i++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, p8(e, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (i = n, o = void 0; i-- && (l = e[i], l[1].type === "lineEnding" || l[1].type === "lineEndingBlank"); )
        l[0] === "enter" && (o && (e[o][1].type = "lineEndingBlank"), l[1].type = "lineEnding", o = i);
      o && (r[1].end = Object.assign({}, e[o][1].start), s = e.slice(o, n), s.unshift(r), Rt(e, o, n - o + 1, s));
    }
  }
  return !u;
}
function p8(e, t) {
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
const h8 = {
  tokenize: v8,
  resolve: g8
}, m8 = {
  tokenize: y8,
  partial: !0
};
function g8(e) {
  return qk(e), e;
}
function v8(e, t) {
  let n;
  return r;
  function r(s) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), o(s);
  }
  function o(s) {
    return s === null ? i(s) : X(s) ? e.check(
      m8,
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
function y8(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), ge(e, i, "linePrefix");
  }
  function i(l) {
    if (l === null || X(l))
      return n(l);
    const s = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(l) : e.interrupt(r.parser.constructs.flow, n, t)(l);
  }
}
function Qk(e, t, n, r, o, i, l, s, a) {
  const u = a || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(p) {
    return p === 60 ? (e.enter(r), e.enter(o), e.enter(i), e.consume(p), e.exit(i), d) : p === null || p === 41 || Cs(p) ? n(p) : (e.enter(r), e.enter(l), e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), v(p));
  }
  function d(p) {
    return p === 62 ? (e.enter(i), e.consume(p), e.exit(i), e.exit(o), e.exit(r), t) : (e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), g(p));
  }
  function g(p) {
    return p === 62 ? (e.exit("chunkString"), e.exit(s), d(p)) : p === null || p === 60 || X(p) ? n(p) : (e.consume(p), p === 92 ? h : g);
  }
  function h(p) {
    return p === 60 || p === 62 || p === 92 ? (e.consume(p), g) : g(p);
  }
  function v(p) {
    return p === 40 ? ++c > u ? n(p) : (e.consume(p), v) : p === 41 ? c-- ? (e.consume(p), v) : (e.exit("chunkString"), e.exit(s), e.exit(l), e.exit(r), t(p)) : p === null || De(p) ? c ? n(p) : (e.exit("chunkString"), e.exit(s), e.exit(l), e.exit(r), t(p)) : Cs(p) ? n(p) : (e.consume(p), p === 92 ? w : v);
  }
  function w(p) {
    return p === 40 || p === 41 || p === 92 ? (e.consume(p), v) : v(p);
  }
}
function Gk(e, t, n, r, o, i) {
  const l = this;
  let s = 0, a;
  return u;
  function u(g) {
    return e.enter(r), e.enter(o), e.consume(g), e.exit(o), e.enter(i), c;
  }
  function c(g) {
    return g === null || g === 91 || g === 93 && !a || g === 94 && !s && "_hiddenFootnoteSupport" in l.parser.constructs || s > 999 ? n(g) : g === 93 ? (e.exit(i), e.enter(o), e.consume(g), e.exit(o), e.exit(r), t) : X(g) ? (e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), f(g));
  }
  function f(g) {
    return g === null || g === 91 || g === 93 || X(g) || s++ > 999 ? (e.exit("chunkString"), c(g)) : (e.consume(g), a = a || !ve(g), g === 92 ? d : f);
  }
  function d(g) {
    return g === 91 || g === 92 || g === 93 ? (e.consume(g), s++, f) : f(g);
  }
}
function Kk(e, t, n, r, o, i) {
  let l;
  return s;
  function s(d) {
    return e.enter(r), e.enter(o), e.consume(d), e.exit(o), l = d === 40 ? 41 : d, a;
  }
  function a(d) {
    return d === l ? (e.enter(o), e.consume(d), e.exit(o), e.exit(r), t) : (e.enter(i), u(d));
  }
  function u(d) {
    return d === l ? (e.exit(i), a(l)) : d === null ? n(d) : X(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), ge(e, u, "linePrefix")) : (e.enter("chunkString", {
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
function jl(e, t) {
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
function pn(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const x8 = {
  name: "definition",
  tokenize: b8
}, w8 = {
  tokenize: S8,
  partial: !0
};
function b8(e, t, n) {
  const r = this;
  let o;
  return i;
  function i(a) {
    return e.enter("definition"), Gk.call(
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
    return o = pn(
      r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
    ), a === 58 ? (e.enter("definitionMarker"), e.consume(a), e.exit("definitionMarker"), jl(
      e,
      Qk(
        e,
        e.attempt(
          w8,
          ge(e, s, "whitespace"),
          ge(e, s, "whitespace")
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
    return a === null || X(a) ? (e.exit("definition"), r.parser.defined.includes(o) || r.parser.defined.push(o), t(a)) : n(a);
  }
}
function S8(e, t, n) {
  return r;
  function r(l) {
    return De(l) ? jl(e, o)(l) : n(l);
  }
  function o(l) {
    return l === 34 || l === 39 || l === 40 ? Kk(
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
const k8 = {
  name: "hardBreakEscape",
  tokenize: C8
};
function C8(e, t, n) {
  return r;
  function r(i) {
    return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(i), o;
  }
  function o(i) {
    return X(i) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(i)) : n(i);
  }
}
const $8 = {
  name: "headingAtx",
  tokenize: A8,
  resolve: E8
};
function E8(e, t) {
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
function A8(e, t, n) {
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
    return c === 35 ? (e.enter("atxHeadingSequence"), a(c)) : c === null || X(c) ? (e.exit("atxHeading"), t(c)) : ve(c) ? ge(e, s, "whitespace")(c) : (e.enter("atxHeadingText"), u(c));
  }
  function a(c) {
    return c === 35 ? (e.consume(c), a) : (e.exit("atxHeadingSequence"), s(c));
  }
  function u(c) {
    return c === null || c === 35 || De(c) ? (e.exit("atxHeadingText"), s(c)) : (e.consume(c), u);
  }
}
const P8 = [
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
], ny = ["pre", "script", "style", "textarea"], _8 = {
  name: "htmlFlow",
  tokenize: O8,
  resolveTo: I8,
  concrete: !0
}, R8 = {
  tokenize: T8,
  partial: !0
};
function I8(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function O8(e, t, n) {
  const r = this;
  let o, i, l, s, a;
  return u;
  function u(C) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(C), c;
  }
  function c(C) {
    return C === 33 ? (e.consume(C), f) : C === 47 ? (e.consume(C), h) : C === 63 ? (e.consume(C), o = 3, r.interrupt ? t : O) : Vt(C) ? (e.consume(C), l = String.fromCharCode(C), i = !0, v) : n(C);
  }
  function f(C) {
    return C === 45 ? (e.consume(C), o = 2, d) : C === 91 ? (e.consume(C), o = 5, l = "CDATA[", s = 0, g) : Vt(C) ? (e.consume(C), o = 4, r.interrupt ? t : O) : n(C);
  }
  function d(C) {
    return C === 45 ? (e.consume(C), r.interrupt ? t : O) : n(C);
  }
  function g(C) {
    return C === l.charCodeAt(s++) ? (e.consume(C), s === l.length ? r.interrupt ? t : I : g) : n(C);
  }
  function h(C) {
    return Vt(C) ? (e.consume(C), l = String.fromCharCode(C), v) : n(C);
  }
  function v(C) {
    return C === null || C === 47 || C === 62 || De(C) ? C !== 47 && i && ny.includes(l.toLowerCase()) ? (o = 1, r.interrupt ? t(C) : I(C)) : P8.includes(l.toLowerCase()) ? (o = 6, C === 47 ? (e.consume(C), w) : r.interrupt ? t(C) : I(C)) : (o = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(C) : i ? y(C) : p(C)) : C === 45 || ct(C) ? (e.consume(C), l += String.fromCharCode(C), v) : n(C);
  }
  function w(C) {
    return C === 62 ? (e.consume(C), r.interrupt ? t : I) : n(C);
  }
  function p(C) {
    return ve(C) ? (e.consume(C), p) : P(C);
  }
  function y(C) {
    return C === 47 ? (e.consume(C), P) : C === 58 || C === 95 || Vt(C) ? (e.consume(C), x) : ve(C) ? (e.consume(C), y) : P(C);
  }
  function x(C) {
    return C === 45 || C === 46 || C === 58 || C === 95 || ct(C) ? (e.consume(C), x) : b(C);
  }
  function b(C) {
    return C === 61 ? (e.consume(C), A) : ve(C) ? (e.consume(C), b) : y(C);
  }
  function A(C) {
    return C === null || C === 60 || C === 61 || C === 62 || C === 96 ? n(C) : C === 34 || C === 39 ? (e.consume(C), a = C, S) : ve(C) ? (e.consume(C), A) : (a = null, E(C));
  }
  function S(C) {
    return C === null || X(C) ? n(C) : C === a ? (e.consume(C), $) : (e.consume(C), S);
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
    return ve(C) ? (e.consume(C), R) : C === null || X(C) ? I(C) : n(C);
  }
  function I(C) {
    return C === 45 && o === 2 ? (e.consume(C), z) : C === 60 && o === 1 ? (e.consume(C), _) : C === 62 && o === 4 ? (e.consume(C), M) : C === 63 && o === 3 ? (e.consume(C), O) : C === 93 && o === 5 ? (e.consume(C), N) : X(C) && (o === 6 || o === 7) ? e.check(
      R8,
      M,
      T
    )(C) : C === null || X(C) ? T(C) : (e.consume(C), I);
  }
  function T(C) {
    return e.exit("htmlFlowData"), L(C);
  }
  function L(C) {
    return C === null ? k(C) : X(C) ? e.attempt(
      {
        tokenize: B,
        partial: !0
      },
      L,
      k
    )(C) : (e.enter("htmlFlowData"), I(C));
  }
  function B(C, J, ne) {
    return se;
    function se(Q) {
      return C.enter("lineEnding"), C.consume(Q), C.exit("lineEnding"), ee;
    }
    function ee(Q) {
      return r.parser.lazy[r.now().line] ? ne(Q) : J(Q);
    }
  }
  function z(C) {
    return C === 45 ? (e.consume(C), O) : I(C);
  }
  function _(C) {
    return C === 47 ? (e.consume(C), l = "", H) : I(C);
  }
  function H(C) {
    return C === 62 && ny.includes(l.toLowerCase()) ? (e.consume(C), M) : Vt(C) && l.length < 8 ? (e.consume(C), l += String.fromCharCode(C), H) : I(C);
  }
  function N(C) {
    return C === 93 ? (e.consume(C), O) : I(C);
  }
  function O(C) {
    return C === 62 ? (e.consume(C), M) : C === 45 && o === 2 ? (e.consume(C), O) : I(C);
  }
  function M(C) {
    return C === null || X(C) ? (e.exit("htmlFlowData"), k(C)) : (e.consume(C), M);
  }
  function k(C) {
    return e.exit("htmlFlow"), t(C);
  }
}
function T8(e, t, n) {
  return r;
  function r(o) {
    return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), e.attempt(Gs, t, n);
  }
}
const M8 = {
  name: "htmlText",
  tokenize: N8
};
function N8(e, t, n) {
  const r = this;
  let o, i, l, s;
  return a;
  function a(k) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(k), u;
  }
  function u(k) {
    return k === 33 ? (e.consume(k), c) : k === 47 ? (e.consume(k), E) : k === 63 ? (e.consume(k), A) : Vt(k) ? (e.consume(k), R) : n(k);
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
    return k === null ? n(k) : k === 45 ? (e.consume(k), v) : X(k) ? (s = h, N(k)) : (e.consume(k), h);
  }
  function v(k) {
    return k === 45 ? (e.consume(k), M) : h(k);
  }
  function w(k) {
    return k === i.charCodeAt(l++) ? (e.consume(k), l === i.length ? p : w) : n(k);
  }
  function p(k) {
    return k === null ? n(k) : k === 93 ? (e.consume(k), y) : X(k) ? (s = p, N(k)) : (e.consume(k), p);
  }
  function y(k) {
    return k === 93 ? (e.consume(k), x) : p(k);
  }
  function x(k) {
    return k === 62 ? M(k) : k === 93 ? (e.consume(k), x) : p(k);
  }
  function b(k) {
    return k === null || k === 62 ? M(k) : X(k) ? (s = b, N(k)) : (e.consume(k), b);
  }
  function A(k) {
    return k === null ? n(k) : k === 63 ? (e.consume(k), S) : X(k) ? (s = A, N(k)) : (e.consume(k), A);
  }
  function S(k) {
    return k === 62 ? M(k) : A(k);
  }
  function E(k) {
    return Vt(k) ? (e.consume(k), $) : n(k);
  }
  function $(k) {
    return k === 45 || ct(k) ? (e.consume(k), $) : P(k);
  }
  function P(k) {
    return X(k) ? (s = P, N(k)) : ve(k) ? (e.consume(k), P) : M(k);
  }
  function R(k) {
    return k === 45 || ct(k) ? (e.consume(k), R) : k === 47 || k === 62 || De(k) ? I(k) : n(k);
  }
  function I(k) {
    return k === 47 ? (e.consume(k), M) : k === 58 || k === 95 || Vt(k) ? (e.consume(k), T) : X(k) ? (s = I, N(k)) : ve(k) ? (e.consume(k), I) : M(k);
  }
  function T(k) {
    return k === 45 || k === 46 || k === 58 || k === 95 || ct(k) ? (e.consume(k), T) : L(k);
  }
  function L(k) {
    return k === 61 ? (e.consume(k), B) : X(k) ? (s = L, N(k)) : ve(k) ? (e.consume(k), L) : I(k);
  }
  function B(k) {
    return k === null || k === 60 || k === 61 || k === 62 || k === 96 ? n(k) : k === 34 || k === 39 ? (e.consume(k), o = k, z) : X(k) ? (s = B, N(k)) : ve(k) ? (e.consume(k), B) : (e.consume(k), o = void 0, H);
  }
  function z(k) {
    return k === o ? (e.consume(k), _) : k === null ? n(k) : X(k) ? (s = z, N(k)) : (e.consume(k), z);
  }
  function _(k) {
    return k === 62 || k === 47 || De(k) ? I(k) : n(k);
  }
  function H(k) {
    return k === null || k === 34 || k === 39 || k === 60 || k === 61 || k === 96 ? n(k) : k === 62 || De(k) ? I(k) : (e.consume(k), H);
  }
  function N(k) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(k), e.exit("lineEnding"), ge(
      e,
      O,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
  }
  function O(k) {
    return e.enter("htmlTextData"), s(k);
  }
  function M(k) {
    return k === 62 ? (e.consume(k), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(k);
  }
}
const hg = {
  name: "labelEnd",
  tokenize: j8,
  resolveTo: B8,
  resolveAll: z8
}, D8 = {
  tokenize: H8
}, L8 = {
  tokenize: V8
}, F8 = {
  tokenize: U8
};
function z8(e) {
  let t = -1, n;
  for (; ++t < e.length; )
    n = e[t][1], (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++);
  return e;
}
function B8(e, t) {
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
  ], s = Bt(s, e.slice(i + 1, i + r + 3)), s = Bt(s, [["enter", c, t]]), s = Bt(
    s,
    Gc(
      t.parser.constructs.insideSpan.null,
      e.slice(i + r + 4, l - 3),
      t
    )
  ), s = Bt(s, [
    ["exit", c, t],
    e[l - 2],
    e[l - 1],
    ["exit", u, t]
  ]), s = Bt(s, e.slice(l + 1)), s = Bt(s, [["exit", a, t]]), Rt(e, i, e.length, s), e;
}
function j8(e, t, n) {
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
      pn(
        r.sliceSerialize({
          start: i.end,
          end: r.now()
        })
      )
    ), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(c), e.exit("labelMarker"), e.exit("labelEnd"), a) : n(c);
  }
  function a(c) {
    return c === 40 ? e.attempt(
      D8,
      t,
      l ? t : u
    )(c) : c === 91 ? e.attempt(
      L8,
      t,
      l ? e.attempt(F8, t, u) : u
    )(c) : l ? t(c) : u(c);
  }
  function u(c) {
    return i._balanced = !0, n(c);
  }
}
function H8(e, t, n) {
  return r;
  function r(a) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(a), e.exit("resourceMarker"), jl(e, o);
  }
  function o(a) {
    return a === 41 ? s(a) : Qk(
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
    return De(a) ? jl(e, l)(a) : s(a);
  }
  function l(a) {
    return a === 34 || a === 39 || a === 40 ? Kk(
      e,
      jl(e, s),
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
function V8(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return Gk.call(
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
      pn(
        r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
      )
    ) ? t(l) : n(l);
  }
}
function U8(e, t, n) {
  return r;
  function r(i) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), o;
  }
  function o(i) {
    return i === 93 ? (e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), e.exit("reference"), t) : n(i);
  }
}
const W8 = {
  name: "labelStartImage",
  tokenize: q8,
  resolveAll: hg.resolveAll
};
function q8(e, t, n) {
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
const Q8 = {
  name: "labelStartLink",
  tokenize: G8,
  resolveAll: hg.resolveAll
};
function G8(e, t, n) {
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
  tokenize: K8
};
function K8(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ge(e, t, "linePrefix");
  }
}
const su = {
  name: "thematicBreak",
  tokenize: Y8
};
function Y8(e, t, n) {
  let r = 0, o;
  return i;
  function i(a) {
    return e.enter("thematicBreak"), o = a, l(a);
  }
  function l(a) {
    return a === o ? (e.enter("thematicBreakSequence"), s(a)) : ve(a) ? ge(e, l, "whitespace")(a) : r < 3 || a !== null && !X(a) ? n(a) : (e.exit("thematicBreak"), t(a));
  }
  function s(a) {
    return a === o ? (e.consume(a), r++, s) : (e.exit("thematicBreakSequence"), l(a));
  }
}
const mt = {
  name: "list",
  tokenize: J8,
  continuation: {
    tokenize: e9
  },
  exit: n9
}, X8 = {
  tokenize: r9,
  partial: !0
}, Z8 = {
  tokenize: t9,
  partial: !0
};
function J8(e, t, n) {
  const r = this, o = r.events[r.events.length - 1];
  let i = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0, l = 0;
  return s;
  function s(g) {
    const h = r.containerState.type || (g === 42 || g === 43 || g === 45 ? "listUnordered" : "listOrdered");
    if (h === "listUnordered" ? !r.containerState.marker || g === r.containerState.marker : Xu(g)) {
      if (r.containerState.type || (r.containerState.type = h, e.enter(h, {
        _container: !0
      })), h === "listUnordered")
        return e.enter("listItemPrefix"), g === 42 || g === 45 ? e.check(su, n, u)(g) : u(g);
      if (!r.interrupt || g === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), a(g);
    }
    return n(g);
  }
  function a(g) {
    return Xu(g) && ++l < 10 ? (e.consume(g), a) : (!r.interrupt || l < 2) && (r.containerState.marker ? g === r.containerState.marker : g === 41 || g === 46) ? (e.exit("listItemValue"), u(g)) : n(g);
  }
  function u(g) {
    return e.enter("listItemMarker"), e.consume(g), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || g, e.check(
      Gs,
      r.interrupt ? n : c,
      e.attempt(
        X8,
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
function e9(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Gs, o, i);
  function o(s) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ge(
      e,
      t,
      "listItemIndent",
      r.containerState.size + 1
    )(s);
  }
  function i(s) {
    return r.containerState.furtherBlankLines || !ve(s) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(s)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Z8, t, l)(s));
  }
  function l(s) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, ge(
      e,
      e.attempt(mt, t, n),
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(s);
  }
}
function t9(e, t, n) {
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
function n9(e) {
  e.exit(this.containerState.type);
}
function r9(e, t, n) {
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
const ry = {
  name: "setextUnderline",
  tokenize: i9,
  resolveTo: o9
};
function o9(e, t) {
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
function i9(e, t, n) {
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
    return c === i ? (e.consume(c), a) : (e.exit("setextHeadingLineSequence"), ge(e, u, "lineSuffix")(c));
  }
  function u(c) {
    return c === null || X(c) ? (e.exit("setextHeadingLine"), t(c)) : n(c);
  }
}
const l9 = {
  tokenize: s9
};
function s9(e) {
  const t = this, n = e.attempt(
    Gs,
    r,
    e.attempt(
      this.parser.constructs.flowInitial,
      o,
      ge(
        e,
        e.attempt(
          this.parser.constructs.flow,
          o,
          e.attempt(h8, o)
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
const a9 = {
  resolveAll: Xk()
}, u9 = Yk("string"), c9 = Yk("text");
function Yk(e) {
  return {
    tokenize: t,
    resolveAll: Xk(
      e === "text" ? f9 : void 0
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
function Xk(e) {
  return t;
  function t(n, r) {
    let o = -1, i;
    for (; ++o <= n.length; )
      i === void 0 ? n[o] && n[o][1].type === "data" && (i = o, o++) : (!n[o] || n[o][1].type !== "data") && (o !== i + 2 && (n[i][1].end = n[o - 1][1].end, n.splice(i + 2, o - i - 2), o = i + 2), i = void 0);
    return e ? e(n, r) : n;
  }
}
function f9(e, t) {
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
function d9(e, t, n) {
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
  let c = t.tokenize.call(u, a);
  return t.resolveAll && i.push(t), u;
  function f(I) {
    return l = Bt(l, I), w(), l[l.length - 1] !== null ? [] : ($(t, 0), u.events = Gc(i, u.events, u), u.events);
  }
  function d(I, T) {
    return h9(g(I), T);
  }
  function g(I) {
    return p9(l, I);
  }
  function h() {
    return Object.assign({}, r);
  }
  function v(I) {
    o[I.line] = I.column, R();
  }
  function w() {
    let I;
    for (; r._index < l.length; ) {
      const T = l[r._index];
      if (typeof T == "string")
        for (I = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === I && r._bufferIndex < T.length; )
          p(T.charCodeAt(r._bufferIndex));
      else
        p(T);
    }
  }
  function p(I) {
    c = c(I);
  }
  function y(I) {
    X(I) ? (r.line++, r.column = 1, r.offset += I === -3 ? 2 : 1, R()) : I !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = I;
  }
  function x(I, T) {
    const L = T || {};
    return L.type = I, L.start = h(), u.events.push(["enter", L, u]), s.push(L), L;
  }
  function b(I) {
    const T = s.pop();
    return T.end = h(), u.events.push(["exit", T, u]), T;
  }
  function A(I, T) {
    $(I, T.from);
  }
  function S(I, T) {
    T.restore();
  }
  function E(I, T) {
    return L;
    function L(B, z, _) {
      let H, N, O, M;
      return Array.isArray(B) ? C(B) : "tokenize" in B ? C([B]) : k(B);
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
        return H = ee, N = 0, ee.length === 0 ? _ : J(ee[N]);
      }
      function J(ee) {
        return Q;
        function Q(ie) {
          return M = P(), O = ee, ee.partial || (u.currentConstruct = ee), ee.name && u.parser.constructs.disable.null.includes(ee.name) ? se() : ee.tokenize.call(
            T ? Object.assign(Object.create(u), T) : u,
            a,
            ne,
            se
          )(ie);
        }
      }
      function ne(ee) {
        return I(O, M), z;
      }
      function se(ee) {
        return M.restore(), ++N < H.length ? J(H[N]) : _;
      }
    }
  }
  function $(I, T) {
    I.resolveAll && !i.includes(I) && i.push(I), I.resolve && Rt(
      u.events,
      T,
      u.events.length - T,
      I.resolve(u.events.slice(T), u)
    ), I.resolveTo && (u.events = I.resolveTo(u.events, u));
  }
  function P() {
    const I = h(), T = u.previous, L = u.currentConstruct, B = u.events.length, z = Array.from(s);
    return {
      restore: _,
      from: B
    };
    function _() {
      r = I, u.previous = T, u.currentConstruct = L, u.events.length = B, s = z, R();
    }
  }
  function R() {
    r.line in o && r.column < 2 && (r.column = o[r.line], r.offset += o[r.line] - 1);
  }
}
function p9(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, o = t.end._index, i = t.end._bufferIndex;
  let l;
  return n === o ? l = [e[n].slice(r, i)] : (l = e.slice(n, o), r > -1 && (l[0] = l[0].slice(r)), i > 0 && l.push(e[o].slice(0, i))), l;
}
function h9(e, t) {
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
const m9 = {
  [42]: mt,
  [43]: mt,
  [45]: mt,
  [48]: mt,
  [49]: mt,
  [50]: mt,
  [51]: mt,
  [52]: mt,
  [53]: mt,
  [54]: mt,
  [55]: mt,
  [56]: mt,
  [57]: mt,
  [62]: Vk
}, g9 = {
  [91]: x8
}, v9 = {
  [-2]: vd,
  [-1]: vd,
  [32]: vd
}, y9 = {
  [35]: $8,
  [42]: su,
  [45]: [ry, su],
  [60]: _8,
  [61]: ry,
  [95]: su,
  [96]: ty,
  [126]: ty
}, x9 = {
  [38]: Wk,
  [92]: Uk
}, w9 = {
  [-5]: yd,
  [-4]: yd,
  [-3]: yd,
  [33]: W8,
  [38]: Wk,
  [42]: gh,
  [60]: [X7, M8],
  [91]: Q8,
  [92]: [k8, Uk],
  [93]: hg,
  [95]: gh,
  [96]: u8
}, b9 = {
  null: [gh, a9]
}, S9 = {
  null: [42, 95]
}, k9 = {
  null: []
}, C9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  document: m9,
  contentInitial: g9,
  flowInitial: v9,
  flow: y9,
  string: x9,
  text: w9,
  insideSpan: b9,
  attentionMarkers: S9,
  disable: k9
}, Symbol.toStringTag, { value: "Module" }));
function $9(e = {}) {
  const t = Hk(
    [C9].concat(e.extensions || [])
  ), n = {
    defined: [],
    lazy: {},
    constructs: t,
    content: r(U7),
    document: r(q7),
    flow: r(l9),
    string: r(u9),
    text: r(c9)
  };
  return n;
  function r(o) {
    return i;
    function i(l) {
      return d9(n, o, l);
    }
  }
}
const oy = /[\0\t\n\r]/g;
function E9() {
  let e = 1, t = "", n = !0, r;
  return o;
  function o(i, l, s) {
    const a = [];
    let u, c, f, d, g;
    for (i = t + i.toString(l), f = 0, t = "", n && (i.charCodeAt(0) === 65279 && f++, n = void 0); f < i.length; ) {
      if (oy.lastIndex = f, u = oy.exec(i), d = u && u.index !== void 0 ? u.index : i.length, g = i.charCodeAt(d), !u) {
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
function A9(e) {
  for (; !qk(e); )
    ;
  return e;
}
function Zk(e, t) {
  const n = Number.parseInt(e, t);
  return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "\uFFFD" : String.fromCharCode(n);
}
const P9 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Jk(e) {
  return e.replace(P9, _9);
}
function _9(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const o = n.charCodeAt(1), i = o === 120 || o === 88;
    return Zk(n.slice(i ? 2 : 1), i ? 16 : 10);
  }
  return pg(n) || e;
}
const e2 = {}.hasOwnProperty, R9 = function(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), I9(n)(
    A9(
      $9(n).document().write(E9()(e, t, !0))
    )
  );
};
function I9(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: s(or),
      autolinkProtocol: I,
      autolinkEmail: I,
      atxHeading: s(tr),
      blockQuote: s(de),
      characterEscape: I,
      characterReference: I,
      codeFenced: s(ae),
      codeFencedFenceInfo: a,
      codeFencedFenceMeta: a,
      codeIndented: s(ae, a),
      codeText: s(lt, a),
      codeTextData: I,
      data: I,
      codeFlowValue: I,
      definition: s(st),
      definitionDestinationString: a,
      definitionLabelString: a,
      definitionTitleString: a,
      emphasis: s(Vr),
      hardBreakEscape: s(nr),
      hardBreakTrailing: s(nr),
      htmlFlow: s(Js, a),
      htmlFlowData: I,
      htmlText: s(Js, a),
      htmlTextData: I,
      image: s(rr),
      label: a,
      link: s(or),
      listItem: s(ir),
      listItemValue: h,
      listOrdered: s(Gi, g),
      listUnordered: s(Gi),
      paragraph: s(sf),
      reference: se,
      referenceString: a,
      resourceDestinationString: a,
      resourceTitleString: a,
      setextHeading: s(tr),
      strong: s(af),
      thematicBreak: s(AC)
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: E,
      autolink: c(),
      autolinkEmail: ue,
      autolinkProtocol: xe,
      blockQuote: c(),
      characterEscapeValue: T,
      characterReferenceMarkerHexadecimal: Q,
      characterReferenceMarkerNumeric: Q,
      characterReferenceValue: ie,
      codeFenced: c(y),
      codeFencedFence: p,
      codeFencedFenceInfo: v,
      codeFencedFenceMeta: w,
      codeFlowValue: T,
      codeIndented: c(x),
      codeText: c(H),
      codeTextData: T,
      data: T,
      definition: c(),
      definitionDestinationString: S,
      definitionLabelString: b,
      definitionTitleString: A,
      emphasis: c(),
      hardBreakEscape: c(B),
      hardBreakTrailing: c(B),
      htmlFlow: c(z),
      htmlFlowData: T,
      htmlText: c(_),
      htmlTextData: T,
      image: c(O),
      label: k,
      labelText: M,
      lineEnding: L,
      link: c(N),
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
  t2(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(F) {
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
    }, be = [];
    let ke = -1;
    for (; ++ke < F.length; )
      if (F[ke][1].type === "listOrdered" || F[ke][1].type === "listUnordered")
        if (F[ke][0] === "enter")
          be.push(ke);
        else {
          const Zt = be.pop();
          ke = o(F, Zt, ke);
        }
    for (ke = -1; ++ke < F.length; ) {
      const Zt = t[F[ke][0]];
      e2.call(Zt, F[ke][1].type) && Zt[F[ke][1].type].call(
        Object.assign(
          {
            sliceSerialize: F[ke][2].sliceSerialize
          },
          te
        ),
        F[ke][1]
      );
    }
    if (te.tokenStack.length > 0) {
      const Zt = te.tokenStack[te.tokenStack.length - 1];
      (Zt[1] || iy).call(te, void 0, Zt[0]);
    }
    for (q.position = {
      start: cr(
        F.length > 0 ? F[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }
      ),
      end: cr(
        F.length > 0 ? F[F.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        }
      )
    }, ke = -1; ++ke < t.transforms.length; )
      q = t.transforms[ke](q) || q;
    return q;
  }
  function o(F, q, te) {
    let be = q - 1, ke = -1, Zt = !1, lr, On, Ki, Yi;
    for (; ++be <= te; ) {
      const Le = F[be];
      if (Le[1].type === "listUnordered" || Le[1].type === "listOrdered" || Le[1].type === "blockQuote" ? (Le[0] === "enter" ? ke++ : ke--, Yi = void 0) : Le[1].type === "lineEndingBlank" ? Le[0] === "enter" && (lr && !Yi && !ke && !Ki && (Ki = be), Yi = void 0) : Le[1].type === "linePrefix" || Le[1].type === "listItemValue" || Le[1].type === "listItemMarker" || Le[1].type === "listItemPrefix" || Le[1].type === "listItemPrefixWhitespace" || (Yi = void 0), !ke && Le[0] === "enter" && Le[1].type === "listItemPrefix" || ke === -1 && Le[0] === "exit" && (Le[1].type === "listUnordered" || Le[1].type === "listOrdered")) {
        if (lr) {
          let uf = be;
          for (On = void 0; uf--; ) {
            const Tn = F[uf];
            if (Tn[1].type === "lineEnding" || Tn[1].type === "lineEndingBlank") {
              if (Tn[0] === "exit")
                continue;
              On && (F[On][1].type = "lineEndingBlank", Zt = !0), Tn[1].type = "lineEnding", On = uf;
            } else if (!(Tn[1].type === "linePrefix" || Tn[1].type === "blockQuotePrefix" || Tn[1].type === "blockQuotePrefixWhitespace" || Tn[1].type === "blockQuoteMarker" || Tn[1].type === "listItemIndent"))
              break;
          }
          Ki && (!On || Ki < On) && (lr._spread = !0), lr.end = Object.assign(
            {},
            On ? F[On][1].start : Le[1].end
          ), F.splice(On || be, 0, ["exit", lr, Le[2]]), be++, te++;
        }
        Le[1].type === "listItemPrefix" && (lr = {
          type: "listItem",
          _spread: !1,
          start: Object.assign({}, Le[1].start)
        }, F.splice(be, 0, ["enter", lr, Le[2]]), be++, te++, Ki = void 0, Yi = !0);
      }
    }
    return F[q][1]._spread = Zt, te;
  }
  function i(F, q) {
    n[F] = q;
  }
  function l(F) {
    return n[F];
  }
  function s(F, q) {
    return te;
    function te(be) {
      u.call(this, F(be), be), q && q.call(this, be);
    }
  }
  function a() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function u(F, q, te) {
    return this.stack[this.stack.length - 1].children.push(F), this.stack.push(F), this.tokenStack.push([q, te]), F.position = {
      start: cr(q.start)
    }, F;
  }
  function c(F) {
    return q;
    function q(te) {
      F && F.call(this, te), f.call(this, te);
    }
  }
  function f(F, q) {
    const te = this.stack.pop(), be = this.tokenStack.pop();
    if (be)
      be[0].type !== F.type && (q ? q.call(this, F, be[0]) : (be[1] || iy).call(this, F, be[0]));
    else
      throw new Error(
        "Cannot close `" + F.type + "` (" + Bl({
          start: F.start,
          end: F.end
        }) + "): it\u2019s not open"
      );
    return te.position.end = cr(F.end), te;
  }
  function d() {
    return L7(this.stack.pop());
  }
  function g() {
    i("expectingFirstListItemValue", !0);
  }
  function h(F) {
    if (l("expectingFirstListItemValue")) {
      const q = this.stack[this.stack.length - 2];
      q.start = Number.parseInt(this.sliceSerialize(F), 10), i("expectingFirstListItemValue");
    }
  }
  function v() {
    const F = this.resume(), q = this.stack[this.stack.length - 1];
    q.lang = F;
  }
  function w() {
    const F = this.resume(), q = this.stack[this.stack.length - 1];
    q.meta = F;
  }
  function p() {
    l("flowCodeInside") || (this.buffer(), i("flowCodeInside", !0));
  }
  function y() {
    const F = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = F.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), i("flowCodeInside");
  }
  function x() {
    const F = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = F.replace(/(\r?\n|\r)$/g, "");
  }
  function b(F) {
    const q = this.resume(), te = this.stack[this.stack.length - 1];
    te.label = q, te.identifier = pn(
      this.sliceSerialize(F)
    ).toLowerCase();
  }
  function A() {
    const F = this.resume(), q = this.stack[this.stack.length - 1];
    q.title = F;
  }
  function S() {
    const F = this.resume(), q = this.stack[this.stack.length - 1];
    q.url = F;
  }
  function E(F) {
    const q = this.stack[this.stack.length - 1];
    if (!q.depth) {
      const te = this.sliceSerialize(F).length;
      q.depth = te;
    }
  }
  function $() {
    i("setextHeadingSlurpLineEnding", !0);
  }
  function P(F) {
    const q = this.stack[this.stack.length - 1];
    q.depth = this.sliceSerialize(F).charCodeAt(0) === 61 ? 1 : 2;
  }
  function R() {
    i("setextHeadingSlurpLineEnding");
  }
  function I(F) {
    const q = this.stack[this.stack.length - 1];
    let te = q.children[q.children.length - 1];
    (!te || te.type !== "text") && (te = EC(), te.position = {
      start: cr(F.start)
    }, q.children.push(te)), this.stack.push(te);
  }
  function T(F) {
    const q = this.stack.pop();
    q.value += this.sliceSerialize(F), q.position.end = cr(F.end);
  }
  function L(F) {
    const q = this.stack[this.stack.length - 1];
    if (l("atHardBreak")) {
      const te = q.children[q.children.length - 1];
      te.position.end = cr(F.end), i("atHardBreak");
      return;
    }
    !l("setextHeadingSlurpLineEnding") && t.canContainEols.includes(q.type) && (I.call(this, F), T.call(this, F));
  }
  function B() {
    i("atHardBreak", !0);
  }
  function z() {
    const F = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = F;
  }
  function _() {
    const F = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = F;
  }
  function H() {
    const F = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = F;
  }
  function N() {
    const F = this.stack[this.stack.length - 1];
    if (l("inReference")) {
      const q = l("referenceType") || "shortcut";
      F.type += "Reference", F.referenceType = q, delete F.url, delete F.title;
    } else
      delete F.identifier, delete F.label;
    i("referenceType");
  }
  function O() {
    const F = this.stack[this.stack.length - 1];
    if (l("inReference")) {
      const q = l("referenceType") || "shortcut";
      F.type += "Reference", F.referenceType = q, delete F.url, delete F.title;
    } else
      delete F.identifier, delete F.label;
    i("referenceType");
  }
  function M(F) {
    const q = this.sliceSerialize(F), te = this.stack[this.stack.length - 2];
    te.label = Jk(q), te.identifier = pn(q).toLowerCase();
  }
  function k() {
    const F = this.stack[this.stack.length - 1], q = this.resume(), te = this.stack[this.stack.length - 1];
    if (i("inReference", !0), te.type === "link") {
      const be = F.children;
      te.children = be;
    } else
      te.alt = q;
  }
  function C() {
    const F = this.resume(), q = this.stack[this.stack.length - 1];
    q.url = F;
  }
  function J() {
    const F = this.resume(), q = this.stack[this.stack.length - 1];
    q.title = F;
  }
  function ne() {
    i("inReference");
  }
  function se() {
    i("referenceType", "collapsed");
  }
  function ee(F) {
    const q = this.resume(), te = this.stack[this.stack.length - 1];
    te.label = q, te.identifier = pn(
      this.sliceSerialize(F)
    ).toLowerCase(), i("referenceType", "full");
  }
  function Q(F) {
    i("characterReferenceType", F.type);
  }
  function ie(F) {
    const q = this.sliceSerialize(F), te = l("characterReferenceType");
    let be;
    te ? (be = Zk(
      q,
      te === "characterReferenceMarkerNumeric" ? 10 : 16
    ), i("characterReferenceType")) : be = pg(q);
    const ke = this.stack.pop();
    ke.value += be, ke.position.end = cr(F.end);
  }
  function xe(F) {
    T.call(this, F);
    const q = this.stack[this.stack.length - 1];
    q.url = this.sliceSerialize(F);
  }
  function ue(F) {
    T.call(this, F);
    const q = this.stack[this.stack.length - 1];
    q.url = "mailto:" + this.sliceSerialize(F);
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
  function lt() {
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
  function Js() {
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
  function Gi(F) {
    return {
      type: "list",
      ordered: F.type === "listOrdered",
      start: null,
      spread: F._spread,
      children: []
    };
  }
  function ir(F) {
    return {
      type: "listItem",
      spread: F._spread,
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
  function af() {
    return {
      type: "strong",
      children: []
    };
  }
  function EC() {
    return {
      type: "text",
      value: ""
    };
  }
  function AC() {
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
    Array.isArray(r) ? t2(e, r) : O9(e, r);
  }
}
function O9(e, t) {
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
function iy(e, t) {
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
function T9(e) {
  Object.assign(this, { Parser: (n) => {
    const r = this.data("settings");
    return R9(
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
})(n2);
const M9 = n2.exports, Oa = Object.assign(Ur(Error), {
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
    const o = n && M9(n, ...r);
    return new e(o);
  }
}
const Ta = {}.hasOwnProperty, ly = {
  yaml: "-",
  toml: "+"
};
function mg(e) {
  const t = [];
  let n = -1;
  const r = Array.isArray(e) ? e : e ? [e] : ["yaml"];
  for (; ++n < r.length; )
    t[n] = N9(r[n]);
  return t;
}
function N9(e) {
  let t = e;
  if (typeof t == "string") {
    if (!Ta.call(ly, t))
      throw Oa("Missing matter definition for `%s`", t);
    t = {
      type: t,
      marker: ly[t]
    };
  } else if (typeof t != "object")
    throw Oa("Expected matter to be an object, not `%j`", t);
  if (!Ta.call(t, "type"))
    throw Oa("Missing `type` in matter `%j`", t);
  if (!Ta.call(t, "fence") && !Ta.call(t, "marker"))
    throw Oa("Missing `marker` or `fence` in matter `%j`", t);
  return t;
}
function D9(e) {
  const t = mg(e), n = {};
  let r = -1;
  for (; ++r < t.length; ) {
    const o = t[r], i = vh(o, "open").charCodeAt(0), l = L9(o), s = n[i];
    Array.isArray(s) ? s.push(l) : n[i] = [l];
  }
  return {
    flow: n
  };
}
function L9(e) {
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
    function v(E) {
      const $ = h.now();
      return $.column === 1 && ($.line === 1 || t) && (s = vh(e, "open"), a = 0, E === s.charCodeAt(a)) ? (f.enter(n), f.enter(r), f.enter(o), w(E)) : g(E);
    }
    function w(E) {
      return a === s.length ? (f.exit(o), ve(E) ? (f.enter("whitespace"), p(E)) : y(E)) : E === s.charCodeAt(a++) ? (f.consume(E), w) : g(E);
    }
    function p(E) {
      return ve(E) ? (f.consume(E), p) : (f.exit("whitespace"), y(E));
    }
    function y(E) {
      return X(E) ? (f.exit(r), f.enter("lineEnding"), f.consume(E), f.exit("lineEnding"), s = vh(e, "close"), a = 0, f.attempt(l, S, x)) : g(E);
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
      return x === s.charCodeAt(h) ? (f.enter(r), f.enter(o), w(x)) : g(x);
    }
    function w(x) {
      return h === s.length ? (f.exit(o), ve(x) ? (f.enter("whitespace"), p(x)) : y(x)) : x === s.charCodeAt(h++) ? (f.consume(x), w) : g(x);
    }
    function p(x) {
      return ve(x) ? (f.consume(x), p) : (f.exit("whitespace"), y(x));
    }
    function y(x) {
      return x === null || X(x) ? (f.exit(r), d(x)) : g(x);
    }
  }
}
function vh(e, t) {
  return e.marker ? sy(e.marker, t).repeat(3) : sy(e.fence, t);
}
function sy(e, t) {
  return typeof e == "string" ? e : e[t];
}
function F9(e) {
  const t = mg(e), n = {}, r = {};
  let o = -1;
  for (; ++o < t.length; ) {
    const i = t[o];
    n[i.type] = z9(i), r[i.type] = B9, r[i.type + "Value"] = j9;
  }
  return { enter: n, exit: r };
}
function z9(e) {
  return t;
  function t(n) {
    this.enter({ type: e.type, value: "" }, n), this.buffer();
  }
}
function B9(e) {
  const t = this.resume(), n = this.exit(e);
  n.value = t.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
}
function j9(e) {
  this.config.enter.data.call(this, e), this.config.exit.data.call(this, e);
}
function H9(e) {
  const t = [], n = {}, r = mg(e);
  let o = -1;
  for (; ++o < r.length; ) {
    const i = r[o];
    n[i.type] = V9(i), t.push({ atBreak: !0, character: yh(i, "open").charAt(0) });
  }
  return { unsafe: t, handlers: n };
}
function V9(e) {
  const t = yh(e, "open"), n = yh(e, "close");
  return r;
  function r(o) {
    return t + (o.value ? `
` + o.value : "") + `
` + n;
  }
}
function yh(e, t) {
  return e.marker ? ay(e.marker, t).repeat(3) : ay(e.fence, t);
}
function ay(e, t) {
  return typeof e == "string" ? e : e[t];
}
function U9(e = "yaml") {
  const t = this.data();
  n("micromarkExtensions", D9(e)), n("fromMarkdownExtensions", F9(e)), n("toMarkdownExtensions", H9(e));
  function n(r, o) {
    (t[r] ? t[r] : t[r] = []).push(o);
  }
}
const W9 = {
  tokenize: Y9,
  partial: !0
}, r2 = {
  tokenize: X9,
  partial: !0
}, o2 = {
  tokenize: Z9,
  partial: !0
}, hi = {
  tokenize: eM,
  partial: !0
}, i2 = {
  tokenize: J9,
  partial: !0
}, l2 = {
  tokenize: G9,
  previous: u2
}, s2 = {
  tokenize: K9,
  previous: vg
}, er = {
  tokenize: Q9,
  previous: c2
}, In = {}, q9 = {
  text: In
};
let Wr = 48;
for (; Wr < 123; )
  In[Wr] = er, Wr++, Wr === 58 ? Wr = 65 : Wr === 91 && (Wr = 97);
In[43] = er;
In[45] = er;
In[46] = er;
In[95] = er;
In[72] = [er, s2];
In[104] = [er, s2];
In[87] = [er, l2];
In[119] = [er, l2];
function Q9(e, t, n) {
  const r = this;
  let o, i;
  return l;
  function l(g) {
    return !uy(g) || !c2(r.previous) || yg(r.events) ? n(g) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(g));
  }
  function s(g) {
    return uy(g) ? (e.consume(g), s) : g === 64 ? (e.consume(g), a) : n(g);
  }
  function a(g) {
    return g === 46 ? e.check(hi, d, u)(g) : g === 45 || g === 95 ? e.check(hi, n, c)(g) : ct(g) ? (!i && Xu(g) && (i = !0), e.consume(g), a) : d(g);
  }
  function u(g) {
    return e.consume(g), o = !0, i = void 0, a;
  }
  function c(g) {
    return e.consume(g), f;
  }
  function f(g) {
    return g === 46 ? e.check(hi, n, u)(g) : a(g);
  }
  function d(g) {
    return o && !i ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(g)) : n(g);
  }
}
function G9(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return l !== 87 && l !== 119 || !u2(r.previous) || yg(r.events) ? n(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(
      W9,
      e.attempt(r2, e.attempt(o2, i), n),
      n
    )(l));
  }
  function i(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(l);
  }
}
function K9(e, t, n) {
  const r = this;
  return o;
  function o(h) {
    return h !== 72 && h !== 104 || !vg(r.previous) || yg(r.events) ? n(h) : (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), e.consume(h), i);
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
    return h === null || Cs(h) || qc(h) || Qc(h) ? n(h) : e.attempt(r2, e.attempt(o2, g), n)(h);
  }
  function g(h) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(h);
  }
}
function Y9(e, t, n) {
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
    return a === null || X(a) ? n(a) : t(a);
  }
}
function X9(e, t, n) {
  let r, o;
  return i;
  function i(a) {
    return a === 38 ? e.check(
      i2,
      s,
      l
    )(a) : a === 46 || a === 95 ? e.check(hi, s, l)(a) : a === null || Cs(a) || qc(a) || a !== 45 && Qc(a) ? s(a) : (e.consume(a), i);
  }
  function l(a) {
    return a === 46 ? (o = r, r = void 0, e.consume(a), i) : (a === 95 && (r = !0), e.consume(a), i);
  }
  function s(a) {
    return !o && !r ? t(a) : n(a);
  }
}
function Z9(e, t) {
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
    )(l) : gg(l) ? t(l) : a2(l) ? e.check(hi, t, o)(l) : (e.consume(l), r));
  }
  function o(l) {
    return e.consume(l), r;
  }
  function i(l) {
    return n--, n < 0 ? t(l) : o(l);
  }
}
function J9(e, t, n) {
  return r;
  function r(l) {
    return e.consume(l), o;
  }
  function o(l) {
    return Vt(l) ? (e.consume(l), o) : l === 59 ? (e.consume(l), i) : n(l);
  }
  function i(l) {
    return gg(l) ? t(l) : n(l);
  }
}
function eM(e, t, n) {
  return r;
  function r(i) {
    return e.consume(i), o;
  }
  function o(i) {
    return a2(i) ? (e.consume(i), o) : gg(i) ? t(i) : n(i);
  }
}
function a2(e) {
  return e === 33 || e === 34 || e === 39 || e === 41 || e === 42 || e === 44 || e === 46 || e === 58 || e === 59 || e === 60 || e === 63 || e === 95 || e === 126;
}
function gg(e) {
  return e === null || e === 60 || De(e);
}
function uy(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || ct(e);
}
function u2(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 126 || De(e);
}
function vg(e) {
  return e === null || !Vt(e);
}
function c2(e) {
  return e !== 47 && vg(e);
}
function yg(e) {
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
function Wi(e) {
  const t = [];
  let n = -1, r = 0, o = 0;
  for (; ++n < e.length; ) {
    const i = e.charCodeAt(n);
    let l = "";
    if (i === 37 && ct(e.charCodeAt(n + 1)) && ct(e.charCodeAt(n + 2)))
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
const tM = {
  tokenize: uM,
  partial: !0
};
function nM() {
  return {
    document: {
      [91]: {
        tokenize: lM,
        continuation: {
          tokenize: sM
        },
        exit: aM
      }
    },
    text: {
      [91]: {
        tokenize: iM
      },
      [93]: {
        add: "after",
        tokenize: rM,
        resolveTo: oM
      }
    }
  };
}
function rM(e, t, n) {
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
    const u = pn(
      r.sliceSerialize({
        start: l.end,
        end: r.now()
      })
    );
    return u.codePointAt(0) !== 94 || !i.includes(u.slice(1)) ? n(a) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(a), e.exit("gfmFootnoteCallLabelMarker"), t(a));
  }
}
function oM(e, t) {
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
function iM(e, t, n) {
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
      return o.includes(pn(r.sliceSerialize(d))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(f);
    }
    return De(f) || (l = !0), i++, e.consume(f), f === 92 ? c : u;
  }
  function c(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), i++, u) : u(f);
  }
}
function lM(e, t, n) {
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
      return i = pn(r.sliceSerialize(v)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(h), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d;
    }
    return De(h) || (s = !0), l++, e.consume(h), h === 92 ? f : c;
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
function sM(e, t, n) {
  return e.check(Gs, t, e.attempt(tM, t, n));
}
function aM(e) {
  e.exit("gfmFootnoteDefinition");
}
function uM(e, t, n) {
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
function cM(e) {
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
              Gc(g, l.slice(u + 1, a), s)
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
      const v = Zu(u);
      if (h === 126)
        return f > 1 ? a(h) : (l.consume(h), f++, g);
      if (f < 2 && !n)
        return a(h);
      const w = l.exit("strikethroughSequenceTemporary"), p = Zu(h);
      return w._open = !p || p === 2 && Boolean(v), w._close = !v || v === 2 && Boolean(p), s(h);
    }
  }
}
const fM = {
  flow: {
    null: {
      tokenize: pM,
      resolve: dM
    }
  }
}, cy = {
  tokenize: hM,
  partial: !0
};
function dM(e, t) {
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
function pM(e, t, n) {
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
        tokenize: z,
        partial: !0
      },
      function(N) {
        return r.interrupt = H, e.enter("tableDelimiterRow"), v(N);
      },
      function(N) {
        return r.interrupt = H, n(N);
      }
    )(_);
  }
  function v(_) {
    return _ === null || X(_) ? b(_) : ve(_) ? (e.enter("whitespace"), e.consume(_), w) : _ === 45 ? (e.enter("tableDelimiterFiller"), e.consume(_), s = !0, o.push("none"), p) : _ === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(_), e.exit("tableDelimiterAlignment"), o.push("left"), y) : _ === 124 ? (e.enter("tableCellDivider"), e.consume(_), e.exit("tableCellDivider"), v) : n(_);
  }
  function w(_) {
    return ve(_) ? (e.consume(_), w) : (e.exit("whitespace"), v(_));
  }
  function p(_) {
    return _ === 45 ? (e.consume(_), p) : (e.exit("tableDelimiterFiller"), _ === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(_), e.exit("tableDelimiterAlignment"), o[o.length - 1] = o[o.length - 1] === "left" ? "center" : "right", x) : v(_));
  }
  function y(_) {
    return _ === 45 ? (e.enter("tableDelimiterFiller"), e.consume(_), s = !0, p) : n(_);
  }
  function x(_) {
    return _ === null || X(_) ? b(_) : ve(_) ? (e.enter("whitespace"), e.consume(_), w) : _ === 124 ? (e.enter("tableCellDivider"), e.consume(_), e.exit("tableCellDivider"), v) : n(_);
  }
  function b(_) {
    return e.exit("tableDelimiterRow"), !s || i !== o.length ? n(_) : _ === null ? A(_) : e.check(
      cy,
      A,
      e.attempt(
        {
          tokenize: z,
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
    return e.enter("tableRow"), _ === 124 ? $(_) : (e.enter("temporaryTableCellContent"), I(_));
  }
  function $(_) {
    return e.enter("tableCellDivider"), e.consume(_), e.exit("tableCellDivider"), P;
  }
  function P(_) {
    return _ === null || X(_) ? L(_) : ve(_) ? (e.enter("whitespace"), e.consume(_), R) : _ === 124 ? $(_) : (e.enter("temporaryTableCellContent"), I(_));
  }
  function R(_) {
    return ve(_) ? (e.consume(_), R) : (e.exit("whitespace"), P(_));
  }
  function I(_) {
    return _ === null || _ === 124 || De(_) ? (e.exit("temporaryTableCellContent"), P(_)) : (e.consume(_), _ === 92 ? T : I);
  }
  function T(_) {
    return _ === 92 || _ === 124 ? (e.consume(_), I) : I(_);
  }
  function L(_) {
    return e.exit("tableRow"), _ === null ? B(_) : e.check(
      cy,
      B,
      e.attempt(
        {
          tokenize: z,
          partial: !0
        },
        ge(e, E, "linePrefix", 4),
        B
      )
    )(_);
  }
  function B(_) {
    return e.exit("tableBody"), A(_);
  }
  function z(_, H, N) {
    return O;
    function O(k) {
      return _.enter("lineEnding"), _.consume(k), _.exit("lineEnding"), ge(_, M, "linePrefix");
    }
    function M(k) {
      if (r.parser.lazy[r.now().line] || k === null || X(k))
        return N(k);
      const C = r.events[r.events.length - 1];
      return !r.parser.constructs.disable.null.includes("codeIndented") && C && C[1].type === "linePrefix" && C[2].sliceSerialize(C[1], !0).length >= 4 ? N(k) : (r._gfmTableDynamicInterruptHack = !0, _.check(
        r.parser.constructs.flow,
        function(J) {
          return r._gfmTableDynamicInterruptHack = !1, N(J);
        },
        function(J) {
          return r._gfmTableDynamicInterruptHack = !1, H(J);
        }
      )(k));
    }
  }
}
function hM(e, t, n) {
  let r = 0;
  return o;
  function o(l) {
    return e.enter("check"), e.consume(l), i;
  }
  function i(l) {
    return l === -1 || l === 32 ? (e.consume(l), r++, r === 4 ? t : i) : l === null || De(l) ? t(l) : n(l);
  }
}
const mM = {
  tokenize: vM
}, gM = {
  text: {
    [91]: mM
  }
};
function vM(e, t, n) {
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
    return X(a) ? t(a) : ve(a) ? e.check(
      {
        tokenize: yM
      },
      t,
      n
    )(a) : n(a);
  }
}
function yM(e, t, n) {
  return ge(e, r, "whitespace");
  function r(o) {
    return o === null ? n(o) : t(o);
  }
}
function xM(e) {
  return Hk([
    q9,
    nM(),
    cM(e),
    fM,
    gM
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
function wM(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const xg = function(e) {
  if (e == null)
    return CM;
  if (typeof e == "string")
    return kM(e);
  if (typeof e == "object")
    return Array.isArray(e) ? bM(e) : SM(e);
  if (typeof e == "function")
    return Kc(e);
  throw new Error("Expected function, string, or object as test");
};
function bM(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = xg(e[n]);
  return Kc(r);
  function r(...o) {
    let i = -1;
    for (; ++i < t.length; )
      if (t[i].call(this, ...o))
        return !0;
    return !1;
  }
}
function SM(e) {
  return Kc(t);
  function t(n) {
    let r;
    for (r in e)
      if (n[r] !== e[r])
        return !1;
    return !0;
  }
}
function kM(e) {
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
function CM() {
  return !0;
}
const $M = !0, fy = !1, EM = "skip", f2 = function(e, t, n, r) {
  typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
  const o = xg(t), i = r ? -1 : 1;
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
      if ((!t || o(s, a, u[u.length - 1] || null)) && (d = AM(n(s, u)), d[0] === fy))
        return d;
      if (s.children && d[0] !== EM)
        for (h = (r ? s.children.length : -1) + i, v = u.concat(s); h > -1 && h < s.children.length; ) {
          if (g = l(s.children[h], h, v)(), g[0] === fy)
            return g;
          h = typeof g[1] == "number" ? g[1] : h + i;
        }
      return d;
    }
  }
};
function AM(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [$M, e] : [e];
}
const PM = {}.hasOwnProperty, _M = function(e, t, n, r) {
  let o, i;
  typeof t == "string" || t instanceof RegExp ? (i = [[t, n]], o = r) : (i = t, o = n), o || (o = {});
  const l = xg(o.ignore || []), s = RM(i);
  let a = -1;
  for (; ++a < s.length; )
    f2(e, "text", u);
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
function RM(e) {
  const t = [];
  if (typeof e != "object")
    throw new TypeError("Expected array or object as schema");
  if (Array.isArray(e)) {
    let n = -1;
    for (; ++n < e.length; )
      t.push([
        dy(e[n][0]),
        py(e[n][1])
      ]);
  } else {
    let n;
    for (n in e)
      PM.call(e, n) && t.push([dy(n), py(e[n])]);
  }
  return t;
}
function dy(e) {
  return typeof e == "string" ? new RegExp(wM(e), "g") : e;
}
function py(e) {
  return typeof e == "function" ? e : () => e;
}
const xd = "phrasing", wd = ["autolink", "link", "image", "label"], IM = {
  transforms: [FM],
  enter: {
    literalAutolink: TM,
    literalAutolinkEmail: bd,
    literalAutolinkHttp: bd,
    literalAutolinkWww: bd
  },
  exit: {
    literalAutolink: LM,
    literalAutolinkEmail: DM,
    literalAutolinkHttp: MM,
    literalAutolinkWww: NM
  }
}, OM = {
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
function TM(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function bd(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function MM(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function NM(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.url = "http://" + this.sliceSerialize(e);
}
function DM(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function LM(e) {
  this.exit(e);
}
function FM(e) {
  _M(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, zM],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, BM]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function zM(e, t, n, r, o) {
  let i = "";
  if (!d2(o) || (/^w/i.test(t) && (n = t + n, t = "", i = "http://"), !jM(n)))
    return !1;
  const l = HM(n + r);
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
function BM(e, t, n, r) {
  return !d2(r, !0) || /[-\d_]$/.test(n) ? !1 : {
    type: "link",
    title: null,
    url: "mailto:" + t + "@" + n,
    children: [{ type: "text", value: t + "@" + n }]
  };
}
function jM(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function HM(e) {
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
  return (e.index === 0 || qc(n) || Qc(n)) && (!t || n !== 47);
}
function p2(e) {
  return e.label || !e.identifier ? e.label || "" : Jk(e.identifier);
}
function VM(e, t, n) {
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
      i.move(UM(a, o[s + 1], e, t))
    );
  }
  return r.pop(), l.join("");
}
function UM(e, t, n, r) {
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
const WM = /\r?\n|\r/g;
function qM(e, t) {
  const n = [];
  let r = 0, o = 0, i;
  for (; i = WM.exec(e); )
    l(e.slice(r, i.index)), n.push(i[0]), r = i.index + i[0].length, o++;
  return l(e.slice(r)), n.join("");
  function l(s) {
    n.push(t(s, o, !s));
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
function QM(e, t) {
  return hy(e, t.inConstruct, !0) && !hy(e, t.notInConstruct, !1);
}
function hy(e, t, n) {
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
  let s = -1;
  for (; ++s < e.unsafe.length; ) {
    const c = e.unsafe[s];
    if (!QM(e.stack, c))
      continue;
    const f = h2(c);
    let d;
    for (; d = f.exec(r); ) {
      const g = "before" in c || Boolean(c.atBreak), h = "after" in c, v = d.index + (g ? d[1].length : 0);
      o.includes(v) ? (l[v].before && !g && (l[v].before = !1), l[v].after && !h && (l[v].after = !1)) : (o.push(v), l[v] = { before: g, after: h });
    }
  }
  o.sort(GM);
  let a = n.before ? n.before.length : 0;
  const u = r.length - (n.after ? n.after.length : 0);
  for (s = -1; ++s < o.length; ) {
    const c = o[s];
    c < a || c >= u || c + 1 < u && o[s + 1] === c + 1 && l[c].after && !l[c + 1].before && !l[c + 1].after || o[s - 1] === c - 1 && l[c].before && !l[c - 1].before && !l[c - 1].after || (a !== c && i.push(my(r.slice(a, c), "\\")), a = c, /[!-/:-@[-`{-~]/.test(r.charAt(c)) && (!n.encode || !n.encode.includes(r.charAt(c))) ? i.push("\\") : (i.push(
      "&#x" + r.charCodeAt(c).toString(16).toUpperCase() + ";"
    ), a++));
  }
  return i.push(my(r.slice(a, u), n.after)), i.join("");
}
function GM(e, t) {
  return e - t;
}
function my(e, t) {
  const n = /\\(?=[!-/:-@[-`{-~])/g, r = [], o = [], i = e + t;
  let l = -1, s = 0, a;
  for (; a = n.exec(i); )
    r.push(a.index);
  for (; ++l < r.length; )
    s !== r[l] && o.push(e.slice(s, r[l])), o.push("\\"), s = r[l];
  return o.push(e.slice(s)), o.join("");
}
function Yc(e) {
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
g2.peek = iN;
function KM() {
  return {
    enter: {
      gfmFootnoteDefinition: XM,
      gfmFootnoteDefinitionLabelString: ZM,
      gfmFootnoteCall: tN,
      gfmFootnoteCallString: nN
    },
    exit: {
      gfmFootnoteDefinition: eN,
      gfmFootnoteDefinitionLabelString: JM,
      gfmFootnoteCall: oN,
      gfmFootnoteCallString: rN
    }
  };
}
function YM() {
  return {
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: lN, footnoteReference: g2 }
  };
}
function XM(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function ZM() {
  this.buffer();
}
function JM(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.label = t, n.identifier = pn(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function eN(e) {
  this.exit(e);
}
function tN(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function nN() {
  this.buffer();
}
function rN(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.label = t, n.identifier = pn(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function oN(e) {
  this.exit(e);
}
function g2(e, t, n, r) {
  const o = Yc(r);
  let i = o.move("[^");
  const l = n.enter("footnoteReference"), s = n.enter("reference");
  return i += o.move(
    m2(n, p2(e), {
      ...o.current(),
      before: i,
      after: "]"
    })
  ), s(), l(), i += o.move("]"), i;
}
function iN() {
  return "[";
}
function lN(e, t, n, r) {
  const o = Yc(r);
  let i = o.move("[^");
  const l = n.enter("footnoteDefinition"), s = n.enter("label");
  return i += o.move(
    m2(n, p2(e), {
      ...o.current(),
      before: i,
      after: "]"
    })
  ), s(), i += o.move(
    "]:" + (e.children && e.children.length > 0 ? " " : "")
  ), o.shift(4), i += o.move(
    qM(VM(e, n, o.current()), sN)
  ), l(), i;
}
function sN(e, t, n) {
  return t === 0 ? e : (n ? "" : "    ") + e;
}
function v2(e, t, n) {
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
const aN = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
y2.peek = pN;
const uN = {
  canContainEols: ["delete"],
  enter: { strikethrough: fN },
  exit: { strikethrough: dN }
}, cN = {
  unsafe: [
    {
      character: "~",
      inConstruct: "phrasing",
      notInConstruct: aN
    }
  ],
  handlers: { delete: y2 }
};
function fN(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function dN(e) {
  this.exit(e);
}
function y2(e, t, n, r) {
  const o = Yc(r), i = n.enter("strikethrough");
  let l = o.move("~~");
  return l += v2(e, n, {
    ...o.current(),
    before: l,
    after: "~"
  }), l += o.move("~~"), i(), l;
}
function pN() {
  return "~";
}
x2.peek = hN;
function x2(e, t, n) {
  let r = e.value || "", o = "`", i = -1;
  for (; new RegExp("(^|[^`])" + o + "([^`]|$)").test(r); )
    o += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++i < n.unsafe.length; ) {
    const l = n.unsafe[i], s = h2(l);
    let a;
    if (!!l.atBreak)
      for (; a = s.exec(r); ) {
        let u = a.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(a.index + 1);
      }
  }
  return o + r + o;
}
function hN() {
  return "`";
}
function mN(e, t = {}) {
  const n = (t.align || []).concat(), r = t.stringLength || vN, o = [], i = [], l = [], s = [];
  let a = 0, u = -1;
  for (; ++u < e.length; ) {
    const h = [], v = [];
    let w = -1;
    for (e[u].length > a && (a = e[u].length); ++w < e[u].length; ) {
      const p = gN(e[u][w]);
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
      o[c] = gy(n[c]);
  else {
    const h = gy(n);
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
function gN(e) {
  return e == null ? "" : String(e);
}
function vN(e) {
  return e.length;
}
function gy(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
const yN = {
  enter: {
    table: xN,
    tableData: vy,
    tableHeader: vy,
    tableRow: bN
  },
  exit: {
    codeText: SN,
    table: wN,
    tableData: Sd,
    tableHeader: Sd,
    tableRow: Sd
  }
};
function xN(e) {
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
function wN(e) {
  this.exit(e), this.setData("inTable");
}
function bN(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Sd(e) {
  this.exit(e);
}
function vy(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function SN(e) {
  let t = this.resume();
  this.getData("inTable") && (t = t.replace(/\\([\\|])/g, kN));
  const n = this.stack[this.stack.length - 1];
  n.value = t, this.exit(e);
}
function kN(e, t) {
  return t === "|" ? t : e;
}
function CN(e) {
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
    const p = v.enter("tableCell"), y = v.enter("phrasing"), x = v2(g, v, {
      ...w,
      before: i,
      after: i
    });
    return y(), p(), x;
  }
  function u(g, h) {
    return mN(g, {
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
    let w = x2(g, h, v);
    return v.stack.includes("tableCell") && (w = w.replace(/\|/g, "\\$&")), w;
  }
}
function $N(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function EN(e) {
  const t = e.options.listItemIndent || "tab";
  if (t === 1 || t === "1")
    return "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function AN(e, t, n, r) {
  const o = EN(n);
  let i = n.bulletCurrent || $N(n);
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
const PN = {
  exit: {
    taskListCheckValueChecked: yy,
    taskListCheckValueUnchecked: yy,
    paragraph: RN
  }
}, _N = {
  unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
  handlers: { listItem: IN }
};
function yy(e) {
  const t = this.stack[this.stack.length - 2];
  t.checked = e.type === "taskListCheckValueChecked";
}
function RN(e) {
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
function IN(e, t, n, r) {
  const o = e.children[0], i = typeof e.checked == "boolean" && o && o.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", s = Yc(r);
  i && s.move(l);
  let a = AN(e, t, n, {
    ...r,
    ...s.current()
  });
  return i && (a = a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), a;
  function u(c) {
    return c + l;
  }
}
function ON() {
  return [
    IM,
    KM(),
    uN,
    yN,
    PN
  ];
}
function TN(e) {
  return {
    extensions: [
      OM,
      YM(),
      cN,
      CN(e),
      _N
    ]
  };
}
function MN(e = {}) {
  const t = this.data();
  n("micromarkExtensions", xM(e)), n("fromMarkdownExtensions", ON()), n("toMarkdownExtensions", TN(e));
  function n(r, o) {
    (t[r] ? t[r] : t[r] = []).push(o);
  }
}
function NN(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function DN(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function LN(e, t) {
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
function FN(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function zN(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function w2(e, t) {
  const n = String(t.identifier).toUpperCase(), r = Wi(n.toLowerCase()), o = e.footnoteOrder.indexOf(n);
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
function BN(e, t) {
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
function jN(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function HN(e, t) {
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
function VN(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return b2(e, t);
  const r = { src: Wi(n.url || ""), alt: t.alt };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const o = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function UN(e, t) {
  const n = { src: Wi(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function WN(e, t) {
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
function qN(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return b2(e, t);
  const r = { href: Wi(n.url || "") };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: r,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function QN(e, t) {
  const n = { href: Wi(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function GN(e, t, n) {
  const r = e.all(t), o = n ? KN(n) : S2(t), i = {}, l = [];
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
function KN(e) {
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
function YN(e, t) {
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
function XN(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function ZN(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function JN(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const wg = k2("start"), bg = k2("end");
function eD(e) {
  return { start: wg(e), end: bg(e) };
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
function tD(e, t) {
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
    }, s = wg(t.children[1]), a = bg(t.children[t.children.length - 1]);
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
function nD(e, t, n) {
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
function rD(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const xy = 9, wy = 32;
function oD(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), o = 0;
  const i = [];
  for (; r; )
    i.push(
      by(t.slice(o, r.index), o > 0, !0),
      r[0]
    ), o = r.index + r[0].length, r = n.exec(t);
  return i.push(by(t.slice(o), o > 0, !1)), i.join("");
}
function by(e, t, n) {
  let r = 0, o = e.length;
  if (t) {
    let i = e.codePointAt(r);
    for (; i === xy || i === wy; )
      r++, i = e.codePointAt(r);
  }
  if (n) {
    let i = e.codePointAt(o - 1);
    for (; i === xy || i === wy; )
      o--, i = e.codePointAt(o - 1);
  }
  return o > r ? e.slice(r, o) : "";
}
function iD(e, t) {
  const n = { type: "text", value: oD(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function lD(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const sD = {
  blockquote: NN,
  break: DN,
  code: LN,
  delete: FN,
  emphasis: zN,
  footnoteReference: w2,
  footnote: BN,
  heading: jN,
  html: HN,
  imageReference: VN,
  image: UN,
  inlineCode: WN,
  linkReference: qN,
  link: QN,
  listItem: GN,
  list: YN,
  paragraph: XN,
  root: ZN,
  strong: JN,
  table: tD,
  tableCell: rD,
  tableRow: nD,
  text: iD,
  thematicBreak: lD,
  toml: Ma,
  yaml: Ma,
  definition: Ma,
  footnoteDefinition: Ma
};
function Ma() {
  return null;
}
const C2 = function(e, t, n, r) {
  typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), f2(e, t, o, r);
  function o(i, l) {
    const s = l[l.length - 1];
    return n(
      i,
      s ? s.children.indexOf(i) : null,
      s
    );
  }
};
function aD(e) {
  return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column;
}
const Sy = {}.hasOwnProperty;
function uD(e) {
  const t = /* @__PURE__ */ Object.create(null);
  if (!e || !e.type)
    throw new Error("mdast-util-definitions expected node");
  return C2(e, "definition", (r) => {
    const o = ky(r.identifier);
    o && !Sy.call(t, o) && (t[o] = r);
  }), n;
  function n(r) {
    const o = ky(r);
    return o && Sy.call(t, o) ? t[o] : null;
  }
}
function ky(e) {
  return String(e || "").toUpperCase();
}
const ec = {}.hasOwnProperty;
function cD(e, t) {
  const n = t || {}, r = n.allowDangerousHtml || !1, o = {};
  return l.dangerous = r, l.clobberPrefix = n.clobberPrefix === void 0 || n.clobberPrefix === null ? "user-content-" : n.clobberPrefix, l.footnoteLabel = n.footnoteLabel || "Footnotes", l.footnoteLabelTagName = n.footnoteLabelTagName || "h2", l.footnoteLabelProperties = n.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l.footnoteBackLabel = n.footnoteBackLabel || "Back to content", l.unknownHandler = n.unknownHandler, l.passThrough = n.passThrough, l.handlers = { ...sD, ...n.handlers }, l.definition = uD(e), l.footnoteById = o, l.footnoteOrder = [], l.footnoteCounts = {}, l.patch = fD, l.applyData = dD, l.one = s, l.all = a, l.wrap = hD, l.augment = i, C2(e, "footnoteDefinition", (u) => {
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
      aD(f) || (c.position = { start: wg(f), end: bg(f) });
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
    return $2(l, u, c);
  }
  function a(u) {
    return Sg(l, u);
  }
}
function fD(e, t) {
  e.position && (t.position = eD(e));
}
function dD(e, t) {
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
function $2(e, t, n) {
  const r = t && t.type;
  if (!r)
    throw new Error("Expected node, got `" + t + "`");
  return ec.call(e.handlers, r) ? e.handlers[r](e, t, n) : e.passThrough && e.passThrough.includes(r) ? "children" in t ? { ...t, children: Sg(e, t) } : t : e.unknownHandler ? e.unknownHandler(e, t, n) : pD(e, t);
}
function Sg(e, t) {
  const n = [];
  if ("children" in t) {
    const r = t.children;
    let o = -1;
    for (; ++o < r.length; ) {
      const i = $2(e, r[o], t);
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
function pD(e, t) {
  const n = t.data || {}, r = "value" in t && !(ec.call(n, "hProperties") || ec.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: Sg(e, t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function hD(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function mD(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.footnoteOrder.length; ) {
    const r = e.footnoteById[e.footnoteOrder[n]];
    if (!r)
      continue;
    const o = e.all(r), i = String(r.identifier).toUpperCase(), l = Wi(i.toLowerCase());
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
function E2(e, t) {
  const n = cD(e, t), r = n.one(e, null), o = mD(n);
  return o && r.children.push({ type: "text", value: `
` }, o), Array.isArray(r) ? { type: "root", children: r } : r;
}
const gD = function(e, t) {
  return e && "run" in e ? yD(e, t) : xD(e || t);
}, vD = gD;
function yD(e, t) {
  return (n, r, o) => {
    e.run(E2(n, t), r, (i) => {
      o(i);
    });
  };
}
function xD(e) {
  return (t) => E2(t, e);
}
class Ks {
  constructor(t, n, r) {
    this.property = t, this.normal = n, r && (this.space = r);
  }
}
Ks.prototype.property = {};
Ks.prototype.normal = {};
Ks.prototype.space = null;
function A2(e, t) {
  const n = {}, r = {};
  let o = -1;
  for (; ++o < e.length; )
    Object.assign(n, e[o].property), Object.assign(r, e[o].normal);
  return new Ks(n, r, t);
}
function xh(e) {
  return e.toLowerCase();
}
class Xt {
  constructor(t, n) {
    this.property = t, this.attribute = n;
  }
}
Xt.prototype.space = null;
Xt.prototype.boolean = !1;
Xt.prototype.booleanish = !1;
Xt.prototype.overloadedBoolean = !1;
Xt.prototype.number = !1;
Xt.prototype.commaSeparated = !1;
Xt.prototype.spaceSeparated = !1;
Xt.prototype.commaOrSpaceSeparated = !1;
Xt.prototype.mustUseProperty = !1;
Xt.prototype.defined = !1;
let wD = 0;
const le = Ro(), Be = Ro(), P2 = Ro(), V = Ro(), Ae = Ro(), mi = Ro(), Ct = Ro();
function Ro() {
  return 2 ** ++wD;
}
const wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: le,
  booleanish: Be,
  overloadedBoolean: P2,
  number: V,
  spaceSeparated: Ae,
  commaSeparated: mi,
  commaOrSpaceSeparated: Ct
}, Symbol.toStringTag, { value: "Module" })), kd = Object.keys(wh);
class kg extends Xt {
  constructor(t, n, r, o) {
    let i = -1;
    if (super(t, n), Cy(this, "space", o), typeof r == "number")
      for (; ++i < kd.length; ) {
        const l = kd[i];
        Cy(this, kd[i], (r & wh[l]) === wh[l]);
      }
  }
}
kg.prototype.defined = !0;
function Cy(e, t, n) {
  n && (e[t] = n);
}
const bD = {}.hasOwnProperty;
function qi(e) {
  const t = {}, n = {};
  let r;
  for (r in e.properties)
    if (bD.call(e.properties, r)) {
      const o = e.properties[r], i = new kg(
        r,
        e.transform(e.attributes || {}, r),
        o,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0), t[r] = i, n[xh(r)] = r, n[xh(i.attribute)] = r;
    }
  return new Ks(t, n, e.space);
}
const _2 = qi({
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
}), R2 = qi({
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function I2(e, t) {
  return t in e ? e[t] : t;
}
function O2(e, t) {
  return I2(e, t.toLowerCase());
}
const T2 = qi({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: O2,
  properties: { xmlns: null, xmlnsXLink: null }
}), M2 = qi({
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
}), SD = qi({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: O2,
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
    cols: V,
    colSpan: null,
    content: null,
    contentEditable: Be,
    controls: le,
    controlsList: Ae,
    coords: V | mi,
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
}), kD = qi({
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
  transform: I2,
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
    g1: mi,
    g2: mi,
    glyphName: mi,
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
}), CD = /^data[-\w.:]+$/i, $y = /-[a-z]/g, $D = /[A-Z]/g;
function ED(e, t) {
  const n = xh(t);
  let r = t, o = Xt;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && CD.test(t)) {
    if (t.charAt(4) === "-") {
      const i = t.slice(5).replace($y, PD);
      r = "data" + i.charAt(0).toUpperCase() + i.slice(1);
    } else {
      const i = t.slice(4);
      if (!$y.test(i)) {
        let l = i.replace($D, AD);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    o = kg;
  }
  return new o(r, t);
}
function AD(e) {
  return "-" + e.toLowerCase();
}
function PD(e) {
  return e.charAt(1).toUpperCase();
}
const _D = A2([R2, _2, T2, M2, SD], "html"), N2 = A2([R2, _2, T2, M2, kD], "svg"), RD = [
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
], Ey = {}.hasOwnProperty;
function ID(e, t) {
  const n = t || {};
  function r(o, ...i) {
    let l = r.invalid;
    const s = r.handlers;
    if (o && Ey.call(o, e)) {
      const a = String(o[e]);
      l = Ey.call(s, a) ? s[a] : r.unknown;
    }
    if (l)
      return l.call(this, o, ...i);
  }
  return r.handlers = n.handlers || {}, r.invalid = n.invalid, r.unknown = n.unknown, r;
}
function OD(e, t) {
  if (e = e.replace(
    t.subset ? TD(t.subset) : /["&'<>`]/g,
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
function TD(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t.push(e[n].replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"));
  return new RegExp("(?:" + t.join("|") + ")", "g");
}
function MD(e, t, n) {
  const r = "&#x" + e.toString(16).toUpperCase();
  return n && t && !/[\dA-Fa-f]/.test(String.fromCharCode(t)) ? r : r + ";";
}
function ND(e, t, n) {
  const r = "&#" + String(e);
  return n && t && !/\d/.test(String.fromCharCode(t)) ? r : r + ";";
}
const DD = [
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
}, LD = [
  "cent",
  "copy",
  "divide",
  "gt",
  "lt",
  "not",
  "para",
  "times"
], D2 = {}.hasOwnProperty, bh = {};
let Na;
for (Na in Cd)
  D2.call(Cd, Na) && (bh[Cd[Na]] = Na);
function FD(e, t, n, r) {
  const o = String.fromCharCode(e);
  if (D2.call(bh, o)) {
    const i = bh[o], l = "&" + i;
    return n && DD.includes(i) && !LD.includes(i) && (!r || t && t !== 61 && /[^\da-z]/i.test(String.fromCharCode(t))) ? l : l + ";";
  }
  return "";
}
function zD(e, t, n) {
  let r = MD(e, t, n.omitOptionalSemicolons), o;
  if ((n.useNamedReferences || n.useShortestReferences) && (o = FD(
    e,
    t,
    n.omitOptionalSemicolons,
    n.attribute
  )), (n.useShortestReferences || !o) && n.useShortestReferences) {
    const i = ND(e, t, n.omitOptionalSemicolons);
    i.length < r.length && (r = i);
  }
  return o && (!n.useShortestReferences || o.length < r.length) ? o : r;
}
function gi(e, t) {
  return OD(e, Object.assign({ format: zD }, t));
}
function BD(e, t, n, r) {
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
function jD(e, t, n, r) {
  return "<!" + (r.settings.upperDoctype ? "DOCTYPE" : "doctype") + (r.settings.tightDoctype ? "" : " ") + "html>";
}
function HD(e, t) {
  const n = t || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
function VD(e) {
  return e.join(" ").trim();
}
function Cg(e) {
  const t = e && typeof e == "object" && e.type === "text" ? e.value || "" : e;
  return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === "";
}
const Ue = F2(1), L2 = F2(-1);
function F2(e) {
  return t;
  function t(n, r, o) {
    const i = n ? n.children : [];
    let l = (r || 0) + e, s = i && i[l];
    if (!o)
      for (; s && Cg(s); )
        l += e, s = i[l];
    return s;
  }
}
const UD = {}.hasOwnProperty;
function z2(e) {
  return t;
  function t(n, r, o) {
    return UD.call(e, n.tagName) && e[n.tagName](n, r, o);
  }
}
const $g = z2({
  html: WD,
  head: $d,
  body: qD,
  p: QD,
  li: GD,
  dt: KD,
  dd: YD,
  rt: Ay,
  rp: Ay,
  optgroup: XD,
  option: ZD,
  menuitem: JD,
  colgroup: $d,
  caption: $d,
  thead: eL,
  tbody: tL,
  tfoot: nL,
  tr: rL,
  td: Py,
  th: Py
});
function $d(e, t, n) {
  const r = Ue(n, t, !0);
  return !r || r.type !== "comment" && !(r.type === "text" && Cg(r.value.charAt(0)));
}
function WD(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type !== "comment";
}
function qD(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type !== "comment";
}
function QD(e, t, n) {
  const r = Ue(n, t);
  return r ? r.type === "element" && (r.tagName === "address" || r.tagName === "article" || r.tagName === "aside" || r.tagName === "blockquote" || r.tagName === "details" || r.tagName === "div" || r.tagName === "dl" || r.tagName === "fieldset" || r.tagName === "figcaption" || r.tagName === "figure" || r.tagName === "footer" || r.tagName === "form" || r.tagName === "h1" || r.tagName === "h2" || r.tagName === "h3" || r.tagName === "h4" || r.tagName === "h5" || r.tagName === "h6" || r.tagName === "header" || r.tagName === "hgroup" || r.tagName === "hr" || r.tagName === "main" || r.tagName === "menu" || r.tagName === "nav" || r.tagName === "ol" || r.tagName === "p" || r.tagName === "pre" || r.tagName === "section" || r.tagName === "table" || r.tagName === "ul") : !n || !(n.type === "element" && (n.tagName === "a" || n.tagName === "audio" || n.tagName === "del" || n.tagName === "ins" || n.tagName === "map" || n.tagName === "noscript" || n.tagName === "video"));
}
function GD(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && r.tagName === "li";
}
function KD(e, t, n) {
  const r = Ue(n, t);
  return r && r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function YD(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function Ay(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "rp" || r.tagName === "rt");
}
function XD(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && r.tagName === "optgroup";
}
function ZD(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "option" || r.tagName === "optgroup");
}
function JD(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "menuitem" || r.tagName === "hr" || r.tagName === "menu");
}
function eL(e, t, n) {
  const r = Ue(n, t);
  return r && r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function tL(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function nL(e, t, n) {
  return !Ue(n, t);
}
function rL(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && r.tagName === "tr";
}
function Py(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "td" || r.tagName === "th");
}
const oL = z2({
  html: iL,
  head: lL,
  body: sL,
  colgroup: aL,
  tbody: uL
});
function iL(e) {
  const t = Ue(e, -1);
  return !t || t.type !== "comment";
}
function lL(e) {
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
function sL(e) {
  const t = Ue(e, -1, !0);
  return !t || t.type !== "comment" && !(t.type === "text" && Cg(t.value.charAt(0))) && !(t.type === "element" && (t.tagName === "meta" || t.tagName === "link" || t.tagName === "script" || t.tagName === "style" || t.tagName === "template"));
}
function aL(e, t, n) {
  const r = L2(n, t), o = Ue(e, -1, !0);
  return n && r && r.type === "element" && r.tagName === "colgroup" && $g(r, n.children.indexOf(r), n) ? !1 : o && o.type === "element" && o.tagName === "col";
}
function uL(e, t, n) {
  const r = L2(n, t), o = Ue(e, -1);
  return n && r && r.type === "element" && (r.tagName === "thead" || r.tagName === "tbody") && $g(r, n.children.indexOf(r), n) ? !1 : o && o.type === "element" && o.tagName === "tr";
}
const Da = {
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
function cL(e, t, n, r) {
  const o = r.schema, i = o.space === "svg" ? !1 : r.settings.omitOptionalTags;
  let l = o.space === "svg" ? r.settings.closeEmptyElements : r.settings.voids.includes(e.tagName.toLowerCase());
  const s = [];
  let a;
  o.space === "html" && e.tagName === "svg" && (r.schema = N2);
  const u = fL(r, e.properties), c = r.all(
    o.space === "html" && e.tagName === "template" ? e.content : e
  );
  return r.schema = o, c && (l = !1), (u || !i || !oL(e, t, n)) && (s.push("<", e.tagName, u ? " " + u : ""), l && (o.space === "svg" || r.settings.closeSelfClosing) && (a = u.charAt(u.length - 1), (!r.settings.tightSelfClosing || a === "/" || a && a !== '"' && a !== "'") && s.push(" "), s.push("/")), s.push(">")), s.push(c), !l && (!i || !$g(e, t, n)) && s.push("</" + e.tagName + ">"), s.join("");
}
function fL(e, t) {
  const n = [];
  let r = -1, o;
  if (t) {
    for (o in t)
      if (t[o] !== void 0 && t[o] !== null) {
        const i = dL(e, o, t[o]);
        i && n.push(i);
      }
  }
  for (; ++r < n.length; ) {
    const i = e.settings.tightAttributes ? n[r].charAt(n[r].length - 1) : null;
    r !== n.length - 1 && i !== '"' && i !== "'" && (n[r] += " ");
  }
  return n.join("");
}
function dL(e, t, n) {
  const r = ED(e.schema, t), o = e.settings.allowParseErrors && e.schema.space === "html" ? 0 : 1, i = e.settings.allowDangerousCharacters ? 0 : 1;
  let l = e.quote, s;
  if (r.overloadedBoolean && (n === r.attribute || n === "") ? n = !0 : (r.boolean || r.overloadedBoolean && typeof n != "string") && (n = Boolean(n)), n == null || n === !1 || typeof n == "number" && Number.isNaN(n))
    return "";
  const a = gi(
    r.attribute,
    Object.assign({}, e.settings.characterReferences, {
      subset: Da.name[o][i]
    })
  );
  return n === !0 || (n = Array.isArray(n) ? (r.commaSeparated ? HD : VD)(n, {
    padLeft: !e.settings.tightCommaSeparatedLists
  }) : String(n), e.settings.collapseEmptyAttributes && !n) ? a : (e.settings.preferUnquoted && (s = gi(
    n,
    Object.assign({}, e.settings.characterReferences, {
      subset: Da.unquoted[o][i],
      attribute: !0
    })
  )), s !== n && (e.settings.quoteSmart && Ju(n, l) > Ju(n, e.alternative) && (l = e.alternative), s = l + gi(
    n,
    Object.assign({}, e.settings.characterReferences, {
      subset: (l === "'" ? Da.single : Da.double)[o][i],
      attribute: !0
    })
  ) + l), a + (s && "=" + s));
}
function B2(e, t, n, r) {
  return n && n.type === "element" && (n.tagName === "script" || n.tagName === "style") ? e.value : gi(
    e.value,
    Object.assign({}, r.settings.characterReferences, {
      subset: ["<", "&"]
    })
  );
}
function pL(e, t, n, r) {
  return r.settings.allowDangerousHtml ? e.value : B2(e, t, n, r);
}
function hL(e, t, n, r) {
  return r.all(e);
}
const mL = ID("type", {
  invalid: gL,
  unknown: vL,
  handlers: { comment: BD, doctype: jD, element: cL, raw: pL, root: hL, text: B2 }
});
function gL(e) {
  throw new Error("Expected node, not `" + e + "`");
}
function vL(e) {
  throw new Error("Cannot compile unknown node `" + e.type + "`");
}
function yL(e, t) {
  const n = t || {}, r = n.quote || '"', o = r === '"' ? "'" : '"';
  if (r !== '"' && r !== "'")
    throw new Error("Invalid quote `" + r + "`, expected `'` or `\"`");
  return {
    one: xL,
    all: wL,
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
      voids: n.voids || RD,
      characterReferences: n.characterReferences || n.entities || {},
      closeSelfClosing: n.closeSelfClosing || !1,
      closeEmptyElements: n.closeEmptyElements || !1
    },
    schema: n.space === "svg" ? N2 : _D,
    quote: r,
    alternative: o
  }.one(
    Array.isArray(e) ? { type: "root", children: e } : e,
    void 0,
    void 0
  );
}
function xL(e, t, n) {
  return mL(e, t, n, this);
}
function wL(e) {
  const t = [], n = e && e.children || [];
  let r = -1;
  for (; ++r < n.length; )
    t[r] = this.one(n[r], r, e);
  return t.join("");
}
function bL(e) {
  const t = this.data("settings"), n = Object.assign({}, t, e);
  Object.assign(this, { Compiler: r });
  function r(o) {
    return yL(o, n);
  }
}
var j2 = typeof window < "u" ? window : {};
function SL() {
  var e = j2.DOMParser, t = !1;
  try {
    new e().parseFromString("", "text/html") && (t = !0);
  } catch {
  }
  return t;
}
function kL() {
  var e = function() {
  };
  return CL() ? e.prototype.parseFromString = function(t) {
    var n = new window.ActiveXObject("htmlfile");
    return n.designMode = "on", n.open(), n.write(t), n.close(), n;
  } : e.prototype.parseFromString = function(t) {
    var n = document.implementation.createHTMLDocument("");
    return n.open(), n.write(t), n.close(), n;
  }, e;
}
function CL() {
  var e = !1;
  try {
    document.implementation.createHTMLDocument("").open();
  } catch {
    window.ActiveXObject && (e = !0);
  }
  return e;
}
SL() ? j2.DOMParser : kL();
async function $L(e) {
  if (!e)
    return "";
  const t = await O7().use(T9).use(U9).use(MN).use(vD).use(bL).process(e);
  return String(t);
}
const EL = ({
  content: e
}) => {
  const [t, n] = m.exports.useState("");
  return m.exports.useEffect(() => {
    $L(e).then((r) => {
      n(r);
    });
  }, [e]), t;
}, H2 = (e) => {
  const t = EL(e);
  return /* @__PURE__ */ D("div", {
    className: "prose prose-sm prose-invert",
    dangerouslySetInnerHTML: {
      __html: t
    }
  });
}, V2 = m.exports.memo(({
  message: e
}) => /* @__PURE__ */ ce("div", {
  className: _i("flex flex-col gap-2 p-4 text-sm text-mayumi-gray-1100", {
    "bg-mayumi-gray-200": e.role === "user",
    "bg-mayumi-gray-300": e.role === "assistant"
  }),
  children: [/* @__PURE__ */ D("div", {
    className: "flex-0 rounded-md text-mayumi-gray-1200",
    children: e.role === "user" ? "You:" : "Assistant:"
  }), /* @__PURE__ */ D("div", {
    className: "flex-1 rounded-md",
    children: /* @__PURE__ */ D(H2, {
      content: e.text
    })
  })]
}), (e, t) => e.message.text === t.message.text);
V2.displayName = "MessageItem";
const AL = (e) => {
  var a;
  const t = m.exports.useRef(null), n = m.exports.useRef(null), {
    conventions: r,
    updateOrUpsertConventions: o
  } = yo(), [i] = m.exports.useState(e.action), l = (a = r[i]) != null ? a : [];
  function s() {
    var c, f, d;
    const u = ((f = (c = t.current) == null ? void 0 : c.children.length) != null ? f : 1) - 1;
    ((d = t.current) == null ? void 0 : d.children[u]) && n.current && setTimeout(() => {
      v7(n.current, {
        behavior: "smooth",
        scrollMode: "if-needed"
      });
    }, 80);
  }
  return yo.subscribe((u, c) => {
    var f, d;
    ((f = c.conventions[i]) == null ? void 0 : f.length) !== ((d = u.conventions[i]) == null ? void 0 : d.length) && s();
  }), m.exports.useEffect(() => {
    sc(iu, (u) => {
      const {
        data: c
      } = u;
      o(c.action, c.message);
    }), s();
  }, [o]), /* @__PURE__ */ D("div", {
    className: "aiflow-chat-in-command flex-1 bg-mayumi-gray-200",
    children: /* @__PURE__ */ ce(p7, {
      className: "pointer-events-auto h-[400px] overflow-hidden pt-2",
      children: [/* @__PURE__ */ D(h7, {
        className: "h-full w-full rounded",
        children: /* @__PURE__ */ ce("div", {
          ref: t,
          children: [l.map((u) => /* @__PURE__ */ D(V2, {
            message: u
          }, u.id)), /* @__PURE__ */ D("div", {
            ref: n
          })]
        })
      }), /* @__PURE__ */ D(Rv, {
        className: "flex touch-none select-none bg-transparent p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col",
        orientation: "vertical",
        children: /* @__PURE__ */ D(Iv, {
          className: "relative flex-1 rounded-[10px] bg-transparent before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
        })
      }), /* @__PURE__ */ D(Rv, {
        className: "flex touch-none select-none bg-transparent p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col",
        orientation: "horizontal",
        children: /* @__PURE__ */ D(Iv, {
          className: "relative flex-1 rounded-[10px] bg-transparent before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
        })
      })]
    })
  });
}, Xc = (e) => e.replace("-page", "");
function Sh(e, t = {}, n) {
  for (const r in e) {
    const o = e[r], i = n ? `${n}:${r}` : r;
    typeof o == "object" && o !== null ? Sh(o, t, i) : typeof o == "function" && (t[i] = o);
  }
  return t;
}
const PL = { run: (e) => e() }, _L = () => PL, U2 = typeof console.createTask < "u" ? console.createTask : _L;
function RL(e, t) {
  const n = t.shift(), r = U2(n);
  return e.reduce(
    (o, i) => o.then(() => r.run(() => i(...t))),
    Promise.resolve()
  );
}
function IL(e, t) {
  const n = t.shift(), r = U2(n);
  return Promise.all(e.map((o) => r.run(() => o(...t))));
}
function Ed(e, t) {
  for (const n of [...e])
    n(t);
}
class OL {
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
    const n = Sh(t), r = Object.keys(n).map(
      (o) => this.hook(o, n[o])
    );
    return () => {
      for (const o of r.splice(0, r.length))
        o();
    };
  }
  removeHooks(t) {
    const n = Sh(t);
    for (const r in n)
      this.removeHook(r, n[r]);
  }
  removeAllHooks() {
    for (const t in this._hooks)
      delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(RL, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(IL, t, ...n);
  }
  callHookWith(t, n, ...r) {
    const o = this._before || this._after ? { name: n, args: r, context: {} } : void 0;
    this._before && Ed(this._before, o);
    const i = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      r
    );
    return i instanceof Promise ? i.finally(() => {
      this._after && o && Ed(this._after, o);
    }) : (this._after && o && Ed(this._after, o), i);
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
function TL() {
  return new OL();
}
const kh = TL(), Eg = (e, t = {}) => {
  const n = () => {
    const r = setInterval(() => {
      e.current && (e.current.focus(), clearInterval(r));
    }, 10);
  };
  t.name && kh.hook(t.name, n), n();
};
function ML() {
  const [e, t] = m.exports.useState(""), n = m.exports.useRef(), r = m.exports.useRef(null), o = m.exports.useRef(null), i = m.exports.useRef(null), l = m.exports.useRef(null), [s, a] = m.exports.useState([hr]), u = s[s.length - 1], [c, f] = m.exports.useState(!1), {
    upsertConventions: d
  } = yo(), {
    open: g,
    setOpen: h,
    toggle: v,
    updateHistoryOpen: w,
    setIsChat: p
  } = Vn(), y = m.exports.useCallback(() => {
    a((P) => {
      const R = [...P];
      return R.splice(-1, 1), R;
    }), p(!1), kh.callHook("command-input");
  }, [p]);
  function x() {
    o.current && (o.current.style.transform = "scale(0.96)", setTimeout(() => {
      o.current && (o.current.style.transform = "");
    }, 100));
  }
  const b = m.exports.useCallback((P) => {
    t(P);
  }, []), A = m.exports.useCallback(async (P, R) => {
    var I;
    if (console.log("handleValueSelect", P, R), P.endsWith("-page")) {
      p(!0), a((T) => [...T, P]);
      return;
    }
    if (P === Gu && (f(!0), await Cl(iu, {
      text: R == null ? void 0 : R.text,
      action: Gu
    }, "background"), f(!1)), P === Ss && (f(!0), await Cl(iu, {
      text: R == null ? void 0 : R.text,
      action: Ss
    }, "background"), f(!1)), P === kt.SUMMARY_WITH) {
      const T = (I = document.body.textContent) != null ? I : "", L = await Cl(iu, {
        text: T,
        action: kt.SUMMARY_WITH
      }, "background");
      d(kt.SUMMARY_WITH, L.message);
    }
    t("");
  }, [d, p]);
  m.exports.useEffect(() => {
    const P = (R) => {
      if (R.key === "j" && R.metaKey && (v(), u === uh && y(), w(!1)), R.key === "Escape" && w(!1), R.key === "Escape" && u === hr && !Vn.getState().subCommandOpen) {
        h(!1);
        return;
      }
      R.key === "Escape" && u !== hr && !Vn.getState().subCommandOpen && (y(), kh.callHook("command-input"));
    };
    return document.addEventListener("keydown", P), () => document.removeEventListener("keydown", P);
  }, [w, u, y, v, h]), Eg(i, {
    name: "command-input"
  });
  const S = u === hr, E = u === xo || u === Oi, $ = u === xo;
  return /* @__PURE__ */ ce(Mt, {
    children: [/* @__PURE__ */ D(z3, {
      open: g,
      children: /* @__PURE__ */ D(B3, {
        container: r.current,
        children: /* @__PURE__ */ D(j3, {
          "cmdk-dialog": "",
          className: "z-50 shadow-lg",
          children: /* @__PURE__ */ ce(an, {
            ref: o,
            value: e,
            onValueChange: b,
            loop: !0,
            children: [/* @__PURE__ */ D("div", {
              "cmdk-raycast-top-shine": ""
            }), /* @__PURE__ */ ce("div", {
              className: "flex items-center justify-between px-3 pt-1",
              children: [/* @__PURE__ */ D("div", {
                className: "flex items-center justify-start gap-2",
                children: s.map((P) => /* @__PURE__ */ D("div", {
                  className: "rounded-md bg-mayumi-gray-700 px-3 py-1 text-xs uppercase text-mayumi-gray-1100 shadow",
                  children: Xc(P)
                }, P))
              }), $ && /* @__PURE__ */ D(XT, {
                container: r
              })]
            }), /* @__PURE__ */ D(an.Input, {
              ref: (P) => {
                i.current = P;
              },
              onValueChange: (P) => {
                n.current = P;
              },
              autoFocus: !0,
              tabIndex: 1,
              className: _i({
                hidden: !S
              }),
              placeholder: "Search for commands...",
              onKeyDown: (P) => {
                var R;
                P.key === "Enter" && x(), !(u === hr || ((R = n.current) == null ? void 0 : R.length)) && P.key === "Backspace" && (P.preventDefault(), y(), x());
              }
            }, "cmdk-input"), S && /* @__PURE__ */ D("hr", {
              "cmdk-raycast-loader": ""
            }), /* @__PURE__ */ ce(an.List, {
              className: "min-h-[400px]",
              ref: l,
              children: [u === hr && /* @__PURE__ */ D(NL, {
                onSelect: A
              }), u === uh && /* @__PURE__ */ D(DL, {
                onExit: y
              }), E && /* @__PURE__ */ D(LL, {
                page: u
              })]
            }), /* @__PURE__ */ ce("div", {
              "cmdk-raycast-footer": "",
              className: "justify-end",
              children: [E && /* @__PURE__ */ D(FL, {
                page: u,
                onSendMessage: A
              }), E && c && /* @__PURE__ */ D("i", {
                className: "spinner gg-spinner/0.75"
              }), /* @__PURE__ */ D("button", {
                tabIndex: 2,
                "cmdk-raycast-open-trigger": "",
                children: /* @__PURE__ */ D("kbd", {
                  children: "\u21B5"
                })
              }), /* @__PURE__ */ D("hr", {}), /* @__PURE__ */ D(zL, {
                listRef: l,
                selectedValue: e,
                inputRef: i,
                onSelect: A
              })]
            })]
          })
        })
      })
    }), /* @__PURE__ */ D("div", {
      id: "aiflow-dialog-container",
      className: "raycast fixed top-0 left-0",
      ref: r
    })]
  });
}
function NL({
  onSelect: e
}) {
  return /* @__PURE__ */ ce(Mt, {
    children: [/* @__PURE__ */ D(an.Empty, {
      children: "No results found."
    }), /* @__PURE__ */ ce(an.Group, {
      heading: "Commands",
      children: [/* @__PURE__ */ D(pI, {}), /* @__PURE__ */ D(vI, {}), /* @__PURE__ */ D(wI, {
        onSelect: e
      }), /* @__PURE__ */ ce(Ri, {
        isCommand: !0,
        onSelect: () => e(Oi),
        value: Oi,
        children: [/* @__PURE__ */ D("i", {
          className: "gg-girl/0.8 text-mayumi-gray-1200"
        }), "Ask ChatGPT"]
      }), /* @__PURE__ */ ce(Ri, {
        isCommand: !0,
        onSelect: () => e(xo),
        value: xo,
        children: [/* @__PURE__ */ D(CI, {
          className: "fill-mayumi-gray-1200/1"
        }), "Tranasplate"]
      }), /* @__PURE__ */ D(SI, {
        onSelect: e
      })]
    })]
  });
}
function DL(e) {
  const t = wk();
  return /* @__PURE__ */ D("div", {
    className: "flex flex-col items-center justify-center p-4 pt-8",
    children: /* @__PURE__ */ D(lg, {
      light: !0,
      className: "w-1/2",
      value: t.OPENAI_API_KEY,
      onKeyDown: (n) => {
        var r;
        return n.key === "Enter" && (t.set({
          [fI]: n.currentTarget.value
        }), (r = e.onExit) == null || r.call(e)), !1;
      }
    })
  });
}
function LL(e) {
  return /* @__PURE__ */ D(AL, {
    action: Xc(e.page)
  });
}
function FL(e) {
  const [t, n] = m.exports.useState(""), r = m.exports.useRef(!1), o = m.exports.useRef(null), i = m.exports.useRef(""), l = (s) => {
    if (s.key === "Enter" && r.current === !1) {
      s.preventDefault();
      const a = Xc(e.page);
      e.onSendMessage(a, {
        text: i.current
      }), i.current = "", o.current.value = "", n(""), console.log("ChatInput", o.current);
    }
  };
  return Eg(o, {
    name: "chat-input"
  }), /* @__PURE__ */ D(lg, {
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
function zL({
  inputRef: e,
  listRef: t,
  selectedValue: n,
  onSelect: r
}) {
  const {
    subCommandOpen: o,
    toggleSubCommand: i,
    setSubCommandOpen: l,
    isChat: s
  } = Vn(), [, a] = m.exports.useState(), u = m.exports.useRef(null), c = n !== hr;
  return m.exports.useEffect(() => {
    function f(d) {
      d.key === "k" && d.metaKey && (d.preventDefault(), c && i());
    }
    return document.addEventListener("keydown", f), () => {
      document.removeEventListener("keydown", f);
    };
  }, [c, i, l, e]), m.exports.useEffect(() => {
    const f = t.current;
    !f || (o ? f.style.overflow = "hidden" : f.style.overflow = "");
  }, [o, t]), o && Eg(u, {
    name: "subcommand-input"
  }), /* @__PURE__ */ ce(A3, {
    open: o,
    onOpenChange: (f) => {
      !c || l(f);
    },
    modal: !0,
    children: [/* @__PURE__ */ ce(P3, {
      tabIndex: 3,
      disabled: !c,
      "cmdk-raycast-subcommand-trigger": "",
      onClick: () => {
        l(!0);
      },
      "aria-expanded": o,
      children: ["Actions", /* @__PURE__ */ D("kbd", {
        children: "\u2318"
      }), /* @__PURE__ */ D("kbd", {
        children: "K"
      })]
    }), /* @__PURE__ */ D(_3, {
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
        children: [/* @__PURE__ */ D(an.List, {
          children: /* @__PURE__ */ ce(an.Group, {
            heading: n == null ? void 0 : n.toUpperCase(),
            children: [s && /* @__PURE__ */ D(BL, {
              page: n
            }), !s && /* @__PURE__ */ D(jL, {
              value: n,
              onSelect: r
            })]
          })
        }), /* @__PURE__ */ D(an.Input, {
          autoFocus: !0,
          onValueChange: a,
          ref: u,
          placeholder: "Search for actions..."
        })]
      })
    })]
  });
}
function BL({
  page: e
}) {
  const {
    newConvention: t
  } = yo((r) => r), {
    setSubCommandOpen: n
  } = Vn((r) => r);
  return /* @__PURE__ */ D(Mt, {
    children: /* @__PURE__ */ D(Ao, {
      value: "new-convention",
      onSelect: () => {
        t(Xc(e)), n(!1);
      },
      shortcut: "\u21B5",
      children: /* @__PURE__ */ D("span", {
        className: "truncate",
        children: "New Convention"
      })
    })
  });
}
function jL(e) {
  return e.value === Oi ? /* @__PURE__ */ D(HL, {
    onSelect: e.onSelect
  }) : e.value === xo ? /* @__PURE__ */ D(VL, {
    onSelect: e.onSelect
  }) : e.value === kt.OPEN_HISTORY ? /* @__PURE__ */ D(hI, {}) : e.value === kt.CLEAR_STORAGE ? /* @__PURE__ */ D(yI, {}) : e.value === ks.CONFIG_PAGE ? /* @__PURE__ */ D(bI, {
    onSelect: e.onSelect
  }) : e.value === kt.SUMMARY_WITH ? /* @__PURE__ */ D(kI, {
    onSelect: e.onSelect
  }) : null;
}
function W2(e) {
  const {
    setSubCommandOpen: t
  } = Vn();
  return /* @__PURE__ */ D(Ao, {
    value: "open-chat",
    onSelect: () => {
      t(!1), e.onSelect(e.page);
    },
    shortcut: "\u21B5",
    children: /* @__PURE__ */ D("span", {
      className: "truncate",
      children: "Open Chat"
    })
  });
}
function HL({
  onSelect: e
}) {
  var t;
  return /* @__PURE__ */ ce(Mt, {
    children: [/* @__PURE__ */ D(Ao, {
      value: "search-input",
      onSelect: () => {
        e(Gu, {
          text: kv()
        });
      },
      shortcut: "\u21B5",
      children: /* @__PURE__ */ D("span", {
        className: "truncate",
        children: (t = kv()) != null ? t : "Search input"
      })
    }), /* @__PURE__ */ D(W2, {
      page: Oi,
      onSelect: e
    })]
  });
}
function VL({
  onSelect: e
}) {
  return /* @__PURE__ */ D(Mt, {
    children: /* @__PURE__ */ D(W2, {
      page: xo,
      onSelect: e
    })
  });
}
var Ag = Xs(), oe = (e) => Ys(e, Ag), Pg = Xs();
oe.write = (e) => Ys(e, Pg);
var Zc = Xs();
oe.onStart = (e) => Ys(e, Zc);
var _g = Xs();
oe.onFrame = (e) => Ys(e, _g);
var Rg = Xs();
oe.onFinish = (e) => Ys(e, Rg);
var vi = [];
oe.setTimeout = (e, t) => {
  let n = oe.now() + t, r = () => {
    let i = vi.findIndex((l) => l.cancel == r);
    ~i && vi.splice(i, 1), kr -= ~i ? 1 : 0;
  }, o = { time: n, handler: e, cancel: r };
  return vi.splice(q2(n), 0, o), kr += 1, Q2(), o;
};
var q2 = (e) => ~(~vi.findIndex((t) => t.time > e) || ~vi.length);
oe.cancel = (e) => {
  Zc.delete(e), _g.delete(e), Rg.delete(e), Ag.delete(e), Pg.delete(e);
};
oe.sync = (e) => {
  Ch = !0, oe.batchedUpdates(e), Ch = !1;
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
var Ig = typeof window < "u" ? window.requestAnimationFrame : () => {
};
oe.use = (e) => Ig = e;
oe.now = typeof performance < "u" ? () => performance.now() : Date.now;
oe.batchedUpdates = (e) => e();
oe.catch = console.error;
oe.frameLoop = "always";
oe.advance = () => {
  oe.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : K2();
};
var Sr = -1, kr = 0, Ch = !1;
function Ys(e, t) {
  Ch ? (t.delete(e), e(0)) : (t.add(e), Q2());
}
function Q2() {
  Sr < 0 && (Sr = 0, oe.frameLoop !== "demand" && Ig(G2));
}
function UL() {
  Sr = -1;
}
function G2() {
  ~Sr && (Ig(G2), oe.batchedUpdates(K2));
}
function K2() {
  let e = Sr;
  Sr = oe.now();
  let t = q2(Sr);
  if (t && (Y2(vi.splice(0, t), (n) => n.handler()), kr -= t), !kr) {
    UL();
    return;
  }
  Zc.flush(), Ag.flush(e ? Math.min(64, Sr - e) : 16.667), _g.flush(), Pg.flush(), Rg.flush();
}
function Xs() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return { add(n) {
    kr += t == e && !e.has(n) ? 1 : 0, e.add(n);
  }, delete(n) {
    return kr -= t == e && e.has(n) ? 1 : 0, e.delete(n);
  }, flush(n) {
    t.size && (e = /* @__PURE__ */ new Set(), kr -= t.size, Y2(t, (r) => r(n) && e.add(r)), kr += e.size, t = e);
  } };
}
function Y2(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      oe.catch(r);
    }
  });
}
var WL = Object.defineProperty, qL = (e, t) => {
  for (var n in t)
    WL(e, n, { get: t[n], enumerable: !0 });
}, mn = {};
qL(mn, { assign: () => GL, colors: () => Tr, createStringInterpolator: () => Tg, skipAnimation: () => Z2, to: () => X2, willAdvance: () => Mg });
function $h() {
}
var QL = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), U = { arr: Array.isArray, obj: (e) => !!e && e.constructor.name === "Object", fun: (e) => typeof e == "function", str: (e) => typeof e == "string", num: (e) => typeof e == "number", und: (e) => e === void 0 };
function Fn(e, t) {
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
function _n(e, t, n) {
  if (U.arr(e)) {
    for (let r = 0; r < e.length; r++)
      t.call(n, e[r], `${r}`);
    return;
  }
  for (let r in e)
    e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Pt = (e) => U.und(e) ? [] : U.arr(e) ? e : [e];
function Hl(e, t) {
  if (e.size) {
    let n = Array.from(e);
    e.clear(), he(n, t);
  }
}
var kl = (e, ...t) => Hl(e, (n) => n(...t)), Og = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), Tg, X2, Tr = null, Z2 = !1, Mg = $h, GL = (e) => {
  e.to && (X2 = e.to), e.now && (oe.now = e.now), e.colors !== void 0 && (Tr = e.colors), e.skipAnimation != null && (Z2 = e.skipAnimation), e.createStringInterpolator && (Tg = e.createStringInterpolator), e.requestAnimationFrame && oe.use(e.requestAnimationFrame), e.batchedUpdates && (oe.batchedUpdates = e.batchedUpdates), e.willAdvance && (Mg = e.willAdvance), e.frameLoop && (oe.frameLoop = e.frameLoop);
}, Vl = /* @__PURE__ */ new Set(), Ut = [], Ad = [], tc = 0, Jc = { get idle() {
  return !Vl.size && !Ut.length;
}, start(e) {
  tc > e.priority ? (Vl.add(e), oe.onStart(KL)) : (J2(e), oe(Eh));
}, advance: Eh, sort(e) {
  if (tc)
    oe.onFrame(() => Jc.sort(e));
  else {
    let t = Ut.indexOf(e);
    ~t && (Ut.splice(t, 1), eC(e));
  }
}, clear() {
  Ut = [], Vl.clear();
} };
function KL() {
  Vl.forEach(J2), Vl.clear(), oe(Eh);
}
function J2(e) {
  Ut.includes(e) || eC(e);
}
function eC(e) {
  Ut.splice(YL(Ut, (t) => t.priority > e.priority), 0, e);
}
function Eh(e) {
  let t = Ad;
  for (let n = 0; n < Ut.length; n++) {
    let r = Ut[n];
    tc = r.priority, r.idle || (Mg(r), r.advance(e), r.idle || t.push(r));
  }
  return tc = 0, Ad = Ut, Ad.length = 0, Ut = t, Ut.length > 0;
}
function YL(e, t) {
  let n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var XL = (e, t, n) => Math.min(Math.max(n, e), t), ZL = { transparent: 0, aliceblue: 4042850303, antiquewhite: 4209760255, aqua: 16777215, aquamarine: 2147472639, azure: 4043309055, beige: 4126530815, bisque: 4293182719, black: 255, blanchedalmond: 4293643775, blue: 65535, blueviolet: 2318131967, brown: 2771004159, burlywood: 3736635391, burntsienna: 3934150143, cadetblue: 1604231423, chartreuse: 2147418367, chocolate: 3530104575, coral: 4286533887, cornflowerblue: 1687547391, cornsilk: 4294499583, crimson: 3692313855, cyan: 16777215, darkblue: 35839, darkcyan: 9145343, darkgoldenrod: 3095792639, darkgray: 2846468607, darkgreen: 6553855, darkgrey: 2846468607, darkkhaki: 3182914559, darkmagenta: 2332068863, darkolivegreen: 1433087999, darkorange: 4287365375, darkorchid: 2570243327, darkred: 2332033279, darksalmon: 3918953215, darkseagreen: 2411499519, darkslateblue: 1211993087, darkslategray: 793726975, darkslategrey: 793726975, darkturquoise: 13554175, darkviolet: 2483082239, deeppink: 4279538687, deepskyblue: 12582911, dimgray: 1768516095, dimgrey: 1768516095, dodgerblue: 512819199, firebrick: 2988581631, floralwhite: 4294635775, forestgreen: 579543807, fuchsia: 4278255615, gainsboro: 3705462015, ghostwhite: 4177068031, gold: 4292280575, goldenrod: 3668254975, gray: 2155905279, green: 8388863, greenyellow: 2919182335, grey: 2155905279, honeydew: 4043305215, hotpink: 4285117695, indianred: 3445382399, indigo: 1258324735, ivory: 4294963455, khaki: 4041641215, lavender: 3873897215, lavenderblush: 4293981695, lawngreen: 2096890111, lemonchiffon: 4294626815, lightblue: 2916673279, lightcoral: 4034953471, lightcyan: 3774873599, lightgoldenrodyellow: 4210742015, lightgray: 3553874943, lightgreen: 2431553791, lightgrey: 3553874943, lightpink: 4290167295, lightsalmon: 4288707327, lightseagreen: 548580095, lightskyblue: 2278488831, lightslategray: 2005441023, lightslategrey: 2005441023, lightsteelblue: 2965692159, lightyellow: 4294959359, lime: 16711935, limegreen: 852308735, linen: 4210091775, magenta: 4278255615, maroon: 2147483903, mediumaquamarine: 1724754687, mediumblue: 52735, mediumorchid: 3126187007, mediumpurple: 2473647103, mediumseagreen: 1018393087, mediumslateblue: 2070474495, mediumspringgreen: 16423679, mediumturquoise: 1221709055, mediumvioletred: 3340076543, midnightblue: 421097727, mintcream: 4127193855, mistyrose: 4293190143, moccasin: 4293178879, navajowhite: 4292783615, navy: 33023, oldlace: 4260751103, olive: 2155872511, olivedrab: 1804477439, orange: 4289003775, orangered: 4282712319, orchid: 3664828159, palegoldenrod: 4008225535, palegreen: 2566625535, paleturquoise: 2951671551, palevioletred: 3681588223, papayawhip: 4293907967, peachpuff: 4292524543, peru: 3448061951, pink: 4290825215, plum: 3718307327, powderblue: 2967529215, purple: 2147516671, rebeccapurple: 1714657791, red: 4278190335, rosybrown: 3163525119, royalblue: 1097458175, saddlebrown: 2336560127, salmon: 4202722047, sandybrown: 4104413439, seagreen: 780883967, seashell: 4294307583, sienna: 2689740287, silver: 3233857791, skyblue: 2278484991, slateblue: 1784335871, slategray: 1887473919, slategrey: 1887473919, snow: 4294638335, springgreen: 16744447, steelblue: 1182971135, tan: 3535047935, teal: 8421631, thistle: 3636451583, tomato: 4284696575, turquoise: 1088475391, violet: 4001558271, wheat: 4125012991, white: 4294967295, whitesmoke: 4126537215, yellow: 4294902015, yellowgreen: 2597139199 }, cn = "[-+]?\\d*\\.?\\d+", nc = cn + "%";
function ef(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var JL = new RegExp("rgb" + ef(cn, cn, cn)), eF = new RegExp("rgba" + ef(cn, cn, cn, cn)), tF = new RegExp("hsl" + ef(cn, nc, nc)), nF = new RegExp("hsla" + ef(cn, nc, nc, cn)), rF = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, oF = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, iF = /^#([0-9a-fA-F]{6})$/, lF = /^#([0-9a-fA-F]{8})$/;
function sF(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = iF.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Tr && Tr[e] !== void 0 ? Tr[e] : (t = JL.exec(e)) ? (jo(t[1]) << 24 | jo(t[2]) << 16 | jo(t[3]) << 8 | 255) >>> 0 : (t = eF.exec(e)) ? (jo(t[1]) << 24 | jo(t[2]) << 16 | jo(t[3]) << 8 | Iy(t[4])) >>> 0 : (t = rF.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = lF.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = oF.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = tF.exec(e)) ? (_y(Ry(t[1]), La(t[2]), La(t[3])) | 255) >>> 0 : (t = nF.exec(e)) ? (_y(Ry(t[1]), La(t[2]), La(t[3])) | Iy(t[4])) >>> 0 : null;
}
function Pd(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function _y(e, t, n) {
  let r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, i = Pd(o, r, e + 1 / 3), l = Pd(o, r, e), s = Pd(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(l * 255) << 16 | Math.round(s * 255) << 8;
}
function jo(e) {
  let t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Ry(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Iy(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function La(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Oy(e) {
  let t = sF(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, o = (t & 65280) >>> 8, i = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${o}, ${i})`;
}
var $s = (e, t, n) => {
  if (U.fun(e))
    return e;
  if (U.arr(e))
    return $s({ range: e, output: t, extrapolate: n });
  if (U.str(e.output[0]))
    return Tg(e);
  let r = e, o = r.output, i = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", s = r.extrapolateRight || r.extrapolate || "extend", a = r.easing || ((u) => u);
  return (u) => {
    let c = uF(u, i);
    return aF(u, i[c], i[c + 1], o[c], o[c + 1], a, l, s, r.map);
  };
};
function aF(e, t, n, r, o, i, l, s, a) {
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
function uF(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
var cF = (e, t = "end") => (n) => {
  n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
  let r = n * e, o = t === "end" ? Math.floor(r) : Math.ceil(r);
  return XL(0, 1, o / e);
}, rc = 1.70158, Fa = rc * 1.525, Ty = rc + 1, My = 2 * Math.PI / 3, Ny = 2 * Math.PI / 4.5, za = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, fF = { linear: (e) => e, easeInQuad: (e) => e * e, easeOutQuad: (e) => 1 - (1 - e) * (1 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2, easeInCubic: (e) => e * e * e, easeOutCubic: (e) => 1 - Math.pow(1 - e, 3), easeInOutCubic: (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2, easeInQuart: (e) => e * e * e * e, easeOutQuart: (e) => 1 - Math.pow(1 - e, 4), easeInOutQuart: (e) => e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2, easeInQuint: (e) => e * e * e * e * e, easeOutQuint: (e) => 1 - Math.pow(1 - e, 5), easeInOutQuint: (e) => e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2, easeInSine: (e) => 1 - Math.cos(e * Math.PI / 2), easeOutSine: (e) => Math.sin(e * Math.PI / 2), easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2, easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * e - 10), easeOutExpo: (e) => e === 1 ? 1 : 1 - Math.pow(2, -10 * e), easeInOutExpo: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2, easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)), easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)), easeInOutCirc: (e) => e < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2, easeInBack: (e) => Ty * e * e * e - rc * e * e, easeOutBack: (e) => 1 + Ty * Math.pow(e - 1, 3) + rc * Math.pow(e - 1, 2), easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((Fa + 1) * 2 * e - Fa) / 2 : (Math.pow(2 * e - 2, 2) * ((Fa + 1) * (e * 2 - 2) + Fa) + 2) / 2, easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * My), easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * My) + 1, easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Ny)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Ny) / 2 + 1, easeInBounce: (e) => 1 - za(1 - e), easeOutBounce: za, easeInOutBounce: (e) => e < 0.5 ? (1 - za(1 - 2 * e)) / 2 : (1 + za(2 * e - 1)) / 2, steps: cF }, Mi = Symbol.for("FluidValue.get"), wo = Symbol.for("FluidValue.observers"), jt = (e) => Boolean(e && e[Mi]), vt = (e) => e && e[Mi] ? e[Mi]() : e, Dy = (e) => e[wo] || null;
function dF(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function Es(e, t) {
  let n = e[wo];
  n && n.forEach((r) => {
    dF(r, t);
  });
}
var mz, gz, tx, tC = (tx = class {
  constructor(e) {
    G(this, mz);
    G(this, gz);
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    pF(this, e);
  }
}, mz = Mi, gz = wo, tx), pF = (e, t) => nC(e, Mi, t);
function Qi(e, t) {
  if (e[Mi]) {
    let n = e[wo];
    n || nC(e, wo, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function As(e, t) {
  let n = e[wo];
  if (n && n.has(t)) {
    let r = n.size - 1;
    r ? n.delete(t) : e[wo] = null, e.observerRemoved && e.observerRemoved(r, t);
  }
}
var nC = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), au = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, hF = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Ly = new RegExp(`(${au.source})(%|[a-z]+)`, "i"), mF = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, tf = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, rC = (e) => {
  let [t, n] = gF(e);
  if (!t || Og())
    return e;
  let r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  return r ? r.trim() : n && n.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(n) || e : n && tf.test(n) ? rC(n) : n || e;
}, gF = (e) => {
  let t = tf.exec(e);
  if (!t)
    return [,];
  let [, n, r] = t;
  return [n, r];
}, _d, vF = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`, oC = (e) => {
  _d || (_d = Tr ? new RegExp(`(${Object.keys(Tr).join("|")})(?!\\w)`, "g") : /^\b$/);
  let t = e.output.map((o) => vt(o).replace(tf, rC).replace(hF, Oy).replace(_d, Oy)), n = t.map((o) => o.match(au).map(Number)), r = n[0].map((o, i) => n.map((l) => {
    if (!(i in l))
      throw Error('The arity of each "output" value must be equal');
    return l[i];
  })).map((o) => $s({ ...e, output: o }));
  return (o) => {
    var s;
    let i = !Ly.test(t[0]) && ((s = t.find((a) => Ly.test(a))) == null ? void 0 : s.replace(au, "")), l = 0;
    return t[0].replace(au, () => `${r[l++](o)}${i || ""}`).replace(mF, vF);
  };
}, Ng = "react-spring: ", iC = (e) => {
  let t = e, n = !1;
  if (typeof t != "function")
    throw new TypeError(`${Ng}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, yF = iC(console.warn);
function xF() {
  yF(`${Ng}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var wF = iC(console.warn);
function bF() {
  wF(`${Ng}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function nf(e) {
  return U.str(e) && (e[0] == "#" || /\d/.test(e) || !Og() && tf.test(e) || e in (Tr || {}));
}
var Dg = Og() ? m.exports.useEffect : m.exports.useLayoutEffect, SF = () => {
  let e = m.exports.useRef(!1);
  return Dg(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function lC() {
  let e = m.exports.useState()[1], t = SF();
  return () => {
    t.current && e(Math.random());
  };
}
function kF(e, t) {
  let [n] = m.exports.useState(() => ({ inputs: t, result: e() })), r = m.exports.useRef(), o = r.current, i = o;
  return i ? Boolean(t && i.inputs && CF(t, i.inputs)) || (i = { inputs: t, result: e() }) : i = n, m.exports.useEffect(() => {
    r.current = i, o == n && (n.inputs = n.result = void 0);
  }, [i]), i.result;
}
function CF(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var sC = (e) => m.exports.useEffect(e, $F), $F = [];
function Fy(e) {
  let t = m.exports.useRef();
  return m.exports.useEffect(() => {
    t.current = e;
  }), t.current;
}
var Ps = Symbol.for("Animated:node"), EF = (e) => !!e && e[Ps] === e, wn = (e) => e && e[Ps], Lg = (e, t) => QL(e, Ps, t), rf = (e) => e && e[Ps] && e[Ps].getPayload(), aC = class {
  constructor() {
    G(this, "payload");
    Lg(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}, Zs = class extends aC {
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
    return new Zs(t);
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
}, _s = class extends Zs {
  constructor(t) {
    super(0);
    G(this, "_string", null);
    G(this, "_toString");
    this._toString = $s({ output: [t, t] });
  }
  static create(t) {
    return new _s(t);
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
    t && (this._toString = $s({ output: [this.getValue(), t] })), this._value = 0, super.reset();
  }
}, oc = { dependencies: null }, of = class extends aC {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    let t = {};
    return _n(this.source, (n, r) => {
      EF(n) ? t[r] = n.getValue(e) : jt(n) ? t[r] = vt(n) : e || (t[r] = n);
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
      return _n(e, this._addToPayload, t), Array.from(t);
    }
  }
  _addToPayload(e) {
    oc.dependencies && jt(e) && oc.dependencies.add(e);
    let t = rf(e);
    t && he(t, (n) => this.add(n));
  }
}, uC = class extends of {
  constructor(e) {
    super(e);
  }
  static create(e) {
    return new uC(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    let t = this.getPayload();
    return e.length == t.length ? t.map((n, r) => n.setValue(e[r])).some(Boolean) : (super.setValue(e.map(AF)), !0);
  }
};
function AF(e) {
  return (nf(e) ? _s : Zs).create(e);
}
function Ah(e) {
  let t = wn(e);
  return t ? t.constructor : U.arr(e) ? uC : nf(e) ? _s : Zs;
}
var zy = (e, t) => {
  let n = !U.fun(e) || e.prototype && e.prototype.isReactComponent;
  return m.exports.forwardRef((r, o) => {
    let i = m.exports.useRef(null), l = n && m.exports.useCallback((h) => {
      i.current = RF(o, h);
    }, [o]), [s, a] = _F(r, t), u = lC(), c = () => {
      let h = i.current;
      n && !h || (h ? t.applyAnimatedValues(h, s.getValue(!0)) : !1) === !1 && u();
    }, f = new PF(c, a), d = m.exports.useRef();
    Dg(() => (d.current = f, he(a, (h) => Qi(h, f)), () => {
      d.current && (he(d.current.deps, (h) => As(h, d.current)), oe.cancel(d.current.update));
    })), m.exports.useEffect(c, []), sC(() => () => {
      let h = d.current;
      he(h.deps, (v) => As(v, h));
    });
    let g = t.getComponentProps(s.getValue());
    return m.exports.createElement(e, { ...g, ref: l });
  });
}, PF = class {
  constructor(e, t) {
    this.update = e, this.deps = t;
  }
  eventObserved(e) {
    e.type == "change" && oe.write(this.update);
  }
};
function _F(e, t) {
  let n = /* @__PURE__ */ new Set();
  return oc.dependencies = n, e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }), e = new of(e), oc.dependencies = null, [e, n];
}
function RF(e, t) {
  return e && (U.fun(e) ? e(t) : e.current = t), t;
}
var By = Symbol.for("AnimatedComponent"), IF = (e, { applyAnimatedValues: t = () => !1, createAnimatedStyle: n = (o) => new of(o), getComponentProps: r = (o) => o } = {}) => {
  let o = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r }, i = (l) => {
    let s = jy(l) || "Anonymous";
    return U.str(l) ? l = i[l] || (i[l] = zy(l, o)) : l = l[By] || (l[By] = zy(l, o)), l.displayName = `Animated(${s})`, l;
  };
  return _n(e, (l, s) => {
    U.arr(e) && (s = jy(l)), i[s] = i(l);
  }), { animated: i };
}, jy = (e) => U.str(e) ? e : e && U.str(e.displayName) ? e.displayName : U.fun(e) && e.name || null;
function eo(e, ...t) {
  return U.fun(e) ? e(...t) : e;
}
var Ul = (e, t) => e === !0 || !!(t && e && (U.fun(e) ? e(t) : Pt(e).includes(t))), cC = (e, t) => U.obj(e) ? t && e[t] : e, fC = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, OF = (e) => e, Fg = (e, t = OF) => {
  let n = TF;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  let r = {};
  for (let o of n) {
    let i = t(e[o], o);
    U.und(i) || (r[o] = i);
  }
  return r;
}, TF = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], MF = { config: 1, from: 1, to: 1, ref: 1, loop: 1, reset: 1, pause: 1, cancel: 1, reverse: 1, immediate: 1, default: 1, delay: 1, onProps: 1, onStart: 1, onChange: 1, onPause: 1, onResume: 1, onRest: 1, onResolve: 1, items: 1, trail: 1, sort: 1, expires: 1, initial: 1, enter: 1, update: 1, leave: 1, children: 1, onDestroyed: 1, keys: 1, callId: 1, parentId: 1 };
function NF(e) {
  let t = {}, n = 0;
  if (_n(e, (r, o) => {
    MF[o] || (t[o] = r, n++);
  }), n)
    return t;
}
function dC(e) {
  let t = NF(e);
  if (t) {
    let n = { to: t };
    return _n(e, (r, o) => o in t || (n[o] = r)), n;
  }
  return { ...e };
}
function Rs(e) {
  return e = vt(e), U.arr(e) ? e.map(Rs) : nf(e) ? mn.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e;
}
function DF(e) {
  for (let t in e)
    return !0;
  return !1;
}
function Ph(e) {
  return U.fun(e) || U.arr(e) && U.obj(e[0]);
}
function LF(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function FF(e, t) {
  var n;
  t && e.ref !== t && ((n = e.ref) == null || n.delete(e), t.add(e), e.ref = t);
}
var pC = { default: { tension: 170, friction: 26 }, gentle: { tension: 120, friction: 14 }, wobbly: { tension: 180, friction: 12 }, stiff: { tension: 210, friction: 20 }, slow: { tension: 280, friction: 60 }, molasses: { tension: 280, friction: 120 } }, _h = { ...pC.default, mass: 1, damping: 1, easing: fF.linear, clamp: !1 }, zF = class {
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
    Object.assign(this, _h);
  }
};
function BF(e, t, n) {
  n && (n = { ...n }, Hy(n, t), t = { ...n, ...t }), Hy(e, t), Object.assign(e, t);
  for (let l in _h)
    e[l] == null && (e[l] = _h[l]);
  let { mass: r, frequency: o, damping: i } = e;
  return U.und(o) || (o < 0.01 && (o = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / o, 2) * r, e.friction = 4 * Math.PI * i * r / o), e;
}
function Hy(e, t) {
  if (!U.und(t.decay))
    e.duration = void 0;
  else {
    let n = !U.und(t.tension) || !U.und(t.friction);
    (n || !U.und(t.frequency) || !U.und(t.damping) || !U.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
var Vy = [], jF = class {
  constructor() {
    G(this, "changed", !1);
    G(this, "values", Vy);
    G(this, "toValues", null);
    G(this, "fromValues", Vy);
    G(this, "to");
    G(this, "from");
    G(this, "config", new zF());
    G(this, "immediate", !1);
  }
};
function hC(e, { key: t, props: n, defaultProps: r, state: o, actions: i }) {
  return new Promise((l, s) => {
    var h;
    let a, u, c = Ul((h = n.cancel) != null ? h : r == null ? void 0 : r.cancel, t);
    if (c)
      g();
    else {
      U.und(n.pause) || (o.paused = Ul(n.pause, t));
      let v = r == null ? void 0 : r.pause;
      v !== !0 && (v = o.paused || Ul(v, t)), a = eo(n.delay || 0, t), v ? (o.resumeQueue.add(d), i.pause()) : (i.resume(), d());
    }
    function f() {
      o.resumeQueue.add(d), o.timeouts.delete(u), u.cancel(), a = u.time - oe.now();
    }
    function d() {
      a > 0 && !mn.skipAnimation ? (o.delayed = !0, u = oe.setTimeout(g, a), o.pauseQueue.add(f), o.timeouts.add(u)) : g();
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
var zg = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? yi(e.get()) : t.every((n) => n.noop) ? mC(e.get()) : sn(e.get(), t.every((n) => n.finished)), mC = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }), sn = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }), yi = (e) => ({ value: e, cancelled: !0, finished: !1 });
function gC(e, t, n, r) {
  let { callId: o, parentId: i, onRest: l } = t, { asyncTo: s, promise: a } = n;
  return !i && e === s && !t.reset ? a : n.promise = (async () => {
    n.asyncId = o, n.asyncTo = e;
    let u = Fg(t, (w, p) => p === "onRest" ? void 0 : w), c, f, d = new Promise((w, p) => (c = w, f = p)), g = (w) => {
      let p = o <= (n.cancelId || 0) && yi(r) || o !== n.asyncId && sn(r, !1);
      if (p)
        throw w.result = p, f(w), w;
    }, h = (w, p) => {
      let y = new Uy(), x = new Wy();
      return (async () => {
        if (mn.skipAnimation)
          throw Is(n), x.result = sn(r, !1), f(x), x;
        g(y);
        let b = U.obj(w) ? { ...w } : { ...p, to: w };
        b.parentId = o, _n(u, (S, E) => {
          U.und(b[E]) && (b[E] = S);
        });
        let A = await r.start(b);
        return g(y), n.paused && await new Promise((S) => {
          n.resumeQueue.add(S);
        }), A;
      })();
    }, v;
    if (mn.skipAnimation)
      return Is(n), sn(r, !1);
    try {
      let w;
      U.arr(e) ? w = (async (p) => {
        for (let y of p)
          await h(y);
      })(e) : w = Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([w.then(c), d]), v = sn(r.get(), !0, !1);
    } catch (w) {
      if (w instanceof Uy)
        v = w.result;
      else if (w instanceof Wy)
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
function Is(e, t) {
  Hl(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
var Uy = class extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
    G(this, "result");
  }
}, Wy = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
    G(this, "result");
  }
}, Rh = (e) => e instanceof Bg, HF = 1, Bg = class extends tC {
  constructor() {
    super(...arguments);
    G(this, "id", HF++);
    G(this, "_priority", 0);
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
    return mn.to(this, t);
  }
  interpolate(...t) {
    return xF(), mn.to(this, t);
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
    Es(this, { type: "change", parent: this, value: t, idle: n });
  }
  _onPriorityChange(t) {
    this.idle || Jc.sort(this), Es(this, { type: "priority", parent: this, priority: t });
  }
}, bo = Symbol.for("SpringPhase"), vC = 1, Ih = 2, Oh = 4, Rd = (e) => (e[bo] & vC) > 0, fr = (e) => (e[bo] & Ih) > 0, hl = (e) => (e[bo] & Oh) > 0, qy = (e, t) => t ? e[bo] |= Ih | vC : e[bo] &= ~Ih, Qy = (e, t) => t ? e[bo] |= Oh : e[bo] &= ~Oh, VF = class extends Bg {
  constructor(t, n) {
    super();
    G(this, "key");
    G(this, "animation", new jF());
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
    return !(fr(this) || this._state.asyncTo) || hl(this);
  }
  get goal() {
    return vt(this.animation.to);
  }
  get velocity() {
    let t = wn(this);
    return t instanceof Zs ? t.lastVelocity || 0 : t.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return Rd(this);
  }
  get isAnimating() {
    return fr(this);
  }
  get isPaused() {
    return hl(this);
  }
  get isDelayed() {
    return this._state.delayed;
  }
  advance(t) {
    let n = !0, r = !1, o = this.animation, { config: i, toValues: l } = o, s = rf(o.to);
    !s && jt(o.to) && (l = Pt(vt(o.to))), o.values.forEach((c, f) => {
      if (c.done)
        return;
      let d = c.constructor == _s ? 1 : s ? s[f].lastPosition : l[f], g = o.immediate, h = d;
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
            let b = i.restVelocity || x / 10, A = i.clamp ? 0 : i.bounce, S = !U.und(A), E = w == d ? c.v0 > 0 : w < d, $, P = !1, R = 1, I = Math.ceil(t / R);
            for (let T = 0; T < I && ($ = Math.abs(y) > b, !(!$ && (g = Math.abs(d - h) <= x, g))); ++T) {
              S && (P = h == d || h > d == E, P && (y = -y * A, h = d));
              let L = -i.tension * 1e-6 * (h - d), B = -i.friction * 1e-3 * y, z = (L + B) / i.mass;
              y = y + z * R, h = h + y * R;
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
      let c = vt(o.to);
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
    if (fr(this)) {
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
    return U.und(t) ? (r = this.queue || [], this.queue = []) : r = [U.obj(t) ? t : { ...n, to: t }], Promise.all(r.map((o) => this._update(o))).then((o) => zg(this, o));
  }
  stop(t) {
    let { to: n } = this.animation;
    return this._focus(this.get()), Is(this._state, t && this._lastCallId), oe.batchedUpdates(() => this._stop(n, t)), this;
  }
  reset() {
    this._update({ reset: !0 });
  }
  eventObserved(t) {
    t.type == "change" ? this._start() : t.type == "priority" && (this.priority = t.priority + 1);
  }
  _prepareNode(t) {
    let n = this.key || "", { to: r, from: o } = t;
    r = U.obj(r) ? r[n] : r, (r == null || Ph(r)) && (r = void 0), o = U.obj(o) ? o[n] : o, o == null && (o = void 0);
    let i = { to: r, from: o };
    return Rd(this) || (t.reverse && ([r, o] = [o, r]), o = vt(o), U.und(o) ? wn(this) || this._set(r) : this._set(o)), i;
  }
  _update({ ...t }, n) {
    let { key: r, defaultProps: o } = this;
    t.default && Object.assign(o, Fg(t, (s, a) => /^on/.test(a) ? cC(s, r) : s)), Ky(this, t, "onProps"), gl(this, "onProps", t, this);
    let i = this._prepareNode(t);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    let l = this._state;
    return hC(++this._lastCallId, { key: r, props: t, defaultProps: o, state: l, actions: { pause: () => {
      hl(this) || (Qy(this, !0), kl(l.pauseQueue), gl(this, "onPause", sn(this, ml(this, this.animation.to)), this));
    }, resume: () => {
      hl(this) && (Qy(this, !1), fr(this) && this._resume(), kl(l.resumeQueue), gl(this, "onResume", sn(this, ml(this, this.animation.to)), this));
    }, start: this._merge.bind(this, i) } }).then((s) => {
      if (t.loop && s.finished && !(n && s.noop)) {
        let a = yC(t);
        if (a)
          return this._update(a, !0);
      }
      return s;
    });
  }
  _merge(t, n, r) {
    if (n.cancel)
      return this.stop(!0), r(yi(this));
    let o = !U.und(t.to), i = !U.und(t.from);
    if (o || i)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return r(yi(this));
    let { key: l, defaultProps: s, animation: a } = this, { to: u, from: c } = a, { to: f = u, from: d = c } = t;
    i && !o && (!n.default || U.und(f)) && (f = d), n.reverse && ([f, d] = [d, f]);
    let g = !Fn(d, c);
    g && (a.from = d), d = vt(d);
    let h = !Fn(f, u);
    h && this._focus(f);
    let v = Ph(n.to), { config: w } = a, { decay: p, velocity: y } = w;
    (o || i) && (w.velocity = 0), n.config && !v && BF(w, eo(n.config, l), n.config !== s.config ? eo(s.config, l) : void 0);
    let x = wn(this);
    if (!x || U.und(f))
      return r(sn(this, !0));
    let b = U.und(n.reset) ? i && !n.default : !U.und(d) && Ul(n.reset, l), A = b ? d : this.get(), S = Rs(f), E = U.num(S) || U.arr(S) || nf(S), $ = !v && (!E || Ul(s.immediate || n.immediate, l));
    if (h) {
      let T = Ah(f);
      if (T !== x.constructor)
        if ($)
          x = this._set(S);
        else
          throw Error(`Cannot animate between ${x.constructor.name} and ${T.name}, as the "to" prop suggests`);
    }
    let P = x.constructor, R = jt(f), I = !1;
    if (!R) {
      let T = b || !Rd(this) && g;
      (h || T) && (I = Fn(Rs(A), S), R = !I), (!Fn(a.immediate, $) && !$ || !Fn(w.decay, p) || !Fn(w.velocity, y)) && (R = !0);
    }
    if (I && fr(this) && (a.changed && !b ? R = !0 : R || this._stop(u)), !v && ((R || jt(u)) && (a.values = x.getPayload(), a.toValues = jt(f) ? null : P == _s ? [1] : Pt(S)), a.immediate != $ && (a.immediate = $, !$ && !b && this._set(u)), R)) {
      let { onRest: T } = a;
      he(WF, (B) => Ky(this, n, B));
      let L = sn(this, ml(this, u));
      kl(this._pendingCalls, L), this._pendingCalls.add(r), a.changed && oe.batchedUpdates(() => {
        var B;
        a.changed = !b, T == null || T(L, this), b ? eo(s.onRest, L) : (B = a.onStart) == null || B.call(a, L, this);
      });
    }
    b && this._set(A), v ? r(gC(n.to, n, this._state, this)) : R ? this._start() : fr(this) && !h ? this._pendingCalls.add(r) : r(mC(A));
  }
  _focus(t) {
    let n = this.animation;
    t !== n.to && (Dy(this) && this._detach(), n.to = t, Dy(this) && this._attach());
  }
  _attach() {
    let t = 0, { to: n } = this.animation;
    jt(n) && (Qi(n, this), Rh(n) && (t = n.priority + 1)), this.priority = t;
  }
  _detach() {
    let { to: t } = this.animation;
    jt(t) && As(t, this);
  }
  _set(t, n = !0) {
    let r = vt(t);
    if (!U.und(r)) {
      let o = wn(this);
      if (!o || !Fn(r, o.getValue())) {
        let i = Ah(r);
        !o || o.constructor != i ? Lg(this, i.create(r)) : o.setValue(r), o && oe.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return wn(this);
  }
  _onStart() {
    let t = this.animation;
    t.changed || (t.changed = !0, gl(this, "onStart", sn(this, ml(this, t.to)), this));
  }
  _onChange(t, n) {
    n || (this._onStart(), eo(this.animation.onChange, t, this)), eo(this.defaultProps.onChange, t, this), super._onChange(t, n);
  }
  _start() {
    let t = this.animation;
    wn(this).reset(vt(t.to)), t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)), fr(this) || (qy(this, !0), hl(this) || this._resume());
  }
  _resume() {
    mn.skipAnimation ? this.finish() : Jc.start(this);
  }
  _stop(t, n) {
    if (fr(this)) {
      qy(this, !1);
      let r = this.animation;
      he(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Es(this, { type: "idle", parent: this });
      let o = n ? yi(this.get()) : sn(this.get(), ml(this, t != null ? t : r.to));
      kl(this._pendingCalls, o), r.changed && (r.changed = !1, gl(this, "onRest", o, this));
    }
  }
};
function ml(e, t) {
  let n = Rs(t), r = Rs(e.get());
  return Fn(r, n);
}
function yC(e, t = e.loop, n = e.to) {
  let r = eo(t);
  if (r) {
    let o = r !== !0 && dC(r), i = (o || e).reverse, l = !o || o.reset;
    return Os({ ...e, loop: t, default: !1, pause: void 0, to: !i || Ph(n) ? n : void 0, from: l ? e.from : void 0, reset: l, ...o });
  }
}
function Os(e) {
  let { to: t, from: n } = e = dC(e), r = /* @__PURE__ */ new Set();
  return U.obj(t) && Gy(t, r), U.obj(n) && Gy(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function UF(e) {
  let t = Os(e);
  return U.und(t.default) && (t.default = Fg(t)), t;
}
function Gy(e, t) {
  _n(e, (n, r) => n != null && t.add(r));
}
var WF = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function Ky(e, t, n) {
  e.animation[n] = t[n] !== fC(t, n) ? cC(t[n], e.key) : void 0;
}
function gl(e, t, ...n) {
  var r, o, i, l;
  (o = (r = e.animation)[t]) == null || o.call(r, ...n), (l = (i = e.defaultProps)[t]) == null || l.call(i, ...n);
}
var qF = ["onStart", "onChange", "onRest"], QF = 1, GF = class {
  constructor(e, t) {
    G(this, "id", QF++);
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
    return e && this.queue.push(Os(e)), this;
  }
  start(e) {
    let { queue: t } = this;
    return e ? t = Pt(e).map(Os) : this.queue = [], this._flush ? this._flush(this, t) : (kC(this, t), Th(this, t));
  }
  stop(e, t) {
    if (e !== !!e && (t = e), t) {
      let n = this.springs;
      he(Pt(t), (r) => n[r].stop(!!e));
    } else
      Is(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
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
    _n(this.springs, e);
  }
  _onFrame() {
    let { onStart: e, onChange: t, onRest: n } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
    (r && !this._started || o && !this._started) && (this._started = !0, Hl(e, ([s, a]) => {
      a.value = this.get(), s(a, this, this._item);
    }));
    let i = !r && this._started, l = o || i && n.size ? this.get() : null;
    o && t.size && Hl(t, ([s, a]) => {
      a.value = l, s(a, this, this._item);
    }), i && (this._started = !1, Hl(n, ([s, a]) => {
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
function Th(e, t) {
  return Promise.all(t.map((n) => xC(e, n))).then((n) => zg(e, n));
}
async function xC(e, t, n) {
  let { keys: r, to: o, from: i, loop: l, onRest: s, onResolve: a } = t, u = U.obj(t.default) && t.default;
  l && (t.loop = !1), o === !1 && (t.to = null), i === !1 && (t.from = null);
  let c = U.arr(o) || U.fun(o) ? o : void 0;
  c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : he(qF, (v) => {
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
  t.pause === !f.paused ? (f.paused = t.pause, kl(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
  let d = (r || Object.keys(e.springs)).map((v) => e.springs[v].start(t)), g = t.cancel === !0 || fC(t, "cancel") === !0;
  (c || g && f.asyncId) && d.push(hC(++e._lastAsyncId, { props: t, state: f, actions: { pause: $h, resume: $h, start(v, w) {
    g ? (Is(f, e._lastAsyncId), w(yi(e))) : (v.onRest = s, w(gC(c, v, f, e)));
  } } })), f.paused && await new Promise((v) => {
    f.resumeQueue.add(v);
  });
  let h = zg(e, await Promise.all(d));
  if (l && h.finished && !(n && h.noop)) {
    let v = yC(t, l, o);
    if (v)
      return kC(e, [v]), xC(e, v, !0);
  }
  return a && oe.batchedUpdates(() => a(h, e, e.item)), h;
}
function Yy(e, t) {
  let n = { ...e.springs };
  return t && he(Pt(t), (r) => {
    U.und(r.keys) && (r = Os(r)), U.obj(r.to) || (r = { ...r, to: void 0 }), SC(n, r, (o) => bC(o));
  }), wC(e, n), n;
}
function wC(e, t) {
  _n(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, Qi(n, e));
  });
}
function bC(e, t) {
  let n = new VF();
  return n.key = e, t && Qi(n, t), n;
}
function SC(e, t, n) {
  t.keys && he(t.keys, (r) => {
    (e[r] || (e[r] = n(r)))._prepareNode(t);
  });
}
function kC(e, t) {
  he(t, (n) => {
    SC(e.springs, n, (r) => bC(r, e));
  });
}
var lf = ({ children: e, ...t }) => {
  let n = m.exports.useContext(ic), r = t.pause || !!n.pause, o = t.immediate || !!n.immediate;
  t = kF(() => ({ pause: r, immediate: o }), [r, o]);
  let { Provider: i } = ic;
  return m.exports.createElement(i, { value: t }, e);
}, ic = KF(lf, {});
lf.Provider = ic.Provider;
lf.Consumer = ic.Consumer;
function KF(e, t) {
  return Object.assign(e, m.exports.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
var YF = () => {
  let e = [], t = function(r) {
    bF();
    let o = [];
    return he(e, (i, l) => {
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
        let s = this._getProps(r, i, l);
        s && o.push(i.start(s));
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
function XF(e, t, n) {
  let r = U.fun(t) && t;
  r && !n && (n = []);
  let o = m.exports.useMemo(() => r || arguments.length == 3 ? YF() : void 0, []), i = m.exports.useRef(0), l = lC(), s = m.exports.useMemo(() => ({ ctrls: [], queue: [], flush(p, y) {
    let x = Yy(p, y);
    return i.current > 0 && !s.queue.length && !Object.keys(x).some((b) => !p.springs[b]) ? Th(p, y) : new Promise((b) => {
      wC(p, x), s.queue.push(() => {
        b(Th(p, y));
      }), l();
    });
  } }), []), a = m.exports.useRef([...s.ctrls]), u = [], c = Fy(e) || 0;
  m.exports.useMemo(() => {
    he(a.current.slice(e, c), (p) => {
      LF(p, o), p.stop(!0);
    }), a.current.length = e, f(c, e);
  }, [e]), m.exports.useMemo(() => {
    f(0, Math.min(c, e));
  }, n);
  function f(p, y) {
    for (let x = p; x < y; x++) {
      let b = a.current[x] || (a.current[x] = new GF(null, s.flush)), A = r ? r(x, b) : t[x];
      A && (u[x] = UF(A));
    }
  }
  let d = a.current.map((p, y) => Yy(p, u[y])), g = m.exports.useContext(lf), h = Fy(g), v = g !== h && DF(g);
  Dg(() => {
    i.current++, s.ctrls = a.current;
    let { queue: p } = s;
    p.length && (s.queue = [], he(p, (y) => y())), he(a.current, (y, x) => {
      o == null || o.add(y), v && y.start({ default: g });
      let b = u[x];
      b && (FF(y, b.ref), y.ref ? y.queue.push(b) : y.start(b));
    });
  }), sC(() => () => {
    he(s.ctrls, (p) => p.stop(!0));
  });
  let w = d.map((p) => ({ ...p }));
  return o ? [w, o] : w;
}
function ZF(e, t) {
  let n = U.fun(e), [[r], o] = XF(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, o] : r;
}
var JF = class extends Bg {
  constructor(t, n) {
    super();
    G(this, "key");
    G(this, "idle", !0);
    G(this, "calc");
    G(this, "_active", /* @__PURE__ */ new Set());
    this.source = t, this.calc = $s(...n);
    let r = this._get(), o = Ah(r);
    Lg(this, o.create(r));
  }
  advance(t) {
    let n = this._get(), r = this.get();
    Fn(n, r) || (wn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && Xy(this._active) && Id(this);
  }
  _get() {
    let t = U.arr(this.source) ? this.source.map(vt) : Pt(vt(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !Xy(this._active) && (this.idle = !1, he(rf(this), (t) => {
      t.done = !1;
    }), mn.skipAnimation ? (oe.batchedUpdates(() => this.advance()), Id(this)) : Jc.start(this));
  }
  _attach() {
    let t = 1;
    he(Pt(this.source), (n) => {
      jt(n) && Qi(n, this), Rh(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1));
    }), this.priority = t, this._start();
  }
  _detach() {
    he(Pt(this.source), (t) => {
      jt(t) && As(t, this);
    }), this._active.clear(), Id(this);
  }
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = Pt(this.source).reduce((n, r) => Math.max(n, (Rh(r) ? r.priority : 0) + 1), 0));
  }
};
function ez(e) {
  return e.idle !== !1;
}
function Xy(e) {
  return !e.size || Array.from(e).every(ez);
}
function Id(e) {
  e.idle || (e.idle = !0, he(rf(e), (t) => {
    t.done = !0;
  }), Es(e, { type: "idle", parent: e }));
}
mn.assign({ createStringInterpolator: oC, to: (e, t) => new JF(e, t) });
var CC = /^--/;
function tz(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !CC.test(e) && !(Wl.hasOwnProperty(e) && Wl[e]) ? t + "px" : ("" + t).trim();
}
var Zy = {};
function nz(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  let n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: r, children: o, scrollTop: i, scrollLeft: l, viewBox: s, ...a } = t, u = Object.values(a), c = Object.keys(a).map((f) => n || e.hasAttribute(f) ? f : Zy[f] || (Zy[f] = f.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  o !== void 0 && (e.textContent = o);
  for (let f in r)
    if (r.hasOwnProperty(f)) {
      let d = tz(f, r[f]);
      CC.test(f) ? e.style.setProperty(f, d) : e.style[f] = d;
    }
  c.forEach((f, d) => {
    e.setAttribute(f, u[d]);
  }), i !== void 0 && (e.scrollTop = i), l !== void 0 && (e.scrollLeft = l), s !== void 0 && e.setAttribute("viewBox", s);
}
var Wl = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, rz = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), oz = ["Webkit", "Ms", "Moz", "O"];
Wl = Object.keys(Wl).reduce((e, t) => (oz.forEach((n) => e[rz(n, t)] = e[t]), e), Wl);
var iz = /^(matrix|translate|scale|rotate|skew)/, lz = /^(translate)/, sz = /^(rotate|skew)/, Od = (e, t) => U.num(e) && e !== 0 ? e + t : e, uu = (e, t) => U.arr(e) ? e.every((n) => uu(n, t)) : U.num(e) ? e === t : parseFloat(e) === t, az = class extends of {
  constructor({ x: e, y: t, z: n, ...r }) {
    let o = [], i = [];
    (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((l) => [`translate3d(${l.map((s) => Od(s, "px")).join(",")})`, uu(l, 0)])), _n(r, (l, s) => {
      if (s === "transform")
        o.push([l || ""]), i.push((a) => [a, a === ""]);
      else if (iz.test(s)) {
        if (delete r[s], U.und(l))
          return;
        let a = lz.test(s) ? "px" : sz.test(s) ? "deg" : "";
        o.push(Pt(l)), i.push(s === "rotate3d" ? ([u, c, f, d]) => [`rotate3d(${u},${c},${f},${Od(d, a)})`, uu(d, 0)] : (u) => [`${s}(${u.map((c) => Od(c, a)).join(",")})`, uu(u, s.startsWith("scale") ? 1 : 0)]);
      }
    }), o.length && (r.transform = new uz(o, i)), super(r);
  }
}, uz = class extends tC {
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
      let i = vt(r[0]), [l, s] = this.transforms[o](U.arr(i) ? i : r.map(vt));
      t += " " + l, n = n && s;
    }), n ? "none" : t;
  }
  observerAdded(t) {
    t == 1 && he(this.inputs, (n) => he(n, (r) => jt(r) && Qi(r, this)));
  }
  observerRemoved(t) {
    t == 0 && he(this.inputs, (n) => he(n, (r) => jt(r) && As(r, this)));
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), Es(this, t);
  }
}, cz = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
mn.assign({ batchedUpdates: Kt.exports.unstable_batchedUpdates, createStringInterpolator: oC, colors: ZL });
var fz = IF(cz, { applyAnimatedValues: nz, createAnimatedStyle: (e) => new az(e), getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n }), Jy = fz.animated;
const dz = ({
  message: e
}) => /* @__PURE__ */ ce("div", {
  className: _i("flex flex-col gap-2 p-4 text-sm text-mayumi-gray-1100", {
    "bg-mayumi-gray-200": e.role === "user",
    "bg-mayumi-gray-300": e.role === "assistant"
  }),
  children: [/* @__PURE__ */ D("div", {
    className: "flex-0 text-mayumi-gray-1200",
    children: e.role === "user" ? "You:" : "Assistant:"
  }), /* @__PURE__ */ D("div", {
    className: "flex-1",
    children: /* @__PURE__ */ D(H2, {
      content: e.text
    })
  })]
}), pz = () => {
  const {
    toggleHistoryOpen: e,
    historyOpen: t
  } = Vn(), {
    conventions: n
  } = yo(), [r, o] = m.exports.useState(null), i = ZF({
    h: t ? 600 : 0,
    w: t ? 500 : 150,
    opacity: t ? 1 : 0,
    config: pC.default
  }), l = Object.keys(n), s = r || l[0], a = s ? n[s] : [];
  return /* @__PURE__ */ ce(Jy.div, {
    style: {
      opacity: i.opacity
    },
    className: "aiflow-chat leading-1em fixed right-0 bottom-0 z-40 m-5 flex max-w-[500px] flex-col overflow-hidden rounded-lg border border-mayumi-gray-700 bg-mayumi-gray-200 font-sans shadow-lg",
    children: [/* @__PURE__ */ ce("div", {
      onClick: () => {
        e();
      },
      className: _i("flex-0 flex cursor-pointer select-none items-center justify-between border-mayumi-gray-700 p-3 text-mayumi-gray-1100 hover:bg-mayumi-gray-400", {
        "border-b-0": !t,
        "border-b": t
      }),
      children: [/* @__PURE__ */ D("h2", {
        className: "rounded-md bg-transparent px-3 py-1 text-sm font-bold uppercase",
        children: "History"
      }), t && /* @__PURE__ */ D("kbd", {
        className: "flex h-5 items-center justify-center rounded bg-mayumi-gray-300 px-2 font-sans text-xs uppercase text-mayumi-gray-1100",
        children: "esc"
      })]
    }), /* @__PURE__ */ ce(Jy.div, {
      style: {
        height: i.h,
        width: i.w
      },
      className: "flex",
      children: [/* @__PURE__ */ D("div", {
        className: "grid min-w-[150px] grid-flow-row auto-rows-max border-r border-mayumi-gray-700 p-2 font-semibold",
        children: l.map((u) => /* @__PURE__ */ D("div", {
          className: _i("flex items-center rounded-md py-2 px-3 text-sm hover:bg-mayumi-blue-400 hover:text-mayumi-gray-1200", {
            "bg-mayumi-blue-400 text-mayumi-gray-1200": u === s,
            "bg-mayumi-gray-200 text-mayumi-gray-1100": u !== s
          }),
          onClick: () => {
            o(u);
          },
          children: /* @__PURE__ */ D("a", {
            className: "cursor-pointer uppercase",
            children: u
          })
        }, u))
      }), /* @__PURE__ */ D("div", {
        className: "aiflow-messages flex-1 overflow-auto bg-mayumi-gray-300",
        children: a.map((u, c) => /* @__PURE__ */ D(dz, {
          message: u
        }, c))
      })]
    })]
  });
}, hz = () => /* @__PURE__ */ ce("div", {
  className: "dark",
  children: [/* @__PURE__ */ D(ML, {}), /* @__PURE__ */ D(pz, {})]
});
var $C, ex = Kt.exports;
$C = ex.createRoot, ex.hydrateRoot;
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
  n.setAttribute("rel", "stylesheet"), n.setAttribute("href", ot.runtime.getURL("dist/contentScripts/style.css")), r.appendChild(n), r.appendChild(t), document.body.appendChild(e), $C(t).render(/* @__PURE__ */ D(hz, {}));
})();
