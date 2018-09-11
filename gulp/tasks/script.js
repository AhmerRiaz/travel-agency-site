var importGulp = require('gulp'),
webpack = require('webpack');

importGulp.task('script',function(callback){
	webpack(require('../../webpack.config.js'), function ()
	{
		console.log('Horray, Webpack Completed');
		callback();
});
	});
	