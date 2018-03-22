import setupClickHandlers from '../../src/setupClickHandlers';
import { onlyH2Data, allData } from '../fixtures/sectionData';
import { onlyH2Nav, allNav } from '../fixtures/navMarkup';
import simulateEvent from '../util/simulateEvent';

describe('setupClickHandlers', () => {
  it('should not trigger a callback after scrolling to a section', async () => {
    expect.assertions(1);

    const callback = jest.fn();
    document.body.innerHTML = onlyH2Nav;
    const nav = document.querySelector('nav');
    const links = nav.querySelectorAll('a');
    const scrollNav = {
      data: onlyH2Data,
      nav: document.querySelector('nav'),
      settings: {}
    };

    setupClickHandlers(scrollNav);
    await simulateEvent('click', links[0]);

    expect(callback).not.toBeCalled();
  });

  xit('should trigger a callback after scrolling to a section', async () => {
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
    await simulateEvent('click', links[0]);

    expect(callback).toBeCalled();
  });

  xit('should trigger a callback after scrolling to a sub-section', async () => {
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
    await simulateEvent('click', links[2]);

    expect(callback).toBeCalled();
  });
});
