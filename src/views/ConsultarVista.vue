<script setup>

</script>
<template>
    <!-- -------------          header               ------------ -->

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="/">
          <img src="https://hotelcordillera.cl/wp-content/uploads/2021/11/logo.jpg" height="50" alt="hotel logo"
            loading="lazy" style="margin-top: -1px;" /></a>

        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
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
                  <li><a class="dropdown-item" href="./">Cerrar sesión</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a class="dropdown-item" href="Servicios_Adicionales">Servicios adicionales</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
    <!--                   final de template                      -->
    <!-- Header-->



    <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class= "text-white">

                    <h1 class="display-4 fw-bolder text-center">Reserva con Nosotros</h1>
                    <p class="lead fw-normal text-white-50 mb-0">Elije tu fecha de llegada y salida</p>
                    <br>

                <form>

                  <input type="date" id="start"           min="2018-01-01" v-model ="fecha_inicio">
                  <input type="date" id="fin"            min="2018-01-01" v-model="fecha_fin">
                  {{ fecha_inicio}}{{ fecha_fin }}  
                  <div class="form-group w-25">
                      <br>
                      <label for="inputsm"> Cantidad Adultos</label>
                      <input class="form-control input-sm" id="inputsm" type="text">
                    </div>
                    <br>
                    <div class="form-group w-25">
                      <label for="inputdefault">Cantidad Niños</label>
                      <input class="form-control" id="inputdefault" type="text">
                    </div>
                  </form>
                </div>
                <button @click="mostrarColeccionCompleta">buscar</button>
            </div>
        </header>


        <section class="py-5">
              <div class="container px-4 px-lg-5 mt-5">
                  <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                      <div class="col mb-3" v-for="reserva in ArregloHabitacion" :key="reserva">
                        <Tarjetas :habitacion="reserva.habitacion"
                                          :precio="reserva.precio"/>

                      </div>
                  </div>
                  </div>
          </section> 

              
    <!-- Footer-->
    <footer class="py-5 bg-dark" style="margin-top: 2%;">
      <div class="container">
        <p class="m-0 text-center text-white">&copy; Hotel Cordillera, 2023</p>
      </div>
    </footer>
  </template>
  <script>
  import { collection, getDocs } from 'firebase/firestore';
  import { db } from "../main.js";
import Tarjetas from '../components/TarjetasReservas.vue';
  
  const ArregloHabitacion = [];

  

  export default {
    data() {
    return {
      fecha_fin:null,
      fecha_inicio:null,
      startDate: null,
      endDate: null
    }
  },
  /* /*watch: {
    startDate: function(newVal, oldVal) {
      if (newVal && this.endDate) {
        console.log(`Selected date range: ${this.startDate} - ${this.endDate}`)
      }
    },
    endDate: function(newVal, oldVal) {
      if (newVal && this.startDate) {
        console.log(`Selected date range: ${this.startDate} - ${this.endDate}`)
      }
    }
  },*/
    methods: {
      async  mostrarColeccionCompleta() {
        const querySnapshot = await getDocs(collection(db, "Reservas"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
    //console.log(inicio);
    //console.log(fin);
    }

  }} 

  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }</style>
