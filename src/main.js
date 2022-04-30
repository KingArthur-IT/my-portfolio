import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import { localesTexts } from './locales/main.js'

const i18n = createI18n({
    locale: 'ru', // set locale
    fallbackLocale: 'ru', // set fallback locale
    messages: localesTexts, 
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
