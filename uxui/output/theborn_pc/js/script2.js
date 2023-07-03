$(function(){

	$("html, body").scrollTop(0);
	$(window).scroll(function(){
		var winScrlTop = $(window).scrollTop();
		if(winScrlTop>0){
			$('.header').addClass('top');
		}else{
			$('.header').removeClass('top');
		}
	});

	// .header .menu 클릭했을 때
	$('.header .menu').on('click', function(){
		$('.header .side_bar').addClass('is_open');
		$('.header .header_depth_bg').show();
		$("body").css("overflow", "hidden");
	});

	// 
	$('.close_btn').on('click', function(){
		$('.header .side_bar').removeClass('is_open');
		$('.header .header_depth_bg').hide();
		$("body").css("overflow", "auto");
	});

	// .header .gnb .menu_link 클릭 했을 때,
	$('.header .gnb .menu_link').on('click', function(){
		if($(this).parent('.menu_item').hasClass('is_open')){
			$(this).parent('.menu_item').removeClass('is_open');
			$(this).siblings('.sub_menu_list').removeClass('is_open').slideUp('fast');
		} else {
      $('.menu_item, .sub_menu_list').removeClass('is_open');
      $(this).parent('.menu_item').addClass('is_open');
      $('.sub_menu_list').slideUp('fast');
			$(this).siblings('.sub_menu_list').addClass('is_open').slideDown('fast');
		}
	});

	// 탭메뉴
	$('.tab .tab_item').eq(0).addClass('active');
	$('.tab .tab_item').on('click', function(){
		$('.tab .tab_item').removeClass('active');
		$(this).addClass('active');
	});

	// 메인 슬라이드 텍스트
	$(".banner_slide .banner_text").waypoint(function(){
		$(".banner_slide .banner_text .text_small").addClass("animated fadeInLeft")
		$(".banner_slide .banner_text .text_emphasis").addClass("animated fadeInRight")
	}, {offset:"50%"});

	// select_box 클릭 했을 때,
	$('.dropdown_btn').on('click', function(){
		$(this).parent('.family_site_dropdown').toggleClass('is_open');
	});

	// 스와이퍼 슬라이드
	var mySwiper1 = new Swiper ('.banner_slide', {
		autoplay: false,
		loop: false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
	});

	var mySwiper2 = new Swiper ('.vertical_slide', {
		slidesPerView: 2.2,
		spaceBetween: 10,
		autoplay: false,
		loop: true
	});

});