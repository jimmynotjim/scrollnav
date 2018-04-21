import setupClickHandlers from '../../src/setupClickHandlers';
import teardownClickHandlers from '../../src/teardownClickHandlers';
import { onlyH2Data } from '../fixtures/sectionData';
import { onlyH2Nav } from '../fixtures/navMarkup';
import simulateEvent from '../util/simulateEvent';

describe('teardownClickHandlers', () => {
  document.body.innerHTML = onlyH2Nav;

  it('should not trigger a callback after click', async () => {
    expect.assertions(1);

    const callback = jest.fn();
    const nav = document.querySelector('nav');
    const links = nav.querySelectorAll('a');
    const scrollNav = {
      data: onlyH2Data,
      nav: nav,
      settings: {
        onScroll: callback
      }
    };
    const clickHandler = setupClickHandlers(scrollNav);

    teardownClickHandlers(nav, clickHandler);
    await simulateEvent('click', links[0]);

    expect(callback).not.toBeCalled();
  });
});
