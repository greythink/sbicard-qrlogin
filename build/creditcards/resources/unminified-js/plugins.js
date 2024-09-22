/*! SBI - v1.0.0
 * Sapient Nitro (http://www.sapient.com)
 * Author: Sapient Nitro
 * Date: 2024-08-07 18:04:03
 * (http://www.sapient.com) Copyright (c) 2024 -  */
!(function () {
    Array.prototype.map ||
        (Array.prototype.map = function (someFunction) {
            var len = this.length;
            if ("function" != typeof someFunction) throw new TypeError();
            for (var res = new Array(len), params = arguments[1], i = 0; len > i; i++) i in this && (res[i] = someFunction.call(params, this[i], i, this));
            return res;
        }),
        String.prototype.trim ||
        (String.prototype.trim = function () {
            var trimmedVal = this.replace(/^\s+/, "").replace(/\s+$/, "");
            return trimmedVal;
        }),
        window.console || (console = { log: function () { } });
})(),
    (function ($) {
        ($.fn.getAttributes = function () {
            var attributes = {};
            return (
                this.length &&
                $.each(this[0].attributes, function (index, attr) {
                    attributes[attr.name] = attr.value;
                }),
                attributes
            );
        }),
            ($.isIE = function () {
                var retVal = !1,
                    myNav = navigator.userAgent.toLowerCase(),
                    isIE = -1 != myNav.indexOf("msie") ? parseInt(myNav.split("msie")[1]) : !1;
                return (retVal = isIE);
            }),
            ($.fn.addPlaceholderForIE = function () {
                var checkForIEVer = 9,
                    elem = $(this),
                    placeholderText = $(elem).attr("placeholder"),
                    textColor = "#333",
                    placeholderColor = "#aaa",
                    ieVer = $.isIE();
                0 != ieVer &&
                    checkForIEVer >= ieVer &&
                    ("" == $.trim(elem.val()) && elem.val(placeholderText).css("color", placeholderColor),
                        elem
                            .focus(function (e) {
                                e.preventDefault();
                                var val = $(this).val();
                                return val.length > 0 && val !== placeholderText ? void $(this).css("color", textColor) : void $(this).val("").css("color", textColor);
                            })
                            .blur(function (e) {
                                e.preventDefault();
                                var val = $.trim($(this).val());
                                return val.length > 0 ? void $(this).css("color", textColor) : void $(this).val(placeholderText).css("color", placeholderColor);
                            }));
            });
    })(jQuery),
    jQuery.fn.extend({
        copyEventsFrom: function (from) {
            return jQuery.event.copy(from, this), this;
        },
        copyEventsTo: function (to) {
            return jQuery.event.copy(this, to), this;
        },
        cloneWithEvents: function (deep) {
            return this.clone(deep).copyEventsFrom(this);
        },
    }),
    (jQuery.event.copy = function (from, to) {
        if (((from = from.jquery ? from : jQuery(from)), (to = to.jquery ? to : jQuery(to)), from.size() && from[0].events && to.size())) {
            var events = from[0].events;
            to.each(function () {
                for (var type in events) for (var handler in events[type]) jQuery.event.add(this, type, events[type][handler], events[type][handler].data);
            });
        }
    });
var compareCardPage = "compare.shtml",
    sbi = sbi || {};
