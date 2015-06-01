'use strict';

var matter = require('gray-matter');

exports.name = 'gray-matter';
exports.outputFormat = 'json';

exports.render = function _render(str, options) {
  var result = matter(str, options);
  return JSON.stringify(result);
};

// Note: exports.renderFile() is not implemented as matter.read() is simply a
// wrapper around matter(str, options). JSTransformer will handle this
// implementation for us.
