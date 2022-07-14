import { createApp } from 'vue'
import App from './AppMain.vue'
import router from './router'
import store from './store'

import './scss/style.scss';


createApp(App).use(store).use(router).mount('#app')
