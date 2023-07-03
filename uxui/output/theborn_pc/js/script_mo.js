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

	// [Side Bar].header .menu 클릭했을 때
	$('.header .menu').on('click', function(){
		$('.header .side_bar').addClass('is_open');
		$('.header .header_depth_bg').show();
		$("body").css("overflow", "hidden");
	});

	// [Side Bar] .close_btn 클릭했을 때
	$('.close_btn').on('click', function(){
		$('.header .side_bar').removeClass('is_open');
		$('.header .header_depth_bg').hide();
		$("body").css("overflow", "auto");
	});

	// [Side Bar] .header .gnb .menu_link 클릭 했을 때,
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

	// [Tab Menu] .search_area .btn_ico 클릭했을 때
	$('.search_area .btn_ico').eq(0).addClass('is_active');
	$('.search_area .btn_ico').on('click', function(){
		$('.search_area .btn_ico').removeClass('is_active');
		$(this).addClass('is_active');
	});

	// [Tab Menu] .tab .tab_item 클릭했을 때
	$('.tab .tab_item').eq(0).addClass('is_active');
	$('.tab .tab_item').on('click', function(){
		$('.tab .tab_item').removeClass('is_active');
		$(this).addClass('is_active');
	});

	// [Dropdown] .dropdown_btn 클릭 했을 때,
	$('.dropdown_btn').on('click', function(){
		$(this).parent('.family_site_dropdown').toggleClass('is_open');
	});

	// [Swiper Slide] 메인 배너
	var mySwiper1 = new Swiper ('.swiper-container.banner_slide', {
		autoplay: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
	});

	// [Swiper Slide] 가로 슬라이드
	var mySwiper2 = new Swiper ('.swiper-container.vertical_slide', {
		slidesPerView: 2.2,
		spaceBetween: 10
	});

});