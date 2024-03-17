(() => {
    "use strict";
    var e = {
        n: t => {
            var o = t && t.__esModule ? () => t.default : () => t;
            return e.d(o, {
                a: o
            }), o
        },
        d: (t, o) => {
            for (var i in o) e.o(o, i) && !e.o(t, i) && Object.defineProperty(t, i, {
                enumerable: !0,
                get: o[i]
            })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
    };
    (() => {
        const t = jQuery;
        var o = e.n(t);
        const i = {
                disable: function() {
                    window.addEventListener && window.addEventListener("wheel", i.preventDefaultValue, {
                        passive: !1
                    }), document.onkeydown = i.keyDown
                },
                enable: function() {
                    window.removeEventListener && window.removeEventListener("wheel", i.preventDefaultValue, {
                        passive: !1
                    }), window.onmousewheel = document.onmousewheel = document.onkeydown = null
                },
                preventDefaultValue: function(e) {
                    (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
                },
                keyDown: function(e) {
                    const t = [37, 38, 39, 40];
                    for (let o = t.length; o--;)
                        if (e.keyCode === t[o]) return void i.preventDefaultValue(e)
                }
            },
            n = i,
            s = {
                check: function(e, t, i) {
                    if ("object" != typeof e || "" === e || e.length || (e = o()(e)), e.length) {
                        const o = void 0 !== e.data("viewport-offset") ? e.data("viewport-offset") : .15,
                            n = new IntersectionObserver((function(o) {
                                !0 === o[0].isIntersecting && (t.call(e), !1 !== i && n.disconnect())
                            }), {
                                threshold: [o]
                            });
                        n.observe(e[0])
                    }
                }
            },
            r = {
                check: function(e, t) {
                    if ("object" != typeof e || "" === e || e.length || (e = o()(e)), e.length) {
                        "function" != typeof e.find && (e = o()(e));
                        const i = e.find("img");
                        if (i.length) {
                            let o = 0;
                            for (let n = 0; n < i.length; n++) {
                                let s = i[n];
                                if (s.complete) o++, o === i.length && t.call(e);
                                else {
                                    let n = new Image;
                                    n.addEventListener("load", (function() {
                                        if (o++, o === i.length) return t.call(e), !1
                                    }), !1), n.src = s.src
                                }
                            }
                        } else t.call(e)
                    }
                }
            },
            l = {
                swiper: "",
                isEditorMode: !1,
                document,
                init: function(e, t) {
                    e && (l.document = e);
                    const o = e || document;
                    this.holder = o.querySelectorAll(".qodef-block .qodef-block-swiper"), this.holder.length && [...this.holder].map((e => {
                        l.initItem(e, t)
                    }))
                },
                getRealCurrentItem: function(e) {
                    return "string" == typeof e && "" !== e && (e = qiBlocksEditor.qodefGetCurrentBlockElement.get(e, "> .qodef-block .qodef-block-swiper", !0)), e
                },
                initItem: function(e, t) {
                    if (e = l.getRealCurrentItem(e), t || (l.document = document), l.document ? .body ? .classList.contains("wp-admin") && (l.isEditorMode = !0), !e) return;
                    const o = !!l.isEditorMode && qiBlocksEditor.qodefGetCurrentBlockElement.getIframe();
                    let i = e;
                    NodeList.prototype.isPrototypeOf(e) || o ? i && void 0 === i.length && (i = [e]) : i = [e];
                    const n = "object" != typeof qiBlocksEditor ? qiBlocks : qiBlocksEditor;
                    i.forEach((e => {
                        n.qodefWaitForImages.check(e, (function() {
                            setTimeout((() => {
                                const o = l.getOptions(e),
                                    i = l.getEvents(e, o);
                                void 0 !== e && "object" == typeof e.swiper && t && e.swiper.destroy(), new Swiper(e, Object.assign(o, i))
                            }), o ? 800 : 200)
                        }))
                    }))
                },
                getOptions: function(e) {
                    let t = void 0 !== e.getAttribute("data-options") ? JSON.parse(e.getAttribute("data-options")) : {},
                        o = void 0 !== t.direction && "" !== t.direction ? t.direction : "horizontal",
                        i = void 0 !== t.partialValue && "" !== t.partialValue ? parseFloat(t.partialValue) : 0,
                        n = void 0 !== t.disablePartialValue && "" !== t.disablePartialValue ? parseInt(t.disablePartialValue) : "never",
                        s = void 0 !== t.spaceBetween && "" !== t.spaceBetween ? t.spaceBetween : 0,
                        r = void 0 !== t.spaceBetweenTablet && "" !== t.spaceBetweenTablet ? t.spaceBetweenTablet : s,
                        a = void 0 !== t.spaceBetweenMobile && "" !== t.spaceBetweenMobile ? t.spaceBetweenMobile : s,
                        d = void 0 !== t.slidesPerView && "" !== t.slidesPerView ? "auto" === t.slidesPerView ? "auto" : parseInt(t.slidesPerView) + i : 1 + i,
                        c = void 0 !== t.centeredSlides && "" !== t.centeredSlides && t.centeredSlides,
                        u = void 0 !== t.sliderScroll && "" !== t.sliderScroll && t.sliderScroll,
                        f = void 0 !== t.effect && "" !== t.effect ? t.effect : "slide",
                        p = void 0 === t.loop || "" === t.loop || t.loop,
                        w = void 0 === t.autoplay || "" === t.autoplay || t.autoplay,
                        g = void 0 !== t.speed && "" !== t.speed ? parseInt(t.speed, 10) : 5e3,
                        h = void 0 !== t.speedAnimation && "" !== t.speedAnimation ? parseInt(t.speedAnimation, 10) : 800,
                        m = void 0 !== t.customStages && "" !== t.customStages && t.customStages,
                        q = void 0 === t.dragging || "" === t.dragging || t.dragging,
                        y = void 0 !== t.outsideNavigation && "yes" === t.outsideNavigation,
                        b = y ? ".swiper-button-next-" + t.unique : e.querySelector(".swiper-button-next"),
                        v = y ? ".swiper-button-prev-" + t.unique : e.querySelector(".swiper-button-prev"),
                        k = void 0 !== t.outsidePagination && "yes" === t.outsidePagination ? ".swiper-pagination-" + t.unique : e.querySelector(".swiper-pagination");
                    !1 !== w && 5e3 !== g ? w = {
                        delay: g,
                        disableOnInteraction: !1
                    } : !1 !== w && (w = {
                        disableOnInteraction: !1
                    });
                    let B = void 0 !== t.slidesPerView1440 && "" !== t.slidesPerView1440 ? parseInt(t.slidesPerView1440, 10) + i : "auto" === t.slidesPerView ? "auto" : 5 + i,
                        I = void 0 !== t.slidesPerView1366 && "" !== t.slidesPerView1366 ? parseInt(t.slidesPerView1366, 10) + i : "auto" === t.slidesPerView ? "auto" : 4 + i,
                        E = void 0 !== t.slidesPerView1024 && "" !== t.slidesPerView1024 ? parseInt(t.slidesPerView1024, 10) + i : "auto" === t.slidesPerView ? "auto" : 3 + i,
                        S = void 0 !== t.slidesPerView768 && "" !== t.slidesPerView768 ? parseInt(t.slidesPerView768, 10) + i : "auto" === t.slidesPerView ? "auto" : 2 + i,
                        L = void 0 !== t.slidesPerView680 && "" !== t.slidesPerView680 ? parseInt(t.slidesPerView680, 10) + i : "auto" === t.slidesPerView ? "auto" : 1 + i,
                        P = void 0 !== t.slidesPerView480 && "" !== t.slidesPerView480 ? parseInt(t.slidesPerView480, 10) + i : "auto" === t.slidesPerView ? "auto" : 1 + i;
                    if (l.isEditorMode && (l.document ? .body ? .classList.contains("qi-preview-screen-tablet") && (d = d < 3 ? d : E, s = r), l.document ? .body ? .classList.contains("qi-preview-screen-mobile") && (d = P, s = a)), m || (d < 2 ? (B = d, I = d, E = d, S = d) : d < 3 ? (B = d, I = d, E = d) : d < 4 ? (B = d, I = d) : d < 5 && (B = d)), "never" !== n) switch (n) {
                        case 1024:
                            E = Math.floor(E), l.isEditorMode && l.document ? .body.classList.contains("qi-preview-screen-tablet") && (d = Math.floor(d < 3 ? d : E));
                            break;
                        case 768:
                            S = Math.floor(S);
                            break;
                        case 680:
                            L = Math.floor(L);
                            break;
                        case 480:
                            P = Math.floor(P), l.isEditorMode && l.document ? .body.classList.contains("qi-preview-screen-mobile") && (d = Math.floor(P))
                    }
                    let V = {
                        direction: o,
                        slidesPerView: d,
                        centeredSlides: c,
                        sliderScroll: u,
                        loopedSlides: "12",
                        spaceBetween: s,
                        effect: f,
                        autoplay: w,
                        loop: p,
                        speed: h,
                        navigation: {
                            nextEl: b,
                            prevEl: v
                        },
                        pagination: {
                            el: k,
                            type: "bullets",
                            clickable: !0
                        },
                        grabCursor: !0,
                        simulateTouch: !l.isEditorMode && q,
                        breakpoints: {
                            0: {
                                slidesPerView: P,
                                spaceBetween: a
                            },
                            481: {
                                slidesPerView: L,
                                spaceBetween: a
                            },
                            681: {
                                slidesPerView: S,
                                spaceBetween: r
                            },
                            769: {
                                slidesPerView: E,
                                spaceBetween: r
                            },
                            1025: {
                                slidesPerView: I
                            },
                            1367: {
                                slidesPerView: B
                            },
                            1441: {
                                slidesPerView: d
                            }
                        }
                    };
                    return Object.assign(V, l.getSliderDatas(e))
                },
                getSliderDatas: function(e) {
                    let t = o()(e).data(),
                        i = {};
                    for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && "options" !== e && void 0 !== t[e] && "" !== t[e] && (i[e] = t[e]);
                    return i
                },
                getEvents: function(e, t) {
                    return {
                        on: {
                            beforeInit: function() {
                                if ("vertical" === t.direction) {
                                    let o = 0,
                                        i = 0,
                                        n = e.querySelectorAll(".qodef-e");
                                    n.length && n.forEach((e => {
                                        i = e.offsetHeight, i > o && (o = i)
                                    })), 1 === t.slidesPerView && (e.style.height = o + "px", n.length && n.forEach((e => {
                                        e.style.height = o + "px"
                                    })))
                                }
                            },
                            init: function() {
                                if (e.classList.add("qodef--initialized"), l.isEditorMode ? "object" == typeof qiBlocksEditor.qodefSetEditorLinkBehavior && qiBlocksEditor.qodefSetEditorLinkBehavior.linkBehavior(e.querySelectorAll("a, button")) : qiBlocks ? .qodefLightboxPopup && qiBlocks.qodefLightboxPopup.init(e.parentNode), "object" != typeof qiBlocksEditor && t.sliderScroll) {
                                    let i = !1,
                                        n = o()(e),
                                        s = e.classList.contains("qodef-block") ? n : n.parents(".qodef-block"),
                                        r = s.hasClass("qodef--focus-in-viewport"),
                                        l = s.offset().top,
                                        a = s.offset().top + s.outerHeight();
                                    r && window.addEventListener("wheel", (function(e) {
                                        let t = o()(window).scrollTop() + e.deltaY;
                                        (e.deltaY > 0 && t < l || e.deltaY < 0 && a < t + qiBlocks.windowHeight) && qiBlocks.qodefIsInViewport.check(s, (function() {
                                            qiBlocks.qodefScroll.disable(), o()("html, body").stop().animate({
                                                scrollTop: l
                                            }, 1200, (function() {
                                                qiBlocks.qodefScroll.enable()
                                            }))
                                        }), !0)
                                    }), {
                                        passive: !1
                                    }), n.off().on("wheel", (function(n) {
                                        t.loop ? n.preventDefault() : ((n.originalEvent.deltaY < 0 && !e.swiper.isBeginning || n.originalEvent.deltaY > 0 && !e.swiper.isEnd) && n.preventDefault(), r && (n.originalEvent.deltaY < 0 && e.swiper.isBeginning ? (qiBlocks.qodefScroll.disable(), o()("html, body").stop().animate({
                                            scrollTop: Math.max(0, l - qiBlocks.windowHeight)
                                        }, 1200, (function() {
                                            qiBlocks.qodefScroll.enable()
                                        }))) : n.originalEvent.deltaY > 0 && e.swiper.isEnd && (qiBlocks.qodefScroll.disable(), o()("html, body").stop().animate({
                                            scrollTop: a
                                        }, 1200, (function() {
                                            qiBlocks.qodefScroll.enable()
                                        }))))), i || (i = !0, n.originalEvent.deltaY > 0 ? e.swiper.slideNext() : e.swiper.slidePrev(), setTimeout((function() {
                                            i = !1
                                        }), 1e3))
                                    }))
                                }
                            }
                        }
                    }
                }
            },
            a = l,
            d = {
                masonry: [],
                isEditorMode: !1,
                init: function() {
                    this.holder = document.querySelectorAll(".qodef-gutenberg-masonry-layout"), this.holder.length && [...this.holder].map((e => {
                        d.createMasonry(e)
                    }))
                },
                reLayout: function() {
                    const e = d.masonry;
                    "object" == typeof e && Object.keys(e).length && Object.values(e).map((e => {
                        setTimeout((() => {
                            const t = e.element.querySelectorAll(".qodef-gutenberg-column"),
                                o = parseFloat(window.getComputedStyle(e.element.querySelector(".qodef-gutenberg-masonry-sizer")).getPropertyValue("width")),
                                i = parseInt(window.getComputedStyle(e.element).getPropertyValue("column-gap"), 10);
                            o && (t.forEach((e => {
                                e.style.width = o + "px"
                            })), e.element.parentNode.classList.contains("qodef-items--fixed") && d.setFixedImageSize(e.element, t[0], o, i)), setTimeout((() => {
                                e.layout()
                            }), 400)
                        }), 400)
                    }))
                },
                getRealCurrentItem: function(e) {
                    return "string" == typeof e && "" !== e && (e = qiBlocksEditor.qodefGetCurrentBlockElement.get(e, "> .qodef-block .qodef-gutenberg-masonry-layout")), e
                },
                initItem: function(e, t) {
                    const o = t ? e : "";
                    (e = d.getRealCurrentItem(e)) && (document.body.classList.contains("wp-admin") && (d.isEditorMode = !0), o && d.masonry[o] && e ? d.reInit(e, o, t) : d.createMasonry(e, o))
                },
                reInit: function(e, t, o) {
                    const i = (d.isEditorMode ? qiBlocksEditor.qodefGetCurrentBlockElement.getCurrentDocument() : document).querySelectorAll(".qodef-gutenberg-masonry-layout");
                    "function" == typeof Isotope && i.length && ("object" == typeof d.masonry[t] && "reinit" === o ? d.masonry[t].layout() : document.body.classList.contains("wp-admin") || !0 !== e ? d.createMasonry(e, t) : d.masonry[t].layout())
                },
                createMasonry: function(e, t) {
                    if (!e) return;
                    const o = e.querySelector(".qodef-gutenberg-row");
                    if (o) {
                        const i = o.querySelector(".qodef-gutenberg-column");
                        ("object" != typeof qiBlocksEditor ? qiBlocks : qiBlocksEditor).qodefWaitForImages.check(o, (function() {
                            d.createMasonryLogic(e, o, i, t)
                        }))
                    }
                },
                createMasonryLogic: function(e, t, o, i) {
                    if ("function" == typeof Isotope && (d.isEditorMode || !t.classList.contains("qodef--masonry-init"))) {
                        const n = t.querySelectorAll(".qodef-gutenberg-column"),
                            s = parseFloat(window.getComputedStyle(t.querySelector(".qodef-gutenberg-masonry-sizer")).getPropertyValue("width")),
                            r = parseInt(window.getComputedStyle(t).getPropertyValue("column-gap"), 10);
                        n.forEach((e => {
                            e.style.width = s + "px"
                        })), e.classList.contains("qodef-items--fixed") && d.setFixedImageSize(t, o, s, r);
                        const l = new Isotope(t, {
                            layoutMode: "packery",
                            itemSelector: ".qodef-gutenberg-column",
                            percentPosition: !0,
                            packery: {
                                columnWidth: ".qodef-gutenberg-masonry-sizer",
                                gutter: r
                            }
                        });
                        d.masonry[i] = l, setTimeout((() => {
                            l.layout()
                        }), d.isEditorMode ? 600 : 0), t.classList.contains("qodef--masonry-init") || t.classList.add("qodef--masonry-init")
                    }
                },
                setFixedImageSize: function(e, t, o, i) {
                    const n = d.isEditorMode ? document.body.classList.contains("qi-preview-screen-tablet") || document.body.classList.contains("qi-preview-screen-mobile") : qiBlocks.windowWidth <= 680,
                        s = e.parentElement.classList.contains("qodef-col-num--1"),
                        r = e.querySelectorAll(".qodef-gutenberg-column");
                    r && r.forEach((e => {
                        let t = o,
                            r = o;
                        s ? (e.classList.contains("qodef-item--landscape") && (r = Math.round(o / 2)), e.classList.contains("qodef-item--portrait") && (r = Math.round(2 * o))) : (e.classList.contains("qodef-item--landscape") && (t = Math.round(2 * o + i), n && (t = Math.round(o), r = Math.round(o / 2))), e.classList.contains("qodef-item--portrait") && (r = Math.round(2 * o + i)), e.classList.contains("qodef-item--huge-square") && (t = Math.round(2 * o + i), r = Math.round(2 * o + i), n && (t = Math.round(o), r = Math.round(o)))), e.style.width = t + "px", e.style.height = r + "px"
                    }))
                }
            },
            c = d;
        var u = {
            init: function(e) {
                e ? setTimeout((() => {
                    u.initItem(e)
                }), 2e3) : (this.holder = document.querySelectorAll(".qi-block-fslightbox-popup"), this.holder.length && [...this.holder].map((e => {
                    u.initItem(e)
                })))
            },
            getRealCurrentItem: function(e) {
                return "string" == typeof e && "" !== e && (e = qiBlocksEditor.qodefGetCurrentBlockElement.get(e)), e
            },
            initItem: function(e, t) {
                if ((e = u.getRealCurrentItem(e)) && "undefined" != typeof refreshFsLightbox) {
                    refreshFsLightbox();
                    for (const e in fsLightboxInstances) {
                        let t = fsLightboxInstances[e].props.sources,
                            o = [],
                            i = 0;
                        t.forEach((e => {
                            o.includes(e) || (o.push(e), i++)
                        }));
                        let n = i !== t.length ? t.length - i : 0;
                        fsLightboxInstances[e].props.onOpen = function() {
                            const t = fsLightboxInstances[e].elements.container.querySelectorAll(".fslightbox-slide-number-container");
                            if (n > 0 && t.length) {
                                const o = t[0].querySelector(".fslightbox-flex-centered > *:first-child"),
                                    s = t[0].querySelector(".fslightbox-flex-centered > *:last-child");
                                new MutationObserver((() => {
                                    let e = Number(o.innerText),
                                        t = e;
                                    e > i && (t = n > i && e > n ? e - n : e - i), o.innerText = t, s.innerText = i
                                })).observe(fsLightboxInstances[e].elements.container, {
                                    subtree: !0,
                                    attributes: !0,
                                    attributeFilter: ["class"]
                                })
                            }
                        }, fsLightboxInstances[e].props.onInit = () => {
                            const t = fsLightboxInstances[e].elements.container,
                                o = t.querySelectorAll(".fslightbox-slide-btn-container-previous > .fslightbox-slide-btn"),
                                i = t.querySelectorAll(".fslightbox-slide-btn-container-next > .fslightbox-slide-btn"),
                                n = t.querySelectorAll('[title="Close"]'),
                                s = "object" != typeof qiBlocksEditor ? qiBlocks : qiBlocksEditor;
                            o.length && (o[0].innerHTML = s.vars.arrowLeftIcon), i.length && (i[0].innerHTML = s.vars.arrowRightIcon), n.length && (n[0].innerHTML = s.vars.closeIcon)
                        }
                    }
                }
            }
        };
        const f = u,
            p = {
                init: function() {
                    this.holder = document.querySelectorAll(".qodef-image--hover-follow-info"), this.holder.length && [...this.holder].map((e => {
                        p.initItem(e)
                    }))
                },
                initItem: function(e) {
                    if (window.innerWidth > 1024) {
                        const t = e.querySelectorAll(".qodef-image-wrapper");
                        t.length && [...t].map((e => {
                            p.initItemBehavior(e)
                        }))
                    }
                },
                initItemBehavior: function(e) {
                    if (e) {
                        const t = e.querySelector(".qodef-e-content");
                        t && e.addEventListener("mousemove", (e => {
                            e.clientX + t.offsetWidth + 20 > window.innerWidth ? t.classList.add("qodef--right") : t.classList.remove("qodef--right"), t.style.top = e.clientY + 20 + "px", t.style.left = e.clientX + 20 + "px"
                        }))
                    }
                }
            },
            w = p;
        void 0 === window.qiBlocks && (window.qiBlocks = {}), qiBlocks.body = o()("body"), qiBlocks.html = o()("html"), qiBlocks.windowWidth = o()(window).width(), qiBlocks.windowHeight = o()(window).height(), qiBlocks.scroll = 0, qiBlocks.qodefScroll = n, qiBlocks.qodefIsInViewport = s, qiBlocks.qodefWaitForImages = r, qiBlocks.qodefSwiper = a, qiBlocks.qodefMasonryLayout = c, qiBlocks.qodefLightboxPopup = f, o()(document).ready((function() {
            qiBlocks.scroll = o()(window).scrollTop(), g.init(), a.init(), c.init(), f.init(), w.init()
        })), o()(window).resize((function() {
            qiBlocks.windowWidth = o()(window).width(), qiBlocks.windowHeight = o()(window).height(), c.reInit(!0), w.init()
        })), o()(window).scroll((function() {
            qiBlocks.scroll = o()(window).scrollTop()
        }));
        const g = {
            init: function() {
                const e = document.querySelectorAll(".qodef-entrance-animation--on");
                e.length && e.forEach((e => {
                    g.setClasses(e)
                }))
            },
            setClasses: function(e) {
                e.classList.contains("qodef-animation--appeared") || qiBlocks.qodefIsInViewport.check(e, (function() {
                    e.classList.add("qodef-animation--appeared"), e.getAttribute("data-animation") && e.classList.add("animate__" + e.getAttribute("data-animation"))
                }))
            }
        };
        qiBlocks.qodefTriggerAnimation = g
    })()
})();