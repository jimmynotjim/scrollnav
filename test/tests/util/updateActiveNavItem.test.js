import jestDomCustomMatchers from '@jarmee/jest-dom-custom-matchers';
import updateActiveNavItem from '../../../src/util/updateActiveNavItem';
import { onlyH2Data } from '../../fixtures/sectionData';
import { onlyH2Nav } from '../../fixtures/navMarkup';

expect.extend(jestDomCustomMatchers);

describe('updateActiveNavItem', () => {
  document.body.innerHTML = onlyH2Nav;

  it('should add the active class and data attribute', () => {
    const nav = document.querySelector('nav');
    const items = nav.querySelectorAll('li');

    updateActiveNavItem(onlyH2Data[0], nav);

    expect(items[0]).toHaveClass('scroll-nav__item--active');
    expect(items[0]).toHaveAttribute('data-sn-active', true);
  });

  it('should remove the active class and data attribute', () => {
    const nav = document.querySelector('nav');
    const items = nav.querySelectorAll('li');

    items[0].classList.add('scroll-nav__item--active');
    items[0].setAttribute('data-sn-active', true);

    updateActiveNavItem(undefined, nav);

    expect(items[0]).not.toHaveClass('scroll-nav__item--active');
    expect(items[0]).not.toHaveAttribute('data-sn-active', true);
  });

  it('should switch the active class and data attributes', () => {
    const nav = document.querySelector('nav');
    const items = nav.querySelectorAll('li');

    items[0].classList.add('scroll-nav__item--active');
    items[0].setAttribute('data-sn-active', true);

    updateActiveNavItem(onlyH2Data[2], nav);

    expect(items[0]).not.toHaveClass('scroll-nav__item--active');
    expect(items[0]).not.toHaveAttribute('data-sn-active', true);
    expect(items[2]).toHaveClass('scroll-nav__item--active');
    expect(items[2]).toHaveAttribute('data-sn-active', true);
  });

  it('should do nothing if there is no previous active item', () => {
    const nav = document.querySelector('nav');
    const items = nav.querySelectorAll('li');

    updateActiveNavItem(undefined, nav);

    expect(items[0]).not.toHaveClass('scroll-nav__item--active');
    expect(items[0]).not.toHaveAttribute('data-sn-active', true);
    expect(items[2]).not.toHaveClass('scroll-nav__item--active');
    expect(items[2]).not.toHaveAttribute('data-sn-active', true);
  });

  it(`should do nothing if the previous active item is the same as the current
    active item`, () => {
    const nav = document.querySelector('nav');
    const items = nav.querySelectorAll('li');

    items[0].classList.add('scroll-nav__item--active');
    items[0].setAttribute('data-sn-active', true);

    updateActiveNavItem(onlyH2Data[0], nav);

    expect(items[0]).toHaveClass('scroll-nav__item--active');
    expect(items[0]).toHaveAttribute('data-sn-active', true);
  });
});
