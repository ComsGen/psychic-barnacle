module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production'
        ? {
            '@fullhuman/postcss-purgecss': {
              content: [
                './core/**/*.js',
                './pages/**/*.js',
                './components/**/*.js'
              ],
              defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
            }
          }
        : {})
    }
  };