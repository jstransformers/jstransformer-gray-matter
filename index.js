'use strict'

const matter = require('gray-matter')

exports.name = 'gray-matter'
exports.outputFormat = 'json'

exports.render = function (str, options) {
  const result = matter(str, options)
  return JSON.stringify(result)
}