(sbi = {
    config: {
        isClickOnSFL: "false",
        INRSymbol: "â‚¹",
        comparePagePath: compareCardPage,
        facebookID: "sbicards",
        twitterID: "sbicards",
        facebookAppID: "249570251724199",
        creditCardJsonFeed: "data/data_json.json",
        cardUpgrade: {
            SliderMaxY: 5e5,
            SliderStepY: 1e4,
            SliderMinY: 0,
            SliderStartY: 0,
            SliderMaxM: 5e4,
            SliderStepM: 1e3,
            SliderMinM: 0,
            SliderStartM: 0,
            simplyfierTooltip: { sliderVal: ["0", "35", "70"], toolTipText: ["Value for money", "balanced", "Best in Class"] },
        },
        en: {
            errorMsgs: {
                firstName: { required: " ", noSpecialChar: " " },
                lastName: { required: " ", noSpecialChar: " " },
                dob: " ",
                city: " ",
                income: " ",
                required: " ",
                email: { required: " ", emailFormat: "sds" },
                annualIncome: { required: " ", integer: " " },
                panCard: { required: " ", panNum: " " },
                phone: { required: " ", integer: " ", minlength: "" },
                step3phone: { required: " ", integer: " ", minlength: "" },
                agree: " ",
                gender: " ",
                address: { required: " ", alphaNumeric: " " },
                pinCode: { required: "" },
                companyName: { required: " ", noSpecialCharWithSpace: " " },
                natureOfCompany: { required: " " },
                years: { required: " ", integer: " " },
                designation: { required: " ", noSpecialCharWithSpace: " " },
                officeCity: " ",
                resCity: " ",
                officeAddress: { required: " ", alphaNumeric: " " },
                officePinCode: " ",
                mailingAddress: " ",
                landlineLoc: " ",
                stdCode: " ",
                amount: " ",
                otp: " ",
                offers: " ",
                name: " ",
                mailAdd: " ",
                savingsAccountNumber: " ",
                bankName: " ",
                ifscCode: " ",
                bookingAmnt: " ",
                landlinePhone: { required: " ", integer: " " },
                agreeCondition1: " ",
                agreeCondition2: " ",
                agreeCondition4: " ",
                smsCode: { required: " " },
                "alternate-num": { required: " ", startWith4or5: "", minlength: "" },
            },
            dirPath: { mediaImages: "", staticImages: "/sbi-card-en/assets/media/images/" },
            labels: {},
        },
        hi: { errorMsgs: { required: "Please enter this value.", email: "Please enter email address." }, dirPath: { mediaImages: "", staticImages: "/sbi-card-en/assets/media/images/" } },
    },
}),
    (function (factory) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], factory) : factory(jQuery);
    })(function ($) {
        "use strict";
        var Slick = window.Slick || {};
        (Slick = (function () {
            function Slick(element, settings) {
                var responsiveSettings,
                    breakpoint,
                    _ = this;
                if (
                    ((_.defaults = {
                        accessibility: !0,
                        appendArrows: $(element),
                        appendDots: $(element),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<span data-role="none" class="slick-prev">Previous</span>',
                        nextArrow: '<span data-role="none" class="slick-next">Next</span>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function (slider, i) {
                            return '<span class="dot-button">' + (i + 1) + "</span>";
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        fade: !1,
                        focusOnSelect: !1,
                        infinite: !0,
                        lazyLoad: "ondemand",
                        onBeforeChange: null,
                        onAfterChange: null,
                        onInit: null,
                        onReInit: null,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !1,
                        responsive: null,
                        rtl: !1,
                        slide: "div",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 300,
                        swipe: !0,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        vertical: !1,
                        waitForAnimate: !0,
                    }),
                        (_.initials = {
                            animating: !1,
                            dragging: !1,
                            autoPlayTimer: null,
                            currentSlide: 0,
                            currentLeft: null,
                            direction: 1,
                            $dots: null,
                            listWidth: null,
                            listHeight: null,
                            loadIndex: 0,
                            $nextArrow: null,
                            $prevArrow: null,
                            slideCount: null,
                            slideWidth: null,
                            $slideTrack: null,
                            $slides: null,
                            sliding: !1,
                            slideOffset: 0,
                            swipeLeft: null,
                            $list: null,
                            touchObject: {},
                            transformsEnabled: !1,
                        }),
                        $.extend(_, _.initials),
                        (_.activeBreakpoint = null),
                        (_.animType = null),
                        (_.animProp = null),
                        (_.breakpoints = []),
                        (_.breakpointSettings = []),
                        (_.cssTransitions = !1),
                        (_.paused = !1),
                        (_.positionProp = null),
                        (_.$slider = $(element)),
                        (_.$slidesCache = null),
                        (_.transformType = null),
                        (_.transitionType = null),
                        (_.windowWidth = 0),
                        (_.windowTimer = null),
                        (_.options = $.extend({}, _.defaults, settings)),
                        (_.originalSettings = _.options),
                        (responsiveSettings = _.options.responsive || null),
                        responsiveSettings && responsiveSettings.length > -1)
                ) {
                    for (breakpoint in responsiveSettings)
                        responsiveSettings.hasOwnProperty(breakpoint) &&
                            (_.breakpoints.push(responsiveSettings[breakpoint].breakpoint), (_.breakpointSettings[responsiveSettings[breakpoint].breakpoint] = responsiveSettings[breakpoint].settings));
                    _.breakpoints.sort(function (a, b) {
                        return b - a;
                    });
                }
                (_.autoPlay = $.proxy(_.autoPlay, _)),
                    (_.autoPlayClear = $.proxy(_.autoPlayClear, _)),
                    (_.changeSlide = $.proxy(_.changeSlide, _)),
                    (_.selectHandler = $.proxy(_.selectHandler, _)),
                    (_.setPosition = $.proxy(_.setPosition, _)),
                    (_.swipeHandler = $.proxy(_.swipeHandler, _)),
                    (_.dragHandler = $.proxy(_.dragHandler, _)),
                    (_.keyHandler = $.proxy(_.keyHandler, _)),
                    (_.autoPlayIterator = $.proxy(_.autoPlayIterator, _)),
                    (_.instanceUid = instanceUid++),
                    (_.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                    _.init();
            }
            var instanceUid = 0;
            return Slick;
        })()),
            (Slick.prototype.addSlide = function (markup, index, addBefore) {
                var _ = this;
                if ("boolean" == typeof index) (addBefore = index), (index = null);
                else if (0 > index || index >= _.slideCount) return !1;
                _.unload(),
                    "number" == typeof index
                        ? 0 === index && 0 === _.$slides.length
                            ? $(markup).appendTo(_.$slideTrack)
                            : addBefore
                                ? $(markup).insertBefore(_.$slides.eq(index))
                                : $(markup).insertAfter(_.$slides.eq(index))
                        : addBefore === !0
                            ? $(markup).prependTo(_.$slideTrack)
                            : $(markup).appendTo(_.$slideTrack),
                    (_.$slides = _.$slideTrack.children(this.options.slide)),
                    _.$slideTrack.children(this.options.slide).detach(),
                    _.$slideTrack.append(_.$slides),
                    _.$slides.each(function (index, element) {
                        $(element).attr("index", index);
                    }),
                    (_.$slidesCache = _.$slides),
                    _.reinit();
            }),
            (Slick.prototype.animateSlide = function (targetLeft, callback) {
                var animProps = {},
                    _ = this;
                _.options.rtl === !0 && _.options.vertical === !1 && (targetLeft = -targetLeft),
                    _.transformsEnabled === !1
                        ? _.options.vertical === !1
                            ? _.$slideTrack.animate({ left: targetLeft }, _.options.speed, _.options.easing, callback)
                            : _.$slideTrack.animate({ top: targetLeft }, _.options.speed, _.options.easing, callback)
                        : _.cssTransitions === !1
                            ? $({ animStart: _.currentLeft }).animate(
                                { animStart: targetLeft },
                                {
                                    duration: _.options.speed,
                                    easing: _.options.easing,
                                    step: function (now) {
                                        _.options.vertical === !1
                                            ? ((animProps[_.animType] = "translate(" + now + "px, 0px)"), _.$slideTrack.css(animProps))
                                            : ((animProps[_.animType] = "translate(0px," + now + "px)"), _.$slideTrack.css(animProps));
                                    },
                                    complete: function () {
                                        callback && callback.call();
                                    },
                                }
                            )
                            : (_.applyTransition(),
                                (animProps[_.animType] = _.options.vertical === !1 ? "translate3d(" + targetLeft + "px, 0px, 0px)" : "translate3d(0px," + targetLeft + "px, 0px)"),
                                _.$slideTrack.css(animProps),
                                callback &&
                                setTimeout(function () {
                                    _.disableTransition(), callback.call();
                                }, _.options.speed));
            }),
            (Slick.prototype.applyTransition = function (slide) {
                var _ = this,
                    transition = {};
                (transition[_.transitionType] = _.options.fade === !1 ? _.transformType + " " + _.options.speed + "ms " + _.options.cssEase : "opacity " + _.options.speed + "ms " + _.options.cssEase),
                    _.options.fade === !1 ? _.$slideTrack.css(transition) : _.$slides.eq(slide).css(transition);
            }),
            (Slick.prototype.autoPlay = function () {
                var _ = this;
                _.autoPlayTimer && clearInterval(_.autoPlayTimer), _.slideCount > _.options.slidesToShow && _.paused !== !0 && (_.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed));
            }),
            (Slick.prototype.autoPlayClear = function () {
                var _ = this;
                _.autoPlayTimer && clearInterval(_.autoPlayTimer);
            }),
            (Slick.prototype.autoPlayIterator = function () {
                var _ = this,
                    asNavFor = null != _.options.asNavFor ? $(_.options.asNavFor).getSlick() : null;
                _.options.infinite === !1
                    ? 1 === _.direction
                        ? (_.currentSlide + 1 === _.slideCount - 1 && (_.direction = 0),
                            _.slideHandler(_.currentSlide + _.options.slidesToScroll),
                            null != asNavFor && asNavFor.slideHandler(asNavFor.currentSlide + asNavFor.options.slidesToScroll))
                        : (_.currentSlide - 1 === 0 && (_.direction = 1), _.slideHandler(_.currentSlide - _.options.slidesToScroll), null != asNavFor && asNavFor.slideHandler(asNavFor.currentSlide - asNavFor.options.slidesToScroll))
                    : (_.slideHandler(_.currentSlide + _.options.slidesToScroll), null != asNavFor && asNavFor.slideHandler(asNavFor.currentSlide + asNavFor.options.slidesToScroll));
            }),
            (Slick.prototype.buildArrows = function () {
                var _ = this;
                _.options.arrows === !0 &&
                    _.slideCount > _.options.slidesToShow &&
                    ((_.$prevArrow = $(_.options.prevArrow)),
                        (_.$nextArrow = $(_.options.nextArrow)),
                        _.htmlExpr.test(_.options.prevArrow) && _.$prevArrow.appendTo(_.options.appendArrows),
                        _.htmlExpr.test(_.options.nextArrow) && _.$nextArrow.appendTo(_.options.appendArrows),
                        _.options.infinite !== !0 && _.$prevArrow.addClass("slick-disabled"));
            }),
            (Slick.prototype.buildDots = function () {
                var i,
                    dotString,
                    _ = this;
                if (_.options.dots === !0 && _.slideCount > _.options.slidesToShow) {
                    for (dotString = '<ul class="' + _.options.dotsClass + '">', i = 0; i <= _.getDotCount(); i += 1) dotString += "<li>" + _.options.customPaging.call(this, _, i) + "</li>";
                    (dotString += "</ul>"), (_.$dots = $(dotString).appendTo(_.options.appendDots)), _.$dots.find("li").first().addClass("slick-active");
                }
            }),
            (Slick.prototype.buildOut = function () {
                var _ = this;
                (_.$slides = _.$slider.children(_.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                    (_.slideCount = _.$slides.length),
                    _.$slides.each(function (index, element) {
                        $(element).attr("index", index);
                    }),
                    (_.$slidesCache = _.$slides),
                    _.$slider.addClass("slick-slider"),
                    (_.$slideTrack = 0 === _.slideCount ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent()),
                    (_.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent()),
                    _.$slideTrack.css("opacity", 0),
                    _.options.centerMode === !0 && ((_.options.slidesToScroll = 1), _.options.slidesToShow % 2 === 0 && (_.options.slidesToShow = 3)),
                    $("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading"),
                    _.setupInfinite(),
                    _.buildArrows(),
                    _.buildDots(),
                    _.updateDots(),
                    _.options.accessibility === !0 && _.$list.prop("tabIndex", 0),
                    _.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0),
                    _.options.draggable === !0 && _.$list.addClass("draggable");
            }),
            (Slick.prototype.checkResponsive = function () {
                var breakpoint,
                    targetBreakpoint,
                    _ = this;
                if (_.originalSettings.responsive && _.originalSettings.responsive.length > -1 && null !== _.originalSettings.responsive) {
                    targetBreakpoint = null;
                    for (breakpoint in _.breakpoints) _.breakpoints.hasOwnProperty(breakpoint) && $(window).width() < _.breakpoints[breakpoint] && (targetBreakpoint = _.breakpoints[breakpoint]);
                    null !== targetBreakpoint
                        ? null !== _.activeBreakpoint
                            ? targetBreakpoint !== _.activeBreakpoint && ((_.activeBreakpoint = targetBreakpoint), (_.options = $.extend({}, _.options, _.breakpointSettings[targetBreakpoint])), _.refresh())
                            : ((_.activeBreakpoint = targetBreakpoint), (_.options = $.extend({}, _.options, _.breakpointSettings[targetBreakpoint])), _.refresh())
                        : null !== _.activeBreakpoint && ((_.activeBreakpoint = null), (_.options = $.extend({}, _.options, _.originalSettings)), _.refresh());
                }
            }),
            (Slick.prototype.changeSlide = function (event) {
                var _ = this,
                    $target = $(event.target),
                    asNavFor = null != _.options.asNavFor ? $(_.options.asNavFor).getSlick() : null;
                switch (($target.is("a") && event.preventDefault(), event.data.message)) {
                    case "previous":
                        _.slideCount > _.options.slidesToShow && (_.slideHandler(_.currentSlide - _.options.slidesToScroll), null != asNavFor && asNavFor.slideHandler(asNavFor.currentSlide - asNavFor.options.slidesToScroll));
                        break;
                    case "next":
                        _.slideCount > _.options.slidesToShow && (_.slideHandler(_.currentSlide + _.options.slidesToScroll), null != asNavFor && asNavFor.slideHandler(asNavFor.currentSlide + asNavFor.options.slidesToScroll));
                        break;
                    case "index":
                        var index = event.data.index || $(event.target).parent().index() * _.options.slidesToScroll;
                        console.log(index), _.slideHandler(index), null != asNavFor && asNavFor.slideHandler(index);
                    default:
                        return !1;
                }
            }),
            (Slick.prototype.destroy = function () {
                var _ = this;
                _.autoPlayClear(),
                    (_.touchObject = {}),
                    $(".slick-cloned", _.$slider).remove(),
                    _.$dots && _.$dots.remove(),
                    _.$prevArrow && (_.$prevArrow.remove(), _.$nextArrow.remove()),
                    _.$slides.parent().hasClass("slick-track") && _.$slides.unwrap().unwrap(),
                    _.$slides.removeClass("slick-slide slick-active slick-visible").css("width", ""),
                    _.$slider.removeClass("slick-slider"),
                    _.$slider.removeClass("slick-initialized"),
                    _.$list.off(".slick"),
                    $(window).off(".slick-" + _.instanceUid),
                    $(document).off(".slick-" + _.instanceUid);
            }),
            (Slick.prototype.disableTransition = function (slide) {
                var _ = this,
                    transition = {};
                (transition[_.transitionType] = ""), _.options.fade === !1 ? _.$slideTrack.css(transition) : _.$slides.eq(slide).css(transition);
            }),
            (Slick.prototype.fadeSlide = function (slideIndex, callback) {
                var _ = this;
                _.cssTransitions === !1
                    ? (_.$slides.eq(slideIndex).css({ zIndex: 1e3 }), _.$slides.eq(slideIndex).animate({ opacity: 1 }, _.options.speed, _.options.easing, callback))
                    : (_.applyTransition(slideIndex),
                        _.$slides.eq(slideIndex).css({ opacity: 1, zIndex: 1e3 }),
                        callback &&
                        setTimeout(function () {
                            _.disableTransition(slideIndex), callback.call();
                        }, _.options.speed));
            }),
            (Slick.prototype.filterSlides = function (filter) {
                var _ = this;
                null !== filter && (_.unload(), _.$slideTrack.children(this.options.slide).detach(), _.$slidesCache.filter(filter).appendTo(_.$slideTrack), _.reinit());
            }),
            (Slick.prototype.getCurrent = function () {
                var _ = this;
                return _.currentSlide;
            }),
            (Slick.prototype.getDotCount = function () {
                var dotLimit,
                    _ = this,
                    breaker = 0,
                    dotCounter = 0,
                    dotCount = 0;
                for (dotLimit = _.options.infinite === !0 ? _.slideCount + _.options.slidesToShow - _.options.slidesToScroll : _.slideCount; dotLimit > breaker;)
                    dotCount++, (dotCounter += _.options.slidesToScroll), (breaker = dotCounter + _.options.slidesToShow);
                return dotCount;
            }),
            (Slick.prototype.getLeft = function (slideIndex) {
                var targetLeft,
                    verticalHeight,
                    _ = this,
                    verticalOffset = 0;
                return (
                    (_.slideOffset = 0),
                    (verticalHeight = _.$slides.first().outerHeight()),
                    _.options.infinite === !0
                        ? (_.slideCount > _.options.slidesToShow && ((_.slideOffset = _.slideWidth * _.options.slidesToShow * -1), (verticalOffset = verticalHeight * _.options.slidesToShow * -1)),
                            _.slideCount % _.options.slidesToScroll !== 0 &&
                            slideIndex + _.options.slidesToScroll > _.slideCount &&
                            _.slideCount > _.options.slidesToShow &&
                            ((_.slideOffset = (_.slideCount % _.options.slidesToShow) * _.slideWidth * -1), (verticalOffset = (_.slideCount % _.options.slidesToShow) * verticalHeight * -1)))
                        : _.slideCount % _.options.slidesToShow !== 0 &&
                        slideIndex + _.options.slidesToScroll > _.slideCount &&
                        _.slideCount > _.options.slidesToShow &&
                        ((_.slideOffset = _.options.slidesToShow * _.slideWidth - (_.slideCount % _.options.slidesToShow) * _.slideWidth), (verticalOffset = (_.slideCount % _.options.slidesToShow) * verticalHeight)),
                    _.options.centerMode === !0 && _.options.infinite === !0
                        ? (_.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth)
                        : _.options.centerMode === !0 && (_.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2)),
                    (targetLeft = _.options.vertical === !1 ? slideIndex * _.slideWidth * -1 + _.slideOffset : slideIndex * verticalHeight * -1 + verticalOffset)
                );
            }),
            (Slick.prototype.init = function () {
                var _ = this;
                $(_.$slider).hasClass("slick-initialized") || ($(_.$slider).addClass("slick-initialized"), _.buildOut(), _.setProps(), _.startLoad(), _.loadSlider(), _.initializeEvents(), _.checkResponsive()),
                    null !== _.options.onInit && _.options.onInit.call(this, _);
            }),
            (Slick.prototype.initArrowEvents = function () {
                var _ = this;
                _.options.arrows === !0 && _.slideCount > _.options.slidesToShow && (_.$prevArrow.on("click.slick", { message: "previous" }, _.changeSlide), _.$nextArrow.on("click.slick", { message: "next" }, _.changeSlide));
            }),
            (Slick.prototype.initDotEvents = function () {
                var _ = this;
                _.options.dots === !0 && _.slideCount > _.options.slidesToShow && $("li", _.$dots).on("click.slick", { message: "index" }, _.changeSlide),
                    _.options.dots === !0 && _.options.pauseOnDotsHover === !0 && _.options.autoplay === !0 && $("li", _.$dots).on("mouseenter.slick", _.autoPlayClear).on("mouseleave.slick", _.autoPlay);
            }),
            (Slick.prototype.initializeEvents = function () {
                var _ = this;
                _.initArrowEvents(),
                    _.initDotEvents(),
                    _.$list.on("touchstart.slick mousedown.slick", { action: "start" }, _.swipeHandler),
                    _.$list.on("touchmove.slick mousemove.slick", { action: "move" }, _.swipeHandler),
                    _.$list.on("touchend.slick mouseup.slick", { action: "end" }, _.swipeHandler),
                    _.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, _.swipeHandler),
                    _.options.pauseOnHover === !0 && _.options.autoplay === !0 && (_.$list.on("mouseenter.slick", _.autoPlayClear), _.$list.on("mouseleave.slick", _.autoPlay)),
                    _.options.accessibility === !0 && _.$list.on("keydown.slick", _.keyHandler),
                    _.options.focusOnSelect === !0 && $(_.options.slide, _.$slideTrack).on("click.slick", _.selectHandler),
                    $(window).on("orientationchange.slick.slick-" + _.instanceUid, function () {
                        _.checkResponsive(), _.setPosition();
                    }),
                    $(window).on("resize.slick.slick-" + _.instanceUid, function () {
                        $(window).width() !== _.windowWidth &&
                            (clearTimeout(_.windowDelay),
                                (_.windowDelay = window.setTimeout(function () {
                                    (_.windowWidth = $(window).width()), _.checkResponsive(), _.setPosition();
                                }, 50)));
                    }),
                    $(window).on("load.slick.slick-" + _.instanceUid, _.setPosition),
                    $(document).on("ready.slick.slick-" + _.instanceUid, _.setPosition);
            }),
            (Slick.prototype.initUI = function () {
                var _ = this;
                _.options.arrows === !0 && _.slideCount > _.options.slidesToShow && (_.$prevArrow.show(), _.$nextArrow.show()),
                    _.options.dots === !0 && _.slideCount > _.options.slidesToShow && _.$dots.show(),
                    _.options.autoplay === !0 && _.autoPlay();
            }),
            (Slick.prototype.keyHandler = function (event) {
                var _ = this;
                37 === event.keyCode ? _.changeSlide({ data: { message: "previous" } }) : 39 === event.keyCode && _.changeSlide({ data: { message: "next" } });
            }),
            (Slick.prototype.lazyLoad = function () {
                function loadImages(imagesScope) {
                    $("img[data-lazy]", imagesScope).each(function () {
                        var image = $(this),
                            imageSource = $(this).attr("data-lazy") + "?" + new Date().getTime();
                        image
                            .load(function () {
                                image.animate({ opacity: 1 }, 200);
                            })
                            .css({ opacity: 0 })
                            .attr("src", imageSource)
                            .removeAttr("data-lazy")
                            .removeClass("slick-loading");
                    });
                }
                var loadRange,
                    cloneRange,
                    rangeStart,
                    rangeEnd,
                    _ = this;
                _.options.centerMode === !0
                    ? _.options.infinite === !0
                        ? ((rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1)), (rangeEnd = rangeStart + _.options.slidesToShow + 2))
                        : ((rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1))), (rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide))
                    : ((rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide),
                        (rangeEnd = rangeStart + _.options.slidesToShow),
                        _.options.fade === !0 && (rangeStart > 0 && rangeStart--, rangeEnd <= _.slideCount && rangeEnd++)),
                    (loadRange = _.$slider.find(".slick-slide").slice(rangeStart, rangeEnd)),
                    loadImages(loadRange),
                    1 == _.slideCount
                        ? ((cloneRange = _.$slider.find(".slick-slide")), loadImages(cloneRange))
                        : _.currentSlide >= _.slideCount - _.options.slidesToShow
                            ? ((cloneRange = _.$slider.find(".slick-cloned").slice(0, _.options.slidesToShow)), loadImages(cloneRange))
                            : 0 === _.currentSlide && ((cloneRange = _.$slider.find(".slick-cloned").slice(-1 * _.options.slidesToShow)), loadImages(cloneRange));
            }),
            (Slick.prototype.loadSlider = function () {
                var _ = this;
                _.setPosition(), _.$slideTrack.css({ opacity: 1 }), _.$slider.removeClass("slick-loading"), _.initUI(), "progressive" === _.options.lazyLoad && _.progressiveLazyLoad();
            }),
            (Slick.prototype.postSlide = function (index) {
                var _ = this;
                null !== _.options.onAfterChange && _.options.onAfterChange.call(this, _, index), (_.animating = !1), _.setPosition(), (_.swipeLeft = null), _.options.autoplay === !0 && _.paused === !1 && _.autoPlay();
            }),
            (Slick.prototype.progressiveLazyLoad = function () {
                var imgCount,
                    targetImage,
                    _ = this;
                (imgCount = $("img[data-lazy]").length),
                    imgCount > 0 &&
                    ((targetImage = $("img[data-lazy]", _.$slider).first()),
                        targetImage
                            .attr("src", targetImage.attr("data-lazy"))
                            .removeClass("slick-loading")
                            .load(function () {
                                targetImage.removeAttr("data-lazy"), _.progressiveLazyLoad();
                            }));
            }),
            (Slick.prototype.refresh = function () {
                var _ = this,
                    currentSlide = _.currentSlide;
                _.destroy(), $.extend(_, _.initials), (_.currentSlide = currentSlide), _.init();
            }),
            (Slick.prototype.reinit = function () {
                var _ = this;
                (_.$slides = _.$slideTrack.children(_.options.slide).addClass("slick-slide")),
                    (_.slideCount = _.$slides.length),
                    _.currentSlide >= _.slideCount && 0 !== _.currentSlide && (_.currentSlide = _.currentSlide - _.options.slidesToScroll),
                    _.setProps(),
                    _.setupInfinite(),
                    _.buildArrows(),
                    _.updateArrows(),
                    _.initArrowEvents(),
                    _.buildDots(),
                    _.updateDots(),
                    _.initDotEvents(),
                    _.options.focusOnSelect === !0 && $(_.options.slide, _.$slideTrack).on("click.slick", _.selectHandler),
                    _.setSlideClasses(0),
                    _.setPosition(),
                    null !== _.options.onReInit && _.options.onReInit.call(this, _);
            }),
            (Slick.prototype.removeSlide = function (index, removeBefore) {
                var _ = this;
                return (
                    "boolean" == typeof index ? ((removeBefore = index), (index = removeBefore === !0 ? 0 : _.slideCount - 1)) : (index = removeBefore === !0 ? --index : index),
                    _.slideCount < 1 || 0 > index || index > _.slideCount - 1
                        ? !1
                        : (_.unload(),
                            _.$slideTrack.children(this.options.slide).eq(index).remove(),
                            (_.$slides = _.$slideTrack.children(this.options.slide)),
                            _.$slideTrack.children(this.options.slide).detach(),
                            _.$slideTrack.append(_.$slides),
                            (_.$slidesCache = _.$slides),
                            void _.reinit())
                );
            }),
            (Slick.prototype.setCSS = function (position) {
                var x,
                    y,
                    _ = this,
                    positionProps = {};
                _.options.rtl === !0 && (position = -position),
                    (x = "left" == _.positionProp ? position + "px" : "0px"),
                    (y = "top" == _.positionProp ? position + "px" : "0px"),
                    (positionProps[_.positionProp] = position),
                    _.transformsEnabled === !1
                        ? _.$slideTrack.css(positionProps)
                        : ((positionProps = {}),
                            _.cssTransitions === !1
                                ? ((positionProps[_.animType] = "translate(" + x + ", " + y + ")"), _.$slideTrack.css(positionProps))
                                : ((positionProps[_.animType] = "translate3d(" + x + ", " + y + ", 0px)"), _.$slideTrack.css(positionProps)));
            }),
            (Slick.prototype.setDimensions = function () {
                var _ = this;
                _.options.vertical === !1
                    ? _.options.centerMode === !0 && _.$list.css({ padding: "0px " + _.options.centerPadding })
                    : (_.$list.height(_.$slides.first().outerHeight(!0) * _.options.slidesToShow), _.options.centerMode === !0 && _.$list.css({ padding: _.options.centerPadding + " 0px" })),
                    (_.listWidth = _.$list.width()),
                    (_.listHeight = _.$list.height()),
                    _.options.vertical === !1
                        ? ((_.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow)), _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children(".slick-slide").length)))
                        : ((_.slideWidth = Math.ceil(_.listWidth)), _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(!0) * _.$slideTrack.children(".slick-slide").length)));
                var offset = _.$slides.first().outerWidth(!0) - _.$slides.first().width();
                _.$slideTrack.children(".slick-slide").width(_.slideWidth - offset);
            }),
            (Slick.prototype.setFade = function () {
                var targetLeft,
                    _ = this;
                _.$slides.each(function (index, element) {
                    (targetLeft = _.slideWidth * index * -1), $(element).css({ position: "relative", left: targetLeft, top: 0, zIndex: 800, opacity: 0 });
                }),
                    _.$slides.eq(_.currentSlide).css({ zIndex: 900, opacity: 1 });
            }),
            (Slick.prototype.setPosition = function () {
                var _ = this;
                _.setDimensions(), _.options.fade === !1 ? _.setCSS(_.getLeft(_.currentSlide)) : _.setFade();
            }),
            (Slick.prototype.setProps = function () {
                var _ = this,
                    bodyStyle = document.body.style;
                (_.positionProp = _.options.vertical === !0 ? "top" : "left"),
                    "top" === _.positionProp ? _.$slider.addClass("slick-vertical") : _.$slider.removeClass("slick-vertical"),
                    (void 0 !== bodyStyle.WebkitTransition || void 0 !== bodyStyle.MozTransition || void 0 !== bodyStyle.msTransition) && _.options.useCSS === !0 && (_.cssTransitions = !0),
                    void 0 !== bodyStyle.OTransform &&
                    ((_.animType = "OTransform"), (_.transformType = "-o-transform"), (_.transitionType = "OTransition"), void 0 === bodyStyle.perspectiveProperty && void 0 === bodyStyle.webkitPerspective && (_.animType = !1)),
                    void 0 !== bodyStyle.MozTransform &&
                    ((_.animType = "MozTransform"), (_.transformType = "-moz-transform"), (_.transitionType = "MozTransition"), void 0 === bodyStyle.perspectiveProperty && void 0 === bodyStyle.MozPerspective && (_.animType = !1)),
                    void 0 !== bodyStyle.webkitTransform &&
                    ((_.animType = "webkitTransform"),
                        (_.transformType = "-webkit-transform"),
                        (_.transitionType = "webkitTransition"),
                        void 0 === bodyStyle.perspectiveProperty && void 0 === bodyStyle.webkitPerspective && (_.animType = !1)),
                    void 0 !== bodyStyle.msTransform && ((_.animType = "msTransform"), (_.transformType = "-ms-transform"), (_.transitionType = "msTransition"), void 0 === bodyStyle.msTransform && (_.animType = !1)),
                    void 0 !== bodyStyle.transform && _.animType !== !1 && ((_.animType = "transform"), (_.transformType = "transform"), (_.transitionType = "transition")),
                    (_.transformsEnabled = null !== _.animType && _.animType !== !1);
            }),
            (Slick.prototype.setSlideClasses = function (index) {
                var centerOffset,
                    allSlides,
                    indexOffset,
                    remainder,
                    _ = this;
                _.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),
                    (allSlides = _.$slider.find(".slick-slide")),
                    _.options.centerMode === !0
                        ? ((centerOffset = Math.floor(_.options.slidesToShow / 2)),
                            _.options.infinite === !0 &&
                            (index >= centerOffset && index <= _.slideCount - 1 - centerOffset
                                ? _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass("slick-active")
                                : ((indexOffset = _.options.slidesToShow + index), allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass("slick-active")),
                                0 === index ? allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass("slick-center") : index === _.slideCount - 1 && allSlides.eq(_.options.slidesToShow).addClass("slick-center")),
                            _.$slides.eq(index).addClass("slick-center"))
                        : index >= 0 && index <= _.slideCount - _.options.slidesToShow
                            ? _.$slides.slice(index, index + _.options.slidesToShow).addClass("slick-active")
                            : allSlides.length <= _.options.slidesToShow
                                ? allSlides.addClass("slick-active")
                                : ((remainder = _.slideCount % _.options.slidesToShow),
                                    (indexOffset = _.options.infinite === !0 ? _.options.slidesToShow + index : index),
                                    _.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow
                                        ? allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass("slick-active")
                                        : allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass("slick-active")),
                    "ondemand" === _.options.lazyLoad && _.lazyLoad();
            }),
            (Slick.prototype.setupInfinite = function () {
                var i,
                    slideIndex,
                    infiniteCount,
                    _ = this;
                if (((_.options.fade === !0 || _.options.vertical === !0) && (_.options.centerMode = !1), _.options.infinite === !0 && _.options.fade === !1 && ((slideIndex = null), _.slideCount > _.options.slidesToShow))) {
                    for (infiniteCount = _.options.centerMode === !0 ? _.options.slidesToShow + 1 : _.options.slidesToShow, i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1)
                        (slideIndex = i - 1), $(_.$slides[slideIndex]).clone(!0).attr("id", "").prependTo(_.$slideTrack).addClass("slick-cloned");
                    for (i = 0; infiniteCount > i; i += 1) (slideIndex = i), $(_.$slides[slideIndex]).clone(!0).attr("id", "").appendTo(_.$slideTrack).addClass("slick-cloned");
                    _.$slideTrack
                        .find(".slick-cloned")
                        .find("[id]")
                        .each(function () {
                            $(this).attr("id", "");
                        });
                }
            }),
            (Slick.prototype.selectHandler = function (event) {
                var _ = this,
                    asNavFor = null != _.options.asNavFor ? $(_.options.asNavFor).getSlick() : null,
                    index = parseInt($(event.target).parent().attr("index"));
                if ((index || (index = 0), !(_.slideCount <= _.options.slidesToShow) && (_.slideHandler(index), null != asNavFor))) {
                    if (asNavFor.slideCount <= asNavFor.options.slidesToShow) return;
                    asNavFor.slideHandler(index);
                }
            }),
            (Slick.prototype.slideHandler = function (index) {
                var targetSlide,
                    animSlide,
                    slideLeft,
                    unevenOffset,
                    targetLeft = null,
                    _ = this;
                return _.animating === !0 && _.options.waitForAnimate === !0
                    ? !1
                    : ((targetSlide = index),
                        (targetLeft = _.getLeft(targetSlide)),
                        (slideLeft = _.getLeft(_.currentSlide)),
                        (unevenOffset = _.slideCount % _.options.slidesToScroll !== 0 ? _.options.slidesToScroll : 0),
                        (_.currentLeft = null === _.swipeLeft ? slideLeft : _.swipeLeft),
                        _.options.infinite === !1 && _.options.centerMode === !1 && (0 > index || index > _.slideCount - _.options.slidesToShow + unevenOffset)
                            ? (_.options.fade === !1 &&
                                ((targetSlide = _.currentSlide),
                                    _.animateSlide(slideLeft, function () {
                                        _.postSlide(targetSlide);
                                    })),
                                !1)
                            : _.options.infinite === !1 && _.options.centerMode === !0 && (0 > index || index > _.slideCount - _.options.slidesToScroll)
                                ? (_.options.fade === !1 &&
                                    ((targetSlide = _.currentSlide),
                                        _.animateSlide(slideLeft, function () {
                                            _.postSlide(targetSlide);
                                        })),
                                    !1)
                                : (_.options.autoplay === !0 && clearInterval(_.autoPlayTimer),
                                    (animSlide =
                                        0 > targetSlide
                                            ? _.slideCount % _.options.slidesToScroll !== 0
                                                ? _.slideCount - (_.slideCount % _.options.slidesToScroll)
                                                : _.slideCount - _.options.slidesToScroll
                                            : targetSlide > _.slideCount - 1
                                                ? 0
                                                : targetSlide),
                                    (_.animating = !0),
                                    null !== _.options.onBeforeChange && index !== _.currentSlide && _.options.onBeforeChange.call(this, _, _.currentSlide, animSlide),
                                    (_.currentSlide = animSlide),
                                    _.setSlideClasses(_.currentSlide),
                                    _.updateDots(),
                                    _.updateArrows(),
                                    _.options.fade === !0
                                        ? (_.fadeSlide(animSlide, function () {
                                            _.postSlide(animSlide);
                                        }),
                                            !1)
                                        : void _.animateSlide(targetLeft, function () {
                                            _.postSlide(animSlide);
                                        })));
            }),
            (Slick.prototype.startLoad = function () {
                var _ = this;
                _.options.arrows === !0 && _.slideCount > _.options.slidesToShow && (_.$prevArrow.hide(), _.$nextArrow.hide()),
                    _.options.dots === !0 && _.slideCount > _.options.slidesToShow && _.$dots.hide(),
                    _.$slider.addClass("slick-loading");
            }),
            (Slick.prototype.swipeDirection = function () {
                var xDist,
                    yDist,
                    r,
                    swipeAngle,
                    _ = this;
                return (
                    (xDist = _.touchObject.startX - _.touchObject.curX),
                    (yDist = _.touchObject.startY - _.touchObject.curY),
                    (r = Math.atan2(yDist, xDist)),
                    (swipeAngle = Math.round((180 * r) / Math.PI)),
                    0 > swipeAngle && (swipeAngle = 360 - Math.abs(swipeAngle)),
                    45 >= swipeAngle && swipeAngle >= 0 ? "left" : 360 >= swipeAngle && swipeAngle >= 315 ? "left" : swipeAngle >= 135 && 225 >= swipeAngle ? "right" : "vertical"
                );
            }),
            (Slick.prototype.swipeEnd = function (event) {
                var _ = this,
                    asNavFor = null != _.options.asNavFor ? $(_.options.asNavFor).getSlick() : null;
                if (((_.dragging = !1), void 0 === _.touchObject.curX)) return !1;
                if (_.touchObject.swipeLength >= _.touchObject.minSwipe)
                    switch (
                    ($(event.target).on("click.slick", function (event) {
                        event.stopImmediatePropagation(), event.stopPropagation(), event.preventDefault(), $(event.target).off("click.slick");
                    }),
                        _.swipeDirection())
                    ) {
                        case "left":
                            _.slideHandler(_.currentSlide + _.options.slidesToScroll), null != asNavFor && asNavFor.slideHandler(asNavFor.currentSlide + asNavFor.options.slidesToScroll), (_.touchObject = {});
                            break;
                        case "right":
                            _.slideHandler(_.currentSlide - _.options.slidesToScroll), null != asNavFor && asNavFor.slideHandler(asNavFor.currentSlide - asNavFor.options.slidesToScroll), (_.touchObject = {});
                    }
                else _.touchObject.startX !== _.touchObject.curX && (_.slideHandler(_.currentSlide), null != asNavFor && asNavFor.slideHandler(asNavFor.currentSlide), (_.touchObject = {}));
            }),
            (Slick.prototype.swipeHandler = function (event) {
                var _ = this;
                if (!(_.options.swipe === !1 || ("ontouchend" in document && _.options.swipe === !1) || _.options.draggable === !1 || (_.options.draggable === !1 && !event.originalEvent.touches)))
                    switch (
                    ((_.touchObject.fingerCount = event.originalEvent && void 0 !== event.originalEvent.touches ? event.originalEvent.touches.length : 1),
                        (_.touchObject.minSwipe = _.listWidth / _.options.touchThreshold),
                        event.data.action)
                    ) {
                        case "start":
                            _.swipeStart(event);
                            break;
                        case "move":
                            _.swipeMove(event);
                            break;
                        case "end":
                            _.swipeEnd(event);
                    }
            }),
            (Slick.prototype.swipeMove = function (event) {
                var curLeft,
                    swipeDirection,
                    positionOffset,
                    touches,
                    _ = this;
                return (
                    (touches = void 0 !== event.originalEvent ? event.originalEvent.touches : null),
                    (curLeft = _.getLeft(_.currentSlide)),
                    !_.dragging || (touches && 1 !== touches.length)
                        ? !1
                        : ((_.touchObject.curX = void 0 !== touches ? touches[0].pageX : event.clientX),
                            (_.touchObject.curY = void 0 !== touches ? touches[0].pageY : event.clientY),
                            (_.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)))),
                            (swipeDirection = _.swipeDirection()),
                            "vertical" !== swipeDirection
                                ? (void 0 !== event.originalEvent && _.touchObject.swipeLength > 4 && event.preventDefault(),
                                    (positionOffset = _.touchObject.curX > _.touchObject.startX ? 1 : -1),
                                    (_.swipeLeft = _.options.vertical === !1 ? curLeft + _.touchObject.swipeLength * positionOffset : curLeft + _.touchObject.swipeLength * (_.$list.height() / _.listWidth) * positionOffset),
                                    _.options.fade === !0 || _.options.touchMove === !1 ? !1 : _.animating === !0 ? ((_.swipeLeft = null), !1) : void _.setCSS(_.swipeLeft))
                                : void 0)
                );
            }),
            (Slick.prototype.swipeStart = function (event) {
                var touches,
                    _ = this;
                return 1 !== _.touchObject.fingerCount || _.slideCount <= _.options.slidesToShow
                    ? ((_.touchObject = {}), !1)
                    : (void 0 !== event.originalEvent && void 0 !== event.originalEvent.touches && (touches = event.originalEvent.touches[0]),
                        (_.touchObject.startX = _.touchObject.curX = void 0 !== touches ? touches.pageX : event.clientX),
                        (_.touchObject.startY = _.touchObject.curY = void 0 !== touches ? touches.pageY : event.clientY),
                        void (_.dragging = !0));
            }),
            (Slick.prototype.unfilterSlides = function () {
                var _ = this;
                null !== _.$slidesCache && (_.unload(), _.$slideTrack.children(this.options.slide).detach(), _.$slidesCache.appendTo(_.$slideTrack), _.reinit());
            }),
            (Slick.prototype.unload = function () {
                var _ = this;
                $(".slick-cloned", _.$slider).remove(), _.$dots && _.$dots.remove(), _.$prevArrow && (_.$prevArrow.remove(), _.$nextArrow.remove()), _.$slides.removeClass("slick-slide slick-active slick-visible").css("width", "");
            }),
            (Slick.prototype.updateArrows = function () {
                var _ = this;
                _.options.arrows === !0 &&
                    _.options.infinite !== !0 &&
                    _.slideCount > _.options.slidesToShow &&
                    (_.$prevArrow.removeClass("slick-disabled"),
                        _.$nextArrow.removeClass("slick-disabled"),
                        0 === _.currentSlide
                            ? (_.$prevArrow.addClass("slick-disabled"), _.$nextArrow.removeClass("slick-disabled"))
                            : _.currentSlide >= _.slideCount - _.options.slidesToShow && (_.$nextArrow.addClass("slick-disabled"), _.$prevArrow.removeClass("slick-disabled")));
            }),
            (Slick.prototype.updateDots = function () {
                var _ = this;
                null !== _.$dots &&
                    (_.$dots.find("li").removeClass("slick-active"),
                        _.$dots
                            .find("li")
                            .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                            .addClass("slick-active"));
            }),
            ($.fn.slick = function (options) {
                var _ = this;
                return _.each(function (index, element) {
                    element.slick = new Slick(element, options);
                });
            }),
            ($.fn.slickAdd = function (slide, slideIndex, addBefore) {
                var _ = this;
                return _.each(function (index, element) {
                    element.slick.addSlide(slide, slideIndex, addBefore);
                });
            }),
            ($.fn.slickCurrentSlide = function () {
                var _ = this;
                return _.get(0).slick.getCurrent();
            }),
            ($.fn.slickFilter = function (filter) {
                var _ = this;
                return _.each(function (index, element) {
                    element.slick.filterSlides(filter);
                });
            }),
            ($.fn.slickGoTo = function (slide) {
                var _ = this;
                return _.each(function (index, element) {
                    element.slick.changeSlide({ data: { message: "index", index: slide } });
                });
            }),
            ($.fn.slickNext = function () {
                var _ = this;
                return _.each(function (index, element) {
                    element.slick.changeSlide({ data: { message: "next" } });
                });
            }),
            ($.fn.slickPause = function () {
                var _ = this;
                return _.each(function (index, element) {
                    element.slick.autoPlayClear(), (element.slick.paused = !0);
                });
            }),
            ($.fn.slickPlay = function () {
                var _ = this;
                return _.each(function (index, element) {
                    (element.slick.paused = !1), element.slick.autoPlay();
                });
            }),
            ($.fn.slickPrev = function () {
                var _ = this;
                return _.each(function (index, element) {
                    element.slick.changeSlide({ data: { message: "previous" } });
                });
            }),
            ($.fn.slickRemove = function (slideIndex, removeBefore) {
                var _ = this;
                return _.each(function (index, element) {
                    element.slick.removeSlide(slideIndex, removeBefore);
                });
            }),
            ($.fn.slickGetOption = function (option) {
                var _ = this;
                return _.get(0).slick.options[option];
            }),
            ($.fn.slickSetOption = function (option, value, refresh) {
                var _ = this;
                return _.each(function (index, element) {
                    (element.slick.options[option] = value), refresh === !0 && (element.slick.unload(), element.slick.reinit());
                });
            }),
            ($.fn.slickUnfilter = function () {
                var _ = this;
                return _.each(function (index, element) {
                    element.slick.unfilterSlides();
                });
            }),
            ($.fn.unslick = function () {
                var _ = this;
                return _.each(function (index, element) {
                    element.slick && element.slick.destroy();
                });
            }),
            ($.fn.getSlick = function () {
                var s = null,
                    _ = this;
                return (
                    _.each(function (index, element) {
                        s = element.slick;
                    }),
                    s
                );
            });
    }),
    (function () {
        for (
            var method,
            noop = function () { },
            methods = [
                "assert",
                "clear",
                "count",
                "debug",
                "dir",
                "dirxml",
                "error",
                "exception",
                "group",
                "groupCollapsed",
                "groupEnd",
                "info",
                "log",
                "markTimeline",
                "profile",
                "profileEnd",
                "table",
                "time",
                "timeEnd",
                "timeStamp",
                "trace",
                "warn",
            ],
            length = methods.length,
            console = (window.console = window.console || {});
            length--;

        )
            (method = methods[length]), console[method] || (console[method] = noop);
    })();
