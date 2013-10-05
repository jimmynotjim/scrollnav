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

  module('jQuery#awesome', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture');
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.scrollNav(), this.elems, 'should be chainable');
  });

  test('first section is correct tag', function() {
    expect(1);
    strictEqual(this.elems.scrollNav().children().first().prop('tagName'), 'SECTION', 'should be a section tag');
  });

  test('first section has correct id', function() {
    expect(1);
    strictEqual(this.elems.scrollNav().children().first().attr('id'), 'scrollNav-1', 'should be scrollNav-1');
  });

  test('first heading has correct text', function() {
    expect(1);
    strictEqual(this.elems.scrollNav().children().first().children().first().html(), 'Test Heading', 'should be Test Heading');
  });

  test('correct total number of sections', function() {
    expect(1);
    strictEqual(this.elems.scrollNav().children().length, 2, 'should be two');
  });

  test('correct number of children in first section', function() {
    expect(1);
    strictEqual(this.elems.scrollNav().children().eq(0).children().length, 4, 'should be four');
  });

  test('second section is correct tag', function() {
    expect(1);
    strictEqual(this.elems.scrollNav().children().eq(1).prop('tagName'), 'SECTION', 'should be a section tag');
  });
}(jQuery));
