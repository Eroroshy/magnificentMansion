import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import './style.css'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import UsuarioView from './views/UsuarioView.vue'
import InquilinoView from './views/InquilinoView.vue'
import ServiciosView from './views/ServiciosView.vue'
import SucursalView from './views/SucursalView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', component: HomeView},
        {path:'/Usuarios', component: UsuarioView},
        {path:'/Inquilinos', component: InquilinoView},
        {path:'/Servicios', component: ServiciosView},
        {path:'/Sucursales', component: SucursalView}
    ]
})
export default router


const app = createApp(App);
app.use(router);
app.use("#app")
app.mount('#app')
