import { createApp } from 'vue'
import App from './App.vue'
import pinia from './store/pinia'
import router from './router';
import './reset.css';
import './registerServiceWorker'



const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')