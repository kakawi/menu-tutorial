$(function() {
    var sidebarController = {
        currentSidebar: 0,
        leftSidebar: $('.left-sidebar'),
        rightSidebar: $('.right-sidebar'),
        openSidebar: function(sidebar) {
            $(sidebar).addClass('active');
            $('> ul > li', sidebar).addClass('is-expanded');
        },
        closeSidebar: function(sidebar) {
            var allLi = $('> ul > li', sidebar);
            allLi.removeClass('is-expanded');

            // We can't remove class before ended animation
            // We don't know the time when it will end, so we compute it
            var lastLi = allLi.first();
            var delay = lastLi.css('transition-delay');
            var duration = lastLi.css('transition-duration');

            var timer = (parseFloat(delay) + parseFloat(duration)) * 1000;
            setTimeout(function() {
                $(sidebar).removeClass('active');
            }, timer);
        },
        setMobileClickFunctions: function() {
            var self = this;
            $("[data-toggle]").click(function() {
                if(!self.currentSidebar) {
                    self.openSidebar(self.leftSidebar);
                    self.currentSidebar = 2;
                } else {
                    self.closeSidebar(self.leftSidebar);
                    self.currentSidebar = 0;
                }
                //var toggle_el = $(this).data("toggle");
                //$(toggle_el).toggleClass("open-sidebar");
                return false;
            });

            this.linkParent.click(function (e) {
                e.preventDefault();
                $(this).siblings('ul').slideToggle();
            });
        },
        deleteMobileClickFunctions: function() {
            $("[data-toggle]").off();
        },
        setFunctionsForMobile: function() {
            $('.left-swipe-area').swipe({
                swipeLeft: $.proxy(function(event, direction, distance, duration, fingerCount) {
                    if(!this.currentSidebar) {
                        this.openSidebar(this.rightSidebar);
                        this.currentSidebar = 2;
                    } else {
                        this.closeSidebar(this.leftSidebar);
                        this.currentSidebar = 0;
                    }
                }, this),
                swipeRight: $.proxy(function(event, direction, distance, duration, fingerCount) {
                    if(!this.currentSidebar) {
                        this.openSidebar(this.leftSidebar);
                        this.currentSidebar = 1;
                    } else {
                        this.closeSidebar(this.rightSidebar);
                        this.currentSidebar = 0;
                    }
                }, this),
                threshold: 0
            });

            this.setMobileClickFunctions();
        },
        setFunctionsForDesktop: function() {
            this.liHover.hover(
                /* Функция исполняется, когда мышь входит в область меню */
                function mouseOver() {
                    clearTimeout($.data(this, 'timer')); /* если мы успели вернуться мышкой на меню, до того как прошла задержка на закрытие, то таймер обнуляется и сворачивание меню не произойдет*/
                    /* если использовать stop(true, FALSE), то скачка на конец анимации не будет (false стоит по умолчанию) */
                    $(this).find('> ul').stop(true).slideDown(300); /* анимация разворачивания меню */
                },

                /* Функция исполняется, когда мышь покидает область меню */
                function mouseOut() {
                    var $this = $(this); /* запоминаем окружение, т.к. в Таймере мы до него не достучимся*/
                    $.data(this, 'timer', setTimeout( /* Устанавливаем таймер, чтобы закрытие меню не начиналось сразу после того как мышь покинет li */
                            function () {
                                $this.find('> ul').stop(true).slideUp(300); /* анимация сворачивания меню */
                            },
                            200) /* задержка закрытия меню */
                    );
                });
        },
        clear: function() {
            $(document).swipe('destroy');
            this.liHover.off();
            this.linkParent.off();
            this.deleteMobileClickFunctions();
            $(this.linkParent).find('i').remove();
            this.leftSidebar.removeClass('active');
            this.rightSidebar.removeClass('active');
            $('li.is-expanded').removeClass('is-expanded');
        },
        addClassParent: function () {
            $("li a", this.leftSidebar).each(function () {
                if ($(this).next().length > 0) {
                    $(this).addClass("parent");
                }
            });
            $("li a", this.rightSidebar).each(function () {
                if ($(this).next().length > 0) {
                    $(this).addClass("parent");
                }
            });
        },
        addFontAwesomeIcons: function(elements, classes) {
            $('<i>').prependTo(elements).addClass(classes);
        },
        setParameters: function() {
            this.linkParent = $('a.parent', this.leftSidebar).add('a.parent', this.rightSidebar);
            this.liHover = $(this.linkParent).parents('li');
        },
        init: function() {
            this.addClassParent(); // add class 'parent' for every <a> which has sibling <ul>

            this.setParameters(); // now we know all <a> and <li> which are parents (this is need for Desktop and Mobile Functions

            $(window).on('mobile', $.proxy(function() {
                this.clear();
                this.addFontAwesomeIcons(this.linkParent, 'fa fa-angle-down');
                this.setFunctionsForMobile();
            }, this));
            $(window).on('desktop', $.proxy(function() {
                this.clear();
                this.addFontAwesomeIcons(this.linkParent, 'fa fa-angle-right');
                this.setFunctionsForDesktop();
            }, this));
        }
    };

    sidebarController.init();
});