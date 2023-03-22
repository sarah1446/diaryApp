// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// title: 'Diary App',
	// description: 'Diary description..',
	// alias: {
	// 	"@": "/",
	// },
	app: {
		head: {
			"meta": [
				{
					"name": "Diary App",
					"content": "width=device-width, initial-scale=1"
				},
				{
					"charset": "utf-8"
				}
			],
			"link": [],
			"style": [],
			"script": [],
			"noscript": []
		}
	},
	modules: [
		'@pinia/nuxt'
	],
	imports: {
		dirs: ['./store'],
	},
	pinia: {
		autoImports: ['defineStore', 'acceptHMRUpdate'],
	},
	// css: ["/assets/styles/test.css"],
	vite: {
		css: {
			preprocessorOptions: {
				// scss: {
				// 	includePaths: ['/assets/styles/_colors.scss'],
				// },
				scss: {
					// additionalData: '@import "@/assets/styles/_colors.scss" as *;'
					// additionalData: '@import "@/assets/styles/_colors.scss" as *;'
				}
			}
		}
	},
	// buildModules: [
	// 	'@nuxtjs/style-resources',
	// ],
	// styleResources: {
	// 	scss: [
	// 		'~/assets/styles/_colors.scss',
	// 	],
	// },
})
