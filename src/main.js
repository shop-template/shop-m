import { createApp } from 'vue'
import App from './App.vue'
import addVant from './plugins/vant'

const app = createApp(App)

addVant(app)

app.mount('#app')
