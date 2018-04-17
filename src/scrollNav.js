/*
 * scrollNav
 * http://scrollnav.com
 *
 * Copyright (c) 2013-2018 James Wilson
 * Licensed under the MIT license.
 */

import populateSectionData from './util/populateSectionData';
import createNav from './util/createNav';
import setupClickHandlers from './setupClickHandlers';
import setupScrollHandler from './setupScrollHandler';
import teardownClickHandlers from './teardownClickHandlers';
import teardownScrollHandler from './teardownScrollHandler';

let clickHandler;
let scrollHandler;

function init(content, cb) {
  const allSections = content.querySelectorAll('h2');
  const data = populateSectionData(allSections, 'scroll-nav');
  const nav = createNav(data, 'scroll-nav', content);

  clickHandler = setupClickHandlers(nav.querySelectorAll('a'), data);
  scrollHandler = setupScrollHandler(data, nav);

  if (cb) return cb();
}

function destroy(cb) {
  const nav = document.querySelector('.scroll-nav');

  teardownClickHandlers(nav, clickHandler);
  teardownScrollHandler(scrollHandler);
  nav.remove();

  if (cb) return cb();
}

const scrollNav = {
  init: init,
  destroy: destroy
};

export default scrollNav;