var deviceObj = {
    width: function () {
        return window.innerWidth > 0 ? window.innerWidth : screen.width;
    },
    type: function () {
        return (this.returnVal = this.width() < 768 ? "mobile" : this.width() > 767 && this.width() < 960 ? "tab" : "desktop"), this.returnVal;
    },
    msie: function () {
        var ua = window.navigator.userAgent,
            msie = ua.indexOf("MSIE ");
        return msie > 0 ? parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))) : !1;
    },
};
if ("en" === lang || "" === lang)
    var imageBaseRootPath = sbi.config.en.dirPath.mediaImages,
        imageStaticPath = sbi.config.en.dirPath.staticImages;
else
    var imageBaseRootPath = sbi.config.hi.dirPath.mediaImages,
        imageStaticPath = sbi.config.hi.dirPath.staticImages;
($.fn.exists = function () {
    return this.length;
}),
    ($.fn.renderStateDropDown = function () {
        return this.each(function (index, element) {
            {
                var i,
                    name,
                    noOfCities = statesDetail.length,
                    html = "";
                $(element).parents("li.dynState");
            }
            for (html += "<option value=''>Select a State</option>", i = 0; noOfCities > i; i++)
                void 0 != statesDetail[i].name || "" != statesDetail[i].name ? ((name = statesDetail[i].CODE_MASTER_HIGH_VAL.toString()), (id = statesDetail[i].CODE_MASTER_HIGH_VAL.toString())) : ((name = ""), (id = 0)),
                    (html += "<option data-id='" + id + "' value='" + name + "'>" + name + "</option>");
            $(element).html(html), $(element).fancySelect();
        });
    }),
    ($.fn.renderDropDown = function () {
        return this.each(function (index, element) {
            var i,
                name,
                selectedValue,
                noOfCities = citiesDetail.length,
                html = "",
                parentEle = $(element).parents("li.dynCity");
            for (
                selectedValue = parentEle.hasClass("resi")
                    ? void 0 == newCustomerResAddressCity || "" == newCustomerResAddressCity
                        ? $(element).attr("data-selected")
                        : newCustomerResAddressCity
                    : void 0 == newCustomerCompAddressCity || "" == newCustomerCompAddressCity
                        ? $(element).attr("data-selected")
                        : newCustomerCompAddressCity,
                html += "<option value=''>Select a City</option>",
                i = 0;
                noOfCities > i;
                i++
            )
                void 0 != citiesDetail[i].name || "" != citiesDetail[i].name ? ((name = citiesDetail[i].name.toString()), (id = citiesDetail[i].id.toString())) : ((name = ""), (id = 0)),
                    (html +=
                        void 0 != selectedValue && "" != selectedValue && $.trim(selectedValue) == $.trim(name)
                            ? "<option data-id='" + id + "' value='" + name + "' selected>" + name + "</option>"
                            : "<option data-id='" + id + "' value='" + name + "'>" + name + "</option>");
            $(element).html(html), $("html").hasClass("desktop") && $(element).fancySelect();
        });
    }),
    ($.fn.renderCode = function (index, type) {
        var maineIndex = index,
            type = type;
        return this.each(function () {
            var i,
                selectedArray,
                html = (citiesDetail.length, ""),
                selectedValue = $(this).data("selected");
            for ("pin" == type && ((selectedArray = citiesDetail[maineIndex].pin), (html += "<option value=''>Select a Pin</option>")), i = 0; i < selectedArray.length; i++)
                html +=
                    void 0 != selectedValue && "" != selectedValue && $.trim(selectedValue) == $.trim(selectedArray[i])
                        ? "<option value=" + selectedArray[i] + " selected>" + selectedArray[i] + "</option>"
                        : "<option value=" + selectedArray[i] + ">" + selectedArray[i] + "</option>";
            $(this).html(html), $("html").hasClass("desktop") && ($(this).fancySelect(), $(this).trigger("update.fs"));
        });
    }),
    ($.fn.changeState = function () {
        return this.each(function (index, element) {
            var state;
            (state = citiesDetail[index].state), $(element).val(state);
        });
    });
