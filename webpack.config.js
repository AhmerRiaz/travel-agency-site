var path = require('path');

 

 module.exports = {
 	
 		entry : {
      app: './app/assets/scripts/App.js',
      vendor: './app/assets/scripts/Vendor.js'
    },
 		output : {
 		path : path.resolve(__dirname, "./app/temp/script"),
 		filename : '[name].js'
 	},

 	module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}

}



	