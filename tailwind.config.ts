import type { Config } from 'tailwindcss'

// background-beams
// @ts-ignore
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // meteors
      animation: {
        'meteor-effect': 'meteor 5s linear infinite',
      },
      keyframes: {
        meteor: {
          '0%': {
            transform: 'rotate(215deg) translateX(0)',
            opacity: '1',
          },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0',
          },
        },
      },
    },
    screens: {
      xs: '400px',
      sm: '576px',
      md: '960px',
      lg: '1440px',
    },
  },
  plugins: [
    require('tailwindcss-motion'),
    // background-beams
    addVariablesForColors,
  ],
}

// background-beams
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars,
  })
}

export default config
