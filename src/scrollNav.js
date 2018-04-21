/*
 * scrollNav
 * http://scrollnav.com
 *
 * Copyright (c) 2013-2018 James Wilson
 * Licensed under the MIT license.
 */

import extend from './util/extend';
import populateSectionData from './util/populateSectionData';
import createNav from './util/createNav';
import insertNav from './util/insertNav';
import setupClickHandlers from './setupClickHandlers';
import setupScrollHandler from './setupScrollHandler';
import setupResizeHandler from './setupResizeHandler';
import teardownClickHandlers from './teardownClickHandlers';
import teardownScrollHandler from './teardownScrollHandler';
import teardownResizeHandler from './teardownResizeHandler';

let clickHandler;
let scrollHandler;
let resizeHandler;

// matches() polyfill
/* istanbul ignore next */
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}

function isElement(element) {
  return element instanceof Element;
}

function init(elem, options) {
  const defaults = {
    sections: 'h2',
    insertTarget: elem,
    insertLocation: 'before'
  };
  const settings = extend(defaults, options);
  const locationOptions = ['append', 'prepend', 'after', 'before'];

  if (!isElement(elem)) {
    if (settings.debug) {
      console.error(`
        scrollNav build failed, content argument "${elem}" is not an HTML Element
      `);
    }
    return;
  }

  if (settings.insertTarget && !isElement(settings.insertTarget)) {
    if (settings.debug) {
      console.error(`
        scrollNav build failed, options.insertTarget "${elem}" is not an HTML Element
      `);
    }
    return;
  }

  if (locationOptions.indexOf(settings.insertLocation) < 1) {
    if (settings.debug) {
      console.error(`
        scrollNav build failed, options.insertLocation "${
          settings.insertLocation
        }" is not a valid option
      `);
    }
    return;
  }

  const sectionsDom = elem.querySelectorAll(settings.sections);

  if (!sectionsDom.length) {
    if (settings.debug) {
      console.error(`
        scrollNav build failed, could not find any "${settings.sections}"
        elements inside of "${elem}"
      `);
    }
    return;
  }

  this.data = populateSectionData(sectionsDom, 'scroll-nav', settings);
  const nav = createNav(this.data, 'scroll-nav', settings);

  insertNav(nav, settings);
  clickHandler = setupClickHandlers(nav.querySelectorAll('a'), this.data);
  scrollHandler = setupScrollHandler(this.data, nav);
  resizeHandler = setupResizeHandler(this);

  if (settings.onInit) return settings.onInit();
}

function destroy(options) {
  const defaults = {};
  const settings = extend(defaults, options);
  const nav = document.querySelector('.scroll-nav');

  teardownClickHandlers(nav, clickHandler);
  teardownScrollHandler(scrollHandler);
  teardownResizeHandler(resizeHandler);
  nav.remove();

  if (settings.onDestroy) return settings.onDestroy();
}

const scrollNav = {
  init: init,
  destroy: destroy
};

export default scrollNav;
