$(function(){

    // トップに戻る
    $('#return-top').on('click', function(){
        $('html, body').animate({scrollTop:0}, 500);
    });

    // ハンバーガーメニュー
    $('#hamburger-btn').on('click',function(){
        let isActive = $(this).hasClass('on');
        toggleDrawer(isActive);
    });

    // ドロワー
    function toggleDrawer(isActive) {
        $('.js-hamburger')
        if (isActive) {
        $('#drawer-bg').fadeOut(600);
        } else {
        $('#drawer-bg').fadeIn(600);
        }
        $('.js-hamburger').toggleClass('on');
    }

    // 写真のFadeIn & FadeOut
    $(window).on('scroll', function(){
        let main_logo = $('.main-logo').offset().top;
        let wh = $(window).height();
        let now_position = $(window).scrollTop();

        if (main_logo <= wh + now_position){
            $('.main-img').fadeIn(600);
        } else {
            $('.main-img').fadeOut(600);
        }
    });

    // 記事のread-more下線
	$('.shadow').on('mouseover', function(){
		$(this).find('span').animate({'width':'100%'}, 500)
	});
	$('.shadow').on('mouseleave', function(){
		$(this).find('span').animate({'width':'30%'}, 500)
    });
    
    // 最初にロゴがfade
    setTimeout(function(){
		$('.logo-fade p').fadeIn(1000);
	},500);
	setTimeout(function(){
		$('.logo-fade').fadeOut(800);
    },2500);

    // スライダー
	// let swipeOption = {
	// 	loop: true,
	// 	effect: 'fade',
	// 	autoplay: {
	// 	  delay: 3000,
	// 	  disableOnInteraction: false,
	// 	},
	// 	speed: 1500,
	// }
	// new Swiper('.swiper-container', swipeOption);


});