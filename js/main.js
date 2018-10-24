$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".header-fixed").addClass("shadow");
        } else {
            //remove the background property so it comes transparent again
            $(".header-fixed").removeClass("shadow");
        }
    });
     $('#Container').mixItUp();
      $('.shuffle li').click(function () {
          $(this).addClass('selected').siblings().removeClass('selected');
      });
    //    scroll
    $(".copyright a").click(function () {

        $('html, body').animate({

            scrollTop: 0

        }, 1000);
    });

    $(".owl-carousel").owlCarousel();
   
$('#lightSlider').lightSlider({
    item: 4,
    loop: false,
    slideMove: 2,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,
    responsive: [{
            breakpoint: 800,
            settings: {
                item: 3,
                slideMove: 1,
                slideMargin: 6,
            }
        },
        {
            breakpoint: 480,
            settings: {
                item: 2,
                slideMove: 1
            }
        }
    ]
});



    // Nav Mobile
    // $(".nav-mobile").click(function () {
    //     $(".menu").addClass("show");
    //     $(".show").css("display", "block");
    // });

    $(".nav-mobile").click(function () {
        $(".menu").css({
            marginLeft: "0px"
        });
    })
    $(".fa-close").click(function () {
        $(".menu").css({
            marginLeft: "-215px"
        });
    });
    

    $("#slider-ser").lightSlider({
        item: 5,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 4,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    item: 3,
                    slideMove: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });

    $("#slider-logo").lightSlider({
        item: 5,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 4,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    item: 3,
                    slideMove: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            }
        ]
    });

   

    $("#slider-parallax").lightSlider({
        item: 3,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 4,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            }
        ]
    });

    $("#services").lightSlider({
        item: 3,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });

    
    

    $('.fa-list').click(() => {
        $('#tab1').css({
            display: 'none'
        });
        $('#tab2').css({
            display: 'block'
        })
    });
    $('.fa-th').click(() => {
        $('#tab2').css({
            display: 'none'
        });
        $('#tab1').css({
            display: 'block'
        })
    });


    // gallery
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
    
   
});