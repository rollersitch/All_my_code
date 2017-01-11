var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint');




gulp.task('default', ['watch']);

gulp.task('jshint', function() {
	return gulp.src('source/javascript/**/*.js')
				.pipe(jshint())
				.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
	gulp.watch('source/javascript/**/*.js', ['jshint']);
});

gulp.task('copyHtml', function() {
	gulp.src('source/*.html').pipe(gulp.dest('public'));
});