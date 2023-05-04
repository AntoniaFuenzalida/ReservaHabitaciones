<script>
import { DatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'

/*
import { db }  from "../main.js";
let habitaciones = db.ref('Habitaciones');
 
export default {
 name: 'App',
 
 firebase: {
    habitaciones: habitaciones
 },
 
 data(){
    return {
       Habitacion_nueva: {
          numero: NaN,
          cantidadDeCamas: NaN,
          descripcion: NaN,
          precio: NaN
       }
    }
 },
 methods:{
    agregar: function() {
       habitaciones.push(this.habitacion_nueva, function(error){
          if (error){
             toastr.error('Error al intentar agregar el registro.', 'Aviso');
          }else{ 
             toastr.success('Registro agregado correctamente.', 'Aviso');
          }
       });
       this.Habitacion_nueva.numero = '';
       this.Habitacion_nueva.cantidadDeCamas = ''; 
       this.Habitacion_nueva.descripcion = ''; 
       this.Habitacion_nueva.precio = ''; 

    },
    modificar: function(p_compra){ 
       compras.child(p_compra['.key']).set({
          nombre: p_compra.nombre,
          cantidad: p_compra.cantidad
       }, function(error){
          if (error){
             toastr.error('Error al intentar modificar el registro.', 'Aviso');
          }else{ 
             toastr.success('Registro modificado correctamente.', 'Aviso');
          }
       }); 
    },
    eliminar: function(p_compra){
       compras.child(p_compra['.key']).remove(function(error){
          if (error){
             toastr.error('Error al intentar eliminar el registro.', 'Aviso');
          }else{ 
             toastr.success('Registro eliminado correctamente.', 'Aviso');
          }
       }); 
    },
    validarCompra: function(p_compra){
       return (
          p_compra.nombre.split(' ').join('') != '' &&
          !isNaN(parseInt(p_compra.cantidad, 10))
       );
    }
    }
}
 */

</script>
<script setup>

import { reactive, ref } from 'vue';
const seleccionado = reactive({
  fecha: NaN,
  reserva: NaN
  
});
const masks = ref({
  modelValue: 'DD-MM-YYYY',
});

//const ReservaLista = "";
//const ReservaPorConfirmar = 1;
//const ReservaCancelada = 1;
//const ReservaUtilizada = 1;

// ArregloReservas es un placeholder habra que cambiarlo cuando se realize la version definitiva
const ArregloReservas = [
    {
        fecha: "02-05-2023",
        habitacion: "7",
        estado: "Lista",
    },
    {
        fecha: "26-04-2023",
        habitacion: "3",
        estado: "PorConfirmar",
    },
    {
        fecha: "02-08-2023",
        habitacion: "7",
        estado: "Utilizada",
    }
];

const CargarFecha = () => {
    seleccionado.reserva = NaN
    console.log(seleccionado.fecha)
    console.log(seleccionado.reserva)
}
const Seleccionar = (reserva) => {
    seleccionado.reserva = reserva
}

</script>

<template>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="/">
            <img
            src="https://hotelcordillera.cl/wp-content/uploads/2021/11/logo.jpg"
            height="50"
            alt="hotel logo"
            loading="lazy"
            style="margin-top: -1px;"
            /></a>

        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Menú
                    </a>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="./menu_Usuario">Perfil</a></li>
                    <li><a class="dropdown-item" href="/">Cerrar sesión</a></li>
                    </ul>
                </li>
                </ul>
            </div>
        </div>
    </div>

    </nav>
<!---->

      <!-- Header-->
  <header class="bg-dark py-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="text-white">

        <h1 class="display-4 fw-bolder text-center">Menu Admin</h1>

        <form>


        </form>

      </div>
    </div>
  </header>
    
    <!----->
    <div class="row" style="margin-top: 3%;">
        <div class="col-lg-4">
            <div class="card mb-4">
                <div class="card-body text-center">
                    <DatePicker @click="CargarFecha" v-model.string="seleccionado.fecha" :masks="masks" />
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card mb-4">
                <div class="card-body">
                    <div class="overflow-scroll" style="max-height: 272px;">
                        <ul class="list-goup">
                            <li class="list-group-item mt-3" v-for="reserva in ArregloReservas" :key="reserva.fecha & reserva.habitacion">
                                <div class="DropDown"  v-if="reserva.estado==='Lista' && seleccionado.fecha===reserva.fecha">
                                    <div class="dropdown-header" @click="Seleccionar(reserva)">
                                        <img src="/verde.ico" class="dropdown-icon">
                                        {{ reserva.fecha }}  // habitacion: {{ reserva.habitacion }}
                                    </div>
                                </div>
                                <div class="dropdown"  v-else-if="reserva.estado==='Cancelada' && seleccionado.fecha===reserva.fecha">
                                    <div class="dropdown-header" @click="Seleccionar(reserva)">
                                        <img src="/rojo.ico" class="dropdown-icon">
                                        {{ reserva.fecha }}  // habitacion: {{ reserva.habitacion }}
                                    </div>
                                </div>
                                <div class="dropdown"  v-else-if="reserva.estado==='PorConfirmar' && seleccionado.fecha===reserva.fecha">
                                    <div class="dropdown-header" @click="Seleccionar(reserva)">
                                        <img src="/amarillo.ico" class="dropdown-icon">
                                        {{ reserva.fecha }}  // habitacion: {{ reserva.habitacion }}
                                    </div>
                                </div>
                                <div class="dropdown"  v-else-if="reserva.estado==='Utilizada' && seleccionado.fecha===reserva.fecha">
                                    <div class="dropdown-header" @click="Seleccionar(reserva)">
                                        <img src="/azul.ico" class="dropdown-icon">
                                        {{ reserva.fecha }}  // habitacion: {{ reserva.habitacion }}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>  
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                <div class="card mb-6" style="margin-left: 12%;">
                        
                
                </div>
                </div>
          
            </div>
        </div>
    </div>
    <div class="row" style="margin-top: 3%;">
        <div class="card mb-4" v-if="seleccionado.reserva">
            <ul class="list-goup">
                <li class="list-group-item mt-2">
                    Fecha: {{ seleccionado.reserva.fecha }}
                </li>
                <li class="list-group-item mt-2">
                    habitacion: {{ seleccionado.reserva.habitacion }}
                </li>
                <li class="list-group-item mt-2">
                    Estado: {{ seleccionado.reserva.estado }}
                </li>
            </ul>
        </div>
        <div class="card mb-4" v-if="!seleccionado.reserva">
            <ul class="list-goup">
                <li class="list-group-item mt-2">
                    Fecha: ------
                </li>
                <li class="list-group-item mt-2">
                    habitacion: ------
                </li>
                <li class="list-group-item mt-2">
                    Estado: ------
                </li>
            </ul>
        </div>
    </div>

    <div class="row" style="margin-top: 1%; margin-left: 100px; margin-right: 100px; margin-bottom: 20px;">
        <div class="col">
            <div class="card mt-4" style="margin-left: 20px; margin-right: 20px;">
                <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#ResumenGeneral">Resumen General</button>
            </div>
        </div>
        <div class="col">
            <div class="card mt-4" style="margin-left: 20px; margin-right: 20px;">
                <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#DatosContacto">Cambiar Datos de Contacto</button>
            </div>
        </div>
        <div class="col">
            <div class="card mt-4" style="margin-left: 20px; margin-right: 20px;">
                <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#AgregarHabitacion">Agregar Habitacion</button>
            </div>
        </div>
        <div class="col">
            <div class="card mt-4" style="margin-left: 20px; margin-right: 20px;">
                <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#ModificarHabitacion">Modificar Habitacion</button>
            </div>
        </div>
    </div>


        <!-- Footer-->
        <footer class="py-5 bg-dark">
          <div class="container"><p class="m-0 text-center text-white">&copy; Hotel Cordillera, 2023</p></div>
      </footer>

<!---->

<!--pop ups-->
<div class="modal fade" id="ResumenGeneral" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-4" id="exampleModalLabel">Resumen General</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="DatosContacto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-4" id="exampleModalLabel">Datos Contacto</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="AgregarHabitacion" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-4" id="exampleModalLabel">Agregar Habitacion</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    
                <!--  -->
                    <div class="container">
                        <div class="row">
                        
                            <select class="form-control">
                             <option>habitacion</option>
                            </select>
                            
                        </div>
                        
                        <div class="row">
                            
                            <div class="col" style="width:20%; ">
                                <p>hola</p>
                            </div>

                            <div class="col" style=" margin:0 auto">
                                
                                <button type="button" class="btn btn-dark">Guardar</button>
                            </div>
                            
                        </div>

                        <div class="row">
                            <button type="button" class="btn btn-dark">Guardar</button>
                        </div>

                        <div class="row">
                            <button type="button" class="btn btn-dark">Guardar</button>
                        </div>

                        <div class="row">
                            <button type="button" class="btn btn-dark">Guardar</button>
                        </div>

                    </div>


                </div>
                <div class="modal-footer">
                    
                   <!--  v-for="habitacion in habitaciones" :key="habitacion" -->

                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-dark">Guardar</button>
                
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="ModificarHabitacion" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-4" id="exampleModalLabel">Modificar Habitacion</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                
            <!-- botones -->
                <div>
                        <button type="button" class="btn btn-dark">Cancelar</button>
                        <button type="button" class="btn btn-dark">Guardar</button>
                </div>



                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>

</template>



<style></style>