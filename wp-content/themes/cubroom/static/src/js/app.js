


(function ($, root, undefined) {

	var _cub = _cub || {};

	_cub = {

		init: function() {
			this.navActions.mobileNav();
			this.navActions.animateNav();
			this.slideShow.init();
			this.navActions.floatingNav();
			this.faq.init();
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

				var $burger = $('.mobile-nav-trigger');

				$burger.on('click', function(e) {

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

				$('nav a').click(function(e) {

					e.preventDefault();

				   var elementClicked = $(this).attr("href"),
				       destination    = $(elementClicked).offset().top;


				   $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination - 35}, 500 );
				});

			}, 
			floatingNav: function() {

				var scroll,
					$floatingNav = $('.floating-nav'),
					nextOffset = $('.contact').offset().top;

				window.addEventListener('scroll', function() {

					scroll = $(window).scrollTop();

					if ( scroll > nextOffset ) {

						if ( !$floatingNav.hasClass('is-visible') ) {

							$floatingNav.addClass('is-visible');
						}

					} else {

						$floatingNav.removeClass('is-visible')
					}

				});
			}

		},
		faq: {
			init: function() {
				var qs = document.querySelectorAll('.question'),
					i = 0, len=qs.length, ans;

				for (i; i<len; i++) {
					qs[i].addEventListener('click', function() {
						ans = this.parentNode.querySelector('.answer');

						$(ans).addClass('expanded');
					});
				}
			}
		}
		//end navActions

	}


_cub.init();

})(jQuery, this);

