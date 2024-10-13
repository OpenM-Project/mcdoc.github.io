import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/.pnpm/eventemitter3@4.0.7/node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/.pnpm/eventemitter3@4.0.7/node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__) prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();
      else delete emitter._events[evt];
    }
    function EventEmitter6() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter6.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0) return names;
      for (name in events = this._events) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter6.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter6.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    EventEmitter6.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter6.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter6.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter6.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter6.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter6.prototype.off = EventEmitter6.prototype.removeListener;
    EventEmitter6.prototype.addListener = EventEmitter6.prototype.on;
    EventEmitter6.prefixed = prefix;
    EventEmitter6.EventEmitter = EventEmitter6;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter6;
    }
  }
});

// node_modules/.pnpm/delegate@3.2.0/node_modules/delegate/src/closest.js
var require_closest = __commonJS({
  "node_modules/.pnpm/delegate@3.2.0/node_modules/delegate/src/closest.js"(exports, module) {
    var DOCUMENT_NODE_TYPE = 9;
    if (typeof Element !== "undefined" && !Element.prototype.matches) {
      proto = Element.prototype;
      proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
    }
    var proto;
    function closest(element, selector) {
      while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === "function" && element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
      }
    }
    module.exports = closest;
  }
});

// node_modules/.pnpm/delegate@3.2.0/node_modules/delegate/src/delegate.js
var require_delegate = __commonJS({
  "node_modules/.pnpm/delegate@3.2.0/node_modules/delegate/src/delegate.js"(exports, module) {
    var closest = require_closest();
    function _delegate2(element, selector, type, callback, useCapture) {
      var listenerFn = listener.apply(this, arguments);
      element.addEventListener(type, listenerFn, useCapture);
      return {
        destroy: function() {
          element.removeEventListener(type, listenerFn, useCapture);
        }
      };
    }
    function delegate(elements, selector, type, callback, useCapture) {
      if (typeof elements.addEventListener === "function") {
        return _delegate2.apply(null, arguments);
      }
      if (typeof type === "function") {
        return _delegate2.bind(null, document).apply(null, arguments);
      }
      if (typeof elements === "string") {
        elements = document.querySelectorAll(elements);
      }
      return Array.prototype.map.call(elements, function(element) {
        return _delegate2(element, selector, type, callback, useCapture);
      });
    }
    function listener(element, selector, type, callback) {
      return function(e) {
        e.delegateTarget = closest(e.target, selector);
        if (e.delegateTarget) {
          callback.call(element, e);
        }
      };
    }
    module.exports = delegate;
  }
});

// node_modules/.pnpm/downloadjs@1.4.7/node_modules/downloadjs/download.js
var require_download = __commonJS({
  "node_modules/.pnpm/downloadjs@1.4.7/node_modules/downloadjs/download.js"(exports, module) {
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define([], factory);
      } else if (typeof exports === "object") {
        module.exports = factory();
      } else {
        root.download = factory();
      }
    })(exports, function() {
      return function download(data, strFileName, strMimeType) {
        var self = window, defaultMime = "application/octet-stream", mimeType = strMimeType || defaultMime, payload = data, url = !strFileName && !strMimeType && payload, anchor = document.createElement("a"), toString = function(a) {
          return String(a);
        }, myBlob = self.Blob || self.MozBlob || self.WebKitBlob || toString, fileName = strFileName || "download", blob, reader;
        myBlob = myBlob.call ? myBlob.bind(self) : Blob;
        if (String(this) === "true") {
          payload = [payload, mimeType];
          mimeType = payload[0];
          payload = payload[1];
        }
        if (url && url.length < 2048) {
          fileName = url.split("/").pop().split("?")[0];
          anchor.href = url;
          if (anchor.href.indexOf(url) !== -1) {
            var ajax = new XMLHttpRequest();
            ajax.open("GET", url, true);
            ajax.responseType = "blob";
            ajax.onload = function(e) {
              download(e.target.response, fileName, defaultMime);
            };
            setTimeout(function() {
              ajax.send();
            }, 0);
            return ajax;
          }
        }
        if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)) {
          if (payload.length > 1024 * 1024 * 1.999 && myBlob !== toString) {
            payload = dataUrlToBlob(payload);
            mimeType = payload.type || defaultMime;
          } else {
            return navigator.msSaveBlob ? (
              // IE10 can't do a[download], only Blobs:
              navigator.msSaveBlob(dataUrlToBlob(payload), fileName)
            ) : saver(payload);
          }
        } else {
          if (/([\x80-\xff])/.test(payload)) {
            var i = 0, tempUiArr = new Uint8Array(payload.length), mx = tempUiArr.length;
            for (i; i < mx; ++i) tempUiArr[i] = payload.charCodeAt(i);
            payload = new myBlob([tempUiArr], { type: mimeType });
          }
        }
        blob = payload instanceof myBlob ? payload : new myBlob([payload], { type: mimeType });
        function dataUrlToBlob(strUrl) {
          var parts = strUrl.split(/[:;,]/), type = parts[1], decoder = parts[2] == "base64" ? atob : decodeURIComponent, binData = decoder(parts.pop()), mx2 = binData.length, i2 = 0, uiArr = new Uint8Array(mx2);
          for (i2; i2 < mx2; ++i2) uiArr[i2] = binData.charCodeAt(i2);
          return new myBlob([uiArr], { type });
        }
        function saver(url2, winMode) {
          if ("download" in anchor) {
            anchor.href = url2;
            anchor.setAttribute("download", fileName);
            anchor.className = "download-js-link";
            anchor.innerHTML = "downloading...";
            anchor.style.display = "none";
            document.body.appendChild(anchor);
            setTimeout(function() {
              anchor.click();
              document.body.removeChild(anchor);
              if (winMode === true) {
                setTimeout(function() {
                  self.URL.revokeObjectURL(anchor.href);
                }, 250);
              }
            }, 66);
            return true;
          }
          if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
            if (/^data:/.test(url2)) url2 = "data:" + url2.replace(/^data:([\w\/\-\+]+)/, defaultMime);
            if (!window.open(url2)) {
              if (confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")) {
                location.href = url2;
              }
            }
            return true;
          }
          var f = document.createElement("iframe");
          document.body.appendChild(f);
          if (!winMode && /^data:/.test(url2)) {
            url2 = "data:" + url2.replace(/^data:([\w\/\-\+]+)/, defaultMime);
          }
          f.src = url2;
          setTimeout(function() {
            document.body.removeChild(f);
          }, 333);
        }
        if (navigator.msSaveBlob) {
          return navigator.msSaveBlob(blob, fileName);
        }
        if (self.URL) {
          saver(self.URL.createObjectURL(blob), true);
        } else {
          if (typeof blob === "string" || blob.constructor === toString) {
            try {
              return saver("data:" + mimeType + ";base64," + self.btoa(blob));
            } catch (y) {
              return saver("data:" + mimeType + "," + encodeURIComponent(blob));
            }
          }
          reader = new FileReader();
          reader.onload = function(e) {
            saver(this.result);
          };
          reader.readAsDataURL(blob);
        }
        return true;
      };
    });
  }
});

// node_modules/.pnpm/danmu.js@1.1.13/node_modules/danmu.js/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/danmu.js@1.1.13/node_modules/danmu.js/dist/index.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["danmu.js"] = t() : e["danmu.js"] = t();
    }(window, function() {
      return function(e) {
        var t = {};
        function n(i) {
          if (t[i]) return t[i].exports;
          var r = t[i] = { i, l: false, exports: {} };
          return e[i].call(r.exports, r, r.exports, n), r.l = true, r.exports;
        }
        return n.m = e, n.c = t, n.d = function(e2, t2, i) {
          n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: i });
        }, n.r = function(e2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        }, n.t = function(e2, t2) {
          if (1 & t2 && (e2 = n(e2)), 8 & t2) return e2;
          if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule) return e2;
          var i = /* @__PURE__ */ Object.create(null);
          if (n.r(i), Object.defineProperty(i, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2) for (var r in e2) n.d(i, r, (function(t3) {
            return e2[t3];
          }).bind(null, r));
          return i;
        }, n.n = function(e2) {
          var t2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return n.d(t2, "a", t2), t2;
        }, n.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, n.p = "", n(n.s = 5);
      }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true }), t.createDom = function() {
          var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div", t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "", r2 = document.createElement(e2);
          return r2.className = i2, r2.innerHTML = t2, Object.keys(n2).forEach(function(t3) {
            var i3 = t3, o2 = n2[t3];
            "video" === e2 || "audio" === e2 ? o2 && r2.setAttribute(i3, o2) : r2.setAttribute(i3, o2);
          }), r2;
        }, t.hasClass = i, t.addClass = r, t.removeClass = o, t.toggleClass = function(e2, t2) {
          t2.split(/\s+/g).forEach(function(t3) {
            i(e2, t3) ? o(e2, t3) : r(e2, t3);
          });
        }, t.findDom = function() {
          var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, t2 = arguments[1], n2 = void 0;
          try {
            n2 = e2.querySelector(t2);
          } catch (i2) {
            t2.startsWith("#") && (n2 = e2.getElementById(t2.slice(1)));
          }
          return n2;
        }, t.deepCopy = function e2(t2, n2) {
          if ("Object" === a(n2) && "Object" === a(t2)) return Object.keys(n2).forEach(function(i2) {
            "Object" !== a(n2[i2]) || n2[i2] instanceof Node ? "Array" === a(n2[i2]) ? t2[i2] = "Array" === a(t2[i2]) ? t2[i2].concat(n2[i2]) : n2[i2] : t2[i2] = n2[i2] : t2[i2] ? e2(t2[i2], n2[i2]) : t2[i2] = n2[i2];
          }), t2;
        }, t.typeOf = a, t.copyDom = function(e2) {
          if (e2 && 1 === e2.nodeType) {
            var t2 = document.createElement(e2.tagName);
            return Array.prototype.forEach.call(e2.attributes, function(e3) {
              t2.setAttribute(e3.name, e3.value);
            }), e2.innerHTML && (t2.innerHTML = e2.innerHTML), t2;
          }
          return "";
        }, t.attachEventListener = function(e2, t2, n2, i2) {
          if (i2) e2.on(t2, n2), function(e3, t3, n3, i3) {
            e3.once(i3, function r2() {
              e3.off(t3, n3), e3.off(i3, r2);
            });
          }(e2, t2, n2, i2);
          else {
            e2.on(t2, function i3(r2) {
              n2(r2), e2.off(t2, i3);
            });
          }
        }, t.styleUtil = function(e2, t2, n2) {
          var i2 = e2.style;
          try {
            i2[t2] = n2;
          } catch (e3) {
            i2.setProperty(t2, n2);
          }
        }, t.styleCSSText = function(e2, t2) {
          var n2 = e2.style;
          try {
            n2.cssText = t2;
          } catch (e3) {
          }
        }, t.isNumber = function(e2) {
          return "number" == typeof e2 && !Number.isNaN(e2);
        }, t.isFunction = function(e2) {
          return "function" == typeof e2;
        }, t.throttle = function(e2, t2) {
          var n2 = this, i2 = 0;
          return function() {
            for (var r2 = arguments.length, o2 = Array(r2), a2 = 0; a2 < r2; a2++) o2[a2] = arguments[a2];
            clearTimeout(i2), i2 = setTimeout(function() {
              return e2.apply(n2, o2);
            }, t2);
          };
        };
        t.hasOwnProperty = Object.prototype.hasOwnProperty;
        function i(e2, t2) {
          return e2.classList ? Array.prototype.some.call(e2.classList, function(e3) {
            return e3 === t2;
          }) : !!e2.className.match(new RegExp("(\\s|^)" + t2 + "(\\s|$)"));
        }
        function r(e2, t2) {
          e2.classList ? t2.replace(/(^\s+|\s+$)/g, "").split(/\s+/g).forEach(function(t3) {
            t3 && e2.classList.add(t3);
          }) : i(e2, t2) || (e2.className += " " + t2);
        }
        function o(e2, t2) {
          e2.classList ? t2.split(/\s+/g).forEach(function(t3) {
            e2.classList.remove(t3);
          }) : i(e2, t2) && t2.split(/\s+/g).forEach(function(t3) {
            var n2 = new RegExp("(\\s|^)" + t3 + "(\\s|$)");
            e2.className = e2.className.replace(n2, " ");
          });
        }
        function a(e2) {
          return Object.prototype.toString.call(e2).match(/([^\s.*]+)(?=]$)/g)[0];
        }
      }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var i, r = /* @__PURE__ */ function() {
          function e2(e3, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
            }
          }
          return function(t2, n2, i2) {
            return n2 && e2(t2.prototype, n2), i2 && e2(t2, i2), t2;
          };
        }(), o = n(4), a = (i = o) && i.__esModule ? i : { default: i };
        var s = function() {
          function e2() {
            !function(e3, t2) {
              if (!(e3 instanceof t2)) throw new TypeError("Cannot call a class as a function");
            }(this, e2);
          }
          return r(e2, [{ key: "setLogger", value: function(e3) {
            this.logger = e3 instanceof a.default ? e3 : new a.default((e3 || "") + ".js");
          } }]), e2;
        }();
        t.default = s, e.exports = t.default;
      }, function(e, t, n) {
        "use strict";
        var i = n(19)();
        e.exports = function(e2) {
          return e2 !== i && null !== e2;
        };
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e2) {
          return null != e2;
        };
      }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var i = /* @__PURE__ */ function() {
          function e2(e3, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
            }
          }
          return function(t2, n2, i2) {
            return n2 && e2(t2.prototype, n2), i2 && e2(t2, i2), t2;
          };
        }();
        var r = "undefined" != typeof window && window.location.href.indexOf("danmu-debug") > -1, o = function() {
          function e2(t2) {
            !function(e3, t3) {
              if (!(e3 instanceof t3)) throw new TypeError("Cannot call a class as a function");
            }(this, e2), this.constructorName = t2 || "";
          }
          return i(e2, [{ key: "info", value: function(e3) {
            for (var t2, n2 = arguments.length, i2 = Array(n2 > 1 ? n2 - 1 : 0), o2 = 1; o2 < n2; o2++) i2[o2 - 1] = arguments[o2];
            r && (t2 = console).log.apply(t2, ["[Danmu Log][" + this.constructorName + "]", e3].concat(i2));
          } }]), e2;
        }();
        t.default = o, e.exports = t.default;
      }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var i, r = n(6), o = (i = r) && i.__esModule ? i : { default: i };
        n(34), t.default = o.default, e.exports = t.default;
      }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true }), t.DanmuJs = void 0;
        var i = /* @__PURE__ */ function() {
          function e2(e3, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
            }
          }
          return function(t2, n2, i2) {
            return n2 && e2(t2.prototype, n2), i2 && e2(t2, i2), t2;
          };
        }(), r = f(n(7)), o = n(26), a = f(n(1)), s = f(n(27)), l = f(n(32)), u = n(33), c = n(0);
        function f(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        function h(e2, t2) {
          if (!e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t2 || "object" != typeof t2 && "function" != typeof t2 ? e2 : t2;
        }
        var d = t.DanmuJs = function(e2) {
          function t2(e3) {
            !function(e4, t3) {
              if (!(e4 instanceof t3)) throw new TypeError("Cannot call a class as a function");
            }(this, t2);
            var n2 = h(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this));
            n2.setLogger("danmu"), n2.logger && n2.logger.info("danmu.js version: " + o.version);
            var i2 = n2.config = { overlap: false, area: { start: 0, end: 1, lines: void 0 }, hooks: void 0, live: false, comments: [], direction: "r2l", needResizeObserver: false, dropStaleComments: false, channelSize: void 0, maxCommentsLength: void 0, bulletOffset: void 0, interval: 2e3, highScorePriority: true, chaseEffect: true };
            if ((0, c.deepCopy)(i2, e3), (0, r.default)(n2), n2.globalHooks = {}, i2.hooks && n2.hooks(i2.hooks), n2.hideArr = [], n2.recycler = new l.default(), n2.freezeId = null, i2.comments.forEach(function(e4) {
              e4.duration = e4.duration ? e4.duration : 5e3, e4.mode || (e4.mode = "scroll");
            }), n2.container = i2.container && 1 === i2.container.nodeType ? i2.container : null, !n2.container) return n2.emit("error", "container id can't be empty"), false, h(n2, false);
            if (i2.containerStyle) {
              var a2 = i2.containerStyle;
              Object.keys(a2).forEach(function(e4) {
                n2.container.style[e4] = a2[e4];
              });
            }
            return (0, c.addClass)(n2.container, "danmu"), n2.live = i2.live, n2.player = i2.player, n2.direction = i2.direction, n2.bulletBtn = new s.default(n2), n2.main = n2.bulletBtn.main, n2.isReady = true, n2.emit("ready"), n2.logger && n2.logger.info("ready"), n2.addResizeObserver(), n2;
          }
          return function(e3, t3) {
            if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
            e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
          }(t2, e2), i(t2, [{ key: "hooks", value: function(e3) {
            (0, c.deepCopy)(this.globalHooks, e3);
          } }, { key: "addResizeObserver", value: function() {
            var e3 = this;
            this.config.needResizeObserver && this.container && (0, u.addObserver)(this.container, function() {
              e3.logger && e3.logger.info("needResizeObserver"), e3.resize();
            });
          } }, { key: "start", value: function() {
            this.logger && this.logger.info("start"), this.main && this.main.start();
          } }, { key: "pause", value: function() {
            this.logger && this.logger.info("pause"), this.main && this.main.pause();
          } }, { key: "play", value: function() {
            this.logger && this.logger.info("play"), this.main && this.main.play();
          } }, { key: "stop", value: function() {
            this.logger && this.logger.info("stop"), this.main && this.main.stop();
          } }, { key: "clear", value: function() {
            this.logger && this.logger.info("clear"), this.main && this.main.clear();
          } }, { key: "destroy", value: function() {
            for (var e3 in (0, u.unObserver)(this.container), this.logger && this.logger.info("destroy"), this.stop(), this.bulletBtn && this.bulletBtn.destroy(), this.recycler && this.recycler.destroy(), this) delete this[e3];
            this.emit("destroy");
          } }, { key: "sendComment", value: function(e3) {
            var t3 = this.main, n2 = this.logger;
            n2 && n2.info("sendComment: " + (e3.txt || "[DOM Element]")), t3 && (e3.duration || (e3.duration = 15e3), e3 && e3.id && e3.duration && (e3.el || e3.elLazyInit || e3.txt) && (e3.duration = e3.duration ? e3.duration : 5e3, e3.style || (e3.style = { opacity: void 0, fontSize: void 0 }), e3.style && (this.opacity && this.opacity !== e3.style.opacity && (e3.style.opacity = this.opacity), this.fontSize && this.fontSize !== e3.style.fontSize && (e3.style.fontSize = this.fontSize)), e3.prior || e3.realTime ? (t3.data.unshift(e3), e3.realTime && (t3.readData(), t3.dataHandle())) : t3.data.push(e3), t3.sortData(), t3.keepPoolWatermark()));
          } }, { key: "setCommentID", value: function(e3, t3) {
            var n2 = this;
            this.logger && this.logger.info("setCommentID: oldID " + e3 + " newID " + t3), e3 && t3 && (this.main.data.some(function(n3) {
              return n3.id === e3 && (n3.id = t3, true);
            }), this.main.queue.some(function(i2) {
              return i2.id === e3 && (i2.id = t3, i2.pauseMove(), "paused" !== n2.main.status && i2.startMove(), true);
            }));
          } }, { key: "setCommentDuration", value: function(e3, t3) {
            var n2 = this;
            this.logger && this.logger.info("setCommentDuration: id " + e3 + " duration " + t3), e3 && t3 && (t3 = t3 || 5e3, this.main.data.some(function(n3) {
              return n3.id === e3 && (n3.duration = t3, true);
            }), this.main.queue.some(function(i2) {
              return i2.id === e3 && (i2.duration = t3, i2.pauseMove(), "paused" !== n2.main.status && i2.startMove(), true);
            }));
          } }, { key: "setCommentLike", value: function(e3, t3) {
            this.logger && this.logger.info("setCommentLike: id " + e3 + " like " + t3), e3 && t3 && (this.main.data.some(function(n2) {
              return n2.id === e3 && (n2.like = t3, true);
            }), this.main.queue.some(function(n2) {
              return n2.id === e3 && (n2.pauseMove(), n2.setLikeDom(t3.el, t3.style), "paused" !== n2.danmu.main.status && n2.startMove(), true);
            }));
          } }, { key: "restartComment", value: function(e3) {
            if (this.logger && this.logger.info("restartComment: id " + e3), e3) {
              var t3 = this.main;
              if (this._releaseCtrl(e3), "closed" === t3.status) return;
              t3.queue.some(function(n2) {
                return n2.id === e3 && ("paused" !== t3.status ? n2.startMove(true) : n2.status = "paused", true);
              });
            }
          } }, { key: "_releaseCtrl", value: function(e3) {
            this.freezeId && e3 === this.freezeId && (this.mouseControl = false, this.freezeId = null);
          } }, { key: "_freezeCtrl", value: function(e3) {
            this.mouseControl = true, this.freezeId = e3;
          } }, { key: "freezeComment", value: function(e3) {
            if (this.logger && this.logger.info("freezeComment: id " + e3), e3) {
              this._freezeCtrl(e3), this.main.queue.some(function(t3) {
                return t3.id === e3 && (t3.status = "forcedPause", t3.pauseMove(), t3.el && t3.el.style && (0, c.styleUtil)(t3.el, "zIndex", 10), true);
              });
            }
          } }, { key: "removeComment", value: function(e3) {
            if (this.logger && this.logger.info("removeComment: id " + e3), e3) {
              var t3 = this.main;
              this._releaseCtrl(e3), t3.queue = t3.queue.filter(function(t4) {
                return t4.id !== e3 || (t4.remove(), false);
              }), t3.data = t3.data.filter(function(t4) {
                return t4.id !== e3;
              });
            }
          } }, { key: "updateComments", value: function(e3) {
            var t3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.logger && this.logger.info("updateComments: " + e3.length + ", isClear " + t3);
            var n2 = this.main;
            "boolean" == typeof t3 && t3 && (n2.data = []), n2.data = n2.data.concat(e3), n2.sortData(), n2.keepPoolWatermark();
          } }, { key: "setAllDuration", value: function() {
            var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "scroll", t3 = this, n2 = arguments[1], i2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            this.logger && this.logger.info("setAllDuration: mode " + e3 + " duration " + n2 + " force " + i2), n2 && (n2 = n2 || 5e3, i2 && (this.main.forceDuration = n2), this.main.data.forEach(function(t4) {
              e3 === t4.mode && (t4.duration = n2);
            }), this.main.queue.forEach(function(i3) {
              e3 === i3.mode && (i3.duration = n2, i3.pauseMove(), "paused" !== t3.main.status && i3.startMove());
            }));
          } }, { key: "setPlayRate", value: function() {
            var e3 = this, t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "scroll", n2 = arguments[1];
            this.logger && this.logger.info("setPlayRate: " + n2), (0, c.isNumber)(n2) && n2 > 0 && (this.main.playRate = n2, this.main.queue.forEach(function(n3) {
              t3 === n3.mode && (n3.pauseMove(), "paused" !== e3.main.status && n3.startMove());
            }));
          } }, { key: "setOpacity", value: function(e3) {
            this.logger && this.logger.info("setOpacity: opacity " + e3), this.container && (this.container.style.opacity = e3);
          } }, { key: "setFontSize", value: function(e3, t3) {
            var n2 = this, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { reflow: true };
            this.logger && this.logger.info("setFontSize: size " + e3 + " channelSize " + t3), this.fontSize = e3 + "px", e3 && (this.main.data.forEach(function(e4) {
              e4.style && (e4.style.fontSize = n2.fontSize);
            }), this.main.queue.forEach(function(e4) {
              e4.options.style || (e4.options.style = {}), e4.options.style.fontSize = n2.fontSize, e4.setFontSize(n2.fontSize), t3 && (e4.top = e4.channel_id[0] * t3, e4.topInit());
            })), t3 && (this.config.channelSize = t3, i2.reflow && this.main.channel.resizeSync());
          } }, { key: "setArea", value: function(e3) {
            this.logger && this.logger.info("setArea: area " + e3), this.config.area = e3, false !== e3.reflow && this.main.channel.resizeSync();
          } }, { key: "hide", value: function() {
            var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "scroll";
            this.logger && this.logger.info("hide: mode " + e3), this.hideArr.indexOf(e3) < 0 && this.hideArr.push(e3);
            var t3 = this.main.queue.filter(function(t4) {
              return e3 === t4.mode || "color" === e3 && t4.color;
            });
            t3.forEach(function(e4) {
              return e4.remove();
            });
          } }, { key: "show", value: function() {
            var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "scroll";
            this.logger && this.logger.info("show: mode " + e3);
            var t3 = this.hideArr.indexOf(e3);
            t3 > -1 && this.hideArr.splice(t3, 1);
          } }, { key: "setDirection", value: function() {
            var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "r2l";
            this.logger && this.logger.info("setDirection: direction " + e3), this.direction = e3, this.emit("changeDirection", e3);
          } }, { key: "resize", value: function() {
            this.logger && this.logger.info("resize"), this.emit("channel_resize");
          } }, { key: "status", get: function() {
            return this.main.status;
          } }, { key: "state", get: function() {
            var e3 = this.main;
            return { status: e3.status, comments: e3.data, bullets: e3.queue, displayArea: e3.channel.getRealOccupyArea() };
          } }, { key: "containerPos", get: function() {
            return this.main.channel.containerPos;
          } }]), t2;
        }(a.default);
        t.default = d;
      }, function(e, t, n) {
        "use strict";
        var i, r, o, a, s, l, u, c = n(8), f = n(25), h = Function.prototype.apply, d = Function.prototype.call, p = Object.create, g = Object.defineProperty, v = Object.defineProperties, m = Object.prototype.hasOwnProperty, y = { configurable: true, enumerable: false, writable: true };
        r = function(e2, t2) {
          var n2, r2;
          return f(t2), r2 = this, i.call(this, e2, n2 = function() {
            o.call(r2, e2, n2), h.call(t2, this, arguments);
          }), n2.__eeOnceListener__ = t2, this;
        }, s = { on: i = function(e2, t2) {
          var n2;
          return f(t2), m.call(this, "__ee__") ? n2 = this.__ee__ : (n2 = y.value = p(null), g(this, "__ee__", y), y.value = null), n2[e2] ? "object" == typeof n2[e2] ? n2[e2].push(t2) : n2[e2] = [n2[e2], t2] : n2[e2] = t2, this;
        }, once: r, off: o = function(e2, t2) {
          var n2, i2, r2, o2;
          if (f(t2), !m.call(this, "__ee__")) return this;
          if (!(n2 = this.__ee__)[e2]) return this;
          if ("object" == typeof (i2 = n2[e2])) for (o2 = 0; r2 = i2[o2]; ++o2) r2 !== t2 && r2.__eeOnceListener__ !== t2 || (2 === i2.length ? n2[e2] = i2[o2 ? 0 : 1] : i2.splice(o2, 1));
          else i2 !== t2 && i2.__eeOnceListener__ !== t2 || delete n2[e2];
          return this;
        }, emit: a = function(e2) {
          var t2, n2, i2, r2, o2;
          if (m.call(this, "__ee__") && (r2 = this.__ee__[e2])) if ("object" == typeof r2) {
            for (n2 = arguments.length, o2 = new Array(n2 - 1), t2 = 1; t2 < n2; ++t2) o2[t2 - 1] = arguments[t2];
            for (r2 = r2.slice(), t2 = 0; i2 = r2[t2]; ++t2) h.call(i2, this, o2);
          } else switch (arguments.length) {
            case 1:
              d.call(r2, this);
              break;
            case 2:
              d.call(r2, this, arguments[1]);
              break;
            case 3:
              d.call(r2, this, arguments[1], arguments[2]);
              break;
            default:
              for (n2 = arguments.length, o2 = new Array(n2 - 1), t2 = 1; t2 < n2; ++t2) o2[t2 - 1] = arguments[t2];
              h.call(r2, this, o2);
          }
        } }, l = { on: c(i), once: c(r), off: c(o), emit: c(a) }, u = v({}, l), e.exports = t = function(e2) {
          return null == e2 ? p(u) : v(Object(e2), l);
        }, t.methods = s;
      }, function(e, t, n) {
        "use strict";
        var i = n(3), r = n(9), o = n(13), a = n(21), s = n(22);
        (e.exports = function(e2, t2) {
          var n2, r2, l, u, c;
          return arguments.length < 2 || "string" != typeof e2 ? (u = t2, t2 = e2, e2 = null) : u = arguments[2], i(e2) ? (n2 = s.call(e2, "c"), r2 = s.call(e2, "e"), l = s.call(e2, "w")) : (n2 = l = true, r2 = false), c = { value: t2, configurable: n2, enumerable: r2, writable: l }, u ? o(a(u), c) : c;
        }).gs = function(e2, t2, n2) {
          var l, u, c, f;
          return "string" != typeof e2 ? (c = n2, n2 = t2, t2 = e2, e2 = null) : c = arguments[3], i(t2) ? r(t2) ? i(n2) ? r(n2) || (c = n2, n2 = void 0) : n2 = void 0 : (c = t2, t2 = n2 = void 0) : t2 = void 0, i(e2) ? (l = s.call(e2, "c"), u = s.call(e2, "e")) : (l = true, u = false), f = { get: t2, set: n2, configurable: l, enumerable: u }, c ? o(a(c), f) : f;
        };
      }, function(e, t, n) {
        "use strict";
        var i = n(10), r = /^\s*class[\s{/}]/, o = Function.prototype.toString;
        e.exports = function(e2) {
          return !!i(e2) && !r.test(o.call(e2));
        };
      }, function(e, t, n) {
        "use strict";
        var i = n(11);
        e.exports = function(e2) {
          if ("function" != typeof e2) return false;
          if (!hasOwnProperty.call(e2, "length")) return false;
          try {
            if ("number" != typeof e2.length) return false;
            if ("function" != typeof e2.call) return false;
            if ("function" != typeof e2.apply) return false;
          } catch (e3) {
            return false;
          }
          return !i(e2);
        };
      }, function(e, t, n) {
        "use strict";
        var i = n(12);
        e.exports = function(e2) {
          if (!i(e2)) return false;
          try {
            return !!e2.constructor && e2.constructor.prototype === e2;
          } catch (e3) {
            return false;
          }
        };
      }, function(e, t, n) {
        "use strict";
        var i = n(3), r = { object: true, function: true, undefined: true };
        e.exports = function(e2) {
          return !!i(e2) && hasOwnProperty.call(r, typeof e2);
        };
      }, function(e, t, n) {
        "use strict";
        e.exports = n(14)() ? Object.assign : n(15);
      }, function(e, t, n) {
        "use strict";
        e.exports = function() {
          var e2, t2 = Object.assign;
          return "function" == typeof t2 && (t2(e2 = { foo: "raz" }, { bar: "dwa" }, { trzy: "trzy" }), e2.foo + e2.bar + e2.trzy === "razdwatrzy");
        };
      }, function(e, t, n) {
        "use strict";
        var i = n(16), r = n(20), o = Math.max;
        e.exports = function(e2, t2) {
          var n2, a, s, l = o(arguments.length, 2);
          for (e2 = Object(r(e2)), s = function(i2) {
            try {
              e2[i2] = t2[i2];
            } catch (e3) {
              n2 || (n2 = e3);
            }
          }, a = 1; a < l; ++a) i(t2 = arguments[a]).forEach(s);
          if (void 0 !== n2) throw n2;
          return e2;
        };
      }, function(e, t, n) {
        "use strict";
        e.exports = n(17)() ? Object.keys : n(18);
      }, function(e, t, n) {
        "use strict";
        e.exports = function() {
          try {
            return Object.keys("primitive"), true;
          } catch (e2) {
            return false;
          }
        };
      }, function(e, t, n) {
        "use strict";
        var i = n(2), r = Object.keys;
        e.exports = function(e2) {
          return r(i(e2) ? Object(e2) : e2);
        };
      }, function(e, t, n) {
        "use strict";
        e.exports = function() {
        };
      }, function(e, t, n) {
        "use strict";
        var i = n(2);
        e.exports = function(e2) {
          if (!i(e2)) throw new TypeError("Cannot use null or undefined");
          return e2;
        };
      }, function(e, t, n) {
        "use strict";
        var i = n(2), r = Array.prototype.forEach, o = Object.create, a = function(e2, t2) {
          var n2;
          for (n2 in e2) t2[n2] = e2[n2];
        };
        e.exports = function(e2) {
          var t2 = o(null);
          return r.call(arguments, function(e3) {
            i(e3) && a(Object(e3), t2);
          }), t2;
        };
      }, function(e, t, n) {
        "use strict";
        e.exports = n(23)() ? String.prototype.contains : n(24);
      }, function(e, t, n) {
        "use strict";
        var i = "razdwatrzy";
        e.exports = function() {
          return "function" == typeof i.contains && (true === i.contains("dwa") && false === i.contains("foo"));
        };
      }, function(e, t, n) {
        "use strict";
        var i = String.prototype.indexOf;
        e.exports = function(e2) {
          return i.call(this, e2, arguments[1]) > -1;
        };
      }, function(e, t, n) {
        "use strict";
        e.exports = function(e2) {
          if ("function" != typeof e2) throw new TypeError(e2 + " is not a function");
          return e2;
        };
      }, function(e) {
        e.exports = JSON.parse('{"version":"1.1.13"}');
      }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var i = /* @__PURE__ */ function() {
          function e2(e3, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
            }
          }
          return function(t2, n2, i2) {
            return n2 && e2(t2.prototype, n2), i2 && e2(t2, i2), t2;
          };
        }(), r = s(n(1)), o = s(n(28)), a = n(0);
        function s(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        var l = function(e2) {
          function t2(e3) {
            !function(e4, t3) {
              if (!(e4 instanceof t3)) throw new TypeError("Cannot call a class as a function");
            }(this, t2);
            var n2 = function(e4, t3) {
              if (!e4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
            }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this));
            return n2.setLogger("control"), n2.danmu = e3, n2.main = new o.default(e3), e3.config.defaultOff || n2.main.start(), n2;
          }
          return function(e3, t3) {
            if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
            e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
          }(t2, e2), i(t2, [{ key: "createSwitch", value: function() {
            var e3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return this.logger && this.logger.info("createSwitch"), this.switchBtn = (0, a.createDom)("dk-switch", '<span class="txt">弹</span>', {}, "danmu-switch " + (e3 ? "danmu-switch-active" : "")), this.switchBtn;
          } }, { key: "destroy", value: function() {
            for (var e3 in this.logger && this.logger.info("destroy"), this.main.destroy(), this) a.hasOwnProperty.call(this, e3) && delete this[e3];
          } }]), t2;
        }(r.default);
        t.default = l, e.exports = t.default;
      }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var i = /* @__PURE__ */ function() {
          function e2(e3, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
            }
          }
          return function(t2, n2, i2) {
            return n2 && e2(t2.prototype, n2), i2 && e2(t2, i2), t2;
          };
        }(), r = l(n(1)), o = l(n(29)), a = l(n(30)), s = n(0);
        function l(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        var u = function(e2) {
          function t2(e3) {
            !function(e4, t3) {
              if (!(e4 instanceof t3)) throw new TypeError("Cannot call a class as a function");
            }(this, t2);
            var n2 = function(e4, t3) {
              if (!e4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
            }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this));
            return n2.setLogger("main"), n2.danmu = e3, n2.container = e3.container, n2.channel = new a.default(e3), n2.data = [].concat(e3.config.comments), n2.playedData = [], n2.queue = [], n2.timer = null, n2.playRate = 1, n2.retryStatus = "normal", n2.interval = e3.config.interval, n2._status = "idle", n2._events = [], n2._bindEvents(), n2;
          }
          return function(e3, t3) {
            if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
            e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
          }(t2, e2), i(t2, [{ key: "destroy", value: function() {
            for (var e3 in this.logger && this.logger.info("destroy"), this._unbindEvents(), this._cancelTick(), this.channel && this.channel.destroy(), this.data = [], this) delete this[e3];
          } }, { key: "_bindEvents", value: function() {
            var e3 = this, t3 = this.danmu, n2 = this.container;
            this._unbindEvents();
            this._events.push([t3, "bullet_remove", function(t4) {
              var n3 = t4.bullet, i2 = e3.data, r2 = e3.queue;
              r2.some(function(e4, t5) {
                return e4.id === n3.id && (r2.splice(t5, 1), true);
              }), i2.some(function(e4) {
                return e4.id === n3.id && (e4.attached_ = false, true);
              });
            }]);
            if (this._events.push([n2, "transitionend", function(t4) {
              var n3 = e3._getBulletByEvt(t4);
              n3 && (n3.status = "end", n3.remove(false));
            }]), t3.config.mouseControl || t3.config.mouseEnterControl) {
              this._events.push([n2, "mouseover", function(t4) {
                var n3, i2 = e3.danmu;
                !i2 || i2.mouseControl && i2.config.mouseControlPause || (n3 = e3._getBulletByEvt(t4)) && "waiting" !== n3.status && "end" !== n3.status && i2.emit("bullet_hover", { bullet: n3, event: t4 });
              }]);
            }
            this._events.forEach(function(e4) {
              e4[0].addEventListener ? e4[0].addEventListener(e4[1], e4[2], false) : e4[0].on && e4[0].on(e4[1], e4[2]);
            });
          } }, { key: "_unbindEvents", value: function() {
            this._events.length && (this._events.forEach(function(e3) {
              e3[0].removeEventListener ? e3[0].removeEventListener(e3[1], e3[2], false) : e3[0].off && e3[0].off(e3[1], e3[2]);
            }), this._events = []);
          } }, { key: "_cancelTick", value: function() {
            this.handleTimer && (clearTimeout(this.handleTimer), this.handleTimer = null);
          } }, { key: "_startTick", value: function() {
            var e3 = this;
            e3.retryStatus = "normal", e3._cancelTick(), e3.sortData(), function t3() {
              "closed" !== e3._status || "stop" !== e3.retryStatus ? ("playing" === e3._status && (e3.readData(), e3.dataHandle()), "stop" === e3.retryStatus && "paused" !== e3._status || (e3.handleTimer = setTimeout(t3, 250))) : e3._cancelTick();
            }();
          } }, { key: "start", value: function() {
            this.logger && this.logger.info("start");
            "playing" !== this._status && (this._status = "playing", this.queue = [], this.container.innerHTML = "", this.channel.reset(), this._startTick());
          } }, { key: "stop", value: function() {
            this.logger && this.logger.info("stop");
            "closed" !== this._status && (this._status = "closed", this.retryStatus = "stop", this.queue = [], this.container && (this.container.innerHTML = ""), this.channel && this.channel.reset(), this._cancelTick());
          } }, { key: "clear", value: function() {
            this.logger && this.logger.info("clear"), this.channel && this.channel.reset(), this.data = [], this.queue = [], this.container && (this.container.innerHTML = "");
          } }, { key: "play", value: function() {
            var e3 = this;
            if ("closed" !== this._status) {
              this.logger && this.logger.info("play"), this._status = "playing";
              var t3 = this.channel.channels;
              t3 && t3.length > 0 && ["scroll", "top", "bottom"].forEach(function(n2) {
                e3.queue.forEach(function(e4) {
                  e4.startMove(), e4.resized = true;
                });
                for (var i2 = 0; i2 < t3.length; i2++) t3[i2].queue[n2].forEach(function(e4) {
                  e4.resized = false;
                });
              }), this._startTick();
            } else this.logger && this.logger.info("play ignored");
          } }, { key: "pause", value: function() {
            if ("closed" !== this._status) {
              this.logger && this.logger.info("pause"), this._status = "paused", this._cancelTick();
              var e3 = this.channel.channels;
              e3 && e3.length > 0 && this.queue.forEach(function(e4) {
                e4.pauseMove();
              });
            } else this.logger && this.logger.info("pause ignored");
          } }, { key: "dataHandle", value: function() {
            "paused" !== this._status && "closed" !== this._status && this.queue.length && this.queue.forEach(function(e3) {
              "waiting" === e3.status && e3.startMove();
            });
          } }, { key: "readData", value: function() {
            var e3 = this.danmu, t3 = this.interval, n2 = this.channel, i2 = e3.player, r2 = void 0, a2 = void 0;
            if (e3.isReady && e3.main) {
              if (i2) {
                var l2 = i2.currentTime ? Math.floor(1e3 * i2.currentTime) : 0;
                a2 = this.data.filter(function(n3) {
                  return !n3.start && e3.hideArr.indexOf(n3.mode) < 0 && (!n3.color || e3.hideArr.indexOf("color") < 0) && (n3.start = l2), !n3.attached_ && e3.hideArr.indexOf(n3.mode) < 0 && (!n3.color || e3.hideArr.indexOf("color") < 0) && n3.start - t3 <= l2 && l2 <= n3.start + t3;
                }), e3.config.highScorePriority && a2.sort(function(e4, t4) {
                  return t4.prior && !e4.prior || (t4.score || -1) - (e4.score || -1);
                }), e3.live && (this.data = []);
              } else 0 === (a2 = this.data.splice(0, 1)).length && (a2 = this.playedData.splice(0, 1));
              if (a2.length > 0 && n2.checkAvailableTrack(a2[0].mode)) {
                n2.updatePos();
                var u2 = 0;
                e: for (var c, f = 0; f < a2.length; f++) if (c = a2[f], this.forceDuration && this.forceDuration !== c.duration && (c.duration = this.forceDuration), (r2 = new o.default(e3, c)).bulletCreateFail) {
                  if (0 === u2) break e;
                  u2--;
                } else if (r2.attach(), c.attached_ = true, n2.addBullet(r2).result) this.queue.push(r2), r2.topInit(), u2 = 0;
                else {
                  for (var h in r2.detach(), r2) s.hasOwnProperty.call(r2, h) && delete r2[h];
                  if (r2 = null, c.attached_ = false, c.noDiscard && (c.prior ? this.data.unshift(c) : this.data.push(c)), 0 === u2) break e;
                  u2--;
                }
              }
            }
          } }, { key: "sortData", value: function() {
            this.data.sort(function(e3, t3) {
              return (e3.start || -1) - (t3.start || -1);
            });
          } }, { key: "keepPoolWatermark", value: function() {
            var e3 = this.danmu, t3 = e3.config, n2 = e3.player, i2 = this.data, r2 = [], o2 = 0;
            if ("number" == typeof t3.maxCommentsLength && i2.length > t3.maxCommentsLength) {
              o2 = i2.length - t3.maxCommentsLength;
              for (var a2, s2 = 0; s2 < o2; s2++) (a2 = i2[s2]).prior && !a2.attached_ && r2.push(i2[s2]);
            } else if (t3.dropStaleComments && n2 && n2.currentTime) {
              var l2 = Math.floor(1e3 * n2.currentTime) - t3.interval;
              if (l2 > 0) {
                for (var u2, c = 0; c < i2.length; c++) if ((u2 = i2[c]).prior && !u2.attached_ && r2.push(i2[c]), u2.start > l2) {
                  o2 = c;
                  break;
                }
              }
            }
            o2 > 0 && (i2.splice(0, o2), this.data = r2.concat(i2));
          } }, { key: "_getBulletByEvt", value: function(e3) {
            for (var t3, n2 = e3.target || e3.srcElement, i2 = this.queue, r2 = void 0, o2 = 0; o2 < i2.length; o2++) if ((t3 = i2[o2]) && t3.el && (t3.el === n2 || t3.el.contains(n2))) {
              r2 = t3;
              break;
            }
            return r2;
          } }, { key: "status", get: function() {
            return this._status;
          } }]), t2;
        }(r.default);
        t.default = u, e.exports = t.default;
      }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true }), t.Bullet = void 0;
        var i = /* @__PURE__ */ function() {
          function e2(e3, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
            }
          }
          return function(t2, n2, i2) {
            return n2 && e2(t2.prototype, n2), i2 && e2(t2, i2), t2;
          };
        }(), r = s(n(1)), o = s(n(4)), a = n(0);
        function s(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        function l(e2, t2) {
          if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
        }
        function u(e2, t2) {
          if (!e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t2 || "object" != typeof t2 && "function" != typeof t2 ? e2 : t2;
        }
        var c = new o.default("bullet"), f = t.Bullet = function(e2) {
          function t2(e3) {
            var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            l(this, t2);
            var i2 = u(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this)), r2 = e3.container, o2 = e3.recycler, a2 = e3.config;
            return i2.setLogger(c), i2.danmu = e3, i2.options = n2, i2.duration = n2.duration, i2.id = n2.id, i2.container = r2, i2.mode = "top" === n2.mode || "bottom" === n2.mode ? n2.mode : "scroll", i2.start = n2.start, i2.prior = n2.prior, i2.realTime = n2.realTime, i2.color = n2.color, i2.bookChannelId = n2.bookChannelId, i2.reuseDOM = true, i2.noCopyEl = !(!a2.disableCopyDOM && !n2.disableCopyDOM), i2.recycler = o2, i2._fullySlideInScreenDuration = void 0, i2._lastMoveTime = void 0, i2.status = "waiting", n2.elLazyInit || (i2.bulletCreateFail = !i2._makeEl()), i2;
          }
          return function(e3, t3) {
            if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
            e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
          }(t2, e2), i(t2, [{ key: "_makeEl", value: function() {
            var e3 = this.danmu, t3 = this.options, n2 = e3.config, i2 = e3.globalHooks, r2 = void 0, o2 = "", s2 = t3.style || {};
            if (s2.perspective = "500em", t3.el || t3.elLazyInit) {
              if (this.noCopyEl && (this.reuseDOM = false), t3.elLazyInit) {
                if ((0, a.isFunction)(i2.bulletCreateEl)) try {
                  var l2 = i2.bulletCreateEl(t3);
                  r2 = l2 instanceof HTMLElement ? l2 : l2.el;
                } catch (e4) {
                }
              } else if (1 === t3.el.nodeType && !t3.el.parentNode) if (this.reuseDOM) {
                var u2 = (0, a.copyDom)(t3.el);
                t3.eventListeners && t3.eventListeners.length > 0 && t3.eventListeners.forEach(function(e4) {
                  u2.addEventListener(e4.event, e4.listener, e4.useCapture || false);
                }), (r2 = this.recycler.use()).childNodes.length > 0 && (r2.innerHTML = ""), r2.textContent && (r2.textContent = ""), r2.appendChild(u2);
              } else r2 = t3.el;
            } else "string" == typeof t3.txt && ((r2 = this.recycler.use()).textContent = t3.txt);
            if (!r2 || !e3.main) return false;
            var c2 = void 0;
            if ((0, a.isNumber)(n2.bulletOffset) && n2.bulletOffset >= 0) c2 = n2.bulletOffset;
            else {
              var f2 = e3.containerPos;
              c2 = f2.width / 10 > 100 ? 100 : f2.width / 10;
            }
            var h = t3.realTime ? 0 : Math.floor(Math.random() * c2), d = this.updateOffset(h, true);
            return s2.left = d, Object.keys(s2).forEach(function(e4) {
              var t4 = e4.replace(/[A-Z]/g, function(e5) {
                return "-" + e5.toLowerCase();
              });
              o2 += t4 + ":" + s2[e4] + ";";
            }), (0, a.styleCSSText)(r2, o2), this.el = r2, t3.like && t3.like.el && this.setLikeDom(t3.like.el, t3.like.style), true;
          } }, { key: "updateOffset", value: function(e3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            this.random = e3;
            var n2 = this.danmu.containerPos.width + e3 + "px";
            return t3 || (0, a.styleUtil)(this.el, "left", this.danmu.containerPos.width + e3 + "px"), n2;
          } }, { key: "attach", value: function() {
            if (this.options.elLazyInit && !this.el && this._makeEl(), this.danmu && this.danmu.main) {
              var e3 = this.danmu, t3 = this.options, n2 = this.el, i2 = e3.globalHooks;
              i2.bulletAttaching && i2.bulletAttaching(t3), this.container.contains(n2) || this.container.appendChild(n2), this.elPos = n2.getBoundingClientRect(), "b2t" === this.direction ? (this.width = this.elPos.height, this.height = this.elPos.width) : (this.width = this.elPos.width, this.height = this.elPos.height), this.moveV && (this.duration = (this.danmu.containerPos.width + this.random + this.width) / this.moveV * 1e3), i2.bulletAttached && i2.bulletAttached(t3, n2);
            }
          } }, { key: "detach", value: function() {
            var e3 = this.el, t3 = this.danmu, n2 = this.options, i2 = t3.globalHooks;
            e3 && (i2.bulletDetaching && i2.bulletDetaching(n2), this.reuseDOM ? this.recycler.unused(e3) : e3.parentNode && e3.parentNode.removeChild(e3), i2.bulletDetached && i2.bulletDetached(n2, e3), this.el = null), this.elPos = void 0;
          } }, { key: "topInit", value: function() {
            this.logger && this.logger.info("topInit #" + (this.options.txt || "[DOM Element]") + "#"), "b2t" === this.direction ? ((0, a.styleUtil)(this.el, "transformOrigin", "left top"), (0, a.styleUtil)(this.el, "transform", "translateX(-" + this.top + "px) translateY(" + this.danmu.containerPos.height + "px) translateZ(0px) rotate(90deg)"), (0, a.styleUtil)(this.el, "transition", "transform 0s linear 0s")) : (0, a.styleUtil)(this.el, "top", this.top + "px");
          } }, { key: "pauseMove", value: function() {
            var e3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t3 = this;
            if ("paused" !== t3.status && ("forcedPause" !== t3.status && (this.status = "paused"), t3._moveV = void 0, this.el)) if ("scroll" === this.mode) {
              var n2 = t3.danmu.containerPos;
              if (e3) {
                var i2 = ((/* @__PURE__ */ new Date()).getTime() - t3._lastMoveTime) / 1e3, r2 = i2 * this.moveV, o2 = 0;
                o2 = t3.moveMoreS - r2 >= 0 ? "b2t" === this.direction ? (t3.moveMoreS - r2) / t3.moveContainerHeight * n2.height : (t3.moveMoreS - r2) / t3.moveContainerWidth * n2.width : t3.moveMoreS - r2, "b2t" === this.direction ? (0, a.styleUtil)(this.el, "transform", "translateX(-" + this.top + "px) translateY(" + o2 + "px) translateZ(0px) rotate(90deg)") : (0, a.styleUtil)(this.el, "left", o2 + "px");
              } else "b2t" === this.direction ? (0, a.styleUtil)(this.el, "transform", "translateX(-" + this.top + "px) translateY(" + (this.el.getBoundingClientRect().top - n2.top) + "px) translateZ(0px) rotate(90deg)") : (0, a.styleUtil)(this.el, "left", this.el.getBoundingClientRect().left - n2.left + "px");
              "b2t" === this.direction || (0, a.styleUtil)(this.el, "transform", "translateX(0px) translateY(0px) translateZ(0px)"), (0, a.styleUtil)(this.el, "transition", "transform 0s linear 0s");
            } else this.pastDuration && this.startTime ? this.pastDuration = this.pastDuration + (/* @__PURE__ */ new Date()).getTime() - this.startTime : this.pastDuration = 1;
          } }, { key: "startMove", value: function(e3) {
            if (this.hasMove || (this.danmu.emit("bullet_start", this), this.hasMove = true), ("forcedPause" !== this.status || e3) && this.el && "start" !== this.status) if (this.status = "start", "scroll" === this.mode) {
              var t3 = this.danmu.containerPos;
              if (!this.el) return;
              var n2 = this.el.getBoundingClientRect(), i2 = void 0;
              if ("b2t" === this.direction) {
                i2 = n2.bottom - t3.bottom;
                var r2 = (n2.bottom - t3.top) / this.moveV;
                (0, a.styleUtil)(this.el, "transition", "transform " + r2 + "s linear 0s"), (0, a.styleUtil)(this.el, "transform", "translateX(-" + this.top + "px) translateY(-" + this.height + "px) translateZ(0px) rotate(90deg)"), this._lastMoveTime = (/* @__PURE__ */ new Date()).getTime(), this.moveMoreS = n2.top - t3.top, this.moveContainerHeight = t3.height;
              } else {
                i2 = n2.right - t3.right;
                var o2 = n2.right - t3.left, s2 = o2 / this.moveV;
                n2.right > t3.left ? ((0, a.styleUtil)(this.el, "transition", "transform " + s2 + "s linear 0s"), (0, a.styleUtil)(this.el, "transform", "translateX(-" + o2 + "px) translateY(0px) translateZ(0px)"), this._lastMoveTime = (/* @__PURE__ */ new Date()).getTime(), this.moveMoreS = n2.left - t3.left, this.moveContainerWidth = t3.width) : (this.status = "end", this.remove());
              }
              this._fullySlideInScreenDuration = i2 / this.moveV;
            } else {
              var l2 = (/* @__PURE__ */ new Date()).getTime(), u2 = (this.startTime && l2 - this.startTime > this.duration ? l2 - this.startTime : this.duration) / 1e3;
              (0, a.styleUtil)(this.el, "left", "50%"), (0, a.styleUtil)(this.el, "margin", "0 0 0 -" + this.width / 2 + "px"), (0, a.styleUtil)(this.el, "visibility", "hidden"), (0, a.styleUtil)(this.el, "transition", "visibility " + u2 + "s 0s"), this.pastDuration || (this.pastDuration = 1), this.startTime = l2;
            }
          } }, { key: "remove", value: function() {
            var e3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            this.logger && this.logger.info("remove #" + (this.options.txt || "[DOM Element]") + "#");
            var t3 = this;
            e3 && t3.pauseMove(), t3.el && t3.el.parentNode && (t3.detach(), this.options.el && 1 === this.options.el.nodeType && this.noCopyEl && (0, a.styleUtil)(this.options.el, "transform", "none"), t3.danmu.emit("bullet_remove", { bullet: t3 }));
          } }, { key: "setFontSize", value: function(e3) {
            this.el && (this.el.style.fontSize = e3);
          } }, { key: "setLikeDom", value: function(e3, t3) {
            if (e3) {
              Object.keys(t3).forEach(function(n3) {
                e3.style[n3] = t3[n3];
              });
              if (e3.className = "danmu-like", this.el) {
                var n2 = this.el.querySelector(".danmu-like");
                n2 && this.el.removeChild(n2), this.el.innerHTML = "" + this.el.innerHTML + e3.outerHTML;
              }
            }
            return e3;
          } }, { key: "moveV", get: function() {
            var e3 = this.danmu, t3 = this.options, n2 = this._moveV;
            if (!n2) {
              if (t3.moveV) n2 = t3.moveV;
              else if (this.elPos) {
                var i2 = e3.containerPos;
                n2 = ("b2t" === this.direction ? i2.height + (e3.config.chaseEffect ? this.height : 0) : i2.width + (e3.config.chaseEffect ? this.width : 0)) / this.duration * 1e3;
              }
              n2 && (n2 *= e3.main.playRate, this._moveV = n2);
            }
            return n2;
          } }, { key: "direction", get: function() {
            return this.danmu.direction;
          } }, { key: "fullySlideIntoScreen", get: function() {
            var e3 = true;
            "scroll" === this.mode && this._lastMoveTime && this._fullySlideInScreenDuration > 0 && (e3 = ((/* @__PURE__ */ new Date()).getTime() - this._lastMoveTime) / 1e3 >= this._fullySlideInScreenDuration);
            return e3;
          } }]), t2;
        }(r.default);
        t.default = f;
      }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var i, r = /* @__PURE__ */ function() {
          function e2(e3, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
            }
          }
          return function(t2, n2, i2) {
            return n2 && e2(t2.prototype, n2), i2 && e2(t2, i2), t2;
          };
        }(), o = n(1), a = (i = o) && i.__esModule ? i : { default: i }, s = n(0), l = n(31);
        var u = function(e2) {
          function t2(e3) {
            !function(e4, t3) {
              if (!(e4 instanceof t3)) throw new TypeError("Cannot call a class as a function");
            }(this, t2);
            var n2 = function(e4, t3) {
              if (!e4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
            }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this)), i2 = n2;
            return i2.setLogger("channel"), i2.danmu = e3, i2.width = 0, i2.height = 0, i2.reset(true), i2.channels = [], i2.updatePos(), (0, s.attachEventListener)(n2.danmu, "bullet_remove", function(e4) {
              i2.removeBullet(e4.bullet);
            }, "destroy"), (0, s.attachEventListener)(n2.danmu, "channel_resize", function() {
              i2.resize();
            }, "destroy"), n2;
          }
          return function(e3, t3) {
            if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
            e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
          }(t2, e2), r(t2, [{ key: "checkAvailableTrack", value: function() {
            var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "scroll", t3 = this.channels, n2 = false;
            if ("scroll" === e3) for (var i2, r2 = 0; r2 < t3.length; r2++) if (n2 = true, (i2 = t3[r2]).operating[e3]) n2 = false;
            else {
              var o2 = i2.queue[e3][0];
              if (!o2 || o2.fullySlideIntoScreen) {
                if (n2) break;
              } else n2 = false;
            }
            else n2 = true;
            return n2;
          } }, { key: "destroy", value: function() {
            for (var e3 in this.logger && this.logger.info("destroy"), this.channels.splice(0, this.channels.length), this._cancelResizeTimer(), this) s.hasOwnProperty.call(this, e3) && delete this[e3];
          } }, { key: "reset", value: function() {
            var e3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.logger && this.logger.info("reset");
            var t3 = this, n2 = t3.danmu, i2 = n2.container, r2 = n2.bulletBtn;
            function o2() {
              if (t3.danmu && t3.danmu.container) {
                var e4 = t3.danmu.container.getBoundingClientRect();
                t3.width = e4.width, t3.height = e4.height, t3.resetId && (cancelAnimationFrame(t3.resetId), t3.resetId = null);
                var n3 = t3._initChannels(), i3 = n3.channelSize, r3 = n3.channelCount, o3 = n3.channels;
                t3.channelCount = r3, t3.channels = o3, "b2t" === t3.direction ? t3.channelWidth = i3 : t3.channelHeight = i3;
              }
            }
            t3.container = i2, r2 && r2.main && r2.main.queue.forEach(function(e4) {
              e4.remove();
            }), t3.channels && t3.channels.length > 0 && ["scroll", "top", "bottom"].forEach(function(e4) {
              for (var n3 = 0; n3 < t3.channels.length; n3++) t3.channels[n3].queue[e4].forEach(function(e5) {
                e5.remove();
              });
            }), r2 && r2.main && r2.main.data && r2.main.data.forEach(function(e4) {
              e4.attached_ = false;
            }), e3 ? this.resetId = requestAnimationFrame(o2) : o2();
          } }, { key: "getRealOccupyArea", value: function() {
            return { width: this.width, height: this.height };
          } }, { key: "updatePos", value: function() {
            var e3 = this.container.getBoundingClientRect();
            this.containerPos = e3, this.containerWidth = e3.width, this.containerHeight = e3.height, this.containerTop = e3.top, this.containerBottom = e3.bottom, this.containerLeft = e3.left, this.containerRight = e3.right;
          } }, { key: "addBullet", value: function(e3) {
            var t3 = this, n2 = this.danmu, i2 = this.channels, r2 = void 0, o2 = void 0, a2 = void 0;
            if ("b2t" === t3.direction ? (o2 = this.channelWidth, a2 = Math.ceil(e3.width / o2)) : (r2 = this.channelHeight, a2 = Math.ceil(e3.height / r2)), a2 > i2.length) return { result: false, message: "exceed channels.length, occupy=" + a2 + ",channelsSize=" + i2.length };
            for (var s2 = true, l2 = void 0, u2 = -1, c = 0, f = i2.length; c < f; c++) if (i2[c].queue[e3.mode].some(function(t4) {
              return t4.id === e3.id;
            })) return { result: false, message: "exited, channelOrder=" + c + ",danmu_id=" + e3.id };
            if ("scroll" === e3.mode) for (var h = 0, d = i2.length - a2; h <= d; h += a2) {
              s2 = true;
              for (var p = h; p < h + a2; p++) {
                if ((l2 = i2[p]).operating.scroll || l2.bookId.scroll && l2.bookId.scroll !== e3.id) {
                  s2 = false;
                  break;
                }
                l2.operating.scroll = true;
                var g = l2.queue.scroll[0];
                if (g) {
                  var v = g.el.getBoundingClientRect();
                  if ("b2t" === t3.direction) {
                    if (v.bottom >= t3.containerPos.bottom) {
                      s2 = false, l2.operating.scroll = false;
                      break;
                    }
                  } else if (v.right >= t3.containerPos.right) {
                    s2 = false, l2.operating.scroll = false;
                    break;
                  }
                  var m = void 0, y = g.moveV, b = void 0, _ = e3.moveV, k = void 0;
                  if ("b2t" === t3.direction ? (b = (m = v.bottom - t3.containerTop) / y, k = t3.containerHeight + e3.random - m) : (b = (m = v.right - t3.containerLeft) / y, k = t3.containerWidth + e3.random - m), _ > y) {
                    var w = k / (_ - y);
                    if (n2.config.bOffset || (n2.config.bOffset = 0), b + n2.config.bOffset >= w) {
                      var O = b * _ - t3.containerPos.width;
                      O > 0 && e3.updateOffset(O + (1 + Math.ceil(5 * Math.random())));
                    }
                  }
                }
                l2.operating.scroll = false;
              }
              if (s2) {
                u2 = h;
                break;
              }
            }
            else if ("top" === e3.mode) for (var x = 0, E = i2.length - a2; x <= E; x++) {
              s2 = true;
              for (var C = x; C < x + a2; C++) {
                if (C > Math.floor(i2.length / 2)) {
                  s2 = false;
                  break;
                }
                if ((l2 = i2[C]).operating[e3.mode]) {
                  s2 = false;
                  break;
                }
                if ((l2.bookId[e3.mode] || e3.prior) && l2.bookId[e3.mode] !== e3.id) {
                  s2 = false;
                  break;
                }
                if (l2.operating[e3.mode] = true, l2.queue[e3.mode].length > 0) {
                  s2 = false, l2.operating[e3.mode] = false;
                  break;
                }
                l2.operating[e3.mode] = false;
              }
              if (s2) {
                u2 = x;
                break;
              }
            }
            else if ("bottom" === e3.mode) for (var M = i2.length - a2; M >= 0; M--) {
              s2 = true;
              for (var j = M; j < M + a2; j++) {
                if (j <= Math.floor(i2.length / 2)) {
                  s2 = false;
                  break;
                }
                if ((l2 = i2[j]).operating[e3.mode]) {
                  s2 = false;
                  break;
                }
                if ((l2.bookId[e3.mode] || e3.prior) && l2.bookId[e3.mode] !== e3.id) {
                  s2 = false;
                  break;
                }
                if (l2.operating[e3.mode] = true, l2.queue[e3.mode].length > 0) {
                  s2 = false, l2.operating[e3.mode] = false;
                  break;
                }
                l2.operating[e3.mode] = false;
              }
              if (s2) {
                u2 = M;
                break;
              }
            }
            if (-1 !== u2) {
              for (var T = u2, S = u2 + a2; T < S; T++) (l2 = i2[T]).operating[e3.mode] = true, l2.queue[e3.mode].unshift(e3), e3.prior && (delete l2.bookId[e3.mode], t3.logger && t3.logger.info(T + "号轨道恢复正常使用")), l2.operating[e3.mode] = false;
              if (e3.prior) {
                if (t3.logger && t3.logger.info(e3.id + "号优先弹幕运行完毕"), delete e3.bookChannelId, n2.player) n2.bulletBtn.main.data.some(function(t4) {
                  return t4.id === e3.id && (delete t4.bookChannelId, true);
                });
              }
              return e3.channel_id = [u2, a2], e3.el.setAttribute("data-line-index", u2 + 1), "b2t" === t3.direction ? (e3.top = u2 * o2, t3.danmu.config.area && t3.danmu.config.area.start && (e3.top += t3.containerWidth * t3.danmu.config.area.start)) : (e3.top = u2 * r2, t3.danmu.config.area && t3.danmu.config.area.start && (e3.top += t3.containerHeight * t3.danmu.config.area.start)), { result: e3, message: "success" };
            }
            if (e3.options.realTime) {
              var L = 0, z = -1, P = null;
              if (t3.danmu.bulletBtn.main.queue.forEach(function(e4, n3) {
                !e4.prior && !e4.options.realTime && e4.el && e4.el.getBoundingClientRect().left > t3.containerPos.right && e4.start >= L && (L = e4.start, z = n3, P = e4);
              }), P) {
                P.remove(), t3.removeBullet(P), t3.danmu.bulletBtn.main.queue.splice(z, 1), e3.channel_id = P.channel_id;
                for (var D = P.channel_id[0], I = P.channel_id[0] + P.channel_id[1]; D < I; D++) (l2 = i2[D]).operating[e3.mode] = true, l2.queue[e3.mode].unshift(e3), e3.prior && delete l2.bookId[e3.mode], l2.operating[e3.mode] = false;
                return e3.top = P.top, t3.danmu.config.area && t3.danmu.config.area.start && (e3.top += t3.containerHeight * t3.danmu.config.area.start), { result: e3, message: "success" };
              }
            }
            if (e3.prior) if (e3.bookChannelId || t3.danmu.live) {
              if (n2.player) n2.bulletBtn.main.data.some(function(n3) {
                return n3.id === e3.id && (t3.logger && t3.logger.info(e3.id + "号优先弹幕将于2秒后再次请求注册"), n3.start += 2e3, true);
              });
            } else {
              u2 = -1;
              for (var A = 0, R = i2.length - a2; A <= R; A++) {
                s2 = true;
                for (var q = A; q < A + a2; q++) if (i2[q].bookId[e3.mode]) {
                  s2 = false;
                  break;
                }
                if (s2) {
                  u2 = A;
                  break;
                }
              }
              if (-1 !== u2) {
                for (var B = u2; B < u2 + a2; B++) i2[B].bookId[e3.mode] = e3.id, t3.logger && t3.logger.info(B + "号轨道被" + e3.id + "号优先弹幕预定");
                if (n2.player) n2.bulletBtn.main.data.some(function(n3) {
                  return n3.id === e3.id && (t3.logger && t3.logger.info(e3.id + "号优先弹幕将于2秒后再次请求注册"), n3.start += 2e3, n3.bookChannelId = [u2, a2], t3.logger && t3.logger.info(e3.id + "号优先弹幕预定了" + u2 + "~" + (u2 + a2 - 1) + "号轨道"), true);
                });
              }
            }
            return { result: false, message: "no surplus will right" };
          } }, { key: "removeBullet", value: function(e3) {
            this.logger && this.logger.info("removeBullet " + (e3.options.txt || "[DOM Element]"));
            for (var t3 = this.channels, n2 = e3.channel_id, i2 = void 0, r2 = n2[0], o2 = n2[0] + n2[1]; r2 < o2; r2++) if (i2 = t3[r2]) {
              i2.operating[e3.mode] = true;
              var a2 = -1;
              i2.queue[e3.mode].some(function(t4, n3) {
                return t4.id === e3.id && (a2 = n3, true);
              }), a2 > -1 && i2.queue[e3.mode].splice(a2, 1), i2.operating[e3.mode] = false;
            }
            e3.options.loop && this.danmu.bulletBtn.main.playedData.push(e3.options);
          } }, { key: "resizeSync", value: function() {
            this.resize(true);
          } }, { key: "_initChannels", value: function() {
            if (this.danmu && this.danmu.config) {
              var e3 = this.danmu.config, t3 = e3.channelSize || (/mobile/gi.test(navigator.userAgent) ? 10 : 12), n2 = void 0;
              if (e3.area) {
                var i2 = e3.area, r2 = i2.lines, o2 = i2.start, a2 = i2.end;
                if ((0, l.validAreaLineRule)(r2)) n2 = r2, "b2t" === this.direction ? this.width = n2 * t3 : this.height = n2 * t3;
                else if (o2 >= 0 && a2 >= o2) {
                  var u2 = a2 - o2;
                  "b2t" === this.direction ? this.width = Math.floor(this.width * u2) : this.height = Math.floor(this.height * u2);
                }
              }
              (0, s.isNumber)(n2) || (n2 = "b2t" === this.direction ? Math.floor(this.width / t3) : Math.floor(this.height / t3));
              for (var c = [], f = 0; f < n2; f++) c[f] = { id: f, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: false, top: false, bottom: false }, bookId: {} };
              return { channelSize: t3, channelCount: n2, channels: c };
            }
          } }, { key: "resize", value: function() {
            var e3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.logger && this.logger.info("resize");
            var t3 = this;
            function n2(e4, t4) {
              e4[t4] = { id: t4, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: false, top: false, bottom: false }, bookId: {} };
            }
            function i2(e4, i3) {
              function r3(n3) {
                ["scroll", "top"].forEach(function(i4) {
                  t3.channels[n3].queue[i4].forEach(function(t4) {
                    t4.el && e4[n3].queue[i4].push(t4);
                  });
                });
              }
              function o3(n3) {
                t3.channels[n3].queue.bottom.forEach(function(r4) {
                  if (r4.el && (e4[n3 + e4.length - t3.channels.length].queue.bottom.push(r4), r4.channel_id[0] + r4.channel_id[1] - 1 === n3)) {
                    var o4 = [].concat(r4.channel_id);
                    r4.channel_id = [o4[0] - t3.channels.length + e4.length, o4[1]], r4.top = r4.channel_id[0] * i3, t3.danmu.config.area && t3.danmu.config.area.start && (r4.top += t3.containerHeight * t3.danmu.config.area.start), r4.topInit();
                  }
                });
              }
              for (var a2 = 0; a2 < t3.channels.length; a2++) n2(e4, a2), r3(a2), o3(a2);
              for (var s2 = function(t4) {
                ["scroll", "top", "bottom"].forEach(function(n3) {
                  e4[t4].queue[n3].forEach(function(e5) {
                    e5.resized = false;
                  });
                });
              }, l2 = 0; l2 < e4.length; l2++) s2(l2);
              t3.channels = e4, "b2t" === t3.direction ? t3.channelWidth = i3 : t3.channelHeight = i3;
            }
            function r2(e4, i3) {
              for (var r3 = ["scroll", "top", "bottom"], o3 = function(o4) {
                n2(e4, o4), r3.forEach(function(n3) {
                  if ("top" === n3 && o4 > Math.floor(e4.length / 2)) ;
                  else if ("bottom" === n3 && o4 <= Math.floor(e4.length / 2)) ;
                  else {
                    var r4 = "bottom" === n3 ? o4 - e4.length + t3.channels.length : o4;
                    t3.channels[r4].queue[n3].forEach(function(a3, s3) {
                      if (a3.el) {
                        if (e4[o4].queue[n3].push(a3), "bottom" === n3 && a3.channel_id[0] + a3.channel_id[1] - 1 === r4) {
                          var l2 = [].concat(a3.channel_id);
                          a3.channel_id = [l2[0] - t3.channels.length + e4.length, l2[1]], a3.top = a3.channel_id[0] * i3, t3.danmu.config.area && t3.danmu.config.area.start && (a3.top += t3.containerHeight * t3.danmu.config.area.start), a3.topInit();
                        }
                        t3.channels[r4].queue[n3].splice(s3, 1);
                      }
                    });
                  }
                });
              }, a2 = 0; a2 < e4.length; a2++) o3(a2);
              var s2 = function(t4) {
                r3.forEach(function(n3) {
                  e4[t4].queue[n3].forEach(function(e5) {
                    e5.resized = false;
                  });
                });
              };
              for (a2 = 0; a2 < e4.length; a2++) s2(a2);
              t3.channels = e4, "b2t" === t3.direction ? t3.channelWidth = i3 : t3.channelHeight = i3;
            }
            function o2() {
              var e4 = t3.danmu, n3 = e4.container, o3 = e4.bulletBtn;
              t3.container = n3, t3.updatePos(), t3._cancelResizeTimer(), o3.main.data && o3.main.data.forEach(function(e5) {
                e5.bookChannelId && (delete e5.bookChannelId, t3.logger && t3.logger.info("resize导致" + e5.id + "号优先弹幕预定取消"));
              }), t3.logger && t3.logger.info("resize导致所有轨道恢复正常使用"), t3.width = t3.containerWidth, t3.height = t3.containerHeight;
              var a2 = t3._initChannels(), s2 = a2.channelSize, l2 = a2.channels;
              t3.channels && (t3.channels.length <= l2.length ? i2(l2, s2) : r2(l2, s2)), t3.resizing = false;
            }
            t3.resizing || (t3.resizing = true, e3 ? o2() : (this._cancelResizeTimer(), this.resizeId = requestAnimationFrame(o2)));
          } }, { key: "_cancelResizeTimer", value: function() {
            this.resizeId && (cancelAnimationFrame(this.resizeId), this.resizeId = null);
          } }, { key: "direction", get: function() {
            return this.danmu.direction;
          } }]), t2;
        }(a.default);
        t.default = u, e.exports = t.default;
      }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true }), t.validAreaLineRule = function(e2) {
          return "number" == typeof e2 && e2 >= 0 && Number.isInteger(e2);
        };
      }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var i = /* @__PURE__ */ function() {
          function e2(e3, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
            }
          }
          return function(t2, n2, i2) {
            return n2 && e2(t2.prototype, n2), i2 && e2(t2, i2), t2;
          };
        }(), r = n(0);
        var o = function() {
          function e2(t2) {
            !function(e3, t3) {
              if (!(e3 instanceof t3)) throw new TypeError("Cannot call a class as a function");
            }(this, e2), t2 = { initDOM: function() {
              return document.createElement("div");
            }, initSize: 10 }, this.init(t2);
          }
          return i(e2, [{ key: "init", value: function(e3) {
            this.idleList = [], this.usingList = [], this._id = 0, this.options = e3, this._expand(e3.initSize);
          } }, { key: "use", value: function() {
            this.idleList.length || this._expand(1);
            var e3 = this.idleList.shift();
            return this.usingList.push(e3), e3;
          } }, { key: "unused", value: function(e3) {
            var t2 = this.usingList.indexOf(e3);
            t2 < 0 || (this.usingList.splice(t2, 1), e3.style.opacity = 0, this.idleList.push(e3));
          } }, { key: "_expand", value: function(e3) {
            for (var t2 = 0; t2 < e3; t2++) this.idleList.push(this.options.initDOM(this._id++));
          } }, { key: "destroy", value: function() {
            for (var e3 = 0; e3 < this.idleList.length; e3++) this.idleList[e3].innerHTML = "", this.idleList[e3].textcontent = "", this.clearElementStyle(this.idleList[e3]);
            for (var t2 = 0; t2 < this.usingList.length; t2++) this.usingList[t2].innerHTML = "", this.usingList[t2].textcontent = "", this.clearElementStyle(this.usingList[t2]);
            for (var n2 in this) r.hasOwnProperty.call(this, n2) && delete this[n2];
          } }, { key: "clearElementStyle", value: function(e3) {
            var t2 = "undefined" != typeof window ? window.navigator.userAgent : null;
            t2 && (t2.indexOf("MSIE ") > -1 || t2.indexOf("Trident/") > -1 ? (0, r.styleUtil)(e3, "transform", "none") : e3.setAttribute("style", ""));
          } }]), e2;
        }();
        t.default = o, e.exports = t.default;
      }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true }), t.destroyObserver = t.unObserver = t.addObserver = void 0;
        var i = /* @__PURE__ */ function() {
          function e2(e3, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
            }
          }
          return function(t2, n2, i2) {
            return n2 && e2(t2.prototype, n2), i2 && e2(t2, i2), t2;
          };
        }(), r = n(0);
        var o = new (function() {
          function e2() {
            var t2 = this;
            if (function(e3, t3) {
              if (!(e3 instanceof t3)) throw new TypeError("Cannot call a class as a function");
            }(this, e2), this.__handlers = [], window.ResizeObserver) try {
              this.observer = new window.ResizeObserver((0, r.throttle)(function(e3) {
                t2.__trigger(e3);
              }, 100));
            } catch (e3) {
            }
          }
          return i(e2, [{ key: "addObserver", value: function(e3, t2) {
            if (this.observer && e3) {
              this.observer && this.observer.observe(e3);
              for (var n2 = this.__handlers, i2 = -1, r2 = 0; r2 < n2.length; r2++) n2[r2] && e3 === n2[r2].target && (i2 = r2);
              i2 > -1 ? this.__handlers[i2].handler.push(t2) : this.__handlers.push({ target: e3, handler: [t2] });
            }
          } }, { key: "unObserver", value: function(e3) {
            if (e3) {
              var t2 = -1;
              this.__handlers.map(function(n2, i2) {
                e3 === n2.target && (t2 = i2);
              }), this.observer && this.observer.unobserve(e3), t2 > -1 && this.__handlers.splice(t2, 1);
            }
          } }, { key: "destroyObserver", value: function() {
            this.observer && this.observer.disconnect(), this.observer = null, this.__handlers = null;
          } }, { key: "__runHandler", value: function(e3) {
            for (var t2 = this.__handlers, n2 = 0; n2 < t2.length; n2++) if (t2[n2] && e3 === t2[n2].target) {
              t2[n2].handler && t2[n2].handler.map(function(e4) {
                try {
                  e4();
                } catch (e5) {
                  console.error(e5);
                }
              });
              break;
            }
          } }, { key: "__trigger", value: function(e3) {
            var t2 = this;
            e3.map(function(e4) {
              t2.__runHandler(e4.target);
            });
          } }]), e2;
        }())();
        t.addObserver = function(e2, t2) {
          o.addObserver(e2, t2);
        }, t.unObserver = function(e2, t2) {
          o.unObserver(e2, t2);
        }, t.destroyObserver = function(e2, t2) {
          o.destroyObserver(e2, t2);
        };
      }, function(e, t, n) {
        var i = n(35);
        "string" == typeof i && (i = [[e.i, i, ""]]);
        var r = { hmr: true, transform: void 0, insertInto: void 0 };
        n(37)(i, r);
        i.locals && (e.exports = i.locals);
      }, function(e, t, n) {
        (e.exports = n(36)(false)).push([e.i, ".danmu{overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;-ms-user-select:none}.danmu>*{position:absolute;white-space:nowrap}.danmu-switch{width:32px;height:20px;border-radius:100px;background-color:#ccc;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;cursor:pointer;position:relative;text-align:center;margin:10px auto}.danmu-switch.danmu-switch-active{padding-left:12px;background-color:#f85959}.danmu-switch span.txt{width:20px;height:20px;line-height:20px;text-align:center;display:block;border-radius:100px;background-color:#fff;-webkit-box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);font-family:PingFangSC;font-size:10px;font-weight:500;color:#f44336}", ""]);
      }, function(e, t) {
        e.exports = function(e2) {
          var t2 = [];
          return t2.toString = function() {
            return this.map(function(t3) {
              var n = function(e3, t4) {
                var n2 = e3[1] || "", i = e3[3];
                if (!i) return n2;
                if (t4 && "function" == typeof btoa) {
                  var r = (a = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"), o = i.sources.map(function(e4) {
                    return "/*# sourceURL=" + i.sourceRoot + e4 + " */";
                  });
                  return [n2].concat(o).concat([r]).join("\n");
                }
                var a;
                return [n2].join("\n");
              }(t3, e2);
              return t3[2] ? "@media " + t3[2] + "{" + n + "}" : n;
            }).join("");
          }, t2.i = function(e3, n) {
            "string" == typeof e3 && (e3 = [[null, e3, ""]]);
            for (var i = {}, r = 0; r < this.length; r++) {
              var o = this[r][0];
              "number" == typeof o && (i[o] = true);
            }
            for (r = 0; r < e3.length; r++) {
              var a = e3[r];
              "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t2.push(a));
            }
          }, t2;
        };
      }, function(e, t, n) {
        var i, r, o = {}, a = (i = function() {
          return window && document && document.all && !window.atob;
        }, function() {
          return void 0 === r && (r = i.apply(this, arguments)), r;
        }), s = function(e2) {
          return document.querySelector(e2);
        }, l = /* @__PURE__ */ function(e2) {
          var t2 = {};
          return function(e3) {
            if ("function" == typeof e3) return e3();
            if (void 0 === t2[e3]) {
              var n2 = s.call(this, e3);
              if (window.HTMLIFrameElement && n2 instanceof window.HTMLIFrameElement) try {
                n2 = n2.contentDocument.head;
              } catch (e4) {
                n2 = null;
              }
              t2[e3] = n2;
            }
            return t2[e3];
          };
        }(), u = null, c = 0, f = [], h = n(38);
        function d(e2, t2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var i2 = e2[n2], r2 = o[i2.id];
            if (r2) {
              r2.refs++;
              for (var a2 = 0; a2 < r2.parts.length; a2++) r2.parts[a2](i2.parts[a2]);
              for (; a2 < i2.parts.length; a2++) r2.parts.push(b(i2.parts[a2], t2));
            } else {
              var s2 = [];
              for (a2 = 0; a2 < i2.parts.length; a2++) s2.push(b(i2.parts[a2], t2));
              o[i2.id] = { id: i2.id, refs: 1, parts: s2 };
            }
          }
        }
        function p(e2, t2) {
          for (var n2 = [], i2 = {}, r2 = 0; r2 < e2.length; r2++) {
            var o2 = e2[r2], a2 = t2.base ? o2[0] + t2.base : o2[0], s2 = { css: o2[1], media: o2[2], sourceMap: o2[3] };
            i2[a2] ? i2[a2].parts.push(s2) : n2.push(i2[a2] = { id: a2, parts: [s2] });
          }
          return n2;
        }
        function g(e2, t2) {
          var n2 = l(e2.insertInto);
          if (!n2) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
          var i2 = f[f.length - 1];
          if ("top" === e2.insertAt) i2 ? i2.nextSibling ? n2.insertBefore(t2, i2.nextSibling) : n2.appendChild(t2) : n2.insertBefore(t2, n2.firstChild), f.push(t2);
          else if ("bottom" === e2.insertAt) n2.appendChild(t2);
          else {
            if ("object" != typeof e2.insertAt || !e2.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var r2 = l(e2.insertInto + " " + e2.insertAt.before);
            n2.insertBefore(t2, r2);
          }
        }
        function v(e2) {
          if (null === e2.parentNode) return false;
          e2.parentNode.removeChild(e2);
          var t2 = f.indexOf(e2);
          t2 >= 0 && f.splice(t2, 1);
        }
        function m(e2) {
          var t2 = document.createElement("style");
          return void 0 === e2.attrs.type && (e2.attrs.type = "text/css"), y(t2, e2.attrs), g(e2, t2), t2;
        }
        function y(e2, t2) {
          Object.keys(t2).forEach(function(n2) {
            e2.setAttribute(n2, t2[n2]);
          });
        }
        function b(e2, t2) {
          var n2, i2, r2, o2;
          if (t2.transform && e2.css) {
            if (!(o2 = t2.transform(e2.css))) return function() {
            };
            e2.css = o2;
          }
          if (t2.singleton) {
            var a2 = c++;
            n2 = u || (u = m(t2)), i2 = w.bind(null, n2, a2, false), r2 = w.bind(null, n2, a2, true);
          } else e2.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n2 = function(e3) {
            var t3 = document.createElement("link");
            return void 0 === e3.attrs.type && (e3.attrs.type = "text/css"), e3.attrs.rel = "stylesheet", y(t3, e3.attrs), g(e3, t3), t3;
          }(t2), i2 = x.bind(null, n2, t2), r2 = function() {
            v(n2), n2.href && URL.revokeObjectURL(n2.href);
          }) : (n2 = m(t2), i2 = O.bind(null, n2), r2 = function() {
            v(n2);
          });
          return i2(e2), function(t3) {
            if (t3) {
              if (t3.css === e2.css && t3.media === e2.media && t3.sourceMap === e2.sourceMap) return;
              i2(e2 = t3);
            } else r2();
          };
        }
        e.exports = function(e2, t2) {
          if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
          (t2 = t2 || {}).attrs = "object" == typeof t2.attrs ? t2.attrs : {}, t2.singleton || "boolean" == typeof t2.singleton || (t2.singleton = a()), t2.insertInto || (t2.insertInto = "head"), t2.insertAt || (t2.insertAt = "bottom");
          var n2 = p(e2, t2);
          return d(n2, t2), function(e3) {
            for (var i2 = [], r2 = 0; r2 < n2.length; r2++) {
              var a2 = n2[r2];
              (s2 = o[a2.id]).refs--, i2.push(s2);
            }
            e3 && d(p(e3, t2), t2);
            for (r2 = 0; r2 < i2.length; r2++) {
              var s2;
              if (0 === (s2 = i2[r2]).refs) {
                for (var l2 = 0; l2 < s2.parts.length; l2++) s2.parts[l2]();
                delete o[s2.id];
              }
            }
          };
        };
        var _, k = (_ = [], function(e2, t2) {
          return _[e2] = t2, _.filter(Boolean).join("\n");
        });
        function w(e2, t2, n2, i2) {
          var r2 = n2 ? "" : i2.css;
          if (e2.styleSheet) e2.styleSheet.cssText = k(t2, r2);
          else {
            var o2 = document.createTextNode(r2), a2 = e2.childNodes;
            a2[t2] && e2.removeChild(a2[t2]), a2.length ? e2.insertBefore(o2, a2[t2]) : e2.appendChild(o2);
          }
        }
        function O(e2, t2) {
          var n2 = t2.css, i2 = t2.media;
          if (i2 && e2.setAttribute("media", i2), e2.styleSheet) e2.styleSheet.cssText = n2;
          else {
            for (; e2.firstChild; ) e2.removeChild(e2.firstChild);
            e2.appendChild(document.createTextNode(n2));
          }
        }
        function x(e2, t2, n2) {
          var i2 = n2.css, r2 = n2.sourceMap, o2 = void 0 === t2.convertToAbsoluteUrls && r2;
          (t2.convertToAbsoluteUrls || o2) && (i2 = h(i2)), r2 && (i2 += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r2)))) + " */");
          var a2 = new Blob([i2], { type: "text/css" }), s2 = e2.href;
          e2.href = URL.createObjectURL(a2), s2 && URL.revokeObjectURL(s2);
        }
      }, function(e, t) {
        e.exports = function(e2) {
          var t2 = "undefined" != typeof window && window.location;
          if (!t2) throw new Error("fixUrls requires window.location");
          if (!e2 || "string" != typeof e2) return e2;
          var n = t2.protocol + "//" + t2.host, i = n + t2.pathname.replace(/\/[^\/]*$/, "/");
          return e2.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e3, t3) {
            var r, o = t3.trim().replace(/^"(.*)"$/, function(e4, t4) {
              return t4;
            }).replace(/^'(.*)'$/, function(e4, t4) {
              return t4;
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e3 : (r = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : i + o.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")");
          });
        };
      }]);
    });
  }
});

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/_virtual/_rollupPluginBabelHelpers.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _classCallCheck(instance2, Constructor) {
  if (!(instance2 instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf22(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf22(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null)
      break;
  }
  return object;
}
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get22(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base)
        return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/mediaProxy.js
var import_eventemitter3 = __toESM(require_eventemitter3());

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/utils/debug.js
var XG_DEBUG_OPEN = typeof window !== "undefined" && window.location && window.location.href.indexOf("xgplayerdebugger=1") > -1;
var STYLE = {
  info: "color: #525252; background-color: #90ee90;",
  error: "color: #525252; background-color: red;",
  warn: "color: #525252; background-color: yellow; "
};
var XGTAG = "%c[xgplayer]";
var XG_DEBUG = {
  config: {
    debug: XG_DEBUG_OPEN ? 3 : 0
  },
  logInfo: function logInfo(message) {
    var _console;
    for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      optionalParams[_key - 1] = arguments[_key];
    }
    this.config.debug >= 3 && (_console = console).log.apply(_console, [XGTAG, STYLE.info, message].concat(optionalParams));
  },
  logWarn: function logWarn(message) {
    var _console2;
    for (var _len2 = arguments.length, optionalParams = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      optionalParams[_key2 - 1] = arguments[_key2];
    }
    this.config.debug >= 1 && (_console2 = console).warn.apply(_console2, [XGTAG, STYLE.warn, message].concat(optionalParams));
  },
  logError: function logError(message) {
    var _console3;
    if (this.config.debug < 1) {
      return;
    }
    var _fun = this.config.debug >= 2 ? "trace" : "error";
    for (var _len3 = arguments.length, optionalParams = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      optionalParams[_key3 - 1] = arguments[_key3];
    }
    (_console3 = console)[_fun].apply(_console3, [XGTAG, STYLE.error, message].concat(optionalParams));
  }
};
function bindDebug(player) {
  player.logInfo = XG_DEBUG.logInfo.bind(player);
  player.logWarn = XG_DEBUG.logWarn.bind(player);
  player.logError = XG_DEBUG.logError.bind(player);
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/utils/xgplayerTimeRange.js
var XgplayerTimeRange = function() {
  function XgplayerTimeRange2(bufferedList) {
    _classCallCheck(this, XgplayerTimeRange2);
    this.bufferedList = bufferedList;
  }
  _createClass(XgplayerTimeRange2, [{
    key: "start",
    value: function start(index) {
      return this.bufferedList[index].start;
    }
  }, {
    key: "end",
    value: function end(index) {
      return this.bufferedList[index].end;
    }
  }, {
    key: "length",
    get: function get() {
      return this.bufferedList.length;
    }
  }]);
  return XgplayerTimeRange2;
}();

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/utils/util.js
var util = {};
util.createDom = function() {
  var el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "div";
  var tpl = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  var attrs = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var cname = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
  var dom = document.createElement(el);
  dom.className = cname;
  dom.innerHTML = tpl;
  Object.keys(attrs).forEach(function(item) {
    var key = item;
    var value = attrs[item];
    if (el === "video" || el === "audio" || el === "live-video") {
      if (value) {
        dom.setAttribute(key, value);
      }
    } else {
      dom.setAttribute(key, value);
    }
  });
  return dom;
};
util.createDomFromHtml = function(html) {
  var attrs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var classname = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  try {
    var doc = document.createElement("div");
    doc.innerHTML = html;
    var dom = doc.children;
    doc = null;
    if (dom.length > 0) {
      dom = dom[0];
      classname && util.addClass(dom, classname);
      if (attrs) {
        Object.keys(attrs).forEach(function(key) {
          dom.setAttribute(key, attrs[key]);
        });
      }
      return dom;
    }
    return null;
  } catch (err) {
    XG_DEBUG.logError("util.createDomFromHtml", err);
    return null;
  }
};
util.hasClass = function(el, className) {
  if (!el || !className) {
    return false;
  }
  try {
    return Array.prototype.some.call(el.classList, function(item) {
      return item === className;
    });
  } catch (e) {
    var orgClassName = el.className && _typeof(el.className) === "object" ? el.getAttribute("class") : el.className;
    return orgClassName && !!orgClassName.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
  }
};
util.addClass = function(el, className) {
  if (!el || !className) {
    return;
  }
  try {
    className.replace(/(^\s+|\s+$)/g, "").split(/\s+/g).forEach(function(item) {
      item && el.classList.add(item);
    });
  } catch (e) {
    if (!util.hasClass(el, className)) {
      if (el.className && _typeof(el.className) === "object") {
        el.setAttribute("class", el.getAttribute("class") + " " + className);
      } else {
        el.className += " " + className;
      }
    }
  }
};
util.removeClass = function(el, className) {
  if (!el || !className) {
    return;
  }
  try {
    className.replace(/(^\s+|\s+$)/g, "").split(/\s+/g).forEach(function(item) {
      item && el.classList.remove(item);
    });
  } catch (e) {
    if (util.hasClass(el, className)) {
      className.split(/\s+/g).forEach(function(item) {
        var reg = new RegExp("(\\s|^)" + item + "(\\s|$)");
        if (el.className && _typeof(el.className) === "object") {
          el.setAttribute("class", el.getAttribute("class").replace(reg, " "));
        } else {
          el.className = el.className.replace(reg, " ");
        }
      });
    }
  }
};
util.toggleClass = function(el, className) {
  if (!el) {
    return;
  }
  className.split(/\s+/g).forEach(function(item) {
    if (util.hasClass(el, item)) {
      util.removeClass(el, item);
    } else {
      util.addClass(el, item);
    }
  });
};
util.classNames = function() {
  var _arguments = arguments;
  var classname = [];
  var _loop = function _loop2(i2) {
    if (util.typeOf(_arguments[i2]) === "String") {
      classname.push(_arguments[i2]);
    } else if (util.typeOf(_arguments[i2]) === "Object") {
      Object.keys(_arguments[i2]).map(function(key) {
        if (_arguments[i2][key]) {
          classname.push(key);
        }
      });
    }
  };
  for (var i = 0; i < arguments.length; i++) {
    _loop(i);
  }
  return classname.join(" ");
};
util.findDom = function() {
  var el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  var sel = arguments.length > 1 ? arguments[1] : void 0;
  var dom;
  try {
    dom = el.querySelector(sel);
  } catch (e) {
    XG_DEBUG.logError("util.findDom", e);
    if (sel.indexOf("#") === 0) {
      dom = el.getElementById(sel.slice(1));
    }
  }
  return dom;
};
util.getCss = function(dom, key) {
  return dom.currentStyle ? dom.currentStyle[key] : document.defaultView.getComputedStyle(dom, false)[key];
};
util.padStart = function(str, length, pad) {
  var charstr = String(pad);
  var len = length >> 0;
  var maxlen = Math.ceil(len / charstr.length);
  var chars = [];
  var r = String(str);
  while (maxlen--) {
    chars.push(charstr);
  }
  return chars.join("").substring(0, len - r.length) + r;
};
util.format = function(time) {
  if (window.isNaN(time)) {
    return "";
  }
  time = Math.round(time);
  var hour = util.padStart(Math.floor(time / 3600), 2, 0);
  var minute = util.padStart(Math.floor((time - hour * 3600) / 60), 2, 0);
  var second = util.padStart(Math.floor(time - hour * 3600 - minute * 60), 2, 0);
  return (hour === "00" ? [minute, second] : [hour, minute, second]).join(":");
};
util.event = function(e) {
  if (e.touches) {
    var touch = e.touches[0] || e.changedTouches[0];
    e.clientX = touch.clientX || 0;
    e.clientY = touch.clientY || 0;
    e.offsetX = touch.pageX - touch.target.offsetLeft;
    e.offsetY = touch.pageY - touch.target.offsetTop;
  }
  e._target = e.target || e.srcElement;
};
util.typeOf = function(obj) {
  return Object.prototype.toString.call(obj).match(/([^\s.*]+)(?=]$)/g)[0];
};
util.deepCopy = function(dst, src) {
  if (util.typeOf(src) === "Object" && util.typeOf(dst) === "Object") {
    Object.keys(src).forEach(function(key) {
      if (util.typeOf(src[key]) === "Object" && !(src[key] instanceof Node)) {
        if (dst[key] === void 0 || dst[key] === void 0) {
          dst[key] = src[key];
        } else {
          util.deepCopy(dst[key], src[key]);
        }
      } else if (util.typeOf(src[key]) === "Array") {
        dst[key] = util.typeOf(dst[key]) === "Array" ? dst[key].concat(src[key]) : src[key];
      } else {
        dst[key] = src[key];
      }
    });
    return dst;
  }
};
util.deepMerge = function(dst, src) {
  Object.keys(src).map(function(key) {
    if (util.typeOf(src[key]) === "Array" && util.typeOf(dst[key]) === "Array") {
      if (util.typeOf(dst[key]) === "Array") {
        var _dst$key;
        (_dst$key = dst[key]).push.apply(_dst$key, _toConsumableArray(src[key]));
      }
    } else if (util.typeOf(dst[key]) === util.typeOf(src[key]) && dst[key] !== null && util.typeOf(dst[key]) === "Object" && !(src[key] instanceof window.Node)) {
      util.deepMerge(dst[key], src[key]);
    } else {
      src[key] !== null && (dst[key] = src[key]);
    }
  });
  return dst;
};
util.getBgImage = function(el) {
  var url = (el.currentStyle || window.getComputedStyle(el, null)).backgroundImage;
  if (!url || url === "none") {
    return "";
  }
  var a = document.createElement("a");
  a.href = url.replace(/url\("|"\)/g, "");
  return a.href;
};
util.copyDom = function(dom) {
  if (dom && dom.nodeType === 1) {
    var back = document.createElement(dom.tagName);
    Array.prototype.forEach.call(dom.attributes, function(node) {
      back.setAttribute(node.name, node.value);
    });
    if (dom.innerHTML) {
      back.innerHTML = dom.innerHTML;
    }
    return back;
  } else {
    return "";
  }
};
util.setInterval = function(context, eventName, intervalFunc, frequency) {
  if (!context._interval[eventName]) {
    context._interval[eventName] = window.setInterval(intervalFunc.bind(context), frequency);
  }
};
util.clearInterval = function(context, eventName) {
  clearInterval(context._interval[eventName]);
  context._interval[eventName] = null;
};
util.setTimeout = function(context, fun, time) {
  if (!context._timers) {
    context._timers = [];
  }
  var id = setTimeout(function() {
    fun();
    util.clearTimeout(context, id);
  }, time);
  context._timers.push(id);
  return id;
};
util.clearTimeout = function(context, id) {
  var _timers = context._timers;
  if (util.typeOf(_timers) === "Array") {
    for (var i = 0; i < _timers.length; i++) {
      if (_timers[i] === id) {
        _timers.splice(i, 1);
        clearTimeout(id);
        break;
      }
    }
  } else {
    clearTimeout(id);
  }
};
util.clearAllTimers = function(context) {
  var _timers = context._timers;
  if (util.typeOf(_timers) === "Array") {
    _timers.map(function(item) {
      clearTimeout(item);
    });
    context._timerIds = [];
  }
};
util.createImgBtn = function(name, imgUrl, width, height) {
  var btn = util.createDom("xg-".concat(name), "", {}, "xgplayer-".concat(name, "-img"));
  btn.style.backgroundImage = 'url("'.concat(imgUrl, '")');
  if (width && height) {
    var w, h, unit;
    ["px", "rem", "em", "pt", "dp", "vw", "vh", "vm", "%"].every(function(item) {
      if (width.indexOf(item) > -1 && height.indexOf(item) > -1) {
        w = parseFloat(width.slice(0, width.indexOf(item)).trim());
        h = parseFloat(height.slice(0, height.indexOf(item)).trim());
        unit = item;
        return false;
      } else {
        return true;
      }
    });
    btn.style.width = "".concat(w).concat(unit);
    btn.style.height = "".concat(h).concat(unit);
    btn.style.backgroundSize = "".concat(w).concat(unit, " ").concat(h).concat(unit);
    if (name === "start") {
      btn.style.margin = "-".concat(h / 2).concat(unit, " auto auto -").concat(w / 2).concat(unit);
    } else {
      btn.style.margin = "auto 5px auto 5px";
    }
  }
  return btn;
};
util.Hex2RGBA = function(hex, alpha) {
  var rgb = [];
  if (/^\#[0-9A-F]{3}$/i.test(hex)) {
    var sixHex = "#";
    hex.replace(/[0-9A-F]/ig, function(kw) {
      sixHex += kw + kw;
    });
    hex = sixHex;
  }
  if (/^#[0-9A-F]{6}$/i.test(hex)) {
    hex.replace(/[0-9A-F]{2}/ig, function(kw) {
      rgb.push(parseInt(kw, 16));
    });
    return "rgba(".concat(rgb.join(","), ", ").concat(alpha, ")");
  } else {
    return "rgba(255, 255, 255, 0.1)";
  }
};
util.getFullScreenEl = function() {
  return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
};
util.checkIsFunction = function(fun) {
  return fun && typeof fun === "function";
};
util.checkIsObject = function(obj) {
  return obj !== null && _typeof(obj) === "object";
};
util.hide = function(dom) {
  dom.style.display = "none";
};
util.show = function(dom, display) {
  dom.style.display = display || "block";
};
util.isUndefined = function(val) {
  if (typeof val === "undefined" || val === null) {
    return true;
  }
};
util.isNotNull = function(val) {
  return !(val === void 0 || val === null);
};
util.setStyleFromCsstext = function(dom, text) {
  if (!text) {
    return;
  }
  if (util.typeOf(text) === "String") {
    var styleArr = text.replace(/\s+/g, "").split(";");
    styleArr.map(function(item) {
      if (item) {
        var arr = item.split(":");
        if (arr.length > 1) {
          dom.style[arr[0]] = arr[1];
        }
      }
    });
  } else {
    Object.keys(text).map(function(key) {
      dom.style[key] = text[key];
    });
  }
};
function checkIsIn(key, list) {
  for (var i = 0, len = list.length; i < len; i++) {
    if (key.indexOf(list[i]) > -1) {
      return true;
    }
  }
  return false;
}
util.filterStyleFromText = function(dom) {
  var list = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ["width", "height", "top", "left", "bottom", "right", "position", "z-index", "padding", "margin", "transform"];
  var _cssText = dom.style.cssText;
  if (!_cssText) {
    return {};
  }
  var styleArr = _cssText.replace(/\s+/g, "").split(";");
  var ret = {};
  var remain = {};
  styleArr.map(function(item) {
    if (item) {
      var arr = item.split(":");
      if (arr.length > 1) {
        if (checkIsIn(arr[0], list)) {
          ret[arr[0]] = arr[1];
        } else {
          remain[arr[0]] = arr[1];
        }
      }
    }
  });
  dom.setAttribute("style", "");
  Object.keys(remain).map(function(key) {
    dom.style[key] = remain[key];
  });
  return ret;
};
util.getStyleFromCsstext = function(dom) {
  var _cssText = dom.style.cssText;
  if (!_cssText) {
    return {};
  }
  var styleArr = _cssText.replace(/\s+/g, "").split(";");
  var ret = {};
  styleArr.map(function(item) {
    if (item) {
      var arr = item.split(":");
      if (arr.length > 1) {
        ret[arr[0]] = arr[1];
      }
    }
  });
  return ret;
};
util.preloadImg = function(url) {
  var onload = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
  };
  var onerror = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
  };
  if (!url) {
    return;
  }
  var img = new window.Image();
  img.onload = function(e) {
    img = null;
    onload && onload(e);
  };
  img.onerror = function(e) {
    img = null;
    onerror && onerror(e);
  };
  img.src = url;
};
util.stopPropagation = function(e) {
  if (e) {
    e.stopPropagation();
  }
};
util.scrollTop = function() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};
util.scrollLeft = function() {
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
};
util.checkTouchSupport = function() {
  return "ontouchstart" in window;
};
util.getBuffered2 = function(vbuffered) {
  var maxHoleDuration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.5;
  var buffered = [];
  for (var i = 0; i < vbuffered.length; i++) {
    buffered.push({
      start: vbuffered.start(i) < 0.5 ? 0 : vbuffered.start(i),
      end: vbuffered.end(i)
    });
  }
  buffered.sort(function(a, b) {
    var diff = a.start - b.start;
    if (diff) {
      return diff;
    } else {
      return b.end - a.end;
    }
  });
  var buffered2 = [];
  if (maxHoleDuration) {
    for (var _i = 0; _i < buffered.length; _i++) {
      var buf2len = buffered2.length;
      if (buf2len) {
        var buf2end = buffered2[buf2len - 1].end;
        if (buffered[_i].start - buf2end < maxHoleDuration) {
          if (buffered[_i].end > buf2end) {
            buffered2[buf2len - 1].end = buffered[_i].end;
          }
        } else {
          buffered2.push(buffered[_i]);
        }
      } else {
        buffered2.push(buffered[_i]);
      }
    }
  } else {
    buffered2 = buffered;
  }
  return new XgplayerTimeRange(buffered2);
};
util.getEventPos = function(e) {
  var zoom = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if (e.touches && e.touches.length > 0) {
    e = e.touches[0];
  }
  return {
    x: e.x / zoom,
    y: e.y / zoom,
    clientX: e.clientX / zoom,
    clientY: e.clientY / zoom,
    offsetX: e.offsetX / zoom,
    offsetY: e.offsetY / zoom,
    pageX: e.pageX / zoom,
    pageY: e.pageY / zoom
  };
};
util.requestAnimationFrame = function(callback) {
  var _fun = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
  if (_fun) {
    return _fun(callback);
  }
};
util.getHostFromUrl = function(url) {
  if (util.typeOf(url) !== "String") {
    return "";
  }
  var results = url.split("/");
  var domain = "";
  if (results.length > 3 && results[2]) {
    domain = results[2];
  }
  return domain;
};
util.cancelAnimationFrame = function(frameId) {
  var _fun = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.cancelRequestAnimationFrame;
  _fun && _fun(frameId);
};
util.isMSE = function(video) {
  if (video.media) {
    video = video.media;
  }
  if (!video || !(video instanceof HTMLMediaElement)) {
    return false;
  }
  return /^blob/.test(video.currentSrc) || /^blob/.test(video.src);
};
util.isBlob = function(url) {
  return typeof url === "string" && /^blob/.test(url);
};
util.generateSessionId = function() {
  var did = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  var d = (/* @__PURE__ */ new Date()).getTime();
  try {
    did = parseInt(did);
  } catch (e) {
    did = 0;
  }
  d += did;
  if (window.performance && typeof window.performance.now === "function") {
    d += parseInt(window.performance.now());
  }
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : r & 3 | 8).toString(16);
  });
  return uuid;
};
util.createEvent = function(eventName) {
  var event;
  if (typeof window.Event === "function") {
    event = new Event(eventName);
  } else {
    event = document.createEvent("Event");
    event.initEvent(eventName, true, true);
  }
  return event;
};
util.adjustTimeByDuration = function(time, duration, isEnded) {
  if (!duration || !time) {
    return time;
  }
  if (time > duration || isEnded && time < duration) {
    return duration;
  }
  return time;
};
util.createPositionBar = function(className, root) {
  var dom = util.createDom("xg-bar", "", {
    "data-index": -1
  }, className);
  root.appendChild(dom);
  return dom;
};
util.getTransformStyle = function() {
  var pos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0
  };
  var transformValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  var styles = {
    scale: "".concat(pos.scale || 1),
    translate: "".concat(pos.x || 0, "%, ").concat(pos.y || 0, "%"),
    rotate: "".concat(pos.rotate || 0, "deg")
  };
  var stylesKeys = Object.keys(styles);
  stylesKeys.forEach(function(key) {
    var reg = new RegExp("".concat(key, "\\([^\\(]+\\)"), "g");
    var fn = "".concat(key, "(").concat(styles[key], ")");
    if (reg.test(transformValue)) {
      reg.lastIndex = -1;
      transformValue = transformValue.replace(reg, fn);
    } else {
      transformValue += "".concat(fn, " ");
    }
  });
  return transformValue;
};
util.convertDeg = function(val) {
  if (Math.abs(val) <= 1) {
    return val * 360;
  }
  return val % 360;
};
util.getIndexByTime = function(time, segments) {
  var _len = segments.length;
  var _index = -1;
  if (_len < 1) {
    return _index;
  }
  if (time <= segments[0].end || _len < 2) {
    _index = 0;
  } else if (time > segments[_len - 1].end) {
    _index = _len - 1;
  } else {
    for (var i = 1; i < _len; i++) {
      if (time > segments[i - 1].end && time <= segments[i].end) {
        _index = i;
        break;
      }
    }
  }
  return _index;
};
util.getOffsetCurrentTime = function(currentTime, segments) {
  var index = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
  var _index = -1;
  if (index >= 0 && index < segments.length) {
    _index = index;
  } else {
    _index = util.getIndexByTime(currentTime, segments);
  }
  if (_index < 0) {
    return -1;
  }
  var _len = segments.length;
  var _segments$_index = segments[_index], start = _segments$_index.start, end = _segments$_index.end, cTime = _segments$_index.cTime, offset = _segments$_index.offset;
  if (currentTime < start) {
    return cTime;
  } else if (currentTime >= start && currentTime <= end) {
    return currentTime - offset;
  } else if (currentTime > end && _index >= _len - 1) {
    return end;
  }
  return -1;
};
util.getCurrentTimeByOffset = function(offsetTime, segments) {
  var _index = -1;
  if (!segments || segments.length < 0) {
    return offsetTime;
  }
  for (var i = 0; i < segments.length; i++) {
    if (offsetTime <= segments[i].duration) {
      _index = i;
      break;
    }
  }
  if (_index !== -1) {
    var start = segments[_index].start;
    if (_index - 1 < 0) {
      return start + offsetTime;
    } else {
      return start + (offsetTime - segments[_index - 1].duration);
    }
  }
  return offsetTime;
};
function isObject(value) {
  var type = _typeof(value);
  return value !== null && (type === "object" || type === "function");
}
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime;
  var lastInvokeTime = 0;
  var leading = false;
  var maxing = false;
  var trailing = true;
  var useRAF = !wait && wait !== 0 && typeof window.requestAnimationFrame === "function";
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  wait = +wait || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs;
    var thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function startTimer(pendingFunc, wait2) {
    if (useRAF) {
      window.cancelAnimationFrame(timerId);
      return window.requestAnimationFrame(pendingFunc);
    }
    return setTimeout(pendingFunc, wait2);
  }
  function cancelTimer(id) {
    if (useRAF) {
      return window.cancelAnimationFrame(id);
    }
    clearTimeout(id);
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = startTimer(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime;
    var timeSinceLastInvoke = time - lastInvokeTime;
    var timeWaiting = wait - timeSinceLastCall;
    return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime;
    var timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = startTimer(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      cancelTimer(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(Date.now());
  }
  function pending() {
    return timerId !== void 0;
  }
  function debounced() {
    var time = Date.now();
    var isInvoking = shouldInvoke(time);
    for (var _len2 = arguments.length, args = new Array(_len2), _key = 0; _key < _len2; _key++) {
      args[_key] = arguments[_key];
    }
    lastArgs = args;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        timerId = startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = startTimer(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  debounced.pending = pending;
  return debounced;
}
function throttle(func, wait, options) {
  var leading = true;
  var trailing = true;
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    leading,
    trailing,
    maxWait: wait
  });
}
function getLang() {
  var lang = (document.documentElement.getAttribute("lang") || navigator.language || "zh-cn").toLocaleLowerCase();
  if (lang === "zh-cn") {
    lang = "zh";
  }
  return lang;
}
function checkIsCurrentVideo(element, playerId, key) {
  if (!element) {
    return;
  }
  var pid = element.getAttribute(key);
  if (pid && pid === playerId && (element.tagName === "VIDEO" || element.tagName === "AUDIO")) {
    return true;
  }
  return false;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/utils/sniffer.js
var VERSION_REG = {
  android: /(Android)\s([\d.]+)/,
  ios: /(Version)\/([\d.]+)/
};
var H264_MIMETYPES = ["avc1.42E01E, mp4a.40.2", "avc1.58A01E, mp4a.40.2", "avc1.4D401E, mp4a.40.2", "avc1.64001E, mp4a.40.2", "avc1.42E01E", "mp4v.20.8", "mp4v.20.8, mp4a.40.2", "mp4v.20.240, mp4a.40.2"];
var sniffer = {
  get device() {
    var r = sniffer.os;
    return r.isPc ? "pc" : "mobile";
  },
  get browser() {
    if (typeof navigator === "undefined") {
      return "";
    }
    var ua = navigator.userAgent.toLowerCase();
    var reg = {
      ie: /rv:([\d.]+)\) like gecko/,
      firefox: /firefox\/([\d.]+)/,
      chrome: /chrome\/([\d.]+)/,
      opera: /opera.([\d.]+)/,
      safari: /version\/([\d.]+).*safari/
    };
    return [].concat(Object.keys(reg).filter(function(key) {
      return reg[key].test(ua);
    }))[0];
  },
  get os() {
    if (typeof navigator === "undefined") {
      return {};
    }
    var ua = navigator.userAgent;
    var isWindowsPhone = /(?:Windows Phone)/.test(ua);
    var isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
    var isAndroid = /(?:Android)/.test(ua);
    var isFireFox = /(?:Firefox)/.test(ua);
    var isIpad = /(?:iPad|PlayBook)/.test(ua) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
    var isTablet = isIpad || isAndroid && !/(?:Mobile)/.test(ua) || isFireFox && /(?:Tablet)/.test(ua);
    var isPhone = /(?:iPhone)/.test(ua) && !isTablet;
    var isPc = !isPhone && !isAndroid && !isSymbian && !isTablet;
    return {
      isTablet,
      isPhone,
      isIpad,
      isIos: isPhone || isIpad,
      isAndroid,
      isPc,
      isSymbian,
      isWindowsPhone,
      isFireFox
    };
  },
  get osVersion() {
    if (typeof navigator === "undefined") {
      return 0;
    }
    var ua = navigator.userAgent;
    var reg = "";
    if (/(?:iPhone)|(?:iPad|PlayBook)/.test(ua)) {
      reg = VERSION_REG.ios;
    } else {
      reg = VERSION_REG.android;
    }
    var _match = reg ? reg.exec(ua) : [];
    if (_match && _match.length >= 3) {
      var version2 = _match[2].split(".");
      return version2.length > 0 ? parseInt(version2[0]) : 0;
    }
    return 0;
  },
  get isWeixin() {
    if (typeof navigator === "undefined") {
      return false;
    }
    var reg = /(micromessenger)\/([\d.]+)/;
    var match = reg.exec(navigator.userAgent.toLocaleLowerCase());
    if (match) {
      return true;
    }
    return false;
  },
  isSupportMP4: function isSupportMP4() {
    var result = {
      isSupport: false,
      mime: ""
    };
    if (typeof document === "undefined") {
      return result;
    }
    if (this.supportResult) {
      return this.supportResult;
    }
    var a = document.createElement("video");
    if (typeof a.canPlayType === "function") {
      H264_MIMETYPES.map(function(key) {
        if (a.canPlayType('video/mp4; codecs="'.concat(key, '"')) === "probably") {
          result.isSupport = true;
          result.mime += "||".concat(key);
        }
      });
    }
    this.supportResult = result;
    a = null;
    return result;
  },
  isMSESupport: function isMSESupport() {
    var mime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'video/mp4; codecs="avc1.42E01E,mp4a.40.2"';
    if (typeof MediaSource === "undefined" || !MediaSource)
      return false;
    try {
      return MediaSource.isTypeSupported(mime);
    } catch (error) {
      this._logger.error(mime, error);
      return false;
    }
  },
  isHevcSupported: function isHevcSupported() {
    if (typeof MediaSource === "undefined" || !MediaSource.isTypeSupported) {
      return false;
    }
    return MediaSource.isTypeSupported('video/mp4;codecs="hev1.1.6.L120.90"') || MediaSource.isTypeSupported('video/mp4;codecs="hev1.2.4.L120.90"') || MediaSource.isTypeSupported('video/mp4;codecs="hev1.3.E.L120.90"') || MediaSource.isTypeSupported('video/mp4;codecs="hev1.4.10.L120.90"');
  },
  probeConfigSupported: function probeConfigSupported(info) {
    var defaults = {
      supported: false,
      smooth: false,
      powerEfficient: false
    };
    if (!info || typeof navigator === "undefined") {
      return Promise.resolve(defaults);
    }
    if (navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo) {
      return navigator.mediaCapabilities.decodingInfo(info);
    } else {
      var videoConfig = info.video || {};
      var audioConfig = info.audio || {};
      try {
        var videoSupported = MediaSource.isTypeSupported(videoConfig.contentType);
        var audioSupported = MediaSource.isTypeSupported(audioConfig.contentType);
        return Promise.resolve({
          supported: videoSupported && audioSupported,
          smooth: false,
          powerEfficient: false
        });
      } catch (e) {
        return Promise.resolve(defaults);
      }
    }
  }
};

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/version.js
var version = "3.0.20";

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/error.js
var ERROR_TYPE_MAP = {
  1: "media",
  2: "media",
  3: "media",
  4: "media",
  5: "media",
  6: "media"
};
var ERROR_MAP = {
  1: 5101,
  2: 5102,
  3: 5103,
  4: 5104,
  5: 5105,
  6: 5106
};
var Errors = _createClass(
  function Errors2(player) {
    var errorInfo = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      errorType: "",
      errorCode: 0,
      errorMessage: "",
      originError: "",
      ext: {},
      mediaError: null
    };
    _classCallCheck(this, Errors2);
    var ERROR_TYPES = player && player.i18n ? player.i18n.ERROR_TYPES : null;
    if (player.media) {
      var mediaError = errorInfo.mediaError ? errorInfo.mediaError : player.media.error || {};
      var duration = player.duration, currentTime = player.currentTime, ended = player.ended, src = player.src, currentSrc = player.currentSrc;
      var _player$media = player.media, readyState = _player$media.readyState, networkState = _player$media.networkState;
      var _errc = errorInfo.errorCode || mediaError.code;
      if (ERROR_MAP[_errc]) {
        _errc = ERROR_MAP[_errc];
      }
      var r = {
        playerVersion: version,
        currentTime,
        duration,
        ended,
        readyState,
        networkState,
        src: src || currentSrc,
        errorType: errorInfo.errorType,
        errorCode: _errc,
        message: errorInfo.errorMessage || mediaError.message,
        mediaError,
        originError: errorInfo.originError ? errorInfo.originError.stack : "",
        host: util.getHostFromUrl(src || currentSrc)
      };
      errorInfo.ext && Object.keys(errorInfo.ext).map(function(key) {
        r[key] = errorInfo.ext[key];
      });
      return r;
    } else {
      if (arguments.length > 1) {
        var _r = {
          playerVersion: version,
          domain: document.domain
        };
        var arr = ["errorType", "currentTime", "duration", "networkState", "readyState", "src", "currentSrc", "ended", "errd", "errorCode", "mediaError"];
        for (var i = 0; i < arguments.length; i++) {
          _r[arr[i]] = arguments[i];
        }
        _r.ex = ERROR_TYPES ? (ERROR_TYPES[arguments[0]] || {}).msg : "";
        return _r;
      }
    }
  }
);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/events.js
var events_exports = {};
__export(events_exports, {
  ABORT: () => ABORT,
  AFTER_DEFINITION_CHANGE: () => AFTER_DEFINITION_CHANGE,
  AUTOPLAY_PREVENTED: () => AUTOPLAY_PREVENTED,
  AUTOPLAY_STARTED: () => AUTOPLAY_STARTED,
  BEFORE_DEFINITION_CHANGE: () => BEFORE_DEFINITION_CHANGE,
  BUFFER_CHANGE: () => BUFFER_CHANGE,
  CANPLAY: () => CANPLAY,
  CANPLAY_THROUGH: () => CANPLAY_THROUGH,
  COMPLETE: () => COMPLETE,
  CSS_FULLSCREEN_CHANGE: () => CSS_FULLSCREEN_CHANGE,
  DEFINITION_CHANGE: () => DEFINITION_CHANGE,
  DESTROY: () => DESTROY,
  DOWNLOAD_SPEED_CHANGE: () => DOWNLOAD_SPEED_CHANGE,
  DURATION_CHANGE: () => DURATION_CHANGE,
  EMPTIED: () => EMPTIED,
  ENDED: () => ENDED,
  ENTER_PLAYER: () => ENTER_PLAYER,
  ERROR: () => ERROR,
  FPS_STUCK: () => FPS_STUCK,
  FULLSCREEN_CHANGE: () => FULLSCREEN_CHANGE,
  LEAVE_PLAYER: () => LEAVE_PLAYER,
  LOADED_DATA: () => LOADED_DATA,
  LOADED_METADATA: () => LOADED_METADATA,
  LOADING: () => LOADING,
  LOAD_START: () => LOAD_START,
  MINI_STATE_CHANGE: () => MINI_STATE_CHANGE,
  PAUSE: () => PAUSE,
  PIP_CHANGE: () => PIP_CHANGE,
  PLAY: () => PLAY,
  PLAYER_BLUR: () => PLAYER_BLUR,
  PLAYER_FOCUS: () => PLAYER_FOCUS,
  PLAYING: () => PLAYING,
  PLAYNEXT: () => PLAYNEXT,
  PROGRESS: () => PROGRESS,
  RATE_CHANGE: () => RATE_CHANGE,
  READY: () => READY,
  REPLAY: () => REPLAY,
  RESET: () => RESET,
  RETRY: () => RETRY,
  ROTATE: () => ROTATE,
  SCREEN_SHOT: () => SCREEN_SHOT,
  SEEKED: () => SEEKED,
  SEEKING: () => SEEKING,
  SEI_PARSED: () => SEI_PARSED,
  SHORTCUT: () => SHORTCUT,
  SOURCE_ERROR: () => SOURCE_ERROR,
  SOURCE_SUCCESS: () => SOURCE_SUCCESS,
  STALLED: () => STALLED,
  STATS_EVENTS: () => STATS_EVENTS,
  SUSPEND: () => SUSPEND,
  SWITCH_SUBTITLE: () => SWITCH_SUBTITLE,
  TIME_UPDATE: () => TIME_UPDATE,
  URL_CHANGE: () => URL_CHANGE,
  URL_NULL: () => URL_NULL,
  USER_ACTION: () => USER_ACTION,
  VIDEO_EVENTS: () => VIDEO_EVENTS,
  VIDEO_RESIZE: () => VIDEO_RESIZE,
  VOLUME_CHANGE: () => VOLUME_CHANGE,
  WAITING: () => WAITING,
  XGLOG: () => XGLOG
});
var PLAY = "play";
var PLAYING = "playing";
var ENDED = "ended";
var PAUSE = "pause";
var ERROR = "error";
var SEEKING = "seeking";
var SEEKED = "seeked";
var TIME_UPDATE = "timeupdate";
var WAITING = "waiting";
var CANPLAY = "canplay";
var CANPLAY_THROUGH = "canplaythrough";
var DURATION_CHANGE = "durationchange";
var VOLUME_CHANGE = "volumechange";
var LOADED_DATA = "loadeddata";
var LOADED_METADATA = "loadedmetadata";
var RATE_CHANGE = "ratechange";
var PROGRESS = "progress";
var LOAD_START = "loadstart";
var EMPTIED = "emptied";
var STALLED = "stalled";
var SUSPEND = "suspend";
var ABORT = "abort";
var BUFFER_CHANGE = "bufferedChange";
var PLAYER_FOCUS = "focus";
var PLAYER_BLUR = "blur";
var READY = "ready";
var URL_NULL = "urlNull";
var AUTOPLAY_STARTED = "autoplay_started";
var AUTOPLAY_PREVENTED = "autoplay_was_prevented";
var COMPLETE = "complete";
var REPLAY = "replay";
var DESTROY = "destroy";
var URL_CHANGE = "urlchange";
var DOWNLOAD_SPEED_CHANGE = "download_speed_change";
var LEAVE_PLAYER = "leaveplayer";
var ENTER_PLAYER = "enterplayer";
var LOADING = "loading";
var FULLSCREEN_CHANGE = "fullscreen_change";
var CSS_FULLSCREEN_CHANGE = "cssFullscreen_change";
var MINI_STATE_CHANGE = "mini_state_change";
var DEFINITION_CHANGE = "definition_change";
var BEFORE_DEFINITION_CHANGE = "before_definition_change";
var AFTER_DEFINITION_CHANGE = "after_definition_change";
var SEI_PARSED = "SEI_PARSED";
var RETRY = "retry";
var VIDEO_RESIZE = "video_resize";
var PIP_CHANGE = "pip_change";
var ROTATE = "rotate";
var SCREEN_SHOT = "screenShot";
var PLAYNEXT = "playnext";
var SHORTCUT = "shortcut";
var XGLOG = "xglog";
var USER_ACTION = "user_action";
var RESET = "reset";
var SOURCE_ERROR = "source_error";
var SOURCE_SUCCESS = "source_success";
var SWITCH_SUBTITLE = "switch_subtitle";
var VIDEO_EVENTS = ["play", "playing", "ended", "pause", "error", "seeking", "seeked", "timeupdate", "waiting", "canplay", "canplaythrough", "durationchange", "volumechange", "loadeddata", "loadedmetadata", "ratechange", "progress", "loadstart", "emptied", "stalled", "suspend", "abort", "lowdecode"];
var STATS_EVENTS = {
  STATS_INFO: "stats_info",
  STATS_DOWNLOAD: "stats_download",
  STATS_RESET: "stats_reset"
};
var FPS_STUCK = "fps_stuck";

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/mediaProxy.js
function emitVideoEvent(eventKey, e) {
  if (!this || !this.emit) {
    return;
  }
  if (eventKey === "error") {
    this.errorHandler(eventKey, e.error);
  } else {
    this.emit(eventKey, e);
  }
}
function getVideoEventHandler(eventKey, player) {
  return function(e, _err) {
    var eData = {
      player,
      eventName: eventKey,
      originalEvent: e,
      detail: e.detail || {},
      timeStamp: e.timeStamp,
      currentTime: player.currentTime,
      duration: player.duration,
      paused: player.paused,
      ended: player.ended,
      isInternalOp: !!player._internalOp[e.type],
      muted: player.muted,
      volume: player.volume,
      host: util.getHostFromUrl(player.currentSrc),
      vtype: player.vtype
    };
    player.removeInnerOP(e.type);
    if (eventKey === "timeupdate") {
      player._currentTime = player.media && player.media.currentTime;
    }
    if (eventKey === "ratechange") {
      var _rate = player.media ? player.media.playbackRate : 0;
      if (_rate && player._rate === _rate) {
        return;
      }
      player._rate = player.media && player.media.playbackRate;
    }
    if (eventKey === "durationchange") {
      player._duration = player.media.duration;
    }
    if (eventKey === "volumechange") {
      eData.isMutedChange = player._lastMuted !== player.muted;
      player._lastMuted = player.muted;
    }
    if (eventKey === "error") {
      eData.error = _err || player.video.error;
    }
    if (player.mediaEventMiddleware[eventKey]) {
      var callback = emitVideoEvent.bind(player, eventKey, eData);
      try {
        player.mediaEventMiddleware[eventKey].call(player, eData, callback);
      } catch (err) {
        emitVideoEvent.call(player, eventKey, eData);
        throw err;
      }
    } else {
      emitVideoEvent.call(player, eventKey, eData);
    }
  };
}
var MediaProxy = function(_EventEmitter) {
  _inherits(MediaProxy2, _EventEmitter);
  var _super = _createSuper(MediaProxy2);
  function MediaProxy2(options) {
    var _this;
    _classCallCheck(this, MediaProxy2);
    _this = _super.call(this, options);
    _this._hasStart = false;
    _this._currentTime = 0;
    _this._duration = 0;
    _this._internalOp = {};
    _this._lastMuted = false;
    _this.vtype = "MP4";
    _this._rate = -1;
    _this.mediaConfig = Object.assign({}, {
      controls: false,
      autoplay: options.autoplay,
      playsinline: options.playsinline,
      "x5-playsinline": options.playsinline,
      "webkit-playsinline": options.playsinline,
      "x5-video-player-fullscreen": options["x5-video-player-fullscreen"] || options.x5VideoPlayerFullscreen,
      "x5-video-orientation": options["x5-video-orientation"] || options.x5VideoOrientation,
      airplay: options.airplay,
      "webkit-airplay": options.airplay,
      tabindex: options.tabindex | 0,
      mediaType: options.mediaType || "video",
      "data-index": -1
    }, options.videoConfig, options.videoAttributes);
    var playerType = options["x5-video-player-type"] || options.x5VideoPlayerType;
    if (sniffer.isWeixin && sniffer.os.isAndroid && playerType) {
      _this.mediaConfig["x5-video-player-type"] = playerType;
      delete _this.mediaConfig.playsinline;
      delete _this.mediaConfig["webkit-playsinline"];
      delete _this.mediaConfig["x5-playsinline"];
    }
    if (options.loop) {
      _this.mediaConfig.loop = "loop";
    }
    if (options.autoplayMuted && !Object.prototype.hasOwnProperty.call(_this.mediaConfig, "muted")) {
      _this.mediaConfig.muted = true;
    }
    _this.media = util.createDom(_this.mediaConfig.mediaType, "", _this.mediaConfig, "");
    if (options.defaultPlaybackRate) {
      _this.media.defaultPlaybackRate = _this.media.playbackRate = options.defaultPlaybackRate;
    }
    if (util.typeOf(options.volume) === "Number") {
      _this.volume = options.volume;
    }
    if (options.autoplayMuted) {
      _this.media.muted = true;
      _this._lastMuted = true;
    }
    if (options.autoplay) {
      _this.media.autoplay = true;
    }
    _this._interval = {};
    _this.mediaEventMiddleware = {};
    _this.attachVideoEvents();
    return _this;
  }
  _createClass(MediaProxy2, [{
    key: "setEventsMiddleware",
    value: function setEventsMiddleware(middlewares) {
      var _this2 = this;
      Object.keys(middlewares).map(function(key) {
        _this2.mediaEventMiddleware[key] = middlewares[key];
      });
    }
  }, {
    key: "removeEventsMiddleware",
    value: function removeEventsMiddleware(middlewares) {
      var _this3 = this;
      Object.keys(middlewares).map(function(key) {
        delete _this3.mediaEventMiddleware[key];
      });
    }
  }, {
    key: "attachVideoEvents",
    value: function attachVideoEvents() {
      var _this4 = this;
      var media = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.media;
      if (!this._evHandlers) {
        this._evHandlers = VIDEO_EVENTS.map(function(eventKey) {
          var funName = "on".concat(eventKey.charAt(0).toUpperCase()).concat(eventKey.slice(1));
          if (typeof _this4[funName] === "function") {
            _this4.on(eventKey, _this4[funName]);
          }
          return _defineProperty({}, eventKey, getVideoEventHandler(eventKey, _this4));
        });
      }
      this._evHandlers.forEach(function(item) {
        var eventKey = Object.keys(item)[0];
        media.addEventListener(eventKey, item[eventKey], false);
      });
    }
  }, {
    key: "detachVideoEvents",
    value: function detachVideoEvents() {
      var _this5 = this;
      var media = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.media;
      this._evHandlers.forEach(function(item) {
        var eventKey = Object.keys(item)[0];
        media.removeEventListener(eventKey, item[eventKey], false);
      });
      this._evHandlers.forEach(function(item) {
        var eventKey = Object.keys(item)[0];
        var funName = "on".concat(eventKey.charAt(0).toUpperCase()).concat(eventKey.slice(1));
        if (typeof _this5[funName] === "function") {
          _this5.off(eventKey, _this5[funName]);
        }
      });
      this._evHandlers = null;
    }
  }, {
    key: "_attachSourceEvents",
    value: function _attachSourceEvents(video, urls) {
      var _this6 = this;
      video.removeAttribute("src");
      video.load();
      urls.forEach(function(item, index) {
        _this6.media.appendChild(util.createDom("source", "", {
          src: "".concat(item.src),
          type: "".concat(item.type || ""),
          "data-index": index + 1
        }));
      });
      var _c = video.children;
      if (!_c) {
        return;
      }
      this._videoSourceCount = _c.length;
      this._videoSourceIndex = _c.length;
      this._vLoadeddata = function(e) {
        _this6.emit(SOURCE_SUCCESS, {
          src: e.target.currentSrc,
          host: util.getHostFromUrl(e.target.currentSrc)
        });
      };
      var _eHandler = null;
      for (var i = 0; i < this._evHandlers.length; i++) {
        if (Object.keys(this._evHandlers[i])[0] === "error") {
          _eHandler = this._evHandlers[i];
          break;
        }
      }
      !this._sourceError && (this._sourceError = function(e) {
        var _dIndex = parseInt(e.target.getAttribute("data-index"), 10);
        _this6._videoSourceIndex--;
        if (_this6._videoSourceIndex === 0 || _dIndex >= _this6._videoSourceCount) {
          var _err = {
            code: 4,
            message: "sources_load_error"
          };
          _eHandler ? _eHandler.error(e, _err) : _this6.errorHandler("error", _err);
        }
        var type = ERROR_TYPE_MAP[4];
        _this6.emit(SOURCE_ERROR, new Errors(_this6, {
          errorType: type,
          errorCode: 4,
          errorMessage: "sources_load_error",
          mediaError: {
            code: 4,
            message: "sources_load_error"
          },
          src: e.target.src
        }));
      });
      for (var _i = 0; _i < _c.length; _i++) {
        _c[_i].addEventListener("error", this._sourceError);
      }
      video.addEventListener("loadeddata", this._vLoadeddata);
    }
  }, {
    key: "_detachSourceEvents",
    value: function _detachSourceEvents(video) {
      var _c = video.children;
      if (!_c || _c.length === 0 || !this._sourceError) {
        return;
      }
      for (var i = 0; i < _c.length; i++) {
        _c[i].removeEventListener("error", this._sourceError);
      }
      while (_c.length > 0) {
        video.removeChild(_c[0]);
      }
      this._vLoadeddata && video.removeEventListener("loadeddata", this._vLoadeddata);
    }
  }, {
    key: "errorHandler",
    value: function errorHandler(name) {
      var error = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      if (this.media && (this.media.error || error)) {
        var _e = this.media.error || error;
        var type = _e.code ? ERROR_TYPE_MAP[_e.code] : "other";
        var message = _e.message;
        if (!this.media.currentSrc) {
          message = "empty_src";
          _e = {
            code: 6,
            message
          };
        }
        this.emit(name, new Errors(this, {
          errorType: type,
          errorCode: _e.code,
          errorMessage: _e.message || "",
          mediaError: _e
        }));
      }
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      if (this.media) {
        if (this.media.pause) {
          this.media.pause();
          this.media.muted = true;
        }
        this.media.removeAttribute("src");
        this.media.load();
      }
      this._currentTime = 0;
      this._duration = 0;
      this.mediaConfig = null;
      for (var k in this._interval) {
        if (Object.prototype.hasOwnProperty.call(this._interval, k)) {
          clearInterval(this._interval[k]);
          this._interval[k] = null;
        }
      }
      this.detachVideoEvents();
      this.media = null;
      this.mediaEventMiddleware = {};
      this.removeAllListeners();
    }
  }, {
    key: "video",
    get: function get() {
      return this.media;
    },
    set: function set(media) {
      this.media = media;
    }
  }, {
    key: "play",
    value: function play() {
      var ret = this.media ? this.media.play() : null;
      return ret;
    }
  }, {
    key: "pause",
    value: function pause() {
      this.media && this.media.pause();
    }
  }, {
    key: "load",
    value: function load() {
      this.media && this.media.load();
    }
  }, {
    key: "canPlayType",
    value: function canPlayType(type) {
      return this.media ? this.media.canPlayType(type) : false;
    }
  }, {
    key: "getBufferedRange",
    value: function getBufferedRange(buffered) {
      var range = [0, 0];
      if (!this.media) {
        return range;
      }
      if (!buffered) {
        buffered = this.media.buffered;
      }
      var currentTime = this.media.currentTime;
      if (buffered) {
        for (var i = 0, len = buffered.length; i < len; i++) {
          range[0] = buffered.start(i);
          range[1] = buffered.end(i);
          if (range[0] <= currentTime && currentTime <= range[1]) {
            break;
          }
        }
      }
      if (range[0] - currentTime <= 0 && currentTime - range[1] <= 0) {
        return range;
      } else {
        return [0, 0];
      }
    }
  }, {
    key: "autoplay",
    get: function get() {
      return this.media ? this.media.autoplay : false;
    },
    set: function set(isTrue) {
      this.media && (this.media.autoplay = isTrue);
    }
  }, {
    key: "buffered",
    get: function get() {
      return this.media ? this.media.buffered : null;
    }
  }, {
    key: "buffered2",
    get: function get() {
      return this.media && this.media.buffered ? util.getBuffered2(this.media.buffered) : null;
    }
  }, {
    key: "bufferedPoint",
    get: function get() {
      var ret = {
        start: 0,
        end: 0
      };
      if (!this.media) {
        return ret;
      }
      var _buffered = this.media.buffered;
      if (!_buffered || _buffered.length === 0) {
        return ret;
      }
      for (var i = 0; i < _buffered.length; i++) {
        if ((_buffered.start(i) <= this.currentTime || _buffered.start(i) < 0.1) && _buffered.end(i) >= this.currentTime) {
          return {
            start: _buffered.start(i),
            end: _buffered.end(i)
          };
        }
      }
      return ret;
    }
  }, {
    key: "crossOrigin",
    get: function get() {
      return this.media ? this.media.crossOrigin : "";
    },
    set: function set(isTrue) {
      this.media && (this.media.crossOrigin = isTrue);
    }
  }, {
    key: "currentSrc",
    get: function get() {
      return this.media ? this.media.currentSrc : "";
    },
    set: function set(src) {
      this.media && (this.media.currentSrc = src);
    }
  }, {
    key: "currentTime",
    get: function get() {
      if (!this.media) {
        return 0;
      }
      return this.media.currentTime !== void 0 ? this.media.currentTime : this._currentTime;
    },
    set: function set(time) {
      this.media && (this.media.currentTime = time);
    }
  }, {
    key: "defaultMuted",
    get: function get() {
      return this.media ? this.media.defaultMuted : false;
    },
    set: function set(isTrue) {
      this.media && (this.media.defaultMuted = isTrue);
    }
  }, {
    key: "duration",
    get: function get() {
      return this._duration;
    }
  }, {
    key: "ended",
    get: function get() {
      return this.media ? this.media.ended : false;
    }
  }, {
    key: "error",
    get: function get() {
      return this.media.error;
    }
  }, {
    key: "errorNote",
    get: function get() {
      var err = this.media.error;
      if (!err) {
        return "";
      }
      var status = ["MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED"];
      return status[this.media.error.code - 1];
    }
  }, {
    key: "loop",
    get: function get() {
      return this.media ? this.media.loop : false;
    },
    set: function set(isTrue) {
      this.media && (this.media.loop = isTrue);
    }
  }, {
    key: "muted",
    get: function get() {
      return this.media ? this.media.muted : false;
    },
    set: function set(isTrue) {
      if (!this.media || this.media.muted === isTrue) {
        return;
      }
      this._lastMuted = this.media.muted;
      this.media.muted = isTrue;
    }
  }, {
    key: "networkState",
    get: function get() {
      return this.media.networkState;
    }
  }, {
    key: "paused",
    get: function get() {
      return this.media ? this.media.paused : true;
    }
  }, {
    key: "playbackRate",
    get: function get() {
      return this.media ? this.media.playbackRate : 0;
    },
    set: function set(rate) {
      if (!this.media || rate === Infinity) {
        return;
      }
      this.media.defaultPlaybackRate = rate;
      this.media.playbackRate = rate;
    }
  }, {
    key: "played",
    get: function get() {
      return this.media ? this.media.played : null;
    }
  }, {
    key: "preload",
    get: function get() {
      return this.media ? this.media.preload : false;
    },
    set: function set(isTrue) {
      this.media && (this.media.preload = isTrue);
    }
  }, {
    key: "readyState",
    get: function get() {
      return this.media.readyState;
    }
  }, {
    key: "seekable",
    get: function get() {
      return this.media ? this.media.seekable : false;
    }
  }, {
    key: "seeking",
    get: function get() {
      return this.media ? this.media.seeking : false;
    }
  }, {
    key: "src",
    get: function get() {
      return this.media ? this.media.src : "";
    },
    set: function set(url) {
      if (!this.media) {
        return;
      }
      this.emit(URL_CHANGE, url);
      this.emit(WAITING);
      this._currentTime = 0;
      this._duration = 0;
      if (util.isMSE(this.media)) {
        this.onWaiting();
        return;
      }
      this._detachSourceEvents(this.media);
      if (util.typeOf(url) === "Array") {
        this._attachSourceEvents(this.media, url);
      } else if (url) {
        this.media.src = url;
      } else {
        this.media.removeAttribute("src");
      }
      this.load();
    }
  }, {
    key: "volume",
    get: function get() {
      return this.media ? this.media.volume : 0;
    },
    set: function set(vol) {
      if (vol === Infinity || !this.media) {
        return;
      }
      this.media.volume = vol;
    }
  }, {
    key: "aspectRatio",
    get: function get() {
      return this.media ? this.media.videoWidth / this.media.videoHeight : 0;
    }
  }, {
    key: "addInnerOP",
    value: function addInnerOP(event) {
      this._internalOp[event] = true;
    }
  }, {
    key: "removeInnerOP",
    value: function removeInnerOP(event) {
      delete this._internalOp[event];
    }
  }, {
    key: "emit",
    value: function emit(event, data) {
      var _get22;
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      (_get22 = _get(_getPrototypeOf(MediaProxy2.prototype), "emit", this)).call.apply(_get22, [this, event, data].concat(args));
    }
  }, {
    key: "on",
    value: function on(event, callback) {
      var _get3;
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }
      (_get3 = _get(_getPrototypeOf(MediaProxy2.prototype), "on", this)).call.apply(_get3, [this, event, callback].concat(args));
    }
  }, {
    key: "once",
    value: function once(event, callback) {
      var _get4;
      for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args[_key3 - 2] = arguments[_key3];
      }
      (_get4 = _get(_getPrototypeOf(MediaProxy2.prototype), "once", this)).call.apply(_get4, [this, event, callback].concat(args));
    }
  }, {
    key: "off",
    value: function off(event, callback) {
      var _get5;
      for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        args[_key4 - 2] = arguments[_key4];
      }
      (_get5 = _get(_getPrototypeOf(MediaProxy2.prototype), "off", this)).call.apply(_get5, [this, event, callback].concat(args));
    }
  }, {
    key: "offAll",
    value: function offAll() {
      _get(_getPrototypeOf(MediaProxy2.prototype), "removeAllListeners", this).call(this);
    }
  }]);
  return MediaProxy2;
}(import_eventemitter3.default);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/utils/database.js
var INDEXDB = function() {
  function INDEXDB2() {
    var mydb = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      name: "xgplayer",
      version: 1,
      db: null,
      ojstore: {
        name: "xg-m4a",
        keypath: "vid"
      }
    };
    _classCallCheck(this, INDEXDB2);
    this.indexedDB = window.indexedDB || window.webkitindexedDB;
    this.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;
    this.myDB = mydb;
  }
  _createClass(INDEXDB2, [{
    key: "openDB",
    value: function openDB(callback) {
      var _this = this;
      var self = this;
      var version2 = this.myDB.version || 1;
      var request = self.indexedDB.open(self.myDB.name, version2);
      request.onerror = function(e) {
      };
      request.onsuccess = function(e) {
        _this.myDB.db = e.target.result;
        callback.call(self);
      };
      request.onupgradeneeded = function(e) {
        var db = e.target.result;
        e.target.transaction;
        if (!db.objectStoreNames.contains(self.myDB.ojstore.name)) {
          db.createObjectStore(self.myDB.ojstore.name, {
            keyPath: self.myDB.ojstore.keypath
          });
        }
      };
    }
  }, {
    key: "deletedb",
    value: function deletedb() {
      var self = this;
      self.indexedDB.deleteDatabase(this.myDB.name);
    }
  }, {
    key: "closeDB",
    value: function closeDB() {
      this.myDB.db.close();
    }
  }, {
    key: "addData",
    value: function addData(storename, data) {
      var store2 = this.myDB.db.transaction(storename, "readwrite").objectStore(storename);
      var request;
      for (var i = 0; i < data.length; i++) {
        request = store2.add(data[i]);
        request.onerror = function() {
        };
        request.onsuccess = function() {
        };
      }
    }
  }, {
    key: "putData",
    value: function putData(storename, data) {
      var store2 = this.myDB.db.transaction(storename, "readwrite").objectStore(storename);
      var request;
      for (var i = 0; i < data.length; i++) {
        request = store2.put(data[i]);
        request.onerror = function() {
        };
        request.onsuccess = function() {
        };
      }
    }
  }, {
    key: "getDataByKey",
    value: function getDataByKey(storename, key, callback) {
      var self = this;
      var store2 = this.myDB.db.transaction(storename, "readwrite").objectStore(storename);
      var request = store2.get(key);
      request.onerror = function() {
        callback.call(self, null);
      };
      request.onsuccess = function(e) {
        var result = e.target.result;
        callback.call(self, result);
      };
    }
  }, {
    key: "deleteData",
    value: function deleteData(storename, key) {
      var store2 = this.myDB.db.transaction(storename, "readwrite").objectStore(storename);
      store2.delete(key);
    }
  }, {
    key: "clearData",
    value: function clearData(storename) {
      var store2 = this.myDB.db.transaction(storename, "readwrite").objectStore(storename);
      store2.clear();
    }
  }]);
  return INDEXDB2;
}();

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/constant.js
var FULLSCREEN_EVENTS = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
var GET_FULLSCREEN_API = ["requestFullscreen", "webkitRequestFullscreen", "mozRequestFullScreen", "msRequestFullscreen"];
var EXIT_FULLSCREEN_API = ["exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"];
var PLATER_ID = "data-xgplayerid";

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugin/hooksDescriptor.js
function callHandler(obj, handler, next) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }
  var ret = handler.call.apply(handler, [obj].concat(args));
  if (!next || typeof next !== "function") {
    return;
  }
  if (ret && ret.then) {
    ret.then(function() {
      for (var _len2 = arguments.length, args2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args2[_key2] = arguments[_key2];
      }
      next.call.apply(next, [obj].concat(args2));
    });
  } else {
    next.call.apply(next, [obj].concat(args));
  }
}
function hook(hookName, handler) {
  var preset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    pre: null,
    next: null
  };
  if (!this.__hooks) {
    this.__hooks = {};
  }
  !this.__hooks[hookName] && (this.__hooks[hookName] = null);
  return (function() {
    var _arguments = arguments, _this = this;
    if (preset.pre) {
      try {
        var _preset$pre;
        (_preset$pre = preset.pre).call.apply(_preset$pre, [this].concat(Array.prototype.slice.call(arguments)));
      } catch (e) {
        e.message = "[pluginName: ".concat(this.pluginName, ":").concat(hookName, ":pre error] >> ").concat(e.message);
        throw e;
      }
    }
    if (this.__hooks && this.__hooks[hookName]) {
      try {
        var preRet = runHooks(this, hookName, handler);
        if (preRet) {
          if (preRet.then) {
            preRet.then(function(isContinue) {
              if (isContinue !== false) {
                callHandler.apply(void 0, [_this, handler, preset.next].concat(_toConsumableArray(_arguments)));
              }
            }).catch(function(e) {
              throw e;
            });
          } else {
            callHandler.apply(void 0, [this, handler, preset.next].concat(Array.prototype.slice.call(arguments)));
          }
        } else if (preRet === void 0) {
          callHandler.apply(void 0, [this, handler, preset.next].concat(Array.prototype.slice.call(arguments)));
        }
      } catch (e) {
        e.message = "[pluginName: ".concat(this.pluginName, ":").concat(hookName, "] >> ").concat(e.message);
        throw e;
      }
    } else {
      callHandler.apply(void 0, [this, handler, preset.next].concat(Array.prototype.slice.call(arguments)));
    }
  }).bind(this);
}
function findHookIndex(hookName, handler) {
  var __hooks = this.__hooks;
  if (!__hooks || !Array.isArray(__hooks[hookName])) {
    return -1;
  }
  var hookHandlers = __hooks[hookName];
  for (var i = 0; i < hookHandlers.length; i++) {
    if (hookHandlers[i] === handler) {
      return i;
    }
  }
  return -1;
}
function useHooks(hookName, handler) {
  var __hooks = this.__hooks;
  if (!__hooks) {
    return;
  }
  if (!__hooks.hasOwnProperty(hookName)) {
    console.warn("has no supported hook which name [".concat(hookName, "]"));
    return false;
  }
  if (!Array.isArray(__hooks[hookName])) {
    __hooks[hookName] = [];
  }
  if (findHookIndex.call(this, hookName, handler) === -1) {
    __hooks[hookName].push(handler);
  }
  return true;
}
function removeHooks(hookName, handler) {
  var __hooks = this.__hooks;
  if (!__hooks) {
    return;
  }
  if (Array.isArray(__hooks[hookName])) {
    var hooks = __hooks[hookName];
    var index = findHookIndex.call(this, hookName, handler);
    if (index !== -1) {
      hooks.splice(index, 1);
    }
  }
  delete __hooks[hookName];
}
function usePluginHooks(pluginName) {
  if (!this.plugins || !this.plugins[pluginName.toLowerCase()]) {
    return;
  }
  var plugin = this.plugins[pluginName.toLowerCase()];
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }
  return plugin.useHooks && plugin.useHooks.apply(plugin, args);
}
function removePluginHooks(pluginName) {
  if (!this.plugins || !this.plugins[pluginName.toLowerCase()]) {
    return;
  }
  var plugin = this.plugins[pluginName.toLowerCase()];
  if (plugin) {
    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }
    return plugin.removeHooks && plugin.removeHooks.apply(plugin, args);
  }
}
function hooksDescriptor(instance2) {
  var presetHooks = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  instance2.__hooks = {};
  presetHooks && presetHooks.map(function(item) {
    instance2.__hooks[item] = null;
  });
  Object.defineProperty(instance2, "hooks", {
    get: function get() {
      return instance2.__hooks && Object.keys(instance2.__hooks).map(function(key) {
        if (instance2.__hooks[key]) {
          return key;
        }
      });
    }
  });
}
function delHooksDescriptor(instance2) {
  instance2.__hooks = null;
}
function runHooks(obj, hookName, handler) {
  for (var _len5 = arguments.length, args = new Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {
    args[_key5 - 3] = arguments[_key5];
  }
  if (obj.__hooks && Array.isArray(obj.__hooks[hookName])) {
    var hooks = obj.__hooks[hookName];
    var index = -1;
    var runHooksRecursive = function runHooksRecursive2(obj2, hookName2, handler2) {
      for (var _len6 = arguments.length, args2 = new Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
        args2[_key6 - 3] = arguments[_key6];
      }
      index++;
      if (hooks.length === 0 || index === hooks.length) {
        return handler2.call.apply(handler2, [obj2, obj2].concat(args2));
      }
      var hook2 = hooks[index];
      var ret = hook2.call.apply(hook2, [obj2, obj2].concat(args2));
      if (ret && ret.then) {
        return ret.then(function(data) {
          return data === false ? null : runHooksRecursive2.apply(void 0, [obj2, hookName2, handler2].concat(args2));
        }).catch(function(e) {
          console.warn("[runHooks]".concat(hookName2, " reject"), e.message);
        });
      } else if (ret !== false) {
        return runHooksRecursive2.apply(void 0, [obj2, hookName2, handler2].concat(args2));
      }
    };
    return runHooksRecursive.apply(void 0, [obj, hookName, handler].concat(args));
  } else {
    return handler.call.apply(handler, [obj, obj].concat(args));
  }
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugin/basePlugin.js
function showErrorMsg(pluginName, msg) {
  XG_DEBUG.logError("[".concat(pluginName, "] event or callback cant be undefined or null when call ").concat(msg));
}
var BasePlugin = function() {
  function BasePlugin2(args) {
    _classCallCheck(this, BasePlugin2);
    if (util.checkIsFunction(this.beforeCreate)) {
      this.beforeCreate(args);
    }
    hooksDescriptor(this);
    this.__args = args;
    this.__events = {};
    this.__onceEvents = {};
    this.config = args.config || {};
    this.player = null;
    this.playerConfig = {};
    this.pluginName = "";
    this.__init(args);
  }
  _createClass(BasePlugin2, [{
    key: "beforeCreate",
    value: function beforeCreate(args) {
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
    }
  }, {
    key: "beforePlayerInit",
    value: function beforePlayerInit() {
    }
  }, {
    key: "onPluginsReady",
    value: function onPluginsReady2() {
    }
  }, {
    key: "afterPlayerInit",
    value: function afterPlayerInit() {
    }
  }, {
    key: "destroy",
    value: function destroy2() {
    }
  }, {
    key: "__init",
    value: function __init(args) {
      this.player = args.player;
      this.playerConfig = args.player && args.player.config;
      this.pluginName = args.pluginName ? args.pluginName.toLowerCase() : this.constructor.pluginName.toLowerCase();
      this.logger = args.player && args.player.logger;
    }
  }, {
    key: "updateLang",
    value: function updateLang(lang) {
      if (!lang) {
        lang = this.lang;
      }
    }
  }, {
    key: "lang",
    get: function get() {
      return this.player.lang;
    }
  }, {
    key: "i18n",
    get: function get() {
      return this.player.i18n;
    }
  }, {
    key: "i18nKeys",
    get: function get() {
      return this.player.i18nKeys;
    }
  }, {
    key: "domEventType",
    get: function get() {
      var _e = util.checkTouchSupport() ? "touch" : "mouse";
      if (this.playerConfig && (this.playerConfig.domEventType === "touch" || this.playerConfig.domEventType === "mouse")) {
        _e = this.playerConfig.domEventType;
      }
      return _e;
    }
  }, {
    key: "on",
    value: function on(event, callback) {
      var _this = this;
      if (!event || !callback || !this.player) {
        showErrorMsg(this.pluginName, "plugin.on(event, callback)");
        return;
      }
      if (typeof event === "string") {
        this.__events[event] = callback;
        this.player.on(event, callback);
      } else if (Array.isArray(event)) {
        event.forEach(function(item) {
          _this.__events[item] = callback;
          _this.player.on(item, callback);
        });
      }
    }
  }, {
    key: "once",
    value: function once(event, callback) {
      var _this2 = this;
      if (!event || !callback || !this.player) {
        showErrorMsg(this.pluginName, "plugin.once(event, callback)");
        return;
      }
      if (typeof event === "string") {
        this.__onceEvents[event] = callback;
        this.player.once(event, callback);
      } else if (Array.isArray(event)) {
        event.forEach(function(item) {
          _this2.__onceEvents[item] = callback;
          _this2.player.once(event, callback);
        });
      }
    }
  }, {
    key: "off",
    value: function off(event, callback) {
      var _this3 = this;
      if (!event || !callback || !this.player) {
        showErrorMsg(this.pluginName, "plugin.off(event, callback)");
        return;
      }
      if (typeof event === "string") {
        delete this.__events[event];
        this.player.off(event, callback);
      } else if (Array.isArray(event)) {
        event.forEach(function(item) {
          delete _this3.__events[event];
          _this3.player.off(item, callback);
        });
      }
    }
  }, {
    key: "offAll",
    value: function offAll() {
      var _this4 = this;
      ["__events", "__onceEvents"].forEach(function(key) {
        Object.keys(_this4[key]).forEach(function(item) {
          _this4[key][item] && _this4.off(item, _this4[key][item]);
          item && delete _this4[key][item];
        });
      });
      this.__events = {};
      this.__onceEvents = {};
    }
  }, {
    key: "emit",
    value: function emit(event) {
      var _this$player;
      if (!this.player) {
        return;
      }
      for (var _len = arguments.length, res = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        res[_key - 1] = arguments[_key];
      }
      (_this$player = this.player).emit.apply(_this$player, [event].concat(res));
    }
  }, {
    key: "emitUserAction",
    value: function emitUserAction(event, action) {
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (!this.player) {
        return;
      }
      var nParams = _objectSpread2(_objectSpread2({}, params), {}, {
        pluginName: this.pluginName
      });
      this.player.emitUserAction(event, action, nParams);
    }
  }, {
    key: "hook",
    value: function hook$1(hookName, handler) {
      return hook.call.apply(hook, [this].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "useHooks",
    value: function useHooks$1(hookName, handler) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }
      return useHooks.call.apply(useHooks, [this].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "removeHooks",
    value: function removeHooks$1(hookName, handler) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args[_key3 - 2] = arguments[_key3];
      }
      return removeHooks.call.apply(removeHooks, [this].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "registerPlugin",
    value: function registerPlugin(plugin) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var name = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
      if (!this.player) {
        return;
      }
      name && (options.pluginName = name);
      return this.player.registerPlugin({
        plugin,
        options
      });
    }
  }, {
    key: "getPlugin",
    value: function getPlugin(name) {
      return this.player ? this.player.getPlugin(name) : null;
    }
  }, {
    key: "__destroy",
    value: function __destroy() {
      var _this5 = this;
      var player = this.player;
      var pluginName = this.pluginName;
      this.offAll();
      util.clearAllTimers(this);
      if (util.checkIsFunction(this.destroy)) {
        this.destroy();
      }
      ["player", "playerConfig", "pluginName", "logger", "__args", "__hooks"].map(function(item) {
        _this5[item] = null;
      });
      player.unRegisterPlugin(pluginName);
      delHooksDescriptor(this);
    }
  }], [{
    key: "defineGetterOrSetter",
    value: function defineGetterOrSetter(Obj, map) {
      for (var key in map) {
        if (Object.prototype.hasOwnProperty.call(map, key)) {
          Object.defineProperty(Obj, key, map[key]);
        }
      }
    }
  }, {
    key: "defineMethod",
    value: function defineMethod(Obj, map) {
      for (var key in map) {
        if (Object.prototype.hasOwnProperty.call(map, key) && typeof map[key] === "function") {
          Object.defineProperty(Obj, key, {
            configurable: true,
            value: map[key]
          });
        }
      }
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {};
    }
  }, {
    key: "pluginName",
    get: function get() {
      return "pluginName";
    }
  }]);
  return BasePlugin2;
}();

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugin/plugin.js
var import_delegate = __toESM(require_delegate());
var ROOT_TYPES = {
  CONTROLS: "controls",
  ROOT: "root"
};
var POSITIONS = {
  ROOT: "root",
  ROOT_LEFT: "rootLeft",
  ROOT_RIGHT: "rootRight",
  ROOT_TOP: "rootTop",
  CONTROLS_LEFT: "controlsLeft",
  CONTROLS_RIGTH: "controlsRight",
  CONTROLS_RIGHT: "controlsRight",
  CONTROLS_CENTER: "controlsCenter",
  CONTROLS: "controls"
};
var PLUGIN_STATE_CLASS = {
  ICON_DISABLE: "xg-icon-disable",
  ICON_HIDE: "xg-icon-hide"
};
function isUrl(str) {
  if (!str) {
    return false;
  }
  return str.indexOf && /^(?:http|data:|\/)/.test(str);
}
function mergeIconClass(icon, classname) {
  if (_typeof(icon) === "object" && icon.class && typeof icon.class === "string") {
    return "".concat(classname, " ").concat(icon.class);
  }
  return classname;
}
function mergeIconAttr(icon, attr) {
  if (_typeof(icon) === "object" && icon.attr && _typeof(icon.attr) === "object") {
    Object.keys(icon.attr).map(function(key) {
      attr[key] = icon.attr[key];
    });
  }
  return attr;
}
function createIcon(icon, key) {
  var classname = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  var attr = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  var pluginName = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "";
  var newIcon = null;
  if (icon instanceof window.Element) {
    util.addClass(icon, classname);
    Object.keys(attr).map(function(key2) {
      icon.setAttribute(key2, attr[key2]);
    });
    return icon;
  }
  if (isUrl(icon) || isUrl(icon.url)) {
    attr.src = isUrl(icon) ? icon : icon.url || "";
    newIcon = util.createDom(icon.tag || "img", "", attr, "xg-img ".concat(classname));
    return newIcon;
  }
  if (typeof icon === "function") {
    try {
      newIcon = icon();
      if (newIcon instanceof window.Element) {
        util.addClass(newIcon, classname);
        Object.keys(attr).map(function(key2) {
          newIcon.setAttribute(key2, attr[key2]);
        });
        return newIcon;
      } else {
        XG_DEBUG.logWarn("warn>>icons.".concat(key, " in config of plugin named [").concat(pluginName, "] is a function mast return an Element Object"));
      }
      return null;
    } catch (e) {
      XG_DEBUG.logError("Plugin named [".concat(pluginName, "]:createIcon"), e);
      return null;
    }
  }
  if (typeof icon === "string") {
    return util.createDomFromHtml(icon, attr, classname);
  }
  XG_DEBUG.logWarn("warn>>icons.".concat(key, " in config of plugin named [").concat(pluginName, "] is invalid"));
  return null;
}
function registerIconsObj(iconsConfig, plugin) {
  var _icons = plugin.config.icons || plugin.playerConfig.icons;
  Object.keys(iconsConfig).map(function(key) {
    var orgIcon = iconsConfig[key];
    var classname = orgIcon && orgIcon.class ? orgIcon.class : "";
    var attr = orgIcon && orgIcon.attr ? orgIcon.attr : {};
    var newIcon = null;
    if (_icons && _icons[key]) {
      classname = mergeIconClass(_icons[key], classname);
      attr = mergeIconAttr(_icons[key], attr);
      newIcon = createIcon(_icons[key], key, classname, attr, plugin.pluginName);
    }
    if (!newIcon && orgIcon) {
      newIcon = createIcon(orgIcon.icon ? orgIcon.icon : orgIcon, attr, classname, {}, plugin.pluginName);
    }
    plugin.icons[key] = newIcon;
  });
}
function registerTextObj(textConfig, plugin) {
  Object.keys(textConfig).map(function(key) {
    Object.defineProperty(plugin.langText, key, {
      get: function get() {
        var lang = plugin.lang, i18n = plugin.i18n;
        if (i18n[key]) {
          return i18n[key];
        } else {
          return textConfig[key] ? textConfig[key][lang] || "" : "";
        }
      }
    });
  });
}
var Plugin = function(_BasePlugin) {
  _inherits(Plugin2, _BasePlugin);
  var _super = _createSuper(Plugin2);
  function Plugin2() {
    var _this;
    var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck(this, Plugin2);
    _this = _super.call(this, args);
    _this.__delegates = [];
    return _this;
  }
  _createClass(Plugin2, [{
    key: "__init",
    value: function __init(args) {
      _get(_getPrototypeOf(Plugin2.prototype), "__init", this).call(this, args);
      if (!args.root) {
        return;
      }
      var _parent = args.root;
      var _el = null;
      this.icons = {};
      this.root = null;
      this.parent = null;
      var _orgicons = this.registerIcons() || {};
      registerIconsObj(_orgicons, this);
      this.langText = {};
      var defaultTexConfig = this.registerLanguageTexts() || {};
      registerTextObj(defaultTexConfig, this);
      var renderStr = "";
      try {
        renderStr = this.render();
      } catch (e) {
        XG_DEBUG.logError("Plugin:".concat(this.pluginName, ":render"), e);
        throw new Error("Plugin:".concat(this.pluginName, ":render:").concat(e.message));
      }
      if (renderStr) {
        _el = Plugin2.insert(renderStr, _parent, args.index);
        _el.setAttribute("data-index", args.index);
      } else if (args.tag) {
        _el = util.createDom(args.tag, "", args.attr, args.name);
        _el.setAttribute("data-index", args.index);
        _parent.appendChild(_el);
      } else {
        return;
      }
      this.root = _el;
      this.parent = _parent;
      var attr = this.config.attr || {};
      var style = this.config.style || {};
      this.setAttr(attr);
      this.setStyle(style);
      if (this.config.index) {
        this.root.setAttribute("data-index", this.config.index);
      }
      this.__registerChildren();
    }
  }, {
    key: "__registerChildren",
    value: function __registerChildren() {
      var _this2 = this;
      if (!this.root) {
        return;
      }
      this._children = [];
      var children = this.children();
      if (children && _typeof(children) === "object") {
        if (Object.keys(children).length > 0) {
          Object.keys(children).map(function(item) {
            var name = item;
            var _plugin = children[name];
            var options = {
              root: _this2.root
            };
            var config, _Plugin;
            if (typeof _plugin === "function") {
              config = _this2.config[name] || {};
              _Plugin = _plugin;
            } else if (_typeof(_plugin) === "object" && typeof _plugin.plugin === "function") {
              config = _plugin.options ? util.deepCopy(_this2.config[name] || {}, _plugin.options) : _this2.config[name] || {};
              _Plugin = _plugin.plugin;
            }
            options.config = config;
            config.index !== void 0 && (options.index = config.index);
            config.root && (options.root = config.root);
            _this2.registerPlugin(_Plugin, options, name);
          });
        }
      }
    }
  }, {
    key: "updateLang",
    value: function updateLang(lang) {
      if (!lang) {
        lang = this.lang;
      }
      function checkChildren(node, callback) {
        for (var i = 0; i < node.children.length; i++) {
          if (node.children[i].children.length > 0) {
            checkChildren(node.children[i], callback);
          } else {
            callback(node.children[i]);
          }
        }
      }
      var root = this.root, i18n = this.i18n, langText = this.langText;
      if (root) {
        checkChildren(root, function(node) {
          var langKey = node.getAttribute && node.getAttribute("lang-key");
          if (!langKey) {
            return;
          }
          var langTextShow = i18n[langKey.toUpperCase()] || langText[langKey];
          if (langTextShow) {
            node.innerHTML = typeof langTextShow === "function" ? langTextShow(lang) : langTextShow;
          }
        });
      }
    }
  }, {
    key: "lang",
    get: function get() {
      return this.player.lang;
    }
  }, {
    key: "changeLangTextKey",
    value: function changeLangTextKey(dom) {
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var i18n = this.i18n || {};
      var langText = this.langText;
      dom.setAttribute && dom.setAttribute("lang-key", key);
      var text = i18n[key] || langText[key] || "";
      if (text) {
        dom.innerHTML = text;
      }
    }
  }, {
    key: "plugins",
    value: function plugins() {
      return this._children;
    }
  }, {
    key: "disable",
    value: function disable() {
      this.config.disable = true;
      util.addClass(this.find(".xgplayer-icon"), PLUGIN_STATE_CLASS.ICON_DISABLE);
    }
  }, {
    key: "enable",
    value: function enable() {
      this.config.disable = false;
      util.removeClass(this.find(".xgplayer-icon"), PLUGIN_STATE_CLASS.ICON_DISABLE);
    }
  }, {
    key: "children",
    value: function children() {
      return {};
    }
  }, {
    key: "registerPlugin",
    value: function registerPlugin(plugin) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var name = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
      options.root = options.root || this.root;
      var _c = _get(_getPrototypeOf(Plugin2.prototype), "registerPlugin", this).call(this, plugin, options, name);
      this._children.push(_c);
      return _c;
    }
  }, {
    key: "registerIcons",
    value: function registerIcons() {
      return {};
    }
  }, {
    key: "registerLanguageTexts",
    value: function registerLanguageTexts() {
      return {};
    }
  }, {
    key: "find",
    value: function find(qs) {
      if (!this.root) {
        return;
      }
      return this.root.querySelector(qs);
    }
  }, {
    key: "bind",
    value: function bind(querySelector, eventType, callback) {
      var _this3 = this;
      if (arguments.length < 3 && typeof eventType === "function") {
        if (Array.isArray(querySelector)) {
          querySelector.forEach(function(item) {
            _this3.bindEL(item, eventType);
          });
        } else {
          this.bindEL(querySelector, eventType);
        }
      } else {
        var ret = Plugin2.delegate.call(this, this.root, querySelector, eventType, callback);
        this.__delegates = this.__delegates.concat(ret);
      }
    }
  }, {
    key: "unbind",
    value: function unbind(querySelector, eventType) {
      var _this4 = this;
      if (arguments.length < 3 && typeof eventType === "function") {
        if (Array.isArray(querySelector)) {
          querySelector.forEach(function(item) {
            _this4.unbindEL(item, eventType);
          });
        } else {
          this.unbindEL(querySelector, eventType);
        }
      } else {
        var key = "".concat(querySelector, "_").concat(eventType);
        for (var i = 0; i < this.__delegates.length; i++) {
          if (this.__delegates[i].key === key) {
            this.__delegates[i].destroy();
            this.__delegates.splice(i, 1);
            break;
          }
        }
      }
    }
  }, {
    key: "setStyle",
    value: function setStyle(name, value) {
      var _this5 = this;
      if (!this.root) {
        return;
      }
      if (util.typeOf(name) === "String") {
        return this.root.style[name] = value;
      } else if (util.typeOf(name) === "Object") {
        Object.keys(name).map(function(key) {
          _this5.root.style[key] = name[key];
        });
      }
    }
  }, {
    key: "setAttr",
    value: function setAttr(name, value) {
      var _this6 = this;
      if (!this.root) {
        return;
      }
      if (util.typeOf(name) === "String") {
        return this.root.setAttribute(name, value);
      } else if (util.typeOf(name) === "Object") {
        Object.keys(name).map(function(key) {
          _this6.root.setAttribute(key, name[key]);
        });
      }
    }
  }, {
    key: "setHtml",
    value: function setHtml(htmlStr, callback) {
      if (!this.root) {
        return;
      }
      this.root.innerHTML = htmlStr;
      if (typeof callback === "function") {
        callback();
      }
    }
  }, {
    key: "bindEL",
    value: function bindEL(event, eventHandle) {
      var isBubble = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      if (!this.root) {
        return;
      }
      if ("on".concat(event) in this.root && typeof eventHandle === "function") {
        this.root.addEventListener(event, eventHandle, isBubble);
      }
    }
  }, {
    key: "unbindEL",
    value: function unbindEL(event, eventHandle) {
      var isBubble = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      if (!this.root) {
        return;
      }
      if ("on".concat(event) in this.root && typeof eventHandle === "function") {
        this.root.removeEventListener(event, eventHandle, isBubble);
      }
    }
  }, {
    key: "show",
    value: function show(value) {
      if (!this.root) {
        return;
      }
      this.root.style.display = value !== void 0 ? value : "block";
      var cs = window.getComputedStyle(this.root, null);
      var cssDisplayValue = cs.getPropertyValue("display");
      if (cssDisplayValue === "none") {
        return this.root.style.display = "block";
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      this.root && (this.root.style.display = "none");
    }
  }, {
    key: "appendChild",
    value: function appendChild(pdom, child) {
      if (!this.root) {
        return null;
      }
      if (arguments.length < 2 && arguments[0] instanceof window.Element) {
        return this.root.appendChild(arguments[0]);
      }
      if (!child || !(child instanceof window.Element)) {
        return null;
      }
      try {
        if (typeof pdom === "string") {
          return this.find(pdom).appendChild(child);
        } else {
          return pdom.appendChild(child);
        }
      } catch (err) {
        XG_DEBUG.logError("Plugin:appendChild", err);
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return "";
    }
  }, {
    key: "destroy",
    value: function destroy2() {
    }
  }, {
    key: "__destroy",
    value: function __destroy() {
      var _this7 = this;
      var player = this.player;
      this.__delegates.map(function(item) {
        item.destroy();
      });
      this.__delegates = [];
      if (this._children instanceof Array) {
        this._children.map(function(item) {
          player.unRegisterPlugin(item.pluginName);
        });
        this._children = null;
      }
      if (this.root) {
        if (this.root.hasOwnProperty("remove")) {
          this.root.remove();
        } else if (this.root.parentNode) {
          this.root.parentNode.removeChild(this.root);
        }
      }
      _get(_getPrototypeOf(Plugin2.prototype), "__destroy", this).call(this);
      this.icons = {};
      ["root", "parent"].map(function(item) {
        _this7[item] = null;
      });
    }
  }], [{
    key: "insert",
    value: function insert(html, parent) {
      var index = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      var len = parent.children.length;
      var insertIdx = Number(index);
      var isDomElement = html instanceof window.Node;
      if (len) {
        var i = 0;
        var coordinate = null;
        var mode = "";
        for (; i < len; i++) {
          coordinate = parent.children[i];
          var curIdx = Number(coordinate.getAttribute("data-index"));
          if (curIdx >= insertIdx) {
            mode = "beforebegin";
            break;
          } else if (curIdx < insertIdx) {
            mode = "afterend";
          }
        }
        if (isDomElement) {
          if (mode === "afterend") {
            parent.appendChild(html);
          } else {
            parent.insertBefore(html, coordinate);
          }
        } else {
          coordinate.insertAdjacentHTML(mode, html);
        }
        return mode === "afterend" ? parent.children[parent.children.length - 1] : parent.children[i];
      } else {
        isDomElement ? parent.appendChild(html) : parent.insertAdjacentHTML("beforeend", html);
        return parent.children[parent.children.length - 1];
      }
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {};
    }
  }, {
    key: "delegate",
    value: function delegate(root, querySelector, eventType, callback) {
      var capture = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
      var dels = [];
      if (root instanceof window.Node && typeof callback === "function") {
        if (Array.isArray(eventType)) {
          eventType.forEach(function(item) {
            var ret2 = (0, import_delegate.default)(root, querySelector, item, callback, capture);
            ret2.key = "".concat(querySelector, "_").concat(item);
            dels.push(ret2);
          });
        } else {
          var ret = (0, import_delegate.default)(root, querySelector, eventType, callback, capture);
          ret.key = "".concat(querySelector, "_").concat(eventType);
          dels.push(ret);
        }
      }
      return dels;
    }
  }, {
    key: "ROOT_TYPES",
    get: function get() {
      return ROOT_TYPES;
    }
  }, {
    key: "POSITIONS",
    get: function get() {
      return POSITIONS;
    }
  }]);
  return Plugin2;
}(BasePlugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugin/resizeObserver.js
var ResizeObserver = function() {
  function ResizeObserver22() {
    var _this = this;
    _classCallCheck(this, ResizeObserver22);
    _defineProperty(this, "__trigger", function(entries) {
      var t = (/* @__PURE__ */ new Date()).getTime();
      _this.timeStamp = t;
      for (var i = 0; i < entries.length; i++) {
        _this.__runHandler(entries[i].target);
      }
    });
    this.__handlers = [];
    this.timeStamp = 0;
    this.observer = null;
    if (!window.ResizeObserver) {
      return;
    }
    try {
      this.observer = new window.ResizeObserver(throttle(this.__trigger, 100, {
        trailing: true
      }));
      this.timeStamp = (/* @__PURE__ */ new Date()).getTime();
    } catch (e) {
      console.error(e);
    }
  }
  _createClass(ResizeObserver22, [{
    key: "addObserver",
    value: function addObserver22(target, handler) {
      if (!this.observer) {
        return;
      }
      this.observer.observe(target);
      var _pid = target.getAttribute(PLATER_ID);
      var __handlers = this.__handlers;
      var index = -1;
      for (var i = 0; i < __handlers.length; i++) {
        if (__handlers[i] && target === __handlers[i].target) {
          index = i;
        }
      }
      if (index > -1) {
        this.__handlers[index].handler = handler;
      } else {
        this.__handlers.push({
          target,
          handler,
          playerId: _pid
        });
      }
    }
  }, {
    key: "unObserver",
    value: function unObserver22(target) {
      var i = -1;
      this.__handlers.map(function(item, index) {
        if (target === item.target) {
          i = index;
        }
      });
      try {
        var _this$observer;
        (_this$observer = this.observer) === null || _this$observer === void 0 ? void 0 : _this$observer.unobserve(target);
      } catch (e) {
      }
      i > -1 && this.__handlers.splice(i, 1);
    }
  }, {
    key: "destroyObserver",
    value: function destroyObserver() {
      var _this$observer2;
      (_this$observer2 = this.observer) === null || _this$observer2 === void 0 ? void 0 : _this$observer2.disconnect();
      this.observer = null;
      this.__handlers = null;
    }
  }, {
    key: "__runHandler",
    value: function __runHandler(target) {
      var __handlers = this.__handlers;
      for (var i = 0; i < __handlers.length; i++) {
        if (__handlers[i] && target === __handlers[i].target) {
          try {
            __handlers[i].handler(target);
          } catch (error) {
            console.error(error);
          }
          return true;
        }
      }
      return false;
    }
  }]);
  return ResizeObserver22;
}();
var resizeObserver = null;
function addObserver(target, handler) {
  if (!resizeObserver) {
    resizeObserver = new ResizeObserver();
  }
  resizeObserver.addObserver(target, handler);
  return resizeObserver;
}
function unObserver(target, handler) {
  var _resizeObserver;
  (_resizeObserver = resizeObserver) === null || _resizeObserver === void 0 ? void 0 : _resizeObserver.unObserver(target, handler);
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugin/pluginsManager.js
var pluginsManager = {
  pluginGroup: {},
  init: function init(player) {
    var cgid = player._pluginInfoId;
    if (!cgid) {
      cgid = (/* @__PURE__ */ new Date()).getTime();
      player._pluginInfoId = cgid;
    }
    !player.config.closeResizeObserver && addObserver(player.root, function() {
      player.resize();
    });
    this.pluginGroup[cgid] = {
      _originalOptions: player.config || {},
      _plugins: {}
    };
  },
  formatPluginInfo: function formatPluginInfo(plugin, config) {
    var PLUFGIN = null;
    var options = null;
    if (plugin.plugin && typeof plugin.plugin === "function") {
      PLUFGIN = plugin.plugin;
      options = plugin.options;
    } else {
      PLUFGIN = plugin;
      options = {};
    }
    if (config) {
      options.config = config || {};
    }
    return {
      PLUFGIN,
      options
    };
  },
  checkPluginIfExits: function checkPluginIfExits(pluginName, plugins) {
    for (var i = 0; i < plugins.length; i++) {
      if (pluginName.toLowerCase() === plugins[i].pluginName.toLowerCase()) {
        return true;
      }
    }
    return false;
  },
  getRootByConfig: function getRootByConfig(pluginName, playerConfig) {
    var keys = Object.keys(playerConfig);
    var _pConfig = null;
    for (var i = 0; i < keys.length; i++) {
      if (pluginName.toLowerCase() === keys[i].toLowerCase()) {
        _pConfig = playerConfig[keys[i]];
        break;
      }
    }
    if (util.typeOf(_pConfig) === "Object") {
      return {
        root: _pConfig.root,
        position: _pConfig.position
      };
    }
    return {};
  },
  lazyRegister: function lazyRegister(player, lazyPlugin) {
    var _this = this;
    var timeout = lazyPlugin.timeout || 1500;
    return Promise.race([lazyPlugin.loader().then(function(plugin) {
      var result;
      if (plugin && plugin.__esModule) {
        result = plugin.default;
      } else {
        result = plugin;
      }
      _this.register(player, result, plugin.options);
    }), new Promise(function(resolve, reject) {
      setTimeout(function() {
        reject(new Error("timeout"));
      }, timeout);
    })]);
  },
  register: function register(player, plugin) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!player || !plugin || typeof plugin !== "function" || plugin.prototype === void 0) {
      return;
    }
    var cgid = player._pluginInfoId;
    if (!cgid || !this.pluginGroup[cgid]) {
      return;
    }
    if (!this.pluginGroup[cgid]._plugins) {
      this.pluginGroup[cgid]._plugins = {};
    }
    var plugins = this.pluginGroup[cgid]._plugins;
    var originalOptions = this.pluginGroup[cgid]._originalOptions;
    options.player = player;
    var pluginName = options.pluginName || plugin.pluginName;
    if (!pluginName) {
      throw new Error("The property pluginName is necessary");
    }
    if (plugin.isSupported && !plugin.isSupported(player.config.mediaType, player.config.codecType)) {
      console.warn("not supported plugin [".concat(pluginName, "]"));
      return;
    }
    if (!options.config) {
      options.config = {};
    }
    var keys = Object.keys(originalOptions);
    for (var i = 0; i < keys.length; i++) {
      if (pluginName.toLowerCase() === keys[i].toLowerCase()) {
        var config = originalOptions[keys[i]];
        if (util.typeOf(config) === "Object") {
          options.config = Object.assign({}, options.config, originalOptions[keys[i]]);
        } else if (util.typeOf(config) === "Boolean") {
          options.config.disable = !config;
        }
        break;
      }
    }
    if (plugin.defaultConfig) {
      Object.keys(plugin.defaultConfig).forEach(function(key) {
        if (typeof options.config[key] === "undefined") {
          options.config[key] = plugin.defaultConfig[key];
        }
      });
    }
    if (!options.root) {
      options.root = player.root;
    } else if (typeof options.root === "string") {
      options.root = player[options.root];
    }
    options.index = options.config.index || 0;
    try {
      if (plugins[pluginName.toLowerCase()]) {
        this.unRegister(cgid, pluginName.toLowerCase());
        console.warn("the is one plugin with same pluginName [".concat(pluginName, "] exist, destroy the old instance"));
      }
      var _instance = new plugin(options);
      plugins[pluginName.toLowerCase()] = _instance;
      plugins[pluginName.toLowerCase()].func = plugin;
      if (_instance && typeof _instance.afterCreate === "function") {
        _instance.afterCreate();
      }
      return _instance;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  unRegister: function unRegister(cgid, name) {
    if (cgid._pluginInfoId) {
      cgid = cgid._pluginInfoId;
    }
    name = name.toLowerCase();
    try {
      var plugin = this.pluginGroup[cgid]._plugins[name];
      if (plugin) {
        plugin.pluginName && plugin.__destroy();
        delete this.pluginGroup[cgid]._plugins[name];
      }
    } catch (e) {
      console.error("[unRegister:".concat(name, "] cgid:[").concat(cgid, "] error"), e);
    }
  },
  deletePlugin: function deletePlugin(player, name) {
    var cgid = player._pluginInfoId;
    if (cgid && this.pluginGroup[cgid] && this.pluginGroup[cgid]._plugins) {
      delete this.pluginGroup[cgid]._plugins[name];
    }
  },
  getPlugins: function getPlugins(player) {
    var cgid = player._pluginInfoId;
    return cgid && this.pluginGroup[cgid] ? this.pluginGroup[cgid]._plugins : {};
  },
  findPlugin: function findPlugin(player, name) {
    var cgid = player._pluginInfoId;
    if (!cgid || !this.pluginGroup[cgid]) {
      return null;
    }
    var cName = name.toLowerCase();
    return this.pluginGroup[cgid]._plugins[cName];
  },
  beforeInit: function beforeInit(player) {
    var _this2 = this;
    function retPromise(fun) {
      if (!fun || !fun.then) {
        return new Promise(function(resolve) {
          resolve();
        });
      } else {
        return fun;
      }
    }
    return new Promise(function(resolve) {
      if (!_this2.pluginGroup) {
        return;
      }
      var prevTask;
      if (player._loadingPlugins && player._loadingPlugins.length) {
        prevTask = Promise.all(player._loadingPlugins);
      } else {
        prevTask = Promise.resolve();
      }
      return prevTask.then(function() {
        var cgid = player._pluginInfoId;
        if (!_this2.pluginGroup[cgid]) {
          resolve();
          return;
        }
        var plugins = _this2.pluginGroup[cgid]._plugins;
        var pluginsRet = [];
        Object.keys(plugins).forEach(function(pName) {
          if (plugins[pName] && plugins[pName].beforePlayerInit) {
            try {
              var ret = plugins[pName].beforePlayerInit();
              pluginsRet.push(retPromise(ret));
            } catch (e) {
              pluginsRet.push(retPromise(null));
              throw e;
            }
          }
        });
        Promise.all([].concat(pluginsRet)).then(function() {
          resolve();
        }).catch(function(e) {
          console.error(e);
          resolve();
        });
      });
    });
  },
  afterInit: function afterInit(player) {
    var cgid = player._pluginInfoId;
    if (!cgid || !this.pluginGroup[cgid]) {
      return;
    }
    var plugins = this.pluginGroup[cgid]._plugins;
    Object.keys(plugins).forEach(function(pName) {
      if (plugins[pName] && plugins[pName].afterPlayerInit) {
        plugins[pName].afterPlayerInit();
      }
    });
  },
  setLang: function setLang(lang, player) {
    var cgid = player._pluginInfoId;
    if (!cgid || !this.pluginGroup[cgid]) {
      return;
    }
    var plugins = this.pluginGroup[cgid]._plugins;
    Object.keys(plugins).forEach(function(item) {
      if (plugins[item].updateLang) {
        plugins[item].updateLang(lang);
      } else {
        try {
          plugins[item].lang = lang;
        } catch (error) {
          console.warn("".concat(item, " setLang"));
        }
      }
    });
  },
  reRender: function reRender(player) {
    var _this3 = this;
    var cgid = player._pluginInfoId;
    if (!cgid || !this.pluginGroup[cgid]) {
      return;
    }
    var _pList = [];
    var plugins = this.pluginGroup[cgid]._plugins;
    Object.keys(plugins).forEach(function(pName) {
      if (pName !== "controls" && plugins[pName]) {
        _pList.push({
          plugin: plugins[pName].func,
          options: plugins[pName].__args
        });
        _this3.unRegister(cgid, pName);
      }
    });
    _pList.forEach(function(item) {
      _this3.register(player, item.plugin, item.options);
    });
  },
  onPluginsReady: function onPluginsReady(player) {
    var cgid = player._pluginInfoId;
    if (!cgid || !this.pluginGroup[cgid]) {
      return;
    }
    var plugins = this.pluginGroup[cgid]._plugins || {};
    Object.keys(plugins).forEach(function(key) {
      if (plugins[key].onPluginsReady && typeof plugins[key].onPluginsReady === "function") {
        plugins[key].onPluginsReady();
      }
    });
  },
  destroy: function destroy(player) {
    var cgid = player._pluginInfoId;
    if (!this.pluginGroup[cgid]) {
      return;
    }
    unObserver(player.root);
    var plugins = this.pluginGroup[cgid]._plugins;
    for (var _i = 0, _Object$keys = Object.keys(plugins); _i < _Object$keys.length; _i++) {
      var item = _Object$keys[_i];
      this.unRegister(cgid, item);
    }
    delete this.pluginGroup[cgid];
    delete player._pluginInfoId;
  }
};

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/stateClassMap.js
var STATE_CLASS = {
  DEFAULT: "xgplayer",
  DEFAULT_SKIN: "xgplayer-skin-default",
  ENTER: "xgplayer-is-enter",
  PAUSED: "xgplayer-pause",
  PLAYING: "xgplayer-playing",
  ENDED: "xgplayer-ended",
  CANPLAY: "xgplayer-canplay",
  LOADING: "xgplayer-isloading",
  ERROR: "xgplayer-is-error",
  REPLAY: "xgplayer-replay",
  NO_START: "xgplayer-nostart",
  ACTIVE: "xgplayer-active",
  INACTIVE: "xgplayer-inactive",
  FULLSCREEN: "xgplayer-is-fullscreen",
  CSS_FULLSCREEN: "xgplayer-is-cssfullscreen",
  ROTATE_FULLSCREEN: "xgplayer-rotate-fullscreen",
  PARENT_ROTATE_FULLSCREEN: "xgplayer-rotate-parent",
  PARENT_FULLSCREEN: "xgplayer-fullscreen-parent",
  INNER_FULLSCREEN: "xgplayer-fullscreen-inner",
  NO_CONTROLS: "no-controls",
  FLEX_CONTROLS: "flex-controls",
  CONTROLS_FOLLOW: "controls-follow",
  CONTROLS_AUTOHIDE: "controls-autohide",
  TOP_BAR_AUTOHIDE: "top-bar-autohide",
  NOT_ALLOW_AUTOPLAY: "not-allow-autoplay",
  SEEKING: "seeking",
  PC: "xgplayer-pc",
  MOBILE: "xgplayer-mobile",
  MINI: "xgplayer-mini"
};

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/defaultConfig.js
function getDefaultConfig() {
  return {
    id: "",
    el: null,
    url: "",
    domEventType: "default",
    nullUrlStart: false,
    width: 600,
    height: 337.5,
    fluid: false,
    fitVideoSize: "fixed",
    videoFillMode: "auto",
    volume: 0.6,
    autoplay: false,
    autoplayMuted: false,
    loop: false,
    isLive: false,
    zoom: 1,
    videoInit: true,
    poster: "",
    isMobileSimulateMode: false,
    defaultPlaybackRate: 1,
    execBeforePluginsCall: null,
    allowSeekAfterEnded: true,
    enableContextmenu: true,
    closeVideoClick: false,
    closeVideoDblclick: false,
    closePlayerBlur: false,
    closeDelayBlur: false,
    leavePlayerTime: 3e3,
    closePlayVideoFocus: false,
    closePauseVideoFocus: false,
    closeFocusVideoFocus: true,
    closeControlsBlur: true,
    topBarAutoHide: true,
    videoAttributes: {},
    startTime: 0,
    seekedStatus: "play",
    miniprogress: false,
    disableSwipeHandler: function disableSwipeHandler() {
    },
    enableSwipeHandler: function enableSwipeHandler() {
    },
    preProcessUrl: null,
    ignores: [],
    whitelist: [],
    inactive: 3e3,
    lang: getLang(),
    controls: true,
    marginControls: false,
    fullscreenTarget: null,
    screenShot: false,
    rotate: false,
    pip: false,
    download: false,
    mini: false,
    cssFullscreen: true,
    keyShortcut: true,
    presets: [],
    plugins: [],
    playbackRate: 1,
    definition: {
      list: []
    },
    playsinline: true,
    customDuration: 0,
    timeOffset: 0,
    icons: {},
    i18n: [],
    tabindex: 0,
    thumbnail: null,
    videoConfig: {},
    isHideTips: false,
    minWaitDelay: 200,
    commonStyle: {
      progressColor: "",
      playedColor: "",
      cachedColor: "",
      sliderBtnStyle: {},
      volumeColor: ""
    }
  };
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugin/preset.js
var usePreset = function usePreset2(player, Preset) {
  var _player$config$plugin, _player$config$ignore;
  var presetInst;
  if (Preset.preset && Preset.options) {
    presetInst = new Preset.preset(Preset.options, player.config);
  } else {
    presetInst = new Preset({}, player.config);
  }
  var _presetInst = presetInst, _presetInst$plugins = _presetInst.plugins, plugins = _presetInst$plugins === void 0 ? [] : _presetInst$plugins, _presetInst$ignores = _presetInst.ignores, ignores = _presetInst$ignores === void 0 ? [] : _presetInst$ignores, _presetInst$icons = _presetInst.icons, icons = _presetInst$icons === void 0 ? {} : _presetInst$icons, _presetInst$i18n = _presetInst.i18n, i18n = _presetInst$i18n === void 0 ? [] : _presetInst$i18n;
  if (!player.config.plugins) {
    player.config.plugins = [];
  }
  if (!player.config.ignores) {
    player.config.ignores = [];
  }
  (_player$config$plugin = player.config.plugins).push.apply(_player$config$plugin, _toConsumableArray(plugins));
  (_player$config$ignore = player.config.ignores).push.apply(_player$config$ignore, _toConsumableArray(ignores));
  Object.keys(icons).map(function(key) {
    if (!player.config.icons[key]) {
      player.config.icons[key] = icons[key];
    }
  });
  var _ci18n = player.config.i18n || [];
  i18n.push.apply(i18n, _toConsumableArray(_ci18n));
  player.config.i18n = i18n;
};

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/controls/index.js
var Controls = function(_Plugin) {
  _inherits(Controls2, _Plugin);
  var _super = _createSuper(Controls2);
  function Controls2() {
    var _this;
    _classCallCheck(this, Controls2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function(e) {
      var _assertThisInitialize = _assertThisInitialized(_this), player = _assertThisInitialize.player, playerConfig = _assertThisInitialize.playerConfig;
      playerConfig.closeControlsBlur && player.focus({
        autoHide: false
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function(e) {
      var _assertThisInitialize2 = _assertThisInitialized(_this), player = _assertThisInitialize2.player;
      player.focus();
    });
    return _this;
  }
  _createClass(Controls2, [{
    key: "beforeCreate",
    value: function beforeCreate(args) {
      if (!args.config.mode && sniffer.device === "mobile") {
        args.config.mode = "flex";
      }
      if (args.player.config.marginControls) {
        args.config.autoHide = false;
      }
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      var _this$config = this.config, disable = _this$config.disable, height = _this$config.height, mode = _this$config.mode;
      if (disable) {
        return;
      }
      mode === "flex" && this.player.addClass(STATE_CLASS.FLEX_CONTROLS);
      var style = {
        height: "".concat(height, "px")
      };
      Object.keys(style).map(function(key) {
        _this2.root.style[key] = style[key];
      });
      this.left = this.find("xg-left-grid");
      this.center = this.find("xg-center-grid");
      this.right = this.find("xg-right-grid");
      this.innerRoot = this.find("xg-inner-controls");
      this.on(MINI_STATE_CHANGE, function(isMini) {
        isMini ? util.addClass(_this2.root, "mini-controls") : util.removeClass(_this2.root, "mini-controls");
      });
      var isMobileSimulateMode = this.playerConfig.isMobileSimulateMode;
      if (sniffer.device !== "mobile" && isMobileSimulateMode !== "mobile") {
        this.bind("mouseenter", this.onMouseEnter);
        this.bind("mouseleave", this.onMouseLeave);
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this.player.focus({
        autoHide: false
      });
    }
  }, {
    key: "focusAwhile",
    value: function focusAwhile() {
      this.player.focus({
        autoHide: true
      });
    }
  }, {
    key: "blur",
    value: function blur() {
      this.player.blur({
        ignorePaused: true
      });
    }
  }, {
    key: "recoverAutoHide",
    value: function recoverAutoHide() {
      this.config.autoHide && util.addClass(this.root, STATE_CLASS.CONTROLS_AUTOHIDE);
    }
  }, {
    key: "pauseAutoHide",
    value: function pauseAutoHide() {
      util.removeClass(this.root, STATE_CLASS.CONTROLS_AUTOHIDE);
    }
  }, {
    key: "show",
    value: function show(value) {
      this.root.style.display = "";
      this.player.focus();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.root.style.display = "none";
    }
  }, {
    key: "mode",
    get: function get() {
      return this.config.mode;
    }
  }, {
    key: "registerPlugin",
    value: function registerPlugin(plugin) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var name = arguments.length > 2 ? arguments[2] : void 0;
      if (!this.root) {
        return;
      }
      var defaultConfig = plugin.defaultConfig || {};
      if (!options.root) {
        var position = options.position ? options.position : options.config && options.config.position ? options.config.position : defaultConfig.position;
        switch (position) {
          case POSITIONS.CONTROLS_LEFT:
            options.root = this.left;
            break;
          case POSITIONS.CONTROLS_RIGHT:
            options.root = this.right;
            break;
          case POSITIONS.CONTROLS_CENTER:
            options.root = this.center;
            break;
          case POSITIONS.CONTROLS:
            options.root = this.root;
            break;
          default:
            options.root = this.left;
        }
        return _get(_getPrototypeOf(Controls2.prototype), "registerPlugin", this).call(this, plugin, options, name);
      }
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      if (sniffer.device !== "mobile") {
        this.unbind("mouseenter", this.onMouseEnter);
        this.unbind("mouseleave", this.onMouseLeave);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$config2 = this.config, mode = _this$config2.mode, autoHide = _this$config2.autoHide, initShow = _this$config2.initShow, disable = _this$config2.disable;
      if (disable) {
        return;
      }
      var className = util.classNames({
        "xgplayer-controls": true
      }, {
        "flex-controls": mode === "flex"
      }, {
        "bottom-controls": mode === "bottom"
      }, _defineProperty({}, STATE_CLASS.CONTROLS_AUTOHIDE, autoHide), {
        "xgplayer-controls-initshow": initShow || !autoHide
      });
      return '<xg-controls class="'.concat(className, '" unselectable="on">\n    <xg-inner-controls class="xg-inner-controls xg-pos">\n      <xg-left-grid class="xg-left-grid">\n      </xg-left-grid>\n      <xg-center-grid class="xg-center-grid"></xg-center-grid>\n      <xg-right-grid class="xg-right-grid">\n      </xg-right-grid>\n    </xg-inner-controls>\n    </xg-controls>');
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "controls";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        disable: false,
        autoHide: true,
        mode: "",
        initShow: false
      };
    }
  }]);
  return Controls2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/lang/en.js
var EN = {
  LANG: "en",
  TEXT: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "video download error"
      },
      mse: {
        code: 2,
        msg: "stream append error"
      },
      parse: {
        code: 3,
        msg: "parsing error"
      },
      format: {
        code: 4,
        msg: "wrong format"
      },
      decoder: {
        code: 5,
        msg: "decoding error"
      },
      runtime: {
        code: 6,
        msg: "grammatical errors"
      },
      timeout: {
        code: 7,
        msg: "play timeout"
      },
      other: {
        code: 8,
        msg: "other errors"
      }
    },
    HAVE_NOTHING: "There is no information on whether audio/video is ready",
    HAVE_METADATA: "Audio/video metadata is ready ",
    HAVE_CURRENT_DATA: "Data about the current play location is available, but there is not enough data to play the next frame/millisecond",
    HAVE_FUTURE_DATA: "Current and at least one frame of data is available",
    HAVE_ENOUGH_DATA: "The available data is sufficient to start playing",
    NETWORK_EMPTY: "Audio/video has not been initialized",
    NETWORK_IDLE: "Audio/video is active and has been selected for resources, but no network is used",
    NETWORK_LOADING: "The browser is downloading the data",
    NETWORK_NO_SOURCE: "No audio/video source was found",
    MEDIA_ERR_ABORTED: "The fetch process is aborted by the user",
    MEDIA_ERR_NETWORK: "An error occurred while downloading",
    MEDIA_ERR_DECODE: "An error occurred while decoding",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/video is not supported",
    REPLAY: "Replay",
    ERROR: "Network is offline",
    PLAY_TIPS: "Play",
    PAUSE_TIPS: "Pause",
    PLAYNEXT_TIPS: "Play next",
    DOWNLOAD_TIPS: "Download",
    ROTATE_TIPS: "Rotate",
    RELOAD_TIPS: "Reload",
    FULLSCREEN_TIPS: "Fullscreen",
    EXITFULLSCREEN_TIPS: "Exit fullscreen",
    CSSFULLSCREEN_TIPS: "Cssfullscreen",
    EXITCSSFULLSCREEN_TIPS: "Exit cssfullscreen",
    TEXTTRACK: "Caption",
    PIP: "PIP",
    SCREENSHOT: "Screenshot",
    LIVE: "LIVE",
    OFF: "Off",
    OPEN: "Open",
    MINI_DRAG: "Click and hold to drag",
    MINISCREEN: "Miniscreen",
    REFRESH_TIPS: "Please Try",
    REFRESH: "Refresh",
    FORWARD: "forward",
    LIVE_TIP: "Live"
  }
};

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/lang/i18n.js
var XGI18nLang = {
  lang: {},
  langKeys: [],
  textKeys: []
};
function deepMerge(dst, src) {
  Object.keys(src).forEach(function(key) {
    var _s = util.typeOf(src[key]);
    var _t = util.typeOf(dst[key]);
    if (_s === "Array") {
      var _dst$key;
      if (_t !== "Array") {
        dst[key] = [];
      }
      (_dst$key = dst[key]).push.apply(_dst$key, _toConsumableArray(src[key]));
    } else if (_s === "Object") {
      if (_t !== "Object") {
        dst[key] = {};
      }
      deepMerge(dst[key], src[key]);
    } else {
      dst[key] = src[key];
    }
  });
  return dst;
}
function updateKeys() {
  Object.keys(XGI18nLang.lang.en).map(function(key) {
    XGI18nLang.textKeys[key] = key;
  });
}
function extend(i18nTextList, i18nLangs) {
  var ext = [];
  if (!i18nLangs) {
    i18nLangs = XGI18nLang;
  }
  if (!i18nLangs.lang) {
    return;
  }
  if (util.typeOf(i18nTextList) !== "Array") {
    ext = Object.keys(i18nTextList).map(function(lang2) {
      var keyLang = lang2 === "zh" ? "zh-cn" : lang2;
      return {
        LANG: keyLang,
        TEXT: i18nTextList[lang2]
      };
    });
  } else {
    ext = i18nTextList;
  }
  var _i18nLangs = i18nLangs, lang = _i18nLangs.lang;
  ext.map(function(item) {
    if (item.LANG === "zh") {
      item.LANG = "zh-cn";
    }
    if (!lang[item.LANG]) {
      use(item, i18nLangs);
    } else {
      deepMerge(lang[item.LANG] || {}, item.TEXT || {});
    }
  });
  updateKeys();
}
function use(langData, i18nLangs) {
  var _clang = langData.LANG;
  if (!i18nLangs) {
    i18nLangs = XGI18nLang;
  }
  if (!i18nLangs.lang) {
    return;
  }
  var texts = langData.TEXT || {};
  if (_clang === "zh") {
    _clang = "zh-cn";
  }
  if (!i18nLangs.lang[_clang]) {
    i18nLangs.langKeys.push(_clang);
    i18nLangs.lang[_clang] = texts;
  } else {
    deepMerge(i18nLangs.lang[_clang], texts);
  }
  updateKeys();
}
function init2(id) {
  var _ret$langKeys;
  var ret = {
    lang: {},
    langKeys: [],
    textKeys: {},
    pId: id
  };
  deepMerge(ret.lang, XGI18nLang.lang);
  (_ret$langKeys = ret.langKeys).push.apply(_ret$langKeys, _toConsumableArray(XGI18nLang.langKeys));
  deepMerge(ret.textKeys, XGI18nLang.textKeys);
  return ret;
}
use(EN);
var I18N = {
  get textKeys() {
    return XGI18nLang.textKeys;
  },
  get langKeys() {
    return XGI18nLang.langKeys;
  },
  get lang() {
    var ret = {};
    XGI18nLang.langKeys.map(function(key) {
      ret[key] = XGI18nLang.lang[key];
    });
    if (XGI18nLang.lang["zh-cn"]) {
      ret.zh = XGI18nLang.lang["zh-cn"] || {};
    }
    return ret;
  },
  extend,
  use,
  init: init2
};

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/state.js
var STATES = {
  INITIAL: 1,
  READY: 2,
  ATTACHING: 3,
  ATTACHED: 4,
  NOTALLOW: 5,
  RUNNING: 6,
  ENDED: 7,
  DESTROYED: 8
};
var STATE_ARRAY = ["ERROR", "INITIAL", "READY", "ATTACHING", "ATTACHED", "NOTALLOW", "RUNNING", "ENDED", "DESTROYED"];

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/instManager.js
var import_eventemitter32 = __toESM(require_eventemitter3());
var store = {};
var instance = null;
var InstManager = function(_EventEmitter) {
  _inherits(InstManager2, _EventEmitter);
  var _super = _createSuper(InstManager2);
  function InstManager2() {
    _classCallCheck(this, InstManager2);
    return _super.apply(this, arguments);
  }
  _createClass(InstManager2, [{
    key: "add",
    value: function add(player) {
      if (!player) {
        return;
      }
      store[player.playerId] = player;
      if (Object.keys(store).length === 1) {
        this.setActive(player.playerId, true);
      }
    }
  }, {
    key: "remove",
    value: function remove(player) {
      if (!player) {
        return;
      }
      player.isUserActive;
      delete store[player.playerId];
    }
  }, {
    key: "_iterate",
    value: function _iterate(fn) {
      var endEarly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      for (var key in store) {
        if (Object.prototype.hasOwnProperty.call(store, key)) {
          var player = store[key];
          if (endEarly) {
            if (fn(player)) {
              break;
            }
          } else {
            fn(player);
          }
        }
      }
    }
  }, {
    key: "forEach",
    value: function forEach(fn) {
      this._iterate(fn);
    }
  }, {
    key: "find",
    value: function find(fn) {
      var result = null;
      this._iterate(function(player) {
        var flag = fn(player);
        if (flag) {
          result = player;
        }
        return flag;
      }, true);
      return result;
    }
  }, {
    key: "findAll",
    value: function findAll(fn) {
      var results = [];
      this._iterate(function(player) {
        if (fn(player)) {
          results.push(player);
        }
      });
      return results;
    }
  }, {
    key: "setActive",
    value: function setActive(playerId) {
      var isActive = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      if (!store[playerId]) {
        return;
      }
      if (isActive) {
        this.forEach(function(inst) {
          if (playerId === inst.playerId) {
            inst.isUserActive = true;
            inst.isInstNext = false;
          } else {
            inst.isUserActive = false;
          }
        });
      } else {
        store[playerId].isUserActive = isActive;
      }
      return playerId;
    }
  }, {
    key: "getActiveId",
    value: function getActiveId() {
      var keys = Object.keys(store);
      for (var i = 0; i < keys.length; i++) {
        var c = store[keys[i]];
        if (c && c.isUserActive) {
          return keys[i];
        }
      }
      return null;
    }
  }, {
    key: "setNext",
    value: function setNext(playerId) {
      var isNext = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      if (!store[playerId]) {
        return;
      }
      if (isNext) {
        this.forEach(function(inst) {
          if (playerId === inst.playerId) {
            inst.isUserActive = false;
            inst.isInstNext = true;
          } else {
            inst.isInstNext = false;
          }
        });
      } else {
        store[playerId].isInstNext = isNext;
      }
      return playerId;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      instance || (instance = new InstManager2());
      return instance;
    }
  }]);
  return InstManager2;
}(import_eventemitter32.EventEmitter);
function checkPlayerRoot(root) {
  var keys = Object.keys(store);
  for (var i = 0; i < keys.length; i++) {
    var p = store[keys[i]];
    if (p.root === root) {
      return p;
    }
  }
  return null;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/player.js
var PlAYER_HOOKS = ["play", "pause", "replay", "retry"];
var REAL_TIME_SPEED = 0;
var AVG_SPEED = 0;
var instManager = null;
var Player = function(_MediaProxy) {
  _inherits(Player2, _MediaProxy);
  var _super = _createSuper(Player2);
  function Player2(options) {
    var _this;
    _classCallCheck(this, Player2);
    var _config = util.deepMerge(getDefaultConfig(), options);
    _this = _super.call(this, _config);
    _defineProperty(_assertThisInitialized(_this), "canPlayFunc", function() {
      if (!_this.config) {
        return;
      }
      var _this$config = _this.config, autoplay = _this$config.autoplay, defaultPlaybackRate = _this$config.defaultPlaybackRate;
      XG_DEBUG.logInfo("player", "canPlayFunc, startTime", _this.__startTime);
      _this._seekToStartTime();
      _this.playbackRate = defaultPlaybackRate;
      (autoplay || _this._useAutoplay) && _this.mediaPlay();
      _this.off(CANPLAY, _this.canPlayFunc);
      _this.removeClass(STATE_CLASS.ENTER);
    });
    _defineProperty(_assertThisInitialized(_this), "onFullscreenChange", function(event, isFullScreen) {
      var delayResize = function delayResize2() {
        util.setTimeout(_assertThisInitialized(_this), function() {
          _this.resize();
        }, 100);
      };
      var fullEl = util.getFullScreenEl();
      if (_this._fullActionFrom) {
        _this._fullActionFrom = "";
      } else {
        _this.emit(USER_ACTION, {
          eventType: "system",
          action: "switch_fullscreen",
          pluginName: "player",
          currentTime: _this.currentTime,
          duration: _this.duration,
          props: [{
            prop: "fullscreen",
            from: true,
            to: false
          }]
        });
      }
      var isVideo = checkIsCurrentVideo(fullEl, _this.playerId, PLATER_ID);
      if (isFullScreen || fullEl && (fullEl === _this._fullscreenEl || isVideo)) {
        delayResize();
        !_this.config.closeFocusVideoFocus && _this.media.focus();
        _this.fullscreen = true;
        _this.changeFullStyle(_this.root, fullEl, STATE_CLASS.FULLSCREEN);
        _this.emit(FULLSCREEN_CHANGE, true, _this._fullScreenOffset);
        if (_this.cssfullscreen) {
          _this.exitCssFullscreen();
        }
      } else if (_this.fullscreen) {
        delayResize();
        var _assertThisInitialize = _assertThisInitialized(_this), _fullScreenOffset = _assertThisInitialize._fullScreenOffset, config = _assertThisInitialize.config;
        if (config.needFullscreenScroll) {
          window.scrollTo(_fullScreenOffset.left, _fullScreenOffset.top);
          util.setTimeout(_assertThisInitialized(_this), function() {
            _this.fullscreen = false;
            _this._fullScreenOffset = null;
          }, 100);
        } else {
          !_this.config.closeFocusVideoFocus && _this.media.focus();
          _this.fullscreen = false;
          _this._fullScreenOffset = null;
        }
        if (!_this.cssfullscreen) {
          var el = _this._fullscreenEl;
          if (!el && (_this.root.contains(event.target) || event.target === _this.root)) {
            el = event.target;
          }
          _this.recoverFullStyle(_this.root, el, STATE_CLASS.FULLSCREEN);
        } else {
          _this.removeClass(STATE_CLASS.FULLSCREEN);
        }
        _this._fullscreenEl = null;
        _this.emit(FULLSCREEN_CHANGE, false);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_onWebkitbeginfullscreen", function(e) {
      _this._fullscreenEl = _this.media;
      _this.onFullscreenChange(e, true);
    });
    _defineProperty(_assertThisInitialized(_this), "_onWebkitendfullscreen", function(e) {
      _this.onFullscreenChange(e, false);
    });
    hooksDescriptor(_assertThisInitialized(_this), PlAYER_HOOKS);
    _this.config = _config;
    _this._pluginInfoId = util.generateSessionId();
    bindDebug(_assertThisInitialized(_this));
    var defaultPreset = _this.constructor.defaultPreset;
    if (_this.config.presets.length) {
      var defaultIdx = _this.config.presets.indexOf("default");
      if (defaultIdx >= 0 && defaultPreset) {
        _this.config.presets[defaultIdx] = defaultPreset;
      }
    } else if (defaultPreset) {
      _this.config.presets.push(defaultPreset);
    }
    _this.userTimer = null;
    _this.waitTimer = null;
    _this.handleSource = true;
    _this._state = STATES.INITIAL;
    _this.isAd = false;
    _this.isError = false;
    _this._hasStart = false;
    _this.isSeeking = false;
    _this.isCanplay = false;
    _this._useAutoplay = false;
    _this.__startTime = -1;
    _this.rotateDeg = 0;
    _this.isActive = false;
    _this.fullscreen = false;
    _this.cssfullscreen = false;
    _this.isRotateFullscreen = false;
    _this._fullscreenEl = null;
    _this.timeSegments = [];
    _this._cssfullscreenEl = null;
    _this.curDefinition = null;
    _this._orgCss = "";
    _this._fullScreenOffset = null;
    _this._videoHeight = 0;
    _this._videoWidth = 0;
    _this.videoPos = {
      pi: 1,
      scale: 0,
      rotate: -1,
      x: 0,
      y: 0,
      h: -1,
      w: -1,
      vy: 0,
      vx: 0
    };
    _this.sizeInfo = {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    _this._accPlayed = {
      t: 0,
      acc: 0,
      loopAcc: 0
    };
    _this._offsetInfo = {
      currentTime: -1,
      duration: 0
    };
    _this.innerContainer = null;
    _this.controls = null;
    _this.topBar = null;
    _this.root = null;
    _this.__i18n = I18N.init(_this._pluginInfoId);
    if (sniffer.os.isAndroid && sniffer.osVersion > 0 && sniffer.osVersion < 6) {
      _this.config.autoplay = false;
    }
    _this.database = new INDEXDB();
    _this.isUserActive = false;
    _this._onceSeekCanplay = null;
    _this._isPauseBeforeSeek = 0;
    _this.innerStates = {
      isActiveLocked: false
    };
    _this.instManager = instManager;
    var rootInit = _this._initDOM();
    if (!rootInit) {
      console.error(new Error("can't find the dom which id is ".concat(_this.config.id, " or this.config.el does not exist")));
      return _possibleConstructorReturn(_this);
    }
    var _this$config2 = _this.config, _this$config2$definit = _this$config2.definition, definition = _this$config2$definit === void 0 ? {} : _this$config2$definit, url = _this$config2.url;
    if (!url && definition.list && definition.list.length > 0) {
      var defaultDefinitionObj = definition.list.find(function(e) {
        return e.definition && e.definition === definition.defaultDefinition;
      });
      if (!defaultDefinitionObj) {
        definition.defaultDefinition = definition.list[0].definition;
        defaultDefinitionObj = definition.list[0];
      }
      _this.config.url = defaultDefinitionObj.url;
      _this.curDefinition = defaultDefinitionObj;
    }
    _this._bindEvents();
    _this._registerPresets();
    _this._registerPlugins();
    pluginsManager.onPluginsReady(_assertThisInitialized(_this));
    _this.getInitDefinition();
    _this.setState(STATES.READY);
    util.setTimeout(_assertThisInitialized(_this), function() {
      _this.emit(READY);
    }, 0);
    _this.onReady && _this.onReady();
    if (_this.config.videoInit || _this.config.autoplay) {
      if (!_this.hasStart || _this.state < STATES.ATTACHED) {
        _this.start();
      }
    }
    return _this;
  }
  _createClass(Player2, [{
    key: "_initDOM",
    value: function _initDOM() {
      var _instManager, _this2 = this;
      this.root = this.config.id ? document.getElementById(this.config.id) : null;
      if (!this.root) {
        var el = this.config.el;
        if (el && el.nodeType === 1) {
          this.root = el;
        } else {
          this.emit(ERROR, new Errors("use", this.config.vid, {
            line: 32,
            handle: "Constructor",
            msg: "container id can't be empty"
          }));
          console.error("this.confg.id or this.config.el can't be empty");
          return false;
        }
      }
      var ret = checkPlayerRoot(this.root);
      if (ret) {
        XG_DEBUG.logWarn("The is an Player instance already exists in this.root, destroy it and reinitialize");
        ret.destroy();
      }
      this.root.setAttribute(PLATER_ID, this.playerId);
      (_instManager = instManager) === null || _instManager === void 0 ? void 0 : _instManager.add(this);
      pluginsManager.init(this);
      this._initBaseDoms();
      var XgVideoProxy = this.constructor.XgVideoProxy;
      if (XgVideoProxy && this.mediaConfig.mediaType === XgVideoProxy.mediaType) {
        var _el = this.innerContainer || this.root;
        this.detachVideoEvents(this.media);
        var _nVideo = new XgVideoProxy(_el, this.config, this.mediaConfig);
        this.attachVideoEvents(_nVideo);
        this.media = _nVideo;
      }
      this.media.setAttribute(PLATER_ID, this.playerId);
      if (this.config.controls) {
        var _root = this.config.controls.root || null;
        var controls = pluginsManager.register(this, Controls, {
          root: _root
        });
        this.controls = controls;
      }
      var device = this.config.isMobileSimulateMode === "mobile" ? "mobile" : sniffer.device;
      this.addClass("".concat(STATE_CLASS.DEFAULT, " ").concat(STATE_CLASS.INACTIVE, " xgplayer-").concat(device, " ").concat(this.config.controls ? "" : STATE_CLASS.NO_CONTROLS));
      if (this.config.autoplay) {
        this.addClass(STATE_CLASS.ENTER);
      } else {
        this.addClass(STATE_CLASS.NO_START);
      }
      if (this.config.fluid) {
        var _this$config3 = this.config, _width = _this$config3.width, _height = _this$config3.height;
        if (typeof _width !== "number" || typeof _height !== "number") {
          _width = 600;
          _height = 337.5;
        }
        var style = {
          width: "100%",
          height: "0",
          "max-width": "100%",
          "padding-top": "".concat(_height * 100 / _width, "%")
        };
        Object.keys(style).forEach(function(key) {
          _this2.root.style[key] = style[key];
        });
      } else {
        ["width", "height"].forEach(function(key) {
          if (_this2.config[key]) {
            if (typeof _this2.config[key] !== "number") {
              _this2.root.style[key] = _this2.config[key];
            } else {
              _this2.root.style[key] = "".concat(_this2.config[key], "px");
            }
          }
        });
      }
      var _this$root$getBoundin = this.root.getBoundingClientRect(), width = _this$root$getBoundin.width, height = _this$root$getBoundin.height, left = _this$root$getBoundin.left, top = _this$root$getBoundin.top;
      this.sizeInfo.width = width;
      this.sizeInfo.height = height;
      this.sizeInfo.left = left;
      this.sizeInfo.top = top;
      return true;
    }
  }, {
    key: "_initBaseDoms",
    value: function _initBaseDoms() {
      this.topBar = null;
      this.leftBar = null;
      this.rightBar = null;
      if (this.config.marginControls) {
        this.innerContainer = util.createDom("xg-video-container", "", {
          "data-index": -1
        }, "xg-video-container");
        this.root.appendChild(this.innerContainer);
      }
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      var _this3 = this;
      ["focus", "blur"].forEach(function(item) {
        _this3.on(item, _this3["on" + item.charAt(0).toUpperCase() + item.slice(1)]);
      });
      FULLSCREEN_EVENTS.forEach(function(item) {
        document && document.addEventListener(item, _this3.onFullscreenChange);
      });
      if (sniffer.os.isIos) {
        this.media.addEventListener("webkitbeginfullscreen", this._onWebkitbeginfullscreen);
        this.media.addEventListener("webkitendfullscreen", this._onWebkitendfullscreen);
      }
      this.once(LOADED_DATA, this.resize);
      this.playFunc = function() {
        if (!_this3.config.closeFocusVideoFocus) {
          _this3.media.focus();
        }
      };
      this.once(PLAY, this.playFunc);
    }
  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      var _this4 = this;
      this.root.removeEventListener("mousemove", this.mousemoveFunc);
      FULLSCREEN_EVENTS.forEach(function(item) {
        document.removeEventListener(item, _this4.onFullscreenChange);
      });
      this.playFunc && this.off(PLAY, this.playFunc);
      this.off(CANPLAY, this.canPlayFunc);
      this.media.removeEventListener("webkitbeginfullscreen", this._onWebkitbeginfullscreen);
      this.media.removeEventListener("webkitendfullscreen", this._onWebkitendfullscreen);
    }
  }, {
    key: "_clearUserTimer",
    value: function _clearUserTimer() {
      if (!this.userTimer) {
        return;
      }
      util.clearTimeout(this, this.userTimer);
      this.userTimer = null;
    }
  }, {
    key: "_startInit",
    value: function _startInit(url) {
      var _this5 = this;
      if (!this.media) {
        return;
      }
      if (!url || url === "" || util.typeOf(url) === "Array" && url.length === 0) {
        url = "";
        this.emit(URL_NULL);
        XG_DEBUG.logWarn("config.url is null, please get url and run player._startInit(url)");
        if (this.config.nullUrlStart) {
          return;
        }
      }
      if (this.handleSource) {
        this._detachSourceEvents(this.media);
        if (util.typeOf(url) === "Array" && url.length > 0) {
          this._attachSourceEvents(this.media, url);
        } else if (!this.media.src || this.media.src !== url) {
          this.media.src = url;
        } else if (!url) {
          this.media.removeAttribute("src");
        }
      }
      if (util.typeOf(this.config.volume) === "Number") {
        this.volume = this.config.volume;
      }
      var _root = this.innerContainer ? this.innerContainer : this.root;
      if (this.media instanceof window.Element && !_root.contains(this.media)) {
        _root.insertBefore(this.media, _root.firstChild);
      }
      var readyState = this.media.readyState;
      XG_DEBUG.logInfo("_startInit readyState", readyState);
      if (this.config.autoplay) {
        !util.isMSE(this.media) && this.load();
        (sniffer.os.isIpad || sniffer.os.isPhone) && this.mediaPlay();
      }
      var startTime = this.config.startTime;
      this.__startTime = startTime > 0 ? startTime : -1;
      this.config.startTime = 0;
      if (readyState >= 2 && this.duration > 0) {
        this.canPlayFunc();
      } else {
        this.on(CANPLAY, this.canPlayFunc);
      }
      if (!this.hasStart || this.state < STATES.ATTACHED) {
        pluginsManager.afterInit(this);
      }
      this.hasStart = true;
      this.setState(STATES.ATTACHED);
      util.setTimeout(this, function() {
        _this5.emit(COMPLETE);
      }, 0);
    }
  }, {
    key: "_registerPlugins",
    value: function _registerPlugins() {
      var _this6 = this;
      var isInit = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      this._loadingPlugins = [];
      var ignores = this.config.ignores || [];
      var plugins = this.config.plugins || [];
      var i18n = this.config.i18n || [];
      isInit && I18N.extend(i18n, this.__i18n);
      var ignoresStr = ignores.join("||").toLowerCase().split("||");
      var cuPlugins = this.plugins;
      plugins.forEach(function(plugin) {
        try {
          var pluginName = plugin.plugin ? plugin.plugin.pluginName : plugin.pluginName;
          if (pluginName && ignoresStr.indexOf(pluginName.toLowerCase()) > -1) {
            return null;
          }
          if (!isInit && cuPlugins[pluginName.toLowerCase()]) {
            return;
          }
          if (plugin.lazy && plugin.loader) {
            var loadingPlugin = pluginsManager.lazyRegister(_this6, plugin);
            if (plugin.forceBeforeInit) {
              loadingPlugin.then(function() {
                _this6._loadingPlugins.splice(_this6._loadingPlugins.indexOf(loadingPlugin), 1);
              }).catch(function(e) {
                XG_DEBUG.logError("_registerPlugins:loadingPlugin", e);
                _this6._loadingPlugins.splice(_this6._loadingPlugins.indexOf(loadingPlugin), 1);
              });
              _this6._loadingPlugins.push(loadingPlugin);
            }
            return;
          }
          return _this6.registerPlugin(plugin);
        } catch (err) {
          XG_DEBUG.logError("_registerPlugins:", err);
        }
      });
    }
  }, {
    key: "_registerPresets",
    value: function _registerPresets() {
      var _this7 = this;
      this.config.presets.forEach(function(preset) {
        usePreset(_this7, preset);
      });
    }
  }, {
    key: "_getRootByPosition",
    value: function _getRootByPosition(position) {
      var _root = null;
      switch (position) {
        case POSITIONS.ROOT_RIGHT:
          if (!this.rightBar) {
            this.rightBar = util.createPositionBar("xg-right-bar", this.root);
          }
          _root = this.rightBar;
          break;
        case POSITIONS.ROOT_LEFT:
          if (!this.leftBar) {
            this.leftBar = util.createPositionBar("xg-left-bar", this.root);
          }
          _root = this.leftBar;
          break;
        case POSITIONS.ROOT_TOP:
          if (!this.topBar) {
            this.topBar = util.createPositionBar("xg-top-bar", this.root);
            if (this.config.topBarAutoHide) {
              util.addClass(this.topBar, STATE_CLASS.TOP_BAR_AUTOHIDE);
            }
          }
          _root = this.topBar;
          break;
        default:
          _root = this.innerContainer || this.root;
          break;
      }
      return _root;
    }
  }, {
    key: "registerPlugin",
    value: function registerPlugin(plugin, config) {
      var _retPlugin = pluginsManager.formatPluginInfo(plugin, config);
      var PLUFGIN = _retPlugin.PLUFGIN, options = _retPlugin.options;
      var plugins = this.config.plugins;
      var exits = pluginsManager.checkPluginIfExits(PLUFGIN.pluginName, plugins);
      !exits && plugins.push(PLUFGIN);
      var _pConfig = pluginsManager.getRootByConfig(PLUFGIN.pluginName, this.config);
      _pConfig.root && (options.root = _pConfig.root);
      _pConfig.position && (options.position = _pConfig.position);
      var position = options.position ? options.position : options.config && options.config.position || PLUFGIN.defaultConfig && PLUFGIN.defaultConfig.position;
      if (!options.root && typeof position === "string" && position.indexOf("controls") > -1) {
        var _this$controls;
        return (_this$controls = this.controls) === null || _this$controls === void 0 ? void 0 : _this$controls.registerPlugin(PLUFGIN, options, PLUFGIN.pluginName);
      }
      if (!options.root) {
        options.root = this._getRootByPosition(position);
      }
      return pluginsManager.register(this, PLUFGIN, options);
    }
  }, {
    key: "deregister",
    value: function deregister(plugin) {
      if (typeof plugin === "string") {
        pluginsManager.unRegister(this, plugin);
      } else if (plugin instanceof BasePlugin) {
        pluginsManager.unRegister(this, plugin.pluginName);
      }
    }
  }, {
    key: "unRegisterPlugin",
    value: function unRegisterPlugin(plugin) {
      var removedFromConfig = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      this.deregister(plugin);
      if (removedFromConfig) {
        this.removePluginFromConfig(plugin);
      }
    }
  }, {
    key: "removePluginFromConfig",
    value: function removePluginFromConfig(plugin) {
      var pluginName;
      if (typeof plugin === "string") {
        pluginName = plugin;
      } else if (plugin instanceof BasePlugin) {
        pluginName = plugin.pluginName;
      }
      if (!pluginName) {
        return;
      }
      for (var i = this.config.plugins.length - 1; i > -1; i--) {
        var _plugin = this.config.plugins[i];
        if (_plugin.pluginName.toLowerCase() === pluginName.toLowerCase()) {
          this.config.plugins.splice(i, 1);
          break;
        }
      }
    }
  }, {
    key: "plugins",
    get: function get() {
      return pluginsManager.getPlugins(this);
    }
  }, {
    key: "getPlugin",
    value: function getPlugin(pluginName) {
      var plugin = pluginsManager.findPlugin(this, pluginName);
      return plugin && plugin.pluginName ? plugin : null;
    }
  }, {
    key: "addClass",
    value: function addClass2(className) {
      if (!this.root) {
        return;
      }
      if (!util.hasClass(this.root, className)) {
        util.addClass(this.root, className);
      }
    }
  }, {
    key: "removeClass",
    value: function removeClass2(className) {
      if (!this.root) {
        return;
      }
      util.removeClass(this.root, className);
    }
  }, {
    key: "hasClass",
    value: function hasClass2(className) {
      if (!this.root) {
        return;
      }
      return util.hasClass(this.root, className);
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(key, value) {
      if (!this.root) {
        return;
      }
      this.root.setAttribute(key, value);
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(key, value) {
      if (!this.root) {
        return;
      }
      this.root.removeAttribute(key, value);
    }
  }, {
    key: "start",
    value: function start(url) {
      var _this8 = this;
      if (this.state > STATES.ATTACHING) {
        return;
      }
      if (!url && !this.config.url) {
        this.getInitDefinition();
      }
      this.hasStart = true;
      this.setState(STATES.ATTACHING);
      this._registerPlugins(false);
      return pluginsManager.beforeInit(this).then(function() {
        if (!_this8.config) {
          return;
        }
        if (!url) {
          url = _this8.url || _this8.config.url;
        }
        var _furl = _this8._preProcessUrl(url);
        var ret = _this8._startInit(_furl.url);
        return ret;
      }).catch(function(e) {
        e.fileName = "player";
        e.lineNumber = "236";
        XG_DEBUG.logError("start:beforeInit:", e);
        throw e;
      });
    }
  }, {
    key: "switchURL",
    value: function switchURL(url, options) {
      var _this9 = this;
      var _src = url;
      if (util.typeOf(url) === "Object") {
        _src = url.url;
      }
      _src = this._preProcessUrl(_src).url;
      var curTime = this.currentTime;
      this.__startTime = curTime;
      var isPaused = this.paused && !this.isError;
      this.src = _src;
      return new Promise(function(resolve, reject) {
        var _error = function _error2(e) {
          _this9.off("timeupdate", _canplay);
          _this9.off("canplay", _canplay);
          reject(e);
        };
        var _canplay = function _canplay2() {
          _this9._seekToStartTime();
          if (isPaused) {
            _this9.pause();
          }
          _this9.off("error", _error);
          resolve(true);
        };
        _this9.once("error", _error);
        if (!_src) {
          _this9.errorHandler("error", {
            code: 6,
            message: "empty_src"
          });
          return;
        }
        if (sniffer.os.isAndroid) {
          _this9.once("timeupdate", _canplay);
        } else {
          _this9.once("canplay", _canplay);
        }
        _this9.play();
      });
    }
  }, {
    key: "videoPlay",
    value: function videoPlay() {
      this.mediaPlay();
    }
  }, {
    key: "mediaPlay",
    value: function mediaPlay() {
      var _this10 = this;
      if (!this.hasStart && this.state < STATES.ATTACHED) {
        this.removeClass(STATE_CLASS.NO_START);
        this.addClass(STATE_CLASS.ENTER);
        this.start();
        this._useAutoplay = true;
        return;
      }
      if (this.state < STATES.RUNNING) {
        this.removeClass(STATE_CLASS.NO_START);
        !this.isCanplay && this.addClass(STATE_CLASS.ENTER);
      }
      var playPromise = _get(_getPrototypeOf(Player2.prototype), "play", this).call(this);
      if (playPromise !== void 0 && playPromise && playPromise.then) {
        playPromise.then(function() {
          _this10.removeClass(STATE_CLASS.NOT_ALLOW_AUTOPLAY);
          _this10.addClass(STATE_CLASS.PLAYING);
          if (_this10.state < STATES.RUNNING) {
            XG_DEBUG.logInfo(">>>>playPromise.then");
            _this10.setState(STATES.RUNNING);
            _this10.emit(AUTOPLAY_STARTED);
          }
        }).catch(function(e) {
          XG_DEBUG.logWarn(">>>>playPromise.catch", e.name);
          if (_this10.media && _this10.media.error) {
            _this10.onError();
            _this10.removeClass(STATE_CLASS.ENTER);
            return;
          }
          if (e.name === "NotAllowedError") {
            _this10._errorTimer = util.setTimeout(_this10, function() {
              _this10._errorTimer = null;
              _this10.emit(AUTOPLAY_PREVENTED);
              _this10.addClass(STATE_CLASS.NOT_ALLOW_AUTOPLAY);
              _this10.removeClass(STATE_CLASS.ENTER);
              _this10.pause();
              _this10.setState(STATES.NOTALLOW);
            }, 0);
          }
        });
      } else {
        XG_DEBUG.logWarn("video.play not return promise");
        if (this.state < STATES.RUNNING) {
          this.setState(STATES.RUNNING);
          this.removeClass(STATE_CLASS.NOT_ALLOW_AUTOPLAY);
          this.removeClass(STATE_CLASS.NO_START);
          this.removeClass(STATE_CLASS.ENTER);
          this.addClass(STATE_CLASS.PLAYING);
          this.emit(AUTOPLAY_STARTED);
        }
      }
      return playPromise;
    }
  }, {
    key: "mediaPause",
    value: function mediaPause() {
      _get(_getPrototypeOf(Player2.prototype), "pause", this).call(this);
    }
  }, {
    key: "videoPause",
    value: function videoPause() {
      _get(_getPrototypeOf(Player2.prototype), "pause", this).call(this);
    }
  }, {
    key: "play",
    value: function play() {
      var _this11 = this;
      this.removeClass(STATE_CLASS.PAUSED);
      return runHooks(this, "play", function() {
        return _this11.mediaPlay();
      });
    }
  }, {
    key: "pause",
    value: function pause() {
      var _this12 = this;
      runHooks(this, "pause", function() {
        _get(_getPrototypeOf(Player2.prototype), "pause", _this12).call(_this12);
      });
    }
  }, {
    key: "seek",
    value: function seek(time, status) {
      var _this13 = this;
      if (!this.media || Number.isNaN(Number(time)) || !this.hasStart) {
        return;
      }
      var _this$config4 = this.config, isSeekedPlay = _this$config4.isSeekedPlay, seekedStatus = _this$config4.seekedStatus;
      var _status = status || (isSeekedPlay ? "play" : seekedStatus);
      time = time < 0 ? 0 : time > this.duration ? parseInt(this.duration, 10) : time;
      !this._isPauseBeforeSeek && (this._isPauseBeforeSeek = this.paused ? 2 : 1);
      this._onceSeekCanplay && this.off(SEEKED, this._onceSeekCanplay);
      this._onceSeekCanplay = function() {
        _this13.removeClass(STATE_CLASS.ENTER);
        _this13.isSeeking = false;
        switch (_status) {
          case "play":
            _this13.play();
            break;
          case "pause":
            _this13.pause();
            break;
          default:
            _this13._isPauseBeforeSeek > 1 || _this13.paused ? _this13.pause() : _this13.play();
        }
        _this13._isPauseBeforeSeek = 0;
        _this13._onceSeekCanplay = null;
      };
      this.once(SEEKED, this._onceSeekCanplay);
      if (this.state < STATES.RUNNING) {
        this.removeClass(STATE_CLASS.NO_START);
        this.currentTime = time;
        this.play();
      } else {
        this.currentTime = time;
      }
    }
  }, {
    key: "getInitDefinition",
    value: function getInitDefinition() {
      var _this14 = this;
      var _this$config5 = this.config, definition = _this$config5.definition, url = _this$config5.url;
      if (!url && definition && definition.list && definition.list.length > 0 && definition.defaultDefinition) {
        definition.list.map(function(item) {
          if (item.definition === definition.defaultDefinition) {
            _this14.config.url = item.url;
            _this14.curDefinition = item;
          }
        });
      }
    }
  }, {
    key: "changeDefinition",
    value: function changeDefinition(to, from) {
      var _this15 = this;
      var definition = this.config.definition;
      if (Array.isArray(definition === null || definition === void 0 ? void 0 : definition.list)) {
        definition.list.forEach(function(item) {
          if ((to === null || to === void 0 ? void 0 : to.definition) === item.definition) {
            _this15.curDefinition = item;
          }
        });
      }
      if (to !== null && to !== void 0 && to.bitrate && typeof to.bitrate !== "number") {
        to.bitrate = parseInt(to.bitrate, 10) || 0;
      }
      this.emit(DEFINITION_CHANGE, {
        from,
        to
      });
      if (!this.hasStart) {
        this.config.url = to.url;
        return;
      }
      var ret = this.switchURL(to.url, _objectSpread2({
        seamless: definition.seamless !== false && typeof MediaSource !== "undefined" && typeof MediaSource.isTypeSupported === "function"
      }, to));
      if (ret && ret.then) {
        ret.then(function() {
          _this15.emit(AFTER_DEFINITION_CHANGE, {
            from,
            to
          });
        });
      } else {
        this.emit(AFTER_DEFINITION_CHANGE, {
          from,
          to
        });
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      this.load();
      this.reloadFunc = function() {
        this.play();
      };
      this.once(LOADED_DATA, this.reloadFunc);
    }
  }, {
    key: "resetState",
    value: function resetState() {
      var _this16 = this;
      var NOT_ALLOW_AUTOPLAY = STATE_CLASS.NOT_ALLOW_AUTOPLAY, PLAYING2 = STATE_CLASS.PLAYING, NO_START = STATE_CLASS.NO_START, PAUSED = STATE_CLASS.PAUSED, REPLAY2 = STATE_CLASS.REPLAY, ENTER = STATE_CLASS.ENTER, ENDED2 = STATE_CLASS.ENDED, ERROR22 = STATE_CLASS.ERROR, LOADING2 = STATE_CLASS.LOADING;
      var clsList = [NOT_ALLOW_AUTOPLAY, PLAYING2, NO_START, PAUSED, REPLAY2, ENTER, ENDED2, ERROR22, LOADING2];
      this.hasStart = false;
      this.isError = false;
      this._useAutoplay = false;
      this.mediaPause();
      this._accPlayed.acc = 0;
      this._accPlayed.t = 0;
      this._accPlayed.loopAcc = 0;
      clsList.forEach(function(cls) {
        _this16.removeClass(cls);
      });
      this.addClass(STATE_CLASS.NO_START);
      this.emit(RESET);
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this17 = this;
      var unregisterPlugins = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var isResetConfig = arguments.length > 1 ? arguments[1] : void 0;
      this.resetState();
      var plugins = this.plugins;
      if (!plugins) {
        return;
      }
      unregisterPlugins.map(function(pn) {
        _this17.deregister(pn);
      });
      if (isResetConfig) {
        var de = getDefaultConfig();
        Object.keys(this.config).keys(function(k) {
          if (_this17.config[k] !== "undefined" && (k === "plugins" || k === "presets" || k === "el" || k === "id")) {
            _this17.config[k] = de[k];
          }
        });
      }
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      var _instManager2, _this18 = this;
      var innerContainer = this.innerContainer, root = this.root, media = this.media;
      if (!root || !media) {
        return;
      }
      this.hasStart = false;
      this._useAutoplay = false;
      root.removeAttribute(PLATER_ID);
      this.updateAcc("destroy");
      this._unbindEvents();
      this._detachSourceEvents(this.media);
      util.clearAllTimers(this);
      this.emit(DESTROY);
      (_instManager2 = instManager) === null || _instManager2 === void 0 ? void 0 : _instManager2.remove(this);
      pluginsManager.destroy(this);
      delHooksDescriptor(this);
      _get(_getPrototypeOf(Player2.prototype), "destroy", this).call(this);
      if (this.fullscreen && this._fullscreenEl === this.root) {
        this.exitFullscreen();
      }
      if (innerContainer) {
        var _c = innerContainer.children;
        for (var i = 0; i < _c.length; i++) {
          innerContainer.removeChild(_c[i]);
        }
      }
      !innerContainer && media instanceof window.Node && root.contains(media) && root.removeChild(media);
      ["topBar", "leftBar", "rightBar", "innerContainer"].map(function(item) {
        _this18[item] && root.removeChild(_this18[item]);
        _this18[item] = null;
      });
      var cList = root.className.split(" ");
      if (cList.length > 0) {
        root.className = cList.filter(function(name) {
          return name.indexOf("xgplayer") < 0;
        }).join(" ");
      } else {
        root.className = "";
      }
      this.removeAttribute("data-xgfill");
      ["isSeeking", "isCanplay", "isActive", "cssfullscreen", "fullscreen"].forEach(function(key) {
        _this18[key] = false;
      });
    }
  }, {
    key: "replay",
    value: function replay() {
      var _this19 = this;
      this.removeClass(STATE_CLASS.ENDED);
      this.currentTime = 0;
      this.isSeeking = false;
      runHooks(this, "replay", function() {
        _this19.once(SEEKED, function() {
          var playPromise = _this19.mediaPlay();
          if (playPromise && playPromise.catch) {
            playPromise.catch(function(err) {
              console.log(err);
            });
          }
        });
        _this19.emit(REPLAY);
        _this19.onPlay();
      });
    }
  }, {
    key: "retry",
    value: function retry() {
      var _this20 = this;
      this.removeClass(STATE_CLASS.ERROR);
      this.addClass(STATE_CLASS.LOADING);
      runHooks(this, "retry", function() {
        var cur = _this20.currentTime;
        var url = _this20.config.url;
        var _srcRet = !util.isMSE(_this20.media) ? _this20._preProcessUrl(url) : {
          url
        };
        _this20.src = _srcRet.url;
        !_this20.config.isLive && (_this20.currentTime = cur);
        _this20.once(CANPLAY, function() {
          _this20.mediaPlay();
        });
      });
    }
  }, {
    key: "changeFullStyle",
    value: function changeFullStyle(root, el, rootClass, pClassName) {
      if (!root) {
        return;
      }
      if (!pClassName) {
        pClassName = STATE_CLASS.PARENT_FULLSCREEN;
      }
      if (!this._orgCss) {
        this._orgCss = util.filterStyleFromText(root);
      }
      util.addClass(root, rootClass);
      if (el && el !== root && !this._orgPCss) {
        this._orgPCss = util.filterStyleFromText(el);
        util.addClass(el, pClassName);
        el.setAttribute(PLATER_ID, this.playerId);
      }
    }
  }, {
    key: "recoverFullStyle",
    value: function recoverFullStyle(root, el, rootClass, pClassName) {
      if (!pClassName) {
        pClassName = STATE_CLASS.PARENT_FULLSCREEN;
      }
      if (this._orgCss) {
        util.setStyleFromCsstext(root, this._orgCss);
        this._orgCss = "";
      }
      util.removeClass(root, rootClass);
      if (el && el !== root && this._orgPCss) {
        util.setStyleFromCsstext(el, this._orgPCss);
        this._orgPCss = "";
        util.removeClass(el, pClassName);
        el.removeAttribute(PLATER_ID);
      }
    }
  }, {
    key: "getFullscreen",
    value: function getFullscreen() {
      var el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.config.fullscreenTarget;
      var root = this.root, media = this.media;
      if (el === "video" || el === "media") {
        el = this[el];
      }
      if (!el) {
        el = root;
      }
      this._fullScreenOffset = {
        top: util.scrollTop(),
        left: util.scrollLeft()
      };
      this._fullscreenEl = el;
      this._fullActionFrom = "get";
      var fullEl = util.getFullScreenEl();
      if (fullEl === this._fullscreenEl) {
        this.onFullscreenChange();
        return Promise.resolve();
      }
      try {
        for (var i = 0; i < GET_FULLSCREEN_API.length; i++) {
          var key = GET_FULLSCREEN_API[i];
          if (el[key]) {
            var ret = key === "webkitRequestFullscreen" ? el.webkitRequestFullscreen(window.Element.ALLOW_KEYBOARD_INPUT) : el[key]();
            if (ret && ret.then) {
              return ret;
            } else {
              return Promise.resolve();
            }
          }
        }
        if (media.fullscreenEnabled || media.webkitSupportsFullscreen) {
          media.webkitEnterFullscreen();
          return Promise.resolve();
        }
        return Promise.reject(new Error("call getFullscreen fail"));
      } catch (err) {
        return Promise.reject(new Error("call getFullscreen fail"));
      }
    }
  }, {
    key: "exitFullscreen",
    value: function exitFullscreen(el) {
      if (this.isRotateFullscreen) {
        this.exitRotateFullscreen();
      }
      if (!this._fullscreenEl && !util.getFullScreenEl()) {
        return;
      }
      this.root;
      var media = this.media;
      this._fullActionFrom = "exit";
      try {
        for (var i = 0; i < EXIT_FULLSCREEN_API.length; i++) {
          var key = EXIT_FULLSCREEN_API[i];
          if (document[key]) {
            var ret = document[key]();
            if (ret && ret.then) {
              return ret;
            } else {
              return Promise.resolve();
            }
          }
        }
        if (media && media.webkitSupportsFullscreen) {
          media.webkitExitFullScreen();
          return Promise.resolve();
        }
        return Promise.reject(new Error("call exitFullscreen fail"));
      } catch (err) {
        return Promise.reject(new Error("call exitFullscreen fail"));
      }
    }
  }, {
    key: "getCssFullscreen",
    value: function getCssFullscreen() {
      var el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.config.fullscreenTarget;
      if (this.isRotateFullscreen) {
        this.exitRotateFullscreen();
      } else if (this.fullscreen) {
        this.exitFullscreen();
      }
      var _class = el ? "".concat(STATE_CLASS.INNER_FULLSCREEN, " ").concat(STATE_CLASS.CSS_FULLSCREEN) : STATE_CLASS.CSS_FULLSCREEN;
      this.changeFullStyle(this.root, el, _class);
      var _this$config$fullscre = this.config.fullscreen, fullscreen = _this$config$fullscre === void 0 ? {} : _this$config$fullscre;
      var useCssFullscreen = fullscreen.useCssFullscreen === true || typeof fullscreen.useCssFullscreen === "function" && fullscreen.useCssFullscreen();
      if (useCssFullscreen) {
        this.fullscreen = true;
        this.emit(FULLSCREEN_CHANGE, true);
      }
      this._cssfullscreenEl = el;
      this.cssfullscreen = true;
      this.emit(CSS_FULLSCREEN_CHANGE, true);
    }
  }, {
    key: "exitCssFullscreen",
    value: function exitCssFullscreen() {
      var _class = this._cssfullscreenEl ? "".concat(STATE_CLASS.INNER_FULLSCREEN, " ").concat(STATE_CLASS.CSS_FULLSCREEN) : STATE_CLASS.CSS_FULLSCREEN;
      if (!this.fullscreen) {
        this.recoverFullStyle(this.root, this._cssfullscreenEl, _class);
      } else {
        var _this$config$fullscre2 = this.config.fullscreen, fullscreen = _this$config$fullscre2 === void 0 ? {} : _this$config$fullscre2;
        var useCssFullscreen = fullscreen.useCssFullscreen === true || typeof fullscreen.useCssFullscreen === "function" && fullscreen.useCssFullscreen();
        if (useCssFullscreen) {
          this.recoverFullStyle(this.root, this._cssfullscreenEl, _class);
          this.fullscreen = false;
          this.emit(FULLSCREEN_CHANGE, false);
        } else {
          this.removeClass(_class);
        }
      }
      this._cssfullscreenEl = null;
      this.cssfullscreen = false;
      this.emit(CSS_FULLSCREEN_CHANGE, false);
    }
  }, {
    key: "getRotateFullscreen",
    value: function getRotateFullscreen() {
      var el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.config.fullscreenTarget;
      if (this.cssfullscreen) {
        this.exitCssFullscreen(el);
      }
      var _class = el ? "".concat(STATE_CLASS.INNER_FULLSCREEN, " ").concat(STATE_CLASS.ROTATE_FULLSCREEN) : STATE_CLASS.ROTATE_FULLSCREEN;
      this._fullscreenEl = el || this.root;
      this.changeFullStyle(this.root, el, _class, STATE_CLASS.PARENT_ROTATE_FULLSCREEN);
      this.isRotateFullscreen = true;
      this.fullscreen = true;
      this.setRotateDeg(90);
      this._rootStyle = this.root.getAttribute("style");
      this.root.style.width = "".concat(window.innerHeight, "px");
      this.emit(FULLSCREEN_CHANGE, true);
    }
  }, {
    key: "exitRotateFullscreen",
    value: function exitRotateFullscreen(el) {
      var _class = this._fullscreenEl !== this.root ? "".concat(STATE_CLASS.INNER_FULLSCREEN, " ").concat(STATE_CLASS.ROTATE_FULLSCREEN) : STATE_CLASS.ROTATE_FULLSCREEN;
      this.recoverFullStyle(this.root, this._fullscreenEl, _class, STATE_CLASS.PARENT_ROTATE_FULLSCREEN);
      this.isRotateFullscreen = false;
      this.fullscreen = false;
      this.setRotateDeg(0);
      this.emit(FULLSCREEN_CHANGE, false);
      if (this._rootStyle) {
        this.root.style.style = this._rootStyle;
        this._rootStyle = false;
      }
    }
  }, {
    key: "setRotateDeg",
    value: function setRotateDeg(deg) {
      if (window.orientation === 90 || window.orientation === -90) {
        this.rotateDeg = 0;
      } else {
        this.rotateDeg = deg;
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        autoHide: !this.config.closeDelayBlur,
        delay: this.config.inactive
      };
      if (this.isActive) {
        this.onFocus(data);
        return;
      }
      this.emit(PLAYER_FOCUS, _objectSpread2({
        paused: this.paused,
        ended: this.ended
      }, data));
    }
  }, {
    key: "blur",
    value: function blur() {
      var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        ignorePaused: false
      };
      if (!this.isActive) {
        this.onBlur(data);
        return;
      }
      this._clearUserTimer();
      this.emit(PLAYER_BLUR, _objectSpread2({
        paused: this.paused,
        ended: this.ended
      }, data));
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      var _this21 = this;
      var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        autoHide: true,
        delay: 3e3
      };
      var innerStates = this.innerStates;
      this.isActive = true;
      this.removeClass(STATE_CLASS.INACTIVE);
      this._clearUserTimer();
      if (data.isLock !== void 0) {
        innerStates.isActiveLocked = data.isLock;
      }
      if (data.autoHide === false || data.isLock === true || innerStates.isActiveLocked) {
        this._clearUserTimer();
        return;
      }
      var time = data && data.delay ? data.delay : this.config.inactive;
      this.userTimer = util.setTimeout(this, function() {
        _this21.userTimer = null;
        _this21.blur();
      }, time);
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$ignorePaused = _ref.ignorePaused, ignorePaused = _ref$ignorePaused === void 0 ? false : _ref$ignorePaused;
      if (this.innerStates.isActiveLocked) {
        return;
      }
      var closePauseVideoFocus = this.config.closePauseVideoFocus;
      this.isActive = false;
      if (ignorePaused || closePauseVideoFocus || !this.paused && !this.ended) {
        this.addClass(STATE_CLASS.INACTIVE);
      }
    }
  }, {
    key: "onEmptied",
    value: function onEmptied() {
      this.updateAcc("emptied");
    }
  }, {
    key: "onCanplay",
    value: function onCanplay() {
      this.removeClass(STATE_CLASS.ENTER);
      this.removeClass(STATE_CLASS.ERROR);
      this.removeClass(STATE_CLASS.LOADING);
      this.isCanplay = true;
      this.waitTimer && util.clearTimeout(this, this.waitTimer);
    }
  }, {
    key: "onLoadeddata",
    value: function onLoadeddata() {
      var _this22 = this;
      this.isError = false;
      this.isSeeking = false;
      if (this.__startTime > 0) {
        if (this.duration > 0) {
          this._seekToStartTime();
        } else {
          this.once(DURATION_CHANGE, function() {
            _this22._seekToStartTime();
          });
        }
      }
    }
  }, {
    key: "onLoadstart",
    value: function onLoadstart() {
      this.removeClass(STATE_CLASS.ERROR);
      this.isCanplay = false;
    }
  }, {
    key: "onPlay",
    value: function onPlay() {
      if (this.state === STATES.ENDED) {
        this.setState(STATES.RUNNING);
      }
      this.removeClass(STATE_CLASS.PAUSED);
      this.ended && this.removeClass(STATE_CLASS.ENDED);
      !this.config.closePlayVideoFocus && this.focus();
    }
  }, {
    key: "onPause",
    value: function onPause() {
      this.addClass(STATE_CLASS.PAUSED);
      this.updateAcc("pause");
      if (!this.config.closePauseVideoFocus) {
        this._clearUserTimer();
        this.focus();
      }
    }
  }, {
    key: "onEnded",
    value: function onEnded() {
      this.updateAcc("ended");
      this.addClass(STATE_CLASS.ENDED);
      this.setState(STATES.ENDED);
    }
  }, {
    key: "onError",
    value: function onError() {
      this.isError = true;
      this.updateAcc("error");
      this.removeClass(STATE_CLASS.NOT_ALLOW_AUTOPLAY);
      this.removeClass(STATE_CLASS.NO_START);
      this.removeClass(STATE_CLASS.ENTER);
      this.removeClass(STATE_CLASS.LOADING);
      this.addClass(STATE_CLASS.ERROR);
    }
  }, {
    key: "onSeeking",
    value: function onSeeking() {
      if (!this.isSeeking) {
        this.updateAcc("seeking");
      }
      this.isSeeking = true;
      this.addClass(STATE_CLASS.SEEKING);
    }
  }, {
    key: "onSeeked",
    value: function onSeeked() {
      this.isSeeking = false;
      if (this.waitTimer) {
        util.clearTimeout(this, this.waitTimer);
      }
      this.removeClass(STATE_CLASS.LOADING);
      this.removeClass(STATE_CLASS.SEEKING);
    }
  }, {
    key: "onWaiting",
    value: function onWaiting() {
      var _this23 = this;
      if (this.waitTimer) {
        util.clearTimeout(this, this.waitTimer);
      }
      this.updateAcc("waiting");
      this.waitTimer = util.setTimeout(this, function() {
        _this23.addClass(STATE_CLASS.LOADING);
        _this23.emit(LOADING);
        util.clearTimeout(_this23, _this23.waitTimer);
        _this23.waitTimer = null;
      }, this.config.minWaitDelay);
    }
  }, {
    key: "onPlaying",
    value: function onPlaying() {
      var _this24 = this;
      this.isError = false;
      var NO_START = STATE_CLASS.NO_START, PAUSED = STATE_CLASS.PAUSED, ENDED2 = STATE_CLASS.ENDED, ERROR22 = STATE_CLASS.ERROR, REPLAY2 = STATE_CLASS.REPLAY, LOADING2 = STATE_CLASS.LOADING;
      var clsList = [NO_START, PAUSED, ENDED2, ERROR22, REPLAY2, LOADING2];
      clsList.forEach(function(cls) {
        _this24.removeClass(cls);
      });
      if (!this._accPlayed.t && !this.paused && !this.ended) {
        this._accPlayed.t = (/* @__PURE__ */ new Date()).getTime();
      }
    }
  }, {
    key: "onTimeupdate",
    value: function onTimeupdate() {
      !this._videoHeight && this.media.videoHeight && this.resize();
      if ((this.waitTimer || this.hasClass(STATE_CLASS.LOADING)) && this.media.readyState > 2) {
        this.removeClass(STATE_CLASS.LOADING);
        util.clearTimeout(this, this.waitTimer);
        this.waitTimer = null;
      }
      if (!this.paused && this.state === STATES.NOTALLOW && this.duration) {
        this.setState(STATES.RUNNING);
        this.emit(AUTOPLAY_STARTED);
      }
      if (!this._accPlayed.t && !this.paused && !this.ended) {
        this._accPlayed.t = (/* @__PURE__ */ new Date()).getTime();
      }
    }
  }, {
    key: "onVolumechange",
    value: function onVolumechange() {
      util.typeOf(this.config.volume) === "Number" && (this.config.volume = this.volume);
    }
  }, {
    key: "onRatechange",
    value: function onRatechange() {
      this.config.defaultPlaybackRate = this.playbackRate;
    }
  }, {
    key: "emitUserAction",
    value: function emitUserAction(event, action, params) {
      if (!this.media || !action || !event) {
        return;
      }
      var eventType = util.typeOf(event) === "String" ? event : event.type || "";
      if (params.props && util.typeOf(params.props) !== "Array") {
        params.props = [params.props];
      }
      this.emit(USER_ACTION, _objectSpread2({
        eventType,
        action,
        currentTime: this.currentTime,
        duration: this.duration,
        ended: this.ended,
        event
      }, params));
    }
  }, {
    key: "updateAcc",
    value: function updateAcc(endType) {
      if (this._accPlayed.t) {
        var _at = (/* @__PURE__ */ new Date()).getTime() - this._accPlayed.t;
        this._accPlayed.acc += _at;
        this._accPlayed.t = 0;
        if (endType === "ended" || this.ended) {
          this._accPlayed.loopAcc = this._accPlayed.acc;
        }
      }
    }
  }, {
    key: "checkBuffer",
    value: function checkBuffer(time) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        startDiff: 0,
        endDiff: 0
      };
      var _ref2 = options || {}, _ref2$startDiff = _ref2.startDiff, startDiff = _ref2$startDiff === void 0 ? 0 : _ref2$startDiff, _ref2$endDiff = _ref2.endDiff, endDiff = _ref2$endDiff === void 0 ? 0 : _ref2$endDiff;
      var buffered = this.media.buffered;
      if (!buffered || buffered.length === 0 || !this.duration) {
        return true;
      }
      var currentTime = time || this.media.currentTime || 0.2;
      var len = buffered.length;
      for (var i = 0; i < len; i++) {
        if (buffered.start(i) + startDiff <= currentTime && buffered.end(i) - endDiff > currentTime) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: "resizePosition",
    value: function resizePosition() {
      var _this$videoPos = this.videoPos, vy = _this$videoPos.vy, vx = _this$videoPos.vx, h = _this$videoPos.h, w = _this$videoPos.w;
      var rotate = this.videoPos.rotate;
      if (rotate < 0 && h < 0 && w < 0) {
        return;
      }
      var _pi = this.videoPos._pi;
      if (!_pi && this.media.videoHeight) {
        _pi = this.media.videoWidth / this.media.videoHeight * 100;
      }
      if (!_pi) {
        return;
      }
      this.videoPos.pi = _pi;
      rotate = rotate < 0 ? 0 : rotate;
      var _pos = {
        rotate
      };
      var offsetY = 0;
      var offsetX = 0;
      var scale = 1;
      var _t = Math.abs(rotate / 90);
      var root = this.root, innerContainer = this.innerContainer;
      var width = root.offsetWidth;
      var height = innerContainer ? innerContainer.offsetHeight : root.offsetHeight;
      var rHeight = height;
      var rWidth = width;
      if (_t % 2 === 0) {
        scale = h > 0 ? 100 / h : w > 0 ? 100 / w : 1;
        _pos.scale = scale;
        offsetY = vy > 0 ? (100 - h) / 2 - vy : 0;
        _pos.y = _t === 2 ? 0 - offsetY : offsetY;
        offsetX = vx > 0 ? (100 - w) / 2 - vx : 0;
        _pos.x = _t === 2 ? 0 - offsetX : offsetX;
        this.media.style.width = "".concat(rWidth, "px");
        this.media.style.height = "".concat(rHeight, "px");
      } else if (_t % 2 === 1) {
        rWidth = height;
        rHeight = width;
        var offset = height - width;
        offsetX = -offset / 2 / rWidth * 100;
        _pos.x = _t === 3 ? offsetX + vy / 2 : offsetX - vy / 2;
        offsetY = offset / 2 / rHeight * 100;
        _pos.y = _t === 3 ? offsetY + vx / 2 : offsetY - vx / 2;
        _pos.scale = scale;
        this.media.style.width = "".concat(rWidth, "px");
        this.media.style.height = "".concat(rHeight, "px");
      }
      var formStyle = util.getTransformStyle(_pos, this.media.style.transform || this.media.style.webkitTransform);
      this.media.style.transform = formStyle;
      this.media.style.webkitTransform = formStyle;
    }
  }, {
    key: "position",
    value: function position() {
      var pos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        h: 0,
        y: 0,
        x: 0,
        w: 0
      };
      if (!this.media || !pos || !pos.h) {
        return;
      }
      var videoPos = this.videoPos;
      videoPos.h = pos.h * 100 || 0;
      videoPos.w = pos.w * 100 || 0;
      videoPos.vx = pos.x * 100 || 0;
      videoPos.vy = pos.y * 100 || 0;
      this.resizePosition();
    }
  }, {
    key: "setConfig",
    value: function setConfig(config) {
      var _this25 = this;
      if (!config) {
        return;
      }
      Object.keys(config).map(function(key) {
        if (key !== "plugins") {
          _this25.config[key] = config[key];
          var plugin = _this25.plugins[key.toLowerCase()];
          if (plugin && util.typeOf(plugin.setConfig) === "Function") {
            plugin.setConfig(config[key]);
          }
        }
      });
    }
  }, {
    key: "playNext",
    value: function playNext(config) {
      var _this26 = this;
      this.resetState();
      this.setConfig(config);
      this._currentTime = 0;
      this._duration = 0;
      runHooks(this, "playnext", function() {
        _this26.start();
        _this26.emit(PLAYNEXT, config);
      });
    }
  }, {
    key: "resize",
    value: function resize() {
      var _this27 = this;
      if (!this.media) {
        return;
      }
      var containerSize = this.root.getBoundingClientRect();
      this.sizeInfo.width = containerSize.width;
      this.sizeInfo.height = containerSize.height;
      this.sizeInfo.left = containerSize.left;
      this.sizeInfo.top = containerSize.top;
      var _this$media = this.media, videoWidth = _this$media.videoWidth, videoHeight = _this$media.videoHeight;
      var _this$config6 = this.config, fitVideoSize = _this$config6.fitVideoSize, videoFillMode = _this$config6.videoFillMode;
      if (videoFillMode === "fill" || videoFillMode === "cover" || videoFillMode === "contain") {
        this.setAttribute("data-xgfill", videoFillMode);
      }
      if (!videoHeight || !videoWidth) {
        return;
      }
      this._videoHeight = videoHeight;
      this._videoWidth = videoWidth;
      var controlsHeight = this.controls && this.innerContainer ? this.controls.root.getBoundingClientRect().height : 0;
      var width = containerSize.width;
      var height = containerSize.height - controlsHeight;
      var videoFit = parseInt(videoWidth / videoHeight * 1e3, 10);
      var fit = parseInt(width / height * 1e3, 10);
      var rWidth = width;
      var rHeight = height;
      var _style = {};
      if (fitVideoSize === "auto" && fit > videoFit || fitVideoSize === "fixWidth") {
        rHeight = width / videoFit * 1e3;
        if (this.config.fluid) {
          _style.paddingTop = "".concat(rHeight * 100 / rWidth, "%");
        } else {
          _style.height = "".concat(rHeight + controlsHeight, "px");
        }
      } else if (fitVideoSize === "auto" && fit < videoFit || fitVideoSize === "fixHeight") {
        rWidth = videoFit * height / 1e3;
        _style.width = "".concat(rWidth, "px");
      }
      if (!this.fullscreen && !this.cssfullscreen) {
        Object.keys(_style).forEach(function(key) {
          _this27.root.style[key] = _style[key];
        });
      }
      if (videoFillMode === "fillHeight" && fit < videoFit || videoFillMode === "fillWidth" && fit > videoFit) {
        this.setAttribute("data-xgfill", "cover");
      }
      var data = {
        videoScale: videoFit,
        vWidth: rWidth,
        vHeight: rHeight,
        cWidth: rWidth,
        cHeight: rHeight + controlsHeight
      };
      this.resizePosition();
      this.emit(VIDEO_RESIZE, data);
    }
  }, {
    key: "updateObjectPosition",
    value: function updateObjectPosition() {
      var left = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var top = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      if (this.media.updateObjectPosition) {
        this.media.updateObjectPosition(left, top);
        return;
      }
      this.media.style.objectPosition = "".concat(left * 100, "% ").concat(top * 100, "%");
    }
  }, {
    key: "setState",
    value: function setState(newState) {
      XG_DEBUG.logInfo("setState", "state from:".concat(STATE_ARRAY[this.state], " to:").concat(STATE_ARRAY[newState]));
      this._state = newState;
    }
  }, {
    key: "_preProcessUrl",
    value: function _preProcessUrl(url, ext) {
      var _this$config7 = this.config, preProcessUrl = _this$config7.preProcessUrl, preProcessUrlOptions = _this$config7.preProcessUrlOptions;
      var processUrlOptions = Object.assign({}, preProcessUrlOptions, ext);
      return !util.isBlob(url) && typeof preProcessUrl === "function" ? preProcessUrl(url, processUrlOptions) : {
        url
      };
    }
  }, {
    key: "_seekToStartTime",
    value: function _seekToStartTime() {
      if (this.__startTime > 0 && this.duration > 0) {
        this.currentTime = this.__startTime > this.duration ? this.duration : this.__startTime;
        this.__startTime = -1;
      }
    }
  }, {
    key: "state",
    get: function get() {
      return this._state;
    }
  }, {
    key: "isFullscreen",
    get: function get() {
      return this.fullscreen;
    }
  }, {
    key: "isCssfullScreen",
    get: function get() {
      return this.cssfullscreen;
    }
  }, {
    key: "hasStart",
    get: function get() {
      return this._hasStart;
    },
    set: function set(bool) {
      if (typeof bool === "boolean") {
        this._hasStart = bool;
        if (bool === false) {
          this.setState(STATES.READY);
        }
        this.emit("hasstart");
      }
    }
  }, {
    key: "isPlaying",
    get: function get() {
      return this._state === STATES.RUNNING || this._state === STATES.ENDED;
    },
    set: function set(value) {
      if (value) {
        this.setState(STATES.RUNNING);
      } else {
        this._state >= STATES.RUNNING && this.setState(STATES.ATTACHED);
      }
    }
  }, {
    key: "definitionList",
    get: function get() {
      if (!this.config || !this.config.definition) {
        return [];
      }
      return this.config.definition.list || [];
    },
    set: function set(list) {
      var _this28 = this;
      var definition = this.config.definition;
      var curDef = null;
      var targetDef = null;
      definition.list = list;
      this.emit("resourceReady", list);
      list.forEach(function(item) {
        var _this28$curDefinition;
        if (((_this28$curDefinition = _this28.curDefinition) === null || _this28$curDefinition === void 0 ? void 0 : _this28$curDefinition.definition) === item.definition) {
          curDef = item;
        }
        if (definition.defaultDefinition === item.definition) {
          targetDef = item;
        }
      });
      if (!targetDef && list.length > 0) {
        targetDef = list[0];
      }
      curDef ? this.changeDefinition(curDef) : targetDef && this.changeDefinition(targetDef);
    }
  }, {
    key: "videoFrameInfo",
    get: function get() {
      var ret = {
        total: 0,
        dropped: 0,
        corrupted: 0,
        droppedRate: 0,
        droppedDuration: 0
      };
      if (!this.media || !this.media.getVideoPlaybackQuality) {
        return ret;
      }
      var _quality = this.media.getVideoPlaybackQuality();
      ret.dropped = _quality.droppedVideoFrames || 0;
      ret.total = _quality.totalVideoFrames || 0;
      ret.corrupted = _quality.corruptedVideoFrames || 0;
      if (ret.total > 0) {
        ret.droppedRate = ret.dropped / ret.total * 100;
        ret.droppedDuration = parseInt(this.cumulateTime / ret.total * ret.dropped, 0);
      }
      return ret;
    }
  }, {
    key: "lang",
    get: function get() {
      return this.config.lang;
    },
    set: function set(lang) {
      var result = I18N.langKeys.filter(function(key) {
        return key === lang;
      });
      if (result.length === 0 && lang !== "zh") {
        console.error("Sorry, set lang fail, because the language [".concat(lang, "] is not supported now, list of all supported languages is [").concat(I18N.langKeys.join(), "] "));
        return;
      }
      this.config.lang = lang;
      pluginsManager.setLang(lang, this);
    }
  }, {
    key: "i18n",
    get: function get() {
      var _l = this.config.lang;
      if (_l === "zh") {
        _l = "zh-cn";
      }
      return this.__i18n.lang[_l] || this.__i18n.lang.en;
    }
  }, {
    key: "i18nKeys",
    get: function get() {
      return this.__i18n.textKeys || {};
    }
  }, {
    key: "version",
    get: function get() {
      return version;
    }
  }, {
    key: "playerId",
    get: function get() {
      return this._pluginInfoId;
    }
  }, {
    key: "url",
    get: function get() {
      return this.__url || this.config.url;
    },
    set: function set(url) {
      this.__url = url;
    }
  }, {
    key: "poster",
    get: function get() {
      return this.plugins.poster ? this.plugins.poster.config.poster : this.config.poster;
    },
    set: function set(posterUrl) {
      this.plugins.poster && this.plugins.poster.update(posterUrl);
    }
  }, {
    key: "readyState",
    get: function get() {
      return _get(_getPrototypeOf(Player2.prototype), "readyState", this);
    }
  }, {
    key: "error",
    get: function get() {
      var key = _get(_getPrototypeOf(Player2.prototype), "error", this);
      return this.i18n[key] || key;
    }
  }, {
    key: "networkState",
    get: function get() {
      return _get(_getPrototypeOf(Player2.prototype), "networkState", this);
    }
  }, {
    key: "fullscreenChanging",
    get: function get() {
      return !(this._fullScreenOffset === null);
    }
  }, {
    key: "cumulateTime",
    get: function get() {
      var _this$_accPlayed = this._accPlayed, acc = _this$_accPlayed.acc, t = _this$_accPlayed.t;
      return t ? (/* @__PURE__ */ new Date()).getTime() - t + acc : acc;
    }
  }, {
    key: "zoom",
    get: function get() {
      return this.config.zoom;
    },
    set: function set(value) {
      this.config.zoom = value;
    }
  }, {
    key: "videoRotateDeg",
    get: function get() {
      return this.videoPos.rotate;
    },
    set: function set(val) {
      val = util.convertDeg(val);
      if (val % 90 !== 0 || val === this.videoPos.rotate) {
        return;
      }
      this.videoPos.rotate = val;
      this.resizePosition();
    }
  }, {
    key: "avgSpeed",
    get: function get() {
      return AVG_SPEED;
    },
    set: function set(val) {
      AVG_SPEED = val;
    }
  }, {
    key: "realTimeSpeed",
    get: function get() {
      return REAL_TIME_SPEED;
    },
    set: function set(val) {
      REAL_TIME_SPEED = val;
    }
  }, {
    key: "offsetCurrentTime",
    get: function get() {
      return this._offsetInfo.currentTime || 0;
    },
    set: function set(val) {
      this._offsetInfo.currentTime = val;
    }
  }, {
    key: "offsetDuration",
    get: function get() {
      return this._offsetInfo.duration || 0;
    },
    set: function set(val) {
      this._offsetInfo.duration = val || 0;
    }
  }, {
    key: "hook",
    value: function hook$1(hookName, handler) {
      return hook.call.apply(hook, [this].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "useHooks",
    value: function useHooks$1(hookName, handler) {
      return useHooks.call.apply(useHooks, [this].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "removeHooks",
    value: function removeHooks$1(hookName, handler) {
      return removeHooks.call.apply(removeHooks, [this].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "usePluginHooks",
    value: function usePluginHooks$1(pluginName, hookName, handler) {
      for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        args[_key - 3] = arguments[_key];
      }
      return usePluginHooks.call.apply(usePluginHooks, [this].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "removePluginHooks",
    value: function removePluginHooks$1(pluginName, hookName, handler) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        args[_key2 - 3] = arguments[_key2];
      }
      return removePluginHooks.call.apply(removePluginHooks, [this].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "setUserActive",
    value: function setUserActive(isActive, isMuted) {
      var _instManager3;
      if (typeof isMuted === "boolean" && isMuted !== this.muted) {
        this.addInnerOP("volumechange");
        if (util.typeOf(isMuted) === Boolean) {
          this.muted = isMuted;
        }
      }
      (_instManager3 = instManager) === null || _instManager3 === void 0 ? void 0 : _instManager3.setActive(this.playerId, isActive);
    }
  }], [{
    key: "debugger",
    get: function get() {
      return XG_DEBUG.config.debug;
    },
    set: function set(value) {
      XG_DEBUG.config.debug = value;
    }
  }, {
    key: "instManager",
    get: function get() {
      return instManager;
    },
    set: function set(value) {
      instManager = value;
    }
  }, {
    key: "getCurrentUserActivePlayerId",
    value: function getCurrentUserActivePlayerId() {
      var _instManager4;
      return (_instManager4 = instManager) === null || _instManager4 === void 0 ? void 0 : _instManager4.getActiveId();
    }
  }, {
    key: "setCurrentUserActive",
    value: function setCurrentUserActive(playerId, isActive) {
      var _instManager5;
      (_instManager5 = instManager) === null || _instManager5 === void 0 ? void 0 : _instManager5.setActive(playerId, isActive);
    }
  }, {
    key: "isHevcSupported",
    value: function isHevcSupported2() {
      return sniffer.isHevcSupported();
    }
  }, {
    key: "probeConfigSupported",
    value: function probeConfigSupported2(info) {
      return sniffer.probeConfigSupported(info);
    }
  }, {
    key: "install",
    value: function install(name, descriptor) {
      if (!Player2.plugins) {
        Player2.plugins = {};
      }
      if (!Player2.plugins[name]) {
        Player2.plugins[name] = descriptor;
      }
    }
  }, {
    key: "use",
    value: function use2(name, descriptor) {
      if (!Player2.plugins) {
        Player2.plugins = {};
      }
      Player2.plugins[name] = descriptor;
    }
  }]);
  return Player2;
}(MediaProxy);
_defineProperty(Player, "defaultPreset", null);
_defineProperty(Player, "XgVideoProxy", null);
Player.instManager = InstManager.getInstance();

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/logger/index.js
function now() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var LOG_TYPES = {
  LOAD_START: "loadstart",
  LOADED_DATA: "loadeddata",
  FIRST_FRAME: "firstFrame",
  WAIT_START: "waitingStart",
  WAIT_END: "waitingEnd",
  SEEK_START: "seekStart",
  SEEK_END: "seekEnd"
};
var XGLogger = function(_BasePlugin) {
  _inherits(XGLogger2, _BasePlugin);
  var _super = _createSuper(XGLogger2);
  function XGLogger2() {
    var _this;
    _classCallCheck(this, XGLogger2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "_onTimeupdate", function() {
      _this._state.isTimeUpdate = true;
      if (_this._state.autoplayStart) {
        XG_DEBUG.logInfo("[xgLogger]".concat(_this.player.playerId, " _onTimeupdate"));
        _this._sendFF("onTimeupdate");
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_onAutoplayStart", function() {
      XG_DEBUG.logInfo("[xgLogger]".concat(_this.player.playerId, " _onAutoplayStart"));
      _this._state.autoplayStart = true;
      _this.vt && _this._sendFF("onAutoplayStart");
    });
    _defineProperty(_assertThisInitialized(_this), "_onReset", function() {
      _this._state = {
        autoplayStart: false,
        isFFLoading: false,
        isTimeUpdate: false,
        isFFSend: false,
        isLs: false
      };
      _this.vt = 0;
      _this.pt = 0;
      _this.fvt = 0;
      _this.newPointTime = now();
      _this.loadedCostTime = 0;
      _this.startCostTime = 0;
      _this._isSeeking = false;
      _this.seekingStart = 0;
      _this.waitingStart = 0;
      _this.fixedWaitingStart = 0;
      _this._isWaiting = false;
      _this._waitTimer && util.clearTimeout(_assertThisInitialized(_this), _this._waitTimer);
      _this._waittTimer && util.clearTimeout(_assertThisInitialized(_this), _this._waittTimer);
      _this._waitTimer = null;
      _this._waittTimer = null;
      _this._waitType = 0;
    });
    _defineProperty(_assertThisInitialized(_this), "_onSeeking", function() {
      if (_this.seekingStart) {
        return;
      }
      _this.suspendWaitingStatus("seek");
      _this.seekingStart = now();
      _this.emitLog(LOG_TYPES.SEEK_START, {
        start: now()
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_onSeeked", function() {
      _this.suspendSeekingStatus("seeked");
    });
    _defineProperty(_assertThisInitialized(_this), "_onWaitingLoadStart", function() {
      if (_this._isWaiting || _this.vt) {
        return;
      }
      _this._isWaiting = true;
      _this.waitingStart = now();
      _this.fixedWaitingStart = now();
      _this._waitType = 1;
      _this.emitLog(LOG_TYPES.WAIT_START, {
        fixedStart: _this.fixedWaitingStart,
        start: _this.waitingStart,
        type: 1,
        endType: "loadstart"
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_onWaiting", function() {
      if (_this._isWaiting || !_this.vt) {
        return;
      }
      _this._isWaiting = true;
      if (!_this.vt) {
        _this._waitType = 1;
      } else if (_this.seekingStart) {
        _this._waitType = 2;
      } else {
        _this._waitType = 0;
      }
      _this.fixedWaitingStart = now();
      _this._waitTimer = util.setTimeout(_assertThisInitialized(_this), function() {
        if (_this._isWaiting) {
          _this.waitingStart = now();
          util.clearTimeout(_assertThisInitialized(_this), _this._waitTimer);
          _this._waitTimer = null;
          _this._startWaitTimeout();
          _this.emitLog(LOG_TYPES.WAIT_START, {
            fixedStart: _this.fixedWaitingStart,
            start: _this.waitingStart,
            type: _this._waitType,
            endType: _this._waitType === 2 ? "seek" : "playing"
          });
        }
      }, 200);
    });
    _defineProperty(_assertThisInitialized(_this), "_onError", function() {
      _this.suspendSeekingStatus("error");
      _this.suspendWaitingStatus("error");
    });
    _defineProperty(_assertThisInitialized(_this), "_onPlaying", function() {
      _this._isWaiting && _this.suspendWaitingStatus("playing");
    });
    return _this;
  }
  _createClass(XGLogger2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      this._onReset();
      this._waitType = "firstFrame";
      this._initOnceEvents();
      this.newPointTime = now();
      this.loadedCostTime = 0;
      this.startCostTime = 0;
      this.on(LOAD_START, function() {
        var _state = _this2._state;
        var autoplayStart = _state.autoplayStart, isFFSend = _state.isFFSend;
        _this2.startCostTime = now() - _this2.newPointTime;
        XG_DEBUG.logInfo("[xgLogger]".concat(_this2.player.playerId, " LOAD_START"), "autoplayStart:".concat(autoplayStart, " isFFSend:").concat(isFFSend, " startCostTime:").concat(_this2.startCostTime, " newPointTime").concat(_this2.newPointTime));
        if (isFFSend) {
          return;
        }
        !_state.isLs && _this2.emitLog(LOG_TYPES.LOAD_START, {});
        _state.isLs = true;
        _state.isTimeUpdate = false;
        _state.isFFLoading = true;
        _this2.pt = now();
        _this2.vt = 0;
        _this2.fvt = 0;
        _this2._initOnceEvents();
        _this2._onWaitingLoadStart();
      });
      this.on(LOADED_DATA, function() {
        _this2.vt = now();
        _this2.fvt = _this2.vt - _this2.pt;
        _this2.loadedCostTime = _this2.vt - _this2.newPointTime;
        var _this2$_state = _this2._state, isTimeUpdate = _this2$_state.isTimeUpdate, isFFSend = _this2$_state.isFFSend, autoplayStart = _this2$_state.autoplayStart;
        XG_DEBUG.logInfo("[xgLogger]".concat(_this2.player.playerId, " LOADED_DATA"), "fvt:".concat(_this2.fvt, " isTimeUpdate:").concat(_this2._state.isTimeUpdate, " loadedCostTime:").concat(_this2.loadedCostTime));
        if (isTimeUpdate || autoplayStart) {
          _this2._sendFF("loadedData");
        }
        if (!isFFSend) {
          _this2.emitLog(LOG_TYPES.LOADED_DATA, {});
        }
        _this2.suspendWaitingStatus("loadeddata");
      });
      this.on(SEEKING, this._onSeeking);
      this.on(SEEKED, this._onSeeked);
      this.on(DESTROY, function() {
        _this2.endState("destroy");
      });
      this.on(URL_CHANGE, function() {
        _this2.endState("urlChange");
        XG_DEBUG.logInfo("[xgLogger]".concat(_this2.player.playerId, " URL_CHANGE"));
        _this2._state.isFFSend && _this2._onReset();
      });
      this.on([PLAYING, CANPLAY], this._onPlaying);
      this.on(WAITING, this._onWaiting);
      this.on(ERROR, this._onError);
      this.on(RESET, function() {
        XG_DEBUG.logInfo("[xgLogger]".concat(_this2.player.playerId, " RESET"));
        _this2.endState("reset");
        _this2._initOnceEvents();
        _this2._onReset();
      });
    }
  }, {
    key: "_initOnceEvents",
    value: function _initOnceEvents() {
      this.off(AUTOPLAY_STARTED, this._onAutoplayStart);
      this.off(TIME_UPDATE, this._onTimeupdate);
      this.once(AUTOPLAY_STARTED, this._onAutoplayStart);
      this.once(TIME_UPDATE, this._onTimeupdate);
    }
  }, {
    key: "_sendFF",
    value: function _sendFF(endType) {
      this.s = now();
      var _this$_state = this._state, isFFLoading = _this$_state.isFFLoading, isFFSend = _this$_state.isFFSend;
      XG_DEBUG.logInfo("[xgLogger]".concat(this.player.playerId, " _sendFF"), "".concat(endType, " fvt:").concat(this.fvt, " isFFLoading:").concat(isFFLoading, " !isFFSend:").concat(!isFFSend));
      if (this.vt > 0 && isFFLoading && !isFFSend) {
        XG_DEBUG.logInfo("[xgLogger]".concat(this.player.playerId, " emitLog_firstFrame"), endType);
        this._state.isFFLoading = false;
        this._state.isFFSend = true;
        this.emitLog(LOG_TYPES.FIRST_FRAME, {
          fvt: this.fvt,
          costTime: this.fvt,
          vt: this.vt,
          startCostTime: this.startCostTime,
          loadedCostTime: this.loadedCostTime
        });
      }
    }
  }, {
    key: "_startWaitTimeout",
    value: function _startWaitTimeout() {
      var _this3 = this;
      if (this._waittTimer) {
        util.clearTimeout(this, this._waittTimer);
      }
      this._waittTimer = util.setTimeout(this, function() {
        _this3.suspendWaitingStatus("timeout");
        util.clearTimeout(_this3, _this3._waittTimer);
        _this3._waittTimer = null;
      }, this.config.waitTimeout);
    }
  }, {
    key: "endState",
    value: function endState(endType) {
      this.suspendWaitingStatus(endType);
      this.suspendSeekingStatus(endType);
    }
  }, {
    key: "suspendSeekingStatus",
    value: function suspendSeekingStatus(endType) {
      if (!this.seekingStart) {
        return;
      }
      var _now = now();
      var _cost = _now - this.seekingStart;
      this.seekingStart = 0;
      this.emitLog(LOG_TYPES.SEEK_END, {
        end: _now,
        costTime: _cost,
        endType
      });
    }
  }, {
    key: "suspendWaitingStatus",
    value: function suspendWaitingStatus(endType) {
      if (this._waitTimer) {
        util.clearTimeout(this, this._waitTimer);
        this._waitTimer = null;
      }
      if (this._waittTimer) {
        util.clearTimeout(this, this._waittTimer);
        this._waittTimer = null;
      }
      this._isWaiting = false;
      if (!this.waitingStart) {
        return;
      }
      var _now = now();
      var _cost = _now - this.waitingStart;
      var _fixedCost = _now - this.fixedWaitingStart;
      var waitTimeout = this.config.waitTimeout;
      this._isWaiting = false;
      this.waitingStart = 0;
      this.fixedWaitingStart = 0;
      this.emitLog(LOG_TYPES.WAIT_END, {
        fixedCostTime: _fixedCost > waitTimeout ? waitTimeout : _fixedCost,
        costTime: _cost > waitTimeout ? waitTimeout : _cost,
        type: endType === "loadeddata" ? 1 : this._waitType,
        endType: this._waitType === 2 ? "seek" : endType
      });
    }
  }, {
    key: "emitLog",
    value: function emitLog(eventType, data) {
      var player = this.player;
      this.emit(XGLOG, _objectSpread2({
        t: now(),
        host: util.getHostFromUrl(player.currentSrc),
        vtype: player.vtype,
        eventType,
        currentTime: this.player.currentTime,
        readyState: player.video.readyState,
        networkState: player.video.networkState
      }, data));
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "xgLogger";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        waitTimeout: 1e4
      };
    }
  }]);
  return XGLogger2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/assets/replay.js
function ReplaySvg() {
  return new DOMParser().parseFromString('<svg class="xgplayer-replay-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 78" width="78" height="78">\n  <path fill="#fff" transform="translate(20, 20)" d="M8.22708362,13.8757234 L11.2677371,12.6472196 C11.7798067,12.4403301 12.3626381,12.6877273 12.5695276,13.1997969 L12.9441342,14.1269807 C13.1510237,14.6390502 12.9036264,15.2218816 12.3915569,15.4287712 L6.8284538,17.6764107 L5.90126995,18.0510173 C5.38920044,18.2579068 4.80636901,18.0105096 4.5994795,17.49844 L1.97723335,11.0081531 C1.77034384,10.4960836 2.0177411,9.91325213 2.52981061,9.70636262 L3.45699446,9.33175602 C3.96906396,9.12486652 4.5518954,9.37226378 4.75878491,9.88433329 L5.67885163,12.1615783 C7.99551726,6.6766934 13.3983951,3 19.5,3 C27.7842712,3 34.5,9.71572875 34.5,18 C34.5,26.2842712 27.7842712,33 19.5,33 C15.4573596,33 11.6658607,31.3912946 8.87004692,28.5831991 C8.28554571,27.9961303 8.28762719,27.0463851 8.87469603,26.4618839 C9.46176488,25.8773827 10.4115101,25.8794641 10.9960113,26.466533 C13.2344327,28.7147875 16.263503,30 19.5,30 C26.127417,30 31.5,24.627417 31.5,18 C31.5,11.372583 26.127417,6 19.5,6 C14.4183772,6 9.94214483,9.18783811 8.22708362,13.8757234 Z"></path>\n</svg>\n', "image/svg+xml").firstChild;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/replay/index.js
var Replay = function(_Plugin) {
  _inherits(Replay2, _Plugin);
  var _super = _createSuper(Replay2);
  function Replay2() {
    _classCallCheck(this, Replay2);
    return _super.apply(this, arguments);
  }
  _createClass(Replay2, [{
    key: "registerIcons",
    value: function registerIcons() {
      return {
        replay: ReplaySvg
      };
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      var _this = this;
      Plugin.insert(this.icons.replay, this.root, 0);
      this.__handleReplay = this.hook("replayClick", function() {
        _this.player.replay();
      }, {
        pre: function pre(e) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
      this.bind(".xgplayer-replay", ["click", "touchend"], this.__handleReplay);
      this.on(ENDED, function() {
        if (!_this.playerConfig.loop) {
          util.addClass(_this.player.root, "replay");
        }
        if (_this.config.disable) {
          return;
        }
        _this.show();
        var path = _this.root.querySelector("path");
        if (path) {
          var transform = window.getComputedStyle(path).getPropertyValue("transform");
          if (typeof transform === "string" && transform.indexOf("none") > -1) {
            return null;
          } else {
            path.setAttribute("transform", transform);
          }
        }
      });
      this.on(PLAY, function() {
        _this.hide();
      });
    }
  }, {
    key: "handleReplay",
    value: function handleReplay(e) {
      e.preventDefault();
      e.stopPropagation();
      this.player.replay();
      util.removeClass(this.player.root, "replay");
    }
  }, {
    key: "show",
    value: function show(value) {
      if (this.config.disable) {
        return;
      }
      this.root.style.display = "flex";
    }
  }, {
    key: "enable",
    value: function enable() {
      this.config.disable = false;
    }
  }, {
    key: "disable",
    value: function disable() {
      this.config.disable = true;
      this.hide();
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      this.unbind(".xgplayer-replay", ["click", "touchend"], this.__handleReplay);
    }
  }, {
    key: "render",
    value: function render() {
      return '<xg-replay class="xgplayer-replay">\n      <xg-replay-txt class="xgplayer-replay-txt" lang-key="'.concat(this.i18nKeys.REPLAY, '">').concat(this.i18n.REPLAY, "</xg-replay-txt>\n    </xg-replay>");
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "replay";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        disable: false
      };
    }
  }]);
  return Replay2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/poster/index.js
var Poster = function(_Plugin) {
  _inherits(Poster2, _Plugin);
  var _super = _createSuper(Poster2);
  function Poster2() {
    _classCallCheck(this, Poster2);
    return _super.apply(this, arguments);
  }
  _createClass(Poster2, [{
    key: "isEndedShow",
    get: function get() {
      return this.config.isEndedShow;
    },
    set: function set(value) {
      this.config.isEndedShow = value;
    }
  }, {
    key: "hide",
    value: function hide() {
      util.addClass(this.root, "hide");
    }
  }, {
    key: "show",
    value: function show(value) {
      util.removeClass(this.root, "hide");
    }
  }, {
    key: "beforeCreate",
    value: function beforeCreate(args) {
      if (typeof args.player.config.poster === "string") {
        args.config.poster = args.player.config.poster;
      }
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      var _this = this;
      this.on(ENDED, function() {
        if (_this.isEndedShow) {
          util.removeClass(_this.root, "hide");
        }
      });
      if (this.config.hideCanplay) {
        this.once(TIME_UPDATE, function() {
          _this.onTimeUpdate();
        });
        this.on(URL_CHANGE, function() {
          util.removeClass(_this.root, "hide");
          util.addClass(_this.root, "xg-showplay");
          _this.once(TIME_UPDATE, function() {
            _this.onTimeUpdate();
          });
        });
      } else {
        this.on(PLAY, function() {
          util.addClass(_this.root, "hide");
        });
      }
    }
  }, {
    key: "setConfig",
    value: function setConfig(config) {
      var _this2 = this;
      Object.keys(config).forEach(function(key) {
        _this2.config[key] = config[key];
      });
      var poster = this.config.poster;
      this.update(poster);
    }
  }, {
    key: "onTimeUpdate",
    value: function onTimeUpdate() {
      var _this3 = this;
      if (!this.player.currentTime) {
        this.once(TIME_UPDATE, function() {
          _this3.onTimeUpdate();
        });
      } else {
        util.removeClass(this.root, "xg-showplay");
      }
    }
  }, {
    key: "update",
    value: function update(poster) {
      if (!poster) {
        return;
      }
      this.config.poster = poster;
      this.root.style.backgroundImage = "url(".concat(poster, ")");
    }
  }, {
    key: "getBgSize",
    value: function getBgSize(mode) {
      var _bg = "";
      switch (mode) {
        case "cover":
          _bg = "cover";
          break;
        case "contain":
          _bg = "contain";
          break;
        case "fixHeight":
          _bg = "auto 100%";
          break;
        default:
          _bg = "";
      }
      return _bg ? "background-size: ".concat(_bg, ";") : "";
    }
  }, {
    key: "render",
    value: function render() {
      var _this$config = this.config, poster = _this$config.poster, hideCanplay = _this$config.hideCanplay, fillMode = _this$config.fillMode, notHidden = _this$config.notHidden;
      var _bg = this.getBgSize(fillMode);
      var style = poster ? "background-image:url(".concat(poster, ");").concat(_bg) : _bg;
      var className = notHidden ? "xg-not-hidden" : hideCanplay ? "xg-showplay" : "";
      return '<xg-poster class="xgplayer-poster '.concat(className, '" style="').concat(style, '">\n    </xg-poster>');
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "poster";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        isEndedShow: true,
        hideCanplay: false,
        notHidden: false,
        poster: "",
        fillMode: "fixWidth"
      };
    }
  }]);
  return Poster2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/assets/play.js
function PlaySvg() {
  return new DOMParser().parseFromString('<svg class="play" xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="3 -4 28 40">\n  <path fill="#fff" transform="scale(0.0320625 0.0320625)" d="M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z"></path>\n</svg>\n', "image/svg+xml").firstChild;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/assets/pause.js
function PauseSvg() {
  return new DOMParser().parseFromString('<svg class="pause" xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="3 -4 28 40">\n  <path fill="#fff" transform="scale(0.0320625 0.0320625)" d="M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"></path>\n</svg>\n', "image/svg+xml").firstChild;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/start/index.js
var AnimateMap = {};
function addAnimate(key, seconds) {
  var callback = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    start: null,
    end: null
  };
  if (AnimateMap[key]) {
    window.clearTimeout(AnimateMap[key].id);
  }
  AnimateMap[key] = {};
  callback.start && callback.start();
  AnimateMap[key].id = window.setTimeout(function() {
    callback.end && callback.end();
    window.clearTimeout(AnimateMap[key].id);
    delete AnimateMap[key];
  }, seconds);
  return AnimateMap[key].id;
}
function clearAnimation(id) {
  if (id) {
    window.clearTimeout(id);
    return;
  }
  Object.keys(AnimateMap).map(function(key) {
    window.clearTimeout(AnimateMap[key].id);
    delete AnimateMap[key];
  });
}
var Start = function(_Plugin) {
  _inherits(Start2, _Plugin);
  var _super = _createSuper(Start2);
  function Start2(args) {
    var _this;
    _classCallCheck(this, Start2);
    _this = _super.call(this, args);
    _defineProperty(_assertThisInitialized(_this), "onPlayerReset", function() {
      _this.autoPlayStart = false;
      var className = _this.config.mode === "auto" ? "auto-hide" : "hide";
      _this.setAttr("data-state", "play");
      util.removeClass(_this.root, className);
      _this.show();
    });
    _defineProperty(_assertThisInitialized(_this), "onAutoplayStart", function() {
      if (_this.autoPlayStart) {
        return;
      }
      var className = _this.config.mode === "auto" ? "auto-hide" : "hide";
      util.addClass(_this.root, className);
      _this.autoPlayStart = true;
      _this.toggleTo("play");
    });
    _this.autoPlayStart = false;
    return _this;
  }
  _createClass(Start2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var playerConfig = this.playerConfig;
      this.initIcons();
      this.listenEvents();
      this.bindClickEvents();
      if (!playerConfig.autoplay) {
        this.show();
      }
    }
  }, {
    key: "listenEvents",
    value: function listenEvents() {
      var _this2 = this;
      var player = this.player, playerConfig = this.playerConfig;
      this.once(READY, function() {
        if (playerConfig) {
          if (playerConfig.lang && playerConfig.lang === "en") {
            util.addClass(player.root, "lang-is-en");
          } else if (playerConfig.lang === "jp") {
            util.addClass(player.root, "lang-is-jp");
          }
        }
      });
      this.on(AUTOPLAY_STARTED, this.onAutoplayStart);
      this.on(AUTOPLAY_PREVENTED, function() {
        var className = _this2.config.mode === "auto" ? "auto-hide" : "hide";
        _this2.setAttr("data-state", "play");
        util.removeClass(_this2.root, className);
        _this2.show();
      });
      this.on(PLAY, function() {
        _this2.toggleTo("play");
      });
      this.on(PAUSE, function() {
        _this2.toggleTo("pause");
      });
      this.on(RESET, function() {
        _this2.onPlayerReset();
      });
    }
  }, {
    key: "bindClickEvents",
    value: function bindClickEvents() {
      var _this3 = this;
      this.clickHandler = this.hook("startClick", this.switchPausePlay, {
        pre: function pre(e) {
          e.cancelable && e.preventDefault();
          e.stopPropagation();
          var paused = _this3.player.paused;
          _this3.emitUserAction(e, "switch_play_pause", {
            props: "paused",
            from: paused,
            to: !paused
          });
        }
      });
      this.bind(["click", "touchend"], this.clickHandler);
    }
  }, {
    key: "registerIcons",
    value: function registerIcons() {
      return {
        startPlay: {
          icon: PlaySvg,
          class: "xg-icon-play"
        },
        startPause: {
          icon: PauseSvg,
          class: "xg-icon-pause"
        }
      };
    }
  }, {
    key: "initIcons",
    value: function initIcons() {
      var icons = this.icons;
      this.appendChild("xg-start-inner", icons.startPlay);
      this.appendChild("xg-start-inner", icons.startPause);
    }
  }, {
    key: "hide",
    value: function hide() {
      util.addClass(this.root, "hide");
    }
  }, {
    key: "show",
    value: function show(value) {
      util.removeClass(this.root, "hide");
    }
  }, {
    key: "focusHide",
    value: function focusHide() {
      util.addClass(this.root, "focus-hide");
    }
  }, {
    key: "recover",
    value: function recover() {
      util.removeClass(this.root, "focus-hide");
    }
  }, {
    key: "switchStatus",
    value: function switchStatus(isAnimate) {
      if (isAnimate) {
        this.setAttr("data-state", !this.player.paused ? "play" : "pause");
      } else {
        this.setAttr("data-state", this.player.paused ? "play" : "pause");
      }
    }
  }, {
    key: "animate",
    value: function animate(endShow) {
      var _this4 = this;
      this._animateId = addAnimate("pauseplay", 400, {
        start: function start() {
          util.addClass(_this4.root, "interact");
          _this4.show();
          _this4.switchStatus(true);
        },
        end: function end() {
          util.removeClass(_this4.root, "interact");
          !endShow && _this4.hide();
          _this4._animateId = null;
        }
      });
    }
  }, {
    key: "endAnimate",
    value: function endAnimate() {
      util.removeClass(this.root, "interact");
      clearAnimation(this._animateId);
      this._animateId = null;
    }
  }, {
    key: "switchPausePlay",
    value: function switchPausePlay(e) {
      var player = this.player;
      e.cancelable && e.preventDefault();
      e.stopPropagation();
      if (player.state < STATES.READY) {
        return;
      }
      var paused = this.player.paused;
      if (!paused && player.state === STATES.RUNNING) {
        player.pause();
      } else {
        player.play();
      }
    }
  }, {
    key: "onPlayPause",
    value: function onPlayPause(status) {
      this.toggleTo(status);
    }
  }, {
    key: "toggleTo",
    value: function toggleTo(status) {
      var config = this.config, player = this.player;
      if (!player || player.state < STATES.RUNNING || !this.autoPlayStart) {
        return;
      }
      if (config.mode === "show") {
        this.switchStatus();
        this.show();
        return;
      }
      if (config.mode === "auto") {
        this.switchStatus();
        return;
      }
      if (config.isShowPause && player.paused && !player.ended || config.isShowEnd && player.ended) {
        this.switchStatus();
        this.show();
        this.endAnimate();
        return;
      }
      if (config.disableAnimate) {
        this.switchStatus();
        this.hide();
        return;
      }
      if (status === "play") {
        this.autoPlayStart ? this.animate() : this.hide();
      } else {
        if (!this.autoPlayStart || player.ended) {
          return;
        }
        this.animate();
      }
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      this.unbind(["click", "touchend"], this.clickHandler);
      clearAnimation(this._animateId);
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.playerConfig.autoplay ? this.config.mode === "auto" ? "auto-hide" : "hide" : "";
      return '\n    <xg-start class="xgplayer-start '.concat(className, '">\n    <xg-start-inner></xg-start-inner>\n    </xg-start>');
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "start";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        isShowPause: false,
        isShowEnd: false,
        disableAnimate: false,
        mode: "hide"
      };
    }
  }]);
  return Start2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/enter/index.js
var Enter = function(_Plugin) {
  _inherits(Enter2, _Plugin);
  var _super = _createSuper(Enter2);
  function Enter2() {
    _classCallCheck(this, Enter2);
    return _super.apply(this, arguments);
  }
  _createClass(Enter2, [{
    key: "render",
    value: function render() {
      var innerHtml = this.config.innerHtml;
      var root = util.createDom("xg-enter", "", {}, "xgplayer-enter");
      if (innerHtml && innerHtml instanceof window.HTMLElement) {
        root.appendChild(innerHtml);
      } else if (innerHtml && typeof innerHtml === "string") {
        root.innerHTML = innerHtml;
      } else {
        var barStr = "";
        for (var i = 1; i <= 12; i++) {
          barStr += '<div class="xgplayer-enter-bar'.concat(i, '"></div>');
        }
        root.innerHTML = '<div class="xgplayer-enter-spinner">'.concat(barStr, "</div>");
      }
      return root;
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "enter";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        innerHtml: "",
        logo: ""
      };
    }
  }]);
  return Enter2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/common/iconTools.js
function xgIconTips(plugin, textKey, isShow) {
  try {
    return ' <div class="xg-tips '.concat(isShow ? "hide" : " ", '" lang-key="').concat(plugin.i18nKeys[textKey], '">\n    ').concat(plugin.i18n[textKey], "\n    </div>");
  } catch (e) {
    return '<div class="xg-tips hide"></div>';
  }
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/miniScreen/miniScreenIcon.js
var MiniScreenIcon = function(_Plugin) {
  _inherits(MiniScreenIcon2, _Plugin);
  var _super = _createSuper(MiniScreenIcon2);
  function MiniScreenIcon2() {
    _classCallCheck(this, MiniScreenIcon2);
    return _super.apply(this, arguments);
  }
  _createClass(MiniScreenIcon2, [{
    key: "afterCreate",
    value: function afterCreate() {
      this.getMini = this.getMini.bind(this);
      this.exitMini = this.exitMini.bind(this);
      this.bind("click", this.getMini);
    }
  }, {
    key: "getMini",
    value: function getMini() {
      this.config.onClick && this.config.onClick();
    }
  }, {
    key: "exitMini",
    value: function exitMini() {
      this.config.onClick && this.config.onClick();
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      this.unbind(["click", "touchend"], this.getMini);
    }
  }, {
    key: "render",
    value: function render() {
      var langKey = "MINISCREEN";
      return '\n      <xg-icon class="xgplayer-miniicon">\n      <div class="xgplayer-icon btn-text"><span class="icon-text" lang-key="'.concat(this.i18nKeys[langKey], '">').concat(this.i18n[langKey], "</span></div>\n      </xg-icon>");
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "miniscreenIcon";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        position: POSITIONS.CONTROLS_RIGHT,
        index: 10
      };
    }
  }]);
  return MiniScreenIcon2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/utils/draggabilly.js
var import_eventemitter33 = __toESM(require_eventemitter3());
function getStyleSize(value) {
  var num = parseFloat(value);
  var isValid = value.indexOf("%") === -1 && !Number.isNaN(num);
  return isValid && num;
}
var measurements = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
var measurementsLength = measurements.length;
function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for (var i = 0; i < measurementsLength; i++) {
    var measurement = measurements[i];
    size[measurement] = 0;
  }
  return size;
}
function getStyle(elem) {
  var style = window.getComputedStyle(elem);
  return style;
}
function getSize(elem) {
  if (typeof elem === "string") {
    elem = document.querySelector(elem);
  }
  if (!elem || _typeof(elem) !== "object" || !elem.nodeType) {
    return;
  }
  var style = getStyle(elem);
  if (style.display === "none") {
    return getZeroSize();
  }
  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;
  var isBorderBox = size.isBorderBox = style.boxSizing === "border-box";
  for (var i = 0; i < measurementsLength; i++) {
    var measurement = measurements[i];
    var value = style[measurement];
    var num = parseFloat(value);
    size[measurement] = !Number.isNaN(num) ? num : 0;
  }
  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;
  var isBorderBoxSizeOuter = isBorderBox;
  var styleWidth = getStyleSize(style.width);
  if (styleWidth !== false) {
    size.width = styleWidth + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
  }
  var styleHeight = getStyleSize(style.height);
  if (styleHeight !== false) {
    size.height = styleHeight + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
  }
  size.innerWidth = size.width - (paddingWidth + borderWidth);
  size.innerHeight = size.height - (paddingHeight + borderHeight);
  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;
  return size;
}
function getTouch(touches, dentifier) {
  for (var i = 0; i < touches.length; i++) {
    var touch = touches[i];
    if (touch.identifier === dentifier) {
      return touch;
    }
  }
}
var EVENTS = {
  START: "dragStart",
  MOVE: "dragMove",
  ENDED: "dragEnded"
};
var POST_START_EVENTS = {
  mousedown: ["mousemove", "mouseup"],
  touchstart: ["touchmove", "touchend", "touchcancel"],
  pointerdown: ["pointermove", "pointerup", "pointercancel"]
};
var Draggabilly = function(_EventEmitter) {
  _inherits(Draggabilly2, _EventEmitter);
  var _super = _createSuper(Draggabilly2);
  function Draggabilly2(root) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, Draggabilly2);
    _this = _super.call(this);
    _this.isEnabled = true;
    _this.isDragging = false;
    _this.isDown = false;
    _this.position = {};
    _this.downPoint = {};
    _this.dragPoint = {
      x: 0,
      y: 0
    };
    _this.startPos = {
      x: 0,
      y: 0
    };
    _this._root = root instanceof Element ? root : document.querySelector(root);
    _this._handlerDom = options.handle instanceof Element ? options.handle : document.querySelector(options.handle);
    if (!_this._root || !_this._handlerDom) {
      return _possibleConstructorReturn(_this);
    }
    _this._bindStartEvent();
    return _this;
  }
  _createClass(Draggabilly2, [{
    key: "_bindStartEvent",
    value: function _bindStartEvent() {
      var _this2 = this;
      if ("ontouchstart" in window) {
        this._startKey = "touchstart";
      } else {
        this._startKey = "mousedown";
      }
      this["on".concat(this._startKey)] = this["on".concat(this._startKey)].bind(this);
      this._handlerDom.addEventListener(this._startKey, this["on".concat(this._startKey)]);
      POST_START_EVENTS[this._startKey].map(function(key) {
        _this2["on".concat(key)] = _this2["on".concat(key)].bind(_this2);
      });
    }
  }, {
    key: "_unbindStartEvent",
    value: function _unbindStartEvent() {
      this._handlerDom.removeEventListener(this._startKey, this["on".concat(this._startKey)]);
    }
  }, {
    key: "_bindPostStartEvents",
    value: function _bindPostStartEvents(event) {
      var _this3 = this;
      if (!event) {
        return;
      }
      var events = POST_START_EVENTS[this._startKey];
      events.map(function(eventName) {
        window.addEventListener(eventName, _this3["on".concat(eventName)]);
      });
      this._boundPointerEvents = events;
    }
  }, {
    key: "_unbindPostStartEvents",
    value: function _unbindPostStartEvents() {
      var _this4 = this;
      if (!this._boundPointerEvents) {
        return;
      }
      this._boundPointerEvents.map(function(eventName) {
        window.removeEventListener(eventName, _this4["on".concat(eventName)]);
      });
      delete this._boundPointerEvents;
    }
  }, {
    key: "enable",
    value: function enable() {
      this.isEnabled = true;
    }
  }, {
    key: "disable",
    value: function disable() {
      this.isEnabled = false;
      if (this.isDragging) {
        this.onUp();
      }
    }
  }, {
    key: "onDocUp",
    value: function onDocUp(e) {
      this.onUp();
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this5 = this;
      if (!this.isDragging) {
        return;
      }
      this.positionDrag();
      window.requestAnimationFrame(function() {
        _this5.animate();
      });
    }
  }, {
    key: "positionDrag",
    value: function positionDrag() {
      var transform = "translate3d(".concat(this.dragPoint.x, "px, ").concat(this.dragPoint.y, "px, 0)");
      this._root.style.transform = transform;
      this._root.style.webKitTransform = transform;
    }
  }, {
    key: "setLeftTop",
    value: function setLeftTop() {
      this._root.style.left = this.position.x + "px";
      this._root.style.top = this.position.y + "px";
    }
  }, {
    key: "onmousedown",
    value: function onmousedown(e) {
      this.dragStart(e, e);
    }
  }, {
    key: "onmousemove",
    value: function onmousemove(e) {
      this.dragMove(e, e);
    }
  }, {
    key: "onmouseup",
    value: function onmouseup(e) {
      this.dragEnd(e, e);
    }
  }, {
    key: "ontouchstart",
    value: function ontouchstart(e) {
      var touch = e.changedTouches[0];
      this.dragStart(e, touch);
      this.touchIdentifier = touch.pointerId !== void 0 ? touch.pointerId : touch.identifier;
      e.preventDefault();
    }
  }, {
    key: "ontouchmove",
    value: function ontouchmove(e) {
      var touch = getTouch(e.changedTouches, this.touchIdentifier);
      if (touch) {
        this.dragMove(e, touch);
      }
    }
  }, {
    key: "ontouchend",
    value: function ontouchend(e) {
      var touch = getTouch(e.changedTouches, this.touchIdentifier);
      if (touch) {
        this.dragEnd(e, touch);
      }
      e.preventDefault();
    }
  }, {
    key: "ontouchcancel",
    value: function ontouchcancel(e) {
      var touch = getTouch(e.changedTouches, this.touchIdentifier);
      if (touch) {
        this.dragCancel(e, touch);
      }
    }
  }, {
    key: "dragStart",
    value: function dragStart(e, pointer) {
      if (!this._root || this.isDown || !this.isEnabled) {
        return;
      }
      this.downPoint = pointer;
      this.dragPoint.x = 0;
      this.dragPoint.y = 0;
      this._getPosition();
      var size = getSize(this._root);
      this.startPos.x = this.position.x;
      this.startPos.y = this.position.y;
      this.startPos.maxY = window.innerHeight - size.height;
      this.startPos.maxX = window.innerWidth - size.width;
      this.setLeftTop();
      this.isDown = true;
      this._bindPostStartEvents(e);
    }
  }, {
    key: "dragRealStart",
    value: function dragRealStart(e, pointer) {
      this.isDragging = true;
      this.animate();
      this.emit(EVENTS.START, this.startPos);
    }
  }, {
    key: "dragEnd",
    value: function dragEnd(e, pointer) {
      if (!this._root) {
        return;
      }
      this._unbindPostStartEvents();
      if (this.isDragging) {
        this._root.style.transform = "";
        this.setLeftTop();
        this.emit(EVENTS.ENDED);
      }
      this.presetInfo();
    }
  }, {
    key: "_dragPointerMove",
    value: function _dragPointerMove(e, pointer) {
      var moveVector = {
        x: pointer.pageX - this.downPoint.pageX,
        y: pointer.pageY - this.downPoint.pageY
      };
      if (!this.isDragging && this.hasDragStarted(moveVector)) {
        this.dragRealStart(e, pointer);
      }
      return moveVector;
    }
  }, {
    key: "dragMove",
    value: function dragMove(e, pointer) {
      e = e || window.event;
      if (!this.isDown) {
        return;
      }
      var _this$startPos = this.startPos, x = _this$startPos.x, y = _this$startPos.y;
      var moveVector = this._dragPointerMove(e, pointer);
      var dragX = moveVector.x;
      var dragY = moveVector.y;
      dragX = this.checkContain("x", dragX, x);
      dragY = this.checkContain("y", dragY, y);
      this.position.x = x + dragX;
      this.position.y = y + dragY;
      this.dragPoint.x = dragX;
      this.dragPoint.y = dragY;
      this.emit(EVENTS.MOVE, this.position);
    }
  }, {
    key: "dragCancel",
    value: function dragCancel(e, pointer) {
      this.dragEnd(e, pointer);
    }
  }, {
    key: "presetInfo",
    value: function presetInfo() {
      this.isDragging = false;
      this.startPos = {
        x: 0,
        y: 0
      };
      this.dragPoint = {
        x: 0,
        y: 0
      };
      this.isDown = false;
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      this._unbindStartEvent();
      this._unbindPostStartEvents();
      if (this.isDragging) {
        this.dragEnd();
      }
      this.removeAllListeners();
      this._handlerDom = null;
    }
  }, {
    key: "hasDragStarted",
    value: function hasDragStarted(moveVector) {
      return Math.abs(moveVector.x) > 3 || Math.abs(moveVector.y) > 3;
    }
  }, {
    key: "checkContain",
    value: function checkContain(axis, drag, grid) {
      if (drag + grid < 0) {
        return 0 - grid;
      }
      if (axis === "x" && drag + grid > this.startPos.maxX) {
        return this.startPos.maxX - grid;
      }
      if (axis === "y" && drag + grid > this.startPos.maxY) {
        return this.startPos.maxY - grid;
      }
      return drag;
    }
  }, {
    key: "_getPosition",
    value: function _getPosition() {
      var style = window.getComputedStyle(this._root);
      var x = this._getPositionCoord(style.left, "width");
      var y = this._getPositionCoord(style.top, "height");
      this.position.x = Number.isNaN(x) ? 0 : x;
      this.position.y = Number.isNaN(y) ? 0 : y;
      this._addTransformPosition(style);
    }
  }, {
    key: "_addTransformPosition",
    value: function _addTransformPosition(style) {
      var transform = style.transform;
      if (transform.indexOf("matrix") !== 0) {
        return;
      }
      var matrixValues = transform.split(",");
      var xIndex = transform.indexOf("matrix3d") === 0 ? 12 : 4;
      var translateX = parseInt(matrixValues[xIndex], 10);
      var translateY = parseInt(matrixValues[xIndex + 1], 10);
      this.position.x += translateX;
      this.position.y += translateY;
    }
  }, {
    key: "_getPositionCoord",
    value: function _getPositionCoord(styleSide, measure) {
      if (styleSide.indexOf("%") !== -1) {
        var parentSize = getSize(this._root.parentNode);
        return !parentSize ? 0 : parseFloat(styleSide) / 100 * parentSize[measure];
      }
      return parseInt(styleSide, 10);
    }
  }]);
  return Draggabilly2;
}(import_eventemitter33.default);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/miniScreen/index.js
var MiniScreen = function(_Plugin) {
  _inherits(MiniScreen2, _Plugin);
  var _super = _createSuper(MiniScreen2);
  function MiniScreen2(args) {
    var _this;
    _classCallCheck(this, MiniScreen2);
    _this = _super.call(this, args);
    _defineProperty(_assertThisInitialized(_this), "onCancelClick", function(e) {
      _this.exitMini();
      _this.isClose = true;
    });
    _defineProperty(_assertThisInitialized(_this), "onCenterClick", function(e) {
      var _assertThisInitialize = _assertThisInitialized(_this), player = _assertThisInitialize.player;
      player.paused ? player.play() : player.pause();
    });
    _defineProperty(_assertThisInitialized(_this), "onScroll", function(e) {
      if (!window.scrollY && window.scrollY !== 0 || Math.abs(window.scrollY - _this.pos.scrollY) < 50) {
        return;
      }
      var scrollHeight = parseInt(util.getCss(_this.player.root, "height"));
      scrollHeight += _this.config.scrollTop;
      _this.pos.scrollY = window.scrollY;
      if (window.scrollY > scrollHeight + 5) {
        !_this.isMini && !_this.isClose && _this.getMini();
      } else if (window.scrollY <= scrollHeight) {
        _this.isMini && _this.exitMini();
        _this.isClose = false;
      }
    });
    _this.isMini = false;
    _this.isClose = false;
    var _assertThisInitialize2 = _assertThisInitialized(_this), config = _assertThisInitialize2.config;
    _this.pos = {
      left: config.left < 0 ? window.innerWidth - config.width - 20 : config.left,
      top: config.top < 0 ? window.innerHeight - config.height - 20 : config.top,
      height: _this.config.height,
      width: _this.config.width,
      scrollY: window.scrollY || 0
    };
    _this.lastStyle = null;
    return _this;
  }
  _createClass(MiniScreen2, [{
    key: "beforeCreate",
    value: function beforeCreate(args) {
      if (typeof args.player.config.mini === "boolean") {
        args.config.isShowIcon = args.player.config.mini;
      }
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      this.initIcons();
      this.on(PAUSE, function() {
        _this2.setAttr("data-state", "pause");
      });
      this.on(PLAY, function() {
        _this2.setAttr("data-state", "play");
      });
    }
  }, {
    key: "onPluginsReady",
    value: function onPluginsReady2() {
      var _this3 = this;
      var player = this.player, config = this.config;
      if (config.disable) {
        return;
      }
      if (this.config.isShowIcon) {
        var options = {
          config: {
            onClick: function onClick() {
              _this3.getMini();
            }
          }
        };
        player.controls.registerPlugin(MiniScreenIcon, options, MiniScreenIcon.pluginName);
      }
      var eventName = util.checkTouchSupport() ? "touchend" : "click";
      this.bind(".mini-cancel-btn", eventName, this.onCancelClick);
      this.bind(".play-icon", eventName, this.onCenterClick);
      if (!this.config.disableDrag) {
        this._draggabilly = new Draggabilly(this.player.root, {
          handle: this.root
        });
      }
      if (this.config.isScrollSwitch) {
        window.addEventListener("scroll", this.onScroll);
      }
    }
  }, {
    key: "registerIcons",
    value: function registerIcons() {
      return {
        play: {
          icon: PlaySvg,
          class: "xg-icon-play"
        },
        pause: {
          icon: PauseSvg,
          class: "xg-icon-pause"
        }
      };
    }
  }, {
    key: "initIcons",
    value: function initIcons() {
      var icons = this.icons;
      this.appendChild(".play-icon", icons.play);
      this.appendChild(".play-icon", icons.pause);
    }
  }, {
    key: "getMini",
    value: function getMini() {
      var _this4 = this;
      if (this.isMini) {
        return;
      }
      var player = this.player, playerConfig = this.playerConfig;
      var target = this.config.target || this.player.root;
      this.lastStyle = {};
      util.addClass(player.root, "xgplayer-mini");
      ["width", "height", "top", "left"].map(function(key) {
        _this4.lastStyle[key] = target.style[key];
        target.style[key] = "".concat(_this4.pos[key], "px");
      });
      if (playerConfig.fluid) {
        target.style["padding-top"] = "";
      }
      this.emit(MINI_STATE_CHANGE, true);
      player.isMini = this.isMini = true;
    }
  }, {
    key: "exitMini",
    value: function exitMini() {
      var _this5 = this;
      if (!this.isMini) {
        return false;
      }
      var player = this.player, playerConfig = this.playerConfig;
      var target = this.config.target || this.player.root;
      util.removeClass(player.root, "xgplayer-mini");
      if (this.lastStyle) {
        Object.keys(this.lastStyle).map(function(key) {
          target.style[key] = _this5.lastStyle[key];
        });
      }
      this.lastStyle = null;
      if (playerConfig.fluid) {
        player.root.style.width = "100%";
        player.root.style.height = "0";
        player.root.style["padding-top"] = "".concat(playerConfig.height * 100 / playerConfig.width, "%");
      }
      this.emit(MINI_STATE_CHANGE, false);
      this.isMini = player.isMini = false;
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      window.removeEventListener("scroll", this.onScroll);
      var eventName = util.checkTouchSupport() ? "touchend" : "click";
      this.unbind(".mini-cancel-btn", eventName, this.onCancelClick);
      this.unbind(".play-icon", eventName, this.onCenterClick);
      this._draggabilly && this._draggabilly.destroy();
      this._draggabilly = null;
      this.exitMini();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.config.disable) {
        return;
      }
      return '\n      <xg-mini-layer class="xg-mini-layer">\n      <xg-mini-header class="xgplayer-mini-header">\n      '.concat(xgIconTips(this, "MINI_DRAG", this.playerConfig.isHideTips), '\n      </xg-mini-header>\n      <div class="mini-cancel-btn">\n        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">\n          <path fill="#fff" fill-rule="evenodd" d="M3.99 3.49a1 1 0 0 1 1.414 0L10 8.085l4.596-4.595a1 1 0 1 1 1.414 1.414L11.414 9.5l4.596 4.596a1 1 0 0 1 .084 1.32l-.084.094a1 1 0 0 1-1.414 0L10 10.914 5.404 15.51a1 1 0 0 1-1.414-1.414L8.585 9.5 3.99 4.904a1 1 0 0 1-.084-1.32z"></path>\n        </svg>\n      </div>\n      <div class="play-icon">\n      </div>\n      </xg-mini-layer>');
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "miniscreen";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        index: 10,
        disable: false,
        width: 320,
        height: 180,
        left: -1,
        top: -1,
        isShowIcon: false,
        isScrollSwitch: false,
        scrollTop: 0,
        disableDrag: false
      };
    }
  }]);
  return MiniScreen2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/pc/index.js
var import_delegate2 = __toESM(require_delegate());
var MOUSE_EVENTS = {
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  mousemove: "onMouseMove"
};
var HOOKS = ["videoClick", "videoDbClick"];
var PCPlugin = function(_BasePlugin) {
  _inherits(PCPlugin2, _BasePlugin);
  var _super = _createSuper(PCPlugin2);
  function PCPlugin2() {
    var _this;
    _classCallCheck(this, PCPlugin2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "onMouseMove", function(e) {
      var _assertThisInitialize = _assertThisInitialized(_this), player = _assertThisInitialize.player, playerConfig = _assertThisInitialize.playerConfig;
      if (!player.isActive) {
        player.focus({
          autoHide: !playerConfig.closeDelayBlur
        });
        !playerConfig.closeFocusVideoFocus && player.media.focus();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function(e) {
      var _assertThisInitialize2 = _assertThisInitialized(_this), playerConfig = _assertThisInitialize2.playerConfig, player = _assertThisInitialize2.player;
      !playerConfig.closeFocusVideoFocus && player.media.focus();
      if (playerConfig.closeDelayBlur) {
        player.focus({
          autoHide: false
        });
      } else {
        player.focus();
      }
      _this.emit(ENTER_PLAYER);
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function(e) {
      var _this$playerConfig = _this.playerConfig, closePlayerBlur = _this$playerConfig.closePlayerBlur, leavePlayerTime = _this$playerConfig.leavePlayerTime, closeDelayBlur = _this$playerConfig.closeDelayBlur;
      if (!closePlayerBlur && !closeDelayBlur) {
        if (leavePlayerTime) {
          _this.player.focus({
            autoHide: true,
            delay: leavePlayerTime
          });
        } else {
          _this.player.blur({
            ignorePaused: true
          });
        }
      }
      _this.emit(LEAVE_PLAYER);
    });
    _defineProperty(_assertThisInitialized(_this), "onVideoClick", function(e) {
      var _assertThisInitialize3 = _assertThisInitialized(_this), player = _assertThisInitialize3.player, playerConfig = _assertThisInitialize3.playerConfig;
      if (e.target && playerConfig.closeVideoClick) {
        return;
      }
      if (e.target === player.root || e.target === player.media || e.target === player.innerContainer || e.target === player.media.__canvas) {
        e.preventDefault();
        if (!playerConfig.closeVideoStopPropagation) {
          e.stopPropagation();
        }
        _this._clickCount++;
        if (_this.clickTimer) {
          clearTimeout(_this.clickTimer);
          _this.clickTimer = null;
        }
        _this.clickTimer = setTimeout(function() {
          if (!_this._clickCount) {
            return;
          }
          _this._clickCount--;
          runHooks(_assertThisInitialized(_this), HOOKS[0], function(plugin, data) {
            _this.switchPlayPause(data.e);
          }, {
            e,
            paused: player.paused
          });
          clearTimeout(_this.clickTimer);
          _this.clickTimer = null;
        }, 300);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onVideoDblClick", function(e) {
      var _assertThisInitialize4 = _assertThisInitialized(_this), player = _assertThisInitialize4.player, playerConfig = _assertThisInitialize4.playerConfig;
      if (playerConfig.closeVideoDblclick || !e.target || e.target !== player.media && e.target !== player.media.__canvas) {
        return;
      }
      if (!playerConfig.closeVideoClick && _this._clickCount < 2) {
        _this._clickCount = 0;
        return;
      }
      _this._clickCount = 0;
      if (_this.clickTimer) {
        clearTimeout(_this.clickTimer);
        _this.clickTimer = null;
      }
      e.preventDefault();
      e.stopPropagation();
      runHooks(_assertThisInitialized(_this), HOOKS[1], function(plugin, data) {
        _this.emitUserAction(data.e, "switch_fullscreen", {
          props: "fullscreen",
          from: player.fullscreen,
          to: !player.fullscreen
        });
        player.fullscreen ? player.exitFullscreen() : player.getFullscreen();
      }, {
        e,
        fullscreen: player.fullscreen
      });
    });
    return _this;
  }
  _createClass(PCPlugin2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      this._clickCount = 0;
      HOOKS.map(function(item) {
        _this2.__hooks[item] = null;
      });
      var isMobileSimulateMode = this.playerConfig.isMobileSimulateMode;
      if (isMobileSimulateMode === "mobile" || sniffer.device === "mobile" && !sniffer.os.isIpad) {
        return;
      }
      this.initEvents();
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      var _this3 = this;
      var _this$player = this.player, media = _this$player.media, root = _this$player.root;
      var enableContextmenu = this.playerConfig.enableContextmenu;
      root && root.addEventListener("click", this.onVideoClick, false);
      root && root.addEventListener("dblclick", this.onVideoDblClick, false);
      Object.keys(MOUSE_EVENTS).map(function(item) {
        root.addEventListener(item, _this3[MOUSE_EVENTS[item]], false);
      });
      !enableContextmenu && media && media.addEventListener("contextmenu", this.onContextmenu, false);
    }
  }, {
    key: "switchPlayPause",
    value: function switchPlayPause(e) {
      var player = this.player;
      this.emitUserAction(e, "switch_play_pause", {
        props: "paused",
        from: player.paused,
        to: !player.paused
      });
      if (!player.ended) {
        player.paused ? player.play() : player.pause();
      } else {
        player.duration !== Infinity && player.duration > 0 && player.replay();
      }
    }
  }, {
    key: "onContextmenu",
    value: function onContextmenu(e) {
      e = e || window.event;
      if (e.preventDefault) {
        e.preventDefault();
      }
      if (e.stopPropagation) {
        e.stopPropagation();
      } else {
        e.returnValue = false;
        e.cancelBubble = true;
      }
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      var _this4 = this;
      var _this$player2 = this.player, video = _this$player2.video, root = _this$player2.root;
      this.clickTimer && clearTimeout(this.clickTimer);
      root.removeEventListener("click", this.onVideoClick, false);
      root.removeEventListener("dblclick", this.onVideoDblClick, false);
      video.removeEventListener("contextmenu", this.onContextmenu, false);
      Object.keys(MOUSE_EVENTS).map(function(item) {
        root.removeEventListener(item, _this4[MOUSE_EVENTS[item]], false);
      });
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "pc";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {};
    }
  }]);
  return PCPlugin2;
}(BasePlugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/mobile/touch.js
var EVENTS2 = {
  PRESS: "press",
  PRESS_END: "pressend",
  DOUBlE_CLICK: "doubleclick",
  CLICK: "click",
  TOUCH_MOVE: "touchmove",
  TOUCH_START: "touchstart",
  TOUCH_END: "touchend"
};
var TOUCHS = {
  start: "touchstart",
  end: "touchend",
  move: "touchmove",
  cancel: "touchcancel"
};
var MOUSES = {
  start: "mousedown",
  end: "mouseup",
  move: "mousemove",
  cancel: "mouseleave"
};
function getTouch2(touches) {
  if (touches && touches.length > 0) {
    return touches[touches.length - 1];
  } else {
    return null;
  }
}
function getDefaultConfig2() {
  return {
    pressDelay: 600,
    dbClickDelay: 200,
    disablePress: false,
    disableDbClick: false,
    miniStep: 2,
    needPreventDefault: true
  };
}
var Touche = function() {
  function Touche2(dom) {
    var _this = this;
    var _config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      eventType: "touch"
    };
    _classCallCheck(this, Touche2);
    _defineProperty(this, "onTouchStart", function(e) {
      var _pos = _this._pos, root = _this.root;
      var touch = getTouch2(e.touches);
      _pos.x = touch ? parseInt(touch.pageX, 10) : e.pageX;
      _pos.y = touch ? parseInt(touch.pageX, 10) : e.pageX;
      _pos.start = true;
      _this.__setPress(e);
      root.addEventListener(_this.events.end, _this.onTouchEnd);
      root.addEventListener(_this.events.cancel, _this.onTouchCancel);
      root.addEventListener(_this.events.move, _this.onTouchMove);
      _this.trigger(EVENTS2.TOUCH_START, e);
    });
    _defineProperty(this, "onTouchCancel", function(e) {
      _this.onTouchEnd(e);
    });
    _defineProperty(this, "onTouchEnd", function(e) {
      var _pos = _this._pos, root = _this.root;
      _this.__clearPress();
      root.removeEventListener(_this.events.cancel, _this.onTouchCancel);
      root.removeEventListener(_this.events.end, _this.onTouchEnd);
      root.removeEventListener(_this.events.move, _this.onTouchMove);
      e.moving = _pos.moving;
      e.press = _pos.press;
      _pos.press && _this.trigger(EVENTS2.PRESS_END, e);
      _this.trigger(EVENTS2.TOUCH_END, e);
      !_pos.press && !_pos.moving && _this.__setDb(e);
      _pos.press = false;
      _pos.start = false;
      _pos.moving = false;
    });
    _defineProperty(this, "onTouchMove", function(e) {
      var _pos = _this._pos, config = _this.config;
      var touch = getTouch2(e.touches);
      var x = touch ? parseInt(touch.pageX, 10) : e.pageX;
      var y = touch ? parseInt(touch.pageY, 10) : e.pageX;
      var diffx = x - _pos.x;
      var diffy = y - _pos.y;
      if (Math.abs(diffy) < config.miniStep && Math.abs(diffx) < config.miniStep) {
        return;
      }
      _this.__clearPress();
      _pos.press && _this.trigger(EVENTS2.PRESS_END, e);
      _pos.press = false;
      _pos.moving = true;
      _this.trigger(EVENTS2.TOUCH_MOVE, e);
    });
    this._pos = {
      moving: false,
      start: false,
      x: 0,
      y: 0
    };
    this.config = getDefaultConfig2();
    Object.keys(_config).map(function(key) {
      _this.config[key] = _config[key];
    });
    this.root = dom;
    this.events = _config.eventType === "mouse" ? MOUSES : TOUCHS;
    this.pressIntrvalId = null;
    this.dbIntrvalId = null;
    this.__handlers = {};
    this._initEvent();
  }
  _createClass(Touche2, [{
    key: "_initEvent",
    value: function _initEvent() {
      this.root.addEventListener(this.events.start, this.onTouchStart);
    }
  }, {
    key: "__setPress",
    value: function __setPress(e) {
      var _this2 = this;
      var config = this.config;
      if (this.pressIntrvalId) {
        this.__clearPress();
      }
      this.pressIntrvalId = setTimeout(function() {
        _this2.trigger(EVENTS2.PRESS, e);
        _this2._pos.press = true;
        _this2.__clearPress();
      }, config.pressDelay);
    }
  }, {
    key: "__clearPress",
    value: function __clearPress() {
      window.clearTimeout(this.pressIntrvalId);
      this.pressIntrvalId = null;
    }
  }, {
    key: "__setDb",
    value: function __setDb(e) {
      var _this3 = this;
      var config = this.config;
      if (this.dbIntrvalId) {
        this.__clearDb();
        this.trigger(EVENTS2.DOUBlE_CLICK, e);
        return;
      }
      this.dbIntrvalId = setTimeout(function() {
        _this3.__clearDb();
        if (!_this3._pos.start && !_this3._pos.press && !_this3._pos.moving) {
          _this3.trigger(EVENTS2.CLICK, e);
        }
      }, config.dbClickDelay);
    }
  }, {
    key: "__clearDb",
    value: function __clearDb() {
      clearTimeout(this.dbIntrvalId);
      this.dbIntrvalId = null;
    }
  }, {
    key: "on",
    value: function on(event, handler) {
      if (!this.__handlers[event]) {
        this.__handlers[event] = [];
      }
      this.__handlers[event].push(handler);
    }
  }, {
    key: "off",
    value: function off(event, handler) {
      if (!this.__handlers[event]) {
        return;
      }
      var handlers = this.__handlers[event];
      var index = -1;
      for (var i = 0; i < handlers.length; i++) {
        if (handlers[i] === handler) {
          index = i;
          break;
        }
      }
      if (index >= 0) {
        this.__handlers[event].splice(index, 1);
      }
    }
  }, {
    key: "trigger",
    value: function trigger(event, e) {
      if (!this.__handlers[event]) {
        return;
      }
      this.__handlers[event].map(function(handler) {
        try {
          handler(e);
        } catch (error) {
          console.error("trigger>>:".concat(event), error);
        }
      });
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      var _this4 = this;
      var map = {
        touchend: "onTouchEnd",
        touchmove: "onTouchMove",
        touchstart: "onTouchStart"
      };
      Object.keys(map).forEach(function(key) {
        _this4.root.removeEventListener(key, _this4[map[key]]);
      });
    }
  }]);
  return Touche2;
}();

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/assets/seekicon.js
function SeekTipIcon() {
  return new DOMParser().parseFromString('<svg width="20" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"\n  xmlns:xlink="http://www.w3.org/1999/xlink">\n  <path opacity="0.54"\n    d="M7.5 3.63397C8.16667 4.01887 8.16667 4.98113 7.5 5.36603L1.5 8.83013C0.833334 9.21503 0 8.7339 0 7.9641L0 1.0359C0 0.266098 0.833333 -0.215027 1.5 0.169873L7.5 3.63397Z"\n    fill="white" />\n  <path transform="translate(5 0)" d="M7.5 3.63397C8.16667 4.01887 8.16667 4.98113 7.5 5.36603L1.5 8.83013C0.833334 9.21503 0 8.7339 0 7.9641L0 1.0359C0 0.266098 0.833333 -0.215027 1.5 0.169873L7.5 3.63397Z" fill="white"/>\n</svg>', "image/svg+xml").firstChild;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/mobile/index.js
var ACTIONS = {
  AUTO: "auto",
  SEEKING: "seeking",
  PLAYBACK: "playbackrate",
  LIGHT: ""
};
var HOOKS2 = ["videoClick", "videoDbClick"];
var MobilePlugin = function(_Plugin) {
  _inherits(MobilePlugin2, _Plugin);
  var _super = _createSuper(MobilePlugin2);
  function MobilePlugin2(options) {
    var _this;
    _classCallCheck(this, MobilePlugin2);
    _this = _super.call(this, options);
    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function(e) {
      var _assertThisInitialize = _assertThisInitialized(_this), player = _assertThisInitialize.player, config = _assertThisInitialize.config, pos = _assertThisInitialize.pos, playerConfig = _assertThisInitialize.playerConfig;
      var touche = _this.getTouche(e);
      if (touche && !config.disableGesture && _this.duration > 0 && !player.ended) {
        pos.isStart = true;
        _this.timer && clearTimeout(_this.timer);
        util.checkIsFunction(playerConfig.disableSwipeHandler) && playerConfig.disableSwipeHandler();
        _this.find(".xg-dur").innerHTML = util.format(_this.duration);
        var rect = _this.root.getBoundingClientRect();
        if (player.rotateDeg === 90) {
          pos.top = rect.left;
          pos.left = rect.top;
          pos.width = rect.height;
          pos.height = rect.width;
        } else {
          pos.top = rect.top;
          pos.left = rect.left;
          pos.width = rect.width;
          pos.height = rect.height;
        }
        var _x = parseInt(touche.pageX - pos.left, 10);
        var _y = parseInt(touche.pageY - pos.top, 10);
        pos.x = player.rotateDeg === 90 ? _y : _x;
        pos.y = player.rotateDeg === 90 ? _x : _y;
        pos.scopeL = config.scopeL * pos.width;
        pos.scopeR = (1 - config.scopeR) * pos.width;
        pos.scopeM1 = pos.width * (1 - config.scopeM) / 2;
        pos.scopeM2 = pos.width - pos.scopeM1;
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onTouchMove", function(e) {
      var touche = _this.getTouche(e);
      var _assertThisInitialize2 = _assertThisInitialized(_this), pos = _assertThisInitialize2.pos, config = _assertThisInitialize2.config, player = _assertThisInitialize2.player;
      if (!touche || config.disableGesture || !_this.duration || !pos.isStart) {
        return;
      }
      var miniMoveStep = config.miniMoveStep, hideControlsActive = config.hideControlsActive;
      var _x = parseInt(touche.pageX - pos.left, 10);
      var _y = parseInt(touche.pageY - pos.top, 10);
      var x = player.rotateDeg === 90 ? _y : _x;
      var y = player.rotateDeg === 90 ? _x : _y;
      if (Math.abs(x - pos.x) > miniMoveStep || Math.abs(y - pos.y) > miniMoveStep) {
        var diffx = x - pos.x;
        var diffy = y - pos.y;
        var scope = pos.scope;
        if (scope === -1) {
          scope = _this.checkScope(x, y, diffx, diffy, pos);
          if (scope === 0) {
            !hideControlsActive ? player.focus({
              autoHide: false
            }) : player.blur();
            !pos.time && (pos.time = parseInt(player.currentTime * 1e3, 10) + _this.timeOffset * 1e3);
          }
          pos.scope = scope;
        }
        if (scope === -1 || scope > 0 && !config.gestureY || scope === 0 && !config.gestureX) {
          return;
        }
        _this.executeMove(diffx, diffy, scope, pos.width, pos.height);
        pos.x = x;
        pos.y = y;
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function(e) {
      var _assertThisInitialize3 = _assertThisInitialized(_this), player = _assertThisInitialize3.player, pos = _assertThisInitialize3.pos, playerConfig = _assertThisInitialize3.playerConfig;
      setTimeout(function() {
        player.getPlugin("progress") && player.getPlugin("progress").resetSeekState();
      }, 10);
      if (!pos.isStart) {
        return;
      }
      if (pos.scope > -1) {
        e.cancelable && e.preventDefault();
      }
      var _this$config = _this.config, disableGesture = _this$config.disableGesture, gestureX = _this$config.gestureX;
      if (!disableGesture && gestureX) {
        _this.endLastMove(pos.scope);
      } else {
        pos.time = 0;
      }
      pos.scope = -1;
      _this.resetPos();
      util.checkIsFunction(playerConfig.enableSwipeHandler) && playerConfig.enableSwipeHandler();
      _this.changeAction(ACTIONS.AUTO);
    });
    _defineProperty(_assertThisInitialized(_this), "onRootTouchMove", function(e) {
      if (_this.config.disableGesture || !_this.config.gestureX) {
        return;
      }
      if (_this.checkIsRootTarget(e)) {
        e.stopPropagation();
        if (!_this.pos.isStart) {
          _this.onTouchStart(e);
        } else {
          _this.onTouchMove(e);
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onRootTouchEnd", function(e) {
      if (_this.pos.scope > -1) {
        _this.onTouchEnd(e);
      }
    });
    _this.pos = {
      isStart: false,
      x: 0,
      y: 0,
      time: 0,
      volume: 0,
      rate: 1,
      light: 0,
      width: 0,
      height: 0,
      scopeL: 0,
      scopeR: 0,
      scopeM1: 0,
      scopeM2: 0,
      scope: -1
    };
    _this.timer = null;
    return _this;
  }
  _createClass(MobilePlugin2, [{
    key: "duration",
    get: function get() {
      return this.playerConfig.customDuration || this.player.duration;
    }
  }, {
    key: "timeOffset",
    get: function get() {
      return this.playerConfig.timeOffset || 0;
    }
  }, {
    key: "registerIcons",
    value: function registerIcons() {
      return {
        seekTipIcon: {
          icon: SeekTipIcon,
          class: "xg-seek-pre"
        }
      };
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      HOOKS2.map(function(item) {
        _this2.__hooks[item] = null;
      });
      var playerConfig = this.playerConfig, config = this.config, player = this.player;
      if (playerConfig.closeVideoDblclick === true) {
        config.closedbClick = true;
      }
      this.resetPos();
      if (!util.isUndefined(playerConfig.disableGesture)) {
        config.disableGesture = !!playerConfig.disableGesture;
      }
      this.appendChild(".xg-seek-icon", this.icons.seekTipIcon);
      this.xgMask = util.createDom("xg-mask", "", {}, "xgmask");
      player.root.appendChild(this.xgMask);
      this.initCustomStyle();
      this.registerThumbnail();
      var eventType = this.domEventType === "mouse" ? "mouse" : "touch";
      this.touch = new Touche(this.root, {
        eventType,
        needPreventDefault: !this.config.disableGesture
      });
      this.root.addEventListener("contextmenu", function(e) {
        e.preventDefault();
      });
      player.root.addEventListener("touchmove", this.onRootTouchMove, true);
      player.root.addEventListener("touchend", this.onRootTouchEnd, true);
      player.root.addEventListener("touchcancel", this.onRootTouchEnd, true);
      var controls = this.player.controls;
      if (controls && controls.center) {
        controls.center.addEventListener("touchmove", this.onRootTouchMove, true);
        controls.center.addEventListener("touchend", this.onRootTouchEnd, true);
        controls.center.addEventListener("touchcancel", this.onRootTouchEnd, true);
      }
      this.on(DURATION_CHANGE, function() {
        var player2 = _this2.player, config2 = _this2.config;
        if (player2.duration > 0 && player2.duration * 1e3 < config2.moveDuration) {
          config2.moveDuration = player2.duration * 1e3;
        }
      });
      this.on([CANPLAY, ENDED], function() {
        var _this2$pos = _this2.pos, time = _this2$pos.time, isStart = _this2$pos.isStart;
        if (!isStart && time > 0) {
          _this2.pos.time = 0;
        }
      });
      var eventsMap = {
        touchstart: "onTouchStart",
        touchmove: "onTouchMove",
        touchend: "onTouchEnd",
        press: "onPress",
        pressend: "onPressEnd",
        click: "onClick",
        doubleclick: "onDbClick"
      };
      Object.keys(eventsMap).map(function(key) {
        _this2.touch.on(key, function(e) {
          _this2[eventsMap[key]](e);
        });
      });
      if (!config.disableActive) {
        var progressPlugin = player.plugins.progress;
        if (progressPlugin) {
          progressPlugin.addCallBack("dragmove", function(data) {
            _this2.activeSeekNote(data.currentTime, data.forward);
          });
          ["dragend", "click"].forEach(function(key) {
            progressPlugin.addCallBack(key, function() {
              _this2.changeAction(ACTIONS.AUTO);
            });
          });
        }
      }
    }
  }, {
    key: "registerThumbnail",
    value: function registerThumbnail() {
      var player = this.player;
      var thumbnail = player.plugins.thumbnail;
      if (thumbnail && thumbnail.usable) {
        this.thumbnail = thumbnail.createThumbnail(null, "mobile-thumbnail");
        var timePreview = this.find(".time-preview");
        timePreview.insertBefore(this.thumbnail, timePreview.children[0]);
      }
    }
  }, {
    key: "initCustomStyle",
    value: function initCustomStyle() {
      var _ref = this.playerConfig || {}, commonStyle = _ref.commonStyle;
      var playedColor = commonStyle.playedColor, progressColor = commonStyle.progressColor, timePreviewStyle = commonStyle.timePreviewStyle, curTimeColor = commonStyle.curTimeColor, durationColor = commonStyle.durationColor;
      if (playedColor) {
        this.find(".xg-curbar").style.backgroundColor = playedColor;
      }
      if (progressColor) {
        this.find(".xg-bar").style.backgroundColor = progressColor;
      }
      if (timePreviewStyle) {
        var previewDom = this.find(".time-preview");
        Object.keys(timePreviewStyle).forEach(function(key) {
          previewDom.style[key] = timePreviewStyle[key];
        });
      }
      var curColor = curTimeColor || playedColor;
      var durColor = durationColor;
      curColor && (this.find(".xg-cur").style.color = curColor);
      durColor && (this.find(".xg-dur").style.color = durColor);
      this.config.disableTimeProgress && util.addClass(this.find(".xg-timebar"), "hide");
    }
  }, {
    key: "resetPos",
    value: function resetPos() {
      var _this3 = this;
      if (this.pos) {
        this.pos.isStart = false;
        this.pos.scope = -1;
        ["x", "y", "width", "height", "scopeL", "scopeR", "scopeM1", "scopeM2"].map(function(item) {
          _this3.pos[item] = 0;
        });
      } else {
        this.pos = {
          isStart: false,
          x: 0,
          y: 0,
          volume: 0,
          rate: 1,
          light: 0,
          width: 0,
          height: 0,
          scopeL: 0,
          scopeR: 0,
          scopeM1: 0,
          scopeM2: 0,
          scope: -1,
          time: 0
        };
      }
    }
  }, {
    key: "changeAction",
    value: function changeAction(action) {
      var player = this.player, root = this.root;
      root.setAttribute("data-xg-action", action);
      var startPlugin = player.plugins.start;
      startPlugin && startPlugin.recover();
    }
  }, {
    key: "getTouche",
    value: function getTouche(e) {
      var rotateDeg = this.player.rotateDeg;
      var touche = e.touches && e.touches.length > 0 ? e.touches[e.touches.length - 1] : e;
      return rotateDeg === 0 ? {
        pageX: touche.pageX,
        pageY: touche.pageY
      } : {
        pageX: touche.pageX,
        pageY: touche.pageY
      };
    }
  }, {
    key: "checkScope",
    value: function checkScope(x, y, diffx, diffy, pos) {
      var width = pos.width;
      var scope = -1;
      if (x < 0 || x > width) {
        return scope;
      }
      var mold = diffy === 0 ? Math.abs(diffx) : Math.abs(diffx / diffy);
      if (Math.abs(diffx) > 0 && mold >= 1.73 && x > pos.scopeM1 && x < pos.scopeM2) {
        scope = 0;
      } else if (Math.abs(diffx) === 0 || mold <= 0.57) {
        scope = x < pos.scopeL ? 1 : x > pos.scopeR ? 2 : 3;
      }
      return scope;
    }
  }, {
    key: "executeMove",
    value: function executeMove(diffx, diffy, scope, width, height) {
      switch (scope) {
        case 0:
          this.updateTime(diffx / width * this.config.scopeM);
          break;
        case 1:
          this.updateBrightness(diffy / height);
          break;
        case 2:
          if (!sniffer.os.isIos) {
            this.updateVolume(diffy / height);
          }
          break;
      }
    }
  }, {
    key: "endLastMove",
    value: function endLastMove(lastScope) {
      var _this4 = this;
      var pos = this.pos, player = this.player, config = this.config;
      var time = (pos.time - this.timeOffset) / 1e3;
      switch (lastScope) {
        case 0:
          player.seek(Number(time).toFixed(1));
          config.hideControlsEnd ? player.blur() : player.focus();
          this.timer = setTimeout(function() {
            _this4.pos.time = 0;
          }, 500);
          break;
      }
      this.changeAction(ACTIONS.AUTO);
    }
  }, {
    key: "checkIsRootTarget",
    value: function checkIsRootTarget(e) {
      var plugins = this.player.plugins || {};
      if (plugins.progress && plugins.progress.root.contains(e.target)) {
        return false;
      }
      return plugins.start && plugins.start.root.contains(e.target) || plugins.controls && plugins.controls.root.contains(e.target);
    }
  }, {
    key: "sendUseAction",
    value: function sendUseAction(event) {
      var paused = this.player.paused;
      this.emitUserAction(event, "switch_play_pause", {
        prop: "paused",
        from: paused,
        to: !paused
      });
    }
  }, {
    key: "clickHandler",
    value: function clickHandler(e) {
      var player = this.player, config = this.config, playerConfig = this.playerConfig;
      if (player.state < STATES.RUNNING) {
        if (!playerConfig.closeVideoClick) {
          this.sendUseAction(util.createEvent("click"));
          player.play();
        }
        return;
      }
      if (!config.closedbClick || playerConfig.closeVideoClick) {
        player.isActive ? player.blur() : player.focus();
      } else if (!playerConfig.closeVideoClick) {
        if (player.isActive || config.focusVideoClick) {
          this.sendUseAction(util.createEvent("click"));
          this.switchPlayPause();
        }
        player.focus();
      }
    }
  }, {
    key: "dbClickHandler",
    value: function dbClickHandler(e) {
      var config = this.config, player = this.player;
      if (!config.closedbClick && player.state >= STATES.RUNNING) {
        this.sendUseAction(util.createEvent("dblclick"));
        this.switchPlayPause();
      }
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      var _this5 = this;
      var player = this.player;
      runHooks(this, HOOKS2[0], function(plugin, data) {
        _this5.clickHandler(data.e);
      }, {
        e,
        paused: player.paused
      });
    }
  }, {
    key: "onDbClick",
    value: function onDbClick(e) {
      var _this6 = this;
      var player = this.player;
      runHooks(this, HOOKS2[1], function(plugin, data) {
        _this6.dbClickHandler(data.e);
      }, {
        e,
        paused: player.paused
      });
    }
  }, {
    key: "onPress",
    value: function onPress(e) {
      var pos = this.pos, config = this.config, player = this.player;
      if (config.disablePress) {
        return;
      }
      pos.rate = this.player.playbackRate;
      this.emitUserAction("press", "change_rate", {
        prop: "playbackRate",
        from: player.playbackRate,
        to: config.pressRate
      });
      player.playbackRate = config.pressRate;
      this.changeAction(ACTIONS.PLAYBACK);
    }
  }, {
    key: "onPressEnd",
    value: function onPressEnd(e) {
      var pos = this.pos, config = this.config, player = this.player;
      if (config.disablePress) {
        return;
      }
      this.emitUserAction("pressend", "change_rate", {
        prop: "playbackRate",
        from: player.playbackRate,
        to: pos.rate
      });
      player.playbackRate = pos.rate;
      pos.rate = 1;
      this.changeAction(ACTIONS.AUTO);
    }
  }, {
    key: "updateTime",
    value: function updateTime(percent) {
      var player = this.player, config = this.config;
      var duration = this.player.duration;
      percent = Number(percent.toFixed(4));
      var time = parseInt(percent * config.moveDuration, 10) + this.timeOffset;
      time += this.pos.time;
      time = time < 0 ? 0 : time > duration * 1e3 ? duration * 1e3 - 200 : time;
      player.getPlugin("time") && player.getPlugin("time").updateTime(time / 1e3);
      player.getPlugin("progress") && player.getPlugin("progress").updatePercent(time / 1e3 / this.duration, true);
      this.activeSeekNote(time / 1e3, percent > 0);
      if (config.isTouchingSeek) {
        player.seek(Number((time - this.timeOffset) / 1e3).toFixed(1));
      }
      this.pos.time = time;
    }
  }, {
    key: "updateVolume",
    value: function updateVolume(percent) {
      if (this.player.rotateDeg) {
        percent = -percent;
      }
      var player = this.player, pos = this.pos;
      percent = parseInt(percent * 100, 10);
      pos.volume += percent;
      if (Math.abs(pos.volume) < 10) {
        return;
      }
      var volume = parseInt(player.volume * 10, 10) - parseInt(pos.volume / 10, 10);
      volume = volume > 10 ? 10 : volume < 1 ? 0 : volume;
      player.volume = volume / 10;
      pos.volume = 0;
    }
  }, {
    key: "updateBrightness",
    value: function updateBrightness(percent) {
      var pos = this.pos, config = this.config, xgMask = this.xgMask;
      if (!config.darkness) {
        return;
      }
      if (this.player.rotateDeg) {
        percent = -percent;
      }
      var light = pos.light + 0.8 * percent;
      light = light > config.maxDarkness ? config.maxDarkness : light < 0 ? 0 : light;
      if (xgMask) {
        xgMask.style.backgroundColor = "rgba(0,0,0,".concat(light, ")");
      }
      pos.light = light;
    }
  }, {
    key: "activeSeekNote",
    value: function activeSeekNote(time) {
      var isForward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      var player = this.player, config = this.config;
      var isLive = !(this.duration !== Infinity && this.duration > 0);
      if (!time || typeof time !== "number" || isLive || config.disableActive) {
        return;
      }
      if (time < 0) {
        time = 0;
      } else if (time > player.duration) {
        time = player.duration - 0.2;
      }
      this.changeAction(ACTIONS.SEEKING);
      var startPlugin = player.plugins.start;
      startPlugin && startPlugin.focusHide();
      this.find(".xg-dur").innerHTML = util.format(this.duration);
      this.find(".xg-cur").innerHTML = util.format(time);
      this.find(".xg-curbar").style.width = "".concat(time / this.duration * 100, "%");
      if (isForward) {
        util.removeClass(this.find(".xg-seek-show"), "xg-back");
      } else {
        util.addClass(this.find(".xg-seek-show"), "xg-back");
      }
      this.updateThumbnails(time);
    }
  }, {
    key: "updateThumbnails",
    value: function updateThumbnails(time) {
      var player = this.player;
      var thumbnail = player.plugins.thumbnail;
      if (thumbnail && thumbnail.usable) {
        this.thumbnail && thumbnail.update(this.thumbnail, time, 160, 90);
      }
    }
  }, {
    key: "switchPlayPause",
    value: function switchPlayPause() {
      var player = this.player;
      if (player.state < STATES.ATTACHED) {
        return false;
      } else if (!player.ended) {
        if (player.paused) {
          player.play();
        } else {
          player.pause();
        }
      }
    }
  }, {
    key: "disableGesture",
    value: function disableGesture() {
      this.config.disableGesture = true;
    }
  }, {
    key: "enableGesture",
    value: function enableGesture() {
      this.config.disableGesture = false;
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      var player = this.player;
      this.timer && clearTimeout(this.timer);
      this.thumbnail = null;
      player.root.removeChild(this.xgMask);
      this.xgMask = null;
      this.touch && this.touch.destroy();
      this.touch = null;
      player.root.removeEventListener("touchmove", this.onRootTouchMove, true);
      player.root.removeEventListener("touchend", this.onRootTouchEnd, true);
      player.root.removeEventListener("touchcancel", this.onRootTouchEnd, true);
      var controls = this.player.controls;
      if (controls && controls.center) {
        controls.center.removeEventListener("touchmove", this.onRootTouchMove, true);
        controls.center.removeEventListener("touchend", this.onRootTouchEnd, true);
        controls.center.removeEventListener("touchcancel", this.onRootTouchEnd, true);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.config.gradient !== "normal" ? "gradient ".concat(this.config.gradient) : "gradient";
      return '\n     <xg-trigger class="trigger">\n     <div class="'.concat(className, '"></div>\n        <div class="time-preview">\n            <div class="xg-seek-show ').concat(this.config.disableSeekIcon ? " hide-seek-icon" : "", '">\n              <i class="xg-seek-icon"></i>\n              <span class="xg-cur">00:00</span>\n              <span class="xg-separator">/</span>\n              <span class="xg-dur">00:00</span>\n            </div>\n              <div class="xg-bar xg-timebar">\n                <div class="xg-curbar"></div>\n              </div>\n        </div>\n        <div class="xg-playbackrate xg-top-note">\n            <span><i>').concat(this.config.pressRate, "X</i>").concat(this.i18n.FORWARD, "</span>\n        </div>\n     </xg-trigger>\n    ");
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "mobile";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        index: 0,
        disableGesture: false,
        gestureX: true,
        gestureY: true,
        gradient: "normal",
        isTouchingSeek: false,
        miniMoveStep: 5,
        miniYPer: 5,
        scopeL: 0.25,
        scopeR: 0.25,
        scopeM: 0.9,
        pressRate: 2,
        darkness: true,
        maxDarkness: 0.8,
        disableActive: false,
        disableTimeProgress: false,
        hideControlsActive: false,
        hideControlsEnd: false,
        moveDuration: 60 * 6 * 1e3,
        closedbClick: false,
        disablePress: true,
        disableSeekIcon: false,
        focusVideoClick: false
      };
    }
  }]);
  return MobilePlugin2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/keyboard/index.js
var import_delegate3 = __toESM(require_delegate());
function preventDefault(e) {
  e.preventDefault();
  e.returnValue = false;
}
function isDisableTag(el) {
  var tagName = el.tagName;
  if (tagName === "INPUT" || tagName === "TEXTAREA" || el.isContentEditable) {
    return true;
  }
  return false;
}
var Keyboard = function(_BasePlugin) {
  _inherits(Keyboard2, _BasePlugin);
  var _super = _createSuper(Keyboard2);
  function Keyboard2() {
    var _this;
    _classCallCheck(this, Keyboard2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "onBodyKeyDown", function(event) {
      if (!_this.player) {
        return;
      }
      var e = event || window.event;
      var keyCode = e.keyCode;
      var _assertThisInitialize = _assertThisInitialized(_this), _keyState = _assertThisInitialize._keyState, player = _assertThisInitialize.player;
      var _this$config = _this.config, disable = _this$config.disable, disableBodyTrigger = _this$config.disableBodyTrigger, isIgnoreUserActive = _this$config.isIgnoreUserActive;
      if (disable || disableBodyTrigger || !(player.isUserActive || isIgnoreUserActive) || isDisableTag(e.target) || !_this.checkIsVisible() || e.metaKey || e.altKey || e.ctrlKey) {
        _keyState.isBodyKeyDown = false;
        return;
      }
      if (!event.repeat && !_keyState.isKeyDown) {
        if ((e.target === document.body || _this.config.isGlobalTrigger && !isDisableTag(e.target)) && _this.checkCode(keyCode, true)) {
          _keyState.isBodyKeyDown = true;
        }
        document.addEventListener("keyup", _this.onBodyKeyUp);
      }
      _keyState.isBodyKeyDown && _this.handleKeyDown(e);
    });
    _defineProperty(_assertThisInitialized(_this), "onBodyKeyUp", function(event) {
      if (!_this.player) {
        return;
      }
      document.removeEventListener("keyup", _this.onBodyKeyUp);
      _this.handleKeyUp(event);
    });
    _defineProperty(_assertThisInitialized(_this), "onKeydown", function(event) {
      if (!_this.player) {
        return;
      }
      var e = event || window.event;
      var _assertThisInitialize2 = _assertThisInitialized(_this), _keyState = _assertThisInitialize2._keyState;
      if (!e.repeat) {
        if (_this.config.disable || _this.config.disableRootTrigger || e.metaKey || e.altKey || e.ctrlKey) {
          return;
        }
        if (e && (e.keyCode === 37 || _this.checkCode(e.keyCode)) && (e.target === _this.player.root || e.target === _this.player.video || e.target === _this.player.controls.el)) {
          _keyState.isKeyDown = true;
        }
        _this.player.root.addEventListener("keyup", _this.onKeyup);
      }
      if (!_keyState.isKeyDown) {
        return;
      }
      _this.handleKeyDown(e);
    });
    _defineProperty(_assertThisInitialized(_this), "onKeyup", function(event) {
      if (!_this.player) {
        return;
      }
      _this.player.root.removeEventListener("keyup", _this.onKeyup);
      _this.handleKeyUp(event);
    });
    return _this;
  }
  _createClass(Keyboard2, [{
    key: "mergekeyCodeMap",
    value: function mergekeyCodeMap() {
      var _this2 = this;
      var extendkeyCodeMap = this.config.keyCodeMap;
      if (extendkeyCodeMap) {
        Object.keys(extendkeyCodeMap).map(function(key) {
          if (!_this2.keyCodeMap[key]) {
            _this2.keyCodeMap[key] = extendkeyCodeMap[key];
          } else {
            ["keyCode", "action", "disable", "pressAction", "disablePress", "isBodyTarget"].map(function(key1) {
              extendkeyCodeMap[key][key1] && (_this2.keyCodeMap[key][key1] = extendkeyCodeMap[key][key1]);
            });
          }
        });
      }
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      this.config.disable = !this.playerConfig.keyShortcut;
      var seekStep = typeof this.config.seekStep === "function" ? this.config.seekStep(this.player) : this.config.seekStep;
      if (!(!seekStep || typeof seekStep !== "number")) {
        this.seekStep = seekStep;
      }
      this.keyCodeMap = {
        space: {
          keyCode: 32,
          action: "playPause",
          disable: false,
          disablePress: false,
          noBodyTarget: false
        },
        up: {
          keyCode: 38,
          action: "upVolume",
          disable: false,
          disablePress: false,
          noBodyTarget: true
        },
        down: {
          keyCode: 40,
          action: "downVolume",
          disable: false,
          disablePress: false,
          noBodyTarget: true
        },
        left: {
          keyCode: 37,
          action: "seekBack",
          disablePress: false,
          disable: false
        },
        right: {
          keyCode: 39,
          action: "seek",
          pressAction: "changePlaybackRate",
          disablePress: false,
          disable: false
        },
        esc: {
          keyCode: 27,
          action: "exitFullscreen",
          disablePress: true,
          disable: false
        }
      };
      this.mergekeyCodeMap();
      this._keyState = {
        isKeyDown: false,
        isBodyKeyDown: false,
        isPress: false,
        tt: 0,
        playbackRate: 0
      };
      this.player.root.addEventListener("keydown", this.onKeydown);
      document.addEventListener("keydown", this.onBodyKeyDown);
    }
  }, {
    key: "setConfig",
    value: function setConfig(newConfig) {
      var _this3 = this;
      Object.keys(newConfig).forEach(function(key) {
        _this3.config[key] = newConfig[key];
      });
    }
  }, {
    key: "checkIsVisible",
    value: function checkIsVisible() {
      if (!this.config.checkVisible) {
        return true;
      }
      var rec = this.player.root.getBoundingClientRect();
      var height = rec.height, top = rec.top, bottom = rec.bottom;
      var h = window.innerHeight;
      if (top < 0 && top < 0 - height * 0.9 || bottom > 0 && bottom - h > height * 0.9) {
        return false;
      }
      return true;
    }
  }, {
    key: "checkCode",
    value: function checkCode(code, isBodyTarget) {
      var _this4 = this;
      var flag = false;
      Object.keys(this.keyCodeMap).map(function(key) {
        if (_this4.keyCodeMap[key] && code === _this4.keyCodeMap[key].keyCode && !_this4.keyCodeMap[key].disable) {
          flag = !isBodyTarget || isBodyTarget && !_this4.keyCodeMap[key].noBodyTarget;
        }
      });
      return flag;
    }
  }, {
    key: "downVolume",
    value: function downVolume(event) {
      var player = this.player;
      if (player.volume <= 0) {
        return;
      }
      var val = parseFloat((player.volume - 0.1).toFixed(1));
      var props = {
        volume: {
          from: player.volume,
          to: val
        }
      };
      this.emitUserAction(event, "change_volume", {
        props
      });
      if (val >= 0) {
        player.volume = val;
      } else {
        player.volume = 0;
      }
    }
  }, {
    key: "upVolume",
    value: function upVolume(event) {
      var player = this.player;
      if (player.volume >= 1) {
        return;
      }
      var val = parseFloat((player.volume + 0.1).toFixed(1));
      var props = {
        volume: {
          from: player.volume,
          to: val
        }
      };
      this.emitUserAction(event, "change_volume", {
        props
      });
      if (val <= 1) {
        player.volume = val;
      } else {
        player.volume = 1;
      }
    }
  }, {
    key: "seek",
    value: function seek(event) {
      var _this$player = this.player, currentTime = _this$player.currentTime, offsetCurrentTime = _this$player.offsetCurrentTime, duration = _this$player.duration, offsetDuration = _this$player.offsetDuration, timeSegments = _this$player.timeSegments;
      var _time = offsetCurrentTime > -1 ? offsetCurrentTime : currentTime;
      var _duration = offsetDuration || duration;
      var _step = event.repeat && this.seekStep >= 4 ? parseInt(this.seekStep / 2, 10) : this.seekStep;
      if (_time + _step <= _duration) {
        _time = _time + _step;
      } else {
        _time = _duration;
      }
      var _seekTime = util.getCurrentTimeByOffset(_time, timeSegments);
      var props = {
        currentTime: {
          from: currentTime,
          to: _seekTime
        }
      };
      this.emitUserAction(event, "seek", {
        props
      });
      this.player.currentTime = _seekTime;
    }
  }, {
    key: "seekBack",
    value: function seekBack(event) {
      var _this$player2 = this.player, currentTime = _this$player2.currentTime, offsetCurrentTime = _this$player2.offsetCurrentTime, timeSegments = _this$player2.timeSegments;
      var _step = event.repeat ? parseInt(this.seekStep / 2, 10) : this.seekStep;
      var _time = offsetCurrentTime > -1 ? offsetCurrentTime : currentTime;
      var _seekTime = _time - _step;
      if (_seekTime < 0) {
        _seekTime = 0;
      }
      _seekTime = util.getCurrentTimeByOffset(_seekTime, timeSegments);
      var props = {
        currentTime: {
          from: currentTime,
          to: _seekTime
        }
      };
      this.emitUserAction(event, "seek", {
        props
      });
      this.player.currentTime = _seekTime;
    }
  }, {
    key: "changePlaybackRate",
    value: function changePlaybackRate(event) {
      var _keyState = this._keyState, config = this.config, player = this.player;
      if (_keyState.playbackRate === 0) {
        _keyState.playbackRate = player.playbackRate;
        player.playbackRate = config.playbackRate;
      }
    }
  }, {
    key: "playPause",
    value: function playPause(event) {
      var player = this.player;
      if (!player) {
        return;
      }
      this.emitUserAction(event, "switch_play_pause");
      if (player.paused) {
        player.play();
      } else {
        player.pause();
      }
    }
  }, {
    key: "exitFullscreen",
    value: function exitFullscreen(event) {
      var player = this.player;
      var fullscreen = player.fullscreen, cssfullscreen = player.cssfullscreen;
      if (fullscreen) {
        this.emitUserAction("keyup", "switch_fullscreen", {
          prop: "fullscreen",
          from: fullscreen,
          to: !fullscreen
        });
        player.exitFullscreen();
      }
      if (cssfullscreen) {
        this.emitUserAction("keyup", "switch_css_fullscreen", {
          prop: "cssfullscreen",
          from: cssfullscreen,
          to: !cssfullscreen
        });
        player.exitCssFullscreen();
      }
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      var _keyState = this._keyState;
      if (e.repeat) {
        _keyState.isPress = true;
        var _t = Date.now();
        if (_t - _keyState.tt < 200) {
          return;
        }
        _keyState.tt = _t;
      }
      this.handleKeyCode(e.keyCode, e, _keyState.isPress);
    }
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(e) {
      var _keyState = this._keyState;
      if (_keyState.playbackRate > 0) {
        this.player.playbackRate = _keyState.playbackRate;
        _keyState.playbackRate = 0;
      }
      _keyState.isKeyDown = false;
      _keyState.isPress = false;
      _keyState.tt = 0;
    }
  }, {
    key: "handleKeyCode",
    value: function handleKeyCode(curKeyCode, event, isPress) {
      var arr = Object.keys(this.keyCodeMap);
      for (var i = 0; i < arr.length; i++) {
        var _this$keyCodeMap$arr$ = this.keyCodeMap[arr[i]], action = _this$keyCodeMap$arr$.action, keyCode = _this$keyCodeMap$arr$.keyCode, disable = _this$keyCodeMap$arr$.disable, pressAction = _this$keyCodeMap$arr$.pressAction, disablePress = _this$keyCodeMap$arr$.disablePress;
        if (keyCode === curKeyCode) {
          if (!disable && !(isPress && disablePress)) {
            var _action = !isPress ? action : pressAction || action;
            if (typeof _action === "function") {
              action(event, this.player, isPress);
            } else if (typeof _action === "string") {
              if (typeof this[_action] === "function") {
                this[_action](event, this.player, isPress);
              }
            }
            this.emit(SHORTCUT, _objectSpread2({
              key: arr[i],
              target: event.target,
              isPress
            }, this.keyCodeMap[arr[i]]));
          }
          preventDefault(event);
          event.stopPropagation();
          break;
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      this.player.root.removeEventListener("keydown", this.onKeydown);
      document.removeEventListener("keydown", this.onBodyKeyDown);
      this.player.root.removeEventListener("keyup", this.onKeyup);
      document.removeEventListener("keyup", this.onBodyKeyUp);
    }
  }, {
    key: "disable",
    value: function disable() {
      this.config.disable = true;
    }
  }, {
    key: "enable",
    value: function enable() {
      this.config.disable = false;
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "keyboard";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        seekStep: 10,
        checkVisible: false,
        disableBodyTrigger: false,
        disableRootTrigger: false,
        isGlobalTrigger: true,
        keyCodeMap: {},
        disable: false,
        playbackRate: 2,
        isIgnoreUserActive: true
      };
    }
  }]);
  return Keyboard2;
}(BasePlugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/assets/loading.js
function loadingIcon() {
  return new DOMParser().parseFromString('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-5 -5 110 110">\n  <path d="M100,50A50,50,0,1,1,50,0" stroke-width="5" stroke="#ddd" stroke-dasharray="236" fill="none"></path>\n</svg>\n', "image/svg+xml").firstChild;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/loading/index.js
var Loading = function(_Plugin) {
  _inherits(Loading2, _Plugin);
  var _super = _createSuper(Loading2);
  function Loading2() {
    _classCallCheck(this, Loading2);
    return _super.apply(this, arguments);
  }
  _createClass(Loading2, [{
    key: "registerIcons",
    value: function registerIcons() {
      return {
        loadingIcon
      };
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      this.appendChild("xg-loading-inner", this.icons.loadingIcon);
    }
  }, {
    key: "render",
    value: function render() {
      return '\n    <xg-loading class="xgplayer-loading">\n      <xg-loading-inner></xg-loading-inner>\n    </xg-loading>';
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "loading";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        position: POSITIONS.ROOT
      };
    }
  }]);
  return Loading2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/progress/innerList.js
var import_delegate4 = __toESM(require_delegate());
var TPL = [{
  tag: "xg-cache",
  className: "xgplayer-progress-cache",
  styleKey: "cachedColor"
}, {
  tag: "xg-played",
  className: "xgplayer-progress-played",
  styleKey: "playedColor"
}];
var InnerList = function() {
  function InnerList2(args) {
    _classCallCheck(this, InnerList2);
    this.fragments = args.fragments || [];
    if (this.fragments.length === 0) {
      this.fragments.push({
        percent: 1
      });
    }
    this._callBack = args.actionCallback;
    this.fragConfig = {
      fragFocusClass: args.fragFocusClass || "inner-focus-point",
      fragAutoFocus: !!args.fragAutoFocus,
      fragClass: args.fragClass || ""
    };
    this.style = args.style || {
      playedColor: "",
      cachedColor: "",
      progressColor: ""
    };
    this.duration = 0;
    this.cachedIndex = 0;
    this.playedIndex = 0;
    this.focusIndex = -1;
  }
  _createClass(InnerList2, [{
    key: "updateDuration",
    value: function updateDuration2(duration) {
      var _this = this;
      this.duration = duration;
      var start = 0;
      var fragments = this.fragments;
      this.fragments = fragments.map(function(item) {
        item.start = parseInt(start, 10);
        item.end = parseInt(start + item.percent * _this.duration, 10);
        item.duration = parseInt(item.percent * _this.duration, 10);
        start += item.percent * _this.duration;
        return item;
      });
    }
  }, {
    key: "updateProgress",
    value: function updateProgress() {
      var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "played";
      var data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        newIndex: 0,
        curIndex: 0,
        millisecond: 0
      };
      var progressList = this.progressList, fragments = this.fragments;
      if (progressList.length < 1) {
        return;
      }
      var newIndex = data.newIndex, curIndex = data.curIndex, millisecond = data.millisecond;
      if (newIndex !== curIndex) {
        progressList.map(function(item, index) {
          if (index < newIndex) {
            item[type].style.width = "100%";
          } else if (index > newIndex) {
            item[type].style.width = 0;
          }
        });
      }
      var curPFrag = fragments[newIndex];
      var per = millisecond === 0 ? 0 : (millisecond - curPFrag.start) / curPFrag.duration;
      progressList[newIndex][type].style.width = per < 0 ? 0 : "".concat(per * 100, "%");
    }
  }, {
    key: "updateFocus",
    value: function updateFocus(data) {
      if (!this.fragConfig.fragAutoFocus || this.fragments.length < 2) {
        return;
      }
      if (!data) {
        if (this.focusIndex > -1) {
          this.unHightLight(this.focusIndex);
          var _data = {
            index: -1,
            preIndex: this.focusIndex,
            fragment: null
          };
          this._callBack && this._callBack(_data);
          this.focusIndex = -1;
        }
        return;
      }
      var newPIndex = this.findIndex(data.currentTime * 1e3, this.focusIndex);
      if (newPIndex >= 0 && newPIndex !== this.focusIndex) {
        this.focusIndex > -1 && this.unHightLight(this.focusIndex);
        this.setHightLight(newPIndex);
        var _data2 = {
          index: newPIndex,
          preIndex: this.focusIndex,
          fragment: this.fragments[this.focusIndex]
        };
        this.focusIndex = newPIndex;
        this._callBack && this._callBack(_data2);
      }
    }
  }, {
    key: "update",
    value: function update() {
      var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        cached: 0,
        played: 0
      };
      var duration = arguments.length > 1 ? arguments[1] : void 0;
      if (!this.duration || parseInt(duration * 1e3, 10) !== this.duration) {
        if (!duration && duration !== 0) {
          return;
        }
        this.updateDuration(parseInt(duration * 1e3, 10));
      }
      var playedIndex = this.playedIndex, cachedIndex = this.cachedIndex;
      if (util.typeOf(data.played) !== "Undefined") {
        var newPIndex = this.findIndex(data.played * 1e3, playedIndex);
        if (newPIndex < 0) {
          return;
        }
        this.updateProgress("played", {
          newIndex: newPIndex,
          curIndex: playedIndex,
          millisecond: parseInt(data.played * 1e3, 10)
        });
        this.playedIndex = newPIndex;
      }
      if (util.typeOf(data.cached) !== "Undefined") {
        var newCIndex = this.findIndex(data.cached * 1e3, cachedIndex);
        if (newCIndex < 0) {
          return;
        }
        this.updateProgress("cached", {
          newIndex: newCIndex,
          curIndex: cachedIndex,
          millisecond: parseInt(data.cached * 1e3, 10)
        });
        this.cachedIndex = newCIndex;
      }
    }
  }, {
    key: "findIndex",
    value: function findIndex(time, curIndex) {
      var fragments = this.fragments;
      if (!fragments || fragments.length === 0) {
        return -1;
      }
      if (fragments.length === 1) {
        return 0;
      }
      if (curIndex > -1 && curIndex < fragments.length && time > fragments[curIndex].start && time < fragments[curIndex].end) {
        return curIndex;
      }
      if (time > fragments[fragments.length - 1].start) {
        return fragments.length - 1;
      }
      for (var i = 0; i < fragments.length; i++) {
        if (time > fragments[i].start && time <= fragments[i].end) {
          curIndex = i;
          break;
        }
      }
      return curIndex;
    }
  }, {
    key: "findHightLight",
    value: function findHightLight() {
      var children = this.root.children;
      for (var i = 0; i < children.length; i++) {
        if (util.hasClass(children[i], this.fragConfig.fragFocusClass)) {
          return {
            dom: children[i],
            pos: children[i].getBoundingClientRect()
          };
        }
      }
    }
  }, {
    key: "findFragment",
    value: function findFragment(index) {
      var children = this.root.children;
      if (index < 0 || index >= children.length) {
        return null;
      }
      return {
        dom: children[index],
        pos: children[index].getBoundingClientRect()
      };
    }
  }, {
    key: "unHightLight",
    value: function unHightLight() {
      var children = this.root.children;
      for (var i = 0; i < children.length; i++) {
        util.removeClass(children[i], this.fragConfig.fragFocusClass);
      }
    }
  }, {
    key: "setHightLight",
    value: function setHightLight(index) {
      var children = this.root.children;
      if (index < children.length) {
        util.addClass(children[index], this.fragConfig.fragFocusClass);
        return {
          dom: children[index],
          pos: children[index].getBoundingClientRect()
        };
      }
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      this.progressList = null;
      this.fragments = null;
      this.root.innerHTML = "";
    }
  }, {
    key: "reset",
    value: function reset(newOptions) {
      var _this2 = this;
      Object.keys(this.fragConfig).forEach(function(key) {
        if (newOptions[key] !== void 0) {
          _this2.fragConfig[key] = newOptions[key];
        }
      });
      if (newOptions.fragments) {
        this.fragments = newOptions.fragments.length === 0 ? [{
          percent: 1
        }] : newOptions.fragments;
        this.updateDuration(this.duration);
        this.playedIndex = 0;
        this.cachedIndex = 0;
        if (this.root) {
          var _c = this.root.children;
          while (_c.length > 0) {
            this.root.removeChild(_c[0]);
          }
        }
        this.render();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var progressColor = this.style.progressColor;
      if (!this.root) {
        this.root = util.createDom("xg-inners", "", {}, "progress-list");
      }
      if (this.fragments) {
        var _this$fragConfig = this.fragConfig, fragClass = _this$fragConfig.fragClass, fragFocusClass = _this$fragConfig.fragFocusClass;
        this.progressList = this.fragments.map(function(item) {
          var inner = util.createDom("xg-inner", "", {
            style: progressColor ? "background:".concat(progressColor, "; flex: ").concat(item.percent) : "flex: ".concat(item.percent)
          }, "".concat(item.isFocus ? fragFocusClass : "", " xgplayer-progress-inner ").concat(fragClass));
          _this3.root.appendChild(inner);
          TPL.forEach(function(item2) {
            inner.appendChild(util.createDom(item2.tag, "", {
              style: item2.styleKey ? "background: ".concat(_this3.style[item2.styleKey], "; width:0;") : "width:0;"
            }, item2.className));
          });
          return {
            cached: inner.children[0],
            played: inner.children[1]
          };
        });
      }
      return this.root;
    }
  }]);
  return InnerList2;
}();

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/progress/index.js
var FRAGMENT_FOCUS_CLASS = {
  POINT: "inner-focus-point",
  HIGHLIGHT: "inner-focus-highlight"
};
var Progress = function(_Plugin) {
  _inherits(Progress2, _Plugin);
  var _super = _createSuper(Progress2);
  function Progress2(args) {
    var _this;
    _classCallCheck(this, Progress2);
    _this = _super.call(this, args);
    _defineProperty(_assertThisInitialized(_this), "onMoveOnly", function(e, data) {
      var _assertThisInitialize = _assertThisInitialized(_this), pos = _assertThisInitialize.pos, config = _assertThisInitialize.config, player = _assertThisInitialize.player;
      var ret = data;
      if (e) {
        util.event(e);
        var _ePos = util.getEventPos(e, player.zoom);
        var x = player.rotateDeg === 90 ? _ePos.clientY : _ePos.clientX;
        if (pos.moving && Math.abs(pos.x - x) < config.miniMoveStep) {
          return;
        }
        pos.moving = true;
        pos.x = x;
        ret = _this.computeTime(e, x);
      }
      _this.triggerCallbacks("dragmove", ret, e);
      _this._updateInnerFocus(ret);
    });
    _defineProperty(_assertThisInitialized(_this), "onBodyClick", function(e) {
      if (!_this.pos.isLocked) {
        return;
      }
      _this.pos.isLocked = false;
      e.preventDefault();
      e.stopPropagation();
    });
    _defineProperty(_assertThisInitialized(_this), "_mouseDownHandler", function(event, data) {
      _this._state.time = data.currentTime;
      _this.updateWidth(data.currentTime, data.seekTime, data.percent, 0);
      _this._updateInnerFocus(data);
    });
    _defineProperty(_assertThisInitialized(_this), "_mouseUpHandler", function(e, data) {
      var _assertThisInitialize2 = _assertThisInitialized(_this), pos = _assertThisInitialize2.pos;
      pos.moving && _this.updateWidth(data.currentTime, data.seekTime, data.percent, 2);
    });
    _defineProperty(_assertThisInitialized(_this), "_mouseMoveHandler", function(e, data) {
      var _assertThisInitialize3 = _assertThisInitialized(_this), _state = _assertThisInitialize3._state, pos = _assertThisInitialize3.pos, config = _assertThisInitialize3.config, player = _assertThisInitialize3.player;
      if (_state.time < data.currentTime) {
        data.forward = true;
      } else {
        data.forward = false;
      }
      _state.time = data.currentTime;
      if (pos.isDown && !pos.moving) {
        pos.moving = true;
        config.isPauseMoving && player.pause();
        _this.triggerCallbacks("dragstart", data, e);
        _this.emitUserAction("drag", "dragstart", data);
      }
      _this.updateWidth(data.currentTime, data.seekTime, data.percent, 1);
      _this.triggerCallbacks("dragmove", data, e);
      _this._updateInnerFocus(data);
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function(e) {
      var _assertThisInitialize4 = _assertThisInitialized(_this), _state = _assertThisInitialize4._state, player = _assertThisInitialize4.player, pos = _assertThisInitialize4.pos, config = _assertThisInitialize4.config, playerConfig = _assertThisInitialize4.playerConfig;
      var _ePos = util.getEventPos(e, player.zoom);
      var x = player.rotateDeg === 90 ? _ePos.clientY : _ePos.clientX;
      if (player.isMini || config.closeMoveSeek || !playerConfig.allowSeekAfterEnded && player.ended) {
        return;
      }
      if (!player.duration && !player.isPlaying) {
        player.play();
        return;
      }
      e.stopPropagation();
      _this.focus();
      util.checkIsFunction(playerConfig.disableSwipeHandler) && playerConfig.disableSwipeHandler();
      util.checkIsFunction(config.onMoveStart) && config.onMoveStart();
      util.event(e);
      pos.x = x;
      pos.isDown = true;
      pos.moving = false;
      _state.prePlayTime = player.currentTime;
      player.focus({
        autoHide: false
      });
      _this.isProgressMoving = true;
      util.addClass(_this.progressBtn, "active");
      var ret = _this.computeTime(e, x);
      ret.prePlayTime = _state.prePlayTime;
      _this._mouseDownHandlerHook(e, ret);
      var eventType = e.type;
      if (eventType === "touchstart") {
        _this.root.addEventListener("touchmove", _this.onMouseMove);
        _this.root.addEventListener("touchend", _this.onMouseUp);
        _this.root.addEventListener("touchcancel", _this.onMouseUp);
      } else {
        _this.unbind("mousemove", _this.onMoveOnly);
        document.addEventListener("mousemove", _this.onMouseMove, false);
        document.addEventListener("mouseup", _this.onMouseUp, false);
      }
      return true;
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function(e) {
      var _assertThisInitialize5 = _assertThisInitialized(_this), player = _assertThisInitialize5.player, config = _assertThisInitialize5.config, pos = _assertThisInitialize5.pos, playerConfig = _assertThisInitialize5.playerConfig, _state = _assertThisInitialize5._state;
      e.stopPropagation();
      e.preventDefault();
      util.checkIsFunction(playerConfig.enableSwipeHandler) && playerConfig.enableSwipeHandler();
      util.checkIsFunction(config.onMoveEnd) && config.onMoveEnd();
      util.event(e);
      util.removeClass(_this.progressBtn, "active");
      var ret = _this.computeTime(e, pos.x);
      ret.prePlayTime = _state.prePlayTime;
      if (pos.moving) {
        _this.triggerCallbacks("dragend", ret, e);
        _this.emitUserAction("drag", "dragend", ret);
      } else {
        _this.triggerCallbacks("click", ret, e);
        _this.emitUserAction("click", "click", ret);
      }
      _this._mouseUpHandlerHook(e, ret);
      pos.moving = false;
      pos.isDown = false;
      pos.x = 0;
      pos.y = 0;
      pos.isLocked = true;
      _state.prePlayTime = 0;
      _state.time = 0;
      var eventType = e.type;
      if (eventType === "touchend" || eventType === "touchcancel") {
        _this.root.removeEventListener("touchmove", _this.onMouseMove);
        _this.root.removeEventListener("touchend", _this.onMouseUp);
        _this.root.removeEventListener("touchcancel", _this.onMouseUp);
        _this.blur();
      } else {
        document.removeEventListener("mousemove", _this.onMouseMove, false);
        document.removeEventListener("mouseup", _this.onMouseUp, false);
        if (!pos.isEnter) {
          _this.onMouseLeave(e);
        } else {
          playerConfig.isMobileSimulateMode !== "mobile" && _this.bind("mousemove", _this.onMoveOnly);
        }
      }
      util.setTimeout(_assertThisInitialized(_this), function() {
        _this.resetSeekState();
      }, 1);
      player.focus();
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseMove", function(e) {
      var _assertThisInitialize6 = _assertThisInitialized(_this), _state = _assertThisInitialize6._state, pos = _assertThisInitialize6.pos, player = _assertThisInitialize6.player, config = _assertThisInitialize6.config;
      if (util.checkTouchSupport()) {
        e.preventDefault();
      }
      util.event(e);
      var _ePos = util.getEventPos(e, player.zoom);
      var x = player.rotateDeg === 90 ? _ePos.clientY : _ePos.clientX;
      var diff = Math.abs(pos.x - x);
      if (pos.moving && diff < config.miniMoveStep || !pos.moving && diff < config.miniStartStep) {
        return;
      }
      pos.x = x;
      var ret = _this.computeTime(e, x);
      ret.prePlayTime = _state.prePlayTime;
      _this._mouseMoveHandlerHook(e, ret);
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseOut", function(e) {
      _this.triggerCallbacks("mouseout", null, e);
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseOver", function(e) {
      _this.triggerCallbacks("mouseover", null, e);
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function(e) {
      var _assertThisInitialize7 = _assertThisInitialized(_this), player = _assertThisInitialize7.player, pos = _assertThisInitialize7.pos;
      if (pos.isDown || pos.isEnter || player.isMini || !player.config.allowSeekAfterEnded && player.ended) {
        return;
      }
      pos.isEnter = true;
      _this.bind("mousemove", _this.onMoveOnly);
      _this.bind("mouseleave", _this.onMouseLeave);
      util.event(e);
      var _ePos = util.getEventPos(e, player.zoom);
      var x = player.rotateDeg === 90 ? _ePos.clientY : _ePos.clientX;
      var ret = _this.computeTime(e, x);
      _this.triggerCallbacks("mouseenter", ret, e);
      _this.focus();
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function(e) {
      _this.triggerCallbacks("mouseleave", null, e);
      _this.unlock();
      _this._updateInnerFocus(null);
    });
    _defineProperty(_assertThisInitialized(_this), "onVideoResize", function() {
      var _this$pos = _this.pos, x = _this$pos.x, isDown = _this$pos.isDown, isEnter = _this$pos.isEnter;
      if (isEnter && !isDown) {
        var ret = _this.computeTime(null, x);
        _this.onMoveOnly(null, ret);
      }
    });
    _this.useable = false;
    _this.isProgressMoving = false;
    _this.__dragCallBacks = [];
    _this._state = {
      now: -1,
      direc: 0,
      time: 0,
      prePlayTime: -1
    };
    _this._disableBlur = false;
    if (typeof _this.config.isDragingSeek === "boolean") {
      console.warn("[XGPLAYER] 'isDragingSeek' is deprecated, please use 'isDraggingSeek' instead");
      _this.config.isDraggingSeek = _this.config.isDragingSeek;
    }
    return _this;
  }
  _createClass(Progress2, [{
    key: "offsetDuration",
    get: function get() {
      return this.playerConfig.customDuration || this.player.offsetDuration || this.player.duration;
    }
  }, {
    key: "duration",
    get: function get() {
      return this.playerConfig.customDuration || this.player.duration;
    }
  }, {
    key: "timeOffset",
    get: function get() {
      return this.playerConfig.timeOffset || 0;
    }
  }, {
    key: "currentTime",
    get: function get() {
      var _this$player = this.player, offsetCurrentTime = _this$player.offsetCurrentTime, currentTime = _this$player.currentTime;
      return offsetCurrentTime >= 0 ? offsetCurrentTime : currentTime + this.timeOffset;
    }
  }, {
    key: "changeState",
    value: function changeState() {
      var useable = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      this.useable = useable;
    }
  }, {
    key: "show",
    value: function show(value) {
      this.root && (this.root.style.display = "flex");
    }
  }, {
    key: "_initInner",
    value: function _initInner() {
      var _this2 = this;
      var fragments = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!fragments || fragments.length === 0) {
        fragments = [{
          percent: 1
        }];
      }
      var _c = _objectSpread2(_objectSpread2({
        fragments
      }, config), {}, {
        actionCallback: function actionCallback(data) {
          _this2.emitUserAction("fragment_focus", "fragment_focus", data);
        }
      });
      if (!this.innerList) {
        this.innerList = new InnerList(_c);
        this.outer.insertBefore(this.innerList.render(), this.outer.children[0]);
        ["findHightLight", "unHightLight", "setHightLight", "findFragment"].map(function(item) {
          _this2[item] = _this2.innerList[item].bind(_this2.innerList);
        });
      } else {
        this.innerList.reset(_c);
      }
    }
  }, {
    key: "_updateInnerFocus",
    value: function _updateInnerFocus(data) {
      this.innerList && this.innerList.updateFocus(data);
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      if (this.config.disable || this.playerConfig.isLive) {
        return;
      }
      this.pos = {
        x: 0,
        y: 0,
        moving: false,
        isDown: false,
        isEnter: false,
        isLocked: false
      };
      this.outer = this.find("xg-outer");
      var _this$config = this.config, fragFocusClass = _this$config.fragFocusClass, fragAutoFocus = _this$config.fragAutoFocus, fragClass = _this$config.fragClass;
      this._initInner(this.config.fragments, {
        fragFocusClass,
        fragAutoFocus,
        fragClass,
        style: this.playerConfig.commonStyle || {}
      });
      if (sniffer.device === "mobile") {
        this.config.isDraggingSeek = false;
        this.isMobile = true;
      }
      this.progressBtn = this.find(".xgplayer-progress-btn");
      this.listenEvents();
      this.bindDomEvents();
      this.initCustomStyle();
    }
  }, {
    key: "listenEvents",
    value: function listenEvents() {
      var _this3 = this;
      this.on(DURATION_CHANGE, function() {
        _this3.onMouseLeave();
      });
      this.on(TIME_UPDATE, function() {
        _this3.onTimeupdate();
      });
      this.on(SEEKED, function() {
        _this3.onTimeupdate();
        _this3.onCacheUpdate();
      });
      this.on(PROGRESS, function() {
        _this3.onCacheUpdate();
      });
      this.on(ENDED, function() {
        _this3.onCacheUpdate(true);
        _this3.onTimeupdate(true);
        _this3._state.now = 0;
      });
      this.on(EMPTIED, function() {
        _this3.onReset();
      });
      this.on(VIDEO_RESIZE, function() {
        _this3.onVideoResize();
      });
    }
  }, {
    key: "setConfig",
    value: function setConfig(config) {
      var _this4 = this;
      var frags = null;
      Object.keys(config).forEach(function(key) {
        _this4.config[key] = config[key];
        if (key === "fragments") {
          frags = config[key];
        }
      });
      if (frags) {
        this._initInner(frags, config);
      }
    }
  }, {
    key: "initCustomStyle",
    value: function initCustomStyle() {
      var _ref = this.playerConfig || {}, commonStyle = _ref.commonStyle;
      var sliderBtnStyle = commonStyle.sliderBtnStyle;
      var progressBtn = this.progressBtn;
      if (sliderBtnStyle) {
        if (typeof sliderBtnStyle === "string") {
          progressBtn.style.boxShadow = sliderBtnStyle;
        } else if (_typeof(sliderBtnStyle) === "object") {
          Object.keys(sliderBtnStyle).map(function(key) {
            progressBtn.style[key] = sliderBtnStyle[key];
          });
        }
      }
    }
  }, {
    key: "triggerCallbacks",
    value: function triggerCallbacks(type, data, event) {
      if (this.__dragCallBacks.length > 0) {
        this.__dragCallBacks.map(function(item) {
          if (item && item.handler && item.type === type) {
            try {
              item.handler(data, event);
            } catch (error) {
              console.error("[XGPLAYER][triggerCallbacks] ".concat(item, " error"), error);
            }
          }
        });
      }
    }
  }, {
    key: "addCallBack",
    value: function addCallBack(type, handle) {
      if (handle && typeof handle === "function") {
        this.__dragCallBacks.push({
          type,
          handler: handle
        });
      }
    }
  }, {
    key: "removeCallBack",
    value: function removeCallBack(type, event) {
      var __dragCallBacks = this.__dragCallBacks;
      var _index = -1;
      __dragCallBacks.map(function(item, index) {
        if (item && item.type === type && item.handler === event) {
          _index = index;
        }
      });
      if (_index > -1) {
        __dragCallBacks.splice(_index, 1);
      }
    }
  }, {
    key: "unlock",
    value: function unlock() {
      var player = this.player, pos = this.pos;
      pos.isEnter = false;
      pos.isLocked = false;
      if (player.isMini) {
        return;
      }
      this.unbind("mousemove", this.onMoveOnly);
      if (pos.isDown) {
        this.unbind("mouseleave", this.onMouseLeave);
        return;
      }
      this.blur();
    }
  }, {
    key: "bindDomEvents",
    value: function bindDomEvents() {
      var config = this.player.config;
      this._mouseDownHandlerHook = this.hook("dragstart", this._mouseDownHandler);
      this._mouseUpHandlerHook = this.hook("dragend", this._mouseUpHandler);
      this._mouseMoveHandlerHook = this.hook("drag", this._mouseMoveHandler);
      if (this.domEventType === "touch" || this.domEventType === "compatible") {
        this.root.addEventListener("touchstart", this.onMouseDown);
      }
      if (this.domEventType === "mouse" || this.domEventType === "compatible") {
        this.bind("mousedown", this.onMouseDown);
        config.isMobileSimulateMode !== "mobile" && this.bind("mouseenter", this.onMouseEnter);
        this.bind("mouseover", this.onMouseOver);
        this.bind("mouseout", this.onMouseOut);
        this.player.root.addEventListener("click", this.onBodyClick, true);
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this.player.controls.pauseAutoHide();
      util.addClass(this.root, "active");
    }
  }, {
    key: "blur",
    value: function blur() {
      if (this._disableBlur) {
        return;
      }
      this.player.controls.recoverAutoHide();
      util.removeClass(this.root, "active");
    }
  }, {
    key: "disableBlur",
    value: function disableBlur() {
      this._disableBlur = true;
    }
  }, {
    key: "enableBlur",
    value: function enableBlur() {
      this._disableBlur = false;
    }
  }, {
    key: "updateWidth",
    value: function updateWidth(currentTime, seekTime, percent, type) {
      var config = this.config, player = this.player;
      if (config.isCloseClickSeek && type === 0) {
        return;
      }
      var realTime = seekTime = seekTime >= player.duration ? player.duration - config.endedDiff : Number(seekTime).toFixed(1);
      this.updatePercent(percent);
      this.updateTime(currentTime);
      if (type === 1 && (!config.isDraggingSeek || player.config.mediaType === "audio")) {
        return;
      }
      this._state.now = realTime;
      this._state.direc = realTime > player.currentTime ? 0 : 1;
      player.seek(realTime);
    }
  }, {
    key: "computeTime",
    value: function computeTime(e, x) {
      var player = this.player;
      var _this$root$getBoundin = this.root.getBoundingClientRect(), width = _this$root$getBoundin.width, height = _this$root$getBoundin.height, top = _this$root$getBoundin.top, left = _this$root$getBoundin.left;
      var rWidth, rLeft;
      var clientX = x;
      if (player.rotateDeg === 90) {
        rWidth = height;
        rLeft = top;
      } else {
        rWidth = width;
        rLeft = left;
      }
      var offset = clientX - rLeft;
      offset = offset > rWidth ? rWidth : offset < 0 ? 0 : offset;
      var percent = offset / rWidth;
      percent = percent < 0 ? 0 : percent > 1 ? 1 : percent;
      var currentTime = parseInt(percent * this.offsetDuration * 1e3, 10) / 1e3;
      var seekTime = util.getCurrentTimeByOffset(currentTime, player.timeSegments);
      return {
        percent,
        currentTime,
        seekTime,
        offset,
        width: rWidth,
        left: rLeft,
        e
      };
    }
  }, {
    key: "updateTime",
    value: function updateTime(time) {
      var player = this.player, duration = this.duration;
      if (time > duration) {
        time = duration;
      } else if (time < 0) {
        time = 0;
      }
      var timeIcon = player.plugins.time;
      if (timeIcon) {
        timeIcon.updateTime(time);
      }
    }
  }, {
    key: "resetSeekState",
    value: function resetSeekState() {
      this.isProgressMoving = false;
      var timeIcon = this.player.plugins.time;
      timeIcon && timeIcon.resetActive();
    }
  }, {
    key: "updatePercent",
    value: function updatePercent(percent, notSeek) {
      this.isProgressMoving = true;
      if (this.config.disable) {
        return;
      }
      percent = percent > 1 ? 1 : percent < 0 ? 0 : percent;
      this.progressBtn.style.left = "".concat(percent * 100, "%");
      this.innerList.update({
        played: percent * this.offsetDuration
      }, this.offsetDuration);
      var miniprogress = this.player.plugins.miniprogress;
      miniprogress && miniprogress.update({
        played: percent * this.offsetDuration
      }, this.offsetDuration);
    }
  }, {
    key: "onTimeupdate",
    value: function onTimeupdate(isEnded) {
      var player = this.player, _state = this._state, offsetDuration = this.offsetDuration;
      if (player.isSeeking && player.media.seeking || this.isProgressMoving || !player.hasStart) {
        return;
      }
      if (_state.now > -1) {
        var abs = parseInt(_state.now * 1e3, 10) - parseInt(player.currentTime * 1e3, 10);
        if (_state.direc === 0 && abs > 300 || _state.direc === 1 && abs > -300) {
          _state.now = -1;
          return;
        } else {
          _state.now = -1;
        }
      }
      var time = this.currentTime;
      time = util.adjustTimeByDuration(time, offsetDuration, isEnded);
      this.innerList.update({
        played: time
      }, offsetDuration);
      this.progressBtn.style.left = "".concat(time / offsetDuration * 100, "%");
    }
  }, {
    key: "onCacheUpdate",
    value: function onCacheUpdate(isEnded) {
      var player = this.player, duration = this.duration;
      if (!player) {
        return;
      }
      var _end = player.bufferedPoint.end;
      _end = util.adjustTimeByDuration(_end, duration, isEnded);
      this.innerList.update({
        cached: _end
      }, duration);
    }
  }, {
    key: "onReset",
    value: function onReset() {
      this.innerList.update({
        played: 0,
        cached: 0
      }, 0);
      this.progressBtn.style.left = "0%";
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      var player = this.player;
      this.thumbnailPlugin = null;
      this.innerList.destroy();
      this.innerList = null;
      var domEventType = this.domEventType;
      if (domEventType === "touch" || domEventType === "compatible") {
        this.root.removeEventListener("touchstart", this.onMouseDown);
        this.root.removeEventListener("touchmove", this.onMouseMove);
        this.root.removeEventListener("touchend", this.onMouseUp);
        this.root.removeEventListener("touchcancel", this.onMouseUp);
      }
      if (domEventType === "mouse" || domEventType === "compatible") {
        this.unbind("mousedown", this.onMouseDown);
        this.unbind("mouseenter", this.onMouseEnter);
        this.unbind("mousemove", this.onMoveOnly);
        this.unbind("mouseleave", this.onMouseLeave);
        document.removeEventListener("mousemove", this.onMouseMove, false);
        document.removeEventListener("mouseup", this.onMouseUp, false);
        player.root.removeEventListener("click", this.onBodyClick, true);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.config.disable || this.playerConfig.isLive) {
        return;
      }
      var controlsMode = this.player.controls ? this.player.controls.config.mode : "";
      var className = controlsMode === "bottom" ? "xgplayer-progress-bottom" : "";
      return '\n    <xg-progress class="xgplayer-progress '.concat(className, '">\n      <xg-outer class="xgplayer-progress-outer">\n        <xg-progress-btn class="xgplayer-progress-btn"></xg-progress-btn>\n      </xg-outer>\n    </xg-progress>\n    ');
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "progress";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        position: POSITIONS.CONTROLS_CENTER,
        index: 0,
        disable: false,
        isDraggingSeek: true,
        closeMoveSeek: false,
        isPauseMoving: false,
        isCloseClickSeek: false,
        fragments: [{
          percent: 1
        }],
        fragFocusClass: FRAGMENT_FOCUS_CLASS.POINT,
        fragClass: "",
        fragAutoFocus: false,
        miniMoveStep: 5,
        miniStartStep: 2,
        onMoveStart: function onMoveStart() {
        },
        onMoveEnd: function onMoveEnd() {
        },
        endedDiff: 0.2
      };
    }
  }, {
    key: "FRAGMENT_FOCUS_CLASS",
    get: function get() {
      return FRAGMENT_FOCUS_CLASS;
    }
  }]);
  return Progress2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/common/iconPlugin.js
var Icon = function(_Plugin) {
  _inherits(Icon2, _Plugin);
  var _super = _createSuper(Icon2);
  function Icon2() {
    var _this;
    _classCallCheck(this, Icon2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "_onMouseenter", function(e) {
      _this.emit("icon_mouseenter", {
        pluginName: _this.pluginName
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_onMouseLeave", function(e) {
      _this.emit("icon_mouseleave", {
        pluginName: _this.pluginName
      });
    });
    return _this;
  }
  _createClass(Icon2, [{
    key: "afterCreate",
    value: function afterCreate() {
      this.bind("mouseenter", this._onMouseenter);
      this.bind("mouseleave", this._onMouseLeave);
      if (this.config.disable) {
        this.disable();
      }
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      this.unbind("mouseenter", this._onMouseenter);
      this.unbind("mouseleave", this._onMouseLeave);
    }
  }]);
  return Icon2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/play/index.js
var Play = function(_IconPlugin) {
  _inherits(Play2, _IconPlugin);
  var _super = _createSuper(Play2);
  function Play2() {
    var _this;
    _classCallCheck(this, Play2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "btnClick", function(e) {
      e.preventDefault();
      e.stopPropagation();
      var _assertThisInitialize = _assertThisInitialized(_this), player = _assertThisInitialize.player;
      _this.emitUserAction(e, "switch_play_pause", {
        prop: "paused",
        from: player.paused,
        to: !player.paused
      });
      if (player.ended) {
        player.replay();
      } else if (player.paused) {
        player.play();
        _this.animate(false);
      } else {
        player.pause();
        _this.animate(true);
      }
      return false;
    });
    return _this;
  }
  _createClass(Play2, [{
    key: "afterCreate",
    value: function afterCreate() {
      _get(_getPrototypeOf(Play2.prototype), "afterCreate", this).call(this);
      var config = this.config;
      if (config.disable) {
        return;
      }
      this.initIcons();
      this.bind(["touchend", "click"], this.btnClick);
      this.listenEvents();
      this.animate(true);
    }
  }, {
    key: "listenEvents",
    value: function listenEvents() {
      var _this2 = this;
      var player = this.player;
      this.on([PLAY, PAUSE, ERROR, EMPTIED], function() {
        _this2.animate(player.paused);
      });
    }
  }, {
    key: "registerIcons",
    value: function registerIcons() {
      return {
        play: {
          icon: PlaySvg,
          class: "xg-icon-play"
        },
        pause: {
          icon: PauseSvg,
          class: "xg-icon-pause"
        }
      };
    }
  }, {
    key: "initIcons",
    value: function initIcons() {
      var icons = this.icons;
      this.appendChild(".xgplayer-icon", icons.play);
      this.appendChild(".xgplayer-icon", icons.pause);
    }
  }, {
    key: "animate",
    value: function animate(paused) {
      if (!this.player) {
        return;
      }
      var i18nKeys = this.i18nKeys;
      var tipDom = this.find(".xg-tips");
      if (paused) {
        this.setAttr("data-state", "pause");
        tipDom && this.changeLangTextKey(tipDom, i18nKeys.PLAY_TIPS);
      } else {
        this.setAttr("data-state", "play");
        tipDom && this.changeLangTextKey(tipDom, i18nKeys.PAUSE_TIPS);
      }
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      _get(_getPrototypeOf(Play2.prototype), "destroy", this).call(this);
      this.unbind(["touchend", "click"], this.btnClick);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.config.disable) {
        return;
      }
      return '<xg-icon class="xgplayer-play">\n    <div class="xgplayer-icon">\n    </div>\n    '.concat(xgIconTips(this, "PLAY_TIPS", this.playerConfig.isHideTips), "\n    </xg-icon>");
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "play";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        position: POSITIONS.CONTROLS_LEFT,
        index: 0,
        disable: false
      };
    }
  }]);
  return Play2;
}(Icon);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/assets/back.js
function BackSVG() {
  return new DOMParser().parseFromString('<svg width="32px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <path d="M11.2374369,14 L17.6187184,7.61871843 C17.9604272,7.27700968 17.9604272,6.72299032 17.6187184,6.38128157 C17.2770097,6.03957281 16.7229903,6.03957281 16.3812816,6.38128157 L9.38128157,13.3812816 C9.03957281,13.7229903 9.03957281,14.2770097 9.38128157,14.6187184 L16.3812816,21.6187184 C16.7229903,21.9604272 17.2770097,21.9604272 17.6187184,21.6187184 C17.9604272,21.2770097 17.9604272,20.7229903 17.6187184,20.3812816 L11.2374369,14 L11.2374369,14 Z" fill="#FFFFFF"></path>\n    </g>\n</svg>', "image/svg+xml").firstChild;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/fullscreen/backicon.js
var TopBackIcon = function(_Plugin) {
  _inherits(TopBackIcon2, _Plugin);
  var _super = _createSuper(TopBackIcon2);
  function TopBackIcon2() {
    _classCallCheck(this, TopBackIcon2);
    return _super.apply(this, arguments);
  }
  _createClass(TopBackIcon2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var _this = this;
      this.initIcons();
      this.onClick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        _this.config.onClick(e);
      };
      this.bind(["click", "touchend"], this.onClick);
    }
  }, {
    key: "registerIcons",
    value: function registerIcons() {
      return {
        screenBack: {
          icon: BackSVG,
          class: "xg-fullscreen-back"
        }
      };
    }
  }, {
    key: "initIcons",
    value: function initIcons() {
      var icons = this.icons;
      this.appendChild(this.root, icons.screenBack);
    }
  }, {
    key: "show",
    value: function show() {
      util.addClass(this.root, "show");
    }
  }, {
    key: "hide",
    value: function hide() {
      util.removeClass(this.root, "show");
    }
  }, {
    key: "render",
    value: function render() {
      return '<xg-icon class="xgplayer-back">\n    </xg-icon>';
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "topbackicon";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        position: POSITIONS.ROOT_TOP,
        index: 0
      };
    }
  }]);
  return TopBackIcon2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/assets/requestFull.js
function FullScreenSvg() {
  return new DOMParser().parseFromString('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="2 -4 28 40">\n  <path fill="#fff" transform="scale(0.0320625 0.0320625)" d="M598 214h212v212h-84v-128h-128v-84zM726 726v-128h84v212h-212v-84h128zM214 426v-212h212v84h-128v128h-84zM298 598v128h128v84h-212v-212h84z"></path>\n</svg>\n', "image/svg+xml").firstChild;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/assets/exitFull.js
function ExitFullScreenSvg() {
  return new DOMParser().parseFromString('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="2 -4 28 40">\n  <path fill="#fff" transform="scale(0.0320625 0.0320625)" d="M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z"></path>\n</svg>\n', "image/svg+xml").firstChild;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/fullscreen/index.js
var Fullscreen = function(_IconPlugin) {
  _inherits(Fullscreen2, _IconPlugin);
  var _super = _createSuper(Fullscreen2);
  function Fullscreen2() {
    var _this;
    _classCallCheck(this, Fullscreen2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "_onOrientationChange", function(e) {
      if (_this.player.fullscreen && _this.config.rotateFullscreen) {
        if (window.orientation === 90 || window.orientation === -90) {
          _this.player.setRotateDeg(0);
        } else {
          _this.player.setRotateDeg(90);
        }
      }
    });
    return _this;
  }
  _createClass(Fullscreen2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      _get(_getPrototypeOf(Fullscreen2.prototype), "afterCreate", this).call(this);
      var config = this.config, playerConfig = this.playerConfig;
      if (config.disable) {
        return;
      }
      if (config.target) {
        this.playerConfig.fullscreenTarget = this.config.target;
      }
      var fullEl = util.getFullScreenEl();
      if (playerConfig.fullscreenTarget === fullEl) {
        this.player.getFullscreen().catch(function(e) {
        });
      }
      this.initIcons();
      this.handleFullscreen = this.hook("fullscreenChange", this.toggleFullScreen, {
        pre: function pre(e) {
          var fullscreen = _this2.player.fullscreen;
          _this2.emitUserAction(e, "switch_fullscreen", {
            prop: "fullscreen",
            from: fullscreen,
            to: !fullscreen
          });
        }
      });
      this.bind(".xgplayer-fullscreen", ["touchend", "click"], this.handleFullscreen);
      this.on(FULLSCREEN_CHANGE, function(isFullScreen) {
        var tipsDom = _this2.find(".xg-tips");
        tipsDom && _this2.changeLangTextKey(tipsDom, isFullScreen ? _this2.i18nKeys.EXITFULLSCREEN_TIPS : _this2.i18nKeys.FULLSCREEN_TIPS);
        _this2.animate(isFullScreen);
      });
      if (this.config.needBackIcon) {
        this.topBackIcon = this.player.registerPlugin({
          plugin: TopBackIcon,
          options: {
            config: {
              onClick: function onClick(e) {
                _this2.handleFullscreen(e);
              }
            }
          }
        });
      }
      if (sniffer.device === "mobile") {
        window.addEventListener("orientationchange", this._onOrientationChange);
      }
    }
  }, {
    key: "registerIcons",
    value: function registerIcons() {
      return {
        fullscreen: {
          icon: FullScreenSvg,
          class: "xg-get-fullscreen"
        },
        exitFullscreen: {
          icon: ExitFullScreenSvg,
          class: "xg-exit-fullscreen"
        }
      };
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      _get(_getPrototypeOf(Fullscreen2.prototype), "destroy", this).call(this);
      this.unbind(".xgplayer-icon", sniffer.device === "mobile" ? "touchend" : "click", this.handleFullscreen);
      if (sniffer.device === "mobile") {
        window.removeEventListener("orientationchange", this._onOrientationChange);
      }
    }
  }, {
    key: "initIcons",
    value: function initIcons() {
      var icons = this.icons;
      this.appendChild(".xgplayer-icon", icons.fullscreen);
      this.appendChild(".xgplayer-icon", icons.exitFullscreen);
    }
  }, {
    key: "toggleFullScreen",
    value: function toggleFullScreen(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      var player = this.player, config = this.config;
      var useCssFullscreen = config.useCssFullscreen === true || typeof config.useCssFullscreen === "function" && config.useCssFullscreen();
      if (useCssFullscreen) {
        if (player.fullscreen) {
          player.exitCssFullscreen();
        } else {
          player.getCssFullscreen();
        }
        this.animate(player.fullscreen);
      } else if (config.rotateFullscreen) {
        if (player.fullscreen) {
          player.exitRotateFullscreen();
        } else {
          player.getRotateFullscreen();
        }
        this.animate(player.fullscreen);
      } else if (config.switchCallback && typeof config.switchCallback === "function") {
        config.switchCallback(player.fullscreen);
      } else {
        if (player.fullscreen) {
          player.exitFullscreen();
          if (config.useScreenOrientation) {
            this.unlockScreen();
          }
        } else {
          player.getFullscreen().catch(function(e2) {
          });
          if (config.useScreenOrientation && player.aspectRatio > 1) {
            this.lockScreen(config.lockOrientationType);
          }
        }
      }
    }
  }, {
    key: "animate",
    value: function animate(isFullScreen) {
      isFullScreen ? this.setAttr("data-state", "full") : this.setAttr("data-state", "normal");
      if (this.topBackIcon) {
        if (isFullScreen) {
          this.topBackIcon.show();
          this.hide();
        } else {
          this.topBackIcon.hide();
          this.show();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.config.disable) {
        return;
      }
      var langKey = "FULLSCREEN_TIPS";
      return '<xg-icon class="xgplayer-fullscreen">\n    <div class="xgplayer-icon">\n    </div>\n    '.concat(xgIconTips(this, langKey, this.playerConfig.isHideTips), "\n    </xg-icon>");
    }
  }, {
    key: "lockScreen",
    value: function lockScreen(orientation) {
      try {
        screen.orientation.lock(orientation).catch(function(e) {
        });
      } catch (e) {
      }
    }
  }, {
    key: "unlockScreen",
    value: function unlockScreen() {
      try {
        screen.orientation.unlock().catch(function(e) {
        });
      } catch (e) {
      }
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "fullscreen";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        position: POSITIONS.CONTROLS_RIGHT,
        index: 0,
        useCssFullscreen: false,
        rotateFullscreen: false,
        useScreenOrientation: false,
        lockOrientationType: "landscape",
        switchCallback: null,
        target: null,
        disable: false,
        needBackIcon: false
      };
    }
  }]);
  return Fullscreen2;
}(Icon);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/time/index.js
var Time = function(_Plugin) {
  _inherits(Time2, _Plugin);
  var _super = _createSuper(Time2);
  function Time2(args) {
    var _this;
    _classCallCheck(this, Time2);
    _this = _super.call(this, args);
    _this.isActiving = false;
    return _this;
  }
  _createClass(Time2, [{
    key: "duration",
    get: function get() {
      var _this$player = this.player, offsetDuration = _this$player.offsetDuration, duration = _this$player.duration;
      return this.playerConfig.customDuration || offsetDuration || duration;
    }
  }, {
    key: "currentTime",
    get: function get() {
      var _this$player2 = this.player, offsetCurrentTime = _this$player2.offsetCurrentTime, currentTime = _this$player2.currentTime;
      return offsetCurrentTime >= 0 ? offsetCurrentTime : currentTime;
    }
  }, {
    key: "timeOffset",
    get: function get() {
      return this.playerConfig.timeOffset || 0;
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      var constrolsMode = this.player.controls.config.mode;
      this.mode = constrolsMode === "flex" ? "flex" : "normal";
      if (this.config.disable) {
        return;
      }
      if (this.mode === "flex") {
        this.createCenterTime();
        this.root.style.display = "none";
      }
      this.durationDom = this.find(".time-duration");
      this.timeDom = this.find(".time-current");
      this.listenEvents();
    }
  }, {
    key: "listenEvents",
    value: function listenEvents() {
      var _this2 = this;
      this.on([DURATION_CHANGE, SEEKED, TIME_UPDATE], function(e) {
        if (e.eventName === "durationchange") {
          _this2.isActiving = false;
        }
        _this2.onTimeUpdate();
      });
      this.on(ENDED, function() {
        _this2.onTimeUpdate(true);
      });
      this.on(EMPTIED, function() {
        _this2.onReset();
      });
    }
  }, {
    key: "show",
    value: function show(value) {
      if (this.mode === "flex") {
        this.centerCurDom && (this.centerCurDom.style.display = "block");
        this.centerDurDom && (this.centerDurDom.style.display = "block");
        return;
      }
      this.root.style.display = "block";
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this.mode === "flex") {
        this.centerCurDom && (this.centerCurDom.style.display = "none");
        this.centerDurDom && (this.centerDurDom.style.display = "none");
        return;
      }
      this.root.style.display = "none";
    }
  }, {
    key: "onTimeUpdate",
    value: function onTimeUpdate(isEnded) {
      var player = this.player, config = this.config, duration = this.duration;
      if (config.disable || this.isActiving || !player.hasStart) {
        return;
      }
      var current = this.currentTime + this.timeOffset;
      current = util.adjustTimeByDuration(current, duration, isEnded);
      if (this.mode === "flex") {
        this.centerCurDom.innerHTML = this.minWidthTime(util.format(current));
        if (duration !== Infinity && duration > 0) {
          this.centerDurDom.innerHTML = util.format(duration);
        }
      } else {
        this.timeDom.innerHTML = this.minWidthTime(util.format(current));
        if (duration !== Infinity && duration > 0) {
          this.durationDom.innerHTML = util.format(duration);
        }
      }
    }
  }, {
    key: "onReset",
    value: function onReset() {
      if (this.mode === "flex") {
        this.centerCurDom.innerHTML = this.minWidthTime(util.format(0));
        this.centerDurDom.innerHTML = util.format(0);
      } else {
        this.timeDom.innerHTML = this.minWidthTime(util.format(0));
        this.durationDom.innerHTML = util.format(0);
      }
    }
  }, {
    key: "createCenterTime",
    value: function createCenterTime() {
      var player = this.player;
      if (!player.controls || !player.controls.center) {
        return;
      }
      var center = player.controls.center;
      this.centerCurDom = util.createDom("xg-icon", "00:00", {}, "xgplayer-time xg-time-left");
      this.centerDurDom = util.createDom("xg-icon", "00:00", {}, "xgplayer-time xg-time-right");
      center.children.length > 0 ? center.insertBefore(this.centerCurDom, center.children[0]) : center.appendChild(this.centerCurDom);
      center.appendChild(this.centerDurDom);
    }
  }, {
    key: "afterPlayerInit",
    value: function afterPlayerInit() {
      var config = this.config;
      if (this.duration === Infinity || this.playerConfig.isLive) {
        util.hide(this.durationDom);
        util.hide(this.timeDom);
        util.hide(this.find(".time-separator"));
        util.show(this.find(".time-live-tag"));
      } else {
        util.hide(this.find(".time-live-tag"));
      }
      if (config.hide) {
        this.hide();
        return;
      }
      this.show();
    }
  }, {
    key: "changeLiveState",
    value: function changeLiveState(isLive) {
      if (isLive) {
        util.hide(this.durationDom);
        util.hide(this.timeDom);
        util.hide(this.find(".time-separator"));
        util.show(this.find(".time-live-tag"));
      } else {
        util.hide(this.find(".time-live-tag"));
        util.show(this.find(".time-separator"));
        util.show(this.durationDom);
        util.show(this.timeDom);
      }
    }
  }, {
    key: "updateTime",
    value: function updateTime(time) {
      this.isActiving = true;
      if (!time && time !== 0 || time > this.duration) {
        return;
      }
      if (this.mode === "flex") {
        this.centerCurDom.innerHTML = this.minWidthTime(util.format(time));
        return;
      }
      this.timeDom.innerHTML = this.minWidthTime(util.format(time));
    }
  }, {
    key: "minWidthTime",
    value: function minWidthTime(timeStr) {
      return timeStr.split(":").map(function(value) {
        return '<span class="time-min-width">'.concat(value, "</span>");
      }).join(":");
    }
  }, {
    key: "resetActive",
    value: function resetActive() {
      var _this3 = this;
      var player = this.player;
      var updateState = function updateState2() {
        _this3.isActiving = false;
      };
      this.off(SEEKED, updateState);
      if (player.isSeeking && player.media.seeking) {
        this.once(SEEKED, updateState);
      } else {
        this.isActiving = false;
      }
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      var center = this.player.controls.center;
      this.centerCurDom && center.removeChild(this.centerCurDom);
      this.centerCurDom = null;
      this.centerDurDom && center.removeChild(this.centerDurDom);
      this.centerDurDom = null;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.config.disable) {
        return;
      }
      return '<xg-icon class="xgplayer-time">\n    <span class="time-current">00:00</span>\n    <span class="time-separator">/</span>\n    <span class="time-duration">00:00</span>\n    <span class="time-live-tag">'.concat(this.i18n.LIVE_TIP, "</span>\n    </xg-icon>");
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "time";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        position: POSITIONS.CONTROLS_LEFT,
        index: 2,
        disable: false
      };
    }
  }]);
  return Time2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/time/timesegments.js
var import_delegate5 = __toESM(require_delegate());
var TimeSegmentsControls = function(_BasePlugin) {
  _inherits(TimeSegmentsControls2, _BasePlugin);
  var _super = _createSuper(TimeSegmentsControls2);
  function TimeSegmentsControls2() {
    var _this;
    _classCallCheck(this, TimeSegmentsControls2);
    for (var _len2 = arguments.length, args = new Array(_len2), _key = 0; _key < _len2; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "_onDurationChange", function() {
      _this.updateSegments();
      var _this$player = _this.player, currentTime = _this$player.currentTime, timeSegments = _this$player.timeSegments;
      if (!_this._checkIfEnabled(timeSegments)) {
        return;
      }
      var index = util.getIndexByTime(currentTime, timeSegments);
      var time = util.getOffsetCurrentTime(currentTime, timeSegments, index);
      _this.player.offsetCurrentTime = time;
      _this.changeIndex(index, timeSegments);
    });
    _defineProperty(_assertThisInitialized(_this), "_onLoadedData", function() {
      var timeSegments = _this.player.timeSegments;
      if (!_this._checkIfEnabled(timeSegments)) {
        return;
      }
      var time = util.getOffsetCurrentTime(0, timeSegments);
      _this.player.offsetCurrentTime = time;
      _this.changeIndex(0, timeSegments);
      if (_this.curPos.start > 0) {
        _this.player.currentTime = _this.curPos.start;
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_onTimeupdate", function() {
      var _this$player2 = _this.player, currentTime = _this$player2.currentTime, timeSegments = _this$player2.timeSegments;
      if (!_this._checkIfEnabled(timeSegments)) {
        return;
      }
      var _len = timeSegments.length;
      _this.lastCurrentTime = currentTime;
      var index = util.getIndexByTime(currentTime, timeSegments);
      if (index !== _this.curIndex) {
        _this.changeIndex(index, timeSegments);
      }
      var curTime = util.getOffsetCurrentTime(currentTime, timeSegments, index);
      _this.player.offsetCurrentTime = curTime;
      if (!_this.curPos) {
        return;
      }
      var _this$curPos = _this.curPos, start = _this$curPos.start, end = _this$curPos.end;
      if (currentTime < start) {
        _this.player.currentTime = start;
      } else if (currentTime > end && index >= _len - 1) {
        _this.player.pause();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_onSeeking", function() {
      var _this$player3 = _this.player, currentTime = _this$player3.currentTime, timeSegments = _this$player3.timeSegments;
      if (!_this._checkIfEnabled(timeSegments)) {
        return;
      }
      if (currentTime < timeSegments[0].start) {
        _this.player.currentTime = timeSegments[0].start;
      } else if (currentTime > timeSegments[timeSegments.length - 1].end) {
        _this.player.currentTime = timeSegments[timeSegments.length - 1].end;
      } else {
        var _index = util.getIndexByTime(currentTime, timeSegments);
        if (_index >= 0) {
          var _seekTime = _this.getSeekTime(currentTime, _this.lastCurrentTime, _index, timeSegments);
          if (_seekTime >= 0) {
            _this.player.currentTime = _seekTime;
          }
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_onPlay", function() {
      var _this$player4 = _this.player, currentTime = _this$player4.currentTime, timeSegments = _this$player4.timeSegments;
      if (_this._checkIfEnabled(timeSegments) && currentTime >= timeSegments[timeSegments.length - 1].end) {
        _this.player.currentTime = timeSegments[0].start;
      }
    });
    return _this;
  }
  _createClass(TimeSegmentsControls2, [{
    key: "afterCreate",
    value: function afterCreate() {
      this.curIndex = -1;
      this.curPos = null;
      this.lastCurrentTime = 0;
      this.updateSegments();
      this.on(DURATION_CHANGE, this._onDurationChange);
      this.on(LOADED_DATA, this._onLoadedData);
      this.on(TIME_UPDATE, this._onTimeupdate);
      this.on(SEEKING, this._onSeeking);
      this.on(PLAY, this._onPlay);
    }
  }, {
    key: "setConfig",
    value: function setConfig(newConfig) {
      var _this2 = this;
      if (!newConfig) {
        return;
      }
      var keys = Object.keys(newConfig);
      if (keys.length < 1) {
        return;
      }
      keys.forEach(function(key) {
        _this2.config[key] = newConfig[key];
      });
      this.updateSegments();
    }
  }, {
    key: "updateSegments",
    value: function updateSegments() {
      var _this$config = this.config, disable = _this$config.disable, segments = _this$config.segments;
      var player = this.player;
      if (disable || !segments || segments.length === 0) {
        player.timeSegments = [];
        player.offsetDuration = 0;
        player.offsetCurrentTime = -1;
      } else {
        var _segs = this.formatTimeSegments(segments, player.duration);
        player.timeSegments = _segs;
        player.offsetDuration = _segs.length > 0 ? _segs[_segs.length - 1].duration : 0;
      }
    }
  }, {
    key: "formatTimeSegments",
    value: function formatTimeSegments(timeSegments, duration) {
      var ret = [];
      if (!timeSegments) {
        return [];
      }
      timeSegments.sort(function(a, b) {
        return a.start - b.start;
      });
      timeSegments.forEach(function(item, index) {
        var _item = {};
        _item.start = item.start < 0 ? 0 : item.start;
        _item.end = duration > 0 && item.end > duration ? duration : item.end;
        if (duration > 0 && _item.start > duration) {
          return;
        }
        ret.push(_item);
        var _segDuration = _item.end - _item.start;
        if (index === 0) {
          _item.offset = item.start;
          _item.cTime = 0;
          _item.segDuration = _segDuration;
          _item.duration = _segDuration;
        } else {
          var last = ret[index - 1];
          _item.offset = last.offset + (_item.start - last.end);
          _item.cTime = last.duration + last.cTime;
          _item.segDuration = _segDuration;
          _item.duration = last.duration + _segDuration;
        }
      });
      return ret;
    }
  }, {
    key: "getSeekTime",
    value: function getSeekTime(currentTime, lastCurrentTime, index, timeSegments) {
      var _time = -1;
      var _timeSegments$index = timeSegments[index], start = _timeSegments$index.start, end = _timeSegments$index.end;
      if (currentTime >= start && currentTime <= end) {
        return _time;
      }
      var diff = currentTime - lastCurrentTime;
      if (diff < 0) {
        if (currentTime < start) {
          var diff2 = lastCurrentTime > start ? lastCurrentTime - start : 0;
          _time = index - 1 >= 0 ? timeSegments[index - 1].end + diff + diff2 : 0;
          return _time;
        }
      }
      return -1;
    }
  }, {
    key: "_checkIfEnabled",
    value: function _checkIfEnabled(segments) {
      return !(!segments || segments.length < 1);
    }
  }, {
    key: "changeIndex",
    value: function changeIndex(index, timeSegments) {
      this.curIndex = index;
      if (index >= 0 && timeSegments.length > 0) {
        this.curPos = timeSegments[index];
      } else {
        this.curPos = null;
      }
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "TimeSegmentsControls";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        disable: true,
        segments: []
      };
    }
  }]);
  return TimeSegmentsControls2;
}(BasePlugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/assets/volumeLarge.js
function volumeLargeSvg() {
  return new DOMParser().parseFromString('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 -10 28 40">\n  <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n  <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M940.632 837.632l-72.192-72.192c65.114-64.745 105.412-154.386 105.412-253.44s-40.299-188.695-105.396-253.424l-0.016-0.016 72.192-72.192c83.639 83.197 135.401 198.37 135.401 325.632s-51.762 242.434-135.381 325.612l-0.020 0.020zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"></path>\n</svg>\n', "image/svg+xml").firstChild;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/assets/volumeSmall.js
function volumeSmallSvg() {
  return new DOMParser().parseFromString('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 -10 28 40">\n  <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n  <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"></path>\n</svg>\n', "image/svg+xml").firstChild;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/assets/volumeMuted.js
function volumeMutedSvg() {
  return new DOMParser().parseFromString('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 -10 28 40">\n  <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n  <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M920.4 439.808l-108.544-109.056-72.704 72.704 109.568 108.544-109.056 108.544 72.704 72.704 108.032-109.568 108.544 109.056 72.704-72.704-109.568-108.032 109.056-108.544-72.704-72.704-108.032 109.568z"></path>\n</svg>\n', "image/svg+xml").firstChild;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/volume/index.js
var Volume = function(_Plugin) {
  _inherits(Volume2, _Plugin);
  var _super = _createSuper(Volume2);
  function Volume2() {
    var _this;
    _classCallCheck(this, Volume2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "onBarMousedown", function(e) {
      var _assertThisInitialize = _assertThisInitialized(_this), player = _assertThisInitialize.player;
      var bar = _this.find(".xgplayer-bar");
      util.event(e);
      var barRect = bar.getBoundingClientRect();
      var pos = util.getEventPos(e, player.zoom);
      var height = barRect.height - (pos.clientY - barRect.top);
      pos.h = height;
      pos.barH = barRect.height;
      _this.pos = pos;
      if (height < -2) {
        return;
      }
      _this.updateVolumePos(height, e);
      document.addEventListener("mouseup", _this.onBarMouseUp);
      _this._d.isStart = true;
      return false;
    });
    _defineProperty(_assertThisInitialized(_this), "onBarMouseMove", function(e) {
      var _assertThisInitialize2 = _assertThisInitialized(_this), _d = _assertThisInitialize2._d;
      if (!_d.isStart) {
        return;
      }
      var _assertThisInitialize3 = _assertThisInitialized(_this), pos = _assertThisInitialize3.pos, player = _assertThisInitialize3.player;
      e.preventDefault();
      e.stopPropagation();
      util.event(e);
      var _ePos = util.getEventPos(e, player.zoom);
      _d.isMoving = true;
      var w = pos.h - _ePos.clientY + pos.clientY;
      if (w > pos.barH) {
        return;
      }
      _this.updateVolumePos(w, e);
    });
    _defineProperty(_assertThisInitialized(_this), "onBarMouseUp", function(e) {
      util.event(e);
      document.removeEventListener("mouseup", _this.onBarMouseUp);
      var _assertThisInitialize4 = _assertThisInitialized(_this), _d = _assertThisInitialize4._d;
      _d.isStart = false;
      _d.isMoving = false;
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseenter", function(e) {
      _this._d.isActive = true;
      _this.focus();
      _this.emit("icon_mouseenter", {
        pluginName: _this.pluginName
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseleave", function(e) {
      _this._d.isActive = false;
      _this.unFocus(100, false, e);
      _this.emit("icon_mouseleave", {
        pluginName: _this.pluginName
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onVolumeChange", function(e) {
      if (!_this.player) {
        return;
      }
      var _this$player = _this.player, muted = _this$player.muted, volume = _this$player.volume;
      if (!_this._d.isMoving) {
        _this.find(".xgplayer-drag").style.height = muted || volume === 0 ? "4px" : "".concat(volume * 100, "%");
        if (_this.config.showValueLabel) {
          _this.updateVolumeValue();
        }
      }
      _this.animate(muted, volume);
    });
    return _this;
  }
  _createClass(Volume2, [{
    key: "registerIcons",
    value: function registerIcons() {
      return {
        volumeSmall: {
          icon: volumeSmallSvg,
          class: "xg-volume-small"
        },
        volumeLarge: {
          icon: volumeLargeSvg,
          class: "xg-volume"
        },
        volumeMuted: {
          icon: volumeMutedSvg,
          class: "xg-volume-mute"
        }
      };
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      this._timerId = null;
      this._d = {
        isStart: false,
        isMoving: false,
        isActive: false
      };
      if (this.config.disable) {
        return;
      }
      this.initIcons();
      var _this$playerConfig = this.playerConfig, commonStyle = _this$playerConfig.commonStyle, volume = _this$playerConfig.volume;
      if (commonStyle.volumeColor) {
        this.find(".xgplayer-drag").style.backgroundColor = commonStyle.volumeColor;
      }
      this.changeMutedHandler = this.hook("mutedChange", function(e) {
        _this2.changeMuted(e);
      }, {
        pre: function pre(e) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
      this._onMouseenterHandler = this.hook("mouseenter", this.onMouseenter);
      this._onMouseleaveHandler = this.hook("mouseleave", this.onMouseleave);
      if (!(sniffer.device === "mobile") && this.playerConfig.isMobileSimulateMode !== "mobile") {
        this.bind("mouseenter", this._onMouseenterHandler);
        this.bind(["blur", "mouseleave"], this._onMouseleaveHandler);
        this.bind(".xgplayer-slider", "mousedown", this.onBarMousedown);
        this.bind(".xgplayer-slider", "mousemove", this.onBarMouseMove);
        this.bind(".xgplayer-slider", "mouseup", this.onBarMouseUp);
      }
      this.bind(".xgplayer-icon", ["touchend", "click"], this.changeMutedHandler);
      this.on(VOLUME_CHANGE, this.onVolumeChange);
      this.once(LOADED_DATA, this.onVolumeChange);
      if (util.typeOf(volume) !== "Number") {
        this.player.volume = this.config.default;
      }
      this.onVolumeChange();
    }
  }, {
    key: "updateVolumePos",
    value: function updateVolumePos(height, event) {
      var player = this.player;
      var drag = this.find(".xgplayer-drag");
      var bar = this.find(".xgplayer-bar");
      if (!bar || !drag) {
        return;
      }
      var now2 = parseInt(height / bar.getBoundingClientRect().height * 1e3, 10);
      drag.style.height = "".concat(height, "px");
      var to = Math.max(Math.min(now2 / 1e3, 1), 0);
      var props = {
        volume: {
          from: player.volume,
          to
        }
      };
      if (player.muted) {
        props.muted = {
          from: true,
          to: false
        };
      }
      this.emitUserAction(event, "change_volume", {
        muted: player.muted,
        volume: player.volume,
        props
      });
      player.volume = Math.max(Math.min(now2 / 1e3, 1), 0);
      player.muted && (player.muted = false);
      if (this.config.showValueLabel) {
        this.updateVolumeValue();
      }
    }
  }, {
    key: "updateVolumeValue",
    value: function updateVolumeValue() {
      var _this$player2 = this.player, volume = _this$player2.volume, muted = _this$player2.muted;
      var $labelValue = this.find(".xgplayer-value-label");
      var vol = Math.max(Math.min(volume, 1), 0);
      $labelValue.innerText = muted ? 0 : Math.round(vol * 100);
    }
  }, {
    key: "focus",
    value: function focus() {
      var player = this.player;
      player.focus({
        autoHide: false
      });
      if (this._timerId) {
        util.clearTimeout(this, this._timerId);
        this._timerId = null;
      }
      util.addClass(this.root, "slide-show");
    }
  }, {
    key: "unFocus",
    value: function unFocus() {
      var _this3 = this;
      var delay = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 100;
      var isForce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      var e = arguments.length > 2 ? arguments[2] : void 0;
      var _d = this._d, player = this.player;
      if (_d.isActive) {
        return;
      }
      if (this._timerId) {
        util.clearTimeout(this, this._timerId);
        this._timerId = null;
      }
      this._timerId = util.setTimeout(this, function() {
        if (!_d.isActive) {
          isForce ? player.blur() : player.focus();
          util.removeClass(_this3.root, "slide-show");
          _d.isStart && _this3.onBarMouseUp(e);
        }
        _this3._timerId = null;
      }, delay);
    }
  }, {
    key: "changeMuted",
    value: function changeMuted(e) {
      e && e.stopPropagation();
      var player = this.player, _d = this._d;
      _d.isStart && this.onBarMouseUp(e);
      this.emitUserAction(e, "change_muted", {
        muted: player.muted,
        volume: player.volume,
        props: {
          muted: {
            from: player.muted,
            to: !player.muted
          }
        }
      });
      if (player.volume > 0) {
        player.muted = !player.muted;
      }
      if (player.volume < 0.01) {
        player.volume = this.config.miniVolume;
      }
    }
  }, {
    key: "animate",
    value: function animate(muted, volume) {
      if (muted || volume === 0) {
        this.setAttr("data-state", "mute");
      } else if (volume < 0.5 && this.icons.volumeSmall) {
        this.setAttr("data-state", "small");
      } else {
        this.setAttr("data-state", "normal");
      }
    }
  }, {
    key: "initIcons",
    value: function initIcons() {
      var icons = this.icons;
      this.appendChild(".xgplayer-icon", icons.volumeSmall);
      this.appendChild(".xgplayer-icon", icons.volumeLarge);
      this.appendChild(".xgplayer-icon", icons.volumeMuted);
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      if (this._timerId) {
        util.clearTimeout(this, this._timerId);
        this._timerId = null;
      }
      this.unbind("mouseenter", this.onMouseenter);
      this.unbind(["blur", "mouseleave"], this.onMouseleave);
      this.unbind(".xgplayer-slider", "mousedown", this.onBarMousedown);
      this.unbind(".xgplayer-slider", "mousemove", this.onBarMouseMove);
      this.unbind(".xgplayer-slider", "mouseup", this.onBarMouseUp);
      document.removeEventListener("mouseup", this.onBarMouseUp);
      this.unbind(".xgplayer-icon", sniffer.device === "mobile" ? "touchend" : "click", this.changeMutedHandler);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.config.disable) {
        return;
      }
      var volume = this.config.default || this.player.volume;
      var isShowVolumeValue = this.config.showValueLabel;
      return '\n    <xg-icon class="xgplayer-volume" data-state="normal">\n      <div class="xgplayer-icon">\n      </div>\n      <xg-slider class="xgplayer-slider">\n        '.concat(isShowVolumeValue ? '<div class="xgplayer-value-label">'.concat(volume * 100, "</div>") : "", '\n        <div class="xgplayer-bar">\n          <xg-drag class="xgplayer-drag" style="height: ').concat(volume * 100, '%"></xg-drag>\n        </div>\n      </xg-slider>\n    </xg-icon>');
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "volume";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        position: POSITIONS.CONTROLS_RIGHT,
        index: 1,
        disable: false,
        showValueLabel: false,
        default: 0.6,
        miniVolume: 0.2
      };
    }
  }]);
  return Volume2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/assets/rotate.js
function RotateSvg() {
  return new DOMParser().parseFromString('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="-4 -6 40 40" fill="none">\n  <g>\n    <path transform="scale(1.5 1.5)" d="M11.6665 9.16663H4.1665C2.78579 9.16663 1.6665 10.2859 1.6665 11.6666V15.8333C1.6665 17.214 2.78579 18.3333 4.1665 18.3333H11.6665C13.0472 18.3333 14.1665 17.214 14.1665 15.8333V11.6666C14.1665 10.2859 13.0472 9.16663 11.6665 9.16663Z" fill="white"/>\n    <path transform="scale(1.5 1.5)" fill-rule="evenodd" clip-rule="evenodd" d="M3.88148 4.06298C3.75371 4.21005 3.67667 4.40231 3.67749 4.61242C3.67847 4.87253 3.79852 5.10435 3.98581 5.25646L6.99111 8.05895C7.32771 8.37283 7.85502 8.35443 8.16891 8.01782C8.48279 7.68122 8.46437 7.15391 8.12778 6.84003L6.62061 5.43457L9.8198 5.4224C9.82848 5.42239 9.8372 5.42221 9.84591 5.4219C10.9714 5.38233 12.0885 5.6285 13.0931 6.13744C14.0976 6.64635 14.957 7.40148 15.5908 8.33234C16.2246 9.2632 16.6122 10.3394 16.7177 11.4606C16.823 12.5819 16.6427 13.7115 16.1934 14.7442C16.0098 15.1661 16.203 15.6571 16.6251 15.8408C17.0471 16.0243 17.5381 15.8311 17.7216 15.4091C18.2833 14.1183 18.5087 12.7063 18.3771 11.3047C18.2453 9.90318 17.7607 8.55792 16.9684 7.39433C16.1761 6.23073 15.1021 5.28683 13.8463 4.65065C12.5946 4.01651 11.203 3.70872 9.80072 3.75583L6.43415 3.76862L7.96326 2.12885C8.27715 1.79225 8.25872 1.26494 7.92213 0.951061C7.58553 0.63718 7.05822 0.655585 6.74433 0.99219L3.90268 4.0395C3.89545 4.04724 3.88841 4.05509 3.88154 4.06303L3.88148 4.06298Z" fill="white"/>\n  </g>\n  <defs>\n    <clipPath>\n      <rect width="40" height="40" fill="white"/>\n    </clipPath>\n  </defs>\n</svg>\n', "image/svg+xml").firstChild;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/rotate/index.js
var Rotate = function(_IconPlugin) {
  _inherits(Rotate2, _IconPlugin);
  var _super = _createSuper(Rotate2);
  function Rotate2(args) {
    var _this;
    _classCallCheck(this, Rotate2);
    _this = _super.call(this, args);
    _this.rotateDeg = _this.config.rotateDeg || 0;
    return _this;
  }
  _createClass(Rotate2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      if (this.config.disable) {
        return;
      }
      _get(_getPrototypeOf(Rotate2.prototype), "afterCreate", this).call(this);
      this.appendChild(".xgplayer-icon", this.icons.rotate);
      this.onBtnClick = this.onBtnClick.bind(this);
      this.bind(".xgplayer-icon", ["click", "touchend"], this.onBtnClick);
      this.on(VIDEO_RESIZE, function() {
        if (_this2.rotateDeg && _this2.config.innerRotate) {
          util.setTimeout(_this2, function() {
            _this2.updateRotateDeg(_this2.rotateDeg, _this2.config.innerRotate);
          }, 100);
        }
      });
      var root = this.player.root;
      this.rootWidth = root.style.width || root.offsetWidth || root.clientWidth;
      this.rootHeight = root.style.height || root.offsetHeight || root.clientHeight;
      if (this.rotateDeg) {
        this.updateRotateDeg(this.rotateDeg, this.config.innerRotate);
      }
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      _get(_getPrototypeOf(Rotate2.prototype), "destroy", this).call(this);
      this.unbind(".xgplayer-icon", ["click", "touchend"], this.onBtnClick);
    }
  }, {
    key: "onBtnClick",
    value: function onBtnClick(e) {
      e.preventDefault();
      e.stopPropagation();
      this.emitUserAction(e, "rotate");
      this.rotate(this.config.clockwise, this.config.innerRotate, 1);
    }
  }, {
    key: "updateRotateDeg",
    value: function updateRotateDeg(rotateDeg, innerRotate) {
      if (!rotateDeg) {
        rotateDeg = 0;
      }
      if (innerRotate) {
        this.player.videoRotateDeg = rotateDeg;
        return;
      }
      var player = this.player, rootWidth = this.rootWidth, rootHeight = this.rootHeight;
      var root = player.root, innerContainer = player.innerContainer;
      var video = player.media;
      var width = root.offsetWidth;
      var height = innerContainer && innerRotate ? innerContainer.offsetHeight : root.offsetHeight;
      var rWidth = rootWidth;
      var rHeight = rootHeight;
      var x = 0;
      var y = 0;
      if (rotateDeg === 0.75 || rotateDeg === 0.25) {
        rWidth = "".concat(height, "px");
        rHeight = "".concat(width, "px");
        x = -(height - width) / 2;
        y = -(width - height) / 2;
      }
      var _transform = "translate(".concat(x, "px,").concat(y, "px) rotate(").concat(rotateDeg, "turn)");
      var _styles = {
        transformOrigin: "center center",
        transform: _transform,
        webKitTransform: _transform,
        height: rHeight,
        width: rWidth
      };
      var _target = innerRotate ? video : root;
      var poster = innerRotate ? player.getPlugin("poster") : null;
      Object.keys(_styles).map(function(key) {
        _target.style[key] = _styles[key];
        poster && poster.root && (poster.root.style[key] = _styles[key]);
      });
    }
  }, {
    key: "rotate",
    value: function rotate() {
      var clockwise = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      var innerRotate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      var times = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
      var player = this.player;
      if (!this.rotateDeg) {
        this.rotateDeg = 0;
      }
      var factor = clockwise ? 1 : -1;
      this.rotateDeg = (this.rotateDeg + 1 + factor * 0.25 * times) % 1;
      this.updateRotateDeg(this.rotateDeg, innerRotate);
      player.emit(ROTATE, this.rotateDeg * 360);
    }
  }, {
    key: "registerIcons",
    value: function registerIcons() {
      return {
        rotate: RotateSvg
      };
    }
  }, {
    key: "render",
    value: function render() {
      if (this.config.disable) {
        return;
      }
      return '\n    <xg-icon class="xgplayer-rotate">\n      <div class="xgplayer-icon">\n      </div>\n      '.concat(xgIconTips(this, "ROTATE_TIPS", this.playerConfig.isHideTips), "\n    </xg-icon>");
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "rotate";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        position: POSITIONS.CONTROLS_RIGHT,
        index: 6,
        innerRotate: true,
        clockwise: false,
        rotateDeg: 0,
        disable: false
      };
    }
  }]);
  return Rotate2;
}(Icon);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/assets/pipIcon.js
function PipIcon() {
  return new DOMParser().parseFromString('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd"\n    d="M16.5 4.3H3.5C3.38954 4.3 3.3 4.38954 3.3 4.5V15.5C3.3 15.6105 3.38954 15.7 3.5 15.7H8.50005L8.50006 17.5H3.5C2.39543 17.5 1.5 16.6046 1.5 15.5V4.5C1.5 3.39543 2.39543 2.5 3.5 2.5H16.5C17.6046 2.5 18.5 3.39543 18.5 4.5V8.5H16.7V4.5C16.7 4.38954 16.6105 4.3 16.5 4.3ZM12 11.5C11.4477 11.5 11 11.9477 11 12.5L11 16.5C11 17.0523 11.4478 17.5 12 17.5H17.5C18.0523 17.5 18.5 17.0523 18.5 16.5L18.5 12.5C18.5 11.9477 18.0523 11.5 17.5 11.5H12Z"\n    fill="white" />\n</svg>', "image/svg+xml").firstChild;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/assets/pipIconExit.js
function PipIconExit() {
  return new DOMParser().parseFromString('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd"\n    d="M16.5 4.3H3.5C3.38954 4.3 3.3 4.38954 3.3 4.5V15.5C3.3 15.6105 3.38954 15.7 3.5 15.7H8.50005L8.50006 17.5H3.5C2.39543 17.5 1.5 16.6046 1.5 15.5V4.5C1.5 3.39543 2.39543 2.5 3.5 2.5H16.5C17.6046 2.5 18.5 3.39543 18.5 4.5V8.5H16.7V4.5C16.7 4.38954 16.6105 4.3 16.5 4.3ZM12 11.5C11.4477 11.5 11 11.9477 11 12.5L11 16.5C11 17.0523 11.4478 17.5 12 17.5H17.5C18.0523 17.5 18.5 17.0523 18.5 16.5L18.5 12.5C18.5 11.9477 18.0523 11.5 17.5 11.5H12Z"\n    fill="white" />\n  <path fill-rule="evenodd" clip-rule="evenodd"\n    d="M9.4998 7.7C9.77595 7.7 9.9998 7.47614 9.9998 7.2V6.5C9.9998 6.22386 9.77595 6 9.4998 6H5.5402L5.52754 6.00016H5.5C5.22386 6.00016 5 6.22401 5 6.50016V10.4598C5 10.7359 5.22386 10.9598 5.5 10.9598H6.2C6.47614 10.9598 6.7 10.7359 6.7 10.4598V8.83005L8.76983 10.9386C8.96327 11.1357 9.27984 11.1386 9.47691 10.9451L9.97645 10.4548C10.1735 10.2613 10.1764 9.94476 9.983 9.7477L7.97289 7.7H9.4998Z"\n    fill="white" />\n</svg>', "image/svg+xml").firstChild;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/pip/index.js
var PresentationMode = {
  PIP: "picture-in-picture",
  INLINE: "inline",
  FULLSCREEN: "fullscreen"
};
var PIP = function(_IconPlugin) {
  _inherits(PIP2, _IconPlugin);
  var _super = _createSuper(PIP2);
  function PIP2() {
    var _this;
    _classCallCheck(this, PIP2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "switchPIP", function(e) {
      if (!_this.isPIPAvailable()) {
        return false;
      }
      e.stopPropagation && e.stopPropagation();
      if (_this.isPip) {
        _this.exitPIP();
        _this.emitUserAction(e, "change_pip", {
          props: "pip",
          from: true,
          to: false
        });
        _this.setAttr("data-state", "normal");
      } else if (_this.player.media.readyState === 4) {
        _this.requestPIP();
        _this.emitUserAction(e, "change_pip", {
          props: "pip",
          from: false,
          to: true
        });
        _this.setAttr("data-state", "pip");
      }
    });
    return _this;
  }
  _createClass(PIP2, [{
    key: "beforeCreate",
    value: function beforeCreate(args) {
      if (typeof args.player.config.pip === "boolean") {
        args.config.showIcon = args.player.config.pip;
      }
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      if (!this.isPIPAvailable()) {
        return;
      }
      _get(_getPrototypeOf(PIP2.prototype), "afterCreate", this).call(this);
      this.pMode = PresentationMode.INLINE;
      this.initPipEvents();
      if (this.config.showIcon) {
        this.initIcons();
      }
      this.once(COMPLETE, function() {
        if (_this2.config.showIcon) {
          util.removeClass(_this2.find(".xgplayer-icon"), "xg-icon-disable");
          _this2.bind("click", _this2.switchPIP);
        }
      });
    }
  }, {
    key: "registerIcons",
    value: function registerIcons() {
      return {
        pipIcon: {
          icon: PipIcon,
          class: "xg-get-pip"
        },
        pipIconExit: {
          icon: PipIconExit,
          class: "xg-exit-pip"
        }
      };
    }
  }, {
    key: "initIcons",
    value: function initIcons() {
      var icons = this.icons;
      this.appendChild(".xgplayer-icon", icons.pipIcon);
      this.appendChild(".xgplayer-icon", icons.pipIconExit);
    }
  }, {
    key: "initPipEvents",
    value: function initPipEvents() {
      var _this3 = this;
      var player = this.player;
      this.leavePIPCallback = function() {
        var paused = player.paused;
        util.setTimeout(_this3, function() {
          !paused && player.mediaPlay();
        }, 0);
        !paused && player.mediaPlay();
        _this3.setAttr("data-state", "normal");
        _this3.pipWindow = null;
        player.emit(PIP_CHANGE, false);
      };
      this.enterPIPCallback = function(e) {
        player.emit(PIP_CHANGE, true);
        if (e !== null && e !== void 0 && e.pictureInPictureWindow) {
          _this3.pipWindow = e.pictureInPictureWindow;
        }
        _this3.setAttr("data-state", "pip");
      };
      this.onWebkitpresentationmodechanged = function(e) {
        var mode = player.media.webkitPresentationMode;
        if (_this3.pMode === PresentationMode.FULLSCREEN && mode !== PresentationMode.FULLSCREEN) {
          player.onFullscreenChange(null, false);
        }
        _this3.pMode = mode;
        if (mode === PresentationMode.PIP) {
          _this3.enterPIPCallback(e);
        } else if (mode === PresentationMode.INLINE) {
          _this3.leavePIPCallback(e);
        }
      };
      if (player.media) {
        player.media.addEventListener("enterpictureinpicture", this.enterPIPCallback);
        player.media.addEventListener("leavepictureinpicture", this.leavePIPCallback);
        PIP2.checkWebkitSetPresentationMode(player.media) && player.media.addEventListener("webkitpresentationmodechanged", this.onWebkitpresentationmodechanged);
      }
    }
  }, {
    key: "copyStyleIntoPiPWindow",
    value: function copyStyleIntoPiPWindow(pipWin) {
      var textContent = _toConsumableArray(document.styleSheets).map(function(style2) {
        try {
          return _toConsumableArray(style2.cssRules).map(function(rule) {
            return rule.cssText;
          }).join("");
        } catch (e) {
          var link = document.createElement("link");
          link.rel = "stylesheet";
          link.type = style2.type;
          link.media = style2.media;
          link.href = style2.href;
          pipWin.document.head.appendChild(link);
        }
        return "";
      }).filter(Boolean).join("\n");
      var style = document.createElement("style");
      style.textContent = textContent;
      pipWin.document.head.appendChild(style);
    }
  }, {
    key: "requestPIP",
    value: function requestPIP() {
      var _this4 = this;
      var player = this.player, playerConfig = this.playerConfig, config = this.config;
      if (!this.isPIPAvailable() || this.isPip) {
        return;
      }
      try {
        var poster = playerConfig.poster;
        if (poster) {
          player.media.poster = util.typeOf(poster) === "String" ? poster : poster.poster;
        }
        if (config.preferDocument && this.isDocPIPAvailable()) {
          var pipOptions = {};
          if (config.width && config.height) {
            pipOptions.width = config.width;
            pipOptions.height = config.height;
          } else {
            var playerRect = player.root.getBoundingClientRect();
            pipOptions.width = playerRect.width;
            pipOptions.height = playerRect.height;
          }
          documentPictureInPicture.requestWindow(pipOptions).then(function(pipWin) {
            var docPiPNode = config.docPiPNode, docPiPStyle = config.docPiPStyle;
            _this4.enterPIPCallback();
            var pipRoot = docPiPNode || player.root;
            var parentNode = pipRoot.parentElement;
            var previousSibling = pipRoot.previousSibling;
            var nextSibling = pipRoot.nextSibling;
            _this4.copyStyleIntoPiPWindow(pipWin);
            var styles = document.createElement("style");
            styles.append("body{padding:0; margin:0;}");
            if (docPiPStyle) {
              var cssContent = "";
              if (typeof docPiPStyle === "string") {
                cssContent = docPiPStyle;
              } else if (typeof docPiPStyle === "function") {
                cssContent = docPiPStyle.call(config);
              }
              if (cssContent) {
                styles.append(cssContent);
              }
            } else if (pipRoot === player.root) {
              styles.append("\n              .xgplayer{width: 100%!important; height: 100%!important;}\n            ");
            }
            pipWin.document.head.append(styles);
            pipWin.document.body.append(pipRoot);
            pipWin.addEventListener("pagehide", function(event) {
              if (parentNode) {
                if (nextSibling) {
                  parentNode.insertBefore(pipRoot, nextSibling);
                } else if (previousSibling) {
                  parentNode.insertBefore(pipRoot, previousSibling.nextSibling);
                } else {
                  parentNode.appendChild(pipRoot);
                }
              } else {
              }
              _this4.leavePIPCallback();
            }, {
              once: true
            });
          });
        } else if (PIP2.checkWebkitSetPresentationMode(player.media)) {
          player.media.webkitSetPresentationMode("picture-in-picture");
        } else {
          player.media.requestPictureInPicture();
        }
        return true;
      } catch (reason) {
        console.error("requestPiP", reason);
        return false;
      }
    }
  }, {
    key: "exitPIP",
    value: function exitPIP() {
      var player = this.player;
      try {
        if (this.isPIPAvailable() && this.isPip) {
          var _documentPictureInPic;
          if (this.isDocPIPAvailable() && (_documentPictureInPic = documentPictureInPicture) !== null && _documentPictureInPic !== void 0 && _documentPictureInPic.window) {
            documentPictureInPicture.window.close();
          } else if (PIP2.checkWebkitSetPresentationMode(player.media)) {
            player.media.webkitSetPresentationMode("inline");
          } else {
            document.exitPictureInPicture();
          }
        }
        return true;
      } catch (reason) {
        console.error("exitPIP", reason);
        return false;
      }
    }
  }, {
    key: "isPip",
    get: function get() {
      var _documentPictureInPic2;
      var player = this.player;
      return !!(this.isDocPIPAvailable() && (_documentPictureInPic2 = documentPictureInPicture) !== null && _documentPictureInPic2 !== void 0 && _documentPictureInPic2.window) || document.pictureInPictureElement && document.pictureInPictureElement === player.media || player.media.webkitPresentationMode === PresentationMode.PIP;
    }
  }, {
    key: "isPIPAvailable",
    value: function isPIPAvailable() {
      var video = this.player.media;
      var _isEnabled = util.typeOf(document.pictureInPictureEnabled) === "Boolean" ? document.pictureInPictureEnabled : false;
      return _isEnabled && (util.typeOf(video.disablePictureInPicture) === "Boolean" && !video.disablePictureInPicture || video.webkitSupportsPresentationMode && util.typeOf(video.webkitSetPresentationMode) === "Function") || this.isDocPIPAvailable();
    }
  }, {
    key: "isDocPIPAvailable",
    value: function isDocPIPAvailable() {
      return "documentPictureInPicture" in window && /^(https|file)/.test(location.protocol);
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      _get(_getPrototypeOf(PIP2.prototype), "destroy", this).call(this);
      var player = this.player;
      player.media.removeEventListener("enterpictureinpicture", this.enterPIPCallback);
      player.media.removeEventListener("leavepictureinpicture", this.leavePIPCallback);
      PIP2.checkWebkitSetPresentationMode(player.media) && player.media.removeEventListener("webkitpresentationmodechanged", this.onWebkitpresentationmodechanged);
      this.exitPIP();
      this.unbind("click", this.btnClick);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.config.showIcon || !this.isPIPAvailable()) {
        return;
      }
      return '<xg-icon class="xgplayer-pip">\n      <div class="xgplayer-icon xg-icon-disable">\n      </div>\n      '.concat(xgIconTips(this, "PIP", this.playerConfig.isHideTips), "\n    </xg-icon>");
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "pip";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        position: POSITIONS.CONTROLS_RIGHT,
        index: 6,
        showIcon: false,
        preferDocument: false,
        width: void 0,
        height: void 0,
        docPiPNode: void 0,
        docPiPStyle: void 0
      };
    }
  }, {
    key: "checkWebkitSetPresentationMode",
    value: function checkWebkitSetPresentationMode(video) {
      return typeof video.webkitSetPresentationMode === "function";
    }
  }]);
  return PIP2;
}(Icon);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/assets/playNext.js
function Next() {
  return new DOMParser().parseFromString('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="40" viewBox="10 0 24 40">\n  <path transform="scale(0.038 0.028)" d="M800 380v768h-128v-352l-320 320v-704l320 320v-352z"></path>\n</svg>\n', "image/svg+xml").firstChild;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/playNext/index.js
var PlayNextIcon = function(_Plugin) {
  _inherits(PlayNextIcon2, _Plugin);
  var _super = _createSuper(PlayNextIcon2);
  function PlayNextIcon2(options) {
    var _this;
    _classCallCheck(this, PlayNextIcon2);
    _this = _super.call(this, options);
    _defineProperty(_assertThisInitialized(_this), "playNext", function(e) {
      var _assertThisInitialize = _assertThisInitialized(_this), player = _assertThisInitialize.player;
      e.preventDefault();
      e.stopPropagation();
      if (_this.idx + 1 < _this.config.urlList.length) {
        _this.idx++;
        _this.nextHandler(_this.config.urlList[_this.idx], _this.idx);
        player.emit(PLAYNEXT, _this.idx + 1);
      } else {
        _this.nextHandler();
        player.emit(PLAYNEXT);
      }
    });
    _this.idx = -1;
    return _this;
  }
  _createClass(PlayNextIcon2, [{
    key: "afterCreate",
    value: function afterCreate() {
      if (!this.config.urlList || this.config.urlList.length === 0) {
        return;
      }
      this.appendChild(".xgplayer-icon", this.icons.playNext);
      this.initEvents();
    }
  }, {
    key: "registerIcons",
    value: function registerIcons() {
      return {
        playNext: Next
      };
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      this.nextHandler = this.hook("nextClick", this.changeSrc);
      var event = sniffer.device === "mobile" ? "touchend" : "click";
      this.bind(event, this.playNext);
      this.show();
    }
  }, {
    key: "changeSrc",
    value: function changeSrc(url) {
      var player = this.player;
      if (!url) {
        return;
      }
      player.pause();
      player.currentTime = 0;
      if (player.switchURL) {
        player.switchURL(url);
      } else {
        player.src = url;
      }
      player.config.url = url;
      player.play();
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      this.unbind(["touchend", "click"], this.playNext);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.config.urlList || this.config.urlList.length === 0) {
        return;
      }
      return '\n     <xg-icon class="xgplayer-playnext">\n      <div class="xgplayer-icon">\n      </div>\n      '.concat(xgIconTips(this, "PLAYNEXT_TIPS", this.playerConfig.isHideTips), "\n     </xg-icon>\n    ");
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "playNext";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        position: POSITIONS.CONTROLS_LEFT,
        index: 1,
        url: null,
        urlList: []
      };
    }
  }]);
  return PlayNextIcon2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/download/index.js
var import_downloadjs = __toESM(require_download());

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/assets/download.js
function DownloadSvg() {
  return new DOMParser().parseFromString('<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">\n  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <g transform="translate(-488.000000, -340.000000)" fill="#FFFFFF">\n      <g id="Group-2">\n        <g id="volme_big-copy" transform="translate(488.000000, 340.000000)">\n          <rect id="Rectangle-18" x="11" y="4" width="2" height="12" rx="1"></rect>\n          <rect id="Rectangle-2" x="3" y="18" width="18" height="2" rx="1"></rect>\n          <rect id="Rectangle-2" transform="translate(4.000000, 17.500000) rotate(90.000000) translate(-4.000000, -17.500000) " x="1.5" y="16.5" width="5" height="2" rx="1"></rect><rect id="Rectangle-2-Copy-3" transform="translate(20.000000, 17.500000) rotate(90.000000) translate(-20.000000, -17.500000) " x="17.5" y="16.5" width="5" height="2" rx="1"></rect>\n          <path d="M9.48791171,8.26502656 L9.48791171,14.2650266 C9.48791171,14.8173113 9.04019646,15.2650266 8.48791171,15.2650266 C7.93562696,15.2650266 7.48791171,14.8173113 7.48791171,14.2650266 L7.48791171,7.26502656 C7.48791171,6.71274181 7.93562696,6.26502656 8.48791171,6.26502656 L15.4879117,6.26502656 C16.0401965,6.26502656 16.4879117,6.71274181 16.4879117,7.26502656 C16.4879117,7.81731131 16.0401965,8.26502656 15.4879117,8.26502656 L9.48791171,8.26502656 Z" id="Combined-Shape" transform="translate(11.987912, 10.765027) scale(1, -1) rotate(45.000000) translate(-11.987912, -10.765027) "></path>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n', "image/svg+xml").firstChild;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/download/index.js
var Download = function(_IconPlugin) {
  _inherits(Download2, _IconPlugin);
  var _super = _createSuper(Download2);
  function Download2(args) {
    var _this;
    _classCallCheck(this, Download2);
    _this = _super.call(this, args);
    _defineProperty(_assertThisInitialized(_this), "download", function(e) {
      if (_this.isLock) {
        return;
      }
      _this.emitUserAction(e, "download");
      var url = _this.playerConfig.url;
      var dUrl = "";
      if (util.typeOf(url) === "String") {
        dUrl = url;
      } else if (util.typeOf(url) === "Array" && url.length > 0) {
        dUrl = url[0].src;
      }
      var newUrl = _this.getAbsoluteURL(dUrl);
      (0, import_downloadjs.default)(newUrl);
      _this.isLock = true;
      _this.timer = window.setTimeout(function() {
        _this.isLock = false;
        window.clearTimeout(_this.timer);
        _this.timer = null;
      }, 300);
    });
    _this.timer = null;
    _this.isLock = false;
    return _this;
  }
  _createClass(Download2, [{
    key: "afterCreate",
    value: function afterCreate() {
      _get(_getPrototypeOf(Download2.prototype), "afterCreate", this).call(this);
      if (this.config.disable) {
        return;
      }
      this.appendChild(".xgplayer-icon", this.icons.download);
      this._handler = this.hook("click", this.download, {
        pre: function pre(e) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
      this.bind(["click", "touchend"], this._handler);
    }
  }, {
    key: "registerIcons",
    value: function registerIcons() {
      return {
        download: DownloadSvg
      };
    }
  }, {
    key: "getAbsoluteURL",
    value: function getAbsoluteURL(url) {
      if (!url.match(/^https?:\/\//)) {
        var div = document.createElement("div");
        div.innerHTML = '<a href="'.concat(url, '">x</a>');
        url = div.firstChild.href;
      }
      return url;
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      _get(_getPrototypeOf(Download2.prototype), "destroy", this).call(this);
      this.unbind(["click", "touchend"], this.download);
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.config.disable) {
        return;
      }
      return '<xg-icon class="xgplayer-download">\n   <div class="xgplayer-icon">\n   </div>\n   '.concat(xgIconTips(this, "DOWNLOAD_TIPS", this.playerConfig.isHideTips), "\n    </xg-icon>");
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "download";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        position: POSITIONS.CONTROLS_RIGHT,
        index: 3,
        disable: true
      };
    }
  }]);
  return Download2;
}(Icon);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/screenShot/index.js
var ScreenShot = function(_IconPlugin) {
  _inherits(ScreenShot2, _IconPlugin);
  var _super = _createSuper(ScreenShot2);
  function ScreenShot2() {
    _classCallCheck(this, ScreenShot2);
    return _super.apply(this, arguments);
  }
  _createClass(ScreenShot2, [{
    key: "beforeCreate",
    value: function beforeCreate(args) {
      if (typeof args.player.config.screenShot === "boolean") {
        args.config.disable = !args.player.config.screenShot;
      }
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      _get(_getPrototypeOf(ScreenShot2.prototype), "afterCreate", this).call(this);
      this.appendChild(".xgplayer-icon", this.icons.screenshotIcon);
      var config = this.config;
      this.initSize = function(data) {
        if (config.fitVideo) {
          config.width = data.vWidth;
          config.height = data.vHeight;
        }
      };
      this.once(VIDEO_RESIZE, this.initSize);
    }
  }, {
    key: "onPluginsReady",
    value: function onPluginsReady2() {
      this.show();
      this.onClickBtn = this.onClickBtn.bind(this);
      this.bind(["click", "touchend"], this.onClickBtn);
    }
  }, {
    key: "saveScreenShot",
    value: function saveScreenShot(data, filename) {
      var saveLink = document.createElement("a");
      saveLink.href = data;
      saveLink.download = filename;
      var event;
      try {
        if (typeof MouseEvent !== "undefined") {
          event = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window
          });
        } else {
          event = document.createEvent("MouseEvents");
          event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        }
      } catch (e) {
        console.error("MouseEvent unsupported", e);
      }
      if (event) {
        saveLink.dispatchEvent(event);
      }
    }
  }, {
    key: "createCanvas",
    value: function createCanvas(width, height) {
      var canvas = document.createElement("canvas");
      var canvasCtx = canvas.getContext("2d");
      this.canvasCtx = canvasCtx;
      this.canvas = canvas;
      canvas.width = width || this.config.width;
      canvas.height = height || this.config.height;
      canvasCtx.imageSmoothingEnabled = true;
      if (canvasCtx.imageSmoothingEnabled) {
        canvasCtx.imageSmoothingQuality = "high";
      }
    }
  }, {
    key: "onClickBtn",
    value: function onClickBtn(e) {
      var _this = this;
      e.preventDefault();
      e.stopPropagation();
      this.emitUserAction(e, "shot");
      var config = this.config;
      this.shot(config.width, config.height).then(function(data) {
        _this.emit(SCREEN_SHOT, data);
        if (config.saveImg) {
          _this.saveScreenShot(data, config.name + config.format);
        }
      });
    }
  }, {
    key: "shot",
    value: function shot(width, height) {
      var _this2 = this;
      var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        quality: 0.92,
        type: "image/png"
      };
      var config = this.config, player = this.player;
      var quality = option.quality || config.quality;
      var type = option.type || config.type;
      return new Promise(function(resolve, reject) {
        var canvas = null;
        var canvasCtx;
        if (player.media.canvas) {
          canvas = player.media.canvas;
        } else {
          if (!_this2.canvas) {
            _this2.createCanvas(width, height);
          } else {
            _this2.canvas.width = width || config.width;
            _this2.canvas.height = height || config.height;
          }
          canvas = _this2.canvas;
          canvasCtx = _this2.canvasCtx;
          var mediaRatio = player.media.videoWidth / player.media.videoHeight;
          var canvasRatio = canvas.width / canvas.height;
          var sx = 0, sy = 0, sw = player.media.videoWidth, sh = player.media.videoHeight;
          var dx, dy, dw, dh;
          if (mediaRatio > canvasRatio) {
            dw = canvas.width;
            dh = canvas.width / mediaRatio;
            dx = 0;
            dy = Math.round((canvas.height - dh) / 2);
          } else if (mediaRatio === canvasRatio) {
            dw = canvas.width;
            dh = canvas.height;
            dx = 0;
            dy = 0;
          } else if (mediaRatio < canvasRatio) {
            dw = canvas.height * mediaRatio;
            dh = canvas.height;
            dx = Math.round((canvas.width - dw) / 2);
            dy = 0;
          }
          canvasCtx.drawImage(player.media, sx, sy, sw, sh, dx, dy, dw, dh);
        }
        var src = canvas.toDataURL(type, quality).replace(type, "image/octet-stream");
        src = src.replace(/^data:image\/[^;]+/, "data:application/octet-stream");
        resolve(src);
      });
    }
  }, {
    key: "registerIcons",
    value: function registerIcons() {
      return {
        screenshotIcon: null
      };
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      _get(_getPrototypeOf(ScreenShot2.prototype), "destroy", this).call(this);
      this.unbind(["click", "touchend"], this.onClickBtn);
      this.off(VIDEO_RESIZE, this.initSize);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.config.disable) {
        return;
      }
      var className = this.icons.screenshotIcon ? "xgplayer-icon" : "xgplayer-icon btn-text";
      var langKey = "SCREENSHOT";
      return '\n      <xg-icon class="xgplayer-shot">\n      <div class="'.concat(className, '">\n      ').concat(this.icons.screenshotIcon ? "" : '<span lang-key="'.concat(this.i18nKeys[langKey], '">').concat(this.i18n[langKey], "</span>"), "\n      </div>\n    </xg-icon>");
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "screenShot";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        position: POSITIONS.CONTROLS_RIGHT,
        index: 5,
        quality: 0.92,
        type: "image/png",
        format: ".png",
        width: 600,
        height: 337,
        saveImg: true,
        fitVideo: true,
        disable: false,
        name: "screenshot"
      };
    }
  }]);
  return ScreenShot2;
}(Icon);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/common/optionList.js
var OptionList = function() {
  function OptionList2(args) {
    _classCallCheck(this, OptionList2);
    this.config = args.config;
    this.parent = args.root;
    this.root = util.createDom("ul", "", {}, "xg-options-list xg-list-slide-scroll ".concat(this.config.className));
    args.root.appendChild(this.root);
    var maxHeight = this.config.maxHeight;
    if (maxHeight) {
      this.setStyle({
        maxHeight
      });
    }
    this.onItemClick = this.onItemClick.bind(this);
    this.renderItemList();
    var eventName = this.config.domEventType === "touch" ? "touchend" : "click";
    this._delegates = Plugin.delegate.call(this, this.root, "li", eventName, this.onItemClick);
  }
  _createClass(OptionList2, [{
    key: "renderItemList",
    value: function renderItemList(data) {
      var _this = this;
      var config = this.config, root = this.root;
      if (data) {
        config.data = data;
      } else {
        data = config.data;
      }
      if (config.style) {
        Object.keys(config.style).map(function(key) {
          root.style[key] = config[key];
        });
      }
      if (data.length > 0) {
        this.attrKeys = Object.keys(data[0]);
      }
      this.root.innerHTML = "";
      data.map(function(item, index) {
        var className = item.selected ? "option-item selected" : "option-item";
        item["data-index"] = index;
        _this.root.appendChild(util.createDom("li", "<span>".concat(item.showText, "</span>"), item, className));
      });
    }
  }, {
    key: "onItemClick",
    value: function onItemClick(e) {
      if (!e.delegateTarget) {
        e.delegateTarget = e.target;
      }
      var target = e.delegateTarget;
      if (target && util.hasClass(target, "selected")) {
        return false;
      }
      var changeCallback = typeof this.config.onItemClick === "function" ? this.config.onItemClick : null;
      var curSelected = this.root.querySelector(".selected");
      util.addClass(target, "selected");
      curSelected && util.removeClass(curSelected, "selected");
      changeCallback(e, {
        from: curSelected ? this.getAttrObj(curSelected, this.attrKeys) : null,
        to: this.getAttrObj(target, this.attrKeys)
      });
    }
  }, {
    key: "getAttrObj",
    value: function getAttrObj(dom, keys) {
      if (!dom || !keys) {
        return {};
      }
      var obj = {};
      keys.map(function(key) {
        obj[key] = dom.getAttribute(key);
      });
      var index = dom.getAttribute("data-index");
      if (index) {
        obj.index = Number(index);
      }
      return obj;
    }
  }, {
    key: "show",
    value: function show() {
      util.removeClass(this.root, "hide");
      util.addClass(this.root, "active");
    }
  }, {
    key: "hide",
    value: function hide() {
      util.removeClass(this.root, "active");
      util.addClass(this.root, "hide");
    }
  }, {
    key: "setStyle",
    value: function setStyle(style) {
      var _this2 = this;
      Object.keys(style).forEach(function(key) {
        _this2.root.style[key] = style[key];
      });
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      if (this._delegates) {
        this._delegates.map(function(item) {
          item.destroy && item.destroy();
        });
        this._delegates = null;
      }
      this.root.innerHTML = null;
      this.parent.removeChild(this.root);
      this.root = null;
    }
  }]);
  return OptionList2;
}();

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/common/optionsIcon.js
var LIST_TYPES = {
  SIDE: "side",
  MIDDLE: "middle",
  DEFAULT: "default"
};
var TOGGLE_MODES = {
  CLICK: "click",
  HOVER: "hover"
};
function getListClassName(listType, position) {
  if (listType === LIST_TYPES.SIDE) {
    return position === POSITIONS.CONTROLS_LEFT ? "xg-side-list xg-left-side" : "xg-side-list xg-right-side";
  } else {
    return "";
  }
}
var IS_MOBILE = sniffer.device === "mobile";
var OptionsIcon = function(_Plugin) {
  _inherits(OptionsIcon2, _Plugin);
  var _super = _createSuper(OptionsIcon2);
  function OptionsIcon2(args) {
    var _this;
    _classCallCheck(this, OptionsIcon2);
    _this = _super.call(this, args);
    _defineProperty(_assertThisInitialized(_this), "onEnter", function(e) {
      e.stopPropagation();
      _this.emit("icon_mouseenter", {
        pluginName: _this.pluginName
      });
      _this.switchActiveState(e);
    });
    _defineProperty(_assertThisInitialized(_this), "switchActiveState", function(e) {
      e.stopPropagation();
      var toggleMode = _this.config.toggleMode;
      if (toggleMode === TOGGLE_MODES.CLICK) {
        _this.toggle(!_this.isActive);
      } else {
        _this.toggle(true);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onLeave", function(e) {
      e.stopPropagation();
      _this.emit("icon_mouseleave", {
        pluginName: _this.pluginName
      });
      if (_this.config.listType !== LIST_TYPES.SIDE) {
        _this.isActive && _this.toggle(false);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onListEnter", function(e) {
      _this.enterType = 2;
    });
    _defineProperty(_assertThisInitialized(_this), "onListLeave", function(e) {
      _this.enterType = 0;
      _this.isActive && _this.toggle(false);
    });
    _this.isIcons = false;
    _this.isActive = false;
    _this.curValue = null;
    _this.curIndex = 0;
    return _this;
  }
  _createClass(OptionsIcon2, [{
    key: "updateLang",
    value: function updateLang(value) {
      this.renderItemList(this.config.list, this.curIndex);
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      var config = this.config;
      this.initIcons();
      IS_MOBILE = IS_MOBILE || this.domEventType === "touch";
      if (IS_MOBILE && sniffer.device === "mobile" && config.listType === LIST_TYPES.DEFAULT) {
        config.listType = LIST_TYPES.SIDE;
      }
      config.hidePortrait && util.addClass(this.root, "portrait");
      this.on([VIDEO_RESIZE, FULLSCREEN_CHANGE], function() {
        _this2._resizeList();
      });
      this.once(CANPLAY, function() {
        if (config.list && config.list.length > 0) {
          _this2.renderItemList(config.list);
          _this2.show();
        }
      });
      IS_MOBILE && this.on(PLAYER_FOCUS, function() {
        if (!_this2.isActive) {
          return;
        }
        _this2.optionsList && _this2.optionsList.hide();
        _this2.isActive = false;
      });
      if (IS_MOBILE) {
        config.toggleMode = TOGGLE_MODES.CLICK;
        this.activeEvent = "touchend";
      } else {
        this.activeEvent = config.toggleMode === TOGGLE_MODES.CLICK ? "click" : "mouseenter";
      }
      if (config.toggleMode === TOGGLE_MODES.CLICK) {
        this.bind(this.activeEvent, this.switchActiveState);
      } else {
        this.bind(this.activeEvent, this.onEnter);
        this.bind("mouseleave", this.onLeave);
      }
      this.isIcons && this.bind("click", this.onIconClick);
    }
  }, {
    key: "initIcons",
    value: function initIcons() {
      var _this3 = this;
      var icons = this.icons;
      var _c = Object.keys(icons);
      var _isIcons = false;
      if (_c.length > 0) {
        _c.forEach(function(key) {
          _this3.appendChild(".xgplayer-icon", icons[key]);
          !_isIcons && (_isIcons = icons[key]);
        });
        this.isIcons = _isIcons;
      }
      if (_isIcons) {
        return;
      }
      this.appendChild(".xgplayer-icon", util.createDom("span", "", {}, "icon-text"));
      util.addClass(this.find(".xgplayer-icon"), "btn-text");
    }
  }, {
    key: "show",
    value: function show(value) {
      if (!this.config.list || this.config.list.length < 2) {
        return;
      }
      util.addClass(this.root, "show");
    }
  }, {
    key: "hide",
    value: function hide() {
      util.removeClass(this.root, "show");
    }
  }, {
    key: "getTextByLang",
    value: function getTextByLang(item, key, lang) {
      if (item === void 0) {
        return "";
      }
      var list = this.config.list;
      !lang && (lang = this.player.lang);
      key = !key || util.isUndefined(item[key]) ? "text" : key;
      typeof item === "number" && (item = list[item]);
      try {
        if (_typeof(item[key]) === "object") {
          return item[key][lang] || item[key].en;
        } else {
          return item[key];
        }
      } catch (err) {
        console.warn(err);
        return "";
      }
    }
  }, {
    key: "toggle",
    value: function toggle(isActive) {
      if (isActive === this.isActive || this.config.disable)
        return;
      var controls = this.player.controls;
      var listType = this.config.listType;
      if (isActive) {
        listType === LIST_TYPES.SIDE ? controls.blur() : controls.focus();
        this.optionsList && this.optionsList.show();
      } else {
        listType === LIST_TYPES.SIDE ? controls.focus() : controls.focusAwhile();
        this.optionsList && this.optionsList.hide();
      }
      this.isActive = isActive;
    }
  }, {
    key: "onItemClick",
    value: function onItemClick(e, data) {
      e.stopPropagation();
      var _this$config = this.config, listType = _this$config.listType, list = _this$config.list;
      this.curIndex = data.to.index;
      this.curItem = list[this.curIndex];
      this.changeCurrentText();
      var isItemClickHide = this.config.isItemClickHide;
      (isItemClickHide || IS_MOBILE || listType === LIST_TYPES.SIDE) && this.toggle(false);
    }
  }, {
    key: "onIconClick",
    value: function onIconClick(e) {
    }
  }, {
    key: "changeCurrentText",
    value: function changeCurrentText() {
      if (this.isIcons) {
        return;
      }
      var list = this.config.list;
      var index = this.curIndex < list.length ? this.curIndex : 0;
      var curItem = list[index];
      if (!curItem)
        return;
      this.find(".icon-text").innerHTML = this.getTextByLang(curItem, "iconText");
    }
  }, {
    key: "renderItemList",
    value: function renderItemList(itemList, curIndex) {
      var _this4 = this;
      var config = this.config, optionsList = this.optionsList, player = this.player;
      if (typeof curIndex === "number") {
        this.curIndex = curIndex;
        this.curItem = config.list[curIndex];
      }
      if (optionsList) {
        optionsList.renderItemList(itemList);
        this.changeCurrentText();
        return;
      }
      var options = {
        config: {
          data: itemList || [],
          className: getListClassName(config.listType, config.position),
          onItemClick: function onItemClick(e, data) {
            _this4.onItemClick(e, data);
          },
          domEventType: IS_MOBILE ? "touch" : "mouse"
        },
        root: config.listType === LIST_TYPES.SIDE ? player.innerContainer || player.root : this.root
      };
      if (this.config.isShowIcon) {
        var _this$player$root$get = this.player.root.getBoundingClientRect(), height = _this$player$root$get.height;
        var _maxH = config.listType === LIST_TYPES.MIDDLE ? height - 50 : height;
        if (_maxH && config.heightLimit) {
          options.config.maxHeight = "".concat(_maxH, "px");
        }
        this.optionsList = new OptionList(options);
        this.changeCurrentText();
        this.show();
      }
      this._resizeList();
    }
  }, {
    key: "_resizeList",
    value: function _resizeList() {
      if (!this.config.heightLimit) {
        return;
      }
      var _this$player$root$get2 = this.player.root.getBoundingClientRect(), height = _this$player$root$get2.height;
      var _maxH = this.config.listType === LIST_TYPES.MIDDLE ? height - 50 : height;
      this.optionsList && this.optionsList.setStyle({
        maxHeight: "".concat(_maxH, "px")
      });
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      var config = this.config;
      if (config.toggleMode === TOGGLE_MODES.CLICK) {
        this.unbind(this.activeEvent, this.switchActiveState);
      } else {
        this.unbind(this.activeEvent, this.onEnter);
        this.unbind("mouseleave", this.onLeave);
      }
      this.isIcons && this.unbind("click", this.onIconClick);
      if (this.optionsList) {
        this.optionsList.destroy();
        this.optionsList = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.config.isShowIcon) {
        return;
      }
      return '<xg-icon class="xg-options-icon '.concat(this.config.className || "", '">\n    <div class="xgplayer-icon">\n    </div>\n   </xg-icon>');
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "optionsIcon";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        position: POSITIONS.CONTROLS_RIGHT,
        index: 100,
        list: [],
        listType: "default",
        listStyle: {},
        hidePortrait: true,
        isShowIcon: false,
        isItemClickHide: true,
        toggleMode: TOGGLE_MODES.HOVER,
        heightLimit: true
      };
    }
  }]);
  return OptionsIcon2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/definition/index.js
var DefinitionIcon = function(_OptionsIcon) {
  _inherits(DefinitionIcon2, _OptionsIcon);
  var _super = _createSuper(DefinitionIcon2);
  function DefinitionIcon2(args) {
    var _this;
    _classCallCheck(this, DefinitionIcon2);
    _this = _super.call(this, args);
    _this.curTime = 0;
    _this.isPaused = true;
    return _this;
  }
  _createClass(DefinitionIcon2, [{
    key: "beforeCreate",
    value: function beforeCreate(args) {
      var list = args.config.list;
      if (Array.isArray(list) && list.length > 0) {
        args.config.list = list.map(function(item) {
          if (!item.text && item.name) {
            item.text = item.name;
          }
          if (!item.text) {
            item.text = item.definition;
          }
          return item;
        });
      }
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      _get(_getPrototypeOf(DefinitionIcon2.prototype), "afterCreate", this).call(this);
      this.on("resourceReady", function(list) {
        _this2.changeDefinitionList(list);
      });
      this.on(DEFINITION_CHANGE, function(data) {
        _this2.renderItemList(_this2.config.list, data.to);
      });
      if (this.player.definitionList.length < 2) {
        this.hide();
      }
    }
  }, {
    key: "show",
    value: function show(value) {
      if (!this.config.list || this.config.list.length < 2) {
        return;
      }
      util.addClass(this.root, "show");
    }
  }, {
    key: "initDefinition",
    value: function initDefinition() {
      var _this$config = this.config, list = _this$config.list, defaultDefinition = _this$config.defaultDefinition;
      if (list.length > 0) {
        var to = null;
        list.map(function(item) {
          if (item.definition === defaultDefinition) {
            to = item;
          }
        });
        if (!to) {
          to = list[0];
        }
        this.changeDefinition(to);
      }
    }
  }, {
    key: "renderItemList",
    value: function renderItemList() {
      var _this3 = this;
      var list = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.config.list || [];
      var to = arguments.length > 1 ? arguments[1] : void 0;
      var targetDef = to && to.definition ? to.definition : this.config.defaultDefinition;
      if (to) {
        list.forEach(function(item) {
          item.selected = false;
        });
      }
      var curIndex = 0;
      var items = list.map(function(item, index) {
        var showItem = _objectSpread2(_objectSpread2({}, item), {}, {
          showText: _this3.getTextByLang(item) || item.definition,
          selected: false
        });
        if (item.selected || item.definition && item.definition == targetDef) {
          showItem.selected = true;
          curIndex = index;
        }
        return showItem;
      });
      _get(_getPrototypeOf(DefinitionIcon2.prototype), "renderItemList", this).call(this, items, curIndex);
    }
  }, {
    key: "changeDefinitionList",
    value: function changeDefinitionList(list) {
      if (!Array.isArray(list)) {
        return;
      }
      this.config.list = list.map(function(item) {
        if (!item.text && item.name) {
          item.text = item.name;
        }
        if (!item.text) {
          item.text = item.definition;
        }
        return item;
      });
      this.renderItemList();
      this.config.list.length < 2 ? this.hide() : this.show();
    }
  }, {
    key: "changeDefinition",
    value: function changeDefinition(to, from) {
      this.player.changeDefinition(to, from);
    }
  }, {
    key: "onItemClick",
    value: function onItemClick(e, data) {
      var definitionList = this.player.definitionList;
      _get(_getPrototypeOf(DefinitionIcon2.prototype), "onItemClick", this).apply(this, arguments);
      this.emitUserAction(e, "change_definition", {
        from: data.from,
        to: data.to
      });
      for (var i = 0; i < definitionList.length; i++) {
        if (data.to && definitionList[i].definition === data.to.definition) {
          data.to.url = definitionList[i].url;
        }
        if (data.from && definitionList[i].definition === data.from.definition) {
          data.from.url = definitionList[i].url;
        }
      }
      this.player.changeDefinition(data.to, data.from);
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "definition";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return _objectSpread2(_objectSpread2({}, OptionsIcon.defaultConfig), {}, {
        position: POSITIONS.CONTROLS_RIGHT,
        index: 3,
        list: [],
        defaultDefinition: "",
        disable: false,
        hidePortrait: false,
        className: "xgplayer-definition",
        isShowIcon: true
      });
    }
  }]);
  return DefinitionIcon2;
}(OptionsIcon);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/playbackRate/index.js
var PlaybackRate = function(_OptionsIcon) {
  _inherits(PlaybackRate2, _OptionsIcon);
  var _super = _createSuper(PlaybackRate2);
  function PlaybackRate2(args) {
    var _this;
    _classCallCheck(this, PlaybackRate2);
    _this = _super.call(this, args);
    _this.curRate = 1;
    return _this;
  }
  _createClass(PlaybackRate2, [{
    key: "beforeCreate",
    value: function beforeCreate(args) {
      var playbackRate = args.player.config.playbackRate;
      var list = !playbackRate ? [] : Array.isArray(playbackRate) ? playbackRate : args.config.list;
      if (Array.isArray(list)) {
        args.config.list = list.map(function(item) {
          if (typeof item === "number") {
            item = {
              rate: item,
              text: "".concat(item, "x")
            };
          } else if (!item.text && item.rate) {
            item.text = "".concat(item.rate, "x");
          }
          return item;
        });
      }
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      _get(_getPrototypeOf(PlaybackRate2.prototype), "afterCreate", this).call(this);
      this.on(RATE_CHANGE, function() {
        if (_this2.curValue === _this2.player.playbackRate) {
          return;
        }
        _this2.renderItemList();
      });
      this.renderItemList();
    }
  }, {
    key: "show",
    value: function show(value) {
      if (!this.config.list || this.config.list.length === 0) {
        return;
      }
      _get(_getPrototypeOf(PlaybackRate2.prototype), "show", this).call(this);
    }
  }, {
    key: "onItemClick",
    value: function onItemClick(e, _data) {
      _get(_getPrototypeOf(PlaybackRate2.prototype), "onItemClick", this).call(this, e, _data);
      var target = e.delegateTarget;
      var rate = Number(target.getAttribute("rate"));
      if (!rate || rate === this.curValue) {
        return false;
      }
      var props = {
        playbackRate: {
          from: this.player.playbackRate,
          to: rate
        }
      };
      this.emitUserAction(e, "change_rate", {
        props
      });
      this.curValue = rate;
      this.player.playbackRate = rate;
    }
  }, {
    key: "renderItemList",
    value: function renderItemList() {
      var _this3 = this;
      var playbackRate = this.player.playbackRate || 1;
      this.curValue = playbackRate;
      var curIndex = -1;
      var items = this.config.list.map(function(item, index) {
        var itemInfo = {
          rate: item.rate
        };
        if (itemInfo.rate === playbackRate) {
          itemInfo.selected = true;
          curIndex = index;
        }
        itemInfo.showText = _this3.getTextByLang(item);
        return itemInfo;
      });
      _get(_getPrototypeOf(PlaybackRate2.prototype), "renderItemList", this).call(this, items, curIndex);
    }
  }, {
    key: "changeCurrentText",
    value: function changeCurrentText() {
      if (this.isIcons) {
        return;
      }
      var list = this.config.list;
      var index = this.curIndex < list.length ? this.curIndex : 0;
      var curItem = list[index];
      var _text = "";
      if (!curItem || this.curIndex < 0) {
        _text = "".concat(this.player.playbackRate, "x");
      } else {
        _text = this.getTextByLang(curItem, "iconText");
      }
      this.find(".icon-text").innerHTML = _text;
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      _get(_getPrototypeOf(PlaybackRate2.prototype), "destroy", this).call(this);
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "playbackRate";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return _objectSpread2(_objectSpread2({}, OptionsIcon.defaultConfig), {}, {
        position: POSITIONS.CONTROLS_RIGHT,
        index: 4,
        list: [2, 1.5, 1, 0.75, 0.5],
        className: "xgplayer-playbackrate",
        isShowIcon: true,
        hidePortrait: false
      });
    }
  }]);
  return PlaybackRate2;
}(OptionsIcon);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/assets/requestCssFull.js
function CssFullSceenSvg() {
  return new DOMParser().parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" width="31" height="40" viewBox="0 -5 31 40">
  <path fill="#fff" transform="scale(1.3, 1.3)" class='path_full' d="M9,10v1a.9.9,0,0,1-1,1,.9.9,0,0,1-1-1V9A.9.9,0,0,1,8,8h2a.9.9,0,0,1,1,1,.9.9,0,0,1-1,1Zm6,4V13a1,1,0,0,1,2,0v2a.9.9,0,0,1-1,1H14a1,1,0,0,1,0-2Zm3-7H6V17H18Zm2,0V17a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V7A2,2,0,0,1,6,5H18A2,2,0,0,1,20,7Z"></path>
</svg>
`, "image/svg+xml").firstChild;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/assets/exitCssFull.js
function ExitCssFullSceenSvg() {
  return new DOMParser().parseFromString('<svg xmlns="http://www.w3.org/2000/svg" width="31" height="40" viewBox="0 -5 31 40">\n  <path fill="#fff" transform="scale(1.3, 1.3)" d="M9,10V9a.9.9,0,0,1,1-1,.9.9,0,0,1,1,1v2a.9.9,0,0,1-1,1H8a.9.9,0,0,1-1-1,.9.9,0,0,1,1-1Zm6,4v1a1,1,0,0,1-2,0V13a.9.9,0,0,1,1-1h2a1,1,0,0,1,0,2Zm3-7H6V17H18Zm2,0V17a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V7A2,2,0,0,1,6,5H18A2,2,0,0,1,20,7Z"></path>\n</svg>\n', "image/svg+xml").firstChild;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/cssFullScreen/index.js
var CssFullScreen = function(_IconPlugin) {
  _inherits(CssFullScreen2, _IconPlugin);
  var _super = _createSuper(CssFullScreen2);
  function CssFullScreen2() {
    _classCallCheck(this, CssFullScreen2);
    return _super.apply(this, arguments);
  }
  _createClass(CssFullScreen2, [{
    key: "beforeCreate",
    value: function beforeCreate(args) {
      if (typeof args.player.config.cssFullscreen === "boolean") {
        args.config.disable = !args.player.config.cssFullscreen;
      }
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      var _this = this;
      _get(_getPrototypeOf(CssFullScreen2.prototype), "afterCreate", this).call(this);
      if (this.config.disable) {
        return;
      }
      if (this.config.target) {
        this.playerConfig.fullscreenTarget = this.config.target;
      }
      this.initIcons();
      this.on(CSS_FULLSCREEN_CHANGE, function(isCssfullScreen) {
        _this.animate(isCssfullScreen);
      });
      this.btnClick = this.btnClick.bind(this);
      this.handleCssFullscreen = this.hook("cssFullscreen_change", this.btnClick, {
        pre: function pre(e) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
      this.bind(["click", "touchend"], this.handleCssFullscreen);
    }
  }, {
    key: "initIcons",
    value: function initIcons() {
      var icons = this.icons;
      var contentIcon = this.find(".xgplayer-icon");
      contentIcon.appendChild(icons.cssFullscreen);
      contentIcon.appendChild(icons.exitCssFullscreen);
    }
  }, {
    key: "btnClick",
    value: function btnClick(e) {
      e.preventDefault();
      e.stopPropagation();
      var isCssfullScreen = this.player.isCssfullScreen;
      this.emitUserAction(e, "switch_cssfullscreen", {
        cssfullscreen: isCssfullScreen
      });
      if (!isCssfullScreen) {
        this.player.getCssFullscreen();
      } else {
        this.player.exitCssFullscreen();
      }
    }
  }, {
    key: "animate",
    value: function animate(isFullScreen) {
      if (!this.root) {
        return;
      }
      isFullScreen ? this.setAttr("data-state", "full") : this.setAttr("data-state", "normal");
      this.switchTips(isFullScreen);
    }
  }, {
    key: "switchTips",
    value: function switchTips(isFullScreen) {
      var i18nKeys = this.i18nKeys;
      var tipDom = this.find(".xg-tips");
      tipDom && this.changeLangTextKey(tipDom, isFullScreen ? i18nKeys.EXITCSSFULLSCREEN_TIPS : i18nKeys.CSSFULLSCREEN_TIPS);
    }
  }, {
    key: "registerIcons",
    value: function registerIcons() {
      return {
        cssFullscreen: {
          icon: CssFullSceenSvg,
          class: "xg-get-cssfull"
        },
        exitCssFullscreen: {
          icon: ExitCssFullSceenSvg,
          class: "xg-exit-cssfull"
        }
      };
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      _get(_getPrototypeOf(CssFullScreen2.prototype), "destroy", this).call(this);
      this.unbind(["click", "touchend"], this.btnClick);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.config.disable) {
        return;
      }
      return `<xg-icon class='xgplayer-cssfullscreen'>
    <div class="xgplayer-icon">
    </div>
    `.concat(xgIconTips(this, "CSSFULLSCREEN_TIPS", this.playerConfig.isHideTips), "\n    </xg-icon>");
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "cssFullscreen";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        position: POSITIONS.CONTROLS_RIGHT,
        index: 1,
        disable: false,
        target: null
      };
    }
  }]);
  return CssFullScreen2;
}(Icon);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/error/index.js
var ErrorPlugin = function(_Plugin) {
  _inherits(ErrorPlugin2, _Plugin);
  var _super = _createSuper(ErrorPlugin2);
  function ErrorPlugin2() {
    _classCallCheck(this, ErrorPlugin2);
    return _super.apply(this, arguments);
  }
  _createClass(ErrorPlugin2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var _this = this;
      this.clickHandler = this.hook("errorRetry", this.errorRetry, {
        pre: function pre(e) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
      this.onError = this.hook("showError", this.handleError);
      this.bind(".xgplayer-error-refresh", "click", this.clickHandler);
      this.on(ERROR, function(error) {
        _this.onError(error);
      });
    }
  }, {
    key: "errorRetry",
    value: function errorRetry(e) {
      this.emitUserAction(e, "error_retry", {});
      this.player.retry();
    }
  }, {
    key: "handleError",
    value: function handleError() {
      var error = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var player = this.player;
      var type = error.errorType;
      var errorNote = player.errorNote ? this.i18n[player.errorNote] : "";
      if (!errorNote) {
        switch (type) {
          case "decoder":
            errorNote = this.i18n.MEDIA_ERR_DECODE;
            break;
          case "network":
            errorNote = this.i18n.MEDIA_ERR_NETWORK;
            break;
          default:
            errorNote = this.i18n.MEDIA_ERR_SRC_NOT_SUPPORTED;
        }
      }
      this.find(".xgplayer-error-text").innerHTML = errorNote;
      this.find(".xgplayer-error-tips").innerHTML = "".concat(this.i18n.REFRESH_TIPS, '<span class="xgplayer-error-refresh">').concat(this.i18n.REFRESH, "</span>");
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      this.unbind(".xgplayer-error-refresh", "click", this.clickHandler);
    }
  }, {
    key: "render",
    value: function render() {
      return '<xg-error class="xgplayer-error">\n      <div class="xgplayer-errornote">\n       <span class="xgplayer-error-text"></span>\n       <span class="xgplayer-error-tips"><em class="xgplayer-error-refresh"></em></span>\n      </div>\n    </xg-error>';
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "error";
    }
  }]);
  return ErrorPlugin2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/prompt/index.js
var Prompt = function(_Plugin) {
  _inherits(Prompt2, _Plugin);
  var _super = _createSuper(Prompt2);
  function Prompt2() {
    _classCallCheck(this, Prompt2);
    return _super.apply(this, arguments);
  }
  _createClass(Prompt2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var _this = this;
      this.intervalId = 0;
      this.customConfig = null;
      this.bind(".highlight", ["click", "touchend"], function(e) {
        if (_this.config.onClick || _this.customOnClick) {
          e.preventDefault();
          e.stopPropagation();
          _this.customOnClick ? _this.customOnClick(e) : _this.config.onClick(e);
        }
      });
      this.player.showPrompt = function() {
        _this.showPrompt.apply(_this, arguments);
      };
      this.player.hidePrompt = function() {
        _this.hide();
      };
    }
  }, {
    key: "setStyle",
    value: function setStyle(style) {
      var _this2 = this;
      Object.keys(style).map(function(key) {
        _this2.root.style[key] = style[key];
      });
    }
  }, {
    key: "showPrompt",
    value: function showPrompt(detail) {
      var _this3 = this;
      var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var onClick = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      };
      if (!detail) {
        return;
      }
      this.customOnClick = onClick;
      var interval = this.config.interval;
      if (this.intervalId) {
        clearTimeout(this.intervalId);
        this.intervalId = null;
      }
      util.addClass(this.root, "show");
      config.mode === "arrow" && util.addClass(this.root, "arrow");
      if (typeof detail === "string") {
        this.find(".xgplayer-prompt-detail").innerHTML = detail;
      } else {
        this.find(".xgplayer-prompt-detail").innerHTML = "".concat(detail.text || "") + "".concat(detail.highlight ? '<i class="highlight">'.concat(detail.highlight, "</i>") : "");
      }
      config.style && this.setStyle(config.style);
      var autoHide = typeof config.autoHide === "boolean" ? config.autoHide : this.config.autoHide;
      if (autoHide) {
        var hideinterval = config.interval || interval;
        this.intervalId = setTimeout(function() {
          _this3.hide();
        }, hideinterval);
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      util.removeClass(this.root, "show");
      util.removeClass(this.root, "arrow");
      this.root.removeAttribute("style");
      this.customOnClick = null;
    }
  }, {
    key: "render",
    value: function render() {
      return '<xg-prompt class="xgplayer-prompt '.concat(STATE_CLASS.CONTROLS_FOLLOW, '">\n    <span class="xgplayer-prompt-detail"></span>\n    </xg-prompt>');
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "prompt";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        interval: 3e3,
        style: {},
        mode: "arrow",
        autoHide: true,
        detail: {
          text: "",
          highlight: ""
        },
        onClick: function onClick() {
        }
      };
    }
  }]);
  return Prompt2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/progressPreview/dotsApi.js
var import_delegate6 = __toESM(require_delegate());
var ISPOT = {
  time: 0,
  text: "",
  id: 1,
  duration: 1,
  color: "#fff",
  style: {},
  width: 6,
  height: 6
};
function mergeISPOT(iSpot) {
  Object.keys(ISPOT).map(function(key) {
    if (iSpot[key] === void 0) {
      iSpot[key] = ISPOT[key];
    }
  });
}
var APIS = {
  _updateDotDom: function _updateDotDom(iSpot, dotDom) {
    if (!dotDom) {
      return;
    }
    var ret = this.calcuPosition(iSpot.time, iSpot.duration);
    var style = iSpot.style || {};
    style.left = "".concat(ret.left, "%");
    style.width = "".concat(ret.width, "%");
    dotDom.setAttribute("data-text", iSpot.text);
    dotDom.setAttribute("data-time", iSpot.time);
    if (ret.isMini) {
      util.addClass(dotDom, "mini");
    } else {
      util.removeClass(dotDom, "mini");
    }
    Object.keys(style).map(function(key) {
      dotDom.style[key] = style[key];
    });
  },
  initDots: function initDots() {
    var _this = this;
    this._ispots.map(function(item) {
      _this.createDot(item, false);
    });
    this.ispotsInit = true;
  },
  createDot: function createDot(iSpot) {
    var isNew = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    var progress = this.player.plugins.progress;
    if (!progress) {
      return;
    }
    if (isNew) {
      mergeISPOT(iSpot);
      this._ispots.push(iSpot);
    }
    if (!this.ispotsInit && isNew) {
      return;
    }
    var ret = this.calcuPosition(iSpot.time, iSpot.duration);
    var style = iSpot.style || {};
    style.left = "".concat(ret.left, "%");
    style.width = "".concat(ret.width, "%");
    var className = "xgspot_".concat(iSpot.id, " xgplayer-spot");
    ret.isMini && (className += " mini");
    var _t = iSpot.template ? '<div class="xgplayer-spot-pop">'.concat(iSpot.template, "</div>") : "";
    var dotDom = util.createDom("xg-spot", _t, {
      "data-text": iSpot.text,
      "data-time": iSpot.time,
      "data-id": iSpot.id
    }, className);
    Object.keys(style).map(function(key) {
      dotDom.style[key] = style[key];
    });
    progress.outer && progress.outer.appendChild(dotDom);
    this.positionDot(dotDom, iSpot.id);
  },
  findDot: function findDot(id) {
    if (!this.player.plugins.progress) {
      return;
    }
    var ret = this._ispots.filter(function(cur, index) {
      return cur.id === id;
    });
    return ret.length > 0 ? ret[0] : null;
  },
  updateDot: function updateDot(iSpot) {
    var needShow = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var progress = this.player.plugins.progress;
    if (!progress) {
      return;
    }
    var dot = this.findDot(iSpot.id);
    if (dot) {
      Object.keys(iSpot).map(function(key) {
        dot[key] = iSpot[key];
      });
    }
    if (!this.ispotsInit) {
      return;
    }
    var dotDom = progress.find('xg-spot[data-id="'.concat(iSpot.id, '"]'));
    if (!dotDom) {
      return;
    }
    this._updateDotDom(iSpot, dotDom);
    if (needShow) {
      this.showDot(iSpot.id);
    }
  },
  deleteDot: function deleteDot(id) {
    var _ispots = this._ispots;
    var progress = this.player.plugins.progress;
    if (!progress) {
      return;
    }
    var del = [];
    for (var i = 0; i < _ispots.length; i++) {
      if (_ispots[i].id === id) {
        del.push(i);
      }
    }
    var len = del.length;
    for (var _i = len - 1; _i >= 0; _i--) {
      _ispots.splice(del[_i], 1);
      if (this.ispotsInit) {
        var dotDom = progress.find('xg-spot[data-id="'.concat(id, '"]'));
        if (dotDom) {
          dotDom.parentElement.removeChild(dotDom);
        }
      }
    }
  },
  deleteAllDots: function deleteAllDots() {
    var progress = this.player.plugins.progress;
    if (!progress) {
      return;
    }
    if (!this.ispotsInit) {
      this._ispots = [];
      return;
    }
    var dotDoms = progress.root.getElementsByTagName("xg-spot");
    for (var i = dotDoms.length - 1; i >= 0; i--) {
      progress.outer.removeChild(dotDoms[i]);
    }
    this._ispots = [];
  },
  updateAllDots: function updateAllDots() {
    var _this2 = this;
    var iSpots = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var progress = this.player.plugins.progress;
    if (!progress) {
      return;
    }
    if (!this.ispotsInit) {
      this._ispots = iSpots;
      return;
    }
    this._ispots = [];
    var dotDoms = progress.root.getElementsByTagName("xg-spot");
    var len = dotDoms.length;
    if (len > iSpots.length) {
      for (var i = len - 1; i > iSpots.length - 1; i--) {
        progress.outer.removeChild(dotDoms[i]);
      }
    }
    iSpots.forEach(function(ispot, index) {
      if (index < len) {
        dotDoms[index].setAttribute("data-id", "".concat(ispot.id));
        _this2._ispots.push(ispot);
        _this2.updateDot(ispot);
      } else {
        _this2.createDot(ispot);
      }
    });
  },
  positionDots: function positionDots() {
    var _this3 = this;
    var _ispots = this._ispots, playerSize = this.playerSize;
    var sizeInfo = this.player.sizeInfo;
    var progress = this.player.plugins.progress;
    if (!progress || sizeInfo.width === playerSize.width) {
      return;
    }
    playerSize.width = sizeInfo.width;
    playerSize.left = sizeInfo.left;
    _ispots.forEach(function(item) {
      var dotDom = progress.find('xg-spot[data-id="'.concat(item.id, '"]'));
      dotDom && _this3.positionDot(dotDom, item.id);
    });
  },
  positionDot: function positionDot(dotDom, id) {
    var _pop = util.findDom(dotDom, ".xgplayer-spot-pop");
    if (!_pop) {
      return;
    }
    var pRect = this.playerSize;
    var rect1 = dotDom.getBoundingClientRect();
    var rect = _pop.getBoundingClientRect();
    var _left = rect1.left - pRect.left;
    var _diff = pRect.width - _left - rect1.width / 2;
    if (_left < rect.width / 2 || pRect.width < rect.width) {
      var t = rect.width / 2 - _left;
      _pop.style.left = "".concat(t, "px");
    } else if (_diff < rect.width / 2) {
      var _t2 = _diff - rect.width / 2 + rect1.width / 2;
      _pop.style.left = "".concat(_t2, "px");
    } else {
      _pop.style.left = "50%";
    }
  },
  updateDuration: function updateDuration() {
    var _this4 = this;
    var progress = this.player.plugins.progress;
    if (!progress) {
      return;
    }
    var _ispots = this._ispots;
    _ispots.forEach(function(item) {
      var dotDom = progress.find('xg-spot[data-id="'.concat(item.id, '"]'));
      _this4._updateDotDom(item, dotDom);
    });
  },
  getAllDotsDom: function getAllDotsDom() {
    var progress = this.player.plugins.progress;
    if (!progress) {
      return [];
    }
    var dotDoms = progress.root.getElementsByTagName("xg-spot");
    return dotDoms;
  },
  getDotDom: function getDotDom(id) {
    var progress = this.player.plugins.progress;
    if (!progress) {
      return;
    }
    return progress.find('xg-spot[data-id="'.concat(id, '"]'));
  }
};
function initDotsAPI(plugin) {
  var config = plugin.config, player = plugin.player;
  Object.keys(APIS).map(function(item) {
    plugin[item] = APIS[item].bind(plugin);
  });
  var ispots = player.config.progressDot || config.ispots || [];
  plugin._ispots = ispots.map(function(item) {
    mergeISPOT(item);
    return item;
  });
  plugin.ispotsInit = false;
  plugin.playerSize = {
    left: player.sizeInfo.left,
    width: player.sizeInfo.width
  };
  plugin.on(DURATION_CHANGE, function() {
    if (!plugin.ispotsInit) {
      plugin.initDots();
    } else {
      plugin.updateDuration();
    }
  });
  plugin.on(VIDEO_RESIZE, function() {
    plugin.positionDots();
  });
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/progressPreview/index.js
var CALLBACK_MAP = {
  dragmove: "onProgressMove",
  dragstart: "onProgressDragStart",
  dragend: "onProgressDragEnd",
  click: "onProgressClick",
  mouseover: "onProgressMouseOver",
  mouseenter: "onProgressMouseOver"
};
var ProgressPreview = function(_Plugin) {
  _inherits(ProgressPreview2, _Plugin);
  var _super = _createSuper(ProgressPreview2);
  function ProgressPreview2(args) {
    var _this;
    _classCallCheck(this, ProgressPreview2);
    _this = _super.call(this, args);
    _defineProperty(_assertThisInitialized(_this), "onMousemove", function(e) {
      if (_this.config.disable) {
        return;
      }
      if (util.hasClass(e.target, "xg-spot-content") && _this.config.isHideThumbnailHover) {
        _this.player.plugins.progress.onMouseLeave(e);
        return;
      }
      if (_this._state.f || util.hasClass(e.target, "xg-spot-content")) {
        util.event(e);
        e.stopPropagation();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onMousedown", function(e) {
      if (_this.config.disable) {
        return;
      }
      if (_this._state.f || util.hasClass(e.target, "xg-spot-content")) {
        util.event(e);
        e.stopPropagation();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseup", function(e) {
      if (!_this.isDrag) {
        return;
      }
      var progress = _this.player.plugins.progress;
      if (progress && progress.pos) {
        progress.onMouseUp(e);
        !progress.pos.isEnter && progress.onMouseLeave(e);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onDotMouseLeave", function(e) {
      if (_this.config.disable) {
        return;
      }
      _this._curDot.removeEventListener("mouseleave", _this.onDotMouseLeave);
      _this.blurDot(e.target);
      _this._curDot = null;
      var progress = _this.player.plugins.progress;
      progress && progress.enableBlur();
      _this.show();
    });
    _defineProperty(_assertThisInitialized(_this), "onProgressMouseOver", function(data, e) {
      if (_this.config.disable) {
        return;
      }
      if (util.hasClass(e.target, "xgplayer-spot") && !_this._curDot) {
        _this._curDot = e.target;
        _this.focusDot(e.target);
        if (_this._curDot.children.length > 0) {
          _this.hide();
        }
        var progress = _this.player.plugins.progress;
        progress && progress.disableBlur();
        _this._curDot.addEventListener("mouseleave", _this.onDotMouseLeave);
      }
    });
    _this._ispots = [];
    _this.videoPreview = null;
    _this.videothumbnail = null;
    _this.thumbnail = null;
    _this.timeStr = "";
    _this._state = {
      now: 0,
      f: false
    };
    return _this;
  }
  _createClass(ProgressPreview2, [{
    key: "beforeCreate",
    value: function beforeCreate(args) {
      var progress = args.player.plugins.progress;
      if (progress) {
        args.root = progress.root;
      }
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      this._curDot = null;
      this.handlerSpotClick = this.hook("spotClick", function(_event, data) {
        if (data.seekTime) {
          _this2.player.seek(data.seekTime);
        }
      });
      this.transformTimeHook = this.hook("transformTime", function(time) {
        _this2.setTimeContent(util.format(time));
      });
      initDotsAPI(this);
      this.on(DURATION_CHANGE, function() {
        _this2.show();
      });
      if (this.config.disable) {
        this.disable();
      }
      this.extTextRoot = this.find(".xg-spot-ext-text");
    }
  }, {
    key: "setConfig",
    value: function setConfig(config) {
      var _this3 = this;
      if (!config) {
        return;
      }
      Object.keys(config).map(function(key) {
        _this3.config[key] = config[key];
      });
    }
  }, {
    key: "onPluginsReady",
    value: function onPluginsReady2() {
      var player = this.player;
      if (!player.plugins.progress) {
        return;
      }
      this.previewLine = this.find(".xg-spot-line");
      this.timePoint = this.find(".xgplayer-progress-point");
      this.timeText = this.find(".xg-spot-time");
      this.tipText = this.find(".spot-inner-text");
      this._hasThumnail = false;
      this.registerThumbnail();
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this4 = this;
      var progress = this.player.plugins.progress;
      if (!progress) {
        return;
      }
      Object.keys(CALLBACK_MAP).map(function(key) {
        _this4[CALLBACK_MAP[key]] = _this4[CALLBACK_MAP[key]].bind(_this4);
        progress.addCallBack(key, _this4[CALLBACK_MAP[key]]);
      });
      if (sniffer.device === "mobile")
        return;
      this.bind(".xg-spot-info", "mousemove", this.onMousemove);
      this.bind(".xg-spot-info", "mousedown", this.onMousedown);
      this.bind(".xg-spot-info", "mouseup", this.onMouseup);
      var fun = this.hook("previewClick", function() {
      });
      this.handlerPreviewClick = function(e) {
        e.stopPropagation();
        fun(parseInt(_this4._state.now * 1e3, 10) / 1e3, e);
      };
      this.bind(".xg-spot-content", "mouseup", this.handlerPreviewClick);
    }
  }, {
    key: "onProgressMove",
    value: function onProgressMove(data, e) {
      if (this.config.disable || !this.player.duration) {
        return;
      }
      this.updatePosition(data.offset, data.width, data.currentTime, data.e);
    }
  }, {
    key: "onProgressDragStart",
    value: function onProgressDragStart(data) {
      if (this.config.disable || !this.player.duration) {
        return;
      }
      this.isDrag = true;
      this.videoPreview && util.addClass(this.videoPreview, "show");
    }
  }, {
    key: "onProgressDragEnd",
    value: function onProgressDragEnd(data) {
      if (this.config.disable || !this.player.duration) {
        return;
      }
      this.isDrag = false;
      this.videoPreview && util.removeClass(this.videoPreview, "show");
    }
  }, {
    key: "onProgressClick",
    value: function onProgressClick(data, e) {
      if (this.config.disable) {
        return;
      }
      if (util.hasClass(e.target, "xgplayer-spot")) {
        e.stopPropagation();
        e.preventDefault();
        ["time", "id", "text"].map(function(key) {
          data[key] = e.target.getAttribute("data-".concat(key));
        });
        data.time && (data.time = Number(data.time));
        this.handlerSpotClick(e, data);
      }
    }
  }, {
    key: "updateLinePos",
    value: function updateLinePos(offset, cwidth) {
      var root = this.root, previewLine = this.previewLine, player = this.player, config = this.config;
      var mode = player.controls.mode;
      var isflex = mode === "flex";
      var lwidth = root.getBoundingClientRect().width;
      if (!lwidth && this._hasThumnail) {
        return;
      }
      lwidth = this._hasThumnail && lwidth < config.width ? config.width : lwidth;
      var x = offset - lwidth / 2;
      var _t;
      if (x < 0 && !isflex) {
        x = 0;
        _t = offset - lwidth / 2;
      } else if (x > cwidth - lwidth && !isflex) {
        _t = x - (cwidth - lwidth);
        x = cwidth - lwidth;
      } else {
        _t = 0;
      }
      _t !== void 0 && (previewLine.style.transform = "translateX(".concat(_t.toFixed(2), "px)"));
      root.style.transform = "translateX(".concat(x.toFixed(2), "px) translateZ(0)");
    }
  }, {
    key: "updateTimeText",
    value: function updateTimeText(timeStr) {
      var timeText = this.timeText, timePoint = this.timePoint;
      timeText.innerHTML = timeStr;
      !this.thumbnail && (timePoint.innerHTML = timeStr);
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(offset, cwidth, time, e) {
      var root = this.root, config = this.config, _state = this._state;
      if (!root) {
        return;
      }
      _state.now = time;
      this.transformTimeHook(time);
      var timeStr = this.timeStr;
      if (e && e.target && util.hasClass(e.target, "xgplayer-spot")) {
        this.showTips(e.target.getAttribute("data-text"), false, timeStr);
        this.focusDot(e.target);
        _state.f = true;
        config.isFocusDots && _state.f && (_state.now = parseInt(e.target.getAttribute("data-time"), 10));
      } else if (config.defaultText) {
        _state.f = false;
        this.showTips(config.defaultText, true, timeStr);
      } else {
        _state.f = false;
        this.hideTips("");
      }
      this.updateTimeText(timeStr);
      this.updateThumbnails(_state.now);
      this.updateLinePos(offset, cwidth);
    }
  }, {
    key: "setTimeContent",
    value: function setTimeContent(str) {
      this.timeStr = str;
    }
  }, {
    key: "updateThumbnails",
    value: function updateThumbnails(time) {
      var player = this.player, videoPreview = this.videoPreview, config = this.config;
      var thumbnail = player.plugins.thumbnail;
      if (thumbnail && thumbnail.usable) {
        this.thumbnail && thumbnail.update(this.thumbnail, time, config.width, config.height);
        var rect = videoPreview && videoPreview.getBoundingClientRect();
        this.videothumbnail && thumbnail.update(this.videothumbnail, time, rect.width, rect.height);
      }
    }
  }, {
    key: "registerThumbnail",
    value: function registerThumbnail() {
      var thumbnailConfig = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (sniffer.device === "mobile") {
        return;
      }
      var player = this.player, config = this.config;
      var thumbnail = player.getPlugin("thumbnail");
      if (thumbnail) {
        thumbnail.setConfig(thumbnailConfig);
      }
      if (!thumbnail || !thumbnail.usable || !config.isShowThumbnail) {
        util.addClass(this.root, "short-line no-thumbnail");
        return;
      } else {
        util.removeClass(this.root, "short-line no-thumbnail");
      }
      if (config.mode === "short") {
        util.addClass(this.root, "short-line");
      }
      this._hasThumnail = true;
      var tRoot = this.find(".xg-spot-thumbnail");
      this.thumbnail = thumbnail.createThumbnail(tRoot, "progress-thumbnail");
      if (config.isShowCoverPreview) {
        this.videoPreview = util.createDom("xg-video-preview", "", {}, "xgvideo-preview");
        player.root.appendChild(this.videoPreview);
        this.videothumbnail = thumbnail.createThumbnail(this.videoPreview, "xgvideo-thumbnail");
      }
      this.updateThumbnails(0);
    }
  }, {
    key: "calcuPosition",
    value: function calcuPosition(time, duration) {
      var progress = this.player.plugins.progress;
      var player = this.player;
      var totalWidth = progress.root.getBoundingClientRect().width;
      var widthPerSeconds = player.duration / totalWidth * 6;
      if (time + duration > player.duration) {
        duration = player.duration - time;
      }
      time / player.duration * 100;
      duration / player.duration;
      return {
        left: time / player.duration * 100,
        width: duration / player.duration * 100,
        isMini: duration < widthPerSeconds
      };
    }
  }, {
    key: "showDot",
    value: function showDot(id) {
      var dot = this.findDot(id);
      if (dot) {
        var rect = this.root.getBoundingClientRect();
        var width = rect.width;
        var offset = dot.time / this.player.duration * width;
        this.updatePosition(offset, width, dot.time);
      }
    }
  }, {
    key: "focusDot",
    value: function focusDot(target, id) {
      if (!target) {
        return;
      }
      if (!id) {
        id = target.getAttribute("data-id");
      }
      util.addClass(target, "active");
      this._activeDotId = id;
    }
  }, {
    key: "blurDot",
    value: function blurDot(target) {
      if (!target) {
        var id = this._activeDotId;
        target = this.getDotDom(id);
      }
      if (!target) {
        return;
      }
      util.removeClass(target, "active");
      this._activeDotId = null;
    }
  }, {
    key: "showTips",
    value: function showTips(text, isDefault) {
      var timeStr = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
      util.addClass(this.root, "no-timepoint");
      if (!text) {
        return;
      }
      util.addClass(this.find(".xg-spot-content"), "show-text");
      if (isDefault && this.config.mode === "production") {
        util.addClass(this.root, "product");
        this.tipText.textContent = text;
      } else {
        util.removeClass(this.root, "product");
        this.tipText.textContent = this._hasThumnail ? text : "".concat(timeStr, " ").concat(text);
      }
    }
  }, {
    key: "hideTips",
    value: function hideTips() {
      util.removeClass(this.root, "no-timepoint");
      this.tipText.textContent = "";
      util.removeClass(this.find(".xg-spot-content"), "show-text");
      util.removeClass(this.root, "product");
    }
  }, {
    key: "hide",
    value: function hide() {
      util.addClass(this.root, "hide");
    }
  }, {
    key: "show",
    value: function show(value) {
      util.removeClass(this.root, "hide");
    }
  }, {
    key: "enable",
    value: function enable() {
      var config = this.config, playerConfig = this.playerConfig;
      this.config.disable = false;
      this.show();
      if (!this.thumbnail && config.isShowThumbnail) {
        this.registerThumbnail(playerConfig.thumbnail || {});
      }
    }
  }, {
    key: "disable",
    value: function disable() {
      this.config.disable = true;
      this.hide();
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      var _this5 = this;
      var progress = this.player.plugins.progress;
      progress && Object.keys(CALLBACK_MAP).map(function(key) {
        progress.removeCallBack(key, _this5[CALLBACK_MAP[key]]);
      });
      this.videothumbnail = null;
      this.thumbnail = null;
      this.videoPreview && this.player.root.removeChild(this.videoPreview);
      this.unbind(".xg-spot-info", "mousemove", this.onMousemove);
      this.unbind(".xg-spot-info", "mousedown", this.onMousedown);
      this.unbind(".xg-spot-info", "mouseup", this.onMouseup);
      this.unbind(".xg-spot-content", "mouseup", this.handlerPreviewClick);
    }
  }, {
    key: "render",
    value: function render() {
      if (sniffer.device === "mobile" || this.playerConfig.isMobileSimulateMode === "mobile") {
        return "";
      }
      return '<div class="xg-spot-info hide '.concat(this.config.mode === "short" ? "short-line" : "", '">\n      <div class="xg-spot-content">\n        <div class="xg-spot-thumbnail">\n          <span class="xg-spot-time"></span>\n        </div>\n        <div class="xg-spot-text"><span class="spot-inner-text"></span></div>\n      </div>\n      <div class="xgplayer-progress-point">00:00</div>\n      <div class="xg-spot-ext-text"></div>\n      <div class="xg-spot-line"></div>\n    </div>');
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "progresspreview";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        index: 1,
        miniWidth: 6,
        ispots: [],
        defaultText: "",
        isFocusDots: true,
        isHideThumbnailHover: true,
        isShowThumbnail: true,
        isShowCoverPreview: false,
        mode: "",
        disable: false,
        width: 160,
        height: 90
      };
    }
  }]);
  return ProgressPreview2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/common/thumbnail.js
var Thumbnail = function(_BasePlugin) {
  _inherits(Thumbnail2, _BasePlugin);
  var _super = _createSuper(Thumbnail2);
  function Thumbnail2(args) {
    var _this;
    _classCallCheck(this, Thumbnail2);
    _this = _super.call(this, args);
    _this.ratio = 1;
    _this.interval = null;
    _this._preloadMark = {};
    return _this;
  }
  _createClass(Thumbnail2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      if (this.usable) {
        this.initThumbnail();
      }
      this.on([DURATION_CHANGE], function() {
        var _this2$config = _this2.config, pic_num = _this2$config.pic_num, interval = _this2$config.interval;
        _this2.usable && (_this2.interval = interval > 0 ? interval : Math.round(_this2.player.duration * 1e3 / pic_num) / 1e3);
      });
    }
  }, {
    key: "setConfig",
    value: function setConfig(config) {
      var _this3 = this;
      if (!config) {
        return;
      }
      var keys = Object.keys(config);
      if (keys.length < 1) {
        return;
      }
      keys.forEach(function(key) {
        _this3.config[key] = config[key];
      });
      this.usable && this.initThumbnail();
    }
  }, {
    key: "usable",
    get: function get() {
      var _this$config = this.config, urls = _this$config.urls, pic_num = _this$config.pic_num;
      return urls && urls.length > 0 && pic_num > 0;
    }
  }, {
    key: "initThumbnail",
    value: function initThumbnail() {
      var _this$config2 = this.config, width = _this$config2.width, height = _this$config2.height, pic_num = _this$config2.pic_num, interval = _this$config2.interval;
      this.ratio = width / height * 100;
      this.interval = interval || Math.round(this.player.duration / pic_num);
      this._preloadMark = {};
    }
  }, {
    key: "getUrlByIndex",
    value: function getUrlByIndex(index) {
      return index >= 0 && index < this.config.urls.length ? this.config.urls[index] : "";
    }
  }, {
    key: "preload",
    value: function preload(index) {
      var _this4 = this;
      if (this._preloadMark[index]) {
        return;
      }
      var urls = this.config.urls;
      var len = urls.length;
      var arr = [];
      index > 0 && arr.push(index - 1);
      arr.push(index);
      index > 0 && index < len - 1 && arr.push(index + 1);
      arr.map(function(item) {
        if (!_this4._preloadMark[item] && item >= 0 && item < len) {
          _this4._preloadMark[item] = 1;
          util.preloadImg(urls[item], function() {
            _this4._preloadMark[item] = 2;
          });
        }
      });
    }
  }, {
    key: "getPosition",
    value: function getPosition(now2) {
      var containerWidth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      var containerHeight = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      var _this$config3 = this.config, pic_num = _this$config3.pic_num, row = _this$config3.row, col = _this$config3.col, width = _this$config3.width, height = _this$config3.height;
      this.interval = Math.round(this.player.duration / pic_num);
      var index = Math.ceil(now2 / this.interval);
      index = index > pic_num ? pic_num : index;
      var urlIndex = index < row * col ? 0 : Math.ceil(index / (row * col)) - 1;
      var indexInPage = index - urlIndex * (col * row);
      var rowIndex = indexInPage > 0 ? Math.ceil(indexInPage / col) - 1 : 0;
      var colIndex = indexInPage > 0 ? indexInPage - rowIndex * col - 1 : 0;
      var swidth = 0;
      var sHeight = 0;
      if (containerWidth && containerHeight) {
        var per = containerWidth / containerHeight;
        if (per < width / height) {
          sHeight = containerHeight;
          swidth = sHeight * (width / height);
        } else {
          swidth = containerWidth;
          sHeight = swidth / (width / height);
        }
      } else if (!containerHeight) {
        swidth = containerWidth || width;
        sHeight = swidth / (width / height);
      } else if (!containerWidth) {
        sHeight = containerHeight || height;
        swidth = sHeight * (width / height);
      }
      var url = this.getUrlByIndex(urlIndex);
      return {
        urlIndex,
        rowIndex,
        colIndex,
        url,
        height: sHeight,
        width: swidth,
        style: {
          backgroundImage: "url(".concat(url, ")"),
          backgroundSize: "".concat(swidth * col, "px auto"),
          backgroundPosition: "-".concat(colIndex * swidth, "px -").concat(rowIndex * sHeight, "px"),
          width: "".concat(swidth, "px"),
          height: "".concat(sHeight, "px")
        }
      };
    }
  }, {
    key: "update",
    value: function update(dom, now2) {
      var containerWidth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      var containerHeight = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
      var customStyle = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "";
      var _this$config4 = this.config, pic_num = _this$config4.pic_num, urls = _this$config4.urls;
      if (pic_num <= 0 || !urls || urls.length === 0) {
        return;
      }
      var pos = this.getPosition(now2, containerWidth, containerHeight);
      this.preload(pos.urlIndex);
      Object.keys(pos.style).map(function(key) {
        dom.style[key] = pos.style[key];
      });
      Object.keys(customStyle).map(function(key) {
        dom.style[key] = customStyle[key];
      });
    }
  }, {
    key: "changeConfig",
    value: function changeConfig() {
      var newConfig = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.setConfig(newConfig);
    }
  }, {
    key: "createThumbnail",
    value: function createThumbnail(root, className) {
      var dom = util.createDom("xg-thumbnail", "", {}, "thumbnail ".concat(className));
      root && root.appendChild(dom);
      return dom;
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "thumbnail";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        isShow: false,
        urls: [],
        pic_num: 0,
        col: 0,
        row: 0,
        height: 90,
        width: 160,
        scale: 1,
        className: "",
        hidePortrait: false
      };
    }
  }]);
  return Thumbnail2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/progress/miniProgress.js
function getBgColor(color) {
  return color ? "background:".concat(color, ";") : "";
}
var MiniProgress = function(_Plugin) {
  _inherits(MiniProgress2, _Plugin);
  var _super = _createSuper(MiniProgress2);
  function MiniProgress2() {
    var _this;
    _classCallCheck(this, MiniProgress2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "onTimeupdate", function() {
      var ended = _this.player.ended;
      var _assertThisInitialize = _assertThisInitialized(_this), offsetDuration = _assertThisInitialize.offsetDuration;
      var time = _this.currentTime;
      time = util.adjustTimeByDuration(time, offsetDuration, ended);
      _this.update({
        played: time
      }, offsetDuration);
    });
    return _this;
  }
  _createClass(MiniProgress2, [{
    key: "offsetDuration",
    get: function get() {
      return this.playerConfig.customDuration || this.player.offsetDuration || this.player.duration;
    }
  }, {
    key: "currentTime",
    get: function get() {
      var _this$player = this.player, offsetCurrentTime = _this$player.offsetCurrentTime, currentTime = _this$player.currentTime;
      return offsetCurrentTime >= 0 ? offsetCurrentTime : currentTime;
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      if (!this.root) {
        return;
      }
      this.on(TIME_UPDATE, this.onTimeupdate);
      this.on(EMPTIED, function() {
        _this2.reset();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.update({
        played: 0,
        cached: 0
      }, 0);
    }
  }, {
    key: "update",
    value: function update() {
      var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        cached: 0,
        played: 0
      };
      var duration = arguments.length > 1 ? arguments[1] : void 0;
      if (!duration || !this.root) {
        return;
      }
      if (data.cached) {
        this.find("xg-mini-progress-cache").style.width = "".concat(data.cached / duration * 100, "%");
      }
      if (data.played) {
        this.find("xg-mini-progress-played").style.width = "".concat(data.played / duration * 100, "%");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$playerConfig = this.playerConfig, commonStyle = _this$playerConfig.commonStyle, miniprogress = _this$playerConfig.miniprogress;
      if (!miniprogress) {
        return;
      }
      var _this$config = this.config, mode = _this$config.mode, height = _this$config.height;
      var _style = {
        cached: getBgColor(commonStyle.cachedColor),
        played: getBgColor(commonStyle.playedColor),
        progress: getBgColor(commonStyle.progressColor),
        height: height > 0 && height !== 2 ? "height: ".concat(height, "px;") : ""
      };
      var stateClass = mode === "show" ? "xg-mini-progress-show" : "";
      return '<xg-mini-progress class="xg-mini-progress '.concat(stateClass, '" style="').concat(_style.progress, " ").concat(_style.height, '">\n    <xg-mini-progress-cache class="xg-mini-progress-cache" style="').concat(_style.cached, '"></xg-mini-progress-cache>\n    <xg-mini-progress-played class="xg-mini-progress-played" style="').concat(_style.played, '"></xg-mini-progress-played>\n    </xg-mini-progress>');
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "MiniProgress";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        mode: "auto",
        height: 2
      };
    }
  }]);
  return MiniProgress2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/dynamicBg/index.js
var MODES = {
  REAL_TIME: "realtime",
  FIRST_FRAME: "firstframe",
  FRAME_RATE: "framerate",
  POSTER: "poster"
};
function nowTime() {
  try {
    return parseInt(window.performance.now(), 10);
  } catch (e) {
    return (/* @__PURE__ */ new Date()).getTime();
  }
}
function checkIsSupportCanvas() {
  try {
    var ctx = document.createElement("canvas").getContext;
    if (ctx) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}
var isSupportCanvas = null;
var DynamicBg = function(_Plugin) {
  _inherits(DynamicBg2, _Plugin);
  var _super = _createSuper(DynamicBg2);
  function DynamicBg2() {
    var _this;
    _classCallCheck(this, DynamicBg2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "onLoadedData", function(e) {
      if (!_this.player) {
        return;
      }
      _this._frameCount = _this.config.startFrameCount;
      _this.stop();
      _this.renderOnTimeupdate(e);
      _this.off(TIME_UPDATE, _this.renderOnTimeupdate);
      _this.on(TIME_UPDATE, _this.renderOnTimeupdate);
    });
    _defineProperty(_assertThisInitialized(_this), "onVisibilitychange", function(e) {
      if (document.visibilityState === "visible") {
        _this._checkIfCanStart() && _this.start();
      } else if (document.visibilityState === "hidden") {
        _this.stop();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "renderOnTimeupdate", function(e) {
      if (_this._frameCount > 0) {
        _this.renderOnce();
        _this._frameCount--;
      } else {
        _this._isLoaded = true;
        _this.off(TIME_UPDATE, _this.renderOnTimeupdate);
        var startInterval = _this.config.startInterval;
        !_this.player.paused && _this._checkIfCanStart() && _this.start(0, startInterval);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "start", function(time, interval) {
      var video = _this.player.video;
      var _now = nowTime();
      var _sVideo = _this.checkVideoIsSupport(video);
      if (!_sVideo || !_this.canvasCtx) {
        return;
      }
      if (!interval) {
        interval = _this.interval;
      }
      _this.stop();
      if (video.videoWidth && video.videoHeight) {
        _this.videoPI = video.videoHeight > 0 ? parseInt(video.videoWidth / video.videoHeight * 100, 10) : 0;
        if (_this.config.mode === MODES.REAL_TIME) {
          video && video.videoWidth && _this.update(_sVideo, _this.videoPI);
          _this.preTime = _now;
        } else if (_now - _this.preTime >= interval) {
          video && video.videoWidth && _this.update(_sVideo, _this.videoPI);
          _this.preTime = _now;
        }
      }
      _this.frameId = _this._loopType === "timer" ? util.setTimeout(_assertThisInitialized(_this), _this.start, interval) : util.requestAnimationFrame(_this.start);
    });
    _defineProperty(_assertThisInitialized(_this), "stop", function() {
      if (_this.frameId) {
        _this._loopType === "timer" ? util.clearTimeout(_assertThisInitialized(_this), _this.frameId) : util.cancelAnimationFrame(_this.frameId);
        _this.frameId = null;
      }
    });
    return _this;
  }
  _createClass(DynamicBg2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      if (this.playerConfig.dynamicBg === true) {
        this.config.disable = false;
      }
      if (!DynamicBg2.isSupport) {
        this.config.disable = true;
      }
      var _this$config = this.config, disable = _this$config.disable, mode = _this$config.mode, frameRate = _this$config.frameRate;
      if (disable) {
        return;
      }
      this._pos = {
        width: 0,
        height: 0,
        rwidth: 0,
        rheight: 0,
        x: 0,
        y: 0,
        pi: 0
      };
      this.isStart = false;
      this._isLoaded = false;
      this.videoPI = 0;
      this.preTime = 0;
      this.interval = parseInt(1e3 / frameRate, 10);
      this.canvas = null;
      this.canvasCtx = null;
      this._frameCount = 0;
      this._loopType = this.config.mode !== MODES.REAL_TIME && this.interval >= 1e3 ? "timer" : "animation";
      this.once(COMPLETE, function() {
        if (!_this2.player) {
          return;
        }
        _this2.init();
        _this2.renderByPoster();
        if (!_this2.player.paused) {
          _this2.start();
        }
      });
      if (mode === MODES.POSTER) {
        return;
      }
      if (mode !== MODES.FIRST_FRAME) {
        this.on(EMPTIED, function() {
          _this2.stop();
        });
        this.on(PLAY, function() {
          var startInterval = _this2.config.startInterval;
          _this2._checkIfCanStart() && _this2.start(0, startInterval);
        });
        this.on(PAUSE, function() {
          _this2.stop();
        });
      }
      this.on(LOADED_DATA, this.onLoadedData);
      this.on(LOAD_START, function() {
        _this2._isLoaded = false;
        _this2.stop();
      });
      document.addEventListener("visibilitychange", this.onVisibilitychange);
    }
  }, {
    key: "setConfig",
    value: function setConfig(config) {
      var _this3 = this;
      Object.keys(config).forEach(function(key) {
        if (key === "root" && config[key] !== _this3.config[key]) {
          _this3.reRender(config[key]);
        } else if (key === "frameRate") {
          _this3.interval = parseInt(1e3 / config[key], 10);
        } else if (key === "disable" && config[key]) {
          _this3.stop();
        }
        _this3.config[key] = config[key];
      });
    }
  }, {
    key: "init",
    value: function init3(_root) {
      var player = this.player, config = this.config;
      this.canvasFilter = DynamicBg2.supportCanvasFilter();
      try {
        var parent = _root || config.root;
        if (!parent) {
          parent = !config.isInnerRender ? player.root : player.innerContainer || player.root;
        }
        parent.insertAdjacentHTML("afterbegin", '<div class="xgplayer-dynamic-bg" data-index="'.concat(config.index, '"><canvas>\n        </canvas><xgmask></xgmask></div>'));
        this.root = parent.children[0];
        this.canvas = this.find("canvas");
        if (!this.canvasFilter) {
          this.canvas.style.filter = config.filter;
          this.canvas.style.webkitFilter = config.filter;
        }
        this.mask = this.find("xgmask");
        config.addMask && (this.mask.style.background = config.maskBg);
        this.canvasCtx = this.canvas.getContext("2d");
      } catch (e) {
        XG_DEBUG.logError("plugin:DynamicBg", e);
      }
    }
  }, {
    key: "reRender",
    value: function reRender2(root) {
      var disable = this.config.disable;
      if (!disable && !this.root) {
        return;
      }
      this.stop();
      var _p = this.root ? this.root.parentElement : null;
      if (_p !== root) {
        _p.removeChild(this.root);
      }
      if (!root) {
        this.root = null;
        return;
      }
      this.init(root);
      this.renderOnce();
      var startInterval = this.config.startInterval;
      this._checkIfCanStart() && this.start(0, startInterval);
    }
  }, {
    key: "checkVideoIsSupport",
    value: function checkVideoIsSupport(video) {
      if (!video) {
        return null;
      }
      var _tVideo = video && video instanceof window.HTMLVideoElement ? video : video.canvas ? video.canvas : video.flyVideo ? video.flyVideo : null;
      if (_tVideo && !(sniffer.browser === "safari" && util.isMSE(_tVideo))) {
        return _tVideo;
      }
      var _tagName = _tVideo ? _tVideo.tagName.toLowerCase() : "";
      if (_tagName === "canvas" || _tagName === "img") {
        return _tVideo;
      }
      return null;
    }
  }, {
    key: "renderByPoster",
    value: function renderByPoster() {
      var poster = this.playerConfig.poster;
      if (poster) {
        var url = util.typeOf(poster) === "String" ? poster : util.typeOf(poster.poster) === "String" ? poster.poster : null;
        this.updateImg(url);
      }
    }
  }, {
    key: "_checkIfCanStart",
    value: function _checkIfCanStart() {
      var mode = this.config.mode;
      return this._isLoaded && !this.player.paused && mode !== MODES.FIRST_FRAME && mode !== MODES.POSTER;
    }
  }, {
    key: "renderOnce",
    value: function renderOnce() {
      var video = this.player.video;
      if (!video.videoWidth || !video.videoHeight) {
        return;
      }
      this.videoPI = parseInt(video.videoWidth / video.videoHeight * 100, 10);
      var _sVideo = this.checkVideoIsSupport(video);
      _sVideo && this.update(_sVideo, this.videoPI);
    }
  }, {
    key: "updateImg",
    value: function updateImg(url) {
      var _this4 = this;
      if (!url) {
        return;
      }
      var _this$canvas$getBound = this.canvas.getBoundingClientRect(), width = _this$canvas$getBound.width, height = _this$canvas$getBound.height;
      var image = new window.Image();
      image.onload = function() {
        if (!_this4.canvas || _this4.frameId || _this4.isStart) {
          return;
        }
        _this4.canvas.height = height;
        _this4.canvas.width = width;
        var pi = parseInt(width / height * 100, 10);
        _this4.update(image, pi);
        image = null;
      };
      image.src = url;
    }
  }, {
    key: "update",
    value: function update(video, sourcePI) {
      if (!this.canvas || !this.canvasCtx || !sourcePI) {
        return;
      }
      try {
        var _pos = this._pos, config = this.config;
        var _this$canvas$getBound2 = this.canvas.getBoundingClientRect(), width = _this$canvas$getBound2.width, height = _this$canvas$getBound2.height;
        if (width !== _pos.width || height !== _pos.height || _pos.pi !== sourcePI) {
          var pi = parseInt(width / height * 100, 10);
          _pos.pi = sourcePI;
          _pos.width !== width && (_pos.width = this.canvas.width = width);
          _pos.height !== height && (_pos.height = this.canvas.height = height);
          var rheight = height;
          var rwidth = width;
          if (pi < sourcePI) {
            rwidth = parseInt(height * sourcePI / 100, 10);
          } else if (pi > sourcePI) {
            rheight = parseInt(width * 100 / sourcePI, 10);
          }
          _pos.rwidth = rwidth * config.multiple;
          _pos.rheight = rheight * config.multiple;
          _pos.x = (width - _pos.rwidth) / 2;
          _pos.y = (height - _pos.rheight) / 2;
        }
        this.canvasFilter && (this.canvasCtx.filter = config.filter);
        this.canvasCtx.drawImage(video, _pos.x, _pos.y, _pos.rwidth, _pos.rheight);
      } catch (e) {
        XG_DEBUG.logError("plugin:DynamicBg", e);
      }
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      this.stop();
      document.removeEventListener("visibilitychange", this.onVisibilitychange);
      this.canvasCtx = null;
      this.canvas = null;
    }
  }, {
    key: "render",
    value: function render() {
      return "";
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "dynamicBg";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        isInnerRender: false,
        disable: true,
        index: -1,
        mode: "framerate",
        frameRate: 10,
        filter: "blur(50px)",
        startFrameCount: 2,
        startInterval: 0,
        addMask: true,
        multiple: 1.2,
        maskBg: "rgba(0,0,0,0.7)"
      };
    }
  }, {
    key: "isSupport",
    get: function get() {
      if (typeof isSupportCanvas === "boolean") {
        return isSupportCanvas;
      }
      isSupportCanvas = checkIsSupportCanvas();
      return isSupportCanvas;
    }
  }, {
    key: "supportCanvasFilter",
    value: function supportCanvasFilter() {
      return !(sniffer.browser === "safari" || sniffer.browser === "firefox");
    }
  }]);
  return DynamicBg2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/lang/zh-cn.js
var ZH = {
  LANG: "zh-cn",
  TEXT: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "视频下载错误"
      },
      mse: {
        code: 2,
        msg: "流追加错误"
      },
      parse: {
        code: 3,
        msg: "解析错误"
      },
      format: {
        code: 4,
        msg: "格式错误"
      },
      decoder: {
        code: 5,
        msg: "解码错误"
      },
      runtime: {
        code: 6,
        msg: "语法错误"
      },
      timeout: {
        code: 7,
        msg: "播放超时"
      },
      other: {
        code: 8,
        msg: "其他错误"
      }
    },
    HAVE_NOTHING: "没有关于音频/视频是否就绪的信息",
    HAVE_METADATA: "音频/视频的元数据已就绪",
    HAVE_CURRENT_DATA: "关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒",
    HAVE_FUTURE_DATA: "当前及至少下一帧的数据是可用的",
    HAVE_ENOUGH_DATA: "可用数据足以开始播放",
    NETWORK_EMPTY: "音频/视频尚未初始化",
    NETWORK_IDLE: "音频/视频是活动的且已选取资源，但并未使用网络",
    NETWORK_LOADING: "浏览器正在下载数据",
    NETWORK_NO_SOURCE: "未找到音频/视频来源",
    MEDIA_ERR_ABORTED: "取回过程被用户中止",
    MEDIA_ERR_NETWORK: "网络错误",
    MEDIA_ERR_DECODE: "解码错误",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "不支持的音频/视频格式",
    REPLAY: "重播",
    ERROR: "网络连接似乎出现了问题",
    PLAY_TIPS: "播放",
    PAUSE_TIPS: "暂停",
    PLAYNEXT_TIPS: "下一集",
    DOWNLOAD_TIPS: "下载",
    ROTATE_TIPS: "旋转",
    RELOAD_TIPS: "重新载入",
    FULLSCREEN_TIPS: "进入全屏",
    EXITFULLSCREEN_TIPS: "退出全屏",
    CSSFULLSCREEN_TIPS: "进入样式全屏",
    EXITCSSFULLSCREEN_TIPS: "退出样式全屏",
    TEXTTRACK: "字幕",
    PIP: "画中画",
    SCREENSHOT: "截图",
    LIVE: "正在直播",
    OFF: "关闭",
    OPEN: "开启",
    MINI_DRAG: "点击按住可拖动视频",
    MINISCREEN: "小屏幕",
    REFRESH_TIPS: "请试试",
    REFRESH: "刷新",
    FORWARD: "快进中",
    LIVE_TIP: "直播"
  }
};

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/stats/index.js
var import_delegate7 = __toESM(require_delegate());
var INFO = "info";
var STATS_EVENTS2 = STATS_EVENTS;
var Stats = function(_BasePlugin) {
  _inherits(Stats2, _BasePlugin);
  var _super = _createSuper(Stats2);
  function Stats2() {
    var _this;
    _classCallCheck(this, Stats2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "_recordUserActions", function(actionData) {
      var time = _this._getTime();
      var payload = Object.assign({}, actionData, {
        msg: actionData.msg || actionData.action
      });
      _this._stats[INFO].push(_objectSpread2(_objectSpread2({
        type: "userAction"
      }, time), {}, {
        payload
      }));
    });
    _defineProperty(_assertThisInitialized(_this), "_onReset", function() {
      _this.reset();
    });
    _defineProperty(_assertThisInitialized(_this), "_recordInfo", function(data) {
      _this.info(data);
    });
    _defineProperty(_assertThisInitialized(_this), "_downloadStats", function() {
      var stats = _this.getStats();
      var blob = new Blob([JSON.stringify(stats)], {
        type: "application/json"
      });
      var downloadUrl = window.URL.createObjectURL(blob);
      var link = document.createElement("a");
      link.style.display = "none";
      link.href = downloadUrl;
      link.download = "player.txt";
      link.disabled = false;
      link.click();
    });
    return _this;
  }
  _createClass(Stats2, [{
    key: "_getTime",
    value: function _getTime() {
      return {
        timestamp: Date.now(),
        timeFormat: (/* @__PURE__ */ new Date()).toISOString()
      };
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      this.reset();
      this.on(USER_ACTION, this._recordUserActions);
      this.on(STATS_EVENTS2.STATS_INFO, this._recordInfo);
      this.on(STATS_EVENTS2.STATS_DOWNLOAD, this._downloadStats);
      this.on(STATS_EVENTS2.STATS_RESET, this._onReset);
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      this.offAll();
    }
  }, {
    key: "downloadStats",
    value: function downloadStats() {
      this._downloadStats();
    }
  }, {
    key: "info",
    value: function info(data) {
      if (data.profile) {
        this._infoProfile(data);
      } else {
        this._info(data);
      }
    }
  }, {
    key: "_info",
    value: function _info(data) {
      var time = this._getTime();
      this._stats[INFO].push(_objectSpread2(_objectSpread2({}, time), {}, {
        payload: data
      }));
    }
  }, {
    key: "_infoProfile",
    value: function _infoProfile(data) {
      if (data && data.startMs) {
        var endMs = Date.now();
        var dur = endMs - data.startMs;
        var profile = _objectSpread2({
          cat: "function",
          dur,
          name: data.name || data.msg,
          ph: "X",
          pid: 0,
          tid: 0,
          ts: data.startMs,
          profile: true
        }, data);
        this._info(profile);
      } else {
        console.warn("infoProfile need object data, include startMs");
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this$_stats;
      this._stats = (_this$_stats = {}, _defineProperty(_this$_stats, INFO, []), _defineProperty(_this$_stats, "media", {}), _this$_stats);
    }
  }, {
    key: "getStats",
    value: function getStats() {
      var player = this.player;
      var mediaElem = player.media;
      var buffered = [];
      for (var i = 0; i < mediaElem.buffered.length; i++) {
        buffered.push({
          start: mediaElem.buffered.start(i),
          end: mediaElem.buffered.end(i)
        });
      }
      var mediaInfo = {
        currentTime: mediaElem.currentTime,
        readyState: mediaElem.readyState,
        buffered,
        paused: mediaElem.paused,
        ended: mediaElem.ended
      };
      this._stats.media = mediaInfo;
      return {
        raw: this._stats,
        timestat: this._getTimeStats(),
        profile: this._getProfile()
      };
    }
  }, {
    key: "_getTimeStats",
    value: function _getTimeStats() {
      var allStat = this._stats[INFO];
      var msgs = allStat.map(function(stat) {
        var data = stat.payload.data;
        var msg = "";
        try {
          if (data instanceof Error) {
            msg = data.msg;
          } else if (data !== void 0) {
            msg = JSON.stringify(data);
          }
        } catch (error) {
          console.log("err", error);
        }
        return "[".concat(stat.timeFormat, "] : ").concat(stat.payload.msg, " ").concat(msg, " ");
      });
      return msgs;
    }
  }, {
    key: "_getProfile",
    value: function _getProfile() {
      var profile = {
        traceEvents: []
      };
      var allStat = this._stats[INFO];
      allStat.forEach(function(stat) {
        if (stat.payload.profile) {
          profile.traceEvents.push(stat.payload);
        }
      });
      return profile;
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "stats";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {};
    }
  }]);
  return Stats2;
}(BasePlugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/gapJump/index.js
var GapJump = function(_BasePlugin) {
  _inherits(GapJump2, _BasePlugin);
  var _super = _createSuper(GapJump2);
  function GapJump2() {
    var _this;
    _classCallCheck(this, GapJump2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "onGapJump", function() {
      var _assertThisInitialize = _assertThisInitialized(_this), player = _assertThisInitialize.player, config = _assertThisInitialize.config;
      if (player.media.readyState === HTMLMediaElement.HAVE_NOTHING) {
        return;
      }
      if (player.media.seeking) {
        if (!_this.seekingEventReceived) {
          return;
        }
      } else {
        _this.seekingEventReceived = false;
      }
      if (player.media.paused && player.media.currentTime !== 0 && _this.hasPlayed) {
        return;
      }
      var buffered = player.media.buffered;
      var smallGapLimit = config.smallGapLimit || 0.5;
      var gapDetectionThreshold = config.gapDetectionThreshold || 0.3;
      var currentTime = player.media.currentTime;
      var idx = _this._getIndex(buffered, currentTime, gapDetectionThreshold);
      if (idx === null || idx === 0) {
        return;
      }
      console.log("GapJump  bufferRange ", buffered.start(idx), buffered.end(idx));
      var jumpTo = buffered.start(idx) + 0.1;
      var seekEnd = player.media.duration;
      if (jumpTo > seekEnd) {
        return;
      }
      var jumpSize = jumpTo - currentTime;
      var isGapSmall = jumpSize <= smallGapLimit;
      if (jumpSize < GapJump2.BROWSER_GAP_TOLERANCE) {
        return;
      }
      if (isGapSmall) {
        if (config.useGapJump !== false) {
          player.media.currentTime = _this.isSafari ? jumpTo + 0.1 : jumpTo;
        }
        _this.player && _this.player.emit("detectGap");
        console.log("gapJump gapIndex", idx, " isGapSamll:", isGapSmall, " currentTime:", player.media.currentTime, " jumpSize:", currentTime - player.media.currentTime);
        if (jumpTo !== 0.08) {
          player && player.emit("log", {
            type: "oneevent",
            end_type: "gap",
            vid: player.config.vid,
            ext: {
              video_postion: Math.floor(jumpTo * 1e3)
            }
          });
        }
      }
    });
    return _this;
  }
  _createClass(GapJump2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      var useGapJump = this.config.useGapJump;
      if (useGapJump === false) {
        return;
      }
      this.hasPlayed = false;
      this.seekingEventReceived = false;
      this.isSafari = /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
      this.on(WAITING, this.onGapJump);
      this.on(PLAY, function() {
        _this2.hasPlayed = true;
      });
      this.on(SEEKING, function() {
        _this2.seekingEventReceived = true;
      });
    }
  }, {
    key: "_getIndex",
    value: function _getIndex(buffered, time, threshold) {
      if (!buffered || !buffered.length) {
        return null;
      }
      if (buffered.length === 1 && buffered.end(0) - buffered.start(0) < 1e-6) {
        return null;
      }
      var bufferedInfo = this._getBuffered(buffered);
      var idx = null;
      for (var i = 0; i < bufferedInfo.length; i++) {
        var item = bufferedInfo[i];
        if (item.start > time && (i === 0 || bufferedInfo[i - 1].end - time <= threshold)) {
          idx = i;
          break;
        }
      }
      return idx;
    }
  }, {
    key: "_getBuffered",
    value: function _getBuffered(b) {
      if (!b) {
        return [];
      }
      var ret = [];
      for (var i = 0; i < b.length; i++) {
        ret.push({
          start: b.start(i),
          end: b.end(i)
        });
      }
      return ret;
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "gapJump";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        useGapJump: false,
        smallGapLimit: 0.5,
        gapDetectionThreshold: 0.3
      };
    }
  }]);
  return GapJump2;
}(Plugin);
GapJump.BROWSER_GAP_TOLERANCE = 1e-3;

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/waitingTimeoutJump/index.js
var WaitingTimeoutJump = function(_BasePlugin) {
  _inherits(WaitingTimeoutJump2, _BasePlugin);
  var _super = _createSuper(WaitingTimeoutJump2);
  function WaitingTimeoutJump2() {
    var _this;
    _classCallCheck(this, WaitingTimeoutJump2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "onWaiting", function() {
      var _assertThisInitialize = _assertThisInitialized(_this), config = _assertThisInitialize.config;
      if (_this.jumpCnt > config.jumpCntMax || _this.timer || config.useWaitingTimeoutJump === false) {
        return;
      }
      _this.timer = setTimeout(_this.onJump, config.waitingTime * 1e3);
    });
    _defineProperty(_assertThisInitialized(_this), "onJump", function() {
      var _assertThisInitialize2 = _assertThisInitialized(_this), player = _assertThisInitialize2.player, config = _assertThisInitialize2.config;
      clearTimeout(_this.timer);
      _this.timer = null;
      if (_this.jumpCnt > config.jumpCntMax || config.useWaitingTimeoutJump === false) {
        return;
      }
      if (player.media.paused && player.media.currentTime !== 0 && _this.hasPlayed) {
        return;
      }
      _this.jumpSize = config.jumpSize * (_this.jumpCnt + 1);
      if (_this.jumpCnt === config.jumpSize && _this.jumpSize < 6) {
        _this.jumpSize = 6;
      }
      var jumpTo = player.currentTime + _this.jumpSize;
      var seekEnd = player.media.duration;
      if (jumpTo > seekEnd) {
        return;
      }
      _this.jumpCnt++;
      player.currentTime = jumpTo;
    });
    return _this;
  }
  _createClass(WaitingTimeoutJump2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      var _this$config = this.config, useWaitingTimeoutJump = _this$config.useWaitingTimeoutJump, jumpSize = _this$config.jumpSize;
      if (useWaitingTimeoutJump === false) {
        return;
      }
      this.hasPlayed = false;
      this.jumpCnt = 0;
      this.timer = null;
      this.jumpSize = jumpSize;
      this.on(WAITING, this.onWaiting);
      this.on([PLAYING, CANPLAY], function() {
        clearTimeout(_this2.timer);
        _this2.timer = null;
        _this2.jumpSize = _this2.config.jumpSize;
      });
      this.on(PLAY, function() {
        _this2.hasPlayed = true;
      });
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "waitingTimeoutJump";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        useWaitingTimeoutJump: false,
        waitingTime: 15,
        jumpSize: 2,
        jumpCntMax: 4
      };
    }
  }]);
  return WaitingTimeoutJump2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/testspeed/index.js
var DEFAULT_SPEED_TYPE = "cdn";
var SPEED_TYPE = ["cdn"];
var TestSpeed = function(_BasePlugin) {
  _inherits(TestSpeed2, _BasePlugin);
  var _super = _createSuper(TestSpeed2);
  function TestSpeed2() {
    var _this;
    _classCallCheck(this, TestSpeed2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "getSpeed", function() {
      var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_SPEED_TYPE;
      if (!_this.speedListCache || !_this.speedListCache[type])
        return 0;
      if (_this.speedListCache[type].length <= 0)
        return 0;
      var total = 0;
      _this.speedListCache[type].map(function(item) {
        total += item;
      });
      return Math.floor(total / _this.speedListCache[type].length);
    });
    _defineProperty(_assertThisInitialized(_this), "startTimer", function() {
      if (util.isMSE(_this.player.video)) {
        return;
      }
      _this.initSpeedList();
      _this.cnt = 0;
      _this.timer = setTimeout(_this.testSpeed, _this.config.testTimeStep);
    });
    _defineProperty(_assertThisInitialized(_this), "initSpeedList", function() {
      _this.speedListCache = {};
      SPEED_TYPE.forEach(function(type) {
        _this.speedListCache[type] = [];
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_onRealSpeedChange", function(data) {
      data.speed && _this.appendList(data.speed, data.type || DEFAULT_SPEED_TYPE);
    });
    _defineProperty(_assertThisInitialized(_this), "testSpeed", function() {
      clearTimeout(_this.timer);
      _this.timer = null;
      if (!_this.player || !_this.config.openSpeed)
        return;
      var _this$config = _this.config, url = _this$config.url, loadSize = _this$config.loadSize, testCnt = _this$config.testCnt, testTimeStep = _this$config.testTimeStep;
      var testSpeedUrl = url + (url.indexOf("?") < 0 ? "?testst=" : "&testst=") + Date.now();
      if (_this.cnt >= testCnt) {
        return;
      }
      _this.cnt++;
      try {
        var start = (/* @__PURE__ */ new Date()).getTime();
        var end = null;
        var xhr = new XMLHttpRequest();
        _this.xhr = xhr;
        xhr.open("GET", testSpeedUrl);
        var headers = {};
        var random = Math.floor(Math.random() * 10);
        headers.Range = "bytes=" + random + "-" + (loadSize + random);
        if (headers) {
          Object.keys(headers).forEach(function(k) {
            xhr.setRequestHeader(k, headers[k]);
          });
        }
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            _this.xhr = null;
            end = (/* @__PURE__ */ new Date()).getTime();
            var size = xhr.getResponseHeader("Content-Length") / 1024 * 8;
            var speed = Math.round(size * 1e3 / (end - start));
            _this.appendList(speed);
            _this.timer = setTimeout(_this.testSpeed, testTimeStep);
          }
        };
        xhr.send();
      } catch (e) {
        console.error(e);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "appendList", function(speed) {
      var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_SPEED_TYPE;
      if (!_this.speedListCache || !_this.speedListCache[type])
        return;
      var saveSpeedMax = _this.config.saveSpeedMax;
      if (_this.speedListCache[type].length >= saveSpeedMax) {
        _this.speedListCache[type].shift();
      }
      _this.speedListCache[type].push(speed);
      var _assertThisInitialize = _assertThisInitialized(_this), player = _assertThisInitialize.player;
      if (player) {
        type === DEFAULT_SPEED_TYPE ? player.realTimeSpeed = speed : player[_this.getSpeedName("realTime", type)] = speed;
      }
      _this.updateSpeed(type);
    });
    _defineProperty(_assertThisInitialized(_this), "updateSpeed", function() {
      var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_SPEED_TYPE;
      var speed = _this.getSpeed(type);
      var _assertThisInitialize2 = _assertThisInitialized(_this), player = _assertThisInitialize2.player;
      if (player) {
        if (type === DEFAULT_SPEED_TYPE) {
          if (!player.avgSpeed || speed !== player.avgSpeed) {
            player.avgSpeed = speed;
            player.emit(DOWNLOAD_SPEED_CHANGE, {
              speed,
              realTimeSpeed: player.realTimeSpeed
            });
          }
        } else {
          var speedName = _this.getSpeedName("avg", type);
          if (!player[speedName] || speed !== player[speedName]) {
            player[speedName] = speed;
            player.emit(DOWNLOAD_SPEED_CHANGE, {
              speed,
              realTimeSpeed: player.realTimeSpeed
            });
          }
        }
      }
    });
    return _this;
  }
  _createClass(TestSpeed2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var _this$config2 = this.config, openSpeed = _this$config2.openSpeed, addSpeedTypeList = _this$config2.addSpeedTypeList;
      if ((addSpeedTypeList === null || addSpeedTypeList === void 0 ? void 0 : addSpeedTypeList.length) > 0) {
        SPEED_TYPE.push.apply(SPEED_TYPE, _toConsumableArray(addSpeedTypeList));
      }
      this.initSpeedList();
      this.on("real_time_speed", this._onRealSpeedChange);
      this.timer = null;
      this.cnt = 0;
      this.xhr = null;
      if (!openSpeed) {
        return;
      }
      this.on([LOADED_DATA, REPLAY], this.startTimer);
    }
  }, {
    key: "getSpeedName",
    value: function getSpeedName(namePrefix, type) {
      return namePrefix + "Speed" + type.toUpperCase();
    }
  }, {
    key: "openSpeed",
    get: function get() {
      return this.config.openSpeed;
    },
    set: function set(value) {
      this.config.openSpeed = value;
      if (!value && this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
        return;
      }
      if (this.config.openSpeed) {
        if (this.timer)
          return;
        this.timer = setTimeout(this.testSpeed, this.config.testTimeStep);
      }
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      var _this2 = this;
      this.off("real_time_speed", this._onRealSpeedChange);
      this.off([LOADED_DATA, REPLAY], this.startTimer);
      SPEED_TYPE.forEach(function(type) {
        _this2.speedListCache && _this2.speedListCache[type] && (_this2.speedListCache[type] = []);
      });
      this.speedListCache && (this.speedListCache = {});
      clearTimeout(this.timer);
      this.timer = null;
      if (this.xhr && this.xhr.readyState !== 4) {
        this.xhr.cancel && this.xhr.cancel();
        this.xhr = null;
      }
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "testspeed";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        openSpeed: false,
        testCnt: 3,
        loadSize: 200 * 1024,
        testTimeStep: 3e3,
        url: "",
        saveSpeedMax: 5,
        addSpeedTypeList: []
      };
    }
  }]);
  return TestSpeed2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/fpsDetect/index.js
var FpsDetect = function(_BasePlugin) {
  _inherits(FpsDetect2, _BasePlugin);
  var _super = _createSuper(FpsDetect2);
  function FpsDetect2() {
    _classCallCheck(this, FpsDetect2);
    return _super.apply(this, arguments);
  }
  _createClass(FpsDetect2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var _this = this;
      var player = this.player, config = this.config;
      var media = player.media || player.video;
      this.timer = null;
      this._lastDecodedFrames = 0;
      this._currentStuckCount = 0;
      this._lastCheckPoint = null;
      this._payload = [];
      if (config.disabled)
        return;
      var getVideoPlaybackQuality = media.getVideoPlaybackQuality;
      if (!getVideoPlaybackQuality)
        return;
      this.on(PLAY, function() {
        _this._startTick();
      });
      this.on(PAUSE, function() {
        _this._stopTick();
      });
      this.on(ENDED, function() {
        _this._stopTick();
      });
      this.on(EMPTIED, function() {
        _this._stopTick();
      });
    }
  }, {
    key: "_startTick",
    value: function _startTick() {
      var _this2 = this;
      this._stopTick();
      this._timer = setTimeout(function() {
        _this2._checkDecodeFPS();
        _this2._startTick();
      }, this.config.tick);
    }
  }, {
    key: "_stopTick",
    value: function _stopTick() {
      clearTimeout(this._timer);
      this._timer = null;
    }
  }, {
    key: "_checkBuffer",
    value: function _checkBuffer(curTime, buffered) {
      var enoughBuffer = false;
      var buffers = [];
      for (var i = 0; i < buffered.length; i++) {
        var start = buffered.start(i);
        var end = buffered.end(i);
        buffers.push({
          start,
          end
        });
        if (start <= curTime && curTime <= end - 1) {
          enoughBuffer = true;
          break;
        }
      }
      return {
        enoughBuffer,
        buffers
      };
    }
  }, {
    key: "_checkStuck",
    value: function _checkStuck(curDecodedFrames, totalVideoFrames, droppedVideoFrames, checkInterval) {
      var media = this.player.media || this.player.video;
      var hidden = document.hidden;
      var paused = media.paused, readyState = media.readyState, currentTime = media.currentTime, buffered = media.buffered;
      if (hidden || paused || readyState < 4) {
        return;
      }
      var _this$_checkBuffer = this._checkBuffer(currentTime, buffered), enoughBuffer = _this$_checkBuffer.enoughBuffer, buffers = _this$_checkBuffer.buffers;
      if (!enoughBuffer) {
        return;
      }
      if (curDecodedFrames <= this.config.reportFrame) {
        this._currentStuckCount++;
        this._payload.push({
          currentTime,
          buffers,
          curDecodedFrames,
          totalVideoFrames,
          droppedVideoFrames,
          checkInterval
        });
        if (this._currentStuckCount >= this.config.stuckCount) {
          this.emit(FPS_STUCK, this._payload);
          this._reset();
        }
      } else {
        this._reset();
      }
    }
  }, {
    key: "_reset",
    value: function _reset() {
      this._payload = [];
      this._currentStuckCount = 0;
    }
  }, {
    key: "_checkDecodeFPS",
    value: function _checkDecodeFPS() {
      var media = this.player.media || this.player.video;
      if (!media) {
        return;
      }
      var _media$getVideoPlayba = media.getVideoPlaybackQuality(), totalVideoFrames = _media$getVideoPlayba.totalVideoFrames, droppedVideoFrames = _media$getVideoPlayba.droppedVideoFrames;
      var currTime = performance.now();
      if (totalVideoFrames) {
        if (this._lastCheckPoint) {
          var curDecoded = totalVideoFrames - this._lastDecodedFrames;
          var checkInterval = currTime - this._lastCheckPoint;
          this._checkStuck(curDecoded, totalVideoFrames, droppedVideoFrames, checkInterval);
        }
      }
      this._lastDecodedFrames = totalVideoFrames;
      this._lastCheckPoint = currTime;
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      this._stopTick();
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "FpsDetect";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        disabled: false,
        tick: 1e3,
        stuckCount: 3,
        reportFrame: 0
      };
    }
  }]);
  return FpsDetect2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/presets/default.js
I18N.use(ZH);
var DefaultPreset = _createClass(function DefaultPreset2(options, playerConfig) {
  var _this$plugins, _this$plugins2, _this$plugins3;
  _classCallCheck(this, DefaultPreset2);
  var simulateMode = playerConfig && playerConfig.isMobileSimulateMode === "mobile";
  var isLive = playerConfig.isLive;
  var vodPlugins = isLive ? [] : [TimeSegmentsControls, Progress, MiniProgress, ProgressPreview, Time];
  var contolsIcons = [].concat(vodPlugins, [Play, Fullscreen, Rotate, PlayNextIcon, DefinitionIcon, PlaybackRate, Download, ScreenShot, Volume, PIP]);
  var layers = [Replay, Poster, Start, Loading, Enter, ErrorPlugin, Prompt, Thumbnail, MiniScreen];
  this.plugins = [Stats, XGLogger].concat(_toConsumableArray(contolsIcons), layers, [GapJump, WaitingTimeoutJump]);
  var mode = simulateMode ? "mobile" : sniffer.device;
  switch (mode) {
    case "pc":
      (_this$plugins = this.plugins).push.apply(_this$plugins, [Keyboard, PCPlugin, CssFullScreen, TestSpeed, FpsDetect]);
      break;
    case "mobile":
      (_this$plugins2 = this.plugins).push.apply(_this$plugins2, [MobilePlugin]);
      break;
    default:
      (_this$plugins3 = this.plugins).push.apply(_this$plugins3, [Keyboard, PCPlugin, CssFullScreen]);
  }
  if (sniffer.os.isIpad || mode === "pc") {
    this.plugins.push(DynamicBg);
  }
  if (sniffer.os.isIpad) {
    this.plugins.push(PCPlugin);
  }
  this.ignores = [];
  this.i18n = [];
});

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/index.umd.js
var PresetPlayer = function(_Player) {
  _inherits(PresetPlayer2, _Player);
  var _super = _createSuper(PresetPlayer2);
  function PresetPlayer2() {
    _classCallCheck(this, PresetPlayer2);
    return _super.apply(this, arguments);
  }
  return _createClass(PresetPlayer2);
}(Player);
_defineProperty(PresetPlayer, "defaultPreset", DefaultPreset);
_defineProperty(PresetPlayer, "Util", util);
_defineProperty(PresetPlayer, "Sniffer", sniffer);
_defineProperty(PresetPlayer, "Errors", Errors);
_defineProperty(PresetPlayer, "Events", events_exports);
_defineProperty(PresetPlayer, "Plugin", Plugin);
_defineProperty(PresetPlayer, "BasePlugin", BasePlugin);
_defineProperty(PresetPlayer, "I18N", I18N);
_defineProperty(PresetPlayer, "STATE_CLASS", STATE_CLASS);
_defineProperty(PresetPlayer, "InstManager", InstManager);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/presets/default-en.js
var DefaultPreset3 = _createClass(function DefaultPreset22(options, playerConfig) {
  var _this$plugins, _this$plugins2, _this$plugins3;
  _classCallCheck(this, DefaultPreset22);
  var simulateMode = playerConfig && playerConfig.isMobileSimulateMode === "mobile";
  var isLive = playerConfig.isLive;
  var vodPlugins = isLive ? [] : [Progress, MiniProgress, ProgressPreview, Time];
  var contolsIcons = [].concat(vodPlugins, [Play, Fullscreen, Rotate, PlayNextIcon, DefinitionIcon, PlaybackRate, Download, ScreenShot, Volume, PIP]);
  var layers = [Replay, Poster, Start, Loading, Enter, ErrorPlugin, Prompt, Thumbnail, MiniScreen];
  this.plugins = [Stats, XGLogger].concat(_toConsumableArray(contolsIcons), layers, [GapJump, WaitingTimeoutJump]);
  var mode = simulateMode ? "mobile" : sniffer.device;
  switch (mode) {
    case "pc":
      (_this$plugins = this.plugins).push.apply(_this$plugins, [Keyboard, PCPlugin, CssFullScreen, TestSpeed, FpsDetect]);
      break;
    case "mobile":
      (_this$plugins2 = this.plugins).push.apply(_this$plugins2, [MobilePlugin]);
      break;
    default:
      (_this$plugins3 = this.plugins).push.apply(_this$plugins3, [Keyboard, PCPlugin, CssFullScreen]);
  }
  if (sniffer.os.isIpad || mode === "pc") {
    this.plugins.push(DynamicBg);
  }
  this.ignores = [];
  this.i18n = [];
});

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/presets/live.js
var DefaultPreset4 = _createClass(function DefaultPreset23() {
  var _this$plugins, _this$plugins2;
  _classCallCheck(this, DefaultPreset23);
  var contolsIcons = [Play, Fullscreen, Time, Volume, Rotate, DefinitionIcon, PlaybackRate, CssFullScreen, PIP];
  this.plugins = [Poster, Start, Loading, Enter, ErrorPlugin].concat(contolsIcons);
  switch (sniffer.device) {
    case "pc":
      (_this$plugins = this.plugins).push.apply(_this$plugins, [Keyboard, PCPlugin]);
      break;
    case "mobile":
      this.plugins.push(MobilePlugin);
      break;
    default:
      (_this$plugins2 = this.plugins).push.apply(_this$plugins2, [Keyboard, PCPlugin]);
  }
  this.ignores = [];
  this.i18n = [ZH];
});

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/presets/mobile.js
var DefaultPreset5 = _createClass(function DefaultPreset24() {
  _classCallCheck(this, DefaultPreset24);
  var contolsIcons = [MobilePlugin, Progress, Play, Fullscreen, Time, Rotate, PlayNextIcon, DefinitionIcon, PlaybackRate, Download, ScreenShot, Volume, PIP];
  var layers = [Replay, Poster, Start, Loading, Enter, ErrorPlugin, Prompt, Thumbnail, MiniProgress];
  this.plugins = [XGLogger].concat(contolsIcons, layers);
  this.ignores = [];
  this.i18n = [ZH];
});

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/lang/zh-hk.js
var zhHk = {
  LANG: "zh-hk",
  TEXT: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "視頻下載錯誤"
      },
      mse: {
        code: 2,
        msg: "劉追加錯誤"
      },
      parse: {
        code: 3,
        msg: "解析錯誤"
      },
      format: {
        code: 4,
        msg: "格式錯誤"
      },
      decoder: {
        code: 5,
        msg: "解碼錯誤"
      },
      runtime: {
        code: 6,
        msg: "語法錯誤"
      },
      timeout: {
        code: 7,
        msg: "播放超時"
      },
      other: {
        code: 8,
        msg: "其他錯誤"
      }
    },
    HAVE_NOTHING: "沒有關於音頻/視頻是否就緒的信息",
    HAVE_METADATA: "音頻/視頻的元數據已就緒",
    HAVE_CURRENT_DATA: "關於當前播放位置的數據是可用的，但沒有足夠的數據來播放下壹幀/毫秒",
    HAVE_FUTURE_DATA: "當前及至少下壹幀的數據是可用的",
    HAVE_ENOUGH_DATA: "可用數據足以開始播放",
    NETWORK_EMPTY: "音頻/視頻尚未初始化",
    NETWORK_IDLE: "音頻/視頻是活動的且已選取資源，但並未使用網絡",
    NETWORK_LOADING: "瀏覽器正在下載數據",
    NETWORK_NO_SOURCE: "未找到音頻/視頻來源",
    MEDIA_ERR_ABORTED: "取回過程被用戶中止",
    MEDIA_ERR_NETWORK: "下載錯誤",
    MEDIA_ERR_DECODE: "解碼錯誤",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "不支持的音頻/視頻格式",
    REPLAY: "重播",
    ERROR: "網絡連接似乎出現了問題",
    PLAY_TIPS: "播放",
    PAUSE_TIPS: "暫停",
    PLAYNEXT_TIPS: "下壹集",
    DOWNLOAD_TIPS: "下載",
    ROTATE_TIPS: "旋轉",
    RELOAD_TIPS: "重新載入",
    FULLSCREEN_TIPS: "進入全屏",
    EXITFULLSCREEN_TIPS: "退出全屏",
    CSSFULLSCREEN_TIPS: "進入樣式全屏",
    EXITCSSFULLSCREEN_TIPS: "退出樣式全屏",
    TEXTTRACK: "字幕",
    PIP: "畫中畫",
    SCREENSHOT: "截圖",
    LIVE: "正在直播",
    OFF: "關閉",
    OPEN: "開啟",
    MINI_DRAG: "點擊按住可拖動視頻",
    MINISCREEN: "小屏幕",
    REFRESH_TIPS: "請試試",
    REFRESH: "刷新",
    FORWARD: "快进中",
    LIVE_TIP: "直播"
  }
};

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/lang/jp.js
var jp = {
  LANG: "jp",
  TEXT: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "ビデオダウンロードエラー"
      },
      mse: {
        code: 2,
        msg: "ストリーム追加エラー"
      },
      parse: {
        code: 3,
        msg: "解析エラー"
      },
      format: {
        code: 4,
        msg: "間違ったフォーマット"
      },
      decoder: {
        code: 5,
        msg: "デコードエラー"
      },
      runtime: {
        code: 6,
        msg: "文法エラー"
      },
      timeout: {
        code: 7,
        msg: "再生タイムアウト"
      },
      other: {
        code: 8,
        msg: "その他のエラー"
      }
    },
    HAVE_NOTHING: "オーディオ/ビデオが準備できているか情報がありません",
    HAVE_METADATA: "オーディオ/ビデオのメタデータは準備できています",
    HAVE_CURRENT_DATA: "現在の再生位置に関するデータは利用可能ですが、次のフレーム/ミリ秒を再生するのに十分なデータがありません",
    HAVE_FUTURE_DATA: "現在、少なくとも次のフレームのデータが利用可能です",
    HAVE_ENOUGH_DATA: "利用可能なデータは再生を開始するのに十分です",
    NETWORK_EMPTY: "オーディオ/ビデオが初期化されていません",
    NETWORK_IDLE: "オーディオ/ビデオはアクティブでリソースが選択されていますが、ネットワークが使用されていません",
    NETWORK_LOADING: "ブラウザーはデータをダウンロードしています",
    NETWORK_NO_SOURCE: "オーディオ/ビデオ のソースが見つかりません",
    MEDIA_ERR_ABORTED: "ユーザーによってフェッチプロセスが中止されました",
    MEDIA_ERR_NETWORK: "ダウンロード中にエラーが発生しました",
    MEDIA_ERR_DECODE: "デコード中にエラーが発生しました",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "オーディオ/ビデオ の形式がサポートされていません",
    REPLAY: "リプレイ",
    ERROR: "ネットワークの接続に問題が発生しました",
    PLAY_TIPS: "プレイ",
    PAUSE_TIPS: "一時停止",
    PLAYNEXT_TIPS: "次をプレイ",
    DOWNLOAD_TIPS: "ダウンロード",
    ROTATE_TIPS: "回転",
    RELOAD_TIPS: "再読み込み",
    FULLSCREEN_TIPS: "フルスクリーン",
    EXITFULLSCREEN_TIPS: "フルスクリーンを終了",
    CSSFULLSCREEN_TIPS: "シアターモード",
    EXITCSSFULLSCREEN_TIPS: "シアターモードを終了",
    TEXTTRACK: "字幕",
    PIP: "ミニプレーヤー",
    SCREENSHOT: "スクリーンショット",
    LIVE: "生放送",
    OFF: "オフ",
    OPEN: "開いた",
    MINI_DRAG: "ボタンを押して働画をドラッグする",
    MINISCREEN: "小さな画面",
    REFRESH: "リフレッシュ",
    REFRESH_TIPS: "してみてください",
    FORWARD: "早送り",
    LIVE_TIP: "生放送"
  }
};

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/danmu/index.js
var import_danmu = __toESM(require_dist());

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/assets/panel.js
function PanelIcon() {
  return new DOMParser().parseFromString('<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -11 40 40" width="40" height="40">\n  <path fill="#f85959" transform="scale(0.8 0.8)" d="M36.5,18.73a1.19,1.19,0,0,0,1-1.14V16.33a1.2,1.2,0,0,0-1-1.13l-.61-.08a1.75,1.75,0,0,1-1.3-.86l-.21-.36-.2-.36A1.72,1.72,0,0,1,34,12l.23-.58a1.18,1.18,0,0,0-.5-1.42l-1.1-.62a1.18,1.18,0,0,0-1.47.3l-.39.51a1.82,1.82,0,0,1-1.41.72c-.44,0-1.88-.27-2.22-.7l-.39-.49a1.18,1.18,0,0,0-1.48-.28l-1.09.64a1.19,1.19,0,0,0-.47,1.43l.25.59a1.87,1.87,0,0,1-.08,1.58c-.26.37-1.17,1.5-1.71,1.58l-.63.09a1.19,1.19,0,0,0-1,1.14l0,1.27a1.17,1.17,0,0,0,1,1.12l.61.08a1.74,1.74,0,0,1,1.3.87l.21.36.2.35A1.69,1.69,0,0,1,24,22.08l-.23.59a1.19,1.19,0,0,0,.5,1.42l1.1.62a1.19,1.19,0,0,0,1.48-.31l.38-.5a1.83,1.83,0,0,1,1.41-.72c.44,0,1.88.25,2.22.69l.39.49a1.18,1.18,0,0,0,1.48.28L33.86,24a1.19,1.19,0,0,0,.47-1.43L34.09,22a1.84,1.84,0,0,1,.07-1.58c.26-.37,1.17-1.5,1.72-1.58ZM31,18.94a2.76,2.76,0,0,1-4.65-1.2A2.71,2.71,0,0,1,27,15.13a2.76,2.76,0,0,1,4.64,1.2A2.7,2.7,0,0,1,31,18.94Z"/>\n  <path fill="#f85959" transform="scale(0.8 0.8)" d="M32,0H3.59A3.59,3.59,0,0,0,0,3.59v17A3.59,3.59,0,0,0,3.59,24.2H19.72a12.59,12.59,0,0,1-.81-1.2A11.73,11.73,0,0,1,35.54,7.28V3.59A3.59,3.59,0,0,0,32,0ZM13,14.18H4.29a1.52,1.52,0,0,1,0-3H13a1.52,1.52,0,0,1,0,3ZM16.45,8H4.29a1.51,1.51,0,0,1,0-3H16.45a1.51,1.51,0,1,1,0,3Z"/>\n</svg>\n', "image/svg+xml").firstChild;
}

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/danmu/danmuPanel.js
var DanmuPanel = function(_Plugin) {
  _inherits(DanmuPanel2, _Plugin);
  var _super = _createSuper(DanmuPanel2);
  function DanmuPanel2(args) {
    var _this;
    _classCallCheck(this, DanmuPanel2);
    _this = _super.call(this, args);
    _this.set = {
      speed: 1,
      area: {},
      opacity: 1,
      fonSize: "middle"
    };
    return _this;
  }
  _createClass(DanmuPanel2, [{
    key: "afterCreate",
    value: function afterCreate() {
      if (sniffer.device === "mobile") {
        this.activeEvent = "click";
      } else {
        this.activeEvent = "mouseenter";
      }
      this.onStateChange = this.onStateChange.bind(this);
      this.onToggle = this.onToggle.bind(this);
      this.bind(this.activeEvent, this.onToggle);
      this.bind("mouseleave", this.onToggle);
      this.appendChild(".xgplayer-panel-icon", PanelIcon());
    }
  }, {
    key: "onStateChange",
    value: function onStateChange(e) {
      this.config.onChangeSet && this.config.onChangeSet(this.set);
    }
  }, {
    key: "onToggle",
    value: function onToggle(e) {
      e.preventDefault();
      e.stopPropagation();
      util.hasClass(this.root, "slider-show") ? util.removeClass(this.root, "slider-show") : util.addClass(this.root, "slider-show");
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      this.unbind(["click", "touchend"], this.onStateChange);
    }
  }, {
    key: "render",
    value: function render() {
      return '\n      <xg-icon class="xgplayer-panel">\n          <xg-panel-icon class="xgplayer-panel-icon">\n          </xg-panel-icon>\n          <xg-panel-slider class="xgplayer-panel-slider">\n            <xg-hidemode class="xgplayer-hidemode">\n              <p class="xgplayer-hidemode-font">屏蔽类型</p>\n              <ul class="xgplayer-hidemode-radio">\n                <li class="xgplayer-hidemode-scroll" id="false">滚动</li><li class="xgplayer-hidemode-top" id="false">顶部</li><li class="xgplayer-hidemode-bottom" id="false">底部</li><li class="xgplayer-hidemode-color" id="false">色彩</li>\n              </ul>\n            </xg-hidemode>\n            <xg-transparency class="xgplayer-transparency">\n              <span>不透明度</span>\n              <input class="xgplayer-transparency-line xgplayer-transparency-color xgplayer-transparency-bar xgplayer-transparency-gradient" type="range" min="0" max="100" step="0.1" value="50"></input>\n            </xg-transparency>\n            <xg-showarea class="xgplayer-showarea">\n              <div class="xgplayer-showarea-name">显示区域</div>\n              <div class="xgplayer-showarea-control">\n                <div class="xgplayer-showarea-control-up">\n                  <span class="xgplayer-showarea-control-up-item xgplayer-showarea-onequarters">1/4</span>\n                  <span class="xgplayer-showarea-control-up-item xgplayer-showarea-twoquarters selected-color">1/2</span>\n                  <span class="xgplayer-showarea-control-up-item xgplayer-showarea-threequarters">3/4</span>\n                  <span class="xgplayer-showarea-control-up-item xgplayer-showarea-full">1</span>\n                </div>\n                <div class="xgplayer-showarea-control-down">\n                  <div class="xgplayer-showarea-control-down-dots">\n                    <span class="xgplayer-showarea-onequarters-dot"></span>\n                    <span class="xgplayer-showarea-twoquarters-dot"></span>\n                    <span class="xgplayer-showarea-threequarters-dot"></span>\n                    <span class="xgplayer-showarea-full-dot"></span>\n                  </div>\n                  <input class="xgplayer-showarea-line xgplayer-showarea-color xgplayer-showarea-bar xgplayer-gradient" type="range" min="1" max="4" step="1" value="1">\n                </div>\n              </div>\n            </xg-showarea>\n            <xg-danmuspeed class="xgplayer-danmuspeed">\n              <div class="xgplayer-danmuspeed-name">弹幕速度</div>\n              <div class="xgplayer-danmuspeed-control">\n                <div class="xgplayer-danmuspeed-control-up">\n                  <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-small">慢</span>\n                  <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-middle selected-color">中</span>\n                  <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-large">快</span>\n                </div>\n                <div class="xgplayer-danmuspeed-control-down">\n                  <div class="xgplayer-danmuspeed-control-down-dots">\n                    <span class="xgplayer-danmuspeed-small-dot"></span>\n                    <span class="xgplayer-danmuspeed-middle-dot"></span>\n                    <span class="xgplayer-danmuspeed-large-dot"></span>\n                  </div>\n                  <input class="xgplayer-danmuspeed-line xgplayer-danmuspeed-color xgplayer-danmuspeed-bar xgplayer-gradient" type="range" min="50" max="150" step="50" value="100">\n                </div>\n              </div>\n            </xg-danmuspeed>\n            <xg-danmufont class="xgplayer-danmufont">\n              <div class="xgplayer-danmufont-name">字体大小</div>\n              <div class="xgplayer-danmufont-control">\n                <div class="xgplayer-danmufont-control-up">\n                  <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-small">小</span>\n                  <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-middle">中</span>\n                  <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-large selected-color">大</span>\n                </div>\n                <div class="xgplayer-danmufont-control-down">\n                  <div class="xgplayer-danmufont-control-down-dots">\n                    <span class="xgplayer-danmufont-small-dot"></span>\n                    <span class="xgplayer-danmufont-middle-dot"></span>\n                    <span class="xgplayer-danmufont-large-dot"></span>\n                  </div>\n                  <input class="xgplayer-danmufont-line xgplayer-danmufont-color xgplayer-danmufont-bar xgplayer-gradient" type="range" min="20" max="30" step="5" value="25">\n                </div>\n              </div>\n            </xg-danmufont>\n          </xg-panel-slider>\n      </xg-icon>';
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "danmuPanel";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        position: POSITIONS.CONTROLS_RIGHT,
        index: 11,
        onChangeSet: function onChangeSet(set) {
          console.log("DanmuPanel:".concat(set));
        },
        speed: 1,
        area: {},
        opacity: 1,
        fonSize: "middle"
      };
    }
  }]);
  return DanmuPanel2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/danmu/danmuIcon.js
var DANMU_OPEN = '<dk-switch class="danmu-switch">\n<span class="txt">弹</span>\n</dk-switch>';
var DanmuIcon = function(_Plugin) {
  _inherits(DanmuIcon2, _Plugin);
  var _super = _createSuper(DanmuIcon2);
  function DanmuIcon2() {
    _classCallCheck(this, DanmuIcon2);
    return _super.apply(this, arguments);
  }
  _createClass(DanmuIcon2, [{
    key: "afterCreate",
    value: function afterCreate() {
      this.initIcons();
      this.onStateChange = this.onStateChange.bind(this);
      this.bind(["click", "touchend"], this.onStateChange);
    }
  }, {
    key: "registerIcons",
    value: function registerIcons() {
      return {
        openDanmu: {
          icon: DANMU_OPEN,
          class: "danmu-switch-open"
        },
        closeDanmu: {
          icon: DANMU_OPEN,
          class: "danmu-switch-closed"
        }
      };
    }
  }, {
    key: "switchState",
    value: function switchState(isOpen) {
      if (isOpen) {
        this.setAttr("data-state", "active");
      } else {
        this.setAttr("data-state", "normal");
      }
      this.switchTips(isOpen);
    }
  }, {
    key: "initIcons",
    value: function initIcons() {
      var icons = this.icons;
      var contentIcon = this.find(".xgplayer-icon");
      contentIcon.appendChild(icons.openDanmu);
      contentIcon.appendChild(icons.closeDanmu);
    }
  }, {
    key: "switchTips",
    value: function switchTips(isOpen) {
      var tipDom = this.find(".xg-tips");
      tipDom && this.changeLangTextKey(tipDom, isOpen ? "OFF" : "OPEN");
    }
  }, {
    key: "onStateChange",
    value: function onStateChange(e) {
      e.preventDefault();
      e.stopPropagation();
      var state = this.root.getAttribute("data-state");
      var isOpen = state === "active";
      this.switchState(!isOpen);
      this.config.onSwitch && this.config.onSwitch(e, !isOpen);
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      this.unbind(["click", "touchend"], this.getMini);
    }
  }, {
    key: "render",
    value: function render() {
      var langKey = "OPEN";
      return '\n    <xg-icon class="danmu-icon">\n      <div class="xgplayer-icon">\n      </div>\n      '.concat(xgIconTips(this, langKey, this.playerConfig.isHideTips), "\n    </xg-icon>");
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "danmuIcon";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        position: POSITIONS.CONTROLS_RIGHT,
        index: 11,
        onSwitch: function onSwitch(event, state) {
        }
      };
    }
  }]);
  return DanmuIcon2;
}(Plugin);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/danmu/index.js
var MIN_INTERVAL = 300;
var Danmu = function(_Plugin) {
  _inherits(Danmu2, _Plugin);
  var _super = _createSuper(Danmu2);
  function Danmu2(args) {
    var _this;
    _classCallCheck(this, Danmu2);
    _this = _super.call(this, args);
    _this.danmujs = null;
    _this.danmuPanel = null;
    _this.isOpen = false;
    _this.seekCost = 0;
    _this.intervalId = 0;
    _this.isUseClose = false;
    return _this;
  }
  _createClass(Danmu2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      if (this.playerConfig.isLive) {
        this.config.isLive = true;
      }
      this.initDanmu();
      this.registerExtIcons();
      this.once(TIME_UPDATE, function() {
        _this2.config.defaultOpen && !_this2.isUseClose && _this2.start();
      });
      this.on(PAUSE, function() {
        _this2.isOpen && _this2.danmujs && _this2.danmujs.pause();
      });
      this.on(PLAY, function() {
        _this2.isOpen && _this2.danmujs && _this2.danmujs.play();
      });
      this.on(SEEKING, function() {
        _this2.seekCost = window.performance.now();
        !_this2.config.isLive && _this2.danmujs && _this2.danmujs.stop();
      });
      this.on(VIDEO_RESIZE, function() {
        _this2.resize();
      });
      this.on(SEEKED, function() {
        if (!_this2.danmujs || !_this2.isOpen) {
          return;
        }
        if (_this2.intervalId) {
          util.clearTimeout(_this2, _this2.intervalId);
          _this2.intervalId = null;
        }
        var now2 = window.performance.now();
        if (now2 - _this2.seekCost > MIN_INTERVAL) {
          _this2.danmujs.start();
        } else {
          _this2.intervalId = util.setTimeout(_this2, function() {
            _this2.danmujs.start();
            _this2.intervalId = null;
          }, MIN_INTERVAL);
        }
      });
    }
  }, {
    key: "onPluginsReady",
    value: function onPluginsReady2() {
      var pcPlugin = this.player.plugins.pc;
      if (pcPlugin) {
        pcPlugin.onVideoDblClick && this.bind("dblclick", pcPlugin.onVideoDblClick);
        pcPlugin.onVideoClick && this.bind("click", pcPlugin.onVideoClick);
      }
    }
  }, {
    key: "initDanmu",
    value: function initDanmu() {
      var player = this.player, config = this.config;
      var _this$config = this.config, channelSize = _this$config.channelSize, fontSize = _this$config.fontSize, opacity = _this$config.opacity, mouseControl = _this$config.mouseControl, mouseControlPause = _this$config.mouseControlPause, area = _this$config.area, defaultOff = _this$config.defaultOff;
      var danmuConfig = {
        container: this.root,
        player: player.media,
        comments: this.config.comments,
        live: config.isLive,
        defaultOff,
        area,
        mouseControl,
        mouseControlPause
      };
      if (config.ext) {
        Object.keys(config.ext).map(function(key) {
          danmuConfig[key] = config.ext[key];
        });
      }
      var danmu = new import_danmu.default(danmuConfig);
      this.danmujs = danmu;
      player.danmu = danmu;
      this.setFontSize(fontSize, channelSize);
      this.setArea(area);
      this.resize();
      opacity !== 1 && this.setOpacity(opacity);
    }
  }, {
    key: "registerExtIcons",
    value: function registerExtIcons() {
      var _this3 = this;
      var player = this.player, config = this.config;
      if (config.panel && player.controls) {
        var panelOptions = {
          config: {
            onChangeset: function onChangeset(set) {
              _this3.changeSet(set);
            }
          }
        };
        this.danmuPanel = player.controls.registerPlugin(DanmuPanel, panelOptions, DanmuPanel.pluginName);
      }
      var switchConfig = config.switchConfig;
      if (!config.closeDefaultBtn && player.controls) {
        var buttonOptions = {
          config: {
            onSwitch: function onSwitch(event, isOpen) {
              _this3.onSwitch(event, isOpen);
            }
          }
        };
        Object.keys(switchConfig).map(function(key) {
          buttonOptions.config[key] = switchConfig[key];
        });
        this.danmuButton = player.controls.registerPlugin(DanmuIcon, buttonOptions, DanmuIcon.pluginName);
        this.config.defaultOpen && this.danmuButton.switchState(true);
      }
    }
  }, {
    key: "changeSet",
    value: function changeSet(set) {
    }
  }, {
    key: "onSwitch",
    value: function onSwitch(event, defaultOpen) {
      this.emitUserAction(event, "switch_danmu", {
        prop: "isOpen",
        from: !defaultOpen,
        to: defaultOpen
      });
      if (defaultOpen) {
        this.start();
      } else {
        this.stop();
      }
    }
  }, {
    key: "start",
    value: function start() {
      var _this4 = this;
      if (this.isOpen || !this.danmujs) {
        return;
      }
      this.isUseClose = false;
      this.show();
      this.resize();
      util.setTimeout(this, function() {
        _this4.danmujs.start();
        if (_this4.player.paused) {
          _this4.danmujs.pause();
        }
        _this4.isOpen = true;
      }, 0);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.isUseClose = true;
      if (!this.isOpen || !this.danmujs) {
        return;
      }
      this.danmujs.stop();
      this.config.isLive && this.clear();
      this.isOpen = false;
      this.hide();
    }
  }, {
    key: "clear",
    value: function clear() {
      this.danmujs && this.danmujs.clear();
    }
  }, {
    key: "setCommentLike",
    value: function setCommentLike(id, data) {
      this.danmujs && this.danmujs.setCommentLike(id, data);
    }
  }, {
    key: "setCommentDuration",
    value: function setCommentDuration(id, duration) {
      this.danmujs && this.danmujs.setCommentDuration(id, duration);
    }
  }, {
    key: "setAllDuration",
    value: function setAllDuration(mode, duration) {
      this.danmujs && this.danmujs.setAllDuration(mode, duration);
    }
  }, {
    key: "setCommentID",
    value: function setCommentID(oldID, newID) {
      this.danmujs && this.danmujs.setCommentID(oldID, newID);
    }
  }, {
    key: "hideMode",
    value: function hideMode(mode) {
      this.danmujs && this.danmujs.hide(mode);
    }
  }, {
    key: "showMode",
    value: function showMode(mode) {
      this.danmujs && this.danmujs.show(mode);
    }
  }, {
    key: "setArea",
    value: function setArea(area) {
      this.danmujs && this.danmujs.setArea(area);
    }
  }, {
    key: "setOpacity",
    value: function setOpacity(opacity) {
      this.danmujs && this.danmujs.setOpacity(opacity);
    }
  }, {
    key: "setFontSize",
    value: function setFontSize(size, channelSize) {
      this.danmujs && this.danmujs.setFontSize(size, channelSize);
    }
  }, {
    key: "resize",
    value: function resize() {
      this.danmujs && this.danmujs.resize();
    }
  }, {
    key: "sendComment",
    value: function sendComment(comments) {
      this.danmujs && this.danmujs.sendComment(comments);
    }
  }, {
    key: "updateComments",
    value: function updateComments(comments, isClear) {
      this.danmujs && this.danmujs.updateComments(comments, isClear);
    }
  }, {
    key: "hideIcon",
    value: function hideIcon() {
      this.danmuButton && this.danmuButton.hide();
    }
  }, {
    key: "showIcon",
    value: function showIcon() {
      this.danmuButton && this.danmuButton.show();
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      this.danmujs.stop();
      this.danmujs.destroy();
      this.danmujs = null;
      this.player.danmu = null;
      var danmuButton = this.danmuButton, danmuPanel = this.danmuPanel;
      this.danmuButton && this.danmuButton.root && danmuButton.__destroy && danmuButton.__destroy();
      this.danmuPanel && this.danmuPanel.root && danmuPanel.__destroy && danmuPanel.__destroy();
      this.danmuButton = null;
      this.danmuPanel = null;
    }
  }, {
    key: "render",
    value: function render() {
      return '<xg-danmu class="xgplayer-danmu">\n    </xg-danmu>';
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "danmu";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        comments: [],
        area: {
          start: 0,
          end: 1
        },
        closeDefaultBtn: false,
        defaultOff: false,
        panel: false,
        panelConfig: {},
        switchConfig: {},
        defaultOpen: true,
        isLive: false,
        channelSize: 24,
        fontSize: 14,
        opacity: 1,
        mouseControl: false,
        mouseControlPause: false,
        ext: {},
        style: {}
      };
    }
  }]);
  return Danmu2;
}(Plugin);

// node_modules/.pnpm/xgplayer-subtitles@3.0.20_core-js@3.38.1/node_modules/xgplayer-subtitles/es/_virtual/_rollupPluginBabelHelpers.js
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread22(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof2(obj) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof2(obj);
}
function _classCallCheck2(instance2, Constructor) {
  if (!(instance2 instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey2(descriptor.key), descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties2(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty2(obj, key, value) {
  key = _toPropertyKey2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf2(subClass, superClass);
}
function _getPrototypeOf2(o) {
  _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf22(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf2(o);
}
function _setPrototypeOf2(o, p) {
  _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf22(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf2(o, p);
}
function _isNativeReflectConstruct2() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn2(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized2(self);
}
function _createSuper2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf2(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf2(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn2(this, result);
  };
}
function _superPropBase2(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf2(object);
    if (object === null)
      break;
  }
  return object;
}
function _get2() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get2 = Reflect.get.bind();
  } else {
    _get2 = function _get22(target, property, receiver) {
      var base = _superPropBase2(target, property);
      if (!base)
        return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get2.apply(this, arguments);
}
function _toPrimitive2(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey2(arg) {
  var key = _toPrimitive2(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

// node_modules/.pnpm/xgplayer-subtitles@3.0.20_core-js@3.38.1/node_modules/xgplayer-subtitles/es/index.js
var import_eventemitter34 = __toESM(require_eventemitter3());

// node_modules/.pnpm/xgplayer-subtitles@3.0.20_core-js@3.38.1/node_modules/xgplayer-subtitles/es/parser.js
var VTT_CHECK = /^WEBVTT/;
var VTT_STYLE = /^STYLE+$/;
var VTT_CUE = /^\:\:cue/;
var VTT_CUEND = /^}+$/;
var ASS_CHECK = /^\[Script Info\].*/;
var TIME_REGEX_LIST = [/[0-9]{1,3}:[0-9]{2}:[0-9]{2}\.[0-9]{1,3}-->[0-9]{1,3}:[0-9]{2}:[0-9]{2}\.[0-9]{1,3}/, /[0-9]{1,3}:[0-9]{2}\.[0-9]{1,3}-->[0-9]{1,3}:[0-9]{2}\.[0-9]{1,3}/, /[0-9]{1,2}\.[0-9]{1,3}-->[0-9]{1,2}\.[0-9]{1,3}/];
var MAX_COUNT = 50;
var ASS_FORMAT = /^Format:\s/;
var ASS_STYLE = /^Style:\s/;
var ASS_DIALOGUE = /^Dialogue:\s/;
function getSecond(arr) {
  var len = arr.length;
  if (len === 3) {
    return ((Number(arr[0]) * 60 + Number(arr[1])) * 60 * 1e3 + Number(arr[2]) * 1e3) / 1e3;
  } else if (len === 2) {
    return (Number(arr[0]) * 60 * 1e3 + Number(arr[1]) * 1e3) / 1e3;
  } else {
    return Number(arr[0]);
  }
}
function isNumber(str) {
  return /^(\-|\+)?\d+(\.\d+)?$/.test(str);
}
function htmlEncodeAll(e) {
  return e;
}
function getByIndex(i, arr) {
  if (i >= 0 && i < arr.length) {
    return arr[i];
  }
  return "";
}
var SubTitleParser = function() {
  function SubTitleParser2() {
    _classCallCheck2(this, SubTitleParser2);
  }
  _createClass2(SubTitleParser2, null, [{
    key: "parseJson",
    value: function parseJson(list) {
      var ret = [];
      var count = 0;
      for (var i = 0; i < list.length; i++) {
        if (count >= MAX_COUNT) {
          count = 0;
        }
        if (count === 0) {
          var item = {
            start: list[i].start,
            list: [list[i]],
            end: list[i].end
          };
          ret.push(item);
        } else {
          ret[ret.length - 1].list.push(list[i]);
          ret[ret.length - 1].end = list[i].end;
        }
        count++;
      }
      return ret;
    }
  }, {
    key: "parse",
    value: function parse2(str, fun) {
      var format = SubTitleParser2.checkFormat(str);
      if (!format) {
        fun({
          format
        });
      }
      try {
        var ret = [];
        if (format === "ass") {
          ret = SubTitleParser2.parseASS(str);
        } else if (format === "vtt") {
          ret = SubTitleParser2.parseVTT(str);
        }
        fun({
          format,
          list: ret.list,
          styles: ret.styles
        });
      } catch (error) {
        console.error(error);
        fun({
          format
        }, error);
      }
    }
  }, {
    key: "parseASSItem",
    value: function parseASSItem() {
      var str = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var mode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      var values = str.split(",");
      var item = {};
      var text = "";
      try {
        var len = values.length - mode.length;
        if (len > 0) {
          text = values.splice(mode.length - 1, len + 1).join(",") + "";
        } else {
          text = values[values.length - 1] + "";
        }
        text = text.replace(/\\n+/g, "");
        text = htmlEncodeAll(text);
        values[mode.length - 1] = text;
        mode.map(function(key, index) {
          if (key === "end" || key === "start") {
            item[key] = getSecond(values[index].split(":"));
          } else if (key === "text") {
            item[key] = [values[index]];
          } else if (key === "layer") {
            item[key] = [values[index]];
            item.textTag = [values[index]];
          } else if (key === "style") {
            item[key] = [values[index]];
          } else {
            item[key] = Number(values[index]) ? Number(values[index]) : values[index];
          }
        });
        return item;
      } catch (error) {
        console.error(error);
        return {};
      }
    }
  }, {
    key: "parseASS",
    value: function parseASS(str) {
      var arr = str.split("\n");
      var retData = [];
      var i = 0;
      var groupCount = 0;
      var styles = [];
      var mode = [];
      var lastSubTitle = null;
      while (i < arr.length) {
        if (ASS_FORMAT.test(arr[i])) {
          mode = arr[i].replace(ASS_FORMAT, "").replace(/\s+/g, "").split(",");
          mode = mode.map(function(item) {
            return item.toLocaleLowerCase();
          });
        } else if (ASS_STYLE.test(arr[i])) {
          styles.push(arr[i].replace(ASS_STYLE, "").replace(/\s+/g, ""));
        } else if (ASS_DIALOGUE.test(arr[i])) {
          var subTitle = SubTitleParser2.parseASSItem(arr[i].replace(ASS_DIALOGUE, ""), mode);
          if (!lastSubTitle || !(subTitle.start === lastSubTitle.start && subTitle.end === lastSubTitle.end)) {
            lastSubTitle = subTitle;
            var group = null;
            if (groupCount % MAX_COUNT === 0) {
              group = {
                start: lastSubTitle.start,
                end: lastSubTitle.end,
                list: []
              };
              group.list.push(lastSubTitle);
              retData.push(group);
            } else {
              group = retData[retData.length - 1];
              group.end = lastSubTitle.end;
              group.list.push(lastSubTitle);
            }
            groupCount++;
          } else {
            try {
              var _lastSubTitle = lastSubTitle, text = _lastSubTitle.text, textTag = _lastSubTitle.textTag, style = _lastSubTitle.style;
              text.push(subTitle.text[0]);
              textTag.push(subTitle.textTag[0]);
              style.push(subTitle.style[0]);
            } catch (error) {
              console.error(error);
            }
          }
        }
        i++;
      }
      return {
        list: retData,
        style: {}
      };
    }
  }, {
    key: "parseVTTStyle",
    value: function parseVTTStyle(str, style) {
      var arr = str.split(":");
      if (arr.length > 1) {
        var keyArr = arr[0].trim().split("-");
        var key = "";
        if (keyArr.length > 1) {
          keyArr.map(function(item, index) {
            key += index === 0 ? item : item.charAt(0).toUpperCase() + item.slice(1);
          });
        } else {
          key = keyArr[0];
        }
        style[key] = arr[1].trim().replace(/;$/, "");
      }
      return style;
    }
  }, {
    key: "parseVTT",
    value: function parseVTT(str) {
      str = str.replace(VTT_CHECK, "");
      var arr = str.split("\n");
      var retData = [];
      var i = 0;
      var groupCount = 0;
      var lastSubTitle = null;
      var isLastSpace = false;
      var isCueStart = false;
      var styleInfo = null;
      var styleHeader = null;
      var styles = [];
      while (i < arr.length) {
        var _str = getByIndex(i, arr).trim();
        if (!_str || isLastSpace && isNumber(_str)) {
          isLastSpace = !_str;
        } else if (VTT_CUE.test(_str) && VTT_STYLE.test(getByIndex(i - 1, arr).trim())) {
          isCueStart = true;
          var cueMatch = /\((.+?)\)/g.exec(_str);
          if (!cueMatch) {
            styleHeader = "";
          } else {
            styleHeader = cueMatch[1];
          }
          styleInfo = "";
        } else if (isCueStart) {
          if (VTT_CUEND.test(_str)) {
            styles.push({
              key: styleHeader,
              style: styleInfo
            });
            styleInfo = null;
            styleHeader = null;
            isCueStart = false;
          } else {
            styleInfo += _str;
          }
        } else if (_str) {
          isLastSpace = false;
          var time = this.checkIsTime(arr[i]);
          if (time) {
            var subTitle = this.parseVttTime(time);
            if (!lastSubTitle || !(subTitle.start === lastSubTitle.start && subTitle.end === lastSubTitle.end)) {
              lastSubTitle = subTitle;
              lastSubTitle.text = [];
              lastSubTitle.textTag = [];
              var group = null;
              if (groupCount % MAX_COUNT === 0) {
                group = {
                  start: lastSubTitle.start,
                  end: lastSubTitle.end,
                  list: []
                };
                group.list.push(lastSubTitle);
                retData.push(group);
              } else {
                group = retData[retData.length - 1];
                group.end = lastSubTitle.end;
                group.list.push(lastSubTitle);
              }
              groupCount++;
            }
          } else {
            if (lastSubTitle) {
              var _lastSubTitle2 = lastSubTitle, text = _lastSubTitle2.text, textTag = _lastSubTitle2.textTag;
              var ret = this.parseVttText(arr[i]);
              text.push(ret.text);
              textTag.push(ret.tag);
            }
          }
          isLastSpace = false;
        }
        i++;
        continue;
      }
      return {
        list: retData,
        styles
      };
    }
  }, {
    key: "checkIsTime",
    value: function checkIsTime(str) {
      str = str.replace(/\s+/g, "");
      var i = 0;
      var match = null;
      while (i < TIME_REGEX_LIST.length) {
        match = TIME_REGEX_LIST[i].exec(str);
        if (match) {
          break;
        }
        i++;
      }
      return match ? match[0] : null;
    }
  }, {
    key: "parseVttText",
    value: function parseVttText(text) {
      var langMatch = /^(<?.+?>)/g.exec(text);
      var retText = "";
      var tag = "default";
      if (langMatch) {
        tag = langMatch[0].replace(/\<|\>|\&/g, "");
        var newReg = RegExp("^<".concat(tag, ">(([\\s\\S])*?)</").concat(tag, ">$"));
        var textMatch = newReg.exec(text);
        if (textMatch) {
          retText = textMatch[1];
        } else {
          retText = text;
          tag = "";
        }
      } else {
        retText = text;
      }
      var tagsReg = /<(\w+).(\w+)>/g;
      var re = tagsReg.exec(retText);
      while (re && re.length > 2) {
        retText = retText.replace(re[0], "<".concat(re[1], ' class="').concat(re[2], '">'));
        re = tagsReg.exec(retText);
      }
      return {
        tag,
        text: htmlEncodeAll(retText.replace(/\\n+/g, "<br/>"))
      };
    }
  }, {
    key: "parseVttTime",
    value: function parseVttTime(str) {
      var arr = str.split("-->");
      var start;
      var end = 0;
      if (arr.length === 2) {
        var aArr = arr[0].split(":");
        var bArr = arr[1].split(":");
        start = getSecond(aArr);
        end = getSecond(bArr);
      }
      return {
        start,
        end,
        time: str
      };
    }
  }, {
    key: "isVTT",
    value: function isVTT(str) {
      return VTT_CHECK.test(str);
    }
  }, {
    key: "isASS",
    value: function isASS(str) {
      return ASS_CHECK.test(str);
    }
  }, {
    key: "checkFormat",
    value: function checkFormat(str) {
      if (!str) {
        return null;
      }
      if (VTT_CHECK.test(str)) {
        return "vtt";
      } else if (ASS_CHECK.test(str)) {
        return "ass";
      }
      return null;
    }
  }]);
  return SubTitleParser2;
}();

// node_modules/.pnpm/xgplayer-subtitles@3.0.20_core-js@3.38.1/node_modules/xgplayer-subtitles/es/error.js
var ERROR2 = [{
  code: 0,
  msg: "SUCCESS"
}, {
  code: 1,
  msg: "LOAD_ERROR"
}, {
  code: 2,
  msg: "PARSER_ERROR"
}, {
  code: 3,
  msg: "FORMAT_NOT_SUPPORTED"
}, {
  code: 4,
  msg: "ID_OR_LANGUAGE_NOT_EXIST"
}, {
  code: 5,
  msg: "PARAMETERS_ERROR"
}, {
  code: 6,
  msg: "ABORT"
}, {
  code: 7,
  msg: "UNKNOWN"
}, {
  code: 8,
  msg: "DATA_ERROR:subtitle.url is null"
}, {
  code: 9,
  msg: "DATA_ERROR:subtitle.url length is 0"
}];
function _ERROR(code) {
  var error = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var ret = {
    code: ERROR2[code].code,
    msg: ERROR2[code].msg
  };
  Object.keys(error).map(function(key) {
    ret[key] = error[key];
  });
  return ret;
}

// node_modules/.pnpm/xgplayer-subtitles@3.0.20_core-js@3.38.1/node_modules/xgplayer-subtitles/es/xhr.js
var XHR = _createClass2(function XHR2() {
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, url = _ref.url, _ref$method = _ref.method, method = _ref$method === void 0 ? "GET" : _ref$method, _ref$type = _ref.type, type = _ref$type === void 0 ? "arraybuffer" : _ref$type, _ref$timeout = _ref.timeout, timeout = _ref$timeout === void 0 ? 1e4 : _ref$timeout, _ref$data = _ref.data, data = _ref$data === void 0 ? {} : _ref$data;
  var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  _classCallCheck2(this, XHR2);
  return new Promise(function(resolve, reject) {
    var R = new window.XMLHttpRequest();
    var _method = method.toUpperCase();
    var _data = [];
    if (type) {
      R.responseType = type;
    }
    if (timeout) {
      R.timeout = timeout;
    }
    Object.keys(data).forEach(function(k) {
      _data.push("k=".concat(data[k]));
    });
    R.onload = function() {
      if (R.status === 200 || R.status === 206) {
        resolve({
          context,
          res: R
        });
      } else {
        reject(new Error({
          context,
          res: R,
          type: "error"
        }));
      }
    };
    R.onerror = function(e) {
      reject(new Error({
        context,
        res: R,
        type: "error"
      }));
    };
    R.ontimeout = function(e) {
      reject(new Error({
        context,
        res: R,
        type: "error"
      }));
    };
    R.onabort = function() {
      reject(new Error({
        context,
        res: R,
        type: "error"
      }));
    };
    if (_method === "GET") {
      R.open(_method, "".concat(url));
      R.send();
    } else if (_method === "post") {
      R.open(_method, url);
      R.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      R.send(_data.join("&"));
    } else {
      throw new Error("xhr ".concat(_method, " is not supported"));
    }
  });
});

// node_modules/.pnpm/xgplayer-subtitles@3.0.20_core-js@3.38.1/node_modules/xgplayer-subtitles/es/proxyPromise.js
var ProxyPromise = function() {
  function ProxyPromise2() {
    _classCallCheck2(this, ProxyPromise2);
    var resolvePromise;
    var rejectPromise;
    var promise = new Promise(function(resolve, reject) {
      resolvePromise = resolve;
      rejectPromise = reject;
    });
    var publicPromise = promise;
    publicPromise.resolve = function(data) {
      resolvePromise(data);
      publicPromise.state = "fulfilled";
    };
    publicPromise.reject = function(error) {
      rejectPromise(error);
      publicPromise.state = "rejected";
      publicPromise.isBreak = error === "DESTROYED";
    };
    publicPromise.state = "pending";
    return publicPromise;
  }
  _createClass2(ProxyPromise2, [{
    key: "resolve",
    value: function resolve(value) {
    }
  }, {
    key: "reject",
    value: function reject(reason) {
    }
  }]);
  return ProxyPromise2;
}();

// node_modules/.pnpm/xgplayer-subtitles@3.0.20_core-js@3.38.1/node_modules/xgplayer-subtitles/es/utils.js
function hasClass(el, className) {
  if (!el) {
    return false;
  }
  if (el.classList) {
    return Array.prototype.some.call(el.classList, function(item) {
      return item === className;
    });
  } else {
    var orgClassName = el.className && _typeof2(el.className) === "object" ? el.getAttribute("class") : el.className;
    return orgClassName && !!orgClassName.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
  }
}
function addClass(el, className) {
  if (!el) {
    return;
  }
  if (el.classList) {
    className.replace(/(^\s+|\s+$)/g, "").split(/\s+/g).forEach(function(item) {
      item && el.classList.add(item);
    });
  } else if (!hasClass(el, className)) {
    if (el.className && _typeof2(el.className) === "object") {
      el.setAttribute("class", el.getAttribute("class") + " " + className);
    } else {
      el.className += " " + className;
    }
  }
}
function removeClass(el, className) {
  if (!el) {
    return;
  }
  if (el.classList) {
    className.split(/\s+/g).forEach(function(item) {
      el.classList.remove(item);
    });
  } else if (hasClass(el, className)) {
    className.split(/\s+/g).forEach(function(item) {
      var reg = new RegExp("(\\s|^)" + item + "(\\s|$)");
      if (el.className && _typeof2(el.className) === "object") {
        el.setAttribute("class", el.getAttribute("class").replace(reg, " "));
      } else {
        el.className = el.className.replace(reg, " ");
      }
    });
  }
}
function findIndexByTime(currentTime, list, index) {
  var len = list.length;
  if (len < 1) {
    return -1;
  }
  index = index < 0 ? 0 : index >= len ? len - 1 : index;
  if (list[index].start <= currentTime && currentTime < list[index].end) {
    return index;
  } else {
    var i = list[index].end <= currentTime ? index + 1 : 0;
    for (; i < len; i++) {
      if (list[i].start <= currentTime && currentTime < list[i].end) {
        return i;
      } else if (currentTime > list[i].end && i + 1 < len && currentTime < list[i + 1].start) {
        return -1;
      } else if (currentTime > list[i].end && i + 1 >= len) {
        return -1;
      }
    }
    return -1;
  }
}
function findCIndexByTime(currentTime, list, index) {
  var len = list.length;
  if (len < 1) {
    return [];
  }
  index = index < 0 ? 0 : index >= len ? len - 1 : index;
  var ids = [];
  if (index < len) {
    var i = list[index].end <= currentTime ? index : 0;
    for (; i < len; i++) {
      if (list[i].start <= currentTime && currentTime < list[i].end) {
        ids.push(i);
      }
      if (currentTime < list[i].start) {
        break;
      }
    }
  }
  return ids;
}
function getItemsByIndex(list, gid, cids) {
  if (list.length === 0 || gid < 0 || gid > list.length - 1) {
    return [];
  }
  var gList = list[gid].list;
  if (cids.length === 0) {
    return [];
  }
  var ret = gList.splice(cids[0], cids.length);
  if (gid > 0) {
    list.splice(0, gid);
  }
  if (gList.length === 0) {
    list.splice(0, 1);
  }
  return ret;
}
function typeOf(obj) {
  return Object.prototype.toString.call(obj).match(/([^\s.*]+)(?=]$)/g)[0];
}
function createDom() {
  var el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "div";
  var tpl = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  var attrs = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var cname = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
  var dom = document.createElement(el);
  dom.className = cname;
  dom.innerHTML = tpl;
  Object.keys(attrs).forEach(function(item) {
    var key = item;
    var value = attrs[item];
    if (el === "video" || el === "audio" || el === "live-video") {
      if (value) {
        dom.setAttribute(key, value);
      }
    } else {
      dom.setAttribute(key, value);
    }
  });
  return dom;
}
function isMobile() {
  var ua = navigator.userAgent;
  var isWindowsPhone = /(?:Windows Phone)/.test(ua);
  var isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
  var isAndroid = /(?:Android)/.test(ua);
  var isFireFox = /(?:Firefox)/.test(ua);
  var isTablet = /(?:iPad|PlayBook)/.test(ua) || isAndroid && !/(?:Mobile)/.test(ua) || isFireFox && /(?:Tablet)/.test(ua);
  var isPhone = /(?:iPhone)/.test(ua) && !isTablet;
  return isPhone || isAndroid || isSymbian || isTablet;
}
function addCSS(styles) {
  var preTag = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  var cssText = "";
  styles.map(function(item) {
    cssText += " ".concat(preTag, " ").concat(item.key, " {").concat(item.style, "}");
  });
  var styleTag = document.createElement("style");
  var head = document.head || document.getElementsByTagName("head")[0];
  styleTag.type = "text/css";
  styleTag.id = "ssss";
  if (styleTag.styleSheet) {
    var func = function func2() {
      try {
        styleTag.styleSheet.cssText = cssText;
      } catch (e) {
      }
    };
    if (styleTag.styleSheet.disabled) {
      setTimeout(func, 10);
    } else {
      func();
    }
  } else {
    var textNode = document.createTextNode(cssText);
    styleTag.appendChild(textNode);
  }
  head.appendChild(styleTag);
}
function parse(content, format, promise) {
  if (!promise) {
    promise = new ProxyPromise();
  }
  if (format === "json") {
    var list = SubTitleParser.parseJson(content);
    promise.resolve({
      list,
      format: "json"
    });
  } else if (format === "string") {
    SubTitleParser.parse(content, function(data, error) {
      if (error) {
        var err = _ERROR(2, error);
        promise.reject(err, {
          format: data.format
        });
      } else if (!data.format) {
        var _err3 = _ERROR(3);
        promise.reject(_err3);
      } else {
        promise.resolve({
          styles: data.styles,
          list: data.list,
          format: data.format
        });
      }
    });
  }
  return promise;
}
function loadSubTitle(object, promise) {
  if (!promise) {
    promise = new ProxyPromise();
  }
  new XHR({
    url: object.url,
    type: "text"
  }).then(function(data) {
    parse(data.res.response, "string").then(function(data2) {
      promise.resolve(_objectSpread22(_objectSpread22({}, data2), object));
    }).catch(function(e) {
      promise.reject(e);
    });
  }).catch(function(err) {
    var _err = _ERROR(1, _objectSpread22({
      statusText: err.statusText,
      status: err.status,
      type: err.type,
      message: "http load error",
      url: object.src
    }, object));
    promise.reject(_err);
  });
  return promise;
}
function checkSubtitle(src, dist) {
  if (src.id && dist.id && src.id === dist.id || src.language && dist.language && src.language === dist.language) {
    return true;
  }
  return false;
}
function isEnglish(str) {
  if (str === null || str.trim() === "") {
    return false;
  }
  return /^[a-zA-Z]+$/.test(str);
}
function patchABCbiaodian(str) {
  var reg = /[\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/;
  if (reg.test(str)) {
    return true;
  } else {
    return false;
  }
}
function patchCn(temp) {
  var reg = /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/;
  if (reg.test(temp)) {
    return true;
  } else {
    return false;
  }
}
function splitWords(str) {
  var arr = str.split("");
  var retArr = [];
  var lastIsEn = false;
  for (var i = 0; i < arr.length; i++) {
    var _str = arr[i];
    if (isEnglish(_str)) {
      if (!lastIsEn) {
        retArr.push(_str);
        lastIsEn = true;
      } else {
        var _lIdx = retArr.length - 1;
        retArr[_lIdx] = "".concat(retArr[_lIdx]).concat(_str);
      }
    } else if (_str.match(/^[ ]*$/) || patchABCbiaodian(_str) || patchCn(_str)) {
      lastIsEn = false;
      var _lIdx2 = retArr.length - 1;
      retArr[_lIdx2] = "".concat(retArr[_lIdx2]).concat(_str);
    } else {
      lastIsEn = false;
      retArr.push(_str);
    }
  }
  return retArr;
}

// node_modules/.pnpm/xgplayer-subtitles@3.0.20_core-js@3.38.1/node_modules/xgplayer-subtitles/es/observer.js
var ResizeObserver2 = function() {
  function ResizeObserver22() {
    var _this = this;
    _classCallCheck2(this, ResizeObserver22);
    this.__handlers = [];
    if (!window.ResizeObserver) {
      return;
    }
    this.observer = new window.ResizeObserver(function(entries) {
      _this.__trigger(entries);
    });
  }
  _createClass2(ResizeObserver22, [{
    key: "addObserver",
    value: function addObserver22(target, handler) {
      if (!this.observer) {
        return;
      }
      this.observer && this.observer.observe(target);
      var __handlers = this.__handlers;
      var index = -1;
      for (var i = 0; i < __handlers.length; i++) {
        if (__handlers[i] && target === __handlers[i].target) {
          index = i;
        }
      }
      if (index > -1) {
        this.__handlers[index].handler.push(handler);
      } else {
        this.__handlers.push({
          target,
          handler: [handler]
        });
      }
    }
  }, {
    key: "unObserver",
    value: function unObserver22(target) {
      var i = -1;
      this.__handlers.map(function(item, index) {
        if (target === item.target) {
          i = index;
        }
      });
      this.observer && this.observer.unobserve(target);
      i > -1 && this.__handlers.splice(i, 1);
    }
  }, {
    key: "destroyObserver",
    value: function destroyObserver() {
      this.observer && this.observer.disconnect();
      this.observer = null;
      this.__handlers = null;
    }
  }, {
    key: "__runHandler",
    value: function __runHandler(target, cr) {
      var __handlers = this.__handlers;
      for (var i = 0; i < __handlers.length; i++) {
        if (__handlers[i] && target === __handlers[i].target) {
          __handlers[i].handler && __handlers[i].handler.forEach(function(handler) {
            try {
              handler(target, cr);
            } catch (error) {
              console.error(error);
            }
          });
          break;
        }
      }
    }
  }, {
    key: "__trigger",
    value: function __trigger(entries) {
      var _this2 = this;
      entries.map(function(item) {
        var cr = item.contentRect;
        _this2.__runHandler(item.target, cr);
      });
    }
  }]);
  return ResizeObserver22;
}();
var resizeObserver2 = null;
function addObserver2(target, handler) {
  if (!resizeObserver2) {
    resizeObserver2 = new ResizeObserver2();
  }
  resizeObserver2.addObserver(target, handler);
}
function unObserver2(target, handler) {
  if (!resizeObserver2) {
    return;
  }
  resizeObserver2.unObserver(target, handler);
}

// node_modules/.pnpm/xgplayer-subtitles@3.0.20_core-js@3.38.1/node_modules/xgplayer-subtitles/es/constants.js
var EVENTS3 = {
  RESIZE: "resize",
  CHANGE: "change",
  OFF: "off",
  UPDATE: "update"
};

// node_modules/.pnpm/xgplayer-subtitles@3.0.20_core-js@3.38.1/node_modules/xgplayer-subtitles/es/index.js
function formatUrl(url) {
  var ret = [];
  if (url && typeOf(url) === "String") {
    ret.push({
      url,
      index: 0,
      start: -1,
      end: -1
    });
  } else if (typeOf(url) === "Array") {
    url.forEach(function(item, i) {
      ret.push({
        url: item.url || item.src,
        index: i,
        start: item.start || -1,
        end: item.end || -1
      });
    });
  }
  return ret;
}
var IS_MOBILE2 = false;
var Subtitle = function(_EventEmitter) {
  _inherits2(Subtitle2, _EventEmitter);
  var _super = _createSuper2(Subtitle2);
  function Subtitle2(options) {
    var _this;
    _classCallCheck2(this, Subtitle2);
    _this = _super.call(this);
    _defineProperty2(_assertThisInitialized2(_this), "_onPause", function() {
      _this.stopRender();
    });
    _defineProperty2(_assertThisInitialized2(_this), "_onPlay", function() {
      if (_this._curRenderTask.length > 0) {
        _this.startRender(-1);
      }
    });
    _defineProperty2(_assertThisInitialized2(_this), "_onTimeupdate", function() {
      if (!_this._isOpen) {
        return;
      }
      var _this$player$video = _this.player.video, videoWidth = _this$player$video.videoWidth, videoHeight = _this$player$video.videoHeight;
      if (!_this._videoMeta.scale && videoWidth && videoHeight) {
        _this._onResize(_this.player.root);
      }
      var curTime = _this._getPlayerCurrentTime();
      if (Math.round(Math.abs(curTime * 1e3 - _this._ctime)) < 200) {
        return;
      }
      _this._ctime = curTime * 1e3;
      if (_this.currentText && _this.currentText.list) {
        _this.config.updateMode === "live" ? _this._liveUpdate(curTime) : _this._update(curTime);
      }
    });
    _defineProperty2(_assertThisInitialized2(_this), "_onResize", function(target) {
      var _assertThisInitialize = _assertThisInitialized2(_this), _videoMeta = _assertThisInitialize._videoMeta, config = _assertThisInitialize.config;
      if (!config.domRender) {
        return;
      }
      if (!target || !(target instanceof window.Element)) {
        target = _this.player.root;
      }
      if (_this._iId) {
        clearTimeout(_this._iId);
        _this._iId = null;
      }
      if (!_videoMeta.scale) {
        if (!_this.player.video) {
          return;
        }
        var _this$player$video2 = _this.player.video, videoWidth = _this$player$video2.videoWidth, videoHeight = _this$player$video2.videoHeight;
        if (videoWidth && videoHeight) {
          _videoMeta.videoWidth = videoWidth;
          _videoMeta.videoHeight = videoHeight;
          _videoMeta.scale = parseInt(videoHeight / videoWidth * 100, 10);
        } else {
          return;
        }
      }
      _this.__startResize(target);
    });
    _defineProperty2(_assertThisInitialized2(_this), "_onCoreEvents", function(e) {
      try {
        switch (e.eventName) {
          case "core.subtitlesegments":
            _this._onSubtitleSegment(e.list || []);
            break;
          case "core.subtitleplaylist":
            _this._onSubtitlePlaylist(e.list || []);
            break;
          case "core.seipayloadtime":
            _this._onCoreSeiintime(e);
            break;
          default:
        }
      } catch (e2) {
        console.error(e2);
      }
    });
    _defineProperty2(_assertThisInitialized2(_this), "startRender", function(timer) {
      if (timer > 0 && _this._renderIntervalId) {
        window.cancelAnimationFrame(_this._renderIntervalId);
        _this._renderIntervalId = -1;
      }
      if (!_this.textTrack) {
        return;
      }
      var _assertThisInitialize2 = _assertThisInitialized2(_this), _curRenderTask = _assertThisInitialize2._curRenderTask;
      _this._lastTimeStamp = (/* @__PURE__ */ new Date()).getTime();
      var emptyArr = [];
      _curRenderTask.forEach(function(item, index) {
        var lastTime = item.lastTime, wordList = item.wordList, interval = item.interval, dom = item.dom, ids = item.ids;
        if (timer < 0 || _this._lastTimeStamp < 0 || _this._lastTimeStamp - lastTime >= interval) {
          var _words = wordList.shift();
          _words && dom.appendData(_words);
          item.lastTime = _this._lastTimeStamp;
        }
        if (wordList.length < 1) {
          emptyArr.push({
            index,
            ids
          });
        }
      });
      _this._log(">>>>_renderByWords emptyArr", emptyArr.length, _curRenderTask.length);
      emptyArr.forEach(function(item) {
        _curRenderTask.splice(item.index, 1);
        _this._log(">>>_renderByWords remove emptyArr", item.index, _curRenderTask.length);
      });
      if (_curRenderTask.length > 0) {
        _this._renderIntervalId = window.requestAnimationFrame(_this.startRender);
      }
    });
    _defineProperty2(_assertThisInitialized2(_this), "destroy", function() {
      _this.detachPlayer();
      _this.removeAllListeners();
      _this.player = null;
      _this.textTrack = null;
      _this._curRenderTask = [];
      _this.stopRender();
    });
    IS_MOBILE2 = isMobile();
    _this.currentText = null;
    _this.currentExtText = null;
    _this.textTrack = [];
    _this._cid = -1;
    _this._gid = -1;
    _this._cids = [];
    _this._iId = null;
    _this._iC = 0;
    _this.player = null;
    _this.root = null;
    _this.config = {
      line: "double",
      bottom: 0,
      mode: "stroke",
      defaultOpen: false,
      baseSizeX: 49,
      baseSizeY: 28,
      minSize: 16,
      minMobileSize: 13,
      fitVideo: true,
      offsetBottom: 2,
      fontColor: "#fff",
      domRender: true,
      updateMode: "vod",
      renderMode: "",
      debugger: false
    };
    _this._ctime = 0;
    _this._loadingTrack = {};
    Object.keys(_this.config).map(function(key) {
      if (options[key] !== void 0 && options[key] !== null) {
        _this.config[key] = options[key];
      }
    });
    _this._isOpen = _this.config.defaultOpen || false;
    _this._videoMeta = {
      scale: 0,
      videoHeight: 0,
      videoWidth: 0,
      lwidth: 0,
      lheight: 0,
      vWidth: 0,
      vHeight: 0,
      vBottom: 0,
      vLeft: 0,
      marginBottom: 0
    };
    if (!options.subTitles || typeOf(options.subTitles) !== "Array") {
      return _possibleConstructorReturn2(_this);
    }
    if (options.player) {
      _this.attachPlayer(options.player);
    }
    _this.seiTime = 0;
    _this.lastSeiTime = 0;
    _this._curTexts = [];
    _this._curRenderTask = [];
    _this._renderIntervalId = -1;
    _this._lastTimeStamp = -1;
    _this.setSubTitles(options.subTitles, _this.config.defaultOpen);
    return _this;
  }
  _createClass2(Subtitle2, [{
    key: "version",
    get: function get() {
      return "3.0.20";
    }
  }, {
    key: "setSubTitles",
    value: function setSubTitles() {
      var _this2 = this;
      var subTitles = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var isOpen = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var ieRemoveFirst = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      var _isOpen = this._isOpen || isOpen;
      ieRemoveFirst && this.innerRoot && this.switchOff();
      this.currentText = null;
      this.textTrack = [];
      subTitles.forEach(function(item) {
        var text = {};
        Object.keys(item).map(function(key) {
          text[key] = item[key];
        });
        text.url = formatUrl(text.url);
        if (text.isDefault) {
          _this2.currentText = text;
        }
        _this2.textTrack.push(text);
      });
      this._log("setSubTitles", _isOpen);
      if (_isOpen) {
        this.switch().catch(function(e) {
          _this2._log("[switch]", e);
        });
      }
      this.currentText && this._loadTrack(this.currentText).then(function(textTrack) {
        _this2.addStyles(textTrack);
      });
      this.emit("reset", {
        list: this.textTrack,
        isOpen: _isOpen
      });
    }
  }, {
    key: "updateSubTitle",
    value: function updateSubTitle(subTitle) {
      var _this3 = this;
      var index = -1;
      for (var i = 0; i < this.textTrack.length; i++) {
        if (checkSubtitle(subTitle, this.textTrack[i])) {
          index = i;
          break;
        }
      }
      this._log("updateSubTitle", index, subTitle);
      if (index > -1) {
        var _isCurrent = checkSubtitle(this.currentText, this.textTrack[index]);
        this._log("updateSubTitle", "_isCurrent", _isCurrent, "this.isOpen", this.isOpen, this.currentText);
        if (!_isCurrent) {
          return;
        }
        var url = formatUrl(subTitle.url);
        if (!this.isOpen) {
          this.textTrack[index].url = url;
        } else {
          url.forEach(function(item) {
            _this3.textTrack[index].url.push(item);
          });
          this._log("updateSubTitle _loadTrackUrls", this.textTrack[index]);
          this._loadTrackUrls(this.currentText, 2);
        }
      }
    }
  }, {
    key: "addStyles",
    value: function addStyles(textTrack) {
      var styles = textTrack.styles, format = textTrack.format;
      if (styles && format === "vtt") {
        styles.map(function(item) {
          if (!item.key) {
            item.key = "xg-text-track-span";
          }
        });
        addCSS(styles, "xg-text-track");
      }
    }
  }, {
    key: "attachPlayer",
    value: function attachPlayer(player) {
      var _this4 = this;
      this._log("attachPlayer");
      if (!player) {
        return;
      }
      if (this.player) {
        this.detachPlayer();
      }
      var _this$config = this.config, fontColor = _this$config.fontColor, mode = _this$config.mode, fitVideo = _this$config.fitVideo, domRender = _this$config.domRender;
      this.player = player;
      if (domRender) {
        this.root = document.createElement("xg-text-track");
        this.root.className = "xg-text-track";
        !this._isOpen && addClass(this.root, "text-track-hide");
        !fitVideo && addClass(this.root, "text-track-no-fitvideo");
        mode && addClass(this.root, "text-track-".concat(mode));
        this.innerRoot = document.createElement("xg-text-track-inner");
        this.root.appendChild(this.innerRoot);
        if (fontColor) {
          this.root.style.color = fontColor;
        }
        if (this.currentText) {
          ["language", "id", "label"].map(function(key) {
            _this4.root.setAttribute("data-".concat(key), _this4.currentText[key] || "");
          });
        }
        this.player.root.appendChild(this.root);
        addObserver2(player.root, this._onResize);
      }
      this.player.on("destroy", this.destroy);
      this.player.on("timeupdate", this._onTimeupdate);
      this.player.on("pause", this._onPause);
      this.player.on("play", this._onPlay);
      this.player.on("core_event", this._onCoreEvents);
      if (this._isOpen) {
        this.switch().catch(function(e) {
          _this4._log("[switch]", e);
        });
      }
    }
  }, {
    key: "detachPlayer",
    value: function detachPlayer() {
      var player = this.player, config = this.config;
      if (!player) {
        return;
      }
      player.off("destroy", this.destroy);
      player.off("timeupdate", this._onTimeupdate);
      player.off("pause", this._onPause);
      player.off("play", this._onPlay);
      player.off("core_event", this._onCoreEvents);
      if (config.domRender) {
        if (player.root) {
          unObserver2(player.root, this._onResize);
          player.root.removeChild(this.root);
        }
        this.innerRoot = null;
        this.root = null;
      }
      this.player = null;
    }
  }, {
    key: "switch",
    value: function _switch() {
      var _this5 = this;
      var subtitle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        id: "",
        language: ""
      };
      this._log("switch", subtitle);
      this._loadingTrack = subtitle;
      return new Promise(function(resolve, reject) {
        if (!subtitle.id && !subtitle.language) {
          if (_this5.currentText) {
            _this5._loadingTrack = {};
            _this5._updateCurrent(_this5.currentText);
            _this5.switchOn();
            var err = _ERROR(0, {
              message: "switch default subtitle success"
            });
            resolve(err);
            return;
          } else {
            var _err = _ERROR(5, {
              message: "no default subtitle"
            });
            reject(_err);
            return;
          }
        }
        if (_this5.currentText && checkSubtitle(subtitle, _this5.currentText)) {
          _this5._loadingTrack = {};
          _this5._updateCurrent(_this5.currentText);
          _this5.switchOn();
          resolve(_ERROR(0));
        } else {
          var nextSubtitle = null;
          _this5.__removeByTime(_this5._curTexts, 0);
          for (var i = 0; i < _this5.textTrack.length; i++) {
            if (checkSubtitle(subtitle, _this5.textTrack[i])) {
              nextSubtitle = _this5.textTrack[i];
              break;
            }
          }
          _this5._log("nextSubtitle", nextSubtitle);
          if (nextSubtitle) {
            _this5._emitPlayerSwitch(_this5.currentText, nextSubtitle);
            if (nextSubtitle.list) {
              _this5._loadingTrack = {};
              _this5._updateCurrent(nextSubtitle);
              _this5.switchOn();
              resolve(_ERROR(0));
            } else {
              _this5._log("this._loadTrack", nextSubtitle);
              _this5._updateCurrent(nextSubtitle);
              _this5._loadTrack(nextSubtitle).then(function(textTrack) {
                _this5.addStyles(textTrack);
                if (_this5._loadingTrack.id === nextSubtitle.id || _this5._loadingTrack.language === textTrack.language) {
                  _this5._loadingTrack = {};
                  _this5._updateCurrent(textTrack);
                  _this5.switchOn();
                  resolve(_ERROR(0));
                } else {
                  var _err2 = _ERROR(6, {
                    message: "check _loadingTrack fail id: ".concat(_this5._loadingTrack.id, "  nextSubtitle:").concat(textTrack.id)
                  });
                  reject(_err2);
                }
              }).catch(function(err2) {
                reject(err2);
              });
            }
          } else {
            var _err3 = _ERROR(4, new Error("The is no subtitle with id:[{".concat(subtitle.id, "}] or language:[").concat(subtitle.language, "]")));
            reject(_err3);
          }
        }
      });
    }
  }, {
    key: "switchExt",
    value: function switchExt() {
      var _this6 = this;
      var subtitle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        id: "",
        language: ""
      };
      return new Promise(function(resolve, reject) {
        if (!subtitle.id && !subtitle.language) {
          _this6.currentExtText = null;
          resolve(_ERROR(0));
        } else {
          var nextSubtitle = null;
          for (var i = 0; i < _this6.textTrack.length; i++) {
            if (checkSubtitle(subtitle, _this6.textTrack[i])) {
              nextSubtitle = _this6.textTrack[i];
              break;
            }
          }
          if (nextSubtitle && !checkSubtitle(nextSubtitle, _this6.currentText)) {
            _this6._loadTrack(nextSubtitle).then(function(textTrack) {
              _this6.currentExtText = textTrack;
              resolve(_ERROR(0));
            });
          }
        }
      });
    }
  }, {
    key: "switchOn",
    value: function switchOn() {
      this._log("switchOn");
      this._isOpen = true;
      this.show();
      this.emit(EVENTS3.CHANGE, this.currentText);
    }
  }, {
    key: "switchOff",
    value: function switchOff() {
      this._isOpen = false;
      this.hide();
      this.emit(EVENTS3.OFF);
    }
  }, {
    key: "isOpen",
    get: function get() {
      return this._isOpen;
    }
  }, {
    key: "_log",
    value: function _log() {
      if (this.config.debugger) {
        var _console;
        for (var _len2 = arguments.length, msg = new Array(_len2), _key = 0; _key < _len2; _key++) {
          msg[_key] = arguments[_key];
        }
        (_console = console).log.apply(_console, ["[xgSubtitle]"].concat(msg));
      }
    }
  }, {
    key: "_loadTrack",
    value: function _loadTrack(textTrack) {
      var _this7 = this;
      this._log("_loadTrack", textTrack.language, textTrack);
      var promise = new ProxyPromise();
      var contentType = "";
      var content = "";
      if (textTrack.json) {
        contentType = "json";
        content = textTrack.json;
      } else if (textTrack.stringContent && !textTrack.url) {
        contentType = "string";
        content = textTrack.stringContent;
      }
      if (content) {
        parse(content, contentType).then(function(data) {
          textTrack.format = data.format;
          textTrack.styles = data.styles;
          textTrack.list = data.list;
          promise.resolve(textTrack);
        }).catch(function(e) {
          promise.reject(e);
        });
        return promise;
      }
      var urls = textTrack.url;
      if (urls.length === 0) {
        promise.resolve(textTrack);
        return promise;
      }
      var url = urls.splice(0, 1);
      loadSubTitle(url[0]).then(function(data) {
        textTrack.format = data.format;
        textTrack.styles = data.styles;
        if (!textTrack.list) {
          textTrack.list = [];
        }
        _this7._pushList(textTrack.list, data.list);
        urls.length > 1 && _this7._loadTrackUrls(textTrack, 2);
        promise.resolve(textTrack);
      }).catch(function(e) {
        promise.reject(e);
      });
      return promise;
    }
  }, {
    key: "_emitPlayerSwitch",
    value: function _emitPlayerSwitch(curSubtitle, nextSubTitle) {
      if (curSubtitle && this.config.updateMode === "live") {
        curSubtitle.list = [];
        curSubtitle.url = [];
      }
      var data = _objectSpread22({
        lang: nextSubTitle.language
      }, nextSubTitle);
      this._log("emit subtile_switch ", nextSubTitle, data);
      this.player && this.player.emit("switch_subtitle", data);
    }
  }, {
    key: "_loadTrackUrls",
    value: function _loadTrackUrls(textTrack, maxCount, promise) {
      var _this8 = this;
      var len = textTrack.url.length;
      var urls = len > maxCount ? textTrack.url.splice(0, maxCount) : textTrack.url.splice(0, len);
      var loadingCount = urls.length;
      this._log("_loadTrackUrls", textTrack.language, len, urls.length, loadingCount);
      urls.forEach(function(item, i) {
        var obj = _objectSpread22(_objectSpread22({}, item), {}, {
          index: i
        });
        loadSubTitle(obj).then(function(data) {
          textTrack.format = data.format;
          textTrack.styles = data.format;
          if (!textTrack.list) {
            textTrack.list = [];
          }
          _this8._pushList(textTrack.list, data.list);
          loadingCount--;
        }).catch(function(e) {
          loadingCount--;
        }).finally(function(e) {
          if (loadingCount === 0) {
            promise && promise.resolve(textTrack);
            _this8._loadTrackUrls(textTrack, 2);
          }
        });
      });
    }
  }, {
    key: "_freshUrl",
    value: function _freshUrl(textTrack) {
      var data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        url: ""
      };
      var i = -1;
      textTrack.url.forEach(function(item, index) {
        if (item.url === data.url) {
          i = index;
        }
      });
      if (i > -1) {
        textTrack.url.splice(i, 1);
      }
    }
  }, {
    key: "_pushList",
    value: function _pushList(dist, src) {
      var _start = src[0].start;
      var _end = src[src.length - 1].end;
      if (dist.length === 0 || _start >= dist[dist.length - 1].end) {
        src.forEach(function(item) {
          dist.push(item);
        });
      } else {
        var _index = -1;
        for (var i = 0; i < dist.length; i++) {
          if (dist[i].start > _end) {
            _index = i;
            break;
          }
        }
        if (_index > -1) {
          src.forEach(function(item, i2) {
            dist.splice(_index + i2, 0, item);
          });
        }
      }
      return dist;
    }
  }, {
    key: "_updateCurrent",
    value: function _updateCurrent(subtitle) {
      var _this9 = this;
      this.currentText = subtitle;
      if (this.config.domRender && this.root) {
        ["language", "id", "label"].map(function(key) {
          _this9.root.setAttribute("data-".concat(key), _this9.currentText[key] || "");
        });
        this.__remove(this._cids);
      }
      this._cids = [];
      this._gid = -1;
      this._cid = -1;
      this._curTexts = [];
      var curTime = this._getPlayerCurrentTime();
      curTime && (this.config.updateMode === "live" ? this._liveUpdate(curTime) : this._update(curTime));
    }
  }, {
    key: "__loadAll",
    value: function __loadAll() {
      var _this10 = this;
      this.textTrack.forEach(function(item) {
        _this10._loadTrack(item);
      });
    }
  }, {
    key: "getDelCid",
    value: function getDelCid(oldArr, newArr) {
      var ret = [];
      for (var i = 0; i < oldArr.length; i++) {
        if (!newArr.includes(oldArr[i])) {
          ret.push(oldArr[i]);
        }
      }
      return ret;
    }
  }, {
    key: "getNewCid",
    value: function getNewCid(oldArr, newArr) {
      var ret = [];
      for (var i = 0; i < newArr.length; i++) {
        if (!oldArr.includes(newArr[i])) {
          ret.push(newArr[i]);
        }
      }
      return ret;
    }
  }, {
    key: "_liveUpdate",
    value: function _liveUpdate(currentTime) {
      var _this11 = this;
      if (!this.currentText || !this.currentText.list || !this.currentText.list.length) {
        return;
      }
      var _cids = [];
      var _gid = findIndexByTime(currentTime, this.currentText.list, this._gid);
      if (_gid > -1) {
        _cids = findCIndexByTime(currentTime, this.currentText.list[_gid].list, this._cid);
      }
      this.__removeByTime(this._curTexts, currentTime);
      this._log("_liveUpdate", currentTime, _gid, _cids, this.currentText.list[0].list[0].start, this.currentText.list[0].list[0].end);
      if (_cids.length > 0) {
        var ret = getItemsByIndex(this.currentText.list, _gid, _cids);
        var _len = this._curTexts.length;
        var _si = _len > 0 ? this._curTexts[_len - 1].index : 0;
        ret.forEach(function(item, i) {
          item.index = i + _si;
          _this11._curTexts.push(item);
        });
        this.__render(ret);
      }
      this.emit("update", this._curTexts);
    }
  }, {
    key: "_update",
    value: function _update(currentTime) {
      var _this12 = this;
      if (!this.currentText || !this.currentText.list || !this.currentText.list.length) {
        return;
      }
      var _gid = findIndexByTime(currentTime, this.currentText.list, this._gid);
      var _cids = [];
      if (_gid > -1) {
        _cids = findCIndexByTime(currentTime, this.currentText.list[_gid].list, this._cid);
      }
      if (_cids.length < 1) {
        this._cids.length > 0 && this.config.domRender && this.__remove(this._cids);
        this._cids = [];
        return;
      }
      if (this._cids === _cids && _gid === this._gid) {
        return;
      }
      this._gid = _gid;
      this._cid = _cids[0];
      var delCids = this.getDelCid(this._cids, _cids);
      var newCids = this.getNewCid(this._cids, _cids);
      this._cids = _cids;
      this.config.domRender && this.__remove(delCids);
      var texts = [];
      newCids.map(function(item) {
        var text = _this12.currentText.list[_gid].list[item];
        text.index = item;
        texts.push(text);
      });
      if (this.currentExtText) {
        newCids.map(function(item) {
          var textExt = _this12.currentText.list[_gid].list[item];
          textExt.index = item;
          texts.push(textExt);
        });
      }
      this._log("update", texts, currentTime);
      this.emit("update", texts);
      this.__render(texts, currentTime);
    }
  }, {
    key: "_getPlayerCurrentTime",
    value: function _getPlayerCurrentTime() {
      if (!this.player) {
        return 0;
      }
      var currentTime = this.player.currentTime;
      var curTime = parseInt(currentTime * 1e3 + this.seiTime * 1e3 - this.lastSeiTime * 1e3, 10) / 1e3;
      return curTime;
    }
  }, {
    key: "_onSubtitlePlaylist",
    value: function _onSubtitlePlaylist(subtitleList) {
      this._log("_onSubtitlePlaylist", subtitleList);
      var list = subtitleList.map(function(item) {
        return {
          label: item.name,
          language: item.lang,
          id: item.id,
          isDefault: item.default,
          url: [],
          mUrl: item.url
        };
      });
      this.setSubTitles(list);
    }
  }, {
    key: "_onSubtitleSegment",
    value: function _onSubtitleSegment(urlList) {
      this._log("_onSubtitleSegment", urlList.length, urlList[0].lang, urlList[0].sn, urlList[urlList.length - 1].sn, urlList[0].start, urlList[urlList.length - 1].end);
      if (!urlList || urlList.length === 0) {
        return;
      }
      var lang = urlList[0].lang;
      var urls = urlList.map(function(item) {
        return {
          id: item.sn,
          url: item.url,
          duration: item.duration,
          start: item.start,
          end: item.end
        };
      });
      var _sub = {
        language: lang,
        url: urls
      };
      if (!checkSubtitle(_sub, this.currentText)) {
        return;
      }
      this.updateSubTitle(_sub);
    }
  }, {
    key: "_onCoreSeiintime",
    value: function _onCoreSeiintime(e) {
      try {
        var sei = e.time / 1e3;
        this._log("_onCoreSeiintime sei", sei, this.seiTime, this.lastSeiTime);
        this.seiTime = sei;
        this.lastSeiTime = this.player ? this.player.currentTime : 0;
      } catch (e2) {
      }
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      var _this13 = this;
      var _this$config2 = this.config, baseSizeX = _this$config2.baseSizeX, baseSizeY = _this$config2.baseSizeY, minMobileSize = _this$config2.minMobileSize, minSize = _this$config2.minSize, fitVideo = _this$config2.fitVideo, offsetBottom = _this$config2.offsetBottom;
      var scale = this._videoMeta.scale;
      this._videoMeta.lwidth = width;
      this._videoMeta.lheight = height;
      var vWidth;
      var vHeight = 0;
      if (height / width * 100 >= scale) {
        vHeight = parseInt(scale * width, 10) / 100;
        vWidth = width;
      } else {
        vHeight = height;
        vWidth = parseInt(height / scale * 100, 10);
      }
      this._videoMeta.vWidth = vWidth;
      this._videoMeta.vHeight = vHeight;
      var _size = 0;
      var fontSize = 0;
      if (scale > 120) {
        _size = baseSizeY;
        fontSize = parseInt(_size * vHeight / 1080, 10);
      } else {
        _size = baseSizeX;
        fontSize = parseInt(_size * vWidth / 1920, 10);
      }
      var mini = IS_MOBILE2 ? minMobileSize : minSize;
      fontSize = fontSize < mini ? mini : fontSize > _size ? _size : fontSize;
      var style = {
        fontSize
      };
      var vBottom = parseInt((height - vHeight) / 2, 10);
      var vLeft = parseInt((width - vWidth) / 2, 10);
      var marginBottom = parseInt(vHeight * offsetBottom, 10) / 100;
      this._videoMeta.vBottom = vBottom;
      this._videoMeta.vLeft = vLeft;
      this._videoMeta.marginBottom = marginBottom;
      if (fitVideo) {
        style.bottom = vBottom + marginBottom;
        style.left = style.right = vLeft;
      }
      Object.keys(style).map(function(item) {
        _this13.root.style[item] = "".concat(style[item], "px");
      });
      this.emit(EVENTS3.RESIZE, {
        vLeft,
        vBottom,
        marginBottom,
        vWidth,
        vHeight,
        fontSize,
        scale
      });
    }
  }, {
    key: "__startResize",
    value: function __startResize(target) {
      var _this14 = this;
      var rect = target.getBoundingClientRect();
      var _videoMeta = this._videoMeta;
      var width = rect.width, height = rect.height;
      if (this._iId) {
        clearTimeout(this._iId);
        this._iId = null;
      }
      if (width > 0 && height > 0 && (width !== _videoMeta.lwidth || height !== _videoMeta.lheight)) {
        this._iC = 0;
        this.resize(width, height);
      } else {
        if (this._iC >= 5) {
          this._iC = 0;
          return;
        }
        this._iC++;
        this._iId = setTimeout(function() {
          _this14.__startResize(target);
        }, 50);
      }
    }
  }, {
    key: "__removeByTime",
    value: function __removeByTime(list, time) {
      var ids = [];
      for (var i = 0; i < list.length; i++) {
        if (!time || list[i].end < time) {
          ids.push(i);
        }
      }
      if (ids.length === 0) {
        return;
      }
      list.splice(ids[0], ids.length);
      this.config.domRender && this.__remove(ids);
    }
  }, {
    key: "__remove",
    value: function __remove(ids) {
      var _this15 = this;
      if (!ids || ids.length < 1) {
        return;
      }
      this._log(">>>>_renderByWords__remove", ids);
      var children = this.innerRoot.children;
      var removeIndex = [];
      for (var i = 0; i < children.length; i++) {
        var index = Number(children[i].getAttribute("data-index"));
        if (ids.includes(index)) {
          removeIndex.push(children[i]);
        }
      }
      removeIndex.map(function(item) {
        _this15.innerRoot.removeChild(item);
      });
    }
  }, {
    key: "__render",
    value: function __render() {
      var _this16 = this;
      var jsonItems = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      this._log("__render", jsonItems.length, this.config.domRender);
      var _this$config3 = this.config, renderMode = _this$config3.renderMode, domRender = _this$config3.domRender;
      if (jsonItems.length > 0 && domRender) {
        jsonItems.forEach(function(jsonItem) {
          var className = "text-track-".concat(_this16.config.line);
          jsonItem.text.forEach(function(itemText, index) {
            if (index > 0) {
              className += " text-track-deputy";
            }
            var attr = {
              "data-start": jsonItem.start,
              "data-end": jsonItem.end,
              "data-index": jsonItem.index
            };
            var _dom = createDom("xg-text-track-span", "", attr, className);
            _this16.innerRoot.appendChild(_dom);
            if (renderMode === "step") {
              var _dom1 = createDom("xg-text-track-span", "", attr, "".concat(className, " text-track-space"));
              _this16.innerRoot.appendChild(_dom1);
              _dom1.innerHTML = itemText;
              setTimeout(function() {
                _this16._renderByWords(_dom, index, jsonItem.start, jsonItem.end, itemText);
              }, 600);
            } else {
              _dom.innerHTML = itemText;
            }
          });
        });
      }
    }
  }, {
    key: "_renderByWords",
    value: function _renderByWords(_dom, index, start, end, itemText) {
      var _textNode = document.createTextNode("");
      _dom.appendChild(_textNode);
      var _words = splitWords(itemText);
      var curTime = this._getPlayerCurrentTime();
      var duration = parseInt((end - curTime) * 1e3, 10);
      if (curTime >= end) {
        return;
      } else if (start >= curTime) {
        curTime = start;
      }
      if (duration > 300) {
        duration -= 50;
      }
      var _len = _words.length;
      var _task = {
        dom: _textNode,
        ids: index,
        wordList: _words,
        interval: duration / _len,
        start: curTime,
        end,
        duration,
        lastTime: 0
      };
      this._log(">>>>_renderByWords", duration, _task);
      var _curRenderTask = this._curRenderTask;
      var _index = -1;
      for (var i = 0; i < _curRenderTask.length; i++) {
        if (_curRenderTask[i].ids === index) {
          _index = i;
          break;
        }
      }
      if (_index > -1) {
        _curRenderTask.slice(_index, 1);
      }
      _curRenderTask.push(_task);
      this.startRender(-1);
    }
  }, {
    key: "stopRender",
    value: function stopRender() {
      if (this._renderIntervalId) {
        window.cancelAnimationFrame(this._renderIntervalId);
      }
    }
  }, {
    key: "show",
    value: function show() {
      if (!this.config.domRender) {
        return;
      }
      removeClass(this.root, "text-track-hide");
    }
  }, {
    key: "hide",
    value: function hide() {
      if (!this.config.domRender) {
        return;
      }
      addClass(this.root, "text-track-hide");
      this.innerRoot.innerHTML = "";
    }
  }, {
    key: "emit",
    value: function emit(event, data) {
      var _get22;
      for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key2 = 2; _key2 < _len3; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }
      (_get22 = _get2(_getPrototypeOf2(Subtitle2.prototype), "emit", this)).call.apply(_get22, [this, event, data].concat(args));
    }
  }, {
    key: "on",
    value: function on(event, callback) {
      var _get3;
      for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key3 = 2; _key3 < _len4; _key3++) {
        args[_key3 - 2] = arguments[_key3];
      }
      (_get3 = _get2(_getPrototypeOf2(Subtitle2.prototype), "on", this)).call.apply(_get3, [this, event, callback].concat(args));
    }
  }, {
    key: "once",
    value: function once(event, callback) {
      var _get4;
      for (var _len5 = arguments.length, args = new Array(_len5 > 2 ? _len5 - 2 : 0), _key4 = 2; _key4 < _len5; _key4++) {
        args[_key4 - 2] = arguments[_key4];
      }
      (_get4 = _get2(_getPrototypeOf2(Subtitle2.prototype), "once", this)).call.apply(_get4, [this, event, callback].concat(args));
    }
  }, {
    key: "off",
    value: function off(event, callback) {
      var _get5;
      for (var _len6 = arguments.length, args = new Array(_len6 > 2 ? _len6 - 2 : 0), _key5 = 2; _key5 < _len6; _key5++) {
        args[_key5 - 2] = arguments[_key5];
      }
      (_get5 = _get2(_getPrototypeOf2(Subtitle2.prototype), "off", this)).call.apply(_get5, [this, event, callback].concat(args));
    }
  }, {
    key: "offAll",
    value: function offAll() {
      _get2(_getPrototypeOf2(Subtitle2.prototype), "removeAllListeners", this).call(this);
    }
  }, {
    key: "marginBottom",
    get: function get() {
      var _this$_videoMeta = this._videoMeta, bottom = _this$_videoMeta.bottom, marginBottom = _this$_videoMeta.marginBottom;
      return this.config.fitVideo ? bottom + marginBottom : marginBottom;
    }
  }]);
  return Subtitle2;
}(import_eventemitter34.default);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/track/nativeSubTitle.js
var import_eventemitter35 = __toESM(require_eventemitter3());
var NativeSubTitle = function(_EventEmitter) {
  _inherits(NativeSubTitle2, _EventEmitter);
  var _super = _createSuper(NativeSubTitle2);
  function NativeSubTitle2(media) {
    var _this;
    _classCallCheck(this, NativeSubTitle2);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "_onChange", function(e) {
      var _list = _this._media.textTracks;
      if (!_list || _list.length === 0) {
        return;
      }
      var retList = [];
      var langs = [];
      var curIndex = -1;
      for (var i = 0; i < _list.length; i++) {
        var item = _list[i];
        if (item.kind === "subtitles") {
          retList.push({
            id: item.id || item.language,
            language: item.language,
            text: item.label,
            isDefault: item.mode === "showing"
          });
          if (curIndex === -1 && item.mode === "showing") {
            curIndex = i;
          }
          langs.push(item.language);
        }
      }
      if (langs.join("|") !== _this._languages) {
        _this._languages = langs.join("|");
        _this.emit("reset", {
          list: retList,
          isOpen: curIndex > -1
        });
      } else if (curIndex === -1) {
        _this.emit("off");
      } else if (_this.curIndex !== curIndex) {
        _this.emit("change", retList[curIndex]);
      }
      _this.curIndex = curIndex;
    });
    _this._media = media;
    _this._list = [];
    _this._languages = "";
    _this.curIndex = -1;
    _this._init();
    return _this;
  }
  _createClass(NativeSubTitle2, [{
    key: "_init",
    value: function _init() {
      var _list = this._media.textTracks;
      _list.addEventListener("change", this._onChange);
    }
  }, {
    key: "switch",
    value: function _switch(data) {
      var _tracks = this._media.textTracks;
      for (var i = 0; i < _tracks.length; i++) {
        var item = _tracks[i];
        if (item.language === data.language) {
          item.mode = "showing";
        } else if (item.mode === "showing") {
          item.mode = "disabled";
        }
      }
    }
  }, {
    key: "switchOff",
    value: function switchOff() {
      var _tracks = this._media.textTracks;
      for (var i = 0; i < _tracks.length; i++) {
        _tracks[i].mode = "disabled";
      }
      this.curIndex = -1;
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      var _list = this._media.textTracks;
      _list.removeEventListener("change", this._onChange);
      this._media = null;
      this._list = [];
      this._languages = "";
      this.curIndex = -1;
    }
  }]);
  return NativeSubTitle2;
}(import_eventemitter35.default);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/track/index.js
var DEFAULT_TYPE = {
  CLOSE: "close",
  OPEN: "open",
  TEXT_CLOSE: "text-close"
};
function formatList(list) {
  var defaultIndex = -1;
  list.forEach(function(item, index) {
    if (!item.id && !item.language) {
      item.id = index;
    }
    item.id = String(item.id);
    !item.url && (item.url = item.src);
    !item.text && (item.text = item.label);
    !item.language && (item.language = item.srclang);
    item.isDefault === void 0 && (item.isDefault = item.default || false);
    if (item.isDefault || item.default) {
      if (defaultIndex < 0) {
        defaultIndex = index;
      } else {
        item.isDefault = item.default = false;
      }
    }
  });
  return defaultIndex;
}
function checkIsSame(src, dist) {
  var isIdS = util.isNotNull(src.id) && util.isNotNull(dist.id) && src.id === dist.id;
  var isLS = util.isNotNull(src.language) && util.isNotNull(dist.language) && src.language === dist.language;
  return isIdS || isLS;
}
var TextTrack = function(_OptionsIcon) {
  _inherits(TextTrack2, _OptionsIcon);
  var _super = _createSuper(TextTrack2);
  function TextTrack2() {
    var _this;
    _classCallCheck(this, TextTrack2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "_onOff", function() {
      _this.switchOffSubtitle();
    });
    _defineProperty(_assertThisInitialized(_this), "_onChange", function(data) {
      var _curIndex = _this.getSubTitleIndex(_this.config.list, data);
      if (_curIndex < 0) {
        return;
      }
      _this.updateCurItem(_curIndex, data);
    });
    _defineProperty(_assertThisInitialized(_this), "_onListReset", function(data) {
      _this.updateList(data);
    });
    _defineProperty(_assertThisInitialized(_this), "clickSwitch", function(e, data) {
      var isActionClose = data.type === DEFAULT_TYPE.CLOSE || data.type === DEFAULT_TYPE.TEXT_CLOSE;
      if (_this.subTitles) {
        if (isActionClose) {
          _this.subTitles.switchOff();
        } else {
          _this.switchSubTitle({
            language: data.language,
            id: data.id
          });
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onIconClick", function(e) {
      if (_this.curItem) {
        _this.subTitles.switchOff();
      } else {
        _this.switchOnSubtitle(e);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onPlayerFocus", function(e) {
      if (!_this.subTitles || !_this.config.style.follow) {
        return;
      }
      _this.rePosition();
    });
    _defineProperty(_assertThisInitialized(_this), "onPlayerBlur", function(e) {
      if (!_this.subTitles || !_this.config.style.follow || _this.playerConfig.marginControls) {
        return;
      }
      _this.subTitles.root && (_this.subTitles.root.style.transform = "translate(0, 0)");
    });
    return _this;
  }
  _createClass(TextTrack2, [{
    key: "beforeCreate",
    value: function beforeCreate(args) {
      var texttrack = args.player.config.texttrack || args.player.config.textTrack;
      if (util.typeOf(texttrack) === "Array") {
        args.config.list = texttrack;
      }
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      var _this$config = this.config, list = _this$config.list, mode = _this$config.mode;
      var defaultIndex = formatList(list);
      _get(_getPrototypeOf(TextTrack2.prototype), "afterCreate", this).call(this);
      this.curIndex = -1;
      this.lastIndex = -1;
      this.curItem = null;
      this._nativeTracks = null;
      this.handlerClickSwitch = this.hook("subtitle_change", this.clickSwitch);
      if (mode === "native") {
        this._initNativeSubtitle();
      } else {
        this._initExtSubTitle(defaultIndex);
      }
    }
  }, {
    key: "_initNativeSubtitle",
    value: function _initNativeSubtitle() {
      var player = this.player;
      if (!player._subTitles) {
        player._subTitles = new NativeSubTitle(player.media);
      }
      this.subTitles = player._subTitles;
      this.subTitles.on("off", this._onOff);
      this.subTitles.on("change", this._onChange);
      this.subTitles.on("reset", this._onListReset);
    }
  }, {
    key: "_initExtSubTitle",
    value: function _initExtSubTitle(defaultIndex) {
      var _this$config2 = this.config, list = _this$config2.list, style = _this$config2.style, isDefaultOpen = _this$config2.isDefaultOpen, updateMode = _this$config2.updateMode, renderMode = _this$config2.renderMode;
      if (isDefaultOpen && defaultIndex < 0 && list.length > 0) {
        defaultIndex = 0;
        list[0].isDefault = true;
      }
      var config = {
        subTitles: list,
        defaultOpen: isDefaultOpen,
        updateMode,
        renderMode,
        debugger: this.config.debugger
      };
      Object.keys(style).map(function(key) {
        config[key] = style[key];
      });
      var _needPos = !this.playerConfig.marginControls && this.player.controls.root;
      if (_needPos) {
        this.on(PLAYER_FOCUS, this.onPlayerFocus);
        this.on(PLAYER_BLUR, this.onPlayerBlur);
      }
      var player = this.player;
      if (!player._subTitles) {
        player._subTitles = new Subtitle(config);
        player._subTitles.attachPlayer(this.player);
      } else {
        player._subTitles._isOpen && (defaultIndex = this.getSubTitleIndex(this.config.list, player._subTitles.currentText));
      }
      this.subTitles = player._subTitles;
      this.subTitles.on("off", this._onOff);
      this.subTitles.on("change", this._onChange);
      this.subTitles.on("reset", this._onListReset);
      if (style.follow && this.subTitles.root) {
        util.addClass(this.subTitles.root, "follow-control");
      }
      this._renderList(list, isDefaultOpen, defaultIndex);
    }
  }, {
    key: "_renderList",
    value: function _renderList(list, isDefaultOpen, defaultIndex) {
      if (!list || list.length === 0) {
        return;
      }
      if (isDefaultOpen) {
        defaultIndex = defaultIndex < 0 ? 0 : defaultIndex;
        list[defaultIndex].isDefault = true;
        this.curIndex = defaultIndex;
        this.curItem = list[defaultIndex];
        this.switchIconState(true);
      } else {
        this.switchIconState(false);
      }
      if (this.player.isCanplay && list.length > 0) {
        this.renderItemList(list);
        this.show();
      }
    }
  }, {
    key: "registerIcons",
    value: function registerIcons() {
      return {
        textTrackOpen: {
          icon: "",
          class: "xg-texttrak-open"
        },
        textTrackClose: {
          icon: "",
          class: "xg-texttrak-close"
        }
      };
    }
  }, {
    key: "show",
    value: function show(value) {
      if (!this.config.list || this.config.list.length < 1) {
        return;
      }
      util.addClass(this.root, "show");
    }
  }, {
    key: "getSubTitleIndex",
    value: function getSubTitleIndex(list) {
      var subtitle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        id: "",
        language: ""
      };
      var cIndex = -1;
      if (!subtitle || !subtitle.id && !subtitle.language) {
        return cIndex;
      }
      list.forEach(function(item, index) {
        if (checkIsSame(item, subtitle)) {
          cIndex = index;
        }
      });
      return cIndex;
    }
  }, {
    key: "updateSubtitles",
    value: function updateSubtitles() {
      var list = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var needRemove = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      if (!list) {
        return;
      }
      this.updateList({
        list
      });
      this.subTitles && this.subTitles.setSubTitles(this.config.list, this.curIndex > -1, needRemove);
    }
  }, {
    key: "updateList",
    value: function updateList() {
      var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!data.list) {
        return;
      }
      var nList = [];
      data.list.forEach(function(item) {
        nList.push(item);
      });
      var defaultIndex = formatList(nList);
      if (data.isOpen) {
        this.curIndex = defaultIndex;
        this.curItem = defaultIndex > -1 ? nList[defaultIndex] : null;
      } else {
        this.curIndex = -1;
        this.curItem = null;
      }
      this.config.list = nList;
      if (nList.length > 0) {
        this.show();
      } else {
        this.switchOffSubtitle();
        this.hide();
      }
      this.renderItemList();
    }
  }, {
    key: "switchSubTitle",
    value: function switchSubTitle() {
      var subtitle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        id: "",
        language: ""
      };
      this.switchIconState(true);
      var cIndex = this.getSubTitleIndex(this.config.list, subtitle);
      if (cIndex < 0) {
        return;
      }
      this.subTitles.switch(subtitle).catch(function(e) {
      });
    }
  }, {
    key: "switchOffSubtitle",
    value: function switchOffSubtitle(e) {
      this.emit("subtitle_change", {
        off: true,
        isListUpdate: false,
        list: []
      });
      this.lastIndex = this.curIndex;
      this.curIndex = -1;
      this.curItem = null;
      this.switchIconState(false);
      this.renderItemList();
    }
  }, {
    key: "switchOnSubtitle",
    value: function switchOnSubtitle() {
      var list = this.config.list;
      var _sub = this.lastIndex > -1 ? this.lastIndex : 0;
      var _item = list[_sub];
      this.switchIconState(true);
      this.switchSubTitle(_item);
    }
  }, {
    key: "switchIconState",
    value: function switchIconState(isopen) {
      this.setAttr("data-state", isopen ? "open" : "close");
    }
  }, {
    key: "onItemClick",
    value: function onItemClick(e, data) {
      var target = e.delegateTarget;
      var language = target.getAttribute("language");
      var id = target.getAttribute("data-id");
      var type = target.getAttribute("data-type");
      _get(_getPrototypeOf(TextTrack2.prototype), "onItemClick", this).apply(this, arguments);
      this.handlerClickSwitch(e, {
        language,
        id,
        type
      });
    }
  }, {
    key: "changeCurrentText",
    value: function changeCurrentText() {
      if (this.isIcons) {
        return;
      }
      var _this$config3 = this.config, list = _this$config3.list, closeText = _this$config3.closeText;
      var index = this.curIndex;
      if (index - 1 < 0) {
        this.find(".icon-text").innerHTML = this.getTextByLang(closeText, "iconText");
      } else if (index - 1 < list.length) {
        var curItem = list[index - 1];
        if (!curItem)
          return;
        this.find(".icon-text").innerHTML = this.getTextByLang(curItem, "iconText");
      }
    }
  }, {
    key: "updateCurItem",
    value: function updateCurItem(cIndex, subtitle) {
      this.curIndex = cIndex;
      this.curItem = this.config.list[cIndex - 1];
      this.renderItemList();
      this.emit("subtitle_change", _objectSpread2({
        off: false,
        isListUpdate: false,
        list: []
      }, subtitle));
    }
  }, {
    key: "renderItemList",
    value: function renderItemList() {
      var _this2 = this;
      var _this$config4 = this.config, list = _this$config4.list, closeText = _this$config4.closeText, needCloseText = _this$config4.needCloseText;
      var items = [];
      var cIndex = this.curIndex;
      var _curI = this.curIndex;
      if (needCloseText) {
        items.push({
          showText: this.getTextByLang(closeText),
          "data-type": DEFAULT_TYPE.TEXT_CLOSE,
          selected: this.curIndex === -1
        });
        cIndex++;
      }
      list.map(function(item, index) {
        var itemInfo = {
          language: item.language || item.srclang || "",
          "data-id": item.id || ""
        };
        itemInfo.selected = _this2.curIndex === index;
        itemInfo.showText = _this2.getTextByLang(item);
        items.push(itemInfo);
      });
      _get(_getPrototypeOf(TextTrack2.prototype), "renderItemList", this).call(this, items, cIndex);
      this.curIndex = _curI;
      this.curItem = list[_curI];
    }
  }, {
    key: "rePosition",
    value: function rePosition() {
      var fitVideo = this.config.style.fitVideo;
      var _rect = this.player.controls.root.getBoundingClientRect();
      var cHeight = 0 - _rect.height;
      if (!fitVideo) {
        this.subTitles.root.style.transform = "translate(0, ".concat(cHeight, "px)");
        return;
      }
      var _this$player = this.player, video = _this$player.video, root = _this$player.root;
      var _root$getBoundingClie = root.getBoundingClientRect(), height = _root$getBoundingClie.height, width = _root$getBoundingClie.width;
      var videoHeight = video.videoHeight, videoWidth = video.videoWidth;
      var pi = parseInt(videoHeight / videoWidth * 100, 10);
      var vHeight = pi * width / 100;
      if (vHeight > height) {
        vHeight = height;
      }
      var margin = (height - vHeight) / 2 - cHeight;
      if (margin < 0) {
        this.subTitles.root.style.transform = "translate(0, ".concat(margin, "px)");
      }
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      if (this.subTitles) {
        this.subTitles.destroy();
        this.subTitles = null;
      }
      _get(_getPrototypeOf(TextTrack2.prototype), "destroy", this).call(this);
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "texttrack";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return _objectSpread2(_objectSpread2({}, OptionsIcon.defaultConfig), {}, {
        position: POSITIONS.CONTROLS_RIGHT,
        index: 6,
        list: [],
        isDefaultOpen: true,
        style: {
          follow: true,
          mode: "stroke",
          followBottom: 50,
          fitVideo: true,
          offsetBottom: 2,
          baseSizeX: 49,
          baseSizeY: 28,
          minSize: 16,
          minMobileSize: 13,
          line: "double",
          fontColor: "#fff"
        },
        closeText: {
          text: "不开启",
          iconText: "字幕"
        },
        needCloseText: true,
        className: "xgplayer-texttrack",
        hidePortrait: false,
        isShowIcon: true,
        renderMode: "normal",
        mode: "external",
        debugger: false
      });
    }
  }]);
  return TextTrack2;
}(OptionsIcon);

// node_modules/.pnpm/xgplayer@3.0.20_core-js@3.38.1/node_modules/xgplayer/es/plugins/heatmap/index.js
var HeatMap = function(_Plugin) {
  _inherits(HeatMap2, _Plugin);
  var _super = _createSuper(HeatMap2);
  function HeatMap2(args) {
    var _this;
    _classCallCheck(this, HeatMap2);
    _this = _super.call(this, args);
    _this.canvasHeight = 0;
    _this.canvasWidth = 0;
    _this.width = 0;
    _this.height = 0;
    _this.dataFloatLen = 2;
    _this.xData = [];
    _this.yData = [];
    _this.yMax = 0;
    _this._duration = 0;
    _this.curData = [];
    return _this;
  }
  _createClass(HeatMap2, [{
    key: "afterPlayerInit",
    value: function afterPlayerInit() {
      if (this.root) {
        return;
      }
      this.createRoot();
      this.reset();
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      this.on(VIDEO_RESIZE, function() {
        _this2.resize();
      });
      this.on(DURATION_CHANGE, function() {
        _this2._duration = _this2.player.duration;
        _this2.reset();
      });
    }
  }, {
    key: "setConfig",
    value: function setConfig(config) {
      var _this3 = this;
      Object.keys(config).forEach(function(key) {
        _this3.config[key] = config[key];
      });
      this.reset();
    }
  }, {
    key: "reset",
    value: function reset() {
      var data = this.config.data;
      this.setData(data);
      this.resize();
    }
  }, {
    key: "createRoot",
    value: function createRoot() {
      if (this.root) {
        return;
      }
      var mode = this.config.mode;
      var progress = this.player.plugins.progress;
      var parent = progress.root;
      var _class = mode === "activeShow" ? "xg-heatmap-active-show" : "xg-heatmap-normal";
      var root = util.createDom("div", "", {}, "xg-heatmap ".concat(_class));
      var c = parent.children.length > 0 ? parent.children[0] : null;
      parent.insertBefore(root, c);
      this.root = root;
      var canvas = util.createDom("canvas", "", {}, "xg-heatmap-canvas");
      this.root.appendChild(canvas);
      this.root.style.height = "".concat(this.config.height, "px");
      this.canvas = canvas;
    }
  }, {
    key: "resize",
    value: function resize() {
      var dpi = this.config.dpi;
      var _this$root$getBoundin = this.root.getBoundingClientRect(), width = _this$root$getBoundin.width, height = _this$root$getBoundin.height;
      if (width === this.width && height * dpi === this.height) {
        return;
      }
      this.width = width;
      this.height = height;
      this.canvas.width = this.canvasWidth = width * dpi;
      this.canvas.height = this.canvasHeight = height * dpi;
      this.yMax = 0;
      if (this.curData.length) {
        this.setData();
        this.drawLinePath();
      }
    }
  }, {
    key: "formatData",
    value: function formatData(data, duration, minValue) {
      var nData = [];
      if (data.length < 1) {
        return nData;
      }
      var totalDur = parseInt(duration * 1e3, 10);
      if (util.typeOf(data[0]) === "Object" && data[0].time !== void 0) {
        if (!totalDur) {
          return nData;
        }
        var step = 1;
        var lastTime = 0;
        data.forEach(function(item) {
          var dur = parseInt(item.time * 1e3, 10);
          if (lastTime && (step < 0 || item.time - lastTime < step)) {
            step = item.time - lastTime;
          }
          lastTime = item.time;
          nData.push(_objectSpread2(_objectSpread2({}, item), {}, {
            percent: dur / totalDur
          }));
        });
        var fTime = nData[0].time;
        if (fTime > 0) {
          var arr = fTime - step > 0 ? [fTime - step, 0] : [0];
          arr.forEach(function(time) {
            var dur = parseInt(time * 1e3, 10);
            nData.unshift({
              time,
              score: minValue,
              percent: dur / totalDur
            });
          });
        }
        var last = nData[nData.length - 1];
        if (duration - last.time > step) {
          [last.time + step, duration].forEach(function(item) {
            var dur = parseInt(item * 1e3, 10);
            nData.push({
              time: item,
              score: minValue,
              percent: dur / totalDur
            });
          });
        }
      } else {
        data.forEach(function(item) {
          nData.push(item);
        });
      }
      return nData;
    }
  }, {
    key: "_getX",
    value: function _getX(index, stepX, item, width) {
      if (item.percent !== void 0) {
        return this.fixFloat(width * item.percent, this.dataFloatLen);
      } else {
        return this.fixFloat((index - 1) * stepX, this.dataFloatLen);
      }
    }
  }, {
    key: "_getY",
    value: function _getY(item, stepY, maxY) {
      var _this$config = this.config, maxValue = _this$config.maxValue, minValue = _this$config.minValue;
      var y = minValue;
      y = item.score !== void 0 ? item.score : item;
      y = Math.min(y, maxValue);
      y = Math.max(y, minValue);
      y = y / stepY;
      y = 1 - y;
      y = this.fixFloat(y * maxY, this.dataFloatLen);
      return y;
    }
  }, {
    key: "setData",
    value: function setData(data) {
      var _this$config2 = this.config, maxValue = _this$config2.maxValue, minValue = _this$config2.minValue, maxLength = _this$config2.maxLength;
      if (data && data.length) {
        this.curData = this.formatData(data, this._duration, minValue);
      }
      data = this.curData;
      if (data.length < 1) {
        return;
      }
      this.xData = [];
      this.yData = [];
      this.yMax = 0;
      var max = maxValue;
      var min = minValue;
      var step_V = max - min;
      var step_Y = this.canvasHeight;
      var curDataLength = data.length;
      var step_D = curDataLength > maxLength ? this.fixFloat(curDataLength / maxLength, this.dataFloatLen) : 1;
      curDataLength = parseInt(curDataLength / step_D);
      var step_X = this.canvasWidth / (curDataLength - 1);
      step_X = this.fixFloat(step_X, this.dataFloatLen);
      if (Number.isNaN(step_X)) {
        return;
      }
      var i = parseInt(this.fixFloat(step_D - 1, 0));
      var j = 0;
      while (j < curDataLength) {
        var x = this._getX(j, step_X, data[i], this.canvasWidth);
        this.xData.push(x);
        var y = this._getY(data[i], step_V, step_Y);
        this.yMax = Math.max(this.yMax, step_Y - y);
        this.yData.push(y);
        j++;
        i = parseInt(this.fixFloat(j * step_D, 0));
      }
    }
  }, {
    key: "_getFillStyle",
    value: function _getFillStyle(ctx) {
      var _this$config3 = this.config, gradient = _this$config3.gradient, gradientColors = _this$config3.gradientColors, fillStyle = _this$config3.fillStyle;
      var fStyle = fillStyle;
      if (gradient && gradient.length === 4) {
        var gradientStyle = ctx.createLinearGradient(gradient[0], gradient[1], gradient[2], gradient[3]);
        if (gradientColors.length < 2) {
          console.warn(this.pluginName, "渐变颜色配置gradientColors异常");
        } else {
          gradientColors.forEach(function(item) {
            gradientStyle.addColorStop(item.start, item.color);
          });
          fStyle = gradientStyle;
        }
      }
      return fStyle;
    }
  }, {
    key: "drawLinePath",
    value: function drawLinePath() {
      this.clearCanvas();
      var ctx = this.canvas.getContext("2d");
      var xData = this.xData, yData = this.yData;
      var x, y;
      var i = 0;
      var _this$config4 = this.config, lineWidth = _this$config4.lineWidth, alpha = _this$config4.alpha, strokeStyle = _this$config4.strokeStyle;
      var fillStyle = this._getFillStyle(ctx);
      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = strokeStyle || fillStyle;
      ctx.fillStyle = fillStyle;
      ctx.moveTo(0, this.canvasHeight);
      x = xData[i];
      y = yData[i];
      while (x !== void 0 && y !== void 0) {
        ctx.lineTo(x, y);
        i++;
        x = xData[i];
        y = yData[i];
      }
      ctx.lineTo(this.canvasWidth, this.canvasHeight);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }
  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      this.canvas.width = this.canvasWidth;
      this.canvas.height = this.canvasHeight;
    }
  }, {
    key: "fixFloat",
    value: function fixFloat(_num, _length) {
      if (typeof _num === "number") {
        return parseFloat(_num.toFixed(_length));
      }
      return NaN;
    }
  }, {
    key: "render",
    value: function render() {
      return "";
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "heatmap";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        lineWidth: 0,
        dpi: 2,
        alpha: 0.7,
        gradient: [],
        gradientColors: [],
        strokeStyle: "",
        fillColor: "#FA1F41",
        height: 20,
        data: [],
        maxValue: 100,
        minValue: 0,
        maxLength: 400,
        mode: "activeShow"
      };
    }
  }]);
  return HeatMap2;
}(Plugin);
export {
  BasePlugin,
  CssFullScreen as CssFullscreenIcon,
  Danmu,
  DanmuIcon,
  DanmuPanel,
  DefaultPreset,
  DefaultPreset3 as DefaultPresetEn,
  Errors,
  events_exports as Events,
  Fullscreen as FullscreenIcon,
  HeatMap,
  I18N,
  InstManager,
  DefaultPreset4 as LivePreset,
  Loading,
  DefaultPreset5 as MobilePreset,
  Play as PlayIcon,
  Plugin,
  Progress,
  STATES,
  STATE_CLASS,
  Player as SimplePlayer,
  sniffer as Sniffer,
  Start,
  TextTrack,
  Time as TimeIcon,
  util as Util,
  Volume as VolumeIcon,
  PresetPlayer as default,
  jp as langJp,
  ZH as langZhCn,
  zhHk as langZhHk
};
/*! Bundled license information:

danmu.js/dist/index.js:
  (*! Built @Thu, 14 Sep 2023 04:46:00 GMT *)
*/
//# sourceMappingURL=xgplayer.js.map
