# jstransformer-gray-matter

[Gray Matter](https://github.com/jonschlinkert/gray-matter) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-gray-matter/master.svg)](https://travis-ci.org/jstransformers/jstransformer-gray-matter)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-gray-matter/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-gray-matter)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-gray-matter/master.svg)](http://david-dm.org/jstransformers/jstransformer-gray-matter)
[![NPM version](https://img.shields.io/npm/v/jstransformer-gray-matter.svg)](https://www.npmjs.org/package/jstransformer-gray-matter)

## Installation

    npm install jstransformer-gray-matter

## API

```js
var matter = require('jstransformer')(require('jstransformer-gray-matter'))
var options = {
  delims: ['~~~', '~~~']
}

var res = matter.render('~~~\ntitle: gray-matter\n~~~\nbar', options)

console.log(JSON.parse(res.body))
//=> {data: {title: 'gray-matter'}, content: 'bar', orig: '~~~\ntitle: gray-matter\n~~~\nbar'}
```

## License

MIT
