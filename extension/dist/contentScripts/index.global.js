var _2 = Object.defineProperty;
var R2 = (e, t, n) => t in e ? _2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Q = (e, t, n) => (R2(e, typeof t != "symbol" ? t + "" : t, n), n);
function T2(e, t) {
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
var I2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Oh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nx = { exports: {} };
(function(e, t) {
  (function(n, r) {
    r(e);
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : I2, function(n) {
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
          constructor(P, _ = void 0) {
            super(_), this.createItem = P;
          }
          get(P) {
            return this.has(P) || this.set(P, this.createItem(P)), super.get(P);
          }
        }
        const u = ($) => $ && typeof $ == "object" && typeof $.then == "function", c = ($, P) => (..._) => {
          l.runtime.lastError ? $.reject(new Error(l.runtime.lastError.message)) : P.singleCallbackArg || _.length <= 1 && P.singleCallbackArg !== !1 ? $.resolve(_[0]) : $.resolve(_);
        }, f = ($) => $ == 1 ? "argument" : "arguments", d = ($, P) => function(T, ...M) {
          if (M.length < P.minArgs)
            throw new Error(`Expected at least ${P.minArgs} ${f(P.minArgs)} for ${$}(), got ${M.length}`);
          if (M.length > P.maxArgs)
            throw new Error(`Expected at most ${P.maxArgs} ${f(P.maxArgs)} for ${$}(), got ${M.length}`);
          return new Promise((L, B) => {
            if (P.fallbackToNoCallback)
              try {
                T[$](...M, c({
                  resolve: L,
                  reject: B
                }, P));
              } catch (z) {
                console.warn(`${$} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, z), T[$](...M), P.fallbackToNoCallback = !1, P.noCallback = !0, L();
              }
            else
              P.noCallback ? (T[$](...M), L()) : T[$](...M, c({
                resolve: L,
                reject: B
              }, P));
          });
        }, g = ($, P, _) => new Proxy(P, {
          apply(T, M, L) {
            return _.call(M, $, ...L);
          }
        });
        let m = Function.call.bind(Object.prototype.hasOwnProperty);
        const v = ($, P = {}, _ = {}) => {
          let T = /* @__PURE__ */ Object.create(null), M = {
            has(B, z) {
              return z in $ || z in T;
            },
            get(B, z, R) {
              if (z in T)
                return T[z];
              if (!(z in $))
                return;
              let H = $[z];
              if (typeof H == "function")
                if (typeof P[z] == "function")
                  H = g($, $[z], P[z]);
                else if (m(_, z)) {
                  let N = d(z, _[z]);
                  H = g($, $[z], N);
                } else
                  H = H.bind($);
              else if (typeof H == "object" && H !== null && (m(P, z) || m(_, z)))
                H = v(H, P[z], _[z]);
              else if (m(_, "*"))
                H = v(H, P[z], _["*"]);
              else
                return Object.defineProperty(T, z, {
                  configurable: !0,
                  enumerable: !0,
                  get() {
                    return $[z];
                  },
                  set(N) {
                    $[z] = N;
                  }
                }), H;
              return T[z] = H, H;
            },
            set(B, z, R, H) {
              return z in T ? T[z] = R : $[z] = R, !0;
            },
            defineProperty(B, z, R) {
              return Reflect.defineProperty(T, z, R);
            },
            deleteProperty(B, z) {
              return Reflect.deleteProperty(T, z);
            }
          }, L = Object.create($);
          return new Proxy(L, M);
        }, w = ($) => ({
          addListener(P, _, ...T) {
            P.addListener($.get(_), ...T);
          },
          hasListener(P, _) {
            return P.hasListener($.get(_));
          },
          removeListener(P, _) {
            P.removeListener($.get(_));
          }
        }), p = new s(($) => typeof $ != "function" ? $ : function(_) {
          const T = v(
            _,
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
        const x = new s(($) => typeof $ != "function" ? $ : function(_, T, M) {
          let L = !1, B, z = new Promise((I) => {
            B = function(O) {
              y || (console.warn(o, new Error().stack), y = !0), L = !0, I(O);
            };
          }), R;
          try {
            R = $(_, T, B);
          } catch (I) {
            R = Promise.reject(I);
          }
          const H = R !== !0 && u(R);
          if (R !== !0 && !H && !L)
            return !1;
          const N = (I) => {
            I.then((O) => {
              M(O);
            }, (O) => {
              let k;
              O && (O instanceof Error || typeof O.message == "string") ? k = O.message : k = "An unexpected error occurred", M({
                __mozWebExtensionPolyfillReject__: !0,
                message: k
              });
            }).catch((O) => {
              console.error("Failed to send onMessage rejected reply", O);
            });
          };
          return N(H ? R : z), !0;
        }), b = ({
          reject: $,
          resolve: P
        }, _) => {
          l.runtime.lastError ? l.runtime.lastError.message === r ? P() : $(new Error(l.runtime.lastError.message)) : _ && _.__mozWebExtensionPolyfillReject__ ? $(new Error(_.message)) : P(_);
        }, A = ($, P, _, ...T) => {
          if (T.length < P.minArgs)
            throw new Error(`Expected at least ${P.minArgs} ${f(P.minArgs)} for ${$}(), got ${T.length}`);
          if (T.length > P.maxArgs)
            throw new Error(`Expected at most ${P.maxArgs} ${f(P.maxArgs)} for ${$}(), got ${T.length}`);
          return new Promise((M, L) => {
            const B = b.bind(null, {
              resolve: M,
              reject: L
            });
            T.push(B), _.sendMessage(...T);
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
})(nx);
const it = nx.exports;
var Yt = { exports: {} }, Mt = {}, h = { exports: {} }, fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oa = Symbol.for("react.element"), O2 = Symbol.for("react.portal"), M2 = Symbol.for("react.fragment"), N2 = Symbol.for("react.strict_mode"), D2 = Symbol.for("react.profiler"), L2 = Symbol.for("react.provider"), F2 = Symbol.for("react.context"), z2 = Symbol.for("react.forward_ref"), B2 = Symbol.for("react.suspense"), j2 = Symbol.for("react.memo"), H2 = Symbol.for("react.lazy"), Bg = Symbol.iterator;
function V2(e) {
  return e === null || typeof e != "object" ? null : (e = Bg && e[Bg] || e["@@iterator"], typeof e == "function" ? e : null);
}
var rx = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ox = Object.assign, ix = {};
function Ni(e, t, n) {
  this.props = e, this.context = t, this.refs = ix, this.updater = n || rx;
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
function lx() {
}
lx.prototype = Ni.prototype;
function Mh(e, t, n) {
  this.props = e, this.context = t, this.refs = ix, this.updater = n || rx;
}
var Nh = Mh.prototype = new lx();
Nh.constructor = Mh;
ox(Nh, Ni.prototype);
Nh.isPureReactComponent = !0;
var jg = Array.isArray, ax = Object.prototype.hasOwnProperty, Dh = { current: null }, sx = { key: !0, ref: !0, __self: !0, __source: !0 };
function ux(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      ax.call(t, r) && !sx.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: Oa, type: e, key: i, ref: l, props: o, _owner: Dh.current };
}
function U2(e, t) {
  return { $$typeof: Oa, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Lh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Oa;
}
function W2(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Hg = /\/+/g;
function cf(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? W2("" + e.key) : t.toString(36);
}
function Bs(e, t, n, r, o) {
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
          case Oa:
          case O2:
            l = !0;
        }
    }
  if (l)
    return l = e, o = o(l), e = r === "" ? "." + cf(l, 0) : r, jg(o) ? (n = "", e != null && (n = e.replace(Hg, "$&/") + "/"), Bs(o, t, n, "", function(u) {
      return u;
    })) : o != null && (Lh(o) && (o = U2(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(Hg, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", jg(e))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + cf(i, a);
      l += Bs(i, t, n, s, o);
    }
  else if (s = V2(e), typeof s == "function")
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      i = i.value, s = r + cf(i, a++), l += Bs(i, t, n, s, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function es(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Bs(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function q2(e) {
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
var ht = { current: null }, js = { transition: null }, G2 = { ReactCurrentDispatcher: ht, ReactCurrentBatchConfig: js, ReactCurrentOwner: Dh };
fe.Children = { map: es, forEach: function(e, t, n) {
  es(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return es(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return es(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Lh(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
fe.Component = Ni;
fe.Fragment = M2;
fe.Profiler = D2;
fe.PureComponent = Mh;
fe.StrictMode = N2;
fe.Suspense = B2;
fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G2;
fe.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ox({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Dh.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var a = e.type.defaultProps;
    for (s in t)
      ax.call(t, s) && !sx.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
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
  return { $$typeof: Oa, type: e.type, key: o, ref: i, props: r, _owner: l };
};
fe.createContext = function(e) {
  return e = { $$typeof: F2, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: L2, _context: e }, e.Consumer = e;
};
fe.createElement = ux;
fe.createFactory = function(e) {
  var t = ux.bind(null, e);
  return t.type = e, t;
};
fe.createRef = function() {
  return { current: null };
};
fe.forwardRef = function(e) {
  return { $$typeof: z2, render: e };
};
fe.isValidElement = Lh;
fe.lazy = function(e) {
  return { $$typeof: H2, _payload: { _status: -1, _result: e }, _init: q2 };
};
fe.memo = function(e, t) {
  return { $$typeof: j2, type: e, compare: t === void 0 ? null : t };
};
fe.startTransition = function(e) {
  var t = js.transition;
  js.transition = {};
  try {
    e();
  } finally {
    js.transition = t;
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
})(h);
const He = /* @__PURE__ */ Oh(h.exports), cx = /* @__PURE__ */ T2({
  __proto__: null,
  default: He
}, [h.exports]);
var fx = { exports: {} }, dx = {};
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
  function t(N, I) {
    var O = N.length;
    N.push(I);
    e:
      for (; 0 < O; ) {
        var k = O - 1 >>> 1, C = N[k];
        if (0 < o(C, I))
          N[k] = I, N[O] = C, O = k;
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
    var I = N[0], O = N.pop();
    if (O !== I) {
      N[0] = O;
      e:
        for (var k = 0, C = N.length, J = C >>> 1; k < J; ) {
          var ne = 2 * (k + 1) - 1, ae = N[ne], ee = ne + 1, G = N[ee];
          if (0 > o(ae, O))
            ee < C && 0 > o(G, ae) ? (N[k] = G, N[ee] = O, k = ee) : (N[k] = ae, N[ne] = O, k = ne);
          else if (ee < C && 0 > o(G, O))
            N[k] = G, N[ee] = O, k = ee;
          else
            break e;
        }
    }
    return I;
  }
  function o(N, I) {
    var O = N.sortIndex - I.sortIndex;
    return O !== 0 ? O : N.id - I.id;
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
  var s = [], u = [], c = 1, f = null, d = 3, g = !1, m = !1, v = !1, w = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(N) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null)
        r(u);
      else if (I.startTime <= N)
        r(u), I.sortIndex = I.expirationTime, t(s, I);
      else
        break;
      I = n(u);
    }
  }
  function b(N) {
    if (v = !1, x(N), !m)
      if (n(s) !== null)
        m = !0, R(A);
      else {
        var I = n(u);
        I !== null && H(b, I.startTime - N);
      }
  }
  function A(N, I) {
    m = !1, v && (v = !1, p($), $ = -1), g = !0;
    var O = d;
    try {
      for (x(I), f = n(s); f !== null && (!(f.expirationTime > I) || N && !T()); ) {
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
  var S = !1, E = null, $ = -1, P = 5, _ = -1;
  function T() {
    return !(e.unstable_now() - _ < P);
  }
  function M() {
    if (E !== null) {
      var N = e.unstable_now();
      _ = N;
      var I = !0;
      try {
        I = E(!0, N);
      } finally {
        I ? L() : (S = !1, E = null);
      }
    } else
      S = !1;
  }
  var L;
  if (typeof y == "function")
    L = function() {
      y(M);
    };
  else if (typeof MessageChannel < "u") {
    var B = new MessageChannel(), z = B.port2;
    B.port1.onmessage = M, L = function() {
      z.postMessage(null);
    };
  } else
    L = function() {
      w(M, 0);
    };
  function R(N) {
    E = N, S || (S = !0, L());
  }
  function H(N, I) {
    $ = w(function() {
      N(e.unstable_now());
    }, I);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    m || g || (m = !0, R(A));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(N) {
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
      return N();
    } finally {
      d = O;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, I) {
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
    var O = d;
    d = N;
    try {
      return I();
    } finally {
      d = O;
    }
  }, e.unstable_scheduleCallback = function(N, I, O) {
    var k = e.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? k + O : k) : O = k, N) {
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
    return C = O + C, N = { id: c++, callback: I, priorityLevel: N, startTime: O, expirationTime: C, sortIndex: -1 }, O > k ? (N.sortIndex = O, t(u, N), n(s) === null && N === n(u) && (v ? (p($), $ = -1) : v = !0, H(b, O - k))) : (N.sortIndex = C, t(s, N), m || g || (m = !0, R(A))), N;
  }, e.unstable_shouldYield = T, e.unstable_wrapCallback = function(N) {
    var I = d;
    return function() {
      var O = d;
      d = I;
      try {
        return N.apply(this, arguments);
      } finally {
        d = O;
      }
    };
  };
})(dx);
(function(e) {
  e.exports = dx;
})(fx);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var px = h.exports, Ot = fx.exports;
function j(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var hx = /* @__PURE__ */ new Set(), ql = {};
function Co(e, t) {
  bi(e, t), bi(e + "Capture", t);
}
function bi(e, t) {
  for (ql[e] = t, e = 0; e < t.length; e++)
    hx.add(t[e]);
}
var Wn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Od = Object.prototype.hasOwnProperty, Q2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Vg = {}, Ug = {};
function K2(e) {
  return Od.call(Ug, e) ? !0 : Od.call(Vg, e) ? !1 : Q2.test(e) ? Ug[e] = !0 : (Vg[e] = !0, !1);
}
function Y2(e, t, n, r) {
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
function X2(e, t, n, r) {
  if (t === null || typeof t > "u" || Y2(e, t, n, r))
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
var Fh = /[\-:]([a-z])/g;
function zh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Fh,
    zh
  );
  et[t] = new mt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Fh, zh);
  et[t] = new mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Fh, zh);
  et[t] = new mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  et[e] = new mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
et.xlinkHref = new mt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  et[e] = new mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Bh(e, t, n, r) {
  var o = et.hasOwnProperty(t) ? et[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (X2(t, n, o, r) && (n = null), r || o === null ? K2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Zn = px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ts = Symbol.for("react.element"), Wo = Symbol.for("react.portal"), qo = Symbol.for("react.fragment"), jh = Symbol.for("react.strict_mode"), Md = Symbol.for("react.profiler"), mx = Symbol.for("react.provider"), gx = Symbol.for("react.context"), Hh = Symbol.for("react.forward_ref"), Nd = Symbol.for("react.suspense"), Dd = Symbol.for("react.suspense_list"), Vh = Symbol.for("react.memo"), pr = Symbol.for("react.lazy"), vx = Symbol.for("react.offscreen"), Wg = Symbol.iterator;
function Xi(e) {
  return e === null || typeof e != "object" ? null : (e = Wg && e[Wg] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Me = Object.assign, ff;
function vl(e) {
  if (ff === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ff = t && t[1] || "";
    }
  return `
` + ff + e;
}
var df = !1;
function pf(e, t) {
  if (!e || df)
    return "";
  df = !0;
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
    df = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? vl(e) : "";
}
function Z2(e) {
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
      return e = pf(e.type, !1), e;
    case 11:
      return e = pf(e.type.render, !1), e;
    case 1:
      return e = pf(e.type, !0), e;
    default:
      return "";
  }
}
function Ld(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case qo:
      return "Fragment";
    case Wo:
      return "Portal";
    case Md:
      return "Profiler";
    case jh:
      return "StrictMode";
    case Nd:
      return "Suspense";
    case Dd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case gx:
        return (e.displayName || "Context") + ".Consumer";
      case mx:
        return (e._context.displayName || "Context") + ".Provider";
      case Hh:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Vh:
        return t = e.displayName || null, t !== null ? t : Ld(e.type) || "Memo";
      case pr:
        t = e._payload, e = e._init;
        try {
          return Ld(e(t));
        } catch {
        }
    }
  return null;
}
function J2(e) {
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
      return Ld(t);
    case 8:
      return t === jh ? "StrictMode" : "Mode";
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
function yx(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function e$(e) {
  var t = yx(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function ns(e) {
  e._valueTracker || (e._valueTracker = e$(e));
}
function xx(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = yx(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function uu(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Fd(e, t) {
  var n = t.checked;
  return Me({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n != null ? n : e._wrapperState.initialChecked });
}
function qg(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Mr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function wx(e, t) {
  t = t.checked, t != null && Bh(e, "checked", t, !1);
}
function zd(e, t) {
  wx(e, t);
  var n = Mr(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Bd(e, t.type, n) : t.hasOwnProperty("defaultValue") && Bd(e, t.type, Mr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Gg(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Bd(e, t, n) {
  (t !== "number" || uu(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var yl = Array.isArray;
function ii(e, t, n, r) {
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
function jd(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(j(91));
  return Me({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Qg(e, t) {
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
function bx(e, t) {
  var n = Mr(t.value), r = Mr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Kg(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sx(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Hd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Sx(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var rs, kx = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (rs = rs || document.createElement("div"), rs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = rs.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Gl(e, t) {
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
}, t$ = ["Webkit", "ms", "Moz", "O"];
Object.keys($l).forEach(function(e) {
  t$.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), $l[t] = $l[e];
  });
});
function Cx(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || $l.hasOwnProperty(e) && $l[e] ? ("" + t).trim() : t + "px";
}
function $x(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = Cx(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var n$ = Me({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Vd(e, t) {
  if (t) {
    if (n$[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Ud(e, t) {
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
var Wd = null;
function Uh(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var qd = null, li = null, ai = null;
function Yg(e) {
  if (e = Da(e)) {
    if (typeof qd != "function")
      throw Error(j(280));
    var t = e.stateNode;
    t && (t = cc(t), qd(e.stateNode, e.type, t));
  }
}
function Ex(e) {
  li ? ai ? ai.push(e) : ai = [e] : li = e;
}
function Ax() {
  if (li) {
    var e = li, t = ai;
    if (ai = li = null, Yg(e), t)
      for (e = 0; e < t.length; e++)
        Yg(t[e]);
  }
}
function Px(e, t) {
  return e(t);
}
function _x() {
}
var hf = !1;
function Rx(e, t, n) {
  if (hf)
    return e(t, n);
  hf = !0;
  try {
    return Px(e, t, n);
  } finally {
    hf = !1, (li !== null || ai !== null) && (_x(), Ax());
  }
}
function Ql(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = cc(n);
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
var Gd = !1;
if (Wn)
  try {
    var Zi = {};
    Object.defineProperty(Zi, "passive", { get: function() {
      Gd = !0;
    } }), window.addEventListener("test", Zi, Zi), window.removeEventListener("test", Zi, Zi);
  } catch {
    Gd = !1;
  }
function r$(e, t, n, r, o, i, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var El = !1, cu = null, fu = !1, Qd = null, o$ = { onError: function(e) {
  El = !0, cu = e;
} };
function i$(e, t, n, r, o, i, l, a, s) {
  El = !1, cu = null, r$.apply(o$, arguments);
}
function l$(e, t, n, r, o, i, l, a, s) {
  if (i$.apply(this, arguments), El) {
    if (El) {
      var u = cu;
      El = !1, cu = null;
    } else
      throw Error(j(198));
    fu || (fu = !0, Qd = u);
  }
}
function $o(e) {
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
function Tx(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Xg(e) {
  if ($o(e) !== e)
    throw Error(j(188));
}
function a$(e) {
  var t = e.alternate;
  if (!t) {
    if (t = $o(e), t === null)
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
          return Xg(o), e;
        if (i === r)
          return Xg(o), t;
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
function Ix(e) {
  return e = a$(e), e !== null ? Ox(e) : null;
}
function Ox(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Ox(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Mx = Ot.unstable_scheduleCallback, Zg = Ot.unstable_cancelCallback, s$ = Ot.unstable_shouldYield, u$ = Ot.unstable_requestPaint, ze = Ot.unstable_now, c$ = Ot.unstable_getCurrentPriorityLevel, Wh = Ot.unstable_ImmediatePriority, Nx = Ot.unstable_UserBlockingPriority, du = Ot.unstable_NormalPriority, f$ = Ot.unstable_LowPriority, Dx = Ot.unstable_IdlePriority, lc = null, Cn = null;
function d$(e) {
  if (Cn && typeof Cn.onCommitFiberRoot == "function")
    try {
      Cn.onCommitFiberRoot(lc, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var fn = Math.clz32 ? Math.clz32 : m$, p$ = Math.log, h$ = Math.LN2;
function m$(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (p$(e) / h$ | 0) | 0;
}
var os = 64, is = 4194304;
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
function pu(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var a = l & ~o;
    a !== 0 ? r = xl(a) : (i &= l, i !== 0 && (r = xl(i)));
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
function g$(e, t) {
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
function v$(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - fn(i), a = 1 << l, s = o[l];
    s === -1 ? ((a & n) === 0 || (a & r) !== 0) && (o[l] = g$(a, t)) : s <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function Kd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Lx() {
  var e = os;
  return os <<= 1, (os & 4194240) === 0 && (os = 64), e;
}
function mf(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Ma(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - fn(t), e[t] = n;
}
function y$(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - fn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function qh(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - fn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var we = 0;
function Fx(e) {
  return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
}
var zx, Gh, Bx, jx, Hx, Yd = !1, ls = [], Cr = null, $r = null, Er = null, Kl = /* @__PURE__ */ new Map(), Yl = /* @__PURE__ */ new Map(), mr = [], x$ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Jg(e, t) {
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
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Da(t), t !== null && Gh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function w$(e, t, n, r, o) {
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
function Vx(e) {
  var t = ro(e.target);
  if (t !== null) {
    var n = $o(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Tx(n), t !== null) {
          e.blockedOn = t, Hx(e.priority, function() {
            Bx(n);
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
function Hs(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Xd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Wd = r, n.target.dispatchEvent(r), Wd = null;
    } else
      return t = Da(n), t !== null && Gh(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function e0(e, t, n) {
  Hs(e) && n.delete(t);
}
function b$() {
  Yd = !1, Cr !== null && Hs(Cr) && (Cr = null), $r !== null && Hs($r) && ($r = null), Er !== null && Hs(Er) && (Er = null), Kl.forEach(e0), Yl.forEach(e0);
}
function el(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Yd || (Yd = !0, Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority, b$)));
}
function Xl(e) {
  function t(o) {
    return el(o, e);
  }
  if (0 < ls.length) {
    el(ls[0], e);
    for (var n = 1; n < ls.length; n++) {
      var r = ls[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Cr !== null && el(Cr, e), $r !== null && el($r, e), Er !== null && el(Er, e), Kl.forEach(t), Yl.forEach(t), n = 0; n < mr.length; n++)
    r = mr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < mr.length && (n = mr[0], n.blockedOn === null); )
    Vx(n), n.blockedOn === null && mr.shift();
}
var si = Zn.ReactCurrentBatchConfig, hu = !0;
function S$(e, t, n, r) {
  var o = we, i = si.transition;
  si.transition = null;
  try {
    we = 1, Qh(e, t, n, r);
  } finally {
    we = o, si.transition = i;
  }
}
function k$(e, t, n, r) {
  var o = we, i = si.transition;
  si.transition = null;
  try {
    we = 4, Qh(e, t, n, r);
  } finally {
    we = o, si.transition = i;
  }
}
function Qh(e, t, n, r) {
  if (hu) {
    var o = Xd(e, t, n, r);
    if (o === null)
      $f(e, t, r, mu, n), Jg(e, r);
    else if (w$(o, e, t, n, r))
      r.stopPropagation();
    else if (Jg(e, r), t & 4 && -1 < x$.indexOf(e)) {
      for (; o !== null; ) {
        var i = Da(o);
        if (i !== null && zx(i), i = Xd(e, t, n, r), i === null && $f(e, t, r, mu, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      $f(e, t, r, null, n);
  }
}
var mu = null;
function Xd(e, t, n, r) {
  if (mu = null, e = Uh(r), e = ro(e), e !== null)
    if (t = $o(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Tx(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return mu = e, null;
}
function Ux(e) {
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
      switch (c$()) {
        case Wh:
          return 1;
        case Nx:
          return 4;
        case du:
        case f$:
          return 16;
        case Dx:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var vr = null, Kh = null, Vs = null;
function Wx() {
  if (Vs)
    return Vs;
  var e, t = Kh, n = t.length, r, o = "value" in vr ? vr.value : vr.textContent, i = o.length;
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
function as() {
  return !0;
}
function t0() {
  return !1;
}
function Nt(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var a in e)
      e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? as : t0, this.isPropagationStopped = t0, this;
  }
  return Me(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = as);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = as);
  }, persist: function() {
  }, isPersistent: as }), t;
}
var Di = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Yh = Nt(Di), Na = Me({}, Di, { view: 0, detail: 0 }), C$ = Nt(Na), gf, vf, tl, ac = Me({}, Na, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xh, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== tl && (tl && e.type === "mousemove" ? (gf = e.screenX - tl.screenX, vf = e.screenY - tl.screenY) : vf = gf = 0, tl = e), gf);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : vf;
} }), n0 = Nt(ac), $$ = Me({}, ac, { dataTransfer: 0 }), E$ = Nt($$), A$ = Me({}, Na, { relatedTarget: 0 }), yf = Nt(A$), P$ = Me({}, Di, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), _$ = Nt(P$), R$ = Me({}, Di, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), T$ = Nt(R$), I$ = Me({}, Di, { data: 0 }), r0 = Nt(I$), O$ = {
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
}, M$ = {
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
}, N$ = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function D$(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = N$[e]) ? !!t[e] : !1;
}
function Xh() {
  return D$;
}
var L$ = Me({}, Na, { key: function(e) {
  if (e.key) {
    var t = O$[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Us(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? M$[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xh, charCode: function(e) {
  return e.type === "keypress" ? Us(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Us(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), F$ = Nt(L$), z$ = Me({}, ac, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), o0 = Nt(z$), B$ = Me({}, Na, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xh }), j$ = Nt(B$), H$ = Me({}, Di, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), V$ = Nt(H$), U$ = Me({}, ac, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), W$ = Nt(U$), q$ = [9, 13, 27, 32], Zh = Wn && "CompositionEvent" in window, Al = null;
Wn && "documentMode" in document && (Al = document.documentMode);
var G$ = Wn && "TextEvent" in window && !Al, qx = Wn && (!Zh || Al && 8 < Al && 11 >= Al), i0 = String.fromCharCode(32), l0 = !1;
function Gx(e, t) {
  switch (e) {
    case "keyup":
      return q$.indexOf(t.keyCode) !== -1;
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
function Qx(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Go = !1;
function Q$(e, t) {
  switch (e) {
    case "compositionend":
      return Qx(t);
    case "keypress":
      return t.which !== 32 ? null : (l0 = !0, i0);
    case "textInput":
      return e = t.data, e === i0 && l0 ? null : e;
    default:
      return null;
  }
}
function K$(e, t) {
  if (Go)
    return e === "compositionend" || !Zh && Gx(e, t) ? (e = Wx(), Vs = Kh = vr = null, Go = !1, e) : null;
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
      return qx && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Y$ = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function a0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Y$[e.type] : t === "textarea";
}
function Kx(e, t, n, r) {
  Ex(r), t = gu(t, "onChange"), 0 < t.length && (n = new Yh("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Pl = null, Zl = null;
function X$(e) {
  lw(e, 0);
}
function sc(e) {
  var t = Yo(e);
  if (xx(t))
    return e;
}
function Z$(e, t) {
  if (e === "change")
    return t;
}
var Yx = !1;
if (Wn) {
  var xf;
  if (Wn) {
    var wf = "oninput" in document;
    if (!wf) {
      var s0 = document.createElement("div");
      s0.setAttribute("oninput", "return;"), wf = typeof s0.oninput == "function";
    }
    xf = wf;
  } else
    xf = !1;
  Yx = xf && (!document.documentMode || 9 < document.documentMode);
}
function u0() {
  Pl && (Pl.detachEvent("onpropertychange", Xx), Zl = Pl = null);
}
function Xx(e) {
  if (e.propertyName === "value" && sc(Zl)) {
    var t = [];
    Kx(t, Zl, e, Uh(e)), Rx(X$, t);
  }
}
function J$(e, t, n) {
  e === "focusin" ? (u0(), Pl = t, Zl = n, Pl.attachEvent("onpropertychange", Xx)) : e === "focusout" && u0();
}
function eE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return sc(Zl);
}
function tE(e, t) {
  if (e === "click")
    return sc(t);
}
function nE(e, t) {
  if (e === "input" || e === "change")
    return sc(t);
}
function rE(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var hn = typeof Object.is == "function" ? Object.is : rE;
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
    if (!Od.call(t, o) || !hn(e[o], t[o]))
      return !1;
  }
  return !0;
}
function c0(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function f0(e, t) {
  var n = c0(e);
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
    n = c0(n);
  }
}
function Zx(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zx(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Jx() {
  for (var e = window, t = uu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = uu(e.document);
  }
  return t;
}
function Jh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function oE(e) {
  var t = Jx(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Zx(n.ownerDocument.documentElement, n)) {
    if (r !== null && Jh(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = f0(n, i);
        var l = f0(
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
var iE = Wn && "documentMode" in document && 11 >= document.documentMode, Qo = null, Zd = null, _l = null, Jd = !1;
function d0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Jd || Qo == null || Qo !== uu(r) || (r = Qo, "selectionStart" in r && Jh(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), _l && Jl(_l, r) || (_l = r, r = gu(Zd, "onSelect"), 0 < r.length && (t = new Yh("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Qo)));
}
function ss(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Ko = { animationend: ss("Animation", "AnimationEnd"), animationiteration: ss("Animation", "AnimationIteration"), animationstart: ss("Animation", "AnimationStart"), transitionend: ss("Transition", "TransitionEnd") }, bf = {}, ew = {};
Wn && (ew = document.createElement("div").style, "AnimationEvent" in window || (delete Ko.animationend.animation, delete Ko.animationiteration.animation, delete Ko.animationstart.animation), "TransitionEvent" in window || delete Ko.transitionend.transition);
function uc(e) {
  if (bf[e])
    return bf[e];
  if (!Ko[e])
    return e;
  var t = Ko[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in ew)
      return bf[e] = t[n];
  return e;
}
var tw = uc("animationend"), nw = uc("animationiteration"), rw = uc("animationstart"), ow = uc("transitionend"), iw = /* @__PURE__ */ new Map(), p0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Fr(e, t) {
  iw.set(e, t), Co(t, [e]);
}
for (var Sf = 0; Sf < p0.length; Sf++) {
  var kf = p0[Sf], lE = kf.toLowerCase(), aE = kf[0].toUpperCase() + kf.slice(1);
  Fr(lE, "on" + aE);
}
Fr(tw, "onAnimationEnd");
Fr(nw, "onAnimationIteration");
Fr(rw, "onAnimationStart");
Fr("dblclick", "onDoubleClick");
Fr("focusin", "onFocus");
Fr("focusout", "onBlur");
Fr(ow, "onTransitionEnd");
bi("onMouseEnter", ["mouseout", "mouseover"]);
bi("onMouseLeave", ["mouseout", "mouseover"]);
bi("onPointerEnter", ["pointerout", "pointerover"]);
bi("onPointerLeave", ["pointerout", "pointerover"]);
Co("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Co("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Co("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Co("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Co("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Co("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var wl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), sE = new Set("cancel close invalid load scroll toggle".split(" ").concat(wl));
function h0(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, l$(r, t, void 0, e), e.currentTarget = null;
}
function lw(e, t) {
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
          h0(o, a, u), i = s;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (a = r[l], s = a.instance, u = a.currentTarget, a = a.listener, s !== i && o.isPropagationStopped())
            break e;
          h0(o, a, u), i = s;
        }
    }
  }
  if (fu)
    throw e = Qd, fu = !1, Qd = null, e;
}
function Ee(e, t) {
  var n = t[op];
  n === void 0 && (n = t[op] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (aw(t, e, 2, !1), n.add(r));
}
function Cf(e, t, n) {
  var r = 0;
  t && (r |= 4), aw(n, e, r, t);
}
var us = "_reactListening" + Math.random().toString(36).slice(2);
function ea(e) {
  if (!e[us]) {
    e[us] = !0, hx.forEach(function(n) {
      n !== "selectionchange" && (sE.has(n) || Cf(n, !1, e), Cf(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[us] || (t[us] = !0, Cf("selectionchange", !1, t));
  }
}
function aw(e, t, n, r) {
  switch (Ux(t)) {
    case 1:
      var o = S$;
      break;
    case 4:
      o = k$;
      break;
    default:
      o = Qh;
  }
  n = o.bind(null, t, n, e), o = void 0, !Gd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function $f(e, t, n, r, o) {
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
            if (l = ro(a), l === null)
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
  Rx(function() {
    var u = i, c = Uh(n), f = [];
    e: {
      var d = iw.get(e);
      if (d !== void 0) {
        var g = Yh, m = e;
        switch (e) {
          case "keypress":
            if (Us(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = F$;
            break;
          case "focusin":
            m = "focus", g = yf;
            break;
          case "focusout":
            m = "blur", g = yf;
            break;
          case "beforeblur":
          case "afterblur":
            g = yf;
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
            g = n0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = E$;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = j$;
            break;
          case tw:
          case nw:
          case rw:
            g = _$;
            break;
          case ow:
            g = V$;
            break;
          case "scroll":
            g = C$;
            break;
          case "wheel":
            g = W$;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = T$;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = o0;
        }
        var v = (t & 4) !== 0, w = !v && e === "scroll", p = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var y = u, x; y !== null; ) {
          x = y;
          var b = x.stateNode;
          if (x.tag === 5 && b !== null && (x = b, p !== null && (b = Ql(y, p), b != null && v.push(ta(y, b, x)))), w)
            break;
          y = y.return;
        }
        0 < v.length && (d = new g(d, m, null, n, c), f.push({ event: d, listeners: v }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== Wd && (m = n.relatedTarget || n.fromElement) && (ro(m) || m[qn]))
          break e;
        if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (m = n.relatedTarget || n.toElement, g = u, m = m ? ro(m) : null, m !== null && (w = $o(m), m !== w || m.tag !== 5 && m.tag !== 6) && (m = null)) : (g = null, m = u), g !== m)) {
          if (v = n0, b = "onMouseLeave", p = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (v = o0, b = "onPointerLeave", p = "onPointerEnter", y = "pointer"), w = g == null ? d : Yo(g), x = m == null ? d : Yo(m), d = new v(b, y + "leave", g, n, c), d.target = w, d.relatedTarget = x, b = null, ro(c) === u && (v = new v(p, y + "enter", m, n, c), v.target = x, v.relatedTarget = w, b = v), w = b, g && m)
            t: {
              for (v = g, p = m, y = 0, x = v; x; x = Io(x))
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
          g !== null && m0(f, d, g, v, !1), m !== null && w !== null && m0(f, w, m, v, !0);
        }
      }
      e: {
        if (d = u ? Yo(u) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file")
          var A = Z$;
        else if (a0(d))
          if (Yx)
            A = nE;
          else {
            A = eE;
            var S = J$;
          }
        else
          (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (A = tE);
        if (A && (A = A(e, u))) {
          Kx(f, A, n, c);
          break e;
        }
        S && S(e, d, u), e === "focusout" && (S = d._wrapperState) && S.controlled && d.type === "number" && Bd(d, "number", d.value);
      }
      switch (S = u ? Yo(u) : window, e) {
        case "focusin":
          (a0(S) || S.contentEditable === "true") && (Qo = S, Zd = u, _l = null);
          break;
        case "focusout":
          _l = Zd = Qo = null;
          break;
        case "mousedown":
          Jd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Jd = !1, d0(f, n, c);
          break;
        case "selectionchange":
          if (iE)
            break;
        case "keydown":
        case "keyup":
          d0(f, n, c);
      }
      var E;
      if (Zh)
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
        Go ? Gx(e, n) && ($ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && ($ = "onCompositionStart");
      $ && (qx && n.locale !== "ko" && (Go || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && Go && (E = Wx()) : (vr = c, Kh = "value" in vr ? vr.value : vr.textContent, Go = !0)), S = gu(u, $), 0 < S.length && ($ = new r0($, e, null, n, c), f.push({ event: $, listeners: S }), E ? $.data = E : (E = Qx(n), E !== null && ($.data = E)))), (E = G$ ? Q$(e, n) : K$(e, n)) && (u = gu(u, "onBeforeInput"), 0 < u.length && (c = new r0("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = E));
    }
    lw(f, t);
  });
}
function ta(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function gu(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Ql(e, n), i != null && r.unshift(ta(e, i, o)), i = Ql(e, t), i != null && r.push(ta(e, i, o))), e = e.return;
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
function m0(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n, s = a.alternate, u = a.stateNode;
    if (s !== null && s === r)
      break;
    a.tag === 5 && u !== null && (a = u, o ? (s = Ql(n, i), s != null && l.unshift(ta(n, s, a))) : o || (s = Ql(n, i), s != null && l.push(ta(n, s, a)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var uE = /\r\n?/g, cE = /\u0000|\uFFFD/g;
function g0(e) {
  return (typeof e == "string" ? e : "" + e).replace(uE, `
`).replace(cE, "");
}
function cs(e, t, n) {
  if (t = g0(t), g0(e) !== t && n)
    throw Error(j(425));
}
function vu() {
}
var ep = null, tp = null;
function np(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var rp = typeof setTimeout == "function" ? setTimeout : void 0, fE = typeof clearTimeout == "function" ? clearTimeout : void 0, v0 = typeof Promise == "function" ? Promise : void 0, dE = typeof queueMicrotask == "function" ? queueMicrotask : typeof v0 < "u" ? function(e) {
  return v0.resolve(null).then(e).catch(pE);
} : rp;
function pE(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ef(e, t) {
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
function y0(e) {
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
var Li = Math.random().toString(36).slice(2), bn = "__reactFiber$" + Li, na = "__reactProps$" + Li, qn = "__reactContainer$" + Li, op = "__reactEvents$" + Li, hE = "__reactListeners$" + Li, mE = "__reactHandles$" + Li;
function ro(e) {
  var t = e[bn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[qn] || n[bn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = y0(e); e !== null; ) {
          if (n = e[bn])
            return n;
          e = y0(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Da(e) {
  return e = e[bn] || e[qn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Yo(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(j(33));
}
function cc(e) {
  return e[na] || null;
}
var ip = [], Xo = -1;
function zr(e) {
  return { current: e };
}
function _e(e) {
  0 > Xo || (e.current = ip[Xo], ip[Xo] = null, Xo--);
}
function $e(e, t) {
  Xo++, ip[Xo] = e.current, e.current = t;
}
var Nr = {}, lt = zr(Nr), bt = zr(!1), fo = Nr;
function Si(e, t) {
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
function yu() {
  _e(bt), _e(lt);
}
function x0(e, t, n) {
  if (lt.current !== Nr)
    throw Error(j(168));
  $e(lt, t), $e(bt, n);
}
function sw(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(j(108, J2(e) || "Unknown", o));
  return Me({}, n, r);
}
function xu(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nr, fo = lt.current, $e(lt, e), $e(bt, bt.current), !0;
}
function w0(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(j(169));
  n ? (e = sw(e, t, fo), r.__reactInternalMemoizedMergedChildContext = e, _e(bt), _e(lt), $e(lt, e)) : _e(bt), $e(bt, n);
}
var jn = null, fc = !1, Af = !1;
function uw(e) {
  jn === null ? jn = [e] : jn.push(e);
}
function gE(e) {
  fc = !0, uw(e);
}
function Br() {
  if (!Af && jn !== null) {
    Af = !0;
    var e = 0, t = we;
    try {
      var n = jn;
      for (we = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      jn = null, fc = !1;
    } catch (o) {
      throw jn !== null && (jn = jn.slice(e + 1)), Mx(Wh, Br), o;
    } finally {
      we = t, Af = !1;
    }
  }
  return null;
}
var Zo = [], Jo = 0, wu = null, bu = 0, Ft = [], zt = 0, po = null, Hn = 1, Vn = "";
function Qr(e, t) {
  Zo[Jo++] = bu, Zo[Jo++] = wu, wu = e, bu = t;
}
function cw(e, t, n) {
  Ft[zt++] = Hn, Ft[zt++] = Vn, Ft[zt++] = po, po = e;
  var r = Hn;
  e = Vn;
  var o = 32 - fn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - fn(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, Hn = 1 << 32 - fn(t) + o | n << o | r, Vn = i + e;
  } else
    Hn = 1 << i | n << o | r, Vn = e;
}
function em(e) {
  e.return !== null && (Qr(e, 1), cw(e, 1, 0));
}
function tm(e) {
  for (; e === wu; )
    wu = Zo[--Jo], Zo[Jo] = null, bu = Zo[--Jo], Zo[Jo] = null;
  for (; e === po; )
    po = Ft[--zt], Ft[zt] = null, Vn = Ft[--zt], Ft[zt] = null, Hn = Ft[--zt], Ft[zt] = null;
}
var Tt = null, At = null, Te = !1, ln = null;
function fw(e, t) {
  var n = qt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function b0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Tt = e, At = Ar(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Tt = e, At = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = po !== null ? { id: Hn, overflow: Vn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = qt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Tt = e, At = null, !0) : !1;
    default:
      return !1;
  }
}
function lp(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ap(e) {
  if (Te) {
    var t = At;
    if (t) {
      var n = t;
      if (!b0(e, t)) {
        if (lp(e))
          throw Error(j(418));
        t = Ar(n.nextSibling);
        var r = Tt;
        t && b0(e, t) ? fw(r, n) : (e.flags = e.flags & -4097 | 2, Te = !1, Tt = e);
      }
    } else {
      if (lp(e))
        throw Error(j(418));
      e.flags = e.flags & -4097 | 2, Te = !1, Tt = e;
    }
  }
}
function S0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Tt = e;
}
function fs(e) {
  if (e !== Tt)
    return !1;
  if (!Te)
    return S0(e), Te = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !np(e.type, e.memoizedProps)), t && (t = At)) {
    if (lp(e))
      throw dw(), Error(j(418));
    for (; t; )
      fw(e, t), t = Ar(t.nextSibling);
  }
  if (S0(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              At = Ar(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      At = null;
    }
  } else
    At = Tt ? Ar(e.stateNode.nextSibling) : null;
  return !0;
}
function dw() {
  for (var e = At; e; )
    e = Ar(e.nextSibling);
}
function ki() {
  At = Tt = null, Te = !1;
}
function nm(e) {
  ln === null ? ln = [e] : ln.push(e);
}
var vE = Zn.ReactCurrentBatchConfig;
function rn(e, t) {
  if (e && e.defaultProps) {
    t = Me({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Su = zr(null), ku = null, ei = null, rm = null;
function om() {
  rm = ei = ku = null;
}
function im(e) {
  var t = Su.current;
  _e(Su), e._currentValue = t;
}
function sp(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function ui(e, t) {
  ku = e, rm = ei = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (wt = !0), e.firstContext = null);
}
function Qt(e) {
  var t = e._currentValue;
  if (rm !== e)
    if (e = { context: e, memoizedValue: t, next: null }, ei === null) {
      if (ku === null)
        throw Error(j(308));
      ei = e, ku.dependencies = { lanes: 0, firstContext: e };
    } else
      ei = ei.next = e;
  return t;
}
var oo = null;
function lm(e) {
  oo === null ? oo = [e] : oo.push(e);
}
function pw(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, lm(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Gn(e, r);
}
function Gn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var hr = !1;
function am(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function hw(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Un(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Pr(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, (me & 2) !== 0) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Gn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, lm(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Gn(e, n);
}
function Ws(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, qh(e, n);
  }
}
function k0(e, t) {
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
function Cu(e, t, n, r) {
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
          var m = e, v = a;
          switch (d = t, g = n, v.tag) {
            case 1:
              if (m = v.payload, typeof m == "function") {
                f = m.call(g, f, d);
                break e;
              }
              f = m;
              break e;
            case 3:
              m.flags = m.flags & -65537 | 128;
            case 0:
              if (m = v.payload, d = typeof m == "function" ? m.call(g, f, d) : m, d == null)
                break e;
              f = Me({}, f, d);
              break e;
            case 2:
              hr = !0;
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
    mo |= l, e.lanes = l, e.memoizedState = f;
  }
}
function C0(e, t, n) {
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
var mw = new px.Component().refs;
function up(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Me({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var dc = { isMounted: function(e) {
  return (e = e._reactInternals) ? $o(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = dt(), o = Rr(e), i = Un(r, o);
  i.payload = t, n != null && (i.callback = n), t = Pr(e, i, o), t !== null && (dn(t, e, o, r), Ws(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = dt(), o = Rr(e), i = Un(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Pr(e, i, o), t !== null && (dn(t, e, o, r), Ws(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = dt(), r = Rr(e), o = Un(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Pr(e, o, r), t !== null && (dn(t, e, r, n), Ws(t, e, r));
} };
function $0(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Jl(n, r) || !Jl(o, i) : !0;
}
function gw(e, t, n) {
  var r = !1, o = Nr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Qt(i) : (o = St(t) ? fo : lt.current, r = t.contextTypes, i = (r = r != null) ? Si(e, o) : Nr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = dc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function E0(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && dc.enqueueReplaceState(t, t.state, null);
}
function cp(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = mw, am(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Qt(i) : (i = St(t) ? fo : lt.current, o.context = Si(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (up(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && dc.enqueueReplaceState(o, o.state, null), Cu(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
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
        var a = o.refs;
        a === mw && (a = o.refs = {}), l === null ? delete a[i] : a[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(j(284));
    if (!n._owner)
      throw Error(j(290, e));
  }
  return e;
}
function ds(e, t) {
  throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function A0(e) {
  var t = e._init;
  return t(e._payload);
}
function vw(e) {
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
    return y === null || y.tag !== 6 ? (y = Mf(x, p.mode, b), y.return = p, y) : (y = o(y, x), y.return = p, y);
  }
  function s(p, y, x, b) {
    var A = x.type;
    return A === qo ? c(p, y, x.props.children, b, x.key) : y !== null && (y.elementType === A || typeof A == "object" && A !== null && A.$$typeof === pr && A0(A) === y.type) ? (b = o(y, x.props), b.ref = nl(p, y, x), b.return = p, b) : (b = Xs(x.type, x.key, x.props, null, p.mode, b), b.ref = nl(p, y, x), b.return = p, b);
  }
  function u(p, y, x, b) {
    return y === null || y.tag !== 4 || y.stateNode.containerInfo !== x.containerInfo || y.stateNode.implementation !== x.implementation ? (y = Nf(x, p.mode, b), y.return = p, y) : (y = o(y, x.children || []), y.return = p, y);
  }
  function c(p, y, x, b, A) {
    return y === null || y.tag !== 7 ? (y = ao(x, p.mode, b, A), y.return = p, y) : (y = o(y, x), y.return = p, y);
  }
  function f(p, y, x) {
    if (typeof y == "string" && y !== "" || typeof y == "number")
      return y = Mf("" + y, p.mode, x), y.return = p, y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ts:
          return x = Xs(y.type, y.key, y.props, null, p.mode, x), x.ref = nl(p, null, y), x.return = p, x;
        case Wo:
          return y = Nf(y, p.mode, x), y.return = p, y;
        case pr:
          var b = y._init;
          return f(p, b(y._payload), x);
      }
      if (yl(y) || Xi(y))
        return y = ao(y, p.mode, x, null), y.return = p, y;
      ds(p, y);
    }
    return null;
  }
  function d(p, y, x, b) {
    var A = y !== null ? y.key : null;
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return A !== null ? null : a(p, y, "" + x, b);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ts:
          return x.key === A ? s(p, y, x, b) : null;
        case Wo:
          return x.key === A ? u(p, y, x, b) : null;
        case pr:
          return A = x._init, d(
            p,
            y,
            A(x._payload),
            b
          );
      }
      if (yl(x) || Xi(x))
        return A !== null ? null : c(p, y, x, b, null);
      ds(p, x);
    }
    return null;
  }
  function g(p, y, x, b, A) {
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return p = p.get(x) || null, a(y, p, "" + b, A);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case ts:
          return p = p.get(b.key === null ? x : b.key) || null, s(y, p, b, A);
        case Wo:
          return p = p.get(b.key === null ? x : b.key) || null, u(y, p, b, A);
        case pr:
          var S = b._init;
          return g(p, y, x, S(b._payload), A);
      }
      if (yl(b) || Xi(b))
        return p = p.get(x) || null, c(y, p, b, A, null);
      ds(y, b);
    }
    return null;
  }
  function m(p, y, x, b) {
    for (var A = null, S = null, E = y, $ = y = 0, P = null; E !== null && $ < x.length; $++) {
      E.index > $ ? (P = E, E = null) : P = E.sibling;
      var _ = d(p, E, x[$], b);
      if (_ === null) {
        E === null && (E = P);
        break;
      }
      e && E && _.alternate === null && t(p, E), y = i(_, y, $), S === null ? A = _ : S.sibling = _, S = _, E = P;
    }
    if ($ === x.length)
      return n(p, E), Te && Qr(p, $), A;
    if (E === null) {
      for (; $ < x.length; $++)
        E = f(p, x[$], b), E !== null && (y = i(E, y, $), S === null ? A = E : S.sibling = E, S = E);
      return Te && Qr(p, $), A;
    }
    for (E = r(p, E); $ < x.length; $++)
      P = g(E, p, $, x[$], b), P !== null && (e && P.alternate !== null && E.delete(P.key === null ? $ : P.key), y = i(P, y, $), S === null ? A = P : S.sibling = P, S = P);
    return e && E.forEach(function(T) {
      return t(p, T);
    }), Te && Qr(p, $), A;
  }
  function v(p, y, x, b) {
    var A = Xi(x);
    if (typeof A != "function")
      throw Error(j(150));
    if (x = A.call(x), x == null)
      throw Error(j(151));
    for (var S = A = null, E = y, $ = y = 0, P = null, _ = x.next(); E !== null && !_.done; $++, _ = x.next()) {
      E.index > $ ? (P = E, E = null) : P = E.sibling;
      var T = d(p, E, _.value, b);
      if (T === null) {
        E === null && (E = P);
        break;
      }
      e && E && T.alternate === null && t(p, E), y = i(T, y, $), S === null ? A = T : S.sibling = T, S = T, E = P;
    }
    if (_.done)
      return n(
        p,
        E
      ), Te && Qr(p, $), A;
    if (E === null) {
      for (; !_.done; $++, _ = x.next())
        _ = f(p, _.value, b), _ !== null && (y = i(_, y, $), S === null ? A = _ : S.sibling = _, S = _);
      return Te && Qr(p, $), A;
    }
    for (E = r(p, E); !_.done; $++, _ = x.next())
      _ = g(E, p, $, _.value, b), _ !== null && (e && _.alternate !== null && E.delete(_.key === null ? $ : _.key), y = i(_, y, $), S === null ? A = _ : S.sibling = _, S = _);
    return e && E.forEach(function(M) {
      return t(p, M);
    }), Te && Qr(p, $), A;
  }
  function w(p, y, x, b) {
    if (typeof x == "object" && x !== null && x.type === qo && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ts:
          e: {
            for (var A = x.key, S = y; S !== null; ) {
              if (S.key === A) {
                if (A = x.type, A === qo) {
                  if (S.tag === 7) {
                    n(p, S.sibling), y = o(S, x.props.children), y.return = p, p = y;
                    break e;
                  }
                } else if (S.elementType === A || typeof A == "object" && A !== null && A.$$typeof === pr && A0(A) === S.type) {
                  n(p, S.sibling), y = o(S, x.props), y.ref = nl(p, S, x), y.return = p, p = y;
                  break e;
                }
                n(p, S);
                break;
              } else
                t(p, S);
              S = S.sibling;
            }
            x.type === qo ? (y = ao(x.props.children, p.mode, b, x.key), y.return = p, p = y) : (b = Xs(x.type, x.key, x.props, null, p.mode, b), b.ref = nl(p, y, x), b.return = p, p = b);
          }
          return l(p);
        case Wo:
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
            y = Nf(x, p.mode, b), y.return = p, p = y;
          }
          return l(p);
        case pr:
          return S = x._init, w(p, y, S(x._payload), b);
      }
      if (yl(x))
        return m(p, y, x, b);
      if (Xi(x))
        return v(p, y, x, b);
      ds(p, x);
    }
    return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, y !== null && y.tag === 6 ? (n(p, y.sibling), y = o(y, x), y.return = p, p = y) : (n(p, y), y = Mf(x, p.mode, b), y.return = p, p = y), l(p)) : n(p, y);
  }
  return w;
}
var Ci = vw(!0), yw = vw(!1), La = {}, $n = zr(La), ra = zr(La), oa = zr(La);
function io(e) {
  if (e === La)
    throw Error(j(174));
  return e;
}
function sm(e, t) {
  switch ($e(oa, t), $e(ra, e), $e($n, La), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Hd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Hd(t, e);
  }
  _e($n), $e($n, t);
}
function $i() {
  _e($n), _e(ra), _e(oa);
}
function xw(e) {
  io(oa.current);
  var t = io($n.current), n = Hd(t, e.type);
  t !== n && ($e(ra, e), $e($n, n));
}
function um(e) {
  ra.current === e && (_e($n), _e(ra));
}
var Ie = zr(0);
function $u(e) {
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
var Pf = [];
function cm() {
  for (var e = 0; e < Pf.length; e++)
    Pf[e]._workInProgressVersionPrimary = null;
  Pf.length = 0;
}
var qs = Zn.ReactCurrentDispatcher, _f = Zn.ReactCurrentBatchConfig, ho = 0, Oe = null, qe = null, Qe = null, Eu = !1, Rl = !1, ia = 0, yE = 0;
function tt() {
  throw Error(j(321));
}
function fm(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!hn(e[n], t[n]))
      return !1;
  return !0;
}
function dm(e, t, n, r, o, i) {
  if (ho = i, Oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, qs.current = e === null || e.memoizedState === null ? SE : kE, e = n(r, o), Rl) {
    i = 0;
    do {
      if (Rl = !1, ia = 0, 25 <= i)
        throw Error(j(301));
      i += 1, Qe = qe = null, t.updateQueue = null, qs.current = CE, e = n(r, o);
    } while (Rl);
  }
  if (qs.current = Au, t = qe !== null && qe.next !== null, ho = 0, Qe = qe = Oe = null, Eu = !1, t)
    throw Error(j(300));
  return e;
}
function pm() {
  var e = ia !== 0;
  return ia = 0, e;
}
function vn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Qe === null ? Oe.memoizedState = Qe = e : Qe = Qe.next = e, Qe;
}
function Kt() {
  if (qe === null) {
    var e = Oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = qe.next;
  var t = Qe === null ? Oe.memoizedState : Qe.next;
  if (t !== null)
    Qe = t, qe = e;
  else {
    if (e === null)
      throw Error(j(310));
    qe = e, e = { memoizedState: qe.memoizedState, baseState: qe.baseState, baseQueue: qe.baseQueue, queue: qe.queue, next: null }, Qe === null ? Oe.memoizedState = Qe = e : Qe = Qe.next = e;
  }
  return Qe;
}
function la(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Rf(e) {
  var t = Kt(), n = t.queue;
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
      if ((ho & c) === c)
        s !== null && (s = s.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        s === null ? (a = s = f, l = r) : s = s.next = f, Oe.lanes |= c, mo |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? l = r : s.next = a, hn(r, t.memoizedState) || (wt = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Oe.lanes |= i, mo |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Tf(e) {
  var t = Kt(), n = t.queue;
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
    hn(i, t.memoizedState) || (wt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function ww() {
}
function bw(e, t) {
  var n = Oe, r = Kt(), o = t(), i = !hn(r.memoizedState, o);
  if (i && (r.memoizedState = o, wt = !0), r = r.queue, hm(Cw.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Qe !== null && Qe.memoizedState.tag & 1) {
    if (n.flags |= 2048, aa(9, kw.bind(null, n, r, o, t), void 0, null), Ye === null)
      throw Error(j(349));
    (ho & 30) !== 0 || Sw(n, t, o);
  }
  return o;
}
function Sw(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Oe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function kw(e, t, n, r) {
  t.value = n, t.getSnapshot = r, $w(t) && Ew(e);
}
function Cw(e, t, n) {
  return n(function() {
    $w(t) && Ew(e);
  });
}
function $w(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !hn(e, n);
  } catch {
    return !0;
  }
}
function Ew(e) {
  var t = Gn(e, 1);
  t !== null && dn(t, e, 1, -1);
}
function P0(e) {
  var t = vn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: la, lastRenderedState: e }, t.queue = e, e = e.dispatch = bE.bind(null, Oe, e), [t.memoizedState, e];
}
function aa(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Oe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Aw() {
  return Kt().memoizedState;
}
function Gs(e, t, n, r) {
  var o = vn();
  Oe.flags |= e, o.memoizedState = aa(1 | t, n, void 0, r === void 0 ? null : r);
}
function pc(e, t, n, r) {
  var o = Kt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (qe !== null) {
    var l = qe.memoizedState;
    if (i = l.destroy, r !== null && fm(r, l.deps)) {
      o.memoizedState = aa(t, n, i, r);
      return;
    }
  }
  Oe.flags |= e, o.memoizedState = aa(1 | t, n, i, r);
}
function _0(e, t) {
  return Gs(8390656, 8, e, t);
}
function hm(e, t) {
  return pc(2048, 8, e, t);
}
function Pw(e, t) {
  return pc(4, 2, e, t);
}
function _w(e, t) {
  return pc(4, 4, e, t);
}
function Rw(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Tw(e, t, n) {
  return n = n != null ? n.concat([e]) : null, pc(4, 4, Rw.bind(null, t, e), n);
}
function mm() {
}
function Iw(e, t) {
  var n = Kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fm(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ow(e, t) {
  var n = Kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fm(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Mw(e, t, n) {
  return (ho & 21) === 0 ? (e.baseState && (e.baseState = !1, wt = !0), e.memoizedState = n) : (hn(n, t) || (n = Lx(), Oe.lanes |= n, mo |= n, e.baseState = !0), t);
}
function xE(e, t) {
  var n = we;
  we = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = _f.transition;
  _f.transition = {};
  try {
    e(!1), t();
  } finally {
    we = n, _f.transition = r;
  }
}
function Nw() {
  return Kt().memoizedState;
}
function wE(e, t, n) {
  var r = Rr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Dw(e))
    Lw(t, n);
  else if (n = pw(e, t, n, r), n !== null) {
    var o = dt();
    dn(n, e, r, o), Fw(n, t, r);
  }
}
function bE(e, t, n) {
  var r = Rr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Dw(e))
    Lw(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var l = t.lastRenderedState, a = i(l, n);
        if (o.hasEagerState = !0, o.eagerState = a, hn(a, l)) {
          var s = t.interleaved;
          s === null ? (o.next = o, lm(t)) : (o.next = s.next, s.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = pw(e, t, o, r), n !== null && (o = dt(), dn(n, e, r, o), Fw(n, t, r));
  }
}
function Dw(e) {
  var t = e.alternate;
  return e === Oe || t !== null && t === Oe;
}
function Lw(e, t) {
  Rl = Eu = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Fw(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, qh(e, n);
  }
}
var Au = { readContext: Qt, useCallback: tt, useContext: tt, useEffect: tt, useImperativeHandle: tt, useInsertionEffect: tt, useLayoutEffect: tt, useMemo: tt, useReducer: tt, useRef: tt, useState: tt, useDebugValue: tt, useDeferredValue: tt, useTransition: tt, useMutableSource: tt, useSyncExternalStore: tt, useId: tt, unstable_isNewReconciler: !1 }, SE = { readContext: Qt, useCallback: function(e, t) {
  return vn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Qt, useEffect: _0, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Gs(
    4194308,
    4,
    Rw.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Gs(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Gs(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = vn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = vn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = wE.bind(null, Oe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = vn();
  return e = { current: e }, t.memoizedState = e;
}, useState: P0, useDebugValue: mm, useDeferredValue: function(e) {
  return vn().memoizedState = e;
}, useTransition: function() {
  var e = P0(!1), t = e[0];
  return e = xE.bind(null, e[1]), vn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Oe, o = vn();
  if (Te) {
    if (n === void 0)
      throw Error(j(407));
    n = n();
  } else {
    if (n = t(), Ye === null)
      throw Error(j(349));
    (ho & 30) !== 0 || Sw(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, _0(Cw.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, aa(9, kw.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = vn(), t = Ye.identifierPrefix;
  if (Te) {
    var n = Vn, r = Hn;
    n = (r & ~(1 << 32 - fn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ia++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = yE++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, kE = {
  readContext: Qt,
  useCallback: Iw,
  useContext: Qt,
  useEffect: hm,
  useImperativeHandle: Tw,
  useInsertionEffect: Pw,
  useLayoutEffect: _w,
  useMemo: Ow,
  useReducer: Rf,
  useRef: Aw,
  useState: function() {
    return Rf(la);
  },
  useDebugValue: mm,
  useDeferredValue: function(e) {
    var t = Kt();
    return Mw(t, qe.memoizedState, e);
  },
  useTransition: function() {
    var e = Rf(la)[0], t = Kt().memoizedState;
    return [e, t];
  },
  useMutableSource: ww,
  useSyncExternalStore: bw,
  useId: Nw,
  unstable_isNewReconciler: !1
}, CE = { readContext: Qt, useCallback: Iw, useContext: Qt, useEffect: hm, useImperativeHandle: Tw, useInsertionEffect: Pw, useLayoutEffect: _w, useMemo: Ow, useReducer: Tf, useRef: Aw, useState: function() {
  return Tf(la);
}, useDebugValue: mm, useDeferredValue: function(e) {
  var t = Kt();
  return qe === null ? t.memoizedState = e : Mw(t, qe.memoizedState, e);
}, useTransition: function() {
  var e = Tf(la)[0], t = Kt().memoizedState;
  return [e, t];
}, useMutableSource: ww, useSyncExternalStore: bw, useId: Nw, unstable_isNewReconciler: !1 };
function Ei(e, t) {
  try {
    var n = "", r = t;
    do
      n += Z2(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function If(e, t, n) {
  return { value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null };
}
function fp(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var $E = typeof WeakMap == "function" ? WeakMap : Map;
function zw(e, t, n) {
  n = Un(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    _u || (_u = !0, bp = r), fp(e, t);
  }, n;
}
function Bw(e, t, n) {
  n = Un(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      fp(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    fp(e, t), typeof r != "function" && (_r === null ? _r = /* @__PURE__ */ new Set([this]) : _r.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function R0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new $E();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = zE.bind(null, e, t, n), t.then(e, e));
}
function T0(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function I0(e, t, n, r, o) {
  return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Un(-1, 1), t.tag = 2, Pr(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
}
var EE = Zn.ReactCurrentOwner, wt = !1;
function ct(e, t, n, r) {
  t.child = e === null ? yw(t, null, n, r) : Ci(t, e.child, n, r);
}
function O0(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return ui(t, o), r = dm(e, t, n, r, i, o), n = pm(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Qn(e, t, o)) : (Te && n && em(t), t.flags |= 1, ct(e, t, r, o), t.child);
}
function M0(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !km(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, jw(e, t, i, r, o)) : (e = Xs(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, (e.lanes & o) === 0) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Jl, n(l, r) && e.ref === t.ref)
      return Qn(e, t, o);
  }
  return t.flags |= 1, e = Tr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function jw(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Jl(i, r) && e.ref === t.ref)
      if (wt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        (e.flags & 131072) !== 0 && (wt = !0);
      else
        return t.lanes = e.lanes, Qn(e, t, o);
  }
  return dp(e, t, n, r, o);
}
function Hw(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $e(ni, Et), Et |= n;
    else {
      if ((n & 1073741824) === 0)
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, $e(ni, Et), Et |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, $e(ni, Et), Et |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, $e(ni, Et), Et |= r;
  return ct(e, t, o, n), t.child;
}
function Vw(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function dp(e, t, n, r, o) {
  var i = St(n) ? fo : lt.current;
  return i = Si(t, i), ui(t, o), n = dm(e, t, n, r, i, o), r = pm(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Qn(e, t, o)) : (Te && r && em(t), t.flags |= 1, ct(e, t, n, o), t.child);
}
function N0(e, t, n, r, o) {
  if (St(n)) {
    var i = !0;
    xu(t);
  } else
    i = !1;
  if (ui(t, o), t.stateNode === null)
    Qs(e, t), gw(t, n, r), cp(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, a = t.memoizedProps;
    l.props = a;
    var s = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Qt(u) : (u = St(n) ? fo : lt.current, u = Si(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== r || s !== u) && E0(t, l, r, u), hr = !1;
    var d = t.memoizedState;
    l.state = d, Cu(t, r, l, o), s = t.memoizedState, a !== r || d !== s || bt.current || hr ? (typeof c == "function" && (up(t, n, c, r), s = t.memoizedState), (a = hr || $0(t, n, a, r, d, s, u)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = u, r = a) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, hw(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : rn(t.type, a), l.props = u, f = t.pendingProps, d = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = Qt(s) : (s = St(n) ? fo : lt.current, s = Si(t, s));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== f || d !== s) && E0(t, l, r, s), hr = !1, d = t.memoizedState, l.state = d, Cu(t, r, l, o);
    var m = t.memoizedState;
    a !== f || d !== m || bt.current || hr ? (typeof g == "function" && (up(t, n, g, r), m = t.memoizedState), (u = hr || $0(t, n, u, r, d, m, s) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, m, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, m, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), l.props = r, l.state = m, l.context = s, r = u) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return pp(e, t, n, r, i, o);
}
function pp(e, t, n, r, o, i) {
  Vw(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
    return o && w0(t, n, !1), Qn(e, t, i);
  r = t.stateNode, EE.current = t;
  var a = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = Ci(t, e.child, null, i), t.child = Ci(t, null, a, i)) : ct(e, t, a, i), t.memoizedState = r.state, o && w0(t, n, !0), t.child;
}
function Uw(e) {
  var t = e.stateNode;
  t.pendingContext ? x0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && x0(e, t.context, !1), sm(e, t.containerInfo);
}
function D0(e, t, n, r, o) {
  return ki(), nm(o), t.flags |= 256, ct(e, t, n, r), t.child;
}
var hp = { dehydrated: null, treeContext: null, retryLane: 0 };
function mp(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ww(e, t, n) {
  var r = t.pendingProps, o = Ie.current, i = !1, l = (t.flags & 128) !== 0, a;
  if ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), $e(Ie, o & 1), e === null)
    return ap(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = gc(l, r, 0, null), e = ao(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = mp(n), t.memoizedState = hp, e) : gm(t, l));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null))
    return AE(e, t, l, r, a, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, a = o.sibling;
    var s = { mode: "hidden", children: r.children };
    return (l & 1) === 0 && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Tr(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = Tr(a, i) : (i = ao(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? mp(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = hp, r;
  }
  return i = e.child, e = i.sibling, r = Tr(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function gm(e, t) {
  return t = gc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ps(e, t, n, r) {
  return r !== null && nm(r), Ci(t, e.child, null, n), e = gm(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function AE(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = If(Error(j(422))), ps(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = gc({ mode: "visible", children: r.children }, o, 0, null), i = ao(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && Ci(t, e.child, null, l), t.child.memoizedState = mp(l), t.memoizedState = hp, i);
  if ((t.mode & 1) === 0)
    return ps(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var a = r.dgst;
    return r = a, i = Error(j(419)), r = If(i, r, void 0), ps(e, t, l, r);
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
      o = (o & (r.suspendedLanes | l)) !== 0 ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Gn(e, o), dn(r, e, o, -1));
    }
    return Sm(), r = If(Error(j(421))), ps(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = BE.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, At = Ar(o.nextSibling), Tt = t, Te = !0, ln = null, e !== null && (Ft[zt++] = Hn, Ft[zt++] = Vn, Ft[zt++] = po, Hn = e.id, Vn = e.overflow, po = t), t = gm(t, r.children), t.flags |= 4096, t);
}
function L0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), sp(e.return, t, n);
}
function Of(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function qw(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (ct(e, t, r.children, n), r = Ie.current, (r & 2) !== 0)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && L0(e, n, t);
          else if (e.tag === 19)
            L0(e, n, t);
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
          e = n.alternate, e !== null && $u(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Of(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && $u(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Of(t, !0, n, null, i);
        break;
      case "together":
        Of(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Qs(e, t) {
  (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Qn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), mo |= t.lanes, (n & t.childLanes) === 0)
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(j(153));
  if (t.child !== null) {
    for (e = t.child, n = Tr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Tr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function PE(e, t, n) {
  switch (t.tag) {
    case 3:
      Uw(t), ki();
      break;
    case 5:
      xw(t);
      break;
    case 1:
      St(t.type) && xu(t);
      break;
    case 4:
      sm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      $e(Su, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? ($e(Ie, Ie.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Ww(e, t, n) : ($e(Ie, Ie.current & 1), e = Qn(e, t, n), e !== null ? e.sibling : null);
      $e(Ie, Ie.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
        if (r)
          return qw(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), $e(Ie, Ie.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Hw(e, t, n);
  }
  return Qn(e, t, n);
}
var Gw, gp, Qw, Kw;
Gw = function(e, t) {
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
gp = function() {
};
Qw = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, io($n.current);
    var i = null;
    switch (n) {
      case "input":
        o = Fd(e, o), r = Fd(e, r), i = [];
        break;
      case "select":
        o = Me({}, o, { value: void 0 }), r = Me({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = jd(e, o), r = jd(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = vu);
    }
    Vd(n, r);
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
          u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, a = a ? a.__html : void 0, s != null && a !== s && (i = i || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ql.hasOwnProperty(u) ? (s != null && u === "onScroll" && Ee("scroll", e), i || a === s || (i = [])) : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Kw = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function rl(e, t) {
  if (!Te)
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
function _E(e, t, n) {
  var r = t.pendingProps;
  switch (tm(t), t.tag) {
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
      return St(t.type) && yu(), nt(t), null;
    case 3:
      return r = t.stateNode, $i(), _e(bt), _e(lt), cm(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (fs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ln !== null && (Cp(ln), ln = null))), gp(e, t), nt(t), null;
    case 5:
      um(t);
      var o = io(oa.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Qw(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(j(166));
          return nt(t), null;
        }
        if (e = io($n.current), fs(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[bn] = t, r[na] = i, e = (t.mode & 1) !== 0, n) {
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
              qg(r, i), Ee("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Ee("invalid", r);
              break;
            case "textarea":
              Qg(r, i), Ee("invalid", r);
          }
          Vd(n, i), o = null;
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && cs(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && cs(
                r.textContent,
                a,
                e
              ), o = ["children", "" + a]) : ql.hasOwnProperty(l) && a != null && l === "onScroll" && Ee("scroll", r);
            }
          switch (n) {
            case "input":
              ns(r), Gg(r, i, !0);
              break;
            case "textarea":
              ns(r), Kg(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = vu);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Sx(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[bn] = t, e[na] = r, Gw(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Ud(n, r), n) {
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
                qg(e, r), o = Fd(e, r), Ee("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Me({}, r, { value: void 0 }), Ee("invalid", e);
                break;
              case "textarea":
                Qg(e, r), o = jd(e, r), Ee("invalid", e);
                break;
              default:
                o = r;
            }
            Vd(n, o), a = o;
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style" ? $x(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && kx(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Gl(e, s) : typeof s == "number" && Gl(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ql.hasOwnProperty(i) ? s != null && i === "onScroll" && Ee("scroll", e) : s != null && Bh(e, i, s, l));
              }
            switch (n) {
              case "input":
                ns(e), Gg(e, r, !1);
                break;
              case "textarea":
                ns(e), Kg(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Mr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? ii(e, !!r.multiple, i, !1) : r.defaultValue != null && ii(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = vu);
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
        Kw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(j(166));
        if (n = io(oa.current), io($n.current), fs(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[bn] = t, (i = r.nodeValue !== n) && (e = Tt, e !== null))
            switch (e.tag) {
              case 3:
                cs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && cs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[bn] = t, t.stateNode = r;
      }
      return nt(t), null;
    case 13:
      if (_e(Ie), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Te && At !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          dw(), ki(), t.flags |= 98560, i = !1;
        else if (i = fs(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(j(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(j(317));
            i[bn] = t;
          } else
            ki(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
          nt(t), i = !1;
        } else
          ln !== null && (Cp(ln), ln = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ie.current & 1) !== 0 ? Ge === 0 && (Ge = 3) : Sm())), t.updateQueue !== null && (t.flags |= 4), nt(t), null);
    case 4:
      return $i(), gp(e, t), e === null && ea(t.stateNode.containerInfo), nt(t), null;
    case 10:
      return im(t.type._context), nt(t), null;
    case 17:
      return St(t.type) && yu(), nt(t), null;
    case 19:
      if (_e(Ie), i = t.memoizedState, i === null)
        return nt(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null)
        if (r)
          rl(i, !1);
        else {
          if (Ge !== 0 || e !== null && (e.flags & 128) !== 0)
            for (e = t.child; e !== null; ) {
              if (l = $u(e), l !== null) {
                for (t.flags |= 128, rl(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return $e(Ie, Ie.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && ze() > Ai && (t.flags |= 128, r = !0, rl(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = $u(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), rl(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !Te)
              return nt(t), null;
          } else
            2 * ze() - i.renderingStartTime > Ai && n !== 1073741824 && (t.flags |= 128, r = !0, rl(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ze(), t.sibling = null, n = Ie.current, $e(Ie, r ? n & 1 | 2 : n & 1), t) : (nt(t), null);
    case 22:
    case 23:
      return bm(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Et & 1073741824) !== 0 && (nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : nt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function RE(e, t) {
  switch (tm(t), t.tag) {
    case 1:
      return St(t.type) && yu(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return $i(), _e(bt), _e(lt), cm(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return um(t), null;
    case 13:
      if (_e(Ie), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(j(340));
        ki();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return _e(Ie), null;
    case 4:
      return $i(), null;
    case 10:
      return im(t.type._context), null;
    case 22:
    case 23:
      return bm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var hs = !1, rt = !1, TE = typeof WeakSet == "function" ? WeakSet : Set, K = null;
function ti(e, t) {
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
function vp(e, t, n) {
  try {
    n();
  } catch (r) {
    Ne(e, t, r);
  }
}
var F0 = !1;
function IE(e, t) {
  if (ep = hu, e = Jx(), Jh(e)) {
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
  for (tp = { focusedElem: e, selectionRange: n }, hu = !1, K = t; K !== null; )
    if (t = K, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, K = e;
    else
      for (; K !== null; ) {
        t = K;
        try {
          var m = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var v = m.memoizedProps, w = m.memoizedState, p = t.stateNode, y = p.getSnapshotBeforeUpdate(t.elementType === t.type ? v : rn(t.type, v), w);
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
  return m = F0, F0 = !1, m;
}
function Tl(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && vp(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function hc(e, t) {
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
function yp(e) {
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
function Yw(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Yw(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[bn], delete t[na], delete t[op], delete t[hE], delete t[mE])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Xw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function z0(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Xw(e.return))
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
function xp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = vu));
  else if (r !== 4 && (e = e.child, e !== null))
    for (xp(e, t, n), e = e.sibling; e !== null; )
      xp(e, t, n), e = e.sibling;
}
function wp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (wp(e, t, n), e = e.sibling; e !== null; )
      wp(e, t, n), e = e.sibling;
}
var Xe = null, on = !1;
function sr(e, t, n) {
  for (n = n.child; n !== null; )
    Zw(e, t, n), n = n.sibling;
}
function Zw(e, t, n) {
  if (Cn && typeof Cn.onCommitFiberUnmount == "function")
    try {
      Cn.onCommitFiberUnmount(lc, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      rt || ti(n, t);
    case 6:
      var r = Xe, o = on;
      Xe = null, sr(e, t, n), Xe = r, on = o, Xe !== null && (on ? (e = Xe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Xe.removeChild(n.stateNode));
      break;
    case 18:
      Xe !== null && (on ? (e = Xe, n = n.stateNode, e.nodeType === 8 ? Ef(e.parentNode, n) : e.nodeType === 1 && Ef(e, n), Xl(e)) : Ef(Xe, n.stateNode));
      break;
    case 4:
      r = Xe, o = on, Xe = n.stateNode.containerInfo, on = !0, sr(e, t, n), Xe = r, on = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!rt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && vp(n, t, l), o = o.next;
        } while (o !== r);
      }
      sr(e, t, n);
      break;
    case 1:
      if (!rt && (ti(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (a) {
          Ne(n, t, a);
        }
      sr(e, t, n);
      break;
    case 21:
      sr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (rt = (r = rt) || n.memoizedState !== null, sr(e, t, n), rt = r) : sr(e, t, n);
      break;
    default:
      sr(e, t, n);
  }
}
function B0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new TE()), t.forEach(function(r) {
      var o = jE.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function en(e, t) {
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
                Xe = a.stateNode, on = !1;
                break e;
              case 3:
                Xe = a.stateNode.containerInfo, on = !0;
                break e;
              case 4:
                Xe = a.stateNode.containerInfo, on = !0;
                break e;
            }
            a = a.return;
          }
        if (Xe === null)
          throw Error(j(160));
        Zw(i, l, o), Xe = null, on = !1;
        var s = o.alternate;
        s !== null && (s.return = null), o.return = null;
      } catch (u) {
        Ne(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Jw(t, e), t = t.sibling;
}
function Jw(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (en(t, e), gn(e), r & 4) {
        try {
          Tl(3, e, e.return), hc(3, e);
        } catch (v) {
          Ne(e, e.return, v);
        }
        try {
          Tl(5, e, e.return);
        } catch (v) {
          Ne(e, e.return, v);
        }
      }
      break;
    case 1:
      en(t, e), gn(e), r & 512 && n !== null && ti(n, n.return);
      break;
    case 5:
      if (en(t, e), gn(e), r & 512 && n !== null && ti(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Gl(o, "");
        } catch (v) {
          Ne(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, a = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            a === "input" && i.type === "radio" && i.name != null && wx(o, i), Ud(a, l);
            var u = Ud(a, i);
            for (l = 0; l < s.length; l += 2) {
              var c = s[l], f = s[l + 1];
              c === "style" ? $x(o, f) : c === "dangerouslySetInnerHTML" ? kx(o, f) : c === "children" ? Gl(o, f) : Bh(o, c, f, u);
            }
            switch (a) {
              case "input":
                zd(o, i);
                break;
              case "textarea":
                bx(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null ? ii(o, !!i.multiple, g, !1) : d !== !!i.multiple && (i.defaultValue != null ? ii(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : ii(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[na] = i;
          } catch (v) {
            Ne(e, e.return, v);
          }
      }
      break;
    case 6:
      if (en(t, e), gn(e), r & 4) {
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
      if (en(t, e), gn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Xl(t.containerInfo);
        } catch (v) {
          Ne(e, e.return, v);
        }
      break;
    case 4:
      en(t, e), gn(e);
      break;
    case 13:
      en(t, e), gn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (xm = ze())), r & 4 && B0(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (rt = (u = rt) || c, en(t, e), rt = u) : en(t, e), gn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && (e.mode & 1) !== 0)
          for (K = e, c = e.child; c !== null; ) {
            for (f = K = c; K !== null; ) {
              switch (d = K, g = d.child, d.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tl(4, d, d.return);
                  break;
                case 1:
                  ti(d, d.return);
                  var m = d.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    r = d, n = d.return;
                    try {
                      t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount();
                    } catch (v) {
                      Ne(r, n, v);
                    }
                  }
                  break;
                case 5:
                  ti(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    H0(f);
                    continue;
                  }
              }
              g !== null ? (g.return = d, K = g) : H0(f);
            }
            c = c.sibling;
          }
        e:
          for (c = null, f = e; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = f.stateNode, s = f.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, a.style.display = Cx("display", l));
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
      en(t, e), gn(e), r & 4 && B0(e);
      break;
    case 21:
      break;
    default:
      en(
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
          if (Xw(n)) {
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
          r.flags & 32 && (Gl(o, ""), r.flags &= -33);
          var i = z0(e);
          wp(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, a = z0(e);
          xp(e, a, l);
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
function OE(e, t, n) {
  K = e, eb(e);
}
function eb(e, t, n) {
  for (var r = (e.mode & 1) !== 0; K !== null; ) {
    var o = K, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || hs;
      if (!l) {
        var a = o.alternate, s = a !== null && a.memoizedState !== null || rt;
        a = hs;
        var u = rt;
        if (hs = l, (rt = s) && !u)
          for (K = o; K !== null; )
            l = K, s = l.child, l.tag === 22 && l.memoizedState !== null ? V0(o) : s !== null ? (s.return = l, K = s) : V0(o);
        for (; i !== null; )
          K = i, eb(i), i = i.sibling;
        K = o, hs = a, rt = u;
      }
      j0(e);
    } else
      (o.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = o, K = i) : j0(e);
  }
}
function j0(e) {
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
              rt || hc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !rt)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : rn(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && C0(t, i, r);
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
                C0(t, l, n);
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
              throw Error(j(163));
          }
        rt || t.flags & 512 && yp(t);
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
function H0(e) {
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
function V0(e) {
  for (; K !== null; ) {
    var t = K;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            hc(4, t);
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
            yp(t);
          } catch (s) {
            Ne(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            yp(t);
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
var ME = Math.ceil, Pu = Zn.ReactCurrentDispatcher, vm = Zn.ReactCurrentOwner, Gt = Zn.ReactCurrentBatchConfig, me = 0, Ye = null, Ve = null, Je = 0, Et = 0, ni = zr(0), Ge = 0, sa = null, mo = 0, mc = 0, ym = 0, Il = null, xt = null, xm = 0, Ai = 1 / 0, Dn = null, _u = !1, bp = null, _r = null, ms = !1, yr = null, Ru = 0, Ol = 0, Sp = null, Ks = -1, Ys = 0;
function dt() {
  return (me & 6) !== 0 ? ze() : Ks !== -1 ? Ks : Ks = ze();
}
function Rr(e) {
  return (e.mode & 1) === 0 ? 1 : (me & 2) !== 0 && Je !== 0 ? Je & -Je : vE.transition !== null ? (Ys === 0 && (Ys = Lx()), Ys) : (e = we, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ux(e.type)), e);
}
function dn(e, t, n, r) {
  if (50 < Ol)
    throw Ol = 0, Sp = null, Error(j(185));
  Ma(e, n, r), ((me & 2) === 0 || e !== Ye) && (e === Ye && ((me & 2) === 0 && (mc |= n), Ge === 4 && gr(e, Je)), kt(e, r), n === 1 && me === 0 && (t.mode & 1) === 0 && (Ai = ze() + 500, fc && Br()));
}
function kt(e, t) {
  var n = e.callbackNode;
  v$(e, t);
  var r = pu(e, e === Ye ? Je : 0);
  if (r === 0)
    n !== null && Zg(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Zg(n), t === 1)
      e.tag === 0 ? gE(U0.bind(null, e)) : uw(U0.bind(null, e)), dE(function() {
        (me & 6) === 0 && Br();
      }), n = null;
    else {
      switch (Fx(r)) {
        case 1:
          n = Wh;
          break;
        case 4:
          n = Nx;
          break;
        case 16:
          n = du;
          break;
        case 536870912:
          n = Dx;
          break;
        default:
          n = du;
      }
      n = sb(n, tb.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function tb(e, t) {
  if (Ks = -1, Ys = 0, (me & 6) !== 0)
    throw Error(j(327));
  var n = e.callbackNode;
  if (ci() && e.callbackNode !== n)
    return null;
  var r = pu(e, e === Ye ? Je : 0);
  if (r === 0)
    return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t)
    t = Tu(e, r);
  else {
    t = r;
    var o = me;
    me |= 2;
    var i = rb();
    (Ye !== e || Je !== t) && (Dn = null, Ai = ze() + 500, lo(e, t));
    do
      try {
        LE();
        break;
      } catch (a) {
        nb(e, a);
      }
    while (1);
    om(), Pu.current = i, me = o, Ve !== null ? t = 0 : (Ye = null, Je = 0, t = Ge);
  }
  if (t !== 0) {
    if (t === 2 && (o = Kd(e), o !== 0 && (r = o, t = kp(e, o))), t === 1)
      throw n = sa, lo(e, 0), gr(e, r), kt(e, ze()), n;
    if (t === 6)
      gr(e, r);
    else {
      if (o = e.current.alternate, (r & 30) === 0 && !NE(o) && (t = Tu(e, r), t === 2 && (i = Kd(e), i !== 0 && (r = i, t = kp(e, i))), t === 1))
        throw n = sa, lo(e, 0), gr(e, r), kt(e, ze()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Kr(e, xt, Dn);
          break;
        case 3:
          if (gr(e, r), (r & 130023424) === r && (t = xm + 500 - ze(), 10 < t)) {
            if (pu(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              dt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = rp(Kr.bind(null, e, xt, Dn), t);
            break;
          }
          Kr(e, xt, Dn);
          break;
        case 4:
          if (gr(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - fn(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = ze() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ME(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = rp(Kr.bind(null, e, xt, Dn), r);
            break;
          }
          Kr(e, xt, Dn);
          break;
        case 5:
          Kr(e, xt, Dn);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return kt(e, ze()), e.callbackNode === n ? tb.bind(null, e) : null;
}
function kp(e, t) {
  var n = Il;
  return e.current.memoizedState.isDehydrated && (lo(e, t).flags |= 256), e = Tu(e, t), e !== 2 && (t = xt, xt = n, t !== null && Cp(t)), e;
}
function Cp(e) {
  xt === null ? xt = e : xt.push.apply(xt, e);
}
function NE(e) {
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
  for (t &= ~ym, t &= ~mc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - fn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function U0(e) {
  if ((me & 6) !== 0)
    throw Error(j(327));
  ci();
  var t = pu(e, 0);
  if ((t & 1) === 0)
    return kt(e, ze()), null;
  var n = Tu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Kd(e);
    r !== 0 && (t = r, n = kp(e, r));
  }
  if (n === 1)
    throw n = sa, lo(e, 0), gr(e, t), kt(e, ze()), n;
  if (n === 6)
    throw Error(j(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Kr(e, xt, Dn), kt(e, ze()), null;
}
function wm(e, t) {
  var n = me;
  me |= 1;
  try {
    return e(t);
  } finally {
    me = n, me === 0 && (Ai = ze() + 500, fc && Br());
  }
}
function go(e) {
  yr !== null && yr.tag === 0 && (me & 6) === 0 && ci();
  var t = me;
  me |= 1;
  var n = Gt.transition, r = we;
  try {
    if (Gt.transition = null, we = 1, e)
      return e();
  } finally {
    we = r, Gt.transition = n, me = t, (me & 6) === 0 && Br();
  }
}
function bm() {
  Et = ni.current, _e(ni);
}
function lo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, fE(n)), Ve !== null)
    for (n = Ve.return; n !== null; ) {
      var r = n;
      switch (tm(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && yu();
          break;
        case 3:
          $i(), _e(bt), _e(lt), cm();
          break;
        case 5:
          um(r);
          break;
        case 4:
          $i();
          break;
        case 13:
          _e(Ie);
          break;
        case 19:
          _e(Ie);
          break;
        case 10:
          im(r.type._context);
          break;
        case 22:
        case 23:
          bm();
      }
      n = n.return;
    }
  if (Ye = e, Ve = e = Tr(e.current, null), Je = Et = t, Ge = 0, sa = null, ym = mc = mo = 0, xt = Il = null, oo !== null) {
    for (t = 0; t < oo.length; t++)
      if (n = oo[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var l = i.next;
          i.next = o, r.next = l;
        }
        n.pending = r;
      }
    oo = null;
  }
  return e;
}
function nb(e, t) {
  do {
    var n = Ve;
    try {
      if (om(), qs.current = Au, Eu) {
        for (var r = Oe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Eu = !1;
      }
      if (ho = 0, Qe = qe = Oe = null, Rl = !1, ia = 0, vm.current = null, n === null || n.return === null) {
        Ge = 1, sa = t, Ve = null;
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
          var g = T0(l);
          if (g !== null) {
            g.flags &= -257, I0(g, l, a, i, t), g.mode & 1 && R0(i, u, t), t = g, s = u;
            var m = t.updateQueue;
            if (m === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(s), t.updateQueue = v;
            } else
              m.add(s);
            break e;
          } else {
            if ((t & 1) === 0) {
              R0(i, u, t), Sm();
              break e;
            }
            s = Error(j(426));
          }
        } else if (Te && a.mode & 1) {
          var w = T0(l);
          if (w !== null) {
            (w.flags & 65536) === 0 && (w.flags |= 256), I0(w, l, a, i, t), nm(Ei(s, a));
            break e;
          }
        }
        i = s = Ei(s, a), Ge !== 4 && (Ge = 2), Il === null ? Il = [i] : Il.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = zw(i, s, t);
              k0(i, p);
              break e;
            case 1:
              a = s;
              var y = i.type, x = i.stateNode;
              if ((i.flags & 128) === 0 && (typeof y.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (_r === null || !_r.has(x)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var b = Bw(i, a, t);
                k0(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ib(n);
    } catch (A) {
      t = A, Ve === n && n !== null && (Ve = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function rb() {
  var e = Pu.current;
  return Pu.current = Au, e === null ? Au : e;
}
function Sm() {
  (Ge === 0 || Ge === 3 || Ge === 2) && (Ge = 4), Ye === null || (mo & 268435455) === 0 && (mc & 268435455) === 0 || gr(Ye, Je);
}
function Tu(e, t) {
  var n = me;
  me |= 2;
  var r = rb();
  (Ye !== e || Je !== t) && (Dn = null, lo(e, t));
  do
    try {
      DE();
      break;
    } catch (o) {
      nb(e, o);
    }
  while (1);
  if (om(), me = n, Pu.current = r, Ve !== null)
    throw Error(j(261));
  return Ye = null, Je = 0, Ge;
}
function DE() {
  for (; Ve !== null; )
    ob(Ve);
}
function LE() {
  for (; Ve !== null && !s$(); )
    ob(Ve);
}
function ob(e) {
  var t = ab(e.alternate, e, Et);
  e.memoizedProps = e.pendingProps, t === null ? ib(e) : Ve = t, vm.current = null;
}
function ib(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, (t.flags & 32768) === 0) {
      if (n = _E(n, t, Et), n !== null) {
        Ve = n;
        return;
      }
    } else {
      if (n = RE(n, t), n !== null) {
        n.flags &= 32767, Ve = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ge = 6, Ve = null;
        return;
      }
    }
    if (t = t.sibling, t !== null) {
      Ve = t;
      return;
    }
    Ve = t = e;
  } while (t !== null);
  Ge === 0 && (Ge = 5);
}
function Kr(e, t, n) {
  var r = we, o = Gt.transition;
  try {
    Gt.transition = null, we = 1, FE(e, t, n, r);
  } finally {
    Gt.transition = o, we = r;
  }
  return null;
}
function FE(e, t, n, r) {
  do
    ci();
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
  if (y$(e, i), e === Ye && (Ve = Ye = null, Je = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ms || (ms = !0, sb(du, function() {
    return ci(), null;
  })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
    i = Gt.transition, Gt.transition = null;
    var l = we;
    we = 1;
    var a = me;
    me |= 4, vm.current = null, IE(e, n), Jw(n, e), oE(tp), hu = !!ep, tp = ep = null, e.current = n, OE(n), u$(), me = a, we = l, Gt.transition = i;
  } else
    e.current = n;
  if (ms && (ms = !1, yr = e, Ru = o), i = e.pendingLanes, i === 0 && (_r = null), d$(n.stateNode), kt(e, ze()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (_u)
    throw _u = !1, e = bp, bp = null, e;
  return (Ru & 1) !== 0 && e.tag !== 0 && ci(), i = e.pendingLanes, (i & 1) !== 0 ? e === Sp ? Ol++ : (Ol = 0, Sp = e) : Ol = 0, Br(), null;
}
function ci() {
  if (yr !== null) {
    var e = Fx(Ru), t = Gt.transition, n = we;
    try {
      if (Gt.transition = null, we = 16 > e ? 16 : e, yr === null)
        var r = !1;
      else {
        if (e = yr, yr = null, Ru = 0, (me & 6) !== 0)
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
                      Tl(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null)
                    f.return = c, K = f;
                  else
                    for (; K !== null; ) {
                      c = K;
                      var d = c.sibling, g = c.return;
                      if (Yw(c), c === u) {
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
              var m = i.alternate;
              if (m !== null) {
                var v = m.child;
                if (v !== null) {
                  m.child = null;
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
                      Tl(9, i, i.return);
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
                        hc(9, a);
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
        if (me = o, Br(), Cn && typeof Cn.onPostCommitFiberRoot == "function")
          try {
            Cn.onPostCommitFiberRoot(lc, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      we = n, Gt.transition = t;
    }
  }
  return !1;
}
function W0(e, t, n) {
  t = Ei(n, t), t = zw(e, t, 1), e = Pr(e, t, 1), t = dt(), e !== null && (Ma(e, 1, t), kt(e, t));
}
function Ne(e, t, n) {
  if (e.tag === 3)
    W0(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        W0(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (_r === null || !_r.has(r))) {
          e = Ei(n, e), e = Bw(t, e, 1), t = Pr(t, e, 1), e = dt(), t !== null && (Ma(t, 1, e), kt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function zE(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = dt(), e.pingedLanes |= e.suspendedLanes & n, Ye === e && (Je & n) === n && (Ge === 4 || Ge === 3 && (Je & 130023424) === Je && 500 > ze() - xm ? lo(e, 0) : ym |= n), kt(e, t);
}
function lb(e, t) {
  t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = is, is <<= 1, (is & 130023424) === 0 && (is = 4194304)));
  var n = dt();
  e = Gn(e, t), e !== null && (Ma(e, t, n), kt(e, n));
}
function BE(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), lb(e, n);
}
function jE(e, t) {
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
  r !== null && r.delete(t), lb(e, n);
}
var ab;
ab = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || bt.current)
      wt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return wt = !1, PE(e, t, n);
      wt = (e.flags & 131072) !== 0;
    }
  else
    wt = !1, Te && (t.flags & 1048576) !== 0 && cw(t, bu, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Qs(e, t), e = t.pendingProps;
      var o = Si(t, lt.current);
      ui(t, n), o = dm(null, t, r, e, o, n);
      var i = pm();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, St(r) ? (i = !0, xu(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, am(t), o.updater = dc, t.stateNode = o, o._reactInternals = t, cp(t, r, e, n), t = pp(null, t, r, !0, i, n)) : (t.tag = 0, Te && i && em(t), ct(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Qs(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = VE(r), e = rn(r, e), o) {
          case 0:
            t = dp(null, t, r, e, n);
            break e;
          case 1:
            t = N0(null, t, r, e, n);
            break e;
          case 11:
            t = O0(null, t, r, e, n);
            break e;
          case 14:
            t = M0(null, t, r, rn(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : rn(r, o), dp(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : rn(r, o), N0(e, t, r, o, n);
    case 3:
      e: {
        if (Uw(t), e === null)
          throw Error(j(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, hw(e, t), Cu(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Ei(Error(j(423)), t), t = D0(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Ei(Error(j(424)), t), t = D0(e, t, r, n, o);
            break e;
          } else
            for (At = Ar(t.stateNode.containerInfo.firstChild), Tt = t, Te = !0, ln = null, n = yw(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ki(), r === o) {
            t = Qn(e, t, n);
            break e;
          }
          ct(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return xw(t), e === null && ap(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, np(r, o) ? l = null : i !== null && np(r, i) && (t.flags |= 32), Vw(e, t), ct(e, t, l, n), t.child;
    case 6:
      return e === null && ap(t), null;
    case 13:
      return Ww(e, t, n);
    case 4:
      return sm(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ci(t, null, r, n) : ct(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : rn(r, o), O0(e, t, r, o, n);
    case 7:
      return ct(e, t, t.pendingProps, n), t.child;
    case 8:
      return ct(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ct(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, $e(Su, r._currentValue), r._currentValue = l, i !== null)
          if (hn(i.value, l)) {
            if (i.children === o.children && !bt.current) {
              t = Qn(e, t, n);
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
                      s = Un(-1, n & -n), s.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? s.next = s : (s.next = c.next, c.next = s), u.pending = s;
                      }
                    }
                    i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), sp(
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
                l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), sp(l, n, t), l = i.sibling;
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
      return o = t.type, r = t.pendingProps.children, ui(t, n), o = Qt(o), r = r(o), t.flags |= 1, ct(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = rn(r, t.pendingProps), o = rn(r.type, o), M0(e, t, r, o, n);
    case 15:
      return jw(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : rn(r, o), Qs(e, t), t.tag = 1, St(r) ? (e = !0, xu(t)) : e = !1, ui(t, n), gw(t, r, o), cp(t, r, o, n), pp(null, t, r, !0, e, n);
    case 19:
      return qw(e, t, n);
    case 22:
      return Hw(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function sb(e, t) {
  return Mx(e, t);
}
function HE(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function qt(e, t, n, r) {
  return new HE(e, t, n, r);
}
function km(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function VE(e) {
  if (typeof e == "function")
    return km(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Hh)
      return 11;
    if (e === Vh)
      return 14;
  }
  return 2;
}
function Tr(e, t) {
  var n = e.alternate;
  return n === null ? (n = qt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Xs(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function")
    km(e) && (l = 1);
  else if (typeof e == "string")
    l = 5;
  else
    e:
      switch (e) {
        case qo:
          return ao(n.children, o, i, t);
        case jh:
          l = 8, o |= 8;
          break;
        case Md:
          return e = qt(12, n, t, o | 2), e.elementType = Md, e.lanes = i, e;
        case Nd:
          return e = qt(13, n, t, o), e.elementType = Nd, e.lanes = i, e;
        case Dd:
          return e = qt(19, n, t, o), e.elementType = Dd, e.lanes = i, e;
        case vx:
          return gc(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case mx:
                l = 10;
                break e;
              case gx:
                l = 9;
                break e;
              case Hh:
                l = 11;
                break e;
              case Vh:
                l = 14;
                break e;
              case pr:
                l = 16, r = null;
                break e;
            }
          throw Error(j(130, e == null ? e : typeof e, ""));
      }
  return t = qt(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function ao(e, t, n, r) {
  return e = qt(7, e, r, t), e.lanes = n, e;
}
function gc(e, t, n, r) {
  return e = qt(22, e, r, t), e.elementType = vx, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Mf(e, t, n) {
  return e = qt(6, e, null, t), e.lanes = n, e;
}
function Nf(e, t, n) {
  return t = qt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function UE(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = mf(0), this.expirationTimes = mf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mf(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Cm(e, t, n, r, o, i, l, a, s) {
  return e = new UE(e, t, n, a, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = qt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, am(i), e;
}
function WE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Wo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ub(e) {
  if (!e)
    return Nr;
  e = e._reactInternals;
  e: {
    if ($o(e) !== e || e.tag !== 1)
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
      return sw(e, n, t);
  }
  return t;
}
function cb(e, t, n, r, o, i, l, a, s) {
  return e = Cm(n, r, !0, e, o, i, l, a, s), e.context = ub(null), n = e.current, r = dt(), o = Rr(n), i = Un(r, o), i.callback = t != null ? t : null, Pr(n, i, o), e.current.lanes = o, Ma(e, o, r), kt(e, r), e;
}
function vc(e, t, n, r) {
  var o = t.current, i = dt(), l = Rr(o);
  return n = ub(n), t.context === null ? t.context = n : t.pendingContext = n, t = Un(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Pr(o, t, l), e !== null && (dn(e, o, l, i), Ws(e, o, l)), l;
}
function Iu(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function q0(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $m(e, t) {
  q0(e, t), (e = e.alternate) && q0(e, t);
}
function qE() {
  return null;
}
var fb = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Em(e) {
  this._internalRoot = e;
}
yc.prototype.render = Em.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(j(409));
  vc(e, t, null, null);
};
yc.prototype.unmount = Em.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    go(function() {
      vc(null, e, null, null);
    }), t[qn] = null;
  }
};
function yc(e) {
  this._internalRoot = e;
}
yc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = jx();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < mr.length && t !== 0 && t < mr[n].priority; n++)
      ;
    mr.splice(n, 0, e), n === 0 && Vx(e);
  }
};
function Am(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function xc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function G0() {
}
function GE(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Iu(l);
        i.call(u);
      };
    }
    var l = cb(t, r, e, 0, null, !1, !1, "", G0);
    return e._reactRootContainer = l, e[qn] = l.current, ea(e.nodeType === 8 ? e.parentNode : e), go(), l;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = Iu(s);
      a.call(u);
    };
  }
  var s = Cm(e, 0, !1, null, null, !1, !1, "", G0);
  return e._reactRootContainer = s, e[qn] = s.current, ea(e.nodeType === 8 ? e.parentNode : e), go(function() {
    vc(t, s, n, r);
  }), s;
}
function wc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var s = Iu(l);
        a.call(s);
      };
    }
    vc(t, l, e, o);
  } else
    l = GE(n, t, e, o, r);
  return Iu(l);
}
zx = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xl(t.pendingLanes);
        n !== 0 && (qh(t, n | 1), kt(t, ze()), (me & 6) === 0 && (Ai = ze() + 500, Br()));
      }
      break;
    case 13:
      go(function() {
        var r = Gn(e, 1);
        if (r !== null) {
          var o = dt();
          dn(r, e, 1, o);
        }
      }), $m(e, 1);
  }
};
Gh = function(e) {
  if (e.tag === 13) {
    var t = Gn(e, 134217728);
    if (t !== null) {
      var n = dt();
      dn(t, e, 134217728, n);
    }
    $m(e, 134217728);
  }
};
Bx = function(e) {
  if (e.tag === 13) {
    var t = Rr(e), n = Gn(e, t);
    if (n !== null) {
      var r = dt();
      dn(n, e, t, r);
    }
    $m(e, t);
  }
};
jx = function() {
  return we;
};
Hx = function(e, t) {
  var n = we;
  try {
    return we = e, t();
  } finally {
    we = n;
  }
};
qd = function(e, t, n) {
  switch (t) {
    case "input":
      if (zd(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = cc(r);
            if (!o)
              throw Error(j(90));
            xx(r), zd(r, o);
          }
        }
      }
      break;
    case "textarea":
      bx(e, n);
      break;
    case "select":
      t = n.value, t != null && ii(e, !!n.multiple, t, !1);
  }
};
Px = wm;
_x = go;
var QE = { usingClientEntryPoint: !1, Events: [Da, Yo, cc, Ex, Ax, wm] }, ol = { findFiberByHostInstance: ro, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, KE = { bundleType: ol.bundleType, version: ol.version, rendererPackageName: ol.rendererPackageName, rendererConfig: ol.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Zn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ix(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ol.findFiberByHostInstance || qE, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var gs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gs.isDisabled && gs.supportsFiber)
    try {
      lc = gs.inject(KE), Cn = gs;
    } catch {
    }
}
Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = QE;
Mt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Am(t))
    throw Error(j(200));
  return WE(e, t, null, n);
};
Mt.createRoot = function(e, t) {
  if (!Am(e))
    throw Error(j(299));
  var n = !1, r = "", o = fb;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Cm(e, 1, !1, null, null, n, !1, r, o), e[qn] = t.current, ea(e.nodeType === 8 ? e.parentNode : e), new Em(t);
};
Mt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e)));
  return e = Ix(t), e = e === null ? null : e.stateNode, e;
};
Mt.flushSync = function(e) {
  return go(e);
};
Mt.hydrate = function(e, t, n) {
  if (!xc(t))
    throw Error(j(200));
  return wc(null, e, t, !0, n);
};
Mt.hydrateRoot = function(e, t, n) {
  if (!Am(e))
    throw Error(j(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = fb;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = cb(t, null, e, 1, n != null ? n : null, o, !1, i, l), e[qn] = t.current, ea(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new yc(t);
};
Mt.render = function(e, t, n) {
  if (!xc(t))
    throw Error(j(200));
  return wc(null, e, t, !1, n);
};
Mt.unmountComponentAtNode = function(e) {
  if (!xc(e))
    throw Error(j(40));
  return e._reactRootContainer ? (go(function() {
    wc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[qn] = null;
    });
  }), !0) : !1;
};
Mt.unstable_batchedUpdates = wm;
Mt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!xc(n))
    throw Error(j(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(j(38));
  return wc(e, t, n, !1, r);
};
Mt.version = "18.2.0-next-9e3b772b8-20220608";
(function(e) {
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), e.exports = Mt;
})(Yt);
const db = /* @__PURE__ */ Oh(Yt.exports);
var pb, Q0 = Yt.exports;
pb = Q0.createRoot, Q0.hydrateRoot;
let hb = () => ({
  events: {},
  emit(e, ...t) {
    (this.events[e] || []).forEach((n) => n(...t));
  },
  on(e, t) {
    return (this.events[e] = this.events[e] || []).push(t), () => this.events[e] = (this.events[e] || []).filter((n) => n !== t);
  }
});
class Ou extends Error {
  constructor(t) {
    super(Ou._prepareSuperMessage(t)), Object.defineProperty(this, "name", {
      value: "NonError",
      configurable: !0,
      writable: !0
    }), Error.captureStackTrace && Error.captureStackTrace(this, Ou);
  }
  static _prepareSuperMessage(t) {
    try {
      return JSON.stringify(t);
    } catch {
      return String(t);
    }
  }
}
const YE = [
  { property: "name", enumerable: !1 },
  { property: "message", enumerable: !1 },
  { property: "stack", enumerable: !1 },
  { property: "code", enumerable: !0 }
], $p = Symbol(".toJSON called"), XE = (e) => {
  e[$p] = !0;
  const t = e.toJSON();
  return delete e[$p], t;
}, Pm = ({
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
  if (typeof e.toJSON == "function" && e[$p] !== !0)
    return XE(e);
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
        i++, l[a] = Pm({
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
  for (const { property: a, enumerable: s } of YE)
    typeof e[a] == "string" && Object.defineProperty(l, a, {
      value: e[a],
      enumerable: r ? !0 : s,
      configurable: !0,
      writable: !0
    });
  return l;
}, ZE = (e, t = {}) => {
  const { maxDepth: n = Number.POSITIVE_INFINITY } = t;
  return typeof e == "object" && e !== null ? Pm({
    from: e,
    seen: [],
    forceEnumerable: !0,
    maxDepth: n,
    depth: 0
  }) : typeof e == "function" ? `[Function: ${e.name || "anonymous"}]` : e;
}, JE = (e, t = {}) => {
  const { maxDepth: n = Number.POSITIVE_INFINITY } = t;
  if (e instanceof Error)
    return e;
  if (typeof e == "object" && e !== null && !Array.isArray(e)) {
    const r = new Error();
    return Pm({
      from: e,
      seen: [],
      to_: r,
      maxDepth: n,
      depth: 0
    }), r;
  }
  return new Ou(e);
};
var e5 = {
  serializeError: ZE,
  deserializeError: JE
}, bc = { exports: {} };
const t5 = (e) => typeof crypto < "u" && typeof crypto.getRandomValues == "function" ? () => {
  const t = crypto.getRandomValues(new Uint8Array(1))[0];
  return (t >= e ? t % e : t).toString(e);
} : () => Math.floor(Math.random() * e).toString(e), mb = (e = 7, t = !1) => Array.from({ length: e }, t5(t ? 16 : 36)).join("");
bc.exports = mb;
bc.exports.default = mb;
var n5 = Object.defineProperty, r5 = Object.defineProperties, o5 = Object.getOwnPropertyDescriptors, K0 = Object.getOwnPropertySymbols, i5 = Object.prototype.hasOwnProperty, l5 = Object.prototype.propertyIsEnumerable, Y0 = (e, t, n) => t in e ? n5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, gb = (e, t) => {
  for (var n in t || (t = {}))
    i5.call(t, n) && Y0(e, n, t[n]);
  if (K0)
    for (var n of K0(t))
      l5.call(t, n) && Y0(e, n, t[n]);
  return e;
}, vb = (e, t) => r5(e, o5(t)), a5 = /^((?:background$)|devtools|content-script|window)(?:@(\d+))?$/, yb = (e) => {
  const [, t, n] = e.match(a5) || [];
  return {
    context: t,
    tabId: +n
  };
}, Df = (e) => it[e], De = Df("devtools") ? "devtools" : Df("tabs") ? "background" : Df("extension") ? "content-script" : typeof document < "u" ? "window" : null, X0 = bc.exports(), Ep = /* @__PURE__ */ new Map(), xb = /* @__PURE__ */ new Map(), Ap = /* @__PURE__ */ new Set(), Pp = /* @__PURE__ */ new Map(), Yr = null, Mu, wb;
s5();
function s5() {
  if (De === null)
    throw new Error("Unable to detect runtime context i.e webext-bridge can't figure out what to do");
  if ((De === "window" || De === "content-script") && window.addEventListener("message", c5), De === "content-script" && top === window && (Yr = it.runtime.connect(), Yr.onMessage.addListener((e) => {
    fi(e);
  })), De === "devtools") {
    const { tabId: e } = it.devtools.inspectedWindow, t = `devtools@${e}`;
    Yr = it.runtime.connect(void 0, { name: t }), Yr.onMessage.addListener((n) => {
      fi(n);
    }), Yr.onDisconnect.addListener(() => {
      Yr = null;
    });
  }
  De === "background" && it.runtime.onConnect.addListener((e) => {
    const t = e.name || `content-script@${e.sender.tab.id}`, { tabId: n } = yb(t);
    !n || (Pp.set(t, e), Ap.forEach((r) => {
      r.resolvedDestination === t && (e.postMessage(r.message), Ap.delete(r));
    }), e.onDisconnect.addListener(() => {
      Pp.delete(t);
    }), e.onMessage.addListener((r) => {
      var o;
      (o = r == null ? void 0 : r.origin) != null && o.context && (r.origin.tabId = n, fi(r));
    }));
  });
}
function fi(e) {
  const { origin: t, destination: n } = e;
  if (!e.hops.includes(X0) && (e.hops.push(X0), !(De === "content-script" && [n, t].some((r) => (r == null ? void 0 : r.context) === "window") && !wb))) {
    if (!n)
      return u5(e);
    if (n.context) {
      if (De === "window")
        return _p(window, e);
      if (De === "content-script" && n.context === "window")
        return e.destination = null, _p(window, e);
      if (De === "devtools" || De === "content-script")
        return n.context === "background" && (e.destination = null), Yr.postMessage(e);
      if (De === "background") {
        const { context: r, tabId: o } = n, { tabId: i } = t;
        r !== "window" ? e.destination = null : e.destination.tabId = null;
        const l = `${r === "window" ? "content-script" : r}@${o || i}`, a = Pp.get(l);
        a ? a.postMessage(e) : Ap.add({ resolvedDestination: l, message: e });
      }
    }
  }
}
async function u5(e) {
  const { transactionId: t, messageID: n, messageType: r } = e, o = () => {
    const l = Ep.get(t);
    if (l) {
      const { err: a, data: s } = e;
      if (a) {
        const u = a, c = self[u.name], f = new (typeof c == "function" ? c : Error)(u.message);
        for (const d in u)
          f[d] = u[d];
        l.reject(f);
      } else
        l.resolve(s);
      Ep.delete(t);
    }
  }, i = async () => {
    let l, a, s = !1;
    try {
      const u = xb.get(n);
      if (typeof u == "function")
        l = await u({
          sender: e.origin,
          id: n,
          data: e.data,
          timestamp: e.timestamp
        });
      else
        throw s = !0, new Error(`[webext-bridge] No handler registered in '${De}' to accept messages with id '${n}'`);
    } catch (u) {
      a = u;
    } finally {
      if (a && (e.err = e5.serializeError(a)), fi(vb(gb({}, e), {
        messageType: "reply",
        data: l,
        origin: { context: De, tabId: null },
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
async function c5({ data: e, ports: t }) {
  if (!(De === "content-script" && !wb)) {
    if (e.cmd === "__crx_bridge_verify_listening" && e.scope === Mu && e.context !== De)
      t[0].postMessage(!0);
    else if (e.cmd === "__crx_bridge_route_message" && e.scope === Mu && e.context !== De) {
      const { payload: n } = e;
      De === "content-script" && (n.origin = {
        context: "window",
        tabId: null
      }), fi(n);
    }
  }
}
function _p(e, t) {
  f5();
  const n = new MessageChannel(), r = setTimeout(() => {
    n.port1.onmessage = null, _p(e, t);
  }, 300);
  n.port1.onmessage = () => {
    clearTimeout(r), e.postMessage({
      cmd: "__crx_bridge_route_message",
      scope: Mu,
      context: De,
      payload: t
    }, "*");
  }, e.postMessage({
    cmd: "__crx_bridge_verify_listening",
    scope: Mu,
    context: De
  }, "*", [n.port2]);
}
function f5() {
  throw new Error(`webext-bridge uses window.postMessage to talk with other "window"(s), for message routing and stuff,which is global/conflicting operation in case there are other scripts using webext-bridge. Call Bridge#setNamespace(nsps) to isolate your app. Example: setNamespace('com.facebook.react-devtools'). Make sure to use same namespace across all your scripts whereever window.postMessage is likely to be used\``);
}
function Sc(e, t) {
  xb.set(e, t);
}
async function so(e, t, n = "background") {
  const r = typeof n == "string" ? yb(n) : n, o = "Bridge#sendMessage ->";
  if (!r.context)
    throw new TypeError(`${o} Destination must be any one of known destinations`);
  if (De === "background") {
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
      transactionId: bc.exports(),
      origin: { context: De, tabId: null },
      hops: [],
      timestamp: Date.now()
    };
    Ep.set(a.transactionId, { resolve: i, reject: l }), fi(a);
  });
}
var Vo = class {
  constructor(e) {
    this.handleStreamClose = () => {
      this.isClosed || (this.isClosed = !0, this.emitter.emit("closed", !0), this.emitter.events = {});
    }, this.internalInfo = e, this.emitter = hb(), this.isClosed = !1, Vo.initDone || (Sc("__crx_bridge_stream_transfer__", (t) => {
      const { streamId: n, streamTransfer: r, action: o } = t.data, i = Vo.openStreams.get(n);
      i && !i.isClosed && (o === "transfer" && i.emitter.emit("message", r), o === "close" && (Vo.openStreams.delete(n), i.handleStreamClose()));
    }), Vo.initDone = !0), Vo.openStreams.set(e.streamId, this);
  }
  get info() {
    return this.internalInfo;
  }
  send(e) {
    if (this.isClosed)
      throw new Error("Attempting to send a message over closed stream. Use stream.onClose(<callback>) to keep an eye on stream status");
    so("__crx_bridge_stream_transfer__", {
      streamId: this.internalInfo.streamId,
      streamTransfer: e,
      action: "transfer"
    }, this.internalInfo.endpoint);
  }
  close(e) {
    e && this.send(e), this.handleStreamClose(), so("__crx_bridge_stream_transfer__", {
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
}, _m = Vo;
_m.initDone = !1;
_m.openStreams = /* @__PURE__ */ new Map();
var d5 = /* @__PURE__ */ new Map(), p5 = hb();
Sc("__crx_bridge_stream_open__", (e) => new Promise((t) => {
  const { sender: n, data: r } = e, { channel: o } = r;
  let i = !1, l = () => {
  };
  const a = () => {
    const s = d5.get(o);
    typeof s == "function" ? (s(new _m(vb(gb({}, r), { endpoint: n }))), i && l(), t(!0)) : i || (i = !0, l = p5.on("did-change-stream-callbacks", a));
  };
  a();
}));
var Rm = za(), re = (e) => Fa(e, Rm), Tm = za();
re.write = (e) => Fa(e, Tm);
var kc = za();
re.onStart = (e) => Fa(e, kc);
var Im = za();
re.onFrame = (e) => Fa(e, Im);
var Om = za();
re.onFinish = (e) => Fa(e, Om);
var di = [];
re.setTimeout = (e, t) => {
  let n = re.now() + t, r = () => {
    let i = di.findIndex((l) => l.cancel == r);
    ~i && di.splice(i, 1), wr -= ~i ? 1 : 0;
  }, o = { time: n, handler: e, cancel: r };
  return di.splice(bb(n), 0, o), wr += 1, Sb(), o;
};
var bb = (e) => ~(~di.findIndex((t) => t.time > e) || ~di.length);
re.cancel = (e) => {
  kc.delete(e), Im.delete(e), Om.delete(e), Rm.delete(e), Tm.delete(e);
};
re.sync = (e) => {
  Rp = !0, re.batchedUpdates(e), Rp = !1;
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
    kc.delete(n), t = null;
  }, r;
};
var Mm = typeof window < "u" ? window.requestAnimationFrame : () => {
};
re.use = (e) => Mm = e;
re.now = typeof performance < "u" ? () => performance.now() : Date.now;
re.batchedUpdates = (e) => e();
re.catch = console.error;
re.frameLoop = "always";
re.advance = () => {
  re.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Cb();
};
var xr = -1, wr = 0, Rp = !1;
function Fa(e, t) {
  Rp ? (t.delete(e), e(0)) : (t.add(e), Sb());
}
function Sb() {
  xr < 0 && (xr = 0, re.frameLoop !== "demand" && Mm(kb));
}
function h5() {
  xr = -1;
}
function kb() {
  ~xr && (Mm(kb), re.batchedUpdates(Cb));
}
function Cb() {
  let e = xr;
  xr = re.now();
  let t = bb(xr);
  if (t && ($b(di.splice(0, t), (n) => n.handler()), wr -= t), !wr) {
    h5();
    return;
  }
  kc.flush(), Rm.flush(e ? Math.min(64, xr - e) : 16.667), Im.flush(), Tm.flush(), Om.flush();
}
function za() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return { add(n) {
    wr += t == e && !e.has(n) ? 1 : 0, e.add(n);
  }, delete(n) {
    return wr -= t == e && e.has(n) ? 1 : 0, e.delete(n);
  }, flush(n) {
    t.size && (e = /* @__PURE__ */ new Set(), wr -= t.size, $b(t, (r) => r(n) && e.add(r)), wr += e.size, t = e);
  } };
}
function $b(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      re.catch(r);
    }
  });
}
var m5 = Object.defineProperty, g5 = (e, t) => {
  for (var n in t)
    m5(e, n, { get: t[n], enumerable: !0 });
}, mn = {};
g5(mn, { assign: () => y5, colors: () => Ir, createStringInterpolator: () => Dm, skipAnimation: () => Ab, to: () => Eb, willAdvance: () => Lm });
function Tp() {
}
var v5 = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), U = { arr: Array.isArray, obj: (e) => !!e && e.constructor.name === "Object", fun: (e) => typeof e == "function", str: (e) => typeof e == "string", num: (e) => typeof e == "number", und: (e) => e === void 0 };
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
function Ml(e, t) {
  if (e.size) {
    let n = Array.from(e);
    e.clear(), pe(n, t);
  }
}
var bl = (e, ...t) => Ml(e, (n) => n(...t)), Nm = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), Dm, Eb, Ir = null, Ab = !1, Lm = Tp, y5 = (e) => {
  e.to && (Eb = e.to), e.now && (re.now = e.now), e.colors !== void 0 && (Ir = e.colors), e.skipAnimation != null && (Ab = e.skipAnimation), e.createStringInterpolator && (Dm = e.createStringInterpolator), e.requestAnimationFrame && re.use(e.requestAnimationFrame), e.batchedUpdates && (re.batchedUpdates = e.batchedUpdates), e.willAdvance && (Lm = e.willAdvance), e.frameLoop && (re.frameLoop = e.frameLoop);
}, Nl = /* @__PURE__ */ new Set(), Vt = [], Lf = [], Nu = 0, Cc = { get idle() {
  return !Nl.size && !Vt.length;
}, start(e) {
  Nu > e.priority ? (Nl.add(e), re.onStart(x5)) : (Pb(e), re(Ip));
}, advance: Ip, sort(e) {
  if (Nu)
    re.onFrame(() => Cc.sort(e));
  else {
    let t = Vt.indexOf(e);
    ~t && (Vt.splice(t, 1), _b(e));
  }
}, clear() {
  Vt = [], Nl.clear();
} };
function x5() {
  Nl.forEach(Pb), Nl.clear(), re(Ip);
}
function Pb(e) {
  Vt.includes(e) || _b(e);
}
function _b(e) {
  Vt.splice(w5(Vt, (t) => t.priority > e.priority), 0, e);
}
function Ip(e) {
  let t = Lf;
  for (let n = 0; n < Vt.length; n++) {
    let r = Vt[n];
    Nu = r.priority, r.idle || (Lm(r), r.advance(e), r.idle || t.push(r));
  }
  return Nu = 0, Lf = Vt, Lf.length = 0, Vt = t, Vt.length > 0;
}
function w5(e, t) {
  let n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var b5 = (e, t, n) => Math.min(Math.max(n, e), t), S5 = { transparent: 0, aliceblue: 4042850303, antiquewhite: 4209760255, aqua: 16777215, aquamarine: 2147472639, azure: 4043309055, beige: 4126530815, bisque: 4293182719, black: 255, blanchedalmond: 4293643775, blue: 65535, blueviolet: 2318131967, brown: 2771004159, burlywood: 3736635391, burntsienna: 3934150143, cadetblue: 1604231423, chartreuse: 2147418367, chocolate: 3530104575, coral: 4286533887, cornflowerblue: 1687547391, cornsilk: 4294499583, crimson: 3692313855, cyan: 16777215, darkblue: 35839, darkcyan: 9145343, darkgoldenrod: 3095792639, darkgray: 2846468607, darkgreen: 6553855, darkgrey: 2846468607, darkkhaki: 3182914559, darkmagenta: 2332068863, darkolivegreen: 1433087999, darkorange: 4287365375, darkorchid: 2570243327, darkred: 2332033279, darksalmon: 3918953215, darkseagreen: 2411499519, darkslateblue: 1211993087, darkslategray: 793726975, darkslategrey: 793726975, darkturquoise: 13554175, darkviolet: 2483082239, deeppink: 4279538687, deepskyblue: 12582911, dimgray: 1768516095, dimgrey: 1768516095, dodgerblue: 512819199, firebrick: 2988581631, floralwhite: 4294635775, forestgreen: 579543807, fuchsia: 4278255615, gainsboro: 3705462015, ghostwhite: 4177068031, gold: 4292280575, goldenrod: 3668254975, gray: 2155905279, green: 8388863, greenyellow: 2919182335, grey: 2155905279, honeydew: 4043305215, hotpink: 4285117695, indianred: 3445382399, indigo: 1258324735, ivory: 4294963455, khaki: 4041641215, lavender: 3873897215, lavenderblush: 4293981695, lawngreen: 2096890111, lemonchiffon: 4294626815, lightblue: 2916673279, lightcoral: 4034953471, lightcyan: 3774873599, lightgoldenrodyellow: 4210742015, lightgray: 3553874943, lightgreen: 2431553791, lightgrey: 3553874943, lightpink: 4290167295, lightsalmon: 4288707327, lightseagreen: 548580095, lightskyblue: 2278488831, lightslategray: 2005441023, lightslategrey: 2005441023, lightsteelblue: 2965692159, lightyellow: 4294959359, lime: 16711935, limegreen: 852308735, linen: 4210091775, magenta: 4278255615, maroon: 2147483903, mediumaquamarine: 1724754687, mediumblue: 52735, mediumorchid: 3126187007, mediumpurple: 2473647103, mediumseagreen: 1018393087, mediumslateblue: 2070474495, mediumspringgreen: 16423679, mediumturquoise: 1221709055, mediumvioletred: 3340076543, midnightblue: 421097727, mintcream: 4127193855, mistyrose: 4293190143, moccasin: 4293178879, navajowhite: 4292783615, navy: 33023, oldlace: 4260751103, olive: 2155872511, olivedrab: 1804477439, orange: 4289003775, orangered: 4282712319, orchid: 3664828159, palegoldenrod: 4008225535, palegreen: 2566625535, paleturquoise: 2951671551, palevioletred: 3681588223, papayawhip: 4293907967, peachpuff: 4292524543, peru: 3448061951, pink: 4290825215, plum: 3718307327, powderblue: 2967529215, purple: 2147516671, rebeccapurple: 1714657791, red: 4278190335, rosybrown: 3163525119, royalblue: 1097458175, saddlebrown: 2336560127, salmon: 4202722047, sandybrown: 4104413439, seagreen: 780883967, seashell: 4294307583, sienna: 2689740287, silver: 3233857791, skyblue: 2278484991, slateblue: 1784335871, slategray: 1887473919, slategrey: 1887473919, snow: 4294638335, springgreen: 16744447, steelblue: 1182971135, tan: 3535047935, teal: 8421631, thistle: 3636451583, tomato: 4284696575, turquoise: 1088475391, violet: 4001558271, wheat: 4125012991, white: 4294967295, whitesmoke: 4126537215, yellow: 4294902015, yellowgreen: 2597139199 }, un = "[-+]?\\d*\\.?\\d+", Du = un + "%";
function $c(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var k5 = new RegExp("rgb" + $c(un, un, un)), C5 = new RegExp("rgba" + $c(un, un, un, un)), $5 = new RegExp("hsl" + $c(un, Du, Du)), E5 = new RegExp("hsla" + $c(un, Du, Du, un)), A5 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, P5 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, _5 = /^#([0-9a-fA-F]{6})$/, R5 = /^#([0-9a-fA-F]{8})$/;
function T5(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = _5.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Ir && Ir[e] !== void 0 ? Ir[e] : (t = k5.exec(e)) ? (Oo(t[1]) << 24 | Oo(t[2]) << 16 | Oo(t[3]) << 8 | 255) >>> 0 : (t = C5.exec(e)) ? (Oo(t[1]) << 24 | Oo(t[2]) << 16 | Oo(t[3]) << 8 | e1(t[4])) >>> 0 : (t = A5.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = R5.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = P5.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = $5.exec(e)) ? (Z0(J0(t[1]), vs(t[2]), vs(t[3])) | 255) >>> 0 : (t = E5.exec(e)) ? (Z0(J0(t[1]), vs(t[2]), vs(t[3])) | e1(t[4])) >>> 0 : null;
}
function Ff(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Z0(e, t, n) {
  let r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, i = Ff(o, r, e + 1 / 3), l = Ff(o, r, e), a = Ff(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(l * 255) << 16 | Math.round(a * 255) << 8;
}
function Oo(e) {
  let t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function J0(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function e1(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function vs(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function t1(e) {
  let t = T5(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, o = (t & 65280) >>> 8, i = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${o}, ${i})`;
}
var ua = (e, t, n) => {
  if (U.fun(e))
    return e;
  if (U.arr(e))
    return ua({ range: e, output: t, extrapolate: n });
  if (U.str(e.output[0]))
    return Dm(e);
  let r = e, o = r.output, i = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", a = r.extrapolateRight || r.extrapolate || "extend", s = r.easing || ((u) => u);
  return (u) => {
    let c = O5(u, i);
    return I5(u, i[c], i[c + 1], o[c], o[c + 1], s, l, a, r.map);
  };
};
function I5(e, t, n, r, o, i, l, a, s) {
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
function O5(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
var M5 = (e, t = "end") => (n) => {
  n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
  let r = n * e, o = t === "end" ? Math.floor(r) : Math.ceil(r);
  return b5(0, 1, o / e);
}, Lu = 1.70158, ys = Lu * 1.525, n1 = Lu + 1, r1 = 2 * Math.PI / 3, o1 = 2 * Math.PI / 4.5, xs = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, N5 = { linear: (e) => e, easeInQuad: (e) => e * e, easeOutQuad: (e) => 1 - (1 - e) * (1 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2, easeInCubic: (e) => e * e * e, easeOutCubic: (e) => 1 - Math.pow(1 - e, 3), easeInOutCubic: (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2, easeInQuart: (e) => e * e * e * e, easeOutQuart: (e) => 1 - Math.pow(1 - e, 4), easeInOutQuart: (e) => e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2, easeInQuint: (e) => e * e * e * e * e, easeOutQuint: (e) => 1 - Math.pow(1 - e, 5), easeInOutQuint: (e) => e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2, easeInSine: (e) => 1 - Math.cos(e * Math.PI / 2), easeOutSine: (e) => Math.sin(e * Math.PI / 2), easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2, easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * e - 10), easeOutExpo: (e) => e === 1 ? 1 : 1 - Math.pow(2, -10 * e), easeInOutExpo: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2, easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)), easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)), easeInOutCirc: (e) => e < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2, easeInBack: (e) => n1 * e * e * e - Lu * e * e, easeOutBack: (e) => 1 + n1 * Math.pow(e - 1, 3) + Lu * Math.pow(e - 1, 2), easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((ys + 1) * 2 * e - ys) / 2 : (Math.pow(2 * e - 2, 2) * ((ys + 1) * (e * 2 - 2) + ys) + 2) / 2, easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * r1), easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * r1) + 1, easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * o1)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * o1) / 2 + 1, easeInBounce: (e) => 1 - xs(1 - e), easeOutBounce: xs, easeInOutBounce: (e) => e < 0.5 ? (1 - xs(1 - 2 * e)) / 2 : (1 + xs(2 * e - 1)) / 2, steps: M5 }, Pi = Symbol.for("FluidValue.get"), vo = Symbol.for("FluidValue.observers"), Bt = (e) => Boolean(e && e[Pi]), vt = (e) => e && e[Pi] ? e[Pi]() : e, i1 = (e) => e[vo] || null;
function D5(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function ca(e, t) {
  let n = e[vo];
  n && n.forEach((r) => {
    D5(r, t);
  });
}
var Cz, $z, tx, Rb = (tx = class {
  constructor(e) {
    Q(this, Cz);
    Q(this, $z);
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    L5(this, e);
  }
}, Cz = Pi, $z = vo, tx), L5 = (e, t) => Tb(e, Pi, t);
function Fi(e, t) {
  if (e[Pi]) {
    let n = e[vo];
    n || Tb(e, vo, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function fa(e, t) {
  let n = e[vo];
  if (n && n.has(t)) {
    let r = n.size - 1;
    r ? n.delete(t) : e[vo] = null, e.observerRemoved && e.observerRemoved(r, t);
  }
}
var Tb = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), Zs = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, F5 = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, l1 = new RegExp(`(${Zs.source})(%|[a-z]+)`, "i"), z5 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Ec = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, Ib = (e) => {
  let [t, n] = B5(e);
  if (!t || Nm())
    return e;
  let r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  return r ? r.trim() : n && n.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(n) || e : n && Ec.test(n) ? Ib(n) : n || e;
}, B5 = (e) => {
  let t = Ec.exec(e);
  if (!t)
    return [,];
  let [, n, r] = t;
  return [n, r];
}, zf, j5 = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`, Ob = (e) => {
  zf || (zf = Ir ? new RegExp(`(${Object.keys(Ir).join("|")})(?!\\w)`, "g") : /^\b$/);
  let t = e.output.map((o) => vt(o).replace(Ec, Ib).replace(F5, t1).replace(zf, t1)), n = t.map((o) => o.match(Zs).map(Number)), r = n[0].map((o, i) => n.map((l) => {
    if (!(i in l))
      throw Error('The arity of each "output" value must be equal');
    return l[i];
  })).map((o) => ua({ ...e, output: o }));
  return (o) => {
    var a;
    let i = !l1.test(t[0]) && ((a = t.find((s) => l1.test(s))) == null ? void 0 : a.replace(Zs, "")), l = 0;
    return t[0].replace(Zs, () => `${r[l++](o)}${i || ""}`).replace(z5, j5);
  };
}, Fm = "react-spring: ", Mb = (e) => {
  let t = e, n = !1;
  if (typeof t != "function")
    throw new TypeError(`${Fm}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, H5 = Mb(console.warn);
function V5() {
  H5(`${Fm}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var U5 = Mb(console.warn);
function W5() {
  U5(`${Fm}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function Ac(e) {
  return U.str(e) && (e[0] == "#" || /\d/.test(e) || !Nm() && Ec.test(e) || e in (Ir || {}));
}
var zm = Nm() ? h.exports.useEffect : h.exports.useLayoutEffect, q5 = () => {
  let e = h.exports.useRef(!1);
  return zm(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function Nb() {
  let e = h.exports.useState()[1], t = q5();
  return () => {
    t.current && e(Math.random());
  };
}
function G5(e, t) {
  let [n] = h.exports.useState(() => ({ inputs: t, result: e() })), r = h.exports.useRef(), o = r.current, i = o;
  return i ? Boolean(t && i.inputs && Q5(t, i.inputs)) || (i = { inputs: t, result: e() }) : i = n, h.exports.useEffect(() => {
    r.current = i, o == n && (n.inputs = n.result = void 0);
  }, [i]), i.result;
}
function Q5(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var Db = (e) => h.exports.useEffect(e, K5), K5 = [];
function a1(e) {
  let t = h.exports.useRef();
  return h.exports.useEffect(() => {
    t.current = e;
  }), t.current;
}
var da = Symbol.for("Animated:node"), Y5 = (e) => !!e && e[da] === e, xn = (e) => e && e[da], Bm = (e, t) => v5(e, da, t), Pc = (e) => e && e[da] && e[da].getPayload(), Lb = class {
  constructor() {
    Q(this, "payload");
    Bm(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}, Ba = class extends Lb {
  constructor(t) {
    super();
    Q(this, "done", !0);
    Q(this, "elapsedTime");
    Q(this, "lastPosition");
    Q(this, "lastVelocity");
    Q(this, "v0");
    Q(this, "durationProgress", 0);
    this._value = t, U.num(this._value) && (this.lastPosition = this._value);
  }
  static create(t) {
    return new Ba(t);
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
}, pa = class extends Ba {
  constructor(t) {
    super(0);
    Q(this, "_string", null);
    Q(this, "_toString");
    this._toString = ua({ output: [t, t] });
  }
  static create(t) {
    return new pa(t);
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
    t && (this._toString = ua({ output: [this.getValue(), t] })), this._value = 0, super.reset();
  }
}, Fu = { dependencies: null }, _c = class extends Lb {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    let t = {};
    return An(this.source, (n, r) => {
      Y5(n) ? t[r] = n.getValue(e) : Bt(n) ? t[r] = vt(n) : e || (t[r] = n);
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
      return An(e, this._addToPayload, t), Array.from(t);
    }
  }
  _addToPayload(e) {
    Fu.dependencies && Bt(e) && Fu.dependencies.add(e);
    let t = Pc(e);
    t && pe(t, (n) => this.add(n));
  }
}, Fb = class extends _c {
  constructor(e) {
    super(e);
  }
  static create(e) {
    return new Fb(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    let t = this.getPayload();
    return e.length == t.length ? t.map((n, r) => n.setValue(e[r])).some(Boolean) : (super.setValue(e.map(X5)), !0);
  }
};
function X5(e) {
  return (Ac(e) ? pa : Ba).create(e);
}
function Op(e) {
  let t = xn(e);
  return t ? t.constructor : U.arr(e) ? Fb : Ac(e) ? pa : Ba;
}
var s1 = (e, t) => {
  let n = !U.fun(e) || e.prototype && e.prototype.isReactComponent;
  return h.exports.forwardRef((r, o) => {
    let i = h.exports.useRef(null), l = n && h.exports.useCallback((m) => {
      i.current = eA(o, m);
    }, [o]), [a, s] = J5(r, t), u = Nb(), c = () => {
      let m = i.current;
      n && !m || (m ? t.applyAnimatedValues(m, a.getValue(!0)) : !1) === !1 && u();
    }, f = new Z5(c, s), d = h.exports.useRef();
    zm(() => (d.current = f, pe(s, (m) => Fi(m, f)), () => {
      d.current && (pe(d.current.deps, (m) => fa(m, d.current)), re.cancel(d.current.update));
    })), h.exports.useEffect(c, []), Db(() => () => {
      let m = d.current;
      pe(m.deps, (v) => fa(v, m));
    });
    let g = t.getComponentProps(a.getValue());
    return h.exports.createElement(e, { ...g, ref: l });
  });
}, Z5 = class {
  constructor(e, t) {
    this.update = e, this.deps = t;
  }
  eventObserved(e) {
    e.type == "change" && re.write(this.update);
  }
};
function J5(e, t) {
  let n = /* @__PURE__ */ new Set();
  return Fu.dependencies = n, e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }), e = new _c(e), Fu.dependencies = null, [e, n];
}
function eA(e, t) {
  return e && (U.fun(e) ? e(t) : e.current = t), t;
}
var u1 = Symbol.for("AnimatedComponent"), tA = (e, { applyAnimatedValues: t = () => !1, createAnimatedStyle: n = (o) => new _c(o), getComponentProps: r = (o) => o } = {}) => {
  let o = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r }, i = (l) => {
    let a = c1(l) || "Anonymous";
    return U.str(l) ? l = i[l] || (i[l] = s1(l, o)) : l = l[u1] || (l[u1] = s1(l, o)), l.displayName = `Animated(${a})`, l;
  };
  return An(e, (l, a) => {
    U.arr(e) && (a = c1(l)), i[a] = i(l);
  }), { animated: i };
}, c1 = (e) => U.str(e) ? e : e && U.str(e.displayName) ? e.displayName : U.fun(e) && e.name || null;
function to(e, ...t) {
  return U.fun(e) ? e(...t) : e;
}
var Dl = (e, t) => e === !0 || !!(t && e && (U.fun(e) ? e(t) : Pt(e).includes(t))), zb = (e, t) => U.obj(e) ? t && e[t] : e, Bb = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, nA = (e) => e, jm = (e, t = nA) => {
  let n = rA;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  let r = {};
  for (let o of n) {
    let i = t(e[o], o);
    U.und(i) || (r[o] = i);
  }
  return r;
}, rA = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], oA = { config: 1, from: 1, to: 1, ref: 1, loop: 1, reset: 1, pause: 1, cancel: 1, reverse: 1, immediate: 1, default: 1, delay: 1, onProps: 1, onStart: 1, onChange: 1, onPause: 1, onResume: 1, onRest: 1, onResolve: 1, items: 1, trail: 1, sort: 1, expires: 1, initial: 1, enter: 1, update: 1, leave: 1, children: 1, onDestroyed: 1, keys: 1, callId: 1, parentId: 1 };
function iA(e) {
  let t = {}, n = 0;
  if (An(e, (r, o) => {
    oA[o] || (t[o] = r, n++);
  }), n)
    return t;
}
function jb(e) {
  let t = iA(e);
  if (t) {
    let n = { to: t };
    return An(e, (r, o) => o in t || (n[o] = r)), n;
  }
  return { ...e };
}
function ha(e) {
  return e = vt(e), U.arr(e) ? e.map(ha) : Ac(e) ? mn.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e;
}
function lA(e) {
  for (let t in e)
    return !0;
  return !1;
}
function Mp(e) {
  return U.fun(e) || U.arr(e) && U.obj(e[0]);
}
function aA(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function sA(e, t) {
  var n;
  t && e.ref !== t && ((n = e.ref) == null || n.delete(e), t.add(e), e.ref = t);
}
var Hb = { default: { tension: 170, friction: 26 }, gentle: { tension: 120, friction: 14 }, wobbly: { tension: 180, friction: 12 }, stiff: { tension: 210, friction: 20 }, slow: { tension: 280, friction: 60 }, molasses: { tension: 280, friction: 120 } }, Np = { ...Hb.default, mass: 1, damping: 1, easing: N5.linear, clamp: !1 }, uA = class {
  constructor() {
    Q(this, "tension");
    Q(this, "friction");
    Q(this, "frequency");
    Q(this, "damping");
    Q(this, "mass");
    Q(this, "velocity", 0);
    Q(this, "restVelocity");
    Q(this, "precision");
    Q(this, "progress");
    Q(this, "duration");
    Q(this, "easing");
    Q(this, "clamp");
    Q(this, "bounce");
    Q(this, "decay");
    Q(this, "round");
    Object.assign(this, Np);
  }
};
function cA(e, t, n) {
  n && (n = { ...n }, f1(n, t), t = { ...n, ...t }), f1(e, t), Object.assign(e, t);
  for (let l in Np)
    e[l] == null && (e[l] = Np[l]);
  let { mass: r, frequency: o, damping: i } = e;
  return U.und(o) || (o < 0.01 && (o = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / o, 2) * r, e.friction = 4 * Math.PI * i * r / o), e;
}
function f1(e, t) {
  if (!U.und(t.decay))
    e.duration = void 0;
  else {
    let n = !U.und(t.tension) || !U.und(t.friction);
    (n || !U.und(t.frequency) || !U.und(t.damping) || !U.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
var d1 = [], fA = class {
  constructor() {
    Q(this, "changed", !1);
    Q(this, "values", d1);
    Q(this, "toValues", null);
    Q(this, "fromValues", d1);
    Q(this, "to");
    Q(this, "from");
    Q(this, "config", new uA());
    Q(this, "immediate", !1);
  }
};
function Vb(e, { key: t, props: n, defaultProps: r, state: o, actions: i }) {
  return new Promise((l, a) => {
    var m;
    let s, u, c = Dl((m = n.cancel) != null ? m : r == null ? void 0 : r.cancel, t);
    if (c)
      g();
    else {
      U.und(n.pause) || (o.paused = Dl(n.pause, t));
      let v = r == null ? void 0 : r.pause;
      v !== !0 && (v = o.paused || Dl(v, t)), s = to(n.delay || 0, t), v ? (o.resumeQueue.add(d), i.pause()) : (i.resume(), d());
    }
    function f() {
      o.resumeQueue.add(d), o.timeouts.delete(u), u.cancel(), s = u.time - re.now();
    }
    function d() {
      s > 0 && !mn.skipAnimation ? (o.delayed = !0, u = re.setTimeout(g, s), o.pauseQueue.add(f), o.timeouts.add(u)) : g();
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
var Hm = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? pi(e.get()) : t.every((n) => n.noop) ? Ub(e.get()) : an(e.get(), t.every((n) => n.finished)), Ub = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }), an = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }), pi = (e) => ({ value: e, cancelled: !0, finished: !1 });
function Wb(e, t, n, r) {
  let { callId: o, parentId: i, onRest: l } = t, { asyncTo: a, promise: s } = n;
  return !i && e === a && !t.reset ? s : n.promise = (async () => {
    n.asyncId = o, n.asyncTo = e;
    let u = jm(t, (w, p) => p === "onRest" ? void 0 : w), c, f, d = new Promise((w, p) => (c = w, f = p)), g = (w) => {
      let p = o <= (n.cancelId || 0) && pi(r) || o !== n.asyncId && an(r, !1);
      if (p)
        throw w.result = p, f(w), w;
    }, m = (w, p) => {
      let y = new p1(), x = new h1();
      return (async () => {
        if (mn.skipAnimation)
          throw ma(n), x.result = an(r, !1), f(x), x;
        g(y);
        let b = U.obj(w) ? { ...w } : { ...p, to: w };
        b.parentId = o, An(u, (S, E) => {
          U.und(b[E]) && (b[E] = S);
        });
        let A = await r.start(b);
        return g(y), n.paused && await new Promise((S) => {
          n.resumeQueue.add(S);
        }), A;
      })();
    }, v;
    if (mn.skipAnimation)
      return ma(n), an(r, !1);
    try {
      let w;
      U.arr(e) ? w = (async (p) => {
        for (let y of p)
          await m(y);
      })(e) : w = Promise.resolve(e(m, r.stop.bind(r))), await Promise.all([w.then(c), d]), v = an(r.get(), !0, !1);
    } catch (w) {
      if (w instanceof p1)
        v = w.result;
      else if (w instanceof h1)
        v = w.result;
      else
        throw w;
    } finally {
      o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? a : void 0, n.promise = i ? s : void 0);
    }
    return U.fun(l) && re.batchedUpdates(() => {
      l(v, r, r.item);
    }), v;
  })();
}
function ma(e, t) {
  Ml(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
var p1 = class extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
    Q(this, "result");
  }
}, h1 = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
    Q(this, "result");
  }
}, Dp = (e) => e instanceof Vm, dA = 1, Vm = class extends Rb {
  constructor() {
    super(...arguments);
    Q(this, "id", dA++);
    Q(this, "_priority", 0);
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
    return mn.to(this, t);
  }
  interpolate(...t) {
    return V5(), mn.to(this, t);
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
    ca(this, { type: "change", parent: this, value: t, idle: n });
  }
  _onPriorityChange(t) {
    this.idle || Cc.sort(this), ca(this, { type: "priority", parent: this, priority: t });
  }
}, yo = Symbol.for("SpringPhase"), qb = 1, Lp = 2, Fp = 4, Bf = (e) => (e[yo] & qb) > 0, ur = (e) => (e[yo] & Lp) > 0, il = (e) => (e[yo] & Fp) > 0, m1 = (e, t) => t ? e[yo] |= Lp | qb : e[yo] &= ~Lp, g1 = (e, t) => t ? e[yo] |= Fp : e[yo] &= ~Fp, pA = class extends Vm {
  constructor(t, n) {
    super();
    Q(this, "key");
    Q(this, "animation", new fA());
    Q(this, "queue");
    Q(this, "defaultProps", {});
    Q(this, "_state", { paused: !1, delayed: !1, pauseQueue: /* @__PURE__ */ new Set(), resumeQueue: /* @__PURE__ */ new Set(), timeouts: /* @__PURE__ */ new Set() });
    Q(this, "_pendingCalls", /* @__PURE__ */ new Set());
    Q(this, "_lastCallId", 0);
    Q(this, "_lastToId", 0);
    Q(this, "_memoizedDuration", 0);
    if (!U.und(t) || !U.und(n)) {
      let r = U.obj(t) ? { ...t } : { ...n, from: t };
      U.und(r.default) && (r.default = !0), this.start(r);
    }
  }
  get idle() {
    return !(ur(this) || this._state.asyncTo) || il(this);
  }
  get goal() {
    return vt(this.animation.to);
  }
  get velocity() {
    let t = xn(this);
    return t instanceof Ba ? t.lastVelocity || 0 : t.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return Bf(this);
  }
  get isAnimating() {
    return ur(this);
  }
  get isPaused() {
    return il(this);
  }
  get isDelayed() {
    return this._state.delayed;
  }
  advance(t) {
    let n = !0, r = !1, o = this.animation, { config: i, toValues: l } = o, a = Pc(o.to);
    !a && Bt(o.to) && (l = Pt(vt(o.to))), o.values.forEach((c, f) => {
      if (c.done)
        return;
      let d = c.constructor == pa ? 1 : a ? a[f].lastPosition : l[f], g = o.immediate, m = d;
      if (!g) {
        if (m = c.lastPosition, i.tension <= 0) {
          c.done = !0;
          return;
        }
        let v = c.elapsedTime += t, w = o.fromValues[f], p = c.v0 != null ? c.v0 : c.v0 = U.arr(i.velocity) ? i.velocity[f] : i.velocity, y, x = i.precision || (w == d ? 5e-3 : Math.min(1, Math.abs(d - w) * 1e-3));
        if (U.und(i.duration))
          if (i.decay) {
            let b = i.decay === !0 ? 0.998 : i.decay, A = Math.exp(-(1 - b) * v);
            m = w + p / (1 - b) * (1 - A), g = Math.abs(c.lastPosition - m) <= x, y = p * A;
          } else {
            y = c.lastVelocity == null ? p : c.lastVelocity;
            let b = i.restVelocity || x / 10, A = i.clamp ? 0 : i.bounce, S = !U.und(A), E = w == d ? c.v0 > 0 : w < d, $, P = !1, _ = 1, T = Math.ceil(t / _);
            for (let M = 0; M < T && ($ = Math.abs(y) > b, !(!$ && (g = Math.abs(d - m) <= x, g))); ++M) {
              S && (P = m == d || m > d == E, P && (y = -y * A, m = d));
              let L = -i.tension * 1e-6 * (m - d), B = -i.friction * 1e-3 * y, z = (L + B) / i.mass;
              y = y + z * _, m = m + y * _;
            }
          }
        else {
          let b = 1;
          i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, c.durationProgress > 0 && (c.elapsedTime = i.duration * c.durationProgress, v = c.elapsedTime += t)), b = (i.progress || 0) + v / this._memoizedDuration, b = b > 1 ? 1 : b < 0 ? 0 : b, c.durationProgress = b), m = w + i.easing(b) * (d - w), y = (m - c.lastPosition) / t, g = b == 1;
        }
        c.lastVelocity = y, Number.isNaN(m) && (console.warn("Got NaN while animating:", this), g = !0);
      }
      a && !a[f].done && (g = !1), g ? c.done = !0 : n = !1, c.setValue(m, i.round) && (r = !0);
    });
    let s = xn(this), u = s.getValue();
    if (n) {
      let c = vt(o.to);
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
    this._update({ pause: !0 });
  }
  resume() {
    this._update({ pause: !1 });
  }
  finish() {
    if (ur(this)) {
      let { to: t, config: n } = this.animation;
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
    return U.und(t) ? (r = this.queue || [], this.queue = []) : r = [U.obj(t) ? t : { ...n, to: t }], Promise.all(r.map((o) => this._update(o))).then((o) => Hm(this, o));
  }
  stop(t) {
    let { to: n } = this.animation;
    return this._focus(this.get()), ma(this._state, t && this._lastCallId), re.batchedUpdates(() => this._stop(n, t)), this;
  }
  reset() {
    this._update({ reset: !0 });
  }
  eventObserved(t) {
    t.type == "change" ? this._start() : t.type == "priority" && (this.priority = t.priority + 1);
  }
  _prepareNode(t) {
    let n = this.key || "", { to: r, from: o } = t;
    r = U.obj(r) ? r[n] : r, (r == null || Mp(r)) && (r = void 0), o = U.obj(o) ? o[n] : o, o == null && (o = void 0);
    let i = { to: r, from: o };
    return Bf(this) || (t.reverse && ([r, o] = [o, r]), o = vt(o), U.und(o) ? xn(this) || this._set(r) : this._set(o)), i;
  }
  _update({ ...t }, n) {
    let { key: r, defaultProps: o } = this;
    t.default && Object.assign(o, jm(t, (a, s) => /^on/.test(s) ? zb(a, r) : a)), y1(this, t, "onProps"), al(this, "onProps", t, this);
    let i = this._prepareNode(t);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    let l = this._state;
    return Vb(++this._lastCallId, { key: r, props: t, defaultProps: o, state: l, actions: { pause: () => {
      il(this) || (g1(this, !0), bl(l.pauseQueue), al(this, "onPause", an(this, ll(this, this.animation.to)), this));
    }, resume: () => {
      il(this) && (g1(this, !1), ur(this) && this._resume(), bl(l.resumeQueue), al(this, "onResume", an(this, ll(this, this.animation.to)), this));
    }, start: this._merge.bind(this, i) } }).then((a) => {
      if (t.loop && a.finished && !(n && a.noop)) {
        let s = Gb(t);
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
    let g = !Ln(d, c);
    g && (s.from = d), d = vt(d);
    let m = !Ln(f, u);
    m && this._focus(f);
    let v = Mp(n.to), { config: w } = s, { decay: p, velocity: y } = w;
    (o || i) && (w.velocity = 0), n.config && !v && cA(w, to(n.config, l), n.config !== a.config ? to(a.config, l) : void 0);
    let x = xn(this);
    if (!x || U.und(f))
      return r(an(this, !0));
    let b = U.und(n.reset) ? i && !n.default : !U.und(d) && Dl(n.reset, l), A = b ? d : this.get(), S = ha(f), E = U.num(S) || U.arr(S) || Ac(S), $ = !v && (!E || Dl(a.immediate || n.immediate, l));
    if (m) {
      let M = Op(f);
      if (M !== x.constructor)
        if ($)
          x = this._set(S);
        else
          throw Error(`Cannot animate between ${x.constructor.name} and ${M.name}, as the "to" prop suggests`);
    }
    let P = x.constructor, _ = Bt(f), T = !1;
    if (!_) {
      let M = b || !Bf(this) && g;
      (m || M) && (T = Ln(ha(A), S), _ = !T), (!Ln(s.immediate, $) && !$ || !Ln(w.decay, p) || !Ln(w.velocity, y)) && (_ = !0);
    }
    if (T && ur(this) && (s.changed && !b ? _ = !0 : _ || this._stop(u)), !v && ((_ || Bt(u)) && (s.values = x.getPayload(), s.toValues = Bt(f) ? null : P == pa ? [1] : Pt(S)), s.immediate != $ && (s.immediate = $, !$ && !b && this._set(u)), _)) {
      let { onRest: M } = s;
      pe(mA, (B) => y1(this, n, B));
      let L = an(this, ll(this, u));
      bl(this._pendingCalls, L), this._pendingCalls.add(r), s.changed && re.batchedUpdates(() => {
        var B;
        s.changed = !b, M == null || M(L, this), b ? to(a.onRest, L) : (B = s.onStart) == null || B.call(s, L, this);
      });
    }
    b && this._set(A), v ? r(Wb(n.to, n, this._state, this)) : _ ? this._start() : ur(this) && !m ? this._pendingCalls.add(r) : r(Ub(A));
  }
  _focus(t) {
    let n = this.animation;
    t !== n.to && (i1(this) && this._detach(), n.to = t, i1(this) && this._attach());
  }
  _attach() {
    let t = 0, { to: n } = this.animation;
    Bt(n) && (Fi(n, this), Dp(n) && (t = n.priority + 1)), this.priority = t;
  }
  _detach() {
    let { to: t } = this.animation;
    Bt(t) && fa(t, this);
  }
  _set(t, n = !0) {
    let r = vt(t);
    if (!U.und(r)) {
      let o = xn(this);
      if (!o || !Ln(r, o.getValue())) {
        let i = Op(r);
        !o || o.constructor != i ? Bm(this, i.create(r)) : o.setValue(r), o && re.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return xn(this);
  }
  _onStart() {
    let t = this.animation;
    t.changed || (t.changed = !0, al(this, "onStart", an(this, ll(this, t.to)), this));
  }
  _onChange(t, n) {
    n || (this._onStart(), to(this.animation.onChange, t, this)), to(this.defaultProps.onChange, t, this), super._onChange(t, n);
  }
  _start() {
    let t = this.animation;
    xn(this).reset(vt(t.to)), t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)), ur(this) || (m1(this, !0), il(this) || this._resume());
  }
  _resume() {
    mn.skipAnimation ? this.finish() : Cc.start(this);
  }
  _stop(t, n) {
    if (ur(this)) {
      m1(this, !1);
      let r = this.animation;
      pe(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), ca(this, { type: "idle", parent: this });
      let o = n ? pi(this.get()) : an(this.get(), ll(this, t != null ? t : r.to));
      bl(this._pendingCalls, o), r.changed && (r.changed = !1, al(this, "onRest", o, this));
    }
  }
};
function ll(e, t) {
  let n = ha(t), r = ha(e.get());
  return Ln(r, n);
}
function Gb(e, t = e.loop, n = e.to) {
  let r = to(t);
  if (r) {
    let o = r !== !0 && jb(r), i = (o || e).reverse, l = !o || o.reset;
    return ga({ ...e, loop: t, default: !1, pause: void 0, to: !i || Mp(n) ? n : void 0, from: l ? e.from : void 0, reset: l, ...o });
  }
}
function ga(e) {
  let { to: t, from: n } = e = jb(e), r = /* @__PURE__ */ new Set();
  return U.obj(t) && v1(t, r), U.obj(n) && v1(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function hA(e) {
  let t = ga(e);
  return U.und(t.default) && (t.default = jm(t)), t;
}
function v1(e, t) {
  An(e, (n, r) => n != null && t.add(r));
}
var mA = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function y1(e, t, n) {
  e.animation[n] = t[n] !== Bb(t, n) ? zb(t[n], e.key) : void 0;
}
function al(e, t, ...n) {
  var r, o, i, l;
  (o = (r = e.animation)[t]) == null || o.call(r, ...n), (l = (i = e.defaultProps)[t]) == null || l.call(i, ...n);
}
var gA = ["onStart", "onChange", "onRest"], vA = 1, yA = class {
  constructor(e, t) {
    Q(this, "id", vA++);
    Q(this, "springs", {});
    Q(this, "queue", []);
    Q(this, "ref");
    Q(this, "_flush");
    Q(this, "_initialProps");
    Q(this, "_lastAsyncId", 0);
    Q(this, "_active", /* @__PURE__ */ new Set());
    Q(this, "_changed", /* @__PURE__ */ new Set());
    Q(this, "_started", !1);
    Q(this, "_item");
    Q(this, "_state", { paused: !1, pauseQueue: /* @__PURE__ */ new Set(), resumeQueue: /* @__PURE__ */ new Set(), timeouts: /* @__PURE__ */ new Set() });
    Q(this, "_events", { onStart: /* @__PURE__ */ new Map(), onChange: /* @__PURE__ */ new Map(), onRest: /* @__PURE__ */ new Map() });
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
    return e && this.queue.push(ga(e)), this;
  }
  start(e) {
    let { queue: t } = this;
    return e ? t = Pt(e).map(ga) : this.queue = [], this._flush ? this._flush(this, t) : (Zb(this, t), zp(this, t));
  }
  stop(e, t) {
    if (e !== !!e && (t = e), t) {
      let n = this.springs;
      pe(Pt(t), (r) => n[r].stop(!!e));
    } else
      ma(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
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
    An(this.springs, e);
  }
  _onFrame() {
    let { onStart: e, onChange: t, onRest: n } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
    (r && !this._started || o && !this._started) && (this._started = !0, Ml(e, ([a, s]) => {
      s.value = this.get(), a(s, this, this._item);
    }));
    let i = !r && this._started, l = o || i && n.size ? this.get() : null;
    o && t.size && Ml(t, ([a, s]) => {
      s.value = l, a(s, this, this._item);
    }), i && (this._started = !1, Ml(n, ([a, s]) => {
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
    re.onFrame(this._onFrame);
  }
};
function zp(e, t) {
  return Promise.all(t.map((n) => Qb(e, n))).then((n) => Hm(e, n));
}
async function Qb(e, t, n) {
  let { keys: r, to: o, from: i, loop: l, onRest: a, onResolve: s } = t, u = U.obj(t.default) && t.default;
  l && (t.loop = !1), o === !1 && (t.to = null), i === !1 && (t.from = null);
  let c = U.arr(o) || U.fun(o) ? o : void 0;
  c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : pe(gA, (v) => {
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
  let d = (r || Object.keys(e.springs)).map((v) => e.springs[v].start(t)), g = t.cancel === !0 || Bb(t, "cancel") === !0;
  (c || g && f.asyncId) && d.push(Vb(++e._lastAsyncId, { props: t, state: f, actions: { pause: Tp, resume: Tp, start(v, w) {
    g ? (ma(f, e._lastAsyncId), w(pi(e))) : (v.onRest = a, w(Wb(c, v, f, e)));
  } } })), f.paused && await new Promise((v) => {
    f.resumeQueue.add(v);
  });
  let m = Hm(e, await Promise.all(d));
  if (l && m.finished && !(n && m.noop)) {
    let v = Gb(t, l, o);
    if (v)
      return Zb(e, [v]), Qb(e, v, !0);
  }
  return s && re.batchedUpdates(() => s(m, e, e.item)), m;
}
function x1(e, t) {
  let n = { ...e.springs };
  return t && pe(Pt(t), (r) => {
    U.und(r.keys) && (r = ga(r)), U.obj(r.to) || (r = { ...r, to: void 0 }), Xb(n, r, (o) => Yb(o));
  }), Kb(e, n), n;
}
function Kb(e, t) {
  An(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, Fi(n, e));
  });
}
function Yb(e, t) {
  let n = new pA();
  return n.key = e, t && Fi(n, t), n;
}
function Xb(e, t, n) {
  t.keys && pe(t.keys, (r) => {
    (e[r] || (e[r] = n(r)))._prepareNode(t);
  });
}
function Zb(e, t) {
  pe(t, (n) => {
    Xb(e.springs, n, (r) => Yb(r, e));
  });
}
var Rc = ({ children: e, ...t }) => {
  let n = h.exports.useContext(zu), r = t.pause || !!n.pause, o = t.immediate || !!n.immediate;
  t = G5(() => ({ pause: r, immediate: o }), [r, o]);
  let { Provider: i } = zu;
  return h.exports.createElement(i, { value: t }, e);
}, zu = xA(Rc, {});
Rc.Provider = zu.Provider;
Rc.Consumer = zu.Consumer;
function xA(e, t) {
  return Object.assign(e, h.exports.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
var wA = () => {
  let e = [], t = function(r) {
    W5();
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
function bA(e, t, n) {
  let r = U.fun(t) && t;
  r && !n && (n = []);
  let o = h.exports.useMemo(() => r || arguments.length == 3 ? wA() : void 0, []), i = h.exports.useRef(0), l = Nb(), a = h.exports.useMemo(() => ({ ctrls: [], queue: [], flush(p, y) {
    let x = x1(p, y);
    return i.current > 0 && !a.queue.length && !Object.keys(x).some((b) => !p.springs[b]) ? zp(p, y) : new Promise((b) => {
      Kb(p, x), a.queue.push(() => {
        b(zp(p, y));
      }), l();
    });
  } }), []), s = h.exports.useRef([...a.ctrls]), u = [], c = a1(e) || 0;
  h.exports.useMemo(() => {
    pe(s.current.slice(e, c), (p) => {
      aA(p, o), p.stop(!0);
    }), s.current.length = e, f(c, e);
  }, [e]), h.exports.useMemo(() => {
    f(0, Math.min(c, e));
  }, n);
  function f(p, y) {
    for (let x = p; x < y; x++) {
      let b = s.current[x] || (s.current[x] = new yA(null, a.flush)), A = r ? r(x, b) : t[x];
      A && (u[x] = hA(A));
    }
  }
  let d = s.current.map((p, y) => x1(p, u[y])), g = h.exports.useContext(Rc), m = a1(g), v = g !== m && lA(g);
  zm(() => {
    i.current++, a.ctrls = s.current;
    let { queue: p } = a;
    p.length && (a.queue = [], pe(p, (y) => y())), pe(s.current, (y, x) => {
      o == null || o.add(y), v && y.start({ default: g });
      let b = u[x];
      b && (sA(y, b.ref), y.ref ? y.queue.push(b) : y.start(b));
    });
  }), Db(() => () => {
    pe(a.ctrls, (p) => p.stop(!0));
  });
  let w = d.map((p) => ({ ...p }));
  return o ? [w, o] : w;
}
function SA(e, t) {
  let n = U.fun(e), [[r], o] = bA(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, o] : r;
}
var kA = class extends Vm {
  constructor(t, n) {
    super();
    Q(this, "key");
    Q(this, "idle", !0);
    Q(this, "calc");
    Q(this, "_active", /* @__PURE__ */ new Set());
    this.source = t, this.calc = ua(...n);
    let r = this._get(), o = Op(r);
    Bm(this, o.create(r));
  }
  advance(t) {
    let n = this._get(), r = this.get();
    Ln(n, r) || (xn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && w1(this._active) && jf(this);
  }
  _get() {
    let t = U.arr(this.source) ? this.source.map(vt) : Pt(vt(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !w1(this._active) && (this.idle = !1, pe(Pc(this), (t) => {
      t.done = !1;
    }), mn.skipAnimation ? (re.batchedUpdates(() => this.advance()), jf(this)) : Cc.start(this));
  }
  _attach() {
    let t = 1;
    pe(Pt(this.source), (n) => {
      Bt(n) && Fi(n, this), Dp(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1));
    }), this.priority = t, this._start();
  }
  _detach() {
    pe(Pt(this.source), (t) => {
      Bt(t) && fa(t, this);
    }), this._active.clear(), jf(this);
  }
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = Pt(this.source).reduce((n, r) => Math.max(n, (Dp(r) ? r.priority : 0) + 1), 0));
  }
};
function CA(e) {
  return e.idle !== !1;
}
function w1(e) {
  return !e.size || Array.from(e).every(CA);
}
function jf(e) {
  e.idle || (e.idle = !0, pe(Pc(e), (t) => {
    t.done = !0;
  }), ca(e, { type: "idle", parent: e }));
}
mn.assign({ createStringInterpolator: Ob, to: (e, t) => new kA(e, t) });
var Jb = /^--/;
function $A(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !Jb.test(e) && !(Ll.hasOwnProperty(e) && Ll[e]) ? t + "px" : ("" + t).trim();
}
var b1 = {};
function EA(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  let n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: r, children: o, scrollTop: i, scrollLeft: l, viewBox: a, ...s } = t, u = Object.values(s), c = Object.keys(s).map((f) => n || e.hasAttribute(f) ? f : b1[f] || (b1[f] = f.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  o !== void 0 && (e.textContent = o);
  for (let f in r)
    if (r.hasOwnProperty(f)) {
      let d = $A(f, r[f]);
      Jb.test(f) ? e.style.setProperty(f, d) : e.style[f] = d;
    }
  c.forEach((f, d) => {
    e.setAttribute(f, u[d]);
  }), i !== void 0 && (e.scrollTop = i), l !== void 0 && (e.scrollLeft = l), a !== void 0 && e.setAttribute("viewBox", a);
}
var Ll = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, AA = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), PA = ["Webkit", "Ms", "Moz", "O"];
Ll = Object.keys(Ll).reduce((e, t) => (PA.forEach((n) => e[AA(n, t)] = e[t]), e), Ll);
var _A = /^(matrix|translate|scale|rotate|skew)/, RA = /^(translate)/, TA = /^(rotate|skew)/, Hf = (e, t) => U.num(e) && e !== 0 ? e + t : e, Js = (e, t) => U.arr(e) ? e.every((n) => Js(n, t)) : U.num(e) ? e === t : parseFloat(e) === t, IA = class extends _c {
  constructor({ x: e, y: t, z: n, ...r }) {
    let o = [], i = [];
    (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((l) => [`translate3d(${l.map((a) => Hf(a, "px")).join(",")})`, Js(l, 0)])), An(r, (l, a) => {
      if (a === "transform")
        o.push([l || ""]), i.push((s) => [s, s === ""]);
      else if (_A.test(a)) {
        if (delete r[a], U.und(l))
          return;
        let s = RA.test(a) ? "px" : TA.test(a) ? "deg" : "";
        o.push(Pt(l)), i.push(a === "rotate3d" ? ([u, c, f, d]) => [`rotate3d(${u},${c},${f},${Hf(d, s)})`, Js(d, 0)] : (u) => [`${a}(${u.map((c) => Hf(c, s)).join(",")})`, Js(u, a.startsWith("scale") ? 1 : 0)]);
      }
    }), o.length && (r.transform = new OA(o, i)), super(r);
  }
}, OA = class extends Rb {
  constructor(t, n) {
    super();
    Q(this, "_value", null);
    this.inputs = t, this.transforms = n;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let t = "", n = !0;
    return pe(this.inputs, (r, o) => {
      let i = vt(r[0]), [l, a] = this.transforms[o](U.arr(i) ? i : r.map(vt));
      t += " " + l, n = n && a;
    }), n ? "none" : t;
  }
  observerAdded(t) {
    t == 1 && pe(this.inputs, (n) => pe(n, (r) => Bt(r) && Fi(r, this)));
  }
  observerRemoved(t) {
    t == 0 && pe(this.inputs, (n) => pe(n, (r) => Bt(r) && fa(r, this)));
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), ca(this, t);
  }
}, MA = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
mn.assign({ batchedUpdates: Yt.exports.unstable_batchedUpdates, createStringInterpolator: Ob, colors: S5 });
var NA = tA(MA, { applyAnimatedValues: EA, createAnimatedStyle: (e) => new IA(e), getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n }), S1 = NA.animated;
function eS(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = eS(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function _i() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = eS(e)) && (r && (r += " "), r += t);
  return r;
}
class ja {
  constructor(t, n, r) {
    this.property = t, this.normal = n, r && (this.space = r);
  }
}
ja.prototype.property = {};
ja.prototype.normal = {};
ja.prototype.space = null;
function tS(e, t) {
  const n = {}, r = {};
  let o = -1;
  for (; ++o < e.length; )
    Object.assign(n, e[o].property), Object.assign(r, e[o].normal);
  return new ja(n, r, t);
}
function Bp(e) {
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
let DA = 0;
const le = Eo(), je = Eo(), nS = Eo(), V = Eo(), Ae = Eo(), hi = Eo(), $t = Eo();
function Eo() {
  return 2 ** ++DA;
}
const jp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: le,
  booleanish: je,
  overloadedBoolean: nS,
  number: V,
  spaceSeparated: Ae,
  commaSeparated: hi,
  commaOrSpaceSeparated: $t
}, Symbol.toStringTag, { value: "Module" })), Vf = Object.keys(jp);
class Um extends Xt {
  constructor(t, n, r, o) {
    let i = -1;
    if (super(t, n), k1(this, "space", o), typeof r == "number")
      for (; ++i < Vf.length; ) {
        const l = Vf[i];
        k1(this, Vf[i], (r & jp[l]) === jp[l]);
      }
  }
}
Um.prototype.defined = !0;
function k1(e, t, n) {
  n && (e[t] = n);
}
const LA = {}.hasOwnProperty;
function zi(e) {
  const t = {}, n = {};
  let r;
  for (r in e.properties)
    if (LA.call(e.properties, r)) {
      const o = e.properties[r], i = new Um(
        r,
        e.transform(e.attributes || {}, r),
        o,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0), t[r] = i, n[Bp(r)] = r, n[Bp(i.attribute)] = r;
    }
  return new ja(t, n, e.space);
}
const rS = zi({
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
}), oS = zi({
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function iS(e, t) {
  return t in e ? e[t] : t;
}
function lS(e, t) {
  return iS(e, t.toLowerCase());
}
const aS = zi({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: lS,
  properties: { xmlns: null, xmlnsXLink: null }
}), sS = zi({
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
}), FA = zi({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: lS,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: hi,
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
    coords: V | hi,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: le,
    defer: le,
    dir: null,
    dirName: null,
    disabled: le,
    download: nS,
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
}), zA = zi({
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
  transform: iS,
  properties: {
    about: $t,
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
    g1: hi,
    g2: hi,
    glyphName: hi,
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
    kernelMatrix: $t,
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
    property: $t,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: $t,
    rev: $t,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: $t,
    requiredFeatures: $t,
    requiredFonts: $t,
    requiredFormats: $t,
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
    strokeDashArray: $t,
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
    systemLanguage: $t,
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
    typeOf: $t,
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
}), BA = /^data[-\w.:]+$/i, C1 = /-[a-z]/g, jA = /[A-Z]/g;
function HA(e, t) {
  const n = Bp(t);
  let r = t, o = Xt;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && BA.test(t)) {
    if (t.charAt(4) === "-") {
      const i = t.slice(5).replace(C1, UA);
      r = "data" + i.charAt(0).toUpperCase() + i.slice(1);
    } else {
      const i = t.slice(4);
      if (!C1.test(i)) {
        let l = i.replace(jA, VA);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    o = Um;
  }
  return new o(r, t);
}
function VA(e) {
  return "-" + e.toLowerCase();
}
function UA(e) {
  return e.charAt(1).toUpperCase();
}
const WA = tS([oS, rS, aS, sS, FA], "html"), uS = tS([oS, rS, aS, sS, zA], "svg"), qA = [
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
], $1 = {}.hasOwnProperty;
function GA(e, t) {
  const n = t || {};
  function r(o, ...i) {
    let l = r.invalid;
    const a = r.handlers;
    if (o && $1.call(o, e)) {
      const s = String(o[e]);
      l = $1.call(a, s) ? a[s] : r.unknown;
    }
    if (l)
      return l.call(this, o, ...i);
  }
  return r.handlers = n.handlers || {}, r.invalid = n.invalid, r.unknown = n.unknown, r;
}
function QA(e, t) {
  if (e = e.replace(
    t.subset ? KA(t.subset) : /["&'<>`]/g,
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
function KA(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t.push(e[n].replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"));
  return new RegExp("(?:" + t.join("|") + ")", "g");
}
function YA(e, t, n) {
  const r = "&#x" + e.toString(16).toUpperCase();
  return n && t && !/[\dA-Fa-f]/.test(String.fromCharCode(t)) ? r : r + ";";
}
function XA(e, t, n) {
  const r = "&#" + String(e);
  return n && t && !/\d/.test(String.fromCharCode(t)) ? r : r + ";";
}
const ZA = [
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
], Uf = {
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
}, JA = [
  "cent",
  "copy",
  "divide",
  "gt",
  "lt",
  "not",
  "para",
  "times"
], cS = {}.hasOwnProperty, Hp = {};
let ws;
for (ws in Uf)
  cS.call(Uf, ws) && (Hp[Uf[ws]] = ws);
function eP(e, t, n, r) {
  const o = String.fromCharCode(e);
  if (cS.call(Hp, o)) {
    const i = Hp[o], l = "&" + i;
    return n && ZA.includes(i) && !JA.includes(i) && (!r || t && t !== 61 && /[^\da-z]/i.test(String.fromCharCode(t))) ? l : l + ";";
  }
  return "";
}
function tP(e, t, n) {
  let r = YA(e, t, n.omitOptionalSemicolons), o;
  if ((n.useNamedReferences || n.useShortestReferences) && (o = eP(
    e,
    t,
    n.omitOptionalSemicolons,
    n.attribute
  )), (n.useShortestReferences || !o) && n.useShortestReferences) {
    const i = XA(e, t, n.omitOptionalSemicolons);
    i.length < r.length && (r = i);
  }
  return o && (!n.useShortestReferences || o.length < r.length) ? o : r;
}
function mi(e, t) {
  return QA(e, Object.assign({ format: tP }, t));
}
function nP(e, t, n, r) {
  return r.settings.bogusComments ? "<?" + mi(
    e.value,
    Object.assign({}, r.settings.characterReferences, { subset: [">"] })
  ) + ">" : "<!--" + e.value.replace(/^>|^->|<!--|-->|--!>|<!-$/g, o) + "-->";
  function o(i) {
    return mi(
      i,
      Object.assign({}, r.settings.characterReferences, {
        subset: ["<", ">"]
      })
    );
  }
}
function rP(e, t, n, r) {
  return "<!" + (r.settings.upperDoctype ? "DOCTYPE" : "doctype") + (r.settings.tightDoctype ? "" : " ") + "html>";
}
function Bu(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, o = n.indexOf(t);
  for (; o !== -1; )
    r++, o = n.indexOf(t, o + t.length);
  return r;
}
function oP(e, t) {
  const n = t || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
function iP(e) {
  return e.join(" ").trim();
}
function Wm(e) {
  const t = e && typeof e == "object" && e.type === "text" ? e.value || "" : e;
  return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === "";
}
const We = dS(1), fS = dS(-1);
function dS(e) {
  return t;
  function t(n, r, o) {
    const i = n ? n.children : [];
    let l = (r || 0) + e, a = i && i[l];
    if (!o)
      for (; a && Wm(a); )
        l += e, a = i[l];
    return a;
  }
}
const lP = {}.hasOwnProperty;
function pS(e) {
  return t;
  function t(n, r, o) {
    return lP.call(e, n.tagName) && e[n.tagName](n, r, o);
  }
}
const qm = pS({
  html: aP,
  head: Wf,
  body: sP,
  p: uP,
  li: cP,
  dt: fP,
  dd: dP,
  rt: E1,
  rp: E1,
  optgroup: pP,
  option: hP,
  menuitem: mP,
  colgroup: Wf,
  caption: Wf,
  thead: gP,
  tbody: vP,
  tfoot: yP,
  tr: xP,
  td: A1,
  th: A1
});
function Wf(e, t, n) {
  const r = We(n, t, !0);
  return !r || r.type !== "comment" && !(r.type === "text" && Wm(r.value.charAt(0)));
}
function aP(e, t, n) {
  const r = We(n, t);
  return !r || r.type !== "comment";
}
function sP(e, t, n) {
  const r = We(n, t);
  return !r || r.type !== "comment";
}
function uP(e, t, n) {
  const r = We(n, t);
  return r ? r.type === "element" && (r.tagName === "address" || r.tagName === "article" || r.tagName === "aside" || r.tagName === "blockquote" || r.tagName === "details" || r.tagName === "div" || r.tagName === "dl" || r.tagName === "fieldset" || r.tagName === "figcaption" || r.tagName === "figure" || r.tagName === "footer" || r.tagName === "form" || r.tagName === "h1" || r.tagName === "h2" || r.tagName === "h3" || r.tagName === "h4" || r.tagName === "h5" || r.tagName === "h6" || r.tagName === "header" || r.tagName === "hgroup" || r.tagName === "hr" || r.tagName === "main" || r.tagName === "menu" || r.tagName === "nav" || r.tagName === "ol" || r.tagName === "p" || r.tagName === "pre" || r.tagName === "section" || r.tagName === "table" || r.tagName === "ul") : !n || !(n.type === "element" && (n.tagName === "a" || n.tagName === "audio" || n.tagName === "del" || n.tagName === "ins" || n.tagName === "map" || n.tagName === "noscript" || n.tagName === "video"));
}
function cP(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && r.tagName === "li";
}
function fP(e, t, n) {
  const r = We(n, t);
  return r && r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function dP(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function E1(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "rp" || r.tagName === "rt");
}
function pP(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && r.tagName === "optgroup";
}
function hP(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "option" || r.tagName === "optgroup");
}
function mP(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "menuitem" || r.tagName === "hr" || r.tagName === "menu");
}
function gP(e, t, n) {
  const r = We(n, t);
  return r && r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function vP(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function yP(e, t, n) {
  return !We(n, t);
}
function xP(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && r.tagName === "tr";
}
function A1(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "td" || r.tagName === "th");
}
const wP = pS({
  html: bP,
  head: SP,
  body: kP,
  colgroup: CP,
  tbody: $P
});
function bP(e) {
  const t = We(e, -1);
  return !t || t.type !== "comment";
}
function SP(e) {
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
function kP(e) {
  const t = We(e, -1, !0);
  return !t || t.type !== "comment" && !(t.type === "text" && Wm(t.value.charAt(0))) && !(t.type === "element" && (t.tagName === "meta" || t.tagName === "link" || t.tagName === "script" || t.tagName === "style" || t.tagName === "template"));
}
function CP(e, t, n) {
  const r = fS(n, t), o = We(e, -1, !0);
  return n && r && r.type === "element" && r.tagName === "colgroup" && qm(r, n.children.indexOf(r), n) ? !1 : o && o.type === "element" && o.tagName === "col";
}
function $P(e, t, n) {
  const r = fS(n, t), o = We(e, -1);
  return n && r && r.type === "element" && (r.tagName === "thead" || r.tagName === "tbody") && qm(r, n.children.indexOf(r), n) ? !1 : o && o.type === "element" && o.tagName === "tr";
}
const bs = {
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
function EP(e, t, n, r) {
  const o = r.schema, i = o.space === "svg" ? !1 : r.settings.omitOptionalTags;
  let l = o.space === "svg" ? r.settings.closeEmptyElements : r.settings.voids.includes(e.tagName.toLowerCase());
  const a = [];
  let s;
  o.space === "html" && e.tagName === "svg" && (r.schema = uS);
  const u = AP(r, e.properties), c = r.all(
    o.space === "html" && e.tagName === "template" ? e.content : e
  );
  return r.schema = o, c && (l = !1), (u || !i || !wP(e, t, n)) && (a.push("<", e.tagName, u ? " " + u : ""), l && (o.space === "svg" || r.settings.closeSelfClosing) && (s = u.charAt(u.length - 1), (!r.settings.tightSelfClosing || s === "/" || s && s !== '"' && s !== "'") && a.push(" "), a.push("/")), a.push(">")), a.push(c), !l && (!i || !qm(e, t, n)) && a.push("</" + e.tagName + ">"), a.join("");
}
function AP(e, t) {
  const n = [];
  let r = -1, o;
  if (t) {
    for (o in t)
      if (t[o] !== void 0 && t[o] !== null) {
        const i = PP(e, o, t[o]);
        i && n.push(i);
      }
  }
  for (; ++r < n.length; ) {
    const i = e.settings.tightAttributes ? n[r].charAt(n[r].length - 1) : null;
    r !== n.length - 1 && i !== '"' && i !== "'" && (n[r] += " ");
  }
  return n.join("");
}
function PP(e, t, n) {
  const r = HA(e.schema, t), o = e.settings.allowParseErrors && e.schema.space === "html" ? 0 : 1, i = e.settings.allowDangerousCharacters ? 0 : 1;
  let l = e.quote, a;
  if (r.overloadedBoolean && (n === r.attribute || n === "") ? n = !0 : (r.boolean || r.overloadedBoolean && typeof n != "string") && (n = Boolean(n)), n == null || n === !1 || typeof n == "number" && Number.isNaN(n))
    return "";
  const s = mi(
    r.attribute,
    Object.assign({}, e.settings.characterReferences, {
      subset: bs.name[o][i]
    })
  );
  return n === !0 || (n = Array.isArray(n) ? (r.commaSeparated ? oP : iP)(n, {
    padLeft: !e.settings.tightCommaSeparatedLists
  }) : String(n), e.settings.collapseEmptyAttributes && !n) ? s : (e.settings.preferUnquoted && (a = mi(
    n,
    Object.assign({}, e.settings.characterReferences, {
      subset: bs.unquoted[o][i],
      attribute: !0
    })
  )), a !== n && (e.settings.quoteSmart && Bu(n, l) > Bu(n, e.alternative) && (l = e.alternative), a = l + mi(
    n,
    Object.assign({}, e.settings.characterReferences, {
      subset: (l === "'" ? bs.single : bs.double)[o][i],
      attribute: !0
    })
  ) + l), s + (a && "=" + a));
}
function hS(e, t, n, r) {
  return n && n.type === "element" && (n.tagName === "script" || n.tagName === "style") ? e.value : mi(
    e.value,
    Object.assign({}, r.settings.characterReferences, {
      subset: ["<", "&"]
    })
  );
}
function _P(e, t, n, r) {
  return r.settings.allowDangerousHtml ? e.value : hS(e, t, n, r);
}
function RP(e, t, n, r) {
  return r.all(e);
}
const TP = GA("type", {
  invalid: IP,
  unknown: OP,
  handlers: { comment: nP, doctype: rP, element: EP, raw: _P, root: RP, text: hS }
});
function IP(e) {
  throw new Error("Expected node, not `" + e + "`");
}
function OP(e) {
  throw new Error("Cannot compile unknown node `" + e.type + "`");
}
function MP(e, t) {
  const n = t || {}, r = n.quote || '"', o = r === '"' ? "'" : '"';
  if (r !== '"' && r !== "'")
    throw new Error("Invalid quote `" + r + "`, expected `'` or `\"`");
  return {
    one: NP,
    all: DP,
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
      voids: n.voids || qA,
      characterReferences: n.characterReferences || n.entities || {},
      closeSelfClosing: n.closeSelfClosing || !1,
      closeEmptyElements: n.closeEmptyElements || !1
    },
    schema: n.space === "svg" ? uS : WA,
    quote: r,
    alternative: o
  }.one(
    Array.isArray(e) ? { type: "root", children: e } : e,
    void 0,
    void 0
  );
}
function NP(e, t, n) {
  return TP(e, t, n, this);
}
function DP(e) {
  const t = [], n = e && e.children || [];
  let r = -1;
  for (; ++r < n.length; )
    t[r] = this.one(n[r], r, e);
  return t.join("");
}
function LP(e) {
  const t = this.data("settings"), n = Object.assign({}, t, e);
  Object.assign(this, { Compiler: r });
  function r(o) {
    return MP(o, n);
  }
}
const FP = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, Ut = jr(/[A-Za-z]/), ju = jr(/\d/), zP = jr(/[\dA-Fa-f]/), ft = jr(/[\dA-Za-z]/), BP = jr(/[!-/:-@[-`{-~]/), P1 = jr(/[#-'*+\--9=?A-Z^-~]/);
function va(e) {
  return e !== null && (e < 32 || e === 127);
}
function Le(e) {
  return e !== null && (e < 0 || e === 32);
}
function X(e) {
  return e !== null && e < -2;
}
function ve(e) {
  return e === -2 || e === -1 || e === 32;
}
const Tc = jr(/\s/), Ic = jr(FP);
function jr(e) {
  return t;
  function t(n) {
    return n !== null && e.test(String.fromCharCode(n));
  }
}
var mS = { exports: {} };
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
      for (var l = 1, a = [].slice.call(arguments), s = 0, u = i.length, c = "", f, d = !1, g, m, v = !1, w, p = function() {
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
              m = String(parseFloat(p()).toFixed(w || 6)), c += v ? m : m.replace(/^0/, "");
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
})(mS);
const jP = mS.exports, Ss = Object.assign(qr(Error), {
  eval: qr(EvalError),
  range: qr(RangeError),
  reference: qr(ReferenceError),
  syntax: qr(SyntaxError),
  type: qr(TypeError),
  uri: qr(URIError)
});
function qr(e) {
  return t.displayName = e.displayName || e.name, t;
  function t(n, ...r) {
    const o = n && jP(n, ...r);
    return new e(o);
  }
}
const ks = {}.hasOwnProperty, _1 = {
  yaml: "-",
  toml: "+"
};
function Gm(e) {
  const t = [];
  let n = -1;
  const r = Array.isArray(e) ? e : e ? [e] : ["yaml"];
  for (; ++n < r.length; )
    t[n] = HP(r[n]);
  return t;
}
function HP(e) {
  let t = e;
  if (typeof t == "string") {
    if (!ks.call(_1, t))
      throw Ss("Missing matter definition for `%s`", t);
    t = {
      type: t,
      marker: _1[t]
    };
  } else if (typeof t != "object")
    throw Ss("Expected matter to be an object, not `%j`", t);
  if (!ks.call(t, "type"))
    throw Ss("Missing `type` in matter `%j`", t);
  if (!ks.call(t, "fence") && !ks.call(t, "marker"))
    throw Ss("Missing `marker` or `fence` in matter `%j`", t);
  return t;
}
function VP(e) {
  const t = Gm(e), n = {};
  let r = -1;
  for (; ++r < t.length; ) {
    const o = t[r], i = Vp(o, "open").charCodeAt(0), l = UP(o), a = n[i];
    Array.isArray(a) ? a.push(l) : n[i] = [l];
  }
  return {
    flow: n
  };
}
function UP(e) {
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
    const m = this;
    return v;
    function v(E) {
      const $ = m.now();
      return $.column === 1 && ($.line === 1 || t) && (a = Vp(e, "open"), s = 0, E === a.charCodeAt(s)) ? (f.enter(n), f.enter(r), f.enter(o), w(E)) : g(E);
    }
    function w(E) {
      return s === a.length ? (f.exit(o), ve(E) ? (f.enter("whitespace"), p(E)) : y(E)) : E === a.charCodeAt(s++) ? (f.consume(E), w) : g(E);
    }
    function p(E) {
      return ve(E) ? (f.consume(E), p) : (f.exit("whitespace"), y(E));
    }
    function y(E) {
      return X(E) ? (f.exit(r), f.enter("lineEnding"), f.consume(E), f.exit("lineEnding"), a = Vp(e, "close"), s = 0, f.attempt(l, S, x)) : g(E);
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
    let m = 0;
    return v;
    function v(x) {
      return x === a.charCodeAt(m) ? (f.enter(r), f.enter(o), w(x)) : g(x);
    }
    function w(x) {
      return m === a.length ? (f.exit(o), ve(x) ? (f.enter("whitespace"), p(x)) : y(x)) : x === a.charCodeAt(m++) ? (f.consume(x), w) : g(x);
    }
    function p(x) {
      return ve(x) ? (f.consume(x), p) : (f.exit("whitespace"), y(x));
    }
    function y(x) {
      return x === null || X(x) ? (f.exit(r), d(x)) : g(x);
    }
  }
}
function Vp(e, t) {
  return e.marker ? R1(e.marker, t).repeat(3) : R1(e.fence, t);
}
function R1(e, t) {
  return typeof e == "string" ? e : e[t];
}
function WP(e) {
  const t = Gm(e), n = {}, r = {};
  let o = -1;
  for (; ++o < t.length; ) {
    const i = t[o];
    n[i.type] = qP(i), r[i.type] = GP, r[i.type + "Value"] = QP;
  }
  return { enter: n, exit: r };
}
function qP(e) {
  return t;
  function t(n) {
    this.enter({ type: e.type, value: "" }, n), this.buffer();
  }
}
function GP(e) {
  const t = this.resume(), n = this.exit(e);
  n.value = t.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
}
function QP(e) {
  this.config.enter.data.call(this, e), this.config.exit.data.call(this, e);
}
function KP(e) {
  const t = [], n = {}, r = Gm(e);
  let o = -1;
  for (; ++o < r.length; ) {
    const i = r[o];
    n[i.type] = YP(i), t.push({ atBreak: !0, character: Up(i, "open").charAt(0) });
  }
  return { unsafe: t, handlers: n };
}
function YP(e) {
  const t = Up(e, "open"), n = Up(e, "close");
  return r;
  function r(o) {
    return t + (o.value ? `
` + o.value : "") + `
` + n;
  }
}
function Up(e, t) {
  return e.marker ? T1(e.marker, t).repeat(3) : T1(e.fence, t);
}
function T1(e, t) {
  return typeof e == "string" ? e : e[t];
}
function XP(e = "yaml") {
  const t = this.data();
  n("micromarkExtensions", VP(e)), n("fromMarkdownExtensions", WP(e)), n("toMarkdownExtensions", KP(e));
  function n(r, o) {
    (t[r] ? t[r] : t[r] = []).push(o);
  }
}
function It(e, t, n, r) {
  const o = e.length;
  let i = 0, l;
  if (t < 0 ? t = -t > o ? 0 : o + t : t = t > o ? o : t, n = n > 0 ? n : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(t, n), [].splice.apply(e, l);
  else
    for (n && [].splice.apply(e, [t, n]); i < r.length; )
      l = r.slice(i, i + 1e4), l.unshift(t, 0), [].splice.apply(e, l), i += 1e4, t += 1e4;
}
function jt(e, t) {
  return e.length > 0 ? (It(e, e.length, 0, t), e) : t;
}
const I1 = {}.hasOwnProperty;
function gS(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    ZP(t, e[n]);
  return t;
}
function ZP(e, t) {
  let n;
  for (n in t) {
    const o = (I1.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n];
    let l;
    for (l in i) {
      I1.call(o, l) || (o[l] = []);
      const a = i[l];
      JP(
        o[l],
        Array.isArray(a) ? a : a ? [a] : []
      );
    }
  }
}
function JP(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  It(e, 0, 0, r);
}
const e_ = {
  tokenize: i_,
  partial: !0
}, vS = {
  tokenize: l_,
  partial: !0
}, yS = {
  tokenize: a_,
  partial: !0
}, gi = {
  tokenize: u_,
  partial: !0
}, xS = {
  tokenize: s_,
  partial: !0
}, wS = {
  tokenize: r_,
  previous: kS
}, bS = {
  tokenize: o_,
  previous: Km
}, Jn = {
  tokenize: n_,
  previous: CS
}, In = {}, t_ = {
  text: In
};
let Gr = 48;
for (; Gr < 123; )
  In[Gr] = Jn, Gr++, Gr === 58 ? Gr = 65 : Gr === 91 && (Gr = 97);
In[43] = Jn;
In[45] = Jn;
In[46] = Jn;
In[95] = Jn;
In[72] = [Jn, bS];
In[104] = [Jn, bS];
In[87] = [Jn, wS];
In[119] = [Jn, wS];
function n_(e, t, n) {
  const r = this;
  let o, i;
  return l;
  function l(g) {
    return !O1(g) || !CS(r.previous) || Ym(r.events) ? n(g) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(g));
  }
  function a(g) {
    return O1(g) ? (e.consume(g), a) : g === 64 ? (e.consume(g), s) : n(g);
  }
  function s(g) {
    return g === 46 ? e.check(gi, d, u)(g) : g === 45 || g === 95 ? e.check(gi, n, c)(g) : ft(g) ? (!i && ju(g) && (i = !0), e.consume(g), s) : d(g);
  }
  function u(g) {
    return e.consume(g), o = !0, i = void 0, s;
  }
  function c(g) {
    return e.consume(g), f;
  }
  function f(g) {
    return g === 46 ? e.check(gi, n, u)(g) : s(g);
  }
  function d(g) {
    return o && !i ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(g)) : n(g);
  }
}
function r_(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return l !== 87 && l !== 119 || !kS(r.previous) || Ym(r.events) ? n(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(
      e_,
      e.attempt(vS, e.attempt(yS, i), n),
      n
    )(l));
  }
  function i(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(l);
  }
}
function o_(e, t, n) {
  const r = this;
  return o;
  function o(m) {
    return m !== 72 && m !== 104 || !Km(r.previous) || Ym(r.events) ? n(m) : (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), e.consume(m), i);
  }
  function i(m) {
    return m === 84 || m === 116 ? (e.consume(m), l) : n(m);
  }
  function l(m) {
    return m === 84 || m === 116 ? (e.consume(m), a) : n(m);
  }
  function a(m) {
    return m === 80 || m === 112 ? (e.consume(m), s) : n(m);
  }
  function s(m) {
    return m === 83 || m === 115 ? (e.consume(m), u) : u(m);
  }
  function u(m) {
    return m === 58 ? (e.consume(m), c) : n(m);
  }
  function c(m) {
    return m === 47 ? (e.consume(m), f) : n(m);
  }
  function f(m) {
    return m === 47 ? (e.consume(m), d) : n(m);
  }
  function d(m) {
    return m === null || va(m) || Tc(m) || Ic(m) ? n(m) : e.attempt(vS, e.attempt(yS, g), n)(m);
  }
  function g(m) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(m);
  }
}
function i_(e, t, n) {
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
function l_(e, t, n) {
  let r, o;
  return i;
  function i(s) {
    return s === 38 ? e.check(
      xS,
      a,
      l
    )(s) : s === 46 || s === 95 ? e.check(gi, a, l)(s) : s === null || va(s) || Tc(s) || s !== 45 && Ic(s) ? a(s) : (e.consume(s), i);
  }
  function l(s) {
    return s === 46 ? (o = r, r = void 0, e.consume(s), i) : (s === 95 && (r = !0), e.consume(s), i);
  }
  function a(s) {
    return !o && !r ? t(s) : n(s);
  }
}
function a_(e, t) {
  let n = 0;
  return r;
  function r(l) {
    return l === 38 ? e.check(
      xS,
      t,
      o
    )(l) : (l === 40 && n++, l === 41 ? e.check(
      gi,
      i,
      o
    )(l) : Qm(l) ? t(l) : SS(l) ? e.check(gi, t, o)(l) : (e.consume(l), r));
  }
  function o(l) {
    return e.consume(l), r;
  }
  function i(l) {
    return n--, n < 0 ? t(l) : o(l);
  }
}
function s_(e, t, n) {
  return r;
  function r(l) {
    return e.consume(l), o;
  }
  function o(l) {
    return Ut(l) ? (e.consume(l), o) : l === 59 ? (e.consume(l), i) : n(l);
  }
  function i(l) {
    return Qm(l) ? t(l) : n(l);
  }
}
function u_(e, t, n) {
  return r;
  function r(i) {
    return e.consume(i), o;
  }
  function o(i) {
    return SS(i) ? (e.consume(i), o) : Qm(i) ? t(i) : n(i);
  }
}
function SS(e) {
  return e === 33 || e === 34 || e === 39 || e === 41 || e === 42 || e === 44 || e === 46 || e === 58 || e === 59 || e === 60 || e === 63 || e === 95 || e === 126;
}
function Qm(e) {
  return e === null || e === 60 || Le(e);
}
function O1(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || ft(e);
}
function kS(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 126 || Le(e);
}
function Km(e) {
  return e === null || !Ut(e);
}
function CS(e) {
  return e !== 47 && Km(e);
}
function Ym(e) {
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
function Bi(e) {
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
function Hu(e) {
  if (e === null || Le(e) || Tc(e))
    return 1;
  if (Ic(e))
    return 2;
}
function Oc(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; ) {
    const i = e[o].resolveAll;
    i && !r.includes(i) && (t = i(t, n), r.push(i));
  }
  return t;
}
const Wp = {
  name: "attention",
  tokenize: f_,
  resolveAll: c_
};
function c_(e, t) {
  let n = -1, r, o, i, l, a, s, u, c;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const f = Object.assign({}, e[r][1].end), d = Object.assign({}, e[n][1].start);
          M1(f, -s), M1(d, s), l = {
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
          }, e[r][1].end = Object.assign({}, l.start), e[n][1].start = Object.assign({}, a.end), u = [], e[r][1].end.offset - e[r][1].start.offset && (u = jt(u, [
            ["enter", e[r][1], t],
            ["exit", e[r][1], t]
          ])), u = jt(u, [
            ["enter", o, t],
            ["enter", l, t],
            ["exit", l, t],
            ["enter", i, t]
          ]), u = jt(
            u,
            Oc(
              t.parser.constructs.insideSpan.null,
              e.slice(r + 1, n),
              t
            )
          ), u = jt(u, [
            ["exit", i, t],
            ["enter", a, t],
            ["exit", a, t],
            ["exit", o, t]
          ]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, u = jt(u, [
            ["enter", e[n][1], t],
            ["exit", e[n][1], t]
          ])) : c = 0, It(e, r - 1, n - r + 3, u), n = r + u.length - c - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function f_(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, o = Hu(r);
  let i;
  return l;
  function l(s) {
    return e.enter("attentionSequence"), i = s, a(s);
  }
  function a(s) {
    if (s === i)
      return e.consume(s), a;
    const u = e.exit("attentionSequence"), c = Hu(s), f = !c || c === 2 && o || n.includes(s), d = !o || o === 2 && c || n.includes(r);
    return u._open = Boolean(i === 42 ? f : f && (o || !d)), u._close = Boolean(i === 42 ? d : d && (c || !f)), t(s);
  }
}
function M1(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const d_ = {
  name: "autolink",
  tokenize: p_
};
function p_(e, t, n) {
  let r = 1;
  return o;
  function o(m) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(m), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i;
  }
  function i(m) {
    return Ut(m) ? (e.consume(m), l) : P1(m) ? u(m) : n(m);
  }
  function l(m) {
    return m === 43 || m === 45 || m === 46 || ft(m) ? a(m) : u(m);
  }
  function a(m) {
    return m === 58 ? (e.consume(m), s) : (m === 43 || m === 45 || m === 46 || ft(m)) && r++ < 32 ? (e.consume(m), a) : u(m);
  }
  function s(m) {
    return m === 62 ? (e.exit("autolinkProtocol"), g(m)) : m === null || m === 32 || m === 60 || va(m) ? n(m) : (e.consume(m), s);
  }
  function u(m) {
    return m === 64 ? (e.consume(m), r = 0, c) : P1(m) ? (e.consume(m), u) : n(m);
  }
  function c(m) {
    return ft(m) ? f(m) : n(m);
  }
  function f(m) {
    return m === 46 ? (e.consume(m), r = 0, c) : m === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", g(m)) : d(m);
  }
  function d(m) {
    return (m === 45 || ft(m)) && r++ < 63 ? (e.consume(m), m === 45 ? d : f) : n(m);
  }
  function g(m) {
    return e.enter("autolinkMarker"), e.consume(m), e.exit("autolinkMarker"), e.exit("autolink"), t;
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
const Ha = {
  tokenize: h_,
  partial: !0
};
function h_(e, t, n) {
  return ge(e, r, "linePrefix");
  function r(o) {
    return o === null || X(o) ? t(o) : n(o);
  }
}
const $S = {
  name: "blockQuote",
  tokenize: m_,
  continuation: {
    tokenize: g_
  },
  exit: v_
};
function m_(e, t, n) {
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
function g_(e, t, n) {
  return ge(
    e,
    e.attempt($S, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function v_(e) {
  e.exit("blockQuote");
}
const ES = {
  name: "characterEscape",
  tokenize: y_
};
function y_(e, t, n) {
  return r;
  function r(i) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(i), e.exit("escapeMarker"), o;
  }
  function o(i) {
    return BP(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i);
  }
}
const N1 = document.createElement("i");
function Xm(e) {
  const t = "&" + e + ";";
  N1.innerHTML = t;
  const n = N1.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
const AS = {
  name: "characterReference",
  tokenize: x_
};
function x_(e, t, n) {
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
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), i = 6, l = zP, c) : (e.enter("characterReferenceValue"), i = 7, l = ju, c(f));
  }
  function c(f) {
    let d;
    return f === 59 && o ? (d = e.exit("characterReferenceValue"), l === ft && !Xm(r.sliceSerialize(d)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)) : l(f) && o++ < i ? (e.consume(f), c) : n(f);
  }
}
const D1 = {
  name: "codeFenced",
  tokenize: w_,
  concrete: !0
};
function w_(e, t, n) {
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
    return S === null || Le(S) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ge(e, m, "whitespace")(S)) : S === 96 && S === u ? n(S) : (e.consume(S), g);
  }
  function m(S) {
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
    return _;
    function _(M) {
      return S.enter("lineEnding"), S.consume(M), S.exit("lineEnding"), T;
    }
    function T(M) {
      return P.parser.lazy[P.now().line] ? $(M) : E(M);
    }
  }
  function A(S, E, $) {
    let P = 0;
    return ge(
      S,
      _,
      "linePrefix",
      this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
    function _(L) {
      return S.enter("codeFencedFence"), S.enter("codeFencedFenceSequence"), T(L);
    }
    function T(L) {
      return L === u ? (S.consume(L), P++, T) : P < s ? $(L) : (S.exit("codeFencedFenceSequence"), ge(S, M, "whitespace")(L));
    }
    function M(L) {
      return L === null || X(L) ? (S.exit("codeFencedFence"), E(L)) : $(L);
    }
  }
}
const qf = {
  name: "codeIndented",
  tokenize: S_
}, b_ = {
  tokenize: k_,
  partial: !0
};
function S_(e, t, n) {
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
    return u === null ? s(u) : X(u) ? e.attempt(b_, l, s)(u) : (e.enter("codeFlowValue"), a(u));
  }
  function a(u) {
    return u === null || X(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), a);
  }
  function s(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function k_(e, t, n) {
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
const C_ = {
  name: "codeText",
  tokenize: A_,
  resolve: $_,
  previous: E_
};
function $_(e) {
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
function E_(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function A_(e, t, n) {
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
function PS(e) {
  const t = {};
  let n = -1, r, o, i, l, a, s, u;
  for (; ++n < e.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = e[n], n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, i = 0, i < s.length && s[i][1].type === "lineEndingBlank" && (i += 2), i < s.length && s[i][1].type === "content"))
      for (; ++i < s.length && s[i][1].type !== "content"; )
        s[i][1].type === "chunkText" && (s[i][1]._isInFirstContentOfListItem = !0, i++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, P_(e, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (i = n, o = void 0; i-- && (l = e[i], l[1].type === "lineEnding" || l[1].type === "lineEndingBlank"); )
        l[0] === "enter" && (o && (e[o][1].type = "lineEndingBlank"), l[1].type = "lineEnding", o = i);
      o && (r[1].end = Object.assign({}, e[o][1].start), a = e.slice(o, n), a.unshift(r), It(e, o, n - o + 1, a));
    }
  }
  return !u;
}
function P_(e, t) {
  const n = e[t][1], r = e[t][2];
  let o = t - 1;
  const i = [], l = n._tokenizer || r.parser[n.contentType](n.start), a = l.events, s = [], u = {};
  let c, f, d = -1, g = n, m = 0, v = 0;
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
    s.unshift([y, y + p.length - 1]), It(e, y, 2, p);
  }
  for (d = -1; ++d < s.length; )
    u[m + s[d][0]] = m + s[d][1], m += s[d][1] - s[d][0] - 1;
  return u;
}
const __ = {
  tokenize: I_,
  resolve: T_
}, R_ = {
  tokenize: O_,
  partial: !0
};
function T_(e) {
  return PS(e), e;
}
function I_(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), o(a);
  }
  function o(a) {
    return a === null ? i(a) : X(a) ? e.check(
      R_,
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
function O_(e, t, n) {
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
function _S(e, t, n, r, o, i, l, a, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(p) {
    return p === 60 ? (e.enter(r), e.enter(o), e.enter(i), e.consume(p), e.exit(i), d) : p === null || p === 41 || va(p) ? n(p) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), v(p));
  }
  function d(p) {
    return p === 62 ? (e.enter(i), e.consume(p), e.exit(i), e.exit(o), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), g(p));
  }
  function g(p) {
    return p === 62 ? (e.exit("chunkString"), e.exit(a), d(p)) : p === null || p === 60 || X(p) ? n(p) : (e.consume(p), p === 92 ? m : g);
  }
  function m(p) {
    return p === 60 || p === 62 || p === 92 ? (e.consume(p), g) : g(p);
  }
  function v(p) {
    return p === 40 ? ++c > u ? n(p) : (e.consume(p), v) : p === 41 ? c-- ? (e.consume(p), v) : (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(p)) : p === null || Le(p) ? c ? n(p) : (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(p)) : va(p) ? n(p) : (e.consume(p), p === 92 ? w : v);
  }
  function w(p) {
    return p === 40 || p === 41 || p === 92 ? (e.consume(p), v) : v(p);
  }
}
function RS(e, t, n, r, o, i) {
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
function TS(e, t, n, r, o, i) {
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
function Fl(e, t) {
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
const M_ = {
  name: "definition",
  tokenize: D_
}, N_ = {
  tokenize: L_,
  partial: !0
};
function D_(e, t, n) {
  const r = this;
  let o;
  return i;
  function i(s) {
    return e.enter("definition"), RS.call(
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
    return o = pn(
      r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
    ), s === 58 ? (e.enter("definitionMarker"), e.consume(s), e.exit("definitionMarker"), Fl(
      e,
      _S(
        e,
        e.attempt(
          N_,
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
function L_(e, t, n) {
  return r;
  function r(l) {
    return Le(l) ? Fl(e, o)(l) : n(l);
  }
  function o(l) {
    return l === 34 || l === 39 || l === 40 ? TS(
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
const F_ = {
  name: "hardBreakEscape",
  tokenize: z_
};
function z_(e, t, n) {
  return r;
  function r(i) {
    return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(i), o;
  }
  function o(i) {
    return X(i) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(i)) : n(i);
  }
}
const B_ = {
  name: "headingAtx",
  tokenize: H_,
  resolve: j_
};
function j_(e, t) {
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
  }, It(e, r, n - r + 1, [
    ["enter", o, t],
    ["enter", i, t],
    ["exit", i, t],
    ["exit", o, t]
  ])), e;
}
function H_(e, t, n) {
  const r = this;
  let o = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), e.enter("atxHeadingSequence"), l(c);
  }
  function l(c) {
    return c === 35 && o++ < 6 ? (e.consume(c), l) : c === null || Le(c) ? (e.exit("atxHeadingSequence"), r.interrupt ? t(c) : a(c)) : n(c);
  }
  function a(c) {
    return c === 35 ? (e.enter("atxHeadingSequence"), s(c)) : c === null || X(c) ? (e.exit("atxHeading"), t(c)) : ve(c) ? ge(e, a, "whitespace")(c) : (e.enter("atxHeadingText"), u(c));
  }
  function s(c) {
    return c === 35 ? (e.consume(c), s) : (e.exit("atxHeadingSequence"), a(c));
  }
  function u(c) {
    return c === null || c === 35 || Le(c) ? (e.exit("atxHeadingText"), a(c)) : (e.consume(c), u);
  }
}
const V_ = [
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
], L1 = ["pre", "script", "style", "textarea"], U_ = {
  name: "htmlFlow",
  tokenize: G_,
  resolveTo: q_,
  concrete: !0
}, W_ = {
  tokenize: Q_,
  partial: !0
};
function q_(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function G_(e, t, n) {
  const r = this;
  let o, i, l, a, s;
  return u;
  function u(C) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(C), c;
  }
  function c(C) {
    return C === 33 ? (e.consume(C), f) : C === 47 ? (e.consume(C), m) : C === 63 ? (e.consume(C), o = 3, r.interrupt ? t : I) : Ut(C) ? (e.consume(C), l = String.fromCharCode(C), i = !0, v) : n(C);
  }
  function f(C) {
    return C === 45 ? (e.consume(C), o = 2, d) : C === 91 ? (e.consume(C), o = 5, l = "CDATA[", a = 0, g) : Ut(C) ? (e.consume(C), o = 4, r.interrupt ? t : I) : n(C);
  }
  function d(C) {
    return C === 45 ? (e.consume(C), r.interrupt ? t : I) : n(C);
  }
  function g(C) {
    return C === l.charCodeAt(a++) ? (e.consume(C), a === l.length ? r.interrupt ? t : T : g) : n(C);
  }
  function m(C) {
    return Ut(C) ? (e.consume(C), l = String.fromCharCode(C), v) : n(C);
  }
  function v(C) {
    return C === null || C === 47 || C === 62 || Le(C) ? C !== 47 && i && L1.includes(l.toLowerCase()) ? (o = 1, r.interrupt ? t(C) : T(C)) : V_.includes(l.toLowerCase()) ? (o = 6, C === 47 ? (e.consume(C), w) : r.interrupt ? t(C) : T(C)) : (o = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(C) : i ? y(C) : p(C)) : C === 45 || ft(C) ? (e.consume(C), l += String.fromCharCode(C), v) : n(C);
  }
  function w(C) {
    return C === 62 ? (e.consume(C), r.interrupt ? t : T) : n(C);
  }
  function p(C) {
    return ve(C) ? (e.consume(C), p) : P(C);
  }
  function y(C) {
    return C === 47 ? (e.consume(C), P) : C === 58 || C === 95 || Ut(C) ? (e.consume(C), x) : ve(C) ? (e.consume(C), y) : P(C);
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
    return C === null || C === 34 || C === 39 || C === 60 || C === 61 || C === 62 || C === 96 || Le(C) ? b(C) : (e.consume(C), E);
  }
  function $(C) {
    return C === 47 || C === 62 || ve(C) ? y(C) : n(C);
  }
  function P(C) {
    return C === 62 ? (e.consume(C), _) : n(C);
  }
  function _(C) {
    return ve(C) ? (e.consume(C), _) : C === null || X(C) ? T(C) : n(C);
  }
  function T(C) {
    return C === 45 && o === 2 ? (e.consume(C), z) : C === 60 && o === 1 ? (e.consume(C), R) : C === 62 && o === 4 ? (e.consume(C), O) : C === 63 && o === 3 ? (e.consume(C), I) : C === 93 && o === 5 ? (e.consume(C), N) : X(C) && (o === 6 || o === 7) ? e.check(
      W_,
      O,
      M
    )(C) : C === null || X(C) ? M(C) : (e.consume(C), T);
  }
  function M(C) {
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
    )(C) : (e.enter("htmlFlowData"), T(C));
  }
  function B(C, J, ne) {
    return ae;
    function ae(G) {
      return C.enter("lineEnding"), C.consume(G), C.exit("lineEnding"), ee;
    }
    function ee(G) {
      return r.parser.lazy[r.now().line] ? ne(G) : J(G);
    }
  }
  function z(C) {
    return C === 45 ? (e.consume(C), I) : T(C);
  }
  function R(C) {
    return C === 47 ? (e.consume(C), l = "", H) : T(C);
  }
  function H(C) {
    return C === 62 && L1.includes(l.toLowerCase()) ? (e.consume(C), O) : Ut(C) && l.length < 8 ? (e.consume(C), l += String.fromCharCode(C), H) : T(C);
  }
  function N(C) {
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
function Q_(e, t, n) {
  return r;
  function r(o) {
    return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), e.attempt(Ha, t, n);
  }
}
const K_ = {
  name: "htmlText",
  tokenize: Y_
};
function Y_(e, t, n) {
  const r = this;
  let o, i, l, a;
  return s;
  function s(k) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(k), u;
  }
  function u(k) {
    return k === 33 ? (e.consume(k), c) : k === 47 ? (e.consume(k), E) : k === 63 ? (e.consume(k), A) : Ut(k) ? (e.consume(k), _) : n(k);
  }
  function c(k) {
    return k === 45 ? (e.consume(k), f) : k === 91 ? (e.consume(k), i = "CDATA[", l = 0, w) : Ut(k) ? (e.consume(k), b) : n(k);
  }
  function f(k) {
    return k === 45 ? (e.consume(k), d) : n(k);
  }
  function d(k) {
    return k === null || k === 62 ? n(k) : k === 45 ? (e.consume(k), g) : m(k);
  }
  function g(k) {
    return k === null || k === 62 ? n(k) : m(k);
  }
  function m(k) {
    return k === null ? n(k) : k === 45 ? (e.consume(k), v) : X(k) ? (a = m, N(k)) : (e.consume(k), m);
  }
  function v(k) {
    return k === 45 ? (e.consume(k), O) : m(k);
  }
  function w(k) {
    return k === i.charCodeAt(l++) ? (e.consume(k), l === i.length ? p : w) : n(k);
  }
  function p(k) {
    return k === null ? n(k) : k === 93 ? (e.consume(k), y) : X(k) ? (a = p, N(k)) : (e.consume(k), p);
  }
  function y(k) {
    return k === 93 ? (e.consume(k), x) : p(k);
  }
  function x(k) {
    return k === 62 ? O(k) : k === 93 ? (e.consume(k), x) : p(k);
  }
  function b(k) {
    return k === null || k === 62 ? O(k) : X(k) ? (a = b, N(k)) : (e.consume(k), b);
  }
  function A(k) {
    return k === null ? n(k) : k === 63 ? (e.consume(k), S) : X(k) ? (a = A, N(k)) : (e.consume(k), A);
  }
  function S(k) {
    return k === 62 ? O(k) : A(k);
  }
  function E(k) {
    return Ut(k) ? (e.consume(k), $) : n(k);
  }
  function $(k) {
    return k === 45 || ft(k) ? (e.consume(k), $) : P(k);
  }
  function P(k) {
    return X(k) ? (a = P, N(k)) : ve(k) ? (e.consume(k), P) : O(k);
  }
  function _(k) {
    return k === 45 || ft(k) ? (e.consume(k), _) : k === 47 || k === 62 || Le(k) ? T(k) : n(k);
  }
  function T(k) {
    return k === 47 ? (e.consume(k), O) : k === 58 || k === 95 || Ut(k) ? (e.consume(k), M) : X(k) ? (a = T, N(k)) : ve(k) ? (e.consume(k), T) : O(k);
  }
  function M(k) {
    return k === 45 || k === 46 || k === 58 || k === 95 || ft(k) ? (e.consume(k), M) : L(k);
  }
  function L(k) {
    return k === 61 ? (e.consume(k), B) : X(k) ? (a = L, N(k)) : ve(k) ? (e.consume(k), L) : T(k);
  }
  function B(k) {
    return k === null || k === 60 || k === 61 || k === 62 || k === 96 ? n(k) : k === 34 || k === 39 ? (e.consume(k), o = k, z) : X(k) ? (a = B, N(k)) : ve(k) ? (e.consume(k), B) : (e.consume(k), o = void 0, H);
  }
  function z(k) {
    return k === o ? (e.consume(k), R) : k === null ? n(k) : X(k) ? (a = z, N(k)) : (e.consume(k), z);
  }
  function R(k) {
    return k === 62 || k === 47 || Le(k) ? T(k) : n(k);
  }
  function H(k) {
    return k === null || k === 34 || k === 39 || k === 60 || k === 61 || k === 96 ? n(k) : k === 62 || Le(k) ? T(k) : (e.consume(k), H);
  }
  function N(k) {
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
const Zm = {
  name: "labelEnd",
  tokenize: n3,
  resolveTo: t3,
  resolveAll: e3
}, X_ = {
  tokenize: r3
}, Z_ = {
  tokenize: o3
}, J_ = {
  tokenize: i3
};
function e3(e) {
  let t = -1, n;
  for (; ++t < e.length; )
    n = e[t][1], (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++);
  return e;
}
function t3(e, t) {
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
  ], a = jt(a, e.slice(i + 1, i + r + 3)), a = jt(a, [["enter", c, t]]), a = jt(
    a,
    Oc(
      t.parser.constructs.insideSpan.null,
      e.slice(i + r + 4, l - 3),
      t
    )
  ), a = jt(a, [
    ["exit", c, t],
    e[l - 2],
    e[l - 1],
    ["exit", u, t]
  ]), a = jt(a, e.slice(l + 1)), a = jt(a, [["exit", s, t]]), It(e, i, e.length, a), e;
}
function n3(e, t, n) {
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
      pn(
        r.sliceSerialize({
          start: i.end,
          end: r.now()
        })
      )
    ), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(c), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(c);
  }
  function s(c) {
    return c === 40 ? e.attempt(
      X_,
      t,
      l ? t : u
    )(c) : c === 91 ? e.attempt(
      Z_,
      t,
      l ? e.attempt(J_, t, u) : u
    )(c) : l ? t(c) : u(c);
  }
  function u(c) {
    return i._balanced = !0, n(c);
  }
}
function r3(e, t, n) {
  return r;
  function r(s) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(s), e.exit("resourceMarker"), Fl(e, o);
  }
  function o(s) {
    return s === 41 ? a(s) : _S(
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
    return Le(s) ? Fl(e, l)(s) : a(s);
  }
  function l(s) {
    return s === 34 || s === 39 || s === 40 ? TS(
      e,
      Fl(e, a),
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
function o3(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return RS.call(
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
function i3(e, t, n) {
  return r;
  function r(i) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), o;
  }
  function o(i) {
    return i === 93 ? (e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), e.exit("reference"), t) : n(i);
  }
}
const l3 = {
  name: "labelStartImage",
  tokenize: a3,
  resolveAll: Zm.resolveAll
};
function a3(e, t, n) {
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
const s3 = {
  name: "labelStartLink",
  tokenize: u3,
  resolveAll: Zm.resolveAll
};
function u3(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), i;
  }
  function i(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const Gf = {
  name: "lineEnding",
  tokenize: c3
};
function c3(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ge(e, t, "linePrefix");
  }
}
const eu = {
  name: "thematicBreak",
  tokenize: f3
};
function f3(e, t, n) {
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
  tokenize: h3,
  continuation: {
    tokenize: m3
  },
  exit: v3
}, d3 = {
  tokenize: y3,
  partial: !0
}, p3 = {
  tokenize: g3,
  partial: !0
};
function h3(e, t, n) {
  const r = this, o = r.events[r.events.length - 1];
  let i = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0, l = 0;
  return a;
  function a(g) {
    const m = r.containerState.type || (g === 42 || g === 43 || g === 45 ? "listUnordered" : "listOrdered");
    if (m === "listUnordered" ? !r.containerState.marker || g === r.containerState.marker : ju(g)) {
      if (r.containerState.type || (r.containerState.type = m, e.enter(m, {
        _container: !0
      })), m === "listUnordered")
        return e.enter("listItemPrefix"), g === 42 || g === 45 ? e.check(eu, n, u)(g) : u(g);
      if (!r.interrupt || g === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(g);
    }
    return n(g);
  }
  function s(g) {
    return ju(g) && ++l < 10 ? (e.consume(g), s) : (!r.interrupt || l < 2) && (r.containerState.marker ? g === r.containerState.marker : g === 41 || g === 46) ? (e.exit("listItemValue"), u(g)) : n(g);
  }
  function u(g) {
    return e.enter("listItemMarker"), e.consume(g), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || g, e.check(
      Ha,
      r.interrupt ? n : c,
      e.attempt(
        d3,
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
function m3(e, t, n) {
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
    return r.containerState.furtherBlankLines || !ve(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(p3, t, l)(a));
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
function g3(e, t, n) {
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
function v3(e) {
  e.exit(this.containerState.type);
}
function y3(e, t, n) {
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
const F1 = {
  name: "setextUnderline",
  tokenize: w3,
  resolveTo: x3
};
function x3(e, t) {
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
function w3(e, t, n) {
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
const b3 = {
  tokenize: _3,
  partial: !0
};
function S3() {
  return {
    document: {
      [91]: {
        tokenize: E3,
        continuation: {
          tokenize: A3
        },
        exit: P3
      }
    },
    text: {
      [91]: {
        tokenize: $3
      },
      [93]: {
        add: "after",
        tokenize: k3,
        resolveTo: C3
      }
    }
  };
}
function k3(e, t, n) {
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
    const u = pn(
      r.sliceSerialize({
        start: l.end,
        end: r.now()
      })
    );
    return u.codePointAt(0) !== 94 || !i.includes(u.slice(1)) ? n(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), t(s));
  }
}
function C3(e, t) {
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
function $3(e, t, n) {
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
    if (i > 999 || f === 93 && !l || f === null || f === 91 || Le(f))
      return n(f);
    if (f === 93) {
      e.exit("chunkString");
      const d = e.exit("gfmFootnoteCallString");
      return o.includes(pn(r.sliceSerialize(d))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(f);
    }
    return Le(f) || (l = !0), i++, e.consume(f), f === 92 ? c : u;
  }
  function c(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), i++, u) : u(f);
  }
}
function E3(e, t, n) {
  const r = this, o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let i, l = 0, a;
  return s;
  function s(m) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(m) {
    return m === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", c) : n(m);
  }
  function c(m) {
    if (l > 999 || m === 93 && !a || m === null || m === 91 || Le(m))
      return n(m);
    if (m === 93) {
      e.exit("chunkString");
      const v = e.exit("gfmFootnoteDefinitionLabelString");
      return i = pn(r.sliceSerialize(v)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d;
    }
    return Le(m) || (a = !0), l++, e.consume(m), m === 92 ? f : c;
  }
  function f(m) {
    return m === 91 || m === 92 || m === 93 ? (e.consume(m), l++, c) : c(m);
  }
  function d(m) {
    return m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), o.includes(i) || o.push(i), ge(
      e,
      g,
      "gfmFootnoteDefinitionWhitespace"
    )) : n(m);
  }
  function g(m) {
    return t(m);
  }
}
function A3(e, t, n) {
  return e.check(Ha, t, e.attempt(b3, t, n));
}
function P3(e) {
  e.exit("gfmFootnoteDefinition");
}
function _3(e, t, n) {
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
function R3(e) {
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
            g && It(
              d,
              d.length,
              0,
              Oc(g, l.slice(u + 1, s), a)
            ), It(d, d.length, 0, [
              ["exit", f, a],
              ["enter", l[s][1], a],
              ["exit", l[s][1], a],
              ["exit", c, a]
            ]), It(l, u - 1, s - u + 3, d), s = u + d.length - 2;
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
    function d(m) {
      return u === 126 && c[c.length - 1][1].type !== "characterEscape" ? s(m) : (l.enter("strikethroughSequenceTemporary"), g(m));
    }
    function g(m) {
      const v = Hu(u);
      if (m === 126)
        return f > 1 ? s(m) : (l.consume(m), f++, g);
      if (f < 2 && !n)
        return s(m);
      const w = l.exit("strikethroughSequenceTemporary"), p = Hu(m);
      return w._open = !p || p === 2 && Boolean(v), w._close = !v || v === 2 && Boolean(p), a(m);
    }
  }
}
const T3 = {
  flow: {
    null: {
      tokenize: O3,
      resolve: I3
    }
  }
}, z1 = {
  tokenize: M3,
  partial: !0
};
function I3(e, t) {
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
function O3(e, t, n) {
  const r = this, o = [];
  let i = 0, l, a;
  return s;
  function s(R) {
    return e.enter("table")._align = o, e.enter("tableHead"), e.enter("tableRow"), R === 124 ? u(R) : (i++, e.enter("temporaryTableCellContent"), d(R));
  }
  function u(R) {
    return e.enter("tableCellDivider"), e.consume(R), e.exit("tableCellDivider"), l = !0, c;
  }
  function c(R) {
    return R === null || X(R) ? m(R) : ve(R) ? (e.enter("whitespace"), e.consume(R), f) : (l && (l = void 0, i++), R === 124 ? u(R) : (e.enter("temporaryTableCellContent"), d(R)));
  }
  function f(R) {
    return ve(R) ? (e.consume(R), f) : (e.exit("whitespace"), c(R));
  }
  function d(R) {
    return R === null || R === 124 || Le(R) ? (e.exit("temporaryTableCellContent"), c(R)) : (e.consume(R), R === 92 ? g : d);
  }
  function g(R) {
    return R === 92 || R === 124 ? (e.consume(R), d) : d(R);
  }
  function m(R) {
    if (R === null)
      return n(R);
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
    )(R);
  }
  function v(R) {
    return R === null || X(R) ? b(R) : ve(R) ? (e.enter("whitespace"), e.consume(R), w) : R === 45 ? (e.enter("tableDelimiterFiller"), e.consume(R), a = !0, o.push("none"), p) : R === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(R), e.exit("tableDelimiterAlignment"), o.push("left"), y) : R === 124 ? (e.enter("tableCellDivider"), e.consume(R), e.exit("tableCellDivider"), v) : n(R);
  }
  function w(R) {
    return ve(R) ? (e.consume(R), w) : (e.exit("whitespace"), v(R));
  }
  function p(R) {
    return R === 45 ? (e.consume(R), p) : (e.exit("tableDelimiterFiller"), R === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(R), e.exit("tableDelimiterAlignment"), o[o.length - 1] = o[o.length - 1] === "left" ? "center" : "right", x) : v(R));
  }
  function y(R) {
    return R === 45 ? (e.enter("tableDelimiterFiller"), e.consume(R), a = !0, p) : n(R);
  }
  function x(R) {
    return R === null || X(R) ? b(R) : ve(R) ? (e.enter("whitespace"), e.consume(R), w) : R === 124 ? (e.enter("tableCellDivider"), e.consume(R), e.exit("tableCellDivider"), v) : n(R);
  }
  function b(R) {
    return e.exit("tableDelimiterRow"), !a || i !== o.length ? n(R) : R === null ? A(R) : e.check(
      z1,
      A,
      e.attempt(
        {
          tokenize: z,
          partial: !0
        },
        ge(e, S, "linePrefix", 4),
        A
      )
    )(R);
  }
  function A(R) {
    return e.exit("table"), t(R);
  }
  function S(R) {
    return e.enter("tableBody"), E(R);
  }
  function E(R) {
    return e.enter("tableRow"), R === 124 ? $(R) : (e.enter("temporaryTableCellContent"), T(R));
  }
  function $(R) {
    return e.enter("tableCellDivider"), e.consume(R), e.exit("tableCellDivider"), P;
  }
  function P(R) {
    return R === null || X(R) ? L(R) : ve(R) ? (e.enter("whitespace"), e.consume(R), _) : R === 124 ? $(R) : (e.enter("temporaryTableCellContent"), T(R));
  }
  function _(R) {
    return ve(R) ? (e.consume(R), _) : (e.exit("whitespace"), P(R));
  }
  function T(R) {
    return R === null || R === 124 || Le(R) ? (e.exit("temporaryTableCellContent"), P(R)) : (e.consume(R), R === 92 ? M : T);
  }
  function M(R) {
    return R === 92 || R === 124 ? (e.consume(R), T) : T(R);
  }
  function L(R) {
    return e.exit("tableRow"), R === null ? B(R) : e.check(
      z1,
      B,
      e.attempt(
        {
          tokenize: z,
          partial: !0
        },
        ge(e, E, "linePrefix", 4),
        B
      )
    )(R);
  }
  function B(R) {
    return e.exit("tableBody"), A(R);
  }
  function z(R, H, N) {
    return I;
    function I(k) {
      return R.enter("lineEnding"), R.consume(k), R.exit("lineEnding"), ge(R, O, "linePrefix");
    }
    function O(k) {
      if (r.parser.lazy[r.now().line] || k === null || X(k))
        return N(k);
      const C = r.events[r.events.length - 1];
      return !r.parser.constructs.disable.null.includes("codeIndented") && C && C[1].type === "linePrefix" && C[2].sliceSerialize(C[1], !0).length >= 4 ? N(k) : (r._gfmTableDynamicInterruptHack = !0, R.check(
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
function M3(e, t, n) {
  let r = 0;
  return o;
  function o(l) {
    return e.enter("check"), e.consume(l), i;
  }
  function i(l) {
    return l === -1 || l === 32 ? (e.consume(l), r++, r === 4 ? t : i) : l === null || Le(l) ? t(l) : n(l);
  }
}
const N3 = {
  tokenize: L3
}, D3 = {
  text: {
    [91]: N3
  }
};
function L3(e, t, n) {
  const r = this;
  return o;
  function o(s) {
    return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(s) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), i);
  }
  function i(s) {
    return Le(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), l) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), l) : n(s);
  }
  function l(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : n(s);
  }
  function a(s) {
    return X(s) ? t(s) : ve(s) ? e.check(
      {
        tokenize: F3
      },
      t,
      n
    )(s) : n(s);
  }
}
function F3(e, t, n) {
  return ge(e, r, "whitespace");
  function r(o) {
    return o === null ? n(o) : t(o);
  }
}
function z3(e) {
  return gS([
    t_,
    S3(),
    R3(e),
    T3,
    D3
  ]);
}
function B3(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const Jm = function(e) {
  if (e == null)
    return U3;
  if (typeof e == "string")
    return V3(e);
  if (typeof e == "object")
    return Array.isArray(e) ? j3(e) : H3(e);
  if (typeof e == "function")
    return Mc(e);
  throw new Error("Expected function, string, or object as test");
};
function j3(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Jm(e[n]);
  return Mc(r);
  function r(...o) {
    let i = -1;
    for (; ++i < t.length; )
      if (t[i].call(this, ...o))
        return !0;
    return !1;
  }
}
function H3(e) {
  return Mc(t);
  function t(n) {
    let r;
    for (r in e)
      if (n[r] !== e[r])
        return !1;
    return !0;
  }
}
function V3(e) {
  return Mc(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Mc(e) {
  return t;
  function t(n, ...r) {
    return Boolean(
      n && typeof n == "object" && "type" in n && Boolean(e.call(this, n, ...r))
    );
  }
}
function U3() {
  return !0;
}
const W3 = !0, B1 = !1, q3 = "skip", IS = function(e, t, n, r) {
  typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
  const o = Jm(t), i = r ? -1 : 1;
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
      let d = [], g, m, v;
      if ((!t || o(a, s, u[u.length - 1] || null)) && (d = G3(n(a, u)), d[0] === B1))
        return d;
      if (a.children && d[0] !== q3)
        for (m = (r ? a.children.length : -1) + i, v = u.concat(a); m > -1 && m < a.children.length; ) {
          if (g = l(a.children[m], m, v)(), g[0] === B1)
            return g;
          m = typeof g[1] == "number" ? g[1] : m + i;
        }
      return d;
    }
  }
};
function G3(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [W3, e] : [e];
}
const Q3 = {}.hasOwnProperty, K3 = function(e, t, n, r) {
  let o, i;
  typeof t == "string" || t instanceof RegExp ? (i = [[t, n]], o = r) : (i = t, o = n), o || (o = {});
  const l = Jm(o.ignore || []), a = Y3(i);
  let s = -1;
  for (; ++s < a.length; )
    IS(e, "text", u);
  return e;
  function u(f, d) {
    let g = -1, m;
    for (; ++g < d.length; ) {
      const v = d[g];
      if (l(
        v,
        m ? m.children.indexOf(v) : void 0,
        m
      ))
        return;
      m = v;
    }
    if (m)
      return c(f, d);
  }
  function c(f, d) {
    const g = d[d.length - 1], m = a[s][0], v = a[s][1];
    let w = 0;
    const p = g.children.indexOf(f);
    let y = !1, x = [];
    m.lastIndex = 0;
    let b = m.exec(f.value);
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
      }), Array.isArray(E) ? x.push(...E) : E && x.push(E), w = A + b[0].length, y = !0), !m.global)
        break;
      b = m.exec(f.value);
    }
    return y ? (w < f.value.length && x.push({ type: "text", value: f.value.slice(w) }), g.children.splice(p, 1, ...x)) : x = [f], p + x.length;
  }
};
function Y3(e) {
  const t = [];
  if (typeof e != "object")
    throw new TypeError("Expected array or object as schema");
  if (Array.isArray(e)) {
    let n = -1;
    for (; ++n < e.length; )
      t.push([
        j1(e[n][0]),
        H1(e[n][1])
      ]);
  } else {
    let n;
    for (n in e)
      Q3.call(e, n) && t.push([j1(n), H1(e[n])]);
  }
  return t;
}
function j1(e) {
  return typeof e == "string" ? new RegExp(B3(e), "g") : e;
}
function H1(e) {
  return typeof e == "function" ? e : () => e;
}
const Qf = "phrasing", Kf = ["autolink", "link", "image", "label"], X3 = {
  transforms: [o4],
  enter: {
    literalAutolink: J3,
    literalAutolinkEmail: Yf,
    literalAutolinkHttp: Yf,
    literalAutolinkWww: Yf
  },
  exit: {
    literalAutolink: r4,
    literalAutolinkEmail: n4,
    literalAutolinkHttp: e4,
    literalAutolinkWww: t4
  }
}, Z3 = {
  unsafe: [
    {
      character: "@",
      before: "[+\\-.\\w]",
      after: "[\\-.\\w]",
      inConstruct: Qf,
      notInConstruct: Kf
    },
    {
      character: ".",
      before: "[Ww]",
      after: "[\\-.\\w]",
      inConstruct: Qf,
      notInConstruct: Kf
    },
    { character: ":", before: "[ps]", after: "\\/", inConstruct: Qf, notInConstruct: Kf }
  ]
};
function J3(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Yf(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function e4(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function t4(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.url = "http://" + this.sliceSerialize(e);
}
function n4(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function r4(e) {
  this.exit(e);
}
function o4(e) {
  K3(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, i4],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, l4]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function i4(e, t, n, r, o) {
  let i = "";
  if (!OS(o) || (/^w/i.test(t) && (n = t + n, t = "", i = "http://"), !a4(n)))
    return !1;
  const l = s4(n + r);
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
function l4(e, t, n, r) {
  return !OS(r, !0) || /[-\d_]$/.test(n) ? !1 : {
    type: "link",
    title: null,
    url: "mailto:" + t + "@" + n,
    children: [{ type: "text", value: t + "@" + n }]
  };
}
function a4(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function s4(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const o = Bu(e, "(");
  let i = Bu(e, ")");
  for (; r !== -1 && o > i; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), i++;
  return [e, n];
}
function OS(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Tc(n) || Ic(n)) && (!t || n !== 47);
}
function MS(e, t) {
  const n = Number.parseInt(e, t);
  return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "\uFFFD" : String.fromCharCode(n);
}
const u4 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function NS(e) {
  return e.replace(u4, c4);
}
function c4(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const o = n.charCodeAt(1), i = o === 120 || o === 88;
    return MS(n.slice(i ? 2 : 1), i ? 16 : 10);
  }
  return Xm(n) || e;
}
function DS(e) {
  return e.label || !e.identifier ? e.label || "" : NS(e.identifier);
}
function f4(e, t, n) {
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
      i.move(d4(s, o[a + 1], e, t))
    );
  }
  return r.pop(), l.join("");
}
function d4(e, t, n, r) {
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
const p4 = /\r?\n|\r/g;
function h4(e, t) {
  const n = [];
  let r = 0, o = 0, i;
  for (; i = p4.exec(e); )
    l(e.slice(r, i.index)), n.push(i[0]), r = i.index + i[0].length, o++;
  return l(e.slice(r)), n.join("");
  function l(a) {
    n.push(t(a, o, !a));
  }
}
function LS(e) {
  if (!e._compiled) {
    const t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
    e._compiled = new RegExp(
      (t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""),
      "g"
    );
  }
  return e._compiled;
}
function m4(e, t) {
  return V1(e, t.inConstruct, !0) && !V1(e, t.notInConstruct, !1);
}
function V1(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function FS(e, t, n) {
  const r = (n.before || "") + (t || "") + (n.after || ""), o = [], i = [], l = {};
  let a = -1;
  for (; ++a < e.unsafe.length; ) {
    const c = e.unsafe[a];
    if (!m4(e.stack, c))
      continue;
    const f = LS(c);
    let d;
    for (; d = f.exec(r); ) {
      const g = "before" in c || Boolean(c.atBreak), m = "after" in c, v = d.index + (g ? d[1].length : 0);
      o.includes(v) ? (l[v].before && !g && (l[v].before = !1), l[v].after && !m && (l[v].after = !1)) : (o.push(v), l[v] = { before: g, after: m });
    }
  }
  o.sort(g4);
  let s = n.before ? n.before.length : 0;
  const u = r.length - (n.after ? n.after.length : 0);
  for (a = -1; ++a < o.length; ) {
    const c = o[a];
    c < s || c >= u || c + 1 < u && o[a + 1] === c + 1 && l[c].after && !l[c + 1].before && !l[c + 1].after || o[a - 1] === c - 1 && l[c].before && !l[c - 1].before && !l[c - 1].after || (s !== c && i.push(U1(r.slice(s, c), "\\")), s = c, /[!-/:-@[-`{-~]/.test(r.charAt(c)) && (!n.encode || !n.encode.includes(r.charAt(c))) ? i.push("\\") : (i.push(
      "&#x" + r.charCodeAt(c).toString(16).toUpperCase() + ";"
    ), s++));
  }
  return i.push(U1(r.slice(s, u), n.after)), i.join("");
}
function g4(e, t) {
  return e - t;
}
function U1(e, t) {
  const n = /\\(?=[!-/:-@[-`{-~])/g, r = [], o = [], i = e + t;
  let l = -1, a = 0, s;
  for (; s = n.exec(i); )
    r.push(s.index);
  for (; ++l < r.length; )
    a !== r[l] && o.push(e.slice(a, r[l])), o.push("\\"), a = r[l];
  return o.push(e.slice(a)), o.join("");
}
function Nc(e) {
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
zS.peek = A4;
function v4() {
  return {
    enter: {
      gfmFootnoteDefinition: x4,
      gfmFootnoteDefinitionLabelString: w4,
      gfmFootnoteCall: k4,
      gfmFootnoteCallString: C4
    },
    exit: {
      gfmFootnoteDefinition: S4,
      gfmFootnoteDefinitionLabelString: b4,
      gfmFootnoteCall: E4,
      gfmFootnoteCallString: $4
    }
  };
}
function y4() {
  return {
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: P4, footnoteReference: zS }
  };
}
function x4(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function w4() {
  this.buffer();
}
function b4(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.label = t, n.identifier = pn(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function S4(e) {
  this.exit(e);
}
function k4(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function C4() {
  this.buffer();
}
function $4(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.label = t, n.identifier = pn(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function E4(e) {
  this.exit(e);
}
function zS(e, t, n, r) {
  const o = Nc(r);
  let i = o.move("[^");
  const l = n.enter("footnoteReference"), a = n.enter("reference");
  return i += o.move(
    FS(n, DS(e), {
      ...o.current(),
      before: i,
      after: "]"
    })
  ), a(), l(), i += o.move("]"), i;
}
function A4() {
  return "[";
}
function P4(e, t, n, r) {
  const o = Nc(r);
  let i = o.move("[^");
  const l = n.enter("footnoteDefinition"), a = n.enter("label");
  return i += o.move(
    FS(n, DS(e), {
      ...o.current(),
      before: i,
      after: "]"
    })
  ), a(), i += o.move(
    "]:" + (e.children && e.children.length > 0 ? " " : "")
  ), o.shift(4), i += o.move(
    h4(f4(e, n, o.current()), _4)
  ), l(), i;
}
function _4(e, t, n) {
  return t === 0 ? e : (n ? "" : "    ") + e;
}
function BS(e, t, n) {
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
const R4 = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
jS.peek = N4;
const T4 = {
  canContainEols: ["delete"],
  enter: { strikethrough: O4 },
  exit: { strikethrough: M4 }
}, I4 = {
  unsafe: [
    {
      character: "~",
      inConstruct: "phrasing",
      notInConstruct: R4
    }
  ],
  handlers: { delete: jS }
};
function O4(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function M4(e) {
  this.exit(e);
}
function jS(e, t, n, r) {
  const o = Nc(r), i = n.enter("strikethrough");
  let l = o.move("~~");
  return l += BS(e, n, {
    ...o.current(),
    before: l,
    after: "~"
  }), l += o.move("~~"), i(), l;
}
function N4() {
  return "~";
}
HS.peek = D4;
function HS(e, t, n) {
  let r = e.value || "", o = "`", i = -1;
  for (; new RegExp("(^|[^`])" + o + "([^`]|$)").test(r); )
    o += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++i < n.unsafe.length; ) {
    const l = n.unsafe[i], a = LS(l);
    let s;
    if (!!l.atBreak)
      for (; s = a.exec(r); ) {
        let u = s.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(s.index + 1);
      }
  }
  return o + r + o;
}
function D4() {
  return "`";
}
function L4(e, t = {}) {
  const n = (t.align || []).concat(), r = t.stringLength || z4, o = [], i = [], l = [], a = [];
  let s = 0, u = -1;
  for (; ++u < e.length; ) {
    const m = [], v = [];
    let w = -1;
    for (e[u].length > s && (s = e[u].length); ++w < e[u].length; ) {
      const p = F4(e[u][w]);
      if (t.alignDelimiters !== !1) {
        const y = r(p);
        v[w] = y, (a[w] === void 0 || y > a[w]) && (a[w] = y);
      }
      m.push(p);
    }
    i[u] = m, l[u] = v;
  }
  let c = -1;
  if (typeof n == "object" && "length" in n)
    for (; ++c < s; )
      o[c] = W1(n[c]);
  else {
    const m = W1(n);
    for (; ++c < s; )
      o[c] = m;
  }
  c = -1;
  const f = [], d = [];
  for (; ++c < s; ) {
    const m = o[c];
    let v = "", w = "";
    m === 99 ? (v = ":", w = ":") : m === 108 ? v = ":" : m === 114 && (w = ":");
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
    const m = i[u], v = l[u];
    c = -1;
    const w = [];
    for (; ++c < s; ) {
      const p = m[c] || "";
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
function F4(e) {
  return e == null ? "" : String(e);
}
function z4(e) {
  return e.length;
}
function W1(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
const B4 = {
  enter: {
    table: j4,
    tableData: q1,
    tableHeader: q1,
    tableRow: V4
  },
  exit: {
    codeText: U4,
    table: H4,
    tableData: Xf,
    tableHeader: Xf,
    tableRow: Xf
  }
};
function j4(e) {
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
function H4(e) {
  this.exit(e), this.setData("inTable");
}
function V4(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Xf(e) {
  this.exit(e);
}
function q1(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function U4(e) {
  let t = this.resume();
  this.getData("inTable") && (t = t.replace(/\\([\\|])/g, W4));
  const n = this.stack[this.stack.length - 1];
  n.value = t, this.exit(e);
}
function W4(e, t) {
  return t === "|" ? t : e;
}
function q4(e) {
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
  function l(g, m, v, w) {
    return u(
      c(g, v, w),
      g.align
    );
  }
  function a(g, m, v, w) {
    const p = f(g, v, w), y = u([p]);
    return y.slice(0, y.indexOf(`
`));
  }
  function s(g, m, v, w) {
    const p = v.enter("tableCell"), y = v.enter("phrasing"), x = BS(g, v, {
      ...w,
      before: i,
      after: i
    });
    return y(), p(), x;
  }
  function u(g, m) {
    return L4(g, {
      align: m,
      alignDelimiters: r,
      padding: n,
      stringLength: o
    });
  }
  function c(g, m, v) {
    const w = g.children;
    let p = -1;
    const y = [], x = m.enter("table");
    for (; ++p < w.length; )
      y[p] = f(
        w[p],
        m,
        v
      );
    return x(), y;
  }
  function f(g, m, v) {
    const w = g.children;
    let p = -1;
    const y = [], x = m.enter("tableRow");
    for (; ++p < w.length; )
      y[p] = s(
        w[p],
        g,
        m,
        v
      );
    return x(), y;
  }
  function d(g, m, v) {
    let w = HS(g, m, v);
    return v.stack.includes("tableCell") && (w = w.replace(/\|/g, "\\$&")), w;
  }
}
function G4(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function Q4(e) {
  const t = e.options.listItemIndent || "tab";
  if (t === 1 || t === "1")
    return "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function K4(e, t, n, r) {
  const o = Q4(n);
  let i = n.bulletCurrent || G4(n);
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
const Y4 = {
  exit: {
    taskListCheckValueChecked: G1,
    taskListCheckValueUnchecked: G1,
    paragraph: Z4
  }
}, X4 = {
  unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
  handlers: { listItem: J4 }
};
function G1(e) {
  const t = this.stack[this.stack.length - 2];
  t.checked = e.type === "taskListCheckValueChecked";
}
function Z4(e) {
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
function J4(e, t, n, r) {
  const o = e.children[0], i = typeof e.checked == "boolean" && o && o.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", a = Nc(r);
  i && a.move(l);
  let s = K4(e, t, n, {
    ...r,
    ...a.current()
  });
  return i && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(c) {
    return c + l;
  }
}
function eR() {
  return [
    X3,
    v4(),
    T4,
    B4,
    Y4
  ];
}
function tR(e) {
  return {
    extensions: [
      Z3,
      y4(),
      I4,
      q4(e),
      X4
    ]
  };
}
function nR(e = {}) {
  const t = this.data();
  n("micromarkExtensions", z3(e)), n("fromMarkdownExtensions", eR()), n("toMarkdownExtensions", tR(e));
  function n(r, o) {
    (t[r] ? t[r] : t[r] = []).push(o);
  }
}
const rR = {};
function oR(e, t) {
  const n = t || rR, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, o = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return VS(e, r, o);
}
function VS(e, t, n) {
  if (iR(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Q1(e.children, t, n);
  }
  return Array.isArray(e) ? Q1(e, t, n) : "";
}
function Q1(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; )
    r[o] = VS(e[o], t, n);
  return r.join("");
}
function iR(e) {
  return Boolean(e && typeof e == "object");
}
const lR = {
  tokenize: aR
};
function aR(e) {
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
const sR = {
  tokenize: uR
}, K1 = {
  tokenize: cR
};
function uR(e) {
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
      return It(
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
        return m(x);
      t.interrupt = Boolean(
        o.currentConstruct && !o._gfmTableDynamicInterruptHack
      );
    }
    return t.containerState = {}, e.check(
      K1,
      c,
      f
    )(x);
  }
  function c(x) {
    return o && y(), p(r), d(x);
  }
  function f(x) {
    return t.parser.lazy[t.now().line] = r !== n.length, l = t.now().offset, m(x);
  }
  function d(x) {
    return t.containerState = {}, e.attempt(
      K1,
      g,
      m
    )(x);
  }
  function g(x) {
    return r++, n.push([t.currentConstruct, t.containerState]), d(x);
  }
  function m(x) {
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
      let $ = E, P, _;
      for (; $--; )
        if (t.events[$][0] === "exit" && t.events[$][1].type === "chunkFlow") {
          if (P) {
            _ = t.events[$][1].end;
            break;
          }
          P = !0;
        }
      for (p(r), S = E; S < t.events.length; )
        t.events[S][1].end = Object.assign({}, _), S++;
      It(
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
function cR(e, t, n) {
  return ge(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
const fR = {
  tokenize: dR
};
function dR(e) {
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
          e.attempt(__, o)
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
const pR = {
  resolveAll: WS()
}, hR = US("string"), mR = US("text");
function US(e) {
  return {
    tokenize: t,
    resolveAll: WS(
      e === "text" ? gR : void 0
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
function WS(e) {
  return t;
  function t(n, r) {
    let o = -1, i;
    for (; ++o <= n.length; )
      i === void 0 ? n[o] && n[o][1].type === "data" && (i = o, o++) : (!n[o] || n[o][1].type !== "data") && (o !== i + 2 && (n[i][1].end = n[o - 1][1].end, n.splice(i + 2, o - i - 2), o = i + 2), i = void 0);
    return e ? e(n, r) : n;
  }
}
function gR(e, t) {
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
function vR(e, t, n) {
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
    now: m,
    defineSkip: v,
    write: f
  };
  let c = t.tokenize.call(u, s);
  return t.resolveAll && i.push(t), u;
  function f(T) {
    return l = jt(l, T), w(), l[l.length - 1] !== null ? [] : ($(t, 0), u.events = Oc(i, u.events, u), u.events);
  }
  function d(T, M) {
    return xR(g(T), M);
  }
  function g(T) {
    return yR(l, T);
  }
  function m() {
    return Object.assign({}, r);
  }
  function v(T) {
    o[T.line] = T.column, _();
  }
  function w() {
    let T;
    for (; r._index < l.length; ) {
      const M = l[r._index];
      if (typeof M == "string")
        for (T = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === T && r._bufferIndex < M.length; )
          p(M.charCodeAt(r._bufferIndex));
      else
        p(M);
    }
  }
  function p(T) {
    c = c(T);
  }
  function y(T) {
    X(T) ? (r.line++, r.column = 1, r.offset += T === -3 ? 2 : 1, _()) : T !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = T;
  }
  function x(T, M) {
    const L = M || {};
    return L.type = T, L.start = m(), u.events.push(["enter", L, u]), a.push(L), L;
  }
  function b(T) {
    const M = a.pop();
    return M.end = m(), u.events.push(["exit", M, u]), M;
  }
  function A(T, M) {
    $(T, M.from);
  }
  function S(T, M) {
    M.restore();
  }
  function E(T, M) {
    return L;
    function L(B, z, R) {
      let H, N, I, O;
      return Array.isArray(B) ? C(B) : "tokenize" in B ? C([B]) : k(B);
      function k(ee) {
        return G;
        function G(ie) {
          const xe = ie !== null && ee[ie], ce = ie !== null && ee.null, de = [
            ...Array.isArray(xe) ? xe : xe ? [xe] : [],
            ...Array.isArray(ce) ? ce : ce ? [ce] : []
          ];
          return C(de)(ie);
        }
      }
      function C(ee) {
        return H = ee, N = 0, ee.length === 0 ? R : J(ee[N]);
      }
      function J(ee) {
        return G;
        function G(ie) {
          return O = P(), I = ee, ee.partial || (u.currentConstruct = ee), ee.name && u.parser.constructs.disable.null.includes(ee.name) ? ae() : ee.tokenize.call(
            M ? Object.assign(Object.create(u), M) : u,
            s,
            ne,
            ae
          )(ie);
        }
      }
      function ne(ee) {
        return T(I, O), z;
      }
      function ae(ee) {
        return O.restore(), ++N < H.length ? J(H[N]) : R;
      }
    }
  }
  function $(T, M) {
    T.resolveAll && !i.includes(T) && i.push(T), T.resolve && It(
      u.events,
      M,
      u.events.length - M,
      T.resolve(u.events.slice(M), u)
    ), T.resolveTo && (u.events = T.resolveTo(u.events, u));
  }
  function P() {
    const T = m(), M = u.previous, L = u.currentConstruct, B = u.events.length, z = Array.from(a);
    return {
      restore: R,
      from: B
    };
    function R() {
      r = T, u.previous = M, u.currentConstruct = L, u.events.length = B, a = z, _();
    }
  }
  function _() {
    r.line in o && r.column < 2 && (r.column = o[r.line], r.offset += o[r.line] - 1);
  }
}
function yR(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, o = t.end._index, i = t.end._bufferIndex;
  let l;
  return n === o ? l = [e[n].slice(r, i)] : (l = e.slice(n, o), r > -1 && (l[0] = l[0].slice(r)), i > 0 && l.push(e[o].slice(0, i))), l;
}
function xR(e, t) {
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
const wR = {
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
  [62]: $S
}, bR = {
  [91]: M_
}, SR = {
  [-2]: qf,
  [-1]: qf,
  [32]: qf
}, kR = {
  [35]: B_,
  [42]: eu,
  [45]: [F1, eu],
  [60]: U_,
  [61]: F1,
  [95]: eu,
  [96]: D1,
  [126]: D1
}, CR = {
  [38]: AS,
  [92]: ES
}, $R = {
  [-5]: Gf,
  [-4]: Gf,
  [-3]: Gf,
  [33]: l3,
  [38]: AS,
  [42]: Wp,
  [60]: [d_, K_],
  [91]: s3,
  [92]: [F_, ES],
  [93]: Zm,
  [95]: Wp,
  [96]: C_
}, ER = {
  null: [Wp, pR]
}, AR = {
  null: [42, 95]
}, PR = {
  null: []
}, _R = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  document: wR,
  contentInitial: bR,
  flowInitial: SR,
  flow: kR,
  string: CR,
  text: $R,
  insideSpan: ER,
  attentionMarkers: AR,
  disable: PR
}, Symbol.toStringTag, { value: "Module" }));
function RR(e = {}) {
  const t = gS(
    [_R].concat(e.extensions || [])
  ), n = {
    defined: [],
    lazy: {},
    constructs: t,
    content: r(lR),
    document: r(sR),
    flow: r(fR),
    string: r(hR),
    text: r(mR)
  };
  return n;
  function r(o) {
    return i;
    function i(l) {
      return vR(n, o, l);
    }
  }
}
const Y1 = /[\0\t\n\r]/g;
function TR() {
  let e = 1, t = "", n = !0, r;
  return o;
  function o(i, l, a) {
    const s = [];
    let u, c, f, d, g;
    for (i = t + i.toString(l), f = 0, t = "", n && (i.charCodeAt(0) === 65279 && f++, n = void 0); f < i.length; ) {
      if (Y1.lastIndex = f, u = Y1.exec(i), d = u && u.index !== void 0 ? u.index : i.length, g = i.charCodeAt(d), !u) {
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
function IR(e) {
  for (; !PS(e); )
    ;
  return e;
}
function zl(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? X1(e.position) : "start" in e || "end" in e ? X1(e) : "line" in e || "column" in e ? qp(e) : "";
}
function qp(e) {
  return Z1(e && e.line) + ":" + Z1(e && e.column);
}
function X1(e) {
  return qp(e && e.start) + "-" + qp(e && e.end);
}
function Z1(e) {
  return e && typeof e == "number" ? e : 1;
}
const qS = {}.hasOwnProperty, OR = function(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), MR(n)(
    IR(
      RR(n).document().write(TR()(e, t, !0))
    )
  );
};
function MR(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(ir),
      autolinkProtocol: T,
      autolinkEmail: T,
      atxHeading: a(nr),
      blockQuote: a(de),
      characterEscape: T,
      characterReference: T,
      codeFenced: a(ue),
      codeFencedFenceInfo: s,
      codeFencedFenceMeta: s,
      codeIndented: a(ue, s),
      codeText: a(at, s),
      codeTextData: T,
      data: T,
      codeFlowValue: T,
      definition: a(st),
      definitionDestinationString: s,
      definitionLabelString: s,
      definitionTitleString: s,
      emphasis: a(Wr),
      hardBreakEscape: a(rr),
      hardBreakTrailing: a(rr),
      htmlFlow: a(Ja, s),
      htmlFlowData: T,
      htmlText: a(Ja, s),
      htmlTextData: T,
      image: a(or),
      label: s,
      link: a(ir),
      listItem: a(lr),
      listItemValue: m,
      listOrdered: a(Qi, g),
      listUnordered: a(Qi),
      paragraph: a(af),
      reference: ae,
      referenceString: s,
      resourceDestinationString: s,
      resourceTitleString: s,
      setextHeading: a(nr),
      strong: a(sf),
      thematicBreak: a(P2)
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: E,
      autolink: c(),
      autolinkEmail: ce,
      autolinkProtocol: xe,
      blockQuote: c(),
      characterEscapeValue: M,
      characterReferenceMarkerHexadecimal: G,
      characterReferenceMarkerNumeric: G,
      characterReferenceValue: ie,
      codeFenced: c(y),
      codeFencedFence: p,
      codeFencedFenceInfo: v,
      codeFencedFenceMeta: w,
      codeFlowValue: M,
      codeIndented: c(x),
      codeText: c(H),
      codeTextData: M,
      data: M,
      definition: c(),
      definitionDestinationString: S,
      definitionLabelString: b,
      definitionTitleString: A,
      emphasis: c(),
      hardBreakEscape: c(B),
      hardBreakTrailing: c(B),
      htmlFlow: c(z),
      htmlFlowData: M,
      htmlText: c(R),
      htmlTextData: M,
      image: c(I),
      label: k,
      labelText: O,
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
      setextHeading: c(_),
      setextHeadingLineSequence: P,
      setextHeadingText: $,
      strong: c(),
      thematicBreak: c()
    }
  };
  GS(t, (e || {}).mdastExtensions || []);
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
      buffer: s,
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
          const Jt = be.pop();
          ke = o(F, Jt, ke);
        }
    for (ke = -1; ++ke < F.length; ) {
      const Jt = t[F[ke][0]];
      qS.call(Jt, F[ke][1].type) && Jt[F[ke][1].type].call(
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
      const Jt = te.tokenStack[te.tokenStack.length - 1];
      (Jt[1] || J1).call(te, void 0, Jt[0]);
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
    let be = q - 1, ke = -1, Jt = !1, ar, Mn, Ki, Yi;
    for (; ++be <= te; ) {
      const Fe = F[be];
      if (Fe[1].type === "listUnordered" || Fe[1].type === "listOrdered" || Fe[1].type === "blockQuote" ? (Fe[0] === "enter" ? ke++ : ke--, Yi = void 0) : Fe[1].type === "lineEndingBlank" ? Fe[0] === "enter" && (ar && !Yi && !ke && !Ki && (Ki = be), Yi = void 0) : Fe[1].type === "linePrefix" || Fe[1].type === "listItemValue" || Fe[1].type === "listItemMarker" || Fe[1].type === "listItemPrefix" || Fe[1].type === "listItemPrefixWhitespace" || (Yi = void 0), !ke && Fe[0] === "enter" && Fe[1].type === "listItemPrefix" || ke === -1 && Fe[0] === "exit" && (Fe[1].type === "listUnordered" || Fe[1].type === "listOrdered")) {
        if (ar) {
          let uf = be;
          for (Mn = void 0; uf--; ) {
            const Nn = F[uf];
            if (Nn[1].type === "lineEnding" || Nn[1].type === "lineEndingBlank") {
              if (Nn[0] === "exit")
                continue;
              Mn && (F[Mn][1].type = "lineEndingBlank", Jt = !0), Nn[1].type = "lineEnding", Mn = uf;
            } else if (!(Nn[1].type === "linePrefix" || Nn[1].type === "blockQuotePrefix" || Nn[1].type === "blockQuotePrefixWhitespace" || Nn[1].type === "blockQuoteMarker" || Nn[1].type === "listItemIndent"))
              break;
          }
          Ki && (!Mn || Ki < Mn) && (ar._spread = !0), ar.end = Object.assign(
            {},
            Mn ? F[Mn][1].start : Fe[1].end
          ), F.splice(Mn || be, 0, ["exit", ar, Fe[2]]), be++, te++;
        }
        Fe[1].type === "listItemPrefix" && (ar = {
          type: "listItem",
          _spread: !1,
          start: Object.assign({}, Fe[1].start)
        }, F.splice(be, 0, ["enter", ar, Fe[2]]), be++, te++, Ki = void 0, Yi = !0);
      }
    }
    return F[q][1]._spread = Jt, te;
  }
  function i(F, q) {
    n[F] = q;
  }
  function l(F) {
    return n[F];
  }
  function a(F, q) {
    return te;
    function te(be) {
      u.call(this, F(be), be), q && q.call(this, be);
    }
  }
  function s() {
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
      be[0].type !== F.type && (q ? q.call(this, F, be[0]) : (be[1] || J1).call(this, F, be[0]));
    else
      throw new Error(
        "Cannot close `" + F.type + "` (" + zl({
          start: F.start,
          end: F.end
        }) + "): it\u2019s not open"
      );
    return te.position.end = cr(F.end), te;
  }
  function d() {
    return oR(this.stack.pop());
  }
  function g() {
    i("expectingFirstListItemValue", !0);
  }
  function m(F) {
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
  function _() {
    i("setextHeadingSlurpLineEnding");
  }
  function T(F) {
    const q = this.stack[this.stack.length - 1];
    let te = q.children[q.children.length - 1];
    (!te || te.type !== "text") && (te = A2(), te.position = {
      start: cr(F.start)
    }, q.children.push(te)), this.stack.push(te);
  }
  function M(F) {
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
    !l("setextHeadingSlurpLineEnding") && t.canContainEols.includes(q.type) && (T.call(this, F), M.call(this, F));
  }
  function B() {
    i("atHardBreak", !0);
  }
  function z() {
    const F = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = F;
  }
  function R() {
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
  function I() {
    const F = this.stack[this.stack.length - 1];
    if (l("inReference")) {
      const q = l("referenceType") || "shortcut";
      F.type += "Reference", F.referenceType = q, delete F.url, delete F.title;
    } else
      delete F.identifier, delete F.label;
    i("referenceType");
  }
  function O(F) {
    const q = this.sliceSerialize(F), te = this.stack[this.stack.length - 2];
    te.label = NS(q), te.identifier = pn(q).toLowerCase();
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
  function ae() {
    i("referenceType", "collapsed");
  }
  function ee(F) {
    const q = this.resume(), te = this.stack[this.stack.length - 1];
    te.label = q, te.identifier = pn(
      this.sliceSerialize(F)
    ).toLowerCase(), i("referenceType", "full");
  }
  function G(F) {
    i("characterReferenceType", F.type);
  }
  function ie(F) {
    const q = this.sliceSerialize(F), te = l("characterReferenceType");
    let be;
    te ? (be = MS(
      q,
      te === "characterReferenceMarkerNumeric" ? 10 : 16
    ), i("characterReferenceType")) : be = Xm(q);
    const ke = this.stack.pop();
    ke.value += be, ke.position.end = cr(F.end);
  }
  function xe(F) {
    M.call(this, F);
    const q = this.stack[this.stack.length - 1];
    q.url = this.sliceSerialize(F);
  }
  function ce(F) {
    M.call(this, F);
    const q = this.stack[this.stack.length - 1];
    q.url = "mailto:" + this.sliceSerialize(F);
  }
  function de() {
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
  function Wr() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function nr() {
    return {
      type: "heading",
      depth: void 0,
      children: []
    };
  }
  function rr() {
    return {
      type: "break"
    };
  }
  function Ja() {
    return {
      type: "html",
      value: ""
    };
  }
  function or() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function ir() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Qi(F) {
    return {
      type: "list",
      ordered: F.type === "listOrdered",
      start: null,
      spread: F._spread,
      children: []
    };
  }
  function lr(F) {
    return {
      type: "listItem",
      spread: F._spread,
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
  function A2() {
    return {
      type: "text",
      value: ""
    };
  }
  function P2() {
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
function GS(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? GS(e, r) : NR(e, r);
  }
}
function NR(e, t) {
  let n;
  for (n in t)
    if (qS.call(t, n)) {
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
function J1(e, t) {
  throw e ? new Error(
    "Cannot close `" + e.type + "` (" + zl({
      start: e.start,
      end: e.end
    }) + "): a different token (`" + t.type + "`, " + zl({
      start: t.start,
      end: t.end
    }) + ") is open"
  ) : new Error(
    "Cannot close document, a token (`" + t.type + "`, " + zl({
      start: t.start,
      end: t.end
    }) + ") is still open"
  );
}
function DR(e) {
  Object.assign(this, { Parser: (n) => {
    const r = this.data("settings");
    return OR(
      n,
      Object.assign({}, r, e, {
        extensions: this.data("micromarkExtensions") || [],
        mdastExtensions: this.data("fromMarkdownExtensions") || []
      })
    );
  } });
}
function LR(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function FR(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function zR(e, t) {
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
function BR(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function jR(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function QS(e, t) {
  const n = String(t.identifier).toUpperCase(), r = Bi(n.toLowerCase()), o = e.footnoteOrder.indexOf(n);
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
function HR(e, t) {
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
  }, QS(e, {
    type: "footnoteReference",
    identifier: o,
    position: t.position
  });
}
function VR(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function UR(e, t) {
  if (e.dangerous) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
  return null;
}
function KS(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return { type: "text", value: "![" + t.alt + r };
  const o = e.all(t), i = o[0];
  i && i.type === "text" ? i.value = "[" + i.value : o.unshift({ type: "text", value: "[" });
  const l = o[o.length - 1];
  return l && l.type === "text" ? l.value += r : o.push({ type: "text", value: r }), o;
}
function WR(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return KS(e, t);
  const r = { src: Bi(n.url || ""), alt: t.alt };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const o = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function qR(e, t) {
  const n = { src: Bi(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function GR(e, t) {
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
function QR(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return KS(e, t);
  const r = { href: Bi(n.url || "") };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: r,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function KR(e, t) {
  const n = { href: Bi(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function YR(e, t, n) {
  const r = e.all(t), o = n ? XR(n) : YS(t), i = {}, l = [];
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
function XR(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = YS(n[r]);
  }
  return t;
}
function YS(e) {
  const t = e.spread;
  return t == null ? e.children.length > 1 : t;
}
function ZR(e, t) {
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
function JR(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function eT(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function tT(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const eg = XS("start"), tg = XS("end");
function nT(e) {
  return { start: eg(e), end: tg(e) };
}
function XS(e) {
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
function rT(e, t) {
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
    }, a = eg(t.children[1]), s = tg(t.children[t.children.length - 1]);
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
function oT(e, t, n) {
  const r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", l = n && n.type === "table" ? n.align : void 0, a = l ? l.length : t.children.length;
  let s = -1;
  const u = [];
  for (; ++s < a; ) {
    const f = t.children[s], d = {}, g = l ? l[s] : void 0;
    g && (d.align = g);
    let m = { type: "element", tagName: i, properties: d, children: [] };
    f && (m.children = e.all(f), e.patch(f, m), m = e.applyData(t, m)), u.push(m);
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(t, c), e.applyData(t, c);
}
function iT(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const ev = 9, tv = 32;
function lT(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), o = 0;
  const i = [];
  for (; r; )
    i.push(
      nv(t.slice(o, r.index), o > 0, !0),
      r[0]
    ), o = r.index + r[0].length, r = n.exec(t);
  return i.push(nv(t.slice(o), o > 0, !1)), i.join("");
}
function nv(e, t, n) {
  let r = 0, o = e.length;
  if (t) {
    let i = e.codePointAt(r);
    for (; i === ev || i === tv; )
      r++, i = e.codePointAt(r);
  }
  if (n) {
    let i = e.codePointAt(o - 1);
    for (; i === ev || i === tv; )
      o--, i = e.codePointAt(o - 1);
  }
  return o > r ? e.slice(r, o) : "";
}
function aT(e, t) {
  const n = { type: "text", value: lT(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function sT(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const uT = {
  blockquote: LR,
  break: FR,
  code: zR,
  delete: BR,
  emphasis: jR,
  footnoteReference: QS,
  footnote: HR,
  heading: VR,
  html: UR,
  imageReference: WR,
  image: qR,
  inlineCode: GR,
  linkReference: QR,
  link: KR,
  listItem: YR,
  list: ZR,
  paragraph: JR,
  root: eT,
  strong: tT,
  table: rT,
  tableCell: iT,
  tableRow: oT,
  text: aT,
  thematicBreak: sT,
  toml: Cs,
  yaml: Cs,
  definition: Cs,
  footnoteDefinition: Cs
};
function Cs() {
  return null;
}
const ZS = function(e, t, n, r) {
  typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), IS(e, t, o, r);
  function o(i, l) {
    const a = l[l.length - 1];
    return n(
      i,
      a ? a.children.indexOf(i) : null,
      a
    );
  }
};
function cT(e) {
  return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column;
}
const rv = {}.hasOwnProperty;
function fT(e) {
  const t = /* @__PURE__ */ Object.create(null);
  if (!e || !e.type)
    throw new Error("mdast-util-definitions expected node");
  return ZS(e, "definition", (r) => {
    const o = ov(r.identifier);
    o && !rv.call(t, o) && (t[o] = r);
  }), n;
  function n(r) {
    const o = ov(r);
    return o && rv.call(t, o) ? t[o] : null;
  }
}
function ov(e) {
  return String(e || "").toUpperCase();
}
const Vu = {}.hasOwnProperty;
function dT(e, t) {
  const n = t || {}, r = n.allowDangerousHtml || !1, o = {};
  return l.dangerous = r, l.clobberPrefix = n.clobberPrefix === void 0 || n.clobberPrefix === null ? "user-content-" : n.clobberPrefix, l.footnoteLabel = n.footnoteLabel || "Footnotes", l.footnoteLabelTagName = n.footnoteLabelTagName || "h2", l.footnoteLabelProperties = n.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l.footnoteBackLabel = n.footnoteBackLabel || "Back to content", l.unknownHandler = n.unknownHandler, l.passThrough = n.passThrough, l.handlers = { ...uT, ...n.handlers }, l.definition = fT(e), l.footnoteById = o, l.footnoteOrder = [], l.footnoteCounts = {}, l.patch = pT, l.applyData = hT, l.one = a, l.all = s, l.wrap = gT, l.augment = i, ZS(e, "footnoteDefinition", (u) => {
    const c = String(u.identifier).toUpperCase();
    Vu.call(o, c) || (o[c] = u);
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
      cT(f) || (c.position = { start: eg(f), end: tg(f) });
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
    return JS(l, u, c);
  }
  function s(u) {
    return ng(l, u);
  }
}
function pT(e, t) {
  e.position && (t.position = nT(e));
}
function hT(e, t) {
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
function JS(e, t, n) {
  const r = t && t.type;
  if (!r)
    throw new Error("Expected node, got `" + t + "`");
  return Vu.call(e.handlers, r) ? e.handlers[r](e, t, n) : e.passThrough && e.passThrough.includes(r) ? "children" in t ? { ...t, children: ng(e, t) } : t : e.unknownHandler ? e.unknownHandler(e, t, n) : mT(e, t);
}
function ng(e, t) {
  const n = [];
  if ("children" in t) {
    const r = t.children;
    let o = -1;
    for (; ++o < r.length; ) {
      const i = JS(e, r[o], t);
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
function mT(e, t) {
  const n = t.data || {}, r = "value" in t && !(Vu.call(n, "hProperties") || Vu.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: ng(e, t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function gT(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function vT(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.footnoteOrder.length; ) {
    const r = e.footnoteById[e.footnoteOrder[n]];
    if (!r)
      continue;
    const o = e.all(r), i = String(r.identifier).toUpperCase(), l = Bi(i.toLowerCase());
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
function ek(e, t) {
  const n = dT(e, t), r = n.one(e, null), o = vT(n);
  return o && r.children.push({ type: "text", value: `
` }, o), Array.isArray(r) ? { type: "root", children: r } : r;
}
const yT = function(e, t) {
  return e && "run" in e ? wT(e, t) : bT(e || t);
}, xT = yT;
function wT(e, t) {
  return (n, r, o) => {
    e.run(ek(n, t), r, (i) => {
      o(i);
    });
  };
}
function bT(e) {
  return (t) => ek(t, e);
}
var tk = typeof window < "u" ? window : {};
function ST() {
  var e = tk.DOMParser, t = !1;
  try {
    new e().parseFromString("", "text/html") && (t = !0);
  } catch {
  }
  return t;
}
function kT() {
  var e = function() {
  };
  return CT() ? e.prototype.parseFromString = function(t) {
    var n = new window.ActiveXObject("htmlfile");
    return n.designMode = "on", n.open(), n.write(t), n.close(), n;
  } : e.prototype.parseFromString = function(t) {
    var n = document.implementation.createHTMLDocument("");
    return n.open(), n.write(t), n.close(), n;
  }, e;
}
function CT() {
  var e = !1;
  try {
    document.implementation.createHTMLDocument("").open();
  } catch {
    window.ActiveXObject && (e = !0);
  }
  return e;
}
ST() ? tk.DOMParser : kT();
function iv(e) {
  if (e)
    throw e;
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var nk = function(t) {
  return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}, tu = Object.prototype.hasOwnProperty, rk = Object.prototype.toString, lv = Object.defineProperty, av = Object.getOwnPropertyDescriptor, sv = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : rk.call(t) === "[object Array]";
}, uv = function(t) {
  if (!t || rk.call(t) !== "[object Object]")
    return !1;
  var n = tu.call(t, "constructor"), r = t.constructor && t.constructor.prototype && tu.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var o;
  for (o in t)
    ;
  return typeof o > "u" || tu.call(t, o);
}, cv = function(t, n) {
  lv && n.name === "__proto__" ? lv(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, fv = function(t, n) {
  if (n === "__proto__")
    if (tu.call(t, n)) {
      if (av)
        return av(t, n).value;
    } else
      return;
  return t[n];
}, dv = function e() {
  var t, n, r, o, i, l, a = arguments[0], s = 1, u = arguments.length, c = !1;
  for (typeof a == "boolean" && (c = a, a = arguments[1] || {}, s = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); s < u; ++s)
    if (t = arguments[s], t != null)
      for (n in t)
        r = fv(a, n), o = fv(t, n), a !== o && (c && o && (uv(o) || (i = sv(o))) ? (i ? (i = !1, l = r && sv(r) ? r : []) : l = r && uv(r) ? r : {}, cv(a, { name: n, newValue: e(c, l, o) })) : typeof o < "u" && cv(a, { name: n, newValue: o }));
  return a;
};
function Gp(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function $T() {
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
      o = u, c ? ET(c, a)(...u) : l(null, ...u);
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
function ET(e, t) {
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
class Zt extends Error {
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
    n && ("type" in n || "position" in n ? n.position && (i = n.position) : "start" in n || "end" in n ? i = n : ("line" in n || "column" in n) && (i.start = n)), this.name = zl(n) || "1:1", this.message = typeof t == "object" ? t.message : t, this.stack = "", typeof t == "object" && t.stack && (this.stack = t.stack), this.reason = this.message, this.fatal, this.line = i.start.line, this.column = i.start.column, this.position = i, this.source = o[0], this.ruleId = o[1], this.file, this.actual, this.expected, this.url, this.note;
  }
}
Zt.prototype.file = "";
Zt.prototype.name = "";
Zt.prototype.reason = "";
Zt.prototype.message = "";
Zt.prototype.stack = "";
Zt.prototype.fatal = null;
Zt.prototype.column = null;
Zt.prototype.line = null;
Zt.prototype.source = null;
Zt.prototype.ruleId = null;
Zt.prototype.position = null;
const yn = { basename: AT, dirname: PT, extname: _T, join: RT, sep: "/" };
function AT(e, t) {
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
function PT(e) {
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
function _T(e) {
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
function RT(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Va(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : TT(n);
}
function TT(e) {
  Va(e);
  const t = e.charCodeAt(0) === 47;
  let n = IT(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function IT(e, t) {
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
const OT = { cwd: MT };
function MT() {
  return "/";
}
function Qp(e) {
  return e !== null && typeof e == "object" && e.href && e.origin;
}
function NT(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Qp(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return DT(e);
}
function DT(e) {
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
class LT {
  constructor(t) {
    let n;
    t ? typeof t == "string" || FT(t) ? n = { value: t } : Qp(t) ? n = { path: t } : n = t : n = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = OT.cwd(), this.value, this.stored, this.result, this.map;
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
    Qp(t) && (t = NT(t)), ed(t, "path"), this.path !== t && this.history.push(t);
  }
  get dirname() {
    return typeof this.path == "string" ? yn.dirname(this.path) : void 0;
  }
  set dirname(t) {
    pv(this.basename, "dirname"), this.path = yn.join(t || "", this.basename);
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
    if (Jf(t, "extname"), pv(this.dirname, "extname"), t) {
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
    const o = new Zt(t, n, r);
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
function pv(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function FT(e) {
  return nk(e);
}
const zT = ik().freeze(), ok = {}.hasOwnProperty;
function ik() {
  const e = $T(), t = [];
  let n = {}, r, o = -1;
  return i.data = l, i.Parser = void 0, i.Compiler = void 0, i.freeze = a, i.attachers = t, i.use = s, i.parse = u, i.stringify = c, i.run = f, i.runSync = d, i.process = g, i.processSync = m, i;
  function i() {
    const v = ik();
    let w = -1;
    for (; ++w < t.length; )
      v.use(...t[w]);
    return v.data(dv(!0, {}, n)), v;
  }
  function l(v, w) {
    return typeof v == "string" ? arguments.length === 2 ? (rd("data", r), n[v] = w, i) : ok.call(n, v) && n[v] || null : v ? (rd("data", r), n = v, i) : n;
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
      P ? (Gp(P[1]) && Gp(E) && (E = dv(!0, P[1], E)), P[1] = E) : t.push([...arguments]);
    }
  }
  function u(v) {
    i.freeze();
    const w = sl(v), p = i.Parser;
    return td("parse", p), hv(p, "parse") ? new p(String(w), w).parse() : p(String(w), w);
  }
  function c(v, w) {
    i.freeze();
    const p = sl(w), y = i.Compiler;
    return nd("stringify", y), mv(v), hv(y, "compile") ? new y(v, p).compile() : y(v, p);
  }
  function f(v, w, p) {
    if (mv(v), i.freeze(), !p && typeof w == "function" && (p = w, w = void 0), !p)
      return new Promise(y);
    y(null, p);
    function y(x, b) {
      e.run(v, sl(w), A);
      function A(S, E, $) {
        E = E || v, S ? b(S) : x ? x(E) : p(null, E, $);
      }
    }
  }
  function d(v, w) {
    let p, y;
    return i.run(v, w, x), gv("runSync", "run", y), p;
    function x(b, A) {
      iv(b), p = A, y = !0;
    }
  }
  function g(v, w) {
    if (i.freeze(), td("process", i.Parser), nd("process", i.Compiler), !w)
      return new Promise(p);
    p(null, w);
    function p(y, x) {
      const b = sl(v);
      i.run(i.parse(b), b, (S, E, $) => {
        if (S || !E || !$)
          A(S);
        else {
          const P = i.stringify(E, $);
          P == null || (HT(P) ? $.value = P : $.result = P), A(S, $);
        }
      });
      function A(S, E) {
        S || !E ? x(S) : y ? y(E) : w(null, E);
      }
    }
  }
  function m(v) {
    let w;
    i.freeze(), td("processSync", i.Parser), nd("processSync", i.Compiler);
    const p = sl(v);
    return i.process(p, y), gv("processSync", "process", w), p;
    function y(x) {
      w = !0, iv(x);
    }
  }
}
function hv(e, t) {
  return typeof e == "function" && e.prototype && (BT(e.prototype) || t in e.prototype);
}
function BT(e) {
  let t;
  for (t in e)
    if (ok.call(e, t))
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
function mv(e) {
  if (!Gp(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function gv(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function sl(e) {
  return jT(e) ? e : new LT(e);
}
function jT(e) {
  return Boolean(
    e && typeof e == "object" && "message" in e && "messages" in e
  );
}
function HT(e) {
  return typeof e == "string" || nk(e);
}
async function VT(e) {
  if (!e)
    return "";
  const t = await zT().use(DR).use(XP).use(nR).use(xT).use(LP).process(e);
  return String(t);
}
var Dc = { exports: {} }, Lc = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var UT = h.exports, WT = Symbol.for("react.element"), qT = Symbol.for("react.fragment"), GT = Object.prototype.hasOwnProperty, QT = UT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, KT = { key: !0, ref: !0, __self: !0, __source: !0 };
function lk(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t)
    GT.call(t, r) && !KT.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: WT, type: e, key: i, ref: l, props: o, _owner: QT.current };
}
Lc.Fragment = qT;
Lc.jsx = lk;
Lc.jsxs = lk;
(function(e) {
  e.exports = Lc;
})(Dc);
const Ct = Dc.exports.Fragment, D = Dc.exports.jsx, se = Dc.exports.jsxs, YT = ({
  content: e
}) => {
  const [t, n] = h.exports.useState("");
  return h.exports.useEffect(() => {
    VT(e).then((r) => {
      n(r);
    });
  }, [e]), t;
}, ak = (e) => {
  const t = YT(e);
  return /* @__PURE__ */ D("div", {
    className: "prose prose-sm prose-invert",
    dangerouslySetInnerHTML: {
      __html: t
    }
  });
}, XT = (e, t) => (n, r, o) => {
  const i = (l, a, s) => {
    const u = s === void 0 ? { type: "anonymous" } : typeof s == "string" ? { type: s } : s;
    console.group(`%c action: ${t.name} : ${u.type}`, "font-weight: bold;"), console.log("%c prev state:", "color: gray; font-weight: bold;", r()), console.log("%c action:", "color: #0066db; font-weight: bold;", u), n(l, a), console.log("%cnext state:", "color: #006b3b; font-weight: bold;", r()), console.groupEnd();
  };
  return o.setState = i, e(i, r, o);
}, rg = XT, ZT = {
  getItem: async (e) => (await it.storage.local.get(e))[e],
  setItem(e, t) {
    return it.storage.local.set({ [e]: t });
  },
  removeItem(e) {
    return it.storage.local.remove(e);
  }
}, JT = {
  getItem: async (e) => (await it.storage.sync.get(e))[e],
  setItem(e, t) {
    return it.storage.sync.set({ [e]: t });
  },
  removeItem(e) {
    return it.storage.sync.remove(e);
  }
}, vv = (e) => {
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
}, e6 = (e) => e ? vv(e) : vv;
var sk = { exports: {} }, uk = {}, ck = { exports: {} }, fk = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ri = h.exports;
function t6(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var n6 = typeof Object.is == "function" ? Object.is : t6, r6 = Ri.useState, o6 = Ri.useEffect, i6 = Ri.useLayoutEffect, l6 = Ri.useDebugValue;
function a6(e, t) {
  var n = t(), r = r6({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return i6(function() {
    o.value = n, o.getSnapshot = t, od(o) && i({ inst: o });
  }, [e, n, t]), o6(function() {
    return od(o) && i({ inst: o }), e(function() {
      od(o) && i({ inst: o });
    });
  }, [e]), l6(n), n;
}
function od(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !n6(e, n);
  } catch {
    return !0;
  }
}
function s6(e, t) {
  return t();
}
var u6 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? s6 : a6;
fk.useSyncExternalStore = Ri.useSyncExternalStore !== void 0 ? Ri.useSyncExternalStore : u6;
(function(e) {
  e.exports = fk;
})(ck);
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fc = h.exports, c6 = ck.exports;
function f6(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var d6 = typeof Object.is == "function" ? Object.is : f6, p6 = c6.useSyncExternalStore, h6 = Fc.useRef, m6 = Fc.useEffect, g6 = Fc.useMemo, v6 = Fc.useDebugValue;
uk.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = h6(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else
    l = i.current;
  i = g6(function() {
    function s(g) {
      if (!u) {
        if (u = !0, c = g, g = r(g), o !== void 0 && l.hasValue) {
          var m = l.value;
          if (o(m, g))
            return f = m;
        }
        return f = g;
      }
      if (m = f, d6(c, g))
        return m;
      var v = r(g);
      return o !== void 0 && o(m, v) ? m : (c = g, f = v);
    }
    var u = !1, c, f, d = n === void 0 ? null : n;
    return [function() {
      return s(t());
    }, d === null ? void 0 : function() {
      return s(d());
    }];
  }, [t, n, r, o]);
  var a = p6(e, i[0], i[1]);
  return m6(function() {
    l.hasValue = !0, l.value = a;
  }, [a]), v6(a), a;
};
(function(e) {
  e.exports = uk;
})(sk);
const y6 = /* @__PURE__ */ Oh(sk.exports), { useSyncExternalStoreWithSelector: x6 } = y6;
function w6(e, t = e.getState, n) {
  const r = x6(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return h.exports.useDebugValue(r), r;
}
const yv = (e) => {
  ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? e6(e) : e, n = (r, o) => w6(t, r, o);
  return Object.assign(n, t), n;
}, og = (e) => e ? yv(e) : yv;
function ig(e) {
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
}, b6 = (e, t) => (n, r, o) => {
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
  let m;
  const v = () => {
    var w;
    if (!u)
      return;
    l = !1, a.forEach((y) => y(r()));
    const p = ((w = i.onRehydrateStorage) == null ? void 0 : w.call(i, r())) || void 0;
    return ya(u.getItem.bind(u))(i.name).then((y) => {
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
      return m = i.merge(
        y,
        (x = r()) != null ? x : g
      ), n(m, !0), f();
    }).then(() => {
      p == null || p(m, void 0), l = !0, s.forEach((y) => y(m));
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
  }, v(), m || g;
}, S6 = (e, t) => (n, r, o) => {
  let i = {
    storage: ig(() => localStorage),
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
  const m = () => {
    var v;
    if (!u)
      return;
    l = !1, a.forEach((p) => p(r()));
    const w = ((v = i.onRehydrateStorage) == null ? void 0 : v.call(i, r())) || void 0;
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
    rehydrate: () => m(),
    hasHydrated: () => l,
    onHydrate: (v) => (a.add(v), () => {
      a.delete(v);
    }),
    onFinishHydration: (v) => (s.add(v), () => {
      s.delete(v);
    })
  }, m(), g || d;
}, k6 = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? (({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), b6(e, t)) : S6(e, t), dk = k6, xo = og()(
  rg(
    dk(
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
          return o.find((a) => n.id === a.id) ? (o = o.map((a) => a.id === n.id ? {
            ...a,
            ...n
          } : a), {
            conventions: {
              ...r.conventions,
              [t]: o
            }
          }) : {
            conventions: {
              ...r.conventions,
              [t]: n ? o.concat(n) : o
            }
          };
        }, !1, "updateOrUpsertConventions"),
        clear: () => e({ conventions: {} })
      }),
      {
        name: "aiflow-message-store",
        storage: ig(() => ZT)
      }
    ),
    {
      name: "aiflow-message-store"
    }
  )
), En = og()(
  rg(
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
), pk = og()(
  rg(
    dk(
      (e) => ({
        set(t) {
          e(t, !1, "set");
        }
      }),
      { name: "user-config-store", storage: ig(() => JT) }
    ),
    {
      name: "user-config-store"
    }
  )
), C6 = ({
  message: e
}) => /* @__PURE__ */ se("div", {
  className: _i("text-mayumi-gray-1100 flex flex-col gap-2 p-4 text-sm", {
    "bg-mayumi-gray-200": e.role === "user",
    "bg-mayumi-gray-300": e.role === "assistant"
  }),
  children: [/* @__PURE__ */ D("div", {
    className: "flex-0 text-mayumi-gray-1200",
    children: e.role === "user" ? "You:" : "Assistant:"
  }), /* @__PURE__ */ D("div", {
    className: "flex-1",
    children: /* @__PURE__ */ D(ak, {
      content: e.text
    })
  })]
}), $6 = () => {
  const {
    toggleHistoryOpen: e,
    historyOpen: t
  } = En(), {
    conventions: n
  } = xo(), [r, o] = h.exports.useState(null), i = SA({
    h: t ? 600 : 0,
    w: t ? 500 : 150,
    opacity: t ? 1 : 0,
    config: Hb.default
  }), l = Object.keys(n), a = r || l[0], s = a ? n[a] : [];
  return /* @__PURE__ */ se(S1.div, {
    style: {
      opacity: i.opacity
    },
    className: "aiflow-chat leading-1em border-mayumi-gray-700 bg-mayumi-gray-200 fixed right-0 bottom-0 z-40 m-5 flex max-w-[500px] flex-col overflow-hidden rounded-lg border font-sans shadow-lg",
    children: [/* @__PURE__ */ se("div", {
      onClick: () => {
        e();
      },
      className: _i("flex-0 border-mayumi-gray-700 text-mayumi-gray-1100 hover:bg-mayumi-gray-400 flex cursor-pointer select-none items-center justify-between p-3", {
        "border-b-0": !t,
        "border-b": t
      }),
      children: [/* @__PURE__ */ D("h2", {
        className: "rounded-md bg-transparent px-3 py-1 text-sm font-bold uppercase",
        children: "History"
      }), t && /* @__PURE__ */ D("kbd", {
        className: "bg-mayumi-gray-300 text-mayumi-gray-1100 flex h-5 items-center justify-center rounded px-2 font-sans text-xs uppercase",
        children: "esc"
      })]
    }), /* @__PURE__ */ se(S1.div, {
      style: {
        height: i.h,
        width: i.w
      },
      className: "flex",
      children: [/* @__PURE__ */ D("div", {
        className: "border-mayumi-gray-700 grid min-w-[150px] grid-flow-row auto-rows-max border-r p-2 font-semibold",
        children: l.map((u) => /* @__PURE__ */ D("div", {
          className: _i("hover:bg-mayumi-blue-400 hover:text-mayumi-gray-1200 flex items-center rounded-md py-2 px-3 text-sm", {
            "bg-mayumi-blue-400 text-mayumi-gray-1200": u === a,
            "bg-mayumi-gray-200 text-mayumi-gray-1100": u !== a
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
        className: "aiflow-messages bg-mayumi-gray-300 flex-1 overflow-auto",
        children: s.map((u, c) => /* @__PURE__ */ D(C6, {
          message: u
        }, c))
      })]
    })]
  });
};
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
function E6(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function hk(...e) {
  return (t) => e.forEach(
    (n) => E6(n, t)
  );
}
function Ce(...e) {
  return h.exports.useCallback(hk(...e), e);
}
function ji(e, t = []) {
  let n = [];
  function r(i, l) {
    const a = /* @__PURE__ */ h.exports.createContext(l), s = n.length;
    n = [
      ...n,
      l
    ];
    function u(f) {
      const { scope: d, children: g, ...m } = f, v = (d == null ? void 0 : d[e][s]) || a, w = h.exports.useMemo(
        () => m,
        Object.values(m)
      );
      return /* @__PURE__ */ h.exports.createElement(v.Provider, {
        value: w
      }, g);
    }
    function c(f, d) {
      const g = (d == null ? void 0 : d[e][s]) || a, m = h.exports.useContext(g);
      if (m)
        return m;
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
    const i = n.map((l) => /* @__PURE__ */ h.exports.createContext(l));
    return function(a) {
      const s = (a == null ? void 0 : a[e]) || i;
      return h.exports.useMemo(
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
    A6(o, ...t)
  ];
}
function A6(...e) {
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
      return h.exports.useMemo(
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
const Ze = Boolean(globalThis == null ? void 0 : globalThis.document) ? h.exports.useLayoutEffect : () => {
}, P6 = cx["useId".toString()] || (() => {
});
let _6 = 0;
function vi(e) {
  const [t, n] = h.exports.useState(P6());
  return Ze(() => {
    e || n(
      (r) => r != null ? r : String(_6++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function ot(e) {
  const t = h.exports.useRef(e);
  return h.exports.useEffect(() => {
    t.current = e;
  }), h.exports.useMemo(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function Uu({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = R6({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, l = i ? e : r, a = ot(n), s = h.exports.useCallback((u) => {
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
function R6({ defaultProp: e, onChange: t }) {
  const n = h.exports.useState(e), [r] = n, o = h.exports.useRef(r), i = ot(t);
  return h.exports.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
const Ti = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = h.exports.Children.toArray(n), i = o.find(I6);
  if (i) {
    const l = i.props.children, a = o.map((s) => s === i ? h.exports.Children.count(l) > 1 ? h.exports.Children.only(null) : /* @__PURE__ */ h.exports.isValidElement(l) ? l.props.children : null : s);
    return /* @__PURE__ */ h.exports.createElement(Kp, Z({}, r, {
      ref: t
    }), /* @__PURE__ */ h.exports.isValidElement(l) ? /* @__PURE__ */ h.exports.cloneElement(l, void 0, a) : null);
  }
  return /* @__PURE__ */ h.exports.createElement(Kp, Z({}, r, {
    ref: t
  }), n);
});
Ti.displayName = "Slot";
const Kp = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ h.exports.isValidElement(n) ? /* @__PURE__ */ h.exports.cloneElement(n, {
    ...O6(r, n.props),
    ref: hk(t, n.ref)
  }) : h.exports.Children.count(n) > 1 ? h.exports.Children.only(null) : null;
});
Kp.displayName = "SlotClone";
const T6 = ({ children: e }) => /* @__PURE__ */ h.exports.createElement(h.exports.Fragment, null, e);
function I6(e) {
  return /* @__PURE__ */ h.exports.isValidElement(e) && e.type === T6;
}
function O6(e, t) {
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
const M6 = [
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
], Ue = M6.reduce((e, t) => {
  const n = /* @__PURE__ */ h.exports.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, a = i ? Ti : t;
    return h.exports.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ h.exports.createElement(a, Z({}, l, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function N6(e, t) {
  e && Yt.exports.flushSync(
    () => e.dispatchEvent(t)
  );
}
function D6(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ot(e);
  h.exports.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Yp = "dismissableLayer.update", L6 = "dismissableLayer.pointerDownOutside", F6 = "dismissableLayer.focusOutside";
let xv;
const z6 = /* @__PURE__ */ h.exports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), lg = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: i, onFocusOutside: l, onInteractOutside: a, onDismiss: s, ...u } = e, c = h.exports.useContext(z6), [f, d] = h.exports.useState(null), g = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, m] = h.exports.useState({}), v = Ce(
    t,
    ($) => d($)
  ), w = Array.from(c.layers), [p] = [
    ...c.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = w.indexOf(p), x = f ? w.indexOf(f) : -1, b = c.layersWithOutsidePointerEventsDisabled.size > 0, A = x >= y, S = B6(($) => {
    const P = $.target, _ = [
      ...c.branches
    ].some(
      (T) => T.contains(P)
    );
    !A || _ || (i == null || i($), a == null || a($), $.defaultPrevented || s == null || s());
  }, g), E = j6(($) => {
    const P = $.target;
    [
      ...c.branches
    ].some(
      (T) => T.contains(P)
    ) || (l == null || l($), a == null || a($), $.defaultPrevented || s == null || s());
  }, g);
  return D6(($) => {
    x === c.layers.size - 1 && (o == null || o($), !$.defaultPrevented && s && ($.preventDefault(), s()));
  }, g), h.exports.useEffect(() => {
    if (!!f)
      return r && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (xv = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), wv(), () => {
        r && c.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = xv);
      };
  }, [
    f,
    g,
    r,
    c
  ]), h.exports.useEffect(() => () => {
    !f || (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), wv());
  }, [
    f,
    c
  ]), h.exports.useEffect(() => {
    const $ = () => m({});
    return document.addEventListener(Yp, $), () => document.removeEventListener(Yp, $);
  }, []), /* @__PURE__ */ h.exports.createElement(Ue.div, Z({}, u, {
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
function B6(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ot(e), r = h.exports.useRef(!1), o = h.exports.useRef(() => {
  });
  return h.exports.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let c = function() {
          mk(L6, n, u, {
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
function j6(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ot(e), r = h.exports.useRef(!1);
  return h.exports.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && mk(F6, n, {
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
function wv() {
  const e = new CustomEvent(Yp);
  document.dispatchEvent(e);
}
function mk(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? N6(o, i) : o.dispatchEvent(i);
}
const id = "focusScope.autoFocusOnMount", ld = "focusScope.autoFocusOnUnmount", bv = {
  bubbles: !1,
  cancelable: !0
}, ag = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l } = e, [a, s] = h.exports.useState(null), u = ot(o), c = ot(i), f = h.exports.useRef(null), d = Ce(
    t,
    (v) => s(v)
  ), g = h.exports.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  h.exports.useEffect(() => {
    if (r) {
      let p = function(x) {
        if (g.paused || !a)
          return;
        const b = x.target;
        a.contains(b) ? f.current = b : Xr(f.current, {
          select: !0
        });
      }, y = function(x) {
        g.paused || !a || a.contains(x.relatedTarget) || Xr(f.current, {
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
  ]), h.exports.useEffect(() => {
    if (a) {
      kv.add(g);
      const v = document.activeElement;
      if (!a.contains(v)) {
        const p = new CustomEvent(id, bv);
        a.addEventListener(id, u), a.dispatchEvent(p), p.defaultPrevented || (H6(G6(gk(a)), {
          select: !0
        }), document.activeElement === v && Xr(a));
      }
      return () => {
        a.removeEventListener(id, u), setTimeout(() => {
          const p = new CustomEvent(ld, bv);
          a.addEventListener(ld, c), a.dispatchEvent(p), p.defaultPrevented || Xr(v != null ? v : document.body, {
            select: !0
          }), a.removeEventListener(ld, c), kv.remove(g);
        }, 0);
      };
    }
  }, [
    a,
    u,
    c,
    g
  ]);
  const m = h.exports.useCallback((v) => {
    if (!n && !r || g.paused)
      return;
    const w = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, p = document.activeElement;
    if (w && p) {
      const y = v.currentTarget, [x, b] = V6(y);
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
  return /* @__PURE__ */ h.exports.createElement(Ue.div, Z({
    tabIndex: -1
  }, l, {
    ref: d,
    onKeyDown: m
  }));
});
function H6(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Xr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function V6(e) {
  const t = gk(e), n = Sv(t, e), r = Sv(t.reverse(), e);
  return [
    n,
    r
  ];
}
function gk(e) {
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
function Sv(e, t) {
  for (const n of e)
    if (!U6(n, {
      upTo: t
    }))
      return n;
}
function U6(e, { upTo: t }) {
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
function W6(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Xr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && W6(e) && t && e.select();
  }
}
const kv = q6();
function q6() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Cv(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Cv(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Cv(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function G6(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const vk = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ db.createPortal(/* @__PURE__ */ h.exports.createElement(Ue.div, Z({}, o, {
    ref: t
  })), r) : null;
});
function Q6(e, t) {
  return h.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const Hr = (e) => {
  const { present: t, children: n } = e, r = K6(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : h.exports.Children.only(n), i = Ce(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ h.exports.cloneElement(o, {
    ref: i
  }) : null;
};
Hr.displayName = "Presence";
function K6(e) {
  const [t, n] = h.exports.useState(), r = h.exports.useRef({}), o = h.exports.useRef(e), i = h.exports.useRef("none"), l = e ? "mounted" : "unmounted", [a, s] = Q6(l, {
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
  return h.exports.useEffect(() => {
    const u = $s(r.current);
    i.current = a === "mounted" ? u : "none";
  }, [
    a
  ]), Ze(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const d = i.current, g = $s(u);
      e ? s("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? s("UNMOUNT") : s(c && d !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    s
  ]), Ze(() => {
    if (t) {
      const u = (f) => {
        const g = $s(r.current).includes(f.animationName);
        f.target === t && g && Yt.exports.flushSync(
          () => s("ANIMATION_END")
        );
      }, c = (f) => {
        f.target === t && (i.current = $s(r.current));
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
    ref: h.exports.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function $s(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let ad = 0;
function sg() {
  h.exports.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : $v()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : $v()), ad++, () => {
      ad === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), ad--;
    };
  }, []);
}
function $v() {
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
function yk(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Y6(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var nu = "right-scroll-bar-position", ru = "width-before-scroll-bar", X6 = "with-scroll-bars-hidden", Z6 = "--removed-body-scroll-bar-size";
function J6(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function eI(e, t) {
  var n = h.exports.useState(function() {
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
function tI(e, t) {
  return eI(t || null, function(n) {
    return e.forEach(function(r) {
      return J6(r, n);
    });
  });
}
function nI(e) {
  return e;
}
function rI(e, t) {
  t === void 0 && (t = nI);
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
function oI(e) {
  e === void 0 && (e = {});
  var t = rI(null);
  return t.options = Sn({ async: !0, ssr: !1 }, e), t;
}
var xk = function(e) {
  var t = e.sideCar, n = yk(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return /* @__PURE__ */ D(r, {
    ...Sn({}, n)
  });
};
xk.isSideCarExport = !0;
function iI(e, t) {
  return e.useMedium(t), xk;
}
var wk = oI(), sd = function() {
}, zc = h.exports.forwardRef(function(e, t) {
  var n = h.exports.useRef(null), r = h.exports.useState({
    onScrollCapture: sd,
    onWheelCapture: sd,
    onTouchMoveCapture: sd
  }), o = r[0], i = r[1], l = e.forwardProps, a = e.children, s = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, g = e.noIsolation, m = e.inert, v = e.allowPinchZoom, w = e.as, p = w === void 0 ? "div" : w, y = yk(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = d, b = tI([n, t]), A = Sn(Sn({}, y), o);
  return /* @__PURE__ */ se(Ct, {
    children: [c && /* @__PURE__ */ D(x, {
      sideCar: wk,
      removeScrollBar: u,
      shards: f,
      noIsolation: g,
      inert: m,
      setCallbacks: i,
      allowPinchZoom: !!v,
      lockRef: n
    }), l ? h.exports.cloneElement(h.exports.Children.only(a), Sn(Sn({}, A), {
      ref: b
    })) : /* @__PURE__ */ D(p, {
      ...Sn({}, A, {
        className: s,
        ref: b
      }),
      children: a
    })]
  });
});
zc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
zc.classNames = {
  fullWidth: ru,
  zeroRight: nu
};
var lI = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function aI() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = lI();
  return t && e.setAttribute("nonce", t), e;
}
function sI(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function uI(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var cI = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = aI()) && (sI(t, n), uI(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, fI = function() {
  var e = cI();
  return function(t, n) {
    h.exports.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, bk = function() {
  var e = fI(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, dI = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ud = function(e) {
  return parseInt(e || "", 10) || 0;
}, pI = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ud(n), ud(r), ud(o)];
}, hI = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return dI;
  var t = pI(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, mI = bk(), gI = function(e, t, n, r) {
  var o = e.left, i = e.top, l = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(X6, ` {
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
  
  .`).concat(nu, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(ru, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(nu, " .").concat(nu, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ru, " .").concat(ru, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(Z6, ": ").concat(a, `px;
  }
`);
}, vI = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = h.exports.useMemo(function() {
    return hI(o);
  }, [o]);
  return /* @__PURE__ */ D(mI, {
    styles: gI(i, !t, o, n ? "" : "!important")
  });
}, Xp = !1;
if (typeof window < "u")
  try {
    var Es = Object.defineProperty({}, "passive", {
      get: function() {
        return Xp = !0, !0;
      }
    });
    window.addEventListener("test", Es, Es), window.removeEventListener("test", Es, Es);
  } catch {
    Xp = !1;
  }
var Mo = Xp ? { passive: !1 } : !1, yI = function(e) {
  return e.tagName === "TEXTAREA";
}, Sk = function(e, t) {
  var n = window.getComputedStyle(e);
  return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !yI(e) && n[t] === "visible");
}, xI = function(e) {
  return Sk(e, "overflowY");
}, wI = function(e) {
  return Sk(e, "overflowX");
}, Ev = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = kk(e, n);
    if (r) {
      var o = Ck(e, n), i = o[1], l = o[2];
      if (i > l)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, bI = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, SI = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, kk = function(e, t) {
  return e === "v" ? xI(t) : wI(t);
}, Ck = function(e, t) {
  return e === "v" ? bI(t) : SI(t);
}, kI = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, CI = function(e, t, n, r, o) {
  var i = kI(e, window.getComputedStyle(t).direction), l = i * r, a = n.target, s = t.contains(a), u = !1, c = l > 0, f = 0, d = 0;
  do {
    var g = Ck(e, a), m = g[0], v = g[1], w = g[2], p = v - w - i * m;
    (m || p) && kk(e, a) && (f += p, d += m), a = a.parentNode;
  } while (!s && a !== document.body || s && (t.contains(a) || t === a));
  return (c && (o && f === 0 || !o && l > f) || !c && (o && d === 0 || !o && -l > d)) && (u = !0), u;
}, As = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Av = function(e) {
  return [e.deltaX, e.deltaY];
}, Pv = function(e) {
  return e && "current" in e ? e.current : e;
}, $I = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, EI = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, AI = 0, No = [];
function PI(e) {
  var t = h.exports.useRef([]), n = h.exports.useRef([0, 0]), r = h.exports.useRef(), o = h.exports.useState(AI++)[0], i = h.exports.useState(function() {
    return bk();
  })[0], l = h.exports.useRef(e);
  h.exports.useEffect(function() {
    l.current = e;
  }, [e]), h.exports.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Y6([e.lockRef.current], (e.shards || []).map(Pv), !0).filter(Boolean);
      return v.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = h.exports.useCallback(function(v, w) {
    if ("touches" in v && v.touches.length === 2)
      return !l.current.allowPinchZoom;
    var p = As(v), y = n.current, x = "deltaX" in v ? v.deltaX : y[0] - p[0], b = "deltaY" in v ? v.deltaY : y[1] - p[1], A, S = v.target, E = Math.abs(x) > Math.abs(b) ? "h" : "v";
    if ("touches" in v && E === "h" && S.type === "range")
      return !1;
    var $ = Ev(E, S);
    if (!$)
      return !0;
    if ($ ? A = E : (A = E === "v" ? "h" : "v", $ = Ev(E, S)), !$)
      return !1;
    if (!r.current && "changedTouches" in v && (x || b) && (r.current = A), !A)
      return !0;
    var P = r.current || A;
    return CI(P, w, v, P === "h" ? x : b, !0);
  }, []), s = h.exports.useCallback(function(v) {
    var w = v;
    if (!(!No.length || No[No.length - 1] !== i)) {
      var p = "deltaY" in w ? Av(w) : As(w), y = t.current.filter(function(A) {
        return A.name === w.type && A.target === w.target && $I(A.delta, p);
      })[0];
      if (y && y.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!y) {
        var x = (l.current.shards || []).map(Pv).filter(Boolean).filter(function(A) {
          return A.contains(w.target);
        }), b = x.length > 0 ? a(w, x[0]) : !l.current.noIsolation;
        b && w.cancelable && w.preventDefault();
      }
    }
  }, []), u = h.exports.useCallback(function(v, w, p, y) {
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
  }, []), c = h.exports.useCallback(function(v) {
    n.current = As(v), r.current = void 0;
  }, []), f = h.exports.useCallback(function(v) {
    u(v.type, Av(v), v.target, a(v, e.lockRef.current));
  }, []), d = h.exports.useCallback(function(v) {
    u(v.type, As(v), v.target, a(v, e.lockRef.current));
  }, []);
  h.exports.useEffect(function() {
    return No.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", s, Mo), document.addEventListener("touchmove", s, Mo), document.addEventListener("touchstart", c, Mo), function() {
      No = No.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", s, Mo), document.removeEventListener("touchmove", s, Mo), document.removeEventListener("touchstart", c, Mo);
    };
  }, []);
  var g = e.removeScrollBar, m = e.inert;
  return /* @__PURE__ */ se(Ct, {
    children: [m ? /* @__PURE__ */ D(i, {
      styles: EI(o)
    }) : null, g ? /* @__PURE__ */ D(vI, {
      gapMode: "margin"
    }) : null]
  });
}
const _I = iI(wk, PI);
var $k = h.exports.forwardRef(function(e, t) {
  return /* @__PURE__ */ D(zc, {
    ...Sn({}, e, {
      ref: t,
      sideCar: _I
    })
  });
});
$k.classNames = zc.classNames;
const Ek = $k;
var RI = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Do = /* @__PURE__ */ new WeakMap(), Ps = /* @__PURE__ */ new WeakMap(), _s = {}, cd = 0, Ak = function(e) {
  return e && (e.host || Ak(e.parentNode));
}, TI = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ak(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, II = function(e, t, n, r) {
  var o = TI(t, Array.isArray(e) ? e : [e]);
  _s[n] || (_s[n] = /* @__PURE__ */ new WeakMap());
  var i = _s[n], l = [], a = /* @__PURE__ */ new Set(), s = new Set(o), u = function(f) {
    !f || a.has(f) || (a.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var c = function(f) {
    !f || s.has(f) || Array.prototype.forEach.call(f.children, function(d) {
      if (a.has(d))
        c(d);
      else {
        var g = d.getAttribute(r), m = g !== null && g !== "false", v = (Do.get(d) || 0) + 1, w = (i.get(d) || 0) + 1;
        Do.set(d, v), i.set(d, w), l.push(d), v === 1 && m && Ps.set(d, !0), w === 1 && d.setAttribute(n, "true"), m || d.setAttribute(r, "true");
      }
    });
  };
  return c(t), a.clear(), cd++, function() {
    l.forEach(function(f) {
      var d = Do.get(f) - 1, g = i.get(f) - 1;
      Do.set(f, d), i.set(f, g), d || (Ps.has(f) || f.removeAttribute(r), Ps.delete(f)), g || f.removeAttribute(n);
    }), cd--, cd || (Do = /* @__PURE__ */ new WeakMap(), Do = /* @__PURE__ */ new WeakMap(), Ps = /* @__PURE__ */ new WeakMap(), _s = {});
  };
}, ug = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || RI(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), II(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
const Pk = "Dialog", [_k, Az] = ji(Pk), [OI, Ua] = _k(Pk), MI = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !0 } = e, a = h.exports.useRef(null), s = h.exports.useRef(null), [u = !1, c] = Uu({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ h.exports.createElement(OI, {
    scope: t,
    triggerRef: a,
    contentRef: s,
    contentId: vi(),
    titleId: vi(),
    descriptionId: vi(),
    open: u,
    onOpenChange: c,
    onOpenToggle: h.exports.useCallback(
      () => c(
        (f) => !f
      ),
      [
        c
      ]
    ),
    modal: l
  }, n);
}, Rk = "DialogPortal", [NI, DI] = _k(Rk, {
  forceMount: void 0
}), LI = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Ua(Rk, t);
  return /* @__PURE__ */ h.exports.createElement(NI, {
    scope: t,
    forceMount: n
  }, h.exports.Children.map(
    r,
    (l) => /* @__PURE__ */ h.exports.createElement(Hr, {
      present: n || i.open
    }, /* @__PURE__ */ h.exports.createElement(vk, {
      asChild: !0,
      container: o
    }, l))
  ));
}, xa = "DialogContent", FI = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const n = DI(xa, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Ua(xa, e.__scopeDialog);
  return /* @__PURE__ */ h.exports.createElement(Hr, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ h.exports.createElement(zI, Z({}, o, {
    ref: t
  })) : /* @__PURE__ */ h.exports.createElement(BI, Z({}, o, {
    ref: t
  })));
}), zI = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const n = Ua(xa, e.__scopeDialog), r = h.exports.useRef(null), o = Ce(t, n.contentRef, r);
  return h.exports.useEffect(() => {
    const i = r.current;
    if (i)
      return ug(i);
  }, []), /* @__PURE__ */ h.exports.createElement(Tk, Z({}, e, {
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
}), BI = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const n = Ua(xa, e.__scopeDialog), r = h.exports.useRef(!1);
  return /* @__PURE__ */ h.exports.createElement(Tk, Z({}, e, {
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
}), Tk = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, a = Ua(xa, n), s = h.exports.useRef(null), u = Ce(t, s);
  return sg(), /* @__PURE__ */ h.exports.createElement(h.exports.Fragment, null, /* @__PURE__ */ h.exports.createElement(ag, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ h.exports.createElement(lg, Z({
    role: "dialog",
    id: a.contentId,
    "aria-describedby": a.descriptionId,
    "aria-labelledby": a.titleId,
    "data-state": jI(a.open)
  }, l, {
    ref: u,
    onDismiss: () => a.onOpenChange(!1)
  }))), !1);
});
function jI(e) {
  return e ? "open" : "closed";
}
const HI = MI, VI = LI, UI = FI;
function Ao(e) {
  return e.split("-")[0];
}
function Wa(e) {
  return e.split("-")[1];
}
function Hi(e) {
  return ["top", "bottom"].includes(Ao(e)) ? "x" : "y";
}
function cg(e) {
  return e === "y" ? "height" : "width";
}
function _v(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = r.x + r.width / 2 - o.width / 2, l = r.y + r.height / 2 - o.height / 2, a = Hi(t), s = cg(a), u = r[s] / 2 - o[s] / 2, c = Ao(t), f = a === "x";
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
  switch (Wa(t)) {
    case "start":
      d[a] -= u * (n && f ? -1 : 1);
      break;
    case "end":
      d[a] += u * (n && f ? -1 : 1);
      break;
  }
  return d;
}
const WI = async (e, t, n) => {
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
  } = _v(s, r, a), f = r, d = {}, g = 0;
  for (let m = 0; m < i.length; m++) {
    const {
      name: v,
      fn: w
    } = i[m], {
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
      } = _v(s, f, a)), m = -1;
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
function qI(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ik(e) {
  return typeof e != "number" ? qI(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Wu(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function wa(e, t) {
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
  } = t, m = Ik(g), w = a[d ? f === "floating" ? "reference" : "floating" : f], p = Wu(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: s
  })), y = Wu(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: f === "floating" ? {
      ...l.floating,
      x: r,
      y: o
    } : l.reference,
    offsetParent: await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)),
    strategy: s
  }) : l[f]);
  return {
    top: p.top - y.top + m.top,
    bottom: y.bottom - p.bottom + m.bottom,
    left: p.left - y.left + m.left,
    right: y.right - p.right + m.right
  };
}
const GI = Math.min, Zr = Math.max;
function Zp(e, t, n) {
  return Zr(e, GI(t, n));
}
const Rv = (e) => ({
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
    const u = Ik(r), c = {
      x: o,
      y: i
    }, f = Hi(l), d = Wa(l), g = cg(f), m = await s.getDimensions(n), v = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", p = a.reference[g] + a.reference[f] - c[f] - a.floating[g], y = c[f] - a.reference[f], x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(n));
    let b = x ? f === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
    b === 0 && (b = a.floating[g]);
    const A = p / 2 - y / 2, S = u[v], E = b - m[g] - u[w], $ = b / 2 - m[g] / 2 + A, P = Zp(S, $, E), M = (d === "start" ? u[v] : u[w]) > 0 && $ !== P && a.reference[g] <= a.floating[g] ? $ < S ? S - $ : E - $ : 0;
    return {
      [f]: c[f] - M,
      data: {
        [f]: P,
        centerOffset: $ - P
      }
    };
  }
}), QI = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function qu(e) {
  return e.replace(/left|right|bottom|top/g, (t) => QI[t]);
}
function KI(e, t, n) {
  n === void 0 && (n = !1);
  const r = Wa(e), o = Hi(e), i = cg(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = qu(l)), {
    main: l,
    cross: qu(l)
  };
}
const YI = {
  start: "end",
  end: "start"
};
function Tv(e) {
  return e.replace(/start|end/g, (t) => YI[t]);
}
const XI = ["top", "right", "bottom", "left"];
function ZI(e) {
  const t = qu(e);
  return [Tv(e), t, Tv(t)];
}
const JI = function(e) {
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
        ...m
      } = e, v = Ao(r), p = f || (v === l || !g ? [qu(l)] : ZI(l)), y = [l, ...p], x = await wa(t, m), b = [];
      let A = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (u && b.push(x[v]), c) {
        const {
          main: P,
          cross: _
        } = KI(r, i, await (a.isRTL == null ? void 0 : a.isRTL(s.floating)));
        b.push(x[P], x[_]);
      }
      if (A = [...A, {
        placement: r,
        overflows: b
      }], !b.every((P) => P <= 0)) {
        var S, E;
        const P = ((S = (E = o.flip) == null ? void 0 : E.index) != null ? S : 0) + 1, _ = y[P];
        if (_)
          return {
            data: {
              index: P,
              overflows: A
            },
            reset: {
              placement: _
            }
          };
        let T = "bottom";
        switch (d) {
          case "bestFit": {
            var $;
            const M = ($ = A.map((L) => [L, L.overflows.filter((B) => B > 0).reduce((B, z) => B + z, 0)]).sort((L, B) => L[1] - B[1])[0]) == null ? void 0 : $[0].placement;
            M && (T = M);
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
function Iv(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ov(e) {
  return XI.some((t) => e[t] >= 0);
}
const eO = function(e) {
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
          const i = await wa(r, {
            ...n,
            elementContext: "reference"
          }), l = Iv(i, o.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Ov(l)
            }
          };
        }
        case "escaped": {
          const i = await wa(r, {
            ...n,
            altBoundary: !0
          }), l = Iv(i, o.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Ov(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function tO(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = Ao(n), a = Wa(n), s = Hi(n) === "x", u = ["left", "top"].includes(l) ? -1 : 1, c = i && s ? -1 : 1, f = typeof t == "function" ? t(e) : t;
  let {
    mainAxis: d,
    crossAxis: g,
    alignmentAxis: m
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
  return a && typeof m == "number" && (g = a === "end" ? m * -1 : m), s ? {
    x: g * c,
    y: d * u
  } : {
    x: d * u,
    y: g * c
  };
}
const nO = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await tO(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
};
function Ok(e) {
  return e === "x" ? "y" : "x";
}
const rO = function(e) {
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
      }, c = await wa(t, s), f = Hi(Ao(o)), d = Ok(f);
      let g = u[f], m = u[d];
      if (i) {
        const w = f === "y" ? "top" : "left", p = f === "y" ? "bottom" : "right", y = g + c[w], x = g - c[p];
        g = Zp(y, g, x);
      }
      if (l) {
        const w = d === "y" ? "top" : "left", p = d === "y" ? "bottom" : "right", y = m + c[w], x = m - c[p];
        m = Zp(y, m, x);
      }
      const v = a.fn({
        ...t,
        [f]: g,
        [d]: m
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
}, oO = function(e) {
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
      }, f = Hi(o), d = Ok(f);
      let g = c[f], m = c[d];
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
        const A = f === "y" ? "width" : "height", S = ["top", "left"].includes(Ao(o)), E = i.reference[d] - i.floating[A] + (S && (p = (y = l.offset) == null ? void 0 : y[d]) != null ? p : 0) + (S ? 0 : w.crossAxis), $ = i.reference[d] + i.reference[A] + (S ? 0 : (x = (b = l.offset) == null ? void 0 : b[d]) != null ? x : 0) - (S ? w.crossAxis : 0);
        m < E ? m = E : m > $ && (m = $);
      }
      return {
        [f]: g,
        [d]: m
      };
    }
  };
}, iO = function(e) {
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
      } = e, s = await wa(t, a), u = Ao(n), c = Wa(n);
      let f, d;
      u === "top" || u === "bottom" ? (f = u, d = c === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (d = u, f = c === "end" ? "top" : "bottom");
      const g = Zr(s.left, 0), m = Zr(s.right, 0), v = Zr(s.top, 0), w = Zr(s.bottom, 0), p = {
        availableHeight: r.floating.height - (["left", "right"].includes(n) ? 2 * (v !== 0 || w !== 0 ? v + w : Zr(s.top, s.bottom)) : s[f]),
        availableWidth: r.floating.width - (["top", "bottom"].includes(n) ? 2 * (g !== 0 || m !== 0 ? g + m : Zr(s.left, s.right)) : s[d])
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
function Mk(e) {
  return e && e.document && e.location && e.alert && e.setInterval;
}
function er(e) {
  if (e == null)
    return window;
  if (!Mk(e)) {
    const t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function qa(e) {
  return er(e).getComputedStyle(e);
}
function Kn(e) {
  return Mk(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function Nk() {
  const e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map((t) => t.brand + "/" + t.version).join(" ") : navigator.userAgent;
}
function Pn(e) {
  return e instanceof er(e).HTMLElement;
}
function Dr(e) {
  return e instanceof er(e).Element;
}
function lO(e) {
  return e instanceof er(e).Node;
}
function fg(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = er(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Bc(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r
  } = qa(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n);
}
function aO(e) {
  return ["table", "td", "th"].includes(Kn(e));
}
function Dk(e) {
  const t = /firefox/i.test(Nk()), n = qa(e);
  return n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].includes(n.willChange) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1);
}
function Lk() {
  return !/^((?!chrome|android).)*safari/i.test(Nk());
}
const Mv = Math.min, Bl = Math.max, Gu = Math.round;
function Yn(e, t, n) {
  var r, o, i, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect();
  let s = 1, u = 1;
  t && Pn(e) && (s = e.offsetWidth > 0 && Gu(a.width) / e.offsetWidth || 1, u = e.offsetHeight > 0 && Gu(a.height) / e.offsetHeight || 1);
  const c = Dr(e) ? er(e) : window, f = !Lk() && n, d = (a.left + (f && (r = (o = c.visualViewport) == null ? void 0 : o.offsetLeft) != null ? r : 0)) / s, g = (a.top + (f && (i = (l = c.visualViewport) == null ? void 0 : l.offsetTop) != null ? i : 0)) / u, m = a.width / s, v = a.height / u;
  return {
    width: m,
    height: v,
    top: g,
    right: d + m,
    bottom: g + v,
    left: d,
    x: d,
    y: g
  };
}
function Vr(e) {
  return ((lO(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function jc(e) {
  return Dr(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Fk(e) {
  return Yn(Vr(e)).left + jc(e).scrollLeft;
}
function sO(e) {
  const t = Yn(e);
  return Gu(t.width) !== e.offsetWidth || Gu(t.height) !== e.offsetHeight;
}
function uO(e, t, n) {
  const r = Pn(t), o = Vr(t), i = Yn(
    e,
    r && sO(t),
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
    if ((Kn(t) !== "body" || Bc(o)) && (l = jc(t)), Pn(t)) {
      const s = Yn(t, !0);
      a.x = s.x + t.clientLeft, a.y = s.y + t.clientTop;
    } else
      o && (a.x = Fk(o));
  return {
    x: i.left + l.scrollLeft - a.x,
    y: i.top + l.scrollTop - a.y,
    width: i.width,
    height: i.height
  };
}
function zk(e) {
  return Kn(e) === "html" ? e : e.assignedSlot || e.parentNode || (fg(e) ? e.host : null) || Vr(e);
}
function Nv(e) {
  return !Pn(e) || getComputedStyle(e).position === "fixed" ? null : e.offsetParent;
}
function cO(e) {
  let t = zk(e);
  for (fg(t) && (t = t.host); Pn(t) && !["html", "body"].includes(Kn(t)); ) {
    if (Dk(t))
      return t;
    t = t.parentNode;
  }
  return null;
}
function Jp(e) {
  const t = er(e);
  let n = Nv(e);
  for (; n && aO(n) && getComputedStyle(n).position === "static"; )
    n = Nv(n);
  return n && (Kn(n) === "html" || Kn(n) === "body" && getComputedStyle(n).position === "static" && !Dk(n)) ? t : n || cO(e) || t;
}
function Dv(e) {
  if (Pn(e))
    return {
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const t = Yn(e);
  return {
    width: t.width,
    height: t.height
  };
}
function fO(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = Pn(n), i = Vr(n);
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
  if ((o || !o && r !== "fixed") && ((Kn(n) !== "body" || Bc(i)) && (l = jc(n)), Pn(n))) {
    const s = Yn(n, !0);
    a.x = s.x + n.clientLeft, a.y = s.y + n.clientTop;
  }
  return {
    ...t,
    x: t.x - l.scrollLeft + a.x,
    y: t.y - l.scrollTop + a.y
  };
}
function dO(e, t) {
  const n = er(e), r = Vr(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, a = 0, s = 0;
  if (o) {
    i = o.width, l = o.height;
    const u = Lk();
    (u || !u && t === "fixed") && (a = o.offsetLeft, s = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: a,
    y: s
  };
}
function pO(e) {
  var t;
  const n = Vr(e), r = jc(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Bl(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = Bl(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let a = -r.scrollLeft + Fk(e);
  const s = -r.scrollTop;
  return qa(o || n).direction === "rtl" && (a += Bl(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: l,
    x: a,
    y: s
  };
}
function Bk(e) {
  const t = zk(e);
  return ["html", "body", "#document"].includes(Kn(t)) ? e.ownerDocument.body : Pn(t) && Bc(t) ? t : Bk(t);
}
function Qu(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Bk(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = er(r), l = o ? [i].concat(i.visualViewport || [], Bc(r) ? r : []) : r, a = t.concat(l);
  return o ? a : a.concat(Qu(l));
}
function hO(e, t) {
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && fg(n)) {
    let r = t;
    do {
      if (r && e === r)
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function mO(e, t) {
  const n = Yn(e, !1, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft;
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
function Lv(e, t, n) {
  return t === "viewport" ? Wu(dO(e, n)) : Dr(t) ? mO(t, n) : Wu(pO(Vr(e)));
}
function gO(e) {
  const t = Qu(e), r = ["absolute", "fixed"].includes(qa(e).position) && Pn(e) ? Jp(e) : e;
  return Dr(r) ? t.filter((o) => Dr(o) && hO(o, r) && Kn(o) !== "body") : [];
}
function vO(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? gO(t) : [].concat(n), r], a = l[0], s = l.reduce((u, c) => {
    const f = Lv(t, c, o);
    return u.top = Bl(f.top, u.top), u.right = Mv(f.right, u.right), u.bottom = Mv(f.bottom, u.bottom), u.left = Bl(f.left, u.left), u;
  }, Lv(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
const yO = {
  getClippingRect: vO,
  convertOffsetParentRelativeRectToViewportRelativeRect: fO,
  isElement: Dr,
  getDimensions: Dv,
  getOffsetParent: Jp,
  getDocumentElement: Vr,
  getElementRects: (e) => {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    return {
      reference: uO(t, Jp(n), r),
      floating: {
        ...Dv(n),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => qa(e).direction === "rtl"
};
function xO(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = !0,
    animationFrame: a = !1
  } = r, s = o && !a, u = i && !a, c = s || u ? [...Dr(e) ? Qu(e) : [], ...Qu(t)] : [];
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
    }), Dr(e) && !a && f.observe(e), f.observe(t);
  }
  let d, g = a ? Yn(e) : null;
  a && m();
  function m() {
    const v = Yn(e);
    g && (v.x !== g.x || v.y !== g.y || v.width !== g.width || v.height !== g.height) && n(), g = v, d = requestAnimationFrame(m);
  }
  return n(), () => {
    var v;
    c.forEach((w) => {
      s && w.removeEventListener("scroll", n), u && w.removeEventListener("resize", n);
    }), (v = f) == null || v.disconnect(), f = null, a && cancelAnimationFrame(d);
  };
}
const wO = (e, t, n) => WI(e, t, {
  platform: yO,
  ...n
});
var eh = typeof document < "u" ? h.exports.useLayoutEffect : h.exports.useEffect;
function th(e, t) {
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
        if (!th(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !th(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function bO(e) {
  const t = h.exports.useRef(e);
  return eh(() => {
    t.current = e;
  }), t;
}
function SO(e) {
  let {
    middleware: t,
    placement: n = "bottom",
    strategy: r = "absolute",
    whileElementsMounted: o
  } = e === void 0 ? {} : e;
  const i = h.exports.useRef(null), l = h.exports.useRef(null), a = bO(o), s = h.exports.useRef(null), [u, c] = h.exports.useState({
    x: null,
    y: null,
    strategy: r,
    placement: n,
    middlewareData: {}
  }), [f, d] = h.exports.useState(t);
  th(f == null ? void 0 : f.map((x) => {
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
  const g = h.exports.useCallback(() => {
    !i.current || !l.current || wO(i.current, l.current, {
      middleware: f,
      placement: n,
      strategy: r
    }).then((x) => {
      m.current && Yt.exports.flushSync(() => {
        c(x);
      });
    });
  }, [f, n, r]);
  eh(() => {
    m.current && g();
  }, [g]);
  const m = h.exports.useRef(!1);
  eh(() => (m.current = !0, () => {
    m.current = !1;
  }), []);
  const v = h.exports.useCallback(() => {
    if (typeof s.current == "function" && (s.current(), s.current = null), i.current && l.current)
      if (a.current) {
        const x = a.current(i.current, l.current, g);
        s.current = x;
      } else
        g();
  }, [g, a]), w = h.exports.useCallback((x) => {
    i.current = x, v();
  }, [v]), p = h.exports.useCallback((x) => {
    l.current = x, v();
  }, [v]), y = h.exports.useMemo(() => ({
    reference: i,
    floating: l
  }), []);
  return h.exports.useMemo(() => ({
    ...u,
    update: g,
    refs: y,
    reference: w,
    floating: p
  }), [u, g, y, w, p]);
}
const kO = (e) => {
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
      return r(t) ? t.current != null ? Rv({
        element: t.current,
        padding: n
      }).fn(o) : {} : t ? Rv({
        element: t,
        padding: n
      }).fn(o) : {};
    }
  };
};
function CO(e) {
  const [t, n] = h.exports.useState(void 0);
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
const jk = "Popper", [dg, Hc] = ji(jk), [$O, Hk] = dg(jk), EO = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = h.exports.useState(null);
  return /* @__PURE__ */ h.exports.createElement($O, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, AO = "PopperAnchor", PO = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, i = Hk(AO, n), l = h.exports.useRef(null), a = Ce(t, l);
  return h.exports.useEffect(() => {
    i.onAnchorChange((r == null ? void 0 : r.current) || l.current);
  }), r ? null : /* @__PURE__ */ h.exports.createElement(Ue.div, Z({}, o, {
    ref: a
  }));
}), Ku = "PopperContent", [_O, Pz] = dg(Ku), [RO, TO] = dg(Ku, {
  hasParent: !1,
  positionUpdateFns: /* @__PURE__ */ new Set()
}), IO = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  var n, r, o, i, l, a, s, u;
  const { __scopePopper: c, side: f = "bottom", sideOffset: d = 0, align: g = "center", alignOffset: m = 0, arrowPadding: v = 0, collisionBoundary: w = [], collisionPadding: p = 0, sticky: y = "partial", hideWhenDetached: x = !1, avoidCollisions: b = !0, onPlaced: A, ...S } = e, E = Hk(Ku, c), [$, P] = h.exports.useState(null), _ = Ce(
    t,
    (lr) => P(lr)
  ), [T, M] = h.exports.useState(null), L = CO(T), B = (n = L == null ? void 0 : L.width) !== null && n !== void 0 ? n : 0, z = (r = L == null ? void 0 : L.height) !== null && r !== void 0 ? r : 0, R = f + (g !== "center" ? "-" + g : ""), H = typeof p == "number" ? p : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...p
  }, N = Array.isArray(w) ? w : [
    w
  ], I = N.length > 0, O = {
    padding: H,
    boundary: N.filter(MO),
    altBoundary: I
  }, { reference: k, floating: C, strategy: J, x: ne, y: ae, placement: ee, middlewareData: G, update: ie } = SO({
    strategy: "fixed",
    placement: R,
    whileElementsMounted: xO,
    middleware: [
      NO(),
      nO({
        mainAxis: d + z,
        alignmentAxis: m
      }),
      b ? rO({
        mainAxis: !0,
        crossAxis: !1,
        limiter: y === "partial" ? oO() : void 0,
        ...O
      }) : void 0,
      T ? kO({
        element: T,
        padding: v
      }) : void 0,
      b ? JI({
        ...O
      }) : void 0,
      iO({
        ...O,
        apply: ({ elements: lr, availableWidth: af, availableHeight: sf }) => {
          lr.floating.style.setProperty("--radix-popper-available-width", `${af}px`), lr.floating.style.setProperty("--radix-popper-available-height", `${sf}px`);
        }
      }),
      DO({
        arrowWidth: B,
        arrowHeight: z
      }),
      x ? eO({
        strategy: "referenceHidden"
      }) : void 0
    ].filter(OO)
  });
  Ze(() => {
    k(E.anchor);
  }, [
    k,
    E.anchor
  ]);
  const xe = ne !== null && ae !== null, [ce, de] = Vk(ee), ue = ot(A);
  Ze(() => {
    xe && (ue == null || ue());
  }, [
    xe,
    ue
  ]);
  const at = (o = G.arrow) === null || o === void 0 ? void 0 : o.x, st = (i = G.arrow) === null || i === void 0 ? void 0 : i.y, Wr = ((l = G.arrow) === null || l === void 0 ? void 0 : l.centerOffset) !== 0, [nr, rr] = h.exports.useState();
  Ze(() => {
    $ && rr(window.getComputedStyle($).zIndex);
  }, [
    $
  ]);
  const { hasParent: Ja, positionUpdateFns: or } = TO(Ku, c), ir = !Ja;
  h.exports.useLayoutEffect(() => {
    if (!ir)
      return or.add(ie), () => {
        or.delete(ie);
      };
  }, [
    ir,
    or,
    ie
  ]), Ze(() => {
    ir && xe && Array.from(or).reverse().forEach(
      (lr) => requestAnimationFrame(lr)
    );
  }, [
    ir,
    xe,
    or
  ]);
  const Qi = {
    "data-side": ce,
    "data-align": de,
    ...S,
    ref: _,
    style: {
      ...S.style,
      animation: xe ? void 0 : "none",
      opacity: (a = G.hide) !== null && a !== void 0 && a.referenceHidden ? 0 : void 0
    }
  };
  return /* @__PURE__ */ h.exports.createElement("div", {
    ref: C,
    "data-radix-popper-content-wrapper": "",
    style: {
      position: J,
      left: 0,
      top: 0,
      transform: xe ? `translate3d(${Math.round(ne)}px, ${Math.round(ae)}px, 0)` : "translate3d(0, -200%, 0)",
      minWidth: "max-content",
      zIndex: nr,
      ["--radix-popper-transform-origin"]: [
        (s = G.transformOrigin) === null || s === void 0 ? void 0 : s.x,
        (u = G.transformOrigin) === null || u === void 0 ? void 0 : u.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ h.exports.createElement(_O, {
    scope: c,
    placedSide: ce,
    onArrowChange: M,
    arrowX: at,
    arrowY: st,
    shouldHideArrow: Wr
  }, ir ? /* @__PURE__ */ h.exports.createElement(RO, {
    scope: c,
    hasParent: !0,
    positionUpdateFns: or
  }, /* @__PURE__ */ h.exports.createElement(Ue.div, Qi)) : /* @__PURE__ */ h.exports.createElement(Ue.div, Qi)));
});
function OO(e) {
  return e !== void 0;
}
function MO(e) {
  return e !== null;
}
const NO = () => ({
  name: "anchorCssProperties",
  fn(e) {
    const { rects: t, elements: n } = e, { width: r, height: o } = t.reference;
    return n.floating.style.setProperty("--radix-popper-anchor-width", `${r}px`), n.floating.style.setProperty("--radix-popper-anchor-height", `${o}px`), {};
  }
}), DO = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, i, l;
    const { placement: a, rects: s, middlewareData: u } = t, f = ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, d = f ? 0 : e.arrowWidth, g = f ? 0 : e.arrowHeight, [m, v] = Vk(a), w = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[v], p = ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + d / 2, y = ((i = (l = u.arrow) === null || l === void 0 ? void 0 : l.y) !== null && i !== void 0 ? i : 0) + g / 2;
    let x = "", b = "";
    return m === "bottom" ? (x = f ? w : `${p}px`, b = `${-g}px`) : m === "top" ? (x = f ? w : `${p}px`, b = `${s.floating.height + g}px`) : m === "right" ? (x = `${-g}px`, b = f ? w : `${y}px`) : m === "left" && (x = `${s.floating.width + g}px`, b = f ? w : `${y}px`), {
      data: {
        x,
        y: b
      }
    };
  }
});
function Vk(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Uk = EO, Wk = PO, qk = IO, Gk = "Popover", [Qk, _z] = ji(Gk, [
  Hc
]), pg = Hc(), [LO, Ga] = Qk(Gk), FO = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !1 } = e, a = pg(t), s = h.exports.useRef(null), [u, c] = h.exports.useState(!1), [f = !1, d] = Uu({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ h.exports.createElement(Uk, a, /* @__PURE__ */ h.exports.createElement(LO, {
    scope: t,
    contentId: vi(),
    triggerRef: s,
    open: f,
    onOpenChange: d,
    onOpenToggle: h.exports.useCallback(
      () => d(
        (g) => !g
      ),
      [
        d
      ]
    ),
    hasCustomAnchor: u,
    onCustomAnchorAdd: h.exports.useCallback(
      () => c(!0),
      []
    ),
    onCustomAnchorRemove: h.exports.useCallback(
      () => c(!1),
      []
    ),
    modal: l
  }, n));
}, zO = "PopoverTrigger", BO = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { __scopePopover: n, ...r } = e, o = Ga(zO, n), i = pg(n), l = Ce(t, o.triggerRef), a = /* @__PURE__ */ h.exports.createElement(Ue.button, Z({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Yk(o.open)
  }, r, {
    ref: l,
    onClick: ye(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? a : /* @__PURE__ */ h.exports.createElement(Wk, Z({
    asChild: !0
  }, i), a);
}), jO = "PopoverPortal", [Rz, HO] = Qk(jO, {
  forceMount: void 0
}), ba = "PopoverContent", VO = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const n = HO(ba, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = Ga(ba, e.__scopePopover);
  return /* @__PURE__ */ h.exports.createElement(Hr, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ h.exports.createElement(UO, Z({}, o, {
    ref: t
  })) : /* @__PURE__ */ h.exports.createElement(WO, Z({}, o, {
    ref: t
  })));
}), UO = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const n = Ga(ba, e.__scopePopover), r = h.exports.useRef(null), o = Ce(t, r), i = h.exports.useRef(!1);
  return h.exports.useEffect(() => {
    const l = r.current;
    if (l)
      return ug(l);
  }, []), /* @__PURE__ */ h.exports.createElement(Ek, {
    as: Ti,
    allowPinchZoom: !0
  }, /* @__PURE__ */ h.exports.createElement(Kk, Z({}, e, {
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
}), WO = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const n = Ga(ba, e.__scopePopover), r = h.exports.useRef(!1);
  return /* @__PURE__ */ h.exports.createElement(Kk, Z({}, e, {
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
}), Kk = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, disableOutsidePointerEvents: l, onEscapeKeyDown: a, onPointerDownOutside: s, onFocusOutside: u, onInteractOutside: c, ...f } = e, d = Ga(ba, n), g = pg(n);
  return sg(), /* @__PURE__ */ h.exports.createElement(ag, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ h.exports.createElement(lg, {
    asChild: !0,
    disableOutsidePointerEvents: l,
    onInteractOutside: c,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: u,
    onDismiss: () => d.onOpenChange(!1)
  }, /* @__PURE__ */ h.exports.createElement(qk, Z({
    "data-state": Yk(d.open),
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
function Yk(e) {
  return e ? "open" : "closed";
}
const qO = FO, GO = BO, QO = VO;
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
function yi(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function KO(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Xk(...e) {
  return (t) => e.forEach(
    (n) => KO(n, t)
  );
}
function Qa(...e) {
  return h.exports.useCallback(Xk(...e), e);
}
function YO(e, t = []) {
  let n = [];
  function r(i, l) {
    const a = /* @__PURE__ */ h.exports.createContext(l), s = n.length;
    n = [
      ...n,
      l
    ];
    function u(f) {
      const { scope: d, children: g, ...m } = f, v = (d == null ? void 0 : d[e][s]) || a, w = h.exports.useMemo(
        () => m,
        Object.values(m)
      );
      return /* @__PURE__ */ h.exports.createElement(v.Provider, {
        value: w
      }, g);
    }
    function c(f, d) {
      const g = (d == null ? void 0 : d[e][s]) || a, m = h.exports.useContext(g);
      if (m)
        return m;
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
    const i = n.map((l) => /* @__PURE__ */ h.exports.createContext(l));
    return function(a) {
      const s = (a == null ? void 0 : a[e]) || i;
      return h.exports.useMemo(
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
    XO(o, ...t)
  ];
}
function XO(...e) {
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
      return h.exports.useMemo(
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
const nh = Boolean(globalThis == null ? void 0 : globalThis.document) ? h.exports.useLayoutEffect : () => {
}, ZO = cx["useId".toString()] || (() => {
});
let JO = 0;
function fd(e) {
  const [t, n] = h.exports.useState(ZO());
  return nh(() => {
    e || n(
      (r) => r != null ? r : String(JO++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function wo(e) {
  const t = h.exports.useRef(e);
  return h.exports.useEffect(() => {
    t.current = e;
  }), h.exports.useMemo(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function e7({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = t7({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, l = i ? e : r, a = wo(n), s = h.exports.useCallback((u) => {
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
function t7({ defaultProp: e, onChange: t }) {
  const n = h.exports.useState(e), [r] = n, o = h.exports.useRef(r), i = wo(t);
  return h.exports.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
const hg = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = h.exports.Children.toArray(n), i = o.find(r7);
  if (i) {
    const l = i.props.children, a = o.map((s) => s === i ? h.exports.Children.count(l) > 1 ? h.exports.Children.only(null) : /* @__PURE__ */ h.exports.isValidElement(l) ? l.props.children : null : s);
    return /* @__PURE__ */ h.exports.createElement(rh, pt({}, r, {
      ref: t
    }), /* @__PURE__ */ h.exports.isValidElement(l) ? /* @__PURE__ */ h.exports.cloneElement(l, void 0, a) : null);
  }
  return /* @__PURE__ */ h.exports.createElement(rh, pt({}, r, {
    ref: t
  }), n);
});
hg.displayName = "Slot";
const rh = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ h.exports.isValidElement(n) ? /* @__PURE__ */ h.exports.cloneElement(n, {
    ...o7(r, n.props),
    ref: Xk(t, n.ref)
  }) : h.exports.Children.count(n) > 1 ? h.exports.Children.only(null) : null;
});
rh.displayName = "SlotClone";
const n7 = ({ children: e }) => /* @__PURE__ */ h.exports.createElement(h.exports.Fragment, null, e);
function r7(e) {
  return /* @__PURE__ */ h.exports.isValidElement(e) && e.type === n7;
}
function o7(e, t) {
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
const i7 = [
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
], Vc = i7.reduce((e, t) => {
  const n = /* @__PURE__ */ h.exports.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, a = i ? hg : t;
    return h.exports.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ h.exports.createElement(a, pt({}, l, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function l7(e, t) {
  e && Yt.exports.flushSync(
    () => e.dispatchEvent(t)
  );
}
function a7(e) {
  const t = wo(e);
  h.exports.useEffect(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const oh = "dismissableLayer.update", s7 = "dismissableLayer.pointerDownOutside", u7 = "dismissableLayer.focusOutside";
let Fv;
const c7 = /* @__PURE__ */ h.exports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), f7 = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: l, onDismiss: a, ...s } = e, u = h.exports.useContext(c7), [c, f] = h.exports.useState(null), [, d] = h.exports.useState({}), g = Qa(
    t,
    (S) => f(S)
  ), m = Array.from(u.layers), [v] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = m.indexOf(v), p = c ? m.indexOf(c) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, x = p >= w, b = d7((S) => {
    const E = S.target, $ = [
      ...u.branches
    ].some(
      (P) => P.contains(E)
    );
    !x || $ || (o == null || o(S), l == null || l(S), S.defaultPrevented || a == null || a());
  }), A = p7((S) => {
    const E = S.target;
    [
      ...u.branches
    ].some(
      (P) => P.contains(E)
    ) || (i == null || i(S), l == null || l(S), S.defaultPrevented || a == null || a());
  });
  return a7((S) => {
    p === u.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && a && (S.preventDefault(), a()));
  }), h.exports.useEffect(() => {
    if (!!c)
      return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Fv = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), zv(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = Fv);
      };
  }, [
    c,
    n,
    u
  ]), h.exports.useEffect(() => () => {
    !c || (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), zv());
  }, [
    c,
    u
  ]), h.exports.useEffect(() => {
    const S = () => d({});
    return document.addEventListener(oh, S), () => document.removeEventListener(oh, S);
  }, []), /* @__PURE__ */ h.exports.createElement(Vc.div, pt({}, s, {
    ref: g,
    style: {
      pointerEvents: y ? x ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: yi(e.onFocusCapture, A.onFocusCapture),
    onBlurCapture: yi(e.onBlurCapture, A.onBlurCapture),
    onPointerDownCapture: yi(e.onPointerDownCapture, b.onPointerDownCapture)
  }));
});
function d7(e) {
  const t = wo(e), n = h.exports.useRef(!1), r = h.exports.useRef(() => {
  });
  return h.exports.useEffect(() => {
    const o = (l) => {
      if (l.target && !n.current) {
        let u = function() {
          Zk(s7, t, s, {
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
function p7(e) {
  const t = wo(e), n = h.exports.useRef(!1);
  return h.exports.useEffect(() => {
    const r = (o) => {
      o.target && !n.current && Zk(u7, t, {
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
function zv() {
  const e = new CustomEvent(oh);
  document.dispatchEvent(e);
}
function Zk(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? l7(o, i) : o.dispatchEvent(i);
}
const dd = "focusScope.autoFocusOnMount", pd = "focusScope.autoFocusOnUnmount", Bv = {
  bubbles: !1,
  cancelable: !0
}, h7 = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l } = e, [a, s] = h.exports.useState(null), u = wo(o), c = wo(i), f = h.exports.useRef(null), d = Qa(
    t,
    (v) => s(v)
  ), g = h.exports.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  h.exports.useEffect(() => {
    if (r) {
      let p = function(x) {
        if (g.paused || !a)
          return;
        const b = x.target;
        a.contains(b) ? f.current = b : Jr(f.current, {
          select: !0
        });
      }, y = function(x) {
        g.paused || !a || a.contains(x.relatedTarget) || Jr(f.current, {
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
  ]), h.exports.useEffect(() => {
    if (a) {
      Hv.add(g);
      const v = document.activeElement;
      if (!a.contains(v)) {
        const p = new CustomEvent(dd, Bv);
        a.addEventListener(dd, u), a.dispatchEvent(p), p.defaultPrevented || (m7(w7(Jk(a)), {
          select: !0
        }), document.activeElement === v && Jr(a));
      }
      return () => {
        a.removeEventListener(dd, u), setTimeout(() => {
          const p = new CustomEvent(pd, Bv);
          a.addEventListener(pd, c), a.dispatchEvent(p), p.defaultPrevented || Jr(v != null ? v : document.body, {
            select: !0
          }), a.removeEventListener(pd, c), Hv.remove(g);
        }, 0);
      };
    }
  }, [
    a,
    u,
    c,
    g
  ]);
  const m = h.exports.useCallback((v) => {
    if (!n && !r || g.paused)
      return;
    const w = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, p = document.activeElement;
    if (w && p) {
      const y = v.currentTarget, [x, b] = g7(y);
      x && b ? !v.shiftKey && p === b ? (v.preventDefault(), n && Jr(x, {
        select: !0
      })) : v.shiftKey && p === x && (v.preventDefault(), n && Jr(b, {
        select: !0
      })) : p === y && v.preventDefault();
    }
  }, [
    n,
    r,
    g.paused
  ]);
  return /* @__PURE__ */ h.exports.createElement(Vc.div, pt({
    tabIndex: -1
  }, l, {
    ref: d,
    onKeyDown: m
  }));
});
function m7(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Jr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function g7(e) {
  const t = Jk(e), n = jv(t, e), r = jv(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Jk(e) {
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
function jv(e, t) {
  for (const n of e)
    if (!v7(n, {
      upTo: t
    }))
      return n;
}
function v7(e, { upTo: t }) {
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
function y7(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Jr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && y7(e) && t && e.select();
  }
}
const Hv = x7();
function x7() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Vv(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Vv(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Vv(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function w7(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const b7 = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ db.createPortal(/* @__PURE__ */ h.exports.createElement(Vc.div, pt({}, o, {
    ref: t
  })), r) : null;
});
function S7(e, t) {
  return h.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const Uc = (e) => {
  const { present: t, children: n } = e, r = k7(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : h.exports.Children.only(n), i = Qa(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ h.exports.cloneElement(o, {
    ref: i
  }) : null;
};
Uc.displayName = "Presence";
function k7(e) {
  const [t, n] = h.exports.useState(), r = h.exports.useRef({}), o = h.exports.useRef(e), i = h.exports.useRef("none"), l = e ? "mounted" : "unmounted", [a, s] = S7(l, {
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
  return h.exports.useEffect(() => {
    const u = Rs(r.current);
    i.current = a === "mounted" ? u : "none";
  }, [
    a
  ]), nh(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const d = i.current, g = Rs(u);
      e ? s("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? s("UNMOUNT") : s(c && d !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    s
  ]), nh(() => {
    if (t) {
      const u = (f) => {
        const g = Rs(r.current).includes(f.animationName);
        f.target === t && g && Yt.exports.flushSync(
          () => s("ANIMATION_END")
        );
      }, c = (f) => {
        f.target === t && (i.current = Rs(r.current));
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
    ref: h.exports.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function Rs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let hd = 0;
function C7() {
  h.exports.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Uv()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Uv()), hd++, () => {
      hd === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), hd--;
    };
  }, []);
}
function Uv() {
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
function eC(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function $7(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var ou = "right-scroll-bar-position", iu = "width-before-scroll-bar", E7 = "with-scroll-bars-hidden", A7 = "--removed-body-scroll-bar-size";
function P7(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function _7(e, t) {
  var n = h.exports.useState(function() {
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
function R7(e, t) {
  return _7(t || null, function(n) {
    return e.forEach(function(r) {
      return P7(r, n);
    });
  });
}
function T7(e) {
  return e;
}
function I7(e, t) {
  t === void 0 && (t = T7);
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
function O7(e) {
  e === void 0 && (e = {});
  var t = I7(null);
  return t.options = kn({ async: !0, ssr: !1 }, e), t;
}
var tC = function(e) {
  var t = e.sideCar, n = eC(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return /* @__PURE__ */ D(r, {
    ...kn({}, n)
  });
};
tC.isSideCarExport = !0;
function M7(e, t) {
  return e.useMedium(t), tC;
}
var nC = O7(), md = function() {
}, Wc = h.exports.forwardRef(function(e, t) {
  var n = h.exports.useRef(null), r = h.exports.useState({
    onScrollCapture: md,
    onWheelCapture: md,
    onTouchMoveCapture: md
  }), o = r[0], i = r[1], l = e.forwardProps, a = e.children, s = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, g = e.noIsolation, m = e.inert, v = e.allowPinchZoom, w = e.as, p = w === void 0 ? "div" : w, y = eC(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = d, b = R7([n, t]), A = kn(kn({}, y), o);
  return /* @__PURE__ */ se(Ct, {
    children: [c && /* @__PURE__ */ D(x, {
      sideCar: nC,
      removeScrollBar: u,
      shards: f,
      noIsolation: g,
      inert: m,
      setCallbacks: i,
      allowPinchZoom: !!v,
      lockRef: n
    }), l ? h.exports.cloneElement(h.exports.Children.only(a), kn(kn({}, A), {
      ref: b
    })) : /* @__PURE__ */ D(p, {
      ...kn({}, A, {
        className: s,
        ref: b
      }),
      children: a
    })]
  });
});
Wc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Wc.classNames = {
  fullWidth: iu,
  zeroRight: ou
};
var N7 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function D7() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = N7();
  return t && e.setAttribute("nonce", t), e;
}
function L7(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function F7(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var z7 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = D7()) && (L7(t, n), F7(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, B7 = function() {
  var e = z7();
  return function(t, n) {
    h.exports.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, rC = function() {
  var e = B7(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, j7 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, gd = function(e) {
  return parseInt(e || "", 10) || 0;
}, H7 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [gd(n), gd(r), gd(o)];
}, V7 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return j7;
  var t = H7(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, U7 = rC(), W7 = function(e, t, n, r) {
  var o = e.left, i = e.top, l = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(E7, ` {
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
  
  .`).concat(ou, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(iu, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(ou, " .").concat(ou, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(iu, " .").concat(iu, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(A7, ": ").concat(a, `px;
  }
`);
}, q7 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = h.exports.useMemo(function() {
    return V7(o);
  }, [o]);
  return /* @__PURE__ */ D(U7, {
    styles: W7(i, !t, o, n ? "" : "!important")
  });
}, ih = !1;
if (typeof window < "u")
  try {
    var Ts = Object.defineProperty({}, "passive", {
      get: function() {
        return ih = !0, !0;
      }
    });
    window.addEventListener("test", Ts, Ts), window.removeEventListener("test", Ts, Ts);
  } catch {
    ih = !1;
  }
var Lo = ih ? { passive: !1 } : !1, G7 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, Q7 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, Wv = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = oC(e, n);
    if (r) {
      var o = iC(e, n), i = o[1], l = o[2];
      if (i > l)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, K7 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Y7 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, oC = function(e, t) {
  return e === "v" ? G7(t) : Q7(t);
}, iC = function(e, t) {
  return e === "v" ? K7(t) : Y7(t);
}, X7 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Z7 = function(e, t, n, r, o) {
  var i = X7(e, window.getComputedStyle(t).direction), l = i * r, a = n.target, s = t.contains(a), u = !1, c = l > 0, f = 0, d = 0;
  do {
    var g = iC(e, a), m = g[0], v = g[1], w = g[2], p = v - w - i * m;
    (m || p) && oC(e, a) && (f += p, d += m), a = a.parentNode;
  } while (!s && a !== document.body || s && (t.contains(a) || t === a));
  return (c && (o && f === 0 || !o && l > f) || !c && (o && d === 0 || !o && -l > d)) && (u = !0), u;
}, Is = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, qv = function(e) {
  return [e.deltaX, e.deltaY];
}, Gv = function(e) {
  return e && "current" in e ? e.current : e;
}, J7 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, e8 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, t8 = 0, Fo = [];
function n8(e) {
  var t = h.exports.useRef([]), n = h.exports.useRef([0, 0]), r = h.exports.useRef(), o = h.exports.useState(t8++)[0], i = h.exports.useState(function() {
    return rC();
  })[0], l = h.exports.useRef(e);
  h.exports.useEffect(function() {
    l.current = e;
  }, [e]), h.exports.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = $7([e.lockRef.current], (e.shards || []).map(Gv), !0).filter(Boolean);
      return v.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = h.exports.useCallback(function(v, w) {
    if ("touches" in v && v.touches.length === 2)
      return !l.current.allowPinchZoom;
    var p = Is(v), y = n.current, x = "deltaX" in v ? v.deltaX : y[0] - p[0], b = "deltaY" in v ? v.deltaY : y[1] - p[1], A, S = v.target, E = Math.abs(x) > Math.abs(b) ? "h" : "v";
    if ("touches" in v && E === "h" && S.type === "range")
      return !1;
    var $ = Wv(E, S);
    if (!$)
      return !0;
    if ($ ? A = E : (A = E === "v" ? "h" : "v", $ = Wv(E, S)), !$)
      return !1;
    if (!r.current && "changedTouches" in v && (x || b) && (r.current = A), !A)
      return !0;
    var P = r.current || A;
    return Z7(P, w, v, P === "h" ? x : b, !0);
  }, []), s = h.exports.useCallback(function(v) {
    var w = v;
    if (!(!Fo.length || Fo[Fo.length - 1] !== i)) {
      var p = "deltaY" in w ? qv(w) : Is(w), y = t.current.filter(function(A) {
        return A.name === w.type && A.target === w.target && J7(A.delta, p);
      })[0];
      if (y && y.should) {
        w.preventDefault();
        return;
      }
      if (!y) {
        var x = (l.current.shards || []).map(Gv).filter(Boolean).filter(function(A) {
          return A.contains(w.target);
        }), b = x.length > 0 ? a(w, x[0]) : !l.current.noIsolation;
        b && w.preventDefault();
      }
    }
  }, []), u = h.exports.useCallback(function(v, w, p, y) {
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
  }, []), c = h.exports.useCallback(function(v) {
    n.current = Is(v), r.current = void 0;
  }, []), f = h.exports.useCallback(function(v) {
    u(v.type, qv(v), v.target, a(v, e.lockRef.current));
  }, []), d = h.exports.useCallback(function(v) {
    u(v.type, Is(v), v.target, a(v, e.lockRef.current));
  }, []);
  h.exports.useEffect(function() {
    return Fo.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", s, Lo), document.addEventListener("touchmove", s, Lo), document.addEventListener("touchstart", c, Lo), function() {
      Fo = Fo.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", s, Lo), document.removeEventListener("touchmove", s, Lo), document.removeEventListener("touchstart", c, Lo);
    };
  }, []);
  var g = e.removeScrollBar, m = e.inert;
  return /* @__PURE__ */ se(Ct, {
    children: [m ? /* @__PURE__ */ D(i, {
      styles: e8(o)
    }) : null, g ? /* @__PURE__ */ D(q7, {
      gapMode: "margin"
    }) : null]
  });
}
const r8 = M7(nC, n8);
var lC = h.exports.forwardRef(function(e, t) {
  return /* @__PURE__ */ D(Wc, {
    ...kn({}, e, {
      ref: t,
      sideCar: r8
    })
  });
});
lC.classNames = Wc.classNames;
const o8 = lC;
var i8 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, zo = /* @__PURE__ */ new WeakMap(), Os = /* @__PURE__ */ new WeakMap(), Ms = {}, vd = 0, l8 = function(e, t, n) {
  t === void 0 && (t = i8(e)), n === void 0 && (n = "data-aria-hidden");
  var r = Array.isArray(e) ? e : [e];
  Ms[n] || (Ms[n] = /* @__PURE__ */ new WeakMap());
  var o = Ms[n], i = [], l = /* @__PURE__ */ new Set(), a = function(u) {
    !u || l.has(u) || (l.add(u), a(u.parentNode));
  };
  r.forEach(a);
  var s = function(u) {
    !u || r.indexOf(u) >= 0 || Array.prototype.forEach.call(u.children, function(c) {
      if (l.has(c))
        s(c);
      else {
        var f = c.getAttribute("aria-hidden"), d = f !== null && f !== "false", g = (zo.get(c) || 0) + 1, m = (o.get(c) || 0) + 1;
        zo.set(c, g), o.set(c, m), i.push(c), g === 1 && d && Os.set(c, !0), m === 1 && c.setAttribute(n, "true"), d || c.setAttribute("aria-hidden", "true");
      }
    });
  };
  return s(t), l.clear(), vd++, function() {
    i.forEach(function(u) {
      var c = zo.get(u) - 1, f = o.get(u) - 1;
      zo.set(u, c), o.set(u, f), c || (Os.has(u) || u.removeAttribute("aria-hidden"), Os.delete(u)), f || u.removeAttribute(n);
    }), vd--, vd || (zo = /* @__PURE__ */ new WeakMap(), zo = /* @__PURE__ */ new WeakMap(), Os = /* @__PURE__ */ new WeakMap(), Ms = {});
  };
};
const aC = "Dialog", [sC, Tz] = YO(aC), [a8, Po] = sC(aC), s8 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !0 } = e, a = h.exports.useRef(null), s = h.exports.useRef(null), [u = !1, c] = e7({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ h.exports.createElement(a8, {
    scope: t,
    triggerRef: a,
    contentRef: s,
    contentId: fd(),
    titleId: fd(),
    descriptionId: fd(),
    open: u,
    onOpenChange: c,
    onOpenToggle: h.exports.useCallback(
      () => c(
        (f) => !f
      ),
      [
        c
      ]
    ),
    modal: l
  }, n);
}, uC = "DialogPortal", [u8, cC] = sC(uC, {
  forceMount: void 0
}), c8 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Po(uC, t);
  return /* @__PURE__ */ h.exports.createElement(u8, {
    scope: t,
    forceMount: n
  }, h.exports.Children.map(
    r,
    (l) => /* @__PURE__ */ h.exports.createElement(Uc, {
      present: n || i.open
    }, /* @__PURE__ */ h.exports.createElement(b7, {
      asChild: !0,
      container: o
    }, l))
  ));
}, lh = "DialogOverlay", f8 = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const n = cC(lh, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Po(lh, e.__scopeDialog);
  return i.modal ? /* @__PURE__ */ h.exports.createElement(Uc, {
    present: r || i.open
  }, /* @__PURE__ */ h.exports.createElement(d8, pt({}, o, {
    ref: t
  }))) : null;
}), d8 = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Po(lh, n);
  return /* @__PURE__ */ h.exports.createElement(o8, {
    as: hg,
    allowPinchZoom: !0,
    shards: [
      o.contentRef
    ]
  }, /* @__PURE__ */ h.exports.createElement(Vc.div, pt({
    "data-state": dC(o.open)
  }, r, {
    ref: t,
    style: {
      pointerEvents: "auto",
      ...r.style
    }
  })));
}), Sa = "DialogContent", p8 = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const n = cC(Sa, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Po(Sa, e.__scopeDialog);
  return /* @__PURE__ */ h.exports.createElement(Uc, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ h.exports.createElement(h8, pt({}, o, {
    ref: t
  })) : /* @__PURE__ */ h.exports.createElement(m8, pt({}, o, {
    ref: t
  })));
}), h8 = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const n = Po(Sa, e.__scopeDialog), r = h.exports.useRef(null), o = Qa(t, n.contentRef, r);
  return h.exports.useEffect(() => {
    const i = r.current;
    if (i)
      return l8(i);
  }, []), /* @__PURE__ */ h.exports.createElement(fC, pt({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: yi(e.onCloseAutoFocus, (i) => {
      var l;
      i.preventDefault(), (l = n.triggerRef.current) === null || l === void 0 || l.focus();
    }),
    onPointerDownOutside: yi(e.onPointerDownOutside, (i) => {
      const l = i.detail.originalEvent, a = l.button === 0 && l.ctrlKey === !0;
      (l.button === 2 || a) && i.preventDefault();
    }),
    onFocusOutside: yi(
      e.onFocusOutside,
      (i) => i.preventDefault()
    )
  }));
}), m8 = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const n = Po(Sa, e.__scopeDialog), r = h.exports.useRef(!1);
  return /* @__PURE__ */ h.exports.createElement(fC, pt({}, e, {
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
}), fC = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, a = Po(Sa, n), s = h.exports.useRef(null), u = Qa(t, s);
  return C7(), /* @__PURE__ */ h.exports.createElement(h.exports.Fragment, null, /* @__PURE__ */ h.exports.createElement(h7, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ h.exports.createElement(f7, pt({
    role: "dialog",
    id: a.contentId,
    "aria-describedby": a.descriptionId,
    "aria-labelledby": a.titleId,
    "data-state": dC(a.open)
  }, l, {
    ref: u,
    onDismiss: () => a.onOpenChange(!1)
  }))), !1);
});
function dC(e) {
  return e ? "open" : "closed";
}
const g8 = s8, v8 = c8, y8 = f8, x8 = p8;
var Qv = 1, w8 = 0.9, b8 = 0.3, yd = 0.1, S8 = 0, xd = 0.999, k8 = 0.9999, C8 = 0.99, Kv = /[\\\/\-_+.# \t"@\[\(\{&]/, $8 = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function ah(e, t, n, r, o, i) {
  if (i === t.length)
    return o === e.length ? Qv : C8;
  for (var l = r.charAt(i), a = n.indexOf(l, o), s = 0, u, c, f; a >= 0; )
    u = ah(e, t, n, r, a + 1, i + 1), u > s && (a === o ? u *= Qv : Kv.test(e.charAt(a - 1)) ? (u *= w8, f = e.slice(o, a - 1).match($8), f && o > 0 && (u *= Math.pow(xd, f.length))) : Kv.test(e.slice(o, a - 1)) ? (u *= S8, o > 0 && (u *= Math.pow(xd, a - o))) : (u *= b8, o > 0 && (u *= Math.pow(xd, a - o))), e.charAt(a) !== t.charAt(i) && (u *= k8)), u < yd && n.charAt(a - 1) === r.charAt(i + 1) && n.charAt(a - 1) !== r.charAt(i) && (c = ah(e, t, n, r, a + 1, i + 2), c * yd > u && (u = c * yd)), u > s && (s = u), a = n.indexOf(l, a + 1);
  return s;
}
function E8(e, t) {
  return ah(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var A8 = E8, P8 = '[cmdk-list-sizer=""]', ul = '[cmdk-group=""]', wd = '[cmdk-group-items=""]', _8 = '[cmdk-group-heading=""]', mg = '[cmdk-item=""]', Yv = `${mg}:not([aria-disabled="true"])`, sh = "cmdk-item-select", Fn = "data-value", R8 = (e, t) => A8(e, t), pC = h.exports.createContext(void 0), Ka = () => h.exports.useContext(pC), hC = h.exports.createContext(void 0), gg = () => h.exports.useContext(hC), mC = h.exports.createContext(void 0), gC = h.exports.forwardRef((e, t) => {
  let n = h.exports.useRef(null), r = Uo(() => {
    var I;
    return { search: "", value: (I = e.value) != null ? I : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), o = Uo(() => /* @__PURE__ */ new Set()), i = Uo(() => /* @__PURE__ */ new Map()), l = Uo(() => /* @__PURE__ */ new Map()), a = Uo(() => /* @__PURE__ */ new Set()), s = vC(e), { label: u, children: c, value: f, onValueChange: d, filter: g, shouldFilter: m, ...v } = e, w = h.exports.useId(), p = h.exports.useId(), y = h.exports.useId(), x = j8();
  Vi(() => {
    if (f !== void 0) {
      let I = f.trim().toLowerCase();
      r.current.value = I, x(6, _), b.emit();
    }
  }, [f]);
  let b = h.exports.useMemo(() => ({ subscribe: (I) => (a.current.add(I), () => a.current.delete(I)), snapshot: () => r.current, setState: (I, O, k) => {
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
          k || x(5, _);
      b.emit();
    }
  }, emit: () => {
    a.current.forEach((I) => I());
  } }), []), A = h.exports.useMemo(() => ({ value: (I, O) => {
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
    let k = (C = (O = s.current) == null ? void 0 : O.filter) != null ? C : R8;
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
    let k = n.current.querySelector(P8);
    M().sort((C, J) => {
      var ee, G;
      let ne = C.getAttribute(Fn), ae = J.getAttribute(Fn);
      return ((ee = I.get(ae)) != null ? ee : 0) - ((G = I.get(ne)) != null ? G : 0);
    }).forEach((C) => {
      let J = C.closest(wd);
      J ? J.appendChild(C.parentElement === J ? C : C.closest(`${wd} > *`)) : k.appendChild(C.parentElement === k ? C : C.closest(`${wd} > *`));
    }), O.sort((C, J) => J[1] - C[1]).forEach((C) => {
      let J = n.current.querySelector(`${ul}[${Fn}="${C[0]}"]`);
      J == null || J.parentElement.appendChild(J);
    });
  }
  function $() {
    let I = M().find((k) => !k.ariaDisabled), O = I == null ? void 0 : I.getAttribute(Fn);
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
  function _() {
    var I, O, k;
    let C = T();
    C && (((I = C.parentElement) == null ? void 0 : I.firstChild) === C && ((k = (O = C.closest(ul)) == null ? void 0 : O.querySelector(_8)) == null || k.scrollIntoView({ block: "nearest" })), C.scrollIntoView({ block: "nearest" }));
  }
  function T() {
    var I;
    return (I = n.current) == null ? void 0 : I.querySelector(`${mg}[aria-selected="true"]`);
  }
  function M() {
    return Array.from(n.current.querySelectorAll(Yv));
  }
  function L(I) {
    let O = M()[I];
    O && b.setState("value", O.getAttribute(Fn));
  }
  function B(I) {
    var O;
    let k = T(), C = M(), J = C.findIndex((ae) => ae === k), ne = C[J + I];
    (O = s.current) != null && O.loop && (ne = J + I < 0 ? C[C.length - 1] : J + I === C.length ? C[0] : C[J + I]), ne && b.setState("value", ne.getAttribute(Fn));
  }
  function z(I) {
    let O = T(), k = O == null ? void 0 : O.closest(ul), C;
    for (; k && !C; )
      k = I > 0 ? z8(k, ul) : B8(k, ul), C = k == null ? void 0 : k.querySelector(Yv);
    C ? b.setState("value", C.getAttribute(Fn)) : B(I);
  }
  let R = () => L(M().length - 1), H = (I) => {
    I.preventDefault(), I.metaKey ? R() : I.altKey ? z(1) : B(1);
  }, N = (I) => {
    I.preventDefault(), I.metaKey ? L(0) : I.altKey ? z(-1) : B(-1);
  };
  return h.exports.createElement("div", { ref: Ya([n, t]), ...v, "cmdk-root": "", onKeyDown: (I) => {
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
          I.ctrlKey && N(I);
          break;
        }
        case "ArrowUp": {
          N(I);
          break;
        }
        case "Home": {
          I.preventDefault(), L(0);
          break;
        }
        case "End": {
          I.preventDefault(), R();
          break;
        }
        case "Enter": {
          I.preventDefault();
          let k = T();
          if (k) {
            let C = new Event(sh);
            k.dispatchEvent(C);
          }
        }
      }
  } }, h.exports.createElement("label", { "cmdk-label": "", htmlFor: A.inputId, id: A.labelId, style: H8 }, u), h.exports.createElement(hC.Provider, { value: b }, h.exports.createElement(pC.Provider, { value: A }, c)));
}), T8 = h.exports.forwardRef((e, t) => {
  let n = h.exports.useId(), r = h.exports.useRef(null), o = h.exports.useContext(mC), i = Ka(), l = vC(e);
  Vi(() => i.item(n, o), []);
  let a = yC(n, r, [e.value, e.children, r]), s = gg(), u = bo((p) => p.value && p.value === a.current), c = bo((p) => e.forceMount || i.filter() === !1 ? !0 : p.search ? p.filtered.items.get(n) > 0 : !0);
  h.exports.useEffect(() => {
    let p = r.current;
    if (!(!p || e.disabled))
      return p.addEventListener(sh, f), () => p.removeEventListener(sh, f);
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
  let { disabled: g, value: m, onSelect: v, ...w } = e;
  return h.exports.createElement("div", { ref: Ya([r, t]), ...w, id: n, "cmdk-item": "", role: "option", "aria-disabled": g || void 0, "aria-selected": u || void 0, "data-disabled": g || void 0, "data-selected": u || void 0, onPointerMove: g ? void 0 : d, onClick: g ? void 0 : f }, e.children);
}), I8 = h.exports.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, i = h.exports.useId(), l = h.exports.useRef(null), a = h.exports.useRef(null), s = h.exports.useId(), u = Ka(), c = bo((d) => e.forceMount || u.filter() === !1 ? !0 : d.search ? d.filtered.groups.has(i) : !0);
  Vi(() => u.group(i), []), yC(i, l, [e.value, e.heading, a]);
  let f = h.exports.createElement(mC.Provider, { value: i }, r);
  return h.exports.createElement("div", { ref: Ya([l, t]), ...o, "cmdk-group": "", role: "presentation", hidden: c ? void 0 : !0 }, n && h.exports.createElement("div", { ref: a, "cmdk-group-heading": "", "aria-hidden": !0, id: s }, n), h.exports.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? s : void 0 }, f));
}), O8 = h.exports.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = h.exports.useRef(null), i = bo((l) => !l.search);
  return !n && !i ? null : h.exports.createElement("div", { ref: Ya([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), M8 = h.exports.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, i = gg(), l = bo((c) => c.search), a = bo((c) => c.value), s = Ka(), u = h.exports.useMemo(() => {
    var c;
    let f = (c = s.commandRef.current) == null ? void 0 : c.querySelector(`${mg}[${Fn}="${a}"]`);
    return f == null ? void 0 : f.getAttribute("id");
  }, [a, s.commandRef]);
  return h.exports.useEffect(() => {
    e.value != null && i.setState("search", e.value);
  }, [e.value]), h.exports.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": s.listId, "aria-labelledby": s.labelId, "aria-activedescendant": u, id: s.inputId, type: "text", value: o ? e.value : l, onChange: (c) => {
    o || i.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), N8 = h.exports.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = h.exports.useRef(null), i = h.exports.useRef(null), l = Ka();
  return h.exports.useEffect(() => {
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
  }, []), h.exports.createElement("div", { ref: Ya([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: l.listId, "aria-labelledby": l.inputId }, h.exports.createElement("div", { ref: i, "cmdk-list-sizer": "" }, n));
}), D8 = h.exports.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: i, container: l, ...a } = e;
  return h.exports.createElement(g8, { open: n, onOpenChange: r }, h.exports.createElement(v8, { container: l }, h.exports.createElement(y8, { "cmdk-overlay": "", className: o }), h.exports.createElement(x8, { "aria-label": e.label, "cmdk-dialog": "", className: i }, h.exports.createElement(gC, { ref: t, ...a }))));
}), L8 = h.exports.forwardRef((e, t) => {
  let n = h.exports.useRef(!0), r = bo((o) => o.filtered.count === 0);
  return h.exports.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : h.exports.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), F8 = h.exports.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return h.exports.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, h.exports.createElement("div", { "aria-hidden": !0 }, r));
}), _t = Object.assign(gC, { List: N8, Item: T8, Input: M8, Group: I8, Separator: O8, Dialog: D8, Empty: L8, Loading: F8 });
function z8(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function B8(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function vC(e) {
  let t = h.exports.useRef(e);
  return Vi(() => {
    t.current = e;
  }), t;
}
var Vi = typeof window > "u" ? h.exports.useEffect : h.exports.useLayoutEffect;
function Uo(e) {
  let t = h.exports.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Ya(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function bo(e) {
  let t = gg(), n = () => e(t.snapshot());
  return h.exports.useSyncExternalStore(t.subscribe, n, n);
}
function yC(e, t, n) {
  let r = h.exports.useRef(), o = Ka();
  return Vi(() => {
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
    o.value(e, l), (i = t.current) == null || i.setAttribute(Fn, l), r.current = l;
  }), r;
}
var j8 = () => {
  let [e, t] = h.exports.useState(), n = Uo(() => /* @__PURE__ */ new Map());
  return Vi(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, H8 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
let vg = Za();
const oe = (e) => Xa(e, vg);
let yg = Za();
oe.write = (e) => Xa(e, yg);
let qc = Za();
oe.onStart = (e) => Xa(e, qc);
let xg = Za();
oe.onFrame = (e) => Xa(e, xg);
let wg = Za();
oe.onFinish = (e) => Xa(e, wg);
let xi = [];
oe.setTimeout = (e, t) => {
  let n = oe.now() + t, r = () => {
    let i = xi.findIndex((l) => l.cancel == r);
    ~i && xi.splice(i, 1), Sr -= ~i ? 1 : 0;
  }, o = {
    time: n,
    handler: e,
    cancel: r
  };
  return xi.splice(xC(n), 0, o), Sr += 1, wC(), o;
};
let xC = (e) => ~(~xi.findIndex((t) => t.time > e) || ~xi.length);
oe.cancel = (e) => {
  qc.delete(e), xg.delete(e), vg.delete(e), yg.delete(e), wg.delete(e);
};
oe.sync = (e) => {
  uh = !0, oe.batchedUpdates(e), uh = !1;
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
    qc.delete(n), t = null;
  }, r;
};
let bg = typeof window < "u" ? window.requestAnimationFrame : () => {
};
oe.use = (e) => bg = e;
oe.now = typeof performance < "u" ? () => performance.now() : Date.now;
oe.batchedUpdates = (e) => e();
oe.catch = console.error;
oe.frameLoop = "always";
oe.advance = () => {
  oe.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : SC();
};
let br = -1, Sr = 0, uh = !1;
function Xa(e, t) {
  uh ? (t.delete(e), e(0)) : (t.add(e), wC());
}
function wC() {
  br < 0 && (br = 0, oe.frameLoop !== "demand" && bg(bC));
}
function V8() {
  br = -1;
}
function bC() {
  ~br && (bg(bC), oe.batchedUpdates(SC));
}
function SC() {
  let e = br;
  br = oe.now();
  let t = xC(br);
  t && (kC(xi.splice(0, t), (n) => n.handler()), Sr -= t), qc.flush(), vg.flush(e ? Math.min(64, br - e) : 16.667), xg.flush(), yg.flush(), wg.flush(), Sr || V8();
}
function Za() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return {
    add(n) {
      Sr += t == e && !e.has(n) ? 1 : 0, e.add(n);
    },
    delete(n) {
      return Sr -= t == e && e.has(n) ? 1 : 0, e.delete(n);
    },
    flush(n) {
      t.size && (e = /* @__PURE__ */ new Set(), Sr -= t.size, kC(t, (r) => r(n) && e.add(r)), Sr += e.size, t = e);
    }
  };
}
function kC(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      oe.catch(r);
    }
  });
}
function ch() {
}
const U8 = (e, t, n) => Object.defineProperty(e, t, {
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
function zn(e, t) {
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
function _n(e, t, n) {
  if (W.arr(e)) {
    for (let r = 0; r < e.length; r++)
      t.call(n, e[r], `${r}`);
    return;
  }
  for (const r in e)
    e.hasOwnProperty(r) && t.call(n, e[r], r);
}
const Rt = (e) => W.und(e) ? [] : W.arr(e) ? e : [e];
function jl(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), he(n, t);
  }
}
const Sl = (e, ...t) => jl(e, (n) => n(...t)), CC = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
let Sg, $C, Or = null, EC = !1, kg = ch;
const W8 = (e) => {
  e.to && ($C = e.to), e.now && (oe.now = e.now), e.colors !== void 0 && (Or = e.colors), e.skipAnimation != null && (EC = e.skipAnimation), e.createStringInterpolator && (Sg = e.createStringInterpolator), e.requestAnimationFrame && oe.use(e.requestAnimationFrame), e.batchedUpdates && (oe.batchedUpdates = e.batchedUpdates), e.willAdvance && (kg = e.willAdvance), e.frameLoop && (oe.frameLoop = e.frameLoop);
};
var Rn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get createStringInterpolator() {
    return Sg;
  },
  get to() {
    return $C;
  },
  get colors() {
    return Or;
  },
  get skipAnimation() {
    return EC;
  },
  get willAdvance() {
    return kg;
  },
  assign: W8
});
const Hl = /* @__PURE__ */ new Set();
let Wt = [], bd = [], Yu = 0;
const Gc = {
  get idle() {
    return !Hl.size && !Wt.length;
  },
  start(e) {
    Yu > e.priority ? (Hl.add(e), oe.onStart(q8)) : (AC(e), oe(fh));
  },
  advance: fh,
  sort(e) {
    if (Yu)
      oe.onFrame(() => Gc.sort(e));
    else {
      const t = Wt.indexOf(e);
      ~t && (Wt.splice(t, 1), PC(e));
    }
  },
  clear() {
    Wt = [], Hl.clear();
  }
};
function q8() {
  Hl.forEach(AC), Hl.clear(), oe(fh);
}
function AC(e) {
  Wt.includes(e) || PC(e);
}
function PC(e) {
  Wt.splice(G8(Wt, (t) => t.priority > e.priority), 0, e);
}
function fh(e) {
  const t = bd;
  for (let n = 0; n < Wt.length; n++) {
    const r = Wt[n];
    Yu = r.priority, r.idle || (kg(r), r.advance(e), r.idle || t.push(r));
  }
  return Yu = 0, bd = Wt, bd.length = 0, Wt = t, Wt.length > 0;
}
function G8(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
const Q8 = {
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
}, cn = "[-+]?\\d*\\.?\\d+", Xu = cn + "%";
function Qc(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const K8 = new RegExp("rgb" + Qc(cn, cn, cn)), Y8 = new RegExp("rgba" + Qc(cn, cn, cn, cn)), X8 = new RegExp("hsl" + Qc(cn, Xu, Xu)), Z8 = new RegExp("hsla" + Qc(cn, Xu, Xu, cn)), J8 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, e9 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, t9 = /^#([0-9a-fA-F]{6})$/, n9 = /^#([0-9a-fA-F]{8})$/;
function r9(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = t9.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Or && Or[e] !== void 0 ? Or[e] : (t = K8.exec(e)) ? (Bo(t[1]) << 24 | Bo(t[2]) << 16 | Bo(t[3]) << 8 | 255) >>> 0 : (t = Y8.exec(e)) ? (Bo(t[1]) << 24 | Bo(t[2]) << 16 | Bo(t[3]) << 8 | Jv(t[4])) >>> 0 : (t = J8.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = n9.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = e9.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = X8.exec(e)) ? (Xv(Zv(t[1]), Ns(t[2]), Ns(t[3])) | 255) >>> 0 : (t = Z8.exec(e)) ? (Xv(Zv(t[1]), Ns(t[2]), Ns(t[3])) | Jv(t[4])) >>> 0 : null;
}
function Sd(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Xv(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, i = Sd(o, r, e + 1 / 3), l = Sd(o, r, e), a = Sd(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(l * 255) << 16 | Math.round(a * 255) << 8;
}
function Bo(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Zv(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Jv(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Ns(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function ey(e) {
  let t = r9(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, o = (t & 65280) >>> 8, i = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${o}, ${i})`;
}
const ka = (e, t, n) => {
  if (W.fun(e))
    return e;
  if (W.arr(e))
    return ka({
      range: e,
      output: t,
      extrapolate: n
    });
  if (W.str(e.output[0]))
    return Sg(e);
  const r = e, o = r.output, i = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", a = r.extrapolateRight || r.extrapolate || "extend", s = r.easing || ((u) => u);
  return (u) => {
    const c = i9(u, i);
    return o9(u, i[c], i[c + 1], o[c], o[c + 1], s, l, a, r.map);
  };
};
function o9(e, t, n, r, o, i, l, a, s) {
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
function i9(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
function dh() {
  return dh = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, dh.apply(this, arguments);
}
const Ii = Symbol.for("FluidValue.get"), So = Symbol.for("FluidValue.observers"), Ht = (e) => Boolean(e && e[Ii]), yt = (e) => e && e[Ii] ? e[Ii]() : e, ty = (e) => e[So] || null;
function l9(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function Ca(e, t) {
  let n = e[So];
  n && n.forEach((r) => {
    l9(r, t);
  });
}
class _C {
  constructor(t) {
    if (this[Ii] = void 0, this[So] = void 0, !t && !(t = this.get))
      throw Error("Unknown getter");
    a9(this, t);
  }
}
const a9 = (e, t) => RC(e, Ii, t);
function Ui(e, t) {
  if (e[Ii]) {
    let n = e[So];
    n || RC(e, So, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function $a(e, t) {
  let n = e[So];
  if (n && n.has(t)) {
    const r = n.size - 1;
    r ? n.delete(t) : e[So] = null, e.observerRemoved && e.observerRemoved(r, t);
  }
}
const RC = (e, t, n) => Object.defineProperty(e, t, {
  value: n,
  writable: !0,
  configurable: !0
}), lu = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, s9 = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, ny = new RegExp(`(${lu.source})(%|[a-z]+)`, "i"), u9 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Kc = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, TC = (e) => {
  const [t, n] = c9(e);
  if (!t || CC())
    return e;
  const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  if (r)
    return r.trim();
  if (n && n.startsWith("--")) {
    const o = window.getComputedStyle(document.documentElement).getPropertyValue(n);
    return o || e;
  } else {
    if (n && Kc.test(n))
      return TC(n);
    if (n)
      return n;
  }
  return e;
}, c9 = (e) => {
  const t = Kc.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
};
let kd;
const f9 = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`, IC = (e) => {
  kd || (kd = Or ? new RegExp(`(${Object.keys(Or).join("|")})(?!\\w)`, "g") : /^\b$/);
  const t = e.output.map((i) => yt(i).replace(Kc, TC).replace(s9, ey).replace(kd, ey)), n = t.map((i) => i.match(lu).map(Number)), o = n[0].map((i, l) => n.map((a) => {
    if (!(l in a))
      throw Error('The arity of each "output" value must be equal');
    return a[l];
  })).map((i) => ka(dh({}, e, {
    output: i
  })));
  return (i) => {
    var l;
    const a = !ny.test(t[0]) && ((l = t.find((u) => ny.test(u))) == null ? void 0 : l.replace(lu, ""));
    let s = 0;
    return t[0].replace(lu, () => `${o[s++](i)}${a || ""}`).replace(u9, f9);
  };
}, Cg = "react-spring: ", OC = (e) => {
  const t = e;
  let n = !1;
  if (typeof t != "function")
    throw new TypeError(`${Cg}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, d9 = OC(console.warn);
function p9() {
  d9(`${Cg}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
const h9 = OC(console.warn);
function m9() {
  h9(`${Cg}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function Yc(e) {
  return W.str(e) && (e[0] == "#" || /\d/.test(e) || !CC() && Kc.test(e) || e in (Or || {}));
}
const $g = typeof window < "u" && window.document && window.document.createElement ? h.exports.useLayoutEffect : h.exports.useEffect, g9 = () => {
  const e = h.exports.useRef(!1);
  return $g(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function MC() {
  const e = h.exports.useState()[1], t = g9();
  return () => {
    t.current && e(Math.random());
  };
}
function v9(e, t) {
  const [n] = h.exports.useState(() => ({
    inputs: t,
    result: e()
  })), r = h.exports.useRef(), o = r.current;
  let i = o;
  return i ? Boolean(t && i.inputs && y9(t, i.inputs)) || (i = {
    inputs: t,
    result: e()
  }) : i = n, h.exports.useEffect(() => {
    r.current = i, o == n && (n.inputs = n.result = void 0);
  }, [i]), i.result;
}
function y9(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
const NC = (e) => h.exports.useEffect(e, x9), x9 = [];
function ry(e) {
  const t = h.exports.useRef();
  return h.exports.useEffect(() => {
    t.current = e;
  }), t.current;
}
const Ea = Symbol.for("Animated:node"), w9 = (e) => !!e && e[Ea] === e, wn = (e) => e && e[Ea], Eg = (e, t) => U8(e, Ea, t), Xc = (e) => e && e[Ea] && e[Ea].getPayload();
class DC {
  constructor() {
    this.payload = void 0, Eg(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}
class Wi extends DC {
  constructor(t) {
    super(), this.done = !0, this.elapsedTime = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.v0 = void 0, this.durationProgress = 0, this._value = t, W.num(this._value) && (this.lastPosition = this._value);
  }
  static create(t) {
    return new Wi(t);
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
class Oi extends Wi {
  constructor(t) {
    super(0), this._string = null, this._toString = void 0, this._toString = ka({
      output: [t, t]
    });
  }
  static create(t) {
    return new Oi(t);
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
    t && (this._toString = ka({
      output: [this.getValue(), t]
    })), this._value = 0, super.reset();
  }
}
const Zu = {
  dependencies: null
};
class Zc extends DC {
  constructor(t) {
    super(), this.source = t, this.setValue(t);
  }
  getValue(t) {
    const n = {};
    return _n(this.source, (r, o) => {
      w9(r) ? n[o] = r.getValue(t) : Ht(r) ? n[o] = yt(r) : t || (n[o] = r);
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
      return _n(t, this._addToPayload, n), Array.from(n);
    }
  }
  _addToPayload(t) {
    Zu.dependencies && Ht(t) && Zu.dependencies.add(t);
    const n = Xc(t);
    n && he(n, (r) => this.add(r));
  }
}
class Ag extends Zc {
  constructor(t) {
    super(t);
  }
  static create(t) {
    return new Ag(t);
  }
  getValue() {
    return this.source.map((t) => t.getValue());
  }
  setValue(t) {
    const n = this.getPayload();
    return t.length == n.length ? n.map((r, o) => r.setValue(t[o])).some(Boolean) : (super.setValue(t.map(b9)), !0);
  }
}
function b9(e) {
  return (Yc(e) ? Oi : Wi).create(e);
}
function ph(e) {
  const t = wn(e);
  return t ? t.constructor : W.arr(e) ? Ag : Yc(e) ? Oi : Wi;
}
function hh() {
  return hh = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, hh.apply(this, arguments);
}
const oy = (e, t) => {
  const n = !W.fun(e) || e.prototype && e.prototype.isReactComponent;
  return h.exports.forwardRef((r, o) => {
    const i = h.exports.useRef(null), l = n && h.exports.useCallback((m) => {
      i.current = C9(o, m);
    }, [o]), [a, s] = k9(r, t), u = MC(), c = () => {
      const m = i.current;
      if (n && !m)
        return;
      (m ? t.applyAnimatedValues(m, a.getValue(!0)) : !1) === !1 && u();
    }, f = new S9(c, s), d = h.exports.useRef();
    $g(() => (d.current = f, he(s, (m) => Ui(m, f)), () => {
      d.current && (he(d.current.deps, (m) => $a(m, d.current)), oe.cancel(d.current.update));
    })), h.exports.useEffect(c, []), NC(() => () => {
      const m = d.current;
      he(m.deps, (v) => $a(v, m));
    });
    const g = t.getComponentProps(a.getValue());
    return /* @__PURE__ */ D(e, {
      ...g,
      ref: l
    });
  });
};
class S9 {
  constructor(t, n) {
    this.update = t, this.deps = n;
  }
  eventObserved(t) {
    t.type == "change" && oe.write(this.update);
  }
}
function k9(e, t) {
  const n = /* @__PURE__ */ new Set();
  return Zu.dependencies = n, e.style && (e = hh({}, e, {
    style: t.createAnimatedStyle(e.style)
  })), e = new Zc(e), Zu.dependencies = null, [e, n];
}
function C9(e, t) {
  return e && (W.fun(e) ? e(t) : e.current = t), t;
}
const iy = Symbol.for("AnimatedComponent"), $9 = (e, {
  applyAnimatedValues: t = () => !1,
  createAnimatedStyle: n = (o) => new Zc(o),
  getComponentProps: r = (o) => o
} = {}) => {
  const o = {
    applyAnimatedValues: t,
    createAnimatedStyle: n,
    getComponentProps: r
  }, i = (l) => {
    const a = ly(l) || "Anonymous";
    return W.str(l) ? l = i[l] || (i[l] = oy(l, o)) : l = l[iy] || (l[iy] = oy(l, o)), l.displayName = `Animated(${a})`, l;
  };
  return _n(e, (l, a) => {
    W.arr(e) && (a = ly(l)), i[a] = i(l);
  }), {
    animated: i
  };
}, ly = (e) => W.str(e) ? e : e && W.str(e.displayName) ? e.displayName : W.fun(e) && e.name || null;
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
function no(e, ...t) {
  return W.fun(e) ? e(...t) : e;
}
const Vl = (e, t) => e === !0 || !!(t && e && (W.fun(e) ? e(t) : Rt(e).includes(t))), LC = (e, t) => W.obj(e) ? t && e[t] : e, FC = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, E9 = (e) => e, Pg = (e, t = E9) => {
  let n = A9;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  const r = {};
  for (const o of n) {
    const i = t(e[o], o);
    W.und(i) || (r[o] = i);
  }
  return r;
}, A9 = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], P9 = {
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
function _9(e) {
  const t = {};
  let n = 0;
  if (_n(e, (r, o) => {
    P9[o] || (t[o] = r, n++);
  }), n)
    return t;
}
function zC(e) {
  const t = _9(e);
  if (t) {
    const n = {
      to: t
    };
    return _n(e, (r, o) => o in t || (n[o] = r)), n;
  }
  return Ke({}, e);
}
function Aa(e) {
  return e = yt(e), W.arr(e) ? e.map(Aa) : Yc(e) ? Rn.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function R9(e) {
  for (const t in e)
    return !0;
  return !1;
}
function mh(e) {
  return W.fun(e) || W.arr(e) && W.obj(e[0]);
}
function T9(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function I9(e, t) {
  if (t && e.ref !== t) {
    var n;
    (n = e.ref) == null || n.delete(e), t.add(e), e.ref = t;
  }
}
const O9 = {
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
}, Ju = 1.70158, Ds = Ju * 1.525, ay = Ju + 1, sy = 2 * Math.PI / 3, uy = 2 * Math.PI / 4.5, Ls = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, M9 = {
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
  easeInBack: (e) => ay * e * e * e - Ju * e * e,
  easeOutBack: (e) => 1 + ay * Math.pow(e - 1, 3) + Ju * Math.pow(e - 1, 2),
  easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((Ds + 1) * 2 * e - Ds) / 2 : (Math.pow(2 * e - 2, 2) * ((Ds + 1) * (e * 2 - 2) + Ds) + 2) / 2,
  easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * sy),
  easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * sy) + 1,
  easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * uy)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * uy) / 2 + 1,
  easeInBounce: (e) => 1 - Ls(1 - e),
  easeOutBounce: Ls,
  easeInOutBounce: (e) => e < 0.5 ? (1 - Ls(1 - 2 * e)) / 2 : (1 + Ls(2 * e - 1)) / 2
}, gh = Ke({}, O9.default, {
  mass: 1,
  damping: 1,
  easing: M9.linear,
  clamp: !1
});
class N9 {
  constructor() {
    this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, gh);
  }
}
function D9(e, t, n) {
  n && (n = Ke({}, n), cy(n, t), t = Ke({}, n, t)), cy(e, t), Object.assign(e, t);
  for (const l in gh)
    e[l] == null && (e[l] = gh[l]);
  let {
    mass: r,
    frequency: o,
    damping: i
  } = e;
  return W.und(o) || (o < 0.01 && (o = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / o, 2) * r, e.friction = 4 * Math.PI * i * r / o), e;
}
function cy(e, t) {
  if (!W.und(t.decay))
    e.duration = void 0;
  else {
    const n = !W.und(t.tension) || !W.und(t.friction);
    (n || !W.und(t.frequency) || !W.und(t.damping) || !W.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
const fy = [];
class L9 {
  constructor() {
    this.changed = !1, this.values = fy, this.toValues = null, this.fromValues = fy, this.to = void 0, this.from = void 0, this.config = new N9(), this.immediate = !1;
  }
}
function BC(e, {
  key: t,
  props: n,
  defaultProps: r,
  state: o,
  actions: i
}) {
  return new Promise((l, a) => {
    var s;
    let u, c, f = Vl((s = n.cancel) != null ? s : r == null ? void 0 : r.cancel, t);
    if (f)
      m();
    else {
      W.und(n.pause) || (o.paused = Vl(n.pause, t));
      let v = r == null ? void 0 : r.pause;
      v !== !0 && (v = o.paused || Vl(v, t)), u = no(n.delay || 0, t), v ? (o.resumeQueue.add(g), i.pause()) : (i.resume(), g());
    }
    function d() {
      o.resumeQueue.add(g), o.timeouts.delete(c), c.cancel(), u = c.time - oe.now();
    }
    function g() {
      u > 0 && !Rn.skipAnimation ? (o.delayed = !0, c = oe.setTimeout(m, u), o.pauseQueue.add(d), o.timeouts.add(c)) : m();
    }
    function m() {
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
const _g = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? wi(e.get()) : t.every((n) => n.noop) ? jC(e.get()) : sn(e.get(), t.every((n) => n.finished)), jC = (e) => ({
  value: e,
  noop: !0,
  finished: !0,
  cancelled: !1
}), sn = (e, t, n = !1) => ({
  value: e,
  finished: t,
  cancelled: n
}), wi = (e) => ({
  value: e,
  cancelled: !0,
  finished: !1
});
function HC(e, t, n, r) {
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
    const u = Pg(t, (w, p) => p === "onRest" ? void 0 : w);
    let c, f;
    const d = new Promise((w, p) => (c = w, f = p)), g = (w) => {
      const p = o <= (n.cancelId || 0) && wi(r) || o !== n.asyncId && sn(r, !1);
      if (p)
        throw w.result = p, f(w), w;
    }, m = (w, p) => {
      const y = new dy(), x = new py();
      return (async () => {
        if (Rn.skipAnimation)
          throw Pa(n), x.result = sn(r, !1), f(x), x;
        g(y);
        const b = W.obj(w) ? Ke({}, w) : Ke({}, p, {
          to: w
        });
        b.parentId = o, _n(u, (S, E) => {
          W.und(b[E]) && (b[E] = S);
        });
        const A = await r.start(b);
        return g(y), n.paused && await new Promise((S) => {
          n.resumeQueue.add(S);
        }), A;
      })();
    };
    let v;
    if (Rn.skipAnimation)
      return Pa(n), sn(r, !1);
    try {
      let w;
      W.arr(e) ? w = (async (p) => {
        for (const y of p)
          await m(y);
      })(e) : w = Promise.resolve(e(m, r.stop.bind(r))), await Promise.all([w.then(c), d]), v = sn(r.get(), !0, !1);
    } catch (w) {
      if (w instanceof dy)
        v = w.result;
      else if (w instanceof py)
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
function Pa(e, t) {
  jl(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
class dy extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."), this.result = void 0;
  }
}
class py extends Error {
  constructor() {
    super("SkipAnimationSignal"), this.result = void 0;
  }
}
const vh = (e) => e instanceof Rg;
let F9 = 1;
class Rg extends _C {
  constructor(...t) {
    super(...t), this.id = F9++, this.key = void 0, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(t) {
    this._priority != t && (this._priority = t, this._onPriorityChange(t));
  }
  get() {
    const t = wn(this);
    return t && t.getValue();
  }
  to(...t) {
    return Rn.to(this, t);
  }
  interpolate(...t) {
    return p9(), Rn.to(this, t);
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
    Ca(this, {
      type: "change",
      parent: this,
      value: t,
      idle: n
    });
  }
  _onPriorityChange(t) {
    this.idle || Gc.sort(this), Ca(this, {
      type: "priority",
      parent: this,
      priority: t
    });
  }
}
const ko = Symbol.for("SpringPhase"), VC = 1, yh = 2, xh = 4, Cd = (e) => (e[ko] & VC) > 0, fr = (e) => (e[ko] & yh) > 0, cl = (e) => (e[ko] & xh) > 0, hy = (e, t) => t ? e[ko] |= yh | VC : e[ko] &= ~yh, my = (e, t) => t ? e[ko] |= xh : e[ko] &= ~xh;
class z9 extends Rg {
  constructor(t, n) {
    if (super(), this.key = void 0, this.animation = new L9(), this.queue = void 0, this.defaultProps = {}, this._state = {
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
    return !(fr(this) || this._state.asyncTo) || cl(this);
  }
  get goal() {
    return yt(this.animation.to);
  }
  get velocity() {
    const t = wn(this);
    return t instanceof Wi ? t.lastVelocity || 0 : t.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return Cd(this);
  }
  get isAnimating() {
    return fr(this);
  }
  get isPaused() {
    return cl(this);
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
    const a = Xc(o.to);
    !a && Ht(o.to) && (l = Rt(yt(o.to))), o.values.forEach((c, f) => {
      if (c.done)
        return;
      const d = c.constructor == Oi ? 1 : a ? a[f].lastPosition : l[f];
      let g = o.immediate, m = d;
      if (!g) {
        if (m = c.lastPosition, i.tension <= 0) {
          c.done = !0;
          return;
        }
        let v = c.elapsedTime += t;
        const w = o.fromValues[f], p = c.v0 != null ? c.v0 : c.v0 = W.arr(i.velocity) ? i.velocity[f] : i.velocity;
        let y;
        if (W.und(i.duration))
          if (i.decay) {
            const x = i.decay === !0 ? 0.998 : i.decay, b = Math.exp(-(1 - x) * v);
            m = w + p / (1 - x) * (1 - b), g = Math.abs(c.lastPosition - m) < 0.1, y = p * b;
          } else {
            y = c.lastVelocity == null ? p : c.lastVelocity;
            const x = i.precision || (w == d ? 5e-3 : Math.min(1, Math.abs(d - w) * 1e-3)), b = i.restVelocity || x / 10, A = i.clamp ? 0 : i.bounce, S = !W.und(A), E = w == d ? c.v0 > 0 : w < d;
            let $, P = !1;
            const _ = 1, T = Math.ceil(t / _);
            for (let M = 0; M < T && ($ = Math.abs(y) > b, !(!$ && (g = Math.abs(d - m) <= x, g))); ++M) {
              S && (P = m == d || m > d == E, P && (y = -y * A, m = d));
              const L = -i.tension * 1e-6 * (m - d), B = -i.friction * 1e-3 * y, z = (L + B) / i.mass;
              y = y + z * _, m = m + y * _;
            }
          }
        else {
          let x = 1;
          i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, c.durationProgress > 0 && (c.elapsedTime = i.duration * c.durationProgress, v = c.elapsedTime += t)), x = (i.progress || 0) + v / this._memoizedDuration, x = x > 1 ? 1 : x < 0 ? 0 : x, c.durationProgress = x), m = w + i.easing(x) * (d - w), y = (m - c.lastPosition) / t, g = x == 1;
        }
        c.lastVelocity = y, Number.isNaN(m) && (console.warn("Got NaN while animating:", this), g = !0);
      }
      a && !a[f].done && (g = !1), g ? c.done = !0 : n = !1, c.setValue(m, i.round) && (r = !0);
    });
    const s = wn(this), u = s.getValue();
    if (n) {
      const c = yt(o.to);
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
    if (fr(this)) {
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
    })], Promise.all(r.map((o) => this._update(o))).then((o) => _g(this, o));
  }
  stop(t) {
    const {
      to: n
    } = this.animation;
    return this._focus(this.get()), Pa(this._state, t && this._lastCallId), oe.batchedUpdates(() => this._stop(n, t)), this;
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
    r = W.obj(r) ? r[n] : r, (r == null || mh(r)) && (r = void 0), o = W.obj(o) ? o[n] : o, o == null && (o = void 0);
    const i = {
      to: r,
      from: o
    };
    return Cd(this) || (t.reverse && ([r, o] = [o, r]), o = yt(o), W.und(o) ? wn(this) || this._set(r) : this._set(o)), i;
  }
  _update(t, n) {
    let r = Ke({}, t);
    const {
      key: o,
      defaultProps: i
    } = this;
    r.default && Object.assign(i, Pg(r, (s, u) => /^on/.test(u) ? LC(s, o) : s)), vy(this, r, "onProps"), dl(this, "onProps", r, this);
    const l = this._prepareNode(r);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    const a = this._state;
    return BC(++this._lastCallId, {
      key: o,
      props: r,
      defaultProps: i,
      state: a,
      actions: {
        pause: () => {
          cl(this) || (my(this, !0), Sl(a.pauseQueue), dl(this, "onPause", sn(this, fl(this, this.animation.to)), this));
        },
        resume: () => {
          cl(this) && (my(this, !1), fr(this) && this._resume(), Sl(a.resumeQueue), dl(this, "onResume", sn(this, fl(this, this.animation.to)), this));
        },
        start: this._merge.bind(this, l)
      }
    }).then((s) => {
      if (r.loop && s.finished && !(n && s.noop)) {
        const u = UC(r);
        if (u)
          return this._update(u, !0);
      }
      return s;
    });
  }
  _merge(t, n, r) {
    if (n.cancel)
      return this.stop(!0), r(wi(this));
    const o = !W.und(t.to), i = !W.und(t.from);
    if (o || i)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return r(wi(this));
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
    const g = !zn(d, c);
    g && (s.from = d), d = yt(d);
    const m = !zn(f, u);
    m && this._focus(f);
    const v = mh(n.to), {
      config: w
    } = s, {
      decay: p,
      velocity: y
    } = w;
    (o || i) && (w.velocity = 0), n.config && !v && D9(w, no(n.config, l), n.config !== a.config ? no(a.config, l) : void 0);
    let x = wn(this);
    if (!x || W.und(f))
      return r(sn(this, !0));
    const b = W.und(n.reset) ? i && !n.default : !W.und(d) && Vl(n.reset, l), A = b ? d : this.get(), S = Aa(f), E = W.num(S) || W.arr(S) || Yc(S), $ = !v && (!E || Vl(a.immediate || n.immediate, l));
    if (m) {
      const M = ph(f);
      if (M !== x.constructor)
        if ($)
          x = this._set(S);
        else
          throw Error(`Cannot animate between ${x.constructor.name} and ${M.name}, as the "to" prop suggests`);
    }
    const P = x.constructor;
    let _ = Ht(f), T = !1;
    if (!_) {
      const M = b || !Cd(this) && g;
      (m || M) && (T = zn(Aa(A), S), _ = !T), (!zn(s.immediate, $) && !$ || !zn(w.decay, p) || !zn(w.velocity, y)) && (_ = !0);
    }
    if (T && fr(this) && (s.changed && !b ? _ = !0 : _ || this._stop(u)), !v && ((_ || Ht(u)) && (s.values = x.getPayload(), s.toValues = Ht(f) ? null : P == Oi ? [1] : Rt(S)), s.immediate != $ && (s.immediate = $, !$ && !b && this._set(u)), _)) {
      const {
        onRest: M
      } = s;
      he(j9, (B) => vy(this, n, B));
      const L = sn(this, fl(this, u));
      Sl(this._pendingCalls, L), this._pendingCalls.add(r), s.changed && oe.batchedUpdates(() => {
        s.changed = !b, M == null || M(L, this), b ? no(a.onRest, L) : s.onStart == null || s.onStart(L, this);
      });
    }
    b && this._set(A), v ? r(HC(n.to, n, this._state, this)) : _ ? this._start() : fr(this) && !m ? this._pendingCalls.add(r) : r(jC(A));
  }
  _focus(t) {
    const n = this.animation;
    t !== n.to && (ty(this) && this._detach(), n.to = t, ty(this) && this._attach());
  }
  _attach() {
    let t = 0;
    const {
      to: n
    } = this.animation;
    Ht(n) && (Ui(n, this), vh(n) && (t = n.priority + 1)), this.priority = t;
  }
  _detach() {
    const {
      to: t
    } = this.animation;
    Ht(t) && $a(t, this);
  }
  _set(t, n = !0) {
    const r = yt(t);
    if (!W.und(r)) {
      const o = wn(this);
      if (!o || !zn(r, o.getValue())) {
        const i = ph(r);
        !o || o.constructor != i ? Eg(this, i.create(r)) : o.setValue(r), o && oe.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return wn(this);
  }
  _onStart() {
    const t = this.animation;
    t.changed || (t.changed = !0, dl(this, "onStart", sn(this, fl(this, t.to)), this));
  }
  _onChange(t, n) {
    n || (this._onStart(), no(this.animation.onChange, t, this)), no(this.defaultProps.onChange, t, this), super._onChange(t, n);
  }
  _start() {
    const t = this.animation;
    wn(this).reset(yt(t.to)), t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)), fr(this) || (hy(this, !0), cl(this) || this._resume());
  }
  _resume() {
    Rn.skipAnimation ? this.finish() : Gc.start(this);
  }
  _stop(t, n) {
    if (fr(this)) {
      hy(this, !1);
      const r = this.animation;
      he(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Ca(this, {
        type: "idle",
        parent: this
      });
      const o = n ? wi(this.get()) : sn(this.get(), fl(this, t != null ? t : r.to));
      Sl(this._pendingCalls, o), r.changed && (r.changed = !1, dl(this, "onRest", o, this));
    }
  }
}
function fl(e, t) {
  const n = Aa(t), r = Aa(e.get());
  return zn(r, n);
}
function UC(e, t = e.loop, n = e.to) {
  let r = no(t);
  if (r) {
    const o = r !== !0 && zC(r), i = (o || e).reverse, l = !o || o.reset;
    return _a(Ke({}, e, {
      loop: t,
      default: !1,
      pause: void 0,
      to: !i || mh(n) ? n : void 0,
      from: l ? e.from : void 0,
      reset: l
    }, o));
  }
}
function _a(e) {
  const {
    to: t,
    from: n
  } = e = zC(e), r = /* @__PURE__ */ new Set();
  return W.obj(t) && gy(t, r), W.obj(n) && gy(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function B9(e) {
  const t = _a(e);
  return W.und(t.default) && (t.default = Pg(t)), t;
}
function gy(e, t) {
  _n(e, (n, r) => n != null && t.add(r));
}
const j9 = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function vy(e, t, n) {
  e.animation[n] = t[n] !== FC(t, n) ? LC(t[n], e.key) : void 0;
}
function dl(e, t, ...n) {
  var r, o, i, l;
  (r = (o = e.animation)[t]) == null || r.call(o, ...n), (i = (l = e.defaultProps)[t]) == null || i.call(l, ...n);
}
const H9 = ["onStart", "onChange", "onRest"];
let V9 = 1;
class U9 {
  constructor(t, n) {
    this.id = V9++, this.springs = {}, this.queue = [], this.ref = void 0, this._flush = void 0, this._initialProps = void 0, this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._item = void 0, this._state = {
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
    return t && this.queue.push(_a(t)), this;
  }
  start(t) {
    let {
      queue: n
    } = this;
    return t ? n = Rt(t).map(_a) : this.queue = [], this._flush ? this._flush(this, n) : (KC(this, n), wh(this, n));
  }
  stop(t, n) {
    if (t !== !!t && (n = t), n) {
      const r = this.springs;
      he(Rt(n), (o) => r[o].stop(!!t));
    } else
      Pa(this._state, this._lastAsyncId), this.each((r) => r.stop(!!t));
    return this;
  }
  pause(t) {
    if (W.und(t))
      this.start({
        pause: !0
      });
    else {
      const n = this.springs;
      he(Rt(t), (r) => n[r].pause());
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
      he(Rt(t), (r) => n[r].resume());
    }
    return this;
  }
  each(t) {
    _n(this.springs, t);
  }
  _onFrame() {
    const {
      onStart: t,
      onChange: n,
      onRest: r
    } = this._events, o = this._active.size > 0, i = this._changed.size > 0;
    (o && !this._started || i && !this._started) && (this._started = !0, jl(t, ([s, u]) => {
      u.value = this.get(), s(u, this, this._item);
    }));
    const l = !o && this._started, a = i || l && r.size ? this.get() : null;
    i && n.size && jl(n, ([s, u]) => {
      u.value = a, s(u, this, this._item);
    }), l && (this._started = !1, jl(r, ([s, u]) => {
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
function wh(e, t) {
  return Promise.all(t.map((n) => WC(e, n))).then((n) => _g(e, n));
}
async function WC(e, t, n) {
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
  c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : he(H9, (v) => {
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
  t.pause === !f.paused ? (f.paused = t.pause, Sl(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
  const d = (r || Object.keys(e.springs)).map((v) => e.springs[v].start(t)), g = t.cancel === !0 || FC(t, "cancel") === !0;
  (c || g && f.asyncId) && d.push(BC(++e._lastAsyncId, {
    props: t,
    state: f,
    actions: {
      pause: ch,
      resume: ch,
      start(v, w) {
        g ? (Pa(f, e._lastAsyncId), w(wi(e))) : (v.onRest = a, w(HC(c, v, f, e)));
      }
    }
  })), f.paused && await new Promise((v) => {
    f.resumeQueue.add(v);
  });
  const m = _g(e, await Promise.all(d));
  if (l && m.finished && !(n && m.noop)) {
    const v = UC(t, l, o);
    if (v)
      return KC(e, [v]), WC(e, v, !0);
  }
  return s && oe.batchedUpdates(() => s(m, e, e.item)), m;
}
function yy(e, t) {
  const n = Ke({}, e.springs);
  return t && he(Rt(t), (r) => {
    W.und(r.keys) && (r = _a(r)), W.obj(r.to) || (r = Ke({}, r, {
      to: void 0
    })), QC(n, r, (o) => GC(o));
  }), qC(e, n), n;
}
function qC(e, t) {
  _n(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, Ui(n, e));
  });
}
function GC(e, t) {
  const n = new z9();
  return n.key = e, t && Ui(n, t), n;
}
function QC(e, t, n) {
  t.keys && he(t.keys, (r) => {
    (e[r] || (e[r] = n(r)))._prepareNode(t);
  });
}
function KC(e, t) {
  he(t, (n) => {
    QC(e.springs, n, (r) => GC(r, e));
  });
}
function W9(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const q9 = ["children"], Jc = (e) => {
  let {
    children: t
  } = e, n = W9(e, q9);
  const r = h.exports.useContext(ec), o = n.pause || !!r.pause, i = n.immediate || !!r.immediate;
  n = v9(() => ({
    pause: o,
    immediate: i
  }), [o, i]);
  const {
    Provider: l
  } = ec;
  return /* @__PURE__ */ D(l, {
    value: n,
    children: t
  });
}, ec = G9(Jc, {});
Jc.Provider = ec.Provider;
Jc.Consumer = ec.Consumer;
function G9(e, t) {
  return Object.assign(e, h.exports.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
const Q9 = () => {
  const e = [], t = function(o) {
    m9();
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
function K9(e, t, n) {
  const r = W.fun(t) && t;
  r && !n && (n = []);
  const o = h.exports.useMemo(() => r || arguments.length == 3 ? Q9() : void 0, []), i = h.exports.useRef(0), l = MC(), a = h.exports.useMemo(() => ({
    ctrls: [],
    queue: [],
    flush(p, y) {
      const x = yy(p, y);
      return i.current > 0 && !a.queue.length && !Object.keys(x).some((A) => !p.springs[A]) ? wh(p, y) : new Promise((A) => {
        qC(p, x), a.queue.push(() => {
          A(wh(p, y));
        }), l();
      });
    }
  }), []), s = h.exports.useRef([...a.ctrls]), u = [], c = ry(e) || 0;
  h.exports.useMemo(() => {
    he(s.current.slice(e, c), (p) => {
      T9(p, o), p.stop(!0);
    }), s.current.length = e, f(c, e);
  }, [e]), h.exports.useMemo(() => {
    f(0, Math.min(c, e));
  }, n);
  function f(p, y) {
    for (let x = p; x < y; x++) {
      const b = s.current[x] || (s.current[x] = new U9(null, a.flush)), A = r ? r(x, b) : t[x];
      A && (u[x] = B9(A));
    }
  }
  const d = s.current.map((p, y) => yy(p, u[y])), g = h.exports.useContext(Jc), m = ry(g), v = g !== m && R9(g);
  $g(() => {
    i.current++, a.ctrls = s.current;
    const {
      queue: p
    } = a;
    p.length && (a.queue = [], he(p, (y) => y())), he(s.current, (y, x) => {
      o == null || o.add(y), v && y.start({
        default: g
      });
      const b = u[x];
      b && (I9(y, b.ref), y.ref ? y.queue.push(b) : y.start(b));
    });
  }), NC(() => () => {
    he(a.ctrls, (p) => p.stop(!0));
  });
  const w = d.map((p) => Ke({}, p));
  return o ? [w, o] : w;
}
function Y9(e, t) {
  const n = W.fun(e), [[r], o] = K9(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, o] : r;
}
let xy;
(function(e) {
  e.MOUNT = "mount", e.ENTER = "enter", e.UPDATE = "update", e.LEAVE = "leave";
})(xy || (xy = {}));
class X9 extends Rg {
  constructor(t, n) {
    super(), this.key = void 0, this.idle = !0, this.calc = void 0, this._active = /* @__PURE__ */ new Set(), this.source = t, this.calc = ka(...n);
    const r = this._get(), o = ph(r);
    Eg(this, o.create(r));
  }
  advance(t) {
    const n = this._get(), r = this.get();
    zn(n, r) || (wn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && wy(this._active) && $d(this);
  }
  _get() {
    const t = W.arr(this.source) ? this.source.map(yt) : Rt(yt(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !wy(this._active) && (this.idle = !1, he(Xc(this), (t) => {
      t.done = !1;
    }), Rn.skipAnimation ? (oe.batchedUpdates(() => this.advance()), $d(this)) : Gc.start(this));
  }
  _attach() {
    let t = 1;
    he(Rt(this.source), (n) => {
      Ht(n) && Ui(n, this), vh(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1));
    }), this.priority = t, this._start();
  }
  _detach() {
    he(Rt(this.source), (t) => {
      Ht(t) && $a(t, this);
    }), this._active.clear(), $d(this);
  }
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = Rt(this.source).reduce((n, r) => Math.max(n, (vh(r) ? r.priority : 0) + 1), 0));
  }
}
function Z9(e) {
  return e.idle !== !1;
}
function wy(e) {
  return !e.size || Array.from(e).every(Z9);
}
function $d(e) {
  e.idle || (e.idle = !0, he(Xc(e), (t) => {
    t.done = !0;
  }), Ca(e, {
    type: "idle",
    parent: e
  }));
}
Rn.assign({
  createStringInterpolator: IC,
  to: (e, t) => new X9(e, t)
});
function Tg(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const J9 = ["style", "children", "scrollTop", "scrollLeft"], YC = /^--/;
function eM(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !YC.test(e) && !(Ul.hasOwnProperty(e) && Ul[e]) ? t + "px" : ("" + t).trim();
}
const by = {};
function tM(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", r = t, {
    style: o,
    children: i,
    scrollTop: l,
    scrollLeft: a
  } = r, s = Tg(r, J9), u = Object.values(s), c = Object.keys(s).map((f) => n || e.hasAttribute(f) ? f : by[f] || (by[f] = f.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  i !== void 0 && (e.textContent = i);
  for (let f in o)
    if (o.hasOwnProperty(f)) {
      const d = eM(f, o[f]);
      YC.test(f) ? e.style.setProperty(f, d) : e.style[f] = d;
    }
  c.forEach((f, d) => {
    e.setAttribute(f, u[d]);
  }), l !== void 0 && (e.scrollTop = l), a !== void 0 && (e.scrollLeft = a);
}
let Ul = {
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
const nM = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), rM = ["Webkit", "Ms", "Moz", "O"];
Ul = Object.keys(Ul).reduce((e, t) => (rM.forEach((n) => e[nM(n, t)] = e[t]), e), Ul);
const oM = ["x", "y", "z"], iM = /^(matrix|translate|scale|rotate|skew)/, lM = /^(translate)/, aM = /^(rotate|skew)/, Ed = (e, t) => W.num(e) && e !== 0 ? e + t : e, au = (e, t) => W.arr(e) ? e.every((n) => au(n, t)) : W.num(e) ? e === t : parseFloat(e) === t;
class sM extends Zc {
  constructor(t) {
    let {
      x: n,
      y: r,
      z: o
    } = t, i = Tg(t, oM);
    const l = [], a = [];
    (n || r || o) && (l.push([n || 0, r || 0, o || 0]), a.push((s) => [`translate3d(${s.map((u) => Ed(u, "px")).join(",")})`, au(s, 0)])), _n(i, (s, u) => {
      if (u === "transform")
        l.push([s || ""]), a.push((c) => [c, c === ""]);
      else if (iM.test(u)) {
        if (delete i[u], W.und(s))
          return;
        const c = lM.test(u) ? "px" : aM.test(u) ? "deg" : "";
        l.push(Rt(s)), a.push(u === "rotate3d" ? ([f, d, g, m]) => [`rotate3d(${f},${d},${g},${Ed(m, c)})`, au(m, 0)] : (f) => [`${u}(${f.map((d) => Ed(d, c)).join(",")})`, au(f, u.startsWith("scale") ? 1 : 0)]);
      }
    }), l.length && (i.transform = new uM(l, a)), super(i);
  }
}
class uM extends _C {
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
    t == 1 && he(this.inputs, (n) => he(n, (r) => Ht(r) && Ui(r, this)));
  }
  observerRemoved(t) {
    t == 0 && he(this.inputs, (n) => he(n, (r) => Ht(r) && $a(r, this)));
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), Ca(this, t);
  }
}
const cM = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], fM = ["scrollTop", "scrollLeft"];
Rn.assign({
  batchedUpdates: Yt.exports.unstable_batchedUpdates,
  createStringInterpolator: IC,
  colors: Q8
});
const dM = $9(cM, {
  applyAnimatedValues: tM,
  createAnimatedStyle: (e) => new sM(e),
  getComponentProps: (e) => Tg(e, fM)
}), pM = dM.animated;
function XC(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = XC(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Sy() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = XC(t)) && (r && (r += " "), r += n);
  return r;
}
function hM(e, t, { includes: n = [], ...r } = {}) {
  h.exports.useEffect(
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
var Se = "colors", ut = "sizes", Y = "space", ZC = { gap: Y, gridGap: Y, columnGap: Y, gridColumnGap: Y, rowGap: Y, gridRowGap: Y, inset: Y, insetBlock: Y, insetBlockEnd: Y, insetBlockStart: Y, insetInline: Y, insetInlineEnd: Y, insetInlineStart: Y, margin: Y, marginTop: Y, marginRight: Y, marginBottom: Y, marginLeft: Y, marginBlock: Y, marginBlockEnd: Y, marginBlockStart: Y, marginInline: Y, marginInlineEnd: Y, marginInlineStart: Y, padding: Y, paddingTop: Y, paddingRight: Y, paddingBottom: Y, paddingLeft: Y, paddingBlock: Y, paddingBlockEnd: Y, paddingBlockStart: Y, paddingInline: Y, paddingInlineEnd: Y, paddingInlineStart: Y, top: Y, right: Y, bottom: Y, left: Y, scrollMargin: Y, scrollMarginTop: Y, scrollMarginRight: Y, scrollMarginBottom: Y, scrollMarginLeft: Y, scrollMarginX: Y, scrollMarginY: Y, scrollMarginBlock: Y, scrollMarginBlockEnd: Y, scrollMarginBlockStart: Y, scrollMarginInline: Y, scrollMarginInlineEnd: Y, scrollMarginInlineStart: Y, scrollPadding: Y, scrollPaddingTop: Y, scrollPaddingRight: Y, scrollPaddingBottom: Y, scrollPaddingLeft: Y, scrollPaddingX: Y, scrollPaddingY: Y, scrollPaddingBlock: Y, scrollPaddingBlockEnd: Y, scrollPaddingBlockStart: Y, scrollPaddingInline: Y, scrollPaddingInlineEnd: Y, scrollPaddingInlineStart: Y, fontSize: "fontSizes", background: Se, backgroundColor: Se, backgroundImage: Se, borderImage: Se, border: Se, borderBlock: Se, borderBlockEnd: Se, borderBlockStart: Se, borderBottom: Se, borderBottomColor: Se, borderColor: Se, borderInline: Se, borderInlineEnd: Se, borderInlineStart: Se, borderLeft: Se, borderLeftColor: Se, borderRight: Se, borderRightColor: Se, borderTop: Se, borderTopColor: Se, caretColor: Se, color: Se, columnRuleColor: Se, fill: Se, outline: Se, outlineColor: Se, stroke: Se, textDecorationColor: Se, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: ut, minBlockSize: ut, maxBlockSize: ut, inlineSize: ut, minInlineSize: ut, maxInlineSize: ut, width: ut, minWidth: ut, maxWidth: ut, height: ut, minHeight: ut, maxHeight: ut, flexBasis: ut, gridTemplateColumns: ut, gridTemplateRows: ut, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, mM = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, qi = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n, ...r) => {
    const o = ((i) => JSON.stringify(i, mM))(t);
    return o in e ? e[o] : e[o] = n(t, ...r);
  };
}, uo = Symbol.for("sxs.internal"), Ig = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), ky = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: gM } = Object.prototype, bh = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), vM = /\s+(?![^()]*\))/, jo = (e) => (t) => e(...typeof t == "string" ? String(t).split(vM) : [t]), Cy = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: jo((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: jo((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: jo((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: jo((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: jo((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: jo((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, Ad = /([\d.]+)([^]*)/, yM = (e, t) => e.length ? e.reduce((n, r) => (n.push(...t.map((o) => o.includes("&") ? o.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(o) ? `:is(${r})` : r) : r + " " + o)), n), []) : t, xM = (e, t) => e in wM && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (n, r, o, i) => r + (o === "stretch" ? `-moz-available${i};${bh(e)}:${r}-webkit-fill-available` : `-moz-fit-content${i};${bh(e)}:${r}fit-content`) + i) : String(t), wM = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, Xn = (e) => e ? e + "-" : "", JC = (e, t, n) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (r, o, i, l, a) => l == "$" == !!i ? r : (o || l == "--" ? "calc(" : "") + "var(--" + (l === "$" ? Xn(t) + (a.includes("$") ? "" : Xn(n)) + a.replace(/\$/g, "-") : a) + ")" + (o || l == "--" ? "*" + (o || "") + (i || "1") + ")" : "")), bM = /\s*,\s*(?![^()]*\))/, SM = Object.prototype.toString, ri = (e, t, n, r, o) => {
  let i, l, a;
  const s = (u, c, f) => {
    let d, g;
    const m = (v) => {
      for (d in v) {
        const y = d.charCodeAt(0) === 64, x = y && Array.isArray(v[d]) ? v[d] : [v[d]];
        for (g of x) {
          const b = /[A-Z]/.test(p = d) ? p : p.replace(/-[^]/g, (S) => S[1].toUpperCase()), A = typeof g == "object" && g && g.toString === SM && (!r.utils[b] || !c.length);
          if (b in r.utils && !A) {
            const S = r.utils[b];
            if (S !== l) {
              l = S, m(S(g)), l = null;
              continue;
            }
          } else if (b in Cy) {
            const S = Cy[b];
            if (S !== a) {
              a = S, m(S(g)), a = null;
              continue;
            }
          }
          if (y && (w = d.slice(1) in r.media ? "@media " + r.media[d.slice(1)] : d, d = w.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (S, E, $, P, _, T) => {
            const M = Ad.test(E), L = 0.0625 * (M ? -1 : 1), [B, z] = M ? [P, E] : [E, P];
            return "(" + ($[0] === "=" ? "" : $[0] === ">" === M ? "max-" : "min-") + B + ":" + ($[0] !== "=" && $.length === 1 ? z.replace(Ad, (R, H, N) => Number(H) + L * ($ === ">" ? 1 : -1) + N) : z) + (_ ? ") and (" + (_[0] === ">" ? "min-" : "max-") + B + ":" + (_.length === 1 ? T.replace(Ad, (R, H, N) => Number(H) + L * (_ === ">" ? -1 : 1) + N) : T) : "") + ")";
          })), A) {
            const S = y ? f.concat(d) : [...f], E = y ? [...c] : yM(c, d.split(bM));
            i !== void 0 && o($y(...i)), i = void 0, s(g, E, S);
          } else
            i === void 0 && (i = [[], c, f]), d = y || d.charCodeAt(0) !== 36 ? d : `--${Xn(r.prefix)}${d.slice(1).replace(/\$/g, "-")}`, g = A ? g : typeof g == "number" ? g && b in kM ? String(g) + "px" : String(g) : JC(xM(b, g == null ? "" : g), r.prefix, r.themeMap[b]), i[0].push(`${y ? `${d} ` : `${bh(d)}:`}${g}`);
        }
      }
      var w, p;
    };
    m(u), i !== void 0 && o($y(...i)), i = void 0;
  };
  s(e, t, n);
}, $y = (e, t, n) => `${n.map((r) => `${r}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(n.length ? n.length + 1 : 0).join("}")}`, kM = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, Ey = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), co = (e) => ((t) => {
  let n, r = "";
  for (n = Math.abs(t); n > 52; n = n / 52 | 0)
    r = Ey(n % 52) + r;
  return Ey(n % 52) + r;
})(((t, n) => {
  let r = n.length;
  for (; r; )
    t = 33 * t ^ n.charCodeAt(--r);
  return t;
})(5381, JSON.stringify(e)) >>> 0), kl = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], CM = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, $M = (e) => {
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
      if (CM(a)) {
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
          const g = d.slice(14, -3).trim().split(/\s+/), m = kl[g[0]];
          m && (t || (t = { sheet: a, reset: r, rules: {}, toString: n }), t.rules[m] = { group: f, index: s, cache: new Set(g) });
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
    for (let a = kl.length - 1; a >= 0; --a) {
      const s = kl[a];
      if (!l[s]) {
        const u = kl[a + 1], c = l[u] ? l[u].index : i.cssRules.length;
        i.insertRule("@media{}", c), i.insertRule(`--sxs{--sxs:${a}}`, c), l[s] = { group: i.cssRules[c + 1], index: c, cache: /* @__PURE__ */ new Set([a]) };
      }
      EM(l[s]);
    }
  };
  return r(), t;
}, EM = (e) => {
  const t = e.group;
  let n = t.cssRules.length;
  e.apply = (r) => {
    try {
      t.insertRule(r, n), ++n;
    } catch {
    }
  };
}, pl = Symbol(), AM = qi(), Ay = (e, t) => AM(e, () => (...n) => {
  let r = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const o of n)
    if (o != null)
      if (o[uo]) {
        r.type == null && (r.type = o[uo].type);
        for (const i of o[uo].composers)
          r.composers.add(i);
      } else
        o.constructor !== Object || o.$$typeof ? r.type == null && (r.type = o) : r.composers.add(PM(o, e));
  return r.type == null && (r.type = "span"), r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]), _M(e, r, t);
}), PM = ({ variants: e, compoundVariants: t, defaultVariants: n, ...r }, o) => {
  const i = `${Xn(o.prefix)}c-${co(r)}`, l = [], a = [], s = /* @__PURE__ */ Object.create(null), u = [];
  for (const d in n)
    s[d] = String(n[d]);
  if (typeof e == "object" && e)
    for (const d in e) {
      c = s, f = d, gM.call(c, f) || (s[d] = "undefined");
      const g = e[d];
      for (const m in g) {
        const v = { [d]: String(m) };
        String(m) === "undefined" && u.push(d);
        const w = g[m], p = [v, w, !ky(w)];
        l.push(p);
      }
    }
  var c, f;
  if (typeof t == "object" && t)
    for (const d of t) {
      let { css: g, ...m } = d;
      g = typeof g == "object" && g || {};
      for (const w in m)
        m[w] = String(m[w]);
      const v = [m, g, !ky(g)];
      a.push(v);
    }
  return [i, r, l, a, s, u];
}, _M = (e, t, n) => {
  const [r, o, i, l] = RM(t.composers), a = typeof t.type == "function" || t.type.$$typeof ? ((f) => {
    function d() {
      for (let g = 0; g < d[pl].length; g++) {
        const [m, v] = d[pl][g];
        f.rules[m].apply(v);
      }
      return d[pl] = [], null;
    }
    return d[pl] = [], d.rules = {}, kl.forEach((g) => d.rules[g] = { apply: (m) => d[pl].push([g, m]) }), d;
  })(n) : null, s = (a || n).rules, u = `.${r}${o.length > 1 ? `:where(.${o.slice(1).join(".")})` : ""}`, c = (f) => {
    f = typeof f == "object" && f || TM;
    const { css: d, ...g } = f, m = {};
    for (const p in i)
      if (delete g[p], p in f) {
        let y = f[p];
        typeof y == "object" && y ? m[p] = { "@initial": i[p], ...y } : (y = String(y), m[p] = y !== "undefined" || l.has(p) ? y : i[p]);
      } else
        m[p] = i[p];
    const v = /* @__PURE__ */ new Set([...o]);
    for (const [p, y, x, b] of t.composers) {
      n.rules.styled.cache.has(p) || (n.rules.styled.cache.add(p), ri(y, [`.${p}`], [], e, (E) => {
        s.styled.apply(E);
      }));
      const A = Py(x, m, e.media), S = Py(b, m, e.media, !0);
      for (const E of A)
        if (E !== void 0)
          for (const [$, P, _] of E) {
            const T = `${p}-${co(P)}-${$}`;
            v.add(T);
            const M = (_ ? n.rules.resonevar : n.rules.onevar).cache, L = _ ? s.resonevar : s.onevar;
            M.has(T) || (M.add(T), ri(P, [`.${T}`], [], e, (B) => {
              L.apply(B);
            }));
          }
      for (const E of S)
        if (E !== void 0)
          for (const [$, P] of E) {
            const _ = `${p}-${co(P)}-${$}`;
            v.add(_), n.rules.allvar.cache.has(_) || (n.rules.allvar.cache.add(_), ri(P, [`.${_}`], [], e, (T) => {
              s.allvar.apply(T);
            }));
          }
    }
    if (typeof d == "object" && d) {
      const p = `${r}-i${co(d)}-css`;
      v.add(p), n.rules.inline.cache.has(p) || (n.rules.inline.cache.add(p), ri(d, [`.${p}`], [], e, (y) => {
        s.inline.apply(y);
      }));
    }
    for (const p of String(f.className || "").trim().split(/\s+/))
      p && v.add(p);
    const w = g.className = [...v].join(" ");
    return { type: t.type, className: w, selector: u, props: g, toString: () => w, deferredInjector: a };
  };
  return Ig(c, { className: r, selector: u, [uo]: t, toString: () => (n.rules.styled.cache.has(r) || c(), r) });
}, RM = (e) => {
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
}, Py = (e, t, n, r) => {
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
            let g, m, v = 0;
            for (const w in d) {
              if (f === String(d[w])) {
                if (w !== "@initial") {
                  const p = w.slice(1);
                  (m = m || []).push(p in n ? n[p] : w.replace(/^@media ?/, "")), c = !0;
                }
                u += v, g = !0;
              }
              ++v;
            }
            if (m && m.length && (l = { ["@media " + m.join(", ")]: l }), !g)
              continue e;
          }
        }
      }
      (o[u] = o[u] || []).push([r ? "cv" : `${s}-${i[s]}`, l, c]);
    }
  return o;
}, TM = {}, IM = qi(), OM = (e, t) => IM(e, () => (...n) => {
  const r = () => {
    for (let o of n) {
      o = typeof o == "object" && o || {};
      let i = co(o);
      if (!t.rules.global.cache.has(i)) {
        if (t.rules.global.cache.add(i), "@import" in o) {
          let l = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let a of [].concat(o["@import"]))
            a = a.includes('"') || a.includes("'") ? a : `"${a}"`, t.sheet.insertRule(`@import ${a};`, l++);
          delete o["@import"];
        }
        ri(o, [], [], e, (l) => {
          t.rules.global.apply(l);
        });
      }
    }
    return "";
  };
  return Ig(r, { toString: r });
}), MM = qi(), NM = (e, t) => MM(e, () => (n) => {
  const r = `${Xn(e.prefix)}k-${co(n)}`, o = () => {
    if (!t.rules.global.cache.has(r)) {
      t.rules.global.cache.add(r);
      const i = [];
      ri(n, [], [], e, (a) => i.push(a));
      const l = `@keyframes ${r}{${i.join("")}}`;
      t.rules.global.apply(l);
    }
    return r;
  };
  return Ig(o, { get name() {
    return o();
  }, toString: o });
}), DM = class {
  constructor(e, t, n, r) {
    this.token = e == null ? "" : String(e), this.value = t == null ? "" : String(t), this.scale = n == null ? "" : String(n), this.prefix = r == null ? "" : String(r);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + Xn(this.prefix) + Xn(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, LM = qi(), FM = (e, t) => LM(e, () => (n, r) => {
  r = typeof n == "object" && n || Object(r);
  const o = `.${n = (n = typeof n == "string" ? n : "") || `${Xn(e.prefix)}t-${co(r)}`}`, i = {}, l = [];
  for (const s in r) {
    i[s] = {};
    for (const u in r[s]) {
      const c = `--${Xn(e.prefix)}${s}-${u}`, f = JC(String(r[s][u]), e.prefix, s);
      i[s][u] = new DM(u, f, s, e.prefix), l.push(`${c}:${f}`);
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
}), zM = qi(), BM = qi(), jM = (e) => {
  const t = ((n) => {
    let r = !1;
    const o = zM(n, (i) => {
      r = !0;
      const l = "prefix" in (i = typeof i == "object" && i || {}) ? String(i.prefix) : "", a = typeof i.media == "object" && i.media || {}, s = typeof i.root == "object" ? i.root || null : globalThis.document || null, u = typeof i.theme == "object" && i.theme || {}, c = { prefix: l, media: a, theme: u, themeMap: typeof i.themeMap == "object" && i.themeMap || { ...ZC }, utils: typeof i.utils == "object" && i.utils || {} }, f = $M(s), d = { css: Ay(c, f), globalCss: OM(c, f), keyframes: NM(c, f), createTheme: FM(c, f), reset() {
        f.reset(), d.theme.toString();
      }, theme: {}, sheet: f, config: c, prefix: l, getCssText: f.toString, toString: f.toString };
      return String(d.theme = d.createTheme(u)), d;
    });
    return r || o.reset(), o;
  })(e);
  return t.styled = (({ config: n, sheet: r }) => BM(n, () => {
    const o = Ay(n, r);
    return (...i) => {
      const l = o(...i), a = l[uo].type, s = He.forwardRef((u, c) => {
        const f = u && u.as || a, { props: d, deferredInjector: g } = l(u);
        return delete d.as, d.ref = c, g ? He.createElement(He.Fragment, null, He.createElement(f, d), He.createElement(g, null)) : He.createElement(f, d);
      });
      return s.className = l.className, s.displayName = `Styled.${a.displayName || a.name || a}`, s.selector = l.selector, s.toString = () => l.selector, s[uo] = l[uo], s;
    };
  }))(t), t;
};
function HM(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ra(e, t) {
  return Ra = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Ra(e, t);
}
function VM(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ra(e, t);
}
function Sh(e) {
  return Sh = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Sh(e);
}
function UM(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function WM() {
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
function su(e, t, n) {
  return WM() ? su = Reflect.construct : su = function(o, i, l) {
    var a = [null];
    a.push.apply(a, i);
    var s = Function.bind.apply(o, a), u = new s();
    return l && Ra(u, l.prototype), u;
  }, su.apply(null, arguments);
}
function kh(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return kh = function(r) {
    if (r === null || !UM(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return su(r, arguments, Sh(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Ra(o, r);
  }, kh(e);
}
var kr = /* @__PURE__ */ function(e) {
  VM(t, e);
  function t(n) {
    var r;
    return r = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + n + " for more information.") || this, HM(r);
  }
  return t;
}(/* @__PURE__ */ kh(Error)), qM = /--[\S]*/g;
function GM(e, t) {
  if (!e || !e.match(qM))
    throw new kr(73);
  var n;
  if (typeof document < "u" && document.documentElement !== null && (n = getComputedStyle(document.documentElement).getPropertyValue(e)), n)
    return n.trim();
  if (t)
    return t;
  throw new kr(74);
}
function Pd(e) {
  return Math.round(e * 255);
}
function QM(e, t, n) {
  return Pd(e) + "," + Pd(t) + "," + Pd(n);
}
function _y(e, t, n, r) {
  if (r === void 0 && (r = QM), t === 0)
    return r(n, n, n);
  var o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * t, l = i * (1 - Math.abs(o % 2 - 1)), a = 0, s = 0, u = 0;
  o >= 0 && o < 1 ? (a = i, s = l) : o >= 1 && o < 2 ? (a = l, s = i) : o >= 2 && o < 3 ? (s = i, u = l) : o >= 3 && o < 4 ? (s = l, u = i) : o >= 4 && o < 5 ? (a = l, u = i) : o >= 5 && o < 6 && (a = i, u = l);
  var c = n - i / 2, f = a + c, d = s + c, g = u + c;
  return r(f, d, g);
}
var Ry = {
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
function KM(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return Ry[t] ? "#" + Ry[t] : e;
}
var YM = /^#[a-fA-F0-9]{6}$/, XM = /^#[a-fA-F0-9]{8}$/, ZM = /^#[a-fA-F0-9]{3}$/, JM = /^#[a-fA-F0-9]{4}$/, _d = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i, eN = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i, tN = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, nN = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
function rN(e) {
  if (typeof e != "string")
    throw new kr(3);
  var t = KM(e);
  if (t.match(YM))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(XM)) {
    var n = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: n
    };
  }
  if (t.match(ZM))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(JM)) {
    var r = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: r
    };
  }
  var o = _d.exec(t);
  if (o)
    return {
      red: parseInt("" + o[1], 10),
      green: parseInt("" + o[2], 10),
      blue: parseInt("" + o[3], 10)
    };
  var i = eN.exec(t.substring(0, 50));
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
      alpha: parseFloat("" + i[4])
    };
  var l = tN.exec(t);
  if (l) {
    var a = parseInt("" + l[1], 10), s = parseInt("" + l[2], 10) / 100, u = parseInt("" + l[3], 10) / 100, c = "rgb(" + _y(a, s, u) + ")", f = _d.exec(c);
    if (!f)
      throw new kr(4, t, c);
    return {
      red: parseInt("" + f[1], 10),
      green: parseInt("" + f[2], 10),
      blue: parseInt("" + f[3], 10)
    };
  }
  var d = nN.exec(t.substring(0, 50));
  if (d) {
    var g = parseInt("" + d[1], 10), m = parseInt("" + d[2], 10) / 100, v = parseInt("" + d[3], 10) / 100, w = "rgb(" + _y(g, m, v) + ")", p = _d.exec(w);
    if (!p)
      throw new kr(4, t, w);
    return {
      red: parseInt("" + p[1], 10),
      green: parseInt("" + p[2], 10),
      blue: parseInt("" + p[3], 10),
      alpha: parseFloat("" + d[4])
    };
  }
  throw new kr(5);
}
var oN = function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, Ty = oN;
function Ho(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function Iy(e, t, n) {
  if (typeof e == "number" && typeof t == "number" && typeof n == "number")
    return Ty("#" + Ho(e) + Ho(t) + Ho(n));
  if (typeof e == "object" && t === void 0 && n === void 0)
    return Ty("#" + Ho(e.red) + Ho(e.green) + Ho(e.blue));
  throw new kr(6);
}
function iN(e, t, n, r) {
  if (typeof e == "string" && typeof t == "number") {
    var o = rN(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof n == "number" && typeof r == "number")
      return r >= 1 ? Iy(e, t, n) : "rgba(" + e + "," + t + "," + n + "," + r + ")";
    if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0)
      return e.alpha >= 1 ? Iy(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new kr(7);
}
const Oy = {
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
}, My = (e) => e.map((t) => `${t} cubic-bezier(0.4, 0, 0.2, 1) 150ms`).join(","), Dt = {
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
}, Lt = {
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
}, Og = jM({
  prefix: "mayumi",
  theme: {
    colors: {
      "blue-100": Dt[100]({ opacityValue: 1 }),
      "blue-200": Dt[200]({ opacityValue: 1 }),
      "blue-300": Dt[300]({ opacityValue: 1 }),
      "blue-400": Dt[400]({ opacityValue: 1 }),
      "blue-500": Dt[500]({ opacityValue: 1 }),
      "blue-600": Dt[600]({ opacityValue: 1 }),
      "blue-700": Dt[700]({ opacityValue: 1 }),
      "blue-800": Dt[800]({ opacityValue: 1 }),
      "blue-900": Dt[900]({ opacityValue: 1 }),
      "blue-1000": Dt[1e3]({ opacityValue: 1 }),
      "blue-1100": Dt[1100]({ opacityValue: 1 }),
      "blue-1200": Dt[1200]({ opacityValue: 1 }),
      "gray-100": Lt[100]({ opacityValue: 1 }),
      "gray-200": Lt[200]({ opacityValue: 1 }),
      "gray-300": Lt[300]({ opacityValue: 1 }),
      "gray-400": Lt[400]({ opacityValue: 1 }),
      "gray-500": Lt[500]({ opacityValue: 1 }),
      "gray-600": Lt[600]({ opacityValue: 1 }),
      "gray-700": Lt[700]({ opacityValue: 1 }),
      "gray-800": Lt[800]({ opacityValue: 1 }),
      "gray-900": Lt[900]({ opacityValue: 1 }),
      "gray-1000": Lt[1e3]({ opacityValue: 1 }),
      "gray-1100": Lt[1100]({ opacityValue: 1 }),
      "gray-1200": Lt[1200]({ opacityValue: 1 }),
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
    space: Oy,
    sizes: {
      ...Oy,
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
      backgroundColor: iN(GM("--mayumi-colors-underPageBackgroundColor", "#1e1e1e"), 0.85),
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
  themeMap: ZC
}), lN = Og.styled;
Og.globalCss;
Og.getCssText;
var Ny = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, nn = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, aN = (...e) => [...e].flat().filter(Boolean), e2 = (e, t) => {
  let n = {};
  for (let r in e)
    t != null && t.hasOwnProperty(r) ? n[r] = typeof e[r] == "object" ? e2(e[r], t[r]) : t[r] + " " + e[r] : n[r] = e[r];
  for (let r in t)
    n.hasOwnProperty(r) || (n[r] = t[r]);
  return n;
}, Dy = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
function sN() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = t2(t)) && (r && (r += " "), r += n);
  return r;
}
function t2(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = t2(e[r])) && (n && (n += " "), n += t);
  return n;
}
function Ch() {
  return Ch = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ch.apply(this, arguments);
}
var Mg = "-";
function uN(e) {
  var t = fN(e);
  function n(o) {
    var i = o.split(Mg);
    return i[0] === "" && i.length !== 1 && i.shift(), n2(i, t) || cN(o);
  }
  function r(o) {
    return e.conflictingClassGroups[o] || [];
  }
  return {
    getClassGroupId: n,
    getConflictingClassGroupIds: r
  };
}
function n2(e, t) {
  var n;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], o = t.nextPart.get(r), i = o ? n2(e.slice(1), o) : void 0;
  if (i)
    return i;
  if (t.validators.length !== 0) {
    var l = e.join(Mg);
    return (n = t.validators.find(function(a) {
      var s = a.validator;
      return s(l);
    })) == null ? void 0 : n.classGroupId;
  }
}
var Ly = /^\[(.+)\]$/;
function cN(e) {
  if (Ly.test(e)) {
    var t = Ly.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function fN(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = pN(Object.entries(e.classGroups), n);
  return o.forEach(function(i) {
    var l = i[0], a = i[1];
    $h(a, r, l, t);
  }), r;
}
function $h(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var i = o === "" ? t : Fy(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (dN(o)) {
        $h(o(r), t, n, r);
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
      $h(s, Fy(t, a), n, r);
    });
  });
}
function Fy(e, t) {
  var n = e;
  return t.split(Mg).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function dN(e) {
  return e.isThemeGetter;
}
function pN(e, t) {
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
function hN(e) {
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
var r2 = "!";
function mN(e) {
  var t = e.separator || ":";
  return function(r) {
    for (var o = 0, i = [], l = 0, a = 0; a < r.length; a++) {
      var s = r[a];
      o === 0 && s === t[0] && (t.length === 1 || r.slice(a, a + t.length) === t) && (i.push(r.slice(l, a)), l = a + t.length), s === "[" ? o++ : s === "]" && o--;
    }
    var u = i.length === 0 ? r : r.substring(l), c = u.startsWith(r2), f = c ? u.substring(1) : u;
    return {
      modifiers: i,
      hasImportantModifier: c,
      baseClassName: f
    };
  };
}
function gN(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function vN(e) {
  return Ch({
    cache: hN(e.cacheSize),
    splitModifiers: mN(e)
  }, uN(e));
}
var yN = /\s+/;
function xN(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(yN).map(function(l) {
    var a = n(l), s = a.modifiers, u = a.hasImportantModifier, c = a.baseClassName, f = r(c);
    if (!f)
      return {
        isTailwindClass: !1,
        originalClassName: l
      };
    var d = gN(s).join(":"), g = u ? d + r2 : d;
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
function Eh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, i, l = a;
  function a(u) {
    var c = t[0], f = t.slice(1), d = f.reduce(function(g, m) {
      return m(g);
    }, c());
    return r = vN(d), o = r.cache.get, i = r.cache.set, l = s, s(u);
  }
  function s(u) {
    var c = o(u);
    if (c)
      return c;
    var f = xN(u, r);
    return i(u, f), f;
  }
  return function() {
    return l(sN.apply(null, arguments));
  };
}
function Re(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var o2 = /^\[(?:([a-z-]+):)?(.+)\]$/i, wN = /^\d+\/\d+$/, bN = /* @__PURE__ */ new Set(["px", "full", "screen"]), SN = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, kN = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))/, CN = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function tn(e) {
  return Wl(e) || bN.has(e) || wN.test(e) || eo(e);
}
function eo(e) {
  return _o(e, "length", _N);
}
function $N(e) {
  return _o(e, "size", i2);
}
function EN(e) {
  return _o(e, "position", i2);
}
function AN(e) {
  return _o(e, "url", RN);
}
function Rd(e) {
  return _o(e, "number", Wl);
}
function Wl(e) {
  return !Number.isNaN(Number(e));
}
function hl(e) {
  return zy(e) || _o(e, "number", zy);
}
function Be(e) {
  return o2.test(e);
}
function ml() {
  return !0;
}
function dr(e) {
  return SN.test(e);
}
function PN(e) {
  return _o(e, "", TN);
}
function _o(e, t, n) {
  var r = o2.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function _N(e) {
  return kN.test(e);
}
function i2() {
  return !1;
}
function RN(e) {
  return e.startsWith("url(");
}
function zy(e) {
  return Number.isInteger(Number(e));
}
function TN(e) {
  return CN.test(e);
}
function Ah() {
  var e = Re("colors"), t = Re("spacing"), n = Re("blur"), r = Re("brightness"), o = Re("borderColor"), i = Re("borderRadius"), l = Re("borderSpacing"), a = Re("borderWidth"), s = Re("contrast"), u = Re("grayscale"), c = Re("hueRotate"), f = Re("invert"), d = Re("gap"), g = Re("gradientColorStops"), m = Re("inset"), v = Re("margin"), w = Re("opacity"), p = Re("padding"), y = Re("saturate"), x = Re("scale"), b = Re("sepia"), A = Re("skew"), S = Re("space"), E = Re("translate"), $ = function() {
    return ["auto", "contain", "none"];
  }, P = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, _ = function() {
    return ["auto", t];
  }, T = function() {
    return ["", tn];
  }, M = function() {
    return ["auto", Wl, Be];
  }, L = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, B = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, z = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, R = function() {
    return ["start", "end", "center", "between", "around", "evenly"];
  }, H = function() {
    return ["", "0", Be];
  }, N = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, I = function() {
    return [Wl, Rd];
  }, O = function() {
    return [Wl, Be];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [ml],
      spacing: [tn],
      blur: ["none", "", dr, eo],
      brightness: I(),
      borderColor: [e],
      borderRadius: ["none", "", "full", dr, eo],
      borderSpacing: [t],
      borderWidth: T(),
      contrast: I(),
      grayscale: H(),
      hueRotate: O(),
      invert: H(),
      gap: [t],
      gradientColorStops: [e],
      inset: _(),
      margin: _(),
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
        columns: [dr]
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
        object: [].concat(L(), [Be])
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
        inset: [m]
      }],
      "inset-x": [{
        "inset-x": [m]
      }],
      "inset-y": [{
        "inset-y": [m]
      }],
      top: [{
        top: [m]
      }],
      right: [{
        right: [m]
      }],
      bottom: [{
        bottom: [m]
      }],
      left: [{
        left: [m]
      }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{
        z: ["auto", hl]
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
        order: ["first", "last", "none", hl]
      }],
      "grid-cols": [{
        "grid-cols": [ml]
      }],
      "col-start-end": [{
        col: ["auto", {
          span: [hl]
        }, Be]
      }],
      "col-start": [{
        "col-start": M()
      }],
      "col-end": [{
        "col-end": M()
      }],
      "grid-rows": [{
        "grid-rows": [ml]
      }],
      "row-start-end": [{
        row: ["auto", {
          span: [hl]
        }, Be]
      }],
      "row-start": [{
        "row-start": M()
      }],
      "row-end": [{
        "row-end": M()
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
        justify: R()
      }],
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      "align-content": [{
        content: [].concat(R(), ["baseline"])
      }],
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      "place-content": [{
        "place-content": [].concat(R(), ["baseline", "stretch"])
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
        "min-w": ["min", "max", "fit", tn]
      }],
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [dr]
        }, dr, eo]
      }],
      h: [{
        h: [t, "auto", "min", "max", "fit"]
      }],
      "min-h": [{
        "min-h": ["min", "max", "fit", tn]
      }],
      "max-h": [{
        "max-h": [t, "min", "max", "fit"]
      }],
      "font-size": [{
        text: ["base", dr, eo]
      }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Rd]
      }],
      "font-family": [{
        font: [ml]
      }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", eo]
      }],
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", tn]
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
        decoration: [].concat(B(), ["wavy"])
      }],
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", tn]
      }],
      "underline-offset": [{
        "underline-offset": ["auto", tn]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", eo]
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
        bg: [].concat(L(), [EN])
      }],
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      "bg-size": [{
        bg: ["auto", "cover", "contain", $N]
      }],
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, AN]
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
        border: [].concat(B(), ["hidden"])
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
        "outline-offset": [tn]
      }],
      "outline-w": [{
        outline: [tn]
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
        "ring-offset": [tn]
      }],
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      shadow: [{
        shadow: ["", "inner", "none", dr, PN]
      }],
      "shadow-color": [{
        shadow: [ml]
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
        contrast: [s]
      }],
      "drop-shadow": [{
        "drop-shadow": ["", "none", dr, Be]
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
        rotate: [hl, Be]
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
        stroke: [tn, Rd]
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
var IN = /* @__PURE__ */ Eh(Ah);
function ON(e, t) {
  for (var n in t)
    l2(e, n, t[n]);
  return e;
}
var MN = Object.prototype.hasOwnProperty, NN = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function l2(e, t, n) {
  if (!MN.call(e, t) || NN.has(typeof n) || n === null) {
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
      l2(e[t], r, n[r]);
  }
}
function DN(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return typeof e == "function" ? Eh.apply(void 0, [Ah, e].concat(n)) : Eh.apply(void 0, [function() {
    return ON(Ah(), e);
  }].concat(n));
}
var tc = (...e) => e.flat(1 / 0).filter(Boolean).join(" "), gl = (...e) => (t = {}) => t.twMerge ? (nn(t.twMergeConfig) ? IN : DN(t.twMergeConfig))(tc(e)) : tc(e), By = (e, t) => {
  let n = {};
  return typeof e != "object" || typeof t != "object" || Object.keys(e).forEach((r) => {
    t[r] ? n[r] = tc([e[r], t[r]]) : n[r] = e[r];
  }), n;
}, LN = { twMerge: !0, twMergeConfig: {} }, FN = (e, t = LN) => {
  var n, r, o, i, l;
  let { slots: a = {}, variants: s = {}, compoundVariants: u = [], defaultVariants: c = {} } = e, f = tc((n = e == null ? void 0 : e.extend) == null ? void 0 : n.base, e == null ? void 0 : e.base), d = e2(s, (r = e == null ? void 0 : e.extend) == null ? void 0 : r.variants), g = Object.assign({}, (o = e == null ? void 0 : e.extend) == null ? void 0 : o.defaultVariants, c), m = nn(a) ? {} : { base: e == null ? void 0 : e.base, ...a }, v = nn((i = e == null ? void 0 : e.extend) == null ? void 0 : i.slots) ? m : By((l = e == null ? void 0 : e.extend) == null ? void 0 : l.slots, nn(m) ? { base: e == null ? void 0 : e.base } : m), w = (y) => {
    var x, b, A;
    if (nn(d) && nn(a) && nn((x = e == null ? void 0 : e.extend) == null ? void 0 : x.slots))
      return gl(f, y == null ? void 0 : y.class, y == null ? void 0 : y.className)(t);
    if (u && !Array.isArray(u))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof u}`);
    let S = (B, z, R = [], H) => {
      let N = R;
      if (typeof z == "string")
        N.push(Dy(z).split(" ").map((I) => `${B}:${I}`));
      else if (Array.isArray(z))
        N.push(z.flatMap((I) => `${B}:${I}`));
      else if (typeof z == "object" && typeof H == "string") {
        let I = z == null ? void 0 : z[H];
        if (I && typeof I == "string") {
          let O = Dy(I);
          N[H] = N[H] ? [...N[H], ...O.split(" ").map((k) => `${B}:${k}`)] : O.split(" ").map((k) => `${B}:${k}`);
        } else
          Array.isArray(I) && I.length > 0 && (N[H] = I.flatMap((O) => `${B}:${O}`));
      }
      return N;
    }, E = (B, z = d, R = null) => {
      let H = z == null ? void 0 : z[B];
      if (typeof H != "object" || nn(H))
        return null;
      let N = y == null ? void 0 : y[B], I = g == null ? void 0 : g[B], O = [];
      if (N === null)
        return null;
      let k = Ny(N);
      typeof k == "object" && (O = Object.keys(k).reduce((J, ne) => {
        let ae = k[ne], ee = H == null ? void 0 : H[ae];
        return ne === "initial" ? (I = ae, J) : S(ne, ee, J, R);
      }, []));
      let C = H[k] || H[Ny(I)];
      return typeof O == "object" && typeof R == "string" && O[R] ? By(O, C) : O.length > 0 ? [C, ...O] : C;
    }, $ = () => d ? Object.keys(d).map((B) => E(B, d)) : null, P = (B) => !d || typeof d != "object" ? null : Object.keys(d).map((z) => {
      let R = E(z, d, B);
      return B === "base" && typeof R == "string" ? R : R && R[B];
    }).filter(Boolean), _ = y && Object.fromEntries(Object.entries(y).filter(([, B]) => B !== void 0)), T = (B = []) => B == null ? void 0 : B.filter(({ class: z, className: R, ...H }) => Object.entries(H).every(([N, I]) => {
      var O;
      let k = typeof (y == null ? void 0 : y[N]) == "object" ? (O = y[N]) == null ? void 0 : O.initial : {}, C = { ...g, ...k, ..._ };
      return Array.isArray(I) ? I.includes(C[N]) : C[N] === I;
    })).flatMap(({ class: z, className: R }) => [z, R]), M = () => {
      var B;
      let z = T(u), R = T((B = e == null ? void 0 : e.extend) == null ? void 0 : B.compoundVariants);
      return aN(R, z);
    }, L = () => {
      let B = M();
      return Array.isArray(B) ? B.reduce((z, R) => (typeof R == "string" && (z.base = gl(z.base, R)(t)), typeof R == "object" && Object.entries(R).forEach(([H, N]) => {
        z[H] = gl(z[H], N)(t);
      }), z), {}) : B;
    };
    if (!nn(a) || !nn((b = e == null ? void 0 : e.extend) == null ? void 0 : b.slots)) {
      let B = (A = L()) != null ? A : [];
      return { ...typeof v == "object" && !nn(v) ? Object.keys(v).reduce((z, R) => (z[R] = (H) => gl(v[R], P(R), B == null ? void 0 : B[R], H == null ? void 0 : H.class, H == null ? void 0 : H.className)(t), z), {}) : {} };
    }
    return gl(f, $(), M(), y == null ? void 0 : y.class, y == null ? void 0 : y.className)(t);
  }, p = () => {
    if (!(!d || typeof d != "object"))
      return Object.keys(d);
  };
  return w.variantKeys = p(), w.base = f, w.slots = v, w.variants = d, w.defaultVariants = g, w.compoundVariants = u, w;
};
const zN = FN({
  slots: {
    base: "text-mayumi-gray-1200 bg-mayumi-gray-400 outline-none relative w-full border-box inline-flex items-center justify-start overflow-visible rounded-md p-2 text-sm",
    input: "appearance-none bg-mayumi-gray-400 border-none bg-transparent outline-none w-full box-border indent-1 rounded-md",
    effect: [
      "absolute",
      "top-0",
      "left-0",
      "w-full",
      "h-full",
      "rounded-md",
      "pointer-events-none",
      "transform-origin-center"
    ]
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
}), BN = lN("div", {
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
}), jN = {
  mass: 1,
  tension: 210,
  friction: 26,
  precision: 0.01,
  velocity: 0
}, Ng = He.forwardRef(({
  style: e,
  className: t,
  prefix: n,
  size: r,
  css: o,
  ghost: i = !1,
  light: l = !1,
  ...a
}, s) => {
  const u = h.exports.useRef(null), [c, f] = h.exports.useState(!1), [d, g] = h.exports.useState(a.defaultValue), m = (A) => {
    var S;
    g(A.target.value), (S = a == null ? void 0 : a.onChange) == null || S.call(a, A);
  }, v = "value" in a, w = h.exports.useMemo(() => v ? a.value : d, [v, d, a.value]);
  h.exports.useImperativeHandle(s, () => u.current);
  const p = Y9({
    transform: c ? "scale(1, 1)" : "scale(1.2, 1.5)",
    duration: 50,
    config: jN
  });
  hM(u, () => f(!1));
  const {
    base: y,
    effect: x,
    input: b
  } = zN({
    focus: c,
    light: l,
    ghost: i,
    size: r
  });
  return /* @__PURE__ */ se(BN, {
    style: e,
    className: Sy("mayumi-input", y(), t),
    css: o,
    size: r,
    children: [n && /* @__PURE__ */ D("span", {
      className: "mayumi-input-icon",
      children: n
    }), !i && !l && He.createElement(pM.div, {
      className: Sy("mayumi-input-effect", x()),
      style: p
    }), /* @__PURE__ */ D("input", {
      ...a,
      value: w,
      onFocus: () => {
        f(!0);
      },
      className: b(),
      ref: u,
      onChange: m
    })]
  });
});
Ng.displayName = "input";
function Lr({
  children: e,
  value: t,
  isCommand: n = !1,
  onSelect: r,
  disabled: o = !1,
  meta: i = "Application"
}) {
  return /* @__PURE__ */ se(_t.Item, {
    disabled: o,
    value: t,
    onSelect: r,
    children: [e, /* @__PURE__ */ D("span", {
      "cmdk-raycast-meta": "",
      children: n ? "Command" : i
    })]
  });
}
function Ur({
  children: e,
  shortcut: t,
  value: n,
  onSelect: r
}) {
  return /* @__PURE__ */ se(_t.Item, {
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
const HN = (e) => /* @__PURE__ */ h.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ h.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 5.5H9C10.1046 5.5 11 6.39543 11 7.5V16.5C11 17.0523 10.5523 17.5 10 17.5H4C3.44772 17.5 3 17.0523 3 16.5V6.5C3 5.94772 3.44772 5.5 4 5.5ZM14 19.5C13.6494 19.5 13.3128 19.4398 13 19.3293V19.5C13 20.0523 12.5523 20.5 12 20.5C11.4477 20.5 11 20.0523 11 19.5V19.3293C10.6872 19.4398 10.3506 19.5 10 19.5H4C2.34315 19.5 1 18.1569 1 16.5V6.5C1 4.84315 2.34315 3.5 4 3.5H9C10.1947 3.5 11.2671 4.02376 12 4.85418C12.7329 4.02376 13.8053 3.5 15 3.5H20C21.6569 3.5 23 4.84315 23 6.5V16.5C23 18.1569 21.6569 19.5 20 19.5H14ZM13 7.5V16.5C13 17.0523 13.4477 17.5 14 17.5H20C20.5523 17.5 21 17.0523 21 16.5V6.5C21 5.94772 20.5523 5.5 20 5.5H15C13.8954 5.5 13 6.39543 13 7.5ZM5 7.5H9V9.5H5V7.5ZM15 7.5H19V9.5H15V7.5ZM19 10.5H15V12.5H19V10.5ZM5 10.5H9V12.5H5V10.5ZM19 13.5H15V15.5H19V13.5ZM5 13.5H9V15.5H5V13.5Z", fill: "currentColor" })), Cl = "ask-chatgpt", VN = "query-tabs", UN = "update-tabs", jy = {
  QUERY_TABS: VN,
  ASK_CHATGPT: Cl,
  UPATE_TABS: UN
}, nc = "ask-chatgpt-with", Ta = "translate-with", WN = "summary-with", qN = "open-convenstions-history", GN = "clear-storage", Tn = {
  ASK_CHATGPT_WITH: nc,
  TRANSLATE_WITH: Ta,
  SUMMARY_WITH: WN,
  OPEN_HISTORY: qN,
  CLEAR_STORAGE: GN
}, rc = "ask-chatgpt-with-page", a2 = "config-page", Ia = "translate-with-page", QN = "summary-with-page", oi = "home-page", KN = "search-tabs-page", Pe = {
  ASK_CHATGPT_PAGE: rc,
  CONFIG_PAGE: a2,
  TRANSLATE_WITH_PAGE: Ia,
  HOME_PAGE: oi,
  SUMMARY_WITH_PAGE: QN,
  SEARCH_TABS_PAGE: KN
}, YN = {
  [Pe.ASK_CHATGPT_PAGE]: {
    hasChat: !0
  },
  [Pe.SUMMARY_WITH_PAGE]: {
    hasChat: !0
  },
  [Pe.TRANSLATE_WITH_PAGE]: {
    hasChat: !0
  },
  [Pe.SEARCH_TABS_PAGE]: {
    hasChat: !1
  },
  [Pe.CONFIG_PAGE]: {
    hasChat: !1
  },
  [Pe.HOME_PAGE]: {
    hasChat: !1
  }
}, XN = "OPENAI_API_KEY", Hy = "options";
function ZN() {
  const {
    updateHistoryOpen: e,
    setOpen: t
  } = En();
  return /* @__PURE__ */ se(Lr, {
    isCommand: !0,
    value: Tn.OPEN_HISTORY,
    onSelect: () => {
      t(!1), e(!0);
    },
    children: [/* @__PURE__ */ D(HN, {}), "View History"]
  });
}
function JN() {
  const {
    updateHistoryOpen: e,
    setOpen: t
  } = En();
  return /* @__PURE__ */ D(Ct, {
    children: /* @__PURE__ */ D(Ur, {
      value: Tn.OPEN_HISTORY,
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
const eD = (e) => /* @__PURE__ */ h.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ h.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z", fill: "currentColor" }), /* @__PURE__ */ h.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z", fill: "currentColor" }));
function tD({
  onSelect: e
}) {
  return /* @__PURE__ */ se(Lr, {
    isCommand: !0,
    onSelect: () => e(Pe.CONFIG_PAGE),
    value: Pe.CONFIG_PAGE,
    children: [/* @__PURE__ */ D(eD, {}), "Config"]
  });
}
function nD({
  onSelect: e
}) {
  return /* @__PURE__ */ D(Ct, {
    children: /* @__PURE__ */ D(Ur, {
      value: Pe.CONFIG_PAGE,
      onSelect: () => e(Pe.CONFIG_PAGE),
      shortcut: "\u21B5",
      children: /* @__PURE__ */ D("span", {
        className: "truncate",
        children: "Config"
      })
    })
  });
}
function rD({
  onSelect: e
}) {
  return /* @__PURE__ */ D(Lr, {
    isCommand: !0,
    onSelect: () => e(Pe.SEARCH_TABS_PAGE),
    value: Pe.SEARCH_TABS_PAGE,
    children: "Search Tabs"
  });
}
const oD = (e) => /* @__PURE__ */ h.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ h.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 6V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V6H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H17ZM15 5H9V6H15V5ZM17 8H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8Z", fill: "currentColor" })), iD = () => ({
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
}), s2 = iD();
function lD() {
  const {
    clear: e
  } = xo();
  return /* @__PURE__ */ se(Lr, {
    isCommand: !0,
    value: Tn.CLEAR_STORAGE,
    onSelect: () => {
      e(), s2.clear();
    },
    children: [/* @__PURE__ */ D(oD, {}), "Clear Storage"]
  });
}
function aD() {
  const {
    clear: e
  } = xo();
  return /* @__PURE__ */ D(Ct, {
    children: /* @__PURE__ */ D(Ur, {
      value: Tn.CLEAR_STORAGE,
      onSelect: () => {
        e(), s2.clear();
      },
      shortcut: "\u21B5",
      children: /* @__PURE__ */ D("span", {
        className: "truncate",
        children: "Clear Storage"
      })
    })
  });
}
function sD(e) {
  const {
    setSubCommandOpen: t
  } = En();
  return /* @__PURE__ */ D(Ur, {
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
function uD({
  onSelect: e
}) {
  return /* @__PURE__ */ se(Lr, {
    isCommand: !0,
    onSelect: () => e(Pe.SUMMARY_WITH_PAGE),
    value: Pe.SUMMARY_WITH_PAGE,
    children: [/* @__PURE__ */ D("i", {
      className: "gg-notes/0.8 text-mayumi-gray-1200"
    }), "Summary"]
  });
}
function cD({
  onSelect: e
}) {
  return /* @__PURE__ */ se(Ct, {
    children: [/* @__PURE__ */ D(Ur, {
      value: Tn.SUMMARY_WITH,
      onSelect: () => {
        var t;
        return e(Tn.SUMMARY_WITH, {
          text: (t = document.body.textContent) != null ? t : ""
        });
      },
      shortcut: "\u21B5",
      children: /* @__PURE__ */ D("span", {
        className: "truncate",
        children: "Summary current page"
      })
    }), /* @__PURE__ */ D(sD, {
      page: Pe.SUMMARY_WITH_PAGE,
      onSelect: e
    })]
  });
}
function fD() {
  const [e, t] = h.exports.useState();
  h.exports.useEffect(() => {
    (async () => {
      const {
        tabs: o
      } = await so(jy.QUERY_TABS, {});
      t(o);
    })();
  }, []);
  const n = async (r) => {
    const o = await so(jy.UPATE_TABS, {
      active: !0,
      tabId: r.id
    });
    console.debug(o);
  };
  return /* @__PURE__ */ se(Ct, {
    children: [/* @__PURE__ */ D(_t.Empty, {
      children: "No results found."
    }), /* @__PURE__ */ D(_t.Group, {
      heading: "Tabs",
      children: e == null ? void 0 : e.map((r) => /* @__PURE__ */ D(Lr, {
        value: r.title,
        meta: "Tab",
        onSelect: () => {
          n(r);
        },
        children: r.title
      }, r.id))
    })]
  });
}
function dD(e) {
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
function Ph(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function pD(e) {
  const t = e + "CollectionProvider", [n, r] = ji(t), [o, i] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), l = (g) => {
    const { scope: m, children: v } = g, w = He.useRef(null), p = He.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ He.createElement(o, {
      scope: m,
      itemMap: p,
      collectionRef: w
    }, v);
  }, a = e + "CollectionSlot", s = /* @__PURE__ */ He.forwardRef((g, m) => {
    const { scope: v, children: w } = g, p = i(a, v), y = Ce(m, p.collectionRef);
    return /* @__PURE__ */ He.createElement(Ti, {
      ref: y
    }, w);
  }), u = e + "CollectionItemSlot", c = "data-radix-collection-item", f = /* @__PURE__ */ He.forwardRef((g, m) => {
    const { scope: v, children: w, ...p } = g, y = He.useRef(null), x = Ce(m, y), b = i(u, v);
    return He.useEffect(() => (b.itemMap.set(y, {
      ref: y,
      ...p
    }), () => void b.itemMap.delete(y))), /* @__PURE__ */ He.createElement(Ti, {
      [c]: "",
      ref: x
    }, w);
  });
  function d(g) {
    const m = i(e + "CollectionConsumer", g);
    return He.useCallback(() => {
      const w = m.collectionRef.current;
      if (!w)
        return [];
      const p = Array.from(w.querySelectorAll(`[${c}]`));
      return Array.from(m.itemMap.values()).sort(
        (b, A) => p.indexOf(b.ref.current) - p.indexOf(A.ref.current)
      );
    }, [
      m.collectionRef,
      m.itemMap
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
const hD = /* @__PURE__ */ h.exports.createContext(void 0);
function u2(e) {
  const t = h.exports.useContext(hD);
  return e || t || "ltr";
}
function mD(e) {
  const t = h.exports.useRef({
    value: e,
    previous: e
  });
  return h.exports.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const gD = /* @__PURE__ */ h.exports.forwardRef((e, t) => /* @__PURE__ */ h.exports.createElement(Ue.span, Z({}, e, {
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
}))), vD = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], yD = [
  " ",
  "Enter"
], ef = "Select", [tf, nf, xD] = pD(ef), [Gi, Iz] = ji(ef, [
  xD,
  Hc
]), Dg = Hc(), [wD, Ro] = Gi(ef), [bD, SD] = Gi(ef), kD = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: i, value: l, defaultValue: a, onValueChange: s, dir: u, name: c, autoComplete: f, disabled: d, required: g } = e, m = Dg(t), [v, w] = h.exports.useState(null), [p, y] = h.exports.useState(null), [x, b] = h.exports.useState(!1), A = u2(u), [S = !1, E] = Uu({
    prop: r,
    defaultProp: o,
    onChange: i
  }), [$, P] = Uu({
    prop: l,
    defaultProp: a,
    onChange: s
  }), _ = h.exports.useRef(null), T = v ? Boolean(v.closest("form")) : !0, [M, L] = h.exports.useState(/* @__PURE__ */ new Set()), B = Array.from(M).map(
    (z) => z.props.value
  ).join(";");
  return /* @__PURE__ */ h.exports.createElement(Uk, m, /* @__PURE__ */ h.exports.createElement(wD, {
    required: g,
    scope: t,
    trigger: v,
    onTriggerChange: w,
    valueNode: p,
    onValueNodeChange: y,
    valueNodeHasChildren: x,
    onValueNodeHasChildrenChange: b,
    contentId: vi(),
    value: $,
    onValueChange: P,
    open: S,
    onOpenChange: E,
    dir: A,
    triggerPointerDownPosRef: _,
    disabled: d
  }, /* @__PURE__ */ h.exports.createElement(tf.Provider, {
    scope: t
  }, /* @__PURE__ */ h.exports.createElement(bD, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: h.exports.useCallback((z) => {
      L(
        (R) => new Set(R).add(z)
      );
    }, []),
    onNativeOptionRemove: h.exports.useCallback((z) => {
      L((R) => {
        const H = new Set(R);
        return H.delete(z), H;
      });
    }, [])
  }, n)), T ? /* @__PURE__ */ h.exports.createElement(d2, {
    key: B,
    "aria-hidden": !0,
    required: g,
    tabIndex: -1,
    name: c,
    autoComplete: f,
    value: $,
    onChange: (z) => P(z.target.value),
    disabled: d
  }, $ === void 0 ? /* @__PURE__ */ h.exports.createElement("option", {
    value: ""
  }) : null, Array.from(M)) : null));
}, CD = "SelectTrigger", $D = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = Dg(n), l = Ro(CD, n), a = l.disabled || r, s = Ce(t, l.onTriggerChange), u = nf(n), [c, f, d] = p2((m) => {
    const v = u().filter(
      (y) => !y.disabled
    ), w = v.find(
      (y) => y.value === l.value
    ), p = h2(v, m, w);
    p !== void 0 && l.onValueChange(p.value);
  }), g = () => {
    a || (l.onOpenChange(!0), d());
  };
  return /* @__PURE__ */ h.exports.createElement(Wk, Z({
    asChild: !0
  }, i), /* @__PURE__ */ h.exports.createElement(Ue.button, Z({
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
    onClick: ye(o.onClick, (m) => {
      m.currentTarget.focus();
    }),
    onPointerDown: ye(o.onPointerDown, (m) => {
      const v = m.target;
      v.hasPointerCapture(m.pointerId) && v.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && (g(), l.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      }, m.preventDefault());
    }),
    onKeyDown: ye(o.onKeyDown, (m) => {
      const v = c.current !== "";
      !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && f(m.key), !(v && m.key === " ") && vD.includes(m.key) && (g(), m.preventDefault());
    })
  })));
}), ED = "SelectValue", AD = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: i, placeholder: l, ...a } = e, s = Ro(ED, n), { onValueNodeHasChildrenChange: u } = s, c = i !== void 0, f = Ce(t, s.onValueNodeChange);
  return Ze(() => {
    u(c);
  }, [
    u,
    c
  ]), /* @__PURE__ */ h.exports.createElement(Ue.span, Z({}, a, {
    ref: f,
    style: {
      pointerEvents: "none"
    }
  }), s.value === void 0 && l !== void 0 ? l : i);
}), PD = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ h.exports.createElement(Ue.span, Z({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "\u25BC");
}), _D = (e) => /* @__PURE__ */ h.exports.createElement(vk, Z({
  asChild: !0
}, e)), Mi = "SelectContent", RD = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const n = Ro(Mi, e.__scopeSelect), [r, o] = h.exports.useState();
  if (Ze(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const i = r;
    return i ? /* @__PURE__ */ Yt.exports.createPortal(/* @__PURE__ */ h.exports.createElement(c2, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ h.exports.createElement(tf.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ h.exports.createElement("div", null, e.children))), i) : null;
  }
  return /* @__PURE__ */ h.exports.createElement(TD, Z({}, e, {
    ref: t
  }));
}), Bn = 10, [c2, To] = Gi(Mi), TD = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
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
    sticky: m,
    hideWhenDetached: v,
    avoidCollisions: w,
    ...p
  } = e, y = Ro(Mi, n), [x, b] = h.exports.useState(null), [A, S] = h.exports.useState(null), E = Ce(
    t,
    (G) => b(G)
  ), [$, P] = h.exports.useState(null), [_, T] = h.exports.useState(null), M = nf(n), [L, B] = h.exports.useState(!1), z = h.exports.useRef(!1);
  h.exports.useEffect(() => {
    if (x)
      return ug(x);
  }, [
    x
  ]), sg();
  const R = h.exports.useCallback((G) => {
    const [ie, ...xe] = M().map(
      (ue) => ue.ref.current
    ), [ce] = xe.slice(-1), de = document.activeElement;
    for (const ue of G)
      if (ue === de || (ue == null || ue.scrollIntoView({
        block: "nearest"
      }), ue === ie && A && (A.scrollTop = 0), ue === ce && A && (A.scrollTop = A.scrollHeight), ue == null || ue.focus(), document.activeElement !== de))
        return;
  }, [
    M,
    A
  ]), H = h.exports.useCallback(
    () => R([
      $,
      x
    ]),
    [
      R,
      $,
      x
    ]
  );
  h.exports.useEffect(() => {
    L && H();
  }, [
    L,
    H
  ]);
  const { onOpenChange: N, triggerPointerDownPosRef: I } = y;
  h.exports.useEffect(() => {
    if (x) {
      let G = {
        x: 0,
        y: 0
      };
      const ie = (ce) => {
        var de, ue, at, st;
        G = {
          x: Math.abs(Math.round(ce.pageX) - ((de = (ue = I.current) === null || ue === void 0 ? void 0 : ue.x) !== null && de !== void 0 ? de : 0)),
          y: Math.abs(Math.round(ce.pageY) - ((at = (st = I.current) === null || st === void 0 ? void 0 : st.y) !== null && at !== void 0 ? at : 0))
        };
      }, xe = (ce) => {
        G.x <= 10 && G.y <= 10 ? ce.preventDefault() : x.contains(ce.target) || N(!1), document.removeEventListener("pointermove", ie), I.current = null;
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
    N,
    I
  ]), h.exports.useEffect(() => {
    const G = () => N(!1);
    return window.addEventListener("blur", G), window.addEventListener("resize", G), () => {
      window.removeEventListener("blur", G), window.removeEventListener("resize", G);
    };
  }, [
    N
  ]);
  const [O, k] = p2((G) => {
    const ie = M().filter(
      (de) => !de.disabled
    ), xe = ie.find(
      (de) => de.ref.current === document.activeElement
    ), ce = h2(ie, G, xe);
    ce && setTimeout(
      () => ce.ref.current.focus()
    );
  }), C = h.exports.useCallback((G, ie, xe) => {
    const ce = !z.current && !xe;
    (y.value !== void 0 && y.value === ie || ce) && (P(G), ce && (z.current = !0));
  }, [
    y.value
  ]), J = h.exports.useCallback(
    () => x == null ? void 0 : x.focus(),
    [
      x
    ]
  ), ne = h.exports.useCallback((G, ie, xe) => {
    const ce = !z.current && !xe;
    (y.value !== void 0 && y.value === ie || ce) && T(G);
  }, [
    y.value
  ]), ae = r === "popper" ? Vy : ID, ee = ae === Vy ? {
    side: a,
    sideOffset: s,
    align: u,
    alignOffset: c,
    arrowPadding: f,
    collisionBoundary: d,
    collisionPadding: g,
    sticky: m,
    hideWhenDetached: v,
    avoidCollisions: w
  } : {};
  return /* @__PURE__ */ h.exports.createElement(c2, {
    scope: n,
    content: x,
    viewport: A,
    onViewportChange: S,
    itemRefCallback: C,
    selectedItem: $,
    onItemLeave: J,
    itemTextRefCallback: ne,
    focusSelectedItem: H,
    selectedItemText: _,
    position: r,
    isPositioned: L,
    searchRef: O
  }, /* @__PURE__ */ h.exports.createElement(Ek, {
    as: Ti,
    allowPinchZoom: !0
  }, /* @__PURE__ */ h.exports.createElement(ag, {
    asChild: !0,
    trapped: y.open,
    onMountAutoFocus: (G) => {
      G.preventDefault();
    },
    onUnmountAutoFocus: ye(o, (G) => {
      var ie;
      (ie = y.trigger) === null || ie === void 0 || ie.focus({
        preventScroll: !0
      }), G.preventDefault();
    })
  }, /* @__PURE__ */ h.exports.createElement(lg, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: i,
    onPointerDownOutside: l,
    onFocusOutside: (G) => G.preventDefault(),
    onDismiss: () => y.onOpenChange(!1)
  }, /* @__PURE__ */ h.exports.createElement(ae, Z({
    role: "listbox",
    id: y.contentId,
    "data-state": y.open ? "open" : "closed",
    dir: y.dir,
    onContextMenu: (G) => G.preventDefault()
  }, p, ee, {
    onPlaced: () => B(!0),
    ref: E,
    style: {
      display: "flex",
      flexDirection: "column",
      outline: "none",
      ...p.style
    },
    onKeyDown: ye(p.onKeyDown, (G) => {
      const ie = G.ctrlKey || G.altKey || G.metaKey;
      if (G.key === "Tab" && G.preventDefault(), !ie && G.key.length === 1 && k(G.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(G.key)) {
        let ce = M().filter(
          (de) => !de.disabled
        ).map(
          (de) => de.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(G.key) && (ce = ce.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(G.key)) {
          const de = G.target, ue = ce.indexOf(de);
          ce = ce.slice(ue + 1);
        }
        setTimeout(
          () => R(ce)
        ), G.preventDefault();
      }
    })
  }))))));
}), ID = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = Ro(Mi, n), l = To(Mi, n), [a, s] = h.exports.useState(null), [u, c] = h.exports.useState(null), f = Ce(
    t,
    (E) => c(E)
  ), d = nf(n), g = h.exports.useRef(!1), m = h.exports.useRef(!0), { viewport: v, selectedItem: w, selectedItemText: p, focusSelectedItem: y } = l, x = h.exports.useCallback(() => {
    if (i.trigger && i.valueNode && a && u && v && w && p) {
      const E = i.trigger.getBoundingClientRect(), $ = u.getBoundingClientRect(), P = i.valueNode.getBoundingClientRect(), _ = p.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const de = _.left - $.left, ue = P.left - de, at = E.left - ue, st = E.width + at, Wr = Math.max(st, $.width), nr = window.innerWidth - Bn, rr = Ph(ue, [
          Bn,
          nr - Wr
        ]);
        a.style.minWidth = st + "px", a.style.left = rr + "px";
      } else {
        const de = $.right - _.right, ue = window.innerWidth - P.right - de, at = window.innerWidth - E.right - ue, st = E.width + at, Wr = Math.max(st, $.width), nr = window.innerWidth - Bn, rr = Ph(ue, [
          Bn,
          nr - Wr
        ]);
        a.style.minWidth = st + "px", a.style.right = rr + "px";
      }
      const T = d(), M = window.innerHeight - Bn * 2, L = v.scrollHeight, B = window.getComputedStyle(u), z = parseInt(B.borderTopWidth, 10), R = parseInt(B.paddingTop, 10), H = parseInt(B.borderBottomWidth, 10), N = parseInt(B.paddingBottom, 10), I = z + R + L + N + H, O = Math.min(w.offsetHeight * 5, I), k = window.getComputedStyle(v), C = parseInt(k.paddingTop, 10), J = parseInt(k.paddingBottom, 10), ne = E.top + E.height / 2 - Bn, ae = M - ne, ee = w.offsetHeight / 2, G = w.offsetTop + ee, ie = z + R + G, xe = I - ie;
      if (ie <= ne) {
        const de = w === T[T.length - 1].ref.current;
        a.style.bottom = "0px";
        const ue = u.clientHeight - v.offsetTop - v.offsetHeight, at = Math.max(ae, ee + (de ? J : 0) + ue + H), st = ie + at;
        a.style.height = st + "px";
      } else {
        const de = w === T[0].ref.current;
        a.style.top = "0px";
        const at = Math.max(ne, z + v.offsetTop + (de ? C : 0) + ee) + xe;
        a.style.height = at + "px", v.scrollTop = ie - ne + v.offsetTop;
      }
      a.style.margin = `${Bn}px 0`, a.style.minHeight = O + "px", a.style.maxHeight = M + "px", r == null || r(), requestAnimationFrame(
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
  Ze(
    () => x(),
    [
      x
    ]
  );
  const [b, A] = h.exports.useState();
  Ze(() => {
    u && A(window.getComputedStyle(u).zIndex);
  }, [
    u
  ]);
  const S = h.exports.useCallback((E) => {
    E && m.current === !0 && (x(), y == null || y(), m.current = !1);
  }, [
    x,
    y
  ]);
  return /* @__PURE__ */ h.exports.createElement(OD, {
    scope: n,
    contentWrapper: a,
    shouldExpandOnScrollRef: g,
    onScrollButtonChange: S
  }, /* @__PURE__ */ h.exports.createElement("div", {
    ref: s,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: b
    }
  }, /* @__PURE__ */ h.exports.createElement(Ue.div, Z({}, o, {
    ref: f,
    style: {
      boxSizing: "border-box",
      maxHeight: "100%",
      ...o.style
    }
  }))));
}), Vy = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Bn, ...i } = e, l = Dg(n);
  return /* @__PURE__ */ h.exports.createElement(qk, Z({}, l, i, {
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
}), [OD, Lg] = Gi(Mi, {}), Uy = "SelectViewport", MD = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = To(Uy, n), i = Lg(Uy, n), l = Ce(t, o.onViewportChange), a = h.exports.useRef(0);
  return /* @__PURE__ */ h.exports.createElement(h.exports.Fragment, null, /* @__PURE__ */ h.exports.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ h.exports.createElement(tf.Slot, {
    scope: n
  }, /* @__PURE__ */ h.exports.createElement(Ue.div, Z({
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
          const g = window.innerHeight - Bn * 2, m = parseFloat(c.style.minHeight), v = parseFloat(c.style.height), w = Math.max(m, v);
          if (w < g) {
            const p = w + d, y = Math.min(g, p), x = p - y;
            c.style.height = y + "px", c.style.bottom === "0px" && (u.scrollTop = x > 0 ? x : 0, c.style.justifyContent = "flex-end");
          }
        }
      }
      a.current = u.scrollTop;
    })
  }))));
}), ND = "SelectGroup";
Gi(ND);
const _h = "SelectItem", [DD, LD] = Gi(_h), FD = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: i, ...l } = e, a = Ro(_h, n), s = To(_h, n), u = a.value === r, [c, f] = h.exports.useState(i != null ? i : ""), [d, g] = h.exports.useState(!1), m = Ce(t, (p) => {
    var y;
    return (y = s.itemRefCallback) === null || y === void 0 ? void 0 : y.call(s, p, r, o);
  }), v = vi(), w = () => {
    o || (a.onValueChange(r), a.onOpenChange(!1));
  };
  return /* @__PURE__ */ h.exports.createElement(DD, {
    scope: n,
    value: r,
    disabled: o,
    textId: v,
    isSelected: u,
    onItemTextChange: h.exports.useCallback((p) => {
      f((y) => {
        var x;
        return y || ((x = p == null ? void 0 : p.textContent) !== null && x !== void 0 ? x : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ h.exports.createElement(tf.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: c
  }, /* @__PURE__ */ h.exports.createElement(Ue.div, Z({
    role: "option",
    "aria-labelledby": v,
    "data-highlighted": d ? "" : void 0,
    "aria-selected": u && d,
    "data-state": u ? "checked" : "unchecked",
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0,
    tabIndex: o ? void 0 : -1
  }, l, {
    ref: m,
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
      ((y = s.searchRef) === null || y === void 0 ? void 0 : y.current) !== "" && p.key === " " || (yD.includes(p.key) && w(), p.key === " " && p.preventDefault());
    })
  }))));
}), Fs = "SelectItemText", zD = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...i } = e, l = Ro(Fs, n), a = To(Fs, n), s = LD(Fs, n), u = SD(Fs, n), [c, f] = h.exports.useState(null), d = Ce(
    t,
    (p) => f(p),
    s.onItemTextChange,
    (p) => {
      var y;
      return (y = a.itemTextRefCallback) === null || y === void 0 ? void 0 : y.call(a, p, s.value, s.disabled);
    }
  ), g = c == null ? void 0 : c.textContent, m = h.exports.useMemo(
    () => /* @__PURE__ */ h.exports.createElement("option", {
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
  return Ze(() => (v(m), () => w(m)), [
    v,
    w,
    m
  ]), /* @__PURE__ */ h.exports.createElement(h.exports.Fragment, null, /* @__PURE__ */ h.exports.createElement(Ue.span, Z({
    id: s.textId
  }, i, {
    ref: d
  })), s.isSelected && l.valueNode && !l.valueNodeHasChildren ? /* @__PURE__ */ Yt.exports.createPortal(i.children, l.valueNode) : null);
}), Wy = "SelectScrollUpButton", BD = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const n = To(Wy, e.__scopeSelect), r = Lg(Wy, e.__scopeSelect), [o, i] = h.exports.useState(!1), l = Ce(t, r.onScrollButtonChange);
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
  ]), o ? /* @__PURE__ */ h.exports.createElement(f2, Z({}, e, {
    ref: l,
    onAutoScroll: () => {
      const { viewport: a, selectedItem: s } = n;
      a && s && (a.scrollTop = a.scrollTop - s.offsetHeight);
    }
  })) : null;
}), qy = "SelectScrollDownButton", jD = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const n = To(qy, e.__scopeSelect), r = Lg(qy, e.__scopeSelect), [o, i] = h.exports.useState(!1), l = Ce(t, r.onScrollButtonChange);
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
  ]), o ? /* @__PURE__ */ h.exports.createElement(f2, Z({}, e, {
    ref: l,
    onAutoScroll: () => {
      const { viewport: a, selectedItem: s } = n;
      a && s && (a.scrollTop = a.scrollTop + s.offsetHeight);
    }
  })) : null;
}), f2 = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = To("SelectScrollButton", n), l = h.exports.useRef(null), a = nf(n), s = h.exports.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return h.exports.useEffect(() => () => s(), [
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
  ]), /* @__PURE__ */ h.exports.createElement(Ue.div, Z({
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
}), d2 = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { value: n, ...r } = e, o = h.exports.useRef(null), i = Ce(t, o), l = mD(n);
  return h.exports.useEffect(() => {
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
  ]), /* @__PURE__ */ h.exports.createElement(gD, {
    asChild: !0
  }, /* @__PURE__ */ h.exports.createElement("select", Z({}, r, {
    ref: i,
    defaultValue: n
  })));
});
d2.displayName = "BubbleSelect";
function p2(e) {
  const t = ot(e), n = h.exports.useRef(""), r = h.exports.useRef(0), o = h.exports.useCallback((l) => {
    const a = n.current + l;
    t(a), function s(u) {
      n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(
        () => s(""),
        1e3
      ));
    }(a);
  }, [
    t
  ]), i = h.exports.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return h.exports.useEffect(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    i
  ];
}
function h2(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (u) => u === t[0]
  ) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let l = HD(e, Math.max(i, 0));
  o.length === 1 && (l = l.filter(
    (u) => u !== n
  ));
  const s = l.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return s !== n ? s : void 0;
}
function HD(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const VD = kD, UD = $D, WD = AD, qD = PD, GD = _D, QD = RD, KD = MD, YD = FD, XD = zD, ZD = BD, JD = jD, eL = {
  int: "Afrikaans",
  native: "Afrikaans"
}, tL = {
  int: "Albanian",
  native: "Shqip"
}, nL = {
  int: "Arabic",
  native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
}, rL = {
  int: "Armenian",
  native: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576"
}, oL = {
  int: "Assamese",
  native: "\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE"
}, iL = {
  int: "Azerbaijani",
  native: "Az\u0259rbaycan dili"
}, lL = {
  int: "Basque",
  native: "Euskara"
}, aL = {
  int: "Belarusian",
  native: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F"
}, sL = {
  int: "Bengali",
  native: "\u09AC\u09BE\u0982\u09B2\u09BE"
}, uL = {
  int: "Bosnian",
  native: "Bosanski"
}, cL = {
  int: "Breton",
  native: "Brezhoneg"
}, fL = {
  int: "Bulgarian",
  native: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"
}, dL = {
  int: "Burmese",
  native: "\u1019\u103C\u1014\u103A\u1019\u102C\u1018\u102C\u101E\u102C"
}, pL = {
  int: "Catalan / Valencian",
  native: "Catal\xE0"
}, hL = {
  int: "Czech",
  native: "\u010Ce\u0161tina"
}, mL = {
  int: "Danish",
  native: "Dansk"
}, gL = {
  int: "Dutch",
  native: "Nederlands"
}, vL = {
  int: "English",
  native: "English"
}, yL = {
  int: "Esperanto",
  native: "Esperanto"
}, xL = {
  int: "Estonian",
  native: "Eesti"
}, wL = {
  int: "Faroese",
  native: "F\xF8royskt"
}, bL = {
  int: "Finnish",
  native: "Suomi"
}, SL = {
  int: "French",
  native: "Fran\xE7ais"
}, kL = {
  int: "Galician",
  native: "Galego"
}, CL = {
  int: "Georgian",
  native: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8"
}, $L = {
  int: "German",
  native: "Deutsch"
}, EL = {
  int: "Greek",
  native: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"
}, AL = {
  int: "Guarani",
  native: "Ava\xF1e'\u1EBD"
}, PL = {
  int: "Gujarati",
  native: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0"
}, _L = {
  int: "Hausa",
  native: "Hrvatski"
}, RL = {
  int: "Hausa",
  native: "Hausa"
}, TL = {
  int: "Hebrew",
  native: "\u05E2\u05D1\u05E8\u05D9\u05EA"
}, IL = {
  int: "Hindi",
  native: "\u0939\u093F\u0928\u094D\u0926\u0940"
}, OL = {
  int: "Hungarian",
  native: "Magyar"
}, ML = {
  int: "Icelandic",
  native: "\xCDslenska"
}, NL = {
  int: "Indonesian",
  native: "Bahasa Indonesia"
}, DL = {
  int: "Irish",
  native: "Gaeilge"
}, LL = {
  int: "Italian",
  native: "Italiano"
}, FL = {
  int: "Japanese",
  native: "\u65E5\u672C\u8A9E"
}, zL = {
  int: "Javanese",
  native: "Basa Jawa"
}, BL = {
  int: "Kannada",
  native: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"
}, jL = {
  int: "Kazakh",
  native: "\u049A\u0430\u0437\u0430\u049B\u0448\u0430"
}, HL = {
  int: "Khmer",
  native: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A"
}, VL = {
  int: "Korean",
  native: "\uD55C\uAD6D\uC5B4"
}, UL = {
  int: "Kurdish",
  native: "Kurd\xEE (Kurmanc\xEE)"
}, WL = {
  int: "Latin",
  native: "lingua latina"
}, qL = {
  int: "Latvian",
  native: "Latvie\u0161u"
}, GL = {
  int: "Lithuanian",
  native: "Lietuvi\u0173"
}, QL = {
  int: "Macedonian",
  native: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438"
}, KL = {
  int: "Malagasy",
  native: "Malagasy"
}, YL = {
  int: "Malay",
  native: "Bahasa Melayu"
}, XL = {
  int: "Malayalam",
  native: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02"
}, ZL = {
  int: "Marathi",
  native: "\u092E\u0930\u093E\u0920\u0940"
}, JL = {
  int: "Mongolian",
  native: "\u041C\u043E\u043D\u0433\u043E\u043B"
}, eF = {
  int: "Nepali",
  native: "\u0928\u0947\u092A\u093E\u0932\u0940"
}, tF = {
  int: "Norwegian (bokmal)",
  native: "Norsk (bokm\xE5l)"
}, nF = {
  int: "Norwegian Nynorsk",
  native: "Norsk (nynorsk)"
}, rF = {
  int: "Oriya",
  native: "\u0B13\u0B21\u0B3C\u0B3F\u0B06"
}, oF = {
  int: "Pashto",
  native: "\u067E\u069A\u062A\u0648"
}, iF = {
  int: "Persian",
  native: "\u0641\u0627\u0631\u0633\u06CC"
}, lF = {
  int: "Polish",
  native: "Polski"
}, aF = {
  int: "Portuguese",
  native: "Portugu\xEAs"
}, sF = {
  int: "Punjabi",
  native: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40"
}, uF = {
  int: "Romanian",
  native: "Rom\xE2n\u0103"
}, cF = {
  int: "Russian",
  native: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
}, fF = {
  int: "Rwandi",
  native: "Ikinyarwanda"
}, dF = {
  int: "Sardinian",
  native: "Sardu"
}, pF = {
  int: "Serbian",
  native: "\u0421\u0440\u043F\u0441\u043A\u0438"
}, hF = {
  int: "Silesian",
  native: "\u015Bl\u014Dnsk\u014F g\u014Fdka"
}, mF = {
  int: "Simplified Chinese",
  native: "\u4E2D\u6587"
}, gF = {
  int: "Sinhala",
  native: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD"
}, vF = {
  int: "Slovak",
  native: "Sloven\u010Dina"
}, yF = {
  int: "Slovenian",
  native: "Sloven\u0161\u010Dina"
}, xF = {
  int: "Somali",
  native: "Af-Soomaali"
}, wF = {
  int: "Sorani Kurdish",
  native: "\u06A9\u0648\u0631\u062F\u06CC\u06CC \u0646\u0627\u0648\u06D5\u0646\u062F\u06CC"
}, bF = {
  int: "Spanish",
  native: "Espa\xF1ol"
}, SF = {
  int: "Swahili",
  native: "Kiswahili"
}, kF = {
  int: "Swedish",
  native: "Svenska"
}, CF = {
  int: "Syriac",
  native: "\u0723\u0718\u072A\u071D\u071D\u0710"
}, $F = {
  int: "Tagalog / Filipino",
  native: "Filipino"
}, EF = {
  int: "Tajik",
  native: "\u0422\u043E\u04B7\u0438\u043A\u04E3"
}, AF = {
  int: "Tamazight",
  native: "\u2D5C\u2D30\u2D4E\u2D30\u2D63\u2D49\u2D56\u2D5C"
}, PF = {
  int: "Tamil",
  native: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"
}, _F = {
  int: "Telugu",
  native: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"
}, RF = {
  int: "Thai",
  native: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22"
}, TF = {
  int: "Turkish",
  native: "T\xFCrk\xE7e"
}, IF = {
  int: "Ukrainian",
  native: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"
}, OF = {
  int: "Urdu",
  native: "\u0627\u0631\u062F\u0648"
}, MF = {
  int: "Uzbek",
  native: "O'zbek"
}, NF = {
  int: "Vietnamese",
  native: "Ti\u1EBFng Vi\u1EC7t"
}, DF = {
  int: "Visayan",
  native: "Bisaya"
}, LF = {
  int: "Welsh",
  native: "Cymraeg"
}, FF = {
  int: "West Frisian",
  native: "Frysk"
}, Gy = {
  af: eL,
  sq: tL,
  ar: nL,
  hy: rL,
  as: oL,
  az: iL,
  eu: lL,
  be: aL,
  bn: sL,
  bs: uL,
  br: cL,
  bg: fL,
  my: dL,
  ca: pL,
  cs: hL,
  da: mL,
  nl: gL,
  en: vL,
  eo: yL,
  et: xL,
  fo: wL,
  fi: bL,
  fr: SL,
  gl: kL,
  ka: CL,
  de: $L,
  el: EL,
  gn: AL,
  gu: PL,
  hr: _L,
  ha: RL,
  he: TL,
  hi: IL,
  hu: OL,
  is: ML,
  id: NL,
  ga: DL,
  it: LL,
  ja: FL,
  jv: zL,
  kn: BL,
  kk: jL,
  km: HL,
  ko: VL,
  ku: UL,
  la: WL,
  lv: qL,
  lt: GL,
  mk: QL,
  mg: KL,
  ms: YL,
  ml: XL,
  mr: ZL,
  mn: JL,
  ne: eF,
  nb: tF,
  nn: nF,
  or: rF,
  ps: oF,
  fa: iF,
  pl: lF,
  pt: aF,
  pa: sF,
  ro: uF,
  ru: cF,
  rw: fF,
  sc: dF,
  sr: pF,
  sz: hF,
  zh: mF,
  si: gF,
  sk: vF,
  sl: yF,
  so: xF,
  cb: wF,
  es: bF,
  sw: SF,
  sv: kF,
  sy: CF,
  tl: $F,
  tg: EF,
  tz: AF,
  ta: PF,
  te: _F,
  th: RF,
  tr: TF,
  uk: IF,
  ur: OF,
  uz: MF,
  vi: NF,
  cx: DF,
  cy: LF,
  fy: FF
}, m2 = He.forwardRef(({
  children: e,
  className: t,
  ...n
}, r) => /* @__PURE__ */ D(YD, {
  className: _i("text-mayumi-gray-1200 data-[highlighted]:bg-mayumi-gray-400 data-[disabled]:text-mayumi-gray-800 relative flex h-[25px] select-none items-center rounded-[3px] pr-[35px] pl-[25px] text-[13px] leading-none data-[disabled]:pointer-events-none data-[highlighted]:outline-none", t),
  ...n,
  ref: r,
  children: /* @__PURE__ */ D(XD, {
    children: e
  })
}));
m2.displayName = "SelectItem";
const zF = (e) => {
  var n;
  const t = pk();
  return /* @__PURE__ */ se(VD, {
    value: (n = t[Hy]) == null ? void 0 : n[Ta].lang,
    onValueChange: (r) => {
      var o;
      (o = e.onValueChange) == null || o.call(e, r), t.set({
        [Hy]: {
          [Ta]: {
            lang: r
          }
        }
      });
    },
    children: [/* @__PURE__ */ se(UD, {
      className: "bg-gray2 text-mayumi-gray-1200 hover:bg-mayumi-gray-300 focus:shadow-gray7 data-[placeholder]:text-mayumi-gray-900 inline-flex items-center justify-center gap-[5px] rounded px-3 py-1 text-xs outline-none focus:shadow-[0_0_0_1px]",
      "aria-label": "lang",
      autoFocus: !1,
      tabIndex: 2,
      children: [/* @__PURE__ */ D(WD, {
        placeholder: "Select a Language..."
      }), /* @__PURE__ */ D(qD, {
        className: "text-mayumi-gray-1200",
        children: /* @__PURE__ */ D("i", {
          className: "gg-chevron-down/0.75"
        })
      })]
    }), /* @__PURE__ */ D(GD, {
      container: e.container.current,
      children: /* @__PURE__ */ se(QD, {
        className: "bg-gray2 overflow-hidden rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]",
        children: [/* @__PURE__ */ D(ZD, {
          className: "bg-gray2 text-mayumi-gray-1200 flex h-[25px] cursor-default items-center justify-center",
          children: /* @__PURE__ */ D("i", {
            className: "gg-chevron-up/0.75"
          })
        }), /* @__PURE__ */ D(KD, {
          className: "p-[5px]",
          children: Object.keys(Gy).map((r) => {
            const o = Gy[r];
            return /* @__PURE__ */ D(m2, {
              value: o.int,
              children: o.int
            }, r);
          })
        }), /* @__PURE__ */ D(JD, {
          className: "bg-gray2 text-mayumi-gray-1200 flex h-[25px] cursor-default items-center justify-center",
          children: /* @__PURE__ */ D("i", {
            className: "gg-chevron-down/0.75"
          })
        })]
      })
    })]
  });
};
function BF(e, t) {
  return h.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const g2 = "ScrollArea", [v2, Oz] = ji(g2), [jF, On] = v2(g2), HF = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: i = 600, ...l } = e, [a, s] = h.exports.useState(null), [u, c] = h.exports.useState(null), [f, d] = h.exports.useState(null), [g, m] = h.exports.useState(null), [v, w] = h.exports.useState(null), [p, y] = h.exports.useState(0), [x, b] = h.exports.useState(0), [A, S] = h.exports.useState(!1), [E, $] = h.exports.useState(!1), P = Ce(
    t,
    (T) => s(T)
  ), _ = u2(o);
  return /* @__PURE__ */ h.exports.createElement(jF, {
    scope: n,
    type: r,
    dir: _,
    scrollHideDelay: i,
    scrollArea: a,
    viewport: u,
    onViewportChange: c,
    content: f,
    onContentChange: d,
    scrollbarX: g,
    onScrollbarXChange: m,
    scrollbarXEnabled: A,
    onScrollbarXEnabledChange: S,
    scrollbarY: v,
    onScrollbarYChange: w,
    scrollbarYEnabled: E,
    onScrollbarYEnabledChange: $,
    onCornerWidthChange: y,
    onCornerHeightChange: b
  }, /* @__PURE__ */ h.exports.createElement(Ue.div, Z({
    dir: _
  }, l, {
    ref: P,
    style: {
      position: "relative",
      ["--radix-scroll-area-corner-width"]: p + "px",
      ["--radix-scroll-area-corner-height"]: x + "px",
      ...e.style
    }
  })));
}), VF = "ScrollAreaViewport", UF = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, i = On(VF, n), l = h.exports.useRef(null), a = Ce(t, l, i.onViewportChange);
  return /* @__PURE__ */ h.exports.createElement(h.exports.Fragment, null, /* @__PURE__ */ h.exports.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ h.exports.createElement(Ue.div, Z({
    "data-radix-scroll-area-viewport": ""
  }, o, {
    ref: a,
    style: {
      overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
      ...e.style
    }
  }), /* @__PURE__ */ h.exports.createElement("div", {
    ref: i.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, r)));
}), tr = "ScrollAreaScrollbar", WF = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = On(tr, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: l } = o, a = e.orientation === "horizontal";
  return h.exports.useEffect(() => (a ? i(!0) : l(!0), () => {
    a ? i(!1) : l(!1);
  }), [
    a,
    i,
    l
  ]), o.type === "hover" ? /* @__PURE__ */ h.exports.createElement(qF, Z({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ h.exports.createElement(GF, Z({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ h.exports.createElement(y2, Z({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ h.exports.createElement(Fg, Z({}, r, {
    ref: t
  })) : null;
}), qF = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = On(tr, e.__scopeScrollArea), [i, l] = h.exports.useState(!1);
  return h.exports.useEffect(() => {
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
  ]), /* @__PURE__ */ h.exports.createElement(Hr, {
    present: n || i
  }, /* @__PURE__ */ h.exports.createElement(y2, Z({
    "data-state": i ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), GF = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = On(tr, e.__scopeScrollArea), i = e.orientation === "horizontal", l = of(
    () => s("SCROLL_END"),
    100
  ), [a, s] = BF("hidden", {
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
  return h.exports.useEffect(() => {
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
  ]), h.exports.useEffect(() => {
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
  ]), /* @__PURE__ */ h.exports.createElement(Hr, {
    present: n || a !== "hidden"
  }, /* @__PURE__ */ h.exports.createElement(Fg, Z({
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
}), y2 = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const n = On(tr, e.__scopeScrollArea), { forceMount: r, ...o } = e, [i, l] = h.exports.useState(!1), a = e.orientation === "horizontal", s = of(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, c = n.viewport.offsetHeight < n.viewport.scrollHeight;
      l(a ? u : c);
    }
  }, 10);
  return ic(n.viewport, s), ic(n.content, s), /* @__PURE__ */ h.exports.createElement(Hr, {
    present: r || i
  }, /* @__PURE__ */ h.exports.createElement(Fg, Z({
    "data-state": i ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), Fg = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = On(tr, e.__scopeScrollArea), i = h.exports.useRef(null), l = h.exports.useRef(0), [a, s] = h.exports.useState({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), u = b2(a.viewport, a.content), c = {
    ...r,
    sizes: a,
    onSizesChange: s,
    hasThumb: Boolean(u > 0 && u < 1),
    onThumbChange: (d) => i.current = d,
    onThumbPointerUp: () => l.current = 0,
    onThumbPointerDown: (d) => l.current = d
  };
  function f(d, g) {
    return JF(d, l.current, a, g);
  }
  return n === "horizontal" ? /* @__PURE__ */ h.exports.createElement(QF, Z({}, c, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && i.current) {
        const d = o.viewport.scrollLeft, g = Qy(d, a, o.dir);
        i.current.style.transform = `translate3d(${g}px, 0, 0)`;
      }
    },
    onWheelScroll: (d) => {
      o.viewport && (o.viewport.scrollLeft = d);
    },
    onDragScroll: (d) => {
      o.viewport && (o.viewport.scrollLeft = f(d, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ h.exports.createElement(KF, Z({}, c, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && i.current) {
        const d = o.viewport.scrollTop, g = Qy(d, a);
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
}), QF = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = On(tr, e.__scopeScrollArea), [l, a] = h.exports.useState(), s = h.exports.useRef(null), u = Ce(t, s, i.onScrollbarXChange);
  return h.exports.useEffect(() => {
    s.current && a(getComputedStyle(s.current));
  }, [
    s
  ]), /* @__PURE__ */ h.exports.createElement(w2, Z({
    "data-orientation": "horizontal"
  }, o, {
    ref: u,
    sizes: n,
    style: {
      bottom: 0,
      left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: rf(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (c) => e.onThumbPointerDown(c.x),
    onDragScroll: (c) => e.onDragScroll(c.x),
    onWheelScroll: (c, f) => {
      if (i.viewport) {
        const d = i.viewport.scrollLeft + c.deltaX;
        e.onWheelScroll(d), k2(d, f) && c.preventDefault();
      }
    },
    onResize: () => {
      s.current && i.viewport && l && r({
        content: i.viewport.scrollWidth,
        viewport: i.viewport.offsetWidth,
        scrollbar: {
          size: s.current.clientWidth,
          paddingStart: oc(l.paddingLeft),
          paddingEnd: oc(l.paddingRight)
        }
      });
    }
  }));
}), KF = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = On(tr, e.__scopeScrollArea), [l, a] = h.exports.useState(), s = h.exports.useRef(null), u = Ce(t, s, i.onScrollbarYChange);
  return h.exports.useEffect(() => {
    s.current && a(getComputedStyle(s.current));
  }, [
    s
  ]), /* @__PURE__ */ h.exports.createElement(w2, Z({
    "data-orientation": "vertical"
  }, o, {
    ref: u,
    sizes: n,
    style: {
      top: 0,
      right: i.dir === "ltr" ? 0 : void 0,
      left: i.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: rf(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (c) => e.onThumbPointerDown(c.y),
    onDragScroll: (c) => e.onDragScroll(c.y),
    onWheelScroll: (c, f) => {
      if (i.viewport) {
        const d = i.viewport.scrollTop + c.deltaY;
        e.onWheelScroll(d), k2(d, f) && c.preventDefault();
      }
    },
    onResize: () => {
      s.current && i.viewport && l && r({
        content: i.viewport.scrollHeight,
        viewport: i.viewport.offsetHeight,
        scrollbar: {
          size: s.current.clientHeight,
          paddingStart: oc(l.paddingTop),
          paddingEnd: oc(l.paddingBottom)
        }
      });
    }
  }));
}), [YF, x2] = v2(tr), w2 = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: i, onThumbPointerUp: l, onThumbPointerDown: a, onThumbPositionChange: s, onDragScroll: u, onWheelScroll: c, onResize: f, ...d } = e, g = On(tr, n), [m, v] = h.exports.useState(null), w = Ce(
    t,
    (P) => v(P)
  ), p = h.exports.useRef(null), y = h.exports.useRef(""), x = g.viewport, b = r.content - r.viewport, A = ot(c), S = ot(s), E = of(f, 10);
  function $(P) {
    if (p.current) {
      const _ = P.clientX - p.current.left, T = P.clientY - p.current.top;
      u({
        x: _,
        y: T
      });
    }
  }
  return h.exports.useEffect(() => {
    const P = (_) => {
      const T = _.target;
      (m == null ? void 0 : m.contains(T)) && A(_, b);
    };
    return document.addEventListener("wheel", P, {
      passive: !1
    }), () => document.removeEventListener("wheel", P, {
      passive: !1
    });
  }, [
    x,
    m,
    b,
    A
  ]), h.exports.useEffect(S, [
    r,
    S
  ]), ic(m, E), ic(g.content, E), /* @__PURE__ */ h.exports.createElement(YF, {
    scope: n,
    scrollbar: m,
    hasThumb: o,
    onThumbChange: ot(i),
    onThumbPointerUp: ot(l),
    onThumbPositionChange: S,
    onThumbPointerDown: ot(a)
  }, /* @__PURE__ */ h.exports.createElement(Ue.div, Z({}, d, {
    ref: w,
    style: {
      position: "absolute",
      ...d.style
    },
    onPointerDown: ye(e.onPointerDown, (P) => {
      P.button === 0 && (P.target.setPointerCapture(P.pointerId), p.current = m.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", $(P));
    }),
    onPointerMove: ye(e.onPointerMove, $),
    onPointerUp: ye(e.onPointerUp, (P) => {
      const _ = P.target;
      _.hasPointerCapture(P.pointerId) && _.releasePointerCapture(P.pointerId), document.body.style.webkitUserSelect = y.current, p.current = null;
    })
  })));
}), Rh = "ScrollAreaThumb", XF = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = x2(Rh, e.__scopeScrollArea);
  return /* @__PURE__ */ h.exports.createElement(Hr, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ h.exports.createElement(ZF, Z({
    ref: t
  }, r)));
}), ZF = /* @__PURE__ */ h.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, i = On(Rh, n), l = x2(Rh, n), { onThumbPositionChange: a } = l, s = Ce(
    t,
    (f) => l.onThumbChange(f)
  ), u = h.exports.useRef(), c = of(() => {
    u.current && (u.current(), u.current = void 0);
  }, 100);
  return h.exports.useEffect(() => {
    const f = i.viewport;
    if (f) {
      const d = () => {
        if (c(), !u.current) {
          const g = ez(f, a);
          u.current = g, a();
        }
      };
      return a(), f.addEventListener("scroll", d), () => f.removeEventListener("scroll", d);
    }
  }, [
    i.viewport,
    c,
    a
  ]), /* @__PURE__ */ h.exports.createElement(Ue.div, Z({
    "data-state": l.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: s,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: ye(e.onPointerDownCapture, (f) => {
      const g = f.target.getBoundingClientRect(), m = f.clientX - g.left, v = f.clientY - g.top;
      l.onThumbPointerDown({
        x: m,
        y: v
      });
    }),
    onPointerUp: ye(e.onPointerUp, l.onThumbPointerUp)
  }));
});
function oc(e) {
  return e ? parseInt(e, 10) : 0;
}
function b2(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function rf(e) {
  const t = b2(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function JF(e, t, n, r = "ltr") {
  const o = rf(n), i = o / 2, l = t || i, a = o - l, s = n.scrollbar.paddingStart + l, u = n.scrollbar.size - n.scrollbar.paddingEnd - a, c = n.content - n.viewport, f = r === "ltr" ? [
    0,
    c
  ] : [
    c * -1,
    0
  ];
  return S2([
    s,
    u
  ], f)(e);
}
function Qy(e, t, n = "ltr") {
  const r = rf(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, l = t.content - t.viewport, a = i - r, s = n === "ltr" ? [
    0,
    l
  ] : [
    l * -1,
    0
  ], u = Ph(e, s);
  return S2([
    0,
    l
  ], [
    0,
    a
  ])(u);
}
function S2(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function k2(e, t) {
  return e > 0 && e < t;
}
const ez = (e, t = () => {
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
function of(e, t) {
  const n = ot(e), r = h.exports.useRef(0);
  return h.exports.useEffect(
    () => () => window.clearTimeout(r.current),
    []
  ), h.exports.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function ic(e, t) {
  const n = ot(t);
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
const tz = HF, nz = UF, Ky = WF, Yy = XF, Xy = (e) => typeof e == "object" && e != null && e.nodeType === 1, Zy = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", Td = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const n = getComputedStyle(e, null);
    return Zy(n.overflowY, t) || Zy(n.overflowX, t) || ((r) => {
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
}, zs = (e, t, n, r, o, i, l, a) => i < e && l > t || i > e && l < t ? 0 : i <= e && a <= n || l >= t && a >= n ? i - e - r : l > t && a < n || i < e && a > n ? l - t + o : 0, rz = (e) => {
  const t = e.parentElement;
  return t == null ? e.getRootNode().host || null : t;
}, Jy = (e, t) => {
  var n, r, o, i;
  if (typeof document > "u")
    return [];
  const { scrollMode: l, block: a, inline: s, boundary: u, skipOverflowHiddenElements: c } = t, f = typeof u == "function" ? u : (M) => M !== u;
  if (!Xy(e))
    throw new TypeError("Invalid target");
  const d = document.scrollingElement || document.documentElement, g = [];
  let m = e;
  for (; Xy(m) && f(m); ) {
    if (m = rz(m), m === d) {
      g.push(m);
      break;
    }
    m != null && m === document.body && Td(m) && !Td(document.documentElement) || m != null && Td(m, c) && g.push(m);
  }
  const v = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth, w = (i = (o = window.visualViewport) == null ? void 0 : o.height) != null ? i : innerHeight, { scrollX: p, scrollY: y } = window, { height: x, width: b, top: A, right: S, bottom: E, left: $ } = e.getBoundingClientRect();
  let P = a === "start" || a === "nearest" ? A : a === "end" ? E : A + x / 2, _ = s === "center" ? $ + b / 2 : s === "end" ? S : $;
  const T = [];
  for (let M = 0; M < g.length; M++) {
    const L = g[M], { height: B, width: z, top: R, right: H, bottom: N, left: I } = L.getBoundingClientRect();
    if (l === "if-needed" && A >= 0 && $ >= 0 && E <= w && S <= v && A >= R && E <= N && $ >= I && S <= H)
      return T;
    const O = getComputedStyle(L), k = parseInt(O.borderLeftWidth, 10), C = parseInt(O.borderTopWidth, 10), J = parseInt(O.borderRightWidth, 10), ne = parseInt(O.borderBottomWidth, 10);
    let ae = 0, ee = 0;
    const G = "offsetWidth" in L ? L.offsetWidth - L.clientWidth - k - J : 0, ie = "offsetHeight" in L ? L.offsetHeight - L.clientHeight - C - ne : 0, xe = "offsetWidth" in L ? L.offsetWidth === 0 ? 0 : z / L.offsetWidth : 0, ce = "offsetHeight" in L ? L.offsetHeight === 0 ? 0 : B / L.offsetHeight : 0;
    if (d === L)
      ae = a === "start" ? P : a === "end" ? P - w : a === "nearest" ? zs(y, y + w, w, C, ne, y + P, y + P + x, x) : P - w / 2, ee = s === "start" ? _ : s === "center" ? _ - v / 2 : s === "end" ? _ - v : zs(p, p + v, v, k, J, p + _, p + _ + b, b), ae = Math.max(0, ae + y), ee = Math.max(0, ee + p);
    else {
      ae = a === "start" ? P - R - C : a === "end" ? P - N + ne + ie : a === "nearest" ? zs(R, N, B, C, ne + ie, P, P + x, x) : P - (R + B / 2) + ie / 2, ee = s === "start" ? _ - I - k : s === "center" ? _ - (I + z / 2) + G / 2 : s === "end" ? _ - H + J + G : zs(I, H, z, k, J + G, _, _ + b, b);
      const { scrollLeft: de, scrollTop: ue } = L;
      ae = Math.max(0, Math.min(ue + ae / ce, L.scrollHeight - B / ce + ie)), ee = Math.max(0, Math.min(de + ee / xe, L.scrollWidth - z / xe + G)), P += ue - ae, _ += de - ee;
    }
    T.push({ el: L, top: ae, left: ee });
  }
  return T;
}, oz = (e) => e === !1 ? { block: "end", inline: "nearest" } : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e) ? e : { block: "start", inline: "nearest" };
function iz(e, t) {
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
    return t.behavior(Jy(e, t));
  const n = typeof t == "boolean" || t == null ? void 0 : t.behavior;
  for (const { el: r, top: o, left: i } of Jy(e, oz(t)))
    r.scroll({ top: o, left: i, behavior: n });
}
const C2 = h.exports.memo(({
  message: e
}) => /* @__PURE__ */ se("div", {
  className: _i("flex flex-col gap-2 p-4 text-sm text-mayumi-gray-1100", {
    "bg-mayumi-gray-200": e.role === "user",
    "bg-mayumi-gray-300": e.role === "assistant"
  }),
  children: [/* @__PURE__ */ D("div", {
    className: "flex-0 rounded-md text-mayumi-gray-1200",
    children: e.role === "user" ? "You:" : "Assistant:"
  }), /* @__PURE__ */ D("div", {
    className: "flex-1 rounded-md",
    children: /* @__PURE__ */ D(ak, {
      content: e.text
    })
  })]
}), (e, t) => e.message.text === t.message.text);
C2.displayName = "MessageItem";
const lz = (e) => {
  var s;
  const t = h.exports.useRef(null), n = h.exports.useRef(null), {
    conventions: r,
    updateOrUpsertConventions: o
  } = xo(), [i] = h.exports.useState(e.action), l = (s = r[i]) != null ? s : [];
  function a() {
    var c, f, d;
    const u = ((f = (c = t.current) == null ? void 0 : c.children.length) != null ? f : 1) - 1;
    ((d = t.current) == null ? void 0 : d.children[u]) && n.current && setTimeout(() => {
      iz(n.current, {
        behavior: "smooth",
        scrollMode: "if-needed"
      });
    }, 80);
  }
  return xo.subscribe((u, c) => {
    var f, d;
    ((f = c.conventions[i]) == null ? void 0 : f.length) !== ((d = u.conventions[i]) == null ? void 0 : d.length) && a();
  }), h.exports.useEffect(() => {
    a();
  }, [o]), /* @__PURE__ */ D("div", {
    className: "aiflow-chat-in-command flex-1 bg-mayumi-gray-200",
    children: /* @__PURE__ */ se(tz, {
      className: "pointer-events-auto h-[400px] overflow-hidden pt-2",
      children: [/* @__PURE__ */ D(nz, {
        className: "h-full w-full rounded",
        children: /* @__PURE__ */ se("div", {
          ref: t,
          children: [l.map((u) => /* @__PURE__ */ D(C2, {
            message: u
          }, u.id)), /* @__PURE__ */ D("div", {
            ref: n
          })]
        })
      }), /* @__PURE__ */ D(Ky, {
        className: "flex touch-none select-none bg-transparent p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col",
        orientation: "vertical",
        children: /* @__PURE__ */ D(Yy, {
          className: "relative flex-1 rounded-[10px] bg-transparent before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
        })
      }), /* @__PURE__ */ D(Ky, {
        className: "flex touch-none select-none bg-transparent p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col",
        orientation: "horizontal",
        children: /* @__PURE__ */ D(Yy, {
          className: "relative flex-1 rounded-[10px] bg-transparent before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
        })
      })]
    })
  });
}, ex = () => {
  var e;
  return (e = document.querySelector('input[name="q"]')) == null ? void 0 : e.value;
};
function Th(e, t = {}, n) {
  for (const r in e) {
    const o = e[r], i = n ? `${n}:${r}` : r;
    typeof o == "object" && o !== null ? Th(o, t, i) : typeof o == "function" && (t[i] = o);
  }
  return t;
}
const az = { run: (e) => e() }, sz = () => az, $2 = typeof console.createTask < "u" ? console.createTask : sz;
function uz(e, t) {
  const n = t.shift(), r = $2(n);
  return e.reduce(
    (o, i) => o.then(() => r.run(() => i(...t))),
    Promise.resolve()
  );
}
function cz(e, t) {
  const n = t.shift(), r = $2(n);
  return Promise.all(e.map((o) => r.run(() => o(...t))));
}
function Id(e, t) {
  for (const n of [...e])
    n(t);
}
class fz {
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
    const n = Th(t), r = Object.keys(n).map(
      (o) => this.hook(o, n[o])
    );
    return () => {
      for (const o of r.splice(0, r.length))
        o();
    };
  }
  removeHooks(t) {
    const n = Th(t);
    for (const r in n)
      this.removeHook(r, n[r]);
  }
  removeAllHooks() {
    for (const t in this._hooks)
      delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(uz, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(cz, t, ...n);
  }
  callHookWith(t, n, ...r) {
    const o = this._before || this._after ? { name: n, args: r, context: {} } : void 0;
    this._before && Id(this._before, o);
    const i = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      r
    );
    return i instanceof Promise ? i.finally(() => {
      this._after && o && Id(this._after, o);
    }) : (this._after && o && Id(this._after, o), i);
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
function dz() {
  return new fz();
}
const Ih = dz(), zg = (e, t = {}) => {
  const n = () => {
    const r = setInterval(() => {
      e.current && (e.current.focus(), clearInterval(r));
    }, 10);
  };
  t.name && Ih.hook(t.name, n), n();
}, lf = (e) => e.replace("-page", "");
function pz() {
  const [e, t] = h.exports.useState(""), n = h.exports.useRef(), r = h.exports.useRef(null), o = h.exports.useRef(null), i = h.exports.useRef(null), l = h.exports.useRef(null), [a, s] = h.exports.useState([oi]), u = a[a.length - 1], [c, f] = h.exports.useState(!1), {
    updateOrUpsertConventions: d
  } = xo(), {
    open: g,
    setOpen: m,
    toggle: v,
    updateHistoryOpen: w,
    setIsChat: p
  } = En(), y = h.exports.useCallback(() => {
    s((P) => {
      const _ = [...P];
      return _.splice(-1, 1), _;
    }), p(!1), Ih.callHook("command-input");
  }, [p]);
  function x() {
    o.current && (o.current.style.transform = "scale(0.96)", setTimeout(() => {
      o.current && (o.current.style.transform = "");
    }, 100));
  }
  const b = h.exports.useCallback((P) => {
    t(P);
  }, []), A = h.exports.useCallback(async (P, _) => {
    var T;
    if (console.log("handleValueSelect", P, _), P.endsWith("-page")) {
      p(!!((T = YN[P]) != null && T.hasChat)), s((M) => [...M, P]);
      return;
    }
    P === nc && (f(!0), await so(Cl, {
      text: _ == null ? void 0 : _.text,
      action: nc
    }, "background"), f(!1)), P === Ta && (f(!0), await so(Cl, {
      text: _ == null ? void 0 : _.text,
      action: Ta
    }, "background"), f(!1)), P === Tn.SUMMARY_WITH && (f(!0), await so(Cl, {
      text: _ == null ? void 0 : _.text,
      action: Tn.SUMMARY_WITH
    }, "background"), f(!1)), t("");
  }, [p]);
  h.exports.useEffect(() => {
    const P = (_) => {
      if (_.key === "j" && _.metaKey && (v(), u === a2 && y(), w(!1)), _.key === "Escape" && w(!1), _.key === "Escape" && u === oi && !En.getState().subCommandOpen) {
        m(!1);
        return;
      }
      _.key === "Escape" && u !== oi && !En.getState().subCommandOpen && (y(), Ih.callHook("command-input"));
    };
    return document.addEventListener("keydown", P), () => document.removeEventListener("keydown", P);
  }, [w, u, y, v, m]), h.exports.useEffect(() => {
    Sc(Cl, (P) => {
      const {
        data: _
      } = P;
      d(_.action, _.message);
    });
  }, [d]), zg(i, {
    name: "command-input"
  });
  const S = u === Pe.TRANSLATE_WITH_PAGE || u === Pe.ASK_CHATGPT_PAGE || u === Pe.SUMMARY_WITH_PAGE, E = !S, $ = u === Ia;
  return /* @__PURE__ */ se(Ct, {
    children: [/* @__PURE__ */ D(HI, {
      open: g,
      children: /* @__PURE__ */ D(VI, {
        container: r.current,
        children: /* @__PURE__ */ D(UI, {
          "cmdk-dialog": "",
          className: "z-50 shadow-lg",
          children: /* @__PURE__ */ se(_t, {
            ref: o,
            value: e,
            onValueChange: b,
            loop: !0,
            children: [/* @__PURE__ */ D("div", {
              "cmdk-raycast-top-shine": ""
            }), /* @__PURE__ */ se("div", {
              className: "flex items-center justify-between px-3 pt-1",
              children: [/* @__PURE__ */ D("div", {
                className: "flex items-center justify-start gap-2",
                children: a.map((P) => /* @__PURE__ */ D("div", {
                  className: "rounded-md bg-mayumi-gray-700 px-3 py-1 text-xs uppercase text-mayumi-gray-1100 shadow",
                  children: lf(P)
                }, P))
              }), $ && /* @__PURE__ */ D(zF, {
                container: r
              })]
            }), /* @__PURE__ */ D(_t.Input, {
              ref: (P) => {
                i.current = P;
              },
              onValueChange: (P) => {
                n.current = P;
              },
              autoFocus: !0,
              tabIndex: 1,
              className: _i({
                hidden: !E
              }),
              placeholder: "Search for commands...",
              onKeyDown: (P) => {
                var _;
                P.key === "Enter" && x(), !(u === oi || ((_ = n.current) == null ? void 0 : _.length)) && P.key === "Backspace" && (P.preventDefault(), y(), x());
              }
            }, "cmdk-input"), E && /* @__PURE__ */ D("hr", {
              "cmdk-raycast-loader": ""
            }), /* @__PURE__ */ se(_t.List, {
              className: "min-h-[400px]",
              ref: l,
              children: [u === Pe.HOME_PAGE && /* @__PURE__ */ D(hz, {
                onSelect: A
              }), u === Pe.CONFIG_PAGE && /* @__PURE__ */ D(mz, {
                onExit: y
              }), u === Pe.SEARCH_TABS_PAGE && /* @__PURE__ */ D(fD, {}), S && /* @__PURE__ */ D(gz, {
                page: u
              })]
            }), /* @__PURE__ */ se("div", {
              "cmdk-raycast-footer": "",
              className: "justify-end",
              children: [S && /* @__PURE__ */ D(vz, {
                page: u,
                onSendMessage: A
              }), S && c && /* @__PURE__ */ D("i", {
                className: "spinner gg-spinner/0.75"
              }), /* @__PURE__ */ D("button", {
                tabIndex: 2,
                "cmdk-raycast-open-trigger": "",
                children: /* @__PURE__ */ D("kbd", {
                  children: "\u21B5"
                })
              }), /* @__PURE__ */ D("hr", {}), /* @__PURE__ */ D(yz, {
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
function hz({
  onSelect: e
}) {
  return /* @__PURE__ */ se(Ct, {
    children: [/* @__PURE__ */ D(_t.Empty, {
      children: "No results found."
    }), /* @__PURE__ */ se(_t.Group, {
      heading: "Commands",
      children: [/* @__PURE__ */ D(rD, {
        onSelect: e
      }), /* @__PURE__ */ D(ZN, {}), /* @__PURE__ */ D(lD, {}), /* @__PURE__ */ D(tD, {
        onSelect: e
      }), /* @__PURE__ */ se(Lr, {
        isCommand: !0,
        onSelect: () => e(rc),
        value: rc,
        children: [/* @__PURE__ */ D("i", {
          className: "gg-girl/0.8 text-mayumi-gray-1200"
        }), "Ask ChatGPT"]
      }), /* @__PURE__ */ se(Lr, {
        isCommand: !0,
        onSelect: () => e(Ia),
        value: Ia,
        children: [/* @__PURE__ */ D(dD, {
          className: "fill-mayumi-gray-1200/1"
        }), "Tranasplate"]
      }), /* @__PURE__ */ D(uD, {
        onSelect: e
      })]
    })]
  });
}
function mz(e) {
  const t = pk();
  return /* @__PURE__ */ D("div", {
    className: "flex flex-col items-center justify-center p-4 pt-8",
    children: /* @__PURE__ */ D(Ng, {
      light: !0,
      className: "w-1/2",
      value: t.OPENAI_API_KEY,
      onKeyDown: (n) => {
        var r;
        return n.key === "Enter" && (t.set({
          [XN]: n.currentTarget.value
        }), (r = e.onExit) == null || r.call(e)), !1;
      }
    })
  });
}
function gz(e) {
  return /* @__PURE__ */ D(lz, {
    action: lf(e.page)
  });
}
function vz(e) {
  const [t, n] = h.exports.useState(""), r = h.exports.useRef(!1), o = h.exports.useRef(null), i = h.exports.useRef(""), l = (a) => {
    if (a.key === "Enter" && r.current === !1) {
      a.preventDefault();
      const s = lf(e.page);
      e.onSendMessage(s, {
        text: i.current
      }), i.current = "", o.current.value = "", n(""), console.log("ChatInput", o.current);
    }
  };
  return zg(o, {
    name: "chat-input"
  }), /* @__PURE__ */ D(Ng, {
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
function yz({
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
  } = En(), [, s] = h.exports.useState(), u = h.exports.useRef(null), c = n !== oi;
  return h.exports.useEffect(() => {
    function f(d) {
      d.key === "k" && d.metaKey && (d.preventDefault(), c && i());
    }
    return document.addEventListener("keydown", f), () => {
      document.removeEventListener("keydown", f);
    };
  }, [c, i, l, e]), h.exports.useEffect(() => {
    const f = t.current;
    !f || (o ? f.style.overflow = "hidden" : f.style.overflow = "");
  }, [o, t]), o && zg(u, {
    name: "subcommand-input"
  }), /* @__PURE__ */ se(qO, {
    open: o,
    onOpenChange: (f) => {
      !c || l(f);
    },
    modal: !0,
    children: [/* @__PURE__ */ se(GO, {
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
    }), /* @__PURE__ */ D(QO, {
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
      children: /* @__PURE__ */ se(_t, {
        loop: !0,
        shouldFilter: !1,
        children: [/* @__PURE__ */ D(_t.List, {
          children: /* @__PURE__ */ se(_t.Group, {
            heading: n == null ? void 0 : n.toUpperCase(),
            children: [a && /* @__PURE__ */ D(xz, {
              page: n
            }), !a && /* @__PURE__ */ D(wz, {
              value: n,
              onSelect: r
            })]
          })
        }), /* @__PURE__ */ D(_t.Input, {
          autoFocus: !0,
          onValueChange: s,
          ref: u,
          placeholder: "Search for actions..."
        })]
      })
    })]
  });
}
function xz({
  page: e
}) {
  const {
    newConvention: t
  } = xo((r) => r), {
    setSubCommandOpen: n
  } = En((r) => r);
  return /* @__PURE__ */ D(Ct, {
    children: /* @__PURE__ */ D(Ur, {
      value: "new-convention",
      onSelect: () => {
        t(lf(e)), n(!1);
      },
      shortcut: "\u21B5",
      children: /* @__PURE__ */ D("span", {
        className: "truncate",
        children: "New Convention"
      })
    })
  });
}
function wz(e) {
  return e.value === Pe.ASK_CHATGPT_PAGE ? /* @__PURE__ */ D(bz, {
    onSelect: e.onSelect
  }) : e.value === Pe.TRANSLATE_WITH_PAGE ? /* @__PURE__ */ D(Sz, {
    onSelect: e.onSelect
  }) : e.value === Tn.OPEN_HISTORY ? /* @__PURE__ */ D(JN, {}) : e.value === Tn.CLEAR_STORAGE ? /* @__PURE__ */ D(aD, {}) : e.value === Pe.CONFIG_PAGE ? /* @__PURE__ */ D(nD, {
    onSelect: e.onSelect
  }) : e.value === Pe.SUMMARY_WITH_PAGE ? /* @__PURE__ */ D(cD, {
    onSelect: e.onSelect
  }) : null;
}
function E2(e) {
  const {
    setSubCommandOpen: t
  } = En();
  return /* @__PURE__ */ D(Ur, {
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
function bz({
  onSelect: e
}) {
  var t;
  return /* @__PURE__ */ se(Ct, {
    children: [/* @__PURE__ */ D(Ur, {
      value: "search-input",
      onSelect: () => {
        e(nc, {
          text: ex()
        });
      },
      shortcut: "\u21B5",
      children: /* @__PURE__ */ D("span", {
        className: "truncate",
        children: (t = ex()) != null ? t : "Search input"
      })
    }), /* @__PURE__ */ D(E2, {
      page: rc,
      onSelect: e
    })]
  });
}
function Sz({
  onSelect: e
}) {
  return /* @__PURE__ */ D(Ct, {
    children: /* @__PURE__ */ D(E2, {
      page: Ia,
      onSelect: e
    })
  });
}
const kz = () => /* @__PURE__ */ se("div", {
  className: "dark",
  children: [/* @__PURE__ */ D(pz, {}), /* @__PURE__ */ D($6, {})]
});
(() => {
  var i;
  console.info("[aiflow] Hello world from content script"), Sc("tab-prev", ({
    data: l
  }) => {
    console.log(`[aiflow] Navigate from page "${l.title}"`);
  });
  const e = document.createElement("div"), t = document.createElement("div");
  e.className = "aiflow", e.id = "aiflow";
  const n = document.createElement("link"), r = ((i = e.attachShadow) == null ? void 0 : i.call(e, {
    mode: "closed"
  })) || e;
  n.setAttribute("rel", "stylesheet"), n.setAttribute("href", it.runtime.getURL("dist/contentScripts/style.css")), r.appendChild(n), r.appendChild(t), document.body.appendChild(e), pb(t).render(/* @__PURE__ */ D(kz, {}));
})();
