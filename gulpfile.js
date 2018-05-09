var gulp = require("gulp"),
	connect = require("gulp-connect"),
	opn = require("opn");

gulp.task('connect', function() {
	connect.server({
		proxy: 'localhost',
		root: '',
		livereload: true,
		host: 'localhost',
		port: 9000
	});
	opn('http://localhost:9000');
});

gulp.task('html', function() {
	gulp.src('./*.html')
		.pipe(connect.reload());
});

gulp.task('css', function() {
	gulp.src('./f/css/*.css')
		.pipe(connect.reload());
});

gulp.task('js', function() {
	gulp.src('./f/js/*.js')
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(['./*.html'], ['html']),
	gulp.watch(['./f/css/*.css'], ['css']),
	gulp.watch(['./f/js/*.js'], ['js']);
});

gulp.task('default', ['connect', 'watch']);