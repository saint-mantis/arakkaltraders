google.maps.__gjsload__('infowindow', function(_) {
    var LO = function(a) {
            return !!a.infoWindow.get("logAsInternal")
        },
        WFa = function(a, b) {
            if (1 === a.Fg.size) {
                const c = Array.from(a.Fg.values())[0];
                c.yt !== b.yt && (c.set("map", null), a.Fg.delete(c))
            }
            a.Fg.add(b)
        },
        YFa = function(a, b) {
            var c = a.__gm;
            a = c.get("panes");
            c = c.get("innerContainer");
            b = {
                nl: a,
                uj: _.bC.uj(),
                Yu: c,
                shouldFocus: b
            };
            return new XFa(b)
        },
        MO = function(a, b) {
            a.ah.style.visibility = b ? "" : "hidden";
            b && a.shouldFocus && (a.focus(), a.shouldFocus = !1);
            b ? ZFa(a) : a.Mg = !1
        },
        $Fa = function(a) {
            const b = !!a.get("open");
            var c = a.get("content");
            c = b ? c : null;
            if (c == a.Hg) MO(a, b && a.get("position"));
            else {
                if (a.Hg) {
                    const d = a.Hg.parentNode;
                    d == a.Fg && d.removeChild(a.Hg)
                }
                c && (a.Ng = !1, a.Fg.appendChild(c));
                MO(a, b && a.get("position"));
                a.Hg = c;
                NO(a)
            }
        },
        NO = function(a) {
            var b = a.getSize();
            if (b) {
                var c = b.Il;
                b = b.minWidth;
                a.Fi.style.maxWidth = _.Bt(c.width);
                a.Fi.style.maxHeight = _.Bt(c.height);
                a.Fi.style.minWidth = _.Bt(b);
                a.Fg.style.maxHeight = _.hn.Fg ? _.Bt(c.height - 18) : _.Bt(c.height - 36);
                OO(a);
                a.Kg.start()
            }
        },
        aGa = function(a) {
            const b = a.get("pixelOffset") || new _.zl(0, 0);
            var c =
                new _.zl(a.Fi.offsetWidth, a.Fi.offsetHeight);
            a = -b.height + c.height + 11 + 60;
            let d = b.height + 60;
            const e = -b.width + c.width / 2 + 60;
            c = b.width + c.width / 2 + 60;
            0 > b.height && (d -= b.height);
            return {
                top: a,
                bottom: d,
                left: e,
                right: c
            }
        },
        ZFa = function(a) {
            !a.Mg && a.get("open") && a.get("visible") && a.get("position") && (_.wk(a, "visible"), a.Mg = !0)
        },
        OO = function(a) {
            var b = a.get("position");
            if (b && a.get("pixelOffset")) {
                var c = aGa(a);
                const d = b.x - c.left,
                    e = b.y - c.top,
                    f = b.x + c.right;
                c = b.y + c.bottom;
                _.lu(a.anchor, b);
                b = a.get("zIndex");
                _.nu(a.ah, _.Wi(b) ?
                    b : e + 60);
                a.set("pixelBounds", _.km(d, e, f, c))
            }
        },
        cGa = function(a, b, c) {
            return b instanceof _.Gk ? new bGa(a, b, c) : new bGa(a, b)
        },
        eGa = function(a) {
            a.Fg && a.ii.push(_.Gt(a.Fg, "pixelposition_changed", () => {
                dGa(a)
            }))
        },
        dGa = function(a) {
            const b = a.model.get("pixelPosition") || a.Fg && a.Fg.get("pixelPosition");
            a.Jg.set("position", b)
        },
        gGa = function(a) {
            a = a.__gm;
            a.get("IW_AUTO_CLOSER") || a.set("IW_AUTO_CLOSER", new fGa);
            return a.get("IW_AUTO_CLOSER")
        },
        fGa = class {
            constructor() {
                this.Fg = new Set
            }
        };
    var XFa = class extends _.Ak {
        constructor(a) {
            super();
            this.Hg = this.Lg = null;
            this.Mg = this.Ng = !1;
            this.Yu = a.Yu;
            this.shouldFocus = a.shouldFocus;
            this.ah = document.createElement("div");
            this.ah.style.cursor = "default";
            this.ah.style.position = "absolute";
            this.ah.style.left = this.ah.style.top = "0";
            a.nl.floatPane.appendChild(this.ah);
            this.anchor = _.mu("div", this.ah);
            this.Jg = _.mu("div", this.anchor);
            this.Fi = _.mu("div", this.Jg);
            this.Fi.setAttribute("role", "dialog");
            this.Fi.tabIndex = -1;
            this.Rg = _.mu("div", this.Jg);
            this.Fg = _.mu("div",
                this.Fi);
            _.pxa(this.ah);
            _.gu(this.Fi, "gm-style-iw");
            _.gu(this.anchor, "gm-style-iw-a");
            _.gu(this.Jg, "gm-style-iw-t");
            _.gu(this.Rg, "gm-style-iw-tc");
            _.gu(this.Fi, "gm-style-iw-c");
            _.gu(this.Fg, "gm-style-iw-d");
            _.hn.Fg && !_.hn.Mg && (a.uj ? this.Fi.style.paddingLeft = "0" : this.Fi.style.paddingRight = "0", this.Fi.style.paddingBottom = "0", this.Fg.style.overflow = "scroll");
            MO(this, !1);
            _.qk(this.ah, "mousedown", _.hk);
            _.qk(this.ah, "mouseup", _.hk);
            _.qk(this.ah, "mousemove", _.hk);
            _.qk(this.ah, "pointerdown", _.hk);
            _.qk(this.ah,
                "pointerup", _.hk);
            _.qk(this.ah, "pointermove", _.hk);
            _.qk(this.ah, "dblclick", _.hk);
            _.qk(this.ah, "click", _.hk);
            _.qk(this.ah, "touchstart", _.hk);
            _.qk(this.ah, "touchend", _.hk);
            _.qk(this.ah, "touchmove", _.hk);
            _.Ft(this.ah, "contextmenu", this, this.Pg);
            _.Ft(this.ah, "wheel", this, _.hk);
            _.Ft(this.ah, "mousewheel", this, _.ek);
            _.Ft(this.ah, "MozMousePixelScroll", this, _.ek);
            this.Gg = new _.cw({
                zp: new _.xl(8, 8),
                Cq: new _.zl(14, 14),
                offset: new _.xl(-6, -6),
                ownerElement: this.Fi
            });
            this.Fi.appendChild(this.Gg.element);
            _.qk(this.Gg.element,
                "click", b => {
                    _.hk(b);
                    _.wk(this, "closeclick");
                    this.set("open", !1)
                });
            this.Kg = new _.Qm(() => {
                !this.Ng && this.get("content") && this.get("visible") && (_.wk(this, "domready"), this.Ng = !0)
            }, 0);
            this.Og = _.qk(this.ah, "keydown", b => {
                "Escape" !== b.key && "Esc" !== b.key || !this.Fi.contains(document.activeElement) || (b.stopPropagation(), _.wk(this, "closeclick"), this.set("open", !1))
            })
        }
        ariaLabel_changed() {
            const a = this.get("ariaLabel");
            a ? this.Fi.setAttribute("aria-label", a) : this.Fi.removeAttribute("aria-label")
        }
        open_changed() {
            $Fa(this)
        }
        content_changed() {
            $Fa(this)
        }
        pendingFocus_changed() {
            this.get("pendingFocus") &&
                (this.get("open") && this.get("visible") && this.get("position") ? _.tn(this.Fi, !0) : console.warn("Setting focus on InfoWindow was ignored. This is most likely due to InfoWindow not being visible yet."), this.set("pendingFocus", !1))
        }
        dispose() {
            setTimeout(() => {
                document.activeElement && document.activeElement !== document.body || (this.Lg && this.Lg !== document.body ? _.tn(this.Lg, !0) || _.tn(this.Yu, !0) : _.tn(this.Yu, !0))
            });
            this.Og && _.lk(this.Og);
            this.ah.parentNode.removeChild(this.ah);
            this.Kg.stop();
            this.Kg.dispose()
        }
        getSize() {
            var a =
                this.get("layoutPixelBounds"),
                b = this.get("pixelOffset");
            const c = this.get("maxWidth") || 648,
                d = this.get("minWidth") || 0;
            if (!b) return null;
            a ? (b = a.yh - a.rh - (11 + -b.height), a = a.Bh - a.wh - 6, 240 <= a && (a -= 120), 240 <= b && (b -= 120)) : (a = 648, b = 654);
            a = Math.min(a, c);
            a = Math.max(d, a);
            a = Math.max(0, a);
            b = Math.max(0, b);
            return {
                Il: new _.zl(a, b),
                minWidth: d
            }
        }
        pixelOffset_changed() {
            const a = this.get("pixelOffset") || new _.zl(0, 0);
            this.Jg.style.right = _.Bt(-a.width);
            this.Jg.style.bottom = _.Bt(-a.height + 11);
            NO(this)
        }
        layoutPixelBounds_changed() {
            NO(this)
        }
        position_changed() {
            this.get("position") ?
                (OO(this), MO(this, !!this.get("open"))) : MO(this, !1)
        }
        zIndex_changed() {
            OO(this)
        }
        visible_changed() {
            this.ah.style.display = this.get("visible") ? "" : "none";
            this.Kg.start();
            if (this.get("visible")) {
                const a = this.Gg.element.style.display;
                this.Gg.element.style.display = "none";
                this.Gg.element.getBoundingClientRect();
                this.Gg.element.style.display = a;
                ZFa(this)
            } else this.Mg = !1
        }
        Pg(a) {
            let b = !1;
            const c = this.get("content");
            let d = a.target;
            for (; !b && d;) b = d == c, d = d.parentNode;
            b ? _.ek(a) : _.gk(a)
        }
        focus() {
            this.Lg = document.activeElement;
            let a;
            _.hn.Ng && (a = this.Fg.getBoundingClientRect());
            if (this.get("disableAutoPan")) _.tn(this.Fi, !0);
            else {
                var b = _.su(this.Fg);
                if (b.length) {
                    b = b[0];
                    a = a || this.Fg.getBoundingClientRect();
                    var c = b.getBoundingClientRect();
                    _.tn(c.bottom <= a.bottom && c.right <= a.right ? b : this.Fi, !0)
                } else _.tn(this.Gg.element, !0)
            }
        }
    };
    var bGa = class {
        constructor(a, b, c) {
            this.model = a;
            this.isOpen = !0;
            this.Fg = this.Hg = this.lh = null;
            this.ii = [];
            var d = a.get("shouldFocus");
            this.Jg = YFa(b, d);
            const e = b.__gm;
            (d = b instanceof _.Gk) && c ? c.then(h => {
                this.isOpen && (this.lh = h, this.Fg = new _.wL(l => {
                    this.Hg = new _.yB(b, h, l, () => {});
                    h.Ai(this.Hg);
                    return this.Hg
                }), this.Fg.bindTo("latLngPosition", a, "position"), eGa(this))
            }) : (this.Fg = new _.wL, this.Fg.bindTo("latLngPosition", a, "position"), this.Fg.bindTo("center", e, "projectionCenterQ"), this.Fg.bindTo("zoom", e), this.Fg.bindTo("offset",
                e), this.Fg.bindTo("projection", b), this.Fg.bindTo("focus", b, "position"), eGa(this));
            this.Kg = d ? LO(a) ? "Ia" : "Id" : null;
            this.Lg = d ? LO(a) ? 148284 : 148285 : null;
            const f = new _.xL(["scale"], "visible", h => null == h || .3 <= h);
            this.Fg && f.bindTo("scale", this.Fg);
            const g = this.Jg;
            g.set("logAsInternal", LO(a));
            g.bindTo("ariaLabel", a);
            g.bindTo("zIndex", a);
            g.bindTo("layoutPixelBounds", e, "pixelBounds");
            g.bindTo("disableAutoPan", a);
            g.bindTo("pendingFocus", a);
            g.bindTo("maxWidth", a);
            g.bindTo("minWidth", a);
            g.bindTo("content", a);
            g.bindTo("pixelOffset",
                a);
            g.bindTo("visible", f);
            this.Gg = new _.Qm(() => {
                if (b instanceof _.Gk)
                    if (this.lh) {
                        var h = a.get("position");
                        h && _.Zt(b, this.lh, new _.$k(h), aGa(g))
                    } else c.then(() => {
                        this.Gg.start()
                    });
                else(h = g.get("pixelBounds")) ? _.wk(e, "pantobounds", h) : this.Gg.start()
            }, 150);
            if (d) {
                let h = null;
                this.ii.push(_.Gt(a, "position_changed", () => {
                    const l = a.get("position");
                    !l || a.get("disableAutoPan") || l.equals(h) || (this.Gg.start(), h = l)
                }))
            } else a.get("disableAutoPan") || this.Gg.start();
            g.set("open", !0);
            this.ii.push(_.jk(g, "domready", () => {
                a.trigger("domready")
            }));
            this.ii.push(_.jk(g, "visible", () => {
                a.trigger("visible")
            }));
            this.ii.push(_.jk(g, "closeclick", () => {
                a.close();
                a.trigger("closeclick")
            }));
            this.ii.push(_.Gt(a, "pixelposition_changed", () => {
                dGa(this)
            }));
            this.Kg && _.ql(b, this.Kg);
            this.Lg && _.ol(b, this.Lg)
        }
        close() {
            if (this.isOpen) {
                this.isOpen = !1;
                for (var a of this.ii) _.lk(a);
                this.ii.length = 0;
                this.Gg.stop();
                this.Gg.dispose();
                this.lh && this.Hg && this.lh.km(this.Hg);
                a = this.Jg;
                a.unbindAll();
                a.set("open", !1);
                a.dispose();
                this.Fg && this.Fg.unbindAll()
            }
        }
    };
    _.bk("infowindow", {
        yD: function(a) {
            let b = null;
            _.Gt(a, "map_changed", function d() {
                const e = a.get("map");
                b && (b.Oz.Fg.delete(a), b.iH.close(), b = null);
                if (e) {
                    const f = e.__gm;
                    f.get("panes") ? f.get("innerContainer") ? (b = {
                        iH: cGa(a, e, e instanceof _.Gk ? f.Gg.then(({
                            lh: g
                        }) => g) : void 0),
                        Oz: gGa(e)
                    }, WFa(b.Oz, a)) : _.tk(f, "innercontainer_changed", d) : _.tk(f, "panes_changed", d)
                }
            })
        }
    });
});