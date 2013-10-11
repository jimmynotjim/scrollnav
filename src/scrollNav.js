/*
 * scrollNav
 * http://scrollnav.com
 *
 * Copyright (c) 2013 James Wilson
 * Licensed under the MIT license.
 */

(function($) {

  $.fn.scrollNav = function(options) {
    var settings = $.extend({
      sections: 'h2',
      subSections: false,
      sectionElem: 'section',
      showHeadline: true,
      headlineText: 'Scroll To',
      showTopLink: true,
      topLinkText: 'Top',
      fixedMargin: 40,
      scrollOffset: 40,
      animated: true,
      speed: 500,
      insertTarget: this.selector,
      insertLocation: 'insertBefore',
      arrowKeys: false
    }, options);

    // Set the variables from our page elements

    var viewPort;
    var navOffset;
    var topBoundry;
    var bottomBoundry;
    var sections      = [];
    var sectionArray  = [];
    var activeArray   = [];
    var $container    = this;
    var $insertTarget = $(settings.insertTarget);
    var $headline     = $('<span />', {'class': 'scroll-nav__heading', text: settings.headlineText});
    var $wrapper      = $('<div />', {'class': 'scroll-nav__wrapper'});
    var $nav          = $('<nav />', {'class': 'scroll-nav', 'role': 'navigation'});

    // Get url hash if one exists

    var getHash = function() {
      return window.location.hash;
    };

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
        var $firstElem = $container.children().first();
        if ( !$firstElem.is(settings.sections) ) {
          sections.push( $firstElem.nextUntil(settings.sections).andSelf() );
        }
      }

      $container.find(settings.sections).each(function() {
        sections.push( $(this).nextUntil(settings.sections).andSelf() );
      });
    };

    // Wrap each sectin and add it's details to the section array

    var setupSections = function() {
      $(sections).each(function(i) {
        var subArray      = [];
        var $thisSection  = $(this);
        var sectionID     = 'scrollNav-' + (i + 1);
        var offset        = $thisSection.offset().top;
        var isFirst       = function() { return i === 0; };
        var hasHeading    = function() { return !$thisSection.eq(0).is(settings.sections); };
        var text          = ( settings.showTopLink && isFirst() && hasHeading() ) ? settings.topLinkText : $thisSection.filter(settings.sections).text();

        if (settings.subSections) {
          var $subSections  = $thisSection.filter(settings.subSections);

          if ($subSections.length > 0) {
            $subSections.each(function(i) {
              var subID     = sectionID + '-' + (i + 1);
              var subOffset = $(this).offset().top;
              var subText   = $(this).text();
              var $thisSub  = $thisSection.filter($(this).nextUntil($subSections).andSelf());

              $thisSub.wrapAll('<div id="' + subID + '" class="scroll-nav__sub-section" />');
              subArray.push( {id: subID, offset: subOffset, text: subText} );
            });

            $thisSection = $(this).nextUntil(settings.sections).andSelf();
          }
        }

        $thisSection.wrapAll('<' + settings.sectionElem + ' id="' + sectionID + '" class="scroll-nav__section" />');
        sectionArray.push( {id: sectionID, offset: offset, text: text, subSections: subArray} );
      });
    };


    // Populate an ordered list from the section array we built

    var setupNav = function() {
      var $navList  = $('<ol />', {'class': 'scroll-nav__list'});

      $.each(sectionArray, function(i) {
        var $item     = (i === 0) ? $('<li />', {'class': 'scroll-nav__item active'}) : $('<li />', {'class': 'scroll-nav__item'});
        var $link     = $('<a />', {'href': '#' + this.id, 'class': 'scroll-nav__link', text: this.text});
        var $subNavList;

        if (this.subSections.length > 0) {
          $item.addClass('is-parent-item');
          $subNavList = $('<ol />', {'class': 'scroll-nav__sub-list'});

          $.each(this.subSections, function() {
            var $subItem = $('<li />', {'class': 'scroll-nav__sub-item'});
            var $subLink = $('<a />', {'href': '#' + this.id, 'class': 'scroll-nav__sub-link', text: this.text});

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
      $nav[settings.insertLocation]($insertTarget);
    };

    // Find the offset positions of each section

    var setupPositions = function() {
      viewPort  = $(window).height();
      navOffset = $nav.offset().top;

      $.each(sectionArray, function() {
        var $thisSection  = $('#' + this.id);
        var thisHeight    = $thisSection.height();
        this.topOffset    = $thisSection.offset().top;
        this.bottomOffset = this.topOffset + thisHeight;
      });
    };

    // Set nav to fixed after scrolling past the header and add an active
    // class to any sections currently within the bounds of our view

    var positionCheck = function() {
      var winTop          = $(window).scrollTop();
      topBoundry          = winTop + settings.scrollOffset;
      bottomBoundry       = winTop + viewPort - settings.scrollOffset;
      activeArray.length  = 0;

      if ( winTop > (navOffset - settings.fixedMargin) ) { $nav.addClass('fixed'); }
      else { $nav.removeClass('fixed'); }

      $.each(sectionArray, function() {
        if ( (this.topOffset > topBoundry && this.topOffset < bottomBoundry) || (this.bottomOffset > topBoundry && this.bottomOffset < bottomBoundry) || (this.topOffset < topBoundry && this.bottomOffset > bottomBoundry) ) {
          activeArray.push(this);
        }
      });

      $nav.find('.scroll-nav__item').removeClass('active').removeClass('in-view');

      $.each(activeArray, function(i) {
        if (i === 0) {
          $nav.find('a[href="#' + this.id + '"]').parents('.scroll-nav__item').addClass('active').addClass('in-view');
        } else {
          $nav.find('a[href="#' + this.id + '"]').parents('.scroll-nav__item').addClass('in-view');
        }
        i++;
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

    // Animate scrolling to hash

    var scrollToSection = function(value) {
      if ( $(value).length > 0 ) {
        var destination = $(value).offset().top;
        var speed = (settings.animated) ? settings.speed : 0;

        $('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination - settings.scrollOffset }, speed );
      }
    };

    // Scroll to section on click

    var initiateClickListeners = function() {
      $('.scroll-nav').find('a').click(function(e) {
        e.preventDefault();

        scrollToSection( $(this).attr('href') );
      });
    };

    // Scroll to section on arrow key press

    var initiateKeyboardListeners = function() {
      if (settings.arrowKeys) {
        $(document).keydown(function(e) {
          if (e.keyCode === 40 || e.keyCode === 38) {
            var findSection = function(key) {
              var i = 0;
              var l = sectionArray.length;

              for (i; i < l; i++) {
                if (sectionArray[i].id === activeArray[0].id) {
                  var offsetArray   = (key === 40) ? i + 1 : i -1;
                  var $id           = (sectionArray[offsetArray] === undefined) ? undefined : sectionArray[offsetArray].id;

                  return $id;
                }
              }
            };
            var targetSection = findSection(e.keyCode);

            if (targetSection !== undefined) {
              e.preventDefault();

              scrollToSection( '#' + targetSection );
            }
          }
        });
      }
    };

    // Scroll to section if url has hash

    var scrollToHash = function(value) {
      if (value && $(value).length > 0) {
        var position = $(value).offset().top;

        if ( position < topBoundry || position > bottomBoundry ) {
          scrollToSection(value);
        }
      }
    };

    if ($container.length > 0) {
      // Initialize

      addLoadingClass();
      findSections();

      if ($container.find(settings.sections).length > 0) {
        // BUILD!!!!

        setupSections();
        setupNav();

        if ($insertTarget.length > 0) {
          //Add to page

          insertNav();
          setupPositions();
          positionCheck();
          navScrolling();
          initiateClickListeners();
          initiateKeyboardListeners();
          swapLoadingClass(true);
          scrollToHash( getHash() );
        } else {
          console.log('Build failed, scrollNav could not find "' + settings.insertTarget + '"');
          swapLoadingClass(false);
        }

      } else {
        console.log('Build failed, scrollNav could not find any "' + settings.sections + 's" inside of "' + $container.selector + '"');
        swapLoadingClass(false);
      }

    } else {
      console.log('Build failed, scrollNav could not find "' + $container.selector + '"');
      swapLoadingClass(false);
    }

    return this;
  };
})(jQuery);
