// Watch :: Default
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('watch', function(callback) {
  runSequence([
    'watch-html',
    'watch-styles',
  ], callback);
});
