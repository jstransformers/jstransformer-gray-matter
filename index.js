'use strict'

var matter = require('gray-matter')

exports.name = 'gray-matter'
exports.outputFormat = 'json'

exports.render = function (str, options) {
  var result = matter(str, options)
  return JSON.stringify(result)
}
