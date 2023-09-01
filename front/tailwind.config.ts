import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
	  boxShadow: {
		'dark-custom': '0px 49px 100px 0px rgba(0, 0, 0, 0.10)',
	  },
	  height: {
		'content-fill': '-webkit-fill-available',
	  },
      colors: {
        'black-gray': 'rgba(51, 51, 51, 0.60)',
		'gradient-custom': 'linear-gradient(137deg, #FCFFFD 0%, #F2F1FF 100%), var(--pure-white, #FFF)',
      },
    },
  },
  plugins: [],
}
export default config
