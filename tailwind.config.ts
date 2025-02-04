import type { Config } from 'tailwindcss'

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'], // Шрифт Inter по умолчанию
				montserrat: ['Montserrat', 'sans-serif'], // Шрифт Montserrat
				slovic: ['Slovic', 'sans-serif'],
			},
		},
	},
	plugins: [],
} satisfies Config
