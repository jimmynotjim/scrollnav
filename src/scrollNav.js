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
import setupClickHandlers from './setupClickHandlers';
import setupScrollHandler from './setupScrollHandler';
import teardownClickHandlers from './teardownClickHandlers';
import teardownScrollHandler from './teardownScrollHandler';

let clickHandler;
let scrollHandler;

// matches() polyfill
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
    sections: 'h2'
  };
  const settings = extend(defaults, options);

  if (!isElement(elem)) {
    if (settings.debug) {
      console.error(`
        scrollNav build failed, content argument "${elem}" is not an HTML Element
      `);
    }
    return;
  }

  const allSections = elem.querySelectorAll(settings.sections);

  if (!allSections.length) {
    if (settings.debug) {
      console.error(`
        scrollNav build failed, could not find any "${settings.sections}"
        elements inside of "${elem}"
      `);
    }
    return;
  }

  if (settings.insertTarget && !isElement(settings.insertTarget)) {
    if (settings.debug) {
      console.error(`
        scrollNav build failed, option.insertTarget "${elem}" is not an HTML Element
      `);
    }
    return;
  }

  const data = populateSectionData(allSections, 'scroll-nav');
  const nav = createNav(data, 'scroll-nav', elem);

  clickHandler = setupClickHandlers(nav.querySelectorAll('a'), data);
  scrollHandler = setupScrollHandler(data, nav);

  if (settings.onInit) return settings.onInit();
}

function destroy(options) {
  const defaults = {};
  const settings = extend(defaults, options);
  const nav = document.querySelector('.scroll-nav');

  teardownClickHandlers(nav, clickHandler);
  teardownScrollHandler(scrollHandler);
  nav.remove();

  if (settings.onDestroy) return settings.onDestroy();
}

const scrollNav = {
  init: init,
  destroy: destroy
};

export default scrollNav;
