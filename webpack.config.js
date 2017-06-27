module.exports = {
	entry: [
		'./public/src/index.js'
	],
	output: {
		path: __dirname,
		publicPath: '/public',
		filename: 'public/bundle.js'
	},
	module: {
		loaders: [{
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015', 'stage-1']
			}
		}]
	},
	resolve: {
		extensions: ['.js']
	}
};
