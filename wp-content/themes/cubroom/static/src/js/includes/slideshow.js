

module.exports = {

	init: function() {


		var $slideShow = $('.slideshow');


		$slideShow.slick({

			arrows: true,
			nextArrow: '<div class="slick-next next-arrow arrow"></div>',
			prevArrow: '<div class="slick-prev prev-arrow arrow"></div>',
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: 'ease-out',
            touchMove: true

		});
	}
}