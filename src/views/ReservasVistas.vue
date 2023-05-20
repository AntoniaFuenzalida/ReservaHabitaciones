


<script setup>
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../main.js";

</script>
<script>
let nombreActivo

import DropDown from "../components/DropDown.vue";
export default {
    name: "menu_usuario",
     data() {
        return {
            correo: null,
            rut: null,
            nombre: null,
            telefono:null
        };
    },
    created() {
       this.correo= this.getCookie('usuarioRegistrado')
       this.buscarUSuario()
    },
    methods: {
      getCookie(nombre) {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.startsWith(nombre + '=')) {
      return decodeURIComponent(cookie.substring(nombre.length + 1));
    }

  }
  return null;
},
    async buscarUSuario()
{
    const usuarios = await getDocs(collection(db, "Cuentas"));
usuarios.forEach((doc) => {
   var accountData = doc.data();
  if(accountData.Correo_Electronico ==this.correo){
  
  console.log(accountData)
  this.rut = accountData.Rut
  this.nombre= accountData.Nombre_Apellido 
  this.telefono= accountData.Telefono

  return(accountData)
  }
});



}
    }, 
    components:
    {
        DropDown
    }
};


</script>




<template>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid px-4 px-lg-5">
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
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Menú
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="./menu_Usuario">Perfil</a></li>
                                <li><a class="dropdown-item" href="./">Cerrar sesión</a></li>
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

                <h1 class="display-4 fw-bolder text-center">Reservas</h1>

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
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                        class="rounded-circle img-fluid" style="width: 150px;">
                    <h5 class="my-3">{{ this.nombre }}</h5>
                    <div class="d-flex justify-content-center mb-2">
                        <button type="button" onclick="location.href='./menu_Usuario';"
                            class="btn btn-primary">Regresar</button>
                        <button type="button" class="btn btn-outline-primary ms-1" data-bs-toggle="modal"
                            data-bs-target="#MenuAyuda">Ayuda</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Nombre:</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">
                                {{this.nombre}}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Rut:</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">{{this.rut}}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Número Celular:</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">{{ this.telefono }}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Correo Electronico</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">{{ this.correo }}</p>
                        </div>
                    </div>
                    <hr>

                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="card mb-6" style="margin-left: 12%;">
                        <div>
                            <ul class="list-goup mt-4">
                                <li class="list-group-item mt-3" v-for="reserva in ArregloReservas" :key="reserva">
                                    <DropDown :fecha="reserva.fecha" :habitacion="reserva.habitacion"
                                        :estado="reserva.estado" />
                                </li>
                            </ul>
                        </div>
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" style="text-align: center;">
                            <p>Reservas</p>
                        </div>
                    </div>
                </div>
            </div>
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
        <div class="container">
            <p class="m-0 text-center text-white">&copy; Hotel Cordillera, 2023</p>
        </div>
    </footer>

    <!---->
</template>

<style></style>