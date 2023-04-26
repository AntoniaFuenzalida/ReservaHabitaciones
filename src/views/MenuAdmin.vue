<script>
import { DatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'

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
    <div class="container-fluid px-4 px-lg-5">
        <a class="navbar-brand" href="#!">
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
                    menu
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
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
    <div class="row" style="margin-top: 3%;" v-if="seleccionado.reserva">
        <div class="card mb-4">
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
    </div>

<!--pop up-->

<div class="modal fade" id="MenuAyuda" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-4" id="exampleModalLabel">Ayuda</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <ul class="list-group">
                                    <li class="list-group-item"> <img src="/verde.ico">Reserva lista</li>
                                    <li class="list-group-item"> <img src="/amarillo.ico">Reserva por confirmar
                                    </li>
                                    <li class="list-group-item"> <img src="/rojo.ico">Reserva cancelada</li>
                                    <li class="list-group-item"> <img src="/azul.ico">Reserva utilizada</li>
                                    <li class="list-group-item"> <img src="/trash.ico">Cancelar/Eliminar Reserva
                                    </li>
                                </ul>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>


        <!-- Footer-->
        <footer class="py-5 bg-dark">
          <div class="container"><p class="m-0 text-center text-white">Gralord.18 &copy; Prueba hotel</p></div>
      </footer>

<!---->

</template>

<style></style>