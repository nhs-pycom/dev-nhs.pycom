! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 1)
}([function(e, t) {
    NodeList.prototype.forEach || (NodeList.prototype.forEach = Array.prototype.forEach), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        enumerable: !1,
        value: function(e) {
            return this.filter((function(t) {
                return t === e
            })).length > 0
        }
    })
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = function(e, t) {
            if (e && t) {
                var n = "true" === e.getAttribute(t) ? "false" : "true";
                e.setAttribute(t, n)
            }
        },
        o = function(e, t) {
            if (e && t) {
                var n = e.getAttribute("aria-controls");
                if (n) {
                    var o = document.getElementById(n);
                    o && (o.classList.toggle(t), r(e, "aria-expanded"))
                }
            }
        },
        i = function() {
            var e, t, n, o;
            e = document.querySelector("#toggle-menu"), t = document.querySelector("#close-menu"), n = document.querySelector("#header-navigation"), o = function(t) {
                    t.preventDefault(), r(e, "aria-expanded"), e.classList.toggle("is-active"), n.classList.toggle("js-show")
                }, e && t && n && [e, t].forEach((function(e) {
                    e.addEventListener("click", o)
                })),
                function() {
                    var e = document.querySelector("#toggle-search"),
                        t = document.querySelector("#close-search"),
                        n = document.querySelector("#wrap-search"),
                        o = document.querySelector("#content-header"),
                        i = function(t) {
                            t.preventDefault(), r(e, "aria-expanded"), e.classList.toggle("is-active"), n.classList.toggle("js-show"), o.classList.toggle("js-show")
                        };
                    e && t && [e, t].forEach((function(e) {
                        e.addEventListener("click", i)
                    }))
                }()
        },
        u = function() {
            var e = "boolean" == typeof document.createElement("details").open,
                t = document.querySelectorAll("details");
            t.length && t.forEach((function(t, n) {
                t.hasAttribute("nhsuk-polyfilled") || function(t, n) {
                    t.setAttribute("nhsuk-polyfilled", "true"), t.id || t.setAttribute("id", "nhsuk-details".concat(n));
                    var o = document.querySelector("#".concat(t.id, " .nhsuk-details__text"));
                    o.id || o.setAttribute("id", "nhsuk-details__text".concat(n));
                    var i = document.querySelector("#".concat(t.id, " .nhsuk-details__summary"));
                    i.setAttribute("role", "button"), i.setAttribute("aria-controls", o.id), i.setAttribute("tabIndex", "0"), !0 === (null !== t.getAttribute("open")) ? (i.setAttribute("aria-expanded", "true"), o.setAttribute("aria-hidden", "false")) : (i.setAttribute("aria-expanded", "false"), o.setAttribute("aria-hidden", "true"), e || (o.style.display = "none"));
                    i.addEventListener("click", (function() {
                        r(i, "aria-expanded"), r(o, "aria-hidden"), e || (o.style.display = "true" === o.getAttribute("aria-hidden") ? "none" : "", t.hasAttribute("open") ? t.removeAttribute("open") : t.setAttribute("open", "open"))
                    })), i.addEventListener("keydown", (function(e) {
                        13 !== e.keyCode && 32 !== e.keyCode || (e.preventDefault(), i.click())
                    }))
                }(t, n)
            }))
        };
    n(0);
    document.addEventListener("DOMContentLoaded", (function() {
        var e, t, n, r, c;
        u(), i(), e = document.querySelector("h1"), t = document.querySelector(".nhsuk-skip-link"), e && t && (t.addEventListener("click", (function(t) {
                t.preventDefault(), e.setAttribute("tabIndex", "-1"), e.focus()
            })), e.addEventListener("blur", (function(t) {
                t.preventDefault(), e.removeAttribute("tabIndex")
            }))), n = document.querySelectorAll(".nhsuk-radios--conditional .nhsuk-radios__input"), r = document.querySelectorAll(".nhsuk-radios--conditional .nhsuk-radios__conditional"), c = function(e) {
                n.forEach((function(e) {
                    return e.setAttribute("aria-expanded", "false")
                })), r.forEach((function(e) {
                    return e.classList.add("nhsuk-radios__conditional--hidden")
                })), o(e.target, "nhsuk-radios__conditional--hidden")
            }, n.forEach((function(e) {
                e.addEventListener("change", c)
            })),
            function() {
                var e = document.querySelectorAll(".nhsuk-checkboxes--conditional .nhsuk-checkboxes__input"),
                    t = function(e) {
                        o(e.target, "nhsuk-checkboxes__conditional--hidden")
                    };
                e.forEach((function(e) {
                    e.addEventListener("change", t)
                }))
            }(), document.querySelectorAll(".nhsuk-card--clickable").forEach((function(e) {
                null !== e.querySelector("a") && e.addEventListener("click", (function() {
                    e.querySelector("a").click()
                }))
            }))
    }))
}]);