// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // This 'content' array is CRITICAL for Tailwind v4.
  // It tells Tailwind where to scan your files for CSS classes.
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // For your components
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js App Router (if you're using it)
    // Add any other directories where you use Tailwind classes, e.g.:
    // './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"), // This line adds DaisyUI as a plugin
  ],

  // Optional: DaisyUI configuration
  daisyui: {
    themes: ["light", "dark", "cupcake"], // You can specify the themes you want to include
    // base: true, // applies background color and foreground color for root element by default
    // styled: true, // include daisyUI colors and design decisions for all components
    // utils: true, // adds responsive and dark mode utility classes
    // logs: true, // Shows info about daisyUI version and used config in the console when building
    // darkTheme: "dark", // name of one of the included themes for dark mode
  },
};
