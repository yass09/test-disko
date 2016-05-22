var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function () {
	return gulp.src('stylesheets/stylesheets/main.css')
		.pipe(autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('stylesheets/'));
});
