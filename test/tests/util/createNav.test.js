import jestDomCustomMatchers from '@jarmee/jest-dom-custom-matchers';
import createNav from '../../../src/util/createNav';
import { html as content } from '../../fixtures/sectionMarkup';
import { onlyH2Data, allData } from '../../fixtures/sectionData';

expect.extend(jestDomCustomMatchers);
const testDoc = document.createElement('body');
testDoc.innerHTML = content;

describe('createNav', () => {
  it('should create a nav element with the correct class name', () => {
    const nav = createNav(onlyH2Data, 'scroll-nav');

    expect(nav).toBeHTMLElement('nav');
    expect(nav).toHaveClass('scroll-nav');
    expect(nav).toHaveAttribute('role', 'navigation');
  });

  it('should inject the nav element before the content container', () => {
    const testContent = testDoc.querySelector('.test-content');
    createNav(onlyH2Data, 'scroll-nav', testContent);
    const nav = testDoc.querySelectorAll('nav');

    expect(nav.length).toBe(1);
    expect(nav[0].nextElementSibling).toBeHTMLElement('div');
    expect(nav[0].nextElementSibling).toHaveClass('test-content');
  });

  it('should contain the list of links', () => {
    const nav = createNav(onlyH2Data, 'scroll-nav');
    const list = nav.children;

    expect(list.length).toBe(1);
    expect(list[0]).toBeHTMLElement('ol');
    expect(list[0].children.length).toBe(3);
  });
});
