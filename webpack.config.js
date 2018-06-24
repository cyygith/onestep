const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(dir) {
	return path.resolve(__dirname, dir);
}

module.exports = {
	entry: './src/app.js',
	output:{
		path:resolve('./'),
		filename:'build.js'
	},
	resolve:{
		alias:{
			'vue$': 'vue/dist/vue.common.js'
		}
	},
	devServer:{
		contentBase:resolve('./')
	},
	module:{
		rules:[
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options:{
					loaders: {
						scss:[
							{
								loader: 'vue-style-loader'
							},
							{
								loader: 'css-loader'
							},
							{
								loader: 'sass-loader'
							},
							{
								loader: 'sass-resources-loader',
								options: {
								  resources: [resolve('./src/styles/_var.scss')]
								}
							}
						]
					}
				}
			},
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use:[
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.(jpe?g|gif|png)$/,
				use: 'url-loader'
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	]

}
