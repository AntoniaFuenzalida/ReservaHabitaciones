<script>
export default {
    porps: {
        tittle: String
    },
    data: () => ({
        Mostrar: false
    }),
    methods: {
        Desplegar() {
            this.Mostrar = !this.Mostrar;
        }
    },
    components: { DropDown }
}
</script>
<script setup>
import DropDown from '../components/DropDown.vue';


//const ReservaLista = "";
//const ReservaPorConfirmar = 1;
//const ReservaCancelada = 1;
//const ReservaUtilizada = 1;

// ArregloReservas es un placeholder habra que cambiarlo cuando se realize la version definitiva

const ArregloReservas = [
    {
        fecha: "02-05",
        habitacion: "7",
        estado: "Lista",
    },
    {
        fecha: "26-04",
        habitacion: "3",
        estado: "PorConfirmar",
    },
    {
        fecha: "02-08",
        habitacion: "7",
        estado: "Utilizada",
    },
    {
        fecha: "02-08",
        habitacion: "7",
        estado: "Utilizada",
    },
    {
        fecha: "02-05",
        habitacion: "7",
        estado: "Lista",
    },
    {
        fecha: "26-04",
        habitacion: "3",
        estado: "PorConfirmar",
    },
    {
        fecha: "02-08",
        habitacion: "7",
        estado: "Utilizada",
    },
    {
        fecha: "26-04",
        habitacion: "3",
        estado: "PorConfirmar",
    },
    {
        fecha: "02-08",
        habitacion: "7",
        estado: "Utilizada",
    },
    {
        fecha: "02-08",
        habitacion: "7",
        estado: "Utilizada",
    }

];

const UsuarioActual =
{
    Rut: "25468597-6",
    Nombre: "Rosa Melano"
}

/*const Regresar = () => {
    console.log("Regresando...")
}
*/

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
                    <h5 class="my-3">{{ UsuarioActual.Nombre }}</h5>
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
                                {{ UsuarioActual.Nombre }}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Rut:</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">{{ UsuarioActual.Rut }}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Número Celular:</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">(097) 234-5678</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Correo Electronico</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">rosamelano@gmail.com</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Dirección</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">Avenida siempre viva 742, Maitencillo </p>
                        </div>
                    </div>
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