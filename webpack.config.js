const path = require( 'path' );
const webpack = require( 'webpack' );
const CompressionPlugin = require( 'compression-webpack-plugin' );
// const TerserPlugin = require('terser-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
		mode: 'development',
		entry: './src/js/script.js',
		output: {
				path: path.resolve( __dirname, 'dist' ),
				filename: 'script.bundle.js',
  // sourceMapFilename: '[name].[hash:8].map',
  // chunkFilename: '[id].[hash:8].js'
		},
		// optimization: {
		// 		// usedExports: true,
		// 		splitChunks: {
		// 				chunks: 'all'
		// 		},
		// 		minimize: true,
		// 		minimizer: [ new TerserPlugin() ]
		// },
		plugins: [
				new CompressionPlugin(),
			new webpack.AutomaticPrefetchPlugin(),
			new CircularDependencyPlugin(),
				// new webpack.optimize.MinChunkSizePlugin( {
				// 		minChunkSize: 20
				// } )
		],
		module: {
				rules: [ {
						test: /\.svg$/,
						use: [ {
										loader: 'file-loader'
								},
								{
										loader: 'svgo-loader'
								}
						]
				} ]
		}
};