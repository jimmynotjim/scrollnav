import setupClickHandlers from '../../src/setupClickHandlers';
import { onlyH2Data, allData } from '../fixtures/sectionData';
import { onlyH2Nav, allNav } from '../fixtures/navMarkup';
import simulateEvent from '../util/simulateEvent';

describe('setupClickHandlers', () => {
  it('should trigger a callback after scrolling to a section', () => {
    expect.assertions(1);

    const callback = jest.fn();
    document.body.innerHTML = onlyH2Nav;
    const nav = document.querySelector('nav');
    const links = nav.querySelectorAll('a');
    const scrollNav = {
      data: onlyH2Data,
      nav: document.querySelector('nav'),
      settings: {
        onScroll: callback
      }
    };

    setupClickHandlers(scrollNav);
    simulateEvent('click', links[0]);

    expect(callback).toBeCalled();
  });

  it('should trigger a callback after scrolling to a sub-section', () => {
    expect.assertions(1);

    const callback = jest.fn();
    document.body.innerHTML = allNav;
    const nav = document.querySelector('nav');
    const links = nav.querySelectorAll('a');
    const scrollNav = {
      data: allData,
      nav: nav,
      settings: {
        onScroll: callback
      }
    };

    setupClickHandlers(scrollNav);
    simulateEvent('click', links[2]);

    expect(callback).toBeCalled();
  });
});
