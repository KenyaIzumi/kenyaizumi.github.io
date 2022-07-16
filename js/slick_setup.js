/* ===================================================================

 * slickの設定

=================================================================== */
$(function() {
    $('.slick-carousel').on('init', function(event, slick) {
            $('.current').text(slick.currentSlide + 1);
            $('.total').text(slick.slideCount);
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
        });
});

function slick_carousel_prev() {
    $('.slick-carousel').slick('slickPrev');
}

function slick_carousel_next() {
    $('.slick-carousel').slick('slickNext');
}