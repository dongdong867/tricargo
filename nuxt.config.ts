import { NuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			meta: [
				{ charset: 'utf-8' },
				{
					name: 'viewport',
					content: 'width=devicewidth,initial-scale=1,minium-scalr=1'
				}
			],
			title: 'triCARgo'
		},
		pageTransition: { name: 'page', mode: 'out-in' }
	},
	build: { transpile: ['@googlemaps/js-api-loader'] },
	runtimeConfig: {
		public: { GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY }
	},
	modules: [
		'@nuxtjs/tailwindcss',
		[
			'@pinia/nuxt',
			'@nuxtjs/axios',
			{
				autoImports: ['defineStore']
			}
		]
	],
	typescript: {
		typeCheck: true
	},
	axios: {}
} as NuxtConfig)
