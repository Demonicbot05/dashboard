module.exports = {
  plugins: [
    require('@tailwindcss/postcss')({
      config: './tailwind.config.js', // adjust if yours is in a different path
    }),
    require('autoprefixer'),
  ],
};
