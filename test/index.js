/**
 * jstransformer-gray-matter <https://github.com/jstransformers/jstransformer-gray-matter>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var test = require('assertit');
var transformer = require('jstransformer');
var transform = transformer(require('../index'));

test('should transform string with gray-matter frontmatter to JSON object', function(done) {
  var fixture = '---\ntitle: foo\n---\nbar';
  var actual = transform.render(fixture);
  var expected = {data: {title: 'foo'}, content: 'bar', orig: '---\ntitle: foo\n---\nbar'};

  test.deep.equal(JSON.parse(actual.body), expected);
  done();
});

test('should transform string with custom delims', function(done) {
  var fixture = '~~~\ntitle: foo\n~~~\nbar';
  var actual = transform.render(fixture, {delims: ['~~~', '~~~']});
  var expected = {data: {title: 'foo'}, content: 'bar', orig: '~~~\ntitle: foo\n~~~\nbar'};

  test.deep.equal(JSON.parse(actual.body), expected);
  done();
});

test('should transform from a given filepath with custom delims', function(done) {
  var fixture = './test/fixture.hbs';
  var actual = transform.renderFile(fixture, {delims: ['~~~', '~~~']});
  var expected = {
    data: {title: 'foo'},
    content: 'bar',
    orig: '~~~\ntitle: foo\n~~~\nbar',
    path: './test/fixture.hbs'
  };

  test.deep.equal(JSON.parse(actual.body), expected);
  done();
});