var cookie = {
    setCookie: function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + 24 * exdays * 60 * 60 * 1e3);
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
    },
    getCookie: function (cname) {
        for (var name = cname + "=", ca = document.cookie.split(";"), i = 0; i < ca.length; i++) {
            var c = $.trim(ca[i]);
            if (0 == c.indexOf(name)) return c.substring(name.length, c.length);
        }
        return "";
    },
},
    tabs = {
        tabsContainerClass: "tabs-container",
        contentContainerClass: "tab-content",
        tabsNavigation: "tab-nav",
        init: function () {
            var activeThisObj = $("." + tabs.tabsNavigation).find(">li.active>a"),
                tabId = activeThisObj.data("id");
            tabs.showData(activeThisObj, tabId),
                $("." + tabs.tabsNavigation)
                    .find(">li>a")
                    .on("click", function (e) {
                        e.preventDefault();
                        var $this = $(this);
                        $this.parent().addClass("active").siblings().removeClass("active");
                        var tabId = $this.data("id");
                        tabs.showData($this, tabId);
                    });
        },
        showData: function (thisObj, tabId) {
            if (
                ($(".tab-content .tab-inner-content").exists()
                    ? thisObj
                        .parents("." + tabs.tabsContainerClass)
                        .find("." + tabs.contentContainerClass)
                        .find("#" + tabId)
                        .addClass("open")
                        .siblings()
                        .removeClass("open")
                    : thisObj
                        .parents("." + tabs.tabsContainerClass)
                        .find("." + tabs.contentContainerClass)
                        .find("#" + tabId)
                        .fadeIn()
                        .siblings()
                        .fadeOut(),
                    thisObj.parents("." + tabs.tabsContainerClass).hasClass("card-listing"))
            ) {
                var dataId = thisObj.data("id");
                updateCount(
                    $("#" + dataId)
                        .find(">.grid-outer.cards-data")
                        .find(">.grid:visible:not(.no-data)"),
                    thisObj
                ),
                    applySliderOnCards();
            }
        },
    },
    updateCount = function (sectionObj, currentObj) {
        currentObj
            .parents(".tabs-container")
            .find(".total-cards")
            .text(currentObj[0].text + "(" + sectionObj.length + ")");
    };
