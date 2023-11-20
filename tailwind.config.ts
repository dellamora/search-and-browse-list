import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
],
} satisfies Config;
