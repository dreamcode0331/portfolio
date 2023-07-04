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

	// 메뉴에 마우스 올렸을 때
	var headerDepthBg = $('.header .header_depth_bg');
	var headerMenuLink = $('.header .gnb .menu_list .menu_link');
	var headerMenuListDepthMenuItem = $('.header .gnb .menu_list .menu_list.depth .menu_item')

	headerMenuLink.on('mouseenter', function(){
		headerDepthBg.addClass('is_selected');
		headerMenuListDepthMenuItem.show();
	});
	
	headerDepthBg.on('mouseleave blur', function(){
		headerDepthBg.removeClass('is_selected');
		headerMenuListDepthMenuItem.hide();
	});

	// 탭메뉴
	$('.tab .tab_item').eq(0).addClass('active');
	$('.tab .tab_item').on('click', function(){
		$('.tab .tab_item').removeClass('active');
		$(this).addClass('active');
	});

	// select_box 클릭 했을 때,
	$('.dropdown_btn').on('click', function(){
		$(this).parent('.family_site_dropdown').toggleClass('is_open');
	});

	// 스와이퍼 슬라이드
	var mySwiper1 = new Swiper ('.swiper-container.banner_slide', {
		autoplay: true,
		loop: false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});

	var mySwiper2 = new Swiper ('.swiper-container.vertical_slide', {
		slidesPerView: 3,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

});