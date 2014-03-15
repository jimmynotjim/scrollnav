/*! scrollNav - v2.2.0 - 2014-03-14
* http://scrollnav.com
* Copyright (c) 2014 James Wilson; Licensed MIT */
(function($) {

  // Animate scrolling to section location
  var scroll_to = function(value, speed, offset, animated) {
    if ( $(value).length > 0 ) {
      var destination = $(value).offset().top;
      speed = animated ? speed : 0;

      $('html:not(:animated),body:not(:animated)')
        .animate({scrollTop: destination - offset }, speed );
    }
  };

  // Get url hash if one exists
  var get_hash = function() {
    return window.location.hash;
  };

  var S = {
    classes: {
      loading: 'sn-loading',
      failed: 'sn-failed',
      success: 'sn-active'
    },
    defaults: {
      sections: 'h2',
      subSections: false,
      sectionElem: 'section',
      className: 'scroll-nav',
      showHeadline: true,
      headlineText: 'Scroll To',
      showTopLink: true,
      topLinkText: 'Top',
      fixedMargin: 40,
      scrollOffset: 40,
      animated: true,
      speed: 500,
      insertLocation: 'insertBefore',
      arrowKeys: false,
      onInit: null,
      onRender: null,
      onDestroy: null
    },
    _set_body_class: function(state) {
      // Set and swap our loading hooks to the body

      var $body = $('body');

      if (state === 'loading') {
        $body.addClass(S.classes.loading);
      } else if (state === 'success') {
        $body.removeClass(S.classes.loading).addClass(S.classes.success);
      } else {
        $body.removeClass(S.classes.loading).addClass(S.classes.failed);
      }
    },
    _find_sections: function($el) {
      // Find the html for each section

      var target_elems = S.settings.sections;
      var raw_html = [];

      if (S.settings.showTopLink) {
        var $firstElem = $el.children().first();

        if ( !$firstElem.is(target_elems) ) {
          raw_html.push( $firstElem.nextUntil(target_elems).andSelf() );
        }
      }

      $el.find(target_elems).each(function() {
        raw_html.push( $(this).nextUntil(target_elems).andSelf() );
      });

      S.sections = {
        raw: raw_html
      };
    },
    _setup_sections: function(sections) {
      // Wrap each section and add it's details to the section array

      var section_data = [];

      $(sections).each(function(i) {
        var sub_data      = [];
        var $this_section = $(this);
        var section_id    = 'scrollNav-' + (i + 1);
        var isFirst       = function() { return i === 0; };
        var hasHeading    = function() { return !$this_section.eq(0).is(S.settings.sections); };
        var text          = ( S.settings.showTopLink && isFirst() && hasHeading() ) ? S.settings.topLinkText : $this_section.filter(S.settings.sections).text();

        $this_section.wrapAll('<' + S.settings.sectionElem + ' id="' + section_id + '" class="' + S.settings.className + '__section" />');

        if (S.settings.subSections) {
          var $sub_sections  = $this_section.filter(S.settings.subSections);

          if ($sub_sections.length > 0) {
            $sub_sections.each(function(i) {
              var sub_id      = section_id + '-' + (i + 1);
              var sub_text    = $(this).text();
              var $this_sub   = $this_section.filter($(this).nextUntil($sub_sections).andSelf());

              $this_sub.wrapAll('<div id="' + sub_id + '" class="' + S.settings.className + '__sub-section" />');
              sub_data.push( {id: sub_id, text: sub_text} );
            });
          }
        }

        section_data.push( {id: section_id, text: text, sub_sections: sub_data} );
      });

      S.sections.data = section_data;
    },
    _tear_down_sections: function(sections) {
      $(sections).each(function() {
        var sub_sections = this.sub_sections;

        $('#' + this.id).children().unwrap();

        if (sub_sections.length > 0) {
          $(sub_sections).each(function() {
            $('#' + this.id).children().unwrap();
          });
        }
      });
    },
    _setup_nav: function(sections) {
    // Populate an ordered list from the section array we built

      var $headline = $('<span />', {'class': S.settings.className + '__heading', text: S.settings.headlineText});
      var $wrapper  = $('<div />', {'class': S.settings.className + '__wrapper'});
      var $nav      = $('<nav />', {'class': S.settings.className, 'role': 'navigation'});
      var $nav_list = $('<ol />', {'class': S.settings.className + '__list'});

      $.each(sections, function(i) {
        var $item     = (i === 0) ? $('<li />', {'class': S.settings.className + '__item active'}) : $('<li />', {'class': S.settings.className + '__item'});
        var $link     = $('<a />', {'href': '#' + this.id, 'class': S.settings.className + '__link', text: this.text});
        var $sub_nav_list;

        if (this.sub_sections.length > 0) {
          $item.addClass('is-parent-item');
          $sub_nav_list = $('<ol />', {'class': S.settings.className + '__sub-list'});

          $.each(this.sub_sections, function() {
            var $sub_item = $('<li />', {'class': S.settings.className + '__sub-item'});
            var $sub_link = $('<a />', {'href': '#' + this.id, 'class': S.settings.className + '__sub-link', text: this.text});

            $sub_nav_list.append( $sub_item.append($sub_link) );
          });
        }

        $nav_list.append( $item.append($link).append($sub_nav_list) );
      });

      if (S.settings.showHeadline) {
        $nav.append( $wrapper.append($headline).append($nav_list) );
      } else {
        $nav.append( $wrapper.append($nav_list) );
      }

      S.nav = $nav;
    },
    _insert_nav: function() {
      // Add the nav to our page

      var insert_location = S.settings.insertLocation;
      var $insert_target = S.settings.insertTarget;

      S.nav[insert_location]($insert_target);
    },
    _setup_pos: function() {
      // Find the offset positions of each section

      var $nav = S.nav;
      var vp_height  = $(window).height();
      var nav_offset = $nav.offset().top;

      $.each(S.sections.data, function() {
        var $this_section  = $('#' + this.id);
        var this_height    = $this_section.height();

        this.top_offset    = $this_section.offset().top;
        this.bottom_offset = this.top_offset + this_height;
      });

      S.dims = {
        vp_height: vp_height,
        nav_offset: nav_offset
      };
    },
    _check_pos: function() {
      // Set nav to fixed after scrolling past the header and add an active class to any
      // sections currently within the bounds of our view

      var $nav            = S.nav;
      var win_top         = $(window).scrollTop();
      var boundry_top     = win_top + S.settings.scrollOffset;
      var boundry_bottom  = win_top + S.dims.vp_height - S.settings.scrollOffset;
      var sections_active = [];

      if ( win_top > (S.dims.nav_offset - S.settings.fixedMargin) ) { $nav.addClass('fixed'); }
      else { $nav.removeClass('fixed'); }

      $.each(S.sections.data, function() {
        if ( (this.top_offset > boundry_top && this.top_offset < boundry_bottom) || (this.bottom_offset > boundry_top && this.bottom_offset < boundry_bottom) || (this.top_offset < boundry_top && this.bottom_offset > boundry_bottom) ) {
          sections_active.push(this);
        }
      });

      $nav.find('.' + S.settings.className + '__item').removeClass('active').removeClass('in-view');

      $.each(sections_active, function(i) {
        if (i === 0) {
          $nav.find('a[href="#' + this.id + '"]').parents('.' + S.settings.className + '__item').addClass('active').addClass('in-view');
        } else {
          $nav.find('a[href="#' + this.id + '"]').parents('.' + S.settings.className + '__item').addClass('in-view');
        }
        i++;

        S.sections.active = sections_active;
      });
    },
    _init_scroll_listener: function() {
      // Set a scroll listener to update the fixed and active classes

      $(window).on('scroll.scrollNav', function() {
        S._check_pos();
      });
    },
    _rm_scroll_listeners: function() {
      $(window).off('scroll.scrollNav');
    },
    _init_resize_listener: function() {
      // Set a resize listener to update position values and the fixed and active classes

      $(window).on('resize.scrollNav', function() {
        S._setup_pos();
        S._check_pos();
      });
    },
    _rm_resize_listener: function() {
      $(window).off('resize.scrollNav');
    },
    _init_click_listener: function() {
      // Scroll to section on click

      $('.' + S.settings.className).find('a').on('click.scrollNav', function(e) {
        e.preventDefault();

        var value     = $(this).attr('href');
        var speed     = S.settings.speed;
        var offset    = S.settings.scrollOffset;
        var animated  = S.settings.animated;

        scroll_to(value, speed, offset, animated);
      });
    },
    _rm_click_listener: function() {
      $('.' + S.settings.className).find('a').off('click.scrollNav');
    },
    _init_keyboard_listener: function(sections) {
      // Scroll to section on arrow key press

      if (S.settings.arrowKeys) {
        $(document).on('keydown.scrollNav', function(e) {
          if (e.keyCode === 40 || e.keyCode === 38) {
            var findSection = function(key) {
              var i = 0;
              var l = sections.length;

              for (i; i < l; i++) {
                if (sections[i].id === S.sections.active[0].id) {
                  var array_offset  = (key === 40) ? i + 1 : i -1;
                  var id            = (sections[array_offset] === undefined) ? undefined : sections[array_offset].id;

                  return id;
                }
              }
            };

            var target_section = findSection(e.keyCode);

            if (target_section !== undefined) {
              e.preventDefault();

              var value     = '#' + target_section;
              var speed     = S.settings.speed;
              var offset    = S.settings.scrollOffset;
              var animated  = S.settings.animated;

              scroll_to(value, speed, offset, animated);
            }
          }
        });
      }
    },
    _rm_keyboard_listener: function() {
      $(document).off('keydown.scrollNav');
    },
    init: function(options) {
      return this.each(function() {
        var $el = $(this);

        // Merge default settings with user defined options
        S.settings = $.extend({}, S.defaults, options);

        // If the insert target isn't set, use the initialized element
        S.settings.insertTarget = S.settings.insertTarget ? $(S.settings.insertTarget) : $el;

        if ($el.length > 0) {
          // Initialize

          // Fire custom init callback
          if (S.settings.onInit) { S.settings.onInit.call(this); }

          S._set_body_class('loading');
          S._find_sections($el);

          if ( $el.find(S.settings.sections).length > 0 ) {
            // BUILD!!!!

            S._setup_sections(S.sections.raw);
            S._setup_nav(S.sections.data);

            if ( S.settings.insertTarget.length > 0 ) {
              //Add to page

              S._insert_nav();
              S._setup_pos();
              S._check_pos();
              S._init_scroll_listener();
              S._init_resize_listener();
              S._init_click_listener();
              S._init_keyboard_listener(S.sections.data);
              S._set_body_class('success');
              scroll_to( get_hash() );

              // Fire custom render callback
              if (S.settings.onRender) { S.settings.onRender.call(this); }

            } else {
              console.log('Build failed, scrollNav could not find "' + S.settings.insertTarget + '"');
              S._set_body_class('failed');
            }

          } else {
            console.log('Build failed, scrollNav could not find any "' + S.settings.sections + 's" inside of "' + $el.selector + '"');
            S._set_body_class('failed');
          }

        } else {
          console.log('Build failed, scrollNav could not find "' + $el.selector + '"');
          S._set_body_class('failed');
        }
      });
    },
    destroy: function() {
      return this.each(function() {

        // Unbind event listeners
        S._rm_scroll_listeners();
        S._rm_resize_listener();
        S._rm_click_listener();
        S._rm_keyboard_listener();

        // Remove any of the loading hooks
        $('body').removeClass('sn-loading sn-active sn-failed');

        // Remove the nav from the dom
        $('.' + S.settings.className).remove();

        // Teardown sections
        S._tear_down_sections(S.sections.data);

        // Fire custom destroy callback
        if (S.settings.onDestroy) { S.settings.onDestroy.call(this); }

        // Remove the saved settings
        S.settings = [];
        S.sections = undefined;
      });
    }
  };

  $.fn.scrollNav = function() {
    var options;
    var method  = arguments[0];

    if (S[method]) {
      // Method exists, so use it

      method  = S[method];
      options = Array.prototype.slice.call(arguments, 1);
    } else if (typeof(method) === 'object' || !method) {
      // No method passed, default to init

      method  = S.init;
      options = arguments;
    } else {
      // Method doesn't exist

      $.error( 'Method ' +  method + ' does not exist in the scrollNav plugin' );
      return this;
    }

    return method.apply(this, options);
  };
})(jQuery);
