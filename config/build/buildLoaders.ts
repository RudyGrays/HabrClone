import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'
export const buildLoaders = (options: BuildOptions):webpack.RuleSetRule[] =>{


	const typescript = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,	
	}

	const file = {
		test: /\.(png|jpg|gif|woff2|woff)$/,
		use: [
			{
				loader: 'file-loader',
				options: {}  
			}
		]
	}

	const svg = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	const css = {
		test: /\.css$/i,
		use: ['style-loader', 'css-loader', 'postcss-loader'],
	}

	const scss = {
		test: /\.s[ac]ss$/i,
		use: [
		options.isDev === true ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]'
					},
				}
			},
			"sass-loader",
		],
	
	}

	return [
		typescript,
		scss,
		css,
		svg,
		file
	]
}