(function ($) {
	'use strict';

	// ----------------------------
	// AOS
	// ----------------------------
	AOS.init({
		once: true
	});


	$(window).on('scroll', function () {
		//.Scroll to top show/hide
		var scrollToTop = $('.scroll-top-to'),
			scroll = $(window).scrollTop();
		if (scroll >= 200) {
			scrollToTop.fadeIn(200);
		} else {
			scrollToTop.fadeOut(100);
		}
	});
	// scroll-to-top
	$('.scroll-top-to').on('click', function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	$(document).ready(function () {

		// navbarDropdown
		if ($(window).width() < 992) {
			$('.main-nav .dropdown-toggle').on('click', function () {
				$(this).siblings('.dropdown-menu').animate({
					height: 'toggle'
				}, 300);
			});
		}

		// -----------------------------
		//  Testimonial Slider
		// -----------------------------
		$('.testimonial-slider').slick({
			slidesToShow: 2,
			infinite: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 2000,
			dots: true,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});


		// -----------------------------
		//  Video Replace
		// -----------------------------
		$('.video-box i').click(function () {
			var video = '<iframe class="border-0" allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
			$(this).replaceWith(video);
		});


		// -----------------------------
		//  Count Down JS
		// -----------------------------
		var syoTimer = $('#simple-timer');
		if (syoTimer) {
			$('#simple-timer').syotimer({
				year: 2023,
				month: 9,
				day: 1,
				hour: 0,
				minute: 0
			});
		}


		// -----------------------------
		//  Story Slider
		// -----------------------------
		$('.about-slider').slick({
			slidesToShow: 1,
			infinite: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 2000,
			dots: true
		});


		// -----------------------------
		//  Quote Slider
		// -----------------------------
		$('.quote-slider').slick({
			slidesToShow: 1,
			infinite: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 2000,
			dots: true
		});


		// -----------------------------
		//  Client Slider
		// -----------------------------
		$('.client-slider').slick({
			slidesToShow: 4,
			infinite: true,
			arrows: false,
			// autoplay: true,
			autoplaySpeed: 2000,
			dots: true,
			responsive: [
				{
					breakpoint: 0,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 2
					}
				}
			]
		});


		// scroll
		// $('.scrollTo').on('click', function (e) {
		//   e.preventDefault();
		//   var target = $(this).attr('href');
		//   $('html, body').animate({
		//     scrollTop: ($(target).offset().top)
		//   }, 500);
		// });

	});

})(jQuery);



// slider
var responsiveSlider = function () {

	var slider = document.getElementById("slider");
	var sliderWidth = slider.offsetWidth;
	var slideList = document.getElementById("slideWrap");
	var count = 1;
	var items = slideList.querySelectorAll("li").length;
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");

	window.addEventListener('resize', function () {
		sliderWidth = slider.offsetWidth;
	});

	var prevSlide = function () {
		if (count > 1) {
			count = count - 2;
			slideList.style.left = "-" + count * sliderWidth + "px";
			count++;
		}
		else if (count = 1) {
			count = items - 1;
			slideList.style.left = "-" + count * sliderWidth + "px";
			count++;
		}
	};

	var nextSlide = function () {
		if (count < items) {
			slideList.style.left = "-" + count * sliderWidth + "px";
			count++;
		}
		else if (count = items) {
			slideList.style.left = "0px";
			count = 1;
		}
	};

	next.addEventListener("click", function () {
		nextSlide();
	});

	prev.addEventListener("click", function () {
		prevSlide();
	});

	setInterval(function () {
		nextSlide()
	}, 5000);

};

window.onload = function () {
	responsiveSlider();
}


//-----------------------------------
//NAVBAR SECTION
//---------------------------
$(function () {

	var siteSticky = function () {
		$(".js-sticky-header").sticky({ topSpacing: 0 });
	};
	siteSticky();

	var siteMenuClone = function () {

		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function () {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class': 'collapse',
					'id': 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		})

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	};
	siteMenuClone();
});

$(document).ready(function () {
	$("#navbar-part").css("width", (window.innerWidth > 0) ? window.innerWidth : screen.width);
})

$(document).ready(function () {
	$("#navbar-part").css("width", (window.innerWidth > 0) ? window.innerWidth : screen.width);
});
// Read more button
function rmore() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("rmore");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Read more";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "inline";
	}
  }