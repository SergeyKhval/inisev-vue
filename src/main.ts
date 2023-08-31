import {createApp} from 'vue'
import 'normalize.css'
import {router} from './plugins/router'
import App from './App.vue'


const app = createApp(App)
app.use(router);
app.mount('#app')
