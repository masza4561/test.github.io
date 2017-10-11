var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 47.488836, lng: 19.051549},
          zoom: 15
        });
	}
	
jQuery(document).ready(function () {

    $('#carouselHacked').carousel({
		// interval : 30000,
		pause: null // img mouseover action cause pause the autoplay
	});

    //this code is for the gmap
	/*
    var map = new GMaps({
        el: '#map',
        lat: 47.488836,
        lng: 19.051549
    });
	*/	
		
	var picture_change = 0;


    //this code is for smooth scroll and nav selector
    $(document).ready(function () {
        $(document).on("scroll", onScroll);

        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top + 2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('.navbar-default .navbar-nav>li>a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.navbar-default .navbar-nav>li>a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    }


    //this code is for animation nav
	    jQuery(window).scroll(function () {
        var windowScrollPosTop = jQuery(window).scrollTop();

        if (windowScrollPosTop >= 150) {
            /*
			jQuery(".header").css({
                "background": "#B193DD",
            });

            jQuery(".top-header img.logo").css({
                "margin-top": "-40px",
                "margin-bottom": "0"
            });

            jQuery(".navbar-default").css({
                "margin-top": "8px",
            });
			*/
			jQuery(".top-header").css({
                "padding-top": "0px",
                "padding-bottom": "0px"
            });
			/*
			 $(".boat_listing .mainGallery")
        .fadeOut(400, function() {
            $(".boat_listing .mainGallery").attr('src',$imgURL);
        })
        .fadeIn(400);*/
		//$(".logo").attr("src","img/logo12.png");
		if(($(".logo").attr("src")  == "img/logo11.png") && (picture_change == "0")) { 
			picture_change = 1;
			$(".logo").fadeOut(500, function() {
				$(".logo").attr("src","img/logo12.png");
			}).fadeIn(500);
			console.log("change logo to 12");
			}
        } else {
            /*
			jQuery(".header").css({
                "background": "transparent",
            });
			
            jQuery(".top-header img.logo").css({
                "margin-top": "-15px",
                "margin-bottom": "25px"
            });
			
            jQuery(".navbar-default").css({
                "margin-top": "8px",
                "margin-bottom": "0"
            });
			*/
            jQuery(".top-header").css({
                "padding-top": "10px",
                "padding-bottom": "10px"
            });
			if(($(".logo").attr("src")  == "img/logo12.png") && (picture_change == "1")) { 
				picture_change = 0;
				$(".logo").fadeOut(500, function() {
					$(".logo").attr("src","img/logo11.png");
				}).fadeIn(500);
				console.log("change logo to 11");
			}
		}
    });
	
	/*
    jQuery(window).scroll(function () {
        var windowScrollPosTop = jQuery(window).scrollTop();
		var windowWidth = $(window).width();
        if (windowScrollPosTop >= 150) {
			if (windowWidth > 1199) {
				console.log("img margin-top - -45px");
				jQuery(".header").css({
					"background": "#B193DD",
				});
				jQuery(".top-header img.logo").css({
					"margin-top": "-45px",
					"margin-bottom": "0"
				});
				jQuery(".navbar-default").css({
					"margin-top": "-15px",
				});
			} else {
				if (windowWidth > 991) {
					console.log("img margin-top - -35px");
					jQuery(".header").css({
						"background": "#B193DD",
					});
					jQuery(".top-header img.logo").css({
						"margin-top": "-35px",
						"margin-bottom": "0"
					});
					jQuery(".navbar-default").css({
						"margin-top": "-15px",
					});
				} else {
					console.log("img margin-top - -25px");
					jQuery(".header").css({
						"background": "#B193DD",
					});
					jQuery(".top-header img.logo").css({
						"margin-top": "-25px",
						"margin-bottom": "0"
					});
					jQuery(".navbar-default").css({
						"margin-top": "-15px",
					});
				}
			}
        } else {
			if (windowWidth > 1199) {
				console.log("img margin-top - -20px");
				jQuery(".header").css({
					"background": "transparent",
				});
				jQuery(".top-header img.logo").css({
					"margin-top": "-20px",
					"margin-bottom": "25px"
				});
				jQuery(".navbar-default").css({
					"margin-top": "8px",
					"margin-bottom": "0"
				});
			} else {
				if (windowWidth > 991) {
					console.log("img margin-top - -10px");
					jQuery(".header").css({
						"background": "transparent",
					});
					jQuery(".top-header img.logo").css({
						"margin-top": "-10px",
						"margin-bottom": "25px"
					});
					jQuery(".navbar-default").css({
						"margin-top": "8px",
						"margin-bottom": "0"
					});
				} else {
					console.log("img margin-top - 0px");
					jQuery(".header").css({
						"background": "transparent",
					});
					jQuery(".top-header img.logo").css({
						"margin-top": "0px",
						"margin-bottom": "25px"
					});
					jQuery(".navbar-default").css({
						"margin-top": "8px",
						"margin-bottom": "0"
					});
				}
			}

        }
    });
*/



});
