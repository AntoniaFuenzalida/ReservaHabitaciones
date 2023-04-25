import { createWebHistory, createRouter } from "vue-router"

import Creacion_Gente from '@/views/Creacion_Gente'
import PageNotFound from '@/views/PageNotFound.vue'
import home_Inicio from '@/views/home_Inicio.vue'
import Crear_Usuario from "@/views/Crear_Usuario.vue"
import menu_Usuario from "@/views/menu_Usuario.vue"
import ReservasVistas from "@/views/ReservasVistas.vue"
import ConsultarVista from "@/views/ConsultarVista.vue"
import servicioAdicional from "@/views/servicioAdicional.vue"
import pagina_home from "@/views/pagina_home.vue"
const routes = [
	{
		path: "/",
		name: "home_Inicio",
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
	{
		path: "/Iniciar_sesion",
		name: "Crear_Usuario",
		component: Crear_Usuario,
	},
	{
		path: "/menu_Usuario",
		name: "menu_Usuario",
		component: menu_Usuario,
	},
	{
		path: "/Consulta_Vistas",
		name: "Reserva_Vistas",
		component: ReservasVistas,
	},
	{
		path: "/Reservar_Vista",
		name: "ConsultarVista",
		component: ConsultarVista,
	},
	{
		path: "/Servicios_Adicionales",
		name: "Servicios_Adicionales",
		component: servicioAdicional,
	},
	{
		path: "/Algo",
		name: "Pagina_home",
		component: pagina_home,
	}
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router