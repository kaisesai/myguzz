!function (a, b) {
    angular.module("mgcrea.ngStrap", ["mgcrea.ngStrap.modal", "mgcrea.ngStrap.aside", "mgcrea.ngStrap.alert", "mgcrea.ngStrap.button", "mgcrea.ngStrap.select", "mgcrea.ngStrap.datepicker", "mgcrea.ngStrap.timepicker", "mgcrea.ngStrap.navbar", "mgcrea.ngStrap.tooltip", "mgcrea.ngStrap.popover", "mgcrea.ngStrap.dropdown", "mgcrea.ngStrap.typeahead", "mgcrea.ngStrap.scrollspy", "mgcrea.ngStrap.affix", "mgcrea.ngStrap.tab"]), angular.module("mgcrea.ngStrap.affix", ["mgcrea.ngStrap.helpers.dimensions"]).provider("$affix", function () {
        var a = this.defaults = {offsetTop: "auto"};
        this.$get = ["$window", "dimensions", function (b, c) {
            function e(e, f) {
                function s(a, b, c) {
                    var d = t(), e = u();
                    return q >= d ? "top" : null !== a && d + a <= b.top ? "middle" : null !== r && b.top + c + k >= e - r ? "bottom" : "middle"
                }

                function t() {
                    return i[0] === b ? b.pageYOffset : i[0] === b
                }

                function u() {
                    return i[0] === b ? b.document.body.scrollHeight : i[0].scrollHeight
                }

                var p, q, r, g = {}, h = angular.extend({}, a, f), i = h.target, j = "affix affix-top affix-bottom", k = 0, l = 0, m = null, n = null, o = e.parent();
                if (h.offsetParent) {
                    if (h.offsetParent.match(/^\d+$/)) {
                        for (p = 0; p < 1 * h.offsetParent - 1; p++) {
                            o = o.parent()
                        }
                    } else {
                        o = angular.element(h.offsetParent)
                    }
                }
                return q = 0, h.offsetTop && ("auto" === h.offsetTop && (h.offsetTop = "+0"), h.offsetTop.match(/^[-+]\d+$/) ? (k -= 1 * h.offsetTop, q = h.offsetParent ? c.offset(o[0]).top + 1 * h.offsetTop : c.offset(e[0]).top - c.css(e[0], "marginTop", !0) + 1 * h.offsetTop) : q = 1 * h.offsetTop), r = 0, h.offsetBottom && (r = h.offsetParent && h.offsetBottom.match(/^[-+]\d+$/) ? u() - (c.offset(o[0]).top + c.height(o[0])) + 1 * h.offsetBottom + 1 : 1 * h.offsetBottom), g.init = function () {
                    l = c.offset(e[0]).top + k, i.on("scroll", this.checkPosition), i.on("click", this.checkPositionWithEventLoop), this.checkPosition(), this.checkPositionWithEventLoop()
                }, g.destroy = function () {
                    i.off("scroll", this.checkPosition), i.off("click", this.checkPositionWithEventLoop)
                }, g.checkPositionWithEventLoop = function () {
                    setTimeout(this.checkPosition, 1)
                }, g.checkPosition = function () {
                    var a = t(), b = c.offset(e[0]), f = c.height(e[0]), g = s(n, b, f);
                    m !== g && (m = g, e.removeClass(j).addClass("affix" + ("middle" !== g ? "-" + g : "")), "top" === g ? (n = null, e.css("position", h.offsetParent ? "" : "relative"), e.css("top", "")) : "bottom" === g ? (n = h.offsetUnpin ? -(1 * h.offsetUnpin) : b.top - a, e.css("position", h.offsetParent ? "" : "relative"), e.css("top", h.offsetParent ? "" : d[0].offsetHeight - r - f - l + "px")) : (n = null, e.css("position", "fixed"), e.css("top", k + "px")))
                }, g.init(), g
            }

            var d = angular.element(b.document.body);
            return e
        }]
    }).directive("bsAffix", ["$affix", "$window", function (a, b) {
        return {
            restrict: "EAC", require: "^?bsAffixTarget", link: function (c, d, e, f) {
                var h, g = {scope: c, offsetTop: "auto", target: f ? f.$element : angular.element(b)};
                angular.forEach(["offsetTop", "offsetBottom", "offsetParent", "offsetUnpin"], function (a) {
                    angular.isDefined(e[a]) && (g[a] = e[a])
                }), h = a(d, g), c.$on("$destroy", function () {
                    g = null, h = null
                })
            }
        }
    }]).directive("bsAffixTarget", function () {
        return {
            controller: ["$element", function (a) {
                this.$element = a
            }]
        }
    }), angular.module("mgcrea.ngStrap.alert", []).provider("$alert", function () {
        var a = this.defaults = {
            animation: "am-fade",
            prefixClass: "alert",
            placement: null,
            template: "alert/alert.tpl.html",
            container: !1,
            element: null,
            backdrop: !1,
            keyboard: !0,
            show: !0,
            duration: !1,
            type: !1
        };
        this.$get = ["$modal", "$timeout", function (b, c) {
            function d(d) {
                var g, e = {}, f = angular.extend({}, a, d);
                return e = b(f), f.type && (e.$scope.type = f.type), g = e.show, f.duration && (e.show = function () {
                    g(), c(function () {
                        e.hide()
                    }, 1000 * f.duration)
                }), e
            }

            return d
        }]
    }).directive("bsAlert", ["$window", "$location", "$sce", "$alert", function (a, b, c, d) {
        return a.requestAnimationFrame || a.setTimeout, {
            restrict: "EAC", scope: !0, link: function (a, b, e) {
                var h, g = {scope: a, element: b, show: !1};
                angular.forEach(["template", "placement", "keyboard", "html", "container", "animation", "duration"], function (a) {
                    angular.isDefined(e[a]) && (g[a] = e[a])
                }), angular.forEach(["title", "content", "type"], function (b) {
                    e[b] && e.$observe(b, function (d) {
                        a[b] = c.getTrustedHtml(d)
                    })
                }), e.bsAlert && a.$watch(e.bsAlert, function (b) {
                    angular.isObject(b) ? angular.extend(a, b) : a.content = b
                }, !0), h = d(g), b.on(e.trigger || "click", h.toggle), a.$on("$destroy", function () {
                    h.destroy(), g = null, h = null
                })
            }
        }
    }]), angular.module("mgcrea.ngStrap.aside", ["mgcrea.ngStrap.modal"]).provider("$aside", function () {
        var a = this.defaults = {
            animation: "am-fade-and-slide-right",
            prefixClass: "aside",
            placement: "right",
            template: "aside/aside.tpl.html",
            contentTemplate: !1,
            container: !1,
            element: null,
            backdrop: !0,
            keyboard: !0,
            html: !1,
            show: !0
        };
        this.$get = ["$modal", function (b) {
            function c(c) {
                var d = {}, e = angular.extend({}, a, c);
                return d = b(e)
            }

            return c
        }]
    }).directive("bsAside", ["$window", "$location", "$sce", "$aside", function (a, b, c, d) {
        return a.requestAnimationFrame || a.setTimeout, {
            restrict: "EAC", scope: !0, link: function (a, b, e) {
                var h, g = {scope: a, element: b, show: !1};
                angular.forEach(["template", "contentTemplate", "placement", "backdrop", "keyboard", "html", "container", "animation"], function (a) {
                    angular.isDefined(e[a]) && (g[a] = e[a])
                }), angular.forEach(["title", "content"], function (b) {
                    e[b] && e.$observe(b, function (d) {
                        a[b] = c.getTrustedHtml(d)
                    })
                }), e.bsAside && a.$watch(e.bsAside, function (b) {
                    angular.isObject(b) ? angular.extend(a, b) : a.content = b
                }, !0), h = d(g), b.on(e.trigger || "click", h.toggle), a.$on("$destroy", function () {
                    h.destroy(), g = null, h = null
                })
            }
        }
    }]), angular.module("mgcrea.ngStrap.button", ["ngAnimate"]).provider("$button", function () {
        var a = this.defaults = {activeClass: "active", toggleEvent: "click"};
        this.$get = function () {
            return {defaults: a}
        }
    }).directive("bsCheckboxGroup", function () {
        return {
            restrict: "A", require: "ngModel", compile: function (a, b) {
                a.attr("data-toggle", "buttons"), a.removeAttr("ng-model");
                var c = a[0].querySelectorAll('input[type="checkbox"]');
                angular.forEach(c, function (a) {
                    var c = angular.element(a);
                    c.attr("bs-checkbox", ""), c.attr("ng-model", b.ngModel + "." + c.attr("value"))
                })
            }
        }
    }).directive("bsCheckbox", ["$button", "$$animateReflow", function (a, b) {
        var c = a.defaults, d = /^(true|false|\d+)$/;
        return {
            restrict: "A", require: "ngModel", link: function (a, e, f, g) {
                var l, m, h = c, i = "INPUT" === e[0].nodeName, j = i ? e.parent() : e, k = angular.isDefined(f.trueValue) ? f.trueValue : !0;
                d.test(f.trueValue) && (k = a.$eval(f.trueValue)), l = angular.isDefined(f.falseValue) ? f.falseValue : !1, d.test(f.falseValue) && (l = a.$eval(f.falseValue)), m = "boolean" != typeof k || "boolean" != typeof l, m && (g.$parsers.push(function (a) {
                    return a ? k : l
                }), a.$watch(f.ngModel, function () {
                    g.$render()
                })), g.$render = function () {
                    var a = angular.equals(g.$modelValue, k);
                    b(function () {
                        i && (e[0].checked = a), j.toggleClass(h.activeClass, a)
                    })
                }, e.bind(h.toggleEvent, function () {
                    a.$apply(function () {
                        i || g.$setViewValue(!j.hasClass("active")), m || g.$render()
                    })
                })
            }
        }
    }]).directive("bsRadioGroup", function () {
        return {
            restrict: "A", require: "ngModel", compile: function (a, b) {
                a.attr("data-toggle", "buttons"), a.removeAttr("ng-model");
                var c = a[0].querySelectorAll('input[type="radio"]');
                angular.forEach(c, function (a) {
                    angular.element(a).attr("bs-radio", ""), angular.element(a).attr("ng-model", b.ngModel)
                })
            }
        }
    }).directive("bsRadio", ["$button", "$$animateReflow", function (a, b) {
        var c = a.defaults, d = /^(true|false|\d+)$/;
        return {
            restrict: "A", require: "ngModel", link: function (a, e, f, g) {
                var h = c, i = "INPUT" === e[0].nodeName, j = i ? e.parent() : e, k = d.test(f.value) ? a.$eval(f.value) : f.value;
                g.$render = function () {
                    var a = angular.equals(g.$modelValue, k);
                    b(function () {
                        i && (e[0].checked = a), j.toggleClass(h.activeClass, a)
                    })
                }, e.bind(h.toggleEvent, function () {
                    a.$apply(function () {
                        g.$setViewValue(k), g.$render()
                    })
                })
            }
        }
    }]), angular.module("mgcrea.ngStrap.datepicker", ["mgcrea.ngStrap.helpers.dateParser", "mgcrea.ngStrap.tooltip"]).provider("$datepicker", function () {
        var a = this.defaults = {
            animation: "am-fade",
            prefixClass: "datepicker",
            placement: "bottom-left",
            template: "datepicker/datepicker.tpl.html",
            trigger: "focus",
            container: !1,
            keyboard: !0,
            html: !1,
            delay: 0,
            useNative: !1,
            dateType: "date",
            dateFormat: "shortDate",
            autoclose: !1,
            minDate: -1 / 0,
            maxDate: +1 / 0,
            startView: 0,
            minView: 0,
            startWeek: 0
        };
        this.$get = ["$window", "$document", "$rootScope", "$sce", "$locale", "dateFilter", "datepickerViews", "$tooltip", function (b, c, d, e, f, g, h, i) {
            function m(b, c, d) {
                function p(a) {
                    a.selected = e.$isSelected(a.date)
                }

                function q() {
                    b[0].focus()
                }

                var m, n, o, r, s, t, u, e = i(b, angular.extend({}, a, d)), f = d.scope, g = e.$options, j = e.$scope;
                return g.startView && (g.startView -= g.minView), m = h(e), e.$views = m.views, n = m.viewDate, j.$mode = g.startView, o = e.$views[j.$mode], j.$select = function (a) {
                    e.select(a)
                }, j.$selectPane = function (a) {
                    e.$selectPane(a)
                }, j.$toggleMode = function () {
                    e.setMode((j.$mode + 1) % e.$views.length)
                }, e.update = function (a) {
                    angular.isDate(a) && !isNaN(a.getTime()) && (e.$date = a, o.update.call(o, a)), e.$build(!0)
                }, e.select = function (a, b) {
                    angular.isDate(c.$dateValue) || (c.$dateValue = new Date(a)), c.$dateValue.setFullYear(a.getFullYear(), a.getMonth(), a.getDate()), !j.$mode || b ? (c.$setViewValue(c.$dateValue), c.$render(), g.autoclose && !b && e.hide(!0)) : (angular.extend(n, {
                        year: a.getFullYear(),
                        month: a.getMonth(),
                        date: a.getDate()
                    }), e.setMode(j.$mode - 1), e.$build())
                }, e.setMode = function (a) {
                    j.$mode = a, o = e.$views[j.$mode], e.$build()
                }, e.$build = function (a) {
                    a === !0 && o.built || (a !== !1 || o.built) && o.build.call(o)
                }, e.$updateSelected = function () {
                    for (var a = 0, b = j.rows.length; b > a; a++) {
                        angular.forEach(j.rows[a], p)
                    }
                }, e.$isSelected = function (a) {
                    return o.isSelected(a)
                }, e.$selectPane = function (a) {
                    var b = o.steps, c = new Date(Date.UTC(n.year + (b.year || 0) * a, n.month + (b.month || 0) * a, n.date + (b.day || 0) * a));
                    angular.extend(n, {
                        year: c.getUTCFullYear(),
                        month: c.getUTCMonth(),
                        date: c.getUTCDate()
                    }), e.$build()
                }, e.$onMouseDown = function (a) {
                    if (a.preventDefault(), a.stopPropagation(), k) {
                        var b = angular.element(a.target);
                        "button" !== b[0].nodeName.toLowerCase() && (b = b.parent()), b.triggerHandler("click")
                    }
                }, e.$onKeyDown = function (a) {
                    if (/(38|37|39|40|13)/.test(a.keyCode) && !a.shiftKey && !a.altKey) {
                        if (a.preventDefault(), a.stopPropagation(), 13 === a.keyCode) {
                            return j.$mode ? j.$apply(function () {
                                e.setMode(j.$mode - 1)
                            }) : e.hide(!0)
                        }
                        o.onKeyDown(a), f.$digest()
                    }
                }, r = e.init, e.init = function () {
                    return l && g.useNative ? (b.prop("type", "date"), b.css("-webkit-appearance", "textfield"), void 0) : (k && (b.prop("type", "text"), b.attr("readonly", "true"), b.on("click", q)), r(), void 0)
                }, s = e.destroy, e.destroy = function () {
                    l && g.useNative && b.off("click", q), s()
                }, t = e.show, e.show = function () {
                    t(), setTimeout(function () {
                        e.$element.on(k ? "touchstart" : "mousedown", e.$onMouseDown), g.keyboard && b.on("keydown", e.$onKeyDown)
                    })
                }, u = e.hide, e.hide = function (a) {
                    e.$element.off(k ? "touchstart" : "mousedown", e.$onMouseDown), g.keyboard && b.off("keydown", e.$onKeyDown), u(a)
                }, e
            }

            var k, l;
            return angular.element(b.document.body), k = "createTouch" in b.document, l = /(ip(a|o)d|iphone|android)/gi.test(b.navigator.userAgent), a.lang || (a.lang = f.id), m.defaults = a, m
        }]
    }).directive("bsDatepicker", ["$window", "$parse", "$q", "$locale", "dateFilter", "$datepicker", "$dateParser", "$timeout", function (a, b, c, d, e, f, g) {
        f.defaults;
        var j = /(ip(a|o)d|iphone|android)/gi.test(a.navigator.userAgent);
        return a.requestAnimationFrame || a.setTimeout, {
            restrict: "EAC",
            require: "ngModel",
            link: function (a, b, c, d) {
                var i, k, h = {scope: a, controller: d};
                angular.forEach(["placement", "container", "delay", "trigger", "keyboard", "html", "animation", "template", "autoclose", "dateType", "dateFormat", "startWeek", "useNative", "lang", "startView", "minView"], function (a) {
                    angular.isDefined(c[a]) && (h[a] = c[a])
                }), j && h.useNative && (h.dateFormat = "yyyy-MM-dd"), i = f(b, d, h), h = i.$options, angular.forEach(["minDate", "maxDate"], function (a) {
                    angular.isDefined(c[a]) && c.$observe(a, function (b) {
                        var c, d;
                        "today" === b ? (c = new Date, i.$options[a] = +new Date(c.getFullYear(), c.getMonth(), c.getDate() + ("maxDate" === a ? 1 : 0), 0, 0, 0, "minDate" === a ? 0 : -1)) : angular.isString(b) && b.match(/^".+"$/) ? i.$options[a] = +new Date(b.substr(1, b.length - 2)) : b && (d = new Date, d.setTime(b), i.$options[a] = d), !isNaN(i.$options[a]) && i.$build(!1)
                    })
                }), a.$watch(c.ngModel, function () {
                    i.update(d.$dateValue)
                }, !0), k = g({format: h.dateFormat, lang: h.lang}), d.$parsers.unshift(function (a) {
                    var b, c;
                    return a ? (b = k.parse(a, d.$dateValue), !b || isNaN(b.getTime()) ? d.$setValidity("date", !1) : (c = b.getTime() >= h.minDate && b.getTime() <= h.maxDate, d.$setValidity("date", c), c && (d.$dateValue = b)), "string" === h.dateType ? e(a, h.dateFormat) : "number" === h.dateType ? d.$dateValue.getTime() : "iso" === h.dateType ? d.$dateValue.toISOString() : d.$dateValue) : (d.$setValidity("date", !0), void 0)
                }), d.$formatters.push(function (a) {
                    var b = angular.isDate(a) ? a : new Date(a);
                    return d.$dateValue = b, d.$dateValue
                }), d.$render = function () {
                    b.val(isNaN(d.$dateValue.getTime()) ? "" : e(d.$dateValue, h.dateFormat))
                }, a.$on("$destroy", function () {
                    i.destroy(), h = null, i = null
                })
            }
        }
    }]).provider("datepickerViews", function () {
        function b(a, b) {
            for (var c = []; a.length > 0;) {
                c.push(a.splice(0, b))
            }
            return c
        }

        this.defaults = {
            dayFormat: "dd",
            daySplit: 7
        }, this.$get = ["$locale", "$sce", "dateFilter", function (a, c, d) {
            return function (e) {
                var n, f = e.$scope, g = e.$options, h = a.DATETIME_FORMATS.SHORTDAY, i = h.slice(g.startWeek).concat(h.slice(0, g.startWeek)), j = c.trustAsHtml('<th class="dow text-center">' + i.join('</th><th class="dow text-center">') + "</th>"), k = e.$date || new Date, l = {
                    year: k.getFullYear(),
                    month: k.getMonth(),
                    date: k.getDate()
                };
                return 60000 * k.getTimezoneOffset(), n = [{
                    format: "dd",
                    split: 7,
                    steps: {month: 1},
                    update: function (a, b) {
                        !this.built || b || a.getFullYear() !== l.year || a.getMonth() !== l.month ? (angular.extend(l, {
                            year: e.$date.getFullYear(),
                            month: e.$date.getMonth(),
                            date: e.$date.getDate()
                        }), e.$build()) : a.getDate() !== l.date && (l.date = e.$date.getDate(), e.$updateSelected())
                    },
                    build: function () {
                        var i, k, a = new Date(l.year, l.month, 1), c = new Date(+a - 86400000 * (a.getDay() + g.startWeek)), h = [];
                        for (k = 0; 42 > k; k++) {
                            i = new Date(c.getFullYear(), c.getMonth(), c.getDate() + k), h.push({
                                date: i,
                                label: d(i, this.format),
                                selected: e.$date && this.isSelected(i),
                                muted: i.getMonth() !== l.month,
                                disabled: this.isDisabled(i)
                            })
                        }
                        f.title = d(a, "MMMM yyyy"), f.labels = j, f.rows = b(h, this.split), this.built = !0
                    },
                    isSelected: function (a) {
                        return e.$date && a.getFullYear() === e.$date.getFullYear() && a.getMonth() === e.$date.getMonth() && a.getDate() === e.$date.getDate()
                    },
                    isDisabled: function (a) {
                        return a.getTime() < g.minDate || a.getTime() > g.maxDate
                    },
                    onKeyDown: function (a) {
                        var b = e.$date.getTime();
                        37 === a.keyCode ? e.select(new Date(b - 86400000), !0) : 38 === a.keyCode ? e.select(new Date(b - 604800000), !0) : 39 === a.keyCode ? e.select(new Date(b + 86400000), !0) : 40 === a.keyCode && e.select(new Date(b + 604800000), !0)
                    }
                }, {
                    name: "month", format: "MMM", split: 4, steps: {year: 1}, update: function (a) {
                        this.built && a.getFullYear() === l.year ? a.getMonth() !== l.month && (angular.extend(l, {
                            month: e.$date.getMonth(),
                            date: e.$date.getDate()
                        }), e.$updateSelected()) : (angular.extend(l, {
                            year: e.$date.getFullYear(),
                            month: e.$date.getMonth(),
                            date: e.$date.getDate()
                        }), e.$build())
                    }, build: function () {
                        var g, c, h;
                        for (new Date(l.year, 0, 1), c = [], h = 0; 12 > h; h++) {
                            g = new Date(l.year, h, 1), c.push({
                                date: g,
                                label: d(g, this.format),
                                selected: e.$isSelected(g),
                                disabled: this.isDisabled(g)
                            })
                        }
                        f.title = d(g, "yyyy"), f.labels = !1, f.rows = b(c, this.split), this.built = !0
                    }, isSelected: function (a) {
                        return e.$date && a.getFullYear() === e.$date.getFullYear() && a.getMonth() === e.$date.getMonth()
                    }, isDisabled: function (a) {
                        var b = +new Date(a.getFullYear(), a.getMonth() + 1, 0);
                        return b < g.minDate || a.getTime() > g.maxDate
                    }, onKeyDown: function (a) {
                        var b = e.$date.getMonth();
                        37 === a.keyCode ? e.select(e.$date.setMonth(b - 1), !0) : 38 === a.keyCode ? e.select(e.$date.setMonth(b - 4), !0) : 39 === a.keyCode ? e.select(e.$date.setMonth(b + 1), !0) : 40 === a.keyCode && e.select(e.$date.setMonth(b + 4), !0)
                    }
                }, {
                    name: "year", format: "yyyy", split: 4, steps: {year: 12}, update: function (a, b) {
                        !this.built || b || parseInt(a.getFullYear() / 20, 10) !== parseInt(l.year / 20, 10) ? (angular.extend(l, {
                            year: e.$date.getFullYear(),
                            month: e.$date.getMonth(),
                            date: e.$date.getDate()
                        }), e.$build()) : a.getFullYear() !== l.year && (angular.extend(l, {
                            year: e.$date.getFullYear(),
                            month: e.$date.getMonth(),
                            date: e.$date.getDate()
                        }), e.$updateSelected())
                    }, build: function () {
                        var g, h, a = l.year - l.year % (3 * this.split), c = [];
                        for (h = 0; 12 > h; h++) {
                            g = new Date(a + h, 0, 1), c.push({
                                date: g,
                                label: d(g, this.format),
                                selected: e.$isSelected(g),
                                disabled: this.isDisabled(g)
                            })
                        }
                        f.title = c[0].label + "-" + c[c.length - 1].label, f.labels = !1, f.rows = b(c, this.split), this.built = !0
                    }, isSelected: function (a) {
                        return e.$date && a.getFullYear() === e.$date.getFullYear()
                    }, isDisabled: function (a) {
                        var b = +new Date(a.getFullYear() + 1, 0, 0);
                        return b < g.minDate || a.getTime() > g.maxDate
                    }, onKeyDown: function (a) {
                        var b = e.$date.getFullYear();
                        37 === a.keyCode ? e.select(e.$date.setYear(b - 1), !0) : 38 === a.keyCode ? e.select(e.$date.setYear(b - 4), !0) : 39 === a.keyCode ? e.select(e.$date.setYear(b + 1), !0) : 40 === a.keyCode && e.select(e.$date.setYear(b + 4), !0)
                    }
                }], {views: g.minView ? Array.prototype.slice.call(n, g.minView) : n, viewDate: l}
            }
        }]
    }), angular.module("mgcrea.ngStrap.dropdown", ["mgcrea.ngStrap.tooltip"]).provider("$dropdown", function () {
        var a = this.defaults = {
            animation: "am-fade",
            prefixClass: "dropdown",
            placement: "bottom-left",
            template: "dropdown/dropdown.tpl.html",
            trigger: "click",
            container: !1,
            keyboard: !0,
            html: !1,
            delay: 0
        };
        this.$get = ["$window", "$tooltip", function (b, c) {
            function f(b, f) {
                function k(a) {
                    return a.target !== b[0] ? a.target !== b[0] && g.hide() : void 0
                }

                var i, j, g = {}, h = angular.extend({}, a, f);
                return g = c(b, h), g.$onKeyDown = function (a) {
                    var b, c;
                    /(38|40)/.test(a.keyCode) && (a.preventDefault(), a.stopPropagation(), b = angular.element(g.$element[0].querySelectorAll("li:not(.divider) a")), b.length && (angular.forEach(b, function (a, b) {
                        e && e.call(a, ":focus") && (c = b)
                    }), 38 === a.keyCode && c > 0 ? c-- : 40 === a.keyCode && c < b.length - 1 ? c++ : angular.isUndefined(c) && (c = 0), b.eq(c)[0].focus()))
                }, i = g.show, g.show = function () {
                    i(), setTimeout(function () {
                        h.keyboard && g.$element.on("keydown", g.$onKeyDown), d.on("click", k)
                    })
                }, j = g.hide, g.hide = function () {
                    h.keyboard && g.$element.off("keydown", g.$onKeyDown), d.off("click", k), j()
                }, g
            }

            var d = angular.element(b.document.body), e = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector;
            return f
        }]
    }).directive("bsDropdown", ["$window", "$location", "$sce", "$dropdown", function (a, b, c, d) {
        return {
            restrict: "EAC", scope: !0, link: function (a, b, c) {
                var g, f = {scope: a};
                angular.forEach(["placement", "container", "delay", "trigger", "keyboard", "html", "animation", "template"], function (a) {
                    angular.isDefined(c[a]) && (f[a] = c[a])
                }), c.bsDropdown && a.$watch(c.bsDropdown, function (b) {
                    a.content = b
                }, !0), g = d(b, f), a.$on("$destroy", function () {
                    g.destroy(), f = null, g = null
                })
            }
        }
    }]), angular.module("mgcrea.ngStrap.helpers.dateParser", []).provider("$dateParser", ["$localeProvider", function () {
        var b = Date.prototype, d = this.defaults = {format: "shortDate", strict: !1};
        this.$get = ["$locale", function (a) {
            var c = function (c) {
                function k(a) {
                    var c, g, b = Object.keys(h), d = [], e = [], f = a;
                    for (c = 0; c < b.length; c++) {
                        a.split(b[c]).length > 1 && (g = f.search(b[c]), a = a.split(b[c]).join(""), h[b[c]] && (d[g] = h[b[c]]))
                    }
                    return angular.forEach(d, function (a) {
                        e.push(a)
                    }), e
                }

                function l(a) {
                    return a.replace(/\//g, "[\\/]").replace("/-/g", "[-]").replace(/\./g, "[.]").replace(/\\s/g, "[\\s]")
                }

                function m(a) {
                    var c, b = Object.keys(g), d = a;
                    for (c = 0; c < b.length; c++) {
                        d = d.split(b[c]).join("${" + c + "}")
                    }
                    for (c = 0; c < b.length; c++) {
                        d = d.split("${" + c + "}").join("(" + g[b[c]] + ")")
                    }
                    return a = l(a), new RegExp("^" + d + "$", ["i"])
                }

                var i, j, e = angular.extend({}, d, c), f = {}, g = {
                    sss: "[0-9]{3}",
                    ss: "[0-5][0-9]",
                    s: e.strict ? "[1-5]?[0-9]" : "[0-5][0-9]",
                    mm: "[0-5][0-9]",
                    m: e.strict ? "[1-5]?[0-9]" : "[0-5][0-9]",
                    HH: "[01][0-9]|2[0-3]",
                    H: e.strict ? "[0][1-9]|[1][012]" : "[01][0-9]|2[0-3]",
                    hh: "[0][1-9]|[1][012]",
                    h: e.strict ? "[1-9]|[1][012]" : "[0]?[1-9]|[1][012]",
                    a: "AM|PM",
                    EEEE: a.DATETIME_FORMATS.DAY.join("|"),
                    EEE: a.DATETIME_FORMATS.SHORTDAY.join("|"),
                    dd: "[0-2][0-9]{1}|[3][01]{1}",
                    d: e.strict ? "[1-2]?[0-9]{1}|[3][01]{1}" : "[0-2][0-9]{1}|[3][01]{1}",
                    MMMM: a.DATETIME_FORMATS.MONTH.join("|"),
                    MMM: a.DATETIME_FORMATS.SHORTMONTH.join("|"),
                    MM: "[0][1-9]|[1][012]",
                    M: e.strict ? "[1-9]|[1][012]" : "[0][1-9]|[1][012]",
                    yyyy: "(?:(?:[1]{1}[0-9]{1}[0-9]{1}[0-9]{1})|(?:[2]{1}[0-9]{3}))(?![[0-9]])",
                    yy: "(?:(?:[0-9]{1}[0-9]{1}))(?![[0-9]])"
                }, h = {
                    sss: b.setMilliseconds,
                    ss: b.setSeconds,
                    s: b.setSeconds,
                    mm: b.setMinutes,
                    m: b.setMinutes,
                    HH: b.setHours,
                    H: b.setHours,
                    hh: b.setHours,
                    h: b.setHours,
                    dd: b.setDate,
                    d: b.setDate,
                    a: function (a) {
                        var b = this.getHours();
                        return this.setHours(a.match(/pm/i) ? b + 12 : b)
                    },
                    MMMM: function (b) {
                        return this.setMonth(a.DATETIME_FORMATS.MONTH.indexOf(b))
                    },
                    MMM: function (b) {
                        return this.setMonth(a.DATETIME_FORMATS.SHORTMONTH.indexOf(b))
                    },
                    MM: function (a) {
                        return this.setMonth(1 * a - 1)
                    },
                    M: function (a) {
                        return this.setMonth(1 * a - 1)
                    },
                    yyyy: b.setFullYear,
                    yy: function (a) {
                        return this.setFullYear(2000 + 1 * a)
                    },
                    y: b.setFullYear
                };
                return f.init = function () {
                    f.$format = a.DATETIME_FORMATS[e.format] || e.format, i = m(f.$format), j = k(f.$format)
                }, f.isValid = function (a) {
                    return angular.isDate(a) ? !isNaN(a.getTime()) : i.test(a)
                }, f.parse = function (a, b) {
                    var c, d, e;
                    if (angular.isDate(a)) {
                        return a
                    }
                    if (c = i.exec(a), !c) {
                        return !1
                    }
                    for (d = b || new Date(0), e = 0; e < c.length - 1; e++) {
                        j[e] && j[e].call(d, c[e + 1])
                    }
                    return d
                }, f.init(), f
            };
            return c
        }]
    }]), angular.module("mgcrea.ngStrap.helpers.debounce", []).constant("debounce", function (a, b, c) {
        var d, e, f, g, h;
        return function () {
            var i, j;
            return f = this, e = arguments, g = new Date, i = function () {
                var j = new Date - g;
                b > j ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e)))
            }, j = c && !d, d || (d = setTimeout(i, b)), j && (h = a.apply(f, e)), h
        }
    }).constant("throttle", function (a, b, c) {
        var d, e, f, i, g = null, h = 0;
        return c || (c = {}), i = function () {
            h = c.leading === !1 ? 0 : new Date, g = null, f = a.apply(d, e)
        }, function () {
            var k, j = new Date;
            return h || c.leading !== !1 || (h = j), k = b - (j - h), d = this, e = arguments, 0 >= k ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e)) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
        }
    }), angular.module("mgcrea.ngStrap.helpers.dimensions", []).factory("dimensions", ["$document", "$window", function () {
        var e, f, g;
        return angular.element, e = {}, f = e.nodeName = function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, e.css = function (b, c, d) {
            var e;
            return e = b.currentStyle ? b.currentStyle[c] : a.getComputedStyle ? a.getComputedStyle(b)[c] : b.style[c], d === !0 ? parseFloat(e) || 0 : e
        }, e.offset = function (b) {
            var c = b.getBoundingClientRect(), d = b.ownerDocument;
            return {
                width: b.offsetWidth,
                height: b.offsetHeight,
                top: c.top + (a.pageYOffset || d.documentElement.scrollTop) - (d.documentElement.clientTop || 0),
                left: c.left + (a.pageXOffset || d.documentElement.scrollLeft) - (d.documentElement.clientLeft || 0)
            }
        }, e.position = function (a) {
            var c, d, b = {top: 0, left: 0};
            return "fixed" === e.css(a, "position") ? d = a.getBoundingClientRect() : (c = g(a), d = e.offset(a), d = e.offset(a), f(c, "html") || (b = e.offset(c)), b.top += e.css(c, "borderTopWidth", !0), b.left += e.css(c, "borderLeftWidth", !0)), {
                width: a.offsetWidth,
                height: a.offsetHeight,
                top: d.top - b.top - e.css(a, "marginTop", !0),
                left: d.left - b.left - e.css(a, "marginLeft", !0)
            }
        }, g = function (a) {
            var b = a.ownerDocument, c = a.offsetParent || b;
            if (f(c, "#document")) {
                return b.documentElement
            }
            for (; c && !f(c, "html") && "static" === e.css(c, "position");) {
                c = c.offsetParent
            }
            return c || b.documentElement
        }, e.height = function (a, b) {
            var c = a.offsetHeight;
            return b ? c += e.css(a, "marginTop", !0) + e.css(a, "marginBottom", !0) : c -= e.css(a, "paddingTop", !0) + e.css(a, "paddingBottom", !0) + e.css(a, "borderTopWidth", !0) + e.css(a, "borderBottomWidth", !0), c
        }, e.width = function (a, b) {
            var c = a.offsetWidth;
            return b ? c += e.css(a, "marginLeft", !0) + e.css(a, "marginRight", !0) : c -= e.css(a, "paddingLeft", !0) + e.css(a, "paddingRight", !0) + e.css(a, "borderLeftWidth", !0) + e.css(a, "borderRightWidth", !0), c
        }, e
    }]), angular.module("mgcrea.ngStrap.helpers.parseOptions", []).provider("$parseOptions", function () {
        var a = this.defaults = {regexp: /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/};
        this.$get = ["$parse", "$q", function (b, c) {
            function d(d, e) {
                function o(a) {
                    return a.map(function (a, b) {
                        var d, e, c = {};
                        return c[j] = a, d = i(c), e = m(c) || b, {label: d, value: e}
                    })
                }

                var h, i, j, k, l, m, n, f = {}, g = angular.extend({}, a, e);
                return f.$values = [], f.init = function () {
                    f.$match = h = d.match(g.regexp), i = b(h[2] || h[1]), j = h[4] || h[6], k = h[5], l = b(h[3] || ""), m = b(h[2] ? h[1] : j), n = b(h[7])
                }, f.valuesFn = function (a, b) {
                    return c.when(n(a, b)).then(function (a) {
                        return f.$values = a ? o(a) : {}, f.$values
                    })
                }, f.init(), f
            }

            return d
        }]
    }), angular.module("mgcrea.ngStrap.modal", ["mgcrea.ngStrap.helpers.dimensions"]).provider("$modal", function () {
        var a = this.defaults = {
            animation: "am-fade",
            backdropAnimation: "am-fade",
            prefixClass: "modal",
            placement: "top",
            template: "modal/modal.tpl.html",
            contentTemplate: !1,
            container: !1,
            element: null,
            backdrop: !0,
            keyboard: !0,
            html: !1,
            show: !0
        };
        this.$get = ["$window", "$rootScope", "$compile", "$q", "$templateCache", "$http", "$animate", "$timeout", "dimensions", function (c, d, e, f, g, h, i) {
            function q(b) {
                function q(a) {
                    a.target === a.currentTarget && ("static" === f.backdrop ? c.focus() : c.hide())
                }

                var g, h, j, k, c = {}, f = angular.extend({}, a, b);
                return c.$promise = s(f.template), g = c.$scope = f.scope && f.scope.$new() || d.$new(), f.element || f.container || (f.container = "body"), f.scope || l(["title", "content"], function (a) {
                    f[a] && (g[a] = f[a])
                }), g.$hide = function () {
                    g.$$postDigest(function () {
                        c.hide()
                    })
                }, g.$show = function () {
                    g.$$postDigest(function () {
                        c.show()
                    })
                }, g.$toggle = function () {
                    g.$$postDigest(function () {
                        c.toggle()
                    })
                }, f.contentTemplate && (c.$promise = c.$promise.then(function (a) {
                    var c = angular.element(a);
                    return s(f.contentTemplate).then(function (a) {
                        var d = r('[ng-bind="content"]', c[0]).removeAttr("ng-bind").html(a);
                        return b.template || d.next().remove(), c[0].outerHTML
                    })
                })), k = angular.element('<div class="' + f.prefixClass + '-backdrop"/>'), c.$promise.then(function (a) {
                    angular.isObject(a) && (a = a.data), f.html && (a = a.replace(p, 'ng-bind-html="')), m && (a = m.apply(a)), h = e(a), c.init()
                }), c.init = function () {
                    f.show && g.$$postDigest(function () {
                        c.show()
                    })
                }, c.destroy = function () {
                    j && (j.remove(), j = null), k && (k.remove(), k = null), g.$destroy()
                }, c.show = function () {
                    var d, a = f.container ? r(f.container) : null, b = f.container ? null : f.element;
                    j = c.$element = h(g, function () {
                    }), j.css({display: "block"}).addClass(f.placement), f.animation && (f.backdrop && k.addClass(f.backdropAnimation), j.addClass(f.animation)), f.backdrop && i.enter(k, o, null, function () {
                    }), i.enter(j, a, b, function () {
                    }), g.$isShown = !0, g.$$phase || g.$digest(), d = j[0], n(function () {
                        d.focus()
                    }), o.addClass(f.prefixClass + "-open"), f.backdrop && (j.on("click", q), k.on("click", q)), f.keyboard && j.on("keyup", c.$onKeyUp)
                }, c.hide = function () {
                    var frame = $(k).find("iframe");
                    if (frame) {
                        $.each(frame, function (n, el) {
                            try {
                                el.src = "about:blank";
                                var iframe = el.contentWindow;
                                iframe.document.readyState = "complete";
                                iframe.document.write("");
                                iframe.close()
                            } catch (e) {
                            }
                        })
                    }
                    i.leave(j, function () {
                        o.removeClass(f.prefixClass + "-open")
                    }), f.backdrop && i.leave(k, function () {
                    }), g.$isShown = !1, g.$$phase || g.$digest(), f.backdrop && (j.off("click", q), k.off("click", q)), f.keyboard && j.off("keyup", c.$onKeyUp)
                }, c.toggle = function () {
                    g.$isShown ? c.hide() : c.show()
                }, c.focus = function () {
                    j[0].focus()
                }, c.$onKeyUp = function (a) {
                    27 === a.which && c.hide()
                }, c
            }

            function r(a, c) {
                return angular.element((c || b).querySelectorAll(a))
            }

            function s(a) {
                return f.when(g.get(a) || h.get(a)).then(function (b) {
                    return angular.isObject(b) ? (g.put(a, b.data), b.data) : b
                })
            }

            var l = angular.forEach, m = String.prototype.trim, n = c.requestAnimationFrame || c.setTimeout, o = angular.element(c.document.body), p = /ng-bind="/gi;
            return q
        }]
    }).directive("bsModal", ["$window", "$location", "$sce", "$modal", function (a, b, c, d) {
        return {
            restrict: "EAC", scope: !0, link: function (a, b, e) {
                var h, g = {scope: a, element: b, show: !1};
                angular.forEach(["template", "contentTemplate", "placement", "backdrop", "keyboard", "html", "container", "animation"], function (a) {
                    angular.isDefined(e[a]) && (g[a] = e[a])
                }), angular.forEach(["title", "content"], function (b) {
                    e[b] && e.$observe(b, function (d) {
                        a[b] = c.getTrustedHtml(d)
                    })
                }), e.bsModal && a.$watch(e.bsModal, function (b) {
                    angular.isObject(b) ? angular.extend(a, b) : a.content = b
                }, !0), h = d(g), b.on(e.trigger || "click", h.toggle), a.$on("$destroy", function () {
                    h.destroy(), g = null, h = null
                })
            }
        }
    }]), angular.module("mgcrea.ngStrap.navbar", []).provider("$navbar", function () {
        var a = this.defaults = {activeClass: "active", routeAttr: "data-match-route"};
        this.$get = function () {
            return {defaults: a}
        }
    }).directive("bsNavbar", ["$window", "$location", "$navbar", function (a, b, c) {
        var d = c.defaults;
        return {
            restrict: "A", link: function (a, c, e) {
                var g = d;
                angular.forEach(Object.keys(d), function (a) {
                    angular.isDefined(e[a]) && (g[a] = e[a])
                }), a.$watch(function () {
                    return b.path()
                }, function (a) {
                    var d = c[0].querySelectorAll("li[" + g.routeAttr + "]");
                    angular.forEach(d, function (b) {
                        var c = angular.element(b), d = c.attr(g.routeAttr), e = new RegExp("^" + d.replace("/", "\\/") + "$", ["i"]);
                        e.test(a) ? c.addClass(g.activeClass) : c.removeClass(g.activeClass)
                    })
                })
            }
        }
    }]), angular.module("mgcrea.ngStrap.popover", ["mgcrea.ngStrap.tooltip"]).provider("$popover", function () {
        var a = this.defaults = {
            animation: "am-fade",
            placement: "right",
            template: "popover/popover.tpl.html",
            contentTemplate: !1,
            trigger: "click",
            keyboard: !0,
            html: !1,
            title: "",
            content: "",
            delay: 0,
            container: !1
        };
        this.$get = ["$tooltip", function (b) {
            function c(c, d) {
                var e = angular.extend({}, a, d), f = b(c, e);
                return e.content && (f.$scope.content = e.content), f
            }

            return c
        }]
    }).directive("bsPopover", ["$window", "$location", "$sce", "$popover", function (a, b, c, d) {
        var e = a.requestAnimationFrame || a.setTimeout;
        return {
            restrict: "EAC", scope: !0, link: function (a, b, f) {
                var h, g = {scope: a};
                angular.forEach(["template", "contentTemplate", "placement", "container", "delay", "trigger", "keyboard", "html", "animation"], function (a) {
                    angular.isDefined(f[a]) && (g[a] = f[a])
                }), angular.forEach(["title", "content"], function (b) {
                    f[b] && f.$observe(b, function (d, f) {
                        a[b] = c.getTrustedHtml(d), angular.isDefined(f) && e(function () {
                            h && h.$applyPlacement()
                        })
                    })
                }), f.bsPopover && a.$watch(f.bsPopover, function (b, c) {
                    angular.isObject(b) ? angular.extend(a, b) : a.content = b, angular.isDefined(c) && e(function () {
                        h && h.$applyPlacement()
                    })
                }, !0), h = d(b, g), a.$on("$destroy", function () {
                    h.destroy(), g = null, h = null
                })
            }
        }
    }]), angular.module("mgcrea.ngStrap.scrollspy", ["mgcrea.ngStrap.helpers.debounce", "mgcrea.ngStrap.helpers.dimensions"]).provider("$scrollspy", function () {
        var a = this.$$spies = {}, c = this.defaults = {debounce: 150, throttle: 100, offset: 100};
        this.$get = ["$window", "$document", "$rootScope", "dimensions", "debounce", "throttle", function (d, e, f, g, h, i) {
            function m(a, b) {
                return a[0].nodeName && a[0].nodeName.toLowerCase() === b.toLowerCase()
            }

            function n(e) {
                var o, p, q, r, s, t, u, v, w, x, y, z, n = angular.extend({}, c, e);
                return n.element || (n.element = l), o = m(n.element, "body"), p = o ? j : n.element, q = o ? "window" : n.id, a[q] ? (a[q].$$count++, a[q]) : (r = {}, s = r.$trackedElements = [], t = [], r.init = function () {
                    this.$$count = 1, v = h(this.checkPosition, n.debounce), w = i(this.checkPosition, n.throttle), p.on("click", this.checkPositionWithEventLoop), j.on("resize", v), p.on("scroll", w), x = h(this.checkOffsets, n.debounce), f.$on("$viewContentLoaded", x), f.$on("$includeContentLoaded", x), x(), q && (a[q] = r)
                }, r.destroy = function () {
                    this.$$count--, this.$$count > 0 || (p.off("click", this.checkPositionWithEventLoop), j.off("resize", v), p.off("scroll", v), f.$off("$viewContentLoaded", x), f.$off("$includeContentLoaded", x))
                }, r.checkPosition = function () {
                    if (t.length) {
                        if (z = (o ? d.pageYOffset : p.prop("scrollTop")) || 0, y = Math.max(d.innerHeight, k.prop("clientHeight")), z < t[0].offsetTop && u !== t[0].target) {
                            return r.$activateElement(t[0])
                        }
                        for (var a = t.length; a--;) {
                            if (!(angular.isUndefined(t[a].offsetTop) || null === t[a].offsetTop || u === t[a].target || z < t[a].offsetTop || t[a + 1] && z > t[a + 1].offsetTop)) {
                                return r.$activateElement(t[a])
                            }
                        }
                    }
                }, r.checkPositionWithEventLoop = function () {
                    setTimeout(this.checkPosition, 1)
                }, r.$activateElement = function (a) {
                    if (u) {
                        var b = r.$getTrackedElement(u);
                        b && (b.source.removeClass("active"), m(b.source, "li") && m(b.source.parent().parent(), "li") && b.source.parent().parent().removeClass("active"))
                    }
                    u = a.target, a.source.addClass("active"), m(a.source, "li") && m(a.source.parent().parent(), "li") && a.source.parent().parent().addClass("active")
                }, r.$getTrackedElement = function (a) {
                    return s.filter(function (b) {
                        return b.target === a
                    })[0]
                }, r.checkOffsets = function () {
                    angular.forEach(s, function (a) {
                        var c = b.querySelector(a.target);
                        a.offsetTop = c ? g.offset(c).top : null, n.offset && null !== a.offsetTop && (a.offsetTop -= 1 * n.offset)
                    }), t = s.filter(function (a) {
                        return null !== a.offsetTop
                    }).sort(function (a, b) {
                        return a.offsetTop - b.offsetTop
                    }), v()
                }, r.trackElement = function (a, b) {
                    s.push({target: a, source: b})
                }, r.untrackElement = function (a, b) {
                    var c, d;
                    for (d = s.length; d--;) {
                        if (s[d].target === a && s[d].source === b) {
                            c = d;
                            break
                        }
                    }
                    s = s.splice(c, 1)
                }, r.activate = function (a) {
                    s[a].addClass("active")
                }, r.init(), r)
            }

            var j = angular.element(d), k = angular.element(e.prop("documentElement")), l = angular.element(d.document.body);
            return n
        }]
    }).directive("bsScrollspy", ["$rootScope", "debounce", "dimensions", "$scrollspy", function (a, b, c, d) {
        return {
            restrict: "EAC", link: function (a, b, c) {
                var f, e = {scope: a};
                angular.forEach(["offset", "target"], function (a) {
                    angular.isDefined(c[a]) && (e[a] = c[a])
                }), f = d(e), f.trackElement(e.target, b), a.$on("$destroy", function () {
                    f.untrackElement(e.target, b), f.destroy(), e = null, f = null
                })
            }
        }
    }]).directive("bsScrollspyList", ["$rootScope", "debounce", "dimensions", "$scrollspy", function () {
        return {
            restrict: "A", compile: function (a) {
                var c = a[0].querySelectorAll("li > a[href]");
                angular.forEach(c, function (a) {
                    var b = angular.element(a);
                    b.parent().attr("bs-scrollspy", "").attr("data-target", b.attr("href"))
                })
            }
        }
    }]), angular.module("mgcrea.ngStrap.select", ["mgcrea.ngStrap.tooltip", "mgcrea.ngStrap.helpers.parseOptions"]).provider("$select", function () {
        var a = this.defaults = {
            animation: "am-fade",
            prefixClass: "select",
            placement: "bottom-left",
            template: "select/select.tpl.html",
            trigger: "focus",
            container: !1,
            keyboard: !0,
            html: !1,
            delay: 0,
            multiple: !1,
            sort: !0,
            caretHtml: '&nbsp;<span class="caret"></span>',
            placeholder: "Choose among the following..."
        };
        this.$get = ["$window", "$document", "$rootScope", "$tooltip", function (b, c, d, e) {
            function h(b, c, d) {
                var i, j, k, l, m, n, f = {}, h = angular.extend({}, a, d);
                return f = e(b, h), i = d.scope, j = f.$scope, j.$matches = [], j.$activeIndex = 0, j.$isMultiple = h.multiple, j.$activate = function (a) {
                    j.$$postDigest(function () {
                        f.activate(a)
                    })
                }, j.$select = function (a) {
                    j.$$postDigest(function () {
                        f.select(a)
                    })
                }, j.$isVisible = function () {
                    return f.$isVisible()
                }, j.$isActive = function (a) {
                    return f.$isActive(a)
                }, f.update = function (a) {
                    j.$matches = a, f.$updateActiveIndex()
                }, f.activate = function (a) {
                    return h.multiple ? (j.$activeIndex.sort(), f.$isActive(a) ? j.$activeIndex.splice(j.$activeIndex.indexOf(a), 1) : j.$activeIndex.push(a), h.sort && j.$activeIndex.sort()) : j.$activeIndex = a, j.$activeIndex
                }, f.select = function (a) {
                    var d = j.$matches[a].value;
                    f.activate(a), h.multiple ? c.$setViewValue(j.$activeIndex.map(function (a) {
                        return j.$matches[a].value
                    })) : c.$setViewValue(d), c.$render(), i && i.$digest(), h.multiple || ("focus" === h.trigger ? b[0].blur() : f.$isShown && f.hide()), j.$emit("$select.select", d, a)
                }, f.$updateActiveIndex = function () {
                    c.$modelValue && j.$matches.length ? j.$activeIndex = h.multiple && angular.isArray(c.$modelValue) ? c.$modelValue.map(function (a) {
                        return f.$getIndex(a)
                    }) : f.$getIndex(c.$modelValue) : j.$activeIndex >= j.$matches.length && (j.$activeIndex = h.multiple ? [] : 0)
                }, f.$isVisible = function () {
                    return h.minLength && c ? j.$matches.length && c.$viewValue.length >= h.minLength : j.$matches.length
                }, f.$isActive = function (a) {
                    return h.multiple ? -1 !== j.$activeIndex.indexOf(a) : j.$activeIndex === a
                }, f.$getIndex = function (a) {
                    var b = j.$matches.length, c = b;
                    if (b) {
                        for (c = b; c-- && j.$matches[c].value !== a;) {
                        }
                        if (!(0 > c)) {
                            return c
                        }
                    }
                }, f.$onElementMouseDown = function (a) {
                    a.preventDefault(), a.stopPropagation(), f.$isShown ? b[0].blur() : b[0].focus()
                }, f.$onMouseDown = function (a) {
                    if (a.preventDefault(), a.stopPropagation(), g) {
                        var b = angular.element(a.target);
                        b.triggerHandler("click")
                    }
                }, f.$onKeyDown = function (a) {
                    if (/(38|40|13)/.test(a.keyCode)) {
                        if (a.preventDefault(), a.stopPropagation(), 13 === a.keyCode) {
                            return f.select(j.$activeIndex)
                        }
                        38 === a.keyCode && j.$activeIndex > 0 ? j.$activeIndex-- : 40 === a.keyCode && j.$activeIndex < j.$matches.length - 1 ? j.$activeIndex++ : angular.isUndefined(j.$activeIndex) && (j.$activeIndex = 0), j.$digest()
                    }
                }, k = f.init, f.init = function () {
                    k(), b.on(g ? "touchstart" : "mousedown", f.$onElementMouseDown)
                }, l = f.destroy, f.destroy = function () {
                    l(), b.off(g ? "touchstart" : "mousedown", f.$onElementMouseDown)
                }, m = f.show, f.show = function () {
                    m(), h.multiple && f.$element.addClass("select-multiple"), setTimeout(function () {
                        f.$element.on(g ? "touchstart" : "mousedown", f.$onMouseDown), h.keyboard && b.on("keydown", f.$onKeyDown)
                    })
                }, n = f.hide, f.hide = function () {
                    f.$element.off(g ? "touchstart" : "mousedown", f.$onMouseDown), h.keyboard && b.off("keydown", f.$onKeyDown), n()
                }, f
            }

            angular.element(b.document.body);
            var g = "createTouch" in b.document;
            return h.defaults = a, h
        }]
    }).directive("bsSelect", ["$window", "$parse", "$q", "$select", "$parseOptions", function (a, b, c, d, e) {
        var f = d.defaults;
        return {
            restrict: "EAC", require: "ngModel", link: function (a, b, c, g) {
                var i, j, k, l, h = {scope: a};
                angular.forEach(["placement", "container", "delay", "trigger", "keyboard", "html", "animation", "template", "placeholder", "multiple"], function (a) {
                    angular.isDefined(c[a]) && (h[a] = c[a])
                }), "select" === b[0].nodeName.toLowerCase() && (i = b, i.css("display", "none"), b = angular.element('<button type="button" class="btn btn-default"></button>'), i.after(b)), j = e(c.ngOptions), k = d(b, g, h), l = j.$match[7].replace(/\|.+/, "").trim(), a.$watch(l, function () {
                    j.valuesFn(a, g).then(function (a) {
                        k.update(a), g.$render()
                    })
                }, !0), a.$watch(c.ngModel, function () {
                    k.$updateActiveIndex()
                }, !0), g.$render = function () {
                    var a, d;
                    h.multiple && angular.isArray(g.$modelValue) ? a = g.$modelValue.map(function (a) {
                        return d = k.$getIndex(a), angular.isDefined(d) ? k.$scope.$matches[d].label : !1
                    }).filter(angular.isDefined).join(", ") : (d = k.$getIndex(g.$modelValue), a = angular.isDefined(d) ? k.$scope.$matches[d].label : !1), b.html((a ? a : c.placeholder || f.placeholder) + f.caretHtml)
                }, a.$on("$destroy", function () {
                    k.destroy(), h = null, k = null
                })
            }
        }
    }]), angular.module("mgcrea.ngStrap.tab", []).run(["$templateCache", function (a) {
        a.put("$pane", "{{pane.content}}")
    }]).provider("$tab", function () {
        var a = this.defaults = {animation: "am-fade", template: "tab/tab.tpl.html"};
        this.$get = function () {
            return {defaults: a}
        }
    }).directive("bsTabs", ["$window", "$animate", "$tab", function (a, b, c) {
        var d = c.defaults;
        return {
            restrict: "EAC", scope: !0, require: "?ngModel", templateUrl: function (a, b) {
                return b.template || d.template
            }, link: function (a, b, c, e) {
                var f = d;
                angular.forEach(["animation"], function (a) {
                    angular.isDefined(c[a]) && (f[a] = c[a])
                }), c.bsTabs && a.$watch(c.bsTabs, function (b) {
                    a.panes = b
                }, !0), b.addClass("tabs"), f.animation && b.addClass(f.animation), a.active = a.activePane = 0, a.setActive = function (b) {
                    a.active = b, e && e.$setViewValue(b)
                }, e && (e.$render = function () {
                    a.active = 1 * e.$modelValue
                })
            }
        }
    }]), angular.module("mgcrea.ngStrap.timepicker", ["mgcrea.ngStrap.helpers.dateParser", "mgcrea.ngStrap.tooltip"]).provider("$timepicker", function () {
        var a = this.defaults = {
            animation: "am-fade",
            prefixClass: "timepicker",
            placement: "bottom-left",
            template: "timepicker/timepicker.tpl.html",
            trigger: "focus",
            container: !1,
            keyboard: !0,
            html: !1,
            delay: 0,
            useNative: !0,
            timeType: "date",
            timeFormat: "shortTime",
            autoclose: !1,
            minTime: -1 / 0,
            maxTime: +1 / 0,
            length: 5,
            hourStep: 1,
            minuteStep: 5
        };
        this.$get = ["$window", "$document", "$rootScope", "$sce", "$locale", "dateFilter", "$tooltip", function (b, c, d, e, f, g, h) {
            function l(b, c, d) {
                function s(a, c) {
                    if (b[0].createTextRange) {
                        var d = b[0].createTextRange();
                        d.collapse(!0), d.moveStart("character", a), d.moveEnd("character", c), d.select()
                    } else {
                        b[0].setSelectionRange ? b[0].setSelectionRange(a, c) : angular.isUndefined(b[0].selectionStart) && (b[0].selectionStart = a, b[0].selectionEnd = c)
                    }
                }

                function t() {
                    b[0].focus()
                }

                var u, v, w, x, e = h(b, angular.extend({}, a, d)), i = d.scope, l = e.$options, m = e.$scope, n = 0, o = c.$dateValue || new Date, p = {
                    hour: o.getHours(),
                    meridian: o.getHours() < 12,
                    minute: o.getMinutes(),
                    second: o.getSeconds(),
                    millisecond: o.getMilliseconds()
                }, q = f.DATETIME_FORMATS[l.timeFormat] || l.timeFormat, r = /(h+)[:]?(m+)[ ]?(a?)/i.exec(q).slice(1);
                return m.$select = function (a, b) {
                    e.select(a, b)
                }, m.$moveIndex = function (a, b) {
                    e.$moveIndex(a, b)
                }, m.$switchMeridian = function (a) {
                    e.switchMeridian(a)
                }, e.update = function (a) {
                    angular.isDate(a) && !isNaN(a.getTime()) ? (e.$date = a, angular.extend(p, {
                        hour: a.getHours(),
                        minute: a.getMinutes(),
                        second: a.getSeconds(),
                        millisecond: a.getMilliseconds()
                    }), e.$build()) : e.$isBuilt || e.$build()
                }, e.select = function (a, b, d) {
                    isNaN(c.$dateValue.getTime()) && (c.$dateValue = new Date(1970, 0, 1)), angular.isDate(a) || (a = new Date(a)), 0 === b ? c.$dateValue.setHours(a.getHours()) : 1 === b && c.$dateValue.setMinutes(a.getMinutes()), c.$setViewValue(c.$dateValue), c.$render(), l.autoclose && !d && e.hide(!0)
                }, e.switchMeridian = function (a) {
                    var b = (a || c.$dateValue).getHours();
                    c.$dateValue.setHours(12 > b ? b + 12 : b - 12), c.$render()
                }, e.$build = function () {
                    var a, d, h, f, i, b = m.midIndex = parseInt(l.length / 2, 10), c = [];
                    for (a = 0; a < l.length; a++) {
                        d = new Date(1970, 0, 1, p.hour - (b - a) * l.hourStep), c.push({
                            date: d,
                            label: g(d, r[0]),
                            selected: e.$date && e.$isSelected(d, 0),
                            disabled: e.$isDisabled(d, 0)
                        })
                    }
                    for (f = [], a = 0; a < l.length; a++) {
                        h = new Date(1970, 0, 1, 0, p.minute - (b - a) * l.minuteStep), f.push({
                            date: h,
                            label: g(h, r[1]),
                            selected: e.$date && e.$isSelected(h, 1),
                            disabled: e.$isDisabled(h, 1)
                        })
                    }
                    for (i = [], a = 0; a < l.length; a++) {
                        i.push([c[a], f[a]])
                    }
                    m.rows = i, m.showAM = !!r[2], m.isAM = (e.$date || c[b].date).getHours() < 12, e.$isBuilt = !0
                }, e.$isSelected = function (a, b) {
                    return e.$date ? 0 === b ? a.getHours() === e.$date.getHours() : 1 === b ? a.getMinutes() === e.$date.getMinutes() : void 0 : !1
                }, e.$isDisabled = function (a, b) {
                    var c;
                    return 0 === b ? c = a.getTime() + 60000 * p.minute : 1 === b && (c = a.getTime() + 3600000 * p.hour), c < l.minTime || c > l.maxTime
                }, e.$moveIndex = function (a, b) {
                    var c;
                    0 === b ? (c = new Date(1970, 0, 1, p.hour + a * l.length, p.minute), angular.extend(p, {hour: c.getHours()})) : 1 === b && (c = new Date(1970, 0, 1, p.hour, p.minute + 5 * a * l.length), angular.extend(p, {minute: c.getMinutes()})), e.$build()
                }, e.$onMouseDown = function (a) {
                    if ("input" !== a.target.nodeName.toLowerCase() && a.preventDefault(), a.stopPropagation(), j) {
                        var b = angular.element(a.target);
                        "button" !== b[0].nodeName.toLowerCase() && (b = b.parent()), b.triggerHandler("click")
                    }
                }, e.$onKeyDown = function (a) {
                    var b, c, d, f, h, j, k;
                    if (/(38|37|39|40|13)/.test(a.keyCode) && !a.shiftKey && !a.altKey) {
                        if (a.preventDefault(), a.stopPropagation(), 13 === a.keyCode) {
                            return e.hide(!0)
                        }
                        if (b = new Date(e.$date), c = b.getHours(), d = g(b, "h").length, f = b.getMinutes(), h = g(b, "mm").length, j = /(37|39)/.test(a.keyCode), k = 2 + 1 * !!r[2], j && (37 === a.keyCode ? n = 1 > n ? k - 1 : n - 1 : 39 === a.keyCode && (n = k - 1 > n ? n + 1 : 0)), 0 === n) {
                            if (j) {
                                return s(0, d)
                            }
                            38 === a.keyCode ? b.setHours(c - l.hourStep) : 40 === a.keyCode && b.setHours(c + l.hourStep)
                        } else {
                            if (1 === n) {
                                if (j) {
                                    return s(d + 1, d + 1 + h)
                                }
                                38 === a.keyCode ? b.setMinutes(f - l.minuteStep) : 40 === a.keyCode && b.setMinutes(f + l.minuteStep)
                            } else {
                                if (2 === n) {
                                    if (j) {
                                        return s(d + 1 + h + 1, d + 1 + h + 3)
                                    }
                                    e.switchMeridian()
                                }
                            }
                        }
                        e.select(b, n, !0), i.$digest()
                    }
                }, u = e.init, e.init = function () {
                    return k && l.useNative ? (b.prop("type", "time"), b.css("-webkit-appearance", "textfield"), void 0) : (j && (b.prop("type", "text"), b.attr("readonly", "true"), b.on("click", t)), u(), void 0)
                }, v = e.destroy, e.destroy = function () {
                    k && l.useNative && b.off("click", t), v()
                }, w = e.show, e.show = function () {
                    w(), setTimeout(function () {
                        e.$element.on(j ? "touchstart" : "mousedown", e.$onMouseDown), l.keyboard && b.on("keydown", e.$onKeyDown)
                    })
                }, x = e.hide, e.hide = function (a) {
                    e.$element.off(j ? "touchstart" : "mousedown", e.$onMouseDown), l.keyboard && b.off("keydown", e.$onKeyDown), x(a)
                }, e
            }

            var j, k;
            return angular.element(b.document.body), j = "createTouch" in b.document, k = /(ip(a|o)d|iphone|android)/gi.test(b.navigator.userAgent), a.lang || (a.lang = f.id), l.defaults = a, l
        }]
    }).directive("bsTimepicker", ["$window", "$parse", "$q", "$locale", "dateFilter", "$timepicker", "$dateParser", "$timeout", function (a, b, c, d, e, f, g) {
        f.defaults;
        var j = /(ip(a|o)d|iphone|android)/gi.test(a.navigator.userAgent);
        return a.requestAnimationFrame || a.setTimeout, {
            restrict: "EAC",
            require: "ngModel",
            link: function (a, b, c, d) {
                var i, k, h = {scope: a, controller: d};
                angular.forEach(["placement", "container", "delay", "trigger", "keyboard", "html", "animation", "template", "autoclose", "timeType", "timeFormat", "useNative", "lang"], function (a) {
                    angular.isDefined(c[a]) && (h[a] = c[a])
                }), j && h.useNative && (h.timeFormat = "HH:mm"), i = f(b, d, h), h = i.$options, k = g({
                    format: h.timeFormat,
                    lang: h.lang
                }), angular.forEach(["minTime", "maxTime"], function (a) {
                    angular.isDefined(c[a]) && c.$observe(a, function (b) {
                        i.$options[a] = "now" === b ? (new Date).setFullYear(1970, 0, 1) : angular.isString(b) && b.match(/^".+"$/) ? +new Date(b.substr(1, b.length - 2)) : k.parse(b), !isNaN(i.$options[a]) && i.$build()
                    })
                }), a.$watch(c.ngModel, function () {
                    i.update(d.$dateValue)
                }, !0), d.$parsers.unshift(function (a) {
                    var b, c;
                    return a ? (b = k.parse(a, d.$dateValue), !b || isNaN(b.getTime()) ? d.$setValidity("date", !1) : (c = b.getTime() >= h.minTime && b.getTime() <= h.maxTime, d.$setValidity("date", c), c && (d.$dateValue = b)), "string" === h.timeType ? e(a, h.timeFormat) : "number" === h.timeType ? d.$dateValue.getTime() : "iso" === h.timeType ? d.$dateValue.toISOString() : d.$dateValue) : (d.$setValidity("date", !0), void 0)
                }), d.$formatters.push(function (a) {
                    var b = angular.isDate(a) ? a : new Date(a);
                    return d.$dateValue = b, d.$dateValue
                }), d.$render = function () {
                    b.val(isNaN(d.$dateValue.getTime()) ? "" : e(d.$dateValue, h.timeFormat))
                }, a.$on("$destroy", function () {
                    i.destroy(), h = null, i = null
                })
            }
        }
    }]), angular.module("mgcrea.ngStrap.tooltip", ["ngAnimate", "mgcrea.ngStrap.helpers.dimensions"]).provider("$tooltip", function () {
        var a = this.defaults = {
            animation: "am-fade",
            prefixClass: "tooltip",
            container: !1,
            placement: "top",
            template: "tooltip/tooltip.tpl.html",
            contentTemplate: !1,
            trigger: "hover focus",
            keyboard: !1,
            html: !1,
            show: !1,
            title: "",
            type: "",
            delay: 0
        };
        this.$get = ["$window", "$rootScope", "$compile", "$q", "$templateCache", "$http", "$animate", "$timeout", "dimensions", "$$animateReflow", function (c, d, e, f, g, h, i, j, k, l) {
            function p(b, c) {
                function v() {
                    return "body" === g.container ? k.offset(b[0]) : k.position(b[0])
                }

                function w(a, b, c, d) {
                    var e, f = a.split("-");
                    switch (f[0]) {
                        case"right":
                            e = {top: b.top + b.height / 2 - d / 2, left: b.left + b.width};
                            break;
                        case"bottom":
                            e = {top: b.top + b.height, left: b.left + b.width / 2 - c / 2};
                            break;
                        case"left":
                            e = {top: b.top + b.height / 2 - d / 2, left: b.left - c};
                            break;
                        default:
                            e = {top: b.top - d, left: b.left + b.width / 2 - c / 2}
                    }
                    if (!f[1]) {
                        return e
                    }
                    if ("top" === f[0] || "bottom" === f[0]) {
                        switch (f[1]) {
                            case"left":
                                e.left = b.left;
                                break;
                            case"right":
                                e.left = b.left + b.width - c
                        }
                    } else {
                        if ("left" === f[0] || "right" === f[0]) {
                            switch (f[1]) {
                                case"top":
                                    e.top = b.top - d;
                                    break;
                                case"bottom":
                                    e.top = b.top + b.height
                            }
                        }
                    }
                    return e
                }

                var h, j, n, p, s, t, u, f = {}, g = f.$options = angular.extend({}, a, c);
                return f.$promise = r(g.template), h = f.$scope = g.scope && g.scope.$new() || d.$new(), g.delay && angular.isString(g.delay) && (g.delay = parseFloat(g.delay)), g.title && (f.$scope.title = g.title), h.$hide = function () {
                    h.$$postDigest(function () {
                        f.hide()
                    })
                }, h.$show = function () {
                    h.$$postDigest(function () {
                        f.show()
                    })
                }, h.$toggle = function () {
                    h.$$postDigest(function () {
                        f.toggle()
                    })
                }, f.$isShown = !1, g.contentTemplate && (f.$promise = f.$promise.then(function (a) {
                    var b = angular.element(a);
                    return r(g.contentTemplate).then(function (a) {
                        return q('[ng-bind="content"]', b[0]).removeAttr("ng-bind").html(a), b[0].outerHTML
                    })
                })), f.$promise.then(function (a) {
                    angular.isObject(a) && (a = a.data), g.html && (a = a.replace(o, 'ng-bind-html="')), m && (a = m.apply(a)), t = a, p = e(a), f.init()
                }), f.init = function () {
                    g.delay && angular.isNumber(g.delay) && (g.delay = {
                        show: g.delay,
                        hide: g.delay
                    }), "self" === g.container ? u = b : g.container && (u = q(g.container));
                    var a = g.trigger.split(" ");
                    angular.forEach(a, function (a) {
                        "click" === a ? b.on("click", f.toggle) : "manual" !== a && (b.on("hover" === a ? "mouseenter" : "focus", f.enter), b.on("hover" === a ? "mouseleave" : "blur", f.leave))
                    }), g.show && h.$$postDigest(function () {
                        "focus" === g.trigger ? b[0].focus() : f.show()
                    })
                }, f.destroy = function () {
                    var c, d, a = g.trigger.split(" ");
                    for (c = a.length; c--;) {
                        d = a[c], "click" === d ? b.off("click", f.toggle) : "manual" !== d && (b.off("hover" === d ? "mouseenter" : "focus", f.enter), b.off("hover" === d ? "mouseleave" : "blur", f.leave))
                    }
                    s && (s.remove(), s = null), h.$destroy()
                }, f.enter = function () {
                    return clearTimeout(j), n = "in", g.delay && g.delay.show ? (j = setTimeout(function () {
                        "in" === n && f.show()
                    }, g.delay.show), void 0) : f.show()
                }, f.show = function () {
                    var a = g.container ? u : null, c = g.container ? null : b;
                    s && s.remove(), s = f.$element = p(h, function () {
                    }), s.css({
                        top: "0px",
                        left: "0px",
                        display: "block"
                    }).addClass(g.placement), g.animation && s.addClass(g.animation), g.type && s.addClass(g.prefixClass + "-" + g.type), i.enter(s, a, c, function () {
                    }), f.$isShown = !0, h.$$phase || h.$digest(), l(f.$applyPlacement), g.keyboard && ("focus" !== g.trigger ? (f.focus(), s.on("keyup", f.$onKeyUp)) : b.on("keyup", f.$onFocusKeyUp))
                }, f.leave = function () {
                    return clearTimeout(j), n = "out", g.delay && g.delay.hide ? (j = setTimeout(function () {
                        "out" === n && f.hide()
                    }, g.delay.hide), void 0) : f.hide()
                }, f.hide = function (a) {
                    return f.$isShown ? (i.leave(s, function () {
                        s = null
                    }), h.$$phase || h.$digest(), f.$isShown = !1, g.keyboard && s.off("keyup", f.$onKeyUp), a && "focus" === g.trigger ? b[0].blur() : void 0) : void 0
                }, f.toggle = function () {
                    f.$isShown ? f.leave() : f.enter()
                }, f.focus = function () {
                    s[0].focus()
                }, f.$applyPlacement = function () {
                    var a, b, c, d;
                    s && (a = v(), b = s.prop("offsetWidth"), c = s.prop("offsetHeight"), d = w(g.placement, a, b, c), d.top += "px", d.left += "px", s.css(d))
                }, f.$onKeyUp = function (a) {
                    27 === a.which && f.hide()
                }, f.$onFocusKeyUp = function (a) {
                    27 === a.which && b[0].blur()
                }, f
            }

            function q(a, c) {
                return angular.element((c || b).querySelectorAll(a))
            }

            function r(a) {
                return f.when(g.get(a) || h.get(a)).then(function (b) {
                    return angular.isObject(b) ? (g.put(a, b.data), b.data) : b
                })
            }

            var o, m = String.prototype.trim;
            return "createTouch" in c.document, o = /ng-bind="/gi, p
        }]
    }).directive("bsTooltip", ["$window", "$location", "$sce", "$tooltip", "$$animateReflow", function (a, b, c, d, e) {
        return {
            restrict: "EAC", scope: !0, link: function (a, b, f) {
                var i, h = {scope: a};
                angular.forEach(["template", "contentTemplate", "placement", "container", "delay", "trigger", "keyboard", "html", "animation", "type"], function (a) {
                    angular.isDefined(f[a]) && (h[a] = f[a])
                }), angular.forEach(["title"], function (b) {
                    f[b] && f.$observe(b, function (d, f) {
                        a[b] = c.getTrustedHtml(d), angular.isDefined(f) && e(function () {
                            i && i.$applyPlacement()
                        })
                    })
                }), f.bsTooltip && a.$watch(f.bsTooltip, function (b, c) {
                    angular.isObject(b) ? angular.extend(a, b) : a.content = b, angular.isDefined(c) && e(function () {
                        i && i.$applyPlacement()
                    })
                }, !0), i = d(b, h), a.$on("$destroy", function () {
                    i.destroy(), h = null, i = null
                })
            }
        }
    }]), angular.module("mgcrea.ngStrap.typeahead", ["mgcrea.ngStrap.tooltip", "mgcrea.ngStrap.helpers.parseOptions"]).provider("$typeahead", function () {
        var a = this.defaults = {
            animation: "am-fade",
            prefixClass: "typeahead",
            placement: "bottom-left",
            template: "typeahead/typeahead.tpl.html",
            trigger: "focus",
            container: !1,
            keyboard: !0,
            html: !1,
            delay: 0,
            minLength: 1,
            limit: 6
        };
        this.$get = ["$window", "$rootScope", "$tooltip", function (b, c, d) {
            function f(b, c) {
                var h, i, j, k, e = {}, f = angular.extend({}, a, c), g = f.controller;
                return e = d(b, f), h = c.scope, i = e.$scope, i.$matches = [], i.$activeIndex = 0, i.$activate = function (a) {
                    i.$$postDigest(function () {
                        e.activate(a)
                    })
                }, i.$select = function (a) {
                    i.$$postDigest(function () {
                        e.select(a)
                    })
                }, i.$isVisible = function () {
                    return e.$isVisible()
                }, e.update = function (a) {
                    i.$matches = a, i.$activeIndex >= a.length && (i.$activeIndex = 0)
                }, e.activate = function (a) {
                    i.$activeIndex = a
                }, e.select = function (a) {
                    var c = i.$matches[a].value;
                    g && (g.$setViewValue(c), g.$render(), h && h.$digest()), "focus" === f.trigger ? b[0].blur() : e.$isShown && e.hide(), i.$activeIndex = 0, i.$emit("$typeahead.select", c, a)
                }, e.$isVisible = function () {
                    return f.minLength && g ? i.$matches.length && angular.isString(g.$viewValue) && g.$viewValue.length >= f.minLength : !!i.$matches.length
                }, e.$onMouseDown = function (a) {
                    a.preventDefault(), a.stopPropagation()
                }, e.$onKeyDown = function (a) {
                    if (/(38|40|13)/.test(a.keyCode)) {
                        if (a.preventDefault(), a.stopPropagation(), 13 === a.keyCode) {
                            return e.select(i.$activeIndex)
                        }
                        38 === a.keyCode && i.$activeIndex > 0 ? i.$activeIndex-- : 40 === a.keyCode && i.$activeIndex < i.$matches.length - 1 ? i.$activeIndex++ : angular.isUndefined(i.$activeIndex) && (i.$activeIndex = 0), i.$digest()
                    }
                }, j = e.show, e.show = function () {
                    j(), setTimeout(function () {
                        e.$element.on("mousedown", e.$onMouseDown), f.keyboard && b.on("keydown", e.$onKeyDown)
                    })
                }, k = e.hide, e.hide = function () {
                    e.$element.off("mousedown", e.$onMouseDown), f.keyboard && b.off("keydown", e.$onKeyDown), k()
                }, e
            }

            return angular.element(b.document.body), f.defaults = a, f
        }]
    }).directive("bsTypeahead", ["$window", "$parse", "$q", "$typeahead", "$parseOptions", function (a, b, c, d, e) {
        var f = d.defaults;
        return {
            restrict: "EAC", require: "ngModel", link: function (a, b, c, g) {
                var i, j, k, h = {scope: a, controller: g};
                angular.forEach(["placement", "container", "delay", "trigger", "keyboard", "html", "animation", "template", "limit", "minLength"], function (a) {
                    angular.isDefined(c[a]) && (h[a] = c[a])
                }), i = h.limit || f.limit, j = e(c.ngOptions + " | filter:$viewValue | limitTo:" + i), k = d(b, h), a.$watch(c.ngModel, function () {
                    j.valuesFn(a, g).then(function (a) {
                        a.length > i && (a = a.slice(0, i)), k.update(a)
                    })
                }), a.$on("$destroy", function () {
                    k.destroy(), h = null, k = null
                })
            }
        }
    }])
}(window, document);
!function () {
    angular.module("mgcrea.ngStrap.alert").run(["$templateCache", function (a) {
        a.put("alert/alert.tpl.html", '<div class="alert alert-dismissable" tabindex="-1" ng-class="[type ? \'alert-\' + type : null]"><button type="button" class="close" ng-click="$hide()">&times;</button> <strong ng-bind="title"></strong>&nbsp;<span ng-bind-html="content"></span></div>')
    }]), angular.module("mgcrea.ngStrap.aside").run(["$templateCache", function (a) {
        a.put("aside/aside.tpl.html", '<div class="aside" tabindex="-1" role="dialog"><div class="aside-dialog"><div class="aside-content"><div class="aside-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="aside-title" ng-bind="title"></h4></div><div class="aside-body" ng-bind="content"></div><div class="aside-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>')
    }]), angular.module("mgcrea.ngStrap.datepicker").run(["$templateCache", function (a) {
        a.put("datepicker/datepicker.tpl.html", '<div class="dropdown-menu datepicker" ng-class="\'datepicker-mode-\' + $mode" style="max-width: 320px"><table style="table-layout: fixed; height: 100%; width: 100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$selectPane(-1)"><i class="glyphicons left_arrow"></i></button></th><th colspan="{{ rows[0].length - 2 }}"><button tabindex="-1" type="button" class="btn btn-default btn-block text-strong" ng-click="$toggleMode()"><strong style="text-transform: capitalize" ng-bind="title"></strong></button></th><th><button tabindex="-1" type="button" class="btn btn-default pull-right" ng-click="$selectPane(+1)"><i class="glyphicons right_arrow"></i></button></th></tr><tr ng-show="labels" ng-bind-html="labels"></tr></thead><tbody><tr ng-repeat="(i, row) in rows" height="{{ 100 / rows.length }}%"><td class="text-center" ng-repeat="(j, el) in row"><button tabindex="-1" type="button" class="btn btn-default" style="width: 100%" ng-class="{\'btn-primary\': el.selected}" ng-click="$select(el.date)" ng-disabled="el.disabled"><span ng-class="{\'text-muted\': el.muted}" ng-bind="el.label"></span></button></td></tr></tbody></table></div>')
    }]), angular.module("mgcrea.ngStrap.dropdown").run(["$templateCache", function (a) {
        a.put("dropdown/dropdown.tpl.html", '<ul tabindex="-1" class="dropdown-menu" role="menu"><li role="presentation" ng-class="{divider: item.divider}" ng-repeat="item in content"><a role="menuitem" tabindex="-1" href="{{item.href}}" ng-if="!item.divider" ng-click="$eval(item.click);$hide()" ng-bind="item.text"></a></li></ul>')
    }]), angular.module("mgcrea.ngStrap.modal").run(["$templateCache", function (a) {
        a.put("modal/modal.tpl.html", '<div class="modal" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="modal-title" ng-bind="title"></h4></div><div class="modal-body" ng-bind="content"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>')
    }]), angular.module("mgcrea.ngStrap.popover").run(["$templateCache", function (a) {
        a.put("popover/popover.tpl.html", '<div class="popover"><div class="arrow"></div><h3 class="popover-title" ng-bind="title" ng-show="title"></h3><div class="popover-content" ng-bind="content"></div></div>')
    }]), angular.module("mgcrea.ngStrap.select").run(["$templateCache", function (a) {
        a.put("select/select.tpl.html", '<ul tabindex="-1" class="select dropdown-menu" ng-show="$isVisible()" role="select"><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $isActive($index)}"><a style="cursor: default" role="menuitem" tabindex="-1" ng-click="$select($index, $event)"><span ng-bind="match.label"></span> <i class="glyphicon glyphicon-ok pull-right" ng-if="$isMultiple && $isActive($index)"></i></a></li></ul>')
    }]), angular.module("mgcrea.ngStrap.tab").run(["$templateCache", function (a) {
        a.put("tab/tab.tpl.html", '<ul class="nav nav-tabs"><li ng-repeat="pane in panes" ng-class="{active: $index == active}"><a data-toggle="tab" ng-click="setActive($index, $event)" data-index="{{$index}}">{{pane.title}}</a></li></ul><div class="tab-content"><div ng-repeat="pane in panes" class="tab-pane" ng-class="[$index == active ? \'active\' : \'\']" ng-include="pane.template || \'$pane\'"></div></div>')
    }]), angular.module("mgcrea.ngStrap.timepicker").run(["$templateCache", function (a) {
        a.put("timepicker/timepicker.tpl.html", '<div class="dropdown-menu timepicker" style="min-width: 0px;width: auto"><table height="100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$moveIndex(-1, 0)"><i class="glyphicon glyphicon-chevron-up"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$moveIndex(-1, 1)"><i class="glyphicon glyphicon-chevron-up"></i></button></th></tr></thead><tbody><tr ng-repeat="(i, row) in rows"><td class="text-center"><button tabindex="-1" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[0].selected}" ng-click="$select(row[0].date, 0)" ng-disabled="row[0].disabled"><span ng-class="{\'text-muted\': row[0].muted}" ng-bind="row[0].label"></span></button></td><td><span ng-bind="i == midIndex ? \':\' : \' \'"></span></td><td class="text-center"><button tabindex="-1" ng-if="row[1].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[1].selected}" ng-click="$select(row[1].date, 1)" ng-disabled="row[1].disabled"><span ng-class="{\'text-muted\': row[1].muted}" ng-bind="row[1].label"></span></button></td><td ng-if="showAM">&nbsp;</td><td ng-if="showAM"><button tabindex="-1" ng-show="i == midIndex - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !!isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">AM</button> <button tabindex="-1" ng-show="i == midIndex + 1 - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">PM</button></td></tr></tbody><tfoot><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$moveIndex(1, 0)"><i class="glyphicon glyphicon-chevron-down"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$moveIndex(1, 1)"><i class="glyphicon glyphicon-chevron-down"></i></button></th></tr></tfoot></table></div>')
    }]), angular.module("mgcrea.ngStrap.tooltip").run(["$templateCache", function (a) {
        a.put("tooltip/tooltip.tpl.html", '<div class="tooltip in" ng-show="title"><div class="tooltip-arrow"></div><div class="tooltip-inner" ng-bind="title"></div></div>')
    }]), angular.module("mgcrea.ngStrap.typeahead").run(["$templateCache", function (a) {
        a.put("typeahead/typeahead.tpl.html", '<ul tabindex="-1" class="typeahead dropdown-menu" ng-show="$isVisible()" role="select"><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $index == $activeIndex}"><a role="menuitem" tabindex="-1" ng-click="$select($index, $event)" ng-bind="match.label"></a></li></ul>')
    }])
}(window, document);
(function (b, a) {
    angular.module("eccrm.angularstrap", ["eccrm.angular", "eccrm.angularstrap.alert", "eccrm.angularstrap.modal", "eccrm.angularstrap.aside", "eccrm.angularstrap.validation"]).factory("eccrmHttpInterceptor", ["$q", "$injector", function (c, d) {
        return function (e) {
            return e.then(function (f) {
                var h = angular.isObject(f) && f.data;
                if (angular.isObject(h) && h.error == true) {
                    var g = d.get("AlertFactory");
                    if (angular.isFunction(g.error)) {
                        g.error(null, h.message, "")
                    } else {
                        alert(h.message)
                    }
                }
                return f
            })
        }
    }]).config(["$httpProvider", function (c) {
        c.responseInterceptors.push("eccrmHttpInterceptor")
    }]);
    angular.module("eccrm.angularstrap.alert", ["mgcrea.ngStrap", "eccrm.angular"]).factory("AlertFactory", ["$alert", "$sce", "CommonUtils", "$q", function (f, c, e, d) {
        var g = {
            container: "body",
            placement: "top",
            template: e.contextPathURL("static/ycrl/javascript/template/alert.html"),
            duration: 5,
            show: true
        };
        var h = function (i, j) {
            this.content = i;
            this.title = j
        };
        return {
            success: function (i, k, j) {
                k = c.trustAsHtml(k || i.content || "");
                j = j || (i && i.title) || "成功!";
                var l = f(angular.extend({}, g, {scope: i, type: "success"}));
                h.call(l.$scope, k, j)
            }, warning: function (i, k, j) {
                k = c.trustAsHtml(k || i.content || "");
                j = j || (i && i.title) || "警告!";
                var l = f(angular.extend({}, g, {type: "warning"}));
                h.call(l.$scope, k, j)
            }, info: function (i, k, j) {
                k = c.trustAsHtml(k || i.content || "");
                j = j || (i && i.title) || "提示!";
                var l = f(angular.extend({}, g, {type: "info"}));
                h.call(l.$scope, k, j)
            }, error: function (i, k, j) {
                k = c.trustAsHtml(k || i.content || "");
                j = j || (i && i.title) || "错误!";
                var l = f(angular.extend({}, g, {type: "danger", duration: false}));
                h.call(l.$scope, k, j)
            }, saveError: function (i, j) {
                var l = c.trustAsHtml(j.error || j.fail || "");
                var k = "保存失败";
                var m = f(angular.extend({}, g, {type: "danger"}));
                h.call(m.$scope, l, k)
            }, updateError: function (i, j) {
                var l = c.trustAsHtml(j.error || j.fail || "");
                var k = "更新失败";
                var m = f(angular.extend({}, g, {type: "danger"}));
                h.call(m.$scope, l, k)
            }, deleteError: function (i, j) {
                var l = c.trustAsHtml(j.error || j.fail || "");
                var k = "删除失败";
                var m = f(angular.extend({}, g, {type: "danger", duration: false}));
                h.call(m.$scope, l, k)
            }, handle: function (k, j, i, n) {
                var p = j.$promise || d.when(j);
                var l = function (t) {
                    if (angular.isObject(t)) {
                        var r = t.error;
                        var q = t.fail;
                        var u, s;
                        if (r) {
                            u = "操作异常!";
                            if (r === true) {
                                s = (t.code || "") + t.message || ""
                            } else {
                                if (typeof r === "string") {
                                    s = r
                                }
                            }
                        } else {
                            if (q) {
                                u = "操作失败!";
                                if (q === true) {
                                    s = (t.code || "") + t.message || ""
                                } else {
                                    if (typeof q === "string") {
                                        s = q
                                    }
                                }
                            } else {
                                if (angular.isFunction(i)) {
                                    i.call(k, t);
                                    return
                                }
                            }
                        }
                        if (u) {
                            var v = f(angular.extend({}, g, {scope: k, type: "danger", duration: false}));
                            h.call(v.$scope, c.trustAsHtml(s), u);
                            if (q && angular.isFunction(n)) {
                                n.call(k, t)
                            }
                        }
                    }
                };
                var o;
                var m;
                if (a && angular.isFunction(a.artDialog)) {
                    try {
                        m = $(":focus:eq(0)");
                    } catch (e) {
                    }
                    o = a.artDialog({title: "数据正在加载，请稍等...  ", drag: false, resize: false})
                }
                p.then(function (q) {
                    o && o.close();
                    m && m.focus();
                    l(q)
                })
            }
        }
    }]);
    angular.module("eccrm.angularstrap.modal", ["mgcrea.ngStrap", "eccrm.angular"]).factory("ModalFactory", ["$modal", "$sce", "CommonUtils", function (e, c, d) {
        return {
            confirm: function (g, k) {
                var f = angular.extend({scope: null, keywords: null, content: "", callback: null, afterShown: null}, g);
                if (!f.scope) {
                    throw"使用模态对话框时必须指定scope!"
                }
                var j = this;
                var i = e({
                    scope: f.scope,
                    template: d.contextPathURL("/static/ycrl/javascript/template/common-modal-confirm.tpl.html")
                });
                var h = f.content || "确定执行【 " + f.keywords + " 】操作?";
                i.$scope.content = c.trustAsHtml(h);
                i.$scope.confirm = function () {
                    k = k || f.callback;
                    if (k && angular.isFunction(k)) {
                        k.call(j, arguments)
                    }
                    this.$hide()
                };
                j.afterShown(i, f.afterShown)
            }, remove: function (f, i) {
                if (!f) {
                    throw"使用模态对话框时必须指定scope!"
                }
                var h = this;
                var g = e({
                    scope: f,
                    template: d.contextPathURL("/static/ycrl/javascript/template/common-modal-delete.tpl.html")
                });
                g.$scope.confirm = function () {
                    if (i && angular.isFunction(i)) {
                        i.call(h, arguments)
                    }
                    this.$hide()
                }
            }, start: function (f, i) {
                if (!f) {
                    throw"使用模态对话框时必须指定scope!"
                }
                var h = this;
                var g = e({
                    scope: f,
                    template: d.contextPathURL("/static/ycrl/javascript/template/common-modal-start.tpl.html")
                });
                g.$scope.confirm = function () {
                    if (i && angular.isFunction(i)) {
                        i.call(h, arguments)
                    }
                    this.$hide()
                }
            }, close: function (f, i) {
                if (!f) {
                    throw"使用模态对话框时必须指定scope!"
                }
                var h = this;
                var g = e({
                    scope: f,
                    template: d.contextPathURL("/static/ycrl/javascript/template/common-modal-close.tpl.html")
                });
                g.$scope.confirm = function () {
                    if (i && angular.isFunction(i)) {
                        i.call(h, arguments)
                    }
                    this.$hide()
                }
            }, top: function (f, i) {
                if (!f) {
                    throw"使用模态对话框时必须指定scope!"
                }
                var h = this;
                var g = e({
                    scope: f,
                    template: d.contextPathURL("/static/ycrl/javascript/template/common-modal-top.tpl.html")
                });
                g.$scope.confirm = function () {
                    if (i && angular.isFunction(i)) {
                        i.call(h, arguments)
                    }
                    this.$hide()
                }
            }, cancel: function (f, i) {
                if (!f) {
                    throw"使用模态对话框时必须指定scope!"
                }
                var h = this;
                var g = e({
                    scope: f,
                    template: d.contextPathURL("/static/ycrl/javascript/template/common-modal-cancel.tpl.html")
                });
                g.$scope.confirm = function () {
                    if (i && angular.isFunction(i)) {
                        i.call(h, arguments)
                    }
                    this.$hide()
                }
            }, afterShown: function (f, g) {
                if (!f) {
                    throw"模态对话框对象不能为空!"
                }
                if (!g || !angular.isFunction(g)) {
                    return false
                }
                if (f && !f.$promise) {
                    throw"不合法的参数，仅允许模态对话框对象!"
                }
                f.$promise.then(function () {
                    var h = setInterval(function () {
                        if (f.$scope.$isShown) {
                            g();
                            clearInterval(h)
                        }
                    }, 50)
                })
            }
        }
    }]);
    angular.module("eccrm.angularstrap.aside", ["mgcrea.ngStrap", "eccrm.angular"]).factory("AsideFactory", ["$aside", "$sce", "ModalFactory", "CommonUtils", function (d, e, c, f) {
        var g = {container: "body", show: true};
        return {
            info: function (i) {
                var j = d(angular.extend({
                    container: "body",
                    show: true,
                    template: f.contextPathURL("static/ycrl/javascript/template/aside.html")
                }, i));
                var h = j.$scope;
                h.$hide = j.hide;
                return h
            }, aside: {}
        }
    }]);
    angular.module("eccrm.angularstrap.validation", ["mgcrea.ngStrap", "eccrm.angular.base"]).config(["$tooltipProvider", function (c) {
        angular.extend(c.defaults, {
            animation: "am-flip-x",
            type: "info",
            container: "body",
            placement: "top",
            trigger: "hover"
        })
    }]).service("Validation", ["$q", "Debounce", "$parse", function (f, g, d) {
        var j = /^-?\d+$/;
        var i = /^-?\d+((.|\,)\d+)?$/;
        var h = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var m = /^((\+\d{2,3}-?)?1\d{10})$/;
        var c = /^\d{6}$/;
        var l = /^[a-zA-Z_0-9]+$/;
        var e = /^[a-zA-Z_]+(\-?_?\w)+$/;
        var k = /((?:\w{3,5}:\/\/)?(\w)+\.(\w)+\.(\w)+(?:\/?.*))/;
        return {
            validateRequired: {
                validateMsg: "必填项", validateFn: function (n) {
                    return !(n === null || n === undefined || n === "")
                }, validateType: "required"
            }, validateInt: {
                validateMsg: "值必须是整数", validateFn: function (n) {
                    if (n === null || n === undefined || n === "") {
                        return true
                    }
                    return (j.test(n))
                }, validateType: "int"
            }, validateFloat: {
                validateMsg: "值必须是浮点数", validateFn: function (n) {
                    if (n === null || n === undefined || n === "") {
                        return true
                    }
                    return (i.test(n))
                }, validateType: "float"
            }, validateEmail: {
                validateMsg: "不合法的E-MAIL", validateFn: function (n) {
                    if (n === null || n === undefined || n === "") {
                        return true
                    }
                    return (h.test(n))
                }, validateType: "email"
            }, validateMobile: {
                validateMsg: "不合法的手机号码", validateFn: function (n) {
                    if (n === null || n === undefined || n === "") {
                        return true
                    }
                    return (n && m.test(n))
                }, validateType: "mobile"
            }, validateZipcode: {
                validateMsg: "错误的邮编", validateFn: function (n) {
                    if (n === null || n === undefined || n === "") {
                        return true
                    }
                    return (n && c.test(n))
                }, validateType: "zipcode"
            }, validateNaming: {
                validateMsg: "输入的值只能由数字、字母、下划线(_)组成", validateFn: function (n) {
                    if (n === null || n === undefined || n === "") {
                        return true
                    }
                    return (l.test(n))
                }, validateType: "naming"
            }, validateChar: {
                validateMsg: "输入的值只能由数字、字母、下划线、中横线组成，且不能以数字和中横线开头", validateFn: function (n) {
                    return (e.test(n))
                }, validateType: "char"
            }, validateMaxLength: {
                validateMsg: "输入的值的长度超出允许的最大长度", validateFn: function (o, n) {
                    if (!j.test(n) || parseInt(n) < 0) {
                        throw"无效的值!最大长度只能是正整数!"
                    }
                    if (o === null || o === undefined || o === "") {
                        return true
                    }
                    return (o + "").length <= n
                }, validateType: "maxLength"
            }, validateMinLength: {
                validateMsg: "输入的值的长度不足", validateFn: function (o, n) {
                    if (!j.test(n) || parseInt(n) < 0) {
                        throw"无效的值!最大长度只能是正整数!"
                    }
                    if (o === null || o === undefined || o === "") {
                        return true
                    }
                    return (o + "").length >= n
                }, validateType: "minLength"
            }, validateUrl: {
                validateMsg: "不合法的URL", validateFn: function (n) {
                    if (n === null || n === undefined || n === "") {
                        return true
                    }
                    return (k.test(n))
                }, validateType: "url"
            }, validateMaxValue: {
                validateMsg: "超出允许的最大值", validateFn: function (n, o) {
                    if (o === undefined) {
                        throw"不合法的验证器，没有设置允许的最大值!"
                    }
                    if (n === null || n === undefined || n === "") {
                        return true
                    }
                    return parseFloat(n) <= parseFloat(o)
                }, validateType: "maxValue"
            }, validateMinValue: {
                validateMsg: "小于允许的最小值", validateFn: function (n, o) {
                    if (o === undefined) {
                        throw"不合法的验证器，没有设置允许的最小值!"
                    }
                    if (n === null || n === undefined || n === "") {
                        return true
                    }
                    return parseFloat(n) >= parseFloat(o)
                }, validateType: "minValue"
            }, validateOptions: {
                validateFn: function (p, n, o) {
                    if (!n) {
                        throw"自定义验证器,没有获得验证器配置信息!"
                    }
                    if (p === null || p === undefined) {
                        return true
                    }
                    n = d(n)(this);
                    if (!angular.isFunction(n.validateFn)) {
                        throw"自定义验证器,没有获得验证函数!"
                    }
                    o.validateMsg = n.validateMsg || "验证失败";
                    o.validateType = n.validateType || "options";
                    return n.validateFn.call(this, p, o)
                }
            }
        }
    }]).directive("validate", ["$tooltip", "Debounce", "Validation", "$parse", function (d, c, f, e) {
        return {
            require: "ngModel", link: function (s, p, r, g) {
                var i = ["validateRequired", "validateInt", "validateFloat", "validateMaxLength", "validateMinLength", "validateMobile", "validateZipcode", "validateMaxValue", "validateMinValue", "validateUrl", "validateEmail", "validateNaming", "validateOptions"];
                var j = r.placement || "top";
                var o = d(p, {placement: j, trigger: "hover"});
                var q = "waitValidate";
                var m = r.validateMsg;
                var l = false;
                var n = function (t, v, w, u) {
                    if (u) {
                        l = false
                    }
                    g.$setValidity(q, true);
                    if (t === undefined) {
                        return
                    }
                    if (t !== false && t !== true) {
                        throw"不合法的验证结果,验证结果只支持true/false,实际值为[" + t + "]!"
                    }
                    v = v || "options";
                    if (t === false) {
                        p.addClass("error");
                        g.$setValidity(v, false);
                        o.$scope.title = w || "验证失败";
                        p.attr("validate-msg", o.$scope.title);
                        return false
                    }
                    g.$setValidity(v, true);
                    if (l == true) {
                        o.$scope.title = "等待验证";
                        p.attr("validate-msg", o.$scope.title);
                        g.$setValidity(q, false)
                    }
                    if (g.$valid) {
                        o.$scope.title = "";
                        p.removeClass("error");
                        p.removeAttr("validate-msg");
                        o.$promise.then(o.hide)
                    }
                };
                var k = function (w, x, v, u) {
                    if (!angular.isFunction(w.validateFn)) {
                        throw"不合法的验证器,验证器必须指定验证函数!"
                    }
                    var t = w.validateFn.call(s, x, v, w);
                    if (t === true || t === false) {
                        n(t, w.validateType, m || w.validateMsg, u)
                    } else {
                        if (angular.isObject(t)) {
                            var y = angular.isFunction(t.then) ? t : (t.promise || t.$promise);
                            angular.isFunction(y.then) && y.then(function (z) {
                                n(z, w.validateType, w.validateMsg, u)
                            })
                        } else {
                            n(false, "system", "无法识别的验证结果!" + t)
                        }
                    }
                };
                var h = function (t, w, x, v) {
                    if (t == "validateOptions") {
                        var u = w.trigger || "focusout";
                        g.$setValidity(q, false);
                        l = true;
                        if (typeof u == "string" && u == "focusout") {
                            if (p.is(":focus")) {
                                return x
                            } else {
                                k(w, x, v, true)
                            }
                        } else {
                            if (u == "now") {
                                k(w, x, v, true)
                            } else {
                                if (u == "manual") {
                                    if (w.force === false && w.ready != true) {
                                        g.$setValidity(id, true)
                                    }
                                    if (w.ready == true) {
                                        w.ready = false;
                                        k(w, x, v, true)
                                    }
                                } else {
                                    throw"不支持的验证器触发类型[" + u + "]!"
                                }
                            }
                        }
                        return x
                    }
                    k(w, x, v);
                    return x
                };
                angular.forEach(i, function (z) {
                    var v = r[z];
                    if (!angular.isDefined(v)) {
                        return
                    }
                    var x = angular.extend({}, f[z] || {});
                    if (z == "validateOptions") {
                        var u = e(v)(s);
                        angular.extend(x, u);
                        var t = x.trigger || "focusout";
                        if (t == "focusout") {
                            var y;
                            p.bind(t, function () {
                                if (y == g.$viewValue) {
                                    return
                                }
                                g.$setViewValue(g.$viewValue);
                                y = g.$viewValue
                            })
                        } else {
                            if (t == "manual") {
                                u.execute = function () {
                                    x.ready = true;
                                    g.$setViewValue(g.$viewValue)
                                }
                            } else {
                                if (t === "now") {
                                }
                            }
                        }
                    }
                    var w = function (A) {
                        return h(z, x, A, v)
                    };
                    g.$parsers.unshift(w);
                    g.$formatters.unshift(w)
                })
            }
        }
    }]).directive("validateError", ["$compile", function (c) {
        return {
            restrict: "A", compile: function (e, d) {
                return {
                    pre: function (h, j, g) {
                        var k = j.children();
                        var i = d.validateError + ".$invalid";
                        var f = $('<span ng-class="{error:' + i + '}"><span ng-show="' + i + '"> * </span></span>');
                        if (k.length == 0) {
                            f.append(j.html());
                            j.html(f)
                        } else {
                            k.wrap(f)
                        }
                        c(f)(h)
                    }
                }
            }
        }
    }]);
    angular.module("eccrm.angularstrap.tooltip", ["mgcrea.ngStrap"]).config(["$tooltipProvider", function (c) {
        angular.extend(c.defaults, {
            animation: "am-flip-x",
            type: "info",
            container: "body",
            placement: "top",
            trigger: "hover"
        })
    }])
})(window, window.art);