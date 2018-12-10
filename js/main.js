$(document).ready(function() {
    let element = $('#top');
    let menuBtn = $('#menu-btn');
    let main = $('main');
    let leftNav = $('.left-nav');
    let call = $('#call');
    let aIcon = $('#about-icon');
    let pIcon = $('#price-icon');
    let cIcon = $('#contact-icon');
    let prevWindowTop = 70;
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    if (window.location.hash && isChrome) {
        setTimeout(function () {
            var hash = window.location.hash;
            window.location.hash = "";
            window.location.hash = hash;
        }, 300);
    }


    function ready() {
        element.click(upMe)
    }

    ready();

    function upMe() {
        if(element.hasClass('upMe')) {
            element.removeClass('upMe');
            main.removeClass('main-height')
        } else {
            element.addClass('upMe');
            main.addClass('main-height')
        }
    };

    $(function() {

    //caches a jQuery object containing the class .clos (for hiding navigation on scrollin the window)
    $(window).scroll(function() {
        let windowTop = $(window).scrollTop();
        let windowWidth = $(window).width();
        let docHeight = $(document).height();
        let screen = $(window).innerHeight();
        let aboutDiv = screen * 0.75;
        let priceDiv = screen + aboutDiv;
        let contactDiv = docHeight - screen - screen * 0.25;

        // adding class .active to icons if top of window riches the category place

        if(windowTop < aboutDiv) {
            aIcon.removeClass('active');
            pIcon.removeClass('active');
            cIcon.removeClass('active')
        }else if(windowTop > aboutDiv && !aIcon.hasClass('active') && windowTop < priceDiv) {
            aIcon.addClass('active');
            pIcon.removeClass('active')
        } else if (windowTop > priceDiv && !pIcon.hasClass('active') && windowTop < contactDiv) {
            aIcon.removeClass('active');
            pIcon.addClass('active');
            cIcon.removeClass('active')
        } else if (windowTop > contactDiv && !cIcon.hasClass('active')) {
            pIcon.removeClass('active');
            cIcon.addClass('active')
        }

        // adding class show to left-menu, which will appear in mobile version on bottom if user scroll up

        if(windowTop > prevWindowTop && windowTop > 70 && windowWidth < 768) {
            leftNav.removeClass('show');
            call.removeClass('show');
            prevWindowTop = windowTop
        } else if (windowTop < prevWindowTop && windowTop > 70 && windowTop + screen < docHeight - 270){
            leftNav.addClass('show');
            call.addClass('show');
            prevWindowTop = windowTop
        }
    });
});

});
