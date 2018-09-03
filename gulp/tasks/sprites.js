	var importGulp = require('gulp'),
	svgSprite = require('gulp-svg-sprite'),
	rename = require('gulp-rename'),
	del = require('del');

	var config = {
		mode : {
			css : {
				sprite : 'sprite.svg',
				render : {
					css : {
						template : './gulp/templates/sprite.css'
					}
				}
			}
		}
	}

	importGulp.task('beginClean', function ()
	{
		return del(['./app/temp/sprite','./app/assets/images/sprites']);
	})
	importGulp.task('createSprite', ['beginClean'],  function ()
	{
		return importGulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(importGulp.dest('./app/temp/sprite'))
	})

	importGulp.task('copySpriteGraphic', ['createSprite'], function ()
	{
		return importGulp.src('./app/temp/sprite/css/**/*.svg')
		.pipe(importGulp.dest('./app/assets/images/sprites'))
	})


	importGulp.task('copySpriteCSS', ['createSprite'], function ()
	{
		return importGulp.src('./app/temp/sprite/css/*.css')
		.pipe(rename('_sprite.css'))
		.pipe(importGulp.dest('./app/assets/styles/modules'))
	})

	importGulp.task('endCleaning',['copySpriteGraphic', 'copySpriteCSS'], function ()
	{
		return del('./app/temp/sprite');
	})

	importGulp.task('icons',['beginClean','createSprite', 'copySpriteGraphic', 'copySpriteCSS','endCleaning'])

