import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'dark'],
  },
};

export default config;
