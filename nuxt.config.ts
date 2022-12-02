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
	modules: [
		'@nuxtjs/tailwindcss',
		[
			'@pinia/nuxt',
			{
				autoImports: ['defineStore']
			}
		]
	],
	typescript: {
		typeCheck: true
	}
} as NuxtConfig)
