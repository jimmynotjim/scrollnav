import jestDomCustomMatchers from '@jarmee/jest-dom-custom-matchers';
import createList from '../../../src/util/createList';
import { onlyH2Data, allData } from '../../fixtures/sectionData';

expect.extend(jestDomCustomMatchers);

describe('createList', () => {
  let testContainer;

  beforeAll(() => {
    testContainer = document.createElement('div');
  });

  it('should create an ol element with the correct class name', () => {
    testContainer.innerHTML = createList(onlyH2Data);
    const list = testContainer.children[0];

    expect(list).toBeHTMLElement('ol');
    expect(list).toHaveClass('scroll-nav__list');
  });

  it(`should include three li elements with the correct class name
      and data attributes`, () => {
    testContainer.innerHTML = createList(onlyH2Data);
    const items = testContainer.children[0].children;

    expect(items.length).toBe(3);
    expect(items[0]).toBeHTMLElement('li');
    expect(items[0]).toHaveClass('scroll-nav__item');
    expect(items[0]).toHaveAttribute('data-sn-section', 'first-heading');
  });

  it(`should include a link with the correct class name, href,
      and inner text`, () => {
    testContainer.innerHTML = createList(onlyH2Data);
    const links = testContainer.querySelectorAll('a');

    expect(links.length).toBe(3);
    expect(links[0]).toHaveClass('scroll-nav__link');
    expect(links[0]).toContainText('First heading');
    expect(links[0]).toHaveAttribute('href', '#first-heading');
  });

  it('should not include child ol element if the data does not exist', () => {
    testContainer.innerHTML = createList(onlyH2Data);
    const subSections = testContainer.querySelectorAll('ol ol');

    expect(subSections.length).toBe(0);
  });

  it('should include child ol element with the correct class name', () => {
    testContainer.innerHTML = createList(allData);
    const subSections = testContainer.querySelectorAll('ol ol');

    expect(subSections.length).toBe(1);
    expect(subSections[0]).toBeHTMLElement('ol');
    expect(subSections[0]).toHaveClass('scroll-nav__sub-list');
  });

  it(`should include an item in the child ol element with the correct class
      name`, () => {
    testContainer.innerHTML = createList(allData);
    const subItems = testContainer.querySelectorAll('ol ol li');

    expect(subItems.length).toBe(1);
    expect(subItems[0]).toBeHTMLElement('li');
    expect(subItems[0]).toHaveClass('scroll-nav__sub-item');
    expect(subItems[0]).toHaveAttribute('data-sn-section', 'second-heading__1');
  });

  it(`should include a link with the correct class name, href,
      and inner text`, () => {
    testContainer.innerHTML = createList(allData);
    const subLinks = testContainer.querySelectorAll('ol ol a');

    expect(subLinks.length).toBe(1);
    expect(subLinks[0]).toBeHTMLElement('a');
    expect(subLinks[0]).toHaveClass('scroll-nav__sub-link');
    expect(subLinks[0]).toContainText(
      'First sub-heading of the second heading'
    );
    expect(subLinks[0]).toHaveAttribute('href', '#second-heading__1');
  });
});
