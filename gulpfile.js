var gulp = require('gulp');
var stylus = require('gulp-stylus');
var rupture = require('rupture');

gulp.task('stylus', function() {
        gulp.src('./assets/styl/main.styl')
                .pipe(stylus({
                        compress: true,
            use: [rupture()]
                }))
                .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function () {
  gulp.watch('./assets/styl/*.styl', ['stylus']);
  //watch dodatkow
  gulp.watch('./assets/styl/dodatki/*.styl', ['stylus']);
});
gulp.task('default', ['stylus','watch']);