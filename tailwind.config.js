const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				'electric-purple': '#9A4CEC',
				'inky-black': '#1F1717',
				purple: '#4C2884'
			},
			fontFamily: {
				sans: ['var(--font-cabin)', ...fontFamily.sans],
				poppins: ['var(--font-poppins)', ...fontFamily.sans]
			}
		}
	},
	plugins: []
};
