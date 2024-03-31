/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
    fontFamily: {
      'petrov' : ['"Petrov Sans-Trial"']
    },
    boxShadow: {
      '3xl': '0px 0px 51px rgba(0, 0, 0, 0.14);',
      'blu': '0px 0px 8px 1px rgba(0,0,0, 0.1)',
      'btn': '0px 0px 6px 1px rgba(0,0,0, 0.1)',
    },
  },
  plugins: [],
};
