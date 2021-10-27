(function ($) {
	"use strict";

    jQuery(document).ready(function($){
			 
	// for slider-area owl-carousel
		$('.slider-area').owlCarousel({
				loop:true,
				navText:['<i class="fa fa-angle-left">','<i class="fa fa-angle-right">'],
				nav:true,
				autoplay:true,
				autoplayHoverPause:true,
				autoplayTimeout:5000,
				animateOut: 'fadeOut',
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			})
			$('.play').on('click',function(){
				owl.trigger('play.owl.autoplay',[4000])
			})
			$('.stop').on('click',function(){
				owl.trigger('stop.owl.autoplay')
			})
		
	// for service-area owl-carousel
	
		$('.services').owlCarousel({
				loop:true,
				autoplay:true,
				smartSpeed: 1000,
				autoplayHoverPause:true,
				autoplayTimeout:5000,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			})
			$('.play').on('click',function(){
			owl.trigger('play.owl.autoplay',[4000])
		})
		$('.stop').on('click',function(){
			owl.trigger('stop.owl.autoplay')
		})
		
	// for author-area owl-carousel	
		$('.author').owlCarousel({	 
				loop:true,
				autoplay:true,
				smartSpeed: 800,
				autoplayHoverPause:true,
				autoplayTimeout:5000,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			})		
			$('.play').on('click',function(){
				owl.trigger('play.owl.autoplay',[4000])
			})
			$('.stop').on('click',function(){
				owl.trigger('stop.owl.autoplay')
			})
	// this is for counter-up
		$('.count').countTo();
		
	// this is for portfolio-area isotope
			
			$('.portfolio-filter li').click(function(){
				$(".portfolio-filter li").removeClass("active");
				$(this).addClass("active");
		 
				var selector = $(this).attr('data-filter');
				$(".portfolio-items").isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false,
					}
				});
				return false;
			});	
	
	// for parallax background
		
		$('.parallax-window').parallax({imageSrc: 'images/sample.jpg'});
		
    });
	
}(jQuery));	
		

	