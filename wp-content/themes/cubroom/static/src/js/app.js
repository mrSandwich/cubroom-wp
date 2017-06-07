


(function ($, root, undefined) {

	var _cub = _cub || {};

	_cub = {

		init: function() {
			this.navActions.mobileNav();
			this.navActions.animateNav();
			this.slideShow.init();
		},
		slideShow: {

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
			
		},
		navActions: {
			mobileNav: function() {
				console.log($('.mobile-nav-trigger'))

				var $burger = $('.mobile-nav-trigger');

				$burger.on('click', '.mobile-nav-trigger', function(e) {

					e.preventDefault();

					if ( $(this).hasClass('nav-active') ) {

						$(this).removeClass('nav-active');

						$('.main-nav').css('display', 'none');

					} else {

						$(this).addClass('nav-active');

						$('.main-nav').css('display', 'block');
					}

				});
			},
			animateNav: function() {	
				console.log($('nav a'));

				$('nav a').click(function(e) {

					e.preventDefault();

				   var elementClicked = $(this).attr("href"),
				       destination    = $(elementClicked).offset().top;


				   $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination - 35}, 500 );
				});

			}

		}

	}


_cub.init();

})(jQuery, this);

