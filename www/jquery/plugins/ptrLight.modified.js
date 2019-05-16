(function($, window, document) {
    var pluginName = "ptrLight",
        defaults = {
            paused: false,
            ignoreThreshold: 10,
            pullThreshold: 200,
            maxPullThreshold: 500,
            spinnerTimeout: 10000,
            scrollingDom: null,
            allowPtrWhenStartedWhileScrolled: false,
            refresh: function() {
                console.warn('Refresh detected. Please specify a refresh function and apply it to the "refresh" property in the ptrLight options object.');
            }
        };

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }
    Plugin.prototype = {
        init: function() {
            var self = this;
            var elem = $(self.element);
            self.elem = elem;
            self.elemNode = elem[0];

            elem.parent().find('#ptr-light-indicator').remove();
            elem.before('<div id="ptr-light-indicator"><div id="ptr-light-spinner"></div></div>');

            self.indicator = elem.parent().find('#ptr-light-indicator');
            self.indicatorNode = self.indicator[0];
            self.indicatorHeight = self.indicator.outerHeight();

            self.spinner = elem.parent().find('#ptr-light-spinner');
            self.spinnerNode = self.spinner[0];

            self.doneTimeout = null;
            self.inProgress = false;
            self.inProgressTouchstart = false;
            self.isSpinning = false;
            self.wrongAxis = false;

            self.requestedAnimationFrame = false;
            self.queuedAnimationFrameRequest = [];
            self.nextAnimationFrame = null;
            self.requestAnimationFrame = function(fn, queue, holdOverride) {
                if (!self.requestedAnimationFrame || holdOverride) {
                    self.requestedAnimationFrame = true;
                    window.requestAnimationFrame(function() {
                        fn();
                        if (!self.nextAnimationFrame && self.queuedAnimationFrameRequest.length) {
                            self.requestAnimationFrame(self.queuedAnimationFrameRequest.shift(), false, true);
                        } else {
                            if (self.nextAnimationFrame) {
                                self.requestAnimationFrame(self.nextAnimationFrame, false, true);
                                self.nextAnimationFrame = null;
                            } else {
                                self.requestedAnimationFrame = false;
                            }
                        }
                    });
                } else {
                    if (queue) {
                        self.queuedAnimationFrameRequest.push(fn);
                    } else {
                        self.nextAnimationFrame = fn;
                    }
                }
            };

            self.transformProp = self.elemNode.style.transform === undefined ? "-webkit-transform" : "transform";
            self.elemNode.style[self.transformProp] = "translateY(-" + self.indicatorHeight + "px)"

            //sanity check options
            if (self.options.throttleTimeout < 1) {
                self.options.throttleTimeout = 1;
            }

            elem.parent().css({
                '-webkit-overflow-scrolling': 'touch'
            });
            self.spinner.css('opacity', '0');

            self.getOffsetTop = function() {
                return (elem.parent().offset() ? elem.parent().offset().top : 0) - (self.options.scrollingDom || elem.parent()).scrollTop();
            }

            self.offsetTop = self.getOffsetTop();
            self.fingerOffset = 0;
            self.top = 0;

            self.spinnerRotation = 0;
            self.windowDimension = $(window).height();
            self.getTopTranslation = function(top) {
                return (1.0 - (1.0 / ((self.top * 0.55 / self.windowDimension) + 1.0))) * self.windowDimension;
            }

            elem.unbind('touchstart.' + pluginName);
            elem.on('touchstart.' + pluginName, function(ev) {
                self.inProgressTouchstart = (self.inProgress || (!self.options.allowPtrWhenStartedWhileScrolled && (self.options.scrollingDom || elem.parent()).scrollTop() > 0));
                if (self.options.paused || self.inProgress) {
                    return false;
                }
                self.offsetTop = self.getOffsetTop();
                self.fingerOffset = ev.originalEvent.touches[0].pageY - self.offsetTop;
                self.initialX = ev.originalEvent.touches[0].pageX;
                self.afterX = self.initialX;
            });

            elem.unbind('touchmove.' + pluginName);
            elem.on('touchmove.' + pluginName, function(ev) {
                if (self.inProgress || self.options.paused)
                    return false;

                // trigger refresh only if pulled from the top of the list (|| document.documentElement.scrollTop > 0 added bei s.bormann)
                if (self.wrongAxis || self.inProgressTouchstart || (self.options.scrollingDom || elem.parent()).scrollTop() > 0 || elem.position().top < 0 || document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
                    self.requestAnimationFrame(function() {
                        self.spinner.css('opacity', '0');
                    });
                    return true;
                }

                self.top = (ev.originalEvent.touches[0].pageY - self.fingerOffset - self.options.ignoreThreshold);

                if (self.options.ignoreThreshold && !self.wrongAxis && self.top < 1 && (self.top + self.options.ignoreThreshold) > 1) {
                    self.afterX = ev.originalEvent.touches[0].pageX;
                    self.wrongAxis = Math.abs(self.initialX - self.afterX) > (self.options.ignoreThreshold * 0.8);
                }

                if (self.top > 1 && self.top <= self.options.maxPullThreshold) {
                    self.topTranslation = self.getTopTranslation(self.top);

                    self.spinnerRotation = 360 * (self.top / self.options.pullThreshold);
                    self.spinnerRotation = self.spinnerRotation > 359 ? 360 : self.spinnerRotation;
                    self.opacity = self.spinnerRotation > 300 ? (1.0 - (((360 - self.spinnerRotation) / 600) * 6)) : 0.4;

                    self.requestAnimationFrame(function() {
                        self.elemNode.style[self.transformProp] = "translateY(" + (self.topTranslation - self.indicatorHeight) + "px)";
                        self.indicatorNode.style.top = (self.topTranslation - self.indicatorHeight) + "px";

                        self.spinnerNode.style[self.transformProp] = 'rotate(' + self.spinnerRotation + 'deg)';
                        self.spinnerNode.style.opacity = self.opacity;
                    });

                    return false; //kill chrome's build in ptr
                } else if ((ev.originalEvent.touches[0].pageY - self.fingerOffset) > 1) {
                    return false; //kill chrome's build in ptr
                }
            });

            elem.unbind('touchend.' + pluginName);
            elem.on('touchend.' + pluginName, function(ev) {
                if (self.options.paused || self.inProgress)
                    return false;

                self.wrongAxis = false;

                if (self.top > 0) {
                    self.requestAnimationFrame(function() {
                        if (self.top > self.options.pullThreshold) {
                            self.inProgress = true;
                            self.options.refresh.call(this, self);
                            self.spinner.addClass('rotateLoop');
                            self.isSpinning = true;
                            self.elemNode.style[self.transformProp] = "translateY(0)";
                            self.elemNode.style.transition = "transform 300ms ease";
                            self.indicator.css({
                                'top': "0px",
                                'transition': 'top 300ms ease'
                            });
                            if (self.options.spinnerTimeout) {
                                if (self.doneTimeout) {
                                    clearTimeout(self.doneTimeout);
                                }
                                self.doneTimeout = setTimeout(function() {
                                    self.done();
                                }, self.options.spinnerTimeout);
                            }

                        } else {
                            self.spinnerRotation = 0;
                            self.indicator.css({
                                'top': "-" + self.indicatorHeight + "px",
                                'transition': 'top 300ms ease'
                            });
                            self.elemNode.style[self.transformProp] = "translateY(-" + self.indicatorHeight + "px)";
                            self.elemNode.style.transition = "transform 300ms ease";
                        }
                        self.top = 0;
                    }, true);
                    setTimeout(function() {
                        self.requestAnimationFrame(function() {
                            elem.css({
                                'transition': ''
                            });
                            self.indicator.css({
                                'transition': ''
                            });
                        }, true);
                    }, 300);
                } else {
                    self.requestAnimationFrame(function() {
                        elem.css({
                            'transition': ''
                        });
                        self.indicator.css({
                            'transition': ''
                        });
                    }, true);
                }
            });
        },
        done: function() {
            var self = this;
            var elem = self.elem;

            if (self.doneTimeout) {
                clearTimeout(self.doneTimeout);
                self.doneTimeout = null;
            }

            self.requestAnimationFrame(function() {
                self.indicator.css({
                    'top': "-" + self.indicatorHeight + "px",
                    'transition': 'top 300ms ease'
                });
                self.elemNode.style[self.transformProp] = "translateY(-" + self.indicatorHeight + "px)";
                self.elemNode.style.transition = "transform 300ms ease";
            }, true);

            setTimeout(function() {
                self.requestAnimationFrame(function() {
                    self.spinner.removeClass('rotateLoop');
                    self.isSpinning = false;
                    self.spinnerRotation = 0;
                    self.spinner.css('opacity', '0');
                    elem.css({
                        'transition': ''
                    });
                    self.indicator.css({
                        'transition': ''
                    });
                    self.inProgress = false;
                }, true);
            }, 300);
        }
    };
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);