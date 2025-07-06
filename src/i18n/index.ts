import { createI18n } from 'vue-i18n'
import de from '@/assets/translations/de.json'

const i18n = createI18n({
  legacy: false,
  locale: 'de',
  messages: {
    de,
  },
})

export default i18n
