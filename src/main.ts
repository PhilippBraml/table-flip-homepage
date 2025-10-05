import 'vfonts/Lato.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import i18n from './i18n'
import router from './router'

import InstagramFeed from 'vue3-instagram-feed'
import 'vue3-instagram-feed/dist/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(InstagramFeed)

app.mount('#app')
