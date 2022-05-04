import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import addVant from './plugins/vant'

const app = createApp(App)
app.use(router)
app.use(createPinia())

addVant(app)

app.mount('#app')
