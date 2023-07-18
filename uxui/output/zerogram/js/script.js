$(function(){
	var winW = $(window).width();
	var header = $('.header');
	var navigation = $('.header .nav');
	var menu = $('.header .menu');

	$(window).scroll(function(){
		if($(document).scrollTop()>0){
			header.addClass('is_fixed');
		} else {
			header.removeClass('is_fixed');
		}

		// if($(document).scrollTop()==0 && winW<=768){
		// 	navigation.hide().find.menu.removeClass('is_open');
		// }

		$(window).resize(function(){
			if(winW >= 1024){
				$('.btn').removeClass('large').addClass('medium');
		  } else {
				$('.btn').addClass('large').removeClass('medium');
			}
		});
	});

	// [D] 스크롤 감지
	$('.scroll .gradient').show();
	$('.scroll').scroll(function(){
			if($(this)[0].scrollHeight - Math.round($(this).scrollTop()) == $(this).outerHeight()) {
				$(this).children('.gradient').hide();
			} else {
				$('.gradient').show();
			}
	});

	$('.review_box').hide();
	$('.review_box').slice(0, 3).show();

	$('.review .btn').on('click', function(){
		$(this).parent('.btn_box').siblings('.review_area').find('.scroll').addClass('is_hide');
		$('.review_box:hidden').slice(0, 1).show(200);
		if($('.review_box:hidden').length == 0) {
			$('.review .btn_box').hide();
			$('.gradient').hide();
		}
	});

	$('.menu').removeClass('is_open');
	$('.nav').hide();
	$('.menu').on('click', function(){
		$('.nav').slideToggle('is_open');
		
		if($('.menu').hasClass('is_open')){
			$('.menu').removeClass('is_open');
			$('body').css('overflow', 'auto');
		} else{
			$('.menu').addClass('is_open');
			$('body').css('overflow', 'hidden');
		}
	});

	$('.page_scroll').click(function(){
		var $anchor = $(this);
		var pageTop = $($anchor.attr('href')).offset().top-64;
		$('html, body').stop().animate({scrollTop:pageTop}, 200);
		$('.menu').removeClass('is_open');
		$('body').css('overflow', 'auto');
		$('.nav').hide();
	});

	var mySwiper = new Swiper('.horizon_slide',{
		slidesPerView: 1.5,
		spaceBetween: 17,
		// autoplay: {
		// 	delay:2500,
		// 	disableOnInteraction:false,
		// },
		loop:true,
		pagination: {
				el: '.swiper-pagination',
				clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			480: {
				slidesPerView: 2.5,
				spaceBetween: 17,
			},
			640: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 20, 
				autoplay:false
			}
		}
	});

	/* WOW */
	var wow = new WOW({
		boxClass:'wow',
		animateClass:'animated',
		offset:0,
		mobile:true,
		live:true,
		callback:function(box) {
		},
		scrollContainer: null,
		resetAnimation: true,
  });
  wow.init();
});