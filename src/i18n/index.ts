import de from '@/assets/translations/de.json'
import en from '@/assets/translations/en.json'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  locale: 'de',
  fallbackLocale: 'en',
  messages: {
    de,
    en,
  },
})

export default i18n
