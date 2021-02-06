(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.scrollnav = factory());
}(this, (function () {
  /* Borrowed from https://gist.github.com/cferdinandi/4f8a0e17921c5b46e6c4 */
  function extend(defaults, options) {
    var extended = {};
    var prop;

    for (prop in defaults) {
      if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
        extended[prop] = defaults[prop];
      }
    }

    for (prop in options) {
      if (Object.prototype.hasOwnProperty.call(options, prop)) {
        extended[prop] = options[prop];
      }
    }

    return extended;
  }

  function getOrSetID(elem, setID) {
    if (typeof elem !== 'object') {
      return Promise.reject(new Error('First argument must be an object'));
    }

    var id = elem.id;

    if (!id) {
      if (typeof setID !== 'string') {
        return Promise.reject(new Error('Second argument must be a string'));
      }

      id = setID;
      elem.id = id;
    }

    return id;
  }

  function getYPosition(elem, parent) {
    if (typeof elem !== 'object') {
      return Promise.reject(new Error('First argument must be an object'));
    }

    parent = parent || document.body;

    if (typeof parent !== 'object') {
      return Promise.reject(new Error('Second argument must be an object'));
    }

    var bodyRect = parent.getBoundingClientRect();
    var elemRect = elem.getBoundingClientRect();
    return elemRect.top - bodyRect.top;
  }

  /* Borrowed from https://github.com/cferdinandi/nextUntil */
  function nextUntil(elem, selector, filter) {
    var siblings = [];
    elem = elem.nextElementSibling;

    while (elem) {
      if (elem.matches(selector)) break;

      if (filter && !elem.matches(filter)) {
        elem = elem.nextElementSibling;
        continue;
      }

      siblings.push(elem);
      elem = elem.nextElementSibling;
    }

    return siblings;
  }

  function populateSectionData(sections, settings, prefix) {
    if (prefix === void 0) {
      prefix = 'scroll-nav';
    }

    var sectionData = [];
    prefix = prefix + '__';
    sections.forEach(function (elem, i) {
      var subSectionData = [];
      var id = getOrSetID(elem, prefix + (i + 1));

      if (settings.subSections && elem.matches(settings.sections)) {
        var subSectionDom = nextUntil(elem, settings.sections, settings.subSections);
        subSectionData = populateSectionData(subSectionDom, settings, id);
      }

      sectionData.push({
        id: id,
        text: elem.innerText || elem.textContent,
        offsetTop: getYPosition(elem),
        subSections: subSectionData
      });
    });
    return sectionData;
  }

  function createList(data, isSubList) {
    if (isSubList === void 0) {
      isSubList = false;
    }

    var suffix = isSubList ? '__sub-' : '__';
    var baseClass = 'scroll-nav' + suffix;
    var olElem = document.createElement('ol');
    olElem.classList.add(baseClass + 'list');
    data.forEach(function (item) {
      var liElem = document.createElement('li');
      liElem.classList.add(baseClass + 'item');
      liElem.setAttribute('data-sn-section', item.id);
      olElem.appendChild(liElem);
      var aElem = document.createElement('a');
      aElem.classList.add(baseClass + 'link');
      aElem.setAttribute('href', item.id);
      var linkText = document.createTextNode(item.text);
      aElem.appendChild(linkText);
      liElem.appendChild(aElem);
      var subList = createList(item.subSections, true);
      liElem.appendChild(subList);
    });
    return olElem;
  }

  function createNav(data) {
    var nav = document.createElement('nav');
    nav.className = 'scroll-nav';
    nav.appendChild(createList(data));
    return nav;
  }

  function insertNav(scrollnav) {
    var target = scrollnav.settings.insertTarget;
    var location = scrollnav.settings.insertLocation;

    if (location === 'append') {
      target.appendChild(scrollnav.nav);
    } else if (location === 'prepend') {
      target.insertBefore(scrollnav.nav, target.firstChild);
    } else if (location === 'before') {
      target.parentNode.insertBefore(scrollnav.nav, target);
    } else if (location === 'after') {
      target.parentNode.insertBefore(scrollnav.nav, target.nextSibling);
    }
  }

  function updatePositionData(data) {
    data.forEach(function (section) {
      var sectionDom = document.querySelector("#" + section.id);
      section.offsetTop = getYPosition(sectionDom);

      if (section.subSections.length) {
        section.subSections = updatePositionData(section.subSections);
      }
    });
    return data;
  }

  function insertVisualDebugger() {
    var snDebugger = document.createElement('div');
    snDebugger.className = 'snDebugger';
    snDebugger.setAttribute('style', "\n      position: fixed;\n      top: 40%;\n      height: 0px;\n      border-bottom:5px solid red;\n      border-top: 5px solid blue;\n      width: 100%;\n      opacity: .5;\n      pointer-events: none;\n    ");
    document.body.appendChild(snDebugger);
  }

  function getTargetYPosition(target, data) {
    var id = target.getAttribute('href');

    if (id.charAt(0) === '#') {
      id = id.substr(1);
    }

    var targetSection = filterData(data, id);
    return targetSection.offsetTop;
  }

  function filterData(data, id) {
    var targetSection;
    data.forEach(function (section) {
      if (section.id === id) {
        targetSection = section;
      }

      if (section.subSections && targetSection === undefined) {
        targetSection = filterData(section.subSections, id);
      }
    });
    return targetSection;
  }

  function calculateScrollDuration(distance) {
    var halfDistance = Math.abs(distance / 2);
    return Math.min(Math.max(halfDistance, 250), 1200);
  }

  /* Borrowed from https://gist.github.com/gre/1650294#gistcomment-1806616 */
  var easeIn = function easeIn(p) {
    return function (t) {
      return Math.pow(t, p);
    };
  };

  var easeOut = function easeOut(p) {
    return function (t) {
      return 1 - Math.abs(Math.pow(t - 1, p));
    };
  };

  var easeInOut = function easeInOut(p) {
    return function (t) {
      return t < 0.5 ? easeIn(p)(t * 2) / 2 : easeOut(p)(t * 2 - 1) / 2 + 0.5;
    };
  };

  var easing = {
    linear: easeInOut(1),
    easeInQuad: easeIn(2),
    easeOutQuad: easeOut(2),
    easeInOutQuad: easeInOut(2),
    easeInCubic: easeIn(3),
    easeOutCubic: easeOut(3),
    easeInOutCubic: easeInOut(3),
    easeInQuart: easeIn(4),
    easeOutQuart: easeOut(4),
    easeInOutQuart: easeInOut(4),
    easeInQuint: easeIn(5),
    easeOutQuint: easeOut(5),
    easeInOutQuint: easeInOut(5)
  };

  /* istanbul ignore next */

  function scrollTo(targetPosition, easingStyle) {
    return new Promise(function (resolve, reject) {
      if (typeof targetPosition !== 'number') {
        return reject(new Error('First argument must be a number'));
      }

      easingStyle = easingStyle || 'linear';

      if (typeof easingStyle !== 'string') {
        return reject(new Error('Second argument must be a string'));
      }

      var startingPosition = window.pageYOffset;
      var distance = targetPosition - startingPosition;
      var duration = calculateScrollDuration(distance);
      var framerate = 50;
      var increment = 1000 / framerate;
      var ellapsedTime = 0;
      var easedTime;
      var next;

      function animateScroll() {
        ellapsedTime += increment;
        easedTime = easing[easingStyle](ellapsedTime / duration);
        next = easedTime * distance + startingPosition;
        window.scroll(0, next);

        if (ellapsedTime < duration) {
          setTimeout(animateScroll, increment);
        } else {
          resolve(window.pageYOffset);
        }
      }

      animateScroll();
    });
  }

  function setupClickHandlers(scrollnav) {
    var settings = scrollnav.settings;

    function clickHandler(event) {
      event.preventDefault();
      var activeArea = window.innerHeight * 0.39;
      var targetYPosition = getTargetYPosition(event.target, scrollnav.data);
      var scrollYTarget = targetYPosition - activeArea;
      /* istanbul ignore next */

      return scrollTo(scrollYTarget, settings.easingStyle).then(function () {
        if (settings.updateHistory) {
          history.replaceState({}, '', event.target.getAttribute('href'));
        }

        if (settings.onScroll) {
          settings.onScroll();
        }
      });
    }

    var links = scrollnav.nav.querySelectorAll('a');
    links.forEach(function (link) {
      link.addEventListener('click', clickHandler);
    });
    return clickHandler;
  }

  function getActiveSection(data, boundryTop, boundryBottom) {
    var activeSection;
    data.forEach(function (section) {
      if (section.offsetTop > boundryBottom) {
        if (!activeSection && section.offsetTop < boundryTop) {
          activeSection = section;
        }
      } else {
        activeSection = section;
      }
    });

    if (activeSection && activeSection.subSections.length) {
      var activeSubSection;
      activeSubSection = getActiveSection(activeSection.subSections, boundryTop, boundryBottom);

      if (activeSubSection) {
        activeSection = activeSubSection;
      }
    }

    return activeSection;
  }

  function updateActiveNavItem(activeSection, nav) {
    var previousActive = nav.querySelector('[data-sn-active]');

    if (!activeSection) {
      if (previousActive) {
        previousActive.classList.remove('scroll-nav__item--active');
        previousActive.removeAttribute('data-sn-active');
      }

      return;
    }

    var newActive = nav.querySelector('[data-sn-section=' + activeSection.id + ']');

    if (newActive && newActive !== previousActive) {
      if (previousActive) {
        previousActive.classList.remove('scroll-nav__item--active');
        previousActive.removeAttribute('data-sn-active');
      }

      newActive.classList.add('scroll-nav__item--active');
      newActive.setAttribute('data-sn-active', true);
    }
  }

  function setupScrollHandler(scrollnav) {
    function scrollHandler() {
      var top = window.scrollY || window.pageYOffset || document.body.scrollTop;
      var boundryTop = top;
      var boundryBottom = top + window.innerHeight * 0.4;
      var activeSection = getActiveSection(scrollnav.data, boundryTop, boundryBottom);
      updateActiveNavItem(activeSection, scrollnav.nav);
      return activeSection;
    }

    window.addEventListener('scroll', scrollHandler);
    return scrollHandler;
  }

  function setupResizeHandler(scrollnav) {
    function resizeHandler() {
      scrollnav.data = updatePositionData(scrollnav.data);
    }

    window.addEventListener('resize', resizeHandler);
    return resizeHandler;
  }

  function teardownClickHandlers(nav, clickHandler) {
    var links = nav.querySelectorAll('a');
    links.forEach(function (link) {
      link.removeEventListener('click', clickHandler);
    });
  }

  function teardownScrollHandler(scrollHandler) {
    window.removeEventListener('scroll', scrollHandler);
  }

  function teardownResizelHandler(resizeHandler) {
    window.removeEventListener('resize', resizeHandler);
  }

  /*
   * scrollnav
   * http://scrollnav.com
   *
   * Copyright (c) 2013-2018 James Wilson
   * Licensed under the MIT license.
   */
  var clickHandler;
  var scrollHandler;
  var resizeHandler;

  function isElement(element) {
    return element instanceof Element;
  }

  function init(elem, options) {
    var defaults = {
      sections: 'h2',
      insertTarget: elem,
      insertLocation: 'before',
      easingStyle: 'easeOutQuad',
      updateHistory: true
    };
    this.settings = extend(defaults, options);
    var locationOptions = ['append', 'prepend', 'after', 'before'];

    if (!isElement(elem)) {
      if (this.settings.debug) {
        // eslint-disable-next-line no-console
        console.error("\n        scrollnav build failed, content argument \"" + elem + "\" is not an HTML Element\n      ");
      }

      return;
    }

    if (this.settings.insertTarget && !isElement(this.settings.insertTarget)) {
      if (this.settings.debug) {
        // eslint-disable-next-line no-console
        console.error("\n        scrollnav build failed, options.insertTarget \"" + elem + "\" is not an HTML Element\n      ");
      }

      return;
    }

    if (!locationOptions.includes(this.settings.insertLocation)) {
      if (this.settings.debug) {
        // eslint-disable-next-line no-console
        console.error("\n        scrollnav build failed, options.insertLocation \"" + this.settings.insertLocation + "\" is not a valid option\n      ");
      }

      return;
    }

    var sectionsDom = elem.querySelectorAll(this.settings.sections);

    if (!sectionsDom.length) {
      if (this.settings.debug) {
        // eslint-disable-next-line no-console
        console.error("\n        scrollnav build failed, could not find any \"" + this.settings.sections + "\"\n        elements inside of \"" + elem + "\"\n      ");
      }

      return;
    }

    this.data = populateSectionData(sectionsDom, this.settings);
    this.nav = createNav(this.data);
    insertNav(this);
    clickHandler = setupClickHandlers(this);
    scrollHandler = setupScrollHandler(this);
    resizeHandler = setupResizeHandler(this);
    if (this.settings.debug) insertVisualDebugger();
    if (this.settings.onInit) return this.settings.onInit();
  }

  function destroy(options) {
    this.settings = extend(this.settings, options);
    teardownClickHandlers(this.nav, clickHandler);
    teardownScrollHandler(scrollHandler);
    teardownResizelHandler(resizeHandler);
    this.nav.remove();
    if (this.settings.onDestroy) return this.settings.onDestroy();
  }

  function updatePositions(options) {
    this.settings = extend(this.settings, options);
    this.data = updatePositionData(this.data);
    if (this.settings.onUpdatePositions) return this.settings.onUpdatePositions();
  }

  var scrollnav = {
    init: init,
    destroy: destroy,
    updatePositions: updatePositions
  };

  return scrollnav;

})));
//# sourceMappingURL=scrollnav.min.umd.js.map
