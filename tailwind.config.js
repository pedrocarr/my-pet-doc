import { platformSelect } from "nativewind/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}',
    './src/components/**/*.{js,ts,tsx}',
    './src/screens/**/*.{js,ts,tsx}',
    './src/navigation/**/*.{js,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        example: ['SpaceMono-Regular'],
        system: platformSelect({
          android: "SpaceMono-Regular"
        })
      }
    },
  },
  plugins: [],
};
