import { createWebHistory, createRouter } from "vue-router"
import Crear_Usuario from "@/views/Crear_Usuario.vue"
import Creacion_Gente from '@/views/Creacion_Gente'
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
{
	path:"/",
	name: "Crear_Usuario",
	component: Crear_Usuario,
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