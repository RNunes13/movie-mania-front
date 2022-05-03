const path = require('path')

const LOCALES = ['pt-BR', 'en']
const DEFAULT_LOCALE = 'pt-BR'
const FALLBACK_LOCALES = ['pt', 'br']

module.exports = {
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  fallbackLocales: FALLBACK_LOCALES,
  i18n: {
    locales: LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    localeDetection: false,
    localePath: path.resolve('./public/static/locales'),
  }
}
