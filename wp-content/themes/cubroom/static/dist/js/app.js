var Scrolling  = require('./includes/header-scroll'),
	NavActions = require('./includes/nav-action'),
	Slideshow  = require('./includes/slideshow');

// Call the required methods

NavActions.mobileNav();
NavActions.animateNav();
Slideshow.init();


$(window).scroll(function(){

	Scrolling.stickiness();

});



