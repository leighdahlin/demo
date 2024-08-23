import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      'off-white': '#fafafa',
      'dark-blue': '#27545B',
      transparent: 'transparent',
      black: '#000000',
      'soft-black': '#121212',
      white: '#FFFFFF',
      grey: '#d3d5d7',
      bluegray: '#839DA9',
      customGrey: '#DACDCA',
      customGreyDarker: '#B2ABAA',
      overlay: 'rgba(0,0,0,.75)',
      darkGreen: '#27545B',
    },
    backgroundImage: {
      'gradient-to-r': 'linear-gradient(to right, #DACDCA, #FAFAFA)',
      'gradient-to-b': 'linear-gradient(to bottom, #DACDCA, #FAFAFA)',
      transparentBgImage:
        'linear-gradient(to bottom, rgba(213, 205, 203, 0), rgba(250, 250, 250, 0))',
    },
    boxShadow: {
      'custom-light-separation': '0 2px 12px rgba(0, 0, 0, 0.15)',
    },
    animation: {
      'pulse-slow': 'pulse-slow 2s ease-in-out infinite',
    },
    keyframes: {
      'pulse-slow': {
        '0%, 100%': { transform: 'scale(1)', opacity: '1' },
        '50%': { transform: 'scale(1.05)', opacity: '0.8' },
      },
    },
  },
  plugins: [],
};
export default config;

