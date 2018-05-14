(function(window) {

    'use strict';

    $.exists = function(selector) {
        return ($(selector).length > 0);
    }



    // All Funtions
    PageTransition();
    ms_home_slider();
})(window);

/*--------------------
    Page Transition
---------------------*/
function PageTransition() {
    var preload = anime({
        targets: '.ms-preloader',
        opacity: [1, 0],
        duration: 1000,
        easing: 'easeInOutCubic',
        complete: function(preload) {
            $('.ms-preloader').css('visibility', 'hidden');
        }
    });
    $('.ms-main-container').addClass('loaded');
    var cont = anime({
        targets: '.loaded',
        opacity: [0, 1],
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 300,
        complete: function(preload) {
            $('.ug-thumb-image').css({
                'opacity': '1'
            });
            $('.ms-section__block img').css({
                'opacity': '1'
            });
            $('.ug-thumb-wrapper, .post-item').css({
                'pointer-events': 'auto'
            });
        }
    });
    $(document).on('click', '[data-type="page-transition"]', function(e) {
        var url = $(this).attr('href');
        if (url != '#' && url != '') {
            e.preventDefault();
            $('.ms-preloader').css('visibility', 'visible');
            var url = $(this).attr('href');
            var preload = anime({
                targets: '.ms-preloader',
                opacity: [0, 1],
                duration: 300,
                easing: 'easeInOutQuad',
                complete: function(preload) {
                    window.location.href = url;
                }
            });
        }
    });
}


/*------------------
    Home Slider
-------------------*/
    function ms_home_slider() {
        if ($.exists('.swiper-container')) {
            var swiper = new Swiper('.swiper-container', {
            loop: false,
            speed: 1000,
            grabCursor: false,
            mousewheel: false,
            keyboard: true,
            simulateTouch: false,
            parallax: true,
            effect: 'slide',
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
            });
            $('.expanded-timeline__counter span:first-child').text('1');
            $('.expanded-timeline__counter span:last-child').text(swiper.slides.length);
            swiper.on('slideChange', function () {
                $('.expanded-timeline__counter span:first-child').text(swiper.activeIndex + 1);
            });

            }
    }