!(function (b, c) {
    var a,
        $ = b.jQuery || b.Cowboy || (b.Cowboy = {});
    ($.throttle = a = function (e, f, j, i) {
        function g() {
            function l() {
                (d = +new Date()), j.apply(o, n);
            }
            function k() {
                h = c;
            }
            var o = this,
                m = +new Date() - d,
                n = arguments;
            i && !h && l(), h && clearTimeout(h), i === c && m > e ? l() : f !== !0 && (h = setTimeout(i ? k : l, i === c ? e - m : e));
        }
        var h,
            d = 0;
        return "boolean" != typeof f && ((i = j), (j = f), (f = c)), $.guid && (g.guid = j.guid = j.guid || $.guid++), g;
    }),
        ($.debounce = function (d, e, f) {
            return f === c ? a(d, e, !1) : a(d, f, e !== !1);
        });
})(this),
    (function ($, e, b) {
        function a(j) {
            return (j = j || location.href), "#" + j.replace(/^[^#]*#?(.*)$/, "$1");
        }
        var f,
            c = "hashchange",
            h = document,
            g = $.event.special,
            i = h.documentMode,
            d = "on" + c in e && (i === b || i > 7);
        ($.fn[c] = function (j) {
            return j ? this.bind(c, j) : this.trigger(c);
        }),
            ($.fn[c].delay = 50),
            (g[c] = $.extend(g[c], {
                setup: function () {
                    return d ? !1 : void $(f.start);
                },
                teardown: function () {
                    return d ? !1 : void $(f.stop);
                },
            })),
            (f = (function () {
                function n() {
                    var r = a(),
                        q = o(m);
                    r !== m ? (l((m = r), q), $(e).trigger(c)) : q !== m && (location.href = location.href.replace(/#.*/, "") + q), (p = setTimeout(n, $.fn[c].delay));
                }
                var p,
                    j = {},
                    m = a(),
                    k = function (q) {
                        return q;
                    },
                    l = k,
                    o = k;
                return (
                    (j.start = function () {
                        p || n();
                    }),
                    (j.stop = function () {
                        p && clearTimeout(p), (p = b);
                    }),
                    deviceObj.msie() &&
                    !d &&
                    (function () {
                        var q, r;
                        (j.start = function () {
                            q ||
                                ((r = $.fn[c].src),
                                    (r = r && r + a()),
                                    (q = $('<iframe tabindex="-1" title="empty"/>')
                                        .hide()
                                        .one("load", function () {
                                            r || l(a()), n();
                                        })
                                        .attr("src", r || "javascript:0")
                                        .insertAfter("body")[0].contentWindow),
                                    (h.onpropertychange = function () {
                                        try {
                                            "title" === event.propertyName && (q.document.title = h.title);
                                        } catch (s) { }
                                    }));
                        }),
                            (j.stop = k),
                            (o = function () {
                                return a(q.location.href);
                            }),
                            (l = function (v, s) {
                                var u = q.document,
                                    t = $.fn[c].domain;
                                v !== s && ((u.title = h.title), u.open(), t && u.write('<script>document.domain="' + t + '"</script>'), u.close(), (q.location.hash = v));
                            });
                    })(),
                    j
                );
            })());
    })(jQuery, this),
    function () {
        var a, b, c, d, e, f, g, h, i, j;
        (a = window.device),
            (window.device = {}),
            (c = window.document.documentElement),
            (j = window.navigator.userAgent.toLowerCase()),
            (device.ios = function () {
                return device.iphone() || device.ipod() || device.ipad();
            }),
            (device.iphone = function () {
                return d("iphone");
            }),
            (device.ipod = function () {
                return d("ipod");
            }),
            (device.ipad = function () {
                return d("ipad");
            }),
            (device.android = function () {
                return d("android");
            }),
            (device.androidPhone = function () {
                return device.android() && d("mobile");
            }),
            (device.androidTablet = function () {
                return device.android() && !d("mobile");
            }),
            (device.blackberry = function () {
                return d("blackberry") || d("bb10") || d("rim");
            }),
            (device.blackberryPhone = function () {
                return device.blackberry() && !d("tablet");
            }),
            (device.blackberryTablet = function () {
                return device.blackberry() && d("tablet");
            }),
            (device.windows = function () {
                return d("windows");
            }),
            (device.windowsPhone = function () {
                return device.windows() && d("phone");
            }),
            (device.windowsTablet = function () {
                return device.windows() && d("touch") && !device.windowsPhone();
            }),
            (device.fxos = function () {
                return (d("(mobile;") || d("(tablet;")) && d("; rv:");
            }),
            (device.fxosPhone = function () {
                return device.fxos() && d("mobile");
            }),
            (device.fxosTablet = function () {
                return device.fxos() && d("tablet");
            }),
            (device.meego = function () {
                return d("meego");
            }),
            (device.cordova = function () {
                return window.cordova && "file:" === location.protocol;
            }),
            (device.nodeWebkit = function () {
                return "object" == typeof window.process;
            }),
            (device.mobile = function () {
                return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();
            }),
            (device.tablet = function () {
                return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
            }),
            (device.desktop = function () {
                return !device.tablet() && !device.mobile();
            }),
            (device.portrait = function () {
                return window.innerHeight / window.innerWidth > 1;
            }),
            (device.landscape = function () {
                return window.innerHeight / window.innerWidth < 1;
            }),
            (device.noConflict = function () {
                return (window.device = a), this;
            }),
            (d = function (a) {
                return -1 !== j.indexOf(a);
            }),
            (f = function (a) {
                var b;
                return (b = new RegExp(a, "i")), c.className.match(b);
            }),
            (b = function (a) {
                return f(a) ? void 0 : (c.className += " " + a);
            }),
            (h = function (a) {
                return f(a) ? (c.className = c.className.replace(a, "")) : void 0;
            }),
            device.ios()
                ? device.ipad()
                    ? b("ios ipad tablet")
                    : device.iphone()
                        ? b("ios iphone mobile")
                        : device.ipod() && b("ios ipod mobile")
                : b(
                    device.android()
                        ? device.androidTablet()
                            ? "android tablet"
                            : "android mobile"
                        : device.blackberry()
                            ? device.blackberryTablet()
                                ? "blackberry tablet"
                                : "blackberry mobile"
                            : device.windows()
                                ? device.windowsTablet()
                                    ? "windows tablet"
                                    : device.windowsPhone()
                                        ? "windows mobile"
                                        : "desktop"
                                : device.fxos()
                                    ? device.fxosTablet()
                                        ? "fxos tablet"
                                        : "fxos mobile"
                                    : device.meego()
                                        ? "meego mobile"
                                        : device.nodeWebkit()
                                            ? "node-webkit"
                                            : "desktop"
                ),
            device.cordova() && b("cordova"),
            (e = function () {
                return device.landscape() ? (h("portrait"), b("landscape")) : (h("landscape"), b("portrait"));
            }),
            (i = "onorientationchange" in window),
            (g = i ? "orientationchange" : "resize"),
            window.addEventListener ? window.addEventListener(g, e, !1) : window.attachEvent ? window.attachEvent(g, e) : (window[g] = e),
            e();
    }.call(this),
    $(document).ready(function () {
        function checkStrength(password) {
            var strength = 0,
                atleastThreeAlphabetsRegExp = "(?:[a-zA-Z].*){3}";
            return (
                password.length > 11 && new RegExp(atleastThreeAlphabetsRegExp).test(password) && (strength += 1),
                password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && (strength += 1),
                password.match(/([0-9])/) && (strength += 1),
                password.match(/([!,%,&,@,#,$,^,*,?,_,~])/) && (strength += 1),
                1 == strength
                    ? ($("#PWresult div.strength span").removeClass(), $("#PWresult div.strength span:first-child").addClass("short"), "Too Short")
                    : 2 == strength
                        ? ($("#PWresult div.strength span").removeClass(), $("#PWresult div.strength span:first-child").addClass("medium"), $("#PWresult div.strength span:nth-child(2)").addClass("medium"), "Weak")
                        : 3 == strength
                            ? ($("#PWresult div.strength span").removeClass(),
                                $("#PWresult div.strength span:first-child").addClass("ok"),
                                $("#PWresult div.strength span:nth-child(2)").addClass("ok"),
                                $("#PWresult div.strength span:nth-child(3)").addClass("ok"),
                                "Good")
                            : 4 == strength
                                ? ($("#PWresult div.strength span").removeClass().addClass("strong"), "Strong")
                                : ($("#PWresult div.strength span").removeClass(), void $("#PWresult div.strength span:first-child").removeClass())
            );
        }
        $("#password").keyup(function () {
            $("#PWresult div.strength strong").html(checkStrength($("#password").val()));
        });
    }),
    (function ($) {
        $.fn.dPassword = function (options) {
            var defaults = { interval: 200, duration: 2e3, replacement: "%u25CF", prefix: "password_", debug: !1 },
                opts = $.extend(defaults, options),
                checker = new Array(),
                timer = new Array();
            $(this).each(function () {
                if (opts.debug) var name = $(this).attr("name") || "";
                {
                    var id = $(this).attr("id") || "",
                        cssclass = $(this).attr("class") || "",
                        style = $(this).attr("style") || "",
                        size = $(this).attr("size") || "",
                        maxlength = $(this).attr("maxlength") || "",
                        disabled = $(this).attr("disabled") || "",
                        tabindex = $(this).attr("tabindex") || "",
                        accesskey = $(this).attr("accesskey") || "",
                        value = $(this).attr("value") || "",
                        placeholder = $(this).attr("placeholder") || "";
                    $(this).is(":visible");
                }
                checker.push(id), timer.push(id), $(this).hide(), opts.debug && $(this).after('<span id="debug_' + opts.prefix + name + '" style="color: #f00;"></span>');
                var newElem = $(
                    ' <input name="' +
                    (opts.prefix + name) +
                    '" id="' +
                    (opts.prefix + id) +
                    '" type="text" value="' +
                    value +
                    '" ' +
                    ("" != cssclass ? 'class="' + cssclass + '"' : "") +
                    ("" != placeholder ? 'placeholder="' + placeholder + '"' : "") +
                    ("" != style ? 'style="' + style + '"' : "") +
                    ("" != size ? 'size="' + size + '"' : "") +
                    (-1 != maxlength ? 'maxlength="' + maxlength + '"' : "") +
                    ("" != disabled ? 'disabled="' + disabled + '"' : "") +
                    ("" != tabindex ? 'tabindex="' + tabindex + '"' : "") +
                    (void 0 != accesskey ? 'accesskey="' + accesskey + '"' : "") +
                    'autocomplete="off" />'
                );
                $(this).after(newElem.copyEventsFrom($(this))),
                    "" != id && $("label[for=" + id + "]").attr("for", opts.prefix + id),
                    $(this).attr("tabindex", ""),
                    $(this).attr("accesskey", ""),
                    $("#" + opts.prefix + id).bind("focus", function () {
                        opts.debug && clearTimeout(checker[getId($(this).attr("id"))]), (checker[getId($(this).attr("id"))] = setTimeout("check('" + getId($(this).attr("id")) + "', '')", opts.interval));
                    }),
                    $("#" + opts.prefix + id).bind("blur", function () {
                        opts.debug && clearTimeout(checker[getId($(this).attr("id"))]);
                    }),
                    setTimeout("check('" + id + "', '', true);", opts.interval);
            }),
                (getId = function (id) {
                    var pattern = opts.prefix + "(.*)",
                        regex = new RegExp(pattern);
                    return regex.exec(id), (id = RegExp.$1);
                }),
                (setPassword = function (id, str) {
                    if (opts.debug) var tmp = "";
                    for (i = 0; i < str.length; i++)
                        tmp +=
                            str.charAt(i) == unescape(opts.replacement)
                                ? $("#" + id)
                                    .val()
                                    .charAt(i)
                                : str.charAt(i);
                    $("#" + id).val(tmp);
                }),
                (check = function (id, oldValue, initialCall) {
                    if (opts.debug) var bullets = $("#" + opts.prefix + id).val();
                    if (oldValue != bullets) {
                        if ((setPassword(id, bullets), bullets.length > 1)) {
                            var tmp = "";
                            for (i = 0; i < bullets.length - 1; i++) tmp += unescape(opts.replacement);
                            (tmp += bullets.charAt(bullets.length - 1)), $("#" + opts.prefix + id).val(tmp);
                        }
                        clearTimeout(timer[id]), (timer[id] = setTimeout("convertLastChar('" + id + "')", opts.duration));
                    }
                    opts.debug && $("#debug_" + opts.prefix + id).text($("#" + id).val()), initialCall || (checker[id] = setTimeout("check('" + id + "', '" + $("#" + opts.prefix + id).val() + "', false)", opts.interval));
                }),
                (convertLastChar = function (id) {
                    if ("" != $("#" + opts.prefix + id).val()) {
                        var tmp = "";
                        for (i = 0; i < $("#" + opts.prefix + id).val().length; i++) tmp += unescape(opts.replacement);
                        $("#" + opts.prefix + id).val(tmp);
                    }
                });
        };
    })(jQuery),
    (function ($) {
        $.fn.supportKeyboard = function (options) {
            var defaults = { hoverClass: "hovered" },
                opts = $.extend(defaults, options);
            $(this).each(function () {
                function updateHover(charCode) {
                    var list = thisDdl.find(listSelector),
                        item = thisDdl.find(itemSelector);
                    (prev = $(item).prevAll(listSelector).eq(0).length > 0 ? $(item).prevAll(listSelector).eq(0) : list.last()),
                        (next = $(item).nextAll(listSelector).eq(0).length > 0 ? $(item).nextAll(listSelector).eq(0) : list.first()),
                        0 != item.length && list.removeClass(opts.hoverClass),
                        38 == charCode ? prev.addClass(opts.hoverClass) : 40 == charCode && next.addClass(opts.hoverClass);
                }
                var thisDdl = $(this);
                if (thisDdl.hasClass("fancy-dd")) {
                    var listSelector = ".dd-options .option:not(.offerHide)",
                        itemSelector = ".dd-options .option." + opts.hoverClass;
                    thisDdl.find(".selected").on({
                        keydown: function (e) {
                            var charCode = e.which ? e.which : e.keyCode,
                                option = thisDdl.find(listSelector);
                            if (13 == charCode) {
                                if (thisDdl.find(".dd-options").hasClass("open") && option.hasClass(opts.hoverClass)) {
                                    thisDdl.find(".dd-options").removeClass("open");
                                    var item = thisDdl.find(itemSelector);
                                    return item.trigger("click"), thisDdl.find(".dd-options").removeClass("open"), option.removeClass(opts.hoverClass), !1;
                                }
                                return thisDdl.find(".dd-options").toggleClass("open"), option.removeClass(opts.hoverClass), !1;
                            }
                            return 38 == charCode || 40 == charCode ? (updateHover(charCode), !1) : 27 == charCode ? (thisDdl.find(".dd-options").removeClass("open"), option.removeClass(opts.hoverClass), !1) : void 0;
                        },
                    });
                }
            });
        };
    })(jQuery),
    function () {
        var $;
        ($ = window.jQuery || window.Zepto || window.$),
            ($.fn.fancySelect = function (opts) {
                var isiOS,
                    settings,
                    clicked = !1;
                return (
                    null == opts && (opts = {}),
                    (settings = $.extend(
                        {
                            forceiOS: !1,
                            includeBlank: !1,
                            optionTemplate: function (optionEl) {
                                return optionEl.text();
                            },
                            triggerTemplate: function (optionEl) {
                                return optionEl.text();
                            },
                        },
                        opts
                    )),
                    (isiOS = ""),
                    this.each(function () {
                        var copyOptionsToList, disabled, options, sel, trigger, updateTriggerText, wrapper;
                        return (
                            (sel = $(this)),
                            sel.hasClass("fancified") || "SELECT" !== sel[0].tagName
                                ? void 0
                                : (sel.addClass("fancified"),
                                    sel.css({ width: 1, height: 1, display: "block", position: "absolute", top: 0, left: 0, opacity: 0 }),
                                    sel.wrap('<div class="fancy-select">'),
                                    (wrapper = sel.parent()),
                                    sel.data("class") && wrapper.addClass(sel.data("class")),
                                    wrapper.append('<div class="trigger">'),
                                    (!isiOS || settings.forceiOS) && wrapper.append('<ul class="options">'),
                                    (trigger = wrapper.find(".trigger")),
                                    (options = wrapper.find(".options")),
                                    (disabled = sel.prop("disabled")),
                                    disabled && wrapper.addClass("disabled"),
                                    (updateTriggerText = function () {
                                        var triggerHtml;
                                        return (triggerHtml = settings.triggerTemplate(sel.find(":selected"))), trigger.html(triggerHtml);
                                    }),
                                    sel.on("blur.fs", function () {
                                        return trigger.hasClass("open")
                                            ? setTimeout(function () {
                                                return trigger.trigger("close.fs");
                                            }, 120)
                                            : void 0;
                                    }),
                                    trigger.on("close.fs", function () {
                                        var parent = sel.parent();
                                        return !parent.is(":hover") || (parent.is(":hover") && clicked) ? ((clicked = !1), trigger.removeClass("open"), options.removeClass("open")) : void 0;
                                    }),
                                    sel.parent().on("mouseout", function () {
                                        sel.trigger("focus-fs");
                                    }),
                                    trigger.on("click.fs", function () {
                                        var offParent, parent;
                                        if (!disabled)
                                            if ((trigger.toggleClass("open"), isiOS && !settings.forceiOS)) {
                                                if (trigger.hasClass("open")) return sel.focus();
                                            } else {
                                                if (trigger.hasClass("open")) {
                                                    var newSelectedOptionsOpen;
                                                    (newSelectedOptionsOpen = options.find("li[data-raw-value].hover")),
                                                        newSelectedOptionsOpen.hasClass("hover") && newSelectedOptionsOpen.addClass("selected").removeClass("hover"),
                                                        (parent = trigger.parent()),
                                                        (offParent = parent.offsetParent()),
                                                        parent.offset().top + parent.outerHeight() + options.outerHeight() + 20 > $(window).height() + $(window).scrollTop()
                                                            ? options.addClass("overflowing")
                                                            : options.removeClass("overflowing");
                                                }
                                                if ((options.toggleClass("open"), !isiOS)) return sel.focus();
                                            }
                                    }),
                                    sel.on("enable", function () {
                                        return sel.prop("disabled", !1), wrapper.removeClass("disabled"), (disabled = !1), copyOptionsToList();
                                    }),
                                    sel.on("disable", function () {
                                        return sel.prop("disabled", !0), wrapper.addClass("disabled"), (disabled = !0);
                                    }),
                                    sel.on("change.fs, keyup", function (e, data) {
                                        var keyCode = e.which;
                                        if ("keyup" != e.type || (40 != keyCode && 38 != keyCode)) {
                                            if ((e.preventDefault(), "undefined" == typeof data)) {
                                                var selectedDataId, newSelected;
                                                (selectedDataId = sel.find(":selected").attr("value")),
                                                    options.find("li.hover").length > 0 && options.removeClass("hover"),
                                                    (newSelected = options.find('li[data-raw-value="' + selectedDataId + '"]')),
                                                    newSelected.length > 0 && (newSelected.addClass("hover"), options.scrollTop(0), options.scrollTop(newSelected.position().top - 12)),
                                                    $("ul.options").hasClass("open") ||
                                                    ((newSelectedOptions = options.find("li[data-raw-value].selected")), newSelectedOptions.removeClass("selected"), newSelected.addClass("selected").removeClass("hover"));
                                            }
                                            return updateTriggerText();
                                        }
                                    }),
                                    sel.on("keydown", function (e) {
                                        var hovered, newHovered, w;
                                        if (((w = e.which), (hovered = options.find(".hover")), hovered.removeClass("hover"), options.hasClass("open"))) {
                                            if (
                                                (38 === w
                                                    ? (e.preventDefault(), hovered.length && hovered.index() > 0 ? hovered.prev().addClass("hover") : options.find("li:last-child").addClass("hover"))
                                                    : 40 === w
                                                        ? (e.preventDefault(), hovered.length && hovered.index() < options.find("li").length - 1 ? hovered.next().addClass("hover") : options.find("li:first-child").addClass("hover"))
                                                        : 27 === w
                                                            ? (e.preventDefault(), trigger.trigger("click.fs"))
                                                            : 13 === w || 32 === w
                                                                ? (e.preventDefault(), hovered.trigger("click.fs"))
                                                                : 9 === w && trigger.hasClass("open") && trigger.trigger("close.fs"),
                                                    (newHovered = options.find(".hover")),
                                                    newHovered.length)
                                            )
                                                return options.scrollTop(0), options.scrollTop(newHovered.position().top - 12);
                                        } else if (13 === w || 32 === w || 38 === w || 40 === w) return e.preventDefault(), trigger.trigger("click.fs");
                                    }),
                                    options.on("click.fs", "li", function (e) {
                                        return (
                                            options.find(".selected").removeClass("selected"),
                                            $(e.currentTarget).addClass("selected"),
                                            (clicked = !0),
                                            sel.val($(this).data("raw-value")).trigger("change", "enterEvent").trigger("blur").trigger("focus.fs")
                                        );
                                    }),
                                    options.on("mouseenter.fs", "li", function () {
                                        var hovered, nowHovered;
                                        return (nowHovered = $(this)), (hovered = options.find(".hover")), hovered.removeClass("hover"), nowHovered.addClass("hover");
                                    }),
                                    options.on("mouseleave.fs", "li", function () {
                                        return options.find(".hover").removeClass("hover");
                                    }),
                                    (copyOptionsToList = function () {
                                        var selOpts;
                                        return (
                                            updateTriggerText(),
                                            !isiOS || settings.forceiOS
                                                ? ((selOpts = sel.find("option")),
                                                    sel.find("option").each(function (i, opt) {
                                                        var optHtml;
                                                        return (
                                                            (opt = $(opt)),
                                                            opt.prop("disabled") || (!opt.val() && !settings.includeBlank)
                                                                ? void 0
                                                                : ((optHtml = settings.optionTemplate(opt)),
                                                                    options.append(
                                                                        opt.prop("selected")
                                                                            ? "<li data-id='" + opt.attr("data-id") + "' data-raw-value=\"" + opt.val() + '" class="selected">' + optHtml + "</li>"
                                                                            : "<li data-id='" + opt.attr("data-id") + "' data-raw-value=\"" + opt.val() + '">' + optHtml + "</li>"
                                                                    ))
                                                        );
                                                    }))
                                                : void 0
                                        );
                                    }),
                                    sel.on("update.fs", function () {
                                        return wrapper.find(".options").empty(), copyOptionsToList();
                                    }),
                                    copyOptionsToList())
                        );
                    })
                );
            });
    }.call(this),
    $(document).ready(function () {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera,
            isAndroid = /android/i.test(userAgent);
        isiOS
            ? ($(".reissue-replace-list #reissuereason").fancySelect({ forceiOS: !0 }),
                $(
                    "#addon-card,#user-card,#selectBy, #selectByValue, #selectByOffer, #selectByValueOffer,#tenure,#statementCycleDate,#txn-history-card,#merchantCategory,#modeofpayment,#spend-card,#filterPeriod,#cardNumberIndex, #residenceCity, #residenceZipCode, #companyCity, #companyZipCode, #otp-ivr-card"
                ).fancySelect({ forceiOS: !0 }))
            : isAndroid &&
            $(
                "#addon-card,#user-card,#selectBy, #selectByValue, #selectByOffer, #selectByValueOffer,#tenure,#statementCycleDate,#txn-history-card,#merchantCategory,#modeofpayment,#spend-card,#filterPeriod,#cardNumberIndex, #residenceCity, #residenceZipCode, #companyCity, #companyZipCode, #otp-ivr-card"
            ).fancySelect();
    });
