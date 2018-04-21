import jestDomCustomMatchers from '@jarmee/jest-dom-custom-matchers';
import updateActiveNavItem from '../../../src/util/updateActiveNavItem';
import { onlyH2Data } from '../../fixtures/sectionData';
import { onlyH2Nav } from '../../fixtures/navMarkup';

expect.extend(jestDomCustomMatchers);

describe('updateActiveNavItem', () => {
  let nav;
  let items;

  beforeAll(() => {
    document.body.innerHTML = onlyH2Nav;
    nav = document.querySelector('nav');
    items = nav.querySelectorAll('li');
  });

  it('should add the active class and data attribute', () => {
    updateActiveNavItem(onlyH2Data[0], nav);

    expect(items[0]).toHaveClass('scroll-nav__item--active');
    expect(items[0]).toHaveAttribute('data-sn-active', true);
  });

  it('should remove the active class and data attribute', () => {
    items[0].classList.add('scroll-nav__item--active');
    items[0].setAttribute('data-sn-active', true);

    updateActiveNavItem(undefined, nav);

    expect(items[0]).not.toHaveClass('scroll-nav__item--active');
    expect(items[0]).not.toHaveAttribute('data-sn-active', true);
  });

  it('should switch the active class and data attributes', () => {
    items[0].classList.add('scroll-nav__item--active');
    items[0].setAttribute('data-sn-active', true);

    updateActiveNavItem(onlyH2Data[2], nav);

    expect(items[0]).not.toHaveClass('scroll-nav__item--active');
    expect(items[0]).not.toHaveAttribute('data-sn-active', true);
    expect(items[2]).toHaveClass('scroll-nav__item--active');
    expect(items[2]).toHaveAttribute('data-sn-active', true);
  });

  it('should do nothing if there is no previous active item', () => {
    updateActiveNavItem(undefined, nav);

    expect(items[0]).not.toHaveClass('scroll-nav__item--active');
    expect(items[0]).not.toHaveAttribute('data-sn-active', true);
    expect(items[2]).not.toHaveClass('scroll-nav__item--active');
    expect(items[2]).not.toHaveAttribute('data-sn-active', true);
  });

  it(`should do nothing if the previous active item is the same as the current
    active item`, () => {
    items[0].classList.add('scroll-nav__item--active');
    items[0].setAttribute('data-sn-active', true);

    updateActiveNavItem(onlyH2Data[0], nav);

    expect(items[0]).toHaveClass('scroll-nav__item--active');
    expect(items[0]).toHaveAttribute('data-sn-active', true);
  });
});
