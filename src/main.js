import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Clarity from '@microsoft/clarity';

// Make sure to add your actual project id instead of "yourProjectId".
const projectId = "tv4hmrvb76"

Clarity.init(projectId);

const app = createApp(App)

app.use(router)

app.mount('#app')
