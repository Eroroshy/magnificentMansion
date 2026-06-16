import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import './style.css'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import UsuarioView from './views/UsuarioView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', component: HomeView},
        {path:'/Usuarios', component: UsuarioView}
    ]
})
export default router

createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.use("#app")
