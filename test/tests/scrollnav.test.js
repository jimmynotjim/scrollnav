/* eslint no-console: 0 */
import jestDomCustomMatchers from '@jarmee/jest-dom-custom-matchers';
import scrollnav from '../../src/scrollnav';
import { html as sectionMarkup } from '../fixtures/sectionMarkup';
import { html as noSectionsMarkup } from '../fixtures/noSectionsMarkup';

expect.extend(jestDomCustomMatchers);

describe('scrollnav', () => {
  describe('init method', () => {
    beforeEach(() => {
      document.body.innerHTML = sectionMarkup;
    });

    describe('element argument', () => {
      it(`should not create a nav element if the first argument is not an
        HTML Element`, () => {
        const content = 'content';

        scrollnav.init(content);

        const nav = document.querySelector('nav');

        expect(nav).toBe(null);
      });

      it(`should not create a nav element if the first argument is not an
        HTML Element`, () => {
        const content = () => {
          return;
        };

        scrollnav.init(content);

        const nav = document.querySelector('nav');

        expect(nav).toBe(null);
      });

      it(`should not create a nav element if the first argument is not an
        HTML Element`, () => {
        const content = new Object();

        scrollnav.init(content);

        const nav = document.querySelector('nav');

        expect(nav).toBe(null);
      });

      it(`should log an error if the first argument is not an HTML Element and
        the debug option is true`, () => {
        console.error = jest.fn();
        const content = 'content';

        scrollnav.init(content, { debug: true });

        expect(console.error).toHaveBeenCalled();
      });

      it(`should not log an error if the first argument is an HTML Element and
        the debug option is true`, () => {
        console.error = jest.fn();
        const content = document.querySelector('.test-content');

        scrollnav.init(content, { debug: true });

        expect(console.error).not.toHaveBeenCalled();
      });
    });

    describe('sections option', () => {
      it(`should not create a nav element if there are no section elements
        within the element argument`, () => {
        document.body.innerHTML = noSectionsMarkup;
        const content = document.querySelector('.test-content');

        scrollnav.init(content);

        const nav = document.querySelector('nav');

        expect(nav).toBe(null);
      });

      it(`should log an error if there are no section elements within the element
        argument and the debug option is true`, () => {
        console.error = jest.fn();
        document.body.innerHTML = noSectionsMarkup;
        const content = document.querySelector('.test-content');

        scrollnav.init(content, { debug: true });

        expect(console.error).toHaveBeenCalled();
      });

      it(`should not log an error if there are section elements within the element
        argument and the debug option is true`, () => {
        console.error = jest.fn();
        const content = document.querySelector('.test-content');

        scrollnav.init(content, { debug: true });

        expect(console.error).not.toHaveBeenCalled();
      });
    });

    describe('insertTarget option', () => {
      it(`should not create a nav element if the insertTarget option is not an
        HTML Element`, () => {
        const content = document.querySelector('.test-content');
        const insertTarget = 'insertTarget';

        scrollnav.init(content, { insertTarget: insertTarget });

        const nav = document.querySelector('nav');

        expect(nav).toBe(null);
      });

      it(`should not create a nav element if the insertTarget option is not an
        HTML Element`, () => {
        const content = document.querySelector('.test-content');
        const insertTarget = () => {
          return;
        };

        scrollnav.init(content, { insertTarget: insertTarget });

        const nav = document.querySelector('nav');

        expect(nav).toBe(null);
      });

      it(`should not create a nav element if the insertTarget option is not an
        HTML Element`, () => {
        const content = document.querySelector('.test-content');
        const insertTarget = new Object();

        scrollnav.init(content, { insertTarget: insertTarget });

        const nav = document.querySelector('nav');

        expect(nav).toBe(null);
      });

      it(`should log an error if the insertTarget option is not an HTML Element
        and the debug option is true`, () => {
        console.error = jest.fn();
        const content = document.querySelector('.test-content');
        const insertTarget = 'insertTarget';

        scrollnav.init(content, {
          debug: true,
          insertTarget: insertTarget
        });

        expect(console.error).toHaveBeenCalled();
      });

      it(`should not log an error if the insertTarget option is an HTML Element
        and the debug option is true`, () => {
        console.error = jest.fn();
        const content = document.querySelector('.test-content');

        scrollnav.init(content, {
          debug: true,
          insertTarget: content
        });

        expect(console.error).not.toHaveBeenCalled();
      });
    });

    describe('insertLocation option', () => {
      it(`should not create a nav element if the insertLocation option is
        invalid`, () => {
        const content = document.querySelector('.test-content');

        scrollnav.init(content, { insertLocation: 'appendTo' });

        const nav = document.querySelector('nav');

        expect(nav).toBe(null);
      });

      it('should log an error if the insertLocation option is invalid', () => {
        console.error = jest.fn();
        const content = document.querySelector('.test-content');

        scrollnav.init(content, {
          debug: true,
          insertLocation: 'appendTo'
        });

        expect(console.error).toHaveBeenCalled();
      });

      it('should not log an error if the insertLocation option is valid', () => {
        console.error = jest.fn();
        const content = document.querySelector('.test-content');

        scrollnav.init(content, {
          debug: true,
          insertLocation: 'after'
        });

        expect(console.error).not.toHaveBeenCalled();
      });

      it('should not log an error if the insertLocation option is valid', () => {
        console.error = jest.fn();
        const content = document.querySelector('.test-content');

        scrollnav.init(content, {
          debug: true,
          insertLocation: 'before'
        });

        expect(console.error).not.toHaveBeenCalled();
      });

      it('should not log an error if the insertLocation option is valid', () => {
        console.error = jest.fn();
        const content = document.querySelector('.test-content');

        scrollnav.init(content, {
          debug: true,
          insertLocation: 'append'
        });

        expect(console.error).not.toHaveBeenCalled();
      });

      it('should not log an error if the insertLocation option is valid', () => {
        console.error = jest.fn();
        const content = document.querySelector('.test-content');

        scrollnav.init(content, {
          debug: true,
          insertLocation: 'prepend'
        });

        expect(console.error).not.toHaveBeenCalled();
      });
    });

    it('should create a nav element with the correct class name', () => {
      const content = document.querySelector('.test-content');

      scrollnav.init(content);

      const nav = document.querySelector('nav');

      expect(nav).toHaveClass('scroll-nav');
    });

    it('should inject the nav element before the content container', () => {
      const content = document.querySelector('.test-content');

      scrollnav.init(content);

      const nav = document.querySelector('nav');

      expect(nav.nextElementSibling).toBeHTMLElement('div');
      expect(nav.nextElementSibling).toHaveClass('test-content');
    });

    it('should contain the list of links', () => {
      const content = document.querySelector('.test-content');

      scrollnav.init(content);

      const nav = document.querySelector('nav');
      const list = nav.children;

      expect(list.length).toBe(1);
      expect(list[0]).toBeHTMLElement('ol');
      expect(list[0].children.length).toBe(3);
    });

    it('should return a callback after the nav is added', () => {
      const callback = jest.fn();
      const content = document.querySelector('.test-content');
      scrollnav.init(content, { onInit: callback });

      expect(callback).toBeCalled();
    });
  });

  describe('destroy method', () => {
    beforeEach(() => {
      document.body.innerHTML = sectionMarkup;
      const content = document.querySelector('.test-content');

      scrollnav.init(content);
    });

    it('should remove the nav from the document', () => {
      scrollnav.destroy();

      const nav = document.querySelector('nav');

      expect(nav).toBe(null);
    });

    it('should return a callback after the the nav is removed', () => {
      const callback = jest.fn();

      scrollnav.destroy({ onDestroy: callback });

      expect(callback).toBeCalled();
    });
  });

  describe('updatePositions method', () => {
    let sections;
    beforeEach(() => {
      document.body.innerHTML = sectionMarkup;
      const content = document.querySelector('.test-content');
      sections = document.querySelectorAll('h2');

      sections.forEach((elem, i) => {
        elem.getBoundingClientRect = () => {
          return {
            bottom: 800,
            height: 100,
            left: 0,
            right: 800,
            top: 100 * (i + 1),
            width: 800
          };
        };
      });

      scrollnav.init(content);
    });

    it('should update the position data', () => {
      sections.forEach((elem, i) => {
        elem.getBoundingClientRect = () => {
          return {
            bottom: 800,
            height: 100,
            left: 0,
            right: 800,
            top: 200 * (i + 1),
            width: 800
          };
        };
      });

      scrollnav.updatePositions();

      expect(scrollnav.data[0].offsetTop).toEqual(200);
    });

    it('should return a callback after the positions are updated', () => {
      const callback = jest.fn();

      sections.forEach((elem, i) => {
        elem.getBoundingClientRect = () => {
          return {
            bottom: 800,
            height: 100,
            left: 0,
            right: 800,
            top: 200 * (i + 1),
            width: 800
          };
        };
      });

      scrollnav.updatePositions({ onUpdatePositions: callback });

      expect(callback).toBeCalled();
    });
  });
});
