import { createWebHistory, createRouter } from "vue-router"

import Creacion_Gente from '@/views/Creacion_Gente'
import PageNotFound from '@/views/PageNotFound.vue'
import home_Inicio from '@/views/home_Inicio.vue'

const routes = [
{
	path:"/home_Inicio",
	name: "home",
	component: home_Inicio,
	},
{
	path: '/Creacion_Gente',
	name: "Creacion_Gente",
	component: Creacion_Gente,
	},
{
	path: '/:catchAll(.*)*',
	name: "PageNotFound",
	component: PageNotFound
	},

]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router