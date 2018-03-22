import jestDomCustomMatchers from '@jarmee/jest-dom-custom-matchers';
import createNav from '../../../src/util/createNav';
import { onlyH2Data, allData } from '../../fixtures/sectionData';

expect.extend(jestDomCustomMatchers);

describe('createNav', () => {
  it('should create a nav element with the correct class name', () => {
    const nav = createNav(onlyH2Data);

    expect(nav).toBeHTMLElement('nav');
    expect(nav).toHaveClass('scroll-nav');
  });

  it('should contain the list of links', () => {
    const nav = createNav(onlyH2Data);
    const list = nav.children;

    expect(list.length).toBe(1);
    expect(list[0]).toBeHTMLElement('ol');
    expect(list[0].children.length).toBe(3);
  });
});
