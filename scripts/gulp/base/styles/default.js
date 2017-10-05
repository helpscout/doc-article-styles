// Base :: Styles :: Default
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('styles', function(callback) {
  runSequence(
    'styles-base',
    'styles-minify',
    callback
  );
});
