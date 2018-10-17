$(function(){
	"use strict";

	/*=========================================================================
		Variables
	=========================================================================*/
	var sect = $( window.location.hash );

	/*=========================================================================
		Section Switching (navigation) Function
	=========================================================================*/
	function switchSection(section){
		if( section.length == 1 ){
			if( !section.hasClass('active') ){
				$('body').addClass('section-animate');
				setTimeout(function(){
					$('body').removeClass('section-animate')
					$('.section.active').removeClass('active');
					section.addClass('active');
				}, 400);
			}
			if($('body').hasClass('show-menu')){
				$('body').removeClass('show-menu');
				trigger.click();
			}
			if( section.hasClass('remain-col') ){
				$('body').removeClass('no-col');
			}else{
				$('body').addClass('no-col');
			}
		}
	}

	/*=========================================================================
		Initializing Skills
	=========================================================================*/
	$('.skill').each(function(){
		var $this = $(this),
			percent = $this.data('percent');
		$this.append("<span class='percent' >"+percent+"%</span><div class='skill-bar' ><div style='width:"+percent+"%;' ></div></div>");
	});

	/*=========================================================================
		Testimonials Slider
	=========================================================================*/
	// $('.testimonials-slider').owlCarousel({
	// 	items: 1
	// });


	$(window).on('load', function(){
		switchSection(sect);
		$('body').addClass('loaded');

	});

	/*=========================================================================
		Portfolio Filters Function
	=========================================================================*/
	// $('.portfolio-filters > li > a').on('click', function (e) {
	// 	e.preventDefault();
	// 	var groupName = $(this).attr('data-group');
	// 	$('.portfolio-filters > li > a').removeClass('active');
	// 	$(this).addClass('active');
	// 	portfolio.shuffle('shuffle', groupName );
	// });

	/*=========================================================================
		Menu Function
	=========================================================================*/
	$('.menu-items a, .section-link').on('click', function(e){
		var $this = $(this),
			section = $( $this.attr('href') );
		switchSection(section);
	});


	/*===========================================================
		Menu Button Functions
	===========================================================*/
	/* In animations (to close icon) */
	var beginAC = 80,
	    endAC = 320,
	    beginB = 80,
	    endB = 320;
	function inAC(s) {
	    s.draw('80% - 240', '80%', 0.3, {
	        delay: 0.1,
	        callback: function() {
	            inAC2(s)
	        }
	    });
	}
	function inAC2(s) {
	    s.draw('100% - 545', '100% - 305', 0.6, {
	        easing: ease.ease('elastic-out', 1, 0.3)
	    });
	}
	function inB(s) {
	    s.draw(beginB - 60, endB + 60, 0.1, {
	        callback: function() {
	            inB2(s)
	        }
	    });
	}
	function inB2(s) {
	    s.draw(beginB + 120, endB - 120, 0.3, {
	        easing: ease.ease('bounce-out', 1, 0.3)
	    });
	}
	/* Out animations (to burger icon) */
	function outAC(s) {
	    s.draw('90% - 240', '90%', 0.1, {
	        easing: ease.ease('elastic-in', 1, 0.3),
	        callback: function() {
	            outAC2(s)
	        }
	    });
	}
	function outAC2(s) {
	    s.draw('20% - 240', '20%', 0.3, {
	        callback: function() {
	            outAC3(s)
	        }
	    });
	}
	function outAC3(s) {
	    s.draw(beginAC, endAC, 0.7, {
	        easing: ease.ease('elastic-out', 1, 0.3)
	    });
	}
	function outB(s) {
	    s.draw(beginB, endB, 0.7, {
	        delay: 0.1,
	        easing: ease.ease('elastic-out', 2, 0.4)
	    });
	}
	/* Awesome burger default */
	var pathA = document.getElementById('pathA'),
		pathB = document.getElementById('pathB'),
		pathC = document.getElementById('pathC'),
		segmentA = new Segment(pathA, beginAC, endAC),
		segmentB = new Segment(pathB, beginB, endB),
		segmentC = new Segment(pathC, beginAC, endAC),
		trigger = document.getElementById('menu-icon-trigger'),
		toCloseIcon = true,
		wrapper = document.getElementById('menu-icon-wrapper');
	wrapper.style.visibility = 'visible';
	trigger.onclick = function() {
		if (toCloseIcon) {
			inAC(segmentA);
			inB(segmentB);
			inAC(segmentC);
			$('body').addClass('show-menu');
		} else {
			outAC(segmentA);
			outB(segmentB);
			outAC(segmentC);
			$('body').removeClass('show-menu');
		}
		toCloseIcon = !toCloseIcon;
	};

	/* Scale functions */
	function addScale(m) {
		m.className = 'menu-icon-wrapper scaled';
	}
	function removeScale(m) {
		m.className = 'menu-icon-wrapper';
	}
});