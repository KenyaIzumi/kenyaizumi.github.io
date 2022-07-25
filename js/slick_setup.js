/* ===================================================================

 * slickの設定

=================================================================== */
$(function() {
    $('.slick-carousel').on('init', function(event, slick) {
            let currentSlide = slick.currentSlide + 1
                // 最後の画像のクレジットはカウントに含めない
            let slideCount = slick.slideCount - 1
            $('.current').text(currentSlide);
            $('.total').text(slideCount);
        })
        .slick({
            slidesToShow: 1,
            arrows: false,
            dots: false,
            fade: true,

            centerMode: true,
        })
        .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $('.current').text(nextSlide + 1);

            // クレジットでは枚数を表示させない
            let slideCount = slick.slideCount - 1
            if (nextSlide == slideCount) {
                $('.slick-counter-wrapper').css('display', 'none');
            } else {
                $('.slick-counter-wrapper').css('display', 'block');
            }
        });
});

function slick_carousel_prev() {
    $('.slick-carousel').slick('slickPrev');
}

function slick_carousel_next() {
    $('.slick-carousel').slick('slickNext');
}