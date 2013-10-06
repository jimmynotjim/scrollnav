(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

 module('core', {
  // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture');
    }, teardown: function() {
      $('.scroll-nav').remove();
    }
 });

 test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.scrollNav(), this.elems, 'should be chainable');
  });

  module('sections', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture');
      this.sections = this.elems.scrollNav().children();
    }, teardown: function() {
      $('.scroll-nav').remove();
    }
  });

  test('correct total number of sections', function() {
    expect(3);

    strictEqual(this.sections.length, 2, 'should be two');
    notStrictEqual(this.sections.length, 1, 'should not be one');
    notStrictEqual(this.sections.length, 0, 'should not be zero');
  });

  test('correct number of children in first section', function() {
    expect(3);

    strictEqual(this.sections.eq(0).children().length, 6, 'should be six');
    notStrictEqual(this.sections.eq(0).children().length, 5, 'should not be five');
    notStrictEqual(this.sections.eq(0).children().length, 7, 'should not be seven');
  });

  test('correct number of children in second section', function() {
    expect(3);

    strictEqual(this.sections.eq(1).children().length, 6, 'should be six');
    notStrictEqual(this.sections.eq(1).children().length, 5, 'should not be five');
    notStrictEqual(this.sections.eq(1).children().length, 7, 'should not be seven');
  });

  test('first section is correct tag', function() {
    expect(4);
    var sectionTag = this.sections.eq(0).prop('tagName');

    strictEqual(sectionTag, 'SECTION', 'should be a section tag');
    notStrictEqual(sectionTag, 'DIV', 'should not be a div tag');
    notStrictEqual(sectionTag, 'H2', 'should not be an h2 tag');
    notStrictEqual(sectionTag, 'P', 'should not be a p tag');
  });

  test('second section is correct tag', function() {
    expect(4);
    var sectionTag = this.sections.eq(1).prop('tagName');

    strictEqual(sectionTag, 'SECTION', 'should be a section tag');
    notStrictEqual(sectionTag, 'DIV', 'should not be a div tag');
    notStrictEqual(sectionTag, 'H2', 'should not be an h2 tag');
    notStrictEqual(sectionTag, 'P', 'should not be a p tag');
  });

  test('first section has correct id', function() {
    expect(4);
    var sectionID = this.sections.eq(0).attr('id');

    strictEqual(sectionID, 'scrollNav-1', 'should be scrollNav-1');
    notStrictEqual(sectionID, 'scrollNav-0', 'should not be scrollNav-0');
    notStrictEqual(sectionID, 'scrollNav-2', 'should not be scrollNav-2');
    notStrictEqual(sectionID, 'scrollNav-1-1', 'should not be scrollNav-1-1');
  });

  test('second section has correct id', function() {
    expect(4);
    var sectionID = this.sections.eq(1).attr('id');

    strictEqual(sectionID, 'scrollNav-2', 'should be scrollNav-2');
    notStrictEqual(sectionID, 'scrollNav-1', 'should not be scrollNav-1');
    notStrictEqual(sectionID, 'scrollNav-3', 'should not be scrollNav-3');
    notStrictEqual(sectionID, 'scrollNav-2-1', 'should not be scrollNav-2-1');
  });

  module('subSections', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture');
      this.scrollNav = this.elems.scrollNav({
        sections: 'h2',
        subSections: 'h3',
        showHeadline: true
      });
      this.sections = this.scrollNav.children();
    }, teardown: function() {
      $('.scroll-nav').remove();
    }
  });

  test('correct total number of sub-sections in first section', function() {
    expect(3);
    var $subSections = this.sections.eq(0).find('.scroll-nav__sub-section');

    strictEqual($subSections.length, 2, 'should be two');
    notStrictEqual($subSections.length, 1, 'should not be one');
    notStrictEqual($subSections.length, 0, 'should not be zero');
  });

  module('nav', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture');
      this.scrollNav = this.elems.scrollNav();
      this.sections = this.scrollNav.children();
      this.nav = this.scrollNav.siblings('.scroll-nav');
    }, teardown: function() {
      $('.scroll-nav').remove();
    }
  });

  test('nav is inserted', function() {
    expect(1);

    equal(this.nav.length, true, 'nav should exist');
  });

  test('first nav link has correct text', function() {
    expect(3);
    var headingText = this.sections.eq(0).children().eq(0).text();
    var linkText = this.nav.find('li').eq(0).text();

    strictEqual(linkText, headingText, 'should be Test Heading');
    notStrictEqual(linkText, 'lame test markup', 'should not be lame test');
    notStrictEqual(linkText, 'Another Test Heading', 'should not be Another Test Heading');
  });

  test('second nav link has correct text', function() {
    expect(3);
    var headingText = this.sections.eq(1).children().eq(0).text();
    var linkText = this.nav.find('li').eq(1).text();

    strictEqual(linkText, headingText, 'should be Another Test Heading');
    notStrictEqual(linkText, 'lame test markup', 'should not be lame test');
    notStrictEqual(linkText, 'Test Heading', 'should not be Test Heading');
  });

  test('first nav link has correct url', function() {
    expect(3);
    var sectionID = this.sections.eq(0).attr('id');
    var linkURL = this.nav.find('li').eq(0).find('a').attr('href');

    strictEqual(linkURL, '#' + sectionID, 'should be #scrollNav-1');
    notStrictEqual(linkURL, 'lame test markup', 'should not be #scrollNav-0');
    notStrictEqual(linkURL, 'Another Test Heading', 'should not be #scrollNav-2');
  });

  test('second nav link has correct url', function() {
    expect(3);
    var sectionID = this.sections.eq(1).attr('id');
    var linkURL = this.nav.find('li').eq(1).find('a').attr('href');

    strictEqual(linkURL, '#' + sectionID, 'should be #scrollNav-2');
    notStrictEqual(linkURL, 'lame test markup', 'should not be #scrollNav-1');
    notStrictEqual(linkURL, 'Another Test Heading', 'should not be #scrollNav-3');
  });

}(jQuery));
