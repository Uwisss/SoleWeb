/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        '7xl': '4.1rem',
      },
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
      },
      borderColor: {
        DEFAULT: 'hsl(var(--border))',
      },
      backgroundColor: {
        DEFAULT: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      textColor: {
        DEFAULT: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}
