// const path = require('path')

// module.exports = {
//   i18n: {
//     defaultLocale: 'es',
//     locales: ['en', 'es'],
   
//     localeDetection: false
//   },
//   localePath: path.resolve('./public/locales'),
//   reloadOnPrerender: process.env.NODE_ENV === 'development'
// }
console.log(process.env.NODE_ENV);

module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'es'],
    },
    reloadOnPrerender: process.env.NODE_ENV == "development"
  };