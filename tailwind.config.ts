import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/*.{vue,js,ts}',
    './src/pages/**/*.{vue,js,ts}',
    './src/components/**/*.{vue,js,ts}',
    './src/app/**/*.{vue,js,ts}',
  ],
  theme: {},
  plugins: [],
};
export default config;
