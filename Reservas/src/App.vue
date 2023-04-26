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
    components: { Dropdown }
}
</script>
<script setup>
import Dropdown from './components/Dropdown.vue';


const ReservaLista = "";
const ReservaPorConfirmar = 1;
const ReservaCancelada = 1;
const ReservaUtilizada = 1;

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
    }];

const UsuarioActual = ["Rut = 25468597-6","Nombre: Rosa Melano"];

const Regresar = () => {
    console.log("Regresando...")
}


</script>

<template>
    <div class="container-fluid " style="height:100%;">
        <div class="row">
            <div class="col">
                <button @click="Regresar" class="btn btn-danger" style="margin: 5px;">Regresar</button>
            </div>
        </div>

        <div class="row">
            <div class="col-9">
                <ul class="list-goup mt-4">
                    <li class="list-group-item mt-3" v-for="reserva in ArregloReservas">
                        <Dropdown :fecha="reserva.fecha" :habitacion="reserva.habitacion" :estado="reserva.estado"/>
                    </li>
                </ul>
            </div>
            <div class="col-3">
                <h2>Datos de usuario</h2>
                <ul class="list-goup mt-4">
                    <li class="list-group-item mt-3" v-for="dato in UsuarioActual">
                        {{ dato }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#MenuAyuda" style="margin: 5px;">
                    Ayuda
                </button>
                <div class="modal fade" id="MenuAyuda" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content" style="background-color: darkgoldenrod;">
                            <div class="modal-header">
                                <h1 class="modal-title fs-4" id="exampleModalLabel">Ayuda</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <ul class="list-group">
                                    <li class="list-group-item"> <img src="/verde.ico">&nbsp&nbsp Reserva lista</li>
                                    <li class="list-group-item"> <img src="/amarillo.ico">&nbsp&nbsp Reserva por confirmar</li>
                                    <li class="list-group-item"> <img src="/rojo.ico">&nbsp &nbspReserva cancelada</li>
                                    <li class="list-group-item"> <img src="/azul.ico">&nbsp&nbsp Reserva utilizada</li>
                                    <li class="list-group-item"> <img src="/trash.ico">&nbsp&nbsp Cancelar/Eliminar Reserva</li>
                                </ul>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<style>
</style>