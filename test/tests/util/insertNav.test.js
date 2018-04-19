import jestDomCustomMatchers from '@jarmee/jest-dom-custom-matchers';
import insertNav from '../../../src/util/insertNav';
import { html as content } from '../../fixtures/sectionMarkup';

expect.extend(jestDomCustomMatchers);

describe('insertNav', () => {
  beforeEach(() => {
    document.body.innerHTML = content;
  });

  it('should append the new element as the last child of the existing element', () => {
    const testContent = document.querySelector('.test-content');
    const lastChild = testContent.lastChild;
    const newDiv = document.createElement('div');
    newDiv.className = 'new-div';

    insertNav(newDiv, { insertTarget: testContent, insertLocation: 'append' });
    const foundDiv = document.querySelector('.new-div');

    expect(foundDiv.parentNode).toEqual(testContent);
    expect(foundDiv.nextSibling).toEqual(null);
    expect(foundDiv.previousSibling).toEqual(lastChild);
  });

  it('should prepend the new element as the first child of the existing element', () => {
    const testContent = document.querySelector('.test-content');
    const firstChild = testContent.firstChild;
    const newDiv = document.createElement('div');
    newDiv.className = 'new-div';

    insertNav(newDiv, { insertTarget: testContent, insertLocation: 'prepend' });
    const foundDiv = document.querySelector('.new-div');

    expect(foundDiv.parentNode).toEqual(testContent);
    expect(foundDiv.nextSibling).toEqual(firstChild);
    expect(foundDiv.previousSibling).toEqual(null);
  });

  it('should insert the new element as the previous sibling of the existing element', () => {
    const testContent = document.querySelector('.test-content');
    const firstChild = testContent.firstChild;
    const newDiv = document.createElement('div');
    newDiv.className = 'new-div';

    insertNav(newDiv, { insertTarget: testContent, insertLocation: 'before' });
    const foundDiv = document.querySelector('.new-div');

    expect(foundDiv.parentNode).toEqual(document.body);
    expect(foundDiv.nextSibling).toEqual(testContent);
  });

  it('should insert the new element as the next sibling of the existing element', () => {
    const testContent = document.querySelector('.test-content');
    const firstChild = testContent.firstChild;
    const newDiv = document.createElement('div');
    newDiv.className = 'new-div';

    insertNav(newDiv, { insertTarget: testContent, insertLocation: 'after' });
    const foundDiv = document.querySelector('.new-div');

    expect(foundDiv.parentNode).toEqual(document.body);
    expect(foundDiv.previousSibling).toEqual(testContent);
  });
});
