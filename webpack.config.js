var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')


module.exports = { 
	entry: './src/script/main.js',
	output: {
		path: path.resolve(__dirname, './dist/'),
		filename: 'js/[name]-[chunkhash].js'	
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index-[hash].html',
			template: './src/index.html',	//这里为什么不用指定路径
			inject: 'head',	//script放在head还是body标签里
		})
	]
};