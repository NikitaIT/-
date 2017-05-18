///
// owlCarousel
///
$(function () {
            //	$('.carousel-hookahs').on('initialized.owl.carousel', function(){
            //		setTimeout(function(){
            //			carouselService();
            //		}, 50)
            //	});

            $('.carousel-hookahs').owlCarousel({
                dots: false,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 1000,
                autoplayHoverPause: true,
                smartSpeed: 700,
                transitionStyle: "fadeUp", //Currently available: "fade", "backSlide", "goDown", "fadeUp"
                afterMove: function () {
                    animateSmoke();
                },
                navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            });

            function animateSmoke() {
                //       	$('.owl-item.active .item').css({
                //        	'backround-position-x': '0'
                //        });
                //        $('.owl-item.active .item').animate({
                //					'background-position-x': '-60px'
                //				}, 10000, 'linear');
            }

            animateSmoke();
            
            //Яндекс карты начало
            ymaps.ready(init);
            var myMap,
                myPlacemark;

            function init() {
                myMap = new ymaps.Map("map", {
                    center: [55.76, 37.64],
                    zoom: 7
                });

                myPlacemark = new ymaps.Placemark([55.76, 37.64], {
                    hintContent: 'Москва!',
                    balloonContent: 'Столица России'
                });

                myMap.geoObjects.add(myPlacemark);
            }
            //Яндекс карты конец
    
//	function carouselService(){
//		$('.carousel-hookahs-item').each(function(){
//			var ths  = $(this),
//					thsh = ths.find('.carousel-services-content').outerHeight();
//
//			ths.find('.carousel-services-image').css('min-height', thsh);
//		});
//	}carouselService();
//
//	$('.carousel-hookahs-composition .h3').each(function(){
//		var ths = $(this);
//		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
//	});
//
//	$('section .h2').each(function(){
//		var ths = $(this);
//		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
//	});
//
//	$('select').selectize({
//
//	})
//
//	$('.reviews').owlCarousel({
//		loop: true,
//		items: 1,
//		smartSpeed: 700,
//		nav: false,
//		autoHeight: true
//	})
//
//	$('.partners').owlCarousel({
//		loop: true,
//		smartSpeed: 700,
//		dots: false,
//		nav: true,
//		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
//		responsiveClass: true,
//		responsive: {
//			0: {
//				items: 1
//			},
//			768: {
//				items: 2
//			},
//			992: {
//				items: 3
//			},
//			1200: {
//				items: 4
//			}
//		}
//	});
//
//	$(window).scroll(function(){
//		if($(this).scrollTop() > $(this).height()){
//			$('.top').addClass('active');
//		}else{
//			$('.top').removeClass('active');
//		}
//	});
//
//	$('.top').click(function(){
//		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
//	})
//
//	$("form.callback").submit(function() { //Change
//		var th = $(this);
//		$.ajax({
//			type: "POST",
//			url: "mail.php", //Change
//			data: th.serialize()
//		}).done(function() {
//			$(th).find('.success').addClass('active').css('display','flex').hide().fadeIn();
//			setTimeout(function() {
//				// Done Functions
//				$(th).find('.success').removeClass('.active').fadeOut();
//				th.trigger("reset");
//			}, 3000);
//		});
//		return false;
//	});
//
//	//Resize Window
//	function onResize(){
//			$('.carousel-services-content').equalHeights();
//	}onResize();
//	window.onresize = function() {onResize();carouselService();};

});


$(window).on('load', function () {
    $('.preloader').delay(500).fadeOut('slow');
})