import jestDomCustomMatchers from '@jarmee/jest-dom-custom-matchers';
import setupScrollHandler from '../../src/setupScrollHandler';
import teardownScrollHandler from '../../src/teardownScrollHandler';
import { onlyH2Data } from '../fixtures/sectionData';
import { html as sectionMarkup } from '../fixtures/sectionMarkup';
import { html as navMarkup } from '../fixtures/navMarkup';
import simulateEvent from '../util/simulateEvent';

expect.extend(jestDomCustomMatchers);

describe(setupScrollHandler, function() {
  document.body.innerHTML = navMarkup + sectionMarkup;
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

  it('should not activate the first item if it is within the boundry', () => {
    window.innerHeight = 340;
    const items = nav.querySelectorAll('li');
    const scrollHandler = setupScrollHandler(onlyH2Data, nav);

    teardownScrollHandler(scrollHandler);
    simulateEvent('scroll', window);

    expect(items[0]).not.toHaveClass('scroll-nav__item--active');
    expect(items[0]).not.toHaveAttribute('data-sn-active');
  });

  it('should not activate the second item and or the first if they are both within the boundry', () => {
    window.innerHeight = 500;
    const items = nav.querySelectorAll('li');
    const scrollHandler = setupScrollHandler(onlyH2Data, nav);

    teardownScrollHandler(scrollHandler);
    simulateEvent('scroll', window);

    expect(items[0]).not.toHaveClass('scroll-nav__item--active');
    expect(items[0]).not.toHaveAttribute('data-sn-active');
    expect(items[1]).not.toHaveClass('scroll-nav__item--active');
    expect(items[1]).not.toHaveAttribute('data-sn-active');
  });
});
