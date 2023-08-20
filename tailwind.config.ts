import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lite': '#F8F8FB',
        'whitish': '#F9FAFE',
        'greyish': '#373B53',
        'lightgrey': '#888EB0',
        'purplish': '#7C5DFA',
        'lightpurple': '#DFE3FA',
        'greenish': '#33D69F',
        'darkish': '#494E6E',
        'greypurple': '#7E88C3',
        'grey2': '#777F98',
        'orangish': '#FF8F00',
        'redish': '#EC5757'
      },
      borderWidth: {
        '0.5': '0.5px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '1/10': '10%',
        '1/15': '15%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
      }
    },
  },
  plugins: [],
}
export default config
