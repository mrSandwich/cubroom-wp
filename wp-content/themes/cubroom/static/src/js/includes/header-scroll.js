

module.exports =  {


	globals: {

		    $nav : 		  $('.main-nav'),
			$about: 	  $('section.contact'),
			$floatingNav: $('.floating-nav')
	}, 

	stickiness: function() {


		var scroll     = $(window).scrollTop(),
			bodyWidth  = $(window).width(),
			navHeight  = module.exports.globals.$nav.height(),
			navTop 	   = module.exports.globals.$nav.offset().top,
			navLeft    = module.exports.globals.$nav.offset().left,
			nextOffset = module.exports.globals.$about.offset().top;


		if (bodyWidth < 1024) {
			return;
		}

		// if ( !module.exports.globals.$nav.hasClass('is-fixed') && !module.exports.globals.$nav.hasClass('is-absolute')) {

		// 	navTop = module.exports.globals.$nav.offset().top

		// }

		
		// // console.log(scroll + ' vs ' + (nextOffset - navHeight))

		// if (scroll > navTop && scroll < (nextOffset - navHeight)) {



		// 	if (!module.exports.globals.$nav.hasClass('is-fixed')) {


		// 		module.exports.globals.$nav.removeClass('is-absolute').addClass('is-fixed').css({left: navLeft, bottom: ''});
		// 	}

		// } else if ( scroll > (nextOffset - navHeight) ){



		// 	if (!module.exports.globals.$nav.hasClass('is-absolute')) {


		// 		module.exports.globals.$nav.removeClass('is-fixed').addClass('is-absolute').css({top: (nextOffset - navHeight), left: navLeft});
		// 	}

		// } 

		if ( scroll > nextOffset ) {

			if ( !module.exports.globals.$floatingNav.hasClass('is-visible') ) {

				module.exports.globals.$floatingNav.addClass('is-visible');
			}

		} else {

			module.exports.globals.$floatingNav.removeClass('is-visible')
		}

	}

		
}