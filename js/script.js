jQuery(function ($) {
"use strict"
$(document).ready(function() {

	 $('.toggle-submenu-show').on('click',function() {
        $('.toggle-submenu').slideToggle();
       });

	 $('.topbar-tggle').on('click',function() {
        $('.menu-toggle-bar').addClass('show');
         
       });

	 $('.toggle-close-btn').on('click',function() {
        $('.menu-toggle-bar').removeClass('show');
       });
// ...........About-me js....................
	$('.about-img').magnificPopup({
		type:'image',
		delegate:'.about-icon',
		closeOnContentClick: true,
		closeBtnInside: true,
		mainClass: 'mfp-no-margins mfp-with-zoom',
		 zoom: {
		   enabled: true,
		   duration: 300,
		   easing: 'ease-in-out'
		 }
	});


// Isotop init
    var gridfilter = $('#portfolio-filter-content');
        if(gridfilter.length){
        $('#portfolio-filter-content').imagesLoaded(function() {
            $('#portfolio-filter-nav').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('#portfolio-filter-content').isotope({
                itemSelector: '.portfolio-filter-item',
                 percentPosition: true,
                 masonry: {
                     columnWidth: '.portfolio-filter-item',
                 }
            });
        });
    }
    
    if ($('#portfolio-filter-nav button').length) {
        var projectfiler = $('#portfolio-filter-nav button');
            if(projectfiler.length){
            $('#portfolio-filter-nav button').on('click', function(event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });
        }
    }


    $('.portfolio-item').magnificPopup({
	  type: 'image',
	  delegate: 'a',
	  gallery:{
	    enabled:true
	  }
	});


		$('#testimonial-slider').owlCarousel({
	    autoplay: true,
	    smartSpeed: 400,
	    autoplayTimeout: 5000,
	    autoplayHoverPause: true,
	    loop:true,
	    margin:0,
	    nav: false,
	    dots: true,
	    navElement: 'div',
	    navText:['<span class="fas fa-chevron-left"></span>','<span class="fas fa-chevron-right"></span>'],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        576:{
	            items:1
	        },
	        768:{
	            items:1
	        },
	        992:{
	            items:1
	        },
	        1200:{
	            items:1
	        }
	    }
	});

	
});
});