import Vue from 'vue'
import VueI18n from 'vue-i18n'

import ar from './ar.json'
import de from './de.json'
import en from './en.json'
import es from './es.json'
import fr from './fr.json'
import it from './it.json'
import ja from './ja.json'
import pl from './pl.json'
import ko from './ko.json'
import pt from './pt.json'
import ptBR from './pt-br.json'
import ru from './ru.json'
import zhCN from './zh-cn.json'
import zhTW from './zh-tw.json'
import tr from './tr.json'

Vue.use(VueI18n)

export function detectLocale () {
  let locale = (navigator.language || navigator.browserLangugae).toLowerCase()
  switch (true) {
    case /^en.*/i.test(locale):
      locale = 'en'
      break
    case /^it.*/i.test(locale):
      locale = 'it'
      break
    case /^fr.*/i.test(locale):
      locale = 'fr'
      break
    case /^pt.*/i.test(locale):
      locale = 'pt'
      break
    case /^tr.*/i.test(locale):
      locale = 'tr'
      break
    case /^pt-BR.*/i.test(locale):
      locale = 'pt-br'
      break
    case /^ja.*/i.test(locale):
      locale = 'ja'
      break
    case /^zh-CN/i.test(locale):
      locale = 'zh-cn'
      break
    case /^zh-TW/i.test(locale):
      locale = 'zh-tw'
      break
    case /^zh.*/i.test(locale):
      locale = 'zh-cn'
      break
    case /^es.*/i.test(locale):
      locale = 'es'
      break
    case /^de.*/i.test(locale):
      locale = 'de'
      break
    case /^ru.*/i.test(locale):
      locale = 'ru'
      break
    case /^pl.*/i.test(locale):
      locale = 'pl'
      break
    case /^ko.*/i.test(locale):
      locale = 'ko'
      break
    default:
      locale = 'en'
  }

  return locale
}

const i18n = new VueI18n({
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: {
    'ar': ar,
    'de': de,
    'en': en,
    'es': es,
    'fr': fr,
    'tr': tr,
    'it': it,
    'ja': ja,
    'ko': ko,
    'pl': pl,
    'pt-br': ptBR,
    'pt': pt,
    'ru': ru,
    'zh-cn': zhCN,
    'zh-tw': zhTW
  }
})

export default i18n
