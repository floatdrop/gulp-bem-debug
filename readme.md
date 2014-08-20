# gulp-bem-debug [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

Prints info about passing by BEM objects in next format: `[level] bem` or `title [level] bem`

![Wow](https://cloud.githubusercontent.com/assets/365089/3979414/1df312f2-2854-11e4-8c9a-cc11cd754336.png)

## Usage

```js
var gulp = require('gulp');
var bem = require('gulp-bem');
var debug = require('gulp-bem-debug');
var concat = require('gulp-concat');

var levels = [ 'desktop.blocks', 'desktop.bundles/index' ];

gulp.task('build', ['clean'], function () {
    var tree = bem.objects(levels).pipe(bem.tree());
    var deps = tree.deps('desktop.bundles/index/sepulka');

    deps.pipe(debug());

    return deps.src('{bem}.css')
        .pipe(concat('index.css'))
        .pipe(gulp.dest('./dist'));
});
```

## API

### debug([options])

Creates pass through stream, that will print debug information about BEM objects.

##### options

###### title
Type: `String`  

Title, that will prefix all messages in current Stream.

## License

MIT (c) 2014 Vsevolod Strukchinsky

[npm-url]: https://npmjs.org/package/gulp-bem-debug
[npm-image]: http://img.shields.io/npm/v/gulp-bem-debug.svg?style=flat

[travis-url]: http://travis-ci.org/floatdrop/gulp-bem-debug
[travis-image]: http://img.shields.io/travis/floatdrop/gulp-bem-debug.svg?branch=master&style=flat

[depstat-url]: https://david-dm.org/floatdrop/gulp-bem-debug
[depstat-image]: http://img.shields.io/david/floatdrop/gulp-bem-debug.svg?style=flat
