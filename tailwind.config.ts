/* eslint-disable import/no-extraneous-dependencies */
import tailwindTypography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Plus Jakarta Sans', ...fontFamily.sans],
    },
    fontSize: {
      sm: '0.75rem',
      pg: '0.8125rem',
      md: '0.9375rem',
      lg: '1.125rem',
      xl: '1.5rem',
    },
    extend: {
      colors: {
        red: 'var(--clr-red)',
        redhover: 'var(--clr-red-hover)',
        purple: 'var(--clr-purple-main)',
        purplehighlight: 'var(--clr-purple-hightlight)',
        secondarybutton: 'var(--clr-secondary-button)',
        purplehover: 'var(--clr-purple-hover)',
        primary: 'var(--clr-text-primary)',
        secondary: 'var(--clr-medium-grey)',
        elements: 'var(--clr-elements)',
        elementstransparent: 'var(--clr-elementstransparent)',
        lines: 'var(--clr-lines)',
        bg: 'var(--clr-bg)',
        shadownav: 'var(--clr-shadownav)',
        navhover: 'var(--clr-navhover)',
        kebab: 'var(--clr-kebab)',
        placeholder: 'var(--clr-placeholder)',
      },
      boxShadow: {
        nav: '0px 10px 20px 0px var(--clr-shadownav)',
        item: '0px 4px 6px 0px var(--clr-shadowitem)',
      },
      screens: {
        md: '786px',
      },
    },
  },
  plugins: [tailwindTypography],
} satisfies Config;
