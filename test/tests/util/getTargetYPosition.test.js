import getTargetYPosition from '../../../src/util/getTargetYPosition';
import { onlyH2Data, allData } from '../../fixtures/sectionData';
import { onlyH2Nav, allNav } from '../../fixtures/navMarkup';

describe('getTargetYPosition', () => {
  let nav;
  let links;

  beforeAll(() => {
    window.innerHeight = 1000;
    document.body.innerHTML = onlyH2Nav;
    nav = document.querySelector('nav');
    links = nav.querySelectorAll('a');
  });

  it('should return the Y position of the section element', () => {
    document.body.innerHTML = onlyH2Nav;
    nav = document.querySelector('nav');
    links = nav.querySelectorAll('a');

    const targetYPosition = getTargetYPosition(links[0], onlyH2Data);

    expect(targetYPosition).toEqual(onlyH2Data[0].offsetTop);
  });

  it('should return the Y position of the sub-section element', () => {
    document.body.innerHTML = allNav;
    nav = document.querySelector('nav');
    links = nav.querySelectorAll('ol ol a');

    const targetYPosition = getTargetYPosition(links[0], allData);

    expect(targetYPosition).toEqual(allData[1].subSections[0].offsetTop);
  });
});
