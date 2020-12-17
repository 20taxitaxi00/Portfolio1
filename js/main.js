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

    // 写真のFadeIn & FadeOut1
    $(window).on('scroll', function(){
        let main_logo = $('.main-logo').offset().top;
        let wh = $(window).height();
        let now_position = $(window).scrollTop();

        if (main_logo <= wh + now_position){
            $('.main-img').removeClass('hide');
        } else {
            $('.main-img').addClass('hide');
        }
    });



});