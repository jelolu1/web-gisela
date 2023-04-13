// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	reactStrictMode: true,
// };

// module.exports = nextConfig;

const withImages = require('next-images');

module.exports = withImages({
	webpack(config, options) {
		config.module.rules.push({
			test: /\.(mp4|webm)$/,
			use: {
				loader: 'file-loader',
				options: {
					publicPath: `/_next/static/videos/`,
					outputPath: `${options.isServer ? '../' : ''}static/videos/`,
					name: '[name].[hash].[ext]',
					esModule: false,
				},
			},
		});

		return config;
	},
});
