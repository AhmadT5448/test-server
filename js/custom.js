// website Js start
/***** Animation JS *****/
new WOW().init();

$(function() {
    $('#menu').slicknav();
});

$(document).ready(function() {
    $(".fltBtn").click(function() {
        $(".floatChat").toggleClass("main");
    });
});

$('.brandSlider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.portslider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 300,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    $('.portslider').slick('setPosition');
})


$('.testimonialSlider .slider-for').slick({
    slidesToShow: 1,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.testimonialSlider .slider-nav').slick({
    slidesToShow: 6,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true
});

$('.clientSlider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// Show the first tab and hide the rest
$('.furtherNav #tabs-nav li:first-child a').addClass('active');
$('.furtherNav .tab-content').hide();
$('.furtherNav .tab-content:first').show();

$('.furtherNav #tabs-nav li').mouseenter(function() {
    $('.furtherNav #tabs-nav li').removeClass('active');
    $('.furtherNav .tab-content').hide();

    var activeTab = $(this).find('a').attr('data-target');
    $(activeTab).fadeIn();
    return false;
});
$('.furtherNav ul li').hover(
    function() {
        $("a.active").addClass('inactive').removeClass('active');
    },
    function() {
        $("a.inactive").addClass('active').removeClass('inactive');
    }
);

$(document).ready(function() {
    //toggle the component with class accordion_body
    $(".accordion_head").click(function() {
        if ($('.accordion_body').is(':visible')) {
            $(".accordion_body").slideUp(300);
            $(".plusminus").text('+');
        }
        if ($(this).next(".accordion_body").is(':visible')) {
            $(this).next(".accordion_body").slideUp(300);
            $(this).children(".plusminus").text('+');
        } else {
            $(this).next(".accordion_body").slideDown(300);
            $(this).children(".plusminus").text('-');
        }
    });
});
// website Js End

// landing Pgs Js start
$('.lp-Ecommerce .testSlider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
