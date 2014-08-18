# gulp-bem-debug [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

Prints info about passing by BEM objects in next format: `[level] bem path` or `title [level] bem path`

![wow](https://cloud.githubusercontent.com/assets/365089/3955642/7a6a43f4-2703-11e4-8c67-f8132eff255b.png)



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
[npm-image]: https://badge.fury.io/js/gulp-bem-debug.png

[travis-url]: http://travis-ci.org/floatdrop/gulp-bem-debug
[travis-image]: https://travis-ci.org/floatdrop/gulp-bem-debug.png?branch=master

[depstat-url]: https://david-dm.org/floatdrop/gulp-bem-debug
[depstat-image]: https://david-dm.org/floatdrop/gulp-bem-debug.png?theme=shields.io
