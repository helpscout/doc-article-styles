// Watch :: Jekyll (Turbo)
'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var options = require('./_options');

gulp.task('watch-html', function () {
  gulp.watch([
    global.config.src + '/**/*.{html,md,xml}',
  ], options)
  .on('change', function(event) {
    var file = event.path
      .replace(global.path, '')
      .replace('/src', '');

    gutil.log(file + ' was', gutil.colors.green('updated'));

    // Check for blog post change
    return gulp.start('html');
  });
});
