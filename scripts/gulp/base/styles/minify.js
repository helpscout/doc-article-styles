// Base :: Styles :: Minify
'use strict';

var gulp = require('gulp');

var cssmin = require('../../pipes/cssmin');

gulp.task('styles-minify', function(callback) {
  return gulp.src(global.config.dest + '/css/**/*.css')
    .pipe(cssmin())
    .on('close', callback);
});
