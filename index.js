/**
 * jstransformer-gray-matter <https://github.com/jstransformers/jstransformer-gray-matter>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var matter = require('gray-matter');

exports.name = 'gray-matter';
exports.outputFormat = 'json';

exports.render = function _render(str, options) {
  var result = matter(str, options);
  return JSON.stringify(result);
};
