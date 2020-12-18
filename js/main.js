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

    // 記事のread-more下線
    $('.shadow').on('mouseover', function(){
      $(this).find('span').animate({'width':'100%'}, 500)
    });
    $('.shadow').on('mouseleave', function(){
      $(this).find('span').animate({'width':'30%'}, 500)
      });
    
    // 最初にロゴがfade
    // setTimeout(function(){
		// $('.logo-fade p').fadeIn(1000);
    // },500);
    // setTimeout(function(){
		// $('.logo-fade').fadeOut(800);
    // },2500);

    // スライダー
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 0,
        centeredSlides : true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
          767: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }
      })


});