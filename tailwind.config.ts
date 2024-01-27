import type { Config } from "tailwindcss"

const config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {},
  plugins: [
    require('flowbite/plugin')
]
} satisfies Config

export default config