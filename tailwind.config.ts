import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'customBg': '#f9f5f2',
        'secondaryBg': 'rgb(245, 245, 245)',
      },
      keyframes: {
        wink: {
          '50%': { opacity: '0' },
        },
        scaleUp: {
          '0%': { transform: 'scaleY(0)', opacity: '0' },
          '100%': { transform: 'scaleY(1)', opacity: '1' }
        }

      },
      animation: {
        'wink': 'wink 2s ease-in-out infinite;',
        'scaleUp': 'scaleUp 0.5s ease'
      }
    },
  },
  plugins: [],
};
export default config;
