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

const scrollNav = {
  init(content, cb) {
    const allSections = content.querySelectorAll('h2');
    const data = populateSectionData(allSections, 'scroll-nav');
    const nav = createNav(data, 'scroll-nav', content);

    setupClickHandlers(nav.querySelectorAll('a'), data);
    setupScrollHandler(data, nav);

    if (cb) return cb();
  }
};

export default scrollNav;
