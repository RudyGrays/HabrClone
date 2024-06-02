
import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/config'

type buildConfig = (options?: BuildOptions) => webpack.Configuration


export const buildWebpackConfig:buildConfig = (options) => {
	const {mode, paths, port} = options

	return {
		mode,
		entry: paths.entry,
		module: {
			rules: buildLoaders(options)
		},
		resolve: buildResolvers(options),
		output: {
			filename: '[name].[contenthash].bundle.js',
			path: paths.build,
			clean: true,
		},
		 plugins: buildPlugins(options),
		 devtool: 'inline-source-map',
		 devServer: buildDevServer(options)
	
	}
}