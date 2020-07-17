$(function() {

    var menuOffset;
    var footer = $('.footer');
    var footerHeight;
    var bodyHeight;
    var windowHeight;
    var windowScrollTop;
    var num = 0;

	$(window).on('load resize', function () {
        menuOffset = $('.header-bottom-in').offset().left;
        $('.header-menu ul ul').css('padding-left', menuOffset).css('padding-right', menuOffset);
        if (window.matchMedia('(max-width: 767px)').matches) {
            if (num === 0) {
                $('.services-list.row').addClass('owl-carousel slider-3 slider-nav with-row').removeClass('row').owlCarousel({
                    nav: true,
                    loop: true,
                    autoplay: true,
                    responsive:{
                        0:{
                            margin: 16,
                            items: 1
                        },
                        768:{
                            margin: 20,
                            items: 2
                        }
                    }
                });
                $('.images-list').addClass('owl-carousel slider-nav with-row').removeClass('row').owlCarousel({
                    nav: true,
                    dots: false,
                    loop: true,
                    autoplay: true,
                    margin: 20,
                    items: 1
                });
                num = 1;
            }
        } else {
            if (num === 1) {
                $('.services-list.with-row').removeClass('owl-carousel slider-3 slider-nav with-row').addClass('row').owlCarousel('destroy');
                $('.images-list').removeClass('owl-carousel slider-nav with-row').addClass('row').owlCarousel('destroy');
                num = 0;
            }
        }
    }).on('load scroll', function () {
       if($(this).scrollTop() > 0){
           $('.header, .header-mob').addClass('fixed');
       }else{
           $('.header, .header-mob').removeClass('fixed');
       }
    }).on('load scroll resize', function () {
        windowHeight = $(this).outerHeight();
        windowScrollTop = $(this).scrollTop();
        bodyHeight = $('body').outerHeight();
        footerHeight = footer.outerHeight();

        if(bodyHeight - windowScrollTop - windowHeight - footerHeight < 0){
            $('.call').addClass('stuck');
        }else{
            $('.call').removeClass('stuck');
        }

        $('.call.stuck').css('bottom', footerHeight + 60);
    });

	$('.slider-3').owlCarousel({
        nav: true,
        loop: true,
        autoplay: true,
        responsive:{
            0:{
                margin: 16,
                items: 1
            },
            768:{
                margin: 20,
                items: 2
            },
            1280:{
                margin: 20,
                items: 3
            }
        }
    });

	$('.slider-4').owlCarousel({
        nav: true,
        loop: true,
        margin: 20,
        autoplay: true,
        responsive:{
            0:{
                items: 1
            },
            768:{
                margin: 20,
                items: 3
            },
            1280:{
                margin: 20,
                items: 4
            }
        }
    });

	$('.images-list').each(function () {
        if($(this).children().length > 3){
            $(this).children().removeClass();
            $(this).removeClass('images-list row').addClass('slider-images slider-nav owl-carousel');
        }
    });

	$('.slider-images').owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 20,
        // autoplay: true,
        responsive:{
            0:{
                items: 1
            },
            768:{
                margin: 20,
                items: 2
            },
            1280:{
                margin: 20,
                items: 3
            }
        }
    });

	$('.accordion-item-title').on('click', function () {
       $(this).closest('.accordion-item').toggleClass('active');
       $(this).siblings('.accordion-item-cont').slideToggle('fast');
       if(!$(this).closest('.accordion-list').hasClass('accordion-list-open')){
           $(this).closest('.accordion-item').siblings().removeClass('active').find('.accordion-item-cont').slideUp('fast');
       }
    });

	$('.accordion-list-open').each(function () {
       $(this).find('.accordion-item').addClass('active');
       $(this).find('.accordion-item-cont').slideDown('fast');
    });

	$('select').customSelect();

	$('.dependence-in').mCustomScrollbar({
        autoDraggerLength: true,
        scrollInertia: 200,
        mouseWheel:{
            preventDefault: false
        }
    });

	$('.content img, .slider-images img').addClass('modal-open c-pointer').attr('data-target', 'modal-img');

	$('.modal-open').on('click', function (e) {
       var modalTarget = $(this).attr('data-target');
       $('[data-id='+modalTarget+']').addClass('open');
       $('body').addClass('with-blur');
       e.preventDefault();
    });

    $('img.modal-open').on('click', function () {
       $(this).clone().removeClass().removeAttr('data-target').appendTo('.modal-img');
    });

	$('.modal-close, .modal-back').on('click touchstart', function () {
       $(this).closest('.modal').removeClass('open');
        $('body').removeClass('with-blur');
        $('.modal-img > img').remove();
    });

	$('.form-qty-minus').on('click', function () {
       var qtyVal = parseInt($(this).siblings('input').val());
       if(qtyVal > 1){
           $(this).siblings('input').val(qtyVal-1);
       }
    });

	$('.form-qty-plus').on('click', function () {
       var qtyVal = parseInt($(this).siblings('input').val());
        $(this).siblings('input').val(qtyVal+1)
    });

	$('.header-toggle').on('click', function () {
       $('.header').addClass('visible');
    });

	$('.header-close').on('click', function () {
       $('.header').removeClass('visible');
    });

	$('.vacancies-tabs-nav-item').on('click', function () {
	    $(this).addClass('active').siblings().removeClass('active');
       var tabIndex = $(this).index() + 1;
        $('.vacancies-tabs-cont-item:nth-child('+tabIndex+')').addClass('active').siblings().removeClass('active');
    });

	if($('#typed').length){
        var typed = new Typed('#typed', {
            stringsElement: '#typed-strings',
            typeSpeed: 50,
            backSpeed: 20,
            loop: true,
            loopCount: Infinity
        });
    }

});
