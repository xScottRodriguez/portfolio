console.log(process.env.NODE_ENV)

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es']
  },
  reloadOnPrerender: process.env.NODE_ENV == 'development'
}
