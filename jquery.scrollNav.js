(function($) {

	$.fn.scrollNav = function(options) {

		// Add loading hook to the body element

		$('body').addClass('sn-loading');

		var settings = {
			sections: 'h2',
			subSections: false,
			showHeadline: true,
			headlineText: 'Scroll To',
			showTopLink: true,
			topLinkText: 'Top',
			animated: true,
			fixedMargin: 40,
			scrollOffset: 40,
			speed: 500,
			location: 'insertBefore'
		};

		$.extend(settings, options);

		// Set the variables from our page elements

		var $sectionArray	= [];
		var $container		= this;
		var $sections		= $container.find(settings.sections);
		var $headline		= $('<span />', {'class': 'scroll-nav__heading', text: settings.headlineText});
		var $nav			= $('<nav />', {'class': 'scroll-nav', 'role': 'navigation'});
		$nav				= (settings.showHeadline) ? $nav.append($headline) : $nav;
		var viewPort;
		var navOffset;

		// Find the article container and either grab it's id or give it one
		// Initial setup of the section array

		var setupContainer = function() {
			var $subArray		= [];
			var sectionID		= 'scrollNav-0';
			var $thisSection	= $container.children().first().nextUntil($sections).andSelf();

			if (settings.subSections) {
				var $subSections	= $thisSection.filter(settings.subSections);

				if ($subSections.length > 0) {
					$subSections.each(function(i) {
						var subID		= sectionID + '-' + (i + 1);
						var subText		= $(this).text();
						var $thisSub	= $thisSection.filter($(this).nextUntil($subSections).andSelf());

						$thisSub.wrapAll('<div id="' + subID + '" class="scroll-nav__sub-section" />');
						$subArray.push( {id: subID, text: subText} );
					});

					$thisSection = $(this).nextUntil($sections).andSelf();
				}
			}

			$thisSection.wrapAll('<section id="' + sectionID + '" />');

			if (settings.showTopLink) {
				$sectionArray.push({id: 'scrollNav-0', text: settings.topLinkText, subSections: $subArray});
			}
		};

		// Find each section and give it an id
		// Add each section and it's details to the section array

		var setupSections = function() {
			$sections.each(function(i) {
				var $subArray		= [];
				var sectionID		= 'scrollNav-' + (i + 1);
				var text			= $(this).text();
				var $thisSection	= $(this).nextUntil($sections).andSelf();

				if (settings.subSections) {
					var $subSections	= $thisSection.filter(settings.subSections);

					if ($subSections.length > 0) {
						$subSections.each(function(i) {
							var subID		= sectionID + '-' + (i + 1);
							var subText		= $(this).text();
							var $thisSub	= $thisSection.filter($(this).nextUntil($subSections).andSelf());

							$thisSub.wrapAll('<div id="' + subID + '" class="scroll-nav__sub-section" />');
							$subArray.push( {id: subID, text: subText} );
						});

						$thisSection = $(this).nextUntil($sections).andSelf();
					}
				}

				$thisSection.wrapAll('<section id="' + sectionID + '" />');
				$sectionArray.push( {id: sectionID, text: text, subSections: $subArray} );
			});
		};


		// Populate the nav with a headline and ordered list from
		// the section array we built

		var setupNav = function() {
			var $navList	= $('<ol />', {'class': 'scroll-nav__list'});

			$.each($sectionArray, function(i) {
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

			if (settings.showHeadline === true) {
				$nav.append($headline).append($navList);
			} else {
				$nav.append($navList);
			}

		};

		// Set nav to fixed after scrolling past the header and
		// add an active class to whichever section currently in
		// view when the user clicks or scrolls

		var setupPositions = function() {
			viewPort	= $(window).height();
			navOffset	= $nav.offset().top;

			$.each($sectionArray, function() {
				this.topOffset		= $('#' + this.id).offset().top;
				this.bottomOffset	= this.topOffset + $('#' + this.id).height();
			});
		};

		var positionCheck = function() {
			var winTop			= $(window).scrollTop();
			var topBoundry		= winTop + settings.scrollOffset;
			var bottomBoundry	= winTop + viewPort - settings.scrollOffset;
			var $activeArray	= [];

			if ( winTop > (navOffset - settings.fixedMargin) ) { $nav.addClass('fixed'); }
			else { $nav.removeClass('fixed'); }

			$.each($sectionArray, function() {
				if ( (this.topOffset > topBoundry && this.topOffset < bottomBoundry) || (this.bottomOffset > topBoundry && this.bottomOffset < bottomBoundry) || (this.topOffset < topBoundry && this.bottomOffset > bottomBoundry) ) {
					$activeArray.push(this);
				}
			});

			$nav.find('.scroll-nav__item').removeClass('active');

			$.each($activeArray, function() {
				$nav.find('a[href="#' + this.id + '"]').parents('.scroll-nav__item').addClass('active');
			});
		};

		var navScrolling = function() {

			// Set a resize listener to change the offset values

			$(window).resize(function() {
				setupPositions();
			});

			// Set a scroll listener to update the fixed and
			// active classes

			$(window).scroll(function() {
				positionCheck();
			});
		};

		// BUILD!!!!
		if ($container.length > 0) {
			setupContainer();
			setupSections();
			setupNav();
		}

		// Now add the nav to our page

		if ($container.length > 0 && $sections.length > 0) {
			$nav[settings.location]($container);
			setupPositions();
			positionCheck();
		}
		else if ($container.length === 0) {
			console.log('Build failed, scrollNav could not find "' + $container.selector + '"');
		}
		else if ($sections.length === 0) {
			console.log('Build failed, scrollNav could not find any "' + settings.sections + '\'s inside of "' + $container.selector + '"');
		}

		// Add Scrolling //

		navScrolling();

		/* Animate Scrolling on click*/

		if (settings.animated) {
			$('.scroll-nav').find('a').on('click', function(e) {
				e.preventDefault();

				var elementClicked	= $(this).attr("href");
				var destination		= $(elementClicked).offset().top;

				$('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination - settings.scrollOffset }, settings.speed );
			});
		}

		/* End Animated Scrolling */

		// Remove loading hook and add a loaded hook to the body

		$('body').removeClass('sn-loading').addClass('sn-active');

	};
})(jQuery);
