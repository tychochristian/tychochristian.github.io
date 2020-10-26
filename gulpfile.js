'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var src = './src/scss/**/*.scss';
var build = './build';

// sass.compiler = require('node-sass');

function scss() {
  return (
    gulp
      .src(src)
      .pipe(sass())
      .on("error", sass.logError)
      .pipe(gulp.dest(build))
  );
}

function watch(){
  gulp.watch(src, scss)
}

exports.scss = scss;
exports.watch = watch;
