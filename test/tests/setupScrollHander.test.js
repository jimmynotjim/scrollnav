import jestDomCustomMatchers from '@jarmee/jest-dom-custom-matchers';
import setupScrollHandler from '../../src/setupScrollHandler';
import { onlyH2Data } from '../fixtures/sectionData';
import { html as sectionMarkup } from '../fixtures/sectionMarkup';
import { onlyH2Nav } from '../fixtures/navMarkup';
import simulateEvent from '../util/simulateEvent';

expect.extend(jestDomCustomMatchers);

describe(setupScrollHandler, function() {
  let nav;
  let items;
  let scrollNav;

  beforeEach(() => {
    document.body.innerHTML = onlyH2Nav + sectionMarkup;
    nav = document.querySelector('nav');
    items = nav.querySelectorAll('li');
    scrollNav = {
      data: onlyH2Data,
      nav: nav
    };
  });

  it('should not activate any items on load', () => {
    window.innerHeight = 28;

    setupScrollHandler(scrollNav);

    expect(items[0]).not.toHaveClass('scroll-nav__item--active');
    expect(items[0]).not.toHaveAttribute('data-sn-active');
  });

  it('should activate the first item if it is within the boundry', () => {
    window.innerHeight = 340;

    setupScrollHandler(scrollNav);
    simulateEvent('scroll', window);

    expect(items[0]).toHaveClass('scroll-nav__item--active');
    expect(items[0]).toHaveAttribute('data-sn-active');
  });

  it('should activate the second item and not the first if they are both within the boundry', () => {
    window.innerHeight = 625;

    setupScrollHandler(scrollNav);
    simulateEvent('scroll', window);

    expect(items[0]).not.toHaveClass('scroll-nav__item--active');
    expect(items[0]).not.toHaveAttribute('data-sn-active');
    expect(items[1]).toHaveClass('scroll-nav__item--active');
    expect(items[1]).toHaveAttribute('data-sn-active');
  });
});
