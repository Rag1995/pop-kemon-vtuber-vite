import { createApp } from 'vue'
import '@/assets/scss/_index.scss'
import App from './App.vue'
import router from './router/index'
import i18n from './i18n/index'
import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(router).use(i18n).use(pinia).mount('#app')
