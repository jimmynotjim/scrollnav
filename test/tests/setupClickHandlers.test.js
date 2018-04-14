import setupClickHandlers from '../../src/setupClickHandlers';
import { onlyH2Data } from '../fixtures/sectionData';
import { html as sectionMarkup } from '../fixtures/sectionMarkup';
import { html as navMarkup } from '../fixtures/navMarkup';
import simulateEvent from '../util/simulateEvent';

describe('clickHandler', () => {
  document.body.innerHTML = navMarkup;

  it('should trigger a callback after click', async () => {
    expect.assertions(1);

    const callback = jest.fn();
    const nav = document.querySelector('nav');
    const links = nav.querySelectorAll('a');

    setupClickHandlers(links, onlyH2Data, callback);
    await simulateEvent('click', links[0]);

    expect(callback).toBeCalled();
  });
});
