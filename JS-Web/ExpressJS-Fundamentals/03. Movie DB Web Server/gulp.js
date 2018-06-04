'use strict';

const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

gulp.task('pages', function() {
    return gulp.src(['views/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('dist'));
});