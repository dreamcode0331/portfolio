$(function(){
	//fixed navigation
	$(window).scroll(function(){
		var winW = $(window).width();
		if($(document).scrollTop()>0){
			$('.header').addClass('is_fixed');

		}else{
			$('.header').removeClass('is_fixed');
		}
		if($(document).scrollTop()==0 && winW<=768){
			$('.icon_bar').removeClass('is_open');
			$('.nav').css('display','none');
		}
		//window resize
		$(window).resize(function(){
			var winW = $(window).width();
			console.log("winW : " + winW);
			if(winW > 320 && $('.nav').is(':hidden')){
				 $('.nav').removeAttr('style');
			}
		});
	});

	// mobile menu
	$('.menu').removeClass('is_open');
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

	// 페이지 찾아가기(1scroll page 일 경우 사용)
	$('.page_scroll').click(function(){
		var $anchor = $(this);
		var pageTop = $($anchor.attr('href')).offset().top-100;
		$('html, body').stop().animate({scrollTop:pageTop}, 200);
	});

	


	
	// News Section Swiper
	var mySwiper = new Swiper('.swiper-container',{
		slidesPerView: 1.5,
		spaceBetween: 17,
		autoplay: {
	    	delay:2500,
	      	disableOnInteraction:false,
	    },
	    loop:true,
	    pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
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




});