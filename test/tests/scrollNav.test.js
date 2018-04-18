import jestDomCustomMatchers from '@jarmee/jest-dom-custom-matchers';
import scrollNav from '../../src/scrollNav';
import { html as sectionMarkup } from '../fixtures/sectionMarkup';
import { html as noSectionsMarkup } from '../fixtures/noSectionsMarkup';

expect.extend(jestDomCustomMatchers);

describe('scrollNav', () => {
  describe('init method', () => {
    beforeEach(() => {
      document.body.innerHTML = sectionMarkup;
    });

    it(`should not create a nav element if the first argument is a string`, () => {
      const content = 'content';

      scrollNav.init(content);

      const nav = document.querySelector('nav');

      expect(nav).toBe(null);
    });

    it(`should not create a nav element if the first argument is an function`, () => {
      const content = function() {
        return;
      };

      scrollNav.init(content);

      const nav = document.querySelector('nav');

      expect(nav).toBe(null);
    });

    it(`should not create a nav element if the first argument is an Object`, () => {
      const content = new Object();

      scrollNav.init(content);

      const nav = document.querySelector('nav');

      expect(nav).toBe(null);
    });

    it(`should log an error if the first argument is not an HTML Element and
      the debug option is true`, () => {
      console.error = jest.fn();
      const content = 'content';

      scrollNav.init(content, { debug: true });

      const nav = document.querySelector('nav');

      expect(console.error).toHaveBeenCalled();
    });

    it(`should not log an error if the first argument is an HTML Element and
      the debug option is true`, () => {
      console.error = jest.fn();
      const content = document.querySelector('.test-content');

      scrollNav.init(content, { debug: true });

      const nav = document.querySelector('nav');

      expect(console.error).not.toHaveBeenCalled();
    });

    it(`should not create a nav element if there are no section elements
      within the element argument`, () => {
      document.body.innerHTML = noSectionsMarkup;
      const content = document.querySelector('.test-content');

      scrollNav.init(content);

      const nav = document.querySelector('nav');

      expect(nav).toBe(null);
    });

    it(`should log an error if there are no section elements within the element
      argument and the debug option is true`, () => {
      console.error = jest.fn();
      document.body.innerHTML = noSectionsMarkup;
      const content = document.querySelector('.test-content');

      scrollNav.init(content, { debug: true });

      const nav = document.querySelector('nav');

      expect(console.error).toHaveBeenCalled();
    });

    it(`should not log an error if there are section elements within the element
      argument and the debug option is true`, () => {
      console.error = jest.fn();
      const content = document.querySelector('.test-content');

      scrollNav.init(content, { debug: true });

      const nav = document.querySelector('nav');

      expect(console.error).not.toHaveBeenCalled();
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

    it('should return a callback after the nav is added', async () => {
      expect.assertions(1);

      const callback = jest.fn();
      const content = document.querySelector('.test-content');
      await scrollNav.init(content, { onInit: callback });

      expect(callback).toBeCalled();
    });
  });

  describe('destroy method', () => {
    beforeEach(() => {
      document.body.innerHTML = sectionMarkup;
      const content = document.querySelector('.test-content');

      scrollNav.init(content);
    });

    it('should remove the nav from the document', () => {
      scrollNav.destroy();

      const nav = document.querySelector('nav');

      expect(nav).toBe(null);
    });

    it('should return a callback after the the nav is removed', async () => {
      expect.assertions(1);

      const callback = jest.fn();

      scrollNav.destroy({ onDestroy: callback });

      expect(callback).toBeCalled();
    });
  });
});
