// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// title: 'Diary App',
	// description: 'Diary description..',
	alias: {
		"@": "/",
	},
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
	css: ["@/assets/styles/_colors.scss"],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					// additionalData: '@use "@/assets/styles/_colors.scss" as *;'
					additionalData: '@import "@/assets/styles/_colors.scss" as *;'
				}
			}
		}
	}
})
