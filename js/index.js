import Post from './modules/Post';

// Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

document.onreadystatechange = () => {
  if (document.readyState === "complete") {


    // Code form the original theme
    var sect = $(window.location.hash);

    function switchSection(section) {
      if (section.length == 1) {
        if (!section.hasClass('active')) {
          $('body').addClass('section-animate');
          setTimeout(function () {
            $('body').removeClass('section-animate')
            $('.section.active').removeClass('active');
            section.addClass('active');
          }, 400);
        }
        if ($('body').hasClass('show-menu')) {
          $('body').removeClass('show-menu');
          trigger.click();
        }
        if (section.hasClass('remain-col')) {
          $('body').removeClass('no-col');
        } else {
          $('body').addClass('no-col');
        }
      }
    }

    $('.skill').each(function () {
      var $this = $(this),
        percent = $this.data('percent');
      $this.append("<span class='percent' >" + percent + "%</span><div class='skill-bar' ><div style='width:" + percent + "%;' ></div></div>");
    });

    $(window).on('load', function () {
      switchSection(sect);
      $('body').addClass('loaded');
    });

    $('.menu-items a, .section-link').on('click', function (e) {
      var $this = $(this),
        section = $($this.attr('href'));
      switchSection(section);
    });

    var beginAC = 80,
      endAC = 320,
      beginB = 80,
      endB = 320;

    function inAC(s) {
      s.draw('80% - 240', '80%', 0.3, {
        delay: 0.1,
        callback: function () {
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
        callback: function () {
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
        callback: function () {
          outAC2(s)
        }
      });
    }

    function outAC2(s) {
      s.draw('20% - 240', '20%', 0.3, {
        callback: function () {
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

  // New code

    const post = new Post();

    let body = document.querySelector("body");
    if (body.classList.contains("home")) {
      post.get();
    }

    if (body.classList.contains("post")) {
      post.renderPost();
    }
  }
}