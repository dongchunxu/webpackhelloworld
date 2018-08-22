var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')


module.exports = { 
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js',
		b: './src/script/b.js',
	},
	output: {
		path: path.resolve(__dirname, './dist/'),
		filename: 'js/[name]-[chunkhash].js',
		publicPath: 'http://www.haodyinduo2.com/'	
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'a.html',
			template: './src/index.html',	//这里为什么不用指定路径
			inject: 'body',	//script放在head还是body标签里
			minify: true,
			title: 'this is a ',
			chunks: ['main', 'a']
		}),
		new htmlWebpackPlugin({
			filename: 'b.html',
			template: './src/index.html',	//这里为什么不用指定路径
			inject: 'body',	//script放在head还是body标签里
			minify: true,
			title: 'this is b ',
			chunks: ['main', 'a', 'b']
		}),
		new htmlWebpackPlugin({
			filename: 'c.html',
			template: './src/index.html',	//这里为什么不用指定路径
			inject: 'body',	//script放在head还是body标签里
			minify: true,
			title: 'this is c ',
			chunks: ['b']
		}),
	]
};