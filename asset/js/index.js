!(function (t) {
    var e = {};
    function n(r) {
        if (e[r]) return e[r].exports;
        var o = (e[r] = { i: r, l: !1, exports: {} });
        return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
        }),
        (n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var o in t)
                    n.d(
                        r,
                        o,
                        function (e) {
                            return t[e];
                        }.bind(null, o)
                    );
            return r;
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ""),
        n((n.s = 4));
})([
    function (t, e, n) {
        (function (t) {
            var n, r, o, i;
            function a(t) {
                return (a =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            (i = function () {
                return (function (t) {
                    var e = {};
                    function n(r) {
                        if (e[r]) return e[r].exports;
                        var o = (e[r] = { exports: {}, id: r, loaded: !1 });
                        return t[r].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports;
                    }
                    return (n.m = t), (n.c = e), (n.p = "http://localhost:8080/dist"), n(0);
                })([
                    function (t, e, n) {
                        "function" != typeof Promise && (window.Promise = n(1));
                        var r = { version: "1.0.0", BaseTransition: n(4), BaseView: n(6), BaseCache: n(8), Dispatcher: n(7), HistoryManager: n(9), Pjax: n(10), Prefetch: n(13), Utils: n(5) };
                        t.exports = r;
                    },
                    function (t, e, n) {
                        (function (e) {
                            !(function (n) {
                                var r = setTimeout;
                                function o() {}
                                var i =
                                        ("function" == typeof e && e) ||
                                        function (t) {
                                            r(t, 0);
                                        },
                                    s = function (t) {
                                        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
                                    };
                                function u(t) {
                                    if ("object" !== a(this)) throw new TypeError("Promises must be constructed via new");
                                    if ("function" != typeof t) throw new TypeError("not a function");
                                    (this._state = 0), (this._handled = !1), (this._value = void 0), (this._deferreds = []), p(t, this);
                                }
                                function c(t, e) {
                                    for (; 3 === t._state; ) t = t._value;
                                    0 !== t._state
                                        ? ((t._handled = !0),
                                          i(function () {
                                              var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                                              if (null !== n) {
                                                  var r;
                                                  try {
                                                      r = n(t._value);
                                                  } catch (t) {
                                                      return void f(e.promise, t);
                                                  }
                                                  l(e.promise, r);
                                              } else (1 === t._state ? l : f)(e.promise, t._value);
                                          }))
                                        : t._deferreds.push(e);
                                }
                                function l(t, e) {
                                    try {
                                        if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                                        if (e && ("object" === a(e) || "function" == typeof e)) {
                                            var n = e.then;
                                            if (e instanceof u) return (t._state = 3), (t._value = e), void d(t);
                                            if ("function" == typeof n)
                                                return void p(
                                                    ((r = n),
                                                    (o = e),
                                                    function () {
                                                        r.apply(o, arguments);
                                                    }),
                                                    t
                                                );
                                        }
                                        (t._state = 1), (t._value = e), d(t);
                                    } catch (e) {
                                        f(t, e);
                                    }
                                    var r, o;
                                }
                                function f(t, e) {
                                    (t._state = 2), (t._value = e), d(t);
                                }
                                function d(t) {
                                    2 === t._state &&
                                        0 === t._deferreds.length &&
                                        i(function () {
                                            t._handled || s(t._value);
                                        });
                                    for (var e = 0, n = t._deferreds.length; e < n; e++) c(t, t._deferreds[e]);
                                    t._deferreds = null;
                                }
                                function h(t, e, n) {
                                    (this.onFulfilled = "function" == typeof t ? t : null), (this.onRejected = "function" == typeof e ? e : null), (this.promise = n);
                                }
                                function p(t, e) {
                                    var n = !1;
                                    try {
                                        t(
                                            function (t) {
                                                n || ((n = !0), l(e, t));
                                            },
                                            function (t) {
                                                n || ((n = !0), f(e, t));
                                            }
                                        );
                                    } catch (t) {
                                        if (n) return;
                                        (n = !0), f(e, t);
                                    }
                                }
                                (u.prototype.catch = function (t) {
                                    return this.then(null, t);
                                }),
                                    (u.prototype.then = function (t, e) {
                                        var n = new this.constructor(o);
                                        return c(this, new h(t, e, n)), n;
                                    }),
                                    (u.all = function (t) {
                                        var e = Array.prototype.slice.call(t);
                                        return new u(function (t, n) {
                                            if (0 === e.length) return t([]);
                                            var r = e.length;
                                            function o(i, s) {
                                                try {
                                                    if (s && ("object" === a(s) || "function" == typeof s)) {
                                                        var u = s.then;
                                                        if ("function" == typeof u)
                                                            return void u.call(
                                                                s,
                                                                function (t) {
                                                                    o(i, t);
                                                                },
                                                                n
                                                            );
                                                    }
                                                    (e[i] = s), 0 == --r && t(e);
                                                } catch (t) {
                                                    n(t);
                                                }
                                            }
                                            for (var i = 0; i < e.length; i++) o(i, e[i]);
                                        });
                                    }),
                                    (u.resolve = function (t) {
                                        return t && "object" === a(t) && t.constructor === u
                                            ? t
                                            : new u(function (e) {
                                                  e(t);
                                              });
                                    }),
                                    (u.reject = function (t) {
                                        return new u(function (e, n) {
                                            n(t);
                                        });
                                    }),
                                    (u.race = function (t) {
                                        return new u(function (e, n) {
                                            for (var r = 0, o = t.length; r < o; r++) t[r].then(e, n);
                                        });
                                    }),
                                    (u._setImmediateFn = function (t) {
                                        i = t;
                                    }),
                                    (u._setUnhandledRejectionFn = function (t) {
                                        s = t;
                                    }),
                                    void 0 !== t && t.exports ? (t.exports = u) : n.Promise || (n.Promise = u);
                            })(this);
                        }.call(e, n(2).setImmediate));
                    },
                    function (t, e, n) {
                        (function (t, r) {
                            var o = n(3).nextTick,
                                i = Function.prototype.apply,
                                a = Array.prototype.slice,
                                s = {},
                                u = 0;
                            function c(t, e) {
                                (this._id = t), (this._clearFn = e);
                            }
                            (e.setTimeout = function () {
                                return new c(i.call(setTimeout, window, arguments), clearTimeout);
                            }),
                                (e.setInterval = function () {
                                    return new c(i.call(setInterval, window, arguments), clearInterval);
                                }),
                                (e.clearTimeout = e.clearInterval = function (t) {
                                    t.close();
                                }),
                                (c.prototype.unref = c.prototype.ref = function () {}),
                                (c.prototype.close = function () {
                                    this._clearFn.call(window, this._id);
                                }),
                                (e.enroll = function (t, e) {
                                    clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
                                }),
                                (e.unenroll = function (t) {
                                    clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
                                }),
                                (e._unrefActive = e.active = function (t) {
                                    clearTimeout(t._idleTimeoutId);
                                    var e = t._idleTimeout;
                                    e >= 0 &&
                                        (t._idleTimeoutId = setTimeout(function () {
                                            t._onTimeout && t._onTimeout();
                                        }, e));
                                }),
                                (e.setImmediate =
                                    "function" == typeof t
                                        ? t
                                        : function (t) {
                                              var n = u++,
                                                  r = !(arguments.length < 2) && a.call(arguments, 1);
                                              return (
                                                  (s[n] = !0),
                                                  o(function () {
                                                      s[n] && (r ? t.apply(null, r) : t.call(null), e.clearImmediate(n));
                                                  }),
                                                  n
                                              );
                                          }),
                                (e.clearImmediate =
                                    "function" == typeof r
                                        ? r
                                        : function (t) {
                                              delete s[t];
                                          });
                        }.call(e, n(2).setImmediate, n(2).clearImmediate));
                    },
                    function (t, e) {
                        var n,
                            r,
                            o = (t.exports = {});
                        !(function () {
                            try {
                                n = setTimeout;
                            } catch (t) {
                                n = function () {
                                    throw new Error("setTimeout is not defined");
                                };
                            }
                            try {
                                r = clearTimeout;
                            } catch (t) {
                                r = function () {
                                    throw new Error("clearTimeout is not defined");
                                };
                            }
                        })();
                        var i,
                            a = [],
                            s = !1,
                            u = -1;
                        function c() {
                            s && i && ((s = !1), i.length ? (a = i.concat(a)) : (u = -1), a.length && l());
                        }
                        function l() {
                            if (!s) {
                                var t = n(c);
                                s = !0;
                                for (var e = a.length; e; ) {
                                    for (i = a, a = []; ++u < e; ) i && i[u].run();
                                    (u = -1), (e = a.length);
                                }
                                (i = null), (s = !1), r(t);
                            }
                        }
                        function f(t, e) {
                            (this.fun = t), (this.array = e);
                        }
                        function d() {}
                        (o.nextTick = function (t) {
                            var e = new Array(arguments.length - 1);
                            if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                            a.push(new f(t, e)), 1 !== a.length || s || n(l, 0);
                        }),
                            (f.prototype.run = function () {
                                this.fun.apply(null, this.array);
                            }),
                            (o.title = "browser"),
                            (o.browser = !0),
                            (o.env = {}),
                            (o.argv = []),
                            (o.version = ""),
                            (o.versions = {}),
                            (o.on = d),
                            (o.addListener = d),
                            (o.once = d),
                            (o.off = d),
                            (o.removeListener = d),
                            (o.removeAllListeners = d),
                            (o.emit = d),
                            (o.binding = function (t) {
                                throw new Error("process.binding is not supported");
                            }),
                            (o.cwd = function () {
                                return "/";
                            }),
                            (o.chdir = function (t) {
                                throw new Error("process.chdir is not supported");
                            }),
                            (o.umask = function () {
                                return 0;
                            });
                    },
                    function (t, e, n) {
                        var r = n(5),
                            o = {
                                oldContainer: void 0,
                                newContainer: void 0,
                                newContainerLoading: void 0,
                                extend: function (t) {
                                    return r.extend(this, t);
                                },
                                init: function (t, e) {
                                    var n = this;
                                    return (
                                        (this.oldContainer = t),
                                        (this._newContainerPromise = e),
                                        (this.deferred = r.deferred()),
                                        (this.newContainerReady = r.deferred()),
                                        (this.newContainerLoading = this.newContainerReady.promise),
                                        this.start(),
                                        this._newContainerPromise.then(function (t) {
                                            (n.newContainer = t), n.newContainerReady.resolve();
                                        }),
                                        this.deferred.promise
                                    );
                                },
                                done: function () {
                                    this.oldContainer.parentNode.removeChild(this.oldContainer), (this.newContainer.style.visibility = "visible"), this.deferred.resolve();
                                },
                                start: function () {},
                            };
                        t.exports = o;
                    },
                    function (t, e) {
                        var n = {
                            getCurrentUrl: function () {
                                return window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
                            },
                            cleanLink: function (t) {
                                return t.replace(/#.*/, "");
                            },
                            xhrTimeout: 5e3,
                            xhr: function (t) {
                                var e = this.deferred(),
                                    n = new XMLHttpRequest();
                                return (
                                    (n.onreadystatechange = function () {
                                        if (4 === n.readyState) return 200 === n.status ? e.resolve(n.responseText) : e.reject(new Error("xhr: HTTP code is not 200"));
                                    }),
                                    (n.ontimeout = function () {
                                        return e.reject(new Error("xhr: Timeout exceeded"));
                                    }),
                                    n.open("GET", t),
                                    (n.timeout = this.xhrTimeout),
                                    n.setRequestHeader("x-barba", "yes"),
                                    n.send(),
                                    e.promise
                                );
                            },
                            extend: function (t, e) {
                                var n = Object.create(t);
                                for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
                                return n;
                            },
                            deferred: function () {
                                return new (function () {
                                    (this.resolve = null),
                                        (this.reject = null),
                                        (this.promise = new Promise(
                                            function (t, e) {
                                                (this.resolve = t), (this.reject = e);
                                            }.bind(this)
                                        ));
                                })();
                            },
                            getPort: function (t) {
                                var e = void 0 !== t ? t : window.location.port,
                                    n = window.location.protocol;
                                return "" != e ? parseInt(e) : "http:" === n ? 80 : "https:" === n ? 443 : void 0;
                            },
                        };
                        t.exports = n;
                    },
                    function (t, e, n) {
                        var r = n(7),
                            o = n(5),
                            i = {
                                namespace: null,
                                extend: function (t) {
                                    return o.extend(this, t);
                                },
                                init: function () {
                                    var t = this;
                                    r.on("initStateChange", function (e, n) {
                                        n && n.namespace === t.namespace && t.onLeave();
                                    }),
                                        r.on("newPageReady", function (e, n, r) {
                                            (t.container = r), e.namespace === t.namespace && t.onEnter();
                                        }),
                                        r.on("transitionCompleted", function (e, n) {
                                            e.namespace === t.namespace && t.onEnterCompleted(), n && n.namespace === t.namespace && t.onLeaveCompleted();
                                        });
                                },
                                onEnter: function () {},
                                onEnterCompleted: function () {},
                                onLeave: function () {},
                                onLeaveCompleted: function () {},
                            };
                        t.exports = i;
                    },
                    function (t, e) {
                        var n = {
                            events: {},
                            on: function (t, e) {
                                (this.events[t] = this.events[t] || []), this.events[t].push(e);
                            },
                            off: function (t, e) {
                                t in this.events != 0 && this.events[t].splice(this.events[t].indexOf(e), 1);
                            },
                            trigger: function (t) {
                                if (t in this.events != 0) for (var e = 0; e < this.events[t].length; e++) this.events[t][e].apply(this, Array.prototype.slice.call(arguments, 1));
                            },
                        };
                        t.exports = n;
                    },
                    function (t, e, n) {
                        var r = n(5),
                            o = {
                                data: {},
                                extend: function (t) {
                                    return r.extend(this, t);
                                },
                                set: function (t, e) {
                                    this.data[t] = e;
                                },
                                get: function (t) {
                                    return this.data[t];
                                },
                                reset: function () {
                                    this.data = {};
                                },
                            };
                        t.exports = o;
                    },
                    function (t, e) {
                        var n = {
                            history: [],
                            add: function (t, e) {
                                e || (e = void 0), this.history.push({ url: t, namespace: e });
                            },
                            currentStatus: function () {
                                return this.history[this.history.length - 1];
                            },
                            prevStatus: function () {
                                var t = this.history;
                                return t.length < 2 ? null : t[t.length - 2];
                            },
                        };
                        t.exports = n;
                    },
                    function (t, e, n) {
                        var r = n(5),
                            o = n(7),
                            i = n(11),
                            a = n(8),
                            s = n(9),
                            u = {
                                Dom: n(12),
                                History: s,
                                Cache: a,
                                cacheEnabled: !0,
                                transitionProgress: !1,
                                ignoreClassLink: "no-barba",
                                start: function () {
                                    this.init();
                                },
                                init: function () {
                                    var t = this.Dom.getContainer();
                                    this.Dom.getWrapper().setAttribute("aria-live", "polite"),
                                        this.History.add(this.getCurrentUrl(), this.Dom.getNamespace(t)),
                                        o.trigger("initStateChange", this.History.currentStatus()),
                                        o.trigger("newPageReady", this.History.currentStatus(), {}, t, this.Dom.currentHTML),
                                        o.trigger("transitionCompleted", this.History.currentStatus()),
                                        this.bindEvents();
                                },
                                bindEvents: function () {
                                    document.addEventListener("click", this.onLinkClick.bind(this)), window.addEventListener("popstate", this.onStateChange.bind(this));
                                },
                                getCurrentUrl: function () {
                                    return r.cleanLink(r.getCurrentUrl());
                                },
                                goTo: function (t) {
                                    window.history.pushState(null, null, t), this.onStateChange();
                                },
                                forceGoTo: function (t) {
                                    window.location = t;
                                },
                                load: function (t) {
                                    var e,
                                        n = r.deferred(),
                                        o = this;
                                    return (
                                        (e = this.Cache.get(t)) || ((e = r.xhr(t)), this.Cache.set(t, e)),
                                        e.then(
                                            function (t) {
                                                var e = o.Dom.parseResponse(t);
                                                o.Dom.putContainer(e), o.cacheEnabled || o.Cache.reset(), n.resolve(e);
                                            },
                                            function () {
                                                o.forceGoTo(t), n.reject();
                                            }
                                        ),
                                        n.promise
                                    );
                                },
                                getHref: function (t) {
                                    if (t) return t.getAttribute && "string" == typeof t.getAttribute("xlink:href") ? t.getAttribute("xlink:href") : "string" == typeof t.href ? t.href : void 0;
                                },
                                onLinkClick: function (t) {
                                    for (var e = t.target; e && !this.getHref(e); ) e = e.parentNode;
                                    if (this.preventCheck(t, e)) {
                                        t.stopPropagation(), t.preventDefault(), o.trigger("linkClicked", e, t);
                                        var n = this.getHref(e);
                                        this.goTo(n);
                                    }
                                },
                                preventCheck: function (t, e) {
                                    if (!window.history.pushState) return !1;
                                    var n = this.getHref(e);
                                    return !(
                                        !e ||
                                        !n ||
                                        t.which > 1 ||
                                        t.metaKey ||
                                        t.ctrlKey ||
                                        t.shiftKey ||
                                        t.altKey ||
                                        (e.target && "_blank" === e.target) ||
                                        window.location.protocol !== e.protocol ||
                                        window.location.hostname !== e.hostname ||
                                        r.getPort() !== r.getPort(e.port) ||
                                        n.indexOf("#") > -1 ||
                                        (e.getAttribute && "string" == typeof e.getAttribute("download")) ||
                                        r.cleanLink(n) == r.cleanLink(location.href) ||
                                        e.classList.contains(this.ignoreClassLink)
                                    );
                                },
                                getTransition: function () {
                                    return i;
                                },
                                onStateChange: function () {
                                    var t = this.getCurrentUrl();
                                    if ((this.transitionProgress && this.forceGoTo(t), this.History.currentStatus().url === t)) return !1;
                                    this.History.add(t);
                                    var e = this.load(t),
                                        n = Object.create(this.getTransition());
                                    (this.transitionProgress = !0), o.trigger("initStateChange", this.History.currentStatus(), this.History.prevStatus());
                                    var r = n.init(this.Dom.getContainer(), e);
                                    e.then(this.onNewContainerLoaded.bind(this)), r.then(this.onTransitionEnd.bind(this));
                                },
                                onNewContainerLoaded: function (t) {
                                    (this.History.currentStatus().namespace = this.Dom.getNamespace(t)), o.trigger("newPageReady", this.History.currentStatus(), this.History.prevStatus(), t, this.Dom.currentHTML);
                                },
                                onTransitionEnd: function () {
                                    (this.transitionProgress = !1), o.trigger("transitionCompleted", this.History.currentStatus(), this.History.prevStatus());
                                },
                            };
                        t.exports = u;
                    },
                    function (t, e, n) {
                        var r = n(4).extend({
                            start: function () {
                                this.newContainerLoading.then(this.finish.bind(this));
                            },
                            finish: function () {
                                (document.body.scrollTop = 0), this.done();
                            },
                        });
                        t.exports = r;
                    },
                    function (t, e) {
                        var n = {
                            dataNamespace: "namespace",
                            wrapperId: "barba-wrapper",
                            containerClass: "barba-container",
                            currentHTML: document.documentElement.innerHTML,
                            parseResponse: function (t) {
                                this.currentHTML = t;
                                var e = document.createElement("div");
                                e.innerHTML = t;
                                var n = e.querySelector("title");
                                return n && (document.title = n.textContent), this.getContainer(e);
                            },
                            getWrapper: function () {
                                var t = document.getElementById(this.wrapperId);
                                if (!t) throw new Error("Barba.js: wrapper not found!");
                                return t;
                            },
                            getContainer: function (t) {
                                if ((t || (t = document.body), !t)) throw new Error("Barba.js: DOM not ready!");
                                var e = this.parseContainer(t);
                                if ((e && e.jquery && (e = e[0]), !e)) throw new Error("Barba.js: no container found");
                                return e;
                            },
                            getNamespace: function (t) {
                                return t && t.dataset ? t.dataset[this.dataNamespace] : t ? t.getAttribute("data-" + this.dataNamespace) : null;
                            },
                            putContainer: function (t) {
                                (t.style.visibility = "hidden"), this.getWrapper().appendChild(t);
                            },
                            parseContainer: function (t) {
                                return t.querySelector("." + this.containerClass);
                            },
                        };
                        t.exports = n;
                    },
                    function (t, e, n) {
                        var r = n(5),
                            o = n(10),
                            i = {
                                ignoreClassLink: "no-barba-prefetch",
                                init: function () {
                                    if (!window.history.pushState) return !1;
                                    document.body.addEventListener("mouseover", this.onLinkEnter.bind(this)), document.body.addEventListener("touchstart", this.onLinkEnter.bind(this));
                                },
                                onLinkEnter: function (t) {
                                    for (var e = t.target; e && !o.getHref(e); ) e = e.parentNode;
                                    if (e && !e.classList.contains(this.ignoreClassLink)) {
                                        var n = o.getHref(e);
                                        if (o.preventCheck(t, e) && !o.Cache.get(n)) {
                                            var i = r.xhr(n);
                                            o.Cache.set(n, i);
                                        }
                                    }
                                },
                            };
                        t.exports = i;
                    },
                ]);
            }),
                "object" === a(e) && "object" === a(t) ? (t.exports = i()) : ((r = []), void 0 === (o = "function" == typeof (n = i) ? n.apply(e, r) : n) || (t.exports = o));
        }.call(this, n(3)(t)));
    },
    function (t, e, n) {
        "use strict";
        /*! npm.im/object-fit-images 3.2.4 */ var r = "bfred-it:object-fit-images",
            o = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
            i = "undefined" == typeof Image ? { style: { "object-position": 1 } } : new Image(),
            a = "object-fit" in i.style,
            s = "object-position" in i.style,
            u = "background-size" in i.style,
            c = "string" == typeof i.currentSrc,
            l = i.getAttribute,
            f = i.setAttribute,
            d = !1;
        function h(t, e, n) {
            var r = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + (e || 1) + "' height='" + (n || 0) + "'%3E%3C/svg%3E";
            l.call(t, "src") !== r && f.call(t, "src", r);
        }
        function p(t, e) {
            t.naturalWidth ? e(t) : setTimeout(p, 100, t, e);
        }
        function g(t) {
            var e = (function (t) {
                    for (var e, n = getComputedStyle(t).fontFamily, r = {}; null !== (e = o.exec(n)); ) r[e[1]] = e[2];
                    return r;
                })(t),
                n = t[r];
            if (((e["object-fit"] = e["object-fit"] || "fill"), !n.img)) {
                if ("fill" === e["object-fit"]) return;
                if (!n.skipTest && a && !e["object-position"]) return;
            }
            if (!n.img) {
                (n.img = new Image(t.width, t.height)),
                    (n.img.srcset = l.call(t, "data-ofi-srcset") || t.srcset),
                    (n.img.src = l.call(t, "data-ofi-src") || t.src),
                    f.call(t, "data-ofi-src", t.src),
                    t.srcset && f.call(t, "data-ofi-srcset", t.srcset),
                    h(t, t.naturalWidth || t.width, t.naturalHeight || t.height),
                    t.srcset && (t.srcset = "");
                try {
                    !(function (t) {
                        var e = {
                            get: function (e) {
                                return t[r].img[e || "src"];
                            },
                            set: function (e, n) {
                                return (t[r].img[n || "src"] = e), f.call(t, "data-ofi-" + n, e), g(t), e;
                            },
                        };
                        Object.defineProperty(t, "src", e),
                            Object.defineProperty(t, "currentSrc", {
                                get: function () {
                                    return e.get("currentSrc");
                                },
                            }),
                            Object.defineProperty(t, "srcset", {
                                get: function () {
                                    return e.get("srcset");
                                },
                                set: function (t) {
                                    return e.set(t, "srcset");
                                },
                            });
                    })(t);
                } catch (t) {
                    window.console && console.warn("https://bit.ly/ofi-old-browser");
                }
            }
            !(function (t) {
                if (t.srcset && !c && window.picturefill) {
                    var e = window.picturefill._;
                    (t[e.ns] && t[e.ns].evaled) || e.fillImg(t, { reselect: !0 }), t[e.ns].curSrc || ((t[e.ns].supported = !1), e.fillImg(t, { reselect: !0 })), (t.currentSrc = t[e.ns].curSrc || t.src);
                }
            })(n.img),
                (t.style.backgroundImage = 'url("' + (n.img.currentSrc || n.img.src).replace(/"/g, '\\"') + '")'),
                (t.style.backgroundPosition = e["object-position"] || "center"),
                (t.style.backgroundRepeat = "no-repeat"),
                (t.style.backgroundOrigin = "content-box"),
                /scale-down/.test(e["object-fit"])
                    ? p(n.img, function () {
                          n.img.naturalWidth > t.width || n.img.naturalHeight > t.height ? (t.style.backgroundSize = "contain") : (t.style.backgroundSize = "auto");
                      })
                    : (t.style.backgroundSize = e["object-fit"].replace("none", "auto").replace("fill", "100% 100%")),
                p(n.img, function (e) {
                    h(t, e.naturalWidth, e.naturalHeight);
                });
        }
        function m(t, e) {
            var n = !d && !t;
            if (((e = e || {}), (t = t || "img"), (s && !e.skipTest) || !u)) return !1;
            "img" === t ? (t = document.getElementsByTagName("img")) : "string" == typeof t ? (t = document.querySelectorAll(t)) : "length" in t || (t = [t]);
            for (var o = 0; o < t.length; o++) (t[o][r] = t[o][r] || { skipTest: e.skipTest }), g(t[o]);
            n &&
                (document.body.addEventListener(
                    "load",
                    function (t) {
                        "IMG" === t.target.tagName && m(t.target, { skipTest: e.skipTest });
                    },
                    !0
                ),
                (d = !0),
                (t = "img")),
                e.watchMQ && window.addEventListener("resize", m.bind(null, t, { skipTest: e.skipTest }));
        }
        (m.supportsObjectFit = a),
            (m.supportsObjectPosition = s),
            (function () {
                function t(t, e) {
                    return t[r] && t[r].img && ("src" === e || "srcset" === e) ? t[r].img : t;
                }
                s ||
                    ((HTMLImageElement.prototype.getAttribute = function (e) {
                        return l.call(t(this, e), e);
                    }),
                    (HTMLImageElement.prototype.setAttribute = function (e, n) {
                        return f.call(t(this, e), e, String(n));
                    }));
            })(),
            (t.exports = m);
    },
    function (t, e) {
        function n(t) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        !(function () {
            "use strict";
            if ("object" === ("undefined" == typeof window ? "undefined" : n(window)))
                if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)
                    "isIntersecting" in window.IntersectionObserverEntry.prototype ||
                        Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                            get: function () {
                                return this.intersectionRatio > 0;
                            },
                        });
                else {
                    var t = window.document,
                        e = [],
                        r = null,
                        o = null;
                    (a.prototype.THROTTLE_TIMEOUT = 100),
                        (a.prototype.POLL_INTERVAL = null),
                        (a.prototype.USE_MUTATION_OBSERVER = !0),
                        (a._setupCrossOriginUpdater = function () {
                            return (
                                r ||
                                    (r = function (t, n) {
                                        (o = t && n ? l(t, n) : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 }),
                                            e.forEach(function (t) {
                                                t._checkForIntersections();
                                            });
                                    }),
                                r
                            );
                        }),
                        (a._resetCrossOriginUpdater = function () {
                            (r = null), (o = null);
                        }),
                        (a.prototype.observe = function (t) {
                            if (
                                !this._observationTargets.some(function (e) {
                                    return e.element == t;
                                })
                            ) {
                                if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
                                this._registerInstance(), this._observationTargets.push({ element: t, entry: null }), this._monitorIntersections(t.ownerDocument), this._checkForIntersections();
                            }
                        }),
                        (a.prototype.unobserve = function (t) {
                            (this._observationTargets = this._observationTargets.filter(function (e) {
                                return e.element != t;
                            })),
                                this._unmonitorIntersections(t.ownerDocument),
                                0 == this._observationTargets.length && this._unregisterInstance();
                        }),
                        (a.prototype.disconnect = function () {
                            (this._observationTargets = []), this._unmonitorAllIntersections(), this._unregisterInstance();
                        }),
                        (a.prototype.takeRecords = function () {
                            var t = this._queuedEntries.slice();
                            return (this._queuedEntries = []), t;
                        }),
                        (a.prototype._initThresholds = function (t) {
                            var e = t || [0];
                            return (
                                Array.isArray(e) || (e = [e]),
                                e.sort().filter(function (t, e, n) {
                                    if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                                    return t !== n[e - 1];
                                })
                            );
                        }),
                        (a.prototype._parseRootMargin = function (t) {
                            var e = (t || "0px").split(/\s+/).map(function (t) {
                                var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                                if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                                return { value: parseFloat(e[1]), unit: e[2] };
                            });
                            return (e[1] = e[1] || e[0]), (e[2] = e[2] || e[0]), (e[3] = e[3] || e[1]), e;
                        }),
                        (a.prototype._monitorIntersections = function (e) {
                            var n = e.defaultView;
                            if (n && -1 == this._monitoringDocuments.indexOf(e)) {
                                var r = this._checkForIntersections,
                                    o = null,
                                    i = null;
                                if (
                                    (this.POLL_INTERVAL
                                        ? (o = n.setInterval(r, this.POLL_INTERVAL))
                                        : (s(n, "resize", r, !0),
                                          s(e, "scroll", r, !0),
                                          this.USE_MUTATION_OBSERVER && "MutationObserver" in n && (i = new n.MutationObserver(r)).observe(e, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })),
                                    this._monitoringDocuments.push(e),
                                    this._monitoringUnsubscribes.push(function () {
                                        var t = e.defaultView;
                                        t && (o && t.clearInterval(o), u(t, "resize", r, !0)), u(e, "scroll", r, !0), i && i.disconnect();
                                    }),
                                    e != ((this.root && this.root.ownerDocument) || t))
                                ) {
                                    var a = h(e);
                                    a && this._monitorIntersections(a.ownerDocument);
                                }
                            }
                        }),
                        (a.prototype._unmonitorIntersections = function (e) {
                            var n = this._monitoringDocuments.indexOf(e);
                            if (-1 != n) {
                                var r = (this.root && this.root.ownerDocument) || t;
                                if (
                                    !this._observationTargets.some(function (t) {
                                        var n = t.element.ownerDocument;
                                        if (n == e) return !0;
                                        for (; n && n != r; ) {
                                            var o = h(n);
                                            if ((n = o && o.ownerDocument) == e) return !0;
                                        }
                                        return !1;
                                    })
                                ) {
                                    var o = this._monitoringUnsubscribes[n];
                                    if ((this._monitoringDocuments.splice(n, 1), this._monitoringUnsubscribes.splice(n, 1), o(), e != r)) {
                                        var i = h(e);
                                        i && this._unmonitorIntersections(i.ownerDocument);
                                    }
                                }
                            }
                        }),
                        (a.prototype._unmonitorAllIntersections = function () {
                            var t = this._monitoringUnsubscribes.slice(0);
                            (this._monitoringDocuments.length = 0), (this._monitoringUnsubscribes.length = 0);
                            for (var e = 0; e < t.length; e++) t[e]();
                        }),
                        (a.prototype._checkForIntersections = function () {
                            if (this.root || !r || o) {
                                var t = this._rootIsInDom(),
                                    e = t ? this._getRootRect() : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
                                this._observationTargets.forEach(function (n) {
                                    var o = n.element,
                                        a = c(o),
                                        s = this._rootContainsTarget(o),
                                        u = n.entry,
                                        l = t && s && this._computeTargetAndRootIntersection(o, a, e),
                                        f = (n.entry = new i({ time: window.performance && performance.now && performance.now(), target: o, boundingClientRect: a, rootBounds: r && !this.root ? null : e, intersectionRect: l }));
                                    u ? (t && s ? this._hasCrossedThreshold(u, f) && this._queuedEntries.push(f) : u && u.isIntersecting && this._queuedEntries.push(f)) : this._queuedEntries.push(f);
                                }, this),
                                    this._queuedEntries.length && this._callback(this.takeRecords(), this);
                            }
                        }),
                        (a.prototype._computeTargetAndRootIntersection = function (e, n, i) {
                            if ("none" != window.getComputedStyle(e).display) {
                                for (var a, s, u, f, h, p, g, m, v = n, y = d(e), b = !1; !b && y; ) {
                                    var w = null,
                                        _ = 1 == y.nodeType ? window.getComputedStyle(y) : {};
                                    if ("none" == _.display) return null;
                                    if (y == this.root || 9 == y.nodeType)
                                        if (((b = !0), y == this.root || y == t)) r && !this.root ? (!o || (0 == o.width && 0 == o.height) ? ((y = null), (w = null), (v = null)) : (w = o)) : (w = i);
                                        else {
                                            var E = d(y),
                                                x = E && c(E),
                                                T = E && this._computeTargetAndRootIntersection(E, x, i);
                                            x && T ? ((y = E), (w = l(x, T))) : ((y = null), (v = null));
                                        }
                                    else {
                                        var C = y.ownerDocument;
                                        y != C.body && y != C.documentElement && "visible" != _.overflow && (w = c(y));
                                    }
                                    if (
                                        (w &&
                                            ((a = w),
                                            (s = v),
                                            (u = void 0),
                                            (f = void 0),
                                            (h = void 0),
                                            (p = void 0),
                                            (g = void 0),
                                            (m = void 0),
                                            (u = Math.max(a.top, s.top)),
                                            (f = Math.min(a.bottom, s.bottom)),
                                            (h = Math.max(a.left, s.left)),
                                            (p = Math.min(a.right, s.right)),
                                            (m = f - u),
                                            (v = ((g = p - h) >= 0 && m >= 0 && { top: u, bottom: f, left: h, right: p, width: g, height: m }) || null)),
                                        !v)
                                    )
                                        break;
                                    y = y && d(y);
                                }
                                return v;
                            }
                        }),
                        (a.prototype._getRootRect = function () {
                            var e;
                            if (this.root) e = c(this.root);
                            else {
                                var n = t.documentElement,
                                    r = t.body;
                                e = { top: 0, left: 0, right: n.clientWidth || r.clientWidth, width: n.clientWidth || r.clientWidth, bottom: n.clientHeight || r.clientHeight, height: n.clientHeight || r.clientHeight };
                            }
                            return this._expandRectByRootMargin(e);
                        }),
                        (a.prototype._expandRectByRootMargin = function (t) {
                            var e = this._rootMarginValues.map(function (e, n) {
                                    return "px" == e.unit ? e.value : (e.value * (n % 2 ? t.width : t.height)) / 100;
                                }),
                                n = { top: t.top - e[0], right: t.right + e[1], bottom: t.bottom + e[2], left: t.left - e[3] };
                            return (n.width = n.right - n.left), (n.height = n.bottom - n.top), n;
                        }),
                        (a.prototype._hasCrossedThreshold = function (t, e) {
                            var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                                r = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                            if (n !== r)
                                for (var o = 0; o < this.thresholds.length; o++) {
                                    var i = this.thresholds[o];
                                    if (i == n || i == r || i < n != i < r) return !0;
                                }
                        }),
                        (a.prototype._rootIsInDom = function () {
                            return !this.root || f(t, this.root);
                        }),
                        (a.prototype._rootContainsTarget = function (e) {
                            return f(this.root || t, e) && (!this.root || this.root.ownerDocument == e.ownerDocument);
                        }),
                        (a.prototype._registerInstance = function () {
                            e.indexOf(this) < 0 && e.push(this);
                        }),
                        (a.prototype._unregisterInstance = function () {
                            var t = e.indexOf(this);
                            -1 != t && e.splice(t, 1);
                        }),
                        (window.IntersectionObserver = a),
                        (window.IntersectionObserverEntry = i);
                }
            function i(t) {
                (this.time = t.time),
                    (this.target = t.target),
                    (this.rootBounds = t.rootBounds),
                    (this.boundingClientRect = t.boundingClientRect),
                    (this.intersectionRect = t.intersectionRect || { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 }),
                    (this.isIntersecting = !!t.intersectionRect);
                var e = this.boundingClientRect,
                    n = e.width * e.height,
                    r = this.intersectionRect,
                    o = r.width * r.height;
                this.intersectionRatio = n ? Number((o / n).toFixed(4)) : this.isIntersecting ? 1 : 0;
            }
            function a(t, e) {
                var n,
                    r,
                    o,
                    i = e || {};
                if ("function" != typeof t) throw new Error("callback must be a function");
                if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
                (this._checkForIntersections =
                    ((n = this._checkForIntersections.bind(this)),
                    (r = this.THROTTLE_TIMEOUT),
                    (o = null),
                    function () {
                        o ||
                            (o = setTimeout(function () {
                                n(), (o = null);
                            }, r));
                    })),
                    (this._callback = t),
                    (this._observationTargets = []),
                    (this._queuedEntries = []),
                    (this._rootMarginValues = this._parseRootMargin(i.rootMargin)),
                    (this.thresholds = this._initThresholds(i.threshold)),
                    (this.root = i.root || null),
                    (this.rootMargin = this._rootMarginValues
                        .map(function (t) {
                            return t.value + t.unit;
                        })
                        .join(" ")),
                    (this._monitoringDocuments = []),
                    (this._monitoringUnsubscribes = []);
            }
            function s(t, e, n, r) {
                "function" == typeof t.addEventListener ? t.addEventListener(e, n, r || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n);
            }
            function u(t, e, n, r) {
                "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, r || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n);
            }
            function c(t) {
                var e;
                try {
                    e = t.getBoundingClientRect();
                } catch (t) {}
                return e
                    ? ((e.width && e.height) || (e = { top: e.top, right: e.right, bottom: e.bottom, left: e.left, width: e.right - e.left, height: e.bottom - e.top }), e)
                    : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
            }
            function l(t, e) {
                var n = e.top - t.top,
                    r = e.left - t.left;
                return { top: n, left: r, height: e.height, width: e.width, bottom: n + e.height, right: r + e.width };
            }
            function f(t, e) {
                for (var n = e; n; ) {
                    if (n == t) return !0;
                    n = d(n);
                }
                return !1;
            }
            function d(e) {
                var n = e.parentNode;
                return 9 == e.nodeType && e != t ? h(e) : n && 11 == n.nodeType && n.host ? n.host : n && n.assignedSlot ? n.assignedSlot.parentNode : n;
            }
            function h(t) {
                try {
                    return (t.defaultView && t.defaultView.frameElement) || null;
                } catch (t) {
                    return null;
                }
            }
        })();
    },
    function (t, e) {
        t.exports = function (t) {
            return (
                t.webpackPolyfill ||
                    ((t.deprecate = function () {}),
                    (t.paths = []),
                    t.children || (t.children = []),
                    Object.defineProperty(t, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return t.l;
                        },
                    }),
                    Object.defineProperty(t, "id", {
                        enumerable: !0,
                        get: function () {
                            return t.i;
                        },
                    }),
                    (t.webpackPolyfill = 1)),
                t
            );
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = {
                w: window,
                d: document,
                top: document.getElementById("js_top"),
                about: document.getElementById("js_about"),
                header: document.getElementById("js_header"),
                hamburgerButton: document.getElementById("js_hamburgerMenu"),
                isMobile: navigator.userAgent.match(/iPhone|Android.+Mobile/),
                logoReload: function () {
                    o.getElementById("js_logo").addEventListener("click", function () {
                        "/" === location.pathname && location.reload();
                    });
                },
                querySliceCall: function (t) {
                    return [].slice.call(t);
                },
                setClass: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "add",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "is_intersection",
                        r = function (t) {
                            switch (e) {
                                case "add":
                                    t.classList.add(n);
                                    break;
                                case "remove":
                                    t.classList.remove(n);
                                    break;
                                case "toggle":
                                    t.classList.toggle(n);
                            }
                        };
                    "[object NodeList]" === {}.toString.call(t) || "[object Array]" === {}.toString.call(t)
                        ? [].slice.call(t).forEach(function (t) {
                              r(t);
                          })
                        : r(t);
                },
                checkElementType: function (t, e, n) {
                    "[object NodeList]" === {}.toString.call(t) || "[object Array]" === {}.toString.call(t) ? e(t) : n(t);
                },
                fadeClass: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "add",
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "remove",
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                        i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "0px",
                        a = function (o) {
                            "[object Array]" === {}.toString.call(o)
                                ? [].slice.call(o).forEach(function (o) {
                                      o.isIntersecting ? h(e !== t ? e : o.target, n) : h(e !== t ? e : o.target, r);
                                  })
                                : o.isIntersecting
                                ? h(e, n)
                                : h(e, r);
                        },
                        s = { root: o, rootMargin: i },
                        u = new IntersectionObserver(a, s),
                        c = function (t) {
                            [].slice.call(t).forEach(function (t) {
                                u.observe(t);
                            });
                        },
                        l = function (t) {
                            u.observe(t);
                        };
                    p(t, c, l);
                },
            },
            o = r.d,
            i = r.w,
            a = r.top,
            s = r.about,
            u = r.header,
            c = r.hamburgerButton,
            l = r.isMobile,
            f = r.logoReload,
            d = r.querySliceCall,
            h = r.setClass,
            p = r.checkElementType,
            g = r.fadeClass,
            m = n(1),
            v = n.n(m),
            y = { update: null, begin: null, loopBegin: null, changeBegin: null, change: null, changeComplete: null, loopComplete: null, complete: null, loop: 1, direction: "normal", autoplay: !0, timelineOffset: 0 },
            b = { duration: 1e3, delay: 0, endDelay: 0, easing: "easeOutElastic(1, .5)", round: 0 },
            w = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"],
            _ = { CSS: {}, springs: {} };
        function E(t, e, n) {
            return Math.min(Math.max(t, e), n);
        }
        function x(t, e) {
            return t.indexOf(e) > -1;
        }
        function T(t, e) {
            return t.apply(null, e);
        }
        var C = {
            arr: function (t) {
                return Array.isArray(t);
            },
            obj: function (t) {
                return x(Object.prototype.toString.call(t), "Object");
            },
            pth: function (t) {
                return C.obj(t) && t.hasOwnProperty("totalLength");
            },
            svg: function (t) {
                return t instanceof SVGElement;
            },
            inp: function (t) {
                return t instanceof HTMLInputElement;
            },
            dom: function (t) {
                return t.nodeType || C.svg(t);
            },
            str: function (t) {
                return "string" == typeof t;
            },
            fnc: function (t) {
                return "function" == typeof t;
            },
            und: function (t) {
                return void 0 === t;
            },
            hex: function (t) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
            },
            rgb: function (t) {
                return /^rgb/.test(t);
            },
            hsl: function (t) {
                return /^hsl/.test(t);
            },
            col: function (t) {
                return C.hex(t) || C.rgb(t) || C.hsl(t);
            },
            key: function (t) {
                return !y.hasOwnProperty(t) && !b.hasOwnProperty(t) && "targets" !== t && "keyframes" !== t;
            },
        };
        function I(t) {
            var e = /\(([^)]+)\)/.exec(t);
            return e
                ? e[1].split(",").map(function (t) {
                      return parseFloat(t);
                  })
                : [];
        }
        function j(t, e) {
            var n = I(t),
                r = E(C.und(n[0]) ? 1 : n[0], 0.1, 100),
                o = E(C.und(n[1]) ? 100 : n[1], 0.1, 100),
                i = E(C.und(n[2]) ? 10 : n[2], 0.1, 100),
                a = E(C.und(n[3]) ? 0 : n[3], 0.1, 100),
                s = Math.sqrt(o / r),
                u = i / (2 * Math.sqrt(o * r)),
                c = u < 1 ? s * Math.sqrt(1 - u * u) : 0,
                l = u < 1 ? (u * s - a) / c : -a + s;
            function f(t) {
                var n = e ? (e * t) / 1e3 : t;
                return (n = u < 1 ? Math.exp(-n * u * s) * (1 * Math.cos(c * n) + l * Math.sin(c * n)) : (1 + l * n) * Math.exp(-n * s)), 0 === t || 1 === t ? t : 1 - n;
            }
            return e
                ? f
                : function () {
                      var e = _.springs[t];
                      if (e) return e;
                      for (var n = 0, r = 0; ; )
                          if (1 === f((n += 1 / 6))) {
                              if (++r >= 16) break;
                          } else r = 0;
                      var o = n * (1 / 6) * 1e3;
                      return (_.springs[t] = o), o;
                  };
        }
        function L(t) {
            return (
                void 0 === t && (t = 10),
                function (e) {
                    return Math.ceil(E(e, 1e-6, 1) * t) * (1 / t);
                }
            );
        }
        var k,
            M,
            S = (function () {
                function t(t, e) {
                    return 1 - 3 * e + 3 * t;
                }
                function e(t, e) {
                    return 3 * e - 6 * t;
                }
                function n(t) {
                    return 3 * t;
                }
                function r(r, o, i) {
                    return ((t(o, i) * r + e(o, i)) * r + n(o)) * r;
                }
                function o(r, o, i) {
                    return 3 * t(o, i) * r * r + 2 * e(o, i) * r + n(o);
                }
                return function (t, e, n, i) {
                    if (0 <= t && t <= 1 && 0 <= n && n <= 1) {
                        var a = new Float32Array(11);
                        if (t !== e || n !== i) for (var s = 0; s < 11; ++s) a[s] = r(0.1 * s, t, n);
                        return function (o) {
                            return (t === e && n === i) || 0 === o || 1 === o ? o : r(u(o), e, i);
                        };
                    }
                    function u(e) {
                        for (var i = 0, s = 1; 10 !== s && a[s] <= e; ++s) i += 0.1;
                        --s;
                        var u = i + 0.1 * ((e - a[s]) / (a[s + 1] - a[s])),
                            c = o(u, t, n);
                        return c >= 0.001
                            ? (function (t, e, n, i) {
                                  for (var a = 0; a < 4; ++a) {
                                      var s = o(e, n, i);
                                      if (0 === s) return e;
                                      e -= (r(e, n, i) - t) / s;
                                  }
                                  return e;
                              })(e, u, t, n)
                            : 0 === c
                            ? u
                            : (function (t, e, n, o, i) {
                                  var a,
                                      s,
                                      u = 0;
                                  do {
                                      (a = r((s = e + (n - e) / 2), o, i) - t) > 0 ? (n = s) : (e = s);
                                  } while (Math.abs(a) > 1e-7 && ++u < 10);
                                  return s;
                              })(e, i, i + 0.1, t, n);
                    }
                };
            })(),
            O =
                ((k = {
                    linear: function () {
                        return function (t) {
                            return t;
                        };
                    },
                }),
                (M = {
                    Sine: function () {
                        return function (t) {
                            return 1 - Math.cos((t * Math.PI) / 2);
                        };
                    },
                    Circ: function () {
                        return function (t) {
                            return 1 - Math.sqrt(1 - t * t);
                        };
                    },
                    Back: function () {
                        return function (t) {
                            return t * t * (3 * t - 2);
                        };
                    },
                    Bounce: function () {
                        return function (t) {
                            for (var e, n = 4; t < ((e = Math.pow(2, --n)) - 1) / 11; );
                            return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
                        };
                    },
                    Elastic: function (t, e) {
                        void 0 === t && (t = 1), void 0 === e && (e = 0.5);
                        var n = E(t, 1, 10),
                            r = E(e, 0.1, 2);
                        return function (t) {
                            return 0 === t || 1 === t ? t : -n * Math.pow(2, 10 * (t - 1)) * Math.sin(((t - 1 - (r / (2 * Math.PI)) * Math.asin(1 / n)) * (2 * Math.PI)) / r);
                        };
                    },
                }),
                ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (t, e) {
                    M[t] = function () {
                        return function (t) {
                            return Math.pow(t, e + 2);
                        };
                    };
                }),
                Object.keys(M).forEach(function (t) {
                    var e = M[t];
                    (k["easeIn" + t] = e),
                        (k["easeOut" + t] = function (t, n) {
                            return function (r) {
                                return 1 - e(t, n)(1 - r);
                            };
                        }),
                        (k["easeInOut" + t] = function (t, n) {
                            return function (r) {
                                return r < 0.5 ? e(t, n)(2 * r) / 2 : 1 - e(t, n)(-2 * r + 2) / 2;
                            };
                        });
                }),
                k);
        function P(t, e) {
            if (C.fnc(t)) return t;
            var n = t.split("(")[0],
                r = O[n],
                o = I(t);
            switch (n) {
                case "spring":
                    return j(t, e);
                case "cubicBezier":
                    return T(S, o);
                case "steps":
                    return T(L, o);
                default:
                    return T(r, o);
            }
        }
        function A(t) {
            try {
                return document.querySelectorAll(t);
            } catch (t) {
                return;
            }
        }
        function R(t, e) {
            for (var n = t.length, r = arguments.length >= 2 ? arguments[1] : void 0, o = [], i = 0; i < n; i++)
                if (i in t) {
                    var a = t[i];
                    e.call(r, a, i, t) && o.push(a);
                }
            return o;
        }
        function B(t) {
            return t.reduce(function (t, e) {
                return t.concat(C.arr(e) ? B(e) : e);
            }, []);
        }
        function D(t) {
            return C.arr(t) ? t : (C.str(t) && (t = A(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t]);
        }
        function H(t, e) {
            return t.some(function (t) {
                return t === e;
            });
        }
        function N(t) {
            var e = {};
            for (var n in t) e[n] = t[n];
            return e;
        }
        function q(t, e) {
            var n = N(t);
            for (var r in t) n[r] = e.hasOwnProperty(r) ? e[r] : t[r];
            return n;
        }
        function F(t, e) {
            var n = N(t);
            for (var r in e) n[r] = C.und(t[r]) ? e[r] : t[r];
            return n;
        }
        function U(t) {
            return C.rgb(t)
                ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((e = t)))
                    ? "rgba(" + n[1] + ",1)"
                    : e
                : C.hex(t)
                ? (function (t) {
                      var e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, n, r) {
                              return e + e + n + n + r + r;
                          }),
                          n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                      return "rgba(" + parseInt(n[1], 16) + "," + parseInt(n[2], 16) + "," + parseInt(n[3], 16) + ",1)";
                  })(t)
                : C.hsl(t)
                ? (function (t) {
                      var e,
                          n,
                          r,
                          o = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),
                          i = parseInt(o[1], 10) / 360,
                          a = parseInt(o[2], 10) / 100,
                          s = parseInt(o[3], 10) / 100,
                          u = o[4] || 1;
                      function c(t, e, n) {
                          return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < 0.5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
                      }
                      if (0 == a) e = n = r = s;
                      else {
                          var l = s < 0.5 ? s * (1 + a) : s + a - s * a,
                              f = 2 * s - l;
                          (e = c(f, l, i + 1 / 3)), (n = c(f, l, i)), (r = c(f, l, i - 1 / 3));
                      }
                      return "rgba(" + 255 * e + "," + 255 * n + "," + 255 * r + "," + u + ")";
                  })(t)
                : void 0;
            var e, n;
        }
        function V(t) {
            var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);
            if (e) return e[1];
        }
        function W(t, e) {
            return C.fnc(t) ? t(e.target, e.id, e.total) : t;
        }
        function z(t, e) {
            return t.getAttribute(e);
        }
        function Y(t, e, n) {
            if (H([n, "deg", "rad", "turn"], V(e))) return e;
            var r = _.CSS[e + n];
            if (!C.und(r)) return r;
            var o = document.createElement(t.tagName),
                i = t.parentNode && t.parentNode !== document ? t.parentNode : document.body;
            i.appendChild(o), (o.style.position = "absolute"), (o.style.width = 100 + n);
            var a = 100 / o.offsetWidth;
            i.removeChild(o);
            var s = a * parseFloat(e);
            return (_.CSS[e + n] = s), s;
        }
        function $(t, e, n) {
            if (e in t.style) {
                var r = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
                    o = t.style[e] || getComputedStyle(t).getPropertyValue(r) || "0";
                return n ? Y(t, o, n) : o;
            }
        }
        function G(t, e) {
            return C.dom(t) && !C.inp(t) && (z(t, e) || (C.svg(t) && t[e])) ? "attribute" : C.dom(t) && H(w, e) ? "transform" : C.dom(t) && "transform" !== e && $(t, e) ? "css" : null != t[e] ? "object" : void 0;
        }
        function X(t) {
            if (C.dom(t)) {
                for (var e, n = t.style.transform || "", r = /(\w+)\(([^)]*)\)/g, o = new Map(); (e = r.exec(n)); ) o.set(e[1], e[2]);
                return o;
            }
        }
        function K(t, e, n, r) {
            var o = x(e, "scale")
                    ? 1
                    : 0 +
                      (function (t) {
                          return x(t, "translate") || "perspective" === t ? "px" : x(t, "rotate") || x(t, "skew") ? "deg" : void 0;
                      })(e),
                i = X(t).get(e) || o;
            return n && (n.transforms.list.set(e, i), (n.transforms.last = e)), r ? Y(t, i, r) : i;
        }
        function Q(t, e, n, r) {
            switch (G(t, e)) {
                case "transform":
                    return K(t, e, r, n);
                case "css":
                    return $(t, e, n);
                case "attribute":
                    return z(t, e);
                default:
                    return t[e] || 0;
            }
        }
        function Z(t, e) {
            var n = /^(\*=|\+=|-=)/.exec(t);
            if (!n) return t;
            var r = V(t) || 0,
                o = parseFloat(e),
                i = parseFloat(t.replace(n[0], ""));
            switch (n[0][0]) {
                case "+":
                    return o + i + r;
                case "-":
                    return o - i + r;
                case "*":
                    return o * i + r;
            }
        }
        function J(t, e) {
            if (C.col(t)) return U(t);
            if (/\s/g.test(t)) return t;
            var n = V(t),
                r = n ? t.substr(0, t.length - n.length) : t;
            return e ? r + e : r;
        }
        function tt(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }
        function et(t) {
            for (var e, n = t.points, r = 0, o = 0; o < n.numberOfItems; o++) {
                var i = n.getItem(o);
                o > 0 && (r += tt(e, i)), (e = i);
            }
            return r;
        }
        function nt(t) {
            if (t.getTotalLength) return t.getTotalLength();
            switch (t.tagName.toLowerCase()) {
                case "circle":
                    return (function (t) {
                        return 2 * Math.PI * z(t, "r");
                    })(t);
                case "rect":
                    return (function (t) {
                        return 2 * z(t, "width") + 2 * z(t, "height");
                    })(t);
                case "line":
                    return (function (t) {
                        return tt({ x: z(t, "x1"), y: z(t, "y1") }, { x: z(t, "x2"), y: z(t, "y2") });
                    })(t);
                case "polyline":
                    return et(t);
                case "polygon":
                    return (function (t) {
                        var e = t.points;
                        return et(t) + tt(e.getItem(e.numberOfItems - 1), e.getItem(0));
                    })(t);
            }
        }
        function rt(t, e) {
            var n = e || {},
                r =
                    n.el ||
                    (function (t) {
                        for (var e = t.parentNode; C.svg(e) && C.svg(e.parentNode); ) e = e.parentNode;
                        return e;
                    })(t),
                o = r.getBoundingClientRect(),
                i = z(r, "viewBox"),
                a = o.width,
                s = o.height,
                u = n.viewBox || (i ? i.split(" ") : [0, 0, a, s]);
            return { el: r, viewBox: u, x: u[0] / 1, y: u[1] / 1, w: a / u[2], h: s / u[3] };
        }
        function ot(t, e) {
            function n(n) {
                void 0 === n && (n = 0);
                var r = e + n >= 1 ? e + n : 0;
                return t.el.getPointAtLength(r);
            }
            var r = rt(t.el, t.svg),
                o = n(),
                i = n(-1),
                a = n(1);
            switch (t.property) {
                case "x":
                    return (o.x - r.x) * r.w;
                case "y":
                    return (o.y - r.y) * r.h;
                case "angle":
                    return (180 * Math.atan2(a.y - i.y, a.x - i.x)) / Math.PI;
            }
        }
        function it(t, e) {
            var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
                r = J(C.pth(t) ? t.totalLength : t, e) + "";
            return { original: r, numbers: r.match(n) ? r.match(n).map(Number) : [0], strings: C.str(t) || e ? r.split(n) : [] };
        }
        function at(t) {
            return R(t ? B(C.arr(t) ? t.map(D) : D(t)) : [], function (t, e, n) {
                return n.indexOf(t) === e;
            });
        }
        function st(t) {
            var e = at(t);
            return e.map(function (t, n) {
                return { target: t, id: n, total: e.length, transforms: { list: X(t) } };
            });
        }
        function ut(t, e) {
            var n = N(e);
            if ((/^spring/.test(n.easing) && (n.duration = j(n.easing)), C.arr(t))) {
                var r = t.length;
                2 === r && !C.obj(t[0]) ? (t = { value: t }) : C.fnc(e.duration) || (n.duration = e.duration / r);
            }
            var o = C.arr(t) ? t : [t];
            return o
                .map(function (t, n) {
                    var r = C.obj(t) && !C.pth(t) ? t : { value: t };
                    return C.und(r.delay) && (r.delay = n ? 0 : e.delay), C.und(r.endDelay) && (r.endDelay = n === o.length - 1 ? e.endDelay : 0), r;
                })
                .map(function (t) {
                    return F(t, n);
                });
        }
        function ct(t, e) {
            var n = [],
                r = e.keyframes;
            for (var o in (r &&
                (e = F(
                    (function (t) {
                        for (
                            var e = R(
                                    B(
                                        t.map(function (t) {
                                            return Object.keys(t);
                                        })
                                    ),
                                    function (t) {
                                        return C.key(t);
                                    }
                                ).reduce(function (t, e) {
                                    return t.indexOf(e) < 0 && t.push(e), t;
                                }, []),
                                n = {},
                                r = function (r) {
                                    var o = e[r];
                                    n[o] = t.map(function (t) {
                                        var e = {};
                                        for (var n in t) C.key(n) ? n == o && (e.value = t[n]) : (e[n] = t[n]);
                                        return e;
                                    });
                                },
                                o = 0;
                            o < e.length;
                            o++
                        )
                            r(o);
                        return n;
                    })(r),
                    e
                )),
            e))
                C.key(o) && n.push({ name: o, tweens: ut(e[o], t) });
            return n;
        }
        function lt(t, e) {
            var n;
            return t.tweens.map(function (r) {
                var o = (function (t, e) {
                        var n = {};
                        for (var r in t) {
                            var o = W(t[r], e);
                            C.arr(o) &&
                                1 ===
                                    (o = o.map(function (t) {
                                        return W(t, e);
                                    })).length &&
                                (o = o[0]),
                                (n[r] = o);
                        }
                        return (n.duration = parseFloat(n.duration)), (n.delay = parseFloat(n.delay)), n;
                    })(r, e),
                    i = o.value,
                    a = C.arr(i) ? i[1] : i,
                    s = V(a),
                    u = Q(e.target, t.name, s, e),
                    c = n ? n.to.original : u,
                    l = C.arr(i) ? i[0] : c,
                    f = V(l) || V(u),
                    d = s || f;
                return (
                    C.und(a) && (a = c),
                    (o.from = it(l, d)),
                    (o.to = it(Z(a, l), d)),
                    (o.start = n ? n.end : 0),
                    (o.end = o.start + o.delay + o.duration + o.endDelay),
                    (o.easing = P(o.easing, o.duration)),
                    (o.isPath = C.pth(i)),
                    (o.isColor = C.col(o.from.original)),
                    o.isColor && (o.round = 1),
                    (n = o),
                    o
                );
            });
        }
        var ft = {
            css: function (t, e, n) {
                return (t.style[e] = n);
            },
            attribute: function (t, e, n) {
                return t.setAttribute(e, n);
            },
            object: function (t, e, n) {
                return (t[e] = n);
            },
            transform: function (t, e, n, r, o) {
                if ((r.list.set(e, n), e === r.last || o)) {
                    var i = "";
                    r.list.forEach(function (t, e) {
                        i += e + "(" + t + ") ";
                    }),
                        (t.style.transform = i);
                }
            },
        };
        function dt(t, e) {
            st(t).forEach(function (t) {
                for (var n in e) {
                    var r = W(e[n], t),
                        o = t.target,
                        i = V(r),
                        a = Q(o, n, i, t),
                        s = Z(J(r, i || V(a)), a),
                        u = G(o, n);
                    ft[u](o, n, s, t.transforms, !0);
                }
            });
        }
        function ht(t, e) {
            return R(
                B(
                    t.map(function (t) {
                        return e.map(function (e) {
                            return (function (t, e) {
                                var n = G(t.target, e.name);
                                if (n) {
                                    var r = lt(e, t),
                                        o = r[r.length - 1];
                                    return { type: n, property: e.name, animatable: t, tweens: r, duration: o.end, delay: r[0].delay, endDelay: o.endDelay };
                                }
                            })(t, e);
                        });
                    })
                ),
                function (t) {
                    return !C.und(t);
                }
            );
        }
        function pt(t, e) {
            var n = t.length,
                r = function (t) {
                    return t.timelineOffset ? t.timelineOffset : 0;
                },
                o = {};
            return (
                (o.duration = n
                    ? Math.max.apply(
                          Math,
                          t.map(function (t) {
                              return r(t) + t.duration;
                          })
                      )
                    : e.duration),
                (o.delay = n
                    ? Math.min.apply(
                          Math,
                          t.map(function (t) {
                              return r(t) + t.delay;
                          })
                      )
                    : e.delay),
                (o.endDelay = n
                    ? o.duration -
                      Math.max.apply(
                          Math,
                          t.map(function (t) {
                              return r(t) + t.duration - t.endDelay;
                          })
                      )
                    : e.endDelay),
                o
            );
        }
        var gt = 0;
        var mt,
            vt = [],
            yt = [],
            bt = (function () {
                function t() {
                    mt = requestAnimationFrame(e);
                }
                function e(e) {
                    var n = vt.length;
                    if (n) {
                        for (var r = 0; r < n; ) {
                            var o = vt[r];
                            if (o.paused) {
                                var i = vt.indexOf(o);
                                i > -1 && (vt.splice(i, 1), (n = vt.length));
                            } else o.tick(e);
                            r++;
                        }
                        t();
                    } else mt = cancelAnimationFrame(mt);
                }
                return t;
            })();
        function wt(t) {
            void 0 === t && (t = {});
            var e,
                n = 0,
                r = 0,
                o = 0,
                i = 0,
                a = null;
            function s(t) {
                var e =
                    window.Promise &&
                    new Promise(function (t) {
                        return (a = t);
                    });
                return (t.finished = e), e;
            }
            var u = (function (t) {
                var e = q(y, t),
                    n = q(b, t),
                    r = ct(n, t),
                    o = st(t.targets),
                    i = ht(o, r),
                    a = pt(i, n),
                    s = gt;
                return gt++, F(e, { id: s, children: [], animatables: o, animations: i, duration: a.duration, delay: a.delay, endDelay: a.endDelay });
            })(t);
            s(u);
            function c() {
                var t = u.direction;
                "alternate" !== t && (u.direction = "normal" !== t ? "normal" : "reverse"),
                    (u.reversed = !u.reversed),
                    e.forEach(function (t) {
                        return (t.reversed = u.reversed);
                    });
            }
            function l(t) {
                return u.reversed ? u.duration - t : t;
            }
            function f() {
                (n = 0), (r = l(u.currentTime) * (1 / wt.speed));
            }
            function d(t, e) {
                e && e.seek(t - e.timelineOffset);
            }
            function h(t) {
                for (var e = 0, n = u.animations, r = n.length; e < r; ) {
                    var o = n[e],
                        i = o.animatable,
                        a = o.tweens,
                        s = a.length - 1,
                        c = a[s];
                    s &&
                        (c =
                            R(a, function (e) {
                                return t < e.end;
                            })[0] || c);
                    for (var l = E(t - c.start - c.delay, 0, c.duration) / c.duration, f = isNaN(l) ? 1 : c.easing(l), d = c.to.strings, h = c.round, p = [], g = c.to.numbers.length, m = void 0, v = 0; v < g; v++) {
                        var y = void 0,
                            b = c.to.numbers[v],
                            w = c.from.numbers[v] || 0;
                        (y = c.isPath ? ot(c.value, f * b) : w + f * (b - w)), h && ((c.isColor && v > 2) || (y = Math.round(y * h) / h)), p.push(y);
                    }
                    var _ = d.length;
                    if (_) {
                        m = d[0];
                        for (var x = 0; x < _; x++) {
                            d[x];
                            var T = d[x + 1],
                                C = p[x];
                            isNaN(C) || (m += T ? C + T : C + " ");
                        }
                    } else m = p[0];
                    ft[o.type](i.target, o.property, m, i.transforms), (o.currentValue = m), e++;
                }
            }
            function p(t) {
                u[t] && !u.passThrough && u[t](u);
            }
            function g(t) {
                var f = u.duration,
                    g = u.delay,
                    m = f - u.endDelay,
                    v = l(t);
                (u.progress = E((v / f) * 100, 0, 100)),
                    (u.reversePlayback = v < u.currentTime),
                    e &&
                        (function (t) {
                            if (u.reversePlayback) for (var n = i; n--; ) d(t, e[n]);
                            else for (var r = 0; r < i; r++) d(t, e[r]);
                        })(v),
                    !u.began && u.currentTime > 0 && ((u.began = !0), p("begin")),
                    !u.loopBegan && u.currentTime > 0 && ((u.loopBegan = !0), p("loopBegin")),
                    v <= g && 0 !== u.currentTime && h(0),
                    ((v >= m && u.currentTime !== f) || !f) && h(f),
                    v > g && v < m ? (u.changeBegan || ((u.changeBegan = !0), (u.changeCompleted = !1), p("changeBegin")), p("change"), h(v)) : u.changeBegan && ((u.changeCompleted = !0), (u.changeBegan = !1), p("changeComplete")),
                    (u.currentTime = E(v, 0, f)),
                    u.began && p("update"),
                    t >= f &&
                        ((r = 0),
                        u.remaining && !0 !== u.remaining && u.remaining--,
                        u.remaining
                            ? ((n = o), p("loopComplete"), (u.loopBegan = !1), "alternate" === u.direction && c())
                            : ((u.paused = !0), u.completed || ((u.completed = !0), p("loopComplete"), p("complete"), !u.passThrough && "Promise" in window && (a(), s(u)))));
            }
            return (
                (u.reset = function () {
                    var t = u.direction;
                    (u.passThrough = !1),
                        (u.currentTime = 0),
                        (u.progress = 0),
                        (u.paused = !0),
                        (u.began = !1),
                        (u.loopBegan = !1),
                        (u.changeBegan = !1),
                        (u.completed = !1),
                        (u.changeCompleted = !1),
                        (u.reversePlayback = !1),
                        (u.reversed = "reverse" === t),
                        (u.remaining = u.loop),
                        (e = u.children);
                    for (var n = (i = e.length); n--; ) u.children[n].reset();
                    ((u.reversed && !0 !== u.loop) || ("alternate" === t && 1 === u.loop)) && u.remaining++, h(u.reversed ? u.duration : 0);
                }),
                (u.set = function (t, e) {
                    return dt(t, e), u;
                }),
                (u.tick = function (t) {
                    (o = t), n || (n = o), g((o + (r - n)) * wt.speed);
                }),
                (u.seek = function (t) {
                    g(l(t));
                }),
                (u.pause = function () {
                    (u.paused = !0), f();
                }),
                (u.play = function () {
                    u.paused && (u.completed && u.reset(), (u.paused = !1), vt.push(u), f(), mt || bt());
                }),
                (u.reverse = function () {
                    c(), (u.completed = !u.reversed), f();
                }),
                (u.restart = function () {
                    u.reset(), u.play();
                }),
                u.reset(),
                u.autoplay && u.play(),
                u
            );
        }
        function _t(t, e) {
            for (var n = e.length; n--; ) H(t, e[n].animatable.target) && e.splice(n, 1);
        }
        "undefined" != typeof document &&
            document.addEventListener("visibilitychange", function () {
                document.hidden
                    ? (vt.forEach(function (t) {
                          return t.pause();
                      }),
                      (yt = vt.slice(0)),
                      (wt.running = vt = []))
                    : yt.forEach(function (t) {
                          return t.play();
                      });
            }),
            (wt.version = "3.2.0"),
            (wt.speed = 1),
            (wt.running = vt),
            (wt.remove = function (t) {
                for (var e = at(t), n = vt.length; n--; ) {
                    var r = vt[n],
                        o = r.animations,
                        i = r.children;
                    _t(e, o);
                    for (var a = i.length; a--; ) {
                        var s = i[a],
                            u = s.animations;
                        _t(e, u), u.length || s.children.length || i.splice(a, 1);
                    }
                    o.length || i.length || r.pause();
                }
            }),
            (wt.get = Q),
            (wt.set = dt),
            (wt.convertPx = Y),
            (wt.path = function (t, e) {
                var n = C.str(t) ? A(t)[0] : t,
                    r = e || 100;
                return function (t) {
                    return { property: t, el: n, svg: rt(n), totalLength: nt(n) * (r / 100) };
                };
            }),
            (wt.setDashoffset = function (t) {
                var e = nt(t);
                return t.setAttribute("stroke-dasharray", e), e;
            }),
            (wt.stagger = function (t, e) {
                void 0 === e && (e = {});
                var n = e.direction || "normal",
                    r = e.easing ? P(e.easing) : null,
                    o = e.grid,
                    i = e.axis,
                    a = e.from || 0,
                    s = "first" === a,
                    u = "center" === a,
                    c = "last" === a,
                    l = C.arr(t),
                    f = l ? parseFloat(t[0]) : parseFloat(t),
                    d = l ? parseFloat(t[1]) : 0,
                    h = V(l ? t[1] : t) || 0,
                    p = e.start || 0 + (l ? f : 0),
                    g = [],
                    m = 0;
                return function (t, e, v) {
                    if ((s && (a = 0), u && (a = (v - 1) / 2), c && (a = v - 1), !g.length)) {
                        for (var y = 0; y < v; y++) {
                            if (o) {
                                var b = u ? (o[0] - 1) / 2 : a % o[0],
                                    w = u ? (o[1] - 1) / 2 : Math.floor(a / o[0]),
                                    _ = b - (y % o[0]),
                                    E = w - Math.floor(y / o[0]),
                                    x = Math.sqrt(_ * _ + E * E);
                                "x" === i && (x = -_), "y" === i && (x = -E), g.push(x);
                            } else g.push(Math.abs(a - y));
                            m = Math.max.apply(Math, g);
                        }
                        r &&
                            (g = g.map(function (t) {
                                return r(t / m) * m;
                            })),
                            "reverse" === n &&
                                (g = g.map(function (t) {
                                    return i ? (t < 0 ? -1 * t : -t) : Math.abs(m - t);
                                }));
                    }
                    return p + (l ? (d - f) / m : f) * (Math.round(100 * g[e]) / 100) + h;
                };
            }),
            (wt.timeline = function (t) {
                void 0 === t && (t = {});
                var e = wt(t);
                return (
                    (e.duration = 0),
                    (e.add = function (n, r) {
                        var o = vt.indexOf(e),
                            i = e.children;
                        function a(t) {
                            t.passThrough = !0;
                        }
                        o > -1 && vt.splice(o, 1);
                        for (var s = 0; s < i.length; s++) a(i[s]);
                        var u = F(n, q(b, t));
                        u.targets = u.targets || t.targets;
                        var c = e.duration;
                        (u.autoplay = !1), (u.direction = e.direction), (u.timelineOffset = C.und(r) ? c : Z(r, c)), a(e), e.seek(u.timelineOffset);
                        var l = wt(u);
                        a(l), i.push(l);
                        var f = pt(i, t);
                        return (e.delay = f.delay), (e.endDelay = f.endDelay), (e.duration = f.duration), e.seek(0), e.reset(), e.autoplay && e.play(), e;
                    }),
                    e
                );
            }),
            (wt.easing = P),
            (wt.penner = O),
            (wt.random = function (t, e) {
                return Math.floor(Math.random() * (e - t + 1)) + t;
            });
        var Et = wt,
            xt = function () {
                var t = function () {
                    c.classList.toggle("is_close"), o.querySelector(".js_menuOpen").classList.toggle("is_open"), o.body.classList.toggle("is_lock"), u.classList.contains("is_intersection") && h(u, "toggle", "is_open");
                };
                d(o.querySelectorAll(".js_link")).forEach(function (e) {
                    e.addEventListener("click", function () {
                        o.getElementById(e.id) === c
                            ? t()
                            : (function (e) {
                                  "/" !== location.pathname || "about.html" === e.getAttribute("href")
                                      ? (o.getElementById("js_curtain").classList.add("is_active"),
                                        setTimeout(function () {
                                            t();
                                        }, 1e3),
                                        setTimeout(function () {
                                            o.getElementById("js_curtain").classList.remove("is_active");
                                        }, 1500))
                                      : t();
                              })(e);
                    });
                });
            },
            Tt = function () {
                var t = o.querySelectorAll(".js_slide"),
                    e = function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "in";
                        d(o.querySelectorAll("#" + t.id + " .js_slideIn")).forEach(function (t) {
                            t.classList["in" === e ? "add" : "remove"]("is_active");
                        });
                    },
                    n = new IntersectionObserver(
                        function (t) {
                            [].slice.call(t).forEach(function (t) {
                                var n, r;
                                t.isIntersecting
                                    ? ((n = t.target),
                                      null !== (r = o.querySelector(".js_dot.is_active")) && r.classList.remove("is_active"),
                                      o.querySelector("a[href='#".concat(n.id, "']")).parentNode.classList.add("is_active"),
                                      e(t.target))
                                    : e(t.target, null);
                            });
                        },
                        { root: null, rootMargin: "-50% 0px" }
                    );
                d(t).forEach(function (t) {
                    n.observe(t);
                });
            },
            Ct = function () {
                var t = o.querySelectorAll(".js_progressBar");
                g(t, t, "add", "");
            },
            It = n(0),
            jt = n.n(It);
        n(2), v()(), jt.a.Pjax.start();
        var Lt = function () {
                f(), xt(), o.querySelector(".js_instagram").classList[a ? "add" : "remove"]("is_hide");
            },
            kt = function () {
                var t;
                Tt(),
                    (function () {
                        var t = 0,
                            e = !1,
                            n = 0,
                            r = 0,
                            a = 0,
                            s = innerHeight,
                            u = o.getElementById("js_slideWrap"),
                            c = o.querySelectorAll(".js_slide"),
                            f = {
                                scrollProcessing: function (o) {
                                    (r = l ? o.changedTouches[0].pageY : o.deltaY),
                                        e ||
                                            ((e = !0),
                                            (l ? r > n : r > 0) ? (t >= c.length - 1 ? (t = c.length - 1) : (t++, (u.style.top = -s * t + "px"))) : t <= 0 ? (t = 0) : (t--, (u.style.top = -s * t + "px")),
                                            setTimeout(function () {
                                                e = !1;
                                            }, 1e3)),
                                        (n = r);
                                },
                                scrollEvent: function () {
                                    var t = l ? "touchmove" : "wheel";
                                    i.addEventListener(t, function (t) {
                                        f.scrollProcessing(t);
                                    });
                                },
                                scrollHash: function (t) {
                                    [].slice.call(t).forEach(function (t) {
                                        t.isIntersecting && history.pushState(null, null, "#" + t.target.id);
                                    });
                                },
                            },
                            h = new IntersectionObserver(f.scrollHash, { root: null, rootMargin: "-50% 0px" });
                        d(c).forEach(function (t) {
                            h.observe(t);
                        }),
                            f.scrollEvent();
                        var p = function (e) {
                            d(e).forEach(function (e, o) {
                                e.addEventListener("click", function (e) {
                                    e.preventDefault(), (u.style.top = "-" + s * o + "px"), (t = o), (n = r = s * o);
                                });
                            });
                        };
                        p(o.querySelectorAll(".js_dot")), p(o.querySelectorAll(".js_link.js_hash"));
                        var g = function () {
                            d(c).forEach(function (e, n) {
                                location.hash == "#" + e.id && (t = n), (e.style.height = s + "px"), (a = s * c.length), (u.style.height = a + "px"), (u.style.top = -s * t + "px");
                            });
                        };
                        g(),
                            i.addEventListener("resize", function () {
                                (s = innerHeight), g();
                            });
                        !(function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "top",
                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "1s",
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ease-in-out";
                            (u.style.transitionProperty = t), (u.style.transitionDuration = e), (u.style.transitionTimingFunction = n);
                        })();
                    })(),
                    (t = function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.1;
                        document.body.addEventListener("mousemove", function (n) {
                            var r = 0.1 * n.pageX * e,
                                o = 0.1 * n.pageY * e;
                            document.getElementById(t) && (document.getElementById(t).style.transform = "translate(-" + r + "px,-" + o + "px)");
                        });
                    })("js_background", 0.3),
                    t("js_background_star"),
                    t("js_background_text", 0.2),
                    t("js_moon", 0.5),
                    t("js_cloud_upperLeft", 0.4),
                    t("js_cloud_upperRight", 0.3),
                    t("js_cloud_lowerLeft", 0.7),
                    t("js_cloud_lowerRight", 0.6),
                    t("js_cloud_center", 0.8),
                    setTimeout(function () {
                        u.classList.remove("is_intersection");
                    });
            },
            Mt = function () {
                var t, e, n, r, a;
                d(o.querySelectorAll(".js_active")).forEach(function (t) {
                    t.classList.add("is_active");
                }),
                    (t = o.getElementById("js_hero")),
                    (e = o.getElementById("js_arrowIcon")),
                    (n = o.getElementById("js_scrollDown")),
                    g(t, u, "remove", "add"),
                    g(t, e, "remove", "add"),
                    g(t, n, "remove", "add"),
                    i.addEventListener("scroll", Ct),
                    setTimeout(function () {
                        scrollTo(0, 0);
                    }),
                    (r = window.pageYOffset || document.documentElement.scrollTop),
                    (a = !1),
                    i.addEventListener("scroll", function () {
                        (r = window.pageYOffset || document.documentElement.scrollTop), a && 0 === r && o.getElementById("js_arrowButton").click();
                    }),
                    o.getElementById("js_arrowButton").addEventListener("click", function (t) {
                        0 !== r && (t.preventDefault(), t.stopPropagation(), Et.remove("html, body"), Et({ targets: "html, body", scrollTop: 0, dulation: 600, easing: "easeOutCubic" }), (a = !0));
                    });
            },
            St = jt.a.BaseView.extend({
                namespace: "top",
                onEnterCompleted: function () {
                    kt();
                },
                onLeave: function () {},
                onLeaveCompleted: function () {},
            }),
            Ot = jt.a.BaseView.extend({
                namespace: "about",
                onEnter: function () {},
                onEnterCompleted: function () {
                    Mt();
                },
                onLeave: function () {},
                onLeaveCompleted: function () {},
            });
        i.addEventListener("load", function () {
            a ? kt() : s && Mt(), Lt(), o.body.classList.add("is_init");
        }),
            jt.a.Dispatcher.on("newPageReady", function (t, e, n, r) {
                if (1 !== jt.a.HistoryManager.history.length) {
                    var i = o.head,
                        a = r.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0],
                        s = o.createElement("head");
                    s.innerHTML = a;
                    for (var u = ["meta[name='description']", "meta[property^='og']"].join(","), c = i.querySelectorAll(u), l = 0; l < c.length; l++) i.removeChild(c[l]);
                    for (var f = s.querySelectorAll(u), d = 0; d < f.length; d++) i.appendChild(f[d]);
                }
            }),
            (jt.a.Pjax.originalPreventCheck = jt.a.Pjax.preventCheck),
            (jt.a.Pjax.preventCheck = function (t, e) {
                if (e) {
                    var n = location.protocol + "//" + location.host + location.pathname,
                        r = e.href.replace(/#.*$/, "");
                    if (e.href.startsWith(location.protocol + "//" + location.host) && e.href.indexOf("#") > -1 && r != n) return !0;
                }
                return !0;
            }),
            jt.a.Dispatcher.on("linkClicked", function () {
                St.init(), Ot.init();
            });
    },
]);
