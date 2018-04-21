import setupClickHandlers from '../../src/setupClickHandlers';
import { onlyH2Data, allData } from '../fixtures/sectionData';
import { onlyH2Nav, allNav } from '../fixtures/navMarkup';
import simulateEvent from '../util/simulateEvent';

describe('setupClickHandlers', () => {
  it('should trigger a callback after scrolling to a section', async () => {
    expect.assertions(1);

    const callback = jest.fn();
    document.body.innerHTML = onlyH2Nav;
    const nav = document.querySelector('nav');
    const links = nav.querySelectorAll('a');

    setupClickHandlers(links, onlyH2Data, callback);
    await simulateEvent('click', links[0]);

    expect(callback).toBeCalled();
  });

  it('should trigger a callback after scrolling to a sub-section', async () => {
    expect.assertions(1);

    const callback = jest.fn();
    document.body.innerHTML = allNav;
    const nav = document.querySelector('nav');
    const links = nav.querySelectorAll('a');

    setupClickHandlers(links, allData, callback);
    await simulateEvent('click', links[2]);

    expect(callback).toBeCalled();
  });
});
