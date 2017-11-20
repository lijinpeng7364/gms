const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		app: './app/index.js',
		vendor: ['./vendor/pace/pace.js']
	},
	plugins: [
		new CleanWebpackPlugin(['./public/dist/']),
		new ExtractTextPlugin("styles.css"),//样式独立成一个文件
		new webpack.ProvidePlugin({//引入jquery
            '$': "jquery",
            'jQuery': "jquery",
            'window.jQuery': "jquery",
            'window.$': 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({//vendor，可以使用缓存？
        	name: 'vendor',
        	filename: 'vendor.js',
        	minChunks: Infinity
        }),
        new webpack.DefinePlugin({
            "require.specified": "require.resolve"
        })
	],
	output: {
        path: path.join(__dirname, '/public/dist/'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000
					}
				}
	       	},
	       	{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000,
						mimetype: 'application/octet-stream'
					}
				}
       		},
       		{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000,
						mimetype: 'image/svg+xml'
					}
				}
       		}
		]
   }
};