/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				openUpToDown: {
				  from: { transform: 'scaleY(0)' },
				  to: { transform: 'scaleY(1)' },
				}
			},
			animation: {
				'openUpToDown': 'openUpToDown 0.5s normal forwards ease-in-out',
			}
		},
	},
	plugins: [],
}
