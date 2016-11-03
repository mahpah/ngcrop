const webpack = require('webpack')
const merge = require('webpack-merge')
const root = require('./webpack/helpers').root(__dirname)
const devServer = require('./webpack/dev-server')
const typescript = require('./webpack/typescript')
const pug = require('./webpack/pug')
const sass = require('./webpack/sass')
const DEV_PORT = 3000

module.exports = (env = {}) => {
	const context = root('./src')
	const entry = {
		index: './index.ts',
	}

	const output = {
		library: 'ngcrop',
		libraryTarget: 'commonjs2',
		filename: '[name].js',
		chunkFilename: '[id].part.js',
		path: root('./dist'),
		pathinfo: !env.prod, // should include path name comment for every import
	}

	const resolve = {
		extensions: ['.ts', '.js', '.json'],
	}

	const plugins = [
		/**
		 * get rid of critical import warning
		 * from https://github.com/angular/angular/issues/11580
		 */
		new webpack.ContextReplacementPlugin(
			// The (\\|\/) piece accounts for path separators in *nix and Windows
			/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
			root('./src') // location of your src
		),
	]

	const config = merge(
		{
			context,
			resolve,
			entry,
			output,
			plugins,
			devtool: 'source-map',
		},
		devServer(DEV_PORT),
		typescript(),
		pug(root('src')),
		sass()
	)

	return config
}
