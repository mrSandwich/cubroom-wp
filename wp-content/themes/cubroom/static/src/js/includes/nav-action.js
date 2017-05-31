
module.exports = {


	mobileNav: function() {

		var $burger = $('.mobile-nav-trigger');

		$burger.on('click', function(e) {

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

	}


}