import jestDomCustomMatchers from '@jarmee/jest-dom-custom-matchers';
import createList from '../../src/utils/createList';
import { html } from '../fixtures/sectionMarkup';
import { allData } from '../fixtures/sectionData';

const expectedHtml = '<ol class="scroll-nav__list" />';
expect.extend(jestDomCustomMatchers);

describe('createList', () => {
  document.body.innerHTML = html;

  it('should create an ol element with the correct class name', () => {
    const list = createList(allData, 'scroll-nav', false);

    expect(list).toBeHTMLElement('ol');
    expect(list).toHaveClass('scroll-nav__list');
  });

  it(`should include three li elements with the correct class name
      and data attributes`, () => {
    const list = createList(allData, 'scroll-nav', false);
    const items = list.querySelectorAll('li');

    expect(items.length).toBe(3);
    expect(items[0]).toBeHTMLElement('li');
    expect(items[0]).toHaveClass('scroll-nav__item');
  });

  it(`should include a link with the correct class name, href,
      and inner text`, () => {
    const list = createList(allData, 'scroll-nav', false);
    const links = list.querySelectorAll('a');

    expect(links.length).toBe(3);
    expect(links[0]).toBeHTMLElement('a');
    expect(links[0]).toHaveClass('scroll-nav__link');
    expect(links[0]).toContainText('First heading');
    expect(links[0]).toHaveAttribute('href', '#first-heading');
  });

  it('should not include sub-items when the param is not passed', () => {
    const list = createList(allData, 'scroll-nav', false);
    const subSections = list.querySelectorAll('ol');

    expect(subSections.length).toBe(0);
  });

  it('should include child ol element with the correct class name', () => {
    const list = createList(allData, 'scroll-nav', true);
    const subSections = list.querySelectorAll('ol');

    expect(subSections.length).toBe(1);
    expect(subSections[0]).toBeHTMLElement('ol');
    expect(subSections[0]).toHaveClass('scroll-nav__sub-list');
  });

  it(`should include an item in the child ol element with the correct class name
      and data attribute`, () => {
    const list = createList(allData, 'scroll-nav', true);
    const subSections = list.querySelectorAll('ol');
    const subItems = subSections[0].querySelectorAll('li');

    expect(subItems.length).toBe(1);
    expect(subItems[0]).toBeHTMLElement('li');
    expect(subItems[0]).toHaveClass('scroll-nav__sub-item');
  });

  it(`should include a link with the correct class name, href,
      and inner text`, () => {
    const list = createList(allData, 'scroll-nav', true);
    const subSections = list.querySelectorAll('ol');
    const subLinks = subSections[0].querySelectorAll('a');

    expect(subLinks.length).toBe(1);
    expect(subLinks[0]).toBeHTMLElement('a');
    expect(subLinks[0]).toHaveClass('scroll-nav__sub-link');
    expect(subLinks[0]).toContainText(
      'First sub-heading of the second heading'
    );
    expect(subLinks[0]).toHaveAttribute('href', '#second-heading__1');
  });
});
