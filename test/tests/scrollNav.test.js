import jestDomCustomMatchers from '@jarmee/jest-dom-custom-matchers';
import scrollNav from '../../src/scrollNav';
import { html as sectionMarkup } from '../fixtures/sectionMarkup';

expect.extend(jestDomCustomMatchers);

describe('scrollNav initializer', () => {
  beforeEach(() => {
    document.body.innerHTML = sectionMarkup;
  });

  it('should create a nav element with the correct class name', () => {
    const content = document.querySelector('.test-content');

    scrollNav.init(content);

    const nav = document.querySelector('nav');

    expect(nav).toHaveClass('scroll-nav');
    expect(nav).toHaveAttribute('role', 'navigation');
  });

  it('should inject the nav element before the content container', () => {
    const content = document.querySelector('.test-content');

    scrollNav.init(content);

    const nav = document.querySelector('nav');

    expect(nav.nextElementSibling).toBeHTMLElement('div');
    expect(nav.nextElementSibling).toHaveClass('test-content');
  });

  it('should contain the list of links', () => {
    const content = document.querySelector('.test-content');

    scrollNav.init(content);

    const nav = document.querySelector('nav');
    const list = nav.children;

    expect(list.length).toBe(1);
    expect(list[0]).toBeHTMLElement('ol');
    expect(list[0].children.length).toBe(3);
  });

  it('should return a callback', async () => {
    expect.assertions(1);

    const callback = jest.fn();
    const content = document.querySelector('.test-content');
    await scrollNav.init(content, callback);

    expect(callback).toBeCalled();
  });
});
