import jestDomCustomMatchers from '@jarmee/jest-dom-custom-matchers';
import createNav from '../../../src/util/createNav';
import { html as content } from '../../fixtures/sectionMarkup';
import { onlyH2Data, allData } from '../../fixtures/sectionData';

expect.extend(jestDomCustomMatchers);

describe('createNav', () => {
  const options = {
    insertTarget: null
  };
  it('should create a nav element with the correct class name', () => {
    const nav = createNav(onlyH2Data, 'scroll-nav', options);

    expect(nav).toBeHTMLElement('nav');
    expect(nav).toHaveClass('scroll-nav');
    expect(nav).toHaveAttribute('role', 'navigation');
  });

  it('should contain the list of links', () => {
    const nav = createNav(onlyH2Data, 'scroll-nav', options);
    const list = nav.children;

    expect(list.length).toBe(1);
    expect(list[0]).toBeHTMLElement('ol');
    expect(list[0].children.length).toBe(3);
  });

  it('should inject the nav element before the content container', () => {
    document.body.innerHTML = content;
    const testContent = document.querySelector('.test-content');
    options.insertTarget = testContent;

    createNav(onlyH2Data, 'scroll-nav', options);

    const nav = document.querySelector('nav');

    expect(nav.nextElementSibling).toBeHTMLElement('div');
    expect(nav.nextElementSibling).toHaveClass('test-content');
  });

  it('should inject the nav element before specified element', () => {
    const testTarget = '<h1 class="test-target">Test target</h1>';
    document.body.innerHTML = testTarget + content;
    const insertTarget = document.querySelector('.test-target');
    options.insertTarget = insertTarget;

    createNav(onlyH2Data, 'scroll-nav', options);

    const nav = document.querySelector('nav');

    expect(nav.nextElementSibling).toBeHTMLElement('h1');
    expect(nav.nextElementSibling).toHaveClass('test-target');
  });
});
