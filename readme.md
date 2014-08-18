# gulp-bem-debug [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

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

## License

MIT (c) 2014 Vsevolod Strukchinsky

[npm-url]: https://npmjs.org/package/gulp-bem-debug
[npm-image]: https://badge.fury.io/js/gulp-bem-debug.png

[travis-url]: http://travis-ci.org/floatdrop/gulp-bem-debug
[travis-image]: https://travis-ci.org/floatdrop/gulp-bem-debug.png?branch=master

[depstat-url]: https://david-dm.org/floatdrop/gulp-bem-debug
[depstat-image]: https://david-dm.org/floatdrop/gulp-bem-debug.png?theme=shields.io
