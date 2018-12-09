// entry -> output
const devMode = process.env.NODE_ENV !== 'production';
const path = require('path');

module.exports = (env) => {
	const isProduction = env === 'production';

	console.log('env', env);
	return {
		mode: devMode ? 'development' : 'production',
		entry: {
			app: [ '@babel/polyfill', './src/app.js' ]
		},
		output: {
			path: path.join(__dirname, 'public'),
			filename: 'bundle.js'
		},
		target: 'web',
		module: {
			rules: [
				{
					use: {
						loader: 'babel-loader'
					},
					test: /\.js$/,
					include: [ path.resolve(__dirname, 'src') ],
					exclude: /node_modules/
				},
				{
					test: /\.s?css?/,
					use: [ 'style-loader', 'css-loader', 'sass-loader' ]
				}
			]
		},
		devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true
		}
	};
};
