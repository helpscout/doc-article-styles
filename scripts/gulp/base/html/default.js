'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('html', function(callback) {
  runSequence(
    'copy-html',
    'browsersync-reload',
    callback);
});
