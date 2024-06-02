import HtmlWebpackPlugin from 'html-webpack-plugin'
import miniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export const buildPlugins = ({paths}: BuildOptions):webpack.WebpackPluginInstance[] =>{
	return [
		new HtmlWebpackPlugin({
			template: paths.html
		}),
		new webpack.ProgressPlugin(),
		new miniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		})
	 ]
}