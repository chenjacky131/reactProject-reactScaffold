var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry:path.resolve(__dirname,'app/app.js'),
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'bundle.js'
	},
	module:{
		loaders:[
		{
			test:/\.js$/,
			exclude:/node_modules/,
			loader:'babel-loader',
			query: {
		        presets: ['es2015','react']
		    }
		},
		{
			test:/\.(png|jpg|gif)$/,
			loader:'url-loader?limit=8192'
		},
		{
			test:/\.css$/,
			loader:'style-loader!css-loader'
		}
		]
	},
	plugins:[
		 new webpack.HotModuleReplacementPlugin(),
		 new webpack.NoEmitOnErrorsPlugin()
	],
	devServer: {
	  hot:true,
	  hotOnly:true,
	  inline:true
	}

};
