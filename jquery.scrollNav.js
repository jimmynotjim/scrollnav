(function($) {

	$.fn.scrollNav = function(options) {
		var settings = $.extend({
			sections: 'h2',
			subSections: false,
			showHeadline: true,
			headlineText: 'Scroll To',
			showTopLink: true,
			topLinkText: 'Top',
			fixedMargin: 40,
			scrollOffset: 40,
			animated: true,
			speed: 500,
			location: 'insertBefore',
			target: this
		}, options);

		// Set the variables from our page elements

		var viewPort;
		var navOffset;
		var sections		= [];
		var sectionArray	= [];
		var $container		= this;
		var $target		= $(settings.target);
		var $headline		= $('<span />', {'class': 'scroll-nav__heading', text: settings.headlineText});
		var $wrapper		= $('<div />', {'class': 'scroll-nav__wrapper'});
		var $nav		= $('<nav />', {'class': 'scroll-nav', 'role': 'navigation'});

		// Add loading hook to the body element

		var addLoadingClass = function() {
			$('body').addClass('sn-loading');
		};

		// Remove loading hook and add a loaded hook to the body

		var swapLoadingClass = function(success) {
			if (success) { $('body').removeClass('sn-loading').addClass('sn-active'); }
			else { $('body').removeClass('sn-loading').addClass('sn-failed'); }
		};

		// Find the html for each section

		var findSections = function() {
			if (settings.showTopLink) {
				sections.push( $container.children().first().nextUntil(settings.sections).andSelf() );
			}

			$container.find(settings.sections).each(function() {
				sections.push( $(this).nextUntil(settings.sections).andSelf() );
			});
		};

		// Wrap each sectin and add it's details to the section array

		var setupSections = function() {
			$(sections).each(function(i) {
				var subArray		= [];
				var $thisSection	= $(this);
				var sectionID		= 'scrollNav-' + (i + 1);
				var offset			= $thisSection.offset().top;
				var text			= (settings.showTopLink && i === 0) ? settings.topLinkText : $thisSection.filter(settings.sections).text();

				if (settings.subSections) {
					var $subSections	= $thisSection.filter(settings.subSections);

					if ($subSections.length > 0) {
						$subSections.each(function(i) {
							var subID		= sectionID + '-' + (i + 1);
							var subOffset	= $(this).offset().top;
							var subText		= $(this).text();
							var $thisSub	= $thisSection.filter($(this).nextUntil($subSections).andSelf());

							$thisSub.wrapAll('<div id="' + subID + '" class="scroll-nav__sub-section" />');
							subArray.push( {id: subID, offset: subOffset, text: subText} );
						});

						$thisSection = $(this).nextUntil(settings.sections).andSelf();
					}
				}

				$thisSection.wrapAll('<section id="' + sectionID + '" />');
				sectionArray.push( {id: sectionID, offset: offset, text: text, subSections: subArray} );
			});
		};


		// Populate an ordered list from the section array we built

		var setupNav = function() {
			var $navList	= $('<ol />', {'class': 'scroll-nav__list'});

			$.each(sectionArray, function(i) {
				var $item			= (i === 0) ? $('<li />', {'class': 'scroll-nav__item active'}) : $('<li />', {'class': 'scroll-nav__item'});
				var $link			= $('<a />', {'href': '#' + this.id, 'class': 'scroll-nav__link', text: this.text});
				var $subNavList;

				if (this.subSections.length > 0) {
					$item.addClass('is-parent-item');
					$subNavList	= $('<ol />', {'class': 'scroll-nav__sub-list'});

					$.each(this.subSections, function() {
						var $subItem	= $('<li />', {'class': 'scroll-nav__sub-item'});
						var $subLink	= $('<a />', {'href': '#' + this.id, 'class': 'scroll-nav__sub-link', text: this.text});

						$subNavList.append( $subItem.append($subLink) );
					});
				}

				$navList.append( $item.append($link).append($subNavList) );
			});

			if (settings.showHeadline) {
				$nav.append( $wrapper.append($headline).append($navList) );
			} else {
				$nav.append( $wrapper.append($navList) );
			}
		};

		// Add the nav to our page

		var insertNav = function() {
			$nav[settings.location]($target);
		};

		// Find the offset positions of each section

		var setupPositions = function() {
			viewPort	= $(window).height();
			navOffset	= $nav.offset().top;

			$.each(sectionArray, function() {
				var $thisSection	= $('#' + this.id);
				var thisHeight		= $thisSection.height();
				this.topOffset		= $thisSection.offset().top;
				this.bottomOffset	= this.topOffset + thisHeight;
			});
		};

		// Set nav to fixed after scrolling past the header and add an active
		// class to any sections currently within the bounds of our view

		var positionCheck = function() {
			var winTop			= $(window).scrollTop();
			var topBoundry		= winTop + settings.scrollOffset;
			var bottomBoundry	= winTop + viewPort - settings.scrollOffset;
			var activeArray	= [];

			if ( winTop > (navOffset - settings.fixedMargin) ) { $nav.addClass('fixed'); }
			else { $nav.removeClass('fixed'); }

			$.each(sectionArray, function() {
				if ( (this.topOffset > topBoundry && this.topOffset < bottomBoundry) || (this.bottomOffset > topBoundry && this.bottomOffset < bottomBoundry) || (this.topOffset < topBoundry && this.bottomOffset > bottomBoundry) ) {
					activeArray.push(this);
				}
			});

			$nav.find('.scroll-nav__item').removeClass('active');

			$.each(activeArray, function() {
				$nav.find('a[href="#' + this.id + '"]').parents('.scroll-nav__item').addClass('active');
			});
		};

		var navScrolling = function() {

			// Set a resize listener to change the offset values

			$(window).resize(function() {
				setupPositions();
				positionCheck();
			});

			// Set a scroll listener to update the fixed and
			// active classes

			$(window).scroll(function() {
				positionCheck();
			});
		};

		// Animate Scrolling on click

		var animateClicks = function() {
			if (settings.animated) {
				$('.scroll-nav').find('a').click(function(e) {
					e.preventDefault();

					var elementClicked	= $(this).attr("href");
					var destination		= $(elementClicked).offset().top;

					$('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination - settings.scrollOffset }, settings.speed );
				});
			}
		};

		if ($container.length > 0) {
			// Initialize
			
			if($target.length < 1){
				console.log('Build failed, scrollNav could not find "' + $target.selector + '"');
				return false;
			}
			
			addLoadingClass();
			findSections();

			if ($container.find(settings.sections).length > 0) {
				// BUILD!!!!

				setupSections();
				setupNav();
				insertNav();
				setupPositions();
				positionCheck();
				navScrolling();
				animateClicks();
				swapLoadingClass(true);
			} else {
				console.log('Build failed, scrollNav could not find any "' + settings.sections + 's" inside of "' + $container.selector + '"');
				swapLoadingClass(false);
			}

		} else {
			console.log('Build failed, scrollNav could not find "' + $container.selector + '"');
			swapLoadingClass(false);
		}
	};
})(jQuery);
