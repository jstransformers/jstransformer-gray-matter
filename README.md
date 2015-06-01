# jstransformer-gray-matter

[gray-matter](https://github.com/jonschlinkert/gray-matter) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-gray-matter/master.svg)](https://travis-ci.org/jstransformers/jstransformer-gray-matter)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-gray-matter/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-gray-matter?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-gray-matter/master.svg)](http://david-dm.org/jstransformers/jstransformer-gray-matter)
[![NPM version](https://img.shields.io/npm/v/jstransformer-gray-matter.svg)](https://www.npmjs.org/package/jstransformer-gray-matter)

## Installation

    npm install jstransformer-gray-matter

## API

```js
var matter = require('jstransformer')(require('jstransformer-gray-matter'));
var options = {
  delims: ['~~~', '~~~']
};

var res = matter.render('~~~\ntitle: foo\n~~~\nbar', options);

console.log(JSON.parse(res.body));
//=> {data: {title: 'foo'}, content: 'bar', orig: '~~~\ntitle: foo\n~~~\nbar'};
```

## License

MIT
