/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: ["class", '[data-mode="dark"]'],
	theme: {
		extend: {
			colors: {
				primary: "#836EF9",
				secondary: "#200052",
				"electric-ice": "#5FEDDF",
				berry: "#A0055D",
				wine: "#61004F",
				"primary-light-25": "#BBAFFF",
				"primary-light-50": "#9E8CFF",
				"primary-dark-25": "#632ADB",
				"primary-dark-50": "#3C1B84",
				"secondary-light-25": "#9F90F9",
				"secondary-light-50": "#8975FF",
				"secondary-dark-25": "#563AFD",
				"secondary-dark-50": "#1A0E62",
				black: "#000000",
				"black-80": "#232323",
				"black-60": "#4D4D4D",
				"black-40": "#7A7A7A",
				white: "#ffffff",
				"white-80": "#F1F1F1",
				"white-60": "#E2E2E2",
				"white-40": "#D6D6D6",
				gray: "#1F2937",
				"gray-80": "#374151",
				"gray-60": "#4B5563",
				"gray-40": "#6B7280",
				info: "#A0C3FF",
				success: "#2CA77B",
				warning: "#FBC756",
				error: "#F60F0F",
			},
			fontFamily: {
				sans: ["Ubuntu", "sans-serif"], // Default font
				inter: ["Inter", "sans-serif"], // Secondary font
			},
		},
	},
	plugins: [],
};
