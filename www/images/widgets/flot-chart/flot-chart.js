console.log("THIS IS FLOT");
console.log(location.href);
!function (a) {
    a.color = {},
    a.color.make = function (e, t, n, i) {
        var o = {};
        return o.r = e || 0,
        o.g = t || 0,
        o.b = n || 0,
        o.a = null != i ? i : 1,
        o.add = function (e, t) {
            for (var n = 0; n < e.length; ++n)
                o[e.charAt(n)] += t;
            return o.normalize()
        },
        o.scale = function (e, t) {
            for (var n = 0; n < e.length; ++n)
                o[e.charAt(n)] *= t;
            return o.normalize()
        },
        o.toString = function () {
            return 1 <= o.a ? "rgb(" + [o.r, o.g, o.b].join(",") + ")" : "rgba(" + [o.r, o.g, o.b, o.a].join(",") + ")"
        },
        o.normalize = function () {
            function e(e, t, n) {
                return t < e ? e : n < t ? n : t
            }
            return o.r = e(0, parseInt(o.r), 255),
            o.g = e(0, parseInt(o.g), 255),
            o.b = e(0, parseInt(o.b), 255),
            o.a = e(0, o.a, 1),
            o
        },
        o.clone = function () {
            return a.color.make(o.r, o.b, o.g, o.a)
        },
        o.normalize()
    },
    a.color.extract = function (e, t) {
        var n;
        do {
            if ("" != (n = e.css(t).toLowerCase()) && "transparent" != n)
                break;
            e = e.parent()
        } while (e.length && !a.nodeName(e.get(0), "body"));
        return "rgba(0, 0, 0, 0)" == n && (n = "transparent"),
        a.color.parse(n)
    },
    a.color.parse = function (e) {
        var t,
        n = a.color.make;
        if (t = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e))
            return n(parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3], 10));
        if (t = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(e))
            return n(parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3], 10), parseFloat(t[4]));
        if (t = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(e))
            return n(2.55 * parseFloat(t[1]), 2.55 * parseFloat(t[2]), 2.55 * parseFloat(t[3]));
        if (t = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(e))
            return n(2.55 * parseFloat(t[1]), 2.55 * parseFloat(t[2]), 2.55 * parseFloat(t[3]), parseFloat(t[4]));
        if (t = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(e))
            return n(parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16));
        if (t = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(e))
            return n(parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16));
        var i = a.trim(e).toLowerCase();
        return "transparent" == i ? n(255, 255, 255, 0) : n((t = o[i] || [0, 0, 0])[0], t[1], t[2])
    };
    var o = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0]
    }
}
(jQuery), function (B) {
    var d = Object.prototype.hasOwnProperty;
    function U(e, t) {
        var n = t.children("." + e)[0];
        if (null == n && ((n = document.createElement("canvas")).className = e, B(n).css({
                    direction: "ltr",
                    position: "absolute",
                    left: 0,
                    top: 0
                }).appendTo(t), !n.getContext)) {
            if (!window.G_vmlCanvasManager)
                throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
            n = window.G_vmlCanvasManager.initElement(n)
        }
        this.element = n;
        var i = this.context = n.getContext("2d"),
        o = window.devicePixelRatio || 1,
        a = i.webkitBackingStorePixelRatio || i.mozBackingStorePixelRatio || i.msBackingStorePixelRatio || i.oBackingStorePixelRatio || i.backingStorePixelRatio || 1;
        this.pixelRatio = o / a,
        this.resize(t.width(), t.height()),
        this.textContainer = null,
        this.text = {},
        this._textCache = {}
    }
    function i(p, e, t, i) {
        var S = [],
        z = {
            colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
            legend: {
                show: !0,
                noColumns: 1,
                labelFormatter: null,
                labelBoxBorderColor: "#ccc",
                container: null,
                position: "ne",
                margin: 5,
                backgroundColor: null,
                backgroundOpacity: .85,
                sorted: null
            },
            xaxis: {
                show: null,
                position: "bottom",
                mode: null,
                font: null,
                color: null,
                tickColor: null,
                transform: null,
                inverseTransform: null,
                min: null,
                max: null,
                autoscaleMargin: null,
                ticks: null,
                tickFormatter: null,
                labelWidth: null,
                labelHeight: null,
                reserveSpace: null,
                tickLength: null,
                alignTicksWithAxis: null,
                tickDecimals: null,
                tickSize: null,
                minTickSize: null
            },
            yaxis: {
                autoscaleMargin: .02,
                position: "left"
            },
            xaxes: [],
            yaxes: [],
            series: {
                points: {
                    show: !1,
                    radius: 3,
                    lineWidth: 2,
                    fill: !0,
                    fillColor: "#ffffff",
                    symbol: "circle"
                },
                lines: {
                    lineWidth: 2,
                    fill: !1,
                    fillColor: null,
                    steps: !1
                },
                bars: {
                    show: !1,
                    lineWidth: 2,
                    barWidth: 1,
                    fill: !0,
                    fillColor: null,
                    align: "left",
                    horizontal: !1,
                    zero: !0
                },
                shadowSize: 3,
                highlightColor: null
            },
            grid: {
                show: !0,
                aboveData: !1,
                color: "#545454",
                backgroundColor: null,
                borderColor: null,
                tickColor: null,
                margin: 0,
                labelMargin: 5,
                axisMargin: 8,
                borderWidth: 2,
                minBorderMargin: null,
                markings: null,
                markingsColor: "#f4f4f4",
                markingsLineWidth: 2,
                clickable: !1,
                hoverable: !1,
                autoHighlight: !0,
                mouseActiveRadius: 10
            },
            interaction: {
                redrawOverlayInterval: 1e3 / 60
            },
            hooks: {}
        },
        d = null,
        n = null,
        f = null,
        y = null,
        c = null,
        h = [],
        m = [],
        k = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        M = 0,
        T = 0,
        D = {
            processOptions: [],
            processRawData: [],
            processDatapoints: [],
            processOffset: [],
            drawBackground: [],
            drawSeries: [],
            draw: [],
            bindEvents: [],
            drawOverlay: [],
            shutdown: []
        },
        F = this;
        function O(e, t) {
            t = [F].concat(t);
            for (var n = 0; n < e.length; ++n)
                e[n].apply(this, t)
        }
        function o(e) {
            S = function (e) {
                for (var t = [], n = 0; n < e.length; ++n) {
                    var i = B.extend(!0, {}, z.series);
                    null != e[n].data ? (i.data = e[n].data, delete e[n].data, B.extend(!0, i, e[n]), e[n].data = i.data) : i.data = e[n],
                    t.push(i)
                }
                return t
            }
            (e),
            function () {
                var e,
                t = S.length,
                n = -1;
                for (e = 0; e < S.length; ++e) {
                    var i = S[e].color;
                    null != i && (t--, "number" == typeof i && n < i && (n = i))
                }
                t <= n && (t = n + 1);
                var o,
                a = [],
                r = z.colors,
                l = r.length,
                s = 0;
                for (e = 0; e < t; e++)
                    o = B.color.parse(r[e % l] || "#666"), e % l == 0 && e && (s = 0 <= s ? s < .5 ? -s - .2 : 0 : -s), a[e] = o.scale("rgb", 1 + s);
                var c,
                f = 0;
                for (e = 0; e < S.length; ++e) {
                    if (null == (c = S[e]).color ? (c.color = a[f].toString(), ++f) : "number" == typeof c.color && (c.color = a[c.color].toString()), null == c.lines.show) {
                        var g,
                        u = !0;
                        for (g in c)
                            if (c[g] && c[g].show) {
                                u = !1;
                                break
                            }
                        u && (c.lines.show = !0)
                    }
                    null == c.lines.zero && (c.lines.zero = !!c.lines.fill),
                    c.xaxis = x(h, v(c, "x")),
                    c.yaxis = x(m, v(c, "y"))
                }
            }
            (),
            function () {
                var e,
                t,
                n,
                i,
                o,
                a,
                r,
                l,
                s,
                c,
                f,
                g,
                u = Number.POSITIVE_INFINITY,
                d = Number.NEGATIVE_INFINITY,
                h = Number.MAX_VALUE;
                function m(e, t, n) {
                    t < e.datamin && t != -h && (e.datamin = t),
                    n > e.datamax && n != h && (e.datamax = n)
                }
                for (B.each(C(), function (e, t) {
                        t.datamin = u,
                        t.datamax = d,
                        t.used = !1
                    }), e = 0; e < S.length; ++e)
                    (o = S[e]).datapoints = {
                        points: []
                    },
                O(D.processRawData, [o, o.data, o.datapoints]);
                for (e = 0; e < S.length; ++e) {
                    if (o = S[e], f = o.data, !(g = o.datapoints.format)) {
                        if ((g = []).push({
                                x: !0,
                                number: !0,
                                required: !0
                            }), g.push({
                                y: !0,
                                number: !0,
                                required: !0
                            }), o.bars.show || o.lines.show && o.lines.fill) {
                            var p = !!(o.bars.show && o.bars.zero || o.lines.show && o.lines.zero);
                            g.push({
                                y: !0,
                                number: !0,
                                required: !1,
                                defaultValue: 0,
                                autoscale: p
                            }),
                            o.bars.horizontal && (delete g[g.length - 1].y, g[g.length - 1].x = !0)
                        }
                        o.datapoints.format = g
                    }
                    if (null == o.datapoints.pointsize) {
                        o.datapoints.pointsize = g.length,
                        r = o.datapoints.pointsize,
                        a = o.datapoints.points;
                        var v = o.lines.show && o.lines.steps;
                        for (o.xaxis.used = o.yaxis.used = !0, t = n = 0; t < f.length; ++t, n += r) {
                            var x = null == (c = f[t]);
                            if (!x)
                                for (i = 0; i < r; ++i)
                                    l = c[i], (s = g[i]) && (s.number && null != l && (l = +l, isNaN(l) ? l = null : l == 1 / 0 ? l = h : l == -1 / 0 && (l = -h)), null == l && (s.required && (x = !0), null != s.defaultValue && (l = s.defaultValue)), !1 !== s.autoscale && (s.x && m(o.xaxis, l, l), s.y && m(o.yaxis, l, l))), a[n + i] = l;
                            if (x)
                                for (i = 0; i < r; ++i)
                                    null != (l = a[n + i]) && !1 !== (s = g[i]).autoscale && (s.x && m(o.xaxis, l, l), s.y && m(o.yaxis, l, l)), a[n + i] = null;
                            else if (v && 0 < n && null != a[n - r] && a[n - r] != a[n] && a[n - r + 1] != a[n + 1]) {
                                for (i = 0; i < r; ++i)
                                    a[n + r + i] = a[n + i];
                                a[n + 1] = a[n - r + 1],
                                n += r
                            }
                        }
                    }
                }
                for (e = 0; e < S.length; ++e)
                    o = S[e], O(D.processDatapoints, [o, o.datapoints]);
                for (e = 0; e < S.length; ++e) {
                    o = S[e],
                    a = o.datapoints.points,
                    r = o.datapoints.pointsize,
                    g = o.datapoints.format;
                    var b = u,
                    w = u,
                    y = d,
                    k = d;
                    for (t = 0; t < a.length; t += r)
                        if (null != a[t])
                            for (i = 0; i < r; ++i)
                                l = a[t + i], (s = g[i]) && !1 !== s.autoscale && l != h && l != -h && (s.x && (l < b && (b = l), y < l && (y = l)), s.y && (l < w && (w = l), k < l && (k = l)));
                    if (o.bars.show) {
                        var M;
                        switch (o.bars.align) {
                        case "left":
                            M = 0;
                            break;
                        case "right":
                            M = -o.bars.barWidth;
                            break;
                        default:
                            M = -o.bars.barWidth / 2
                        }
                        o.bars.horizontal ? (w += M, k += M + o.bars.barWidth) : (b += M, y += M + o.bars.barWidth)
                    }
                    m(o.xaxis, b, y),
                    m(o.yaxis, w, k)
                }
                B.each(C(), function (e, t) {
                    t.datamin == u && (t.datamin = null),
                    t.datamax == d && (t.datamax = null)
                })
            }
            ()
        }
        function v(e, t) {
            var n = e[t + "axis"];
            return "object" == typeof n && (n = n.n),
            "number" != typeof n && (n = 1),
            n
        }
        function C() {
            return B.grep(h.concat(m), function (e) {
                return e
            })
        }
        function g(e) {
            var t,
            n,
            i = {};
            for (t = 0; t < h.length; ++t)
                (n = h[t]) && n.used && (i["x" + n.n] = n.c2p(e.left));
            for (t = 0; t < m.length; ++t)
                (n = m[t]) && n.used && (i["y" + n.n] = n.c2p(e.top));
            return void 0 !== i.x1 && (i.x = i.x1),
            void 0 !== i.y1 && (i.y = i.y1),
            i
        }
        function x(e, t) {
            return e[t - 1] || (e[t - 1] = {
                    n: t,
                    direction: e == h ? "x" : "y",
                    options: B.extend(!0, {}, e == h ? z.xaxis : z.yaxis)
                }),
            e[t - 1]
        }
        function a() {
            L && clearTimeout(L),
            f.unbind("mousemove", N),
            f.unbind("mouseleave", _),
            f.unbind("click", P),
            O(D.shutdown, [f])
        }
        function r(n) {
            var e = n.labelWidth,
            t = n.labelHeight,
            i = n.options.position,
            o = "x" === n.direction,
            a = n.options.tickLength,
            r = z.grid.axisMargin,
            l = z.grid.labelMargin,
            s = !0,
            c = !0,
            f = !0,
            g = !1;
            B.each(o ? h : m, function (e, t) {
                t && (t.show || t.reserveSpace) && (t === n ? g = !0 : t.options.position === i && (g ? c = !1 : s = !1), g || (f = !1))
            }),
            c && (r = 0),
            null == a && (a = f ? "full" : 5),
            isNaN(+a) || (l += +a),
            o ? (t += l, "bottom" == i ? (k.bottom += t + r, n.box = {
                        top: d.height - k.bottom,
                        height: t
                    }) : (n.box = {
                        top: k.top + r,
                        height: t
                    }, k.top += t + r)) : (e += l, "left" == i ? (n.box = {
                        left: k.left + r,
                        width: e
                    }, k.left += e + r) : (k.right += e + r, n.box = {
                        left: d.width - k.right,
                        width: e
                    })),
            n.position = i,
            n.tickLength = a,
            n.box.padding = l,
            n.innermost = s
        }
        function l() {
            var e,
            t = C(),
            n = z.grid.show;
            for (var i in k) {
                var o = z.grid.margin || 0;
                k[i] = "number" == typeof o ? o : o[i] || 0
            }
            for (var i in O(D.processOffset, [k]), k)
                "object" == typeof z.grid.borderWidth ? k[i] += n ? z.grid.borderWidth[i] : 0 : k[i] += n ? z.grid.borderWidth : 0;
            if (B.each(t, function (e, t) {
                    var n = t.options;
                    t.show = null == n.show ? t.used : n.show,
                    t.reserveSpace = null == n.reserveSpace ? t.show : n.reserveSpace,
                    function (e) {
                        var t = e.options,
                        n =  + (null != t.min ? t.min : e.datamin),
                        i =  + (null != t.max ? t.max : e.datamax),
                        o = i - n;
                        if (0 == o) {
                            var a = 0 == i ? 1 : .01;
                            null == t.min && (n -= a),
                            null != t.max && null == t.min || (i += a)
                        } else {
                            var r = t.autoscaleMargin;
                            null != r && (null == t.min && (n -= o * r) < 0 && null != e.datamin && 0 <= e.datamin && (n = 0), null == t.max && 0 < (i += o * r) && null != e.datamax && e.datamax <= 0 && (i = 0))
                        }
                        e.min = n,
                        e.max = i
                    }
                    (t)
                }), n) {
                var a = B.grep(t, function (e) {
                    return e.show || e.reserveSpace
                });
                for (B.each(a, function (e, t) {
                        var n,
                        i;
                        !function (e) {
                            var t,
                            n = e.options;
                            t = "number" == typeof n.ticks && 0 < n.ticks ? n.ticks : .3 * Math.sqrt("x" == e.direction ? d.width : d.height);
                            var i = (e.max - e.min) / t,
                            o = -Math.floor(Math.log(i) / Math.LN10),
                            a = n.tickDecimals;
                            null != a && a < o && (o = a);
                            var r,
                            l = Math.pow(10, -o),
                            s = i / l;
                            s < 1.5 ? r = 1 : s < 3 ? (r = 2, 2.25 < s && (null == a || o + 1 <= a) && (r = 2.5, ++o)) : r = s < 7.5 ? 5 : 10;
                            r *= l,
                            null != n.minTickSize && r < n.minTickSize && (r = n.minTickSize);
                            if (e.delta = i, e.tickDecimals = Math.max(0, null != a ? a : o), e.tickSize = n.tickSize || r, "time" == n.mode && !e.tickGenerator)
                                throw new Error("Time mode requires the flot.time plugin.");
                                e.tickGenerator || (e.tickGenerator = function (e) {
                                    for (var t, n, i, o = [], a = (n = e.min, (i = e.tickSize) * Math.floor(n / i)), r = 0, l = Number.NaN; t = l, l = a + r * e.tickSize, o.push(l), ++r, l < e.max && l != t; );
                                    return o
                                }, e.tickFormatter = function (e, t) {
                                    var n = t.tickDecimals ? Math.pow(10, t.tickDecimals) : 1,
                                    i = "" + Math.round(e * n) / n;
                                    if (null != t.tickDecimals) {
                                        var o = i.indexOf("."),
                                        a = -1 == o ? 0 : i.length - o - 1;
                                        if (a < t.tickDecimals)
                                            return (a ? i : i + ".") + ("" + n).substr(1, t.tickDecimals - a)
                                    }
                                    return i
                                });
                                B.isFunction(n.tickFormatter) && (e.tickFormatter = function (e, t) {
                                    return "" + n.tickFormatter(e, t)
                                });
                                if (null != n.alignTicksWithAxis) {
                                    var c = ("x" == e.direction ? h : m)[n.alignTicksWithAxis - 1];
                                    if (c && c.used && c != e) {
                                        var f = e.tickGenerator(e);
                                        if (0 < f.length && (null == n.min && (e.min = Math.min(e.min, f[0])), null == n.max && 1 < f.length && (e.max = Math.max(e.max, f[f.length - 1]))), e.tickGenerator = function (e) {
                                            var t,
                                            n,
                                            i = [];
                                            for (n = 0; n < c.ticks.length; ++n)
                                                t = (c.ticks[n].v - c.min)
                                                     / (c.max - c.min), t = e.min + t * (e.max - e.min), i.push(t);
                                                return i
                                            }, !e.mode && null == n.tickDecimals) {
                                                var g = Math.max(0, 1 - Math.floor(Math.log(e.delta) / Math.LN10)),
                                                u = e.tickGenerator(e);
                                                1 < u.length && /\..*0$/.test((u[1] - u[0]).toFixed(g)) || (e.tickDecimals = g)
                                            }
                                    }
                                }
                            }
                            (t),
                            function (e) {
                                var t,
                                n,
                                i = e.options.ticks,
                                o = [];
                                null == i || "number" == typeof i && 0 < i ? o = e.tickGenerator(e) : i && (o = B.isFunction(i) ? i(e) : i);
                                for (e.ticks = [], t = 0; t < o.length; ++t) {
                                    var a = null,
                                    r = o[t];
                                    "object" == typeof r ? (n = +r[0], 1 < r.length && (a = r[1])) : n = +r,
                                    null === a && (a = e.tickFormatter(n, e)),
                                    isNaN(n) || e.ticks.push({
                                        v: n,
                                        label: a
                                    })
                                }
                            }
                            (t),
                            i = (n = t).ticks,
                            n.options.autoscaleMargin && 0 < i.length && (null == n.options.min && (n.min = Math.min(n.min, i[0].v)), null == n.options.max && 1 < i.length && (n.max = Math.max(n.max, i[i.length - 1].v))),
                            function (e) {
                                for (var t = e.options, n = e.ticks || [], i = t.labelWidth || 0, o = t.labelHeight || 0, a = i || ("x" == e.direction ? Math.floor(d.width / (n.length || 1)) : null), r = e.direction + "Axis " + e.direction + e.n + "Axis", l = "flot-" + e.direction + "-axis flot-" + e.direction + e.n + "-axis " + r, s = t.font || "flot-tick-label tickLabel", c = 0; c < n.length; ++c) {
                                    var f = n[c];
                                    if (f.label) {
                                        var g = d.getTextInfo(l, f.label, s, null, a);
                                        i = Math.max(i, g.width),
                                        o = Math.max(o, g.height)
                                    }
                                }
                                e.labelWidth = t.labelWidth || i,
                                e.labelHeight = t.labelHeight || o
                            }
                            (t)
                        }), e = a.length - 1; 0 <= e; --e)r(a[e]);
                !function () {
                    var e,
                    t = z.grid.minBorderMargin;
                    if (null == t)
                        for (e = t = 0; e < S.length; ++e)
                            t = Math.max(t, 2 * (S[e].points.radius + S[e].points.lineWidth / 2));
                    var n = {
                        left: t,
                        right: t,
                        top: t,
                        bottom: t
                    };
                    B.each(C(), function (e, t) {
                        t.reserveSpace && t.ticks && t.ticks.length && ("x" === t.direction ? (n.left = Math.max(n.left, t.labelWidth / 2), n.right = Math.max(n.right, t.labelWidth / 2)) : (n.bottom = Math.max(n.bottom, t.labelHeight / 2), n.top = Math.max(n.top, t.labelHeight / 2)))
                    }),
                    k.left = Math.ceil(Math.max(n.left, k.left)),
                    k.right = Math.ceil(Math.max(n.right, k.right)),
                    k.top = Math.ceil(Math.max(n.top, k.top)),
                    k.bottom = Math.ceil(Math.max(n.bottom, k.bottom))
                }
                (),
                B.each(a, function (e, t) {
                    var n;
                    "x" == (n = t).direction ? (n.box.left = k.left - n.labelWidth / 2, n.box.width = d.width - k.left - k.right + n.labelWidth) : (n.box.top = k.top - n.labelHeight / 2, n.box.height = d.height - k.bottom - k.top + n.labelHeight)
                })
            }
            M = d.width - k.left - k.right,
            T = d.height - k.bottom - k.top,
            B.each(t, function (e, t) {
                !function (e) {
                    function t(e) {
                        return e
                    }
                    var n,
                    i,
                    o = e.options.transform || t,
                    a = e.options.inverseTransform;
                    i = "x" == e.direction ? (n = e.scale = M / Math.abs(o(e.max) - o(e.min)), Math.min(o(e.max), o(e.min))) : (n =  - (n = e.scale = T / Math.abs(o(e.max) - o(e.min))), Math.max(o(e.max), o(e.min))),
                    e.p2c = o == t ? function (e) {
                        return (e - i) * n
                    }
                     : function (e) {
                        return (o(e) - i) * n
                    },
                    e.c2p = a ? function (e) {
                        return a(i + e / n)
                    }
                     : function (e) {
                        return i + e / n
                    }
                }
                (t)
            }),
            n && B.each(C(), function (e, t) {
                var n,
                i,
                o,
                a,
                r,
                l = t.box,
                s = t.direction + "Axis " + t.direction + t.n + "Axis",
                c = "flot-" + t.direction + "-axis flot-" + t.direction + t.n + "-axis " + s,
                f = t.options.font || "flot-tick-label tickLabel";
                if (d.removeText(c), t.show && 0 != t.ticks.length)
                    for (var g = 0; g < t.ticks.length; ++g)
                        !(n = t.ticks[g]).label || n.v < t.min || n.v > t.max || ("x" == t.direction ? (a = "center", i = k.left + t.p2c(n.v), "bottom" == t.position ? o = l.top + l.padding : (o = l.top + l.height - l.padding, r = "bottom")) : (r = "middle", o = k.top + t.p2c(n.v), "left" == t.position ? (i = l.left + l.width - l.padding, a = "right") : i = l.left + l.padding), d.addText(c, i, o, n.label, f, null, null, a, r))
            }),
            function () {
                null != z.legend.container ? B(z.legend.container).html("") : p.find(".legend").remove();
                if (!z.legend.show)
                    return;
                for (var e, t, n = [], i = [], o = !1, a = z.legend.labelFormatter, r = 0; r < S.length; ++r)
                    (e = S[r]).label && (t = a ? a(e.label, e) : e.label) && i.push({
                        label: t,
                        color: e.color
                    });
                if (z.legend.sorted)
                    if (B.isFunction(z.legend.sorted))
                        i.sort(z.legend.sorted);
                    else if ("reverse" == z.legend.sorted)
                        i.reverse();
                    else {
                        var l = "descending" != z.legend.sorted;
                        i.sort(function (e, t) {
                            return e.label == t.label ? 0 : e.label < t.label != l ? 1 : -1
                        })
                    }
                for (var r = 0; r < i.length; ++r) {
                    var s = i[r];
                    r % z.legend.noColumns == 0 && (o && n.push("</tr>"), n.push("<tr>"), o = !0),
                    n.push('<td class="legendColorBox"><div style="border:1px solid ' + z.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + s.color + ';overflow:hidden"></div></div></td><td class="legendLabel">' + s.label + "</td>")
                }
                o && n.push("</tr>");
                if (0 == n.length)
                    return;
                var c = '<table style="font-size:smaller;color:' + z.grid.color + '">' + n.join("") + "</table>";
                if (null != z.legend.container)
                    B(z.legend.container).html(c);
                else {
                    var f = "",
                    g = z.legend.position,
                    u = z.legend.margin;
                    null == u[0] && (u = [u, u]),
                    "n" == g.charAt(0) ? f += "top:" + (u[1] + k.top) + "px;" : "s" == g.charAt(0) && (f += "bottom:" + (u[1] + k.bottom) + "px;"),
                    "e" == g.charAt(1) ? f += "right:" + (u[0] + k.right) + "px;" : "w" == g.charAt(1) && (f += "left:" + (u[0] + k.left) + "px;");
                    var d = B('<div class="legend">' + c.replace('style="', 'style="position:absolute;' + f + ";") + "</div>").appendTo(p);
                    if (0 != z.legend.backgroundOpacity) {
                        var h = z.legend.backgroundColor;
                        null == h && ((h = (h = z.grid.backgroundColor) && "string" == typeof h ? B.color.parse(h) : B.color.extract(d, "background-color")).a = 1, h = h.toString());
                        var m = d.children();
                        B('<div style="position:absolute;width:' + m.width() + "px;height:" + m.height() + "px;" + f + "background-color:" + h + ';"> </div>').prependTo(d).css("opacity", z.legend.backgroundOpacity)
                    }
                }
            }
            ()
        }
        function s() {
            d.clear(),
            O(D.drawBackground, [y]);
            var e = z.grid;
            e.show && e.backgroundColor && (y.save(), y.translate(k.left, k.top), y.fillStyle = J(z.grid.backgroundColor, T, 0, "rgba(255, 255, 255, 0)"), y.fillRect(0, 0, M, T), y.restore()),
            e.show && !e.aboveData && u();
            for (var t = 0; t < S.length; ++t)
                O(D.drawSeries, [y, S[t]]), b(S[t]);
            O(D.draw, [y]),
            e.show && e.aboveData && u(),
            d.render(),
            E()
        }
        function I(e, t) {
            for (var n, i, o, a, r = C(), l = 0; l < r.length; ++l)
                if ((n = r[l]).direction == t && (e[a = t + n.n + "axis"] || 1 != n.n || (a = t + "axis"), e[a])) {
                    i = e[a].from,
                    o = e[a].to;
                    break
                }
            if (e[a] || (n = "x" == t ? h[0] : m[0], i = e[t + "1"], o = e[t + "2"]), null != i && null != o && o < i) {
                var s = i;
                i = o,
                o = s
            }
            return {
                from: i,
                to: o,
                axis: n
            }
        }
        function u() {
            var e,
            t,
            n,
            i;
            y.save(),
            y.translate(k.left, k.top);
            var o = z.grid.markings;
            if (o)
                for (B.isFunction(o) && ((t = F.getAxes()).xmin = t.xaxis.min, t.xmax = t.xaxis.max, t.ymin = t.yaxis.min, t.ymax = t.yaxis.max, o = o(t)), e = 0; e < o.length; ++e) {
                    var a = o[e],
                    r = I(a, "x"),
                    l = I(a, "y");
                    if (null == r.from && (r.from = r.axis.min), null == r.to && (r.to = r.axis.max), null == l.from && (l.from = l.axis.min), null == l.to && (l.to = l.axis.max), !(r.to < r.axis.min || r.from > r.axis.max || l.to < l.axis.min || l.from > l.axis.max)) {
                        r.from = Math.max(r.from, r.axis.min),
                        r.to = Math.min(r.to, r.axis.max),
                        l.from = Math.max(l.from, l.axis.min),
                        l.to = Math.min(l.to, l.axis.max);
                        var s = r.from === r.to,
                        c = l.from === l.to;
                        if (!s || !c)
                            if (r.from = Math.floor(r.axis.p2c(r.from)), r.to = Math.floor(r.axis.p2c(r.to)), l.from = Math.floor(l.axis.p2c(l.from)), l.to = Math.floor(l.axis.p2c(l.to)), s || c) {
                                var f = a.lineWidth || z.grid.markingsLineWidth,
                                g = f % 2 ? .5 : 0;
                                y.beginPath(),
                                y.strokeStyle = a.color || z.grid.markingsColor,
                                y.lineWidth = f,
                                s ? (y.moveTo(r.to + g, l.from), y.lineTo(r.to + g, l.to)) : (y.moveTo(r.from, l.to + g), y.lineTo(r.to, l.to + g)),
                                y.stroke()
                            } else
                                y.fillStyle = a.color || z.grid.markingsColor, y.fillRect(r.from, l.to, r.to - r.from, l.from - l.to)
                    }
                }
            t = C(),
            n = z.grid.borderWidth;
            for (var u = 0; u < t.length; ++u) {
                var d,
                h,
                m,
                p,
                v = t[u],
                x = v.box,
                b = v.tickLength;
                if (v.show && 0 != v.ticks.length) {
                    for (y.lineWidth = 1, "x" == v.direction ? (d = 0, h = "full" == b ? "top" == v.position ? 0 : T : x.top - k.top + ("top" == v.position ? x.height : 0)) : (h = 0, d = "full" == b ? "left" == v.position ? 0 : M : x.left - k.left + ("left" == v.position ? x.width : 0)), v.innermost || (y.strokeStyle = v.options.color, y.beginPath(), m = p = 0, "x" == v.direction ? m = M + 1 : p = T + 1, 1 == y.lineWidth && ("x" == v.direction ? h = Math.floor(h) + .5 : d = Math.floor(d) + .5), y.moveTo(d, h), y.lineTo(d + m, h + p), y.stroke()), y.strokeStyle = v.options.tickColor, y.beginPath(), e = 0; e < v.ticks.length; ++e) {
                        var w = v.ticks[e].v;
                        m = p = 0,
                        isNaN(w) || w < v.min || w > v.max || "full" == b && ("object" == typeof n && 0 < n[v.position] || 0 < n) && (w == v.min || w == v.max) || ("x" == v.direction ? (d = v.p2c(w), p = "full" == b ? -T : b, "top" == v.position && (p = -p)) : (h = v.p2c(w), m = "full" == b ? -M : b, "left" == v.position && (m = -m)), 1 == y.lineWidth && ("x" == v.direction ? d = Math.floor(d) + .5 : h = Math.floor(h) + .5), y.moveTo(d, h), y.lineTo(d + m, h + p))
                    }
                    y.stroke()
                }
            }
            n && (i = z.grid.borderColor, "object" == typeof n || "object" == typeof i ? ("object" != typeof n && (n = {
                            top: n,
                            right: n,
                            bottom: n,
                            left: n
                        }), "object" != typeof i && (i = {
                            top: i,
                            right: i,
                            bottom: i,
                            left: i
                        }), 0 < n.top && (y.strokeStyle = i.top, y.lineWidth = n.top, y.beginPath(), y.moveTo(0 - n.left, 0 - n.top / 2), y.lineTo(M, 0 - n.top / 2), y.stroke()), 0 < n.right && (y.strokeStyle = i.right, y.lineWidth = n.right, y.beginPath(), y.moveTo(M + n.right / 2, 0 - n.top), y.lineTo(M + n.right / 2, T), y.stroke()), 0 < n.bottom && (y.strokeStyle = i.bottom, y.lineWidth = n.bottom, y.beginPath(), y.moveTo(M + n.right, T + n.bottom / 2), y.lineTo(0, T + n.bottom / 2), y.stroke()), 0 < n.left && (y.strokeStyle = i.left, y.lineWidth = n.left, y.beginPath(), y.moveTo(0 - n.left / 2, T + n.bottom), y.lineTo(0 - n.left / 2, 0), y.stroke())) : (y.lineWidth = n, y.strokeStyle = z.grid.borderColor, y.strokeRect(-n / 2, -n / 2, M + n, T + n))),
            y.restore()
        }
        function b(e) {
            e.lines.show && function (e) {
                function t(e, t, n, i, o) {
                    var a = e.points,
                    r = e.pointsize,
                    l = null,
                    s = null;
                    y.beginPath();
                    for (var c = r; c < a.length; c += r) {
                        var f = a[c - r],
                        g = a[c - r + 1],
                        u = a[c],
                        d = a[c + 1];
                        if (null != f && null != u) {
                            if (g <= d && g < o.min) {
                                if (d < o.min)
                                    continue;
                                f = (o.min - g) / (d - g) * (u - f) + f,
                                g = o.min
                            } else if (d <= g && d < o.min) {
                                if (g < o.min)
                                    continue;
                                u = (o.min - g) / (d - g) * (u - f) + f,
                                d = o.min
                            }
                            if (d <= g && g > o.max) {
                                if (d > o.max)
                                    continue;
                                f = (o.max - g) / (d - g) * (u - f) + f,
                                g = o.max
                            } else if (g <= d && d > o.max) {
                                if (g > o.max)
                                    continue;
                                u = (o.max - g) / (d - g) * (u - f) + f,
                                d = o.max
                            }
                            if (f <= u && f < i.min) {
                                if (u < i.min)
                                    continue;
                                g = (i.min - f) / (u - f) * (d - g) + g,
                                f = i.min
                            } else if (u <= f && u < i.min) {
                                if (f < i.min)
                                    continue;
                                d = (i.min - f) / (u - f) * (d - g) + g,
                                u = i.min
                            }
                            if (u <= f && f > i.max) {
                                if (u > i.max)
                                    continue;
                                g = (i.max - f) / (u - f) * (d - g) + g,
                                f = i.max
                            } else if (f <= u && u > i.max) {
                                if (f > i.max)
                                    continue;
                                d = (i.max - f) / (u - f) * (d - g) + g,
                                u = i.max
                            }
                            f == l && g == s || y.moveTo(i.p2c(f) + t, o.p2c(g) + n),
                            l = u,
                            s = d,
                            y.lineTo(i.p2c(u) + t, o.p2c(d) + n)
                        }
                    }
                    y.stroke()
                }
                y.save(),
                y.translate(k.left, k.top),
                y.lineJoin = "round";
                var n = e.lines.lineWidth,
                i = e.shadowSize;
                if (0 < n && 0 < i) {
                    y.lineWidth = i,
                    y.strokeStyle = "rgba(0,0,0,0.1)";
                    var o = Math.PI / 18;
                    t(e.datapoints, Math.sin(o) * (n / 2 + i / 2), Math.cos(o) * (n / 2 + i / 2), e.xaxis, e.yaxis),
                    y.lineWidth = i / 2,
                    t(e.datapoints, Math.sin(o) * (n / 2 + i / 4), Math.cos(o) * (n / 2 + i / 4), e.xaxis, e.yaxis)
                }
                y.lineWidth = n,
                y.strokeStyle = e.color;
                var a = W(e.lines, e.color, 0, T);
                a && (y.fillStyle = a, function (e, t, n) {
                    var i = e.points,
                    o = e.pointsize,
                    a = Math.min(Math.max(0, n.min), n.max),
                    r = 0,
                    l = !1,
                    s = 1,
                    c = 0,
                    f = 0;
                    for (; !(0 < o && r > i.length + o); ) {
                        var g = i[(r += o) - o],
                        u = i[r - o + s],
                        d = i[r],
                        h = i[r + s];
                        if (l) {
                            if (0 < o && null != g && null == d) {
                                f = r,
                                o = -o,
                                s = 2;
                                continue
                            }
                            if (o < 0 && r == c + o) {
                                y.fill(),
                                l = !1,
                                s = 1,
                                r = c = f + (o = -o);
                                continue
                            }
                        }
                        if (null != g && null != d) {
                            if (g <= d && g < t.min) {
                                if (d < t.min)
                                    continue;
                                u = (t.min - g) / (d - g) * (h - u) + u,
                                g = t.min
                            } else if (d <= g && d < t.min) {
                                if (g < t.min)
                                    continue;
                                h = (t.min - g) / (d - g) * (h - u) + u,
                                d = t.min
                            }
                            if (d <= g && g > t.max) {
                                if (d > t.max)
                                    continue;
                                u = (t.max - g) / (d - g) * (h - u) + u,
                                g = t.max
                            } else if (g <= d && d > t.max) {
                                if (g > t.max)
                                    continue;
                                h = (t.max - g) / (d - g) * (h - u) + u,
                                d = t.max
                            }
                            if (l || (y.beginPath(), y.moveTo(t.p2c(g), n.p2c(a)), l = !0), u >= n.max && h >= n.max)
                                y.lineTo(t.p2c(g), n.p2c(n.max)), y.lineTo(t.p2c(d), n.p2c(n.max));
                            else if (u <= n.min && h <= n.min)
                                y.lineTo(t.p2c(g), n.p2c(n.min)), y.lineTo(t.p2c(d), n.p2c(n.min));
                            else {
                                var m = g,
                                p = d;
                                u <= h && u < n.min && h >= n.min ? (g = (n.min - u) / (h - u) * (d - g) + g, u = n.min) : h <= u && h < n.min && u >= n.min && (d = (n.min - u) / (h - u) * (d - g) + g, h = n.min),
                                h <= u && u > n.max && h <= n.max ? (g = (n.max - u) / (h - u) * (d - g) + g, u = n.max) : u <= h && h > n.max && u <= n.max && (d = (n.max - u) / (h - u) * (d - g) + g, h = n.max),
                                g != m && y.lineTo(t.p2c(m), n.p2c(u)),
                                y.lineTo(t.p2c(g), n.p2c(u)),
                                y.lineTo(t.p2c(d), n.p2c(h)),
                                d != p && (y.lineTo(t.p2c(d), n.p2c(h)), y.lineTo(t.p2c(p), n.p2c(h)))
                            }
                        }
                    }
                }
                    (e.datapoints, e.xaxis, e.yaxis));
                0 < n && t(e.datapoints, 0, 0, e.xaxis, e.yaxis);
                y.restore()
            }
            (e),
            e.bars.show && function (c) {
                var e;
                switch (y.save(), y.translate(k.left, k.top), y.lineWidth = c.bars.lineWidth, y.strokeStyle = c.color, c.bars.align) {
                case "left":
                    e = 0;
                    break;
                case "right":
                    e = -c.bars.barWidth;
                    break;
                default:
                    e = -c.bars.barWidth / 2
                }
                var t = c.bars.fill ? function (e, t) {
                    return W(c.bars, c.color, e, t)
                }
                 : null;
                (function (e, t, n, i, o, a) {
                    for (var r = e.points, l = e.pointsize, s = 0; s < r.length; s += l)
                        null != r[s] && w(r[s], r[s + 1], r[s + 2], t, n, i, o, a, y, c.bars.horizontal, c.bars.lineWidth)
                })(c.datapoints, e, e + c.bars.barWidth, t, c.xaxis, c.yaxis),
                y.restore()
            }
            (e),
            e.points.show && function (e) {
                function t(e, t, n, i, o, a, r, l) {
                    for (var s = e.points, c = e.pointsize, f = 0; f < s.length; f += c) {
                        var g = s[f],
                        u = s[f + 1];
                        null == g || g < a.min || g > a.max || u < r.min || u > r.max || (y.beginPath(), g = a.p2c(g), u = r.p2c(u) + i, "circle" == l ? y.arc(g, u, t, 0, o ? Math.PI : 2 * Math.PI, !1) : l(y, g, u, t, o), y.closePath(), n && (y.fillStyle = n, y.fill()), y.stroke())
                    }
                }
                y.save(),
                y.translate(k.left, k.top);
                var n = e.points.lineWidth,
                i = e.shadowSize,
                o = e.points.radius,
                a = e.points.symbol;
                0 == n && (n = 1e-4);
                if (0 < n && 0 < i) {
                    var r = i / 2;
                    y.lineWidth = r,
                    y.strokeStyle = "rgba(0,0,0,0.1)",
                    t(e.datapoints, o, null, r + r / 2, !0, e.xaxis, e.yaxis, a),
                    y.strokeStyle = "rgba(0,0,0,0.2)",
                    t(e.datapoints, o, null, r / 2, !0, e.xaxis, e.yaxis, a)
                }
                y.lineWidth = n,
                y.strokeStyle = e.color,
                t(e.datapoints, o, W(e.points, e.color), 0, !1, e.xaxis, e.yaxis, a),
                y.restore()
            }
            (e)
        }
        function w(e, t, n, i, o, a, r, l, s, c, f) {
            var g,
            u,
            d,
            h,
            m,
            p,
            v,
            x,
            b;
            c ? (x = p = v = !0, m = !1, h = t + i, d = t + o, (u = e) < (g = n) && (b = u, u = g, g = b, p = !(m = !0))) : (m = p = v = !0, x = !1, g = e + i, u = e + o, (h = t) < (d = n) && (b = h, h = d, d = b, v = !(x = !0))),
            u < r.min || g > r.max || h < l.min || d > l.max || (g < r.min && (g = r.min, m = !1), u > r.max && (u = r.max, p = !1), d < l.min && (d = l.min, x = !1), h > l.max && (h = l.max, v = !1), g = r.p2c(g), d = l.p2c(d), u = r.p2c(u), h = l.p2c(h), a && (s.fillStyle = a(d, h), s.fillRect(g, h, u - g, d - h)), 0 < f && (m || p || v || x) && (s.beginPath(), s.moveTo(g, d), m ? s.lineTo(g, h) : s.moveTo(g, h), v ? s.lineTo(u, h) : s.moveTo(u, h), p ? s.lineTo(u, d) : s.moveTo(u, d), x ? s.lineTo(g, d) : s.moveTo(g, d), s.stroke()))
        }
        function W(e, t, n, i) {
            var o = e.fill;
            if (!o)
                return null;
            if (e.fillColor)
                return J(e.fillColor, n, i, t);
            var a = B.color.parse(t);
            return a.a = "number" == typeof o ? o : .4,
            a.normalize(),
            a.toString()
        }
        F.setData = o,
        F.setupGrid = l,
        F.draw = s,
        F.getPlaceholder = function () {
            return p
        },
        F.getCanvas = function () {
            return d.element
        },
        F.getPlotOffset = function () {
            return k
        },
        F.width = function () {
            return M
        },
        F.height = function () {
            return T
        },
        F.offset = function () {
            var e = f.offset();
            return e.left += k.left,
            e.top += k.top,
            e
        },
        F.getData = function () {
            return S
        },
        F.getAxes = function () {
            var n = {};
            return B.each(h.concat(m), function (e, t) {
                t && (n[t.direction + (1 != t.n ? t.n : "") + "axis"] = t)
            }),
            n
        },
        F.getXAxes = function () {
            return h
        },
        F.getYAxes = function () {
            return m
        },
        F.c2p = g,
        F.p2c = function (e) {
            var t,
            n,
            i,
            o = {};
            for (t = 0; t < h.length; ++t)
                if ((n = h[t]) && n.used && (i = "x" + n.n, null == e[i] && 1 == n.n && (i = "x"), null != e[i])) {
                    o.left = n.p2c(e[i]);
                    break
                }
            for (t = 0; t < m.length; ++t)
                if ((n = m[t]) && n.used && (i = "y" + n.n, null == e[i] && 1 == n.n && (i = "y"), null != e[i])) {
                    o.top = n.p2c(e[i]);
                    break
                }
            return o
        },
        F.getOptions = function () {
            return z
        },
        F.highlight = q,
        F.unhighlight = H,
        F.triggerRedrawOverlay = E,
        F.pointOffset = function (e) {
            return {
                left: parseInt(h[v(e, "x") - 1].p2c(+e.x) + k.left, 10),
                top: parseInt(m[v(e, "y") - 1].p2c(+e.y) + k.top, 10)
            }
        },
        F.shutdown = a,
        F.destroy = function () {
            a(),
            p.removeData("plot").empty(),
            S = [],
            h = [],
            m = [],
            A = [],
            F = D = c = y = f = n = d = z = null
        },
        F.resize = function () {
            var e = p.width(),
            t = p.height();
            d.resize(e, t),
            n.resize(e, t)
        },
        F.hooks = D,
        function () {
            for (var e = {
                    Canvas: U
                }, t = 0; t < i.length; ++t) {
                var n = i[t];
                n.init(F, e),
                n.options && B.extend(!0, z, n.options)
            }
        }
        (),
        function (e) {
            B.extend(!0, z, e),
            e && e.colors && (z.colors = e.colors);
            null == z.xaxis.color && (z.xaxis.color = B.color.parse(z.grid.color).scale("a", .22).toString());
            null == z.yaxis.color && (z.yaxis.color = B.color.parse(z.grid.color).scale("a", .22).toString());
            null == z.xaxis.tickColor && (z.xaxis.tickColor = z.grid.tickColor || z.xaxis.color);
            null == z.yaxis.tickColor && (z.yaxis.tickColor = z.grid.tickColor || z.yaxis.color);
            null == z.grid.borderColor && (z.grid.borderColor = z.grid.color);
            null == z.grid.tickColor && (z.grid.tickColor = B.color.parse(z.grid.color).scale("a", .22).toString());
            var t,
            n,
            i,
            o = p.css("font-size"),
            a = o ? +o.replace("px", "") : 13,
            r = {
                style: p.css("font-style"),
                size: Math.round(.8 * a),
                variant: p.css("font-variant"),
                weight: p.css("font-weight"),
                family: p.css("font-family")
            };
            for (i = z.xaxes.length || 1, t = 0; t < i; ++t)
                (n = z.xaxes[t]) && !n.tickColor && (n.tickColor = n.color), n = B.extend(!0, {}, z.xaxis, n), (z.xaxes[t] = n).font && (n.font = B.extend({}, r, n.font), n.font.color || (n.font.color = n.color), n.font.lineHeight || (n.font.lineHeight = Math.round(1.15 * n.font.size)));
            for (i = z.yaxes.length || 1, t = 0; t < i; ++t)
                (n = z.yaxes[t]) && !n.tickColor && (n.tickColor = n.color), n = B.extend(!0, {}, z.yaxis, n), (z.yaxes[t] = n).font && (n.font = B.extend({}, r, n.font), n.font.color || (n.font.color = n.color), n.font.lineHeight || (n.font.lineHeight = Math.round(1.15 * n.font.size)));
            z.xaxis.noTicks && null == z.xaxis.ticks && (z.xaxis.ticks = z.xaxis.noTicks);
            z.yaxis.noTicks && null == z.yaxis.ticks && (z.yaxis.ticks = z.yaxis.noTicks);
            z.x2axis && (z.xaxes[1] = B.extend(!0, {}, z.xaxis, z.x2axis), z.xaxes[1].position = "top", null == z.x2axis.min && (z.xaxes[1].min = null), null == z.x2axis.max && (z.xaxes[1].max = null));
            z.y2axis && (z.yaxes[1] = B.extend(!0, {}, z.yaxis, z.y2axis), z.yaxes[1].position = "right", null == z.y2axis.min && (z.yaxes[1].min = null), null == z.y2axis.max && (z.yaxes[1].max = null));
            z.grid.coloredAreas && (z.grid.markings = z.grid.coloredAreas);
            z.grid.coloredAreasColor && (z.grid.markingsColor = z.grid.coloredAreasColor);
            z.lines && B.extend(!0, z.series.lines, z.lines);
            z.points && B.extend(!0, z.series.points, z.points);
            z.bars && B.extend(!0, z.series.bars, z.bars);
            null != z.shadowSize && (z.series.shadowSize = z.shadowSize);
            null != z.highlightColor && (z.series.highlightColor = z.highlightColor);
            for (t = 0; t < z.xaxes.length; ++t)
                x(h, t + 1).options = z.xaxes[t];
            for (t = 0; t < z.yaxes.length; ++t)
                x(m, t + 1).options = z.yaxes[t];
            for (var l in D)
                z.hooks[l] && z.hooks[l].length && (D[l] = D[l].concat(z.hooks[l]));
            O(D.processOptions, [z])
        }
        (t),
        function () {
            p.css("padding", 0).children().filter(function () {
                return !B(this).hasClass("flot-overlay") && !B(this).hasClass("flot-base")
            }).remove(),
            "static" == p.css("position") && p.css("position", "relative");
            d = new U("flot-base", p),
            n = new U("flot-overlay", p),
            y = d.context,
            c = n.context,
            f = B(n.element).unbind();
            var e = p.data("plot");
            e && (e.shutdown(), n.clear());
            p.data("plot", F)
        }
        (),
        o(e),
        l(),
        s(),
        function () {
            z.grid.hoverable && (f.mousemove(N), f.bind("mouseleave", _));
            z.grid.clickable && f.click(P);
            O(D.bindEvents, [f])
        }
        ();
        var A = [],
        L = null;
        function N(e) {
            z.grid.hoverable && R("plothover", e, function (e) {
                return 0 != e.hoverable
            })
        }
        function _(e) {
            z.grid.hoverable && R("plothover", e, function (e) {
                return !1
            })
        }
        function P(e) {
            R("plotclick", e, function (e) {
                return 0 != e.clickable
            })
        }
        function R(e, t, n) {
            var i = f.offset(),
            o = t.pageX - i.left - k.left,
            a = t.pageY - i.top - k.top,
            r = g({
                left: o,
                top: a
            });
            r.pageX = t.pageX,
            r.pageY = t.pageY;
            var l = function (e, t, n) {
                var i,
                o,
                a,
                r = z.grid.mouseActiveRadius,
                l = r * r + 1,
                s = null;
                for (i = S.length - 1; 0 <= i; --i)
                    if (n(S[i])) {
                        var c = S[i],
                        f = c.xaxis,
                        g = c.yaxis,
                        u = c.datapoints.points,
                        d = f.c2p(e),
                        h = g.c2p(t),
                        m = r / f.scale,
                        p = r / g.scale;
                        if (a = c.datapoints.pointsize, f.options.inverseTransform && (m = Number.MAX_VALUE), g.options.inverseTransform && (p = Number.MAX_VALUE), c.lines.show || c.points.show)
                            for (o = 0; o < u.length; o += a) {
                                var v = u[o],
                                x = u[o + 1];
                                if (null != v && !(m < v - d || v - d < -m || p < x - h || x - h < -p)) {
                                    var b = Math.abs(f.p2c(v) - e),
                                    w = Math.abs(g.p2c(x) - t),
                                    y = b * b + w * w;
                                    y < l && (l = y, s = [i, o / a])
                                }
                            }
                        if (c.bars.show && !s) {
                            var k,
                            M;
                            switch (c.bars.align) {
                            case "left":
                                k = 0;
                                break;
                            case "right":
                                k = -c.bars.barWidth;
                                break;
                            default:
                                k = -c.bars.barWidth / 2
                            }
                            for (M = k + c.bars.barWidth, o = 0; o < u.length; o += a) {
                                v = u[o],
                                x = u[o + 1];
                                var T = u[o + 2];
                                null != v && (S[i].bars.horizontal ? d <= Math.max(T, v) && d >= Math.min(T, v) && x + k <= h && h <= x + M : v + k <= d && d <= v + M && h >= Math.min(T, x) && h <= Math.max(T, x)) && (s = [i, o / a])
                            }
                        }
                    }
                return s ? (i = s[0], o = s[1], a = S[i].datapoints.pointsize, {
                    datapoint: S[i].datapoints.points.slice(o * a, (o + 1) * a),
                    dataIndex: o,
                    series: S[i],
                    seriesIndex: i
                }) : null
            }
            (o, a, n);
            if (l && (l.pageX = parseInt(l.series.xaxis.p2c(l.datapoint[0]) + i.left + k.left, 10), l.pageY = parseInt(l.series.yaxis.p2c(l.datapoint[1]) + i.top + k.top, 10)), z.grid.autoHighlight) {
                for (var s = 0; s < A.length; ++s) {
                    var c = A[s];
                    c.auto != e || l && c.series == l.series && c.point[0] == l.datapoint[0] && c.point[1] == l.datapoint[1] || H(c.series, c.point)
                }
                l && q(l.series, l.datapoint, e)
            }
            p.trigger(e, [r, l])
        }
        function E() {
            var e = z.interaction.redrawOverlayInterval;
            -1 != e ? L || (L = setTimeout(Y, e)) : Y()
        }
        function Y() {
            var e,
            t;
            for (L = null, c.save(), n.clear(), c.translate(k.left, k.top), e = 0; e < A.length; ++e)
                (t = A[e]).series.bars.show ? $(t.series, t.point) : j(t.series, t.point);
            c.restore(),
            O(D.drawOverlay, [c])
        }
        function q(e, t, n) {
            if ("number" == typeof e && (e = S[e]), "number" == typeof t) {
                var i = e.datapoints.pointsize;
                t = e.datapoints.points.slice(i * t, i * (t + 1))
            }
            var o = X(e, t);
            -1 == o ? (A.push({
                    series: e,
                    point: t,
                    auto: n
                }), E()) : n || (A[o].auto = !1)
        }
        function H(e, t) {
            if (null == e && null == t)
                return A = [], void E();
            if ("number" == typeof e && (e = S[e]), "number" == typeof t) {
                var n = e.datapoints.pointsize;
                t = e.datapoints.points.slice(n * t, n * (t + 1))
            }
            var i = X(e, t);
            -1 != i && (A.splice(i, 1), E())
        }
        function X(e, t) {
            for (var n = 0; n < A.length; ++n) {
                var i = A[n];
                if (i.series == e && i.point[0] == t[0] && i.point[1] == t[1])
                    return n
            }
            return -1
        }
        function j(e, t) {
            var n = t[0],
            i = t[1],
            o = e.xaxis,
            a = e.yaxis,
            r = "string" == typeof e.highlightColor ? e.highlightColor : B.color.parse(e.color).scale("a", .5).toString();
            if (!(n < o.min || n > o.max || i < a.min || i > a.max)) {
                var l = e.points.radius + e.points.lineWidth / 2;
                c.lineWidth = l,
                c.strokeStyle = r;
                var s = 1.5 * l;
                n = o.p2c(n),
                i = a.p2c(i),
                c.beginPath(),
                "circle" == e.points.symbol ? c.arc(n, i, s, 0, 2 * Math.PI, !1) : e.points.symbol(c, n, i, s, !1),
                c.closePath(),
                c.stroke()
            }
        }
        function $(e, t) {
            var n,
            i = "string" == typeof e.highlightColor ? e.highlightColor : B.color.parse(e.color).scale("a", .5).toString(),
            o = i;
            switch (e.bars.align) {
            case "left":
                n = 0;
                break;
            case "right":
                n = -e.bars.barWidth;
                break;
            default:
                n = -e.bars.barWidth / 2
            }
            c.lineWidth = e.bars.lineWidth,
            c.strokeStyle = i,
            w(t[0], t[1], t[2] || 0, n, n + e.bars.barWidth, function () {
                return o
            }, e.xaxis, e.yaxis, c, e.bars.horizontal, e.bars.lineWidth)
        }
        function J(e, t, n, i) {
            if ("string" == typeof e)
                return e;
            for (var o = y.createLinearGradient(0, n, 0, t), a = 0, r = e.colors.length; a < r; ++a) {
                var l = e.colors[a];
                if ("string" != typeof l) {
                    var s = B.color.parse(i);
                    null != l.brightness && (s = s.scale("rgb", l.brightness)),
                    null != l.opacity && (s.a *= l.opacity),
                    l = s.toString()
                }
                o.addColorStop(a / (r - 1), l)
            }
            return o
        }
    }
    B.fn.detach || (B.fn.detach = function () {
        return this.each(function () {
            this.parentNode && this.parentNode.removeChild(this)
        })
    }),
    U.prototype.resize = function (e, t) {
        if (e <= 0 || t < 0)
            throw new Error("Invalid dimensions for plot, width = " + e + ", height = " + t);
        var n = this.element,
        i = this.context,
        o = this.pixelRatio;
        this.width != e && (n.width = e * o, n.style.width = e + "px", this.width = e),
        this.height != t && (n.height = t * o, n.style.height = t + "px", this.height = t),
        i.restore(),
        i.save(),
        i.scale(o, o)
    },
    U.prototype.clear = function () {
        this.context.clearRect(0, 0, this.width, this.height)
    },
    U.prototype.render = function () {
        var e = this._textCache;
        for (var t in e)
            if (d.call(e, t)) {
                var n = this.getTextLayer(t),
                i = e[t];
                for (var o in n.hide(), i)
                    if (d.call(i, o)) {
                        var a = i[o];
                        for (var r in a)
                            if (d.call(a, r)) {
                                for (var l, s = a[r].positions, c = 0; l = s[c]; c++)
                                    l.active ? l.rendered || (n.append(l.element), l.rendered = !0) : (s.splice(c--, 1), l.rendered && l.element.detach());
                                0 == s.length && delete a[r]
                            }
                    }
                n.show()
            }
    },
    U.prototype.getTextLayer = function (e) {
        var t = this.text[e];
        return null == t && (null == this.textContainer && (this.textContainer = B("<div class='flot-text'></div>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    "font-size": "smaller",
                    color: "#545454"
                }).insertAfter(this.element)), t = this.text[e] = B("<div></div>").addClass(e).css({
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            }).appendTo(this.textContainer)),
        t
    },
    U.prototype.getTextInfo = function (e, t, n, i, o) {
        var a,
        r,
        l,
        s;
        if (t = "" + t, a = "object" == typeof n ? n.style + " " + n.variant + " " + n.weight + " " + n.size + "px/" + n.lineHeight + "px " + n.family : n, null == (r = this._textCache[e]) && (r = this._textCache[e] = {}), null == (l = r[a]) && (l = r[a] = {}), null == (s = l[t])) {
            var c = B("<div></div>").html(t).css({
                position: "absolute",
                "max-width": o,
                top: -9999
            }).appendTo(this.getTextLayer(e));
            "object" == typeof n ? c.css({
                font: a,
                color: n.color
            }) : "string" == typeof n && c.addClass(n),
            s = l[t] = {
                width: c.outerWidth(!0),
                height: c.outerHeight(!0),
                element: c,
                positions: []
            },
            c.detach()
        }
        return s
    },
    U.prototype.addText = function (e, t, n, i, o, a, r, l, s) {
        var c = this.getTextInfo(e, i, o, a, r),
        f = c.positions;
        "center" == l ? t -= c.width / 2 : "right" == l && (t -= c.width),
        "middle" == s ? n -= c.height / 2 : "bottom" == s && (n -= c.height);
        for (var g, u = 0; g = f[u]; u++)
            if (g.x == t && g.y == n)
                return void(g.active = !0);
        g = {
            active: !0,
            rendered: !1,
            element: f.length ? c.element.clone() : c.element,
            x: t,
            y: n
        },
        f.push(g),
        g.element.css({
            top: Math.round(n),
            left: Math.round(t),
            "text-align": l
        })
    },
    U.prototype.removeText = function (e, t, n, i, o, a) {
        if (null == i) {
            var r = this._textCache[e];
            if (null != r)
                for (var l in r)
                    if (d.call(r, l)) {
                        var s = r[l];
                        for (var c in s)
                            if (d.call(s, c))
                                for (var f = s[c].positions, g = 0; u = f[g]; g++)
                                    u.active = !1
                    }
        } else {
            var u;
            for (f = this.getTextInfo(e, i, o, a).positions, g = 0; u = f[g]; g++)
                u.x == t && u.y == n && (u.active = !1)
        }
    },
    B.plot = function (e, t, n) {
        return new i(B(e), t, n, B.plot.plugins)
    },
    B.plot.version = "0.8.3",
    B.plot.plugins = [],
    B.fn.plot = function (e, t) {
        return this.each(function () {
            B.plot(this, e, t)
        })
    }
}
(jQuery), function (r, l, s) {
    var c,
    f = [],
    g = r.resize = r.extend(r.resize, {}),
    u = !1,
    n = "setTimeout",
    d = "resize",
    h = d + "-special-event",
    m = "pendingDelay",
    i = "activeDelay",
    o = "throttleWindow";
    function p(e) {
        !0 === u && (u = e || 1);
        for (var t = f.length - 1; 0 <= t; t--) {
            var n = r(f[t]);
            if (n[0] == l || n.is(":visible")) {
                var i = n.width(),
                o = n.height(),
                a = n.data(h);
                !a || i === a.w && o === a.h || (n.trigger(d, [a.w = i, a.h = o]), u = e || !0)
            } else (a = n.data(h)).w = 0, a.h = 0
        }
        null !== c && (u && (null == e || e - u < 1e3) ? c = l.requestAnimationFrame(p) : (c = setTimeout(p, g[m]), u = !1))
    }
    g[m] = 200,
    g[i] = 20,
    g[o] = !0,
    r.event.special[d] = {
        setup: function () {
            if (!g[o] && this[n])
                return !1;
            var e = r(this);
            f.push(this),
            e.data(h, {
                w: e.width(),
                h: e.height()
            }),
            1 === f.length && (c = s, p())
        },
        teardown: function () {
            if (!g[o] && this[n])
                return !1;
            for (var e = r(this), t = f.length - 1; 0 <= t; t--)
                if (f[t] == this) {
                    f.splice(t, 1);
                    break
                }
            e.removeData(h),
            f.length || (u ? cancelAnimationFrame(c) : clearTimeout(c), c = null)
        },
        add: function (e) {
            if (!g[o] && this[n])
                return !1;
            var a;
            function t(e, t, n) {
                var i = r(this),
                o = i.data(h) || {};
                o.w = t !== s ? t : i.width(),
                o.h = n !== s ? n : i.height(),
                a.apply(this, arguments)
            }
            if (r.isFunction(e))
                return a = e, t;
            a = e.handler,
            e.handler = t
        }
    },
    l.requestAnimationFrame || (l.requestAnimationFrame = l.webkitRequestAnimationFrame || l.mozRequestAnimationFrame || l.oRequestAnimationFrame || l.msRequestAnimationFrame || function (e, t) {
        return l.setTimeout(function () {
            e((new Date).getTime())
        }, g[i])
    }),
    l.cancelAnimationFrame || (l.cancelAnimationFrame = l.webkitCancelRequestAnimationFrame || l.mozCancelRequestAnimationFrame || l.oCancelRequestAnimationFrame || l.msCancelRequestAnimationFrame || clearTimeout)
}
(jQuery, this), jQuery.plot.plugins.push({
    init: function (t) {
        function n() {
            var e = t.getPlaceholder();
            0 != e.width() && 0 != e.height() && (t.resize(), t.setupGrid(), t.draw())
        }
        t.hooks.bindEvents.push(function (e, t) {
            e.getPlaceholder().resize(n)
        }),
        t.hooks.shutdown.push(function (e, t) {
            e.getPlaceholder().unbind("resize", n)
        })
    },
    options: {},
    name: "resize",
    version: "1.0"
}), function (n) {
    function x(e, t) {
        return t * Math.floor(e / t)
    }
    function s(e, t, n, i) {
        if ("function" == typeof e.strftime)
            return e.strftime(t);
        var o,
        a = function (e, t) {
            return t = "" + (null == t ? "0" : t),
            1 == (e = "" + e).length ? t + e : e
        },
        r = [],
        l = !1,
        s = e.getHours(),
        c = s < 12;
        null == n && (n = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]),
        null == i && (i = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]),
        o = 12 < s ? s - 12 : 0 == s ? 12 : s;
        for (var f = 0; f < t.length; ++f) {
            var g = t.charAt(f);
            if (l) {
                switch (g) {
                case "a":
                    g = "" + i[e.getDay()];
                    break;
                case "b":
                    g = "" + n[e.getMonth()];
                    break;
                case "d":
                    g = a(e.getDate());
                    break;
                case "e":
                    g = a(e.getDate(), " ");
                    break;
                case "h":
                case "H":
                    g = a(s);
                    break;
                case "I":
                    g = a(o);
                    break;
                case "l":
                    g = a(o, " ");
                    break;
                case "m":
                    g = a(e.getMonth() + 1);
                    break;
                case "M":
                    g = a(e.getMinutes());
                    break;
                case "q":
                    g = "" + (Math.floor(e.getMonth() / 3) + 1);
                    break;
                case "S":
                    g = a(e.getSeconds());
                    break;
                case "y":
                    g = a(e.getFullYear() % 100);
                    break;
                case "Y":
                    g = "" + e.getFullYear();
                    break;
                case "p":
                    g = c ? "am" : "pm";
                    break;
                case "P":
                    g = c ? "AM" : "PM";
                    break;
                case "w":
                    g = "" + e.getDay()
                }
                r.push(g),
                l = !1
            } else
                "%" == g ? l = !0 : r.push(g)
        }
        return r.join("")
    }
    function i(e) {
        function t(e, t, n, i) {
            e[t] = function () {
                return n[i].apply(n, arguments)
            }
        }
        var n = {
            date: e
        };
        null != e.strftime && t(n, "strftime", e, "strftime"),
        t(n, "getTime", e, "getTime"),
        t(n, "setTime", e, "setTime");
        for (var i = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"], o = 0; o < i.length; o++)
            t(n, "get" + i[o], e, "getUTC" + i[o]), t(n, "set" + i[o], e, "setUTC" + i[o]);
        return n
    }
    function b(e, t) {
        if ("browser" == t.timezone)
            return new Date(e);
        if (t.timezone && "utc" != t.timezone) {
            if ("undefined" == typeof timezoneJS || void 0 === timezoneJS.Date)
                return i(new Date(e));
            var n = new timezoneJS.Date;
            return n.setTimezone(t.timezone),
            n.setTime(e),
            n
        }
        return i(new Date(e))
    }
    var w = {
        second: 1e3,
        minute: 6e4,
        hour: 36e5,
        day: 864e5,
        month: 2592e6,
        quarter: 7776e6,
        year: 525949.2 * 60 * 1e3
    },
    e = [[1, "second"], [2, "second"], [5, "second"], [10, "second"], [30, "second"], [1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"], [30, "minute"], [1, "hour"], [2, "hour"], [4, "hour"], [8, "hour"], [12, "hour"], [1, "day"], [2, "day"], [3, "day"], [.25, "month"], [.5, "month"], [1, "month"], [2, "month"]],
    y = e.concat([[3, "month"], [6, "month"], [1, "year"]]),
    k = e.concat([[1, "quarter"], [2, "quarter"], [1, "year"]]);
    n.plot.plugins.push({
        init: function (e) {
            e.hooks.processOptions.push(function (e, t) {
                n.each(e.getAxes(), function (e, t) {
                    var v = t.options;
                    "time" == v.mode && (t.tickGenerator = function (e) {
                        var t = [],
                        n = b(e.min, v),
                        i = 0,
                        o = v.tickSize && "quarter" === v.tickSize[1] || v.minTickSize && "quarter" === v.minTickSize[1] ? k : y;
                        null != v.minTickSize && (i = "number" == typeof v.tickSize ? v.tickSize : v.minTickSize[0] * w[v.minTickSize[1]]);
                        for (var a = 0; a < o.length - 1 && !(e.delta < (o[a][0] * w[o[a][1]] + o[a + 1][0] * w[o[a + 1][1]]) / 2 && o[a][0] * w[o[a][1]] >= i); ++a);
                        var r = o[a][0],
                        l = o[a][1];
                        if ("year" == l) {
                            if (null != v.minTickSize && "year" == v.minTickSize[1])
                                r = Math.floor(v.minTickSize[0]);
                            else {
                                var s = Math.pow(10, Math.floor(Math.log(e.delta / w.year) / Math.LN10)),
                                c = e.delta / w.year / s;
                                r = c < 1.5 ? 1 : c < 3 ? 2 : c < 7.5 ? 5 : 10,
                                r *= s
                            }
                            r < 1 && (r = 1)
                        }
                        e.tickSize = v.tickSize || [r, l];
                        var f = e.tickSize[0];
                        l = e.tickSize[1];
                        var g = f * w[l];
                        "second" == l ? n.setSeconds(x(n.getSeconds(), f)) : "minute" == l ? n.setMinutes(x(n.getMinutes(), f)) : "hour" == l ? n.setHours(x(n.getHours(), f)) : "month" == l ? n.setMonth(x(n.getMonth(), f)) : "quarter" == l ? n.setMonth(3 * x(n.getMonth() / 3, f)) : "year" == l && n.setFullYear(x(n.getFullYear(), f)),
                        n.setMilliseconds(0),
                        w.minute <= g && n.setSeconds(0),
                        w.hour <= g && n.setMinutes(0),
                        w.day <= g && n.setHours(0),
                        4 * w.day <= g && n.setDate(1),
                        2 * w.month <= g && n.setMonth(x(n.getMonth(), 3)),
                        2 * w.quarter <= g && n.setMonth(x(n.getMonth(), 6)),
                        w.year <= g && n.setMonth(0);
                        var u,
                        d = 0,
                        h = Number.NaN;
                        do {
                            if (u = h, h = n.getTime(), t.push(h), "month" == l || "quarter" == l)
                                if (f < 1) {
                                    n.setDate(1);
                                    var m = n.getTime();
                                    n.setMonth(n.getMonth() + ("quarter" == l ? 3 : 1));
                                    var p = n.getTime();
                                    n.setTime(h + d * w.hour + (p - m) * f),
                                    d = n.getHours(),
                                    n.setHours(0)
                                } else
                                    n.setMonth(n.getMonth() + f * ("quarter" == l ? 3 : 1));
                            else
                                "year" == l ? n.setFullYear(n.getFullYear() + f) : n.setTime(h + g)
                        } while (h < e.max && h != u);
                        return t
                    }, t.tickFormatter = function (e, t) {
                        var n = b(e, t.options);
                        if (null != v.timeformat)
                            return s(n, v.timeformat, v.monthNames, v.dayNames);
                        var i = t.options.tickSize && "quarter" == t.options.tickSize[1] || t.options.minTickSize && "quarter" == t.options.minTickSize[1],
                        o = t.tickSize[0] * w[t.tickSize[1]],
                        a = t.max - t.min,
                        r = v.twelveHourClock ? " %p" : "",
                        l = v.twelveHourClock ? "%I" : "%H";
                        return s(n, o < w.minute ? l + ":%M:%S" + r : o < w.day ? a < 2 * w.day ? l + ":%M" + r : "%b %d " + l + ":%M" + r : o < w.month ? "%b %d" : i && o < w.quarter || !i && o < w.year ? a < w.year ? "%b" : "%b %Y" : i && o < w.year ? a < w.year ? "Q%q" : "Q%q %Y" : "%Y", v.monthNames, v.dayNames)
                    })
                })
            })
        },
        options: {
            xaxis: {
                timezone: null,
                timeformat: null,
                twelveHourClock: !1,
                monthNames: null
            }
        },
        name: "time",
        version: "1.0"
    }),
    n.plot.formatDate = s,
    n.plot.dateGenerator = b
}
(jQuery), function (l) {
    function t(e, t, n, i) {
        var o = "categories" == t.xaxis.options.mode,
        a = "categories" == t.yaxis.options.mode;
        if (o || a) {
            var r = i.format;
            if (!r) {
                var l = t;
                if ((r = []).push({
                        x: !0,
                        number: !0,
                        required: !0
                    }), r.push({
                        y: !0,
                        number: !0,
                        required: !0
                    }), l.bars.show || l.lines.show && l.lines.fill) {
                    var s = !!(l.bars.show && l.bars.zero || l.lines.show && l.lines.zero);
                    r.push({
                        y: !0,
                        number: !0,
                        required: !1,
                        defaultValue: 0,
                        autoscale: s
                    }),
                    l.bars.horizontal && (delete r[r.length - 1].y, r[r.length - 1].x = !0)
                }
                i.format = r
            }
            for (var c = 0; c < r.length; ++c)
                r[c].x && o && (r[c].number = !1), r[c].y && a && (r[c].number = !1)
        }
    }
    function s(e) {
        var t = [];
        for (var n in e.categories) {
            var i = e.categories[n];
            i >= e.min && i <= e.max && t.push([i, n])
        }
        return t.sort(function (e, t) {
            return e[0] - t[0]
        }),
        t
    }
    function i(e, t, n) {
        if ("categories" == e[t].options.mode) {
            if (!e[t].categories) {
                var i = {},
                o = e[t].options.categories || {};
                if (l.isArray(o))
                    for (var a = 0; a < o.length; ++a)
                        i[o[a]] = a;
                else
                    for (var r in o)
                        i[r] = o[r];
                e[t].categories = i
            }
            e[t].options.ticks || (e[t].options.ticks = s),
            function (e, t, n) {
                for (var i = e.points, o = e.pointsize, a = e.format, r = t.charAt(0), l = function (e) {
                    var t = -1;
                    for (var n in e)
                        e[n] > t && (t = e[n]);
                        return t + 1
                    }
                        (n), s = 0; s < i.length; s += o)if (null != i[s])
                        for (var c = 0; c < o; ++c) {
                            var f = i[s + c];
                            null != f && a[c][r] && (f in n || (n[f] = l, ++l), i[s + c] = n[f])
                        }
            }
            (n, t, e[t].categories)
        }
    }
    function n(e, t, n) {
        i(t, "xaxis", n),
        i(t, "yaxis", n)
    }
    l.plot.plugins.push({
        init: function (e) {
            e.hooks.processRawData.push(t),
            e.hooks.processDatapoints.push(n)
        },
        options: {
            xaxis: {
                categories: null
            },
            yaxis: {
                categories: null
            }
        },
        name: "categories",
        version: "1.0"
    })
}
(jQuery), function (d) {
    "use strict";
    function h(e, t, n, i, o, a, r) {
        var l,
        s,
        c,
        f = Math.pow,
        g = Math.sqrt;
        return [n + (s = r * (l = g(f(n - e, 2) + f(i - t, 2))) / (l + g(f(o - n, 2) + f(a - i, 2)))) * (e - o), i + s * (t - a), n - (c = r - s) * (e - o), i - c * (t - a)]
    }
    var m = [];
    function p(e, t, n, i) {
        (void 0 === t || "bezier" !== t && "quadratic" !== t) && (t = "quadratic"),
        t += "CurveTo",
        0 == m.length ? m.push([n[0], n[1], i.concat(n.slice(2)), t]) : "quadraticCurveTo" == t && 2 == n.length ? (i = i.slice(0, 2).concat(n), m.push([n[0], n[1], i, t])) : m.push([n[2], n[3], i.concat(n.slice(2)), t])
    }
    function t(e, t, n) {
        if (!0 === n.splines.show) {
            var i,
            o,
            a,
            r = [],
            l = n.splines.tension || .5,
            s = n.datapoints.points,
            c = n.datapoints.pointsize,
            f = e.getPlotOffset(),
            g = s.length,
            u = [];
            if (m = [], g / c < 4)
                d.extend(n.lines, n.splines);
            else {
                for (i = 0; i < g; i += c)
                    o = s[i], a = s[i + 1], null == o || o < n.xaxis.min || o > n.xaxis.max || a < n.yaxis.min || a > n.yaxis.max || u.push(n.xaxis.p2c(o) + f.left, n.yaxis.p2c(a) + f.top);
                for (g = u.length, i = 0; i < g - 2; i += 2)
                    r = r.concat(h.apply(this, u.slice(i, i + 6).concat([l])));
                for (t.save(), t.strokeStyle = n.color, t.lineWidth = n.splines.lineWidth, p(0, "quadratic", u.slice(0, 4), r.slice(0, 2)), i = 2; i < g - 3; i += 2)
                    p(0, "bezier", u.slice(i, i + 4), r.slice(2 * i - 2, 2 * i + 2));
                p(0, "quadratic", u.slice(g - 2, g), [r[2 * g - 10], r[2 * g - 9], u[g - 4], u[g - 3]]),
                function (e, t, n, i, o) {
                    var a = d.color.parse(o);
                    a.a = "number" == typeof i ? i : .3,
                    a.normalize(),
                    a = a.toString(),
                    t.beginPath(),
                    t.moveTo(e[0][0], e[0][1]);
                    for (var r = e.length, l = 0; l < r; l++)
                        try {
                            t[e[l][3]].apply(t, e[l][2])
                        } catch (e) {
                            console.log(e);
                            break
                        }
                    t.stroke(),
                    t.lineWidth = 0,
                    t.lineTo(e[r - 1][0], n),
                    t.lineTo(e[0][0], n),
                    t.closePath(),
                    !1 !== i && (t.fillStyle = a, t.fill())
                }
                (m, t, e.height() + 10, n.splines.fill, n.color),
                t.restore()
            }
        }
    }
    d.plot.plugins.push({
        init: function (e) {
            e.hooks.drawSeries.push(t)
        },
        options: {
            series: {
                splines: {
                    show: !1,
                    lineWidth: 2,
                    tension: .5,
                    fill: !1
                }
            }
        },
        name: "spline",
        version: "0.8.2"
    })
}
(jQuery), function (m) {
    m.plot.plugins.push({
        init: function (c) {
            var f = {
                first: {
                    x: -1,
                    y: -1
                },
                second: {
                    x: -1,
                    y: -1
                },
                show: !1,
                active: !1
            },
            n = {},
            i = null;
            function o(e) {
                f.active && (g(e), c.getPlaceholder().trigger("plotselecting", [t()]))
            }
            function a(e) {
                1 == e.which && (document.body.focus(), void 0 !== document.onselectstart && null == n.onselectstart && (n.onselectstart = document.onselectstart, document.onselectstart = function () {
                        return !1
                    }), void 0 !== document.ondrag && null == n.ondrag && (n.ondrag = document.ondrag, document.ondrag = function () {
                        return !1
                    }), s(f.first, e), f.active = !0, i = function (e) {
                    var t;
                    t = e,
                    i = null,
                    void 0 !== document.onselectstart && (document.onselectstart = n.onselectstart),
                    void 0 !== document.ondrag && (document.ondrag = n.ondrag),
                    f.active = !1,
                    g(t),
                    h() ? r() : (c.getPlaceholder().trigger("plotunselected", []), c.getPlaceholder().trigger("plotselecting", [null]))
                }, m(document).one("mouseup", i))
            }
            function t() {
                if (!h())
                    return null;
                if (!f.show)
                    return null;
                var o = {},
                a = f.first,
                r = f.second;
                return m.each(c.getAxes(), function (e, t) {
                    if (t.used) {
                        var n = t.c2p(a[t.direction]),
                        i = t.c2p(r[t.direction]);
                        o[e] = {
                            from: Math.min(n, i),
                            to: Math.max(n, i)
                        }
                    }
                }),
                o
            }
            function r() {
                var e = t();
                c.getPlaceholder().trigger("plotselected", [e]),
                e.xaxis && e.yaxis && c.getPlaceholder().trigger("selected", [{
                            x1: e.xaxis.from,
                            y1: e.yaxis.from,
                            x2: e.xaxis.to,
                            y2: e.yaxis.to
                        }
                    ])
            }
            function l(e, t, n) {
                return t < e ? e : n < t ? n : t
            }
            function s(e, t) {
                var n = c.getOptions(),
                i = c.getPlaceholder().offset(),
                o = c.getPlotOffset();
                e.x = l(0, t.pageX - i.left - o.left, c.width()),
                e.y = l(0, t.pageY - i.top - o.top, c.height()),
                "y" == n.selection.mode && (e.x = e == f.first ? 0 : c.width()),
                "x" == n.selection.mode && (e.y = e == f.first ? 0 : c.height())
            }
            function g(e) {
                null != e.pageX && (s(f.second, e), h() ? (f.show = !0, c.triggerRedrawOverlay()) : u(!0))
            }
            function u(e) {
                f.show && (f.show = !1, c.triggerRedrawOverlay(), e || c.getPlaceholder().trigger("plotunselected", []))
            }
            function d(e, t) {
                var n,
                i,
                o,
                a,
                r = c.getAxes();
                for (var l in r)
                    if ((n = r[l]).direction == t && (e[a = t + n.n + "axis"] || 1 != n.n || (a = t + "axis"), e[a])) {
                        i = e[a].from,
                        o = e[a].to;
                        break
                    }
                if (e[a] || (n = "x" == t ? c.getXAxes()[0] : c.getYAxes()[0], i = e[t + "1"], o = e[t + "2"]), null != i && null != o && o < i) {
                    var s = i;
                    i = o,
                    o = s
                }
                return {
                    from: i,
                    to: o,
                    axis: n
                }
            }
            function h() {
                var e = c.getOptions().selection.minSize;
                return Math.abs(f.second.x - f.first.x) >= e && Math.abs(f.second.y - f.first.y) >= e
            }
            c.clearSelection = u,
            c.setSelection = function (e, t) {
                var n,
                i = c.getOptions();
                "y" == i.selection.mode ? (f.first.x = 0, f.second.x = c.width()) : (n = d(e, "x"), f.first.x = n.axis.p2c(n.from), f.second.x = n.axis.p2c(n.to)),
                "x" == i.selection.mode ? (f.first.y = 0, f.second.y = c.height()) : (n = d(e, "y"), f.first.y = n.axis.p2c(n.from), f.second.y = n.axis.p2c(n.to)),
                f.show = !0,
                c.triggerRedrawOverlay(),
                !t && h() && r()
            },
            c.getSelection = t,
            c.hooks.bindEvents.push(function (e, t) {
                null != e.getOptions().selection.mode && (t.mousemove(o), t.mousedown(a))
            }),
            c.hooks.drawOverlay.push(function (e, t) {
                if (f.show && h()) {
                    var n = e.getPlotOffset(),
                    i = e.getOptions();
                    t.save(),
                    t.translate(n.left, n.top);
                    var o = m.color.parse(i.selection.color);
                    t.strokeStyle = o.scale("a", .8).toString(),
                    t.lineWidth = 1,
                    t.lineJoin = i.selection.shape,
                    t.fillStyle = o.scale("a", .4).toString();
                    var a = Math.min(f.first.x, f.second.x) + .5,
                    r = Math.min(f.first.y, f.second.y) + .5,
                    l = Math.abs(f.second.x - f.first.x) - 1,
                    s = Math.abs(f.second.y - f.first.y) - 1;
                    t.fillRect(a, r, l, s),
                    t.strokeRect(a, r, l, s),
                    t.restore()
                }
            }),
            c.hooks.shutdown.push(function (e, t) {
                t.unbind("mousemove", o),
                t.unbind("mousedown", a),
                i && m(document).unbind("mouseup", i)
            })
        },
        options: {
            selection: {
                mode: null,
                color: "#e8cfac",
                shape: "round",
                minSize: 5
            }
        },
        name: "selection",
        version: "1.1"
    })
}
(jQuery), function (t) {
    t.plot.plugins.push({
        init: function (r) {
            var o = !1;
            function a(e, t) {
                var n = function (e) {
                    for (var t = r.getData(), n = 0; n < t.length; n++)
                        if (t[n].label == e)
                            return t[n];
                    return null
                }
                (e);
                if (n) {
                    var i = r.getOptions(),
                    o = !1;
                    if (void 0 === n.points.oldShow && (n.points.oldShow = !1), void 0 === n.lines.oldShow && (n.lines.oldShow = !1), n.points.show && !n.points.oldShow && (n.points.show = !1, o = n.points.oldShow = !0), n.lines.show && !n.lines.oldShow && (n.lines.show = !1, o = n.lines.oldShow = !0), o)
                        n.oldColor = n.color, n.color = "#fff", s(i, e, !0);
                    else {
                        var a = !1;
                        !n.points.show && n.points.oldShow && (n.points.show = !0, a = !(n.points.oldShow = !1)),
                        !n.lines.show && n.lines.oldShow && (n.lines.show = !0, a = !(n.lines.oldShow = !1)),
                        a && (n.color = n.oldColor, s(i, e, !1))
                    }
                }
            }
            function l() {
                r.setData(r.getData()),
                r.setupGrid(),
                r.draw()
            }
            function s(e, t, n) {
                e.legend.hidden || (e.legend.hidden = []);
                var i = e.legend.hidden.indexOf(t);
                n ? i < 0 && e.legend.hidden.push(t) : -1 < i && e.legend.hidden.splice(i, 1)
            }
            function c(e) {
                e.mouseenter(function () {
                    t(this).css("cursor", "pointer")
                }).mouseleave(function () {
                    t(this).css("cursor", "default")
                }).unbind("click").click(function () {
                    t(this).is(".legendColorBox") ? a(t(this).next(".legendLabel").text()) : a(t(this).parent().text()),
                    l()
                })
            }
            r.hooks.processOptions.push(function (e, t) {
                t.legend.hideable && (t.legend.labelFormatter = function (e, t) {
                    return '<span class="graphlabel">' + e + "</span>"
                })
            }),
            r.hooks.draw.push(function (e, t) {
                !function (e) {
                    var t = e.getOptions();
                    if (t.legend.hideable) {
                        var n = e.getPlaceholder();
                        if (c(n.find(".graphlabel")), c(n.find(".legendColorBox")), !o && (o = !0, t.legend.hidden)) {
                            for (var i = 0; i < t.legend.hidden.length; i++)
                                a(t.legend.hidden[i]);
                            l()
                        }
                    }
                }
                (e)
            }),
            r.hooks.processDatapoints.push(function (e, t, n) {
                var i = e.getOptions();
                if (i.legend.hideable) {
                    if (i.legend.hidden && -1 < i.legend.hidden.indexOf(t.label)) {
                        var o = !1;
                        t.points.show && (t.points.show = !1, o = t.points.oldShow = !0),
                        t.lines.show && (t.lines.show = !1, o = t.lines.oldShow = !0),
                        o && (t.oldColor = t.color, t.color = "#fff")
                    }
                    t.points.show || t.lines.show || (t.datapoints.format = [null, null])
                }
            })
        },
        options: {},
        name: "hiddenGraphs",
        version: "1.1"
    })
}
(jQuery), jQuery.plot.plugins.push({
    init: function (e) {
        e.hooks.processDatapoints.push(function (e, t, n) {
            if (null != t.fillBetween) {
                var i = function (e, t) {
                    var n;
                    for (n = 0; n < t.length; ++n)
                        if (t[n].id == e.fillBetween)
                            return t[n];
                    return "number" == typeof e.fillBetween ? (n = e.fillBetween) < 0 || n >= t.length ? null : t[n] : null
                }
                (t, e.getData());
                if (i) {
                    for (var o, a, r, l, s, c, f, g = n.pointsize, u = n.points, d = i.datapoints.pointsize, h = i.datapoints.points, p = [], v = t.lines.show, x = 2 < g && n.format[2].y, b = v && t.lines.steps, w = !0, y = 0, k = 0; !(y >= u.length); ) {
                        if (f = p.length, null == u[y]) {
                            for (m = 0; m < g; ++m)
                                p.push(u[y + m]);
                            y += g
                        } else if (k >= h.length) {
                            if (!v)
                                for (m = 0; m < g; ++m)
                                    p.push(u[y + m]);
                            y += g
                        } else if (null == h[k]) {
                            for (m = 0; m < g; ++m)
                                p.push(null);
                            w = !0,
                            k += d
                        } else {
                            if (o = u[y], a = u[y + 1], l = h[k], s = h[k + 1], c = 0, o == l) {
                                for (m = 0; m < g; ++m)
                                    p.push(u[y + m]);
                                c = s,
                                y += g,
                                k += d
                            } else if (l < o) {
                                if (v && 0 < y && null != u[y - g]) {
                                    for (r = a + (u[y - g + 1] - a) * (l - o) / (u[y - g] - o), p.push(l), p.push(r), m = 2; m < g; ++m)
                                        p.push(u[y + m]);
                                    c = s
                                }
                                k += d
                            } else {
                                if (w && v) {
                                    y += g;
                                    continue
                                }
                                for (m = 0; m < g; ++m)
                                    p.push(u[y + m]);
                                v && 0 < k && null != h[k - d] && (c = s + (h[k - d + 1] - s) * (o - l) / (h[k - d] - l)),
                                y += g
                            }
                            w = !1,
                            f != p.length && x && (p[f + 2] = c)
                        }
                        if (b && f != p.length && 0 < f && null != p[f] && p[f] != p[f - g] && p[f + 1] != p[f - g + 1]) {
                            for (m = 0; m < g; ++m)
                                p[f + g + m] = p[f + m];
                            p[f + 1] = p[f - g + 1]
                        }
                    }
                    n.points = p
                }
            }
        })
    },
    options: {
        series: {
            fillBetween: null
        }
    },
    name: "fillbetween",
    version: "1.0"
}), function (o) {
    function a(e) {
        var t,
        n = this,
        i = e.data || {};
        if (i.elem)
            n = e.dragTarget = i.elem, e.dragProxy = g.proxy || n, e.cursorOffsetX = i.pageX - i.left, e.cursorOffsetY = i.pageY - i.top, e.offsetX = e.pageX - e.cursorOffsetX, e.offsetY = e.pageY - e.cursorOffsetY;
        else if (g.dragging || 0 < i.which && e.which != i.which || o(e.target).is(i.not))
            return;
        switch (e.type) {
        case "mousedown":
            return o.extend(i, o(n).offset(), {
                elem: n,
                target: e.target,
                pageX: e.pageX,
                pageY: e.pageY
            }),
            c.add(document, "mousemove mouseup", a, i),
            s(n, !1),
            g.dragging = null,
            !1;
        case !g.dragging && "mousemove":
            if (l(e.pageX - i.pageX) + l(e.pageY - i.pageY) < i.distance)
                break;
            e.target = i.target,
            !1 !== (t = r(e, "dragstart", n)) && (g.dragging = n, g.proxy = e.dragProxy = o(t || n)[0]);
        case "mousemove":
            if (g.dragging) {
                if (t = r(e, "drag", n), f.drop && (f.drop.allowed = !1 !== t, f.drop.handler(e)), !1 !== t)
                    break;
                e.type = "mouseup"
            }
        case "mouseup":
            c.remove(document, "mousemove mouseup", a),
            g.dragging && (f.drop && f.drop.handler(e), r(e, "dragend", n)),
            s(n, !0),
            g.dragging = g.proxy = i.elem = !1
        }
        return !0
    }
    function r(e, t, n) {
        e.type = t;
        var i = o.event.dispatch.call(n, e);
        return !1 !== i && (i || e.result)
    }
    function l(e) {
        return Math.pow(e, 2)
    }
    function t() {
        return !1 === g.dragging
    }
    function s(e, t) {
        e && (e.unselectable = t ? "off" : "on", e.onselectstart = function () {
            return t
        }, e.style && (e.style.MozUserSelect = t ? "" : "none"))
    }
    o.fn.drag = function (e, t, n) {
        return t && this.bind("dragstart", e),
        n && this.bind("dragend", n),
        e ? this.bind("drag", t || e) : this.trigger("drag")
    };
    var c = o.event,
    f = c.special,
    g = f.drag = {
        not: ":input",
        distance: 0,
        which: 1,
        dragging: !1,
        setup: function (e) {
            (e = o.extend({
                    distance: g.distance,
                    which: g.which,
                    not: g.not
                }, e || {})).distance = l(e.distance),
            c.add(this, "mousedown", a, e),
            this.attachEvent && this.attachEvent("ondragstart", t)
        },
        teardown: function () {
            c.remove(this, "mousedown", a),
            this === g.dragging && (g.dragging = g.proxy = !1),
            s(this, !0),
            this.detachEvent && this.detachEvent("ondragstart", t)
        }
    };
    f.dragstart = f.dragend = {
        setup: function () {},
        teardown: function () {}
    }
}
(jQuery), function (r) {
    function t(e) {
        var t = e || window.event,
        n = [].slice.call(arguments, 1),
        i = 0,
        o = 0,
        a = 0;
        return (e = r.event.fix(t)).type = "mousewheel",
        t.wheelDelta && (i = t.wheelDelta / 120),
        t.detail && (i = -t.detail / 3),
        a = i,
        void 0 !== t.axis && t.axis === t.HORIZONTAL_AXIS && (a = 0, o = -1 * i),
        void 0 !== t.wheelDeltaY && (a = t.wheelDeltaY / 120),
        void 0 !== t.wheelDeltaX && (o = -1 * t.wheelDeltaX / 120),
        n.unshift(e, i, o, a),
        (r.event.dispatch || r.event.handle).apply(this, n)
    }
    var n = ["DOMMouseScroll", "mousewheel"];
    if (r.event.fixHooks)
        for (var e = n.length; e; )
            r.event.fixHooks[n[--e]] = r.event.mouseHooks;
    r.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener)
                for (var e = n.length; e; )
                    this.addEventListener(n[--e], t, !1);
            else
                this.onmousewheel = t
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var e = n.length; e; )
                    this.removeEventListener(n[--e], t, !1);
            else
                this.onmousewheel = null
        }
    },
    r.fn.extend({
        mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function (e) {
            return this.unbind("mousewheel", e)
        }
    })
}
(jQuery), function (u) {
    u.plot.plugins.push({
        init: function (r) {
            function i(e, t) {
                var n = r.offset();
                n.left = e.pageX - n.left,
                n.top = e.pageY - n.top,
                t ? r.zoomOut({
                    center: n
                }) : r.zoom({
                    center: n
                })
            }
            function o(e, t) {
                return e.preventDefault(),
                i(e, t < 0),
                !1
            }
            var n = "default",
            a = 0,
            l = 0,
            s = null;
            function c(e) {
                if (1 != e.which)
                    return !1;
                var t = r.getPlaceholder().css("cursor");
                t && (n = t),
                r.getPlaceholder().css("cursor", r.getOptions().pan.cursor),
                a = e.pageX,
                l = e.pageY
            }
            function f(e) {
                var t = r.getOptions().pan.frameRate;
                !s && t && (s = setTimeout(function () {
                        r.pan({
                            left: a - e.pageX,
                            top: l - e.pageY
                        }),
                        a = e.pageX,
                        l = e.pageY,
                        s = null
                    }, 1 / t * 1e3))
            }
            function g(e) {
                s && (clearTimeout(s), s = null),
                r.getPlaceholder().css("cursor", n),
                r.pan({
                    left: a - e.pageX,
                    top: l - e.pageY
                })
            }
            r.zoomOut = function (e) {
                e || (e = {}),
                e.amount || (e.amount = r.getOptions().zoom.amount),
                e.amount = 1 / e.amount,
                r.zoom(e)
            },
            r.zoom = function (e) {
                e || (e = {});
                var t = e.center,
                c = e.amount || r.getOptions().zoom.amount,
                n = r.width(),
                i = r.height();
                t || (t = {
                        left: n / 2,
                        top: i / 2
                    });
                var o = t.left / n,
                a = t.top / i,
                f = {
                    x: {
                        min: t.left - o * n / c,
                        max: t.left + (1 - o) * n / c
                    },
                    y: {
                        min: t.top - a * i / c,
                        max: t.top + (1 - a) * i / c
                    }
                };
                u.each(r.getAxes(), function (e, t) {
                    var n = t.options,
                    i = f[t.direction].min,
                    o = f[t.direction].max,
                    a = n.zoomRange,
                    r = n.panRange;
                    if (!1 !== a) {
                        if (i = t.c2p(i), (o = t.c2p(o)) < i) {
                            var l = i;
                            i = o,
                            o = l
                        }
                        r && (null != r[0] && i < r[0] && (i = r[0]), null != r[1] && o > r[1] && (o = r[1]));
                        var s = o - i;
                        a && (null != a[0] && s < a[0] && 1 < c || null != a[1] && s > a[1] && c < 1) || (n.min = i, n.max = o)
                    }
                }),
                r.setupGrid(),
                r.draw(),
                e.preventEvent || r.getPlaceholder().trigger("plotzoom", [r, e])
            },
            r.pan = function (e) {
                var l = {
                    x: +e.left,
                    y: +e.top
                };
                isNaN(l.x) && (l.x = 0),
                isNaN(l.y) && (l.y = 0),
                u.each(r.getAxes(), function (e, t) {
                    var n,
                    i,
                    o = t.options,
                    a = l[t.direction];
                    n = t.c2p(t.p2c(t.min) + a),
                    i = t.c2p(t.p2c(t.max) + a);
                    var r = o.panRange;
                    !1 !== r && (r && (null != r[0] && r[0] > n && (n += a = r[0] - n, i += a), null != r[1] && r[1] < i && (n += a = r[1] - i, i += a)), o.min = n, o.max = i)
                }),
                r.setupGrid(),
                r.draw(),
                e.preventEvent || r.getPlaceholder().trigger("plotpan", [r, e])
            },
            r.hooks.bindEvents.push(function (e, t) {
                var n = e.getOptions();
                n.zoom.interactive && (t[n.zoom.trigger](i), t.mousewheel(o)),
                n.pan.interactive && (t.bind("dragstart", {
                        distance: 10
                    }, c), t.bind("drag", f), t.bind("dragend", g))
            }),
            r.hooks.shutdown.push(function (e, t) {
                t.unbind(e.getOptions().zoom.trigger, i),
                t.unbind("mousewheel", o),
                t.unbind("dragstart", c),
                t.unbind("drag", f),
                t.unbind("dragend", g),
                s && clearTimeout(s)
            })
        },
        options: {
            xaxis: {
                zoomRange: null,
                panRange: null
            },
            zoom: {
                interactive: !1,
                trigger: "dblclick",
                amount: 1.5
            },
            pan: {
                interactive: !1,
                cursor: "move",
                frameRate: 20
            }
        },
        name: "navigate",
        version: "1.3"
    })
}
(jQuery), jQuery.plot.plugins.push({
    init: function (e) {
        e.hooks.drawSeries.push(function (e, y, k) {
            if (k.dashes.show) {
                var t = e.getPlotOffset(),
                M = k.xaxis,
                T = k.yaxis;
                y.save(),
                y.translate(t.left, t.top),
                y.lineJoin = "round";
                var n = k.dashes.lineWidth,
                i = k.shadowSize;
                if (0 < n && 0 < i) {
                    y.lineWidth = i,
                    y.strokeStyle = "rgba(0,0,0,0.1)";
                    var o = Math.PI / 18;
                    a(Math.sin(o) * (n / 2 + i / 2), Math.cos(o) * (n / 2 + i / 2)),
                    y.lineWidth = i / 2,
                    a(Math.sin(o) * (n / 2 + i / 4), Math.cos(o) * (n / 2 + i / 4))
                }
                y.lineWidth = n,
                y.strokeStyle = k.color,
                0 < n && a(0, 0),
                y.restore()
            }
            function a(e, t) {
                var n,
                i,
                o = k.datapoints.points,
                a = k.datapoints.pointsize,
                r = null,
                l = null,
                s = 0,
                c = !0;
                i = k.dashes.dashLength[0] ? (n = k.dashes.dashLength[0], k.dashes.dashLength[1] ? k.dashes.dashLength[1] : n) : n = k.dashes.dashLength,
                y.beginPath();
                for (var f = a; f < o.length; f += a) {
                    var g = o[f - a],
                    u = o[f - a + 1],
                    d = o[f],
                    h = o[f + 1];
                    if (null != g && null != d) {
                        if (u <= h && u < T.min) {
                            if (h < T.min)
                                continue;
                            g = (T.min - u) / (h - u) * (d - g) + g,
                            u = T.min
                        } else if (h <= u && h < T.min) {
                            if (u < T.min)
                                continue;
                            d = (T.min - u) / (h - u) * (d - g) + g,
                            h = T.min
                        }
                        if (h <= u && u > T.max) {
                            if (h > T.max)
                                continue;
                            g = (T.max - u) / (h - u) * (d - g) + g,
                            u = T.max
                        } else if (u <= h && h > T.max) {
                            if (u > T.max)
                                continue;
                            d = (T.max - u) / (h - u) * (d - g) + g,
                            h = T.max
                        }
                        if (g <= d && g < M.min) {
                            if (d < M.min)
                                continue;
                            u = (M.min - g) / (d - g) * (h - u) + u,
                            g = M.min
                        } else if (d <= g && d < M.min) {
                            if (g < M.min)
                                continue;
                            h = (M.min - g) / (d - g) * (h - u) + u,
                            d = M.min
                        }
                        if (d <= g && g > M.max) {
                            if (d > M.max)
                                continue;
                            u = (M.max - g) / (d - g) * (h - u) + u,
                            g = M.max
                        } else if (g <= d && d > M.max) {
                            if (g > M.max)
                                continue;
                            h = (M.max - g) / (d - g) * (h - u) + u,
                            d = M.max
                        }
                        g == r && u == l || y.moveTo(M.p2c(g) + e, T.p2c(u) + t);
                        for (var m, p = M.p2c(g) + e, v = T.p2c(u) + t, x = M.p2c(d) + e, b = T.p2c(h) + t; 0 == (m = w(0 < s ? s : c ? n : i)).deltaX && 0 == m.deltaY || (c ? y.lineTo(p + m.deltaX, v + m.deltaY) : y.moveTo(p + m.deltaX, v + m.deltaY)), c = !c, s = m.remainder, p += m.deltaX, v += m.deltaY, 0 < m.distance; );
                        r = d,
                        l = h
                    }
                    function w(e) {
                        var t = Math.sqrt(Math.pow(x - p, 2) + Math.pow(b - v, 2));
                        if (t <= e)
                            return {
                                deltaX: x - p,
                                deltaY: b - v,
                                distance: t,
                                remainder: e - t
                            };
                        var n = v < b ? 1 : -1;
                        return {
                            deltaX: (p < x ? 1 : -1) * Math.sqrt(Math.pow(e, 2) / (1 + Math.pow((b - v) / (x - p), 2))),
                            deltaY: n * Math.sqrt(Math.pow(e, 2) - Math.pow(e, 2) / (1 + Math.pow((b - v) / (x - p), 2))),
                            distance: e,
                            remainder: 0
                        }
                    }
                }
                y.stroke()
            }
        })
    },
    options: {
        series: {
            dashes: {
                show: !1,
                lineWidth: 2,
                dashLength: 10
            }
        }
    },
    name: "dashes",
    version: "0.1"
}), function (l) {
    "use strict";
    l.plot.plugins.push({
        init: function (e) {
            var c,
            f,
            a = !1,
            g = e,
            u = null,
            d = null;
            function h() {
                var t,
                e,
                n = new Date;
                if (u.actualStep < d.series.grow.steps) {
                    u.actualStep++;
                    for (var i = 0; i < u.length; i++)
                        for (var o = 0; o < u[i].grow.growings.length; o++)
                            "function" == typeof(t = u[i].grow.growings[o]).stepMode ? t.stepMode(u[i], u.actualStep, t) : "linear" === t.stepMode ? r() : "maximum" === t.stepMode ? l() : "delay" === t.stepMode ? s() : a();
                    g.setData(u),
                    g.draw(),
                    e = new Date - n,
                    c = window.setTimeout(h, Math.max(0, d.series.grow.stepDelay - e))
                } else
                    window.clearTimeout(c), c = null;
                function a() {
                    if (1 === u.actualStep)
                        for (var e = 0; e < u[i].data.length; e++)
                            u[i].data[e][f] = u[i].dataOrg[e][t.valueIndex]
                }
                function r() {
                    if (u.actualStep <= u[i].grow.steps)
                        for (var e = 0; e < u[i].data.length; e++)
                            "up" === t.stepDirection ? u[i].data[e][t.valueIndex] = u[i].dataOrg[e][t.valueIndex] / u[i].grow.steps * u.actualStep : "down" === t.stepDirection && (u[i].data[e][t.valueIndex] = u[i].dataOrg[e][t.valueIndex] + (u[i].yaxis.max - u[i].dataOrg[e][t.valueIndex]) / u[i].grow.steps * (u[i].grow.steps - u.actualStep))
                }
                function l() {
                    if (u.actualStep <= u[i].grow.steps)
                        for (var e = 0; e < u[i].data.length; e++)
                            "up" === t.stepDirection ? u[i].data[e][t.valueIndex] = Math.min(u[i].dataOrg[e][t.valueIndex], u[i].yaxis.max / u[i].grow.steps * u.actualStep) : "down" === t.stepDirection && (u[i].data[e][t.valueIndex] = Math.max(u[i].dataOrg[e][t.valueIndex], u[i].yaxis.max / u[i].grow.steps * (u[i].grow.steps - u.actualStep)))
                }
                function s() {
                    if (u.actualStep == u[i].grow.steps)
                        for (var e = 0; e < u[i].data.length; e++)
                            u[i].data[e][t.valueIndex] = u[i].dataOrg[e][t.valueIndex]
                }
            }
            function o() {
                c && (window.clearTimeout(c), c = null)
            }
            function r(e) {
                if (null === e || "object" != typeof e)
                    return e;
                var t = new e.constructor;
                for (var n in e)
                    t[n] = r(e[n]);
                return t
            }
            e.hooks.bindEvents.push(function (e, t) {
                if (!0 === (d = e.getOptions()).series.grow.active) {
                    for (var n = e.getData(), i = 0; i < u.length; i++)
                        d.series.grow.steps = Math.max(d.series.grow.steps, n[i].grow.steps);
                    0 === d.series.grow.stepDelay && d.series.grow.stepDelay++,
                    h(),
                    function (e) {
                        for (var t = l.plot.plugins, n = 0, i = t.length; n < i; n++) {
                            var o = t[n];
                            if (o.name === e)
                                return !0
                        }
                        return !1
                    }
                    ("resize") && e.getPlaceholder().bind("resize", o)
                }
            }),
            e.hooks.drawSeries.push(function (e, t, n) {
                if (d = e.getOptions(), f = d.series.grow.valueIndex, !0 === d.series.grow.active && !1 === a) {
                    (u = e.getData()).actualStep = 0;
                    for (var i = u.growingIndex = 0; i < u.length; i++) {
                        u[i].dataOrg = r(u[i].data);
                        for (var o = 0; o < u[i].data.length; o++)
                            u[i].data[o][f] = 0
                    }
                    e.setData(u),
                    a = !0
                }
            }),
            e.hooks.shutdown.push(function (e, t) {
                e.getPlaceholder().unbind("resize", o)
            })
        },
        options: {
            series: {
                grow: {
                    active: !1,
                    stepDelay: 20,
                    steps: 100,
                    growings: [{
                            valueIndex: 1,
                            stepMode: "linear",
                            stepDirection: "up"
                        }
                    ]
                }
            }
        },
        name: "grow",
        version: "0.4"
    })
}
(jQuery), function (Bu) {
    if ("function" == typeof require && "object" == typeof exports && "object" == typeof module) {
        var Cu = require("jquery");
        module.exports = Bu(Cu)
    } else if ("function" == typeof define && define.amd)
        define(["jquery"], function (e) {
            return Bu(e)
        });
    else {
        var Du;
        try {
            Du = eval("this")
        } catch (e) {
            Du = window
        }
        Du.deparam = Bu(jQuery)
    }
}
(function (e) {
    var t = function (e, s) {
        var c = {},
        f = {
            true: !0,
            false: !1,
            null: null
        };
        return e.replace(/\+/g, " ").split("&").forEach(function (e) {
            var t,
            n = e.split("="),
            i = decodeURIComponent(n[0]),
            o = c,
            a = 0,
            r = i.split("]["),
            l = r.length - 1;
            if (l = /\[/.test(r[0]) && /\]$/.test(r[l]) ? (r[l] = r[l].replace(/\]$/, ""), (r = r.shift().split("[").concat(r)).length - 1) : 0, 2 === n.length)
                if (t = decodeURIComponent(n[1]), s && (t = t && !isNaN(t) && +t + "" === t ? +t : "undefined" === t ? void 0 : void 0 !== f[t] ? f[t] : t), l)
                    for (; a <= l; a++)
                        o = o[i = "" === r[a] ? o.length : r[a]] = a < l ? o[i] || (r[a + 1] && isNaN(r[a + 1]) ? {}
                                 : []) : t;
                else
                    "[object Array]" === Object.prototype.toString.call(c[i]) ? c[i].push(t) : !{}
            .hasOwnProperty.call(c, i) ? c[i] = t : c[i] = [c[i], t];
            else
                i && (c[i] = s ? void 0 : "")
        }),
        c
    };
    return e.prototype.deparam = e.deparam = t,
    t
});
var months = {
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    de: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    ru: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    es: ["Jan", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    fr: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    it: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    pl: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    pt: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Set", "Out", "Nov", "Dez"],
    nl: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
}, days = {
    en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    de: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    ru: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    es: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    fr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    it: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    pl: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    pt: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    nl: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
};
function CustomChart(y, f, k, M, T) {
    "use strict";
    if (!(this instanceof CustomChart))
        return new CustomChart(y, f, k, M, T);
    this.chart = null,
    this.config = f,
    this.options = y;
    var S,
    z,
    D = this,
    F = 0,
    O = [["#8e9eab", "#eef2f3"], ["#517fa4", "#243949"], ["#485563", "#29323c"], ["#abbaab", "#00ffff"], ["#ECE9E6", "#00ffff"], ["#16222A", "#3A6073"], ["#1F1C2C", "#928DAB"], ["#003973", "#E5E5BE"], ["#D1913C", "#FFD194"], ["#136a8a", "#267871"]];
    function C(e, t) {
        if ("boolean" == typeof e)
            return "" + e;
        var n = D.config.l[t].unit ? " " + D.config.l[t].unit : "";
        return void 0 !== D.config.l[t].afterComma && null !== D.config.l[t].afterComma ? (e = parseFloat(e), D.config.useComma ? e.toFixed(D.config.l[t].afterComma).toString().replace(".", ",") + n : e.toFixed(D.config.l[t].afterComma) + n) : D.config.useComma ? (e = parseFloat(e)).toString().replace(".", ",") + n : e + n
    }
    function I(e, t) {
        if (T)
            return " ";
        var n = new Date(parseInt(e, 10));
        return D.config.timeFormatDate && D.config.timeFormatTime ? t.ticks.length ? new Date(t.ticks[t.ticks.length - 1].v).getDate() !== n.getDate() ? "<b><i>" + $.plot.formatDate(n, D.config.timeFormatDate, months[systemLang], days[systemLang]) + "</i></b>" : $.plot.formatDate(n, D.config.timeFormatTime, months[systemLang], days[systemLang]) : "<b><i>" + $.plot.formatDate(n, D.config.timeFormatDate, months[systemLang], days[systemLang]) + "</i></b>" : $.plot.formatDate(n, D.config.timeFormat, months[systemLang], days[systemLang])
    }
    function W(e, t) {
        var n = D.config.l[t.n - 1].afterComma;
        if (null != n) {
            var i = n ? Math.pow(10, n) : 1,
            o = (Math.round(e * i) / i).toString(),
            a = o.indexOf("."),
            r = -1 === a ? 0 : o.length - a - 1;
            e = r < n ? (r ? o : o + ".") + i.toString().substr(1, n - r) : o
        }
        D.config.useComma && (e = e.toString().replace(".", ","));
        var l = D.config.l[t.n - 1].unit;
        return e + (l ? " " + l : "")
    }
    function A(e) {
        D.config.barLabels && setTimeout(function () {
            for (var i = D.chart.getData(), o = F; o < i.length; o++)
                D.config.l[o - F] && "bar" === D.config.l[o - F].chartType && $.each(i[o].data, function (e, t) {
                    var n;
                    null !== t[1] && (e && e !== i[o].data.length - 1 && ("topover" === D.config.barLabels ? (n = D.chart.pointOffset({
                                    x: t[0],
                                    y: t[1]
                                })).top -= 20 : "topunder" === D.config.barLabels ? n = D.chart.pointOffset({
                                x: t[0],
                                y: t[1]
                            }) : "bottom" === D.config.barLabels ? (n = D.chart.pointOffset({
                                        x: t[0],
                                        y: 0
                                    })).top += 20 : n = D.chart.pointOffset({
                                x: t[0],
                                y: t[1] / 2
                            }), $('<div class="data-point-label"><div style="width: 100%; margin-left: -50%;">' + C(t[1], o - F) + "</div></div>").css({
                                position: "absolute",
                                left: n.left,
                                top: n.top
                            }).appendTo(D.chart.getPlaceholder())))
                });
            (D.config.barFontSize || D.config.barFontColor) && $(".data-point-label").css({
                "font-size": D.config.barFontSize || void 0,
                color: D.config.barFontColor || void 0
            })
        }, e ? parseInt(e) + 200 : 0),
        M && M.length && setTimeout(function () {
            for (var e = D.chart.getData(), t = 0, n = 0; n < M.length; n++) {
                if (M[n].d && e[M[n].l + F]) {
                    var i,
                    o,
                    a = e[t].data;
                    o = "l" === M[n].p ? ((i = D.chart.pointOffset({
                                    x: a[0][0],
                                    y: a[0][1],
                                    yaxis: e[M[n].l + F].yaxis,
                                    xaxis: e[M[n].l + F].xaxis
                                })).top -= M[n].py, M[n].d) : ((i = D.chart.pointOffset({
                                    x: a[1][0],
                                    y: a[1][1],
                                    yaxis: e[M[n].l + F].yaxis,
                                    xaxis: e[M[n].l + F].xaxis
                                })).top -= M[n].py, '<div style="width: 100%; margin-left: -100%; padding-right: 15px; white-space: nowrap">' + M[n].d + "</div>"),
                    $('<div class="marklines-label"  style="padding-left: 10px;  white-space: nowrap">' + o + "</div>").css({
                        position: "absolute",
                        left: i.left,
                        top: i.top,
                        "font-size": M[n].fs || void 0,
                        color: M[n].fc || void 0
                    }).appendTo(D.chart.getPlaceholder())
                }
                "" !== M[n].vl && null !== M[n].vl && void 0 !== M[n].vl && t++,
                t++
            }
        }, e ? parseInt(e) + 200 : 0)
    }
    return function () {
        var e = !(S = []),
        t = $("#" + D.options.titleId);
        if (D.config.title && !t.html() && (t.html(D.config.titlePos ? decodeURI(D.config.title) : ""), D.config.titleColor && t.css("color", D.config.titleColor), D.config.titleSize && t.css("font-size", D.config.titleSize), D.config.titlePos)) {
            for (var n = D.config.titlePos.split(";"), i = {}, o = 0; o < n.length; o++) {
                var a = n[o].split(":");
                "bottom" === a[0] && "5" == a[1] ? -1 === D.config.height.indexOf("%") ? i.top = parseInt(D.config.height, 10) - t.height() - 45 : i.top = "calc(" + D.config.height + " - " + (t.height() + 45) + "px)" : "bottom" === a[0] && "-5" == a[1] ? -1 === D.config.height.indexOf("%") ? i.top = parseInt(D.config.height, 10) + 5 : i.top = "calc(" + D.config.height + " + 5px)" : "top" === a[0] && "50" == a[1] ? -1 === D.config.height.indexOf("%") ? i.top = (parseInt(D.config.height, 10) - t.height()) / 2 : i.top = "calc(50% - " + t.height() / 2 + "px)" : "left" === a[0] && "50" == a[1] ? -1 === D.config.width.indexOf("%") ? i.left = (parseInt(D.config.width, 10) - t.width()) / 2 : i.left = "calc(50% - " + t.width() / 2 + "px)" : "right" === a[0] && "5" == a[1] ? -1 === D.config.width.indexOf("%") ? i.left = parseInt(D.config.width, 10) - t.width() - 45 : i.left = "calc(" + D.config.width + " - " + (t.width() + 45) + "px)" : "right" === a[0] && "-5" == a[1] ? -1 === D.config.width.indexOf("%") ? i.left = parseInt(D.config.width, 10) + 25 : i.left = "calc(" + D.config.width + " + 5px)" : i[a[0]] = a[1]
            }
            t.css(i)
        }
        if (D.config.bg && D.config.bg.length < 3 && O[D.config.bg] && (D.config.bg = {
                    colors: O[D.config.bg]
                }), F = 0, M && M.length)
            for (var r = 0; r < M.length; r++)
                F++, M[r].v = parseFloat(M[r].v) || 0, M[r].l = parseInt(M[r].l) || 0, M[r].s = parseFloat(M[r].s) || 0, M[r].t = parseFloat(M[r].t) || 0, M[r].py = parseFloat(M[r].py) || 0, S.push({
                    id: "line" + r,
                    xaxis: {
                        show: !1
                    },
                    color: M[r].c || void 0,
                    lines: {
                        show: !0,
                        fill: "1" === M[r].f || 1 === M[r].f || "true" === M[r].f || !0 === M[r].f,
                        steps: !0,
                        lineWidth: M[r].t
                    },
                    data: [[0, M[r].v], [100, M[r].v]],
                    label: "__hide_me__",
                    shadowSize: M[r].s
                }), "" !== M[r].vl && null !== M[r].vl && void 0 !== M[r].vl && (F++, M[r].vl = parseFloat(M[r].vl) || 0, S.push({
                        xaxis: {
                            show: !1
                        },
                        color: M[r].c || void 0,
                        lines: {
                            show: !0,
                            fill: !0,
                            steps: !0,
                            lineWidth: M[r].t
                        },
                        data: [[0, M[r].vl], [100, M[r].vl]],
                        fillBetween: "line" + r,
                        label: "__hide_me__",
                        shadowSize: M[r].s
                    }));
        for (var l = 1 / 0, s = 0, c = 0; c < k.length; c++)
            if (k[c] && D.config.l[c]) {
                D.config.l[c].chartType = D.config.l[c].chartType || D.config.chartType || "line",
                D.config.l[c].dashes = !0 === D.config.l[c].dashes || "true" === D.config.l[c].dashes,
                D.config.l[c].dashLength = parseFloat(D.config.l[c].dashLength) || 10,
                D.config.l[c].spaceLength = parseFloat(D.config.l[c].spaceLength) || 10;
                var f = "scatterplot" !== D.config.l[c].chartType && "bar" !== D.config.l[c].chartType && "spline" !== D.config.l[c].chartType,
                g = {
                    color: D.config.l[c].color || void 0,
                    lines: {
                        show: !D.config.l[c].dashes && f,
                        fill: D.config.l[c].fill && "0" !== D.config.l[c].fill ? parseFloat(D.config.l[c].fill) : "area" === D.config.l[c].chartType || "bar" === D.config.l[c].chartType,
                        steps: "steps" === D.config.l[c].chartType,
                        lineWidth: D.config.l[c].thickness
                    },
                    splines: {
                        show: "spline" === D.config.l[c].chartType,
                        tension: .5,
                        lineWidth: D.config.l[c].thickness,
                        fill: !(!D.config.l[c].fill || "0" === D.config.l[c].fill) && parseFloat(D.config.l[c].fill)
                    },
                    bars: {
                        show: "bar" === D.config.l[c].chartType,
                        order: c + 1,
                        barWidth: .6,
                        lineWidth: D.config.l[c].thickness,
                        fill: !(!D.config.l[c].fill || "0" === D.config.l[c].fill) && parseFloat(D.config.l[c].fill),
                        fillColor: D.config.barColor || void 0,
                        align: "center"
                    },
                    points: {
                        show: "lineplot" === D.config.l[c].chartType || "scatterplot" === D.config.l[c].chartType || "true" === D.config.l[c].points || !0 === D.config.l[c].points
                    },
                    data: k[c],
                    label: D.config.l[c].name,
                    shadowSize: D.config.l[c].shadowsize,
                    dashes: {
                        show: D.config.l[c].dashes && f,
                        lineWidth: D.config.l[c].thickness,
                        dashLength: [D.config.l[c].dashLength, D.config.l[c].spaceLength]
                    }
                };
                D.config.smoothing && 0 < D.config.smoothing || D.config.l[c].smoothing && 0 < D.config.l[c].smoothing ? (e = !0, D.config.l[c].smoothing = parseInt(D.config.l[c].smoothing || D.config.smoothing), g.data = avg(g.data, D.config.l[c].smoothing)) : D.config.l[c].smoothing = 0,
                D.config.l[c].afterComma = void 0 === D.config.l[c].afterComma || "" === D.config.l[c].afterComma ? D.config.afterComma : parseInt(D.config.l[c].afterComma, 10),
                "bar" === D.config.l[c].chartType && (g.bars.barWidth = (g.data[g.data.length - 1][0] - g.data[0][0]) / g.data.length * (parseFloat(D.config.barWidth) || .5)),
                S.push(g),
                k[c][0][0] < l && (l = k[c][0][0]),
                k[c][k[c].length - 1][0] > s && (s = k[c][k[c].length - 1][0])
            }
        null === D.config.min || void 0 === D.config.min || "" === D.config.min || "NaN" === D.config.min.toString() ? D.config.min = void 0 : D.config.min = parseFloat(D.config.min),
        D.config.noBorder ? (D.config.width || (D.config.width = "100%"), D.config.height || (D.config.height = "100%"), -1 !== D.config.width.indexOf("%") ? $("#chart_container").css({
                width: "calc(" + D.config.width + " - 20px)"
            }) : $("#chart_container").css({
                width: D.config.width
            }), -1 !== D.config.height.indexOf("%") ? $("#chart_container").css({
                height: "calc(" + D.config.height + " - 20px)"
            }) : $("#chart_container").css({
                height: D.config.height
            })) : $("#chart_container").addClass("chart-container").css({
            width: D.config.width,
            height: D.config.height
        }),
        "null" === D.config.timeFormat && (D.config.timeFormat = void 0),
        D.config.timeFormat && (-1 !== D.config.timeFormat.indexOf("%H:%M:%S") ? D.config.timeFormatTime = "%H:%M:%S" : -1 !== D.config.timeFormat.indexOf("%I:%M:%S") ? D.config.timeFormatTime = "%I:%M:%S" : -1 !== D.config.timeFormat.indexOf("%H:%M.") ? D.config.timeFormatTime = "%H:%M." : -1 !== D.config.timeFormat.indexOf("%H:%M") ? D.config.timeFormatTime = "%H:%M" : D.config.timeFormatTime = null, -1 !== D.config.timeFormat.indexOf("%d.%m.%y") ? D.config.timeFormatDate = "%d.%m.%y" : -1 !== D.config.timeFormat.indexOf("%x %p") ? D.config.timeFormatDate = "%x %p" : -1 !== D.config.timeFormat.indexOf("%d/%m/%y") ? D.config.timeFormatDate = "%d/%m/%y" : -1 !== D.config.timeFormat.indexOf("%m.%d.%y") ? D.config.timeFormatDate = "%m.%d.%y" : -1 !== D.config.timeFormat.indexOf("%d.%m") ? D.config.timeFormatDate = "%d.%m" : -1 !== D.config.timeFormat.indexOf("%a") ? D.config.timeFormatDate = "%a" : D.config.timeFormatDate = null),
        z = {
            grid: {
                hoverable: "true" === D.config.hoverDetail || !0 === D.config.hoverDetail,
                backgroundColor: D.config.bg || void 0,
                borderWidth: D.config.border_width || "0" === D.config.border_width || 0 === D.config.border_width ? parseInt(D.config.border_width, 10) : void 0,
                borderColor: D.config.border_color || void 0
            },
            yaxes: [],
            xaxes: [],
            legend: {
                show: !!D.config.legend,
                position: D.config.legend,
                hideable: !0,
                noColumns: parseInt(D.config.legColumns, 10) || void 0,
                backgroundColor: D.config.legBg || void 0,
                backgroundOpacity: void 0 !== D.config.legBgOpacity ? parseFloat(D.config.legBgOpacity) : .85,
                labelFormatter: function (e, t) {
                    return "__hide_me__" === e ? null : '<span class="graphlabel">' + e + "</span>"
                }
            }
        },
        D.config.zoom && (z.zoom = {
                interactive: !0,
                trigger: "dblclick",
                amount: 1.5
            }, z.pan = {
                interactive: !0,
                cursor: "move",
                frameRate: 20
            });
        var u,
        d = D.config.animation < 1e3 ? 20 : 50;
        for (u = 0; u < D.config.l.length; u++) {
            D.config.l[u].yaxe = D.config.l[u].yaxe || "",
            D.config.l[u].xaxe = D.config.l[u].xaxe || "",
            D.config.l[u].commonYAxis = D.config.l[u].commonYAxis || "";
            var h = {
                show: "off" !== D.config.l[u].yaxe,
                min: "" !== D.config.l[u].min && null !== D.config.l[u].min && void 0 !== D.config.l[u].min ? parseFloat(D.config.l[u].min) : void 0,
                max: "" !== D.config.l[u].max && null !== D.config.l[u].max && void 0 !== D.config.l[u].max ? parseFloat(D.config.l[u].max) : void 0,
                position: -1 < D.config.l[u].yaxe.indexOf("left") ? "left" : "right",
                font: {
                    color: -1 < D.config.l[u].yaxe.indexOf("Color") ? D.config.l[u].color : D.config.y_labels_color || "black"
                },
                zoomRange: !1,
                panRange: !1,
                ticks: parseInt(D.config.l[u].yticks, 10) || void 0,
                tickColor: D.config.grid_color || void 0,
                tickFormatter: W
            },
            m = {
                show: "off" !== D.config.l[u].xaxe,
                position: -1 !== D.config.l[u].xaxe.indexOf("top") ? "top" : "bottom",
                font: {
                    color: -1 !== D.config.l[u].xaxe.indexOf("Color") ? D.config.l[u].color : D.config.x_labels_color || "black"
                },
                zoomRange: null,
                panRange: null,
                mode: "time",
                tickFormatter: D.config.timeFormat ? I : null,
                minTickSize: "bar" === D.config.l[u].chartType ? S[u + F].bars.barWidth : void 0,
                tickColor: D.config.grid_color || void 0,
                ticks: parseInt(D.config.l[u].xticks, 10) || void 0,
                min: void 0,
                max: void 0
            };
            if ("bar" === D.config.l[u].chartType) {
                z.legend.hideable = !1,
                m.ticks = [];
                for (var p = 0; p < k[u].length; p++)
                    m.ticks.push(k[u][p][0]);
                k[u][0][1] = null,
                k[u][k[u].length - 1][1] = null
            } else
                T && (m.ticks = T);
            if (D.config.zoom) {
                var v = new Date;
                m.zoomRange = [null, v.getTime()],
                m.panRange = [null, v.getTime()]
            }
            z.yaxes.push(h),
            z.xaxes.push(m),
            "" !== D.config.l[u].commonYAxis ? S[u + F].yaxis = parseInt(D.config.l[u].commonYAxis) : S[u + F].yaxis = u + 1,
            S[u + F].xaxis = u + 1,
            S[u + F].curvedLines = {
                apply: !!D.config.l[u].smoothing,
                active: !!D.config.l[u].smoothing,
                monotonicFit: !0
            }
        }
        if (M && M.length)
            for (var x = 0, b = 0; b < M.length; b++)
                S[M[b].l + F] && (M[b].l = parseInt(M[b].l, 10), S[x].yaxis = S[M[b].l + F].yaxis, S[x].data[0][0] = l, S[x].data[1][0] = s, x++, "" !== M[b].vl && null !== M[b].vl && void 0 !== M[b].vl && (S[x].yaxis = S[M[b].l + F].yaxis, S[x].data[0][0] = l, S[x].data[1][0] = s, x++));
        e && (z.series = z.series || {}, z.series.curvedLines = {
                apply: !0,
                active: !0,
                monotonicFit: !0
            }),
        D.config.animation && (z.series = z.series || {}, z.series.grow = {
                active: !0,
                steps: d,
                stepDelay: D.config.animation / d
            }),
        $.plot.plugins.push({
            init: function (e) {
                e.hooks.processOptions.push(function (e, t) {
                    t.legend.hideable && (t.legend.labelFormatter = function (e, t) {
                        return "__hide_me__" === e ? null : '<span class="graphlabel">' + e + "</span>"
                    })
                })
            },
            options: y,
            name: "hiddenGraphsEx",
            version: "1.0"
        }),
        D.chart = $.plot("#" + D.options.chartId, S, z),
        A(D.config.animation);
        var w = $("#" + D.options.chartId);
        D.options.tooltipId = D.options.tooltipId || "tooltip",
        "true" !== D.config.hoverDetail && !0 !== D.config.hoverDetail || (w.unbind("plothover").bind("plothover", function (e, t, n) {
                if (n) {
                    var i,
                    o = n.datapoint[0].toFixed(2);
                    i = "boolean" === D.config.l[n.seriesIndex - F].type ? !!Math.round(n.datapoint[1] - D.config.l[n.seriesIndex - F].yOffset) : (n.datapoint[1] - D.config.l[n.seriesIndex - F].yOffset).toFixed(2);
                    var a = n.series.label ? n.series.label + "<br>" : "";
                    a += $.plot.formatDate(new Date(parseInt(o, 10)), D.config.timeFormat) + "<br>",
                    a += "<b>" + C(i, n.seriesIndex - F) + "</b>";
                    var r = $("#" + D.options.tooltipId).html(a);
                    $(this).height() - n.pageY < r.height() && (n.pageY -= 10 + r.height()),
                    $(this).width() - n.pageX < r.width() && (n.pageX -= 10 + r.width()),
                    r.css({
                        top: n.pageY + 5,
                        left: n.pageX + 5
                    }).fadeIn(200)
                } else
                    $("#tooltip").hide()
            }), $("#" + D.options.tooltipId).length || $('<div id="' + D.options.tooltipId + '"></div>').css({
                position: "absolute",
                display: "none",
                border: "1px solid #fdd",
                padding: "2px",
                "background-color": "#fee",
                opacity: .8
            }).appendTo("body")),
        D.config.zoom && D.options.cbOnZoom && w.unbind("plotzoom").bind("plotzoom", function (e, t, n) {
            D.zoomTimeout && clearTimeout(D.zoomTimeout),
            D.zoomTimeout = setTimeout(D.options.cbOnZoom, 500)
        }).unbind("plotpan").bind("plotpan", function (e, t, n) {
            D.zoomTimeout && clearTimeout(D.zoomTimeout),
            D.zoomTimeout = setTimeout(D.options.cbOnZoom, 500)
        })
    }
    (),
    this.update = function (e, t, n) {
        if (e) {
            for (var i = 1 / 0, o = 0, a = 0; a < f.l.length; a++)
                if (S[a + F].data = e[a], e[a][0][0] < i && (i = e[a][0][0]), e[a][e[a].length - 1][0] > o && (o = e[a][e[a].length - 1][0]), "bar" === f.l[a].chartType) {
                    z.xaxes[a].ticks = [];
                    for (var r = 0; r < e[a].length; r++)
                        z.xaxes[a].ticks.push(e[a][r][0]);
                    e[a][0][1] = null,
                    e[a][e[a].length - 1][1] = null
                }
            if (M && M.length) {
                var l = 0;
                for (r = 0; r < M.length; r++)
                    S[l].data[0][0] = i, S[l].data[1][0] = o, l++, "" !== M[r].vl && null !== M[r].vl && void 0 !== M[r].vl && (S[l].data[0][0] = i, S[l].data[1][0] = o, l++)
            }
            $(".data-point-label").remove(),
            $(".marklines-label").remove(),
            z.series && z.series.grow && (z.series.grow.active = !1)
        }
        if (t && t && t.length)
            for (var s = 0, c = 0; c < t.length; c++)
                S[s].data[0][1] = t[c].v, S[s].data[1][1] = t[c].v, s++, "" !== t[c].vl && null !== t[c].vl && void 0 !== t[c].vl && (S[s].data[0][1] = t[c].vl, S[s].data[1][1] = t[c].vl, s++);
        this.chart = $.plot("#" + this.options.chartId, S, z),
        A(!1)
    },
    this.getRange = function () {
        for (var e = this.chart.getOptions(), t = [], n = 0; n < e.xaxes.length; n++)
            t[n] = {
                min: Math.round(e.xaxes[n].min),
                max: Math.round(e.xaxes[n].max)
            },
        z.xaxes[n].max = t[n].max,
        z.xaxes[n].min = t[n].min;
        return t
    },
    this.setRange = function (e) {
        for (var t = 0; t < z.xaxes.length; t++)
            z.xaxes[t].min = e[t].min, z.xaxes[t].max = e[t].max
    },
    this.resetZoom = function (e) {
        e = e || new Date;
        for (var t = 0; t < z.xaxes.length; t++)
            z.xaxes[t].zoomRange = [null, e.getTime()], z.xaxes[t].panRange = [null, e.getTime()]
    },
    this.zoom = function (e, t) {
        var n = this.chart.offset();
        this.chart.zoom({
            center: {
                left: e - n.left,
                height: this.chart.height() / 2
            },
            amount: t
        })
    },
    this.pan = function (e) {
        this.chart.pan({
            left: e,
            top: 0
        })
    },
    this
}
var disconnectTimeout = setTimeout(function () {
    disconnectTimeout = null,
    $("#no-connection").show()
}, 5e3), sessionId = 1, path = location.href.split("?")[1], systemLang = "en";
"undefined" != typeof sysLang && (systemLang = sysLang || "en");
var config = deparam(path || "");
if (config.lines && (config.l = JSON.parse(JSON.stringify(config.lines)), delete config.lines), config._ids) {
    var ids = config._ids ? config._ids.split(";") : [],
    colors = config._colors ? config._colors.split(";") : [],
    names = config._names ? config._names.split(";") : [],
    units = config._units ? config._units.split(";") : [];
    config.l = [];
    for (var i = 0; i < ids.length; i++)
        config.l.push({
            id: ids[i],
            offset: 0,
            name: names[i] || "",
            aggregate: "onchange",
            color: colors[i] || "blue",
            thickness: config.strokeWidth || 1,
            shadowsize: config.strokeWidth || 1,
            min: config.min || "",
            max: config.max || "",
            unit: units[i] || ""
        });
    config.aggregateType = "step",
    config.aggregateSpan = 300,
    config.relativeEnd = "now"
}
if (config.l)
    for (var j = 0; j < config.l.length; j++)
        config.l[j].art && (config.l[j].aggregate = config.l[j].art, delete config.l[j].art), config.instance && !config.l[j].instance && (config.l[j].instance = config.instance);
config.width = config.width || "100%", config.height = config.height || "100%", config.timeFormat = config.timeFormat || "%H:%M:%S %e.%m.%y", config.useComma = "true" === config.useComma || !0 === config.useComma, config.zoom = "true" === config.zoom || !0 === config.zoom, config.animation = parseInt(config.animation) || 0, config.noedit = "true" === config.noedit || !0 === config.noedit, config.afterComma = void 0 === config.afterComma ? 2 : parseInt(config.afterComma, 10), config.timeType = config.timeArt || config.timeType || "relative";
var liveInterval, seriesData = [], ticks = null, navOptions = {}, socketURL = "", socketSESSION = "", now = new Date, divId = "chart_placeholder", zoomTimeout = null, lastX = null, mouseDown = !1, lastWidth = null, chart = null, isApp = !1, subscribes = [], subscribed = !1;
try {
    window.top !== window.self && void 0 !== window.top.app && void 0 !== window.top.socketUrl && (isApp = !0)
} catch (e) {}
isApp ? socketURL = window.top.socketUrl : "undefined" != typeof socketUrl && ((socketURL = socketUrl) && ":" === socketURL[0] && (socketURL = location.protocol + "//" + location.hostname + socketURL), socketSESSION = socketSession);
var socket = io.connect(socketURL, {
    query: "key=" + socketSESSION,
    "reconnection limit": 1e4,
    "max reconnection attempts": 1 / 0,
    upgrade: "undefined" != typeof socketForceWebSockets ? !socketForceWebSockets : void 0,
    rememberUpgrade: "undefined" != typeof socketForceWebSockets ? socketForceWebSockets : void 0,
    transports: "undefined" != typeof socketForceWebSockets && socketForceWebSockets ? ["websocket"] : void 0
});
function addTime(e, t, n, i) {
    return e = new Date(e),
    "string" == typeof t ? "m" === t[1] ? (t = parseInt(t, 10), e.setMonth(n ? e.getMonth() + t : e.getMonth() - t), e = e.getTime()) : "y" === t[1] ? (t = parseInt(t, 10), e.setFullYear(n ? e.getFullYear() + t : e.getFullYear() - t), e = e.getTime()) : (e = e.getTime(), i ? n ? e += 6e4 * (parseInt(t, 10) || 0) : e -= 6e4 * (parseInt(t, 10) || 0) : n ? e += 1e3 * (parseInt(t, 10) || 0) : e -= 1e3 * (parseInt(t, 10) || 0)) : (e = e.getTime(), i ? n ? e += 6e4 * (parseInt(t, 10) || 0) : e -= 6e4 * (parseInt(t, 10) || 0) : n ? e += 1e3 * (parseInt(t, 10) || 0) : e -= 1e3 * (parseInt(t, 10) || 0)),
    e
}
function getStartStop(e, t) {
    var n,
    i,
    o,
    a = {};
    if (config.l[e].offset = config.l[e].offset || 0, -1 !== config.range.indexOf("m") && 1 < config.l.length)
        for (var r = parseInt(config.range, 10) || 1, l = 0; l < config.l.length; l++)
            if (config.l[l].offset && 0 !== config.l[l].offset) {
                o = addTime(now, config.l[0].offset);
                var s = new Date(o);
                s.setMonth(s.getMonth() - r),
                config.range = Math.floor((o - s.getTime()) / 6e4) + "";
                break
            }
    if (config.zoomed)
        return navOptions[e].end = config.l[e].zMax, navOptions[e].start = config.l[e].zMin, navOptions[e];
    if (t)
        return a = {
            start: i = (n = addTime(now, config.l[e].offset)) - t,
            end: n,
            ignoreNull: void 0 === config.l[e].ignoreNull ? config.ignoreNull : config.l[e].ignoreNull,
            aggregate: config.l[e].aggregate || config.aggregate || "minmax",
            count: 1
        },
    navOptions[e].end = n,
    navOptions[e].start = addTime(n, config.range, !1, !0),
    a;
    if ("static" === config.timeType) {
        var c,
        f;
        c = void 0 !== config.start_time ? config.start_time.split(":").map(Number) : [0, 0],
        f = void 0 !== config.end_time ? config.end_time.split(":").map(Number) : [24, 0],
        i = new Date(config.start).setHours(c[0], c[1]),
        n = new Date(config.end).setHours(f[0], f[1]),
        i = addTime(i, config.l[e].offset),
        n = addTime(n, config.l[e].offset)
    } else {
        if ("now" === config.relativeEnd)
            o = new Date(now);
        else if (-1 !== config.relativeEnd.indexOf("minute")) {
            var g = parseInt(config.relativeEnd, 10) || 1;
            (o = new Date(now)).setMinutes(Math.floor(o.getMinutes() / g) * g + g),
            o.setSeconds(0),
            o.setMilliseconds(0)
        } else if (-1 !== config.relativeEnd.indexOf("hour")) {
            var u = parseInt(config.relativeEnd, 10) || 1;
            (o = new Date(now)).setHours(Math.floor(o.getHours() / u) * u + u),
            o.setMinutes(0),
            o.setSeconds(0),
            o.setMilliseconds(0)
        } else
            "today" === config.relativeEnd ? ((o = new Date(now)).setDate(o.getDate() + 1), o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)) : "weekUsa" === config.relativeEnd ? ((o = new Date(now)).setDate(o.getDate() - o.getDay() + 7), o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)) : "weekEurope" === config.relativeEnd ? (0 === (o = new Date(now)).getDay() ? o.setDate(o.getDate() + 1) : o.setDate(o.getDate() - o.getDay() + 8), o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)) : "month" === config.relativeEnd ? ((o = new Date(now)).setMonth(o.getMonth() + 1), o.setDate(1), o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)) : "year" === config.relativeEnd && ((o = new Date(now)).setFullYear(o.getFullYear() + 1), o.setMonth(0), o.setDate(1), o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0));
        i = addTime(n = addTime(o, config.l[e].offset), config.range, !1, !0)
    }
    return a = {
        start: i,
        end: n,
        ignoreNull: void 0 === config.l[e].ignoreNull ? config.ignoreNull : config.l[e].ignoreNull,
        aggregate: config.l[e].aggregate || config.aggregate || "minmax"
    },
    "step" === config.aggregateType ? a.step = 1e3 * config.aggregateSpan : "count" === config.aggregateType && (a.count = config.aggregateSpan || document.getElementById("chart_container").clientWidth / 10),
    navOptions[e] = a
}
function readOneChart(r, e, l, s) {
    var c = getStartStop(l);
    c.instance = e,
    c.sessionId = sessionId,
    config.l[l].yOffset = parseFloat(config.l[l].yOffset) || 0,
    console.log(new Date(c.start) + " - " + new Date(c.end)),
    socket.emit("getHistory", r, c, function (e, t, n, i) {
        if (e && console.error(e), sessionId && i && i !== sessionId)
            console.warn("Ignore request with sessionId=" + i + ", actual is " + sessionId);
        else {
            if (!e && t) {
                c.yOffset = config.l[l].yOffset;
                for (var o = seriesData[l], a = 0; a < t.length; a++)
                    t[a].ts < 9466812e5 && (t[a].ts = 1e3 * t[a].ts), "true" === t[a].val || !0 === t[a].val ? t[a].val = 1 : "false" !== t[a].val && !1 !== t[a].val || (t[a].val = 0), "string" == typeof t[a].val && (t[a].val = parseFloat(t[a].val)), o.push([t[a].ts, null !== t[a].val ? t[a].val + c.yOffset : null]);
                o.length ? (o[0][0] > c.start && o.unshift([c.start, null]), o[o.length - 1][0] < c.end && o.push([c.end, null])) : (o.push([c.start, null]), o.push([c.end, null])),
                t = null
            }
            s && s(r, l)
        }
    })
}
function readValue(e, n, i) {
    socket.emit("getState", e, function (e, t) {
        i(n, t && parseFloat(t.val) || 0)
    })
}
function prepareChart() {
    chart = new CustomChart({
        chartId: divId,
        titleId: "title",
        tooltipId: "tooltip",
        cbOnZoom: onZoom
    }, config, seriesData, config.m, ticks),
    config.zoom && ($("#resetZoom").unbind("click").click(function () {
            seriesData = [],
            $("#resetZoom").hide(),
            config.zoomed = !1,
            now = new Date,
            readData(!0)
        }), $("#" + divId).unbind("touchstart").on("touchstart", function (e) {
            e.preventDefault(),
            mouseDown = !0;
            var t = e.touches || e.originalEvent.touches;
            t && (lastX = t[t.length - 1].pageX, lastWidth = 1 < t.length ? Math.abs(t[0].pageX - t[1].pageX) : null)
        }).unbind("touchend").on("touchend", function (e) {
            e.preventDefault(),
            mouseDown = !1,
            zoomTimeout && clearTimeout(zoomTimeout),
            zoomTimeout = setTimeout(onZoom, 500)
        }).unbind("touchmove").on("touchmove", function (e) {
            e.preventDefault();
            var t = e.touches || e.originalEvent.touches;
            if (t) {
                if (mouseDown) {
                    var n = t[t.length - 1].pageX;
                    if (1 < t.length) {
                        var i = Math.abs(t[0].pageX - t[1].pageX);
                        if (null !== lastWidth && i !== lastWidth) {
                            var o = lastWidth < i ? 1.1 : .9,
                            a = t[0].pageX > t[1].pageX ? t[1].pageX + i / 2 : t[0].pageX + i / 2;
                            chart.zoom(a, o),
                            zoomTimeout && clearTimeout(zoomTimeout),
                            zoomTimeout = setTimeout(onZoom, 500)
                        }
                        lastWidth = i
                    } else
                        chart.pan(lastX - n)
                }
                lastX = n
            }
        })),
    config.live && "relative" === config.timeType && (!0 !== config.live && "true" !== config.live || (config.live = 30), config.live = parseInt(config.live, 10) || 30, startLiveUpdate())
}
function _readOneLine(n, i) {
    socket.emit("getObject", config.l[n].id, function (e, t) {
        !e && t && t.common ? (config.l[n].name = config.l[n].name || t.common.name, config.l[n].unit = config.l[n].unit || (t.common.unit ? t.common.unit.replace("�", "°") : ""), config.l[n].type = t.common.type) : (config.l[n].name = config.l[n].name || config.l[n].id, config.l[n].unit = config.l[n].unit || ""),
        "object" == typeof config.l[n].name && (config.l[n].name = config.l[n].name[systemLang] || config.l[n].name.en),
        readOneChart(config.l[n].id, config.l[n].instance, n, i)
    })
}
function readTicks(l) {
    config.ticks ? socket.emit("getObject", config.ticks, function (e, t) {
        var r = JSON.parse(JSON.stringify(getStartStop(0)));
        r.instance = config.l[0].instance,
        r.sessionId = sessionId,
        r.aggregate = "onchange",
        console.log("Ticks: " + new Date(r.start) + " - " + new Date(r.end)),
        socket.emit("getHistory", config.ticks, r, function (e, t, n, i) {
            if (e && console.error(e), sessionId && i && i !== sessionId)
                console.warn("Ignore request with sessionId=" + i + ", actual is " + sessionId);
            else {
                if (!e && t) {
                    var o = ticks || [];
                    ticks && ticks.length && ticks.splice(0, ticks.length);
                    for (var a = 0; a < t.length; a++)
                        t[a].ts < 9466812e5 && (t[a].ts = 1e3 * t[a].ts), null !== !t[a].val && o.push([t[a].ts, t[a].val]);
                    o.length ? (o[0][0] > r.start && o.unshift([r.start, ""]), o[o.length - 1][0] < r.end && o.push([r.end, ""])) : (o.push([r.start, ""]), o.push([r.end, ""])),
                    t = null,
                    ticks = o
                }
                l && l(o)
            }
        })
    }) : l && l(null)
}
function readMarkings(n, i) {
    if (i = i || 0, !config.m || !config.m.length || i >= config.m.length)
        return n && n();
    !config.m[i].oid && config.m[i].v && parseFloat(config.m[i].v) != config.m[i].v && -1 !== config.m[i].v.indexOf(".") ? (-1 === subscribes.indexOf(config.m[i].v) && subscribes.push(config.m[i].v), readValue(config.m[i].v, i, function (e, t) {
            config.m[e].oid = config.m[e].v,
            config.m[e].v = t,
            !config.m[i].oidl && config.m[i].vl && parseFloat(config.m[i].vl) != config.m[i].vl && -1 !== config.m[i].vl.indexOf(".") ? (-1 === subscribes.indexOf(config.m[i].vl) && subscribes.push(config.m[i].vl), readValue(config.m[i].vl, i, function (e, t) {
                    config.m[e].oidl = config.m[e].vl,
                    config.m[e].vl = t,
                    setTimeout(readMarkings, 0, n, i + 1)
                })) : setTimeout(readMarkings, 0, n, i + 1)
        })) : !config.m[i].oidl && config.m[i].vl && parseFloat(config.m[i].vl) != config.m[i].vl && -1 !== config.m[i].vl.indexOf(".") ? (-1 === subscribes.indexOf(config.m[i].vl) && subscribes.push(config.m[i].vl), readValue(config.m[i].vl, i, function (e, t) {
            config.m[e].oidl = config.m[e].vl,
            config.m[e].vl = t,
            setTimeout(readMarkings, 0, n, i + 1)
        })) : setTimeout(readMarkings, 0, n, i + 1)
}
function _readData(e, t) {
    if ((t = t || 0) >= config.l.length)
        return e && e();
    "" !== config.l[t] && void 0 !== config.l[t] && seriesData.push([]),
    _readOneLine(t, function () {
        setTimeout(function () {
            _readData(e, t + 1)
        }, 10)
    })
}
function subscribeAll(e, t, n) {
    n = n || 0,
    !e || !e.length || n >= e.length ? t && t() : socket.emit("subscribe", e[n], function () {
        setTimeout(function () {
            subscribeAll(e, t, n + 1)
        }, 0)
    })
}
function readData(e) {
    disconnectTimeout && ($("#no-connection").hide(), clearTimeout(disconnectTimeout), disconnectTimeout = null),
    sessionId++,
    config.l && (e || $("#server-disconnect").show(), _readData(function () {
            readTicks(function (e) {
                readMarkings(function () {
                    subscribed || (subscribed = !0, subscribeAll()),
                    $("#server-disconnect").hide(),
                    prepareChart()
                })
            })
        })),
    config.noedit || $("#edit").show().click(function () {
        window.open(location.href.replace("index.html", "edit.html"), "flot").focus()
    })
}
function startLiveUpdate() {
    liveInterval = setInterval(function () {
        if (config.zoomed) {
            for (var e = 0, t = null, n = 0; n < config.l.length; n++)
                e < config.l[n].zMax && (e = config.l[n].zMax), (null === t || t > config.l[n].zMin) && (t = config.l[n].zMin);
            if (!(e + (e - t) / 20 >= (new Date).getTime()))
                return;
            e = (new Date).getTime() - now.getTime();
            for (var i = [], o = 0; o < config.l.length; o++)
                config.l[o].zMax += e, config.l[o].zMin += e, i.push({
                    min: config.l[o].zMin,
                    max: config.l[o].zMax
                });
            chart.setRange(i)
        }
        console.log("on time"),
        updateLive()
    }, 1e3 * config.live)
}
function updateLive() {
    var e = 0;
    now = new Date,
    $(".loader").show(),
    sessionId++,
    config.zoom && chart.resetZoom(now);
    for (var t = 0; t < config.l.length; t++)
        e++, seriesData[t] = [], readOneChart(config.l[t].id, config.l[t].instance, t, function () {
            --e || readTicks(function (e) {
                chart.update(seriesData, null, e),
                $(".loader").hide()
            })
        })
}
function avg(e, t) {
    for (var n, i, o, a, r = [], l = 0; l < e.length; l++) {
        if (i = l < t ? 0 : l - t + 1, n = [e[l][0], null], null !== e[l][1]) {
            a = o = 0;
            for (var s = i; s <= l; s++)
                null !== e[s][1] && (o += e[s][1], a++);
            n[1] = o / a
        }
        r.push(n)
    }
    return r
}
function onZoom() {
    config.zoomed || ($("#resetZoom").show(), config.zoomed = !0);
    for (var e = chart.getRange(), t = 0; t < e.length; t++)
        config.l[t].zMin = e[t].min, config.l[t].zMax = e[t].max;
    console.log("on zoom"),
    updateLive()
}
socket.on("connect", function () {
    disconnectTimeout && ($("#no-connection").hide(), clearTimeout(disconnectTimeout), disconnectTimeout = null),
    setTimeout(function () {
        socket.emit("name", "flot")
    }, 50),
    setTimeout(function () {
        readData()
    }, 100)
}), socket.on("stateChange", function (e, t) {
    if (chart && config && config.m) {
        console.log(e + " - " + t.val);
        for (var n = 0; n < config.m.length; n++)
            config.m[n].oid === e && (config.m[n].v = parseFloat(t.val) || 0), config.m[n].oidl === e && (config.m[n].vl = parseFloat(t.val) || 0);
        chart.update(null, config.m)
    }
}), config.window_bg && $("body").css("background", config.window_bg), socket.on("disconnect", function () {
    disconnectTimeout || (disconnectTimeout = setTimeout(function () {
            disconnectTimeout = null,
            $("#no-connection").show()
        }, 5e3))
});
