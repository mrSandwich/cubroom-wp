!function(i,n,a){({init:function(){this.navActions.mobileNav(),this.navActions.animateNav(),this.slideShow.init(),this.navActions.floatingNav(),this.faq.init()},slideShow:{init:function(){i(".slideshow").slick({arrows:!0,nextArrow:'<div class="slick-next next-arrow arrow"></div>',prevArrow:'<div class="slick-prev prev-arrow arrow"></div>',slidesToShow:1,slidesToScroll:1,cssEase:"ease-out",touchMove:!0})}},navActions:{mobileNav:function(){i(".mobile-nav-trigger").on("click",function(n){n.preventDefault(),i(this).hasClass("nav-active")?(i(this).removeClass("nav-active"),i(".main-nav").css("display","none")):(i(this).addClass("nav-active"),i(".main-nav").css("display","block"))})},animateNav:function(){i("nav a").click(function(n){n.preventDefault();var a=i(this).attr("href"),t=i(a).offset().top;i("html:not(:animated),body:not(:animated)").animate({scrollTop:t-35},500)})},floatingNav:function(){var n,a=i(".floating-nav"),t=i(".contact").offset().top;window.addEventListener("scroll",function(){(n=i(window).scrollTop())>t?a.hasClass("is-visible")||a.addClass("is-visible"):a.removeClass("is-visible")})}},faq:{init:function(){var n,a=document.querySelectorAll(".question"),t=0,s=a.length;for(t;t<s;t++)a[t].addEventListener("click",function(){n=this.parentNode.querySelector(".answer"),i(n).addClass("expanded")})}}}).init()}(jQuery);