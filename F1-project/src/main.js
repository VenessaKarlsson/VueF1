import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Importerar bootstraps css
import 'bootstrap/dist/css/bootstrap.css'
//Här importerar man bootstraps javascript, för att få bootstraps
// javascript funktionalitet att fungera.
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bootstrap)

app.mount('#app')
