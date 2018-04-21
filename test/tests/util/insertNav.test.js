import jestDomCustomMatchers from '@jarmee/jest-dom-custom-matchers';
import insertNav from '../../../src/util/insertNav';
import { html as content } from '../../fixtures/sectionMarkup';

expect.extend(jestDomCustomMatchers);

describe('insertNav', () => {
  let testContent;
  let newDiv;
  let scrollNav;

  beforeEach(() => {
    document.body.innerHTML = content;
    testContent = document.querySelector('.test-content');
    newDiv = document.createElement('div');
    newDiv.className = 'new-div';
    scrollNav = {
      settings: { insertTarget: testContent },
      nav: newDiv
    };
  });

  it('should append the new element as the last child of the existing element', () => {
    const lastChild = testContent.lastChild;

    scrollNav.settings.insertLocation = 'append';
    insertNav(scrollNav);

    const foundDiv = document.querySelector('.new-div');

    expect(foundDiv.parentNode).toEqual(testContent);
    expect(foundDiv.nextSibling).toEqual(null);
    expect(foundDiv.previousSibling).toEqual(lastChild);
  });

  it('should prepend the new element as the first child of the existing element', () => {
    const firstChild = testContent.firstChild;

    scrollNav.settings.insertLocation = 'prepend';
    insertNav(scrollNav);

    const foundDiv = document.querySelector('.new-div');

    expect(foundDiv.parentNode).toEqual(testContent);
    expect(foundDiv.nextSibling).toEqual(firstChild);
    expect(foundDiv.previousSibling).toEqual(null);
  });

  it('should insert the new element as the previous sibling of the existing element', () => {
    scrollNav.settings.insertLocation = 'before';
    insertNav(scrollNav);

    const foundDiv = document.querySelector('.new-div');

    expect(foundDiv.parentNode).toEqual(document.body);
    expect(foundDiv.nextSibling).toEqual(testContent);
  });

  it('should insert the new element as the next sibling of the existing element', () => {
    scrollNav.settings.insertLocation = 'after';
    insertNav(scrollNav);

    const foundDiv = document.querySelector('.new-div');

    expect(foundDiv.parentNode).toEqual(document.body);
    expect(foundDiv.previousSibling).toEqual(testContent);
  });
});
