$(document).ready(function() {
    let element = $('#top');
    let menuBtn = $('#menu-btn');
    let main = $('main');
    let leftNav = $('.left-nav');
    let rightNav = $('.right-nav');

    function ready() {
        element.click(upMe)
        menuBtn.click(show)

        //setTimeout(steady, 5000)
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

    function show() {
        if(menuBtn.hasClass('close')) {
            menuBtn.removeClass('close');
            leftNav.removeClass('show');
            rightNav.removeClass('show')
        } else {
            menuBtn.addClass('close');
            leftNav.addClass('show');
            rightNav.addClass('show')
        }
    }

    $(function() {

    //caches a jQuery object containing the class .clos (for hiding navigation on scrollin the window)
    $(window).scroll(function() {
        if(menuBtn.hasClass('close')) {
            show();
        }
    });
});

});
