function doTranslate(lcl) {
    $.i18n().locale = lcl;
    $('html').i18n();
}

function updateText() {
    var lang = (navigator.language && navigator.language.split('-')[0] === 'es')
        ? 'es'
        : 'en'

    $.i18n().load({
        en: 'js/i18n/en.json',
        es: 'js/i18n/es.json'
    }).done(function() {
        doTranslate(lang);

        // attach function only after first locale is loaded
        $(".js-switch-locale").click(function() {
            const nextLocale = $(this).data('locale');
            doTranslate(nextLocale);
        });
    })
}


$( document ).ready( function ( $ ) {
	'use strict';
	updateText();
} );

$(function () {

    // init feather icons
    feather.replace();

    // init tooltip & popovers
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1000);
        event.preventDefault();
    });

    //toggle scroll menu
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        // adjust scroll to top
        if (scroll >= 600) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
        return false;
    });

    // slick slider for mockups
    $('.slick-mockups').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });
    
    // slick slider for reviews
    $('.slick-reviews').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        arrows: false
    });

    // scroll top top
    $('.scroll-top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });

    /**Theme switcher - DEMO PURPOSE ONLY */
    $('.switcher-trigger').click(function () {
        $('.switcher-wrap').toggleClass('active');
    });
    $('.color-switcher ul li').click(function () {
        var color = $(this).attr('data-color');
        $('#theme-color').attr("href", "css/" + color + ".css");
        $('.color-switcher ul li').removeClass('active');
        $(this).addClass('active');
    });
});