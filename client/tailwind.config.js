/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		colors: {
  			'ui-text': 'var(--ui-text)',
  			'ui-text-foreground': 'var(--ui-text-foreground)',
  			'ui-background': 'var(--ui-background)',
  			'ui-foreground': 'var(--ui-foreground)',
  			'ui-border': 'var(--ui-border)',
  			'ui-footer': 'var(--ui-footer)',
  			'ui-highlight': 'var(--ui-highlight)',
  			'ui-lowlight': 'var(--ui-lowlight)',
  			'ui-gradient': 'var(--ui-gradient)'
  		},
  		screens: {
  			xs: '330px'
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
