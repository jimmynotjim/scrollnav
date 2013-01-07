(function($) {

	$.fn.sectionNav = function(options) {
		var settings = {
			sections: 'h3',
			titleText: 'Jump To',
			fixedMargin: 40
		};

		$.extend(settings, options);

		// Set the variables from our page elements

		var $sectionArray	= [];
		var $container		= this;
		var $sections		= $container.find(settings.sections);
		var $nav			= $('<nav />', {'class': 'section-nav'});

		// Find the article container and either grab it's id or give it one
		// Initial setup of the section array

		var setupContainer = function() {
			var containerID	= $container.attr('id');
			var offset		= $container.offset().top;

			if (containerID) {
				$sectionArray.push({id: containerID, offset: offset, text: 'Top'});
			}
			else {
				$container.attr('id', 'jumpNav-0');
				$sectionArray.push({id: 'jumpNav-0', offset: offset, text: 'Top'});
			}
		};

		// Find each section and give it an id
		// Add each section and it's details to the section array

		var setupSections = function() {
			$sections.each(function(i) {
				var sectionID	= 'jumpNav-' + (i + 1);
				var $offset		= $(this).offset().top;
				var $text		= $(this).html();

				$(this).attr('id', sectionID);
				$sectionArray.push( {id: sectionID, offset: $offset, text: $text} );
			});
		};

		// Populate the nav with a headline and ordered list from
		// the section array we built

		var setupNav = function() {
			var $headline	= $('<span />', {'class': 'section-heading', text: settings.titleText});
			var $list		= $('<ol />', {'class': 'section-list'});

			$.each($sectionArray, function(i) {
				var $item	= (i === 0) ? $('<li />', {'class': 'section-list-item active'}) : $('<li />', {'class': 'section-list-item'});
				var $link	= $('<a />', {'href': '#' + this.id, 'class': 'section-link', text: this.text});

				$list.append( $item.append($link) );
			});

			$nav.append($headline).append($list);
		};

		// Set nav to fixed after scrolling past the header and
		// add an active class to whichever section currently in
		// view when the user clicks or scrolls

		var navScrolling = function() {
			var navOffset = $nav.offset().top;

			// Set a resize listener to change the offset values

			$(window).resize(function() {
				$.each($sectionArray, function() {
					this.offset	= $('#' + this.id).offset().top;
				});
			});

			// Set a scroll listener to update the fixed and
			// active classes

			$(window).scroll(function() {
				var winTop		= $(window).scrollTop();
				var halfVP		= $(window).height() * 0.5;

				if( winTop > (navOffset - settings.fixedMargin) ) { $nav.addClass('fixed'); }
				else { $nav.removeClass('fixed'); }

				$.each($sectionArray, function() {
					if( this.offset > winTop - settings.fixedMargin &&  this.offset < (winTop + halfVP) ) {
						$nav.find('li').removeClass('active');
						$nav.find('a[href="#' + this.id + '"]').parents('li').addClass('active');
					}
				});
			});
		};

		// BUILD!!!!

		setupContainer();
		setupSections();
		setupNav();

		// Now add the nav to our page

		$nav.insertBefore($container);

		// Add Scrolling //

		navScrolling();

		/* Animate Scrolling on click*/

		$('.section-nav').find('a').click(function() {
			var elementClicked	= $(this).attr("href");
			var destination		= $(elementClicked).offset().top;

			$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-20 }, 500 );

			return false;
		});

		/* End Animated Scrolling */

	};
})(jQuery);
