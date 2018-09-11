var importGulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	cssnested = require('postcss-nested'),
	postcssImport = require('postcss-import'),
	mixins = require('postcss-mixins'),
	hexrgba = require('postcss-hexrgba');
	
	

	importGulp.task('styles', function()
	{
		importGulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([postcssImport, mixins, cssvars, cssnested, hexrgba, autoprefixer]))
		.on('error', function (errorInfo){
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(importGulp.dest('./app/temp/styles'));
	});
