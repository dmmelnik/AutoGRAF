const gulp = require('gulp')

module.exports = function fonts() {
  return gulp.src(['src/fonts/**', '!src/fonts/stylesheet.css'])
    .pipe(gulp.dest('build/fonts'))
}


