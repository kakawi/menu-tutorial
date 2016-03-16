$(function() {
    $('.icon-menu').click(function(event) {
        $('.sidebar').toggleClass('active');
    });

    $("[data-toggle]").click(function() {
        var toggle_el = $(this).data("toggle");
        $(toggle_el).toggleClass("open-sidebar");
    });

    var sidebarController = {
        currentSidebar: 0,
        leftSidebar: $('.left-sidebar'),
        rightSidebar: $('.right-sidebar'),
        openSidebar: function(sidebar) {
            $(sidebar).addClass('active');
        },
        closeSidebar: function(sidebar) {
            $(sidebar).removeClass('active')
        },
        setSmallFunctions: function() {
            $(document).swipe({
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
                }, this)
            });
        },
        off: function() {
            $(document).swipe('destroy');
        },
        init: function() {
            $(window).on('mobile', $.proxy(this.setSmallFunctions, this));
            $(window).on('desktop', $.proxy(this.off, this));
        }
    };

    sidebarController.init();
});