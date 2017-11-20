const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
	entry: {
		app: [
			'react-hot-loader/patch',
		    './app/index.js' // Your appʼs entry point,
    	]
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './public',
		hot: true
   	},
   	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
   	]
});