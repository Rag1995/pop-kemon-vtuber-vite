import { createI18n } from 'vue-i18n'
import zh from './lang/zh-TW'
import en from './lang/en-US'
import ja from './lang/ja-JP'

export default createI18n({
  legacy: false,
  locale: 'zh-TW',
  messages: {
    'zh-TW': zh,
    'en-US': en,
    'ja-JP': ja,
  },
})
