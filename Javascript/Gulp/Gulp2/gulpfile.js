var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('minifyjs', function(cb) {
		pump([ gulp.src('src/*.js'),
		      uglify(),
		      gulp.dest('dist')
		    ], cb);
		});

gulp.task('default', ['minifyjs']);
