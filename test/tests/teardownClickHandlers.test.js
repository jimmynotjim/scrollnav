import setupClickHandlers from '../../src/setupClickHandlers';
import teardownClickHandlers from '../../src/teardownClickHandlers';
import { onlyH2Data } from '../fixtures/sectionData';
import { onlyH2Nav } from '../fixtures/navMarkup';
import simulateEvent from '../util/simulateEvent';

describe('teardownClickHandlers', () => {
  let nav;
  let links;

  beforeAll(() => {
    document.body.innerHTML = onlyH2Nav;
    nav = document.querySelector('nav');
    links = nav.querySelectorAll('a');
  });

  it('should not trigger a callback after click', () => {
    expect.assertions(1);

    const callback = jest.fn();
    const scrollnav = {
      data: onlyH2Data,
      nav: nav,
      settings: {
        onScroll: callback
      }
    };
    const clickHandler = setupClickHandlers(scrollnav);

    teardownClickHandlers(nav, clickHandler);
    simulateEvent('click', links[0]);

    expect(callback).not.toBeCalled();
  });
});
