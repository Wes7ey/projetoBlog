import sheet from '@/assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(sheet)

app.mount('#app')
