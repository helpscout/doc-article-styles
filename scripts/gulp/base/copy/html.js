'use strict';

var gulp = require('gulp');

gulp.task('copy-html', function() {
  return gulp.src([
      global.config.src + '/**/*.html'
    ])
    .pipe(gulp.dest(global.config.dest + '/'));
});
