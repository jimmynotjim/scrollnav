import jestDomCustomMatchers from '@jarmee/jest-dom-custom-matchers';
import setupScrollHandler from '../../src/setupScrollHandler';
import { onlyH2Data } from '../fixtures/sectionData';
import { html as sectionMarkup } from '../fixtures/sectionMarkup';
import { onlyH2Nav } from '../fixtures/navMarkup';
import simulateEvent from '../util/simulateEvent';

expect.extend(jestDomCustomMatchers);

describe(setupScrollHandler, function() {
  document.body.innerHTML = onlyH2Nav + sectionMarkup;
  const nav = document.querySelector('nav');

  beforeAll(() => {
    document.body.getBoundingClientRect = () => {
      return {
        bottom: 1000,
        height: 1000,
        left: 0,
        right: 800,
        top: 0,
        width: 800
      };
    };
  });

  it('should not activate any items on load', () => {
    window.innerHeight = 28;
    const items = nav.querySelectorAll('li');

    setupScrollHandler(onlyH2Data, nav);
    expect(items[0]).not.toHaveClass('scroll-nav__item--active');
    expect(items[0]).not.toHaveAttribute('data-sn-active');
  });

  it('should activate the first item if it is within the boundry', () => {
    window.innerHeight = 340;
    const items = nav.querySelectorAll('li');

    setupScrollHandler(onlyH2Data, nav);
    simulateEvent('scroll', window);

    expect(items[0]).toHaveClass('scroll-nav__item--active');
    expect(items[0]).toHaveAttribute('data-sn-active');
  });

  it('should activate the second item and not the first if they are both within the boundry', () => {
    window.innerHeight = 500;
    const items = nav.querySelectorAll('li');

    setupScrollHandler(onlyH2Data, nav);
    simulateEvent('scroll', window);

    expect(items[0]).not.toHaveClass('scroll-nav__item--active');
    expect(items[0]).not.toHaveAttribute('data-sn-active');
    expect(items[1]).toHaveClass('scroll-nav__item--active');
    expect(items[1]).toHaveAttribute('data-sn-active');
  });
});
