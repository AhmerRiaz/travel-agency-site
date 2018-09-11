var importGulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

	importGulp.task('watch', function () {
		browserSync.init ({
			notify : false,
			server : {
				baseDir : 'app'
			}
		});
	 watch('./app/index.html', function () {
	 	browserSync.reload();

	 });

	 watch('./app/assets/styles/**/*.css' , function(){
	 	importGulp.start('cssInject');
	 })

	 watch('./app/assets/scripts/**/*.js', function (){
	 	importGulp.start('scriptRefresh');
	 })
	});

	importGulp.task('cssInject', ['styles'] , function()
	{
		return importGulp.src('./app/temp/styles/styles.css').
		pipe(browserSync.stream());
	});

	importGulp.task('scriptRefresh', ['script'], function () {
		browserSync.reload();
	});