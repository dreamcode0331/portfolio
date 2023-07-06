$(function(){

	$(window).scroll(function(){
		var winW = $(window).width();
		if($(document).scrollTop()>0){
			$('.header').addClass('is_fixed');

		}else{
			$('.header').removeClass('is_fixed');
		}
		if($(document).scrollTop()==0 && winW<=768){
			$('.icon_bar').removeClass('is_open');
			$('.nav').hide();
		}
		if(winW >= 1024){
			$('.btn').removeClass('large').addClass('medium');
		}

		$(window).resize(function(){
			// console.log("winW : " + winW);
			if(winW >= 1024){
				$('.btn').removeClass('large').addClass('medium');
		  } else {
				$('.btn').addClass('large').removeClass('medium');
			}
		});
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
		loop:false,
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
				slidesPerView: 1.5,
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
				slidesPerView: 5,
				spaceBetween: 20,
			}
		}
	});  

	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 8,
		slidesPerView: 4,
		loop: false,
		freeMode: true,
		loopedSlides: 6,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});

	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 10,
		loop: false,
		loopedSlides: 6,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});
});