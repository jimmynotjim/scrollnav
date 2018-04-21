import getTargetYPosition from '../../../src/util/getTargetYPosition';
import { onlyH2Data } from '../../fixtures/sectionData';
import { onlyH2Nav } from '../../fixtures/navMarkup';

describe('getTargetYPosition', () => {
  document.body.innerHTML = onlyH2Nav;
  const nav = document.querySelector('nav');
  const links = nav.querySelectorAll('a');

  beforeAll(() => {
    window.innerHeight = 1000;
  });

  it('should return the Y position of the target element', () => {
    const targetYPosition = getTargetYPosition(links[0], onlyH2Data);

    expect(targetYPosition).toEqual(onlyH2Data[0].offsetTop);
  });
});