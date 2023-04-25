var P2 = Object.defineProperty;
var _2 = (e, t, n) => t in e ? P2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Q = (e, t, n) => (_2(e, typeof t != "symbol" ? t + "" : t, n), n);
function R2(e, t) {
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
function Mh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nx = { exports: {} };
(function(e, t) {
  (function(n, r) {
    r(e);
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : I2, function(n) {
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
          constructor(P, _ = void 0) {
            super(_), this.createItem = P;
          }
          get(P) {
            return this.has(P) || this.set(P, this.createItem(P)), super.get(P);
          }
        }
        const u = ($) => $ && typeof $ == "object" && typeof $.then == "function", c = ($, P) => (..._) => {
          l.runtime.lastError ? $.reject(new Error(l.runtime.lastError.message)) : P.singleCallbackArg || _.length <= 1 && P.singleCallbackArg !== !1 ? $.resolve(_[0]) : $.resolve(_);
        }, f = ($) => $ == 1 ? "argument" : "arguments", d = ($, P) => function(I, ...M) {
          if (M.length < P.minArgs)
            throw new Error(`Expected at least ${P.minArgs} ${f(P.minArgs)} for ${$}(), got ${M.length}`);
          if (M.length > P.maxArgs)
            throw new Error(`Expected at most ${P.maxArgs} ${f(P.maxArgs)} for ${$}(), got ${M.length}`);
          return new Promise((L, B) => {
            if (P.fallbackToNoCallback)
              try {
                I[$](...M, c({
                  resolve: L,
                  reject: B
                }, P));
              } catch (z) {
                console.warn(`${$} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, z), I[$](...M), P.fallbackToNoCallback = !1, P.noCallback = !0, L();
              }
            else
              P.noCallback ? (I[$](...M), L()) : I[$](...M, c({
                resolve: L,
                reject: B
              }, P));
          });
        }, g = ($, P, _) => new Proxy(P, {
          apply(I, M, L) {
            return _.call(M, $, ...L);
          }
        });
        let h = Function.call.bind(Object.prototype.hasOwnProperty);
        const v = ($, P = {}, _ = {}) => {
          let I = /* @__PURE__ */ Object.create(null), M = {
            has(B, z) {
              return z in $ || z in I;
            },
            get(B, z, R) {
              if (z in I)
                return I[z];
              if (!(z in $))
                return;
              let H = $[z];
              if (typeof H == "function")
                if (typeof P[z] == "function")
                  H = g($, $[z], P[z]);
                else if (h(_, z)) {
                  let N = d(z, _[z]);
                  H = g($, $[z], N);
                } else
                  H = H.bind($);
              else if (typeof H == "object" && H !== null && (h(P, z) || h(_, z)))
                H = v(H, P[z], _[z]);
              else if (h(_, "*"))
                H = v(H, P[z], _["*"]);
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
            set(B, z, R, H) {
              return z in I ? I[z] = R : $[z] = R, !0;
            },
            defineProperty(B, z, R) {
              return Reflect.defineProperty(I, z, R);
            },
            deleteProperty(B, z) {
              return Reflect.deleteProperty(I, z);
            }
          }, L = Object.create($);
          return new Proxy(L, M);
        }, w = ($) => ({
          addListener(P, _, ...I) {
            P.addListener($.get(_), ...I);
          },
          hasListener(P, _) {
            return P.hasListener($.get(_));
          },
          removeListener(P, _) {
            P.removeListener($.get(_));
          }
        }), p = new a(($) => typeof $ != "function" ? $ : function(_) {
          const I = v(
            _,
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
        const x = new a(($) => typeof $ != "function" ? $ : function(_, I, M) {
          let L = !1, B, z = new Promise((T) => {
            B = function(O) {
              y || (console.warn(o, new Error().stack), y = !0), L = !0, T(O);
            };
          }), R;
          try {
            R = $(_, I, B);
          } catch (T) {
            R = Promise.reject(T);
          }
          const H = R !== !0 && u(R);
          if (R !== !0 && !H && !L)
            return !1;
          const N = (T) => {
            T.then((O) => {
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
        }, A = ($, P, _, ...I) => {
          if (I.length < P.minArgs)
            throw new Error(`Expected at least ${P.minArgs} ${f(P.minArgs)} for ${$}(), got ${I.length}`);
          if (I.length > P.maxArgs)
            throw new Error(`Expected at most ${P.maxArgs} ${f(P.maxArgs)} for ${$}(), got ${I.length}`);
          return new Promise((M, L) => {
            const B = b.bind(null, {
              resolve: M,
              reject: L
            });
            I.push(B), _.sendMessage(...I);
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
var Kt = { exports: {} }, Tt = {}, m = { exports: {} }, fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ts = Symbol.for("react.element"), T2 = Symbol.for("react.portal"), O2 = Symbol.for("react.fragment"), M2 = Symbol.for("react.strict_mode"), N2 = Symbol.for("react.profiler"), D2 = Symbol.for("react.provider"), L2 = Symbol.for("react.context"), F2 = Symbol.for("react.forward_ref"), z2 = Symbol.for("react.suspense"), B2 = Symbol.for("react.memo"), j2 = Symbol.for("react.lazy"), jg = Symbol.iterator;
function H2(e) {
  return e === null || typeof e != "object" ? null : (e = jg && e[jg] || e["@@iterator"], typeof e == "function" ? e : null);
}
var rx = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ox = Object.assign, ix = {};
function Mi(e, t, n) {
  this.props = e, this.context = t, this.refs = ix, this.updater = n || rx;
}
Mi.prototype.isReactComponent = {};
Mi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Mi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lx() {
}
lx.prototype = Mi.prototype;
function Nh(e, t, n) {
  this.props = e, this.context = t, this.refs = ix, this.updater = n || rx;
}
var Dh = Nh.prototype = new lx();
Dh.constructor = Nh;
ox(Dh, Mi.prototype);
Dh.isPureReactComponent = !0;
var Hg = Array.isArray, sx = Object.prototype.hasOwnProperty, Lh = { current: null }, ax = { key: !0, ref: !0, __self: !0, __source: !0 };
function ux(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      sx.call(t, r) && !ax.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: Ts, type: e, key: i, ref: l, props: o, _owner: Lh.current };
}
function V2(e, t) {
  return { $$typeof: Ts, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Fh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ts;
}
function U2(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Vg = /\/+/g;
function cf(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? U2("" + e.key) : t.toString(36);
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
          case T2:
            l = !0;
        }
    }
  if (l)
    return l = e, o = o(l), e = r === "" ? "." + cf(l, 0) : r, Hg(o) ? (n = "", e != null && (n = e.replace(Vg, "$&/") + "/"), Ba(o, t, n, "", function(u) {
      return u;
    })) : o != null && (Fh(o) && (o = V2(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(Vg, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Hg(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + cf(i, s);
      l += Ba(i, t, n, a, o);
    }
  else if (a = H2(e), typeof a == "function")
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, a = r + cf(i, s++), l += Ba(i, t, n, a, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Js(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Ba(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function W2(e) {
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
var pt = { current: null }, ja = { transition: null }, q2 = { ReactCurrentDispatcher: pt, ReactCurrentBatchConfig: ja, ReactCurrentOwner: Lh };
fe.Children = { map: Js, forEach: function(e, t, n) {
  Js(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Js(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Js(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Fh(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
fe.Component = Mi;
fe.Fragment = O2;
fe.Profiler = N2;
fe.PureComponent = Nh;
fe.StrictMode = M2;
fe.Suspense = z2;
fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q2;
fe.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ox({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Lh.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (a in t)
      sx.call(t, a) && !ax.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
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
  return e = { $$typeof: L2, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: D2, _context: e }, e.Consumer = e;
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
  return { $$typeof: F2, render: e };
};
fe.isValidElement = Fh;
fe.lazy = function(e) {
  return { $$typeof: j2, _payload: { _status: -1, _result: e }, _init: W2 };
};
fe.memo = function(e, t) {
  return { $$typeof: B2, type: e, compare: t === void 0 ? null : t };
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
const je = /* @__PURE__ */ Mh(m.exports), cx = /* @__PURE__ */ R2({
  __proto__: null,
  default: je
}, [m.exports]);
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
  function t(N, T) {
    var O = N.length;
    N.push(T);
    e:
      for (; 0 < O; ) {
        var k = O - 1 >>> 1, C = N[k];
        if (0 < o(C, T))
          N[k] = T, N[O] = C, O = k;
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
    var T = N[0], O = N.pop();
    if (O !== T) {
      N[0] = O;
      e:
        for (var k = 0, C = N.length, J = C >>> 1; k < J; ) {
          var ne = 2 * (k + 1) - 1, se = N[ne], ee = ne + 1, G = N[ee];
          if (0 > o(se, O))
            ee < C && 0 > o(G, se) ? (N[k] = G, N[ee] = O, k = ee) : (N[k] = se, N[ne] = O, k = ne);
          else if (ee < C && 0 > o(G, O))
            N[k] = G, N[ee] = O, k = ee;
          else
            break e;
        }
    }
    return T;
  }
  function o(N, T) {
    var O = N.sortIndex - T.sortIndex;
    return O !== 0 ? O : N.id - T.id;
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
    for (var T = n(u); T !== null; ) {
      if (T.callback === null)
        r(u);
      else if (T.startTime <= N)
        r(u), T.sortIndex = T.expirationTime, t(a, T);
      else
        break;
      T = n(u);
    }
  }
  function b(N) {
    if (v = !1, x(N), !h)
      if (n(a) !== null)
        h = !0, R(A);
      else {
        var T = n(u);
        T !== null && H(b, T.startTime - N);
      }
  }
  function A(N, T) {
    h = !1, v && (v = !1, p($), $ = -1), g = !0;
    var O = d;
    try {
      for (x(T), f = n(a); f !== null && (!(f.expirationTime > T) || N && !I()); ) {
        var k = f.callback;
        if (typeof k == "function") {
          f.callback = null, d = f.priorityLevel;
          var C = k(f.expirationTime <= T);
          T = e.unstable_now(), typeof C == "function" ? f.callback = C : f === n(a) && r(a), x(T);
        } else
          r(a);
        f = n(a);
      }
      if (f !== null)
        var J = !0;
      else {
        var ne = n(u);
        ne !== null && H(b, ne.startTime - T), J = !1;
      }
      return J;
    } finally {
      f = null, d = O, g = !1;
    }
  }
  var S = !1, E = null, $ = -1, P = 5, _ = -1;
  function I() {
    return !(e.unstable_now() - _ < P);
  }
  function M() {
    if (E !== null) {
      var N = e.unstable_now();
      _ = N;
      var T = !0;
      try {
        T = E(!0, N);
      } finally {
        T ? L() : (S = !1, E = null);
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
  function H(N, T) {
    $ = w(function() {
      N(e.unstable_now());
    }, T);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    h || g || (h = !0, R(A));
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
        var T = 3;
        break;
      default:
        T = d;
    }
    var O = d;
    d = T;
    try {
      return N();
    } finally {
      d = O;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, T) {
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
      return T();
    } finally {
      d = O;
    }
  }, e.unstable_scheduleCallback = function(N, T, O) {
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
    return C = O + C, N = { id: c++, callback: T, priorityLevel: N, startTime: O, expirationTime: C, sortIndex: -1 }, O > k ? (N.sortIndex = O, t(u, N), n(a) === null && N === n(u) && (v ? (p($), $ = -1) : v = !0, H(b, O - k))) : (N.sortIndex = C, t(a, N), h || g || (h = !0, R(A))), N;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(N) {
    var T = d;
    return function() {
      var O = d;
      d = T;
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
var px = m.exports, It = fx.exports;
function j(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var hx = /* @__PURE__ */ new Set(), Wl = {};
function ko(e, t) {
  xi(e, t), xi(e + "Capture", t);
}
function xi(e, t) {
  for (Wl[e] = t, e = 0; e < t.length; e++)
    hx.add(t[e]);
}
var Wn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Od = Object.prototype.hasOwnProperty, G2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ug = {}, Wg = {};
function Q2(e) {
  return Od.call(Wg, e) ? !0 : Od.call(Ug, e) ? !1 : G2.test(e) ? Wg[e] = !0 : (Ug[e] = !0, !1);
}
function K2(e, t, n, r) {
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
function Y2(e, t, n, r) {
  if (t === null || typeof t > "u" || K2(e, t, n, r))
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
var zh = /[\-:]([a-z])/g;
function Bh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    zh,
    Bh
  );
  Je[t] = new ht(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(zh, Bh);
  Je[t] = new ht(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(zh, Bh);
  Je[t] = new ht(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Je[e] = new ht(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Je.xlinkHref = new ht("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Je[e] = new ht(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function jh(e, t, n, r) {
  var o = Je.hasOwnProperty(t) ? Je[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Y2(t, n, o, r) && (n = null), r || o === null ? Q2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Zn = px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ea = Symbol.for("react.element"), Uo = Symbol.for("react.portal"), Wo = Symbol.for("react.fragment"), Hh = Symbol.for("react.strict_mode"), Md = Symbol.for("react.profiler"), mx = Symbol.for("react.provider"), gx = Symbol.for("react.context"), Vh = Symbol.for("react.forward_ref"), Nd = Symbol.for("react.suspense"), Dd = Symbol.for("react.suspense_list"), Uh = Symbol.for("react.memo"), pr = Symbol.for("react.lazy"), vx = Symbol.for("react.offscreen"), qg = Symbol.iterator;
function Yi(e) {
  return e === null || typeof e != "object" ? null : (e = qg && e[qg] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Oe = Object.assign, ff;
function gl(e) {
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
    df = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? gl(e) : "";
}
function X2(e) {
  switch (e.tag) {
    case 5:
      return gl(e.type);
    case 16:
      return gl("Lazy");
    case 13:
      return gl("Suspense");
    case 19:
      return gl("SuspenseList");
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
    case Wo:
      return "Fragment";
    case Uo:
      return "Portal";
    case Md:
      return "Profiler";
    case Hh:
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
      case Vh:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Uh:
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
function Z2(e) {
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
      return t === Hh ? "StrictMode" : "Mode";
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
function yx(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function J2(e) {
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
function ta(e) {
  e._valueTracker || (e._valueTracker = J2(e));
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
  return Oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n != null ? n : e._wrapperState.initialChecked });
}
function Gg(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Nr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function wx(e, t) {
  t = t.checked, t != null && jh(e, "checked", t, !1);
}
function zd(e, t) {
  wx(e, t);
  var n = Nr(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Bd(e, t.type, n) : t.hasOwnProperty("defaultValue") && Bd(e, t.type, Nr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Qg(e, t, n) {
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
var vl = Array.isArray;
function ri(e, t, n, r) {
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
function jd(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(j(91));
  return Oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Kg(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(j(92));
      if (vl(n)) {
        if (1 < n.length)
          throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Nr(n) };
}
function bx(e, t) {
  var n = Nr(t.value), r = Nr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Yg(e) {
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
var na, kx = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (na = na || document.createElement("div"), na.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = na.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function ql(e, t) {
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
}, e$ = ["Webkit", "ms", "Moz", "O"];
Object.keys(kl).forEach(function(e) {
  e$.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), kl[t] = kl[e];
  });
});
function Cx(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || kl.hasOwnProperty(e) && kl[e] ? ("" + t).trim() : t + "px";
}
function $x(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = Cx(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var t$ = Oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Vd(e, t) {
  if (t) {
    if (t$[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Wh(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var qd = null, oi = null, ii = null;
function Xg(e) {
  if (e = Ns(e)) {
    if (typeof qd != "function")
      throw Error(j(280));
    var t = e.stateNode;
    t && (t = cc(t), qd(e.stateNode, e.type, t));
  }
}
function Ex(e) {
  oi ? ii ? ii.push(e) : ii = [e] : oi = e;
}
function Ax() {
  if (oi) {
    var e = oi, t = ii;
    if (ii = oi = null, Xg(e), t)
      for (e = 0; e < t.length; e++)
        Xg(t[e]);
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
    hf = !1, (oi !== null || ii !== null) && (_x(), Ax());
  }
}
function Gl(e, t) {
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
    var Xi = {};
    Object.defineProperty(Xi, "passive", { get: function() {
      Gd = !0;
    } }), window.addEventListener("test", Xi, Xi), window.removeEventListener("test", Xi, Xi);
  } catch {
    Gd = !1;
  }
function n$(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Cl = !1, cu = null, fu = !1, Qd = null, r$ = { onError: function(e) {
  Cl = !0, cu = e;
} };
function o$(e, t, n, r, o, i, l, s, a) {
  Cl = !1, cu = null, n$.apply(r$, arguments);
}
function i$(e, t, n, r, o, i, l, s, a) {
  if (o$.apply(this, arguments), Cl) {
    if (Cl) {
      var u = cu;
      Cl = !1, cu = null;
    } else
      throw Error(j(198));
    fu || (fu = !0, Qd = u);
  }
}
function Co(e) {
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
function Ix(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Zg(e) {
  if (Co(e) !== e)
    throw Error(j(188));
}
function l$(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Co(e), t === null)
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
          return Zg(o), e;
        if (i === r)
          return Zg(o), t;
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
function Tx(e) {
  return e = l$(e), e !== null ? Ox(e) : null;
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
var Mx = It.unstable_scheduleCallback, Jg = It.unstable_cancelCallback, s$ = It.unstable_shouldYield, a$ = It.unstable_requestPaint, Fe = It.unstable_now, u$ = It.unstable_getCurrentPriorityLevel, qh = It.unstable_ImmediatePriority, Nx = It.unstable_UserBlockingPriority, du = It.unstable_NormalPriority, c$ = It.unstable_LowPriority, Dx = It.unstable_IdlePriority, lc = null, Cn = null;
function f$(e) {
  if (Cn && typeof Cn.onCommitFiberRoot == "function")
    try {
      Cn.onCommitFiberRoot(lc, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var fn = Math.clz32 ? Math.clz32 : h$, d$ = Math.log, p$ = Math.LN2;
function h$(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (d$(e) / p$ | 0) | 0;
}
var ra = 64, oa = 4194304;
function yl(e) {
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
    var s = l & ~o;
    s !== 0 ? r = yl(s) : (i &= l, i !== 0 && (r = yl(i)));
  } else
    l = n & ~o, l !== 0 ? r = yl(l) : i !== 0 && (r = yl(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && (t & o) === 0 && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - fn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function m$(e, t) {
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
function g$(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - fn(i), s = 1 << l, a = o[l];
    a === -1 ? ((s & n) === 0 || (s & r) !== 0) && (o[l] = m$(s, t)) : a <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function Kd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Lx() {
  var e = ra;
  return ra <<= 1, (ra & 4194240) === 0 && (ra = 64), e;
}
function mf(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Os(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - fn(t), e[t] = n;
}
function v$(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - fn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Gh(e, t) {
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
var zx, Qh, Bx, jx, Hx, Yd = !1, ia = [], $r = null, Er = null, Ar = null, Ql = /* @__PURE__ */ new Map(), Kl = /* @__PURE__ */ new Map(), gr = [], y$ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function e0(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      $r = null;
      break;
    case "dragenter":
    case "dragleave":
      Er = null;
      break;
    case "mouseover":
    case "mouseout":
      Ar = null;
      break;
    case "pointerover":
    case "pointerout":
      Ql.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kl.delete(t.pointerId);
  }
}
function Zi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Ns(t), t !== null && Qh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function x$(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return $r = Zi($r, e, t, n, r, o), !0;
    case "dragenter":
      return Er = Zi(Er, e, t, n, r, o), !0;
    case "mouseover":
      return Ar = Zi(Ar, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ql.set(i, Zi(Ql.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Kl.set(i, Zi(Kl.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Vx(e) {
  var t = ro(e.target);
  if (t !== null) {
    var n = Co(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ix(n), t !== null) {
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
function Ha(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Xd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Wd = r, n.target.dispatchEvent(r), Wd = null;
    } else
      return t = Ns(n), t !== null && Qh(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function t0(e, t, n) {
  Ha(e) && n.delete(t);
}
function w$() {
  Yd = !1, $r !== null && Ha($r) && ($r = null), Er !== null && Ha(Er) && (Er = null), Ar !== null && Ha(Ar) && (Ar = null), Ql.forEach(t0), Kl.forEach(t0);
}
function Ji(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Yd || (Yd = !0, It.unstable_scheduleCallback(It.unstable_NormalPriority, w$)));
}
function Yl(e) {
  function t(o) {
    return Ji(o, e);
  }
  if (0 < ia.length) {
    Ji(ia[0], e);
    for (var n = 1; n < ia.length; n++) {
      var r = ia[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for ($r !== null && Ji($r, e), Er !== null && Ji(Er, e), Ar !== null && Ji(Ar, e), Ql.forEach(t), Kl.forEach(t), n = 0; n < gr.length; n++)
    r = gr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < gr.length && (n = gr[0], n.blockedOn === null); )
    Vx(n), n.blockedOn === null && gr.shift();
}
var li = Zn.ReactCurrentBatchConfig, hu = !0;
function b$(e, t, n, r) {
  var o = we, i = li.transition;
  li.transition = null;
  try {
    we = 1, Kh(e, t, n, r);
  } finally {
    we = o, li.transition = i;
  }
}
function S$(e, t, n, r) {
  var o = we, i = li.transition;
  li.transition = null;
  try {
    we = 4, Kh(e, t, n, r);
  } finally {
    we = o, li.transition = i;
  }
}
function Kh(e, t, n, r) {
  if (hu) {
    var o = Xd(e, t, n, r);
    if (o === null)
      $f(e, t, r, mu, n), e0(e, r);
    else if (x$(o, e, t, n, r))
      r.stopPropagation();
    else if (e0(e, r), t & 4 && -1 < y$.indexOf(e)) {
      for (; o !== null; ) {
        var i = Ns(o);
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
  if (mu = null, e = Wh(r), e = ro(e), e !== null)
    if (t = Co(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Ix(t), e !== null)
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
      switch (u$()) {
        case qh:
          return 1;
        case Nx:
          return 4;
        case du:
        case c$:
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
var yr = null, Yh = null, Va = null;
function Wx() {
  if (Va)
    return Va;
  var e, t = Yh, n = t.length, r, o = "value" in yr ? yr.value : yr.textContent, i = o.length;
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
function la() {
  return !0;
}
function n0() {
  return !1;
}
function Ot(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? la : n0, this.isPropagationStopped = n0, this;
  }
  return Oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = la);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = la);
  }, persist: function() {
  }, isPersistent: la }), t;
}
var Ni = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Xh = Ot(Ni), Ms = Oe({}, Ni, { view: 0, detail: 0 }), k$ = Ot(Ms), gf, vf, el, sc = Oe({}, Ms, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Zh, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== el && (el && e.type === "mousemove" ? (gf = e.screenX - el.screenX, vf = e.screenY - el.screenY) : vf = gf = 0, el = e), gf);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : vf;
} }), r0 = Ot(sc), C$ = Oe({}, sc, { dataTransfer: 0 }), $$ = Ot(C$), E$ = Oe({}, Ms, { relatedTarget: 0 }), yf = Ot(E$), A$ = Oe({}, Ni, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), P$ = Ot(A$), _$ = Oe({}, Ni, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), R$ = Ot(_$), I$ = Oe({}, Ni, { data: 0 }), o0 = Ot(I$), T$ = {
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
}, O$ = {
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
}, M$ = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function N$(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = M$[e]) ? !!t[e] : !1;
}
function Zh() {
  return N$;
}
var D$ = Oe({}, Ms, { key: function(e) {
  if (e.key) {
    var t = T$[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Ua(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? O$[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Zh, charCode: function(e) {
  return e.type === "keypress" ? Ua(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ua(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), L$ = Ot(D$), F$ = Oe({}, sc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), i0 = Ot(F$), z$ = Oe({}, Ms, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Zh }), B$ = Ot(z$), j$ = Oe({}, Ni, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), H$ = Ot(j$), V$ = Oe({}, sc, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), U$ = Ot(V$), W$ = [9, 13, 27, 32], Jh = Wn && "CompositionEvent" in window, $l = null;
Wn && "documentMode" in document && ($l = document.documentMode);
var q$ = Wn && "TextEvent" in window && !$l, qx = Wn && (!Jh || $l && 8 < $l && 11 >= $l), l0 = String.fromCharCode(32), s0 = !1;
function Gx(e, t) {
  switch (e) {
    case "keyup":
      return W$.indexOf(t.keyCode) !== -1;
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
var qo = !1;
function G$(e, t) {
  switch (e) {
    case "compositionend":
      return Qx(t);
    case "keypress":
      return t.which !== 32 ? null : (s0 = !0, l0);
    case "textInput":
      return e = t.data, e === l0 && s0 ? null : e;
    default:
      return null;
  }
}
function Q$(e, t) {
  if (qo)
    return e === "compositionend" || !Jh && Gx(e, t) ? (e = Wx(), Va = Yh = yr = null, qo = !1, e) : null;
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
var K$ = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function a0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!K$[e.type] : t === "textarea";
}
function Kx(e, t, n, r) {
  Ex(r), t = gu(t, "onChange"), 0 < t.length && (n = new Xh("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var El = null, Xl = null;
function Y$(e) {
  lw(e, 0);
}
function ac(e) {
  var t = Ko(e);
  if (xx(t))
    return e;
}
function X$(e, t) {
  if (e === "change")
    return t;
}
var Yx = !1;
if (Wn) {
  var xf;
  if (Wn) {
    var wf = "oninput" in document;
    if (!wf) {
      var u0 = document.createElement("div");
      u0.setAttribute("oninput", "return;"), wf = typeof u0.oninput == "function";
    }
    xf = wf;
  } else
    xf = !1;
  Yx = xf && (!document.documentMode || 9 < document.documentMode);
}
function c0() {
  El && (El.detachEvent("onpropertychange", Xx), Xl = El = null);
}
function Xx(e) {
  if (e.propertyName === "value" && ac(Xl)) {
    var t = [];
    Kx(t, Xl, e, Wh(e)), Rx(Y$, t);
  }
}
function Z$(e, t, n) {
  e === "focusin" ? (c0(), El = t, Xl = n, El.attachEvent("onpropertychange", Xx)) : e === "focusout" && c0();
}
function J$(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ac(Xl);
}
function eE(e, t) {
  if (e === "click")
    return ac(t);
}
function tE(e, t) {
  if (e === "input" || e === "change")
    return ac(t);
}
function nE(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var hn = typeof Object.is == "function" ? Object.is : nE;
function Zl(e, t) {
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
function f0(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function d0(e, t) {
  var n = f0(e);
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
    n = f0(n);
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
function em(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function rE(e) {
  var t = Jx(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Zx(n.ownerDocument.documentElement, n)) {
    if (r !== null && em(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = d0(n, i);
        var l = d0(
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
var oE = Wn && "documentMode" in document && 11 >= document.documentMode, Go = null, Zd = null, Al = null, Jd = !1;
function p0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Jd || Go == null || Go !== uu(r) || (r = Go, "selectionStart" in r && em(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Al && Zl(Al, r) || (Al = r, r = gu(Zd, "onSelect"), 0 < r.length && (t = new Xh("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Go)));
}
function sa(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Qo = { animationend: sa("Animation", "AnimationEnd"), animationiteration: sa("Animation", "AnimationIteration"), animationstart: sa("Animation", "AnimationStart"), transitionend: sa("Transition", "TransitionEnd") }, bf = {}, ew = {};
Wn && (ew = document.createElement("div").style, "AnimationEvent" in window || (delete Qo.animationend.animation, delete Qo.animationiteration.animation, delete Qo.animationstart.animation), "TransitionEvent" in window || delete Qo.transitionend.transition);
function uc(e) {
  if (bf[e])
    return bf[e];
  if (!Qo[e])
    return e;
  var t = Qo[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in ew)
      return bf[e] = t[n];
  return e;
}
var tw = uc("animationend"), nw = uc("animationiteration"), rw = uc("animationstart"), ow = uc("transitionend"), iw = /* @__PURE__ */ new Map(), h0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Fr(e, t) {
  iw.set(e, t), ko(t, [e]);
}
for (var Sf = 0; Sf < h0.length; Sf++) {
  var kf = h0[Sf], iE = kf.toLowerCase(), lE = kf[0].toUpperCase() + kf.slice(1);
  Fr(iE, "on" + lE);
}
Fr(tw, "onAnimationEnd");
Fr(nw, "onAnimationIteration");
Fr(rw, "onAnimationStart");
Fr("dblclick", "onDoubleClick");
Fr("focusin", "onFocus");
Fr("focusout", "onBlur");
Fr(ow, "onTransitionEnd");
xi("onMouseEnter", ["mouseout", "mouseover"]);
xi("onMouseLeave", ["mouseout", "mouseover"]);
xi("onPointerEnter", ["pointerout", "pointerover"]);
xi("onPointerLeave", ["pointerout", "pointerover"]);
ko("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ko("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ko("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ko("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ko("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ko("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var xl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), sE = new Set("cancel close invalid load scroll toggle".split(" ").concat(xl));
function m0(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, i$(r, t, void 0, e), e.currentTarget = null;
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
          var s = r[l], a = s.instance, u = s.currentTarget;
          if (s = s.listener, a !== i && o.isPropagationStopped())
            break e;
          m0(o, s, u), i = a;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== i && o.isPropagationStopped())
            break e;
          m0(o, s, u), i = a;
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
  n.has(r) || (sw(t, e, 2, !1), n.add(r));
}
function Cf(e, t, n) {
  var r = 0;
  t && (r |= 4), sw(n, e, r, t);
}
var aa = "_reactListening" + Math.random().toString(36).slice(2);
function Jl(e) {
  if (!e[aa]) {
    e[aa] = !0, hx.forEach(function(n) {
      n !== "selectionchange" && (sE.has(n) || Cf(n, !1, e), Cf(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[aa] || (t[aa] = !0, Cf("selectionchange", !1, t));
  }
}
function sw(e, t, n, r) {
  switch (Ux(t)) {
    case 1:
      var o = b$;
      break;
    case 4:
      o = S$;
      break;
    default:
      o = Kh;
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
            if (l = ro(s), l === null)
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
  Rx(function() {
    var u = i, c = Wh(n), f = [];
    e: {
      var d = iw.get(e);
      if (d !== void 0) {
        var g = Xh, h = e;
        switch (e) {
          case "keypress":
            if (Ua(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = L$;
            break;
          case "focusin":
            h = "focus", g = yf;
            break;
          case "focusout":
            h = "blur", g = yf;
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
            g = r0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = $$;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = B$;
            break;
          case tw:
          case nw:
          case rw:
            g = P$;
            break;
          case ow:
            g = H$;
            break;
          case "scroll":
            g = k$;
            break;
          case "wheel":
            g = U$;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = R$;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = i0;
        }
        var v = (t & 4) !== 0, w = !v && e === "scroll", p = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var y = u, x; y !== null; ) {
          x = y;
          var b = x.stateNode;
          if (x.tag === 5 && b !== null && (x = b, p !== null && (b = Gl(y, p), b != null && v.push(es(y, b, x)))), w)
            break;
          y = y.return;
        }
        0 < v.length && (d = new g(d, h, null, n, c), f.push({ event: d, listeners: v }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== Wd && (h = n.relatedTarget || n.fromElement) && (ro(h) || h[qn]))
          break e;
        if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (h = n.relatedTarget || n.toElement, g = u, h = h ? ro(h) : null, h !== null && (w = Co(h), h !== w || h.tag !== 5 && h.tag !== 6) && (h = null)) : (g = null, h = u), g !== h)) {
          if (v = r0, b = "onMouseLeave", p = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (v = i0, b = "onPointerLeave", p = "onPointerEnter", y = "pointer"), w = g == null ? d : Ko(g), x = h == null ? d : Ko(h), d = new v(b, y + "leave", g, n, c), d.target = w, d.relatedTarget = x, b = null, ro(c) === u && (v = new v(p, y + "enter", h, n, c), v.target = x, v.relatedTarget = w, b = v), w = b, g && h)
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
          g !== null && g0(f, d, g, v, !1), h !== null && w !== null && g0(f, w, h, v, !0);
        }
      }
      e: {
        if (d = u ? Ko(u) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file")
          var A = X$;
        else if (a0(d))
          if (Yx)
            A = tE;
          else {
            A = J$;
            var S = Z$;
          }
        else
          (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (A = eE);
        if (A && (A = A(e, u))) {
          Kx(f, A, n, c);
          break e;
        }
        S && S(e, d, u), e === "focusout" && (S = d._wrapperState) && S.controlled && d.type === "number" && Bd(d, "number", d.value);
      }
      switch (S = u ? Ko(u) : window, e) {
        case "focusin":
          (a0(S) || S.contentEditable === "true") && (Go = S, Zd = u, Al = null);
          break;
        case "focusout":
          Al = Zd = Go = null;
          break;
        case "mousedown":
          Jd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Jd = !1, p0(f, n, c);
          break;
        case "selectionchange":
          if (oE)
            break;
        case "keydown":
        case "keyup":
          p0(f, n, c);
      }
      var E;
      if (Jh)
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
        qo ? Gx(e, n) && ($ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && ($ = "onCompositionStart");
      $ && (qx && n.locale !== "ko" && (qo || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && qo && (E = Wx()) : (yr = c, Yh = "value" in yr ? yr.value : yr.textContent, qo = !0)), S = gu(u, $), 0 < S.length && ($ = new o0($, e, null, n, c), f.push({ event: $, listeners: S }), E ? $.data = E : (E = Qx(n), E !== null && ($.data = E)))), (E = q$ ? G$(e, n) : Q$(e, n)) && (u = gu(u, "onBeforeInput"), 0 < u.length && (c = new o0("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = E));
    }
    lw(f, t);
  });
}
function es(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function gu(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Gl(e, n), i != null && r.unshift(es(e, i, o)), i = Gl(e, t), i != null && r.push(es(e, i, o))), e = e.return;
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
function g0(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, u = s.stateNode;
    if (a !== null && a === r)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (a = Gl(n, i), a != null && l.unshift(es(n, a, s))) : o || (a = Gl(n, i), a != null && l.push(es(n, a, s)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var aE = /\r\n?/g, uE = /\u0000|\uFFFD/g;
function v0(e) {
  return (typeof e == "string" ? e : "" + e).replace(aE, `
`).replace(uE, "");
}
function ua(e, t, n) {
  if (t = v0(t), v0(e) !== t && n)
    throw Error(j(425));
}
function vu() {
}
var ep = null, tp = null;
function np(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var rp = typeof setTimeout == "function" ? setTimeout : void 0, cE = typeof clearTimeout == "function" ? clearTimeout : void 0, y0 = typeof Promise == "function" ? Promise : void 0, fE = typeof queueMicrotask == "function" ? queueMicrotask : typeof y0 < "u" ? function(e) {
  return y0.resolve(null).then(e).catch(dE);
} : rp;
function dE(e) {
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
          e.removeChild(o), Yl(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Yl(t);
}
function Pr(e) {
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
function x0(e) {
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
var Di = Math.random().toString(36).slice(2), bn = "__reactFiber$" + Di, ts = "__reactProps$" + Di, qn = "__reactContainer$" + Di, op = "__reactEvents$" + Di, pE = "__reactListeners$" + Di, hE = "__reactHandles$" + Di;
function ro(e) {
  var t = e[bn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[qn] || n[bn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = x0(e); e !== null; ) {
          if (n = e[bn])
            return n;
          e = x0(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ns(e) {
  return e = e[bn] || e[qn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Ko(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(j(33));
}
function cc(e) {
  return e[ts] || null;
}
var ip = [], Yo = -1;
function zr(e) {
  return { current: e };
}
function Pe(e) {
  0 > Yo || (e.current = ip[Yo], ip[Yo] = null, Yo--);
}
function $e(e, t) {
  Yo++, ip[Yo] = e.current, e.current = t;
}
var Dr = {}, it = zr(Dr), bt = zr(!1), co = Dr;
function wi(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Dr;
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
  Pe(bt), Pe(it);
}
function w0(e, t, n) {
  if (it.current !== Dr)
    throw Error(j(168));
  $e(it, t), $e(bt, n);
}
function aw(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(j(108, Z2(e) || "Unknown", o));
  return Oe({}, n, r);
}
function xu(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Dr, co = it.current, $e(it, e), $e(bt, bt.current), !0;
}
function b0(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(j(169));
  n ? (e = aw(e, t, co), r.__reactInternalMemoizedMergedChildContext = e, Pe(bt), Pe(it), $e(it, e)) : Pe(bt), $e(bt, n);
}
var jn = null, fc = !1, Af = !1;
function uw(e) {
  jn === null ? jn = [e] : jn.push(e);
}
function mE(e) {
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
      throw jn !== null && (jn = jn.slice(e + 1)), Mx(qh, Br), o;
    } finally {
      we = t, Af = !1;
    }
  }
  return null;
}
var Xo = [], Zo = 0, wu = null, bu = 0, Lt = [], Ft = 0, fo = null, Hn = 1, Vn = "";
function Qr(e, t) {
  Xo[Zo++] = bu, Xo[Zo++] = wu, wu = e, bu = t;
}
function cw(e, t, n) {
  Lt[Ft++] = Hn, Lt[Ft++] = Vn, Lt[Ft++] = fo, fo = e;
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
function tm(e) {
  e.return !== null && (Qr(e, 1), cw(e, 1, 0));
}
function nm(e) {
  for (; e === wu; )
    wu = Xo[--Zo], Xo[Zo] = null, bu = Xo[--Zo], Xo[Zo] = null;
  for (; e === fo; )
    fo = Lt[--Ft], Lt[Ft] = null, Vn = Lt[--Ft], Lt[Ft] = null, Hn = Lt[--Ft], Lt[Ft] = null;
}
var _t = null, Et = null, Re = !1, on = null;
function fw(e, t) {
  var n = Wt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function S0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, _t = e, Et = Pr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, _t = e, Et = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = fo !== null ? { id: Hn, overflow: Vn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Wt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, _t = e, Et = null, !0) : !1;
    default:
      return !1;
  }
}
function lp(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function sp(e) {
  if (Re) {
    var t = Et;
    if (t) {
      var n = t;
      if (!S0(e, t)) {
        if (lp(e))
          throw Error(j(418));
        t = Pr(n.nextSibling);
        var r = _t;
        t && S0(e, t) ? fw(r, n) : (e.flags = e.flags & -4097 | 2, Re = !1, _t = e);
      }
    } else {
      if (lp(e))
        throw Error(j(418));
      e.flags = e.flags & -4097 | 2, Re = !1, _t = e;
    }
  }
}
function k0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  _t = e;
}
function ca(e) {
  if (e !== _t)
    return !1;
  if (!Re)
    return k0(e), Re = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !np(e.type, e.memoizedProps)), t && (t = Et)) {
    if (lp(e))
      throw dw(), Error(j(418));
    for (; t; )
      fw(e, t), t = Pr(t.nextSibling);
  }
  if (k0(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Et = Pr(e.nextSibling);
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
    Et = _t ? Pr(e.stateNode.nextSibling) : null;
  return !0;
}
function dw() {
  for (var e = Et; e; )
    e = Pr(e.nextSibling);
}
function bi() {
  Et = _t = null, Re = !1;
}
function rm(e) {
  on === null ? on = [e] : on.push(e);
}
var gE = Zn.ReactCurrentBatchConfig;
function nn(e, t) {
  if (e && e.defaultProps) {
    t = Oe({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Su = zr(null), ku = null, Jo = null, om = null;
function im() {
  om = Jo = ku = null;
}
function lm(e) {
  var t = Su.current;
  Pe(Su), e._currentValue = t;
}
function ap(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function si(e, t) {
  ku = e, om = Jo = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (xt = !0), e.firstContext = null);
}
function Gt(e) {
  var t = e._currentValue;
  if (om !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Jo === null) {
      if (ku === null)
        throw Error(j(308));
      Jo = e, ku.dependencies = { lanes: 0, firstContext: e };
    } else
      Jo = Jo.next = e;
  return t;
}
var oo = null;
function sm(e) {
  oo === null ? oo = [e] : oo.push(e);
}
function pw(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, sm(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Gn(e, r);
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
function _r(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, (me & 2) !== 0) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Gn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, sm(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Gn(e, n);
}
function Wa(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Gh(e, n);
  }
}
function C0(e, t) {
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
              hr = !0;
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
    ho |= l, e.lanes = l, e.memoizedState = f;
  }
}
function $0(e, t, n) {
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
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var dc = { isMounted: function(e) {
  return (e = e._reactInternals) ? Co(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ft(), o = Ir(e), i = Un(r, o);
  i.payload = t, n != null && (i.callback = n), t = _r(e, i, o), t !== null && (dn(t, e, o, r), Wa(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ft(), o = Ir(e), i = Un(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = _r(e, i, o), t !== null && (dn(t, e, o, r), Wa(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ft(), r = Ir(e), o = Un(n, r);
  o.tag = 2, t != null && (o.callback = t), t = _r(e, o, r), t !== null && (dn(t, e, r, n), Wa(t, e, r));
} };
function E0(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Zl(n, r) || !Zl(o, i) : !0;
}
function gw(e, t, n) {
  var r = !1, o = Dr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Gt(i) : (o = St(t) ? co : it.current, r = t.contextTypes, i = (r = r != null) ? wi(e, o) : Dr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = dc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function A0(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && dc.enqueueReplaceState(t, t.state, null);
}
function cp(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = mw, am(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Gt(i) : (i = St(t) ? co : it.current, o.context = wi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (up(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && dc.enqueueReplaceState(o, o.state, null), Cu(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function tl(e, t, n) {
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
        s === mw && (s = o.refs = {}), l === null ? delete s[i] : s[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(j(284));
    if (!n._owner)
      throw Error(j(290, e));
  }
  return e;
}
function fa(e, t) {
  throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function P0(e) {
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
  function s(p, y, x, b) {
    return y === null || y.tag !== 6 ? (y = Mf(x, p.mode, b), y.return = p, y) : (y = o(y, x), y.return = p, y);
  }
  function a(p, y, x, b) {
    var A = x.type;
    return A === Wo ? c(p, y, x.props.children, b, x.key) : y !== null && (y.elementType === A || typeof A == "object" && A !== null && A.$$typeof === pr && P0(A) === y.type) ? (b = o(y, x.props), b.ref = tl(p, y, x), b.return = p, b) : (b = Xa(x.type, x.key, x.props, null, p.mode, b), b.ref = tl(p, y, x), b.return = p, b);
  }
  function u(p, y, x, b) {
    return y === null || y.tag !== 4 || y.stateNode.containerInfo !== x.containerInfo || y.stateNode.implementation !== x.implementation ? (y = Nf(x, p.mode, b), y.return = p, y) : (y = o(y, x.children || []), y.return = p, y);
  }
  function c(p, y, x, b, A) {
    return y === null || y.tag !== 7 ? (y = so(x, p.mode, b, A), y.return = p, y) : (y = o(y, x), y.return = p, y);
  }
  function f(p, y, x) {
    if (typeof y == "string" && y !== "" || typeof y == "number")
      return y = Mf("" + y, p.mode, x), y.return = p, y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ea:
          return x = Xa(y.type, y.key, y.props, null, p.mode, x), x.ref = tl(p, null, y), x.return = p, x;
        case Uo:
          return y = Nf(y, p.mode, x), y.return = p, y;
        case pr:
          var b = y._init;
          return f(p, b(y._payload), x);
      }
      if (vl(y) || Yi(y))
        return y = so(y, p.mode, x, null), y.return = p, y;
      fa(p, y);
    }
    return null;
  }
  function d(p, y, x, b) {
    var A = y !== null ? y.key : null;
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return A !== null ? null : s(p, y, "" + x, b);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ea:
          return x.key === A ? a(p, y, x, b) : null;
        case Uo:
          return x.key === A ? u(p, y, x, b) : null;
        case pr:
          return A = x._init, d(
            p,
            y,
            A(x._payload),
            b
          );
      }
      if (vl(x) || Yi(x))
        return A !== null ? null : c(p, y, x, b, null);
      fa(p, x);
    }
    return null;
  }
  function g(p, y, x, b, A) {
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return p = p.get(x) || null, s(y, p, "" + b, A);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case ea:
          return p = p.get(b.key === null ? x : b.key) || null, a(y, p, b, A);
        case Uo:
          return p = p.get(b.key === null ? x : b.key) || null, u(y, p, b, A);
        case pr:
          var S = b._init;
          return g(p, y, x, S(b._payload), A);
      }
      if (vl(b) || Yi(b))
        return p = p.get(x) || null, c(y, p, b, A, null);
      fa(y, b);
    }
    return null;
  }
  function h(p, y, x, b) {
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
    var A = Yi(x);
    if (typeof A != "function")
      throw Error(j(150));
    if (x = A.call(x), x == null)
      throw Error(j(151));
    for (var S = A = null, E = y, $ = y = 0, P = null, _ = x.next(); E !== null && !_.done; $++, _ = x.next()) {
      E.index > $ ? (P = E, E = null) : P = E.sibling;
      var I = d(p, E, _.value, b);
      if (I === null) {
        E === null && (E = P);
        break;
      }
      e && E && I.alternate === null && t(p, E), y = i(I, y, $), S === null ? A = I : S.sibling = I, S = I, E = P;
    }
    if (_.done)
      return n(
        p,
        E
      ), Re && Qr(p, $), A;
    if (E === null) {
      for (; !_.done; $++, _ = x.next())
        _ = f(p, _.value, b), _ !== null && (y = i(_, y, $), S === null ? A = _ : S.sibling = _, S = _);
      return Re && Qr(p, $), A;
    }
    for (E = r(p, E); !_.done; $++, _ = x.next())
      _ = g(E, p, $, _.value, b), _ !== null && (e && _.alternate !== null && E.delete(_.key === null ? $ : _.key), y = i(_, y, $), S === null ? A = _ : S.sibling = _, S = _);
    return e && E.forEach(function(M) {
      return t(p, M);
    }), Re && Qr(p, $), A;
  }
  function w(p, y, x, b) {
    if (typeof x == "object" && x !== null && x.type === Wo && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ea:
          e: {
            for (var A = x.key, S = y; S !== null; ) {
              if (S.key === A) {
                if (A = x.type, A === Wo) {
                  if (S.tag === 7) {
                    n(p, S.sibling), y = o(S, x.props.children), y.return = p, p = y;
                    break e;
                  }
                } else if (S.elementType === A || typeof A == "object" && A !== null && A.$$typeof === pr && P0(A) === S.type) {
                  n(p, S.sibling), y = o(S, x.props), y.ref = tl(p, S, x), y.return = p, p = y;
                  break e;
                }
                n(p, S);
                break;
              } else
                t(p, S);
              S = S.sibling;
            }
            x.type === Wo ? (y = so(x.props.children, p.mode, b, x.key), y.return = p, p = y) : (b = Xa(x.type, x.key, x.props, null, p.mode, b), b.ref = tl(p, y, x), b.return = p, p = b);
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
            y = Nf(x, p.mode, b), y.return = p, p = y;
          }
          return l(p);
        case pr:
          return S = x._init, w(p, y, S(x._payload), b);
      }
      if (vl(x))
        return h(p, y, x, b);
      if (Yi(x))
        return v(p, y, x, b);
      fa(p, x);
    }
    return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, y !== null && y.tag === 6 ? (n(p, y.sibling), y = o(y, x), y.return = p, p = y) : (n(p, y), y = Mf(x, p.mode, b), y.return = p, p = y), l(p)) : n(p, y);
  }
  return w;
}
var Si = vw(!0), yw = vw(!1), Ds = {}, $n = zr(Ds), ns = zr(Ds), rs = zr(Ds);
function io(e) {
  if (e === Ds)
    throw Error(j(174));
  return e;
}
function um(e, t) {
  switch ($e(rs, t), $e(ns, e), $e($n, Ds), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Hd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Hd(t, e);
  }
  Pe($n), $e($n, t);
}
function ki() {
  Pe($n), Pe(ns), Pe(rs);
}
function xw(e) {
  io(rs.current);
  var t = io($n.current), n = Hd(t, e.type);
  t !== n && ($e(ns, e), $e($n, n));
}
function cm(e) {
  ns.current === e && (Pe($n), Pe(ns));
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
function fm() {
  for (var e = 0; e < Pf.length; e++)
    Pf[e]._workInProgressVersionPrimary = null;
  Pf.length = 0;
}
var qa = Zn.ReactCurrentDispatcher, _f = Zn.ReactCurrentBatchConfig, po = 0, Te = null, We = null, Ge = null, Eu = !1, Pl = !1, os = 0, vE = 0;
function et() {
  throw Error(j(321));
}
function dm(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!hn(e[n], t[n]))
      return !1;
  return !0;
}
function pm(e, t, n, r, o, i) {
  if (po = i, Te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, qa.current = e === null || e.memoizedState === null ? bE : SE, e = n(r, o), Pl) {
    i = 0;
    do {
      if (Pl = !1, os = 0, 25 <= i)
        throw Error(j(301));
      i += 1, Ge = We = null, t.updateQueue = null, qa.current = kE, e = n(r, o);
    } while (Pl);
  }
  if (qa.current = Au, t = We !== null && We.next !== null, po = 0, Ge = We = Te = null, Eu = !1, t)
    throw Error(j(300));
  return e;
}
function hm() {
  var e = os !== 0;
  return os = 0, e;
}
function vn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ge === null ? Te.memoizedState = Ge = e : Ge = Ge.next = e, Ge;
}
function Qt() {
  if (We === null) {
    var e = Te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = We.next;
  var t = Ge === null ? Te.memoizedState : Ge.next;
  if (t !== null)
    Ge = t, We = e;
  else {
    if (e === null)
      throw Error(j(310));
    We = e, e = { memoizedState: We.memoizedState, baseState: We.baseState, baseQueue: We.baseQueue, queue: We.queue, next: null }, Ge === null ? Te.memoizedState = Ge = e : Ge = Ge.next = e;
  }
  return Ge;
}
function is(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Rf(e) {
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
    var s = l = null, a = null, u = i;
    do {
      var c = u.lane;
      if ((po & c) === c)
        a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (s = a = f, l = r) : a = a.next = f, Te.lanes |= c, ho |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? l = r : a.next = s, hn(r, t.memoizedState) || (xt = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Te.lanes |= i, ho |= i, o = o.next;
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
    hn(i, t.memoizedState) || (xt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function ww() {
}
function bw(e, t) {
  var n = Te, r = Qt(), o = t(), i = !hn(r.memoizedState, o);
  if (i && (r.memoizedState = o, xt = !0), r = r.queue, mm(Cw.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ge !== null && Ge.memoizedState.tag & 1) {
    if (n.flags |= 2048, ls(9, kw.bind(null, n, r, o, t), void 0, null), Ke === null)
      throw Error(j(349));
    (po & 30) !== 0 || Sw(n, t, o);
  }
  return o;
}
function Sw(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
function _0(e) {
  var t = vn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: is, lastRenderedState: e }, t.queue = e, e = e.dispatch = wE.bind(null, Te, e), [t.memoizedState, e];
}
function ls(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Aw() {
  return Qt().memoizedState;
}
function Ga(e, t, n, r) {
  var o = vn();
  Te.flags |= e, o.memoizedState = ls(1 | t, n, void 0, r === void 0 ? null : r);
}
function pc(e, t, n, r) {
  var o = Qt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (We !== null) {
    var l = We.memoizedState;
    if (i = l.destroy, r !== null && dm(r, l.deps)) {
      o.memoizedState = ls(t, n, i, r);
      return;
    }
  }
  Te.flags |= e, o.memoizedState = ls(1 | t, n, i, r);
}
function R0(e, t) {
  return Ga(8390656, 8, e, t);
}
function mm(e, t) {
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
function Iw(e, t, n) {
  return n = n != null ? n.concat([e]) : null, pc(4, 4, Rw.bind(null, t, e), n);
}
function gm() {
}
function Tw(e, t) {
  var n = Qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && dm(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ow(e, t) {
  var n = Qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && dm(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Mw(e, t, n) {
  return (po & 21) === 0 ? (e.baseState && (e.baseState = !1, xt = !0), e.memoizedState = n) : (hn(n, t) || (n = Lx(), Te.lanes |= n, ho |= n, e.baseState = !0), t);
}
function yE(e, t) {
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
  return Qt().memoizedState;
}
function xE(e, t, n) {
  var r = Ir(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Dw(e))
    Lw(t, n);
  else if (n = pw(e, t, n, r), n !== null) {
    var o = ft();
    dn(n, e, r, o), Fw(n, t, r);
  }
}
function wE(e, t, n) {
  var r = Ir(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Dw(e))
    Lw(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var l = t.lastRenderedState, s = i(l, n);
        if (o.hasEagerState = !0, o.eagerState = s, hn(s, l)) {
          var a = t.interleaved;
          a === null ? (o.next = o, sm(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = pw(e, t, o, r), n !== null && (o = ft(), dn(n, e, r, o), Fw(n, t, r));
  }
}
function Dw(e) {
  var t = e.alternate;
  return e === Te || t !== null && t === Te;
}
function Lw(e, t) {
  Pl = Eu = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Fw(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Gh(e, n);
  }
}
var Au = { readContext: Gt, useCallback: et, useContext: et, useEffect: et, useImperativeHandle: et, useInsertionEffect: et, useLayoutEffect: et, useMemo: et, useReducer: et, useRef: et, useState: et, useDebugValue: et, useDeferredValue: et, useTransition: et, useMutableSource: et, useSyncExternalStore: et, useId: et, unstable_isNewReconciler: !1 }, bE = { readContext: Gt, useCallback: function(e, t) {
  return vn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Gt, useEffect: R0, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ga(
    4194308,
    4,
    Rw.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ga(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ga(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = vn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = vn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = xE.bind(null, Te, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = vn();
  return e = { current: e }, t.memoizedState = e;
}, useState: _0, useDebugValue: gm, useDeferredValue: function(e) {
  return vn().memoizedState = e;
}, useTransition: function() {
  var e = _0(!1), t = e[0];
  return e = yE.bind(null, e[1]), vn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Te, o = vn();
  if (Re) {
    if (n === void 0)
      throw Error(j(407));
    n = n();
  } else {
    if (n = t(), Ke === null)
      throw Error(j(349));
    (po & 30) !== 0 || Sw(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, R0(Cw.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ls(9, kw.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = vn(), t = Ke.identifierPrefix;
  if (Re) {
    var n = Vn, r = Hn;
    n = (r & ~(1 << 32 - fn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = os++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = vE++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, SE = {
  readContext: Gt,
  useCallback: Tw,
  useContext: Gt,
  useEffect: mm,
  useImperativeHandle: Iw,
  useInsertionEffect: Pw,
  useLayoutEffect: _w,
  useMemo: Ow,
  useReducer: Rf,
  useRef: Aw,
  useState: function() {
    return Rf(is);
  },
  useDebugValue: gm,
  useDeferredValue: function(e) {
    var t = Qt();
    return Mw(t, We.memoizedState, e);
  },
  useTransition: function() {
    var e = Rf(is)[0], t = Qt().memoizedState;
    return [e, t];
  },
  useMutableSource: ww,
  useSyncExternalStore: bw,
  useId: Nw,
  unstable_isNewReconciler: !1
}, kE = { readContext: Gt, useCallback: Tw, useContext: Gt, useEffect: mm, useImperativeHandle: Iw, useInsertionEffect: Pw, useLayoutEffect: _w, useMemo: Ow, useReducer: If, useRef: Aw, useState: function() {
  return If(is);
}, useDebugValue: gm, useDeferredValue: function(e) {
  var t = Qt();
  return We === null ? t.memoizedState = e : Mw(t, We.memoizedState, e);
}, useTransition: function() {
  var e = If(is)[0], t = Qt().memoizedState;
  return [e, t];
}, useMutableSource: ww, useSyncExternalStore: bw, useId: Nw, unstable_isNewReconciler: !1 };
function Ci(e, t) {
  try {
    var n = "", r = t;
    do
      n += X2(r), r = r.return;
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
function fp(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var CE = typeof WeakMap == "function" ? WeakMap : Map;
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
    fp(e, t), typeof r != "function" && (Rr === null ? Rr = /* @__PURE__ */ new Set([this]) : Rr.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function I0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new CE();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = FE.bind(null, e, t, n), t.then(e, e));
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
function O0(e, t, n, r, o) {
  return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Un(-1, 1), t.tag = 2, _r(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
}
var $E = Zn.ReactCurrentOwner, xt = !1;
function ut(e, t, n, r) {
  t.child = e === null ? yw(t, null, n, r) : Si(t, e.child, n, r);
}
function M0(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return si(t, o), r = pm(e, t, n, r, i, o), n = hm(), e !== null && !xt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Qn(e, t, o)) : (Re && n && tm(t), t.flags |= 1, ut(e, t, r, o), t.child);
}
function N0(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Cm(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, jw(e, t, i, r, o)) : (e = Xa(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, (e.lanes & o) === 0) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Zl, n(l, r) && e.ref === t.ref)
      return Qn(e, t, o);
  }
  return t.flags |= 1, e = Tr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function jw(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Zl(i, r) && e.ref === t.ref)
      if (xt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        (e.flags & 131072) !== 0 && (xt = !0);
      else
        return t.lanes = e.lanes, Qn(e, t, o);
  }
  return dp(e, t, n, r, o);
}
function Hw(e, t, n) {
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
function Vw(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function dp(e, t, n, r, o) {
  var i = St(n) ? co : it.current;
  return i = wi(t, i), si(t, o), n = pm(e, t, n, r, i, o), r = hm(), e !== null && !xt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Qn(e, t, o)) : (Re && r && tm(t), t.flags |= 1, ut(e, t, n, o), t.child);
}
function D0(e, t, n, r, o) {
  if (St(n)) {
    var i = !0;
    xu(t);
  } else
    i = !1;
  if (si(t, o), t.stateNode === null)
    Qa(e, t), gw(t, n, r), cp(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var a = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Gt(u) : (u = St(n) ? co : it.current, u = wi(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && A0(t, l, r, u), hr = !1;
    var d = t.memoizedState;
    l.state = d, Cu(t, r, l, o), a = t.memoizedState, s !== r || d !== a || bt.current || hr ? (typeof c == "function" && (up(t, n, c, r), a = t.memoizedState), (s = hr || E0(t, n, s, r, d, a, u)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, hw(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : nn(t.type, s), l.props = u, f = t.pendingProps, d = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = Gt(a) : (a = St(n) ? co : it.current, a = wi(t, a));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== f || d !== a) && A0(t, l, r, a), hr = !1, d = t.memoizedState, l.state = d, Cu(t, r, l, o);
    var h = t.memoizedState;
    s !== f || d !== h || bt.current || hr ? (typeof g == "function" && (up(t, n, g, r), h = t.memoizedState), (u = hr || E0(t, n, u, r, d, h, a) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, h, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, h, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), l.props = r, l.state = h, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return pp(e, t, n, r, i, o);
}
function pp(e, t, n, r, o, i) {
  Vw(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
    return o && b0(t, n, !1), Qn(e, t, i);
  r = t.stateNode, $E.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = Si(t, e.child, null, i), t.child = Si(t, null, s, i)) : ut(e, t, s, i), t.memoizedState = r.state, o && b0(t, n, !0), t.child;
}
function Uw(e) {
  var t = e.stateNode;
  t.pendingContext ? w0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && w0(e, t.context, !1), um(e, t.containerInfo);
}
function L0(e, t, n, r, o) {
  return bi(), rm(o), t.flags |= 256, ut(e, t, n, r), t.child;
}
var hp = { dehydrated: null, treeContext: null, retryLane: 0 };
function mp(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ww(e, t, n) {
  var r = t.pendingProps, o = Ie.current, i = !1, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), $e(Ie, o & 1), e === null)
    return sp(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = gc(l, r, 0, null), e = so(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = mp(n), t.memoizedState = hp, e) : vm(t, l));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return EE(e, t, l, r, s, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, s = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return (l & 1) === 0 && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Tr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = Tr(s, i) : (i = so(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? mp(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = hp, r;
  }
  return i = e.child, e = i.sibling, r = Tr(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function vm(e, t) {
  return t = gc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function da(e, t, n, r) {
  return r !== null && rm(r), Si(t, e.child, null, n), e = vm(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function EE(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Tf(Error(j(422))), da(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = gc({ mode: "visible", children: r.children }, o, 0, null), i = so(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && Si(t, e.child, null, l), t.child.memoizedState = mp(l), t.memoizedState = hp, i);
  if ((t.mode & 1) === 0)
    return da(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, i = Error(j(419)), r = Tf(i, r, void 0), da(e, t, l, r);
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
      o = (o & (r.suspendedLanes | l)) !== 0 ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Gn(e, o), dn(r, e, o, -1));
    }
    return km(), r = Tf(Error(j(421))), da(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = zE.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Et = Pr(o.nextSibling), _t = t, Re = !0, on = null, e !== null && (Lt[Ft++] = Hn, Lt[Ft++] = Vn, Lt[Ft++] = fo, Hn = e.id, Vn = e.overflow, fo = t), t = vm(t, r.children), t.flags |= 4096, t);
}
function F0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ap(e.return, t, n);
}
function Of(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function qw(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (ut(e, t, r.children, n), r = Ie.current, (r & 2) !== 0)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && F0(e, n, t);
          else if (e.tag === 19)
            F0(e, n, t);
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
function Qa(e, t) {
  (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Qn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), ho |= t.lanes, (n & t.childLanes) === 0)
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
function AE(e, t, n) {
  switch (t.tag) {
    case 3:
      Uw(t), bi();
      break;
    case 5:
      xw(t);
      break;
    case 1:
      St(t.type) && xu(t);
      break;
    case 4:
      um(t, t.stateNode.containerInfo);
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
        o = Oe({}, o, { value: void 0 }), r = Oe({}, r, { value: void 0 }), i = [];
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
          var s = o[u];
          for (l in s)
            s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Wl.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Wl.hasOwnProperty(u) ? (a != null && u === "onScroll" && Ee("scroll", e), i || s === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Kw = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function nl(e, t) {
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
function PE(e, t, n) {
  var r = t.pendingProps;
  switch (nm(t), t.tag) {
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
      return St(t.type) && yu(), tt(t), null;
    case 3:
      return r = t.stateNode, ki(), Pe(bt), Pe(it), fm(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ca(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, on !== null && (Cp(on), on = null))), gp(e, t), tt(t), null;
    case 5:
      cm(t);
      var o = io(rs.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Qw(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(j(166));
          return tt(t), null;
        }
        if (e = io($n.current), ca(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[bn] = t, r[ts] = i, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < xl.length; o++)
                Ee(xl[o], r);
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
              Gg(r, i), Ee("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Ee("invalid", r);
              break;
            case "textarea":
              Kg(r, i), Ee("invalid", r);
          }
          Vd(n, i), o = null;
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && ua(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && ua(
                r.textContent,
                s,
                e
              ), o = ["children", "" + s]) : Wl.hasOwnProperty(l) && s != null && l === "onScroll" && Ee("scroll", r);
            }
          switch (n) {
            case "input":
              ta(r), Qg(r, i, !0);
              break;
            case "textarea":
              ta(r), Yg(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = vu);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Sx(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[bn] = t, e[ts] = r, Gw(e, t, !1, !1), t.stateNode = e;
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
                for (o = 0; o < xl.length; o++)
                  Ee(xl[o], e);
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
                Gg(e, r), o = Fd(e, r), Ee("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Oe({}, r, { value: void 0 }), Ee("invalid", e);
                break;
              case "textarea":
                Kg(e, r), o = jd(e, r), Ee("invalid", e);
                break;
              default:
                o = r;
            }
            Vd(n, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style" ? $x(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && kx(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && ql(e, a) : typeof a == "number" && ql(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Wl.hasOwnProperty(i) ? a != null && i === "onScroll" && Ee("scroll", e) : a != null && jh(e, i, a, l));
              }
            switch (n) {
              case "input":
                ta(e), Qg(e, r, !1);
                break;
              case "textarea":
                ta(e), Yg(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Nr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? ri(e, !!r.multiple, i, !1) : r.defaultValue != null && ri(
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
      return tt(t), null;
    case 6:
      if (e && t.stateNode != null)
        Kw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(j(166));
        if (n = io(rs.current), io($n.current), ca(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[bn] = t, (i = r.nodeValue !== n) && (e = _t, e !== null))
            switch (e.tag) {
              case 3:
                ua(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ua(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[bn] = t, t.stateNode = r;
      }
      return tt(t), null;
    case 13:
      if (Pe(Ie), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Re && Et !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          dw(), bi(), t.flags |= 98560, i = !1;
        else if (i = ca(t), r !== null && r.dehydrated !== null) {
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
          on !== null && (Cp(on), on = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ie.current & 1) !== 0 ? qe === 0 && (qe = 3) : km())), t.updateQueue !== null && (t.flags |= 4), tt(t), null);
    case 4:
      return ki(), gp(e, t), e === null && Jl(t.stateNode.containerInfo), tt(t), null;
    case 10:
      return lm(t.type._context), tt(t), null;
    case 17:
      return St(t.type) && yu(), tt(t), null;
    case 19:
      if (Pe(Ie), i = t.memoizedState, i === null)
        return tt(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null)
        if (r)
          nl(i, !1);
        else {
          if (qe !== 0 || e !== null && (e.flags & 128) !== 0)
            for (e = t.child; e !== null; ) {
              if (l = $u(e), l !== null) {
                for (t.flags |= 128, nl(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return $e(Ie, Ie.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Fe() > $i && (t.flags |= 128, r = !0, nl(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = $u(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), nl(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !Re)
              return tt(t), null;
          } else
            2 * Fe() - i.renderingStartTime > $i && n !== 1073741824 && (t.flags |= 128, r = !0, nl(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Fe(), t.sibling = null, n = Ie.current, $e(Ie, r ? n & 1 | 2 : n & 1), t) : (tt(t), null);
    case 22:
    case 23:
      return Sm(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? ($t & 1073741824) !== 0 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function _E(e, t) {
  switch (nm(t), t.tag) {
    case 1:
      return St(t.type) && yu(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ki(), Pe(bt), Pe(it), fm(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return cm(t), null;
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
      return lm(t.type._context), null;
    case 22:
    case 23:
      return Sm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var pa = !1, nt = !1, RE = typeof WeakSet == "function" ? WeakSet : Set, K = null;
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
function vp(e, t, n) {
  try {
    n();
  } catch (r) {
    Me(e, t, r);
  }
}
var z0 = !1;
function IE(e, t) {
  if (ep = hu, e = Jx(), em(e)) {
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
  for (tp = { focusedElem: e, selectionRange: n }, hu = !1, K = t; K !== null; )
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
  return h = z0, z0 = !1, h;
}
function _l(e, t, n) {
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
  t !== null && (e.alternate = null, Yw(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[bn], delete t[ts], delete t[op], delete t[pE], delete t[hE])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Xw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function B0(e) {
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
var Ye = null, rn = !1;
function ar(e, t, n) {
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
      nt || ei(n, t);
    case 6:
      var r = Ye, o = rn;
      Ye = null, ar(e, t, n), Ye = r, rn = o, Ye !== null && (rn ? (e = Ye, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ye.removeChild(n.stateNode));
      break;
    case 18:
      Ye !== null && (rn ? (e = Ye, n = n.stateNode, e.nodeType === 8 ? Ef(e.parentNode, n) : e.nodeType === 1 && Ef(e, n), Yl(e)) : Ef(Ye, n.stateNode));
      break;
    case 4:
      r = Ye, o = rn, Ye = n.stateNode.containerInfo, rn = !0, ar(e, t, n), Ye = r, rn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!nt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && vp(n, t, l), o = o.next;
        } while (o !== r);
      }
      ar(e, t, n);
      break;
    case 1:
      if (!nt && (ei(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          Me(n, t, s);
        }
      ar(e, t, n);
      break;
    case 21:
      ar(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (nt = (r = nt) || n.memoizedState !== null, ar(e, t, n), nt = r) : ar(e, t, n);
      break;
    default:
      ar(e, t, n);
  }
}
function j0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new RE()), t.forEach(function(r) {
      var o = BE.bind(null, e, r);
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
        Zw(i, l, o), Ye = null, rn = !1;
        var a = o.alternate;
        a !== null && (a.return = null), o.return = null;
      } catch (u) {
        Me(o, t, u);
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
      if (Jt(t, e), gn(e), r & 4) {
        try {
          _l(3, e, e.return), hc(3, e);
        } catch (v) {
          Me(e, e.return, v);
        }
        try {
          _l(5, e, e.return);
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
          ql(o, "");
        } catch (v) {
          Me(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && wx(o, i), Ud(s, l);
            var u = Ud(s, i);
            for (l = 0; l < a.length; l += 2) {
              var c = a[l], f = a[l + 1];
              c === "style" ? $x(o, f) : c === "dangerouslySetInnerHTML" ? kx(o, f) : c === "children" ? ql(o, f) : jh(o, c, f, u);
            }
            switch (s) {
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
                g != null ? ri(o, !!i.multiple, g, !1) : d !== !!i.multiple && (i.defaultValue != null ? ri(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : ri(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ts] = i;
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
          Yl(t.containerInfo);
        } catch (v) {
          Me(e, e.return, v);
        }
      break;
    case 4:
      Jt(t, e), gn(e);
      break;
    case 13:
      Jt(t, e), gn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (wm = Fe())), r & 4 && j0(e);
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
                  _l(4, d, d.return);
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
                    V0(f);
                    continue;
                  }
              }
              g !== null ? (g.return = d, K = g) : V0(f);
            }
            c = c.sibling;
          }
        e:
          for (c = null, f = e; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = f.stateNode, a = f.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Cx("display", l));
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
      Jt(t, e), gn(e), r & 4 && j0(e);
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
          r.flags & 32 && (ql(o, ""), r.flags &= -33);
          var i = B0(e);
          wp(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = B0(e);
          xp(e, s, l);
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
function TE(e, t, n) {
  K = e, eb(e);
}
function eb(e, t, n) {
  for (var r = (e.mode & 1) !== 0; K !== null; ) {
    var o = K, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || pa;
      if (!l) {
        var s = o.alternate, a = s !== null && s.memoizedState !== null || nt;
        s = pa;
        var u = nt;
        if (pa = l, (nt = a) && !u)
          for (K = o; K !== null; )
            l = K, a = l.child, l.tag === 22 && l.memoizedState !== null ? U0(o) : a !== null ? (a.return = l, K = a) : U0(o);
        for (; i !== null; )
          K = i, eb(i), i = i.sibling;
        K = o, pa = s, nt = u;
      }
      H0(e);
    } else
      (o.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = o, K = i) : H0(e);
  }
}
function H0(e) {
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
              nt || hc(5, t);
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
              i !== null && $0(t, i, r);
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
                $0(t, l, n);
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
                    f !== null && Yl(f);
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
        nt || t.flags & 512 && yp(t);
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
function V0(e) {
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
function U0(e) {
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
            yp(t);
          } catch (a) {
            Me(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            yp(t);
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
var OE = Math.ceil, Pu = Zn.ReactCurrentDispatcher, ym = Zn.ReactCurrentOwner, qt = Zn.ReactCurrentBatchConfig, me = 0, Ke = null, He = null, Ze = 0, $t = 0, ti = zr(0), qe = 0, ss = null, ho = 0, mc = 0, xm = 0, Rl = null, yt = null, wm = 0, $i = 1 / 0, Dn = null, _u = !1, bp = null, Rr = null, ha = !1, xr = null, Ru = 0, Il = 0, Sp = null, Ka = -1, Ya = 0;
function ft() {
  return (me & 6) !== 0 ? Fe() : Ka !== -1 ? Ka : Ka = Fe();
}
function Ir(e) {
  return (e.mode & 1) === 0 ? 1 : (me & 2) !== 0 && Ze !== 0 ? Ze & -Ze : gE.transition !== null ? (Ya === 0 && (Ya = Lx()), Ya) : (e = we, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ux(e.type)), e);
}
function dn(e, t, n, r) {
  if (50 < Il)
    throw Il = 0, Sp = null, Error(j(185));
  Os(e, n, r), ((me & 2) === 0 || e !== Ke) && (e === Ke && ((me & 2) === 0 && (mc |= n), qe === 4 && vr(e, Ze)), kt(e, r), n === 1 && me === 0 && (t.mode & 1) === 0 && ($i = Fe() + 500, fc && Br()));
}
function kt(e, t) {
  var n = e.callbackNode;
  g$(e, t);
  var r = pu(e, e === Ke ? Ze : 0);
  if (r === 0)
    n !== null && Jg(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Jg(n), t === 1)
      e.tag === 0 ? mE(W0.bind(null, e)) : uw(W0.bind(null, e)), fE(function() {
        (me & 6) === 0 && Br();
      }), n = null;
    else {
      switch (Fx(r)) {
        case 1:
          n = qh;
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
      n = ab(n, tb.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function tb(e, t) {
  if (Ka = -1, Ya = 0, (me & 6) !== 0)
    throw Error(j(327));
  var n = e.callbackNode;
  if (ai() && e.callbackNode !== n)
    return null;
  var r = pu(e, e === Ke ? Ze : 0);
  if (r === 0)
    return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t)
    t = Iu(e, r);
  else {
    t = r;
    var o = me;
    me |= 2;
    var i = rb();
    (Ke !== e || Ze !== t) && (Dn = null, $i = Fe() + 500, lo(e, t));
    do
      try {
        DE();
        break;
      } catch (s) {
        nb(e, s);
      }
    while (1);
    im(), Pu.current = i, me = o, He !== null ? t = 0 : (Ke = null, Ze = 0, t = qe);
  }
  if (t !== 0) {
    if (t === 2 && (o = Kd(e), o !== 0 && (r = o, t = kp(e, o))), t === 1)
      throw n = ss, lo(e, 0), vr(e, r), kt(e, Fe()), n;
    if (t === 6)
      vr(e, r);
    else {
      if (o = e.current.alternate, (r & 30) === 0 && !ME(o) && (t = Iu(e, r), t === 2 && (i = Kd(e), i !== 0 && (r = i, t = kp(e, i))), t === 1))
        throw n = ss, lo(e, 0), vr(e, r), kt(e, Fe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Kr(e, yt, Dn);
          break;
        case 3:
          if (vr(e, r), (r & 130023424) === r && (t = wm + 500 - Fe(), 10 < t)) {
            if (pu(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              ft(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = rp(Kr.bind(null, e, yt, Dn), t);
            break;
          }
          Kr(e, yt, Dn);
          break;
        case 4:
          if (vr(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - fn(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = Fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * OE(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = rp(Kr.bind(null, e, yt, Dn), r);
            break;
          }
          Kr(e, yt, Dn);
          break;
        case 5:
          Kr(e, yt, Dn);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return kt(e, Fe()), e.callbackNode === n ? tb.bind(null, e) : null;
}
function kp(e, t) {
  var n = Rl;
  return e.current.memoizedState.isDehydrated && (lo(e, t).flags |= 256), e = Iu(e, t), e !== 2 && (t = yt, yt = n, t !== null && Cp(t)), e;
}
function Cp(e) {
  yt === null ? yt = e : yt.push.apply(yt, e);
}
function ME(e) {
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
function vr(e, t) {
  for (t &= ~xm, t &= ~mc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - fn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function W0(e) {
  if ((me & 6) !== 0)
    throw Error(j(327));
  ai();
  var t = pu(e, 0);
  if ((t & 1) === 0)
    return kt(e, Fe()), null;
  var n = Iu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Kd(e);
    r !== 0 && (t = r, n = kp(e, r));
  }
  if (n === 1)
    throw n = ss, lo(e, 0), vr(e, t), kt(e, Fe()), n;
  if (n === 6)
    throw Error(j(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Kr(e, yt, Dn), kt(e, Fe()), null;
}
function bm(e, t) {
  var n = me;
  me |= 1;
  try {
    return e(t);
  } finally {
    me = n, me === 0 && ($i = Fe() + 500, fc && Br());
  }
}
function mo(e) {
  xr !== null && xr.tag === 0 && (me & 6) === 0 && ai();
  var t = me;
  me |= 1;
  var n = qt.transition, r = we;
  try {
    if (qt.transition = null, we = 1, e)
      return e();
  } finally {
    we = r, qt.transition = n, me = t, (me & 6) === 0 && Br();
  }
}
function Sm() {
  $t = ti.current, Pe(ti);
}
function lo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, cE(n)), He !== null)
    for (n = He.return; n !== null; ) {
      var r = n;
      switch (nm(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && yu();
          break;
        case 3:
          ki(), Pe(bt), Pe(it), fm();
          break;
        case 5:
          cm(r);
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
          lm(r.type._context);
          break;
        case 22:
        case 23:
          Sm();
      }
      n = n.return;
    }
  if (Ke = e, He = e = Tr(e.current, null), Ze = $t = t, qe = 0, ss = null, xm = mc = ho = 0, yt = Rl = null, oo !== null) {
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
    var n = He;
    try {
      if (im(), qa.current = Au, Eu) {
        for (var r = Te.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Eu = !1;
      }
      if (po = 0, Ge = We = Te = null, Pl = !1, os = 0, ym.current = null, n === null || n.return === null) {
        qe = 1, ss = t, He = null;
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
          var g = T0(l);
          if (g !== null) {
            g.flags &= -257, O0(g, l, s, i, t), g.mode & 1 && I0(i, u, t), t = g, a = u;
            var h = t.updateQueue;
            if (h === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(a), t.updateQueue = v;
            } else
              h.add(a);
            break e;
          } else {
            if ((t & 1) === 0) {
              I0(i, u, t), km();
              break e;
            }
            a = Error(j(426));
          }
        } else if (Re && s.mode & 1) {
          var w = T0(l);
          if (w !== null) {
            (w.flags & 65536) === 0 && (w.flags |= 256), O0(w, l, s, i, t), rm(Ci(a, s));
            break e;
          }
        }
        i = a = Ci(a, s), qe !== 4 && (qe = 2), Rl === null ? Rl = [i] : Rl.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = zw(i, a, t);
              C0(i, p);
              break e;
            case 1:
              s = a;
              var y = i.type, x = i.stateNode;
              if ((i.flags & 128) === 0 && (typeof y.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Rr === null || !Rr.has(x)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var b = Bw(i, s, t);
                C0(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ib(n);
    } catch (A) {
      t = A, He === n && n !== null && (He = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function rb() {
  var e = Pu.current;
  return Pu.current = Au, e === null ? Au : e;
}
function km() {
  (qe === 0 || qe === 3 || qe === 2) && (qe = 4), Ke === null || (ho & 268435455) === 0 && (mc & 268435455) === 0 || vr(Ke, Ze);
}
function Iu(e, t) {
  var n = me;
  me |= 2;
  var r = rb();
  (Ke !== e || Ze !== t) && (Dn = null, lo(e, t));
  do
    try {
      NE();
      break;
    } catch (o) {
      nb(e, o);
    }
  while (1);
  if (im(), me = n, Pu.current = r, He !== null)
    throw Error(j(261));
  return Ke = null, Ze = 0, qe;
}
function NE() {
  for (; He !== null; )
    ob(He);
}
function DE() {
  for (; He !== null && !s$(); )
    ob(He);
}
function ob(e) {
  var t = sb(e.alternate, e, $t);
  e.memoizedProps = e.pendingProps, t === null ? ib(e) : He = t, ym.current = null;
}
function ib(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, (t.flags & 32768) === 0) {
      if (n = PE(n, t, $t), n !== null) {
        He = n;
        return;
      }
    } else {
      if (n = _E(n, t), n !== null) {
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
function Kr(e, t, n) {
  var r = we, o = qt.transition;
  try {
    qt.transition = null, we = 1, LE(e, t, n, r);
  } finally {
    qt.transition = o, we = r;
  }
  return null;
}
function LE(e, t, n, r) {
  do
    ai();
  while (xr !== null);
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
  if (v$(e, i), e === Ke && (He = Ke = null, Ze = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ha || (ha = !0, ab(du, function() {
    return ai(), null;
  })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
    i = qt.transition, qt.transition = null;
    var l = we;
    we = 1;
    var s = me;
    me |= 4, ym.current = null, IE(e, n), Jw(n, e), rE(tp), hu = !!ep, tp = ep = null, e.current = n, TE(n), a$(), me = s, we = l, qt.transition = i;
  } else
    e.current = n;
  if (ha && (ha = !1, xr = e, Ru = o), i = e.pendingLanes, i === 0 && (Rr = null), f$(n.stateNode), kt(e, Fe()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (_u)
    throw _u = !1, e = bp, bp = null, e;
  return (Ru & 1) !== 0 && e.tag !== 0 && ai(), i = e.pendingLanes, (i & 1) !== 0 ? e === Sp ? Il++ : (Il = 0, Sp = e) : Il = 0, Br(), null;
}
function ai() {
  if (xr !== null) {
    var e = Fx(Ru), t = qt.transition, n = we;
    try {
      if (qt.transition = null, we = 16 > e ? 16 : e, xr === null)
        var r = !1;
      else {
        if (e = xr, xr = null, Ru = 0, (me & 6) !== 0)
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
                      _l(8, c, i);
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
                if (s = K, (s.flags & 2048) !== 0)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hc(9, s);
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
        if (me = o, Br(), Cn && typeof Cn.onPostCommitFiberRoot == "function")
          try {
            Cn.onPostCommitFiberRoot(lc, e);
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
function q0(e, t, n) {
  t = Ci(n, t), t = zw(e, t, 1), e = _r(e, t, 1), t = ft(), e !== null && (Os(e, 1, t), kt(e, t));
}
function Me(e, t, n) {
  if (e.tag === 3)
    q0(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        q0(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Rr === null || !Rr.has(r))) {
          e = Ci(n, e), e = Bw(t, e, 1), t = _r(t, e, 1), e = ft(), t !== null && (Os(t, 1, e), kt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function FE(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ft(), e.pingedLanes |= e.suspendedLanes & n, Ke === e && (Ze & n) === n && (qe === 4 || qe === 3 && (Ze & 130023424) === Ze && 500 > Fe() - wm ? lo(e, 0) : xm |= n), kt(e, t);
}
function lb(e, t) {
  t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = oa, oa <<= 1, (oa & 130023424) === 0 && (oa = 4194304)));
  var n = ft();
  e = Gn(e, t), e !== null && (Os(e, t, n), kt(e, n));
}
function zE(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), lb(e, n);
}
function BE(e, t) {
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
var sb;
sb = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || bt.current)
      xt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return xt = !1, AE(e, t, n);
      xt = (e.flags & 131072) !== 0;
    }
  else
    xt = !1, Re && (t.flags & 1048576) !== 0 && cw(t, bu, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Qa(e, t), e = t.pendingProps;
      var o = wi(t, it.current);
      si(t, n), o = pm(null, t, r, e, o, n);
      var i = hm();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, St(r) ? (i = !0, xu(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, am(t), o.updater = dc, t.stateNode = o, o._reactInternals = t, cp(t, r, e, n), t = pp(null, t, r, !0, i, n)) : (t.tag = 0, Re && i && tm(t), ut(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Qa(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = HE(r), e = nn(r, e), o) {
          case 0:
            t = dp(null, t, r, e, n);
            break e;
          case 1:
            t = D0(null, t, r, e, n);
            break e;
          case 11:
            t = M0(null, t, r, e, n);
            break e;
          case 14:
            t = N0(null, t, r, nn(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : nn(r, o), dp(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : nn(r, o), D0(e, t, r, o, n);
    case 3:
      e: {
        if (Uw(t), e === null)
          throw Error(j(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, hw(e, t), Cu(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Ci(Error(j(423)), t), t = L0(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Ci(Error(j(424)), t), t = L0(e, t, r, n, o);
            break e;
          } else
            for (Et = Pr(t.stateNode.containerInfo.firstChild), _t = t, Re = !0, on = null, n = yw(t, null, r, n), t.child = n; n; )
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
      return xw(t), e === null && sp(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, np(r, o) ? l = null : i !== null && np(r, i) && (t.flags |= 32), Vw(e, t), ut(e, t, l, n), t.child;
    case 6:
      return e === null && sp(t), null;
    case 13:
      return Ww(e, t, n);
    case 4:
      return um(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Si(t, null, r, n) : ut(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : nn(r, o), M0(e, t, r, o, n);
    case 7:
      return ut(e, t, t.pendingProps, n), t.child;
    case 8:
      return ut(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ut(e, t, t.pendingProps.children, n), t.child;
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
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      a = Un(-1, n & -n), a.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                      }
                    }
                    i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), ap(
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
                l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), ap(l, n, t), l = i.sibling;
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
      return o = t.type, r = t.pendingProps.children, si(t, n), o = Gt(o), r = r(o), t.flags |= 1, ut(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = nn(r, t.pendingProps), o = nn(r.type, o), N0(e, t, r, o, n);
    case 15:
      return jw(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : nn(r, o), Qa(e, t), t.tag = 1, St(r) ? (e = !0, xu(t)) : e = !1, si(t, n), gw(t, r, o), cp(t, r, o, n), pp(null, t, r, !0, e, n);
    case 19:
      return qw(e, t, n);
    case 22:
      return Hw(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function ab(e, t) {
  return Mx(e, t);
}
function jE(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Wt(e, t, n, r) {
  return new jE(e, t, n, r);
}
function Cm(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function HE(e) {
  if (typeof e == "function")
    return Cm(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Vh)
      return 11;
    if (e === Uh)
      return 14;
  }
  return 2;
}
function Tr(e, t) {
  var n = e.alternate;
  return n === null ? (n = Wt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Xa(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function")
    Cm(e) && (l = 1);
  else if (typeof e == "string")
    l = 5;
  else
    e:
      switch (e) {
        case Wo:
          return so(n.children, o, i, t);
        case Hh:
          l = 8, o |= 8;
          break;
        case Md:
          return e = Wt(12, n, t, o | 2), e.elementType = Md, e.lanes = i, e;
        case Nd:
          return e = Wt(13, n, t, o), e.elementType = Nd, e.lanes = i, e;
        case Dd:
          return e = Wt(19, n, t, o), e.elementType = Dd, e.lanes = i, e;
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
              case Vh:
                l = 11;
                break e;
              case Uh:
                l = 14;
                break e;
              case pr:
                l = 16, r = null;
                break e;
            }
          throw Error(j(130, e == null ? e : typeof e, ""));
      }
  return t = Wt(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function so(e, t, n, r) {
  return e = Wt(7, e, r, t), e.lanes = n, e;
}
function gc(e, t, n, r) {
  return e = Wt(22, e, r, t), e.elementType = vx, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Mf(e, t, n) {
  return e = Wt(6, e, null, t), e.lanes = n, e;
}
function Nf(e, t, n) {
  return t = Wt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function VE(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = mf(0), this.expirationTimes = mf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mf(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function $m(e, t, n, r, o, i, l, s, a) {
  return e = new VE(e, t, n, s, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Wt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, am(i), e;
}
function UE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Uo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ub(e) {
  if (!e)
    return Dr;
  e = e._reactInternals;
  e: {
    if (Co(e) !== e || e.tag !== 1)
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
      return aw(e, n, t);
  }
  return t;
}
function cb(e, t, n, r, o, i, l, s, a) {
  return e = $m(n, r, !0, e, o, i, l, s, a), e.context = ub(null), n = e.current, r = ft(), o = Ir(n), i = Un(r, o), i.callback = t != null ? t : null, _r(n, i, o), e.current.lanes = o, Os(e, o, r), kt(e, r), e;
}
function vc(e, t, n, r) {
  var o = t.current, i = ft(), l = Ir(o);
  return n = ub(n), t.context === null ? t.context = n : t.pendingContext = n, t = Un(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = _r(o, t, l), e !== null && (dn(e, o, l, i), Wa(e, o, l)), l;
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
function G0(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Em(e, t) {
  G0(e, t), (e = e.alternate) && G0(e, t);
}
function WE() {
  return null;
}
var fb = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Am(e) {
  this._internalRoot = e;
}
yc.prototype.render = Am.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(j(409));
  vc(e, t, null, null);
};
yc.prototype.unmount = Am.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    mo(function() {
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
    for (var n = 0; n < gr.length && t !== 0 && t < gr[n].priority; n++)
      ;
    gr.splice(n, 0, e), n === 0 && Vx(e);
  }
};
function Pm(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function xc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Q0() {
}
function qE(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Tu(l);
        i.call(u);
      };
    }
    var l = cb(t, r, e, 0, null, !1, !1, "", Q0);
    return e._reactRootContainer = l, e[qn] = l.current, Jl(e.nodeType === 8 ? e.parentNode : e), mo(), l;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = Tu(a);
      s.call(u);
    };
  }
  var a = $m(e, 0, !1, null, null, !1, !1, "", Q0);
  return e._reactRootContainer = a, e[qn] = a.current, Jl(e.nodeType === 8 ? e.parentNode : e), mo(function() {
    vc(t, a, n, r);
  }), a;
}
function wc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var a = Tu(l);
        s.call(a);
      };
    }
    vc(t, l, e, o);
  } else
    l = qE(n, t, e, o, r);
  return Tu(l);
}
zx = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = yl(t.pendingLanes);
        n !== 0 && (Gh(t, n | 1), kt(t, Fe()), (me & 6) === 0 && ($i = Fe() + 500, Br()));
      }
      break;
    case 13:
      mo(function() {
        var r = Gn(e, 1);
        if (r !== null) {
          var o = ft();
          dn(r, e, 1, o);
        }
      }), Em(e, 1);
  }
};
Qh = function(e) {
  if (e.tag === 13) {
    var t = Gn(e, 134217728);
    if (t !== null) {
      var n = ft();
      dn(t, e, 134217728, n);
    }
    Em(e, 134217728);
  }
};
Bx = function(e) {
  if (e.tag === 13) {
    var t = Ir(e), n = Gn(e, t);
    if (n !== null) {
      var r = ft();
      dn(n, e, t, r);
    }
    Em(e, t);
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
      t = n.value, t != null && ri(e, !!n.multiple, t, !1);
  }
};
Px = bm;
_x = mo;
var GE = { usingClientEntryPoint: !1, Events: [Ns, Ko, cc, Ex, Ax, bm] }, rl = { findFiberByHostInstance: ro, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, QE = { bundleType: rl.bundleType, version: rl.version, rendererPackageName: rl.rendererPackageName, rendererConfig: rl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Zn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Tx(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: rl.findFiberByHostInstance || WE, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ma = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ma.isDisabled && ma.supportsFiber)
    try {
      lc = ma.inject(QE), Cn = ma;
    } catch {
    }
}
Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = GE;
Tt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Pm(t))
    throw Error(j(200));
  return UE(e, t, null, n);
};
Tt.createRoot = function(e, t) {
  if (!Pm(e))
    throw Error(j(299));
  var n = !1, r = "", o = fb;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = $m(e, 1, !1, null, null, n, !1, r, o), e[qn] = t.current, Jl(e.nodeType === 8 ? e.parentNode : e), new Am(t);
};
Tt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e)));
  return e = Tx(t), e = e === null ? null : e.stateNode, e;
};
Tt.flushSync = function(e) {
  return mo(e);
};
Tt.hydrate = function(e, t, n) {
  if (!xc(t))
    throw Error(j(200));
  return wc(null, e, t, !0, n);
};
Tt.hydrateRoot = function(e, t, n) {
  if (!Pm(e))
    throw Error(j(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = fb;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = cb(t, null, e, 1, n != null ? n : null, o, !1, i, l), e[qn] = t.current, Jl(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new yc(t);
};
Tt.render = function(e, t, n) {
  if (!xc(t))
    throw Error(j(200));
  return wc(null, e, t, !1, n);
};
Tt.unmountComponentAtNode = function(e) {
  if (!xc(e))
    throw Error(j(40));
  return e._reactRootContainer ? (mo(function() {
    wc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[qn] = null;
    });
  }), !0) : !1;
};
Tt.unstable_batchedUpdates = bm;
Tt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!xc(n))
    throw Error(j(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(j(38));
  return wc(e, t, n, !1, r);
};
Tt.version = "18.2.0-next-9e3b772b8-20220608";
(function(e) {
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), e.exports = Tt;
})(Kt);
const db = /* @__PURE__ */ Mh(Kt.exports);
var pb, K0 = Kt.exports;
pb = K0.createRoot, K0.hydrateRoot;
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
const KE = [
  { property: "name", enumerable: !1 },
  { property: "message", enumerable: !1 },
  { property: "stack", enumerable: !1 },
  { property: "code", enumerable: !0 }
], $p = Symbol(".toJSON called"), YE = (e) => {
  e[$p] = !0;
  const t = e.toJSON();
  return delete e[$p], t;
}, _m = ({
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
    return YE(e);
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
        i++, l[s] = _m({
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
  for (const { property: s, enumerable: a } of KE)
    typeof e[s] == "string" && Object.defineProperty(l, s, {
      value: e[s],
      enumerable: r ? !0 : a,
      configurable: !0,
      writable: !0
    });
  return l;
}, XE = (e, t = {}) => {
  const { maxDepth: n = Number.POSITIVE_INFINITY } = t;
  return typeof e == "object" && e !== null ? _m({
    from: e,
    seen: [],
    forceEnumerable: !0,
    maxDepth: n,
    depth: 0
  }) : typeof e == "function" ? `[Function: ${e.name || "anonymous"}]` : e;
}, ZE = (e, t = {}) => {
  const { maxDepth: n = Number.POSITIVE_INFINITY } = t;
  if (e instanceof Error)
    return e;
  if (typeof e == "object" && e !== null && !Array.isArray(e)) {
    const r = new Error();
    return _m({
      from: e,
      seen: [],
      to_: r,
      maxDepth: n,
      depth: 0
    }), r;
  }
  return new Ou(e);
};
var JE = {
  serializeError: XE,
  deserializeError: ZE
}, bc = { exports: {} };
const e5 = (e) => typeof crypto < "u" && typeof crypto.getRandomValues == "function" ? () => {
  const t = crypto.getRandomValues(new Uint8Array(1))[0];
  return (t >= e ? t % e : t).toString(e);
} : () => Math.floor(Math.random() * e).toString(e), mb = (e = 7, t = !1) => Array.from({ length: e }, e5(t ? 16 : 36)).join("");
bc.exports = mb;
bc.exports.default = mb;
var t5 = Object.defineProperty, n5 = Object.defineProperties, r5 = Object.getOwnPropertyDescriptors, Y0 = Object.getOwnPropertySymbols, o5 = Object.prototype.hasOwnProperty, i5 = Object.prototype.propertyIsEnumerable, X0 = (e, t, n) => t in e ? t5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, gb = (e, t) => {
  for (var n in t || (t = {}))
    o5.call(t, n) && X0(e, n, t[n]);
  if (Y0)
    for (var n of Y0(t))
      i5.call(t, n) && X0(e, n, t[n]);
  return e;
}, vb = (e, t) => n5(e, r5(t)), l5 = /^((?:background$)|devtools|content-script|window)(?:@(\d+))?$/, yb = (e) => {
  const [, t, n] = e.match(l5) || [];
  return {
    context: t,
    tabId: +n
  };
}, Df = (e) => ot[e], Ne = Df("devtools") ? "devtools" : Df("tabs") ? "background" : Df("extension") ? "content-script" : typeof document < "u" ? "window" : null, Z0 = bc.exports(), Ep = /* @__PURE__ */ new Map(), xb = /* @__PURE__ */ new Map(), Ap = /* @__PURE__ */ new Set(), Pp = /* @__PURE__ */ new Map(), Yr = null, Mu, wb;
s5();
function s5() {
  if (Ne === null)
    throw new Error("Unable to detect runtime context i.e webext-bridge can't figure out what to do");
  if ((Ne === "window" || Ne === "content-script") && window.addEventListener("message", u5), Ne === "content-script" && top === window && (Yr = ot.runtime.connect(), Yr.onMessage.addListener((e) => {
    ui(e);
  })), Ne === "devtools") {
    const { tabId: e } = ot.devtools.inspectedWindow, t = `devtools@${e}`;
    Yr = ot.runtime.connect(void 0, { name: t }), Yr.onMessage.addListener((n) => {
      ui(n);
    }), Yr.onDisconnect.addListener(() => {
      Yr = null;
    });
  }
  Ne === "background" && ot.runtime.onConnect.addListener((e) => {
    const t = e.name || `content-script@${e.sender.tab.id}`, { tabId: n } = yb(t);
    !n || (Pp.set(t, e), Ap.forEach((r) => {
      r.resolvedDestination === t && (e.postMessage(r.message), Ap.delete(r));
    }), e.onDisconnect.addListener(() => {
      Pp.delete(t);
    }), e.onMessage.addListener((r) => {
      var o;
      (o = r == null ? void 0 : r.origin) != null && o.context && (r.origin.tabId = n, ui(r));
    }));
  });
}
function ui(e) {
  const { origin: t, destination: n } = e;
  if (!e.hops.includes(Z0) && (e.hops.push(Z0), !(Ne === "content-script" && [n, t].some((r) => (r == null ? void 0 : r.context) === "window") && !wb))) {
    if (!n)
      return a5(e);
    if (n.context) {
      if (Ne === "window")
        return _p(window, e);
      if (Ne === "content-script" && n.context === "window")
        return e.destination = null, _p(window, e);
      if (Ne === "devtools" || Ne === "content-script")
        return n.context === "background" && (e.destination = null), Yr.postMessage(e);
      if (Ne === "background") {
        const { context: r, tabId: o } = n, { tabId: i } = t;
        r !== "window" ? e.destination = null : e.destination.tabId = null;
        const l = `${r === "window" ? "content-script" : r}@${o || i}`, s = Pp.get(l);
        s ? s.postMessage(e) : Ap.add({ resolvedDestination: l, message: e });
      }
    }
  }
}
async function a5(e) {
  const { transactionId: t, messageID: n, messageType: r } = e, o = () => {
    const l = Ep.get(t);
    if (l) {
      const { err: s, data: a } = e;
      if (s) {
        const u = s, c = self[u.name], f = new (typeof c == "function" ? c : Error)(u.message);
        for (const d in u)
          f[d] = u[d];
        l.reject(f);
      } else
        l.resolve(a);
      Ep.delete(t);
    }
  }, i = async () => {
    let l, s, a = !1;
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
        throw a = !0, new Error(`[webext-bridge] No handler registered in '${Ne}' to accept messages with id '${n}'`);
    } catch (u) {
      s = u;
    } finally {
      if (s && (e.err = JE.serializeError(s)), ui(vb(gb({}, e), {
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
async function u5({ data: e, ports: t }) {
  if (!(Ne === "content-script" && !wb)) {
    if (e.cmd === "__crx_bridge_verify_listening" && e.scope === Mu && e.context !== Ne)
      t[0].postMessage(!0);
    else if (e.cmd === "__crx_bridge_route_message" && e.scope === Mu && e.context !== Ne) {
      const { payload: n } = e;
      Ne === "content-script" && (n.origin = {
        context: "window",
        tabId: null
      }), ui(n);
    }
  }
}
function _p(e, t) {
  c5();
  const n = new MessageChannel(), r = setTimeout(() => {
    n.port1.onmessage = null, _p(e, t);
  }, 300);
  n.port1.onmessage = () => {
    clearTimeout(r), e.postMessage({
      cmd: "__crx_bridge_route_message",
      scope: Mu,
      context: Ne,
      payload: t
    }, "*");
  }, e.postMessage({
    cmd: "__crx_bridge_verify_listening",
    scope: Mu,
    context: Ne
  }, "*", [n.port2]);
}
function c5() {
  throw new Error(`webext-bridge uses window.postMessage to talk with other "window"(s), for message routing and stuff,which is global/conflicting operation in case there are other scripts using webext-bridge. Call Bridge#setNamespace(nsps) to isolate your app. Example: setNamespace('com.facebook.react-devtools'). Make sure to use same namespace across all your scripts whereever window.postMessage is likely to be used\``);
}
function Sc(e, t) {
  xb.set(e, t);
}
async function Tl(e, t, n = "background") {
  const r = typeof n == "string" ? yb(n) : n, o = "Bridge#sendMessage ->";
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
      transactionId: bc.exports(),
      origin: { context: Ne, tabId: null },
      hops: [],
      timestamp: Date.now()
    };
    Ep.set(s.transactionId, { resolve: i, reject: l }), ui(s);
  });
}
var Ho = class {
  constructor(e) {
    this.handleStreamClose = () => {
      this.isClosed || (this.isClosed = !0, this.emitter.emit("closed", !0), this.emitter.events = {});
    }, this.internalInfo = e, this.emitter = hb(), this.isClosed = !1, Ho.initDone || (Sc("__crx_bridge_stream_transfer__", (t) => {
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
    Tl("__crx_bridge_stream_transfer__", {
      streamId: this.internalInfo.streamId,
      streamTransfer: e,
      action: "transfer"
    }, this.internalInfo.endpoint);
  }
  close(e) {
    e && this.send(e), this.handleStreamClose(), Tl("__crx_bridge_stream_transfer__", {
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
}, Rm = Ho;
Rm.initDone = !1;
Rm.openStreams = /* @__PURE__ */ new Map();
var f5 = /* @__PURE__ */ new Map(), d5 = hb();
Sc("__crx_bridge_stream_open__", (e) => new Promise((t) => {
  const { sender: n, data: r } = e, { channel: o } = r;
  let i = !1, l = () => {
  };
  const s = () => {
    const a = f5.get(o);
    typeof a == "function" ? (a(new Rm(vb(gb({}, r), { endpoint: n }))), i && l(), t(!0)) : i || (i = !0, l = d5.on("did-change-stream-callbacks", s));
  };
  s();
}));
var Im = Fs(), re = (e) => Ls(e, Im), Tm = Fs();
re.write = (e) => Ls(e, Tm);
var kc = Fs();
re.onStart = (e) => Ls(e, kc);
var Om = Fs();
re.onFrame = (e) => Ls(e, Om);
var Mm = Fs();
re.onFinish = (e) => Ls(e, Mm);
var ci = [];
re.setTimeout = (e, t) => {
  let n = re.now() + t, r = () => {
    let i = ci.findIndex((l) => l.cancel == r);
    ~i && ci.splice(i, 1), br -= ~i ? 1 : 0;
  }, o = { time: n, handler: e, cancel: r };
  return ci.splice(bb(n), 0, o), br += 1, Sb(), o;
};
var bb = (e) => ~(~ci.findIndex((t) => t.time > e) || ~ci.length);
re.cancel = (e) => {
  kc.delete(e), Om.delete(e), Mm.delete(e), Im.delete(e), Tm.delete(e);
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
var Nm = typeof window < "u" ? window.requestAnimationFrame : () => {
};
re.use = (e) => Nm = e;
re.now = typeof performance < "u" ? () => performance.now() : Date.now;
re.batchedUpdates = (e) => e();
re.catch = console.error;
re.frameLoop = "always";
re.advance = () => {
  re.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Cb();
};
var wr = -1, br = 0, Rp = !1;
function Ls(e, t) {
  Rp ? (t.delete(e), e(0)) : (t.add(e), Sb());
}
function Sb() {
  wr < 0 && (wr = 0, re.frameLoop !== "demand" && Nm(kb));
}
function p5() {
  wr = -1;
}
function kb() {
  ~wr && (Nm(kb), re.batchedUpdates(Cb));
}
function Cb() {
  let e = wr;
  wr = re.now();
  let t = bb(wr);
  if (t && ($b(ci.splice(0, t), (n) => n.handler()), br -= t), !br) {
    p5();
    return;
  }
  kc.flush(), Im.flush(e ? Math.min(64, wr - e) : 16.667), Om.flush(), Tm.flush(), Mm.flush();
}
function Fs() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return { add(n) {
    br += t == e && !e.has(n) ? 1 : 0, e.add(n);
  }, delete(n) {
    return br -= t == e && e.has(n) ? 1 : 0, e.delete(n);
  }, flush(n) {
    t.size && (e = /* @__PURE__ */ new Set(), br -= t.size, $b(t, (r) => r(n) && e.add(r)), br += e.size, t = e);
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
var h5 = Object.defineProperty, m5 = (e, t) => {
  for (var n in t)
    h5(e, n, { get: t[n], enumerable: !0 });
}, mn = {};
m5(mn, { assign: () => v5, colors: () => Or, createStringInterpolator: () => Lm, skipAnimation: () => Ab, to: () => Eb, willAdvance: () => Fm });
function Ip() {
}
var g5 = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), U = { arr: Array.isArray, obj: (e) => !!e && e.constructor.name === "Object", fun: (e) => typeof e == "function", str: (e) => typeof e == "string", num: (e) => typeof e == "number", und: (e) => e === void 0 };
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
var At = (e) => U.und(e) ? [] : U.arr(e) ? e : [e];
function Ol(e, t) {
  if (e.size) {
    let n = Array.from(e);
    e.clear(), pe(n, t);
  }
}
var wl = (e, ...t) => Ol(e, (n) => n(...t)), Dm = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), Lm, Eb, Or = null, Ab = !1, Fm = Ip, v5 = (e) => {
  e.to && (Eb = e.to), e.now && (re.now = e.now), e.colors !== void 0 && (Or = e.colors), e.skipAnimation != null && (Ab = e.skipAnimation), e.createStringInterpolator && (Lm = e.createStringInterpolator), e.requestAnimationFrame && re.use(e.requestAnimationFrame), e.batchedUpdates && (re.batchedUpdates = e.batchedUpdates), e.willAdvance && (Fm = e.willAdvance), e.frameLoop && (re.frameLoop = e.frameLoop);
}, Ml = /* @__PURE__ */ new Set(), Ht = [], Lf = [], Nu = 0, Cc = { get idle() {
  return !Ml.size && !Ht.length;
}, start(e) {
  Nu > e.priority ? (Ml.add(e), re.onStart(y5)) : (Pb(e), re(Tp));
}, advance: Tp, sort(e) {
  if (Nu)
    re.onFrame(() => Cc.sort(e));
  else {
    let t = Ht.indexOf(e);
    ~t && (Ht.splice(t, 1), _b(e));
  }
}, clear() {
  Ht = [], Ml.clear();
} };
function y5() {
  Ml.forEach(Pb), Ml.clear(), re(Tp);
}
function Pb(e) {
  Ht.includes(e) || _b(e);
}
function _b(e) {
  Ht.splice(x5(Ht, (t) => t.priority > e.priority), 0, e);
}
function Tp(e) {
  let t = Lf;
  for (let n = 0; n < Ht.length; n++) {
    let r = Ht[n];
    Nu = r.priority, r.idle || (Fm(r), r.advance(e), r.idle || t.push(r));
  }
  return Nu = 0, Lf = Ht, Lf.length = 0, Ht = t, Ht.length > 0;
}
function x5(e, t) {
  let n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var w5 = (e, t, n) => Math.min(Math.max(n, e), t), b5 = { transparent: 0, aliceblue: 4042850303, antiquewhite: 4209760255, aqua: 16777215, aquamarine: 2147472639, azure: 4043309055, beige: 4126530815, bisque: 4293182719, black: 255, blanchedalmond: 4293643775, blue: 65535, blueviolet: 2318131967, brown: 2771004159, burlywood: 3736635391, burntsienna: 3934150143, cadetblue: 1604231423, chartreuse: 2147418367, chocolate: 3530104575, coral: 4286533887, cornflowerblue: 1687547391, cornsilk: 4294499583, crimson: 3692313855, cyan: 16777215, darkblue: 35839, darkcyan: 9145343, darkgoldenrod: 3095792639, darkgray: 2846468607, darkgreen: 6553855, darkgrey: 2846468607, darkkhaki: 3182914559, darkmagenta: 2332068863, darkolivegreen: 1433087999, darkorange: 4287365375, darkorchid: 2570243327, darkred: 2332033279, darksalmon: 3918953215, darkseagreen: 2411499519, darkslateblue: 1211993087, darkslategray: 793726975, darkslategrey: 793726975, darkturquoise: 13554175, darkviolet: 2483082239, deeppink: 4279538687, deepskyblue: 12582911, dimgray: 1768516095, dimgrey: 1768516095, dodgerblue: 512819199, firebrick: 2988581631, floralwhite: 4294635775, forestgreen: 579543807, fuchsia: 4278255615, gainsboro: 3705462015, ghostwhite: 4177068031, gold: 4292280575, goldenrod: 3668254975, gray: 2155905279, green: 8388863, greenyellow: 2919182335, grey: 2155905279, honeydew: 4043305215, hotpink: 4285117695, indianred: 3445382399, indigo: 1258324735, ivory: 4294963455, khaki: 4041641215, lavender: 3873897215, lavenderblush: 4293981695, lawngreen: 2096890111, lemonchiffon: 4294626815, lightblue: 2916673279, lightcoral: 4034953471, lightcyan: 3774873599, lightgoldenrodyellow: 4210742015, lightgray: 3553874943, lightgreen: 2431553791, lightgrey: 3553874943, lightpink: 4290167295, lightsalmon: 4288707327, lightseagreen: 548580095, lightskyblue: 2278488831, lightslategray: 2005441023, lightslategrey: 2005441023, lightsteelblue: 2965692159, lightyellow: 4294959359, lime: 16711935, limegreen: 852308735, linen: 4210091775, magenta: 4278255615, maroon: 2147483903, mediumaquamarine: 1724754687, mediumblue: 52735, mediumorchid: 3126187007, mediumpurple: 2473647103, mediumseagreen: 1018393087, mediumslateblue: 2070474495, mediumspringgreen: 16423679, mediumturquoise: 1221709055, mediumvioletred: 3340076543, midnightblue: 421097727, mintcream: 4127193855, mistyrose: 4293190143, moccasin: 4293178879, navajowhite: 4292783615, navy: 33023, oldlace: 4260751103, olive: 2155872511, olivedrab: 1804477439, orange: 4289003775, orangered: 4282712319, orchid: 3664828159, palegoldenrod: 4008225535, palegreen: 2566625535, paleturquoise: 2951671551, palevioletred: 3681588223, papayawhip: 4293907967, peachpuff: 4292524543, peru: 3448061951, pink: 4290825215, plum: 3718307327, powderblue: 2967529215, purple: 2147516671, rebeccapurple: 1714657791, red: 4278190335, rosybrown: 3163525119, royalblue: 1097458175, saddlebrown: 2336560127, salmon: 4202722047, sandybrown: 4104413439, seagreen: 780883967, seashell: 4294307583, sienna: 2689740287, silver: 3233857791, skyblue: 2278484991, slateblue: 1784335871, slategray: 1887473919, slategrey: 1887473919, snow: 4294638335, springgreen: 16744447, steelblue: 1182971135, tan: 3535047935, teal: 8421631, thistle: 3636451583, tomato: 4284696575, turquoise: 1088475391, violet: 4001558271, wheat: 4125012991, white: 4294967295, whitesmoke: 4126537215, yellow: 4294902015, yellowgreen: 2597139199 }, an = "[-+]?\\d*\\.?\\d+", Du = an + "%";
function $c(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var S5 = new RegExp("rgb" + $c(an, an, an)), k5 = new RegExp("rgba" + $c(an, an, an, an)), C5 = new RegExp("hsl" + $c(an, Du, Du)), $5 = new RegExp("hsla" + $c(an, Du, Du, an)), E5 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, A5 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, P5 = /^#([0-9a-fA-F]{6})$/, _5 = /^#([0-9a-fA-F]{8})$/;
function R5(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = P5.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Or && Or[e] !== void 0 ? Or[e] : (t = S5.exec(e)) ? (To(t[1]) << 24 | To(t[2]) << 16 | To(t[3]) << 8 | 255) >>> 0 : (t = k5.exec(e)) ? (To(t[1]) << 24 | To(t[2]) << 16 | To(t[3]) << 8 | t1(t[4])) >>> 0 : (t = E5.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = _5.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = A5.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = C5.exec(e)) ? (J0(e1(t[1]), ga(t[2]), ga(t[3])) | 255) >>> 0 : (t = $5.exec(e)) ? (J0(e1(t[1]), ga(t[2]), ga(t[3])) | t1(t[4])) >>> 0 : null;
}
function Ff(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function J0(e, t, n) {
  let r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, i = Ff(o, r, e + 1 / 3), l = Ff(o, r, e), s = Ff(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(l * 255) << 16 | Math.round(s * 255) << 8;
}
function To(e) {
  let t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function e1(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function t1(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function ga(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function n1(e) {
  let t = R5(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, o = (t & 65280) >>> 8, i = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${o}, ${i})`;
}
var as = (e, t, n) => {
  if (U.fun(e))
    return e;
  if (U.arr(e))
    return as({ range: e, output: t, extrapolate: n });
  if (U.str(e.output[0]))
    return Lm(e);
  let r = e, o = r.output, i = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", s = r.extrapolateRight || r.extrapolate || "extend", a = r.easing || ((u) => u);
  return (u) => {
    let c = T5(u, i);
    return I5(u, i[c], i[c + 1], o[c], o[c + 1], a, l, s, r.map);
  };
};
function I5(e, t, n, r, o, i, l, s, a) {
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
function T5(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
var O5 = (e, t = "end") => (n) => {
  n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
  let r = n * e, o = t === "end" ? Math.floor(r) : Math.ceil(r);
  return w5(0, 1, o / e);
}, Lu = 1.70158, va = Lu * 1.525, r1 = Lu + 1, o1 = 2 * Math.PI / 3, i1 = 2 * Math.PI / 4.5, ya = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, M5 = { linear: (e) => e, easeInQuad: (e) => e * e, easeOutQuad: (e) => 1 - (1 - e) * (1 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2, easeInCubic: (e) => e * e * e, easeOutCubic: (e) => 1 - Math.pow(1 - e, 3), easeInOutCubic: (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2, easeInQuart: (e) => e * e * e * e, easeOutQuart: (e) => 1 - Math.pow(1 - e, 4), easeInOutQuart: (e) => e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2, easeInQuint: (e) => e * e * e * e * e, easeOutQuint: (e) => 1 - Math.pow(1 - e, 5), easeInOutQuint: (e) => e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2, easeInSine: (e) => 1 - Math.cos(e * Math.PI / 2), easeOutSine: (e) => Math.sin(e * Math.PI / 2), easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2, easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * e - 10), easeOutExpo: (e) => e === 1 ? 1 : 1 - Math.pow(2, -10 * e), easeInOutExpo: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2, easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)), easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)), easeInOutCirc: (e) => e < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2, easeInBack: (e) => r1 * e * e * e - Lu * e * e, easeOutBack: (e) => 1 + r1 * Math.pow(e - 1, 3) + Lu * Math.pow(e - 1, 2), easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((va + 1) * 2 * e - va) / 2 : (Math.pow(2 * e - 2, 2) * ((va + 1) * (e * 2 - 2) + va) + 2) / 2, easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * o1), easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * o1) + 1, easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * i1)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * i1) / 2 + 1, easeInBounce: (e) => 1 - ya(1 - e), easeOutBounce: ya, easeInOutBounce: (e) => e < 0.5 ? (1 - ya(1 - 2 * e)) / 2 : (1 + ya(2 * e - 1)) / 2, steps: O5 }, Ei = Symbol.for("FluidValue.get"), go = Symbol.for("FluidValue.observers"), zt = (e) => Boolean(e && e[Ei]), gt = (e) => e && e[Ei] ? e[Ei]() : e, l1 = (e) => e[go] || null;
function N5(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function us(e, t) {
  let n = e[go];
  n && n.forEach((r) => {
    N5(r, t);
  });
}
var vz, yz, tx, Rb = (tx = class {
  constructor(e) {
    Q(this, vz);
    Q(this, yz);
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    D5(this, e);
  }
}, vz = Ei, yz = go, tx), D5 = (e, t) => Ib(e, Ei, t);
function Li(e, t) {
  if (e[Ei]) {
    let n = e[go];
    n || Ib(e, go, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function cs(e, t) {
  let n = e[go];
  if (n && n.has(t)) {
    let r = n.size - 1;
    r ? n.delete(t) : e[go] = null, e.observerRemoved && e.observerRemoved(r, t);
  }
}
var Ib = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), Za = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, L5 = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, s1 = new RegExp(`(${Za.source})(%|[a-z]+)`, "i"), F5 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Ec = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, Tb = (e) => {
  let [t, n] = z5(e);
  if (!t || Dm())
    return e;
  let r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  return r ? r.trim() : n && n.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(n) || e : n && Ec.test(n) ? Tb(n) : n || e;
}, z5 = (e) => {
  let t = Ec.exec(e);
  if (!t)
    return [,];
  let [, n, r] = t;
  return [n, r];
}, zf, B5 = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`, Ob = (e) => {
  zf || (zf = Or ? new RegExp(`(${Object.keys(Or).join("|")})(?!\\w)`, "g") : /^\b$/);
  let t = e.output.map((o) => gt(o).replace(Ec, Tb).replace(L5, n1).replace(zf, n1)), n = t.map((o) => o.match(Za).map(Number)), r = n[0].map((o, i) => n.map((l) => {
    if (!(i in l))
      throw Error('The arity of each "output" value must be equal');
    return l[i];
  })).map((o) => as({ ...e, output: o }));
  return (o) => {
    var s;
    let i = !s1.test(t[0]) && ((s = t.find((a) => s1.test(a))) == null ? void 0 : s.replace(Za, "")), l = 0;
    return t[0].replace(Za, () => `${r[l++](o)}${i || ""}`).replace(F5, B5);
  };
}, zm = "react-spring: ", Mb = (e) => {
  let t = e, n = !1;
  if (typeof t != "function")
    throw new TypeError(`${zm}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, j5 = Mb(console.warn);
function H5() {
  j5(`${zm}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var V5 = Mb(console.warn);
function U5() {
  V5(`${zm}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function Ac(e) {
  return U.str(e) && (e[0] == "#" || /\d/.test(e) || !Dm() && Ec.test(e) || e in (Or || {}));
}
var Bm = Dm() ? m.exports.useEffect : m.exports.useLayoutEffect, W5 = () => {
  let e = m.exports.useRef(!1);
  return Bm(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function Nb() {
  let e = m.exports.useState()[1], t = W5();
  return () => {
    t.current && e(Math.random());
  };
}
function q5(e, t) {
  let [n] = m.exports.useState(() => ({ inputs: t, result: e() })), r = m.exports.useRef(), o = r.current, i = o;
  return i ? Boolean(t && i.inputs && G5(t, i.inputs)) || (i = { inputs: t, result: e() }) : i = n, m.exports.useEffect(() => {
    r.current = i, o == n && (n.inputs = n.result = void 0);
  }, [i]), i.result;
}
function G5(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var Db = (e) => m.exports.useEffect(e, Q5), Q5 = [];
function a1(e) {
  let t = m.exports.useRef();
  return m.exports.useEffect(() => {
    t.current = e;
  }), t.current;
}
var fs = Symbol.for("Animated:node"), K5 = (e) => !!e && e[fs] === e, xn = (e) => e && e[fs], jm = (e, t) => g5(e, fs, t), Pc = (e) => e && e[fs] && e[fs].getPayload(), Lb = class {
  constructor() {
    Q(this, "payload");
    jm(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}, zs = class extends Lb {
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
    return new zs(t);
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
}, ds = class extends zs {
  constructor(t) {
    super(0);
    Q(this, "_string", null);
    Q(this, "_toString");
    this._toString = as({ output: [t, t] });
  }
  static create(t) {
    return new ds(t);
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
    t && (this._toString = as({ output: [this.getValue(), t] })), this._value = 0, super.reset();
  }
}, Fu = { dependencies: null }, _c = class extends Lb {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    let t = {};
    return An(this.source, (n, r) => {
      K5(n) ? t[r] = n.getValue(e) : zt(n) ? t[r] = gt(n) : e || (t[r] = n);
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
    Fu.dependencies && zt(e) && Fu.dependencies.add(e);
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
    return e.length == t.length ? t.map((n, r) => n.setValue(e[r])).some(Boolean) : (super.setValue(e.map(Y5)), !0);
  }
};
function Y5(e) {
  return (Ac(e) ? ds : zs).create(e);
}
function Op(e) {
  let t = xn(e);
  return t ? t.constructor : U.arr(e) ? Fb : Ac(e) ? ds : zs;
}
var u1 = (e, t) => {
  let n = !U.fun(e) || e.prototype && e.prototype.isReactComponent;
  return m.exports.forwardRef((r, o) => {
    let i = m.exports.useRef(null), l = n && m.exports.useCallback((h) => {
      i.current = J5(o, h);
    }, [o]), [s, a] = Z5(r, t), u = Nb(), c = () => {
      let h = i.current;
      n && !h || (h ? t.applyAnimatedValues(h, s.getValue(!0)) : !1) === !1 && u();
    }, f = new X5(c, a), d = m.exports.useRef();
    Bm(() => (d.current = f, pe(a, (h) => Li(h, f)), () => {
      d.current && (pe(d.current.deps, (h) => cs(h, d.current)), re.cancel(d.current.update));
    })), m.exports.useEffect(c, []), Db(() => () => {
      let h = d.current;
      pe(h.deps, (v) => cs(v, h));
    });
    let g = t.getComponentProps(s.getValue());
    return m.exports.createElement(e, { ...g, ref: l });
  });
}, X5 = class {
  constructor(e, t) {
    this.update = e, this.deps = t;
  }
  eventObserved(e) {
    e.type == "change" && re.write(this.update);
  }
};
function Z5(e, t) {
  let n = /* @__PURE__ */ new Set();
  return Fu.dependencies = n, e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }), e = new _c(e), Fu.dependencies = null, [e, n];
}
function J5(e, t) {
  return e && (U.fun(e) ? e(t) : e.current = t), t;
}
var c1 = Symbol.for("AnimatedComponent"), eA = (e, { applyAnimatedValues: t = () => !1, createAnimatedStyle: n = (o) => new _c(o), getComponentProps: r = (o) => o } = {}) => {
  let o = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r }, i = (l) => {
    let s = f1(l) || "Anonymous";
    return U.str(l) ? l = i[l] || (i[l] = u1(l, o)) : l = l[c1] || (l[c1] = u1(l, o)), l.displayName = `Animated(${s})`, l;
  };
  return An(e, (l, s) => {
    U.arr(e) && (s = f1(l)), i[s] = i(l);
  }), { animated: i };
}, f1 = (e) => U.str(e) ? e : e && U.str(e.displayName) ? e.displayName : U.fun(e) && e.name || null;
function to(e, ...t) {
  return U.fun(e) ? e(...t) : e;
}
var Nl = (e, t) => e === !0 || !!(t && e && (U.fun(e) ? e(t) : At(e).includes(t))), zb = (e, t) => U.obj(e) ? t && e[t] : e, Bb = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, tA = (e) => e, Hm = (e, t = tA) => {
  let n = nA;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  let r = {};
  for (let o of n) {
    let i = t(e[o], o);
    U.und(i) || (r[o] = i);
  }
  return r;
}, nA = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], rA = { config: 1, from: 1, to: 1, ref: 1, loop: 1, reset: 1, pause: 1, cancel: 1, reverse: 1, immediate: 1, default: 1, delay: 1, onProps: 1, onStart: 1, onChange: 1, onPause: 1, onResume: 1, onRest: 1, onResolve: 1, items: 1, trail: 1, sort: 1, expires: 1, initial: 1, enter: 1, update: 1, leave: 1, children: 1, onDestroyed: 1, keys: 1, callId: 1, parentId: 1 };
function oA(e) {
  let t = {}, n = 0;
  if (An(e, (r, o) => {
    rA[o] || (t[o] = r, n++);
  }), n)
    return t;
}
function jb(e) {
  let t = oA(e);
  if (t) {
    let n = { to: t };
    return An(e, (r, o) => o in t || (n[o] = r)), n;
  }
  return { ...e };
}
function ps(e) {
  return e = gt(e), U.arr(e) ? e.map(ps) : Ac(e) ? mn.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e;
}
function iA(e) {
  for (let t in e)
    return !0;
  return !1;
}
function Mp(e) {
  return U.fun(e) || U.arr(e) && U.obj(e[0]);
}
function lA(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function sA(e, t) {
  var n;
  t && e.ref !== t && ((n = e.ref) == null || n.delete(e), t.add(e), e.ref = t);
}
var Hb = { default: { tension: 170, friction: 26 }, gentle: { tension: 120, friction: 14 }, wobbly: { tension: 180, friction: 12 }, stiff: { tension: 210, friction: 20 }, slow: { tension: 280, friction: 60 }, molasses: { tension: 280, friction: 120 } }, Np = { ...Hb.default, mass: 1, damping: 1, easing: M5.linear, clamp: !1 }, aA = class {
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
function uA(e, t, n) {
  n && (n = { ...n }, d1(n, t), t = { ...n, ...t }), d1(e, t), Object.assign(e, t);
  for (let l in Np)
    e[l] == null && (e[l] = Np[l]);
  let { mass: r, frequency: o, damping: i } = e;
  return U.und(o) || (o < 0.01 && (o = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / o, 2) * r, e.friction = 4 * Math.PI * i * r / o), e;
}
function d1(e, t) {
  if (!U.und(t.decay))
    e.duration = void 0;
  else {
    let n = !U.und(t.tension) || !U.und(t.friction);
    (n || !U.und(t.frequency) || !U.und(t.damping) || !U.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
var p1 = [], cA = class {
  constructor() {
    Q(this, "changed", !1);
    Q(this, "values", p1);
    Q(this, "toValues", null);
    Q(this, "fromValues", p1);
    Q(this, "to");
    Q(this, "from");
    Q(this, "config", new aA());
    Q(this, "immediate", !1);
  }
};
function Vb(e, { key: t, props: n, defaultProps: r, state: o, actions: i }) {
  return new Promise((l, s) => {
    var h;
    let a, u, c = Nl((h = n.cancel) != null ? h : r == null ? void 0 : r.cancel, t);
    if (c)
      g();
    else {
      U.und(n.pause) || (o.paused = Nl(n.pause, t));
      let v = r == null ? void 0 : r.pause;
      v !== !0 && (v = o.paused || Nl(v, t)), a = to(n.delay || 0, t), v ? (o.resumeQueue.add(d), i.pause()) : (i.resume(), d());
    }
    function f() {
      o.resumeQueue.add(d), o.timeouts.delete(u), u.cancel(), a = u.time - re.now();
    }
    function d() {
      a > 0 && !mn.skipAnimation ? (o.delayed = !0, u = re.setTimeout(g, a), o.pauseQueue.add(f), o.timeouts.add(u)) : g();
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
var Vm = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? fi(e.get()) : t.every((n) => n.noop) ? Ub(e.get()) : ln(e.get(), t.every((n) => n.finished)), Ub = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }), ln = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }), fi = (e) => ({ value: e, cancelled: !0, finished: !1 });
function Wb(e, t, n, r) {
  let { callId: o, parentId: i, onRest: l } = t, { asyncTo: s, promise: a } = n;
  return !i && e === s && !t.reset ? a : n.promise = (async () => {
    n.asyncId = o, n.asyncTo = e;
    let u = Hm(t, (w, p) => p === "onRest" ? void 0 : w), c, f, d = new Promise((w, p) => (c = w, f = p)), g = (w) => {
      let p = o <= (n.cancelId || 0) && fi(r) || o !== n.asyncId && ln(r, !1);
      if (p)
        throw w.result = p, f(w), w;
    }, h = (w, p) => {
      let y = new h1(), x = new m1();
      return (async () => {
        if (mn.skipAnimation)
          throw hs(n), x.result = ln(r, !1), f(x), x;
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
      return hs(n), ln(r, !1);
    try {
      let w;
      U.arr(e) ? w = (async (p) => {
        for (let y of p)
          await h(y);
      })(e) : w = Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([w.then(c), d]), v = ln(r.get(), !0, !1);
    } catch (w) {
      if (w instanceof h1)
        v = w.result;
      else if (w instanceof m1)
        v = w.result;
      else
        throw w;
    } finally {
      o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? s : void 0, n.promise = i ? a : void 0);
    }
    return U.fun(l) && re.batchedUpdates(() => {
      l(v, r, r.item);
    }), v;
  })();
}
function hs(e, t) {
  Ol(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
var h1 = class extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
    Q(this, "result");
  }
}, m1 = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
    Q(this, "result");
  }
}, Dp = (e) => e instanceof Um, fA = 1, Um = class extends Rb {
  constructor() {
    super(...arguments);
    Q(this, "id", fA++);
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
    return H5(), mn.to(this, t);
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
    us(this, { type: "change", parent: this, value: t, idle: n });
  }
  _onPriorityChange(t) {
    this.idle || Cc.sort(this), us(this, { type: "priority", parent: this, priority: t });
  }
}, vo = Symbol.for("SpringPhase"), qb = 1, Lp = 2, Fp = 4, Bf = (e) => (e[vo] & qb) > 0, ur = (e) => (e[vo] & Lp) > 0, ol = (e) => (e[vo] & Fp) > 0, g1 = (e, t) => t ? e[vo] |= Lp | qb : e[vo] &= ~Lp, v1 = (e, t) => t ? e[vo] |= Fp : e[vo] &= ~Fp, dA = class extends Um {
  constructor(t, n) {
    super();
    Q(this, "key");
    Q(this, "animation", new cA());
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
    return !(ur(this) || this._state.asyncTo) || ol(this);
  }
  get goal() {
    return gt(this.animation.to);
  }
  get velocity() {
    let t = xn(this);
    return t instanceof zs ? t.lastVelocity || 0 : t.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return Bf(this);
  }
  get isAnimating() {
    return ur(this);
  }
  get isPaused() {
    return ol(this);
  }
  get isDelayed() {
    return this._state.delayed;
  }
  advance(t) {
    let n = !0, r = !1, o = this.animation, { config: i, toValues: l } = o, s = Pc(o.to);
    !s && zt(o.to) && (l = At(gt(o.to))), o.values.forEach((c, f) => {
      if (c.done)
        return;
      let d = c.constructor == ds ? 1 : s ? s[f].lastPosition : l[f], g = o.immediate, h = d;
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
            let b = i.restVelocity || x / 10, A = i.clamp ? 0 : i.bounce, S = !U.und(A), E = w == d ? c.v0 > 0 : w < d, $, P = !1, _ = 1, I = Math.ceil(t / _);
            for (let M = 0; M < I && ($ = Math.abs(y) > b, !(!$ && (g = Math.abs(d - h) <= x, g))); ++M) {
              S && (P = h == d || h > d == E, P && (y = -y * A, h = d));
              let L = -i.tension * 1e-6 * (h - d), B = -i.friction * 1e-3 * y, z = (L + B) / i.mass;
              y = y + z * _, h = h + y * _;
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
    let a = xn(this), u = a.getValue();
    if (n) {
      let c = gt(o.to);
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
    return U.und(t) ? (r = this.queue || [], this.queue = []) : r = [U.obj(t) ? t : { ...n, to: t }], Promise.all(r.map((o) => this._update(o))).then((o) => Vm(this, o));
  }
  stop(t) {
    let { to: n } = this.animation;
    return this._focus(this.get()), hs(this._state, t && this._lastCallId), re.batchedUpdates(() => this._stop(n, t)), this;
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
    return Bf(this) || (t.reverse && ([r, o] = [o, r]), o = gt(o), U.und(o) ? xn(this) || this._set(r) : this._set(o)), i;
  }
  _update({ ...t }, n) {
    let { key: r, defaultProps: o } = this;
    t.default && Object.assign(o, Hm(t, (s, a) => /^on/.test(a) ? zb(s, r) : s)), x1(this, t, "onProps"), ll(this, "onProps", t, this);
    let i = this._prepareNode(t);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    let l = this._state;
    return Vb(++this._lastCallId, { key: r, props: t, defaultProps: o, state: l, actions: { pause: () => {
      ol(this) || (v1(this, !0), wl(l.pauseQueue), ll(this, "onPause", ln(this, il(this, this.animation.to)), this));
    }, resume: () => {
      ol(this) && (v1(this, !1), ur(this) && this._resume(), wl(l.resumeQueue), ll(this, "onResume", ln(this, il(this, this.animation.to)), this));
    }, start: this._merge.bind(this, i) } }).then((s) => {
      if (t.loop && s.finished && !(n && s.noop)) {
        let a = Gb(t);
        if (a)
          return this._update(a, !0);
      }
      return s;
    });
  }
  _merge(t, n, r) {
    if (n.cancel)
      return this.stop(!0), r(fi(this));
    let o = !U.und(t.to), i = !U.und(t.from);
    if (o || i)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return r(fi(this));
    let { key: l, defaultProps: s, animation: a } = this, { to: u, from: c } = a, { to: f = u, from: d = c } = t;
    i && !o && (!n.default || U.und(f)) && (f = d), n.reverse && ([f, d] = [d, f]);
    let g = !Ln(d, c);
    g && (a.from = d), d = gt(d);
    let h = !Ln(f, u);
    h && this._focus(f);
    let v = Mp(n.to), { config: w } = a, { decay: p, velocity: y } = w;
    (o || i) && (w.velocity = 0), n.config && !v && uA(w, to(n.config, l), n.config !== s.config ? to(s.config, l) : void 0);
    let x = xn(this);
    if (!x || U.und(f))
      return r(ln(this, !0));
    let b = U.und(n.reset) ? i && !n.default : !U.und(d) && Nl(n.reset, l), A = b ? d : this.get(), S = ps(f), E = U.num(S) || U.arr(S) || Ac(S), $ = !v && (!E || Nl(s.immediate || n.immediate, l));
    if (h) {
      let M = Op(f);
      if (M !== x.constructor)
        if ($)
          x = this._set(S);
        else
          throw Error(`Cannot animate between ${x.constructor.name} and ${M.name}, as the "to" prop suggests`);
    }
    let P = x.constructor, _ = zt(f), I = !1;
    if (!_) {
      let M = b || !Bf(this) && g;
      (h || M) && (I = Ln(ps(A), S), _ = !I), (!Ln(a.immediate, $) && !$ || !Ln(w.decay, p) || !Ln(w.velocity, y)) && (_ = !0);
    }
    if (I && ur(this) && (a.changed && !b ? _ = !0 : _ || this._stop(u)), !v && ((_ || zt(u)) && (a.values = x.getPayload(), a.toValues = zt(f) ? null : P == ds ? [1] : At(S)), a.immediate != $ && (a.immediate = $, !$ && !b && this._set(u)), _)) {
      let { onRest: M } = a;
      pe(hA, (B) => x1(this, n, B));
      let L = ln(this, il(this, u));
      wl(this._pendingCalls, L), this._pendingCalls.add(r), a.changed && re.batchedUpdates(() => {
        var B;
        a.changed = !b, M == null || M(L, this), b ? to(s.onRest, L) : (B = a.onStart) == null || B.call(a, L, this);
      });
    }
    b && this._set(A), v ? r(Wb(n.to, n, this._state, this)) : _ ? this._start() : ur(this) && !h ? this._pendingCalls.add(r) : r(Ub(A));
  }
  _focus(t) {
    let n = this.animation;
    t !== n.to && (l1(this) && this._detach(), n.to = t, l1(this) && this._attach());
  }
  _attach() {
    let t = 0, { to: n } = this.animation;
    zt(n) && (Li(n, this), Dp(n) && (t = n.priority + 1)), this.priority = t;
  }
  _detach() {
    let { to: t } = this.animation;
    zt(t) && cs(t, this);
  }
  _set(t, n = !0) {
    let r = gt(t);
    if (!U.und(r)) {
      let o = xn(this);
      if (!o || !Ln(r, o.getValue())) {
        let i = Op(r);
        !o || o.constructor != i ? jm(this, i.create(r)) : o.setValue(r), o && re.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return xn(this);
  }
  _onStart() {
    let t = this.animation;
    t.changed || (t.changed = !0, ll(this, "onStart", ln(this, il(this, t.to)), this));
  }
  _onChange(t, n) {
    n || (this._onStart(), to(this.animation.onChange, t, this)), to(this.defaultProps.onChange, t, this), super._onChange(t, n);
  }
  _start() {
    let t = this.animation;
    xn(this).reset(gt(t.to)), t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)), ur(this) || (g1(this, !0), ol(this) || this._resume());
  }
  _resume() {
    mn.skipAnimation ? this.finish() : Cc.start(this);
  }
  _stop(t, n) {
    if (ur(this)) {
      g1(this, !1);
      let r = this.animation;
      pe(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), us(this, { type: "idle", parent: this });
      let o = n ? fi(this.get()) : ln(this.get(), il(this, t != null ? t : r.to));
      wl(this._pendingCalls, o), r.changed && (r.changed = !1, ll(this, "onRest", o, this));
    }
  }
};
function il(e, t) {
  let n = ps(t), r = ps(e.get());
  return Ln(r, n);
}
function Gb(e, t = e.loop, n = e.to) {
  let r = to(t);
  if (r) {
    let o = r !== !0 && jb(r), i = (o || e).reverse, l = !o || o.reset;
    return ms({ ...e, loop: t, default: !1, pause: void 0, to: !i || Mp(n) ? n : void 0, from: l ? e.from : void 0, reset: l, ...o });
  }
}
function ms(e) {
  let { to: t, from: n } = e = jb(e), r = /* @__PURE__ */ new Set();
  return U.obj(t) && y1(t, r), U.obj(n) && y1(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function pA(e) {
  let t = ms(e);
  return U.und(t.default) && (t.default = Hm(t)), t;
}
function y1(e, t) {
  An(e, (n, r) => n != null && t.add(r));
}
var hA = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function x1(e, t, n) {
  e.animation[n] = t[n] !== Bb(t, n) ? zb(t[n], e.key) : void 0;
}
function ll(e, t, ...n) {
  var r, o, i, l;
  (o = (r = e.animation)[t]) == null || o.call(r, ...n), (l = (i = e.defaultProps)[t]) == null || l.call(i, ...n);
}
var mA = ["onStart", "onChange", "onRest"], gA = 1, vA = class {
  constructor(e, t) {
    Q(this, "id", gA++);
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
    return e && this.queue.push(ms(e)), this;
  }
  start(e) {
    let { queue: t } = this;
    return e ? t = At(e).map(ms) : this.queue = [], this._flush ? this._flush(this, t) : (Zb(this, t), zp(this, t));
  }
  stop(e, t) {
    if (e !== !!e && (t = e), t) {
      let n = this.springs;
      pe(At(t), (r) => n[r].stop(!!e));
    } else
      hs(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
    return this;
  }
  pause(e) {
    if (U.und(e))
      this.start({ pause: !0 });
    else {
      let t = this.springs;
      pe(At(e), (n) => t[n].pause());
    }
    return this;
  }
  resume(e) {
    if (U.und(e))
      this.start({ pause: !1 });
    else {
      let t = this.springs;
      pe(At(e), (n) => t[n].resume());
    }
    return this;
  }
  each(e) {
    An(this.springs, e);
  }
  _onFrame() {
    let { onStart: e, onChange: t, onRest: n } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
    (r && !this._started || o && !this._started) && (this._started = !0, Ol(e, ([s, a]) => {
      a.value = this.get(), s(a, this, this._item);
    }));
    let i = !r && this._started, l = o || i && n.size ? this.get() : null;
    o && t.size && Ol(t, ([s, a]) => {
      a.value = l, s(a, this, this._item);
    }), i && (this._started = !1, Ol(n, ([s, a]) => {
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
    re.onFrame(this._onFrame);
  }
};
function zp(e, t) {
  return Promise.all(t.map((n) => Qb(e, n))).then((n) => Vm(e, n));
}
async function Qb(e, t, n) {
  let { keys: r, to: o, from: i, loop: l, onRest: s, onResolve: a } = t, u = U.obj(t.default) && t.default;
  l && (t.loop = !1), o === !1 && (t.to = null), i === !1 && (t.from = null);
  let c = U.arr(o) || U.fun(o) ? o : void 0;
  c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : pe(mA, (v) => {
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
  t.pause === !f.paused ? (f.paused = t.pause, wl(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
  let d = (r || Object.keys(e.springs)).map((v) => e.springs[v].start(t)), g = t.cancel === !0 || Bb(t, "cancel") === !0;
  (c || g && f.asyncId) && d.push(Vb(++e._lastAsyncId, { props: t, state: f, actions: { pause: Ip, resume: Ip, start(v, w) {
    g ? (hs(f, e._lastAsyncId), w(fi(e))) : (v.onRest = s, w(Wb(c, v, f, e)));
  } } })), f.paused && await new Promise((v) => {
    f.resumeQueue.add(v);
  });
  let h = Vm(e, await Promise.all(d));
  if (l && h.finished && !(n && h.noop)) {
    let v = Gb(t, l, o);
    if (v)
      return Zb(e, [v]), Qb(e, v, !0);
  }
  return a && re.batchedUpdates(() => a(h, e, e.item)), h;
}
function w1(e, t) {
  let n = { ...e.springs };
  return t && pe(At(t), (r) => {
    U.und(r.keys) && (r = ms(r)), U.obj(r.to) || (r = { ...r, to: void 0 }), Xb(n, r, (o) => Yb(o));
  }), Kb(e, n), n;
}
function Kb(e, t) {
  An(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, Li(n, e));
  });
}
function Yb(e, t) {
  let n = new dA();
  return n.key = e, t && Li(n, t), n;
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
  let n = m.exports.useContext(zu), r = t.pause || !!n.pause, o = t.immediate || !!n.immediate;
  t = q5(() => ({ pause: r, immediate: o }), [r, o]);
  let { Provider: i } = zu;
  return m.exports.createElement(i, { value: t }, e);
}, zu = yA(Rc, {});
Rc.Provider = zu.Provider;
Rc.Consumer = zu.Consumer;
function yA(e, t) {
  return Object.assign(e, m.exports.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
var xA = () => {
  let e = [], t = function(r) {
    U5();
    let o = [];
    return pe(e, (i, l) => {
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
        let s = this._getProps(r, i, l);
        s && o.push(i.start(s));
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
function wA(e, t, n) {
  let r = U.fun(t) && t;
  r && !n && (n = []);
  let o = m.exports.useMemo(() => r || arguments.length == 3 ? xA() : void 0, []), i = m.exports.useRef(0), l = Nb(), s = m.exports.useMemo(() => ({ ctrls: [], queue: [], flush(p, y) {
    let x = w1(p, y);
    return i.current > 0 && !s.queue.length && !Object.keys(x).some((b) => !p.springs[b]) ? zp(p, y) : new Promise((b) => {
      Kb(p, x), s.queue.push(() => {
        b(zp(p, y));
      }), l();
    });
  } }), []), a = m.exports.useRef([...s.ctrls]), u = [], c = a1(e) || 0;
  m.exports.useMemo(() => {
    pe(a.current.slice(e, c), (p) => {
      lA(p, o), p.stop(!0);
    }), a.current.length = e, f(c, e);
  }, [e]), m.exports.useMemo(() => {
    f(0, Math.min(c, e));
  }, n);
  function f(p, y) {
    for (let x = p; x < y; x++) {
      let b = a.current[x] || (a.current[x] = new vA(null, s.flush)), A = r ? r(x, b) : t[x];
      A && (u[x] = pA(A));
    }
  }
  let d = a.current.map((p, y) => w1(p, u[y])), g = m.exports.useContext(Rc), h = a1(g), v = g !== h && iA(g);
  Bm(() => {
    i.current++, s.ctrls = a.current;
    let { queue: p } = s;
    p.length && (s.queue = [], pe(p, (y) => y())), pe(a.current, (y, x) => {
      o == null || o.add(y), v && y.start({ default: g });
      let b = u[x];
      b && (sA(y, b.ref), y.ref ? y.queue.push(b) : y.start(b));
    });
  }), Db(() => () => {
    pe(s.ctrls, (p) => p.stop(!0));
  });
  let w = d.map((p) => ({ ...p }));
  return o ? [w, o] : w;
}
function bA(e, t) {
  let n = U.fun(e), [[r], o] = wA(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, o] : r;
}
var SA = class extends Um {
  constructor(t, n) {
    super();
    Q(this, "key");
    Q(this, "idle", !0);
    Q(this, "calc");
    Q(this, "_active", /* @__PURE__ */ new Set());
    this.source = t, this.calc = as(...n);
    let r = this._get(), o = Op(r);
    jm(this, o.create(r));
  }
  advance(t) {
    let n = this._get(), r = this.get();
    Ln(n, r) || (xn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && b1(this._active) && jf(this);
  }
  _get() {
    let t = U.arr(this.source) ? this.source.map(gt) : At(gt(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !b1(this._active) && (this.idle = !1, pe(Pc(this), (t) => {
      t.done = !1;
    }), mn.skipAnimation ? (re.batchedUpdates(() => this.advance()), jf(this)) : Cc.start(this));
  }
  _attach() {
    let t = 1;
    pe(At(this.source), (n) => {
      zt(n) && Li(n, this), Dp(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1));
    }), this.priority = t, this._start();
  }
  _detach() {
    pe(At(this.source), (t) => {
      zt(t) && cs(t, this);
    }), this._active.clear(), jf(this);
  }
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = At(this.source).reduce((n, r) => Math.max(n, (Dp(r) ? r.priority : 0) + 1), 0));
  }
};
function kA(e) {
  return e.idle !== !1;
}
function b1(e) {
  return !e.size || Array.from(e).every(kA);
}
function jf(e) {
  e.idle || (e.idle = !0, pe(Pc(e), (t) => {
    t.done = !0;
  }), us(e, { type: "idle", parent: e }));
}
mn.assign({ createStringInterpolator: Ob, to: (e, t) => new SA(e, t) });
var Jb = /^--/;
function CA(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !Jb.test(e) && !(Dl.hasOwnProperty(e) && Dl[e]) ? t + "px" : ("" + t).trim();
}
var S1 = {};
function $A(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  let n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: r, children: o, scrollTop: i, scrollLeft: l, viewBox: s, ...a } = t, u = Object.values(a), c = Object.keys(a).map((f) => n || e.hasAttribute(f) ? f : S1[f] || (S1[f] = f.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  o !== void 0 && (e.textContent = o);
  for (let f in r)
    if (r.hasOwnProperty(f)) {
      let d = CA(f, r[f]);
      Jb.test(f) ? e.style.setProperty(f, d) : e.style[f] = d;
    }
  c.forEach((f, d) => {
    e.setAttribute(f, u[d]);
  }), i !== void 0 && (e.scrollTop = i), l !== void 0 && (e.scrollLeft = l), s !== void 0 && e.setAttribute("viewBox", s);
}
var Dl = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, EA = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), AA = ["Webkit", "Ms", "Moz", "O"];
Dl = Object.keys(Dl).reduce((e, t) => (AA.forEach((n) => e[EA(n, t)] = e[t]), e), Dl);
var PA = /^(matrix|translate|scale|rotate|skew)/, _A = /^(translate)/, RA = /^(rotate|skew)/, Hf = (e, t) => U.num(e) && e !== 0 ? e + t : e, Ja = (e, t) => U.arr(e) ? e.every((n) => Ja(n, t)) : U.num(e) ? e === t : parseFloat(e) === t, IA = class extends _c {
  constructor({ x: e, y: t, z: n, ...r }) {
    let o = [], i = [];
    (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((l) => [`translate3d(${l.map((s) => Hf(s, "px")).join(",")})`, Ja(l, 0)])), An(r, (l, s) => {
      if (s === "transform")
        o.push([l || ""]), i.push((a) => [a, a === ""]);
      else if (PA.test(s)) {
        if (delete r[s], U.und(l))
          return;
        let a = _A.test(s) ? "px" : RA.test(s) ? "deg" : "";
        o.push(At(l)), i.push(s === "rotate3d" ? ([u, c, f, d]) => [`rotate3d(${u},${c},${f},${Hf(d, a)})`, Ja(d, 0)] : (u) => [`${s}(${u.map((c) => Hf(c, a)).join(",")})`, Ja(u, s.startsWith("scale") ? 1 : 0)]);
      }
    }), o.length && (r.transform = new TA(o, i)), super(r);
  }
}, TA = class extends Rb {
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
      let i = gt(r[0]), [l, s] = this.transforms[o](U.arr(i) ? i : r.map(gt));
      t += " " + l, n = n && s;
    }), n ? "none" : t;
  }
  observerAdded(t) {
    t == 1 && pe(this.inputs, (n) => pe(n, (r) => zt(r) && Li(r, this)));
  }
  observerRemoved(t) {
    t == 0 && pe(this.inputs, (n) => pe(n, (r) => zt(r) && cs(r, this)));
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), us(this, t);
  }
}, OA = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
mn.assign({ batchedUpdates: Kt.exports.unstable_batchedUpdates, createStringInterpolator: Ob, colors: b5 });
var MA = eA(OA, { applyAnimatedValues: $A, createAnimatedStyle: (e) => new IA(e), getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n }), k1 = MA.animated;
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
function Ai() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = eS(e)) && (r && (r += " "), r += t);
  return r;
}
class Bs {
  constructor(t, n, r) {
    this.property = t, this.normal = n, r && (this.space = r);
  }
}
Bs.prototype.property = {};
Bs.prototype.normal = {};
Bs.prototype.space = null;
function tS(e, t) {
  const n = {}, r = {};
  let o = -1;
  for (; ++o < e.length; )
    Object.assign(n, e[o].property), Object.assign(r, e[o].normal);
  return new Bs(n, r, t);
}
function Bp(e) {
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
let NA = 0;
const le = $o(), Be = $o(), nS = $o(), V = $o(), Ae = $o(), di = $o(), Ct = $o();
function $o() {
  return 2 ** ++NA;
}
const jp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: le,
  booleanish: Be,
  overloadedBoolean: nS,
  number: V,
  spaceSeparated: Ae,
  commaSeparated: di,
  commaOrSpaceSeparated: Ct
}, Symbol.toStringTag, { value: "Module" })), Vf = Object.keys(jp);
class Wm extends Yt {
  constructor(t, n, r, o) {
    let i = -1;
    if (super(t, n), C1(this, "space", o), typeof r == "number")
      for (; ++i < Vf.length; ) {
        const l = Vf[i];
        C1(this, Vf[i], (r & jp[l]) === jp[l]);
      }
  }
}
Wm.prototype.defined = !0;
function C1(e, t, n) {
  n && (e[t] = n);
}
const DA = {}.hasOwnProperty;
function Fi(e) {
  const t = {}, n = {};
  let r;
  for (r in e.properties)
    if (DA.call(e.properties, r)) {
      const o = e.properties[r], i = new Wm(
        r,
        e.transform(e.attributes || {}, r),
        o,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0), t[r] = i, n[Bp(r)] = r, n[Bp(i.attribute)] = r;
    }
  return new Bs(t, n, e.space);
}
const rS = Fi({
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
}), oS = Fi({
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
const sS = Fi({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: lS,
  properties: { xmlns: null, xmlnsXLink: null }
}), aS = Fi({
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
}), LA = Fi({
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
    cols: V,
    colSpan: null,
    content: null,
    contentEditable: Be,
    controls: le,
    controlsList: Ae,
    coords: V | di,
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
}), FA = Fi({
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
    g1: di,
    g2: di,
    glyphName: di,
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
}), zA = /^data[-\w.:]+$/i, $1 = /-[a-z]/g, BA = /[A-Z]/g;
function jA(e, t) {
  const n = Bp(t);
  let r = t, o = Yt;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && zA.test(t)) {
    if (t.charAt(4) === "-") {
      const i = t.slice(5).replace($1, VA);
      r = "data" + i.charAt(0).toUpperCase() + i.slice(1);
    } else {
      const i = t.slice(4);
      if (!$1.test(i)) {
        let l = i.replace(BA, HA);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    o = Wm;
  }
  return new o(r, t);
}
function HA(e) {
  return "-" + e.toLowerCase();
}
function VA(e) {
  return e.charAt(1).toUpperCase();
}
const UA = tS([oS, rS, sS, aS, LA], "html"), uS = tS([oS, rS, sS, aS, FA], "svg"), WA = [
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
], E1 = {}.hasOwnProperty;
function qA(e, t) {
  const n = t || {};
  function r(o, ...i) {
    let l = r.invalid;
    const s = r.handlers;
    if (o && E1.call(o, e)) {
      const a = String(o[e]);
      l = E1.call(s, a) ? s[a] : r.unknown;
    }
    if (l)
      return l.call(this, o, ...i);
  }
  return r.handlers = n.handlers || {}, r.invalid = n.invalid, r.unknown = n.unknown, r;
}
function GA(e, t) {
  if (e = e.replace(
    t.subset ? QA(t.subset) : /["&'<>`]/g,
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
function QA(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t.push(e[n].replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"));
  return new RegExp("(?:" + t.join("|") + ")", "g");
}
function KA(e, t, n) {
  const r = "&#x" + e.toString(16).toUpperCase();
  return n && t && !/[\dA-Fa-f]/.test(String.fromCharCode(t)) ? r : r + ";";
}
function YA(e, t, n) {
  const r = "&#" + String(e);
  return n && t && !/\d/.test(String.fromCharCode(t)) ? r : r + ";";
}
const XA = [
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
}, ZA = [
  "cent",
  "copy",
  "divide",
  "gt",
  "lt",
  "not",
  "para",
  "times"
], cS = {}.hasOwnProperty, Hp = {};
let xa;
for (xa in Uf)
  cS.call(Uf, xa) && (Hp[Uf[xa]] = xa);
function JA(e, t, n, r) {
  const o = String.fromCharCode(e);
  if (cS.call(Hp, o)) {
    const i = Hp[o], l = "&" + i;
    return n && XA.includes(i) && !ZA.includes(i) && (!r || t && t !== 61 && /[^\da-z]/i.test(String.fromCharCode(t))) ? l : l + ";";
  }
  return "";
}
function eP(e, t, n) {
  let r = KA(e, t, n.omitOptionalSemicolons), o;
  if ((n.useNamedReferences || n.useShortestReferences) && (o = JA(
    e,
    t,
    n.omitOptionalSemicolons,
    n.attribute
  )), (n.useShortestReferences || !o) && n.useShortestReferences) {
    const i = YA(e, t, n.omitOptionalSemicolons);
    i.length < r.length && (r = i);
  }
  return o && (!n.useShortestReferences || o.length < r.length) ? o : r;
}
function pi(e, t) {
  return GA(e, Object.assign({ format: eP }, t));
}
function tP(e, t, n, r) {
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
function nP(e, t, n, r) {
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
function rP(e, t) {
  const n = t || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
function oP(e) {
  return e.join(" ").trim();
}
function qm(e) {
  const t = e && typeof e == "object" && e.type === "text" ? e.value || "" : e;
  return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === "";
}
const Ue = dS(1), fS = dS(-1);
function dS(e) {
  return t;
  function t(n, r, o) {
    const i = n ? n.children : [];
    let l = (r || 0) + e, s = i && i[l];
    if (!o)
      for (; s && qm(s); )
        l += e, s = i[l];
    return s;
  }
}
const iP = {}.hasOwnProperty;
function pS(e) {
  return t;
  function t(n, r, o) {
    return iP.call(e, n.tagName) && e[n.tagName](n, r, o);
  }
}
const Gm = pS({
  html: lP,
  head: Wf,
  body: sP,
  p: aP,
  li: uP,
  dt: cP,
  dd: fP,
  rt: A1,
  rp: A1,
  optgroup: dP,
  option: pP,
  menuitem: hP,
  colgroup: Wf,
  caption: Wf,
  thead: mP,
  tbody: gP,
  tfoot: vP,
  tr: yP,
  td: P1,
  th: P1
});
function Wf(e, t, n) {
  const r = Ue(n, t, !0);
  return !r || r.type !== "comment" && !(r.type === "text" && qm(r.value.charAt(0)));
}
function lP(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type !== "comment";
}
function sP(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type !== "comment";
}
function aP(e, t, n) {
  const r = Ue(n, t);
  return r ? r.type === "element" && (r.tagName === "address" || r.tagName === "article" || r.tagName === "aside" || r.tagName === "blockquote" || r.tagName === "details" || r.tagName === "div" || r.tagName === "dl" || r.tagName === "fieldset" || r.tagName === "figcaption" || r.tagName === "figure" || r.tagName === "footer" || r.tagName === "form" || r.tagName === "h1" || r.tagName === "h2" || r.tagName === "h3" || r.tagName === "h4" || r.tagName === "h5" || r.tagName === "h6" || r.tagName === "header" || r.tagName === "hgroup" || r.tagName === "hr" || r.tagName === "main" || r.tagName === "menu" || r.tagName === "nav" || r.tagName === "ol" || r.tagName === "p" || r.tagName === "pre" || r.tagName === "section" || r.tagName === "table" || r.tagName === "ul") : !n || !(n.type === "element" && (n.tagName === "a" || n.tagName === "audio" || n.tagName === "del" || n.tagName === "ins" || n.tagName === "map" || n.tagName === "noscript" || n.tagName === "video"));
}
function uP(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && r.tagName === "li";
}
function cP(e, t, n) {
  const r = Ue(n, t);
  return r && r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function fP(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function A1(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "rp" || r.tagName === "rt");
}
function dP(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && r.tagName === "optgroup";
}
function pP(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "option" || r.tagName === "optgroup");
}
function hP(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "menuitem" || r.tagName === "hr" || r.tagName === "menu");
}
function mP(e, t, n) {
  const r = Ue(n, t);
  return r && r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function gP(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function vP(e, t, n) {
  return !Ue(n, t);
}
function yP(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && r.tagName === "tr";
}
function P1(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "td" || r.tagName === "th");
}
const xP = pS({
  html: wP,
  head: bP,
  body: SP,
  colgroup: kP,
  tbody: CP
});
function wP(e) {
  const t = Ue(e, -1);
  return !t || t.type !== "comment";
}
function bP(e) {
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
function SP(e) {
  const t = Ue(e, -1, !0);
  return !t || t.type !== "comment" && !(t.type === "text" && qm(t.value.charAt(0))) && !(t.type === "element" && (t.tagName === "meta" || t.tagName === "link" || t.tagName === "script" || t.tagName === "style" || t.tagName === "template"));
}
function kP(e, t, n) {
  const r = fS(n, t), o = Ue(e, -1, !0);
  return n && r && r.type === "element" && r.tagName === "colgroup" && Gm(r, n.children.indexOf(r), n) ? !1 : o && o.type === "element" && o.tagName === "col";
}
function CP(e, t, n) {
  const r = fS(n, t), o = Ue(e, -1);
  return n && r && r.type === "element" && (r.tagName === "thead" || r.tagName === "tbody") && Gm(r, n.children.indexOf(r), n) ? !1 : o && o.type === "element" && o.tagName === "tr";
}
const wa = {
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
function $P(e, t, n, r) {
  const o = r.schema, i = o.space === "svg" ? !1 : r.settings.omitOptionalTags;
  let l = o.space === "svg" ? r.settings.closeEmptyElements : r.settings.voids.includes(e.tagName.toLowerCase());
  const s = [];
  let a;
  o.space === "html" && e.tagName === "svg" && (r.schema = uS);
  const u = EP(r, e.properties), c = r.all(
    o.space === "html" && e.tagName === "template" ? e.content : e
  );
  return r.schema = o, c && (l = !1), (u || !i || !xP(e, t, n)) && (s.push("<", e.tagName, u ? " " + u : ""), l && (o.space === "svg" || r.settings.closeSelfClosing) && (a = u.charAt(u.length - 1), (!r.settings.tightSelfClosing || a === "/" || a && a !== '"' && a !== "'") && s.push(" "), s.push("/")), s.push(">")), s.push(c), !l && (!i || !Gm(e, t, n)) && s.push("</" + e.tagName + ">"), s.join("");
}
function EP(e, t) {
  const n = [];
  let r = -1, o;
  if (t) {
    for (o in t)
      if (t[o] !== void 0 && t[o] !== null) {
        const i = AP(e, o, t[o]);
        i && n.push(i);
      }
  }
  for (; ++r < n.length; ) {
    const i = e.settings.tightAttributes ? n[r].charAt(n[r].length - 1) : null;
    r !== n.length - 1 && i !== '"' && i !== "'" && (n[r] += " ");
  }
  return n.join("");
}
function AP(e, t, n) {
  const r = jA(e.schema, t), o = e.settings.allowParseErrors && e.schema.space === "html" ? 0 : 1, i = e.settings.allowDangerousCharacters ? 0 : 1;
  let l = e.quote, s;
  if (r.overloadedBoolean && (n === r.attribute || n === "") ? n = !0 : (r.boolean || r.overloadedBoolean && typeof n != "string") && (n = Boolean(n)), n == null || n === !1 || typeof n == "number" && Number.isNaN(n))
    return "";
  const a = pi(
    r.attribute,
    Object.assign({}, e.settings.characterReferences, {
      subset: wa.name[o][i]
    })
  );
  return n === !0 || (n = Array.isArray(n) ? (r.commaSeparated ? rP : oP)(n, {
    padLeft: !e.settings.tightCommaSeparatedLists
  }) : String(n), e.settings.collapseEmptyAttributes && !n) ? a : (e.settings.preferUnquoted && (s = pi(
    n,
    Object.assign({}, e.settings.characterReferences, {
      subset: wa.unquoted[o][i],
      attribute: !0
    })
  )), s !== n && (e.settings.quoteSmart && Bu(n, l) > Bu(n, e.alternative) && (l = e.alternative), s = l + pi(
    n,
    Object.assign({}, e.settings.characterReferences, {
      subset: (l === "'" ? wa.single : wa.double)[o][i],
      attribute: !0
    })
  ) + l), a + (s && "=" + s));
}
function hS(e, t, n, r) {
  return n && n.type === "element" && (n.tagName === "script" || n.tagName === "style") ? e.value : pi(
    e.value,
    Object.assign({}, r.settings.characterReferences, {
      subset: ["<", "&"]
    })
  );
}
function PP(e, t, n, r) {
  return r.settings.allowDangerousHtml ? e.value : hS(e, t, n, r);
}
function _P(e, t, n, r) {
  return r.all(e);
}
const RP = qA("type", {
  invalid: IP,
  unknown: TP,
  handlers: { comment: tP, doctype: nP, element: $P, raw: PP, root: _P, text: hS }
});
function IP(e) {
  throw new Error("Expected node, not `" + e + "`");
}
function TP(e) {
  throw new Error("Cannot compile unknown node `" + e.type + "`");
}
function OP(e, t) {
  const n = t || {}, r = n.quote || '"', o = r === '"' ? "'" : '"';
  if (r !== '"' && r !== "'")
    throw new Error("Invalid quote `" + r + "`, expected `'` or `\"`");
  return {
    one: MP,
    all: NP,
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
      voids: n.voids || WA,
      characterReferences: n.characterReferences || n.entities || {},
      closeSelfClosing: n.closeSelfClosing || !1,
      closeEmptyElements: n.closeEmptyElements || !1
    },
    schema: n.space === "svg" ? uS : UA,
    quote: r,
    alternative: o
  }.one(
    Array.isArray(e) ? { type: "root", children: e } : e,
    void 0,
    void 0
  );
}
function MP(e, t, n) {
  return RP(e, t, n, this);
}
function NP(e) {
  const t = [], n = e && e.children || [];
  let r = -1;
  for (; ++r < n.length; )
    t[r] = this.one(n[r], r, e);
  return t.join("");
}
function DP(e) {
  const t = this.data("settings"), n = Object.assign({}, t, e);
  Object.assign(this, { Compiler: r });
  function r(o) {
    return OP(o, n);
  }
}
const LP = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, Vt = jr(/[A-Za-z]/), ju = jr(/\d/), FP = jr(/[\dA-Fa-f]/), ct = jr(/[\dA-Za-z]/), zP = jr(/[!-/:-@[-`{-~]/), _1 = jr(/[#-'*+\--9=?A-Z^-~]/);
function gs(e) {
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
const Ic = jr(/\s/), Tc = jr(LP);
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
})(mS);
const BP = mS.exports, ba = Object.assign(qr(Error), {
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
    const o = n && BP(n, ...r);
    return new e(o);
  }
}
const Sa = {}.hasOwnProperty, R1 = {
  yaml: "-",
  toml: "+"
};
function Qm(e) {
  const t = [];
  let n = -1;
  const r = Array.isArray(e) ? e : e ? [e] : ["yaml"];
  for (; ++n < r.length; )
    t[n] = jP(r[n]);
  return t;
}
function jP(e) {
  let t = e;
  if (typeof t == "string") {
    if (!Sa.call(R1, t))
      throw ba("Missing matter definition for `%s`", t);
    t = {
      type: t,
      marker: R1[t]
    };
  } else if (typeof t != "object")
    throw ba("Expected matter to be an object, not `%j`", t);
  if (!Sa.call(t, "type"))
    throw ba("Missing `type` in matter `%j`", t);
  if (!Sa.call(t, "fence") && !Sa.call(t, "marker"))
    throw ba("Missing `marker` or `fence` in matter `%j`", t);
  return t;
}
function HP(e) {
  const t = Qm(e), n = {};
  let r = -1;
  for (; ++r < t.length; ) {
    const o = t[r], i = Vp(o, "open").charCodeAt(0), l = VP(o), s = n[i];
    Array.isArray(s) ? s.push(l) : n[i] = [l];
  }
  return {
    flow: n
  };
}
function VP(e) {
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
      return $.column === 1 && ($.line === 1 || t) && (s = Vp(e, "open"), a = 0, E === s.charCodeAt(a)) ? (f.enter(n), f.enter(r), f.enter(o), w(E)) : g(E);
    }
    function w(E) {
      return a === s.length ? (f.exit(o), ve(E) ? (f.enter("whitespace"), p(E)) : y(E)) : E === s.charCodeAt(a++) ? (f.consume(E), w) : g(E);
    }
    function p(E) {
      return ve(E) ? (f.consume(E), p) : (f.exit("whitespace"), y(E));
    }
    function y(E) {
      return X(E) ? (f.exit(r), f.enter("lineEnding"), f.consume(E), f.exit("lineEnding"), s = Vp(e, "close"), a = 0, f.attempt(l, S, x)) : g(E);
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
function Vp(e, t) {
  return e.marker ? I1(e.marker, t).repeat(3) : I1(e.fence, t);
}
function I1(e, t) {
  return typeof e == "string" ? e : e[t];
}
function UP(e) {
  const t = Qm(e), n = {}, r = {};
  let o = -1;
  for (; ++o < t.length; ) {
    const i = t[o];
    n[i.type] = WP(i), r[i.type] = qP, r[i.type + "Value"] = GP;
  }
  return { enter: n, exit: r };
}
function WP(e) {
  return t;
  function t(n) {
    this.enter({ type: e.type, value: "" }, n), this.buffer();
  }
}
function qP(e) {
  const t = this.resume(), n = this.exit(e);
  n.value = t.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
}
function GP(e) {
  this.config.enter.data.call(this, e), this.config.exit.data.call(this, e);
}
function QP(e) {
  const t = [], n = {}, r = Qm(e);
  let o = -1;
  for (; ++o < r.length; ) {
    const i = r[o];
    n[i.type] = KP(i), t.push({ atBreak: !0, character: Up(i, "open").charAt(0) });
  }
  return { unsafe: t, handlers: n };
}
function KP(e) {
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
function YP(e = "yaml") {
  const t = this.data();
  n("micromarkExtensions", HP(e)), n("fromMarkdownExtensions", UP(e)), n("toMarkdownExtensions", QP(e));
  function n(r, o) {
    (t[r] ? t[r] : t[r] = []).push(o);
  }
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
const O1 = {}.hasOwnProperty;
function gS(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    XP(t, e[n]);
  return t;
}
function XP(e, t) {
  let n;
  for (n in t) {
    const o = (O1.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n];
    let l;
    for (l in i) {
      O1.call(o, l) || (o[l] = []);
      const s = i[l];
      ZP(
        o[l],
        Array.isArray(s) ? s : s ? [s] : []
      );
    }
  }
}
function ZP(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Rt(e, 0, 0, r);
}
const JP = {
  tokenize: o3,
  partial: !0
}, vS = {
  tokenize: i3,
  partial: !0
}, yS = {
  tokenize: l3,
  partial: !0
}, hi = {
  tokenize: a3,
  partial: !0
}, xS = {
  tokenize: s3,
  partial: !0
}, wS = {
  tokenize: n3,
  previous: kS
}, bS = {
  tokenize: r3,
  previous: Ym
}, Jn = {
  tokenize: t3,
  previous: CS
}, Tn = {}, e3 = {
  text: Tn
};
let Gr = 48;
for (; Gr < 123; )
  Tn[Gr] = Jn, Gr++, Gr === 58 ? Gr = 65 : Gr === 91 && (Gr = 97);
Tn[43] = Jn;
Tn[45] = Jn;
Tn[46] = Jn;
Tn[95] = Jn;
Tn[72] = [Jn, bS];
Tn[104] = [Jn, bS];
Tn[87] = [Jn, wS];
Tn[119] = [Jn, wS];
function t3(e, t, n) {
  const r = this;
  let o, i;
  return l;
  function l(g) {
    return !M1(g) || !CS(r.previous) || Xm(r.events) ? n(g) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(g));
  }
  function s(g) {
    return M1(g) ? (e.consume(g), s) : g === 64 ? (e.consume(g), a) : n(g);
  }
  function a(g) {
    return g === 46 ? e.check(hi, d, u)(g) : g === 45 || g === 95 ? e.check(hi, n, c)(g) : ct(g) ? (!i && ju(g) && (i = !0), e.consume(g), a) : d(g);
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
function n3(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return l !== 87 && l !== 119 || !kS(r.previous) || Xm(r.events) ? n(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(
      JP,
      e.attempt(vS, e.attempt(yS, i), n),
      n
    )(l));
  }
  function i(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(l);
  }
}
function r3(e, t, n) {
  const r = this;
  return o;
  function o(h) {
    return h !== 72 && h !== 104 || !Ym(r.previous) || Xm(r.events) ? n(h) : (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), e.consume(h), i);
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
    return h === null || gs(h) || Ic(h) || Tc(h) ? n(h) : e.attempt(vS, e.attempt(yS, g), n)(h);
  }
  function g(h) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(h);
  }
}
function o3(e, t, n) {
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
function i3(e, t, n) {
  let r, o;
  return i;
  function i(a) {
    return a === 38 ? e.check(
      xS,
      s,
      l
    )(a) : a === 46 || a === 95 ? e.check(hi, s, l)(a) : a === null || gs(a) || Ic(a) || a !== 45 && Tc(a) ? s(a) : (e.consume(a), i);
  }
  function l(a) {
    return a === 46 ? (o = r, r = void 0, e.consume(a), i) : (a === 95 && (r = !0), e.consume(a), i);
  }
  function s(a) {
    return !o && !r ? t(a) : n(a);
  }
}
function l3(e, t) {
  let n = 0;
  return r;
  function r(l) {
    return l === 38 ? e.check(
      xS,
      t,
      o
    )(l) : (l === 40 && n++, l === 41 ? e.check(
      hi,
      i,
      o
    )(l) : Km(l) ? t(l) : SS(l) ? e.check(hi, t, o)(l) : (e.consume(l), r));
  }
  function o(l) {
    return e.consume(l), r;
  }
  function i(l) {
    return n--, n < 0 ? t(l) : o(l);
  }
}
function s3(e, t, n) {
  return r;
  function r(l) {
    return e.consume(l), o;
  }
  function o(l) {
    return Vt(l) ? (e.consume(l), o) : l === 59 ? (e.consume(l), i) : n(l);
  }
  function i(l) {
    return Km(l) ? t(l) : n(l);
  }
}
function a3(e, t, n) {
  return r;
  function r(i) {
    return e.consume(i), o;
  }
  function o(i) {
    return SS(i) ? (e.consume(i), o) : Km(i) ? t(i) : n(i);
  }
}
function SS(e) {
  return e === 33 || e === 34 || e === 39 || e === 41 || e === 42 || e === 44 || e === 46 || e === 58 || e === 59 || e === 60 || e === 63 || e === 95 || e === 126;
}
function Km(e) {
  return e === null || e === 60 || De(e);
}
function M1(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || ct(e);
}
function kS(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 126 || De(e);
}
function Ym(e) {
  return e === null || !Vt(e);
}
function CS(e) {
  return e !== 47 && Ym(e);
}
function Xm(e) {
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
function zi(e) {
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
function Hu(e) {
  if (e === null || De(e) || Ic(e))
    return 1;
  if (Tc(e))
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
  tokenize: c3,
  resolveAll: u3
};
function u3(e, t) {
  let n = -1, r, o, i, l, s, a, u, c;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          a = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const f = Object.assign({}, e[r][1].end), d = Object.assign({}, e[n][1].start);
          N1(f, -a), N1(d, a), l = {
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
            Oc(
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
function c3(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, o = Hu(r);
  let i;
  return l;
  function l(a) {
    return e.enter("attentionSequence"), i = a, s(a);
  }
  function s(a) {
    if (a === i)
      return e.consume(a), s;
    const u = e.exit("attentionSequence"), c = Hu(a), f = !c || c === 2 && o || n.includes(a), d = !o || o === 2 && c || n.includes(r);
    return u._open = Boolean(i === 42 ? f : f && (o || !d)), u._close = Boolean(i === 42 ? d : d && (c || !f)), t(a);
  }
}
function N1(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const f3 = {
  name: "autolink",
  tokenize: d3
};
function d3(e, t, n) {
  let r = 1;
  return o;
  function o(h) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i;
  }
  function i(h) {
    return Vt(h) ? (e.consume(h), l) : _1(h) ? u(h) : n(h);
  }
  function l(h) {
    return h === 43 || h === 45 || h === 46 || ct(h) ? s(h) : u(h);
  }
  function s(h) {
    return h === 58 ? (e.consume(h), a) : (h === 43 || h === 45 || h === 46 || ct(h)) && r++ < 32 ? (e.consume(h), s) : u(h);
  }
  function a(h) {
    return h === 62 ? (e.exit("autolinkProtocol"), g(h)) : h === null || h === 32 || h === 60 || gs(h) ? n(h) : (e.consume(h), a);
  }
  function u(h) {
    return h === 64 ? (e.consume(h), r = 0, c) : _1(h) ? (e.consume(h), u) : n(h);
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
const js = {
  tokenize: p3,
  partial: !0
};
function p3(e, t, n) {
  return ge(e, r, "linePrefix");
  function r(o) {
    return o === null || X(o) ? t(o) : n(o);
  }
}
const $S = {
  name: "blockQuote",
  tokenize: h3,
  continuation: {
    tokenize: m3
  },
  exit: g3
};
function h3(e, t, n) {
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
function m3(e, t, n) {
  return ge(
    e,
    e.attempt($S, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function g3(e) {
  e.exit("blockQuote");
}
const ES = {
  name: "characterEscape",
  tokenize: v3
};
function v3(e, t, n) {
  return r;
  function r(i) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(i), e.exit("escapeMarker"), o;
  }
  function o(i) {
    return zP(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i);
  }
}
const D1 = document.createElement("i");
function Zm(e) {
  const t = "&" + e + ";";
  D1.innerHTML = t;
  const n = D1.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
const AS = {
  name: "characterReference",
  tokenize: y3
};
function y3(e, t, n) {
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
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), i = 6, l = FP, c) : (e.enter("characterReferenceValue"), i = 7, l = ju, c(f));
  }
  function c(f) {
    let d;
    return f === 59 && o ? (d = e.exit("characterReferenceValue"), l === ct && !Zm(r.sliceSerialize(d)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)) : l(f) && o++ < i ? (e.consume(f), c) : n(f);
  }
}
const L1 = {
  name: "codeFenced",
  tokenize: x3,
  concrete: !0
};
function x3(e, t, n) {
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
    return _;
    function _(M) {
      return S.enter("lineEnding"), S.consume(M), S.exit("lineEnding"), I;
    }
    function I(M) {
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
      return S.enter("codeFencedFence"), S.enter("codeFencedFenceSequence"), I(L);
    }
    function I(L) {
      return L === u ? (S.consume(L), P++, I) : P < a ? $(L) : (S.exit("codeFencedFenceSequence"), ge(S, M, "whitespace")(L));
    }
    function M(L) {
      return L === null || X(L) ? (S.exit("codeFencedFence"), E(L)) : $(L);
    }
  }
}
const qf = {
  name: "codeIndented",
  tokenize: b3
}, w3 = {
  tokenize: S3,
  partial: !0
};
function b3(e, t, n) {
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
    return u === null ? a(u) : X(u) ? e.attempt(w3, l, a)(u) : (e.enter("codeFlowValue"), s(u));
  }
  function s(u) {
    return u === null || X(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), s);
  }
  function a(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function S3(e, t, n) {
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
const k3 = {
  name: "codeText",
  tokenize: E3,
  resolve: C3,
  previous: $3
};
function C3(e) {
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
function $3(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function E3(e, t, n) {
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
function PS(e) {
  const t = {};
  let n = -1, r, o, i, l, s, a, u;
  for (; ++n < e.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = e[n], n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix" && (a = r[1]._tokenizer.events, i = 0, i < a.length && a[i][1].type === "lineEndingBlank" && (i += 2), i < a.length && a[i][1].type === "content"))
      for (; ++i < a.length && a[i][1].type !== "content"; )
        a[i][1].type === "chunkText" && (a[i][1]._isInFirstContentOfListItem = !0, i++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, A3(e, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (i = n, o = void 0; i-- && (l = e[i], l[1].type === "lineEnding" || l[1].type === "lineEndingBlank"); )
        l[0] === "enter" && (o && (e[o][1].type = "lineEndingBlank"), l[1].type = "lineEnding", o = i);
      o && (r[1].end = Object.assign({}, e[o][1].start), s = e.slice(o, n), s.unshift(r), Rt(e, o, n - o + 1, s));
    }
  }
  return !u;
}
function A3(e, t) {
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
const P3 = {
  tokenize: I3,
  resolve: R3
}, _3 = {
  tokenize: T3,
  partial: !0
};
function R3(e) {
  return PS(e), e;
}
function I3(e, t) {
  let n;
  return r;
  function r(s) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), o(s);
  }
  function o(s) {
    return s === null ? i(s) : X(s) ? e.check(
      _3,
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
function T3(e, t, n) {
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
function _S(e, t, n, r, o, i, l, s, a) {
  const u = a || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(p) {
    return p === 60 ? (e.enter(r), e.enter(o), e.enter(i), e.consume(p), e.exit(i), d) : p === null || p === 41 || gs(p) ? n(p) : (e.enter(r), e.enter(l), e.enter(s), e.enter("chunkString", {
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
    return p === 40 ? ++c > u ? n(p) : (e.consume(p), v) : p === 41 ? c-- ? (e.consume(p), v) : (e.exit("chunkString"), e.exit(s), e.exit(l), e.exit(r), t(p)) : p === null || De(p) ? c ? n(p) : (e.exit("chunkString"), e.exit(s), e.exit(l), e.exit(r), t(p)) : gs(p) ? n(p) : (e.consume(p), p === 92 ? w : v);
  }
  function w(p) {
    return p === 40 || p === 41 || p === 92 ? (e.consume(p), v) : v(p);
  }
}
function RS(e, t, n, r, o, i) {
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
function IS(e, t, n, r, o, i) {
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
function pn(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const O3 = {
  name: "definition",
  tokenize: N3
}, M3 = {
  tokenize: D3,
  partial: !0
};
function N3(e, t, n) {
  const r = this;
  let o;
  return i;
  function i(a) {
    return e.enter("definition"), RS.call(
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
    ), a === 58 ? (e.enter("definitionMarker"), e.consume(a), e.exit("definitionMarker"), Ll(
      e,
      _S(
        e,
        e.attempt(
          M3,
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
function D3(e, t, n) {
  return r;
  function r(l) {
    return De(l) ? Ll(e, o)(l) : n(l);
  }
  function o(l) {
    return l === 34 || l === 39 || l === 40 ? IS(
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
const L3 = {
  name: "hardBreakEscape",
  tokenize: F3
};
function F3(e, t, n) {
  return r;
  function r(i) {
    return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(i), o;
  }
  function o(i) {
    return X(i) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(i)) : n(i);
  }
}
const z3 = {
  name: "headingAtx",
  tokenize: j3,
  resolve: B3
};
function B3(e, t) {
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
function j3(e, t, n) {
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
const H3 = [
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
], F1 = ["pre", "script", "style", "textarea"], V3 = {
  name: "htmlFlow",
  tokenize: q3,
  resolveTo: W3,
  concrete: !0
}, U3 = {
  tokenize: G3,
  partial: !0
};
function W3(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function q3(e, t, n) {
  const r = this;
  let o, i, l, s, a;
  return u;
  function u(C) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(C), c;
  }
  function c(C) {
    return C === 33 ? (e.consume(C), f) : C === 47 ? (e.consume(C), h) : C === 63 ? (e.consume(C), o = 3, r.interrupt ? t : T) : Vt(C) ? (e.consume(C), l = String.fromCharCode(C), i = !0, v) : n(C);
  }
  function f(C) {
    return C === 45 ? (e.consume(C), o = 2, d) : C === 91 ? (e.consume(C), o = 5, l = "CDATA[", s = 0, g) : Vt(C) ? (e.consume(C), o = 4, r.interrupt ? t : T) : n(C);
  }
  function d(C) {
    return C === 45 ? (e.consume(C), r.interrupt ? t : T) : n(C);
  }
  function g(C) {
    return C === l.charCodeAt(s++) ? (e.consume(C), s === l.length ? r.interrupt ? t : I : g) : n(C);
  }
  function h(C) {
    return Vt(C) ? (e.consume(C), l = String.fromCharCode(C), v) : n(C);
  }
  function v(C) {
    return C === null || C === 47 || C === 62 || De(C) ? C !== 47 && i && F1.includes(l.toLowerCase()) ? (o = 1, r.interrupt ? t(C) : I(C)) : H3.includes(l.toLowerCase()) ? (o = 6, C === 47 ? (e.consume(C), w) : r.interrupt ? t(C) : I(C)) : (o = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(C) : i ? y(C) : p(C)) : C === 45 || ct(C) ? (e.consume(C), l += String.fromCharCode(C), v) : n(C);
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
    return C === 62 ? (e.consume(C), _) : n(C);
  }
  function _(C) {
    return ve(C) ? (e.consume(C), _) : C === null || X(C) ? I(C) : n(C);
  }
  function I(C) {
    return C === 45 && o === 2 ? (e.consume(C), z) : C === 60 && o === 1 ? (e.consume(C), R) : C === 62 && o === 4 ? (e.consume(C), O) : C === 63 && o === 3 ? (e.consume(C), T) : C === 93 && o === 5 ? (e.consume(C), N) : X(C) && (o === 6 || o === 7) ? e.check(
      U3,
      O,
      M
    )(C) : C === null || X(C) ? M(C) : (e.consume(C), I);
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
    )(C) : (e.enter("htmlFlowData"), I(C));
  }
  function B(C, J, ne) {
    return se;
    function se(G) {
      return C.enter("lineEnding"), C.consume(G), C.exit("lineEnding"), ee;
    }
    function ee(G) {
      return r.parser.lazy[r.now().line] ? ne(G) : J(G);
    }
  }
  function z(C) {
    return C === 45 ? (e.consume(C), T) : I(C);
  }
  function R(C) {
    return C === 47 ? (e.consume(C), l = "", H) : I(C);
  }
  function H(C) {
    return C === 62 && F1.includes(l.toLowerCase()) ? (e.consume(C), O) : Vt(C) && l.length < 8 ? (e.consume(C), l += String.fromCharCode(C), H) : I(C);
  }
  function N(C) {
    return C === 93 ? (e.consume(C), T) : I(C);
  }
  function T(C) {
    return C === 62 ? (e.consume(C), O) : C === 45 && o === 2 ? (e.consume(C), T) : I(C);
  }
  function O(C) {
    return C === null || X(C) ? (e.exit("htmlFlowData"), k(C)) : (e.consume(C), O);
  }
  function k(C) {
    return e.exit("htmlFlow"), t(C);
  }
}
function G3(e, t, n) {
  return r;
  function r(o) {
    return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), e.attempt(js, t, n);
  }
}
const Q3 = {
  name: "htmlText",
  tokenize: K3
};
function K3(e, t, n) {
  const r = this;
  let o, i, l, s;
  return a;
  function a(k) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(k), u;
  }
  function u(k) {
    return k === 33 ? (e.consume(k), c) : k === 47 ? (e.consume(k), E) : k === 63 ? (e.consume(k), A) : Vt(k) ? (e.consume(k), _) : n(k);
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
    return k === 45 ? (e.consume(k), O) : h(k);
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
    return k === 62 ? O(k) : k === 93 ? (e.consume(k), x) : p(k);
  }
  function b(k) {
    return k === null || k === 62 ? O(k) : X(k) ? (s = b, N(k)) : (e.consume(k), b);
  }
  function A(k) {
    return k === null ? n(k) : k === 63 ? (e.consume(k), S) : X(k) ? (s = A, N(k)) : (e.consume(k), A);
  }
  function S(k) {
    return k === 62 ? O(k) : A(k);
  }
  function E(k) {
    return Vt(k) ? (e.consume(k), $) : n(k);
  }
  function $(k) {
    return k === 45 || ct(k) ? (e.consume(k), $) : P(k);
  }
  function P(k) {
    return X(k) ? (s = P, N(k)) : ve(k) ? (e.consume(k), P) : O(k);
  }
  function _(k) {
    return k === 45 || ct(k) ? (e.consume(k), _) : k === 47 || k === 62 || De(k) ? I(k) : n(k);
  }
  function I(k) {
    return k === 47 ? (e.consume(k), O) : k === 58 || k === 95 || Vt(k) ? (e.consume(k), M) : X(k) ? (s = I, N(k)) : ve(k) ? (e.consume(k), I) : O(k);
  }
  function M(k) {
    return k === 45 || k === 46 || k === 58 || k === 95 || ct(k) ? (e.consume(k), M) : L(k);
  }
  function L(k) {
    return k === 61 ? (e.consume(k), B) : X(k) ? (s = L, N(k)) : ve(k) ? (e.consume(k), L) : I(k);
  }
  function B(k) {
    return k === null || k === 60 || k === 61 || k === 62 || k === 96 ? n(k) : k === 34 || k === 39 ? (e.consume(k), o = k, z) : X(k) ? (s = B, N(k)) : ve(k) ? (e.consume(k), B) : (e.consume(k), o = void 0, H);
  }
  function z(k) {
    return k === o ? (e.consume(k), R) : k === null ? n(k) : X(k) ? (s = z, N(k)) : (e.consume(k), z);
  }
  function R(k) {
    return k === 62 || k === 47 || De(k) ? I(k) : n(k);
  }
  function H(k) {
    return k === null || k === 34 || k === 39 || k === 60 || k === 61 || k === 96 ? n(k) : k === 62 || De(k) ? I(k) : (e.consume(k), H);
  }
  function N(k) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(k), e.exit("lineEnding"), ge(
      e,
      T,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
  }
  function T(k) {
    return e.enter("htmlTextData"), s(k);
  }
  function O(k) {
    return k === 62 ? (e.consume(k), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(k);
  }
}
const Jm = {
  name: "labelEnd",
  tokenize: t_,
  resolveTo: e_,
  resolveAll: J3
}, Y3 = {
  tokenize: n_
}, X3 = {
  tokenize: r_
}, Z3 = {
  tokenize: o_
};
function J3(e) {
  let t = -1, n;
  for (; ++t < e.length; )
    n = e[t][1], (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++);
  return e;
}
function e_(e, t) {
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
    Oc(
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
function t_(e, t, n) {
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
      Y3,
      t,
      l ? t : u
    )(c) : c === 91 ? e.attempt(
      X3,
      t,
      l ? e.attempt(Z3, t, u) : u
    )(c) : l ? t(c) : u(c);
  }
  function u(c) {
    return i._balanced = !0, n(c);
  }
}
function n_(e, t, n) {
  return r;
  function r(a) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(a), e.exit("resourceMarker"), Ll(e, o);
  }
  function o(a) {
    return a === 41 ? s(a) : _S(
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
    return De(a) ? Ll(e, l)(a) : s(a);
  }
  function l(a) {
    return a === 34 || a === 39 || a === 40 ? IS(
      e,
      Ll(e, s),
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
function r_(e, t, n) {
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
function o_(e, t, n) {
  return r;
  function r(i) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), o;
  }
  function o(i) {
    return i === 93 ? (e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), e.exit("reference"), t) : n(i);
  }
}
const i_ = {
  name: "labelStartImage",
  tokenize: l_,
  resolveAll: Jm.resolveAll
};
function l_(e, t, n) {
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
const s_ = {
  name: "labelStartLink",
  tokenize: a_,
  resolveAll: Jm.resolveAll
};
function a_(e, t, n) {
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
  tokenize: u_
};
function u_(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ge(e, t, "linePrefix");
  }
}
const eu = {
  name: "thematicBreak",
  tokenize: c_
};
function c_(e, t, n) {
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
  tokenize: p_,
  continuation: {
    tokenize: h_
  },
  exit: g_
}, f_ = {
  tokenize: v_,
  partial: !0
}, d_ = {
  tokenize: m_,
  partial: !0
};
function p_(e, t, n) {
  const r = this, o = r.events[r.events.length - 1];
  let i = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0, l = 0;
  return s;
  function s(g) {
    const h = r.containerState.type || (g === 42 || g === 43 || g === 45 ? "listUnordered" : "listOrdered");
    if (h === "listUnordered" ? !r.containerState.marker || g === r.containerState.marker : ju(g)) {
      if (r.containerState.type || (r.containerState.type = h, e.enter(h, {
        _container: !0
      })), h === "listUnordered")
        return e.enter("listItemPrefix"), g === 42 || g === 45 ? e.check(eu, n, u)(g) : u(g);
      if (!r.interrupt || g === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), a(g);
    }
    return n(g);
  }
  function a(g) {
    return ju(g) && ++l < 10 ? (e.consume(g), a) : (!r.interrupt || l < 2) && (r.containerState.marker ? g === r.containerState.marker : g === 41 || g === 46) ? (e.exit("listItemValue"), u(g)) : n(g);
  }
  function u(g) {
    return e.enter("listItemMarker"), e.consume(g), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || g, e.check(
      js,
      r.interrupt ? n : c,
      e.attempt(
        f_,
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
function h_(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(js, o, i);
  function o(s) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ge(
      e,
      t,
      "listItemIndent",
      r.containerState.size + 1
    )(s);
  }
  function i(s) {
    return r.containerState.furtherBlankLines || !ve(s) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(s)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(d_, t, l)(s));
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
function m_(e, t, n) {
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
function g_(e) {
  e.exit(this.containerState.type);
}
function v_(e, t, n) {
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
const z1 = {
  name: "setextUnderline",
  tokenize: x_,
  resolveTo: y_
};
function y_(e, t) {
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
function x_(e, t, n) {
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
const w_ = {
  tokenize: P_,
  partial: !0
};
function b_() {
  return {
    document: {
      [91]: {
        tokenize: $_,
        continuation: {
          tokenize: E_
        },
        exit: A_
      }
    },
    text: {
      [91]: {
        tokenize: C_
      },
      [93]: {
        add: "after",
        tokenize: S_,
        resolveTo: k_
      }
    }
  };
}
function S_(e, t, n) {
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
function k_(e, t) {
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
function C_(e, t, n) {
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
function $_(e, t, n) {
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
function E_(e, t, n) {
  return e.check(js, t, e.attempt(w_, t, n));
}
function A_(e) {
  e.exit("gfmFootnoteDefinition");
}
function P_(e, t, n) {
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
function __(e) {
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
              Oc(g, l.slice(u + 1, a), s)
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
      const v = Hu(u);
      if (h === 126)
        return f > 1 ? a(h) : (l.consume(h), f++, g);
      if (f < 2 && !n)
        return a(h);
      const w = l.exit("strikethroughSequenceTemporary"), p = Hu(h);
      return w._open = !p || p === 2 && Boolean(v), w._close = !v || v === 2 && Boolean(p), s(h);
    }
  }
}
const R_ = {
  flow: {
    null: {
      tokenize: T_,
      resolve: I_
    }
  }
}, B1 = {
  tokenize: O_,
  partial: !0
};
function I_(e, t) {
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
function T_(e, t, n) {
  const r = this, o = [];
  let i = 0, l, s;
  return a;
  function a(R) {
    return e.enter("table")._align = o, e.enter("tableHead"), e.enter("tableRow"), R === 124 ? u(R) : (i++, e.enter("temporaryTableCellContent"), d(R));
  }
  function u(R) {
    return e.enter("tableCellDivider"), e.consume(R), e.exit("tableCellDivider"), l = !0, c;
  }
  function c(R) {
    return R === null || X(R) ? h(R) : ve(R) ? (e.enter("whitespace"), e.consume(R), f) : (l && (l = void 0, i++), R === 124 ? u(R) : (e.enter("temporaryTableCellContent"), d(R)));
  }
  function f(R) {
    return ve(R) ? (e.consume(R), f) : (e.exit("whitespace"), c(R));
  }
  function d(R) {
    return R === null || R === 124 || De(R) ? (e.exit("temporaryTableCellContent"), c(R)) : (e.consume(R), R === 92 ? g : d);
  }
  function g(R) {
    return R === 92 || R === 124 ? (e.consume(R), d) : d(R);
  }
  function h(R) {
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
    return R === null || X(R) ? b(R) : ve(R) ? (e.enter("whitespace"), e.consume(R), w) : R === 45 ? (e.enter("tableDelimiterFiller"), e.consume(R), s = !0, o.push("none"), p) : R === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(R), e.exit("tableDelimiterAlignment"), o.push("left"), y) : R === 124 ? (e.enter("tableCellDivider"), e.consume(R), e.exit("tableCellDivider"), v) : n(R);
  }
  function w(R) {
    return ve(R) ? (e.consume(R), w) : (e.exit("whitespace"), v(R));
  }
  function p(R) {
    return R === 45 ? (e.consume(R), p) : (e.exit("tableDelimiterFiller"), R === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(R), e.exit("tableDelimiterAlignment"), o[o.length - 1] = o[o.length - 1] === "left" ? "center" : "right", x) : v(R));
  }
  function y(R) {
    return R === 45 ? (e.enter("tableDelimiterFiller"), e.consume(R), s = !0, p) : n(R);
  }
  function x(R) {
    return R === null || X(R) ? b(R) : ve(R) ? (e.enter("whitespace"), e.consume(R), w) : R === 124 ? (e.enter("tableCellDivider"), e.consume(R), e.exit("tableCellDivider"), v) : n(R);
  }
  function b(R) {
    return e.exit("tableDelimiterRow"), !s || i !== o.length ? n(R) : R === null ? A(R) : e.check(
      B1,
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
    return e.enter("tableRow"), R === 124 ? $(R) : (e.enter("temporaryTableCellContent"), I(R));
  }
  function $(R) {
    return e.enter("tableCellDivider"), e.consume(R), e.exit("tableCellDivider"), P;
  }
  function P(R) {
    return R === null || X(R) ? L(R) : ve(R) ? (e.enter("whitespace"), e.consume(R), _) : R === 124 ? $(R) : (e.enter("temporaryTableCellContent"), I(R));
  }
  function _(R) {
    return ve(R) ? (e.consume(R), _) : (e.exit("whitespace"), P(R));
  }
  function I(R) {
    return R === null || R === 124 || De(R) ? (e.exit("temporaryTableCellContent"), P(R)) : (e.consume(R), R === 92 ? M : I);
  }
  function M(R) {
    return R === 92 || R === 124 ? (e.consume(R), I) : I(R);
  }
  function L(R) {
    return e.exit("tableRow"), R === null ? B(R) : e.check(
      B1,
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
    return T;
    function T(k) {
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
function O_(e, t, n) {
  let r = 0;
  return o;
  function o(l) {
    return e.enter("check"), e.consume(l), i;
  }
  function i(l) {
    return l === -1 || l === 32 ? (e.consume(l), r++, r === 4 ? t : i) : l === null || De(l) ? t(l) : n(l);
  }
}
const M_ = {
  tokenize: D_
}, N_ = {
  text: {
    [91]: M_
  }
};
function D_(e, t, n) {
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
        tokenize: L_
      },
      t,
      n
    )(a) : n(a);
  }
}
function L_(e, t, n) {
  return ge(e, r, "whitespace");
  function r(o) {
    return o === null ? n(o) : t(o);
  }
}
function F_(e) {
  return gS([
    e3,
    b_(),
    __(e),
    R_,
    N_
  ]);
}
function z_(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const eg = function(e) {
  if (e == null)
    return V_;
  if (typeof e == "string")
    return H_(e);
  if (typeof e == "object")
    return Array.isArray(e) ? B_(e) : j_(e);
  if (typeof e == "function")
    return Mc(e);
  throw new Error("Expected function, string, or object as test");
};
function B_(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = eg(e[n]);
  return Mc(r);
  function r(...o) {
    let i = -1;
    for (; ++i < t.length; )
      if (t[i].call(this, ...o))
        return !0;
    return !1;
  }
}
function j_(e) {
  return Mc(t);
  function t(n) {
    let r;
    for (r in e)
      if (n[r] !== e[r])
        return !1;
    return !0;
  }
}
function H_(e) {
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
function V_() {
  return !0;
}
const U_ = !0, j1 = !1, W_ = "skip", TS = function(e, t, n, r) {
  typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
  const o = eg(t), i = r ? -1 : 1;
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
      if ((!t || o(s, a, u[u.length - 1] || null)) && (d = q_(n(s, u)), d[0] === j1))
        return d;
      if (s.children && d[0] !== W_)
        for (h = (r ? s.children.length : -1) + i, v = u.concat(s); h > -1 && h < s.children.length; ) {
          if (g = l(s.children[h], h, v)(), g[0] === j1)
            return g;
          h = typeof g[1] == "number" ? g[1] : h + i;
        }
      return d;
    }
  }
};
function q_(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [U_, e] : [e];
}
const G_ = {}.hasOwnProperty, Q_ = function(e, t, n, r) {
  let o, i;
  typeof t == "string" || t instanceof RegExp ? (i = [[t, n]], o = r) : (i = t, o = n), o || (o = {});
  const l = eg(o.ignore || []), s = K_(i);
  let a = -1;
  for (; ++a < s.length; )
    TS(e, "text", u);
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
function K_(e) {
  const t = [];
  if (typeof e != "object")
    throw new TypeError("Expected array or object as schema");
  if (Array.isArray(e)) {
    let n = -1;
    for (; ++n < e.length; )
      t.push([
        H1(e[n][0]),
        V1(e[n][1])
      ]);
  } else {
    let n;
    for (n in e)
      G_.call(e, n) && t.push([H1(n), V1(e[n])]);
  }
  return t;
}
function H1(e) {
  return typeof e == "string" ? new RegExp(z_(e), "g") : e;
}
function V1(e) {
  return typeof e == "function" ? e : () => e;
}
const Qf = "phrasing", Kf = ["autolink", "link", "image", "label"], Y_ = {
  transforms: [r4],
  enter: {
    literalAutolink: Z_,
    literalAutolinkEmail: Yf,
    literalAutolinkHttp: Yf,
    literalAutolinkWww: Yf
  },
  exit: {
    literalAutolink: n4,
    literalAutolinkEmail: t4,
    literalAutolinkHttp: J_,
    literalAutolinkWww: e4
  }
}, X_ = {
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
function Z_(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Yf(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function J_(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function e4(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.url = "http://" + this.sliceSerialize(e);
}
function t4(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function n4(e) {
  this.exit(e);
}
function r4(e) {
  Q_(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, o4],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, i4]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function o4(e, t, n, r, o) {
  let i = "";
  if (!OS(o) || (/^w/i.test(t) && (n = t + n, t = "", i = "http://"), !l4(n)))
    return !1;
  const l = s4(n + r);
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
function i4(e, t, n, r) {
  return !OS(r, !0) || /[-\d_]$/.test(n) ? !1 : {
    type: "link",
    title: null,
    url: "mailto:" + t + "@" + n,
    children: [{ type: "text", value: t + "@" + n }]
  };
}
function l4(e) {
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
  return (e.index === 0 || Ic(n) || Tc(n)) && (!t || n !== 47);
}
function MS(e, t) {
  const n = Number.parseInt(e, t);
  return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "\uFFFD" : String.fromCharCode(n);
}
const a4 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function NS(e) {
  return e.replace(a4, u4);
}
function u4(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const o = n.charCodeAt(1), i = o === 120 || o === 88;
    return MS(n.slice(i ? 2 : 1), i ? 16 : 10);
  }
  return Zm(n) || e;
}
function DS(e) {
  return e.label || !e.identifier ? e.label || "" : NS(e.identifier);
}
function c4(e, t, n) {
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
      i.move(f4(a, o[s + 1], e, t))
    );
  }
  return r.pop(), l.join("");
}
function f4(e, t, n, r) {
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
const d4 = /\r?\n|\r/g;
function p4(e, t) {
  const n = [];
  let r = 0, o = 0, i;
  for (; i = d4.exec(e); )
    l(e.slice(r, i.index)), n.push(i[0]), r = i.index + i[0].length, o++;
  return l(e.slice(r)), n.join("");
  function l(s) {
    n.push(t(s, o, !s));
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
function h4(e, t) {
  return U1(e, t.inConstruct, !0) && !U1(e, t.notInConstruct, !1);
}
function U1(e, t, n) {
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
  let s = -1;
  for (; ++s < e.unsafe.length; ) {
    const c = e.unsafe[s];
    if (!h4(e.stack, c))
      continue;
    const f = LS(c);
    let d;
    for (; d = f.exec(r); ) {
      const g = "before" in c || Boolean(c.atBreak), h = "after" in c, v = d.index + (g ? d[1].length : 0);
      o.includes(v) ? (l[v].before && !g && (l[v].before = !1), l[v].after && !h && (l[v].after = !1)) : (o.push(v), l[v] = { before: g, after: h });
    }
  }
  o.sort(m4);
  let a = n.before ? n.before.length : 0;
  const u = r.length - (n.after ? n.after.length : 0);
  for (s = -1; ++s < o.length; ) {
    const c = o[s];
    c < a || c >= u || c + 1 < u && o[s + 1] === c + 1 && l[c].after && !l[c + 1].before && !l[c + 1].after || o[s - 1] === c - 1 && l[c].before && !l[c - 1].before && !l[c - 1].after || (a !== c && i.push(W1(r.slice(a, c), "\\")), a = c, /[!-/:-@[-`{-~]/.test(r.charAt(c)) && (!n.encode || !n.encode.includes(r.charAt(c))) ? i.push("\\") : (i.push(
      "&#x" + r.charCodeAt(c).toString(16).toUpperCase() + ";"
    ), a++));
  }
  return i.push(W1(r.slice(a, u), n.after)), i.join("");
}
function m4(e, t) {
  return e - t;
}
function W1(e, t) {
  const n = /\\(?=[!-/:-@[-`{-~])/g, r = [], o = [], i = e + t;
  let l = -1, s = 0, a;
  for (; a = n.exec(i); )
    r.push(a.index);
  for (; ++l < r.length; )
    s !== r[l] && o.push(e.slice(s, r[l])), o.push("\\"), s = r[l];
  return o.push(e.slice(s)), o.join("");
}
function Nc(e) {
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
zS.peek = E4;
function g4() {
  return {
    enter: {
      gfmFootnoteDefinition: y4,
      gfmFootnoteDefinitionLabelString: x4,
      gfmFootnoteCall: S4,
      gfmFootnoteCallString: k4
    },
    exit: {
      gfmFootnoteDefinition: b4,
      gfmFootnoteDefinitionLabelString: w4,
      gfmFootnoteCall: $4,
      gfmFootnoteCallString: C4
    }
  };
}
function v4() {
  return {
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: A4, footnoteReference: zS }
  };
}
function y4(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function x4() {
  this.buffer();
}
function w4(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.label = t, n.identifier = pn(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function b4(e) {
  this.exit(e);
}
function S4(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function k4() {
  this.buffer();
}
function C4(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.label = t, n.identifier = pn(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function $4(e) {
  this.exit(e);
}
function zS(e, t, n, r) {
  const o = Nc(r);
  let i = o.move("[^");
  const l = n.enter("footnoteReference"), s = n.enter("reference");
  return i += o.move(
    FS(n, DS(e), {
      ...o.current(),
      before: i,
      after: "]"
    })
  ), s(), l(), i += o.move("]"), i;
}
function E4() {
  return "[";
}
function A4(e, t, n, r) {
  const o = Nc(r);
  let i = o.move("[^");
  const l = n.enter("footnoteDefinition"), s = n.enter("label");
  return i += o.move(
    FS(n, DS(e), {
      ...o.current(),
      before: i,
      after: "]"
    })
  ), s(), i += o.move(
    "]:" + (e.children && e.children.length > 0 ? " " : "")
  ), o.shift(4), i += o.move(
    p4(c4(e, n, o.current()), P4)
  ), l(), i;
}
function P4(e, t, n) {
  return t === 0 ? e : (n ? "" : "    ") + e;
}
function BS(e, t, n) {
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
const _4 = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
jS.peek = M4;
const R4 = {
  canContainEols: ["delete"],
  enter: { strikethrough: T4 },
  exit: { strikethrough: O4 }
}, I4 = {
  unsafe: [
    {
      character: "~",
      inConstruct: "phrasing",
      notInConstruct: _4
    }
  ],
  handlers: { delete: jS }
};
function T4(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function O4(e) {
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
function M4() {
  return "~";
}
HS.peek = N4;
function HS(e, t, n) {
  let r = e.value || "", o = "`", i = -1;
  for (; new RegExp("(^|[^`])" + o + "([^`]|$)").test(r); )
    o += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++i < n.unsafe.length; ) {
    const l = n.unsafe[i], s = LS(l);
    let a;
    if (!!l.atBreak)
      for (; a = s.exec(r); ) {
        let u = a.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(a.index + 1);
      }
  }
  return o + r + o;
}
function N4() {
  return "`";
}
function D4(e, t = {}) {
  const n = (t.align || []).concat(), r = t.stringLength || F4, o = [], i = [], l = [], s = [];
  let a = 0, u = -1;
  for (; ++u < e.length; ) {
    const h = [], v = [];
    let w = -1;
    for (e[u].length > a && (a = e[u].length); ++w < e[u].length; ) {
      const p = L4(e[u][w]);
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
      o[c] = q1(n[c]);
  else {
    const h = q1(n);
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
function L4(e) {
  return e == null ? "" : String(e);
}
function F4(e) {
  return e.length;
}
function q1(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
const z4 = {
  enter: {
    table: B4,
    tableData: G1,
    tableHeader: G1,
    tableRow: H4
  },
  exit: {
    codeText: V4,
    table: j4,
    tableData: Xf,
    tableHeader: Xf,
    tableRow: Xf
  }
};
function B4(e) {
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
function j4(e) {
  this.exit(e), this.setData("inTable");
}
function H4(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Xf(e) {
  this.exit(e);
}
function G1(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function V4(e) {
  let t = this.resume();
  this.getData("inTable") && (t = t.replace(/\\([\\|])/g, U4));
  const n = this.stack[this.stack.length - 1];
  n.value = t, this.exit(e);
}
function U4(e, t) {
  return t === "|" ? t : e;
}
function W4(e) {
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
    const p = v.enter("tableCell"), y = v.enter("phrasing"), x = BS(g, v, {
      ...w,
      before: i,
      after: i
    });
    return y(), p(), x;
  }
  function u(g, h) {
    return D4(g, {
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
    let w = HS(g, h, v);
    return v.stack.includes("tableCell") && (w = w.replace(/\|/g, "\\$&")), w;
  }
}
function q4(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function G4(e) {
  const t = e.options.listItemIndent || "tab";
  if (t === 1 || t === "1")
    return "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function Q4(e, t, n, r) {
  const o = G4(n);
  let i = n.bulletCurrent || q4(n);
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
const K4 = {
  exit: {
    taskListCheckValueChecked: Q1,
    taskListCheckValueUnchecked: Q1,
    paragraph: X4
  }
}, Y4 = {
  unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
  handlers: { listItem: Z4 }
};
function Q1(e) {
  const t = this.stack[this.stack.length - 2];
  t.checked = e.type === "taskListCheckValueChecked";
}
function X4(e) {
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
function Z4(e, t, n, r) {
  const o = e.children[0], i = typeof e.checked == "boolean" && o && o.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", s = Nc(r);
  i && s.move(l);
  let a = Q4(e, t, n, {
    ...r,
    ...s.current()
  });
  return i && (a = a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), a;
  function u(c) {
    return c + l;
  }
}
function J4() {
  return [
    Y_,
    g4(),
    R4,
    z4,
    K4
  ];
}
function eR(e) {
  return {
    extensions: [
      X_,
      v4(),
      I4,
      W4(e),
      Y4
    ]
  };
}
function tR(e = {}) {
  const t = this.data();
  n("micromarkExtensions", F_(e)), n("fromMarkdownExtensions", J4()), n("toMarkdownExtensions", eR(e));
  function n(r, o) {
    (t[r] ? t[r] : t[r] = []).push(o);
  }
}
const nR = {};
function rR(e, t) {
  const n = t || nR, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, o = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return VS(e, r, o);
}
function VS(e, t, n) {
  if (oR(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return K1(e.children, t, n);
  }
  return Array.isArray(e) ? K1(e, t, n) : "";
}
function K1(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; )
    r[o] = VS(e[o], t, n);
  return r.join("");
}
function oR(e) {
  return Boolean(e && typeof e == "object");
}
const iR = {
  tokenize: lR
};
function lR(e) {
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
const sR = {
  tokenize: aR
}, Y1 = {
  tokenize: uR
};
function aR(e) {
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
      Y1,
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
      Y1,
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
function uR(e, t, n) {
  return ge(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
const cR = {
  tokenize: fR
};
function fR(e) {
  const t = this, n = e.attempt(
    js,
    r,
    e.attempt(
      this.parser.constructs.flowInitial,
      o,
      ge(
        e,
        e.attempt(
          this.parser.constructs.flow,
          o,
          e.attempt(P3, o)
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
const dR = {
  resolveAll: WS()
}, pR = US("string"), hR = US("text");
function US(e) {
  return {
    tokenize: t,
    resolveAll: WS(
      e === "text" ? mR : void 0
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
function WS(e) {
  return t;
  function t(n, r) {
    let o = -1, i;
    for (; ++o <= n.length; )
      i === void 0 ? n[o] && n[o][1].type === "data" && (i = o, o++) : (!n[o] || n[o][1].type !== "data") && (o !== i + 2 && (n[i][1].end = n[o - 1][1].end, n.splice(i + 2, o - i - 2), o = i + 2), i = void 0);
    return e ? e(n, r) : n;
  }
}
function mR(e, t) {
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
function gR(e, t, n) {
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
    return l = Bt(l, I), w(), l[l.length - 1] !== null ? [] : ($(t, 0), u.events = Oc(i, u.events, u), u.events);
  }
  function d(I, M) {
    return yR(g(I), M);
  }
  function g(I) {
    return vR(l, I);
  }
  function h() {
    return Object.assign({}, r);
  }
  function v(I) {
    o[I.line] = I.column, _();
  }
  function w() {
    let I;
    for (; r._index < l.length; ) {
      const M = l[r._index];
      if (typeof M == "string")
        for (I = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === I && r._bufferIndex < M.length; )
          p(M.charCodeAt(r._bufferIndex));
      else
        p(M);
    }
  }
  function p(I) {
    c = c(I);
  }
  function y(I) {
    X(I) ? (r.line++, r.column = 1, r.offset += I === -3 ? 2 : 1, _()) : I !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = I;
  }
  function x(I, M) {
    const L = M || {};
    return L.type = I, L.start = h(), u.events.push(["enter", L, u]), s.push(L), L;
  }
  function b(I) {
    const M = s.pop();
    return M.end = h(), u.events.push(["exit", M, u]), M;
  }
  function A(I, M) {
    $(I, M.from);
  }
  function S(I, M) {
    M.restore();
  }
  function E(I, M) {
    return L;
    function L(B, z, R) {
      let H, N, T, O;
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
          return O = P(), T = ee, ee.partial || (u.currentConstruct = ee), ee.name && u.parser.constructs.disable.null.includes(ee.name) ? se() : ee.tokenize.call(
            M ? Object.assign(Object.create(u), M) : u,
            a,
            ne,
            se
          )(ie);
        }
      }
      function ne(ee) {
        return I(T, O), z;
      }
      function se(ee) {
        return O.restore(), ++N < H.length ? J(H[N]) : R;
      }
    }
  }
  function $(I, M) {
    I.resolveAll && !i.includes(I) && i.push(I), I.resolve && Rt(
      u.events,
      M,
      u.events.length - M,
      I.resolve(u.events.slice(M), u)
    ), I.resolveTo && (u.events = I.resolveTo(u.events, u));
  }
  function P() {
    const I = h(), M = u.previous, L = u.currentConstruct, B = u.events.length, z = Array.from(s);
    return {
      restore: R,
      from: B
    };
    function R() {
      r = I, u.previous = M, u.currentConstruct = L, u.events.length = B, s = z, _();
    }
  }
  function _() {
    r.line in o && r.column < 2 && (r.column = o[r.line], r.offset += o[r.line] - 1);
  }
}
function vR(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, o = t.end._index, i = t.end._bufferIndex;
  let l;
  return n === o ? l = [e[n].slice(r, i)] : (l = e.slice(n, o), r > -1 && (l[0] = l[0].slice(r)), i > 0 && l.push(e[o].slice(0, i))), l;
}
function yR(e, t) {
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
const xR = {
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
  [62]: $S
}, wR = {
  [91]: O3
}, bR = {
  [-2]: qf,
  [-1]: qf,
  [32]: qf
}, SR = {
  [35]: z3,
  [42]: eu,
  [45]: [z1, eu],
  [60]: V3,
  [61]: z1,
  [95]: eu,
  [96]: L1,
  [126]: L1
}, kR = {
  [38]: AS,
  [92]: ES
}, CR = {
  [-5]: Gf,
  [-4]: Gf,
  [-3]: Gf,
  [33]: i_,
  [38]: AS,
  [42]: Wp,
  [60]: [f3, Q3],
  [91]: s_,
  [92]: [L3, ES],
  [93]: Jm,
  [95]: Wp,
  [96]: k3
}, $R = {
  null: [Wp, dR]
}, ER = {
  null: [42, 95]
}, AR = {
  null: []
}, PR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  document: xR,
  contentInitial: wR,
  flowInitial: bR,
  flow: SR,
  string: kR,
  text: CR,
  insideSpan: $R,
  attentionMarkers: ER,
  disable: AR
}, Symbol.toStringTag, { value: "Module" }));
function _R(e = {}) {
  const t = gS(
    [PR].concat(e.extensions || [])
  ), n = {
    defined: [],
    lazy: {},
    constructs: t,
    content: r(iR),
    document: r(sR),
    flow: r(cR),
    string: r(pR),
    text: r(hR)
  };
  return n;
  function r(o) {
    return i;
    function i(l) {
      return gR(n, o, l);
    }
  }
}
const X1 = /[\0\t\n\r]/g;
function RR() {
  let e = 1, t = "", n = !0, r;
  return o;
  function o(i, l, s) {
    const a = [];
    let u, c, f, d, g;
    for (i = t + i.toString(l), f = 0, t = "", n && (i.charCodeAt(0) === 65279 && f++, n = void 0); f < i.length; ) {
      if (X1.lastIndex = f, u = X1.exec(i), d = u && u.index !== void 0 ? u.index : i.length, g = i.charCodeAt(d), !u) {
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
function IR(e) {
  for (; !PS(e); )
    ;
  return e;
}
function Fl(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Z1(e.position) : "start" in e || "end" in e ? Z1(e) : "line" in e || "column" in e ? qp(e) : "";
}
function qp(e) {
  return J1(e && e.line) + ":" + J1(e && e.column);
}
function Z1(e) {
  return qp(e && e.start) + "-" + qp(e && e.end);
}
function J1(e) {
  return e && typeof e == "number" ? e : 1;
}
const qS = {}.hasOwnProperty, TR = function(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), OR(n)(
    IR(
      _R(n).document().write(RR()(e, t, !0))
    )
  );
};
function OR(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: s(ir),
      autolinkProtocol: I,
      autolinkEmail: I,
      atxHeading: s(nr),
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
      emphasis: s(Wr),
      hardBreakEscape: s(rr),
      hardBreakTrailing: s(rr),
      htmlFlow: s(Zs, a),
      htmlFlowData: I,
      htmlText: s(Zs, a),
      htmlTextData: I,
      image: s(or),
      label: a,
      link: s(ir),
      listItem: s(lr),
      listItemValue: h,
      listOrdered: s(Gi, g),
      listUnordered: s(Gi),
      paragraph: s(sf),
      reference: se,
      referenceString: a,
      resourceDestinationString: a,
      resourceTitleString: a,
      setextHeading: s(nr),
      strong: s(af),
      thematicBreak: s(A2)
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
      image: c(T),
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
      qS.call(Zt, F[ke][1].type) && Zt[F[ke][1].type].call(
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
      (Zt[1] || ev).call(te, void 0, Zt[0]);
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
    let be = q - 1, ke = -1, Zt = !1, sr, Mn, Qi, Ki;
    for (; ++be <= te; ) {
      const Le = F[be];
      if (Le[1].type === "listUnordered" || Le[1].type === "listOrdered" || Le[1].type === "blockQuote" ? (Le[0] === "enter" ? ke++ : ke--, Ki = void 0) : Le[1].type === "lineEndingBlank" ? Le[0] === "enter" && (sr && !Ki && !ke && !Qi && (Qi = be), Ki = void 0) : Le[1].type === "linePrefix" || Le[1].type === "listItemValue" || Le[1].type === "listItemMarker" || Le[1].type === "listItemPrefix" || Le[1].type === "listItemPrefixWhitespace" || (Ki = void 0), !ke && Le[0] === "enter" && Le[1].type === "listItemPrefix" || ke === -1 && Le[0] === "exit" && (Le[1].type === "listUnordered" || Le[1].type === "listOrdered")) {
        if (sr) {
          let uf = be;
          for (Mn = void 0; uf--; ) {
            const Nn = F[uf];
            if (Nn[1].type === "lineEnding" || Nn[1].type === "lineEndingBlank") {
              if (Nn[0] === "exit")
                continue;
              Mn && (F[Mn][1].type = "lineEndingBlank", Zt = !0), Nn[1].type = "lineEnding", Mn = uf;
            } else if (!(Nn[1].type === "linePrefix" || Nn[1].type === "blockQuotePrefix" || Nn[1].type === "blockQuotePrefixWhitespace" || Nn[1].type === "blockQuoteMarker" || Nn[1].type === "listItemIndent"))
              break;
          }
          Qi && (!Mn || Qi < Mn) && (sr._spread = !0), sr.end = Object.assign(
            {},
            Mn ? F[Mn][1].start : Le[1].end
          ), F.splice(Mn || be, 0, ["exit", sr, Le[2]]), be++, te++;
        }
        Le[1].type === "listItemPrefix" && (sr = {
          type: "listItem",
          _spread: !1,
          start: Object.assign({}, Le[1].start)
        }, F.splice(be, 0, ["enter", sr, Le[2]]), be++, te++, Qi = void 0, Ki = !0);
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
      be[0].type !== F.type && (q ? q.call(this, F, be[0]) : (be[1] || ev).call(this, F, be[0]));
    else
      throw new Error(
        "Cannot close `" + F.type + "` (" + Fl({
          start: F.start,
          end: F.end
        }) + "): it\u2019s not open"
      );
    return te.position.end = cr(F.end), te;
  }
  function d() {
    return rR(this.stack.pop());
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
  function _() {
    i("setextHeadingSlurpLineEnding");
  }
  function I(F) {
    const q = this.stack[this.stack.length - 1];
    let te = q.children[q.children.length - 1];
    (!te || te.type !== "text") && (te = E2(), te.position = {
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
    !l("setextHeadingSlurpLineEnding") && t.canContainEols.includes(q.type) && (I.call(this, F), M.call(this, F));
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
  function T() {
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
  function se() {
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
    ), i("characterReferenceType")) : be = Zm(q);
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
  function Zs() {
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
  function Gi(F) {
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
  function E2() {
    return {
      type: "text",
      value: ""
    };
  }
  function A2() {
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
    Array.isArray(r) ? GS(e, r) : MR(e, r);
  }
}
function MR(e, t) {
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
function ev(e, t) {
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
function NR(e) {
  Object.assign(this, { Parser: (n) => {
    const r = this.data("settings");
    return TR(
      n,
      Object.assign({}, r, e, {
        extensions: this.data("micromarkExtensions") || [],
        mdastExtensions: this.data("fromMarkdownExtensions") || []
      })
    );
  } });
}
function DR(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function LR(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function FR(e, t) {
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
function zR(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function BR(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function QS(e, t) {
  const n = String(t.identifier).toUpperCase(), r = zi(n.toLowerCase()), o = e.footnoteOrder.indexOf(n);
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
function jR(e, t) {
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
function HR(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function VR(e, t) {
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
function UR(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return KS(e, t);
  const r = { src: zi(n.url || ""), alt: t.alt };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const o = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function WR(e, t) {
  const n = { src: zi(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function qR(e, t) {
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
function GR(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return KS(e, t);
  const r = { href: zi(n.url || "") };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: r,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function QR(e, t) {
  const n = { href: zi(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function KR(e, t, n) {
  const r = e.all(t), o = n ? YR(n) : YS(t), i = {}, l = [];
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
function YR(e) {
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
function XR(e, t) {
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
function ZR(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function JR(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function e6(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const tg = XS("start"), ng = XS("end");
function t6(e) {
  return { start: tg(e), end: ng(e) };
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
function n6(e, t) {
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
    }, s = tg(t.children[1]), a = ng(t.children[t.children.length - 1]);
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
function r6(e, t, n) {
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
function o6(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const tv = 9, nv = 32;
function i6(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), o = 0;
  const i = [];
  for (; r; )
    i.push(
      rv(t.slice(o, r.index), o > 0, !0),
      r[0]
    ), o = r.index + r[0].length, r = n.exec(t);
  return i.push(rv(t.slice(o), o > 0, !1)), i.join("");
}
function rv(e, t, n) {
  let r = 0, o = e.length;
  if (t) {
    let i = e.codePointAt(r);
    for (; i === tv || i === nv; )
      r++, i = e.codePointAt(r);
  }
  if (n) {
    let i = e.codePointAt(o - 1);
    for (; i === tv || i === nv; )
      o--, i = e.codePointAt(o - 1);
  }
  return o > r ? e.slice(r, o) : "";
}
function l6(e, t) {
  const n = { type: "text", value: i6(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function s6(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const a6 = {
  blockquote: DR,
  break: LR,
  code: FR,
  delete: zR,
  emphasis: BR,
  footnoteReference: QS,
  footnote: jR,
  heading: HR,
  html: VR,
  imageReference: UR,
  image: WR,
  inlineCode: qR,
  linkReference: GR,
  link: QR,
  listItem: KR,
  list: XR,
  paragraph: ZR,
  root: JR,
  strong: e6,
  table: n6,
  tableCell: o6,
  tableRow: r6,
  text: l6,
  thematicBreak: s6,
  toml: ka,
  yaml: ka,
  definition: ka,
  footnoteDefinition: ka
};
function ka() {
  return null;
}
const ZS = function(e, t, n, r) {
  typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), TS(e, t, o, r);
  function o(i, l) {
    const s = l[l.length - 1];
    return n(
      i,
      s ? s.children.indexOf(i) : null,
      s
    );
  }
};
function u6(e) {
  return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column;
}
const ov = {}.hasOwnProperty;
function c6(e) {
  const t = /* @__PURE__ */ Object.create(null);
  if (!e || !e.type)
    throw new Error("mdast-util-definitions expected node");
  return ZS(e, "definition", (r) => {
    const o = iv(r.identifier);
    o && !ov.call(t, o) && (t[o] = r);
  }), n;
  function n(r) {
    const o = iv(r);
    return o && ov.call(t, o) ? t[o] : null;
  }
}
function iv(e) {
  return String(e || "").toUpperCase();
}
const Vu = {}.hasOwnProperty;
function f6(e, t) {
  const n = t || {}, r = n.allowDangerousHtml || !1, o = {};
  return l.dangerous = r, l.clobberPrefix = n.clobberPrefix === void 0 || n.clobberPrefix === null ? "user-content-" : n.clobberPrefix, l.footnoteLabel = n.footnoteLabel || "Footnotes", l.footnoteLabelTagName = n.footnoteLabelTagName || "h2", l.footnoteLabelProperties = n.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l.footnoteBackLabel = n.footnoteBackLabel || "Back to content", l.unknownHandler = n.unknownHandler, l.passThrough = n.passThrough, l.handlers = { ...a6, ...n.handlers }, l.definition = c6(e), l.footnoteById = o, l.footnoteOrder = [], l.footnoteCounts = {}, l.patch = d6, l.applyData = p6, l.one = s, l.all = a, l.wrap = m6, l.augment = i, ZS(e, "footnoteDefinition", (u) => {
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
      u6(f) || (c.position = { start: tg(f), end: ng(f) });
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
    return JS(l, u, c);
  }
  function a(u) {
    return rg(l, u);
  }
}
function d6(e, t) {
  e.position && (t.position = t6(e));
}
function p6(e, t) {
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
  return Vu.call(e.handlers, r) ? e.handlers[r](e, t, n) : e.passThrough && e.passThrough.includes(r) ? "children" in t ? { ...t, children: rg(e, t) } : t : e.unknownHandler ? e.unknownHandler(e, t, n) : h6(e, t);
}
function rg(e, t) {
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
function h6(e, t) {
  const n = t.data || {}, r = "value" in t && !(Vu.call(n, "hProperties") || Vu.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: rg(e, t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function m6(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function g6(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.footnoteOrder.length; ) {
    const r = e.footnoteById[e.footnoteOrder[n]];
    if (!r)
      continue;
    const o = e.all(r), i = String(r.identifier).toUpperCase(), l = zi(i.toLowerCase());
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
function ek(e, t) {
  const n = f6(e, t), r = n.one(e, null), o = g6(n);
  return o && r.children.push({ type: "text", value: `
` }, o), Array.isArray(r) ? { type: "root", children: r } : r;
}
const v6 = function(e, t) {
  return e && "run" in e ? x6(e, t) : w6(e || t);
}, y6 = v6;
function x6(e, t) {
  return (n, r, o) => {
    e.run(ek(n, t), r, (i) => {
      o(i);
    });
  };
}
function w6(e) {
  return (t) => ek(t, e);
}
var tk = typeof window < "u" ? window : {};
function b6() {
  var e = tk.DOMParser, t = !1;
  try {
    new e().parseFromString("", "text/html") && (t = !0);
  } catch {
  }
  return t;
}
function S6() {
  var e = function() {
  };
  return k6() ? e.prototype.parseFromString = function(t) {
    var n = new window.ActiveXObject("htmlfile");
    return n.designMode = "on", n.open(), n.write(t), n.close(), n;
  } : e.prototype.parseFromString = function(t) {
    var n = document.implementation.createHTMLDocument("");
    return n.open(), n.write(t), n.close(), n;
  }, e;
}
function k6() {
  var e = !1;
  try {
    document.implementation.createHTMLDocument("").open();
  } catch {
    window.ActiveXObject && (e = !0);
  }
  return e;
}
b6() ? tk.DOMParser : S6();
function lv(e) {
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
}, tu = Object.prototype.hasOwnProperty, rk = Object.prototype.toString, sv = Object.defineProperty, av = Object.getOwnPropertyDescriptor, uv = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : rk.call(t) === "[object Array]";
}, cv = function(t) {
  if (!t || rk.call(t) !== "[object Object]")
    return !1;
  var n = tu.call(t, "constructor"), r = t.constructor && t.constructor.prototype && tu.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var o;
  for (o in t)
    ;
  return typeof o > "u" || tu.call(t, o);
}, fv = function(t, n) {
  sv && n.name === "__proto__" ? sv(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, dv = function(t, n) {
  if (n === "__proto__")
    if (tu.call(t, n)) {
      if (av)
        return av(t, n).value;
    } else
      return;
  return t[n];
}, pv = function e() {
  var t, n, r, o, i, l, s = arguments[0], a = 1, u = arguments.length, c = !1;
  for (typeof s == "boolean" && (c = s, s = arguments[1] || {}, a = 2), (s == null || typeof s != "object" && typeof s != "function") && (s = {}); a < u; ++a)
    if (t = arguments[a], t != null)
      for (n in t)
        r = dv(s, n), o = dv(t, n), s !== o && (c && o && (cv(o) || (i = uv(o))) ? (i ? (i = !1, l = r && uv(r) ? r : []) : l = r && cv(r) ? r : {}, fv(s, { name: n, newValue: e(c, l, o) })) : typeof o < "u" && fv(s, { name: n, newValue: o }));
  return s;
};
function Gp(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function C6() {
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
      o = u, c ? $6(c, s)(...u) : l(null, ...u);
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
function $6(e, t) {
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
class Xt extends Error {
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
Xt.prototype.file = "";
Xt.prototype.name = "";
Xt.prototype.reason = "";
Xt.prototype.message = "";
Xt.prototype.stack = "";
Xt.prototype.fatal = null;
Xt.prototype.column = null;
Xt.prototype.line = null;
Xt.prototype.source = null;
Xt.prototype.ruleId = null;
Xt.prototype.position = null;
const yn = { basename: E6, dirname: A6, extname: P6, join: _6, sep: "/" };
function E6(e, t) {
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
function A6(e) {
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
function P6(e) {
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
function _6(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Hs(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : R6(n);
}
function R6(e) {
  Hs(e);
  const t = e.charCodeAt(0) === 47;
  let n = I6(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function I6(e, t) {
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
const T6 = { cwd: O6 };
function O6() {
  return "/";
}
function Qp(e) {
  return e !== null && typeof e == "object" && e.href && e.origin;
}
function M6(e) {
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
  return N6(e);
}
function N6(e) {
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
class D6 {
  constructor(t) {
    let n;
    t ? typeof t == "string" || L6(t) ? n = { value: t } : Qp(t) ? n = { path: t } : n = t : n = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = T6.cwd(), this.value, this.stored, this.result, this.map;
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
    Qp(t) && (t = M6(t)), ed(t, "path"), this.path !== t && this.history.push(t);
  }
  get dirname() {
    return typeof this.path == "string" ? yn.dirname(this.path) : void 0;
  }
  set dirname(t) {
    hv(this.basename, "dirname"), this.path = yn.join(t || "", this.basename);
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
    if (Jf(t, "extname"), hv(this.dirname, "extname"), t) {
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
    const o = new Xt(t, n, r);
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
function hv(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function L6(e) {
  return nk(e);
}
const F6 = ik().freeze(), ok = {}.hasOwnProperty;
function ik() {
  const e = C6(), t = [];
  let n = {}, r, o = -1;
  return i.data = l, i.Parser = void 0, i.Compiler = void 0, i.freeze = s, i.attachers = t, i.use = a, i.parse = u, i.stringify = c, i.run = f, i.runSync = d, i.process = g, i.processSync = h, i;
  function i() {
    const v = ik();
    let w = -1;
    for (; ++w < t.length; )
      v.use(...t[w]);
    return v.data(pv(!0, {}, n)), v;
  }
  function l(v, w) {
    return typeof v == "string" ? arguments.length === 2 ? (rd("data", r), n[v] = w, i) : ok.call(n, v) && n[v] || null : v ? (rd("data", r), n = v, i) : n;
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
      P ? (Gp(P[1]) && Gp(E) && (E = pv(!0, P[1], E)), P[1] = E) : t.push([...arguments]);
    }
  }
  function u(v) {
    i.freeze();
    const w = sl(v), p = i.Parser;
    return td("parse", p), mv(p, "parse") ? new p(String(w), w).parse() : p(String(w), w);
  }
  function c(v, w) {
    i.freeze();
    const p = sl(w), y = i.Compiler;
    return nd("stringify", y), gv(v), mv(y, "compile") ? new y(v, p).compile() : y(v, p);
  }
  function f(v, w, p) {
    if (gv(v), i.freeze(), !p && typeof w == "function" && (p = w, w = void 0), !p)
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
    return i.run(v, w, x), vv("runSync", "run", y), p;
    function x(b, A) {
      lv(b), p = A, y = !0;
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
          P == null || (j6(P) ? $.value = P : $.result = P), A(S, $);
        }
      });
      function A(S, E) {
        S || !E ? x(S) : y ? y(E) : w(null, E);
      }
    }
  }
  function h(v) {
    let w;
    i.freeze(), td("processSync", i.Parser), nd("processSync", i.Compiler);
    const p = sl(v);
    return i.process(p, y), vv("processSync", "process", w), p;
    function y(x) {
      w = !0, lv(x);
    }
  }
}
function mv(e, t) {
  return typeof e == "function" && e.prototype && (z6(e.prototype) || t in e.prototype);
}
function z6(e) {
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
function gv(e) {
  if (!Gp(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function vv(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function sl(e) {
  return B6(e) ? e : new D6(e);
}
function B6(e) {
  return Boolean(
    e && typeof e == "object" && "message" in e && "messages" in e
  );
}
function j6(e) {
  return typeof e == "string" || nk(e);
}
async function H6(e) {
  if (!e)
    return "";
  const t = await F6().use(NR).use(YP).use(tR).use(y6).use(DP).process(e);
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
var V6 = m.exports, U6 = Symbol.for("react.element"), W6 = Symbol.for("react.fragment"), q6 = Object.prototype.hasOwnProperty, G6 = V6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Q6 = { key: !0, ref: !0, __self: !0, __source: !0 };
function lk(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t)
    q6.call(t, r) && !Q6.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: U6, type: e, key: i, ref: l, props: o, _owner: G6.current };
}
Lc.Fragment = W6;
Lc.jsx = lk;
Lc.jsxs = lk;
(function(e) {
  e.exports = Lc;
})(Dc);
const Mt = Dc.exports.Fragment, D = Dc.exports.jsx, ue = Dc.exports.jsxs, K6 = ({
  content: e
}) => {
  const [t, n] = m.exports.useState("");
  return m.exports.useEffect(() => {
    H6(e).then((r) => {
      n(r);
    });
  }, [e]), t;
}, sk = (e) => {
  const t = K6(e);
  return /* @__PURE__ */ D("div", {
    className: "prose prose-sm prose-invert",
    dangerouslySetInnerHTML: {
      __html: t
    }
  });
}, Y6 = (e, t) => (n, r, o) => {
  const i = (l, s, a) => {
    const u = a === void 0 ? { type: "anonymous" } : typeof a == "string" ? { type: a } : a;
    console.group(`%c action: ${t.name} : ${u.type}`, "font-weight: bold;"), console.log("%c prev state:", "color: gray; font-weight: bold;", r()), console.log("%c action:", "color: #0066db; font-weight: bold;", u), n(l, s), console.log("%cnext state:", "color: #006b3b; font-weight: bold;", r()), console.groupEnd();
  };
  return o.setState = i, e(i, r, o);
}, og = Y6, X6 = {
  getItem: async (e) => (await ot.storage.local.get(e))[e],
  setItem(e, t) {
    return ot.storage.local.set({ [e]: t });
  },
  removeItem(e) {
    return ot.storage.local.remove(e);
  }
}, Z6 = {
  getItem: async (e) => (await ot.storage.sync.get(e))[e],
  setItem(e, t) {
    return ot.storage.sync.set({ [e]: t });
  },
  removeItem(e) {
    return ot.storage.sync.remove(e);
  }
}, yv = (e) => {
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
}, J6 = (e) => e ? yv(e) : yv;
var ak = { exports: {} }, uk = {}, ck = { exports: {} }, fk = {};
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
function eI(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var tI = typeof Object.is == "function" ? Object.is : eI, nI = Pi.useState, rI = Pi.useEffect, oI = Pi.useLayoutEffect, iI = Pi.useDebugValue;
function lI(e, t) {
  var n = t(), r = nI({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return oI(function() {
    o.value = n, o.getSnapshot = t, od(o) && i({ inst: o });
  }, [e, n, t]), rI(function() {
    return od(o) && i({ inst: o }), e(function() {
      od(o) && i({ inst: o });
    });
  }, [e]), iI(n), n;
}
function od(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !tI(e, n);
  } catch {
    return !0;
  }
}
function sI(e, t) {
  return t();
}
var aI = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? sI : lI;
fk.useSyncExternalStore = Pi.useSyncExternalStore !== void 0 ? Pi.useSyncExternalStore : aI;
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
var Fc = m.exports, uI = ck.exports;
function cI(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var fI = typeof Object.is == "function" ? Object.is : cI, dI = uI.useSyncExternalStore, pI = Fc.useRef, hI = Fc.useEffect, mI = Fc.useMemo, gI = Fc.useDebugValue;
uk.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = pI(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else
    l = i.current;
  i = mI(function() {
    function a(g) {
      if (!u) {
        if (u = !0, c = g, g = r(g), o !== void 0 && l.hasValue) {
          var h = l.value;
          if (o(h, g))
            return f = h;
        }
        return f = g;
      }
      if (h = f, fI(c, g))
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
  var s = dI(e, i[0], i[1]);
  return hI(function() {
    l.hasValue = !0, l.value = s;
  }, [s]), gI(s), s;
};
(function(e) {
  e.exports = uk;
})(ak);
const vI = /* @__PURE__ */ Mh(ak.exports), { useSyncExternalStoreWithSelector: yI } = vI;
function xI(e, t = e.getState, n) {
  const r = yI(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return m.exports.useDebugValue(r), r;
}
const xv = (e) => {
  ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? J6(e) : e, n = (r, o) => xI(t, r, o);
  return Object.assign(n, t), n;
}, ig = (e) => e ? xv(e) : xv;
function lg(e) {
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
}, wI = (e, t) => (n, r, o) => {
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
}, bI = (e, t) => (n, r, o) => {
  let i = {
    storage: lg(() => localStorage),
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
}, SI = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? (({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), wI(e, t)) : bI(e, t), dk = SI, yo = ig()(
  og(
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
          return o.find((s) => n.id === s.id) ? (o = o.map((s) => s.id === n.id ? {
            ...s,
            ...n
          } : s), {
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
        storage: lg(() => X6)
      }
    ),
    {
      name: "aiflow-message-store"
    }
  )
), En = ig()(
  og(
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
), pk = ig()(
  og(
    dk(
      (e) => ({
        set(t) {
          e(t, !1, "set");
        }
      }),
      { name: "user-config-store", storage: lg(() => Z6) }
    ),
    {
      name: "user-config-store"
    }
  )
), kI = ({
  message: e
}) => /* @__PURE__ */ ue("div", {
  className: Ai("text-mayumi-gray-1100 flex flex-col gap-2 p-4 text-sm", {
    "bg-mayumi-gray-200": e.role === "user",
    "bg-mayumi-gray-300": e.role === "assistant"
  }),
  children: [/* @__PURE__ */ D("div", {
    className: "flex-0 text-mayumi-gray-1200",
    children: e.role === "user" ? "You:" : "Assistant:"
  }), /* @__PURE__ */ D("div", {
    className: "flex-1",
    children: /* @__PURE__ */ D(sk, {
      content: e.text
    })
  })]
}), CI = () => {
  const {
    toggleHistoryOpen: e,
    historyOpen: t
  } = En(), {
    conventions: n
  } = yo(), [r, o] = m.exports.useState(null), i = bA({
    h: t ? 600 : 0,
    w: t ? 500 : 150,
    opacity: t ? 1 : 0,
    config: Hb.default
  }), l = Object.keys(n), s = r || l[0], a = s ? n[s] : [];
  return /* @__PURE__ */ ue(k1.div, {
    style: {
      opacity: i.opacity
    },
    className: "aiflow-chat leading-1em border-mayumi-gray-700 bg-mayumi-gray-200 fixed right-0 bottom-0 z-40 m-5 flex max-w-[500px] flex-col overflow-hidden rounded-lg border font-sans shadow-lg",
    children: [/* @__PURE__ */ ue("div", {
      onClick: () => {
        e();
      },
      className: Ai("flex-0 border-mayumi-gray-700 text-mayumi-gray-1100 hover:bg-mayumi-gray-400 flex cursor-pointer select-none items-center justify-between p-3", {
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
    }), /* @__PURE__ */ ue(k1.div, {
      style: {
        height: i.h,
        width: i.w
      },
      className: "flex",
      children: [/* @__PURE__ */ D("div", {
        className: "border-mayumi-gray-700 grid min-w-[150px] grid-flow-row auto-rows-max border-r p-2 font-semibold",
        children: l.map((u) => /* @__PURE__ */ D("div", {
          className: Ai("hover:bg-mayumi-blue-400 hover:text-mayumi-gray-1200 flex items-center rounded-md py-2 px-3 text-sm", {
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
        className: "aiflow-messages bg-mayumi-gray-300 flex-1 overflow-auto",
        children: a.map((u, c) => /* @__PURE__ */ D(kI, {
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
function $I(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function hk(...e) {
  return (t) => e.forEach(
    (n) => $I(n, t)
  );
}
function Ce(...e) {
  return m.exports.useCallback(hk(...e), e);
}
function Bi(e, t = []) {
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
    EI(o, ...t)
  ];
}
function EI(...e) {
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
const Xe = Boolean(globalThis == null ? void 0 : globalThis.document) ? m.exports.useLayoutEffect : () => {
}, AI = cx["useId".toString()] || (() => {
});
let PI = 0;
function mi(e) {
  const [t, n] = m.exports.useState(AI());
  return Xe(() => {
    e || n(
      (r) => r != null ? r : String(PI++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
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
function Uu({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = _I({
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
function _I({ defaultProp: e, onChange: t }) {
  const n = m.exports.useState(e), [r] = n, o = m.exports.useRef(r), i = rt(t);
  return m.exports.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
const _i = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = m.exports.Children.toArray(n), i = o.find(II);
  if (i) {
    const l = i.props.children, s = o.map((a) => a === i ? m.exports.Children.count(l) > 1 ? m.exports.Children.only(null) : /* @__PURE__ */ m.exports.isValidElement(l) ? l.props.children : null : a);
    return /* @__PURE__ */ m.exports.createElement(Kp, Z({}, r, {
      ref: t
    }), /* @__PURE__ */ m.exports.isValidElement(l) ? /* @__PURE__ */ m.exports.cloneElement(l, void 0, s) : null);
  }
  return /* @__PURE__ */ m.exports.createElement(Kp, Z({}, r, {
    ref: t
  }), n);
});
_i.displayName = "Slot";
const Kp = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ m.exports.isValidElement(n) ? /* @__PURE__ */ m.exports.cloneElement(n, {
    ...TI(r, n.props),
    ref: hk(t, n.ref)
  }) : m.exports.Children.count(n) > 1 ? m.exports.Children.only(null) : null;
});
Kp.displayName = "SlotClone";
const RI = ({ children: e }) => /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, e);
function II(e) {
  return /* @__PURE__ */ m.exports.isValidElement(e) && e.type === RI;
}
function TI(e, t) {
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
const OI = [
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
], Ve = OI.reduce((e, t) => {
  const n = /* @__PURE__ */ m.exports.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, s = i ? _i : t;
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
function MI(e, t) {
  e && Kt.exports.flushSync(
    () => e.dispatchEvent(t)
  );
}
function NI(e, t = globalThis == null ? void 0 : globalThis.document) {
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
const Yp = "dismissableLayer.update", DI = "dismissableLayer.pointerDownOutside", LI = "dismissableLayer.focusOutside";
let wv;
const FI = /* @__PURE__ */ m.exports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), sg = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: i, onFocusOutside: l, onInteractOutside: s, onDismiss: a, ...u } = e, c = m.exports.useContext(FI), [f, d] = m.exports.useState(null), g = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = m.exports.useState({}), v = Ce(
    t,
    ($) => d($)
  ), w = Array.from(c.layers), [p] = [
    ...c.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = w.indexOf(p), x = f ? w.indexOf(f) : -1, b = c.layersWithOutsidePointerEventsDisabled.size > 0, A = x >= y, S = zI(($) => {
    const P = $.target, _ = [
      ...c.branches
    ].some(
      (I) => I.contains(P)
    );
    !A || _ || (i == null || i($), s == null || s($), $.defaultPrevented || a == null || a());
  }, g), E = BI(($) => {
    const P = $.target;
    [
      ...c.branches
    ].some(
      (I) => I.contains(P)
    ) || (l == null || l($), s == null || s($), $.defaultPrevented || a == null || a());
  }, g);
  return NI(($) => {
    x === c.layers.size - 1 && (o == null || o($), !$.defaultPrevented && a && ($.preventDefault(), a()));
  }, g), m.exports.useEffect(() => {
    if (!!f)
      return r && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (wv = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), bv(), () => {
        r && c.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = wv);
      };
  }, [
    f,
    g,
    r,
    c
  ]), m.exports.useEffect(() => () => {
    !f || (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), bv());
  }, [
    f,
    c
  ]), m.exports.useEffect(() => {
    const $ = () => h({});
    return document.addEventListener(Yp, $), () => document.removeEventListener(Yp, $);
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
function zI(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rt(e), r = m.exports.useRef(!1), o = m.exports.useRef(() => {
  });
  return m.exports.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let c = function() {
          mk(DI, n, u, {
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
function BI(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rt(e), r = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && mk(LI, n, {
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
function bv() {
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
  }), r ? MI(o, i) : o.dispatchEvent(i);
}
const id = "focusScope.autoFocusOnMount", ld = "focusScope.autoFocusOnUnmount", Sv = {
  bubbles: !1,
  cancelable: !0
}, ag = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
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
      Cv.add(g);
      const v = document.activeElement;
      if (!s.contains(v)) {
        const p = new CustomEvent(id, Sv);
        s.addEventListener(id, u), s.dispatchEvent(p), p.defaultPrevented || (jI(qI(gk(s)), {
          select: !0
        }), document.activeElement === v && Xr(s));
      }
      return () => {
        s.removeEventListener(id, u), setTimeout(() => {
          const p = new CustomEvent(ld, Sv);
          s.addEventListener(ld, c), s.dispatchEvent(p), p.defaultPrevented || Xr(v != null ? v : document.body, {
            select: !0
          }), s.removeEventListener(ld, c), Cv.remove(g);
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
      const y = v.currentTarget, [x, b] = HI(y);
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
  return /* @__PURE__ */ m.exports.createElement(Ve.div, Z({
    tabIndex: -1
  }, l, {
    ref: d,
    onKeyDown: h
  }));
});
function jI(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Xr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function HI(e) {
  const t = gk(e), n = kv(t, e), r = kv(t.reverse(), e);
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
function kv(e, t) {
  for (const n of e)
    if (!VI(n, {
      upTo: t
    }))
      return n;
}
function VI(e, { upTo: t }) {
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
function UI(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Xr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && UI(e) && t && e.select();
  }
}
const Cv = WI();
function WI() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = $v(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = $v(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function $v(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function qI(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const vk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ db.createPortal(/* @__PURE__ */ m.exports.createElement(Ve.div, Z({}, o, {
    ref: t
  })), r) : null;
});
function GI(e, t) {
  return m.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const Hr = (e) => {
  const { present: t, children: n } = e, r = QI(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : m.exports.Children.only(n), i = Ce(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ m.exports.cloneElement(o, {
    ref: i
  }) : null;
};
Hr.displayName = "Presence";
function QI(e) {
  const [t, n] = m.exports.useState(), r = m.exports.useRef({}), o = m.exports.useRef(e), i = m.exports.useRef("none"), l = e ? "mounted" : "unmounted", [s, a] = GI(l, {
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
    const u = Ca(r.current);
    i.current = s === "mounted" ? u : "none";
  }, [
    s
  ]), Xe(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const d = i.current, g = Ca(u);
      e ? a("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(c && d !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    a
  ]), Xe(() => {
    if (t) {
      const u = (f) => {
        const g = Ca(r.current).includes(f.animationName);
        f.target === t && g && Kt.exports.flushSync(
          () => a("ANIMATION_END")
        );
      }, c = (f) => {
        f.target === t && (i.current = Ca(r.current));
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
function Ca(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let sd = 0;
function ug() {
  m.exports.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Ev()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Ev()), sd++, () => {
      sd === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), sd--;
    };
  }, []);
}
function Ev() {
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
function KI(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var nu = "right-scroll-bar-position", ru = "width-before-scroll-bar", YI = "with-scroll-bars-hidden", XI = "--removed-body-scroll-bar-size";
function ZI(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function JI(e, t) {
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
function eT(e, t) {
  return JI(t || null, function(n) {
    return e.forEach(function(r) {
      return ZI(r, n);
    });
  });
}
function tT(e) {
  return e;
}
function nT(e, t) {
  t === void 0 && (t = tT);
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
function rT(e) {
  e === void 0 && (e = {});
  var t = nT(null);
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
function oT(e, t) {
  return e.useMedium(t), xk;
}
var wk = rT(), ad = function() {
}, zc = m.exports.forwardRef(function(e, t) {
  var n = m.exports.useRef(null), r = m.exports.useState({
    onScrollCapture: ad,
    onWheelCapture: ad,
    onTouchMoveCapture: ad
  }), o = r[0], i = r[1], l = e.forwardProps, s = e.children, a = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, g = e.noIsolation, h = e.inert, v = e.allowPinchZoom, w = e.as, p = w === void 0 ? "div" : w, y = yk(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = d, b = eT([n, t]), A = Sn(Sn({}, y), o);
  return /* @__PURE__ */ ue(Mt, {
    children: [c && /* @__PURE__ */ D(x, {
      sideCar: wk,
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
zc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
zc.classNames = {
  fullWidth: ru,
  zeroRight: nu
};
var iT = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function lT() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = iT();
  return t && e.setAttribute("nonce", t), e;
}
function sT(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function aT(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var uT = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = lT()) && (sT(t, n), aT(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, cT = function() {
  var e = uT();
  return function(t, n) {
    m.exports.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, bk = function() {
  var e = cT(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, fT = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ud = function(e) {
  return parseInt(e || "", 10) || 0;
}, dT = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ud(n), ud(r), ud(o)];
}, pT = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return fT;
  var t = dT(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, hT = bk(), mT = function(e, t, n, r) {
  var o = e.left, i = e.top, l = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(YI, ` {
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
  
  .`).concat(nu, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(ru, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(nu, " .").concat(nu, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ru, " .").concat(ru, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(XI, ": ").concat(s, `px;
  }
`);
}, gT = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = m.exports.useMemo(function() {
    return pT(o);
  }, [o]);
  return /* @__PURE__ */ D(hT, {
    styles: mT(i, !t, o, n ? "" : "!important")
  });
}, Xp = !1;
if (typeof window < "u")
  try {
    var $a = Object.defineProperty({}, "passive", {
      get: function() {
        return Xp = !0, !0;
      }
    });
    window.addEventListener("test", $a, $a), window.removeEventListener("test", $a, $a);
  } catch {
    Xp = !1;
  }
var Oo = Xp ? { passive: !1 } : !1, vT = function(e) {
  return e.tagName === "TEXTAREA";
}, Sk = function(e, t) {
  var n = window.getComputedStyle(e);
  return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !vT(e) && n[t] === "visible");
}, yT = function(e) {
  return Sk(e, "overflowY");
}, xT = function(e) {
  return Sk(e, "overflowX");
}, Av = function(e, t) {
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
}, wT = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, bT = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, kk = function(e, t) {
  return e === "v" ? yT(t) : xT(t);
}, Ck = function(e, t) {
  return e === "v" ? wT(t) : bT(t);
}, ST = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, kT = function(e, t, n, r, o) {
  var i = ST(e, window.getComputedStyle(t).direction), l = i * r, s = n.target, a = t.contains(s), u = !1, c = l > 0, f = 0, d = 0;
  do {
    var g = Ck(e, s), h = g[0], v = g[1], w = g[2], p = v - w - i * h;
    (h || p) && kk(e, s) && (f += p, d += h), s = s.parentNode;
  } while (!a && s !== document.body || a && (t.contains(s) || t === s));
  return (c && (o && f === 0 || !o && l > f) || !c && (o && d === 0 || !o && -l > d)) && (u = !0), u;
}, Ea = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Pv = function(e) {
  return [e.deltaX, e.deltaY];
}, _v = function(e) {
  return e && "current" in e ? e.current : e;
}, CT = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, $T = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ET = 0, Mo = [];
function AT(e) {
  var t = m.exports.useRef([]), n = m.exports.useRef([0, 0]), r = m.exports.useRef(), o = m.exports.useState(ET++)[0], i = m.exports.useState(function() {
    return bk();
  })[0], l = m.exports.useRef(e);
  m.exports.useEffect(function() {
    l.current = e;
  }, [e]), m.exports.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = KI([e.lockRef.current], (e.shards || []).map(_v), !0).filter(Boolean);
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
    var p = Ea(v), y = n.current, x = "deltaX" in v ? v.deltaX : y[0] - p[0], b = "deltaY" in v ? v.deltaY : y[1] - p[1], A, S = v.target, E = Math.abs(x) > Math.abs(b) ? "h" : "v";
    if ("touches" in v && E === "h" && S.type === "range")
      return !1;
    var $ = Av(E, S);
    if (!$)
      return !0;
    if ($ ? A = E : (A = E === "v" ? "h" : "v", $ = Av(E, S)), !$)
      return !1;
    if (!r.current && "changedTouches" in v && (x || b) && (r.current = A), !A)
      return !0;
    var P = r.current || A;
    return kT(P, w, v, P === "h" ? x : b, !0);
  }, []), a = m.exports.useCallback(function(v) {
    var w = v;
    if (!(!Mo.length || Mo[Mo.length - 1] !== i)) {
      var p = "deltaY" in w ? Pv(w) : Ea(w), y = t.current.filter(function(A) {
        return A.name === w.type && A.target === w.target && CT(A.delta, p);
      })[0];
      if (y && y.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!y) {
        var x = (l.current.shards || []).map(_v).filter(Boolean).filter(function(A) {
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
    n.current = Ea(v), r.current = void 0;
  }, []), f = m.exports.useCallback(function(v) {
    u(v.type, Pv(v), v.target, s(v, e.lockRef.current));
  }, []), d = m.exports.useCallback(function(v) {
    u(v.type, Ea(v), v.target, s(v, e.lockRef.current));
  }, []);
  m.exports.useEffect(function() {
    return Mo.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", a, Oo), document.addEventListener("touchmove", a, Oo), document.addEventListener("touchstart", c, Oo), function() {
      Mo = Mo.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", a, Oo), document.removeEventListener("touchmove", a, Oo), document.removeEventListener("touchstart", c, Oo);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return /* @__PURE__ */ ue(Mt, {
    children: [h ? /* @__PURE__ */ D(i, {
      styles: $T(o)
    }) : null, g ? /* @__PURE__ */ D(gT, {
      gapMode: "margin"
    }) : null]
  });
}
const PT = oT(wk, AT);
var $k = m.exports.forwardRef(function(e, t) {
  return /* @__PURE__ */ D(zc, {
    ...Sn({}, e, {
      ref: t,
      sideCar: PT
    })
  });
});
$k.classNames = zc.classNames;
const Ek = $k;
var _T = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, No = /* @__PURE__ */ new WeakMap(), Aa = /* @__PURE__ */ new WeakMap(), Pa = {}, cd = 0, Ak = function(e) {
  return e && (e.host || Ak(e.parentNode));
}, RT = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ak(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, IT = function(e, t, n, r) {
  var o = RT(t, Array.isArray(e) ? e : [e]);
  Pa[n] || (Pa[n] = /* @__PURE__ */ new WeakMap());
  var i = Pa[n], l = [], s = /* @__PURE__ */ new Set(), a = new Set(o), u = function(f) {
    !f || s.has(f) || (s.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var c = function(f) {
    !f || a.has(f) || Array.prototype.forEach.call(f.children, function(d) {
      if (s.has(d))
        c(d);
      else {
        var g = d.getAttribute(r), h = g !== null && g !== "false", v = (No.get(d) || 0) + 1, w = (i.get(d) || 0) + 1;
        No.set(d, v), i.set(d, w), l.push(d), v === 1 && h && Aa.set(d, !0), w === 1 && d.setAttribute(n, "true"), h || d.setAttribute(r, "true");
      }
    });
  };
  return c(t), s.clear(), cd++, function() {
    l.forEach(function(f) {
      var d = No.get(f) - 1, g = i.get(f) - 1;
      No.set(f, d), i.set(f, g), d || (Aa.has(f) || f.removeAttribute(r), Aa.delete(f)), g || f.removeAttribute(n);
    }), cd--, cd || (No = /* @__PURE__ */ new WeakMap(), No = /* @__PURE__ */ new WeakMap(), Aa = /* @__PURE__ */ new WeakMap(), Pa = {});
  };
}, cg = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || _T(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), IT(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
const Pk = "Dialog", [_k, wz] = Bi(Pk), [TT, Vs] = _k(Pk), OT = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !0 } = e, s = m.exports.useRef(null), a = m.exports.useRef(null), [u = !1, c] = Uu({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(TT, {
    scope: t,
    triggerRef: s,
    contentRef: a,
    contentId: mi(),
    titleId: mi(),
    descriptionId: mi(),
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
}, Rk = "DialogPortal", [MT, NT] = _k(Rk, {
  forceMount: void 0
}), DT = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Vs(Rk, t);
  return /* @__PURE__ */ m.exports.createElement(MT, {
    scope: t,
    forceMount: n
  }, m.exports.Children.map(
    r,
    (l) => /* @__PURE__ */ m.exports.createElement(Hr, {
      present: n || i.open
    }, /* @__PURE__ */ m.exports.createElement(vk, {
      asChild: !0,
      container: o
    }, l))
  ));
}, ys = "DialogContent", LT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = NT(ys, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Vs(ys, e.__scopeDialog);
  return /* @__PURE__ */ m.exports.createElement(Hr, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement(FT, Z({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(zT, Z({}, o, {
    ref: t
  })));
}), FT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Vs(ys, e.__scopeDialog), r = m.exports.useRef(null), o = Ce(t, n.contentRef, r);
  return m.exports.useEffect(() => {
    const i = r.current;
    if (i)
      return cg(i);
  }, []), /* @__PURE__ */ m.exports.createElement(Ik, Z({}, e, {
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
}), zT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Vs(ys, e.__scopeDialog), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement(Ik, Z({}, e, {
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
}), Ik = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, s = Vs(ys, n), a = m.exports.useRef(null), u = Ce(t, a);
  return ug(), /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement(ag, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ m.exports.createElement(sg, Z({
    role: "dialog",
    id: s.contentId,
    "aria-describedby": s.descriptionId,
    "aria-labelledby": s.titleId,
    "data-state": BT(s.open)
  }, l, {
    ref: u,
    onDismiss: () => s.onOpenChange(!1)
  }))), !1);
});
function BT(e) {
  return e ? "open" : "closed";
}
const jT = OT, HT = DT, VT = LT;
function Eo(e) {
  return e.split("-")[0];
}
function Us(e) {
  return e.split("-")[1];
}
function ji(e) {
  return ["top", "bottom"].includes(Eo(e)) ? "x" : "y";
}
function fg(e) {
  return e === "y" ? "height" : "width";
}
function Rv(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = r.x + r.width / 2 - o.width / 2, l = r.y + r.height / 2 - o.height / 2, s = ji(t), a = fg(s), u = r[a] / 2 - o[a] / 2, c = Eo(t), f = s === "x";
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
  switch (Us(t)) {
    case "start":
      d[s] -= u * (n && f ? -1 : 1);
      break;
    case "end":
      d[s] += u * (n && f ? -1 : 1);
      break;
  }
  return d;
}
const UT = async (e, t, n) => {
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
  } = Rv(a, r, s), f = r, d = {}, g = 0;
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
      } = Rv(a, f, s)), h = -1;
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
function WT(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Tk(e) {
  return typeof e != "number" ? WT(e) : {
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
async function xs(e, t) {
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
  } = t, h = Tk(g), w = s[d ? f === "floating" ? "reference" : "floating" : f], p = Wu(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: a
  })), y = Wu(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const qT = Math.min, Zr = Math.max;
function Zp(e, t, n) {
  return Zr(e, qT(t, n));
}
const Iv = (e) => ({
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
    const u = Tk(r), c = {
      x: o,
      y: i
    }, f = ji(l), d = Us(l), g = fg(f), h = await a.getDimensions(n), v = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", p = s.reference[g] + s.reference[f] - c[f] - s.floating[g], y = c[f] - s.reference[f], x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(n));
    let b = x ? f === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
    b === 0 && (b = s.floating[g]);
    const A = p / 2 - y / 2, S = u[v], E = b - h[g] - u[w], $ = b / 2 - h[g] / 2 + A, P = Zp(S, $, E), M = (d === "start" ? u[v] : u[w]) > 0 && $ !== P && s.reference[g] <= s.floating[g] ? $ < S ? S - $ : E - $ : 0;
    return {
      [f]: c[f] - M,
      data: {
        [f]: P,
        centerOffset: $ - P
      }
    };
  }
}), GT = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function qu(e) {
  return e.replace(/left|right|bottom|top/g, (t) => GT[t]);
}
function QT(e, t, n) {
  n === void 0 && (n = !1);
  const r = Us(e), o = ji(e), i = fg(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = qu(l)), {
    main: l,
    cross: qu(l)
  };
}
const KT = {
  start: "end",
  end: "start"
};
function Tv(e) {
  return e.replace(/start|end/g, (t) => KT[t]);
}
const YT = ["top", "right", "bottom", "left"];
function XT(e) {
  const t = qu(e);
  return [Tv(e), t, Tv(t)];
}
const ZT = function(e) {
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
      } = e, v = Eo(r), p = f || (v === l || !g ? [qu(l)] : XT(l)), y = [l, ...p], x = await xs(t, h), b = [];
      let A = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (u && b.push(x[v]), c) {
        const {
          main: P,
          cross: _
        } = QT(r, i, await (s.isRTL == null ? void 0 : s.isRTL(a.floating)));
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
        let I = "bottom";
        switch (d) {
          case "bestFit": {
            var $;
            const M = ($ = A.map((L) => [L, L.overflows.filter((B) => B > 0).reduce((B, z) => B + z, 0)]).sort((L, B) => L[1] - B[1])[0]) == null ? void 0 : $[0].placement;
            M && (I = M);
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
function Ov(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Mv(e) {
  return YT.some((t) => e[t] >= 0);
}
const JT = function(e) {
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
          const i = await xs(r, {
            ...n,
            elementContext: "reference"
          }), l = Ov(i, o.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Mv(l)
            }
          };
        }
        case "escaped": {
          const i = await xs(r, {
            ...n,
            altBoundary: !0
          }), l = Ov(i, o.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Mv(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function eO(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = Eo(n), s = Us(n), a = ji(n) === "x", u = ["left", "top"].includes(l) ? -1 : 1, c = i && a ? -1 : 1, f = typeof t == "function" ? t(e) : t;
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
const tO = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await eO(t, e);
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
const nO = function(e) {
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
      }, c = await xs(t, a), f = ji(Eo(o)), d = Ok(f);
      let g = u[f], h = u[d];
      if (i) {
        const w = f === "y" ? "top" : "left", p = f === "y" ? "bottom" : "right", y = g + c[w], x = g - c[p];
        g = Zp(y, g, x);
      }
      if (l) {
        const w = d === "y" ? "top" : "left", p = d === "y" ? "bottom" : "right", y = h + c[w], x = h - c[p];
        h = Zp(y, h, x);
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
}, rO = function(e) {
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
      }, f = ji(o), d = Ok(f);
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
        const A = f === "y" ? "width" : "height", S = ["top", "left"].includes(Eo(o)), E = i.reference[d] - i.floating[A] + (S && (p = (y = l.offset) == null ? void 0 : y[d]) != null ? p : 0) + (S ? 0 : w.crossAxis), $ = i.reference[d] + i.reference[A] + (S ? 0 : (x = (b = l.offset) == null ? void 0 : b[d]) != null ? x : 0) - (S ? w.crossAxis : 0);
        h < E ? h = E : h > $ && (h = $);
      }
      return {
        [f]: g,
        [d]: h
      };
    }
  };
}, oO = function(e) {
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
      } = e, a = await xs(t, s), u = Eo(n), c = Us(n);
      let f, d;
      u === "top" || u === "bottom" ? (f = u, d = c === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (d = u, f = c === "end" ? "top" : "bottom");
      const g = Zr(a.left, 0), h = Zr(a.right, 0), v = Zr(a.top, 0), w = Zr(a.bottom, 0), p = {
        availableHeight: r.floating.height - (["left", "right"].includes(n) ? 2 * (v !== 0 || w !== 0 ? v + w : Zr(a.top, a.bottom)) : a[f]),
        availableWidth: r.floating.width - (["top", "bottom"].includes(n) ? 2 * (g !== 0 || h !== 0 ? g + h : Zr(a.left, a.right)) : a[d])
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
function Ws(e) {
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
function Lr(e) {
  return e instanceof er(e).Element;
}
function iO(e) {
  return e instanceof er(e).Node;
}
function dg(e) {
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
  } = Ws(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n);
}
function lO(e) {
  return ["table", "td", "th"].includes(Kn(e));
}
function Dk(e) {
  const t = /firefox/i.test(Nk()), n = Ws(e);
  return n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].includes(n.willChange) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1);
}
function Lk() {
  return !/^((?!chrome|android).)*safari/i.test(Nk());
}
const Nv = Math.min, zl = Math.max, Gu = Math.round;
function Yn(e, t, n) {
  var r, o, i, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect();
  let a = 1, u = 1;
  t && Pn(e) && (a = e.offsetWidth > 0 && Gu(s.width) / e.offsetWidth || 1, u = e.offsetHeight > 0 && Gu(s.height) / e.offsetHeight || 1);
  const c = Lr(e) ? er(e) : window, f = !Lk() && n, d = (s.left + (f && (r = (o = c.visualViewport) == null ? void 0 : o.offsetLeft) != null ? r : 0)) / a, g = (s.top + (f && (i = (l = c.visualViewport) == null ? void 0 : l.offsetTop) != null ? i : 0)) / u, h = s.width / a, v = s.height / u;
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
function Vr(e) {
  return ((iO(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function jc(e) {
  return Lr(e) ? {
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
function aO(e, t, n) {
  const r = Pn(t), o = Vr(t), i = Yn(
    e,
    r && sO(t),
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
    if ((Kn(t) !== "body" || Bc(o)) && (l = jc(t)), Pn(t)) {
      const a = Yn(t, !0);
      s.x = a.x + t.clientLeft, s.y = a.y + t.clientTop;
    } else
      o && (s.x = Fk(o));
  return {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function zk(e) {
  return Kn(e) === "html" ? e : e.assignedSlot || e.parentNode || (dg(e) ? e.host : null) || Vr(e);
}
function Dv(e) {
  return !Pn(e) || getComputedStyle(e).position === "fixed" ? null : e.offsetParent;
}
function uO(e) {
  let t = zk(e);
  for (dg(t) && (t = t.host); Pn(t) && !["html", "body"].includes(Kn(t)); ) {
    if (Dk(t))
      return t;
    t = t.parentNode;
  }
  return null;
}
function Jp(e) {
  const t = er(e);
  let n = Dv(e);
  for (; n && lO(n) && getComputedStyle(n).position === "static"; )
    n = Dv(n);
  return n && (Kn(n) === "html" || Kn(n) === "body" && getComputedStyle(n).position === "static" && !Dk(n)) ? t : n || uO(e) || t;
}
function Lv(e) {
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
function cO(e) {
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
  const s = {
    x: 0,
    y: 0
  };
  if ((o || !o && r !== "fixed") && ((Kn(n) !== "body" || Bc(i)) && (l = jc(n)), Pn(n))) {
    const a = Yn(n, !0);
    s.x = a.x + n.clientLeft, s.y = a.y + n.clientTop;
  }
  return {
    ...t,
    x: t.x - l.scrollLeft + s.x,
    y: t.y - l.scrollTop + s.y
  };
}
function fO(e, t) {
  const n = er(e), r = Vr(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, s = 0, a = 0;
  if (o) {
    i = o.width, l = o.height;
    const u = Lk();
    (u || !u && t === "fixed") && (s = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s,
    y: a
  };
}
function dO(e) {
  var t;
  const n = Vr(e), r = jc(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = zl(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = zl(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let s = -r.scrollLeft + Fk(e);
  const a = -r.scrollTop;
  return Ws(o || n).direction === "rtl" && (s += zl(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: l,
    x: s,
    y: a
  };
}
function Bk(e) {
  const t = zk(e);
  return ["html", "body", "#document"].includes(Kn(t)) ? e.ownerDocument.body : Pn(t) && Bc(t) ? t : Bk(t);
}
function Qu(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Bk(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = er(r), l = o ? [i].concat(i.visualViewport || [], Bc(r) ? r : []) : r, s = t.concat(l);
  return o ? s : s.concat(Qu(l));
}
function pO(e, t) {
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && dg(n)) {
    let r = t;
    do {
      if (r && e === r)
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function hO(e, t) {
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
function Fv(e, t, n) {
  return t === "viewport" ? Wu(fO(e, n)) : Lr(t) ? hO(t, n) : Wu(dO(Vr(e)));
}
function mO(e) {
  const t = Qu(e), r = ["absolute", "fixed"].includes(Ws(e).position) && Pn(e) ? Jp(e) : e;
  return Lr(r) ? t.filter((o) => Lr(o) && pO(o, r) && Kn(o) !== "body") : [];
}
function gO(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? mO(t) : [].concat(n), r], s = l[0], a = l.reduce((u, c) => {
    const f = Fv(t, c, o);
    return u.top = zl(f.top, u.top), u.right = Nv(f.right, u.right), u.bottom = Nv(f.bottom, u.bottom), u.left = zl(f.left, u.left), u;
  }, Fv(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
const vO = {
  getClippingRect: gO,
  convertOffsetParentRelativeRectToViewportRelativeRect: cO,
  isElement: Lr,
  getDimensions: Lv,
  getOffsetParent: Jp,
  getDocumentElement: Vr,
  getElementRects: (e) => {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    return {
      reference: aO(t, Jp(n), r),
      floating: {
        ...Lv(n),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => Ws(e).direction === "rtl"
};
function yO(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = !0,
    animationFrame: s = !1
  } = r, a = o && !s, u = i && !s, c = a || u ? [...Lr(e) ? Qu(e) : [], ...Qu(t)] : [];
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
    }), Lr(e) && !s && f.observe(e), f.observe(t);
  }
  let d, g = s ? Yn(e) : null;
  s && h();
  function h() {
    const v = Yn(e);
    g && (v.x !== g.x || v.y !== g.y || v.width !== g.width || v.height !== g.height) && n(), g = v, d = requestAnimationFrame(h);
  }
  return n(), () => {
    var v;
    c.forEach((w) => {
      a && w.removeEventListener("scroll", n), u && w.removeEventListener("resize", n);
    }), (v = f) == null || v.disconnect(), f = null, s && cancelAnimationFrame(d);
  };
}
const xO = (e, t, n) => UT(e, t, {
  platform: vO,
  ...n
});
var eh = typeof document < "u" ? m.exports.useLayoutEffect : m.exports.useEffect;
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
function wO(e) {
  const t = m.exports.useRef(e);
  return eh(() => {
    t.current = e;
  }), t;
}
function bO(e) {
  let {
    middleware: t,
    placement: n = "bottom",
    strategy: r = "absolute",
    whileElementsMounted: o
  } = e === void 0 ? {} : e;
  const i = m.exports.useRef(null), l = m.exports.useRef(null), s = wO(o), a = m.exports.useRef(null), [u, c] = m.exports.useState({
    x: null,
    y: null,
    strategy: r,
    placement: n,
    middlewareData: {}
  }), [f, d] = m.exports.useState(t);
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
  const g = m.exports.useCallback(() => {
    !i.current || !l.current || xO(i.current, l.current, {
      middleware: f,
      placement: n,
      strategy: r
    }).then((x) => {
      h.current && Kt.exports.flushSync(() => {
        c(x);
      });
    });
  }, [f, n, r]);
  eh(() => {
    h.current && g();
  }, [g]);
  const h = m.exports.useRef(!1);
  eh(() => (h.current = !0, () => {
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
const SO = (e) => {
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
      return r(t) ? t.current != null ? Iv({
        element: t.current,
        padding: n
      }).fn(o) : {} : t ? Iv({
        element: t,
        padding: n
      }).fn(o) : {};
    }
  };
};
function kO(e) {
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
const jk = "Popper", [pg, Hc] = Bi(jk), [CO, Hk] = pg(jk), $O = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.exports.useState(null);
  return /* @__PURE__ */ m.exports.createElement(CO, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, EO = "PopperAnchor", AO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, i = Hk(EO, n), l = m.exports.useRef(null), s = Ce(t, l);
  return m.exports.useEffect(() => {
    i.onAnchorChange((r == null ? void 0 : r.current) || l.current);
  }), r ? null : /* @__PURE__ */ m.exports.createElement(Ve.div, Z({}, o, {
    ref: s
  }));
}), Ku = "PopperContent", [PO, bz] = pg(Ku), [_O, RO] = pg(Ku, {
  hasParent: !1,
  positionUpdateFns: /* @__PURE__ */ new Set()
}), IO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n, r, o, i, l, s, a, u;
  const { __scopePopper: c, side: f = "bottom", sideOffset: d = 0, align: g = "center", alignOffset: h = 0, arrowPadding: v = 0, collisionBoundary: w = [], collisionPadding: p = 0, sticky: y = "partial", hideWhenDetached: x = !1, avoidCollisions: b = !0, onPlaced: A, ...S } = e, E = Hk(Ku, c), [$, P] = m.exports.useState(null), _ = Ce(
    t,
    (lr) => P(lr)
  ), [I, M] = m.exports.useState(null), L = kO(I), B = (n = L == null ? void 0 : L.width) !== null && n !== void 0 ? n : 0, z = (r = L == null ? void 0 : L.height) !== null && r !== void 0 ? r : 0, R = f + (g !== "center" ? "-" + g : ""), H = typeof p == "number" ? p : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...p
  }, N = Array.isArray(w) ? w : [
    w
  ], T = N.length > 0, O = {
    padding: H,
    boundary: N.filter(OO),
    altBoundary: T
  }, { reference: k, floating: C, strategy: J, x: ne, y: se, placement: ee, middlewareData: G, update: ie } = bO({
    strategy: "fixed",
    placement: R,
    whileElementsMounted: yO,
    middleware: [
      MO(),
      tO({
        mainAxis: d + z,
        alignmentAxis: h
      }),
      b ? nO({
        mainAxis: !0,
        crossAxis: !1,
        limiter: y === "partial" ? rO() : void 0,
        ...O
      }) : void 0,
      I ? SO({
        element: I,
        padding: v
      }) : void 0,
      b ? ZT({
        ...O
      }) : void 0,
      oO({
        ...O,
        apply: ({ elements: lr, availableWidth: sf, availableHeight: af }) => {
          lr.floating.style.setProperty("--radix-popper-available-width", `${sf}px`), lr.floating.style.setProperty("--radix-popper-available-height", `${af}px`);
        }
      }),
      NO({
        arrowWidth: B,
        arrowHeight: z
      }),
      x ? JT({
        strategy: "referenceHidden"
      }) : void 0
    ].filter(TO)
  });
  Xe(() => {
    k(E.anchor);
  }, [
    k,
    E.anchor
  ]);
  const xe = ne !== null && se !== null, [ce, de] = Vk(ee), ae = rt(A);
  Xe(() => {
    xe && (ae == null || ae());
  }, [
    xe,
    ae
  ]);
  const lt = (o = G.arrow) === null || o === void 0 ? void 0 : o.x, st = (i = G.arrow) === null || i === void 0 ? void 0 : i.y, Wr = ((l = G.arrow) === null || l === void 0 ? void 0 : l.centerOffset) !== 0, [nr, rr] = m.exports.useState();
  Xe(() => {
    $ && rr(window.getComputedStyle($).zIndex);
  }, [
    $
  ]);
  const { hasParent: Zs, positionUpdateFns: or } = RO(Ku, c), ir = !Zs;
  m.exports.useLayoutEffect(() => {
    if (!ir)
      return or.add(ie), () => {
        or.delete(ie);
      };
  }, [
    ir,
    or,
    ie
  ]), Xe(() => {
    ir && xe && Array.from(or).reverse().forEach(
      (lr) => requestAnimationFrame(lr)
    );
  }, [
    ir,
    xe,
    or
  ]);
  const Gi = {
    "data-side": ce,
    "data-align": de,
    ...S,
    ref: _,
    style: {
      ...S.style,
      animation: xe ? void 0 : "none",
      opacity: (s = G.hide) !== null && s !== void 0 && s.referenceHidden ? 0 : void 0
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
      zIndex: nr,
      ["--radix-popper-transform-origin"]: [
        (a = G.transformOrigin) === null || a === void 0 ? void 0 : a.x,
        (u = G.transformOrigin) === null || u === void 0 ? void 0 : u.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ m.exports.createElement(PO, {
    scope: c,
    placedSide: ce,
    onArrowChange: M,
    arrowX: lt,
    arrowY: st,
    shouldHideArrow: Wr
  }, ir ? /* @__PURE__ */ m.exports.createElement(_O, {
    scope: c,
    hasParent: !0,
    positionUpdateFns: or
  }, /* @__PURE__ */ m.exports.createElement(Ve.div, Gi)) : /* @__PURE__ */ m.exports.createElement(Ve.div, Gi)));
});
function TO(e) {
  return e !== void 0;
}
function OO(e) {
  return e !== null;
}
const MO = () => ({
  name: "anchorCssProperties",
  fn(e) {
    const { rects: t, elements: n } = e, { width: r, height: o } = t.reference;
    return n.floating.style.setProperty("--radix-popper-anchor-width", `${r}px`), n.floating.style.setProperty("--radix-popper-anchor-height", `${o}px`), {};
  }
}), NO = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, i, l;
    const { placement: s, rects: a, middlewareData: u } = t, f = ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, d = f ? 0 : e.arrowWidth, g = f ? 0 : e.arrowHeight, [h, v] = Vk(s), w = {
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
function Vk(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Uk = $O, Wk = AO, qk = IO, Gk = "Popover", [Qk, Sz] = Bi(Gk, [
  Hc
]), hg = Hc(), [DO, qs] = Qk(Gk), LO = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !1 } = e, s = hg(t), a = m.exports.useRef(null), [u, c] = m.exports.useState(!1), [f = !1, d] = Uu({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(Uk, s, /* @__PURE__ */ m.exports.createElement(DO, {
    scope: t,
    contentId: mi(),
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
}, FO = "PopoverTrigger", zO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopover: n, ...r } = e, o = qs(FO, n), i = hg(n), l = Ce(t, o.triggerRef), s = /* @__PURE__ */ m.exports.createElement(Ve.button, Z({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Yk(o.open)
  }, r, {
    ref: l,
    onClick: ye(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? s : /* @__PURE__ */ m.exports.createElement(Wk, Z({
    asChild: !0
  }, i), s);
}), BO = "PopoverPortal", [kz, jO] = Qk(BO, {
  forceMount: void 0
}), ws = "PopoverContent", HO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = jO(ws, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = qs(ws, e.__scopePopover);
  return /* @__PURE__ */ m.exports.createElement(Hr, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement(VO, Z({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(UO, Z({}, o, {
    ref: t
  })));
}), VO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = qs(ws, e.__scopePopover), r = m.exports.useRef(null), o = Ce(t, r), i = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const l = r.current;
    if (l)
      return cg(l);
  }, []), /* @__PURE__ */ m.exports.createElement(Ek, {
    as: _i,
    allowPinchZoom: !0
  }, /* @__PURE__ */ m.exports.createElement(Kk, Z({}, e, {
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
}), UO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = qs(ws, e.__scopePopover), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement(Kk, Z({}, e, {
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
}), Kk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, disableOutsidePointerEvents: l, onEscapeKeyDown: s, onPointerDownOutside: a, onFocusOutside: u, onInteractOutside: c, ...f } = e, d = qs(ws, n), g = hg(n);
  return ug(), /* @__PURE__ */ m.exports.createElement(ag, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ m.exports.createElement(sg, {
    asChild: !0,
    disableOutsidePointerEvents: l,
    onInteractOutside: c,
    onEscapeKeyDown: s,
    onPointerDownOutside: a,
    onFocusOutside: u,
    onDismiss: () => d.onOpenChange(!1)
  }, /* @__PURE__ */ m.exports.createElement(qk, Z({
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
const WO = LO, qO = zO, GO = HO;
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
function gi(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function QO(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Xk(...e) {
  return (t) => e.forEach(
    (n) => QO(n, t)
  );
}
function Gs(...e) {
  return m.exports.useCallback(Xk(...e), e);
}
function KO(e, t = []) {
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
    YO(o, ...t)
  ];
}
function YO(...e) {
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
const nh = Boolean(globalThis == null ? void 0 : globalThis.document) ? m.exports.useLayoutEffect : () => {
}, XO = cx["useId".toString()] || (() => {
});
let ZO = 0;
function fd(e) {
  const [t, n] = m.exports.useState(XO());
  return nh(() => {
    e || n(
      (r) => r != null ? r : String(ZO++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function xo(e) {
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
function JO({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = e7({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, l = i ? e : r, s = xo(n), a = m.exports.useCallback((u) => {
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
function e7({ defaultProp: e, onChange: t }) {
  const n = m.exports.useState(e), [r] = n, o = m.exports.useRef(r), i = xo(t);
  return m.exports.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
const mg = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = m.exports.Children.toArray(n), i = o.find(n7);
  if (i) {
    const l = i.props.children, s = o.map((a) => a === i ? m.exports.Children.count(l) > 1 ? m.exports.Children.only(null) : /* @__PURE__ */ m.exports.isValidElement(l) ? l.props.children : null : a);
    return /* @__PURE__ */ m.exports.createElement(rh, dt({}, r, {
      ref: t
    }), /* @__PURE__ */ m.exports.isValidElement(l) ? /* @__PURE__ */ m.exports.cloneElement(l, void 0, s) : null);
  }
  return /* @__PURE__ */ m.exports.createElement(rh, dt({}, r, {
    ref: t
  }), n);
});
mg.displayName = "Slot";
const rh = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ m.exports.isValidElement(n) ? /* @__PURE__ */ m.exports.cloneElement(n, {
    ...r7(r, n.props),
    ref: Xk(t, n.ref)
  }) : m.exports.Children.count(n) > 1 ? m.exports.Children.only(null) : null;
});
rh.displayName = "SlotClone";
const t7 = ({ children: e }) => /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, e);
function n7(e) {
  return /* @__PURE__ */ m.exports.isValidElement(e) && e.type === t7;
}
function r7(e, t) {
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
const o7 = [
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
], Vc = o7.reduce((e, t) => {
  const n = /* @__PURE__ */ m.exports.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, s = i ? mg : t;
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
function i7(e, t) {
  e && Kt.exports.flushSync(
    () => e.dispatchEvent(t)
  );
}
function l7(e) {
  const t = xo(e);
  m.exports.useEffect(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const oh = "dismissableLayer.update", s7 = "dismissableLayer.pointerDownOutside", a7 = "dismissableLayer.focusOutside";
let zv;
const u7 = /* @__PURE__ */ m.exports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), c7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: l, onDismiss: s, ...a } = e, u = m.exports.useContext(u7), [c, f] = m.exports.useState(null), [, d] = m.exports.useState({}), g = Gs(
    t,
    (S) => f(S)
  ), h = Array.from(u.layers), [v] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = h.indexOf(v), p = c ? h.indexOf(c) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, x = p >= w, b = f7((S) => {
    const E = S.target, $ = [
      ...u.branches
    ].some(
      (P) => P.contains(E)
    );
    !x || $ || (o == null || o(S), l == null || l(S), S.defaultPrevented || s == null || s());
  }), A = d7((S) => {
    const E = S.target;
    [
      ...u.branches
    ].some(
      (P) => P.contains(E)
    ) || (i == null || i(S), l == null || l(S), S.defaultPrevented || s == null || s());
  });
  return l7((S) => {
    p === u.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && s && (S.preventDefault(), s()));
  }), m.exports.useEffect(() => {
    if (!!c)
      return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (zv = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), Bv(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = zv);
      };
  }, [
    c,
    n,
    u
  ]), m.exports.useEffect(() => () => {
    !c || (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), Bv());
  }, [
    c,
    u
  ]), m.exports.useEffect(() => {
    const S = () => d({});
    return document.addEventListener(oh, S), () => document.removeEventListener(oh, S);
  }, []), /* @__PURE__ */ m.exports.createElement(Vc.div, dt({}, a, {
    ref: g,
    style: {
      pointerEvents: y ? x ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: gi(e.onFocusCapture, A.onFocusCapture),
    onBlurCapture: gi(e.onBlurCapture, A.onBlurCapture),
    onPointerDownCapture: gi(e.onPointerDownCapture, b.onPointerDownCapture)
  }));
});
function f7(e) {
  const t = xo(e), n = m.exports.useRef(!1), r = m.exports.useRef(() => {
  });
  return m.exports.useEffect(() => {
    const o = (l) => {
      if (l.target && !n.current) {
        let u = function() {
          Zk(s7, t, a, {
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
function d7(e) {
  const t = xo(e), n = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const r = (o) => {
      o.target && !n.current && Zk(a7, t, {
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
function Bv() {
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
  }), r ? i7(o, i) : o.dispatchEvent(i);
}
const dd = "focusScope.autoFocusOnMount", pd = "focusScope.autoFocusOnUnmount", jv = {
  bubbles: !1,
  cancelable: !0
}, p7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l } = e, [s, a] = m.exports.useState(null), u = xo(o), c = xo(i), f = m.exports.useRef(null), d = Gs(
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
        s.contains(b) ? f.current = b : Jr(f.current, {
          select: !0
        });
      }, y = function(x) {
        g.paused || !s || s.contains(x.relatedTarget) || Jr(f.current, {
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
      Vv.add(g);
      const v = document.activeElement;
      if (!s.contains(v)) {
        const p = new CustomEvent(dd, jv);
        s.addEventListener(dd, u), s.dispatchEvent(p), p.defaultPrevented || (h7(x7(Jk(s)), {
          select: !0
        }), document.activeElement === v && Jr(s));
      }
      return () => {
        s.removeEventListener(dd, u), setTimeout(() => {
          const p = new CustomEvent(pd, jv);
          s.addEventListener(pd, c), s.dispatchEvent(p), p.defaultPrevented || Jr(v != null ? v : document.body, {
            select: !0
          }), s.removeEventListener(pd, c), Vv.remove(g);
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
      const y = v.currentTarget, [x, b] = m7(y);
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
  return /* @__PURE__ */ m.exports.createElement(Vc.div, dt({
    tabIndex: -1
  }, l, {
    ref: d,
    onKeyDown: h
  }));
});
function h7(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Jr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function m7(e) {
  const t = Jk(e), n = Hv(t, e), r = Hv(t.reverse(), e);
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
function Hv(e, t) {
  for (const n of e)
    if (!g7(n, {
      upTo: t
    }))
      return n;
}
function g7(e, { upTo: t }) {
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
function v7(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Jr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && v7(e) && t && e.select();
  }
}
const Vv = y7();
function y7() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Uv(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Uv(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Uv(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function x7(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const w7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ db.createPortal(/* @__PURE__ */ m.exports.createElement(Vc.div, dt({}, o, {
    ref: t
  })), r) : null;
});
function b7(e, t) {
  return m.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const Uc = (e) => {
  const { present: t, children: n } = e, r = S7(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : m.exports.Children.only(n), i = Gs(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ m.exports.cloneElement(o, {
    ref: i
  }) : null;
};
Uc.displayName = "Presence";
function S7(e) {
  const [t, n] = m.exports.useState(), r = m.exports.useRef({}), o = m.exports.useRef(e), i = m.exports.useRef("none"), l = e ? "mounted" : "unmounted", [s, a] = b7(l, {
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
    const u = _a(r.current);
    i.current = s === "mounted" ? u : "none";
  }, [
    s
  ]), nh(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const d = i.current, g = _a(u);
      e ? a("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(c && d !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    a
  ]), nh(() => {
    if (t) {
      const u = (f) => {
        const g = _a(r.current).includes(f.animationName);
        f.target === t && g && Kt.exports.flushSync(
          () => a("ANIMATION_END")
        );
      }, c = (f) => {
        f.target === t && (i.current = _a(r.current));
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
function _a(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let hd = 0;
function k7() {
  m.exports.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Wv()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Wv()), hd++, () => {
      hd === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), hd--;
    };
  }, []);
}
function Wv() {
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
function C7(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var ou = "right-scroll-bar-position", iu = "width-before-scroll-bar", $7 = "with-scroll-bars-hidden", E7 = "--removed-body-scroll-bar-size";
function A7(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function P7(e, t) {
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
function _7(e, t) {
  return P7(t || null, function(n) {
    return e.forEach(function(r) {
      return A7(r, n);
    });
  });
}
function R7(e) {
  return e;
}
function I7(e, t) {
  t === void 0 && (t = R7);
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
function T7(e) {
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
function O7(e, t) {
  return e.useMedium(t), tC;
}
var nC = T7(), md = function() {
}, Wc = m.exports.forwardRef(function(e, t) {
  var n = m.exports.useRef(null), r = m.exports.useState({
    onScrollCapture: md,
    onWheelCapture: md,
    onTouchMoveCapture: md
  }), o = r[0], i = r[1], l = e.forwardProps, s = e.children, a = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, g = e.noIsolation, h = e.inert, v = e.allowPinchZoom, w = e.as, p = w === void 0 ? "div" : w, y = eC(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = d, b = _7([n, t]), A = kn(kn({}, y), o);
  return /* @__PURE__ */ ue(Mt, {
    children: [c && /* @__PURE__ */ D(x, {
      sideCar: nC,
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
Wc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Wc.classNames = {
  fullWidth: iu,
  zeroRight: ou
};
var M7 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function N7() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = M7();
  return t && e.setAttribute("nonce", t), e;
}
function D7(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function L7(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var F7 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = N7()) && (D7(t, n), L7(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, z7 = function() {
  var e = F7();
  return function(t, n) {
    m.exports.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, rC = function() {
  var e = z7(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, B7 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, gd = function(e) {
  return parseInt(e || "", 10) || 0;
}, j7 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [gd(n), gd(r), gd(o)];
}, H7 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return B7;
  var t = j7(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, V7 = rC(), U7 = function(e, t, n, r) {
  var o = e.left, i = e.top, l = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat($7, ` {
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
  
  .`).concat(ou, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(iu, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(ou, " .").concat(ou, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(iu, " .").concat(iu, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(E7, ": ").concat(s, `px;
  }
`);
}, W7 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = m.exports.useMemo(function() {
    return H7(o);
  }, [o]);
  return /* @__PURE__ */ D(V7, {
    styles: U7(i, !t, o, n ? "" : "!important")
  });
}, ih = !1;
if (typeof window < "u")
  try {
    var Ra = Object.defineProperty({}, "passive", {
      get: function() {
        return ih = !0, !0;
      }
    });
    window.addEventListener("test", Ra, Ra), window.removeEventListener("test", Ra, Ra);
  } catch {
    ih = !1;
  }
var Do = ih ? { passive: !1 } : !1, q7 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, G7 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, qv = function(e, t) {
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
}, Q7 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, K7 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, oC = function(e, t) {
  return e === "v" ? q7(t) : G7(t);
}, iC = function(e, t) {
  return e === "v" ? Q7(t) : K7(t);
}, Y7 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, X7 = function(e, t, n, r, o) {
  var i = Y7(e, window.getComputedStyle(t).direction), l = i * r, s = n.target, a = t.contains(s), u = !1, c = l > 0, f = 0, d = 0;
  do {
    var g = iC(e, s), h = g[0], v = g[1], w = g[2], p = v - w - i * h;
    (h || p) && oC(e, s) && (f += p, d += h), s = s.parentNode;
  } while (!a && s !== document.body || a && (t.contains(s) || t === s));
  return (c && (o && f === 0 || !o && l > f) || !c && (o && d === 0 || !o && -l > d)) && (u = !0), u;
}, Ia = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Gv = function(e) {
  return [e.deltaX, e.deltaY];
}, Qv = function(e) {
  return e && "current" in e ? e.current : e;
}, Z7 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, J7 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, e8 = 0, Lo = [];
function t8(e) {
  var t = m.exports.useRef([]), n = m.exports.useRef([0, 0]), r = m.exports.useRef(), o = m.exports.useState(e8++)[0], i = m.exports.useState(function() {
    return rC();
  })[0], l = m.exports.useRef(e);
  m.exports.useEffect(function() {
    l.current = e;
  }, [e]), m.exports.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = C7([e.lockRef.current], (e.shards || []).map(Qv), !0).filter(Boolean);
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
    var p = Ia(v), y = n.current, x = "deltaX" in v ? v.deltaX : y[0] - p[0], b = "deltaY" in v ? v.deltaY : y[1] - p[1], A, S = v.target, E = Math.abs(x) > Math.abs(b) ? "h" : "v";
    if ("touches" in v && E === "h" && S.type === "range")
      return !1;
    var $ = qv(E, S);
    if (!$)
      return !0;
    if ($ ? A = E : (A = E === "v" ? "h" : "v", $ = qv(E, S)), !$)
      return !1;
    if (!r.current && "changedTouches" in v && (x || b) && (r.current = A), !A)
      return !0;
    var P = r.current || A;
    return X7(P, w, v, P === "h" ? x : b, !0);
  }, []), a = m.exports.useCallback(function(v) {
    var w = v;
    if (!(!Lo.length || Lo[Lo.length - 1] !== i)) {
      var p = "deltaY" in w ? Gv(w) : Ia(w), y = t.current.filter(function(A) {
        return A.name === w.type && A.target === w.target && Z7(A.delta, p);
      })[0];
      if (y && y.should) {
        w.preventDefault();
        return;
      }
      if (!y) {
        var x = (l.current.shards || []).map(Qv).filter(Boolean).filter(function(A) {
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
    n.current = Ia(v), r.current = void 0;
  }, []), f = m.exports.useCallback(function(v) {
    u(v.type, Gv(v), v.target, s(v, e.lockRef.current));
  }, []), d = m.exports.useCallback(function(v) {
    u(v.type, Ia(v), v.target, s(v, e.lockRef.current));
  }, []);
  m.exports.useEffect(function() {
    return Lo.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", a, Do), document.addEventListener("touchmove", a, Do), document.addEventListener("touchstart", c, Do), function() {
      Lo = Lo.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", a, Do), document.removeEventListener("touchmove", a, Do), document.removeEventListener("touchstart", c, Do);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return /* @__PURE__ */ ue(Mt, {
    children: [h ? /* @__PURE__ */ D(i, {
      styles: J7(o)
    }) : null, g ? /* @__PURE__ */ D(W7, {
      gapMode: "margin"
    }) : null]
  });
}
const n8 = O7(nC, t8);
var lC = m.exports.forwardRef(function(e, t) {
  return /* @__PURE__ */ D(Wc, {
    ...kn({}, e, {
      ref: t,
      sideCar: n8
    })
  });
});
lC.classNames = Wc.classNames;
const r8 = lC;
var o8 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Fo = /* @__PURE__ */ new WeakMap(), Ta = /* @__PURE__ */ new WeakMap(), Oa = {}, vd = 0, i8 = function(e, t, n) {
  t === void 0 && (t = o8(e)), n === void 0 && (n = "data-aria-hidden");
  var r = Array.isArray(e) ? e : [e];
  Oa[n] || (Oa[n] = /* @__PURE__ */ new WeakMap());
  var o = Oa[n], i = [], l = /* @__PURE__ */ new Set(), s = function(u) {
    !u || l.has(u) || (l.add(u), s(u.parentNode));
  };
  r.forEach(s);
  var a = function(u) {
    !u || r.indexOf(u) >= 0 || Array.prototype.forEach.call(u.children, function(c) {
      if (l.has(c))
        a(c);
      else {
        var f = c.getAttribute("aria-hidden"), d = f !== null && f !== "false", g = (Fo.get(c) || 0) + 1, h = (o.get(c) || 0) + 1;
        Fo.set(c, g), o.set(c, h), i.push(c), g === 1 && d && Ta.set(c, !0), h === 1 && c.setAttribute(n, "true"), d || c.setAttribute("aria-hidden", "true");
      }
    });
  };
  return a(t), l.clear(), vd++, function() {
    i.forEach(function(u) {
      var c = Fo.get(u) - 1, f = o.get(u) - 1;
      Fo.set(u, c), o.set(u, f), c || (Ta.has(u) || u.removeAttribute("aria-hidden"), Ta.delete(u)), f || u.removeAttribute(n);
    }), vd--, vd || (Fo = /* @__PURE__ */ new WeakMap(), Fo = /* @__PURE__ */ new WeakMap(), Ta = /* @__PURE__ */ new WeakMap(), Oa = {});
  };
};
const sC = "Dialog", [aC, Cz] = KO(sC), [l8, Ao] = aC(sC), s8 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !0 } = e, s = m.exports.useRef(null), a = m.exports.useRef(null), [u = !1, c] = JO({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(l8, {
    scope: t,
    triggerRef: s,
    contentRef: a,
    contentId: fd(),
    titleId: fd(),
    descriptionId: fd(),
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
}, uC = "DialogPortal", [a8, cC] = aC(uC, {
  forceMount: void 0
}), u8 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Ao(uC, t);
  return /* @__PURE__ */ m.exports.createElement(a8, {
    scope: t,
    forceMount: n
  }, m.exports.Children.map(
    r,
    (l) => /* @__PURE__ */ m.exports.createElement(Uc, {
      present: n || i.open
    }, /* @__PURE__ */ m.exports.createElement(w7, {
      asChild: !0,
      container: o
    }, l))
  ));
}, lh = "DialogOverlay", c8 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = cC(lh, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Ao(lh, e.__scopeDialog);
  return i.modal ? /* @__PURE__ */ m.exports.createElement(Uc, {
    present: r || i.open
  }, /* @__PURE__ */ m.exports.createElement(f8, dt({}, o, {
    ref: t
  }))) : null;
}), f8 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Ao(lh, n);
  return /* @__PURE__ */ m.exports.createElement(r8, {
    as: mg,
    allowPinchZoom: !0,
    shards: [
      o.contentRef
    ]
  }, /* @__PURE__ */ m.exports.createElement(Vc.div, dt({
    "data-state": dC(o.open)
  }, r, {
    ref: t,
    style: {
      pointerEvents: "auto",
      ...r.style
    }
  })));
}), bs = "DialogContent", d8 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = cC(bs, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Ao(bs, e.__scopeDialog);
  return /* @__PURE__ */ m.exports.createElement(Uc, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement(p8, dt({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(h8, dt({}, o, {
    ref: t
  })));
}), p8 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Ao(bs, e.__scopeDialog), r = m.exports.useRef(null), o = Gs(t, n.contentRef, r);
  return m.exports.useEffect(() => {
    const i = r.current;
    if (i)
      return i8(i);
  }, []), /* @__PURE__ */ m.exports.createElement(fC, dt({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: gi(e.onCloseAutoFocus, (i) => {
      var l;
      i.preventDefault(), (l = n.triggerRef.current) === null || l === void 0 || l.focus();
    }),
    onPointerDownOutside: gi(e.onPointerDownOutside, (i) => {
      const l = i.detail.originalEvent, s = l.button === 0 && l.ctrlKey === !0;
      (l.button === 2 || s) && i.preventDefault();
    }),
    onFocusOutside: gi(
      e.onFocusOutside,
      (i) => i.preventDefault()
    )
  }));
}), h8 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Ao(bs, e.__scopeDialog), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement(fC, dt({}, e, {
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
}), fC = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, s = Ao(bs, n), a = m.exports.useRef(null), u = Gs(t, a);
  return k7(), /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement(p7, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ m.exports.createElement(c7, dt({
    role: "dialog",
    id: s.contentId,
    "aria-describedby": s.descriptionId,
    "aria-labelledby": s.titleId,
    "data-state": dC(s.open)
  }, l, {
    ref: u,
    onDismiss: () => s.onOpenChange(!1)
  }))), !1);
});
function dC(e) {
  return e ? "open" : "closed";
}
const m8 = s8, g8 = u8, v8 = c8, y8 = d8;
var Kv = 1, x8 = 0.9, w8 = 0.3, yd = 0.1, b8 = 0, xd = 0.999, S8 = 0.9999, k8 = 0.99, Yv = /[\\\/\-_+.# \t"@\[\(\{&]/, C8 = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function sh(e, t, n, r, o, i) {
  if (i === t.length)
    return o === e.length ? Kv : k8;
  for (var l = r.charAt(i), s = n.indexOf(l, o), a = 0, u, c, f; s >= 0; )
    u = sh(e, t, n, r, s + 1, i + 1), u > a && (s === o ? u *= Kv : Yv.test(e.charAt(s - 1)) ? (u *= x8, f = e.slice(o, s - 1).match(C8), f && o > 0 && (u *= Math.pow(xd, f.length))) : Yv.test(e.slice(o, s - 1)) ? (u *= b8, o > 0 && (u *= Math.pow(xd, s - o))) : (u *= w8, o > 0 && (u *= Math.pow(xd, s - o))), e.charAt(s) !== t.charAt(i) && (u *= S8)), u < yd && n.charAt(s - 1) === r.charAt(i + 1) && n.charAt(s - 1) !== r.charAt(i) && (c = sh(e, t, n, r, s + 1, i + 2), c * yd > u && (u = c * yd)), u > a && (a = u), s = n.indexOf(l, s + 1);
  return a;
}
function $8(e, t) {
  return sh(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var E8 = $8, A8 = '[cmdk-list-sizer=""]', al = '[cmdk-group=""]', wd = '[cmdk-group-items=""]', P8 = '[cmdk-group-heading=""]', gg = '[cmdk-item=""]', Xv = `${gg}:not([aria-disabled="true"])`, ah = "cmdk-item-select", Fn = "data-value", _8 = (e, t) => E8(e, t), pC = m.exports.createContext(void 0), Qs = () => m.exports.useContext(pC), hC = m.exports.createContext(void 0), vg = () => m.exports.useContext(hC), mC = m.exports.createContext(void 0), gC = m.exports.forwardRef((e, t) => {
  let n = m.exports.useRef(null), r = Vo(() => {
    var T;
    return { search: "", value: (T = e.value) != null ? T : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), o = Vo(() => /* @__PURE__ */ new Set()), i = Vo(() => /* @__PURE__ */ new Map()), l = Vo(() => /* @__PURE__ */ new Map()), s = Vo(() => /* @__PURE__ */ new Set()), a = vC(e), { label: u, children: c, value: f, onValueChange: d, filter: g, shouldFilter: h, ...v } = e, w = m.exports.useId(), p = m.exports.useId(), y = m.exports.useId(), x = B8();
  Hi(() => {
    if (f !== void 0) {
      let T = f.trim().toLowerCase();
      r.current.value = T, x(6, _), b.emit();
    }
  }, [f]);
  let b = m.exports.useMemo(() => ({ subscribe: (T) => (s.current.add(T), () => s.current.delete(T)), snapshot: () => r.current, setState: (T, O, k) => {
    var C, J, ne;
    if (!Object.is(r.current[T], O)) {
      if (r.current[T] = O, T === "search")
        P(), E(), x(1, $);
      else if (T === "value")
        if (((C = a.current) == null ? void 0 : C.value) !== void 0) {
          let se = O != null ? O : "";
          (ne = (J = a.current).onValueChange) == null || ne.call(J, se);
          return;
        } else
          k || x(5, _);
      b.emit();
    }
  }, emit: () => {
    s.current.forEach((T) => T());
  } }), []), A = m.exports.useMemo(() => ({ value: (T, O) => {
    O !== l.current.get(T) && (l.current.set(T, O), r.current.filtered.items.set(T, S(O)), x(2, () => {
      E(), b.emit();
    }));
  }, item: (T, O) => (o.current.add(T), O && (i.current.has(O) ? i.current.get(O).add(T) : i.current.set(O, /* @__PURE__ */ new Set([T]))), x(3, () => {
    P(), E(), r.current.value || $(), b.emit();
  }), () => {
    l.current.delete(T), o.current.delete(T), r.current.filtered.items.delete(T);
    let k = I();
    x(4, () => {
      P(), (k == null ? void 0 : k.getAttribute("id")) === T && $(), b.emit();
    });
  }), group: (T) => (i.current.has(T) || i.current.set(T, /* @__PURE__ */ new Set()), () => {
    l.current.delete(T), i.current.delete(T);
  }), filter: () => a.current.shouldFilter, label: u || e["aria-label"], commandRef: n, listId: w, inputId: y, labelId: p }), []);
  function S(T) {
    var C;
    var O;
    let k = (C = (O = a.current) == null ? void 0 : O.filter) != null ? C : _8;
    return T ? k(T, r.current.search) : 0;
  }
  function E() {
    if (!n.current || !r.current.search || a.current.shouldFilter === !1)
      return;
    let T = r.current.filtered.items, O = [];
    r.current.filtered.groups.forEach((C) => {
      let J = i.current.get(C), ne = 0;
      J.forEach((se) => {
        let ee = T.get(se);
        ne = Math.max(ee, ne);
      }), O.push([C, ne]);
    });
    let k = n.current.querySelector(A8);
    M().sort((C, J) => {
      var ee, G;
      let ne = C.getAttribute(Fn), se = J.getAttribute(Fn);
      return ((ee = T.get(se)) != null ? ee : 0) - ((G = T.get(ne)) != null ? G : 0);
    }).forEach((C) => {
      let J = C.closest(wd);
      J ? J.appendChild(C.parentElement === J ? C : C.closest(`${wd} > *`)) : k.appendChild(C.parentElement === k ? C : C.closest(`${wd} > *`));
    }), O.sort((C, J) => J[1] - C[1]).forEach((C) => {
      let J = n.current.querySelector(`${al}[${Fn}="${C[0]}"]`);
      J == null || J.parentElement.appendChild(J);
    });
  }
  function $() {
    let T = M().find((k) => !k.ariaDisabled), O = T == null ? void 0 : T.getAttribute(Fn);
    b.setState("value", O || void 0);
  }
  function P() {
    if (!r.current.search || a.current.shouldFilter === !1) {
      r.current.filtered.count = o.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let T = 0;
    for (let O of o.current) {
      let k = l.current.get(O), C = S(k);
      r.current.filtered.items.set(O, C), C > 0 && T++;
    }
    for (let [O, k] of i.current)
      for (let C of k)
        if (r.current.filtered.items.get(C) > 0) {
          r.current.filtered.groups.add(O);
          break;
        }
    r.current.filtered.count = T;
  }
  function _() {
    var T, O, k;
    let C = I();
    C && (((T = C.parentElement) == null ? void 0 : T.firstChild) === C && ((k = (O = C.closest(al)) == null ? void 0 : O.querySelector(P8)) == null || k.scrollIntoView({ block: "nearest" })), C.scrollIntoView({ block: "nearest" }));
  }
  function I() {
    var T;
    return (T = n.current) == null ? void 0 : T.querySelector(`${gg}[aria-selected="true"]`);
  }
  function M() {
    return Array.from(n.current.querySelectorAll(Xv));
  }
  function L(T) {
    let O = M()[T];
    O && b.setState("value", O.getAttribute(Fn));
  }
  function B(T) {
    var O;
    let k = I(), C = M(), J = C.findIndex((se) => se === k), ne = C[J + T];
    (O = a.current) != null && O.loop && (ne = J + T < 0 ? C[C.length - 1] : J + T === C.length ? C[0] : C[J + T]), ne && b.setState("value", ne.getAttribute(Fn));
  }
  function z(T) {
    let O = I(), k = O == null ? void 0 : O.closest(al), C;
    for (; k && !C; )
      k = T > 0 ? F8(k, al) : z8(k, al), C = k == null ? void 0 : k.querySelector(Xv);
    C ? b.setState("value", C.getAttribute(Fn)) : B(T);
  }
  let R = () => L(M().length - 1), H = (T) => {
    T.preventDefault(), T.metaKey ? R() : T.altKey ? z(1) : B(1);
  }, N = (T) => {
    T.preventDefault(), T.metaKey ? L(0) : T.altKey ? z(-1) : B(-1);
  };
  return m.exports.createElement("div", { ref: Ks([n, t]), ...v, "cmdk-root": "", onKeyDown: (T) => {
    var O;
    if ((O = v.onKeyDown) == null || O.call(v, T), !T.defaultPrevented)
      switch (T.key) {
        case "n":
        case "j": {
          T.ctrlKey && H(T);
          break;
        }
        case "ArrowDown": {
          H(T);
          break;
        }
        case "p":
        case "k": {
          T.ctrlKey && N(T);
          break;
        }
        case "ArrowUp": {
          N(T);
          break;
        }
        case "Home": {
          T.preventDefault(), L(0);
          break;
        }
        case "End": {
          T.preventDefault(), R();
          break;
        }
        case "Enter": {
          T.preventDefault();
          let k = I();
          if (k) {
            let C = new Event(ah);
            k.dispatchEvent(C);
          }
        }
      }
  } }, m.exports.createElement("label", { "cmdk-label": "", htmlFor: A.inputId, id: A.labelId, style: j8 }, u), m.exports.createElement(hC.Provider, { value: b }, m.exports.createElement(pC.Provider, { value: A }, c)));
}), R8 = m.exports.forwardRef((e, t) => {
  let n = m.exports.useId(), r = m.exports.useRef(null), o = m.exports.useContext(mC), i = Qs(), l = vC(e);
  Hi(() => i.item(n, o), []);
  let s = yC(n, r, [e.value, e.children, r]), a = vg(), u = wo((p) => p.value && p.value === s.current), c = wo((p) => e.forceMount || i.filter() === !1 ? !0 : p.search ? p.filtered.items.get(n) > 0 : !0);
  m.exports.useEffect(() => {
    let p = r.current;
    if (!(!p || e.disabled))
      return p.addEventListener(ah, f), () => p.removeEventListener(ah, f);
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
  return m.exports.createElement("div", { ref: Ks([r, t]), ...w, id: n, "cmdk-item": "", role: "option", "aria-disabled": g || void 0, "aria-selected": u || void 0, "data-disabled": g || void 0, "data-selected": u || void 0, onPointerMove: g ? void 0 : d, onClick: g ? void 0 : f }, e.children);
}), I8 = m.exports.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, i = m.exports.useId(), l = m.exports.useRef(null), s = m.exports.useRef(null), a = m.exports.useId(), u = Qs(), c = wo((d) => e.forceMount || u.filter() === !1 ? !0 : d.search ? d.filtered.groups.has(i) : !0);
  Hi(() => u.group(i), []), yC(i, l, [e.value, e.heading, s]);
  let f = m.exports.createElement(mC.Provider, { value: i }, r);
  return m.exports.createElement("div", { ref: Ks([l, t]), ...o, "cmdk-group": "", role: "presentation", hidden: c ? void 0 : !0 }, n && m.exports.createElement("div", { ref: s, "cmdk-group-heading": "", "aria-hidden": !0, id: a }, n), m.exports.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? a : void 0 }, f));
}), T8 = m.exports.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = m.exports.useRef(null), i = wo((l) => !l.search);
  return !n && !i ? null : m.exports.createElement("div", { ref: Ks([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), O8 = m.exports.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, i = vg(), l = wo((c) => c.search), s = wo((c) => c.value), a = Qs(), u = m.exports.useMemo(() => {
    var c;
    let f = (c = a.commandRef.current) == null ? void 0 : c.querySelector(`${gg}[${Fn}="${s}"]`);
    return f == null ? void 0 : f.getAttribute("id");
  }, [s, a.commandRef]);
  return m.exports.useEffect(() => {
    e.value != null && i.setState("search", e.value);
  }, [e.value]), m.exports.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": a.listId, "aria-labelledby": a.labelId, "aria-activedescendant": u, id: a.inputId, type: "text", value: o ? e.value : l, onChange: (c) => {
    o || i.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), M8 = m.exports.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = m.exports.useRef(null), i = m.exports.useRef(null), l = Qs();
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
  }, []), m.exports.createElement("div", { ref: Ks([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: l.listId, "aria-labelledby": l.inputId }, m.exports.createElement("div", { ref: i, "cmdk-list-sizer": "" }, n));
}), N8 = m.exports.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: i, container: l, ...s } = e;
  return m.exports.createElement(m8, { open: n, onOpenChange: r }, m.exports.createElement(g8, { container: l }, m.exports.createElement(v8, { "cmdk-overlay": "", className: o }), m.exports.createElement(y8, { "aria-label": e.label, "cmdk-dialog": "", className: i }, m.exports.createElement(gC, { ref: t, ...s }))));
}), D8 = m.exports.forwardRef((e, t) => {
  let n = m.exports.useRef(!0), r = wo((o) => o.filtered.count === 0);
  return m.exports.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : m.exports.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), L8 = m.exports.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return m.exports.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, m.exports.createElement("div", { "aria-hidden": !0 }, r));
}), un = Object.assign(gC, { List: M8, Item: R8, Input: O8, Group: I8, Separator: T8, Dialog: N8, Empty: D8, Loading: L8 });
function F8(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function z8(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function vC(e) {
  let t = m.exports.useRef(e);
  return Hi(() => {
    t.current = e;
  }), t;
}
var Hi = typeof window > "u" ? m.exports.useEffect : m.exports.useLayoutEffect;
function Vo(e) {
  let t = m.exports.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Ks(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function wo(e) {
  let t = vg(), n = () => e(t.snapshot());
  return m.exports.useSyncExternalStore(t.subscribe, n, n);
}
function yC(e, t, n) {
  let r = m.exports.useRef(), o = Qs();
  return Hi(() => {
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
    o.value(e, l), (i = t.current) == null || i.setAttribute(Fn, l), r.current = l;
  }), r;
}
var B8 = () => {
  let [e, t] = m.exports.useState(), n = Vo(() => /* @__PURE__ */ new Map());
  return Hi(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, j8 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
let yg = Xs();
const oe = (e) => Ys(e, yg);
let xg = Xs();
oe.write = (e) => Ys(e, xg);
let qc = Xs();
oe.onStart = (e) => Ys(e, qc);
let wg = Xs();
oe.onFrame = (e) => Ys(e, wg);
let bg = Xs();
oe.onFinish = (e) => Ys(e, bg);
let vi = [];
oe.setTimeout = (e, t) => {
  let n = oe.now() + t, r = () => {
    let i = vi.findIndex((l) => l.cancel == r);
    ~i && vi.splice(i, 1), kr -= ~i ? 1 : 0;
  }, o = {
    time: n,
    handler: e,
    cancel: r
  };
  return vi.splice(xC(n), 0, o), kr += 1, wC(), o;
};
let xC = (e) => ~(~vi.findIndex((t) => t.time > e) || ~vi.length);
oe.cancel = (e) => {
  qc.delete(e), wg.delete(e), yg.delete(e), xg.delete(e), bg.delete(e);
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
let Sg = typeof window < "u" ? window.requestAnimationFrame : () => {
};
oe.use = (e) => Sg = e;
oe.now = typeof performance < "u" ? () => performance.now() : Date.now;
oe.batchedUpdates = (e) => e();
oe.catch = console.error;
oe.frameLoop = "always";
oe.advance = () => {
  oe.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : SC();
};
let Sr = -1, kr = 0, uh = !1;
function Ys(e, t) {
  uh ? (t.delete(e), e(0)) : (t.add(e), wC());
}
function wC() {
  Sr < 0 && (Sr = 0, oe.frameLoop !== "demand" && Sg(bC));
}
function H8() {
  Sr = -1;
}
function bC() {
  ~Sr && (Sg(bC), oe.batchedUpdates(SC));
}
function SC() {
  let e = Sr;
  Sr = oe.now();
  let t = xC(Sr);
  t && (kC(vi.splice(0, t), (n) => n.handler()), kr -= t), qc.flush(), yg.flush(e ? Math.min(64, Sr - e) : 16.667), wg.flush(), xg.flush(), bg.flush(), kr || H8();
}
function Xs() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return {
    add(n) {
      kr += t == e && !e.has(n) ? 1 : 0, e.add(n);
    },
    delete(n) {
      return kr -= t == e && e.has(n) ? 1 : 0, e.delete(n);
    },
    flush(n) {
      t.size && (e = /* @__PURE__ */ new Set(), kr -= t.size, kC(t, (r) => r(n) && e.add(r)), kr += e.size, t = e);
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
const V8 = (e, t, n) => Object.defineProperty(e, t, {
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
const Pt = (e) => W.und(e) ? [] : W.arr(e) ? e : [e];
function Bl(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), he(n, t);
  }
}
const bl = (e, ...t) => Bl(e, (n) => n(...t)), CC = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
let kg, $C, Mr = null, EC = !1, Cg = ch;
const U8 = (e) => {
  e.to && ($C = e.to), e.now && (oe.now = e.now), e.colors !== void 0 && (Mr = e.colors), e.skipAnimation != null && (EC = e.skipAnimation), e.createStringInterpolator && (kg = e.createStringInterpolator), e.requestAnimationFrame && oe.use(e.requestAnimationFrame), e.batchedUpdates && (oe.batchedUpdates = e.batchedUpdates), e.willAdvance && (Cg = e.willAdvance), e.frameLoop && (oe.frameLoop = e.frameLoop);
};
var Rn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get createStringInterpolator() {
    return kg;
  },
  get to() {
    return $C;
  },
  get colors() {
    return Mr;
  },
  get skipAnimation() {
    return EC;
  },
  get willAdvance() {
    return Cg;
  },
  assign: U8
});
const jl = /* @__PURE__ */ new Set();
let Ut = [], bd = [], Yu = 0;
const Gc = {
  get idle() {
    return !jl.size && !Ut.length;
  },
  start(e) {
    Yu > e.priority ? (jl.add(e), oe.onStart(W8)) : (AC(e), oe(fh));
  },
  advance: fh,
  sort(e) {
    if (Yu)
      oe.onFrame(() => Gc.sort(e));
    else {
      const t = Ut.indexOf(e);
      ~t && (Ut.splice(t, 1), PC(e));
    }
  },
  clear() {
    Ut = [], jl.clear();
  }
};
function W8() {
  jl.forEach(AC), jl.clear(), oe(fh);
}
function AC(e) {
  Ut.includes(e) || PC(e);
}
function PC(e) {
  Ut.splice(q8(Ut, (t) => t.priority > e.priority), 0, e);
}
function fh(e) {
  const t = bd;
  for (let n = 0; n < Ut.length; n++) {
    const r = Ut[n];
    Yu = r.priority, r.idle || (Cg(r), r.advance(e), r.idle || t.push(r));
  }
  return Yu = 0, bd = Ut, bd.length = 0, Ut = t, Ut.length > 0;
}
function q8(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
const G8 = {
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
const Q8 = new RegExp("rgb" + Qc(cn, cn, cn)), K8 = new RegExp("rgba" + Qc(cn, cn, cn, cn)), Y8 = new RegExp("hsl" + Qc(cn, Xu, Xu)), X8 = new RegExp("hsla" + Qc(cn, Xu, Xu, cn)), Z8 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, J8 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, e9 = /^#([0-9a-fA-F]{6})$/, t9 = /^#([0-9a-fA-F]{8})$/;
function n9(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = e9.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Mr && Mr[e] !== void 0 ? Mr[e] : (t = Q8.exec(e)) ? (zo(t[1]) << 24 | zo(t[2]) << 16 | zo(t[3]) << 8 | 255) >>> 0 : (t = K8.exec(e)) ? (zo(t[1]) << 24 | zo(t[2]) << 16 | zo(t[3]) << 8 | ey(t[4])) >>> 0 : (t = Z8.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = t9.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = J8.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Y8.exec(e)) ? (Zv(Jv(t[1]), Ma(t[2]), Ma(t[3])) | 255) >>> 0 : (t = X8.exec(e)) ? (Zv(Jv(t[1]), Ma(t[2]), Ma(t[3])) | ey(t[4])) >>> 0 : null;
}
function Sd(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Zv(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, i = Sd(o, r, e + 1 / 3), l = Sd(o, r, e), s = Sd(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(l * 255) << 16 | Math.round(s * 255) << 8;
}
function zo(e) {
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
function Ma(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function ty(e) {
  let t = n9(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, o = (t & 65280) >>> 8, i = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${o}, ${i})`;
}
const Ss = (e, t, n) => {
  if (W.fun(e))
    return e;
  if (W.arr(e))
    return Ss({
      range: e,
      output: t,
      extrapolate: n
    });
  if (W.str(e.output[0]))
    return kg(e);
  const r = e, o = r.output, i = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", s = r.extrapolateRight || r.extrapolate || "extend", a = r.easing || ((u) => u);
  return (u) => {
    const c = o9(u, i);
    return r9(u, i[c], i[c + 1], o[c], o[c + 1], a, l, s, r.map);
  };
};
function r9(e, t, n, r, o, i, l, s, a) {
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
function o9(e, t) {
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
const Ri = Symbol.for("FluidValue.get"), bo = Symbol.for("FluidValue.observers"), jt = (e) => Boolean(e && e[Ri]), vt = (e) => e && e[Ri] ? e[Ri]() : e, ny = (e) => e[bo] || null;
function i9(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function ks(e, t) {
  let n = e[bo];
  n && n.forEach((r) => {
    i9(r, t);
  });
}
class _C {
  constructor(t) {
    if (this[Ri] = void 0, this[bo] = void 0, !t && !(t = this.get))
      throw Error("Unknown getter");
    l9(this, t);
  }
}
const l9 = (e, t) => RC(e, Ri, t);
function Vi(e, t) {
  if (e[Ri]) {
    let n = e[bo];
    n || RC(e, bo, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function Cs(e, t) {
  let n = e[bo];
  if (n && n.has(t)) {
    const r = n.size - 1;
    r ? n.delete(t) : e[bo] = null, e.observerRemoved && e.observerRemoved(r, t);
  }
}
const RC = (e, t, n) => Object.defineProperty(e, t, {
  value: n,
  writable: !0,
  configurable: !0
}), lu = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, s9 = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, ry = new RegExp(`(${lu.source})(%|[a-z]+)`, "i"), a9 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Kc = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, IC = (e) => {
  const [t, n] = u9(e);
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
      return IC(n);
    if (n)
      return n;
  }
  return e;
}, u9 = (e) => {
  const t = Kc.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
};
let kd;
const c9 = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`, TC = (e) => {
  kd || (kd = Mr ? new RegExp(`(${Object.keys(Mr).join("|")})(?!\\w)`, "g") : /^\b$/);
  const t = e.output.map((i) => vt(i).replace(Kc, IC).replace(s9, ty).replace(kd, ty)), n = t.map((i) => i.match(lu).map(Number)), o = n[0].map((i, l) => n.map((s) => {
    if (!(l in s))
      throw Error('The arity of each "output" value must be equal');
    return s[l];
  })).map((i) => Ss(dh({}, e, {
    output: i
  })));
  return (i) => {
    var l;
    const s = !ry.test(t[0]) && ((l = t.find((u) => ry.test(u))) == null ? void 0 : l.replace(lu, ""));
    let a = 0;
    return t[0].replace(lu, () => `${o[a++](i)}${s || ""}`).replace(a9, c9);
  };
}, $g = "react-spring: ", OC = (e) => {
  const t = e;
  let n = !1;
  if (typeof t != "function")
    throw new TypeError(`${$g}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, f9 = OC(console.warn);
function d9() {
  f9(`${$g}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
const p9 = OC(console.warn);
function h9() {
  p9(`${$g}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function Yc(e) {
  return W.str(e) && (e[0] == "#" || /\d/.test(e) || !CC() && Kc.test(e) || e in (Mr || {}));
}
const Eg = typeof window < "u" && window.document && window.document.createElement ? m.exports.useLayoutEffect : m.exports.useEffect, m9 = () => {
  const e = m.exports.useRef(!1);
  return Eg(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function MC() {
  const e = m.exports.useState()[1], t = m9();
  return () => {
    t.current && e(Math.random());
  };
}
function g9(e, t) {
  const [n] = m.exports.useState(() => ({
    inputs: t,
    result: e()
  })), r = m.exports.useRef(), o = r.current;
  let i = o;
  return i ? Boolean(t && i.inputs && v9(t, i.inputs)) || (i = {
    inputs: t,
    result: e()
  }) : i = n, m.exports.useEffect(() => {
    r.current = i, o == n && (n.inputs = n.result = void 0);
  }, [i]), i.result;
}
function v9(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
const NC = (e) => m.exports.useEffect(e, y9), y9 = [];
function oy(e) {
  const t = m.exports.useRef();
  return m.exports.useEffect(() => {
    t.current = e;
  }), t.current;
}
const $s = Symbol.for("Animated:node"), x9 = (e) => !!e && e[$s] === e, wn = (e) => e && e[$s], Ag = (e, t) => V8(e, $s, t), Xc = (e) => e && e[$s] && e[$s].getPayload();
class DC {
  constructor() {
    this.payload = void 0, Ag(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}
class Ui extends DC {
  constructor(t) {
    super(), this.done = !0, this.elapsedTime = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.v0 = void 0, this.durationProgress = 0, this._value = t, W.num(this._value) && (this.lastPosition = this._value);
  }
  static create(t) {
    return new Ui(t);
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
class Ii extends Ui {
  constructor(t) {
    super(0), this._string = null, this._toString = void 0, this._toString = Ss({
      output: [t, t]
    });
  }
  static create(t) {
    return new Ii(t);
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
    t && (this._toString = Ss({
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
      x9(r) ? n[o] = r.getValue(t) : jt(r) ? n[o] = vt(r) : t || (n[o] = r);
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
    Zu.dependencies && jt(t) && Zu.dependencies.add(t);
    const n = Xc(t);
    n && he(n, (r) => this.add(r));
  }
}
class Pg extends Zc {
  constructor(t) {
    super(t);
  }
  static create(t) {
    return new Pg(t);
  }
  getValue() {
    return this.source.map((t) => t.getValue());
  }
  setValue(t) {
    const n = this.getPayload();
    return t.length == n.length ? n.map((r, o) => r.setValue(t[o])).some(Boolean) : (super.setValue(t.map(w9)), !0);
  }
}
function w9(e) {
  return (Yc(e) ? Ii : Ui).create(e);
}
function ph(e) {
  const t = wn(e);
  return t ? t.constructor : W.arr(e) ? Pg : Yc(e) ? Ii : Ui;
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
const iy = (e, t) => {
  const n = !W.fun(e) || e.prototype && e.prototype.isReactComponent;
  return m.exports.forwardRef((r, o) => {
    const i = m.exports.useRef(null), l = n && m.exports.useCallback((h) => {
      i.current = k9(o, h);
    }, [o]), [s, a] = S9(r, t), u = MC(), c = () => {
      const h = i.current;
      if (n && !h)
        return;
      (h ? t.applyAnimatedValues(h, s.getValue(!0)) : !1) === !1 && u();
    }, f = new b9(c, a), d = m.exports.useRef();
    Eg(() => (d.current = f, he(a, (h) => Vi(h, f)), () => {
      d.current && (he(d.current.deps, (h) => Cs(h, d.current)), oe.cancel(d.current.update));
    })), m.exports.useEffect(c, []), NC(() => () => {
      const h = d.current;
      he(h.deps, (v) => Cs(v, h));
    });
    const g = t.getComponentProps(s.getValue());
    return /* @__PURE__ */ D(e, {
      ...g,
      ref: l
    });
  });
};
class b9 {
  constructor(t, n) {
    this.update = t, this.deps = n;
  }
  eventObserved(t) {
    t.type == "change" && oe.write(this.update);
  }
}
function S9(e, t) {
  const n = /* @__PURE__ */ new Set();
  return Zu.dependencies = n, e.style && (e = hh({}, e, {
    style: t.createAnimatedStyle(e.style)
  })), e = new Zc(e), Zu.dependencies = null, [e, n];
}
function k9(e, t) {
  return e && (W.fun(e) ? e(t) : e.current = t), t;
}
const ly = Symbol.for("AnimatedComponent"), C9 = (e, {
  applyAnimatedValues: t = () => !1,
  createAnimatedStyle: n = (o) => new Zc(o),
  getComponentProps: r = (o) => o
} = {}) => {
  const o = {
    applyAnimatedValues: t,
    createAnimatedStyle: n,
    getComponentProps: r
  }, i = (l) => {
    const s = sy(l) || "Anonymous";
    return W.str(l) ? l = i[l] || (i[l] = iy(l, o)) : l = l[ly] || (l[ly] = iy(l, o)), l.displayName = `Animated(${s})`, l;
  };
  return _n(e, (l, s) => {
    W.arr(e) && (s = sy(l)), i[s] = i(l);
  }), {
    animated: i
  };
}, sy = (e) => W.str(e) ? e : e && W.str(e.displayName) ? e.displayName : W.fun(e) && e.name || null;
function Qe() {
  return Qe = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Qe.apply(this, arguments);
}
function no(e, ...t) {
  return W.fun(e) ? e(...t) : e;
}
const Hl = (e, t) => e === !0 || !!(t && e && (W.fun(e) ? e(t) : Pt(e).includes(t))), LC = (e, t) => W.obj(e) ? t && e[t] : e, FC = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, $9 = (e) => e, _g = (e, t = $9) => {
  let n = E9;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  const r = {};
  for (const o of n) {
    const i = t(e[o], o);
    W.und(i) || (r[o] = i);
  }
  return r;
}, E9 = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], A9 = {
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
function P9(e) {
  const t = {};
  let n = 0;
  if (_n(e, (r, o) => {
    A9[o] || (t[o] = r, n++);
  }), n)
    return t;
}
function zC(e) {
  const t = P9(e);
  if (t) {
    const n = {
      to: t
    };
    return _n(e, (r, o) => o in t || (n[o] = r)), n;
  }
  return Qe({}, e);
}
function Es(e) {
  return e = vt(e), W.arr(e) ? e.map(Es) : Yc(e) ? Rn.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function _9(e) {
  for (const t in e)
    return !0;
  return !1;
}
function mh(e) {
  return W.fun(e) || W.arr(e) && W.obj(e[0]);
}
function R9(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function I9(e, t) {
  if (t && e.ref !== t) {
    var n;
    (n = e.ref) == null || n.delete(e), t.add(e), e.ref = t;
  }
}
const T9 = {
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
}, Ju = 1.70158, Na = Ju * 1.525, ay = Ju + 1, uy = 2 * Math.PI / 3, cy = 2 * Math.PI / 4.5, Da = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, O9 = {
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
  easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((Na + 1) * 2 * e - Na) / 2 : (Math.pow(2 * e - 2, 2) * ((Na + 1) * (e * 2 - 2) + Na) + 2) / 2,
  easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * uy),
  easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * uy) + 1,
  easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * cy)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * cy) / 2 + 1,
  easeInBounce: (e) => 1 - Da(1 - e),
  easeOutBounce: Da,
  easeInOutBounce: (e) => e < 0.5 ? (1 - Da(1 - 2 * e)) / 2 : (1 + Da(2 * e - 1)) / 2
}, gh = Qe({}, T9.default, {
  mass: 1,
  damping: 1,
  easing: O9.linear,
  clamp: !1
});
class M9 {
  constructor() {
    this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, gh);
  }
}
function N9(e, t, n) {
  n && (n = Qe({}, n), fy(n, t), t = Qe({}, n, t)), fy(e, t), Object.assign(e, t);
  for (const l in gh)
    e[l] == null && (e[l] = gh[l]);
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
class D9 {
  constructor() {
    this.changed = !1, this.values = dy, this.toValues = null, this.fromValues = dy, this.to = void 0, this.from = void 0, this.config = new M9(), this.immediate = !1;
  }
}
function BC(e, {
  key: t,
  props: n,
  defaultProps: r,
  state: o,
  actions: i
}) {
  return new Promise((l, s) => {
    var a;
    let u, c, f = Hl((a = n.cancel) != null ? a : r == null ? void 0 : r.cancel, t);
    if (f)
      h();
    else {
      W.und(n.pause) || (o.paused = Hl(n.pause, t));
      let v = r == null ? void 0 : r.pause;
      v !== !0 && (v = o.paused || Hl(v, t)), u = no(n.delay || 0, t), v ? (o.resumeQueue.add(g), i.pause()) : (i.resume(), g());
    }
    function d() {
      o.resumeQueue.add(g), o.timeouts.delete(c), c.cancel(), u = c.time - oe.now();
    }
    function g() {
      u > 0 && !Rn.skipAnimation ? (o.delayed = !0, c = oe.setTimeout(h, u), o.pauseQueue.add(d), o.timeouts.add(c)) : h();
    }
    function h() {
      o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(c), e <= (o.cancelId || 0) && (f = !0);
      try {
        i.start(Qe({}, n, {
          callId: e,
          cancel: f
        }), l);
      } catch (v) {
        s(v);
      }
    }
  });
}
const Rg = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? yi(e.get()) : t.every((n) => n.noop) ? jC(e.get()) : sn(e.get(), t.every((n) => n.finished)), jC = (e) => ({
  value: e,
  noop: !0,
  finished: !0,
  cancelled: !1
}), sn = (e, t, n = !1) => ({
  value: e,
  finished: t,
  cancelled: n
}), yi = (e) => ({
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
    asyncTo: s,
    promise: a
  } = n;
  return !i && e === s && !t.reset ? a : n.promise = (async () => {
    n.asyncId = o, n.asyncTo = e;
    const u = _g(t, (w, p) => p === "onRest" ? void 0 : w);
    let c, f;
    const d = new Promise((w, p) => (c = w, f = p)), g = (w) => {
      const p = o <= (n.cancelId || 0) && yi(r) || o !== n.asyncId && sn(r, !1);
      if (p)
        throw w.result = p, f(w), w;
    }, h = (w, p) => {
      const y = new py(), x = new hy();
      return (async () => {
        if (Rn.skipAnimation)
          throw As(n), x.result = sn(r, !1), f(x), x;
        g(y);
        const b = W.obj(w) ? Qe({}, w) : Qe({}, p, {
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
      return As(n), sn(r, !1);
    try {
      let w;
      W.arr(e) ? w = (async (p) => {
        for (const y of p)
          await h(y);
      })(e) : w = Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([w.then(c), d]), v = sn(r.get(), !0, !1);
    } catch (w) {
      if (w instanceof py)
        v = w.result;
      else if (w instanceof hy)
        v = w.result;
      else
        throw w;
    } finally {
      o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? s : void 0, n.promise = i ? a : void 0);
    }
    return W.fun(l) && oe.batchedUpdates(() => {
      l(v, r, r.item);
    }), v;
  })();
}
function As(e, t) {
  Bl(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
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
const vh = (e) => e instanceof Ig;
let L9 = 1;
class Ig extends _C {
  constructor(...t) {
    super(...t), this.id = L9++, this.key = void 0, this._priority = 0;
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
    return d9(), Rn.to(this, t);
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
    ks(this, {
      type: "change",
      parent: this,
      value: t,
      idle: n
    });
  }
  _onPriorityChange(t) {
    this.idle || Gc.sort(this), ks(this, {
      type: "priority",
      parent: this,
      priority: t
    });
  }
}
const So = Symbol.for("SpringPhase"), VC = 1, yh = 2, xh = 4, Cd = (e) => (e[So] & VC) > 0, fr = (e) => (e[So] & yh) > 0, ul = (e) => (e[So] & xh) > 0, my = (e, t) => t ? e[So] |= yh | VC : e[So] &= ~yh, gy = (e, t) => t ? e[So] |= xh : e[So] &= ~xh;
class F9 extends Ig {
  constructor(t, n) {
    if (super(), this.key = void 0, this.animation = new D9(), this.queue = void 0, this.defaultProps = {}, this._state = {
      paused: !1,
      delayed: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !W.und(t) || !W.und(n)) {
      const r = W.obj(t) ? Qe({}, t) : Qe({}, n, {
        from: t
      });
      W.und(r.default) && (r.default = !0), this.start(r);
    }
  }
  get idle() {
    return !(fr(this) || this._state.asyncTo) || ul(this);
  }
  get goal() {
    return vt(this.animation.to);
  }
  get velocity() {
    const t = wn(this);
    return t instanceof Ui ? t.lastVelocity || 0 : t.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return Cd(this);
  }
  get isAnimating() {
    return fr(this);
  }
  get isPaused() {
    return ul(this);
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
    const s = Xc(o.to);
    !s && jt(o.to) && (l = Pt(vt(o.to))), o.values.forEach((c, f) => {
      if (c.done)
        return;
      const d = c.constructor == Ii ? 1 : s ? s[f].lastPosition : l[f];
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
            const _ = 1, I = Math.ceil(t / _);
            for (let M = 0; M < I && ($ = Math.abs(y) > b, !(!$ && (g = Math.abs(d - h) <= x, g))); ++M) {
              S && (P = h == d || h > d == E, P && (y = -y * A, h = d));
              const L = -i.tension * 1e-6 * (h - d), B = -i.friction * 1e-3 * y, z = (L + B) / i.mass;
              y = y + z * _, h = h + y * _;
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
    const a = wn(this), u = a.getValue();
    if (n) {
      const c = vt(o.to);
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
    return W.und(t) ? (r = this.queue || [], this.queue = []) : r = [W.obj(t) ? t : Qe({}, n, {
      to: t
    })], Promise.all(r.map((o) => this._update(o))).then((o) => Rg(this, o));
  }
  stop(t) {
    const {
      to: n
    } = this.animation;
    return this._focus(this.get()), As(this._state, t && this._lastCallId), oe.batchedUpdates(() => this._stop(n, t)), this;
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
    return Cd(this) || (t.reverse && ([r, o] = [o, r]), o = vt(o), W.und(o) ? wn(this) || this._set(r) : this._set(o)), i;
  }
  _update(t, n) {
    let r = Qe({}, t);
    const {
      key: o,
      defaultProps: i
    } = this;
    r.default && Object.assign(i, _g(r, (a, u) => /^on/.test(u) ? LC(a, o) : a)), yy(this, r, "onProps"), fl(this, "onProps", r, this);
    const l = this._prepareNode(r);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    const s = this._state;
    return BC(++this._lastCallId, {
      key: o,
      props: r,
      defaultProps: i,
      state: s,
      actions: {
        pause: () => {
          ul(this) || (gy(this, !0), bl(s.pauseQueue), fl(this, "onPause", sn(this, cl(this, this.animation.to)), this));
        },
        resume: () => {
          ul(this) && (gy(this, !1), fr(this) && this._resume(), bl(s.resumeQueue), fl(this, "onResume", sn(this, cl(this, this.animation.to)), this));
        },
        start: this._merge.bind(this, l)
      }
    }).then((a) => {
      if (r.loop && a.finished && !(n && a.noop)) {
        const u = UC(r);
        if (u)
          return this._update(u, !0);
      }
      return a;
    });
  }
  _merge(t, n, r) {
    if (n.cancel)
      return this.stop(!0), r(yi(this));
    const o = !W.und(t.to), i = !W.und(t.from);
    if (o || i)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return r(yi(this));
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
    const g = !zn(d, c);
    g && (a.from = d), d = vt(d);
    const h = !zn(f, u);
    h && this._focus(f);
    const v = mh(n.to), {
      config: w
    } = a, {
      decay: p,
      velocity: y
    } = w;
    (o || i) && (w.velocity = 0), n.config && !v && N9(w, no(n.config, l), n.config !== s.config ? no(s.config, l) : void 0);
    let x = wn(this);
    if (!x || W.und(f))
      return r(sn(this, !0));
    const b = W.und(n.reset) ? i && !n.default : !W.und(d) && Hl(n.reset, l), A = b ? d : this.get(), S = Es(f), E = W.num(S) || W.arr(S) || Yc(S), $ = !v && (!E || Hl(s.immediate || n.immediate, l));
    if (h) {
      const M = ph(f);
      if (M !== x.constructor)
        if ($)
          x = this._set(S);
        else
          throw Error(`Cannot animate between ${x.constructor.name} and ${M.name}, as the "to" prop suggests`);
    }
    const P = x.constructor;
    let _ = jt(f), I = !1;
    if (!_) {
      const M = b || !Cd(this) && g;
      (h || M) && (I = zn(Es(A), S), _ = !I), (!zn(a.immediate, $) && !$ || !zn(w.decay, p) || !zn(w.velocity, y)) && (_ = !0);
    }
    if (I && fr(this) && (a.changed && !b ? _ = !0 : _ || this._stop(u)), !v && ((_ || jt(u)) && (a.values = x.getPayload(), a.toValues = jt(f) ? null : P == Ii ? [1] : Pt(S)), a.immediate != $ && (a.immediate = $, !$ && !b && this._set(u)), _)) {
      const {
        onRest: M
      } = a;
      he(B9, (B) => yy(this, n, B));
      const L = sn(this, cl(this, u));
      bl(this._pendingCalls, L), this._pendingCalls.add(r), a.changed && oe.batchedUpdates(() => {
        a.changed = !b, M == null || M(L, this), b ? no(s.onRest, L) : a.onStart == null || a.onStart(L, this);
      });
    }
    b && this._set(A), v ? r(HC(n.to, n, this._state, this)) : _ ? this._start() : fr(this) && !h ? this._pendingCalls.add(r) : r(jC(A));
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
    jt(n) && (Vi(n, this), vh(n) && (t = n.priority + 1)), this.priority = t;
  }
  _detach() {
    const {
      to: t
    } = this.animation;
    jt(t) && Cs(t, this);
  }
  _set(t, n = !0) {
    const r = vt(t);
    if (!W.und(r)) {
      const o = wn(this);
      if (!o || !zn(r, o.getValue())) {
        const i = ph(r);
        !o || o.constructor != i ? Ag(this, i.create(r)) : o.setValue(r), o && oe.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return wn(this);
  }
  _onStart() {
    const t = this.animation;
    t.changed || (t.changed = !0, fl(this, "onStart", sn(this, cl(this, t.to)), this));
  }
  _onChange(t, n) {
    n || (this._onStart(), no(this.animation.onChange, t, this)), no(this.defaultProps.onChange, t, this), super._onChange(t, n);
  }
  _start() {
    const t = this.animation;
    wn(this).reset(vt(t.to)), t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)), fr(this) || (my(this, !0), ul(this) || this._resume());
  }
  _resume() {
    Rn.skipAnimation ? this.finish() : Gc.start(this);
  }
  _stop(t, n) {
    if (fr(this)) {
      my(this, !1);
      const r = this.animation;
      he(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), ks(this, {
        type: "idle",
        parent: this
      });
      const o = n ? yi(this.get()) : sn(this.get(), cl(this, t != null ? t : r.to));
      bl(this._pendingCalls, o), r.changed && (r.changed = !1, fl(this, "onRest", o, this));
    }
  }
}
function cl(e, t) {
  const n = Es(t), r = Es(e.get());
  return zn(r, n);
}
function UC(e, t = e.loop, n = e.to) {
  let r = no(t);
  if (r) {
    const o = r !== !0 && zC(r), i = (o || e).reverse, l = !o || o.reset;
    return Ps(Qe({}, e, {
      loop: t,
      default: !1,
      pause: void 0,
      to: !i || mh(n) ? n : void 0,
      from: l ? e.from : void 0,
      reset: l
    }, o));
  }
}
function Ps(e) {
  const {
    to: t,
    from: n
  } = e = zC(e), r = /* @__PURE__ */ new Set();
  return W.obj(t) && vy(t, r), W.obj(n) && vy(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function z9(e) {
  const t = Ps(e);
  return W.und(t.default) && (t.default = _g(t)), t;
}
function vy(e, t) {
  _n(e, (n, r) => n != null && t.add(r));
}
const B9 = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function yy(e, t, n) {
  e.animation[n] = t[n] !== FC(t, n) ? LC(t[n], e.key) : void 0;
}
function fl(e, t, ...n) {
  var r, o, i, l;
  (r = (o = e.animation)[t]) == null || r.call(o, ...n), (i = (l = e.defaultProps)[t]) == null || i.call(l, ...n);
}
const j9 = ["onStart", "onChange", "onRest"];
let H9 = 1;
class V9 {
  constructor(t, n) {
    this.id = H9++, this.springs = {}, this.queue = [], this.ref = void 0, this._flush = void 0, this._initialProps = void 0, this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._item = void 0, this._state = {
      paused: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    }, this._onFrame = this._onFrame.bind(this), n && (this._flush = n), t && this.start(Qe({
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
    return t && this.queue.push(Ps(t)), this;
  }
  start(t) {
    let {
      queue: n
    } = this;
    return t ? n = Pt(t).map(Ps) : this.queue = [], this._flush ? this._flush(this, n) : (KC(this, n), wh(this, n));
  }
  stop(t, n) {
    if (t !== !!t && (n = t), n) {
      const r = this.springs;
      he(Pt(n), (o) => r[o].stop(!!t));
    } else
      As(this._state, this._lastAsyncId), this.each((r) => r.stop(!!t));
    return this;
  }
  pause(t) {
    if (W.und(t))
      this.start({
        pause: !0
      });
    else {
      const n = this.springs;
      he(Pt(t), (r) => n[r].pause());
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
      he(Pt(t), (r) => n[r].resume());
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
    (o && !this._started || i && !this._started) && (this._started = !0, Bl(t, ([a, u]) => {
      u.value = this.get(), a(u, this, this._item);
    }));
    const l = !o && this._started, s = i || l && r.size ? this.get() : null;
    i && n.size && Bl(n, ([a, u]) => {
      u.value = s, a(u, this, this._item);
    }), l && (this._started = !1, Bl(r, ([a, u]) => {
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
    oe.onFrame(this._onFrame);
  }
}
function wh(e, t) {
  return Promise.all(t.map((n) => WC(e, n))).then((n) => Rg(e, n));
}
async function WC(e, t, n) {
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
  c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : he(j9, (v) => {
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
  const d = (r || Object.keys(e.springs)).map((v) => e.springs[v].start(t)), g = t.cancel === !0 || FC(t, "cancel") === !0;
  (c || g && f.asyncId) && d.push(BC(++e._lastAsyncId, {
    props: t,
    state: f,
    actions: {
      pause: ch,
      resume: ch,
      start(v, w) {
        g ? (As(f, e._lastAsyncId), w(yi(e))) : (v.onRest = s, w(HC(c, v, f, e)));
      }
    }
  })), f.paused && await new Promise((v) => {
    f.resumeQueue.add(v);
  });
  const h = Rg(e, await Promise.all(d));
  if (l && h.finished && !(n && h.noop)) {
    const v = UC(t, l, o);
    if (v)
      return KC(e, [v]), WC(e, v, !0);
  }
  return a && oe.batchedUpdates(() => a(h, e, e.item)), h;
}
function xy(e, t) {
  const n = Qe({}, e.springs);
  return t && he(Pt(t), (r) => {
    W.und(r.keys) && (r = Ps(r)), W.obj(r.to) || (r = Qe({}, r, {
      to: void 0
    })), QC(n, r, (o) => GC(o));
  }), qC(e, n), n;
}
function qC(e, t) {
  _n(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, Vi(n, e));
  });
}
function GC(e, t) {
  const n = new F9();
  return n.key = e, t && Vi(n, t), n;
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
function U9(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const W9 = ["children"], Jc = (e) => {
  let {
    children: t
  } = e, n = U9(e, W9);
  const r = m.exports.useContext(ec), o = n.pause || !!r.pause, i = n.immediate || !!r.immediate;
  n = g9(() => ({
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
}, ec = q9(Jc, {});
Jc.Provider = ec.Provider;
Jc.Consumer = ec.Consumer;
function q9(e, t) {
  return Object.assign(e, m.exports.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
const G9 = () => {
  const e = [], t = function(o) {
    h9();
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
function Q9(e, t, n) {
  const r = W.fun(t) && t;
  r && !n && (n = []);
  const o = m.exports.useMemo(() => r || arguments.length == 3 ? G9() : void 0, []), i = m.exports.useRef(0), l = MC(), s = m.exports.useMemo(() => ({
    ctrls: [],
    queue: [],
    flush(p, y) {
      const x = xy(p, y);
      return i.current > 0 && !s.queue.length && !Object.keys(x).some((A) => !p.springs[A]) ? wh(p, y) : new Promise((A) => {
        qC(p, x), s.queue.push(() => {
          A(wh(p, y));
        }), l();
      });
    }
  }), []), a = m.exports.useRef([...s.ctrls]), u = [], c = oy(e) || 0;
  m.exports.useMemo(() => {
    he(a.current.slice(e, c), (p) => {
      R9(p, o), p.stop(!0);
    }), a.current.length = e, f(c, e);
  }, [e]), m.exports.useMemo(() => {
    f(0, Math.min(c, e));
  }, n);
  function f(p, y) {
    for (let x = p; x < y; x++) {
      const b = a.current[x] || (a.current[x] = new V9(null, s.flush)), A = r ? r(x, b) : t[x];
      A && (u[x] = z9(A));
    }
  }
  const d = a.current.map((p, y) => xy(p, u[y])), g = m.exports.useContext(Jc), h = oy(g), v = g !== h && _9(g);
  Eg(() => {
    i.current++, s.ctrls = a.current;
    const {
      queue: p
    } = s;
    p.length && (s.queue = [], he(p, (y) => y())), he(a.current, (y, x) => {
      o == null || o.add(y), v && y.start({
        default: g
      });
      const b = u[x];
      b && (I9(y, b.ref), y.ref ? y.queue.push(b) : y.start(b));
    });
  }), NC(() => () => {
    he(s.ctrls, (p) => p.stop(!0));
  });
  const w = d.map((p) => Qe({}, p));
  return o ? [w, o] : w;
}
function K9(e, t) {
  const n = W.fun(e), [[r], o] = Q9(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, o] : r;
}
let wy;
(function(e) {
  e.MOUNT = "mount", e.ENTER = "enter", e.UPDATE = "update", e.LEAVE = "leave";
})(wy || (wy = {}));
class Y9 extends Ig {
  constructor(t, n) {
    super(), this.key = void 0, this.idle = !0, this.calc = void 0, this._active = /* @__PURE__ */ new Set(), this.source = t, this.calc = Ss(...n);
    const r = this._get(), o = ph(r);
    Ag(this, o.create(r));
  }
  advance(t) {
    const n = this._get(), r = this.get();
    zn(n, r) || (wn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && by(this._active) && $d(this);
  }
  _get() {
    const t = W.arr(this.source) ? this.source.map(vt) : Pt(vt(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !by(this._active) && (this.idle = !1, he(Xc(this), (t) => {
      t.done = !1;
    }), Rn.skipAnimation ? (oe.batchedUpdates(() => this.advance()), $d(this)) : Gc.start(this));
  }
  _attach() {
    let t = 1;
    he(Pt(this.source), (n) => {
      jt(n) && Vi(n, this), vh(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1));
    }), this.priority = t, this._start();
  }
  _detach() {
    he(Pt(this.source), (t) => {
      jt(t) && Cs(t, this);
    }), this._active.clear(), $d(this);
  }
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = Pt(this.source).reduce((n, r) => Math.max(n, (vh(r) ? r.priority : 0) + 1), 0));
  }
}
function X9(e) {
  return e.idle !== !1;
}
function by(e) {
  return !e.size || Array.from(e).every(X9);
}
function $d(e) {
  e.idle || (e.idle = !0, he(Xc(e), (t) => {
    t.done = !0;
  }), ks(e, {
    type: "idle",
    parent: e
  }));
}
Rn.assign({
  createStringInterpolator: TC,
  to: (e, t) => new Y9(e, t)
});
function Tg(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const Z9 = ["style", "children", "scrollTop", "scrollLeft"], YC = /^--/;
function J9(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !YC.test(e) && !(Vl.hasOwnProperty(e) && Vl[e]) ? t + "px" : ("" + t).trim();
}
const Sy = {};
function eM(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", r = t, {
    style: o,
    children: i,
    scrollTop: l,
    scrollLeft: s
  } = r, a = Tg(r, Z9), u = Object.values(a), c = Object.keys(a).map((f) => n || e.hasAttribute(f) ? f : Sy[f] || (Sy[f] = f.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  i !== void 0 && (e.textContent = i);
  for (let f in o)
    if (o.hasOwnProperty(f)) {
      const d = J9(f, o[f]);
      YC.test(f) ? e.style.setProperty(f, d) : e.style[f] = d;
    }
  c.forEach((f, d) => {
    e.setAttribute(f, u[d]);
  }), l !== void 0 && (e.scrollTop = l), s !== void 0 && (e.scrollLeft = s);
}
let Vl = {
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
const tM = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), nM = ["Webkit", "Ms", "Moz", "O"];
Vl = Object.keys(Vl).reduce((e, t) => (nM.forEach((n) => e[tM(n, t)] = e[t]), e), Vl);
const rM = ["x", "y", "z"], oM = /^(matrix|translate|scale|rotate|skew)/, iM = /^(translate)/, lM = /^(rotate|skew)/, Ed = (e, t) => W.num(e) && e !== 0 ? e + t : e, su = (e, t) => W.arr(e) ? e.every((n) => su(n, t)) : W.num(e) ? e === t : parseFloat(e) === t;
class sM extends Zc {
  constructor(t) {
    let {
      x: n,
      y: r,
      z: o
    } = t, i = Tg(t, rM);
    const l = [], s = [];
    (n || r || o) && (l.push([n || 0, r || 0, o || 0]), s.push((a) => [`translate3d(${a.map((u) => Ed(u, "px")).join(",")})`, su(a, 0)])), _n(i, (a, u) => {
      if (u === "transform")
        l.push([a || ""]), s.push((c) => [c, c === ""]);
      else if (oM.test(u)) {
        if (delete i[u], W.und(a))
          return;
        const c = iM.test(u) ? "px" : lM.test(u) ? "deg" : "";
        l.push(Pt(a)), s.push(u === "rotate3d" ? ([f, d, g, h]) => [`rotate3d(${f},${d},${g},${Ed(h, c)})`, su(h, 0)] : (f) => [`${u}(${f.map((d) => Ed(d, c)).join(",")})`, su(f, u.startsWith("scale") ? 1 : 0)]);
      }
    }), l.length && (i.transform = new aM(l, s)), super(i);
  }
}
class aM extends _C {
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
    t == 1 && he(this.inputs, (n) => he(n, (r) => jt(r) && Vi(r, this)));
  }
  observerRemoved(t) {
    t == 0 && he(this.inputs, (n) => he(n, (r) => jt(r) && Cs(r, this)));
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), ks(this, t);
  }
}
const uM = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], cM = ["scrollTop", "scrollLeft"];
Rn.assign({
  batchedUpdates: Kt.exports.unstable_batchedUpdates,
  createStringInterpolator: TC,
  colors: G8
});
const fM = C9(uM, {
  applyAnimatedValues: eM,
  createAnimatedStyle: (e) => new sM(e),
  getComponentProps: (e) => Tg(e, cM)
}), dM = fM.animated;
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
function ky() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = XC(t)) && (r && (r += " "), r += n);
  return r;
}
function pM(e, t, { includes: n = [], ...r } = {}) {
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
var Se = "colors", at = "sizes", Y = "space", ZC = { gap: Y, gridGap: Y, columnGap: Y, gridColumnGap: Y, rowGap: Y, gridRowGap: Y, inset: Y, insetBlock: Y, insetBlockEnd: Y, insetBlockStart: Y, insetInline: Y, insetInlineEnd: Y, insetInlineStart: Y, margin: Y, marginTop: Y, marginRight: Y, marginBottom: Y, marginLeft: Y, marginBlock: Y, marginBlockEnd: Y, marginBlockStart: Y, marginInline: Y, marginInlineEnd: Y, marginInlineStart: Y, padding: Y, paddingTop: Y, paddingRight: Y, paddingBottom: Y, paddingLeft: Y, paddingBlock: Y, paddingBlockEnd: Y, paddingBlockStart: Y, paddingInline: Y, paddingInlineEnd: Y, paddingInlineStart: Y, top: Y, right: Y, bottom: Y, left: Y, scrollMargin: Y, scrollMarginTop: Y, scrollMarginRight: Y, scrollMarginBottom: Y, scrollMarginLeft: Y, scrollMarginX: Y, scrollMarginY: Y, scrollMarginBlock: Y, scrollMarginBlockEnd: Y, scrollMarginBlockStart: Y, scrollMarginInline: Y, scrollMarginInlineEnd: Y, scrollMarginInlineStart: Y, scrollPadding: Y, scrollPaddingTop: Y, scrollPaddingRight: Y, scrollPaddingBottom: Y, scrollPaddingLeft: Y, scrollPaddingX: Y, scrollPaddingY: Y, scrollPaddingBlock: Y, scrollPaddingBlockEnd: Y, scrollPaddingBlockStart: Y, scrollPaddingInline: Y, scrollPaddingInlineEnd: Y, scrollPaddingInlineStart: Y, fontSize: "fontSizes", background: Se, backgroundColor: Se, backgroundImage: Se, borderImage: Se, border: Se, borderBlock: Se, borderBlockEnd: Se, borderBlockStart: Se, borderBottom: Se, borderBottomColor: Se, borderColor: Se, borderInline: Se, borderInlineEnd: Se, borderInlineStart: Se, borderLeft: Se, borderLeftColor: Se, borderRight: Se, borderRightColor: Se, borderTop: Se, borderTopColor: Se, caretColor: Se, color: Se, columnRuleColor: Se, fill: Se, outline: Se, outlineColor: Se, stroke: Se, textDecorationColor: Se, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: at, minBlockSize: at, maxBlockSize: at, inlineSize: at, minInlineSize: at, maxInlineSize: at, width: at, minWidth: at, maxWidth: at, height: at, minHeight: at, maxHeight: at, flexBasis: at, gridTemplateColumns: at, gridTemplateRows: at, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, hM = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, Wi = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n, ...r) => {
    const o = ((i) => JSON.stringify(i, hM))(t);
    return o in e ? e[o] : e[o] = n(t, ...r);
  };
}, ao = Symbol.for("sxs.internal"), Og = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), Cy = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: mM } = Object.prototype, bh = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), gM = /\s+(?![^()]*\))/, Bo = (e) => (t) => e(...typeof t == "string" ? String(t).split(gM) : [t]), $y = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: Bo((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: Bo((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: Bo((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: Bo((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: Bo((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: Bo((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, Ad = /([\d.]+)([^]*)/, vM = (e, t) => e.length ? e.reduce((n, r) => (n.push(...t.map((o) => o.includes("&") ? o.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(o) ? `:is(${r})` : r) : r + " " + o)), n), []) : t, yM = (e, t) => e in xM && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (n, r, o, i) => r + (o === "stretch" ? `-moz-available${i};${bh(e)}:${r}-webkit-fill-available` : `-moz-fit-content${i};${bh(e)}:${r}fit-content`) + i) : String(t), xM = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, Xn = (e) => e ? e + "-" : "", JC = (e, t, n) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (r, o, i, l, s) => l == "$" == !!i ? r : (o || l == "--" ? "calc(" : "") + "var(--" + (l === "$" ? Xn(t) + (s.includes("$") ? "" : Xn(n)) + s.replace(/\$/g, "-") : s) + ")" + (o || l == "--" ? "*" + (o || "") + (i || "1") + ")" : "")), wM = /\s*,\s*(?![^()]*\))/, bM = Object.prototype.toString, ni = (e, t, n, r, o) => {
  let i, l, s;
  const a = (u, c, f) => {
    let d, g;
    const h = (v) => {
      for (d in v) {
        const y = d.charCodeAt(0) === 64, x = y && Array.isArray(v[d]) ? v[d] : [v[d]];
        for (g of x) {
          const b = /[A-Z]/.test(p = d) ? p : p.replace(/-[^]/g, (S) => S[1].toUpperCase()), A = typeof g == "object" && g && g.toString === bM && (!r.utils[b] || !c.length);
          if (b in r.utils && !A) {
            const S = r.utils[b];
            if (S !== l) {
              l = S, h(S(g)), l = null;
              continue;
            }
          } else if (b in $y) {
            const S = $y[b];
            if (S !== s) {
              s = S, h(S(g)), s = null;
              continue;
            }
          }
          if (y && (w = d.slice(1) in r.media ? "@media " + r.media[d.slice(1)] : d, d = w.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (S, E, $, P, _, I) => {
            const M = Ad.test(E), L = 0.0625 * (M ? -1 : 1), [B, z] = M ? [P, E] : [E, P];
            return "(" + ($[0] === "=" ? "" : $[0] === ">" === M ? "max-" : "min-") + B + ":" + ($[0] !== "=" && $.length === 1 ? z.replace(Ad, (R, H, N) => Number(H) + L * ($ === ">" ? 1 : -1) + N) : z) + (_ ? ") and (" + (_[0] === ">" ? "min-" : "max-") + B + ":" + (_.length === 1 ? I.replace(Ad, (R, H, N) => Number(H) + L * (_ === ">" ? -1 : 1) + N) : I) : "") + ")";
          })), A) {
            const S = y ? f.concat(d) : [...f], E = y ? [...c] : vM(c, d.split(wM));
            i !== void 0 && o(Ey(...i)), i = void 0, a(g, E, S);
          } else
            i === void 0 && (i = [[], c, f]), d = y || d.charCodeAt(0) !== 36 ? d : `--${Xn(r.prefix)}${d.slice(1).replace(/\$/g, "-")}`, g = A ? g : typeof g == "number" ? g && b in SM ? String(g) + "px" : String(g) : JC(yM(b, g == null ? "" : g), r.prefix, r.themeMap[b]), i[0].push(`${y ? `${d} ` : `${bh(d)}:`}${g}`);
        }
      }
      var w, p;
    };
    h(u), i !== void 0 && o(Ey(...i)), i = void 0;
  };
  a(e, t, n);
}, Ey = (e, t, n) => `${n.map((r) => `${r}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(n.length ? n.length + 1 : 0).join("}")}`, SM = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, Ay = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), uo = (e) => ((t) => {
  let n, r = "";
  for (n = Math.abs(t); n > 52; n = n / 52 | 0)
    r = Ay(n % 52) + r;
  return Ay(n % 52) + r;
})(((t, n) => {
  let r = n.length;
  for (; r; )
    t = 33 * t ^ n.charCodeAt(--r);
  return t;
})(5381, JSON.stringify(e)) >>> 0), Sl = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], kM = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, CM = (e) => {
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
      if (kM(s)) {
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
      $M(l[a]);
    }
  };
  return r(), t;
}, $M = (e) => {
  const t = e.group;
  let n = t.cssRules.length;
  e.apply = (r) => {
    try {
      t.insertRule(r, n), ++n;
    } catch {
    }
  };
}, dl = Symbol(), EM = Wi(), Py = (e, t) => EM(e, () => (...n) => {
  let r = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const o of n)
    if (o != null)
      if (o[ao]) {
        r.type == null && (r.type = o[ao].type);
        for (const i of o[ao].composers)
          r.composers.add(i);
      } else
        o.constructor !== Object || o.$$typeof ? r.type == null && (r.type = o) : r.composers.add(AM(o, e));
  return r.type == null && (r.type = "span"), r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]), PM(e, r, t);
}), AM = ({ variants: e, compoundVariants: t, defaultVariants: n, ...r }, o) => {
  const i = `${Xn(o.prefix)}c-${uo(r)}`, l = [], s = [], a = /* @__PURE__ */ Object.create(null), u = [];
  for (const d in n)
    a[d] = String(n[d]);
  if (typeof e == "object" && e)
    for (const d in e) {
      c = a, f = d, mM.call(c, f) || (a[d] = "undefined");
      const g = e[d];
      for (const h in g) {
        const v = { [d]: String(h) };
        String(h) === "undefined" && u.push(d);
        const w = g[h], p = [v, w, !Cy(w)];
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
      const v = [h, g, !Cy(g)];
      s.push(v);
    }
  return [i, r, l, s, a, u];
}, PM = (e, t, n) => {
  const [r, o, i, l] = _M(t.composers), s = typeof t.type == "function" || t.type.$$typeof ? ((f) => {
    function d() {
      for (let g = 0; g < d[dl].length; g++) {
        const [h, v] = d[dl][g];
        f.rules[h].apply(v);
      }
      return d[dl] = [], null;
    }
    return d[dl] = [], d.rules = {}, Sl.forEach((g) => d.rules[g] = { apply: (h) => d[dl].push([g, h]) }), d;
  })(n) : null, a = (s || n).rules, u = `.${r}${o.length > 1 ? `:where(.${o.slice(1).join(".")})` : ""}`, c = (f) => {
    f = typeof f == "object" && f || RM;
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
      const A = _y(x, h, e.media), S = _y(b, h, e.media, !0);
      for (const E of A)
        if (E !== void 0)
          for (const [$, P, _] of E) {
            const I = `${p}-${uo(P)}-${$}`;
            v.add(I);
            const M = (_ ? n.rules.resonevar : n.rules.onevar).cache, L = _ ? a.resonevar : a.onevar;
            M.has(I) || (M.add(I), ni(P, [`.${I}`], [], e, (B) => {
              L.apply(B);
            }));
          }
      for (const E of S)
        if (E !== void 0)
          for (const [$, P] of E) {
            const _ = `${p}-${uo(P)}-${$}`;
            v.add(_), n.rules.allvar.cache.has(_) || (n.rules.allvar.cache.add(_), ni(P, [`.${_}`], [], e, (I) => {
              a.allvar.apply(I);
            }));
          }
    }
    if (typeof d == "object" && d) {
      const p = `${r}-i${uo(d)}-css`;
      v.add(p), n.rules.inline.cache.has(p) || (n.rules.inline.cache.add(p), ni(d, [`.${p}`], [], e, (y) => {
        a.inline.apply(y);
      }));
    }
    for (const p of String(f.className || "").trim().split(/\s+/))
      p && v.add(p);
    const w = g.className = [...v].join(" ");
    return { type: t.type, className: w, selector: u, props: g, toString: () => w, deferredInjector: s };
  };
  return Og(c, { className: r, selector: u, [ao]: t, toString: () => (n.rules.styled.cache.has(r) || c(), r) });
}, _M = (e) => {
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
}, _y = (e, t, n, r) => {
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
}, RM = {}, IM = Wi(), TM = (e, t) => IM(e, () => (...n) => {
  const r = () => {
    for (let o of n) {
      o = typeof o == "object" && o || {};
      let i = uo(o);
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
  return Og(r, { toString: r });
}), OM = Wi(), MM = (e, t) => OM(e, () => (n) => {
  const r = `${Xn(e.prefix)}k-${uo(n)}`, o = () => {
    if (!t.rules.global.cache.has(r)) {
      t.rules.global.cache.add(r);
      const i = [];
      ni(n, [], [], e, (s) => i.push(s));
      const l = `@keyframes ${r}{${i.join("")}}`;
      t.rules.global.apply(l);
    }
    return r;
  };
  return Og(o, { get name() {
    return o();
  }, toString: o });
}), NM = class {
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
}, DM = Wi(), LM = (e, t) => DM(e, () => (n, r) => {
  r = typeof n == "object" && n || Object(r);
  const o = `.${n = (n = typeof n == "string" ? n : "") || `${Xn(e.prefix)}t-${uo(r)}`}`, i = {}, l = [];
  for (const a in r) {
    i[a] = {};
    for (const u in r[a]) {
      const c = `--${Xn(e.prefix)}${a}-${u}`, f = JC(String(r[a][u]), e.prefix, a);
      i[a][u] = new NM(u, f, a, e.prefix), l.push(`${c}:${f}`);
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
}), FM = Wi(), zM = Wi(), BM = (e) => {
  const t = ((n) => {
    let r = !1;
    const o = FM(n, (i) => {
      r = !0;
      const l = "prefix" in (i = typeof i == "object" && i || {}) ? String(i.prefix) : "", s = typeof i.media == "object" && i.media || {}, a = typeof i.root == "object" ? i.root || null : globalThis.document || null, u = typeof i.theme == "object" && i.theme || {}, c = { prefix: l, media: s, theme: u, themeMap: typeof i.themeMap == "object" && i.themeMap || { ...ZC }, utils: typeof i.utils == "object" && i.utils || {} }, f = CM(a), d = { css: Py(c, f), globalCss: TM(c, f), keyframes: MM(c, f), createTheme: LM(c, f), reset() {
        f.reset(), d.theme.toString();
      }, theme: {}, sheet: f, config: c, prefix: l, getCssText: f.toString, toString: f.toString };
      return String(d.theme = d.createTheme(u)), d;
    });
    return r || o.reset(), o;
  })(e);
  return t.styled = (({ config: n, sheet: r }) => zM(n, () => {
    const o = Py(n, r);
    return (...i) => {
      const l = o(...i), s = l[ao].type, a = je.forwardRef((u, c) => {
        const f = u && u.as || s, { props: d, deferredInjector: g } = l(u);
        return delete d.as, d.ref = c, g ? je.createElement(je.Fragment, null, je.createElement(f, d), je.createElement(g, null)) : je.createElement(f, d);
      });
      return a.className = l.className, a.displayName = `Styled.${s.displayName || s.name || s}`, a.selector = l.selector, a.toString = () => l.selector, a[ao] = l[ao], a;
    };
  }))(t), t;
};
function jM(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _s(e, t) {
  return _s = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, _s(e, t);
}
function HM(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, _s(e, t);
}
function Sh(e) {
  return Sh = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Sh(e);
}
function VM(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function UM() {
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
function au(e, t, n) {
  return UM() ? au = Reflect.construct : au = function(o, i, l) {
    var s = [null];
    s.push.apply(s, i);
    var a = Function.bind.apply(o, s), u = new a();
    return l && _s(u, l.prototype), u;
  }, au.apply(null, arguments);
}
function kh(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return kh = function(r) {
    if (r === null || !VM(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return au(r, arguments, Sh(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), _s(o, r);
  }, kh(e);
}
var Cr = /* @__PURE__ */ function(e) {
  HM(t, e);
  function t(n) {
    var r;
    return r = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + n + " for more information.") || this, jM(r);
  }
  return t;
}(/* @__PURE__ */ kh(Error)), WM = /--[\S]*/g;
function qM(e, t) {
  if (!e || !e.match(WM))
    throw new Cr(73);
  var n;
  if (typeof document < "u" && document.documentElement !== null && (n = getComputedStyle(document.documentElement).getPropertyValue(e)), n)
    return n.trim();
  if (t)
    return t;
  throw new Cr(74);
}
function Pd(e) {
  return Math.round(e * 255);
}
function GM(e, t, n) {
  return Pd(e) + "," + Pd(t) + "," + Pd(n);
}
function Ry(e, t, n, r) {
  if (r === void 0 && (r = GM), t === 0)
    return r(n, n, n);
  var o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * t, l = i * (1 - Math.abs(o % 2 - 1)), s = 0, a = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, a = l) : o >= 1 && o < 2 ? (s = l, a = i) : o >= 2 && o < 3 ? (a = i, u = l) : o >= 3 && o < 4 ? (a = l, u = i) : o >= 4 && o < 5 ? (s = l, u = i) : o >= 5 && o < 6 && (s = i, u = l);
  var c = n - i / 2, f = s + c, d = a + c, g = u + c;
  return r(f, d, g);
}
var Iy = {
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
function QM(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return Iy[t] ? "#" + Iy[t] : e;
}
var KM = /^#[a-fA-F0-9]{6}$/, YM = /^#[a-fA-F0-9]{8}$/, XM = /^#[a-fA-F0-9]{3}$/, ZM = /^#[a-fA-F0-9]{4}$/, _d = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i, JM = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i, eN = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, tN = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
function nN(e) {
  if (typeof e != "string")
    throw new Cr(3);
  var t = QM(e);
  if (t.match(KM))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(YM)) {
    var n = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: n
    };
  }
  if (t.match(XM))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(ZM)) {
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
  var i = JM.exec(t.substring(0, 50));
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
      alpha: parseFloat("" + i[4])
    };
  var l = eN.exec(t);
  if (l) {
    var s = parseInt("" + l[1], 10), a = parseInt("" + l[2], 10) / 100, u = parseInt("" + l[3], 10) / 100, c = "rgb(" + Ry(s, a, u) + ")", f = _d.exec(c);
    if (!f)
      throw new Cr(4, t, c);
    return {
      red: parseInt("" + f[1], 10),
      green: parseInt("" + f[2], 10),
      blue: parseInt("" + f[3], 10)
    };
  }
  var d = tN.exec(t.substring(0, 50));
  if (d) {
    var g = parseInt("" + d[1], 10), h = parseInt("" + d[2], 10) / 100, v = parseInt("" + d[3], 10) / 100, w = "rgb(" + Ry(g, h, v) + ")", p = _d.exec(w);
    if (!p)
      throw new Cr(4, t, w);
    return {
      red: parseInt("" + p[1], 10),
      green: parseInt("" + p[2], 10),
      blue: parseInt("" + p[3], 10),
      alpha: parseFloat("" + d[4])
    };
  }
  throw new Cr(5);
}
var rN = function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, Ty = rN;
function jo(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function Oy(e, t, n) {
  if (typeof e == "number" && typeof t == "number" && typeof n == "number")
    return Ty("#" + jo(e) + jo(t) + jo(n));
  if (typeof e == "object" && t === void 0 && n === void 0)
    return Ty("#" + jo(e.red) + jo(e.green) + jo(e.blue));
  throw new Cr(6);
}
function oN(e, t, n, r) {
  if (typeof e == "string" && typeof t == "number") {
    var o = nN(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof n == "number" && typeof r == "number")
      return r >= 1 ? Oy(e, t, n) : "rgba(" + e + "," + t + "," + n + "," + r + ")";
    if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0)
      return e.alpha >= 1 ? Oy(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new Cr(7);
}
const My = {
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
}, Ny = (e) => e.map((t) => `${t} cubic-bezier(0.4, 0, 0.2, 1) 150ms`).join(","), Nt = {
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
}, Mg = BM({
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
    space: My,
    sizes: {
      ...My,
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
      default: Ny([
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
      colors: Ny([
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
      backgroundColor: oN(qM("--mayumi-colors-underPageBackgroundColor", "#1e1e1e"), 0.85),
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
}), iN = Mg.styled;
Mg.globalCss;
Mg.getCssText;
var Dy = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, tn = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, lN = (...e) => [...e].flat().filter(Boolean), e2 = (e, t) => {
  let n = {};
  for (let r in e)
    t != null && t.hasOwnProperty(r) ? n[r] = typeof e[r] == "object" ? e2(e[r], t[r]) : t[r] + " " + e[r] : n[r] = e[r];
  for (let r in t)
    n.hasOwnProperty(r) || (n[r] = t[r]);
  return n;
}, Ly = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
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
var Ng = "-";
function aN(e) {
  var t = cN(e);
  function n(o) {
    var i = o.split(Ng);
    return i[0] === "" && i.length !== 1 && i.shift(), n2(i, t) || uN(o);
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
    var l = e.join(Ng);
    return (n = t.validators.find(function(s) {
      var a = s.validator;
      return a(l);
    })) == null ? void 0 : n.classGroupId;
  }
}
var Fy = /^\[(.+)\]$/;
function uN(e) {
  if (Fy.test(e)) {
    var t = Fy.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function cN(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = dN(Object.entries(e.classGroups), n);
  return o.forEach(function(i) {
    var l = i[0], s = i[1];
    $h(s, r, l, t);
  }), r;
}
function $h(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var i = o === "" ? t : zy(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (fN(o)) {
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
      var s = l[0], a = l[1];
      $h(a, zy(t, s), n, r);
    });
  });
}
function zy(e, t) {
  var n = e;
  return t.split(Ng).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function fN(e) {
  return e.isThemeGetter;
}
function dN(e, t) {
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
function pN(e) {
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
var r2 = "!";
function hN(e) {
  var t = e.separator || ":";
  return function(r) {
    for (var o = 0, i = [], l = 0, s = 0; s < r.length; s++) {
      var a = r[s];
      o === 0 && a === t[0] && (t.length === 1 || r.slice(s, s + t.length) === t) && (i.push(r.slice(l, s)), l = s + t.length), a === "[" ? o++ : a === "]" && o--;
    }
    var u = i.length === 0 ? r : r.substring(l), c = u.startsWith(r2), f = c ? u.substring(1) : u;
    return {
      modifiers: i,
      hasImportantModifier: c,
      baseClassName: f
    };
  };
}
function mN(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function gN(e) {
  return Ch({
    cache: pN(e.cacheSize),
    splitModifiers: hN(e)
  }, aN(e));
}
var vN = /\s+/;
function yN(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(vN).map(function(l) {
    var s = n(l), a = s.modifiers, u = s.hasImportantModifier, c = s.baseClassName, f = r(c);
    if (!f)
      return {
        isTailwindClass: !1,
        originalClassName: l
      };
    var d = mN(a).join(":"), g = u ? d + r2 : d;
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
function Eh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, i, l = s;
  function s(u) {
    var c = t[0], f = t.slice(1), d = f.reduce(function(g, h) {
      return h(g);
    }, c());
    return r = gN(d), o = r.cache.get, i = r.cache.set, l = a, a(u);
  }
  function a(u) {
    var c = o(u);
    if (c)
      return c;
    var f = yN(u, r);
    return i(u, f), f;
  }
  return function() {
    return l(sN.apply(null, arguments));
  };
}
function _e(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var o2 = /^\[(?:([a-z-]+):)?(.+)\]$/i, xN = /^\d+\/\d+$/, wN = /* @__PURE__ */ new Set(["px", "full", "screen"]), bN = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, SN = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))/, kN = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function en(e) {
  return Ul(e) || wN.has(e) || xN.test(e) || eo(e);
}
function eo(e) {
  return Po(e, "length", PN);
}
function CN(e) {
  return Po(e, "size", i2);
}
function $N(e) {
  return Po(e, "position", i2);
}
function EN(e) {
  return Po(e, "url", _N);
}
function Rd(e) {
  return Po(e, "number", Ul);
}
function Ul(e) {
  return !Number.isNaN(Number(e));
}
function pl(e) {
  return By(e) || Po(e, "number", By);
}
function ze(e) {
  return o2.test(e);
}
function hl() {
  return !0;
}
function dr(e) {
  return bN.test(e);
}
function AN(e) {
  return Po(e, "", RN);
}
function Po(e, t, n) {
  var r = o2.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function PN(e) {
  return SN.test(e);
}
function i2() {
  return !1;
}
function _N(e) {
  return e.startsWith("url(");
}
function By(e) {
  return Number.isInteger(Number(e));
}
function RN(e) {
  return kN.test(e);
}
function Ah() {
  var e = _e("colors"), t = _e("spacing"), n = _e("blur"), r = _e("brightness"), o = _e("borderColor"), i = _e("borderRadius"), l = _e("borderSpacing"), s = _e("borderWidth"), a = _e("contrast"), u = _e("grayscale"), c = _e("hueRotate"), f = _e("invert"), d = _e("gap"), g = _e("gradientColorStops"), h = _e("inset"), v = _e("margin"), w = _e("opacity"), p = _e("padding"), y = _e("saturate"), x = _e("scale"), b = _e("sepia"), A = _e("skew"), S = _e("space"), E = _e("translate"), $ = function() {
    return ["auto", "contain", "none"];
  }, P = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, _ = function() {
    return ["auto", t];
  }, I = function() {
    return ["", en];
  }, M = function() {
    return ["auto", Ul, ze];
  }, L = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, B = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, z = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, R = function() {
    return ["start", "end", "center", "between", "around", "evenly"];
  }, H = function() {
    return ["", "0", ze];
  }, N = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, T = function() {
    return [Ul, Rd];
  }, O = function() {
    return [Ul, ze];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [hl],
      spacing: [en],
      blur: ["none", "", dr, eo],
      brightness: T(),
      borderColor: [e],
      borderRadius: ["none", "", "full", dr, eo],
      borderSpacing: [t],
      borderWidth: I(),
      contrast: T(),
      grayscale: H(),
      hueRotate: O(),
      invert: H(),
      gap: [t],
      gradientColorStops: [e],
      inset: _(),
      margin: _(),
      opacity: T(),
      padding: [t],
      saturate: T(),
      scale: T(),
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
        z: ["auto", pl]
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
        order: ["first", "last", "none", pl]
      }],
      "grid-cols": [{
        "grid-cols": [hl]
      }],
      "col-start-end": [{
        col: ["auto", {
          span: [pl]
        }, ze]
      }],
      "col-start": [{
        "col-start": M()
      }],
      "col-end": [{
        "col-end": M()
      }],
      "grid-rows": [{
        "grid-rows": [hl]
      }],
      "row-start-end": [{
        row: ["auto", {
          span: [pl]
        }, ze]
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
        "min-w": ["min", "max", "fit", en]
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
        "min-h": ["min", "max", "fit", en]
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
        font: [hl]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", eo]
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
        bg: [].concat(L(), [$N])
      }],
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      "bg-size": [{
        bg: ["auto", "cover", "contain", CN]
      }],
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, EN]
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
        shadow: ["", "inner", "none", dr, AN]
      }],
      "shadow-color": [{
        shadow: [hl]
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
        "drop-shadow": ["", "none", dr, ze]
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
        rotate: [pl, ze]
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
        stroke: [en, Rd]
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
function TN(e, t) {
  for (var n in t)
    l2(e, n, t[n]);
  return e;
}
var ON = Object.prototype.hasOwnProperty, MN = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function l2(e, t, n) {
  if (!ON.call(e, t) || MN.has(typeof n) || n === null) {
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
function NN(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return typeof e == "function" ? Eh.apply(void 0, [Ah, e].concat(n)) : Eh.apply(void 0, [function() {
    return TN(Ah(), e);
  }].concat(n));
}
var tc = (...e) => e.flat(1 / 0).filter(Boolean).join(" "), ml = (...e) => (t = {}) => t.twMerge ? (tn(t.twMergeConfig) ? IN : NN(t.twMergeConfig))(tc(e)) : tc(e), jy = (e, t) => {
  let n = {};
  return typeof e != "object" || typeof t != "object" || Object.keys(e).forEach((r) => {
    t[r] ? n[r] = tc([e[r], t[r]]) : n[r] = e[r];
  }), n;
}, DN = { twMerge: !0, twMergeConfig: {} }, LN = (e, t = DN) => {
  var n, r, o, i, l;
  let { slots: s = {}, variants: a = {}, compoundVariants: u = [], defaultVariants: c = {} } = e, f = tc((n = e == null ? void 0 : e.extend) == null ? void 0 : n.base, e == null ? void 0 : e.base), d = e2(a, (r = e == null ? void 0 : e.extend) == null ? void 0 : r.variants), g = Object.assign({}, (o = e == null ? void 0 : e.extend) == null ? void 0 : o.defaultVariants, c), h = tn(s) ? {} : { base: e == null ? void 0 : e.base, ...s }, v = tn((i = e == null ? void 0 : e.extend) == null ? void 0 : i.slots) ? h : jy((l = e == null ? void 0 : e.extend) == null ? void 0 : l.slots, tn(h) ? { base: e == null ? void 0 : e.base } : h), w = (y) => {
    var x, b, A;
    if (tn(d) && tn(s) && tn((x = e == null ? void 0 : e.extend) == null ? void 0 : x.slots))
      return ml(f, y == null ? void 0 : y.class, y == null ? void 0 : y.className)(t);
    if (u && !Array.isArray(u))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof u}`);
    let S = (B, z, R = [], H) => {
      let N = R;
      if (typeof z == "string")
        N.push(Ly(z).split(" ").map((T) => `${B}:${T}`));
      else if (Array.isArray(z))
        N.push(z.flatMap((T) => `${B}:${T}`));
      else if (typeof z == "object" && typeof H == "string") {
        let T = z == null ? void 0 : z[H];
        if (T && typeof T == "string") {
          let O = Ly(T);
          N[H] = N[H] ? [...N[H], ...O.split(" ").map((k) => `${B}:${k}`)] : O.split(" ").map((k) => `${B}:${k}`);
        } else
          Array.isArray(T) && T.length > 0 && (N[H] = T.flatMap((O) => `${B}:${O}`));
      }
      return N;
    }, E = (B, z = d, R = null) => {
      let H = z == null ? void 0 : z[B];
      if (typeof H != "object" || tn(H))
        return null;
      let N = y == null ? void 0 : y[B], T = g == null ? void 0 : g[B], O = [];
      if (N === null)
        return null;
      let k = Dy(N);
      typeof k == "object" && (O = Object.keys(k).reduce((J, ne) => {
        let se = k[ne], ee = H == null ? void 0 : H[se];
        return ne === "initial" ? (T = se, J) : S(ne, ee, J, R);
      }, []));
      let C = H[k] || H[Dy(T)];
      return typeof O == "object" && typeof R == "string" && O[R] ? jy(O, C) : O.length > 0 ? [C, ...O] : C;
    }, $ = () => d ? Object.keys(d).map((B) => E(B, d)) : null, P = (B) => !d || typeof d != "object" ? null : Object.keys(d).map((z) => {
      let R = E(z, d, B);
      return B === "base" && typeof R == "string" ? R : R && R[B];
    }).filter(Boolean), _ = y && Object.fromEntries(Object.entries(y).filter(([, B]) => B !== void 0)), I = (B = []) => B == null ? void 0 : B.filter(({ class: z, className: R, ...H }) => Object.entries(H).every(([N, T]) => {
      var O;
      let k = typeof (y == null ? void 0 : y[N]) == "object" ? (O = y[N]) == null ? void 0 : O.initial : {}, C = { ...g, ...k, ..._ };
      return Array.isArray(T) ? T.includes(C[N]) : C[N] === T;
    })).flatMap(({ class: z, className: R }) => [z, R]), M = () => {
      var B;
      let z = I(u), R = I((B = e == null ? void 0 : e.extend) == null ? void 0 : B.compoundVariants);
      return lN(R, z);
    }, L = () => {
      let B = M();
      return Array.isArray(B) ? B.reduce((z, R) => (typeof R == "string" && (z.base = ml(z.base, R)(t)), typeof R == "object" && Object.entries(R).forEach(([H, N]) => {
        z[H] = ml(z[H], N)(t);
      }), z), {}) : B;
    };
    if (!tn(s) || !tn((b = e == null ? void 0 : e.extend) == null ? void 0 : b.slots)) {
      let B = (A = L()) != null ? A : [];
      return { ...typeof v == "object" && !tn(v) ? Object.keys(v).reduce((z, R) => (z[R] = (H) => ml(v[R], P(R), B == null ? void 0 : B[R], H == null ? void 0 : H.class, H == null ? void 0 : H.className)(t), z), {}) : {} };
    }
    return ml(f, $(), M(), y == null ? void 0 : y.class, y == null ? void 0 : y.className)(t);
  }, p = () => {
    if (!(!d || typeof d != "object"))
      return Object.keys(d);
  };
  return w.variantKeys = p(), w.base = f, w.slots = v, w.variants = d, w.defaultVariants = g, w.compoundVariants = u, w;
};
const FN = LN({
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
}), zN = iN("div", {
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
}), BN = {
  mass: 1,
  tension: 210,
  friction: 26,
  precision: 0.01,
  velocity: 0
}, Dg = je.forwardRef(({
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
  const p = K9({
    transform: c ? "scale(1, 1)" : "scale(1.2, 1.5)",
    duration: 50,
    config: BN
  });
  pM(u, () => f(!1));
  const {
    base: y,
    effect: x,
    input: b
  } = FN({
    focus: c,
    light: l,
    ghost: i,
    size: r
  });
  return /* @__PURE__ */ ue(zN, {
    style: e,
    className: ky("mayumi-input", y(), t),
    css: o,
    size: r,
    children: [n && /* @__PURE__ */ D("span", {
      className: "mayumi-input-icon",
      children: n
    }), !i && !l && je.createElement(dM.div, {
      className: ky("mayumi-input-effect", x()),
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
Dg.displayName = "input";
function Ti({
  children: e,
  value: t,
  isCommand: n = !1,
  onSelect: r,
  disabled: o = !1
}) {
  return /* @__PURE__ */ ue(un.Item, {
    disabled: o,
    value: t,
    onSelect: r,
    children: [e, /* @__PURE__ */ D("span", {
      "cmdk-raycast-meta": "",
      children: n ? "Command" : "Application"
    })]
  });
}
function Ur({
  children: e,
  shortcut: t,
  value: n,
  onSelect: r
}) {
  return /* @__PURE__ */ ue(un.Item, {
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
const jN = (e) => /* @__PURE__ */ m.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 5.5H9C10.1046 5.5 11 6.39543 11 7.5V16.5C11 17.0523 10.5523 17.5 10 17.5H4C3.44772 17.5 3 17.0523 3 16.5V6.5C3 5.94772 3.44772 5.5 4 5.5ZM14 19.5C13.6494 19.5 13.3128 19.4398 13 19.3293V19.5C13 20.0523 12.5523 20.5 12 20.5C11.4477 20.5 11 20.0523 11 19.5V19.3293C10.6872 19.4398 10.3506 19.5 10 19.5H4C2.34315 19.5 1 18.1569 1 16.5V6.5C1 4.84315 2.34315 3.5 4 3.5H9C10.1947 3.5 11.2671 4.02376 12 4.85418C12.7329 4.02376 13.8053 3.5 15 3.5H20C21.6569 3.5 23 4.84315 23 6.5V16.5C23 18.1569 21.6569 19.5 20 19.5H14ZM13 7.5V16.5C13 17.0523 13.4477 17.5 14 17.5H20C20.5523 17.5 21 17.0523 21 16.5V6.5C21 5.94772 20.5523 5.5 20 5.5H15C13.8954 5.5 13 6.39543 13 7.5ZM5 7.5H9V9.5H5V7.5ZM15 7.5H19V9.5H15V7.5ZM19 10.5H15V12.5H19V10.5ZM5 10.5H9V12.5H5V10.5ZM19 13.5H15V15.5H19V13.5ZM5 13.5H9V15.5H5V13.5Z", fill: "currentColor" })), La = "ask-chatgpt", nc = "ask-chatgpt-with", Rs = "translate-with", HN = "summary-with", VN = "open-convenstions-history", UN = "clear-storage", In = {
  ASK_CHATGPT_WITH: nc,
  TRANSLATE_WITH: Rs,
  SUMMARY_WITH: HN,
  OPEN_HISTORY: VN,
  CLEAR_STORAGE: UN
}, rc = "ask-chatgpt-with-page", Ph = "config-page", Is = "translate-with-page", WN = "summary-with-page", mr = "home-page", wt = {
  ASK_CHATGPT_PAGE: rc,
  CONFIG_PAGE: Ph,
  TRANSLATE_WITH_PAGE: Is,
  HOME_PAGE: mr,
  SUMMARY_WITH_PAGE: WN
}, qN = "OPENAI_API_KEY", Hy = "options";
function GN() {
  const {
    updateHistoryOpen: e,
    setOpen: t
  } = En();
  return /* @__PURE__ */ ue(Ti, {
    isCommand: !0,
    value: In.OPEN_HISTORY,
    onSelect: () => {
      t(!1), e(!0);
    },
    children: [/* @__PURE__ */ D(jN, {}), "View History"]
  });
}
function QN() {
  const {
    updateHistoryOpen: e,
    setOpen: t
  } = En();
  return /* @__PURE__ */ D(Mt, {
    children: /* @__PURE__ */ D(Ur, {
      value: In.OPEN_HISTORY,
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
const KN = (e) => /* @__PURE__ */ m.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z", fill: "currentColor" }), /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z", fill: "currentColor" }));
function YN({
  onSelect: e
}) {
  return /* @__PURE__ */ ue(Ti, {
    isCommand: !0,
    onSelect: () => e(wt.CONFIG_PAGE),
    value: wt.CONFIG_PAGE,
    children: [/* @__PURE__ */ D(KN, {}), "Config"]
  });
}
function XN({
  onSelect: e
}) {
  return /* @__PURE__ */ D(Mt, {
    children: /* @__PURE__ */ D(Ur, {
      value: wt.CONFIG_PAGE,
      onSelect: () => e(wt.CONFIG_PAGE),
      shortcut: "\u21B5",
      children: /* @__PURE__ */ D("span", {
        className: "truncate",
        children: "Config"
      })
    })
  });
}
const ZN = (e) => /* @__PURE__ */ m.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 6V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V6H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H17ZM15 5H9V6H15V5ZM17 8H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8Z", fill: "currentColor" })), JN = () => ({
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
}), s2 = JN();
function eD() {
  const {
    clear: e
  } = yo();
  return /* @__PURE__ */ ue(Ti, {
    isCommand: !0,
    value: In.CLEAR_STORAGE,
    onSelect: () => {
      e(), s2.clear();
    },
    children: [/* @__PURE__ */ D(ZN, {}), "Clear Storage"]
  });
}
function tD() {
  const {
    clear: e
  } = yo();
  return /* @__PURE__ */ D(Mt, {
    children: /* @__PURE__ */ D(Ur, {
      value: In.CLEAR_STORAGE,
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
function nD(e) {
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
function rD({
  onSelect: e
}) {
  return /* @__PURE__ */ ue(Ti, {
    isCommand: !0,
    onSelect: () => e(wt.SUMMARY_WITH_PAGE),
    value: wt.SUMMARY_WITH_PAGE,
    children: [/* @__PURE__ */ D("i", {
      className: "gg-notes/0.8 text-mayumi-gray-1200"
    }), "Summary"]
  });
}
function oD({
  onSelect: e
}) {
  return /* @__PURE__ */ ue(Mt, {
    children: [/* @__PURE__ */ D(Ur, {
      value: In.SUMMARY_WITH,
      onSelect: () => {
        var t;
        return e(In.SUMMARY_WITH, {
          text: (t = document.body.textContent) != null ? t : ""
        });
      },
      shortcut: "\u21B5",
      children: /* @__PURE__ */ D("span", {
        className: "truncate",
        children: "Summary current page"
      })
    }), /* @__PURE__ */ D(nD, {
      page: wt.SUMMARY_WITH_PAGE,
      onSelect: e
    })]
  });
}
function iD(e) {
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
function _h(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function lD(e) {
  const t = e + "CollectionProvider", [n, r] = Bi(t), [o, i] = n(t, {
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
    return /* @__PURE__ */ je.createElement(_i, {
      ref: y
    }, w);
  }), u = e + "CollectionItemSlot", c = "data-radix-collection-item", f = /* @__PURE__ */ je.forwardRef((g, h) => {
    const { scope: v, children: w, ...p } = g, y = je.useRef(null), x = Ce(h, y), b = i(u, v);
    return je.useEffect(() => (b.itemMap.set(y, {
      ref: y,
      ...p
    }), () => void b.itemMap.delete(y))), /* @__PURE__ */ je.createElement(_i, {
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
const sD = /* @__PURE__ */ m.exports.createContext(void 0);
function a2(e) {
  const t = m.exports.useContext(sD);
  return e || t || "ltr";
}
function aD(e) {
  const t = m.exports.useRef({
    value: e,
    previous: e
  });
  return m.exports.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const uD = /* @__PURE__ */ m.exports.forwardRef((e, t) => /* @__PURE__ */ m.exports.createElement(Ve.span, Z({}, e, {
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
}))), cD = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], fD = [
  " ",
  "Enter"
], ef = "Select", [tf, nf, dD] = lD(ef), [qi, $z] = Bi(ef, [
  dD,
  Hc
]), Lg = Hc(), [pD, _o] = qi(ef), [hD, mD] = qi(ef), gD = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: i, value: l, defaultValue: s, onValueChange: a, dir: u, name: c, autoComplete: f, disabled: d, required: g } = e, h = Lg(t), [v, w] = m.exports.useState(null), [p, y] = m.exports.useState(null), [x, b] = m.exports.useState(!1), A = a2(u), [S = !1, E] = Uu({
    prop: r,
    defaultProp: o,
    onChange: i
  }), [$, P] = Uu({
    prop: l,
    defaultProp: s,
    onChange: a
  }), _ = m.exports.useRef(null), I = v ? Boolean(v.closest("form")) : !0, [M, L] = m.exports.useState(/* @__PURE__ */ new Set()), B = Array.from(M).map(
    (z) => z.props.value
  ).join(";");
  return /* @__PURE__ */ m.exports.createElement(Uk, h, /* @__PURE__ */ m.exports.createElement(pD, {
    required: g,
    scope: t,
    trigger: v,
    onTriggerChange: w,
    valueNode: p,
    onValueNodeChange: y,
    valueNodeHasChildren: x,
    onValueNodeHasChildrenChange: b,
    contentId: mi(),
    value: $,
    onValueChange: P,
    open: S,
    onOpenChange: E,
    dir: A,
    triggerPointerDownPosRef: _,
    disabled: d
  }, /* @__PURE__ */ m.exports.createElement(tf.Provider, {
    scope: t
  }, /* @__PURE__ */ m.exports.createElement(hD, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: m.exports.useCallback((z) => {
      L(
        (R) => new Set(R).add(z)
      );
    }, []),
    onNativeOptionRemove: m.exports.useCallback((z) => {
      L((R) => {
        const H = new Set(R);
        return H.delete(z), H;
      });
    }, [])
  }, n)), I ? /* @__PURE__ */ m.exports.createElement(f2, {
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
  }) : null, Array.from(M)) : null));
}, vD = "SelectTrigger", yD = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = Lg(n), l = _o(vD, n), s = l.disabled || r, a = Ce(t, l.onTriggerChange), u = nf(n), [c, f, d] = d2((h) => {
    const v = u().filter(
      (y) => !y.disabled
    ), w = v.find(
      (y) => y.value === l.value
    ), p = p2(v, h, w);
    p !== void 0 && l.onValueChange(p.value);
  }), g = () => {
    s || (l.onOpenChange(!0), d());
  };
  return /* @__PURE__ */ m.exports.createElement(Wk, Z({
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
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && f(h.key), !(v && h.key === " ") && cD.includes(h.key) && (g(), h.preventDefault());
    })
  })));
}), xD = "SelectValue", wD = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: i, placeholder: l, ...s } = e, a = _o(xD, n), { onValueNodeHasChildrenChange: u } = a, c = i !== void 0, f = Ce(t, a.onValueNodeChange);
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
}), bD = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ m.exports.createElement(Ve.span, Z({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "\u25BC");
}), SD = (e) => /* @__PURE__ */ m.exports.createElement(vk, Z({
  asChild: !0
}, e)), Oi = "SelectContent", kD = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = _o(Oi, e.__scopeSelect), [r, o] = m.exports.useState();
  if (Xe(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const i = r;
    return i ? /* @__PURE__ */ Kt.exports.createPortal(/* @__PURE__ */ m.exports.createElement(u2, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ m.exports.createElement(tf.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ m.exports.createElement("div", null, e.children))), i) : null;
  }
  return /* @__PURE__ */ m.exports.createElement(CD, Z({}, e, {
    ref: t
  }));
}), Bn = 10, [u2, Ro] = qi(Oi), CD = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
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
  } = e, y = _o(Oi, n), [x, b] = m.exports.useState(null), [A, S] = m.exports.useState(null), E = Ce(
    t,
    (G) => b(G)
  ), [$, P] = m.exports.useState(null), [_, I] = m.exports.useState(null), M = nf(n), [L, B] = m.exports.useState(!1), z = m.exports.useRef(!1);
  m.exports.useEffect(() => {
    if (x)
      return cg(x);
  }, [
    x
  ]), ug();
  const R = m.exports.useCallback((G) => {
    const [ie, ...xe] = M().map(
      (ae) => ae.ref.current
    ), [ce] = xe.slice(-1), de = document.activeElement;
    for (const ae of G)
      if (ae === de || (ae == null || ae.scrollIntoView({
        block: "nearest"
      }), ae === ie && A && (A.scrollTop = 0), ae === ce && A && (A.scrollTop = A.scrollHeight), ae == null || ae.focus(), document.activeElement !== de))
        return;
  }, [
    M,
    A
  ]), H = m.exports.useCallback(
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
  m.exports.useEffect(() => {
    L && H();
  }, [
    L,
    H
  ]);
  const { onOpenChange: N, triggerPointerDownPosRef: T } = y;
  m.exports.useEffect(() => {
    if (x) {
      let G = {
        x: 0,
        y: 0
      };
      const ie = (ce) => {
        var de, ae, lt, st;
        G = {
          x: Math.abs(Math.round(ce.pageX) - ((de = (ae = T.current) === null || ae === void 0 ? void 0 : ae.x) !== null && de !== void 0 ? de : 0)),
          y: Math.abs(Math.round(ce.pageY) - ((lt = (st = T.current) === null || st === void 0 ? void 0 : st.y) !== null && lt !== void 0 ? lt : 0))
        };
      }, xe = (ce) => {
        G.x <= 10 && G.y <= 10 ? ce.preventDefault() : x.contains(ce.target) || N(!1), document.removeEventListener("pointermove", ie), T.current = null;
      };
      return T.current !== null && (document.addEventListener("pointermove", ie), document.addEventListener("pointerup", xe, {
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
    T
  ]), m.exports.useEffect(() => {
    const G = () => N(!1);
    return window.addEventListener("blur", G), window.addEventListener("resize", G), () => {
      window.removeEventListener("blur", G), window.removeEventListener("resize", G);
    };
  }, [
    N
  ]);
  const [O, k] = d2((G) => {
    const ie = M().filter(
      (de) => !de.disabled
    ), xe = ie.find(
      (de) => de.ref.current === document.activeElement
    ), ce = p2(ie, G, xe);
    ce && setTimeout(
      () => ce.ref.current.focus()
    );
  }), C = m.exports.useCallback((G, ie, xe) => {
    const ce = !z.current && !xe;
    (y.value !== void 0 && y.value === ie || ce) && (P(G), ce && (z.current = !0));
  }, [
    y.value
  ]), J = m.exports.useCallback(
    () => x == null ? void 0 : x.focus(),
    [
      x
    ]
  ), ne = m.exports.useCallback((G, ie, xe) => {
    const ce = !z.current && !xe;
    (y.value !== void 0 && y.value === ie || ce) && I(G);
  }, [
    y.value
  ]), se = r === "popper" ? Vy : $D, ee = se === Vy ? {
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
  return /* @__PURE__ */ m.exports.createElement(u2, {
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
  }, /* @__PURE__ */ m.exports.createElement(Ek, {
    as: _i,
    allowPinchZoom: !0
  }, /* @__PURE__ */ m.exports.createElement(ag, {
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
  }, /* @__PURE__ */ m.exports.createElement(sg, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: i,
    onPointerDownOutside: l,
    onFocusOutside: (G) => G.preventDefault(),
    onDismiss: () => y.onOpenChange(!1)
  }, /* @__PURE__ */ m.exports.createElement(se, Z({
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
          const de = G.target, ae = ce.indexOf(de);
          ce = ce.slice(ae + 1);
        }
        setTimeout(
          () => R(ce)
        ), G.preventDefault();
      }
    })
  }))))));
}), $D = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = _o(Oi, n), l = Ro(Oi, n), [s, a] = m.exports.useState(null), [u, c] = m.exports.useState(null), f = Ce(
    t,
    (E) => c(E)
  ), d = nf(n), g = m.exports.useRef(!1), h = m.exports.useRef(!0), { viewport: v, selectedItem: w, selectedItemText: p, focusSelectedItem: y } = l, x = m.exports.useCallback(() => {
    if (i.trigger && i.valueNode && s && u && v && w && p) {
      const E = i.trigger.getBoundingClientRect(), $ = u.getBoundingClientRect(), P = i.valueNode.getBoundingClientRect(), _ = p.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const de = _.left - $.left, ae = P.left - de, lt = E.left - ae, st = E.width + lt, Wr = Math.max(st, $.width), nr = window.innerWidth - Bn, rr = _h(ae, [
          Bn,
          nr - Wr
        ]);
        s.style.minWidth = st + "px", s.style.left = rr + "px";
      } else {
        const de = $.right - _.right, ae = window.innerWidth - P.right - de, lt = window.innerWidth - E.right - ae, st = E.width + lt, Wr = Math.max(st, $.width), nr = window.innerWidth - Bn, rr = _h(ae, [
          Bn,
          nr - Wr
        ]);
        s.style.minWidth = st + "px", s.style.right = rr + "px";
      }
      const I = d(), M = window.innerHeight - Bn * 2, L = v.scrollHeight, B = window.getComputedStyle(u), z = parseInt(B.borderTopWidth, 10), R = parseInt(B.paddingTop, 10), H = parseInt(B.borderBottomWidth, 10), N = parseInt(B.paddingBottom, 10), T = z + R + L + N + H, O = Math.min(w.offsetHeight * 5, T), k = window.getComputedStyle(v), C = parseInt(k.paddingTop, 10), J = parseInt(k.paddingBottom, 10), ne = E.top + E.height / 2 - Bn, se = M - ne, ee = w.offsetHeight / 2, G = w.offsetTop + ee, ie = z + R + G, xe = T - ie;
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
      s.style.margin = `${Bn}px 0`, s.style.minHeight = O + "px", s.style.maxHeight = M + "px", r == null || r(), requestAnimationFrame(
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
  return /* @__PURE__ */ m.exports.createElement(ED, {
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
}), Vy = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Bn, ...i } = e, l = Lg(n);
  return /* @__PURE__ */ m.exports.createElement(qk, Z({}, l, i, {
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
}), [ED, Fg] = qi(Oi, {}), Uy = "SelectViewport", AD = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Ro(Uy, n), i = Fg(Uy, n), l = Ce(t, o.onViewportChange), s = m.exports.useRef(0);
  return /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ m.exports.createElement(tf.Slot, {
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
          const g = window.innerHeight - Bn * 2, h = parseFloat(c.style.minHeight), v = parseFloat(c.style.height), w = Math.max(h, v);
          if (w < g) {
            const p = w + d, y = Math.min(g, p), x = p - y;
            c.style.height = y + "px", c.style.bottom === "0px" && (u.scrollTop = x > 0 ? x : 0, c.style.justifyContent = "flex-end");
          }
        }
      }
      s.current = u.scrollTop;
    })
  }))));
}), PD = "SelectGroup";
qi(PD);
const Rh = "SelectItem", [_D, RD] = qi(Rh), ID = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: i, ...l } = e, s = _o(Rh, n), a = Ro(Rh, n), u = s.value === r, [c, f] = m.exports.useState(i != null ? i : ""), [d, g] = m.exports.useState(!1), h = Ce(t, (p) => {
    var y;
    return (y = a.itemRefCallback) === null || y === void 0 ? void 0 : y.call(a, p, r, o);
  }), v = mi(), w = () => {
    o || (s.onValueChange(r), s.onOpenChange(!1));
  };
  return /* @__PURE__ */ m.exports.createElement(_D, {
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
  }, /* @__PURE__ */ m.exports.createElement(tf.ItemSlot, {
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
      ((y = a.searchRef) === null || y === void 0 ? void 0 : y.current) !== "" && p.key === " " || (fD.includes(p.key) && w(), p.key === " " && p.preventDefault());
    })
  }))));
}), Fa = "SelectItemText", TD = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...i } = e, l = _o(Fa, n), s = Ro(Fa, n), a = RD(Fa, n), u = mD(Fa, n), [c, f] = m.exports.useState(null), d = Ce(
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
}), Wy = "SelectScrollUpButton", OD = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Ro(Wy, e.__scopeSelect), r = Fg(Wy, e.__scopeSelect), [o, i] = m.exports.useState(!1), l = Ce(t, r.onScrollButtonChange);
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
  ]), o ? /* @__PURE__ */ m.exports.createElement(c2, Z({}, e, {
    ref: l,
    onAutoScroll: () => {
      const { viewport: s, selectedItem: a } = n;
      s && a && (s.scrollTop = s.scrollTop - a.offsetHeight);
    }
  })) : null;
}), qy = "SelectScrollDownButton", MD = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Ro(qy, e.__scopeSelect), r = Fg(qy, e.__scopeSelect), [o, i] = m.exports.useState(!1), l = Ce(t, r.onScrollButtonChange);
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
  ]), o ? /* @__PURE__ */ m.exports.createElement(c2, Z({}, e, {
    ref: l,
    onAutoScroll: () => {
      const { viewport: s, selectedItem: a } = n;
      s && a && (s.scrollTop = s.scrollTop + a.offsetHeight);
    }
  })) : null;
}), c2 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = Ro("SelectScrollButton", n), l = m.exports.useRef(null), s = nf(n), a = m.exports.useCallback(() => {
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
}), f2 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { value: n, ...r } = e, o = m.exports.useRef(null), i = Ce(t, o), l = aD(n);
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
  ]), /* @__PURE__ */ m.exports.createElement(uD, {
    asChild: !0
  }, /* @__PURE__ */ m.exports.createElement("select", Z({}, r, {
    ref: i,
    defaultValue: n
  })));
});
f2.displayName = "BubbleSelect";
function d2(e) {
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
function p2(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (u) => u === t[0]
  ) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let l = ND(e, Math.max(i, 0));
  o.length === 1 && (l = l.filter(
    (u) => u !== n
  ));
  const a = l.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return a !== n ? a : void 0;
}
function ND(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const DD = gD, LD = yD, FD = wD, zD = bD, BD = SD, jD = kD, HD = AD, VD = ID, UD = TD, WD = OD, qD = MD, GD = {
  int: "Afrikaans",
  native: "Afrikaans"
}, QD = {
  int: "Albanian",
  native: "Shqip"
}, KD = {
  int: "Arabic",
  native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
}, YD = {
  int: "Armenian",
  native: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576"
}, XD = {
  int: "Assamese",
  native: "\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE"
}, ZD = {
  int: "Azerbaijani",
  native: "Az\u0259rbaycan dili"
}, JD = {
  int: "Basque",
  native: "Euskara"
}, eL = {
  int: "Belarusian",
  native: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F"
}, tL = {
  int: "Bengali",
  native: "\u09AC\u09BE\u0982\u09B2\u09BE"
}, nL = {
  int: "Bosnian",
  native: "Bosanski"
}, rL = {
  int: "Breton",
  native: "Brezhoneg"
}, oL = {
  int: "Bulgarian",
  native: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"
}, iL = {
  int: "Burmese",
  native: "\u1019\u103C\u1014\u103A\u1019\u102C\u1018\u102C\u101E\u102C"
}, lL = {
  int: "Catalan / Valencian",
  native: "Catal\xE0"
}, sL = {
  int: "Czech",
  native: "\u010Ce\u0161tina"
}, aL = {
  int: "Danish",
  native: "Dansk"
}, uL = {
  int: "Dutch",
  native: "Nederlands"
}, cL = {
  int: "English",
  native: "English"
}, fL = {
  int: "Esperanto",
  native: "Esperanto"
}, dL = {
  int: "Estonian",
  native: "Eesti"
}, pL = {
  int: "Faroese",
  native: "F\xF8royskt"
}, hL = {
  int: "Finnish",
  native: "Suomi"
}, mL = {
  int: "French",
  native: "Fran\xE7ais"
}, gL = {
  int: "Galician",
  native: "Galego"
}, vL = {
  int: "Georgian",
  native: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8"
}, yL = {
  int: "German",
  native: "Deutsch"
}, xL = {
  int: "Greek",
  native: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"
}, wL = {
  int: "Guarani",
  native: "Ava\xF1e'\u1EBD"
}, bL = {
  int: "Gujarati",
  native: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0"
}, SL = {
  int: "Hausa",
  native: "Hrvatski"
}, kL = {
  int: "Hausa",
  native: "Hausa"
}, CL = {
  int: "Hebrew",
  native: "\u05E2\u05D1\u05E8\u05D9\u05EA"
}, $L = {
  int: "Hindi",
  native: "\u0939\u093F\u0928\u094D\u0926\u0940"
}, EL = {
  int: "Hungarian",
  native: "Magyar"
}, AL = {
  int: "Icelandic",
  native: "\xCDslenska"
}, PL = {
  int: "Indonesian",
  native: "Bahasa Indonesia"
}, _L = {
  int: "Irish",
  native: "Gaeilge"
}, RL = {
  int: "Italian",
  native: "Italiano"
}, IL = {
  int: "Japanese",
  native: "\u65E5\u672C\u8A9E"
}, TL = {
  int: "Javanese",
  native: "Basa Jawa"
}, OL = {
  int: "Kannada",
  native: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"
}, ML = {
  int: "Kazakh",
  native: "\u049A\u0430\u0437\u0430\u049B\u0448\u0430"
}, NL = {
  int: "Khmer",
  native: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A"
}, DL = {
  int: "Korean",
  native: "\uD55C\uAD6D\uC5B4"
}, LL = {
  int: "Kurdish",
  native: "Kurd\xEE (Kurmanc\xEE)"
}, FL = {
  int: "Latin",
  native: "lingua latina"
}, zL = {
  int: "Latvian",
  native: "Latvie\u0161u"
}, BL = {
  int: "Lithuanian",
  native: "Lietuvi\u0173"
}, jL = {
  int: "Macedonian",
  native: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438"
}, HL = {
  int: "Malagasy",
  native: "Malagasy"
}, VL = {
  int: "Malay",
  native: "Bahasa Melayu"
}, UL = {
  int: "Malayalam",
  native: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02"
}, WL = {
  int: "Marathi",
  native: "\u092E\u0930\u093E\u0920\u0940"
}, qL = {
  int: "Mongolian",
  native: "\u041C\u043E\u043D\u0433\u043E\u043B"
}, GL = {
  int: "Nepali",
  native: "\u0928\u0947\u092A\u093E\u0932\u0940"
}, QL = {
  int: "Norwegian (bokmal)",
  native: "Norsk (bokm\xE5l)"
}, KL = {
  int: "Norwegian Nynorsk",
  native: "Norsk (nynorsk)"
}, YL = {
  int: "Oriya",
  native: "\u0B13\u0B21\u0B3C\u0B3F\u0B06"
}, XL = {
  int: "Pashto",
  native: "\u067E\u069A\u062A\u0648"
}, ZL = {
  int: "Persian",
  native: "\u0641\u0627\u0631\u0633\u06CC"
}, JL = {
  int: "Polish",
  native: "Polski"
}, eF = {
  int: "Portuguese",
  native: "Portugu\xEAs"
}, tF = {
  int: "Punjabi",
  native: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40"
}, nF = {
  int: "Romanian",
  native: "Rom\xE2n\u0103"
}, rF = {
  int: "Russian",
  native: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
}, oF = {
  int: "Rwandi",
  native: "Ikinyarwanda"
}, iF = {
  int: "Sardinian",
  native: "Sardu"
}, lF = {
  int: "Serbian",
  native: "\u0421\u0440\u043F\u0441\u043A\u0438"
}, sF = {
  int: "Silesian",
  native: "\u015Bl\u014Dnsk\u014F g\u014Fdka"
}, aF = {
  int: "Simplified Chinese",
  native: "\u4E2D\u6587"
}, uF = {
  int: "Sinhala",
  native: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD"
}, cF = {
  int: "Slovak",
  native: "Sloven\u010Dina"
}, fF = {
  int: "Slovenian",
  native: "Sloven\u0161\u010Dina"
}, dF = {
  int: "Somali",
  native: "Af-Soomaali"
}, pF = {
  int: "Sorani Kurdish",
  native: "\u06A9\u0648\u0631\u062F\u06CC\u06CC \u0646\u0627\u0648\u06D5\u0646\u062F\u06CC"
}, hF = {
  int: "Spanish",
  native: "Espa\xF1ol"
}, mF = {
  int: "Swahili",
  native: "Kiswahili"
}, gF = {
  int: "Swedish",
  native: "Svenska"
}, vF = {
  int: "Syriac",
  native: "\u0723\u0718\u072A\u071D\u071D\u0710"
}, yF = {
  int: "Tagalog / Filipino",
  native: "Filipino"
}, xF = {
  int: "Tajik",
  native: "\u0422\u043E\u04B7\u0438\u043A\u04E3"
}, wF = {
  int: "Tamazight",
  native: "\u2D5C\u2D30\u2D4E\u2D30\u2D63\u2D49\u2D56\u2D5C"
}, bF = {
  int: "Tamil",
  native: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"
}, SF = {
  int: "Telugu",
  native: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"
}, kF = {
  int: "Thai",
  native: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22"
}, CF = {
  int: "Turkish",
  native: "T\xFCrk\xE7e"
}, $F = {
  int: "Ukrainian",
  native: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"
}, EF = {
  int: "Urdu",
  native: "\u0627\u0631\u062F\u0648"
}, AF = {
  int: "Uzbek",
  native: "O'zbek"
}, PF = {
  int: "Vietnamese",
  native: "Ti\u1EBFng Vi\u1EC7t"
}, _F = {
  int: "Visayan",
  native: "Bisaya"
}, RF = {
  int: "Welsh",
  native: "Cymraeg"
}, IF = {
  int: "West Frisian",
  native: "Frysk"
}, Gy = {
  af: GD,
  sq: QD,
  ar: KD,
  hy: YD,
  as: XD,
  az: ZD,
  eu: JD,
  be: eL,
  bn: tL,
  bs: nL,
  br: rL,
  bg: oL,
  my: iL,
  ca: lL,
  cs: sL,
  da: aL,
  nl: uL,
  en: cL,
  eo: fL,
  et: dL,
  fo: pL,
  fi: hL,
  fr: mL,
  gl: gL,
  ka: vL,
  de: yL,
  el: xL,
  gn: wL,
  gu: bL,
  hr: SL,
  ha: kL,
  he: CL,
  hi: $L,
  hu: EL,
  is: AL,
  id: PL,
  ga: _L,
  it: RL,
  ja: IL,
  jv: TL,
  kn: OL,
  kk: ML,
  km: NL,
  ko: DL,
  ku: LL,
  la: FL,
  lv: zL,
  lt: BL,
  mk: jL,
  mg: HL,
  ms: VL,
  ml: UL,
  mr: WL,
  mn: qL,
  ne: GL,
  nb: QL,
  nn: KL,
  or: YL,
  ps: XL,
  fa: ZL,
  pl: JL,
  pt: eF,
  pa: tF,
  ro: nF,
  ru: rF,
  rw: oF,
  sc: iF,
  sr: lF,
  sz: sF,
  zh: aF,
  si: uF,
  sk: cF,
  sl: fF,
  so: dF,
  cb: pF,
  es: hF,
  sw: mF,
  sv: gF,
  sy: vF,
  tl: yF,
  tg: xF,
  tz: wF,
  ta: bF,
  te: SF,
  th: kF,
  tr: CF,
  uk: $F,
  ur: EF,
  uz: AF,
  vi: PF,
  cx: _F,
  cy: RF,
  fy: IF
}, h2 = je.forwardRef(({
  children: e,
  className: t,
  ...n
}, r) => /* @__PURE__ */ D(VD, {
  className: Ai("text-mayumi-gray-1200 data-[highlighted]:bg-mayumi-gray-400 data-[disabled]:text-mayumi-gray-800 relative flex h-[25px] select-none items-center rounded-[3px] pr-[35px] pl-[25px] text-[13px] leading-none data-[disabled]:pointer-events-none data-[highlighted]:outline-none", t),
  ...n,
  ref: r,
  children: /* @__PURE__ */ D(UD, {
    children: e
  })
}));
h2.displayName = "SelectItem";
const TF = (e) => {
  var n;
  const t = pk();
  return /* @__PURE__ */ ue(DD, {
    value: (n = t[Hy]) == null ? void 0 : n[Rs].lang,
    onValueChange: (r) => {
      var o;
      (o = e.onValueChange) == null || o.call(e, r), t.set({
        [Hy]: {
          [Rs]: {
            lang: r
          }
        }
      });
    },
    children: [/* @__PURE__ */ ue(LD, {
      className: "bg-gray2 text-mayumi-gray-1200 hover:bg-mayumi-gray-300 focus:shadow-gray7 data-[placeholder]:text-mayumi-gray-900 inline-flex items-center justify-center gap-[5px] rounded px-3 py-1 text-xs outline-none focus:shadow-[0_0_0_1px]",
      "aria-label": "lang",
      autoFocus: !1,
      tabIndex: 2,
      children: [/* @__PURE__ */ D(FD, {
        placeholder: "Select a Language..."
      }), /* @__PURE__ */ D(zD, {
        className: "text-mayumi-gray-1200",
        children: /* @__PURE__ */ D("i", {
          className: "gg-chevron-down/0.75"
        })
      })]
    }), /* @__PURE__ */ D(BD, {
      container: e.container.current,
      children: /* @__PURE__ */ ue(jD, {
        className: "bg-gray2 overflow-hidden rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]",
        children: [/* @__PURE__ */ D(WD, {
          className: "bg-gray2 text-mayumi-gray-1200 flex h-[25px] cursor-default items-center justify-center",
          children: /* @__PURE__ */ D("i", {
            className: "gg-chevron-up/0.75"
          })
        }), /* @__PURE__ */ D(HD, {
          className: "p-[5px]",
          children: Object.keys(Gy).map((r) => {
            const o = Gy[r];
            return /* @__PURE__ */ D(h2, {
              value: o.int,
              children: o.int
            }, r);
          })
        }), /* @__PURE__ */ D(qD, {
          className: "bg-gray2 text-mayumi-gray-1200 flex h-[25px] cursor-default items-center justify-center",
          children: /* @__PURE__ */ D("i", {
            className: "gg-chevron-down/0.75"
          })
        })]
      })
    })]
  });
};
function OF(e, t) {
  return m.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const m2 = "ScrollArea", [g2, Ez] = Bi(m2), [MF, On] = g2(m2), NF = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: i = 600, ...l } = e, [s, a] = m.exports.useState(null), [u, c] = m.exports.useState(null), [f, d] = m.exports.useState(null), [g, h] = m.exports.useState(null), [v, w] = m.exports.useState(null), [p, y] = m.exports.useState(0), [x, b] = m.exports.useState(0), [A, S] = m.exports.useState(!1), [E, $] = m.exports.useState(!1), P = Ce(
    t,
    (I) => a(I)
  ), _ = a2(o);
  return /* @__PURE__ */ m.exports.createElement(MF, {
    scope: n,
    type: r,
    dir: _,
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
}), DF = "ScrollAreaViewport", LF = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, i = On(DF, n), l = m.exports.useRef(null), s = Ce(t, l, i.onViewportChange);
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
}), tr = "ScrollAreaScrollbar", FF = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = On(tr, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: l } = o, s = e.orientation === "horizontal";
  return m.exports.useEffect(() => (s ? i(!0) : l(!0), () => {
    s ? i(!1) : l(!1);
  }), [
    s,
    i,
    l
  ]), o.type === "hover" ? /* @__PURE__ */ m.exports.createElement(zF, Z({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ m.exports.createElement(BF, Z({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ m.exports.createElement(v2, Z({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ m.exports.createElement(zg, Z({}, r, {
    ref: t
  })) : null;
}), zF = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = On(tr, e.__scopeScrollArea), [i, l] = m.exports.useState(!1);
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
  ]), /* @__PURE__ */ m.exports.createElement(Hr, {
    present: n || i
  }, /* @__PURE__ */ m.exports.createElement(v2, Z({
    "data-state": i ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), BF = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = On(tr, e.__scopeScrollArea), i = e.orientation === "horizontal", l = of(
    () => a("SCROLL_END"),
    100
  ), [s, a] = OF("hidden", {
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
  ]), /* @__PURE__ */ m.exports.createElement(Hr, {
    present: n || s !== "hidden"
  }, /* @__PURE__ */ m.exports.createElement(zg, Z({
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
}), v2 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = On(tr, e.__scopeScrollArea), { forceMount: r, ...o } = e, [i, l] = m.exports.useState(!1), s = e.orientation === "horizontal", a = of(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, c = n.viewport.offsetHeight < n.viewport.scrollHeight;
      l(s ? u : c);
    }
  }, 10);
  return ic(n.viewport, a), ic(n.content, a), /* @__PURE__ */ m.exports.createElement(Hr, {
    present: r || i
  }, /* @__PURE__ */ m.exports.createElement(zg, Z({
    "data-state": i ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), zg = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = On(tr, e.__scopeScrollArea), i = m.exports.useRef(null), l = m.exports.useRef(0), [s, a] = m.exports.useState({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), u = w2(s.viewport, s.content), c = {
    ...r,
    sizes: s,
    onSizesChange: a,
    hasThumb: Boolean(u > 0 && u < 1),
    onThumbChange: (d) => i.current = d,
    onThumbPointerUp: () => l.current = 0,
    onThumbPointerDown: (d) => l.current = d
  };
  function f(d, g) {
    return qF(d, l.current, s, g);
  }
  return n === "horizontal" ? /* @__PURE__ */ m.exports.createElement(jF, Z({}, c, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && i.current) {
        const d = o.viewport.scrollLeft, g = Qy(d, s, o.dir);
        i.current.style.transform = `translate3d(${g}px, 0, 0)`;
      }
    },
    onWheelScroll: (d) => {
      o.viewport && (o.viewport.scrollLeft = d);
    },
    onDragScroll: (d) => {
      o.viewport && (o.viewport.scrollLeft = f(d, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ m.exports.createElement(HF, Z({}, c, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && i.current) {
        const d = o.viewport.scrollTop, g = Qy(d, s);
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
}), jF = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = On(tr, e.__scopeScrollArea), [l, s] = m.exports.useState(), a = m.exports.useRef(null), u = Ce(t, a, i.onScrollbarXChange);
  return m.exports.useEffect(() => {
    a.current && s(getComputedStyle(a.current));
  }, [
    a
  ]), /* @__PURE__ */ m.exports.createElement(x2, Z({
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
        e.onWheelScroll(d), S2(d, f) && c.preventDefault();
      }
    },
    onResize: () => {
      a.current && i.viewport && l && r({
        content: i.viewport.scrollWidth,
        viewport: i.viewport.offsetWidth,
        scrollbar: {
          size: a.current.clientWidth,
          paddingStart: oc(l.paddingLeft),
          paddingEnd: oc(l.paddingRight)
        }
      });
    }
  }));
}), HF = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = On(tr, e.__scopeScrollArea), [l, s] = m.exports.useState(), a = m.exports.useRef(null), u = Ce(t, a, i.onScrollbarYChange);
  return m.exports.useEffect(() => {
    a.current && s(getComputedStyle(a.current));
  }, [
    a
  ]), /* @__PURE__ */ m.exports.createElement(x2, Z({
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
        e.onWheelScroll(d), S2(d, f) && c.preventDefault();
      }
    },
    onResize: () => {
      a.current && i.viewport && l && r({
        content: i.viewport.scrollHeight,
        viewport: i.viewport.offsetHeight,
        scrollbar: {
          size: a.current.clientHeight,
          paddingStart: oc(l.paddingTop),
          paddingEnd: oc(l.paddingBottom)
        }
      });
    }
  }));
}), [VF, y2] = g2(tr), x2 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: i, onThumbPointerUp: l, onThumbPointerDown: s, onThumbPositionChange: a, onDragScroll: u, onWheelScroll: c, onResize: f, ...d } = e, g = On(tr, n), [h, v] = m.exports.useState(null), w = Ce(
    t,
    (P) => v(P)
  ), p = m.exports.useRef(null), y = m.exports.useRef(""), x = g.viewport, b = r.content - r.viewport, A = rt(c), S = rt(a), E = of(f, 10);
  function $(P) {
    if (p.current) {
      const _ = P.clientX - p.current.left, I = P.clientY - p.current.top;
      u({
        x: _,
        y: I
      });
    }
  }
  return m.exports.useEffect(() => {
    const P = (_) => {
      const I = _.target;
      (h == null ? void 0 : h.contains(I)) && A(_, b);
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
  ]), ic(h, E), ic(g.content, E), /* @__PURE__ */ m.exports.createElement(VF, {
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
      const _ = P.target;
      _.hasPointerCapture(P.pointerId) && _.releasePointerCapture(P.pointerId), document.body.style.webkitUserSelect = y.current, p.current = null;
    })
  })));
}), Ih = "ScrollAreaThumb", UF = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = y2(Ih, e.__scopeScrollArea);
  return /* @__PURE__ */ m.exports.createElement(Hr, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ m.exports.createElement(WF, Z({
    ref: t
  }, r)));
}), WF = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, i = On(Ih, n), l = y2(Ih, n), { onThumbPositionChange: s } = l, a = Ce(
    t,
    (f) => l.onThumbChange(f)
  ), u = m.exports.useRef(), c = of(() => {
    u.current && (u.current(), u.current = void 0);
  }, 100);
  return m.exports.useEffect(() => {
    const f = i.viewport;
    if (f) {
      const d = () => {
        if (c(), !u.current) {
          const g = GF(f, s);
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
function oc(e) {
  return e ? parseInt(e, 10) : 0;
}
function w2(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function rf(e) {
  const t = w2(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function qF(e, t, n, r = "ltr") {
  const o = rf(n), i = o / 2, l = t || i, s = o - l, a = n.scrollbar.paddingStart + l, u = n.scrollbar.size - n.scrollbar.paddingEnd - s, c = n.content - n.viewport, f = r === "ltr" ? [
    0,
    c
  ] : [
    c * -1,
    0
  ];
  return b2([
    a,
    u
  ], f)(e);
}
function Qy(e, t, n = "ltr") {
  const r = rf(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, l = t.content - t.viewport, s = i - r, a = n === "ltr" ? [
    0,
    l
  ] : [
    l * -1,
    0
  ], u = _h(e, a);
  return b2([
    0,
    l
  ], [
    0,
    s
  ])(u);
}
function b2(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function S2(e, t) {
  return e > 0 && e < t;
}
const GF = (e, t = () => {
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
function of(e, t) {
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
function ic(e, t) {
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
const QF = NF, KF = LF, Ky = FF, Yy = UF, Xy = (e) => typeof e == "object" && e != null && e.nodeType === 1, Zy = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", Id = (e, t) => {
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
}, za = (e, t, n, r, o, i, l, s) => i < e && l > t || i > e && l < t ? 0 : i <= e && s <= n || l >= t && s >= n ? i - e - r : l > t && s < n || i < e && s > n ? l - t + o : 0, YF = (e) => {
  const t = e.parentElement;
  return t == null ? e.getRootNode().host || null : t;
}, Jy = (e, t) => {
  var n, r, o, i;
  if (typeof document > "u")
    return [];
  const { scrollMode: l, block: s, inline: a, boundary: u, skipOverflowHiddenElements: c } = t, f = typeof u == "function" ? u : (M) => M !== u;
  if (!Xy(e))
    throw new TypeError("Invalid target");
  const d = document.scrollingElement || document.documentElement, g = [];
  let h = e;
  for (; Xy(h) && f(h); ) {
    if (h = YF(h), h === d) {
      g.push(h);
      break;
    }
    h != null && h === document.body && Id(h) && !Id(document.documentElement) || h != null && Id(h, c) && g.push(h);
  }
  const v = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth, w = (i = (o = window.visualViewport) == null ? void 0 : o.height) != null ? i : innerHeight, { scrollX: p, scrollY: y } = window, { height: x, width: b, top: A, right: S, bottom: E, left: $ } = e.getBoundingClientRect();
  let P = s === "start" || s === "nearest" ? A : s === "end" ? E : A + x / 2, _ = a === "center" ? $ + b / 2 : a === "end" ? S : $;
  const I = [];
  for (let M = 0; M < g.length; M++) {
    const L = g[M], { height: B, width: z, top: R, right: H, bottom: N, left: T } = L.getBoundingClientRect();
    if (l === "if-needed" && A >= 0 && $ >= 0 && E <= w && S <= v && A >= R && E <= N && $ >= T && S <= H)
      return I;
    const O = getComputedStyle(L), k = parseInt(O.borderLeftWidth, 10), C = parseInt(O.borderTopWidth, 10), J = parseInt(O.borderRightWidth, 10), ne = parseInt(O.borderBottomWidth, 10);
    let se = 0, ee = 0;
    const G = "offsetWidth" in L ? L.offsetWidth - L.clientWidth - k - J : 0, ie = "offsetHeight" in L ? L.offsetHeight - L.clientHeight - C - ne : 0, xe = "offsetWidth" in L ? L.offsetWidth === 0 ? 0 : z / L.offsetWidth : 0, ce = "offsetHeight" in L ? L.offsetHeight === 0 ? 0 : B / L.offsetHeight : 0;
    if (d === L)
      se = s === "start" ? P : s === "end" ? P - w : s === "nearest" ? za(y, y + w, w, C, ne, y + P, y + P + x, x) : P - w / 2, ee = a === "start" ? _ : a === "center" ? _ - v / 2 : a === "end" ? _ - v : za(p, p + v, v, k, J, p + _, p + _ + b, b), se = Math.max(0, se + y), ee = Math.max(0, ee + p);
    else {
      se = s === "start" ? P - R - C : s === "end" ? P - N + ne + ie : s === "nearest" ? za(R, N, B, C, ne + ie, P, P + x, x) : P - (R + B / 2) + ie / 2, ee = a === "start" ? _ - T - k : a === "center" ? _ - (T + z / 2) + G / 2 : a === "end" ? _ - H + J + G : za(T, H, z, k, J + G, _, _ + b, b);
      const { scrollLeft: de, scrollTop: ae } = L;
      se = Math.max(0, Math.min(ae + se / ce, L.scrollHeight - B / ce + ie)), ee = Math.max(0, Math.min(de + ee / xe, L.scrollWidth - z / xe + G)), P += ae - se, _ += de - ee;
    }
    I.push({ el: L, top: se, left: ee });
  }
  return I;
}, XF = (e) => e === !1 ? { block: "end", inline: "nearest" } : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e) ? e : { block: "start", inline: "nearest" };
function ZF(e, t) {
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
  for (const { el: r, top: o, left: i } of Jy(e, XF(t)))
    r.scroll({ top: o, left: i, behavior: n });
}
const k2 = m.exports.memo(({
  message: e
}) => /* @__PURE__ */ ue("div", {
  className: Ai("text-mayumi-gray-1100 flex flex-col gap-2 p-4 text-sm", {
    "bg-mayumi-gray-200": e.role === "user",
    "bg-mayumi-gray-300": e.role === "assistant"
  }),
  children: [/* @__PURE__ */ D("div", {
    className: "flex-0 text-mayumi-gray-1200 rounded-md",
    children: e.role === "user" ? "You:" : "Assistant:"
  }), /* @__PURE__ */ D("div", {
    className: "flex-1 rounded-md",
    children: /* @__PURE__ */ D(sk, {
      content: e.text
    })
  })]
}), (e, t) => e.message.text === t.message.text);
k2.displayName = "MessageItem";
const JF = (e) => {
  var a;
  const t = m.exports.useRef(null), n = m.exports.useRef(null), {
    conventions: r,
    updateOrUpsertConventions: o
  } = yo(), [i] = m.exports.useState(e.action), l = (a = r[i]) != null ? a : [];
  function s() {
    var c, f, d;
    const u = ((f = (c = t.current) == null ? void 0 : c.children.length) != null ? f : 1) - 1;
    ((d = t.current) == null ? void 0 : d.children[u]) && n.current && setTimeout(() => {
      ZF(n.current, {
        behavior: "smooth",
        scrollMode: "if-needed"
      });
    }, 80);
  }
  return yo.subscribe((u, c) => {
    var f, d;
    ((f = c.conventions[i]) == null ? void 0 : f.length) !== ((d = u.conventions[i]) == null ? void 0 : d.length) && s();
  }), m.exports.useEffect(() => {
    s();
  }, [o]), /* @__PURE__ */ D("div", {
    className: "aiflow-chat-in-command bg-mayumi-gray-200 flex-1",
    children: /* @__PURE__ */ ue(QF, {
      className: "pointer-events-auto h-[400px] overflow-hidden pt-2",
      children: [/* @__PURE__ */ D(KF, {
        className: "h-full w-full rounded",
        children: /* @__PURE__ */ ue("div", {
          ref: t,
          children: [l.map((u) => /* @__PURE__ */ D(k2, {
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
const ez = { run: (e) => e() }, tz = () => ez, C2 = typeof console.createTask < "u" ? console.createTask : tz;
function nz(e, t) {
  const n = t.shift(), r = C2(n);
  return e.reduce(
    (o, i) => o.then(() => r.run(() => i(...t))),
    Promise.resolve()
  );
}
function rz(e, t) {
  const n = t.shift(), r = C2(n);
  return Promise.all(e.map((o) => r.run(() => o(...t))));
}
function Td(e, t) {
  for (const n of [...e])
    n(t);
}
class oz {
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
    return n.unshift(t), this.callHookWith(nz, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(rz, t, ...n);
  }
  callHookWith(t, n, ...r) {
    const o = this._before || this._after ? { name: n, args: r, context: {} } : void 0;
    this._before && Td(this._before, o);
    const i = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      r
    );
    return i instanceof Promise ? i.finally(() => {
      this._after && o && Td(this._after, o);
    }) : (this._after && o && Td(this._after, o), i);
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
function iz() {
  return new oz();
}
const Oh = iz(), Bg = (e, t = {}) => {
  const n = () => {
    const r = setInterval(() => {
      e.current && (e.current.focus(), clearInterval(r));
    }, 10);
  };
  t.name && Oh.hook(t.name, n), n();
}, lf = (e) => e.replace("-page", "");
function lz() {
  const [e, t] = m.exports.useState(""), n = m.exports.useRef(), r = m.exports.useRef(null), o = m.exports.useRef(null), i = m.exports.useRef(null), l = m.exports.useRef(null), [s, a] = m.exports.useState([mr]), u = s[s.length - 1], [c, f] = m.exports.useState(!1), {
    updateOrUpsertConventions: d
  } = yo(), {
    open: g,
    setOpen: h,
    toggle: v,
    updateHistoryOpen: w,
    setIsChat: p
  } = En(), y = m.exports.useCallback(() => {
    a((P) => {
      const _ = [...P];
      return _.splice(-1, 1), _;
    }), p(!1), Oh.callHook("command-input");
  }, [p]);
  function x() {
    o.current && (o.current.style.transform = "scale(0.96)", setTimeout(() => {
      o.current && (o.current.style.transform = "");
    }, 100));
  }
  const b = m.exports.useCallback((P) => {
    t(P);
  }, []), A = m.exports.useCallback(async (P, _) => {
    if (console.log("handleValueSelect", P, _), P.endsWith("-page")) {
      p(!0), a((I) => [...I, P]);
      return;
    }
    P === nc && (f(!0), await Tl(La, {
      text: _ == null ? void 0 : _.text,
      action: nc
    }, "background"), f(!1)), P === Rs && (f(!0), await Tl(La, {
      text: _ == null ? void 0 : _.text,
      action: Rs
    }, "background"), f(!1)), P === In.SUMMARY_WITH && (f(!0), await Tl(La, {
      text: _ == null ? void 0 : _.text,
      action: In.SUMMARY_WITH
    }, "background"), f(!1)), t("");
  }, [p]);
  m.exports.useEffect(() => {
    const P = (_) => {
      if (_.key === "j" && _.metaKey && (v(), u === Ph && y(), w(!1)), _.key === "Escape" && w(!1), _.key === "Escape" && u === mr && !En.getState().subCommandOpen) {
        h(!1);
        return;
      }
      _.key === "Escape" && u !== mr && !En.getState().subCommandOpen && (y(), Oh.callHook("command-input"));
    };
    return document.addEventListener("keydown", P), () => document.removeEventListener("keydown", P);
  }, [w, u, y, v, h]), m.exports.useEffect(() => {
    Sc(La, (P) => {
      const {
        data: _
      } = P;
      d(_.action, _.message);
    });
  }, [d]), Bg(i, {
    name: "command-input"
  });
  const S = u === mr, E = u === wt.TRANSLATE_WITH_PAGE || u === wt.ASK_CHATGPT_PAGE || u === wt.SUMMARY_WITH_PAGE, $ = u === Is;
  return /* @__PURE__ */ ue(Mt, {
    children: [/* @__PURE__ */ D(jT, {
      open: g,
      children: /* @__PURE__ */ D(HT, {
        container: r.current,
        children: /* @__PURE__ */ D(VT, {
          "cmdk-dialog": "",
          className: "z-50 shadow-lg",
          children: /* @__PURE__ */ ue(un, {
            ref: o,
            value: e,
            onValueChange: b,
            loop: !0,
            children: [/* @__PURE__ */ D("div", {
              "cmdk-raycast-top-shine": ""
            }), /* @__PURE__ */ ue("div", {
              className: "flex items-center justify-between px-3 pt-1",
              children: [/* @__PURE__ */ D("div", {
                className: "flex items-center justify-start gap-2",
                children: s.map((P) => /* @__PURE__ */ D("div", {
                  className: "rounded-md bg-mayumi-gray-700 px-3 py-1 text-xs uppercase text-mayumi-gray-1100 shadow",
                  children: lf(P)
                }, P))
              }), $ && /* @__PURE__ */ D(TF, {
                container: r
              })]
            }), /* @__PURE__ */ D(un.Input, {
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
                var _;
                P.key === "Enter" && x(), !(u === mr || ((_ = n.current) == null ? void 0 : _.length)) && P.key === "Backspace" && (P.preventDefault(), y(), x());
              }
            }, "cmdk-input"), S && /* @__PURE__ */ D("hr", {
              "cmdk-raycast-loader": ""
            }), /* @__PURE__ */ ue(un.List, {
              className: "min-h-[400px]",
              ref: l,
              children: [u === mr && /* @__PURE__ */ D(sz, {
                onSelect: A
              }), u === Ph && /* @__PURE__ */ D(az, {
                onExit: y
              }), E && /* @__PURE__ */ D(uz, {
                page: u
              })]
            }), /* @__PURE__ */ ue("div", {
              "cmdk-raycast-footer": "",
              className: "justify-end",
              children: [E && /* @__PURE__ */ D(cz, {
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
              }), /* @__PURE__ */ D("hr", {}), /* @__PURE__ */ D(fz, {
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
function sz({
  onSelect: e
}) {
  return /* @__PURE__ */ ue(Mt, {
    children: [/* @__PURE__ */ D(un.Empty, {
      children: "No results found."
    }), /* @__PURE__ */ ue(un.Group, {
      heading: "Commands",
      children: [/* @__PURE__ */ D(GN, {}), /* @__PURE__ */ D(eD, {}), /* @__PURE__ */ D(YN, {
        onSelect: e
      }), /* @__PURE__ */ ue(Ti, {
        isCommand: !0,
        onSelect: () => e(rc),
        value: rc,
        children: [/* @__PURE__ */ D("i", {
          className: "gg-girl/0.8 text-mayumi-gray-1200"
        }), "Ask ChatGPT"]
      }), /* @__PURE__ */ ue(Ti, {
        isCommand: !0,
        onSelect: () => e(Is),
        value: Is,
        children: [/* @__PURE__ */ D(iD, {
          className: "fill-mayumi-gray-1200/1"
        }), "Tranasplate"]
      }), /* @__PURE__ */ D(rD, {
        onSelect: e
      })]
    })]
  });
}
function az(e) {
  const t = pk();
  return /* @__PURE__ */ D("div", {
    className: "flex flex-col items-center justify-center p-4 pt-8",
    children: /* @__PURE__ */ D(Dg, {
      light: !0,
      className: "w-1/2",
      value: t.OPENAI_API_KEY,
      onKeyDown: (n) => {
        var r;
        return n.key === "Enter" && (t.set({
          [qN]: n.currentTarget.value
        }), (r = e.onExit) == null || r.call(e)), !1;
      }
    })
  });
}
function uz(e) {
  return /* @__PURE__ */ D(JF, {
    action: lf(e.page)
  });
}
function cz(e) {
  const [t, n] = m.exports.useState(""), r = m.exports.useRef(!1), o = m.exports.useRef(null), i = m.exports.useRef(""), l = (s) => {
    if (s.key === "Enter" && r.current === !1) {
      s.preventDefault();
      const a = lf(e.page);
      e.onSendMessage(a, {
        text: i.current
      }), i.current = "", o.current.value = "", n(""), console.log("ChatInput", o.current);
    }
  };
  return Bg(o, {
    name: "chat-input"
  }), /* @__PURE__ */ D(Dg, {
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
function fz({
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
  } = En(), [, a] = m.exports.useState(), u = m.exports.useRef(null), c = n !== mr;
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
  }, [o, t]), o && Bg(u, {
    name: "subcommand-input"
  }), /* @__PURE__ */ ue(WO, {
    open: o,
    onOpenChange: (f) => {
      !c || l(f);
    },
    modal: !0,
    children: [/* @__PURE__ */ ue(qO, {
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
    }), /* @__PURE__ */ D(GO, {
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
      children: /* @__PURE__ */ ue(un, {
        loop: !0,
        shouldFilter: !1,
        children: [/* @__PURE__ */ D(un.List, {
          children: /* @__PURE__ */ ue(un.Group, {
            heading: n == null ? void 0 : n.toUpperCase(),
            children: [s && /* @__PURE__ */ D(dz, {
              page: n
            }), !s && /* @__PURE__ */ D(pz, {
              value: n,
              onSelect: r
            })]
          })
        }), /* @__PURE__ */ D(un.Input, {
          autoFocus: !0,
          onValueChange: a,
          ref: u,
          placeholder: "Search for actions..."
        })]
      })
    })]
  });
}
function dz({
  page: e
}) {
  const {
    newConvention: t
  } = yo((r) => r), {
    setSubCommandOpen: n
  } = En((r) => r);
  return /* @__PURE__ */ D(Mt, {
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
function pz(e) {
  return e.value === wt.ASK_CHATGPT_PAGE ? /* @__PURE__ */ D(hz, {
    onSelect: e.onSelect
  }) : e.value === wt.TRANSLATE_WITH_PAGE ? /* @__PURE__ */ D(mz, {
    onSelect: e.onSelect
  }) : e.value === In.OPEN_HISTORY ? /* @__PURE__ */ D(QN, {}) : e.value === In.CLEAR_STORAGE ? /* @__PURE__ */ D(tD, {}) : e.value === wt.CONFIG_PAGE ? /* @__PURE__ */ D(XN, {
    onSelect: e.onSelect
  }) : e.value === wt.SUMMARY_WITH_PAGE ? /* @__PURE__ */ D(oD, {
    onSelect: e.onSelect
  }) : null;
}
function $2(e) {
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
function hz({
  onSelect: e
}) {
  var t;
  return /* @__PURE__ */ ue(Mt, {
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
    }), /* @__PURE__ */ D($2, {
      page: rc,
      onSelect: e
    })]
  });
}
function mz({
  onSelect: e
}) {
  return /* @__PURE__ */ D(Mt, {
    children: /* @__PURE__ */ D($2, {
      page: Is,
      onSelect: e
    })
  });
}
const gz = () => /* @__PURE__ */ ue("div", {
  className: "dark",
  children: [/* @__PURE__ */ D(lz, {}), /* @__PURE__ */ D(CI, {})]
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
  n.setAttribute("rel", "stylesheet"), n.setAttribute("href", ot.runtime.getURL("dist/contentScripts/style.css")), r.appendChild(n), r.appendChild(t), document.body.appendChild(e), pb(t).render(/* @__PURE__ */ D(gz, {}));
})();
