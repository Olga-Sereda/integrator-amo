import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import  { createBootstrap } from 'bootstrap-vue-next'
import './style.css'
import App from './App.vue'

const pinia = createPinia()


createApp(App).use(createBootstrap())

createApp(App).use(pinia).mount('#app')
