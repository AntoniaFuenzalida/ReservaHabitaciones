<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="/">
                <img
                    src="https://hotelcordillera.cl/wp-content/uploads/2021/11/logo.jpg"
                    height="50"
                    alt="hotel logo"
                    loading="lazy"
                    style="margin-top: -1px"
            /></a>

            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
            >
                <div class="offcanvas-header">
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Menú
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a
                                        class="dropdown-item"
                                        href="./menu_Usuario"
                                        >Perfil</a
                                    >
                                </li>
                                <li>
                                    <a class="dropdown-item" href="./"
                                        >Cerrar sesión</a
                                    >
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <a
                                        class="dropdown-item"
                                        href="Servicios_Adicionales"
                                        >Servicios adicionales</a
                                    >
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    <!-- Header-->
    <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
            <div class="text-white">
                <h1 class="display-4 fw-bolder text-center">
                    Reserva con Nosotros
                </h1>
                <p class="lead fw-normal text-white-50 mb-0">
                    Elije tu fecha de llegada y salida
                </p>
                <br />

                <form>
                    <input
                        type="date"
                        id="start"
                        min="2018-01-01"
                        v-model="fecha_inicio"
                    />
                    <input
                        type="date"
                        id="fin"
                        min="2018-01-01"
                        v-model="fecha_fin"
                    />
                    <div class="form-group w-25">
                        <br />
                        <label for="inputsm"> Cantidad Adultos</label>
                        <input
                            class="form-control input-sm"
                            id="inputsm"
                            type="text"
                            v-model="adultos"
                        />
                    </div>
                    <br />
                    <div class="form-group w-25">
                        <label for="inputdefault">Cantidad Niños</label>
                        <input
                            class="form-control"
                            id="inputdefault"
                            type="text"
                            v-model="kid"
                        />
                    </div>
                </form>
            </div>
            <button @click="reservaFiltradas()">buscar</button>
        </div>
    </header>

    <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
            <div
                class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
            >
                <div class="col mb-3" v-for="reserva in final" :key="reserva">
                    <Tarjetas
                        :reserva="reserva"
                        :fecha-fin="fecha_fin"
                        :fecha-inicio="fecha_inicio"
                    />
                </div>
                <div v-if="this.final.length == 0">
                    <p>No hay disponibles habitaciones para esos valores</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer-->
    <footer class="py-5 bg-dark" style="margin-top: 2%">
        <div class="container">
            <p class="m-0 text-center text-white">
                &copy; Hotel Cordillera, 2023
            </p>
        </div>
    </footer>
</template>

<script setup>
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../main.js";

function getCookie(nombre) {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.startsWith(nombre + '=')) {
      return decodeURIComponent(cookie.substring(nombre.length + 1));
    }
  }
  return null;
}
let nombre = getCookie('usuarioRegistrado')

</script>

<script>
import Tarjetas from "../components/TarjetasReservas.vue";
import { z } from "alga-css/src/configs/preset";

export default {
    data() {
        return {
            ArregloHabitacion: [
                {
                    habitacion: "test",
                    precio: "1000",
                    adultos: null,
                    kids: null,
                },
            ],
            fecha_fin: null,
            fecha_inicio: null,
            startDate: null,
            endDate: null,
            Habitaciones: [],
            reservas: [],
            final: [],
        };
    },
    components: {
        Tarjetas,
    },

    methods: {
        async reservaFiltradas() {
            //creo variables auxiliares para hacer la verificacion si las fechas son validas(que no sean menor a hoy )
            let auxFechainicio = new Date(this.fecha_inicio);
            let auxFechaFin = new Date(this.fecha_fin);
            let fechaHoy = new Date();
            auxFechaFin.setDate(auxFechaFin.getDate() + 1);
            auxFechainicio.setDate(auxFechainicio.getDate() + 1);
            fechaHoy.setHours(0, 0, 0, 0);
            auxFechainicio.setHours(0, 0, 0, 0);
            auxFechaFin.setHours(0, 0, 0, 0);

            //diferencia entre hoy y la de llegada

            var diferenciaMs = Math.abs(auxFechainicio - fechaHoy);

            // Convertir la diferencia en días
            let dif_ini_hoy = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));

            // diferencia entre inicio y salida
            diferenciaMs = Math.abs(auxFechaFin - auxFechainicio);
            let dif_ini_fin = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));

            //diferencia entre la salida y hoy
            diferenciaMs = Math.abs(auxFechaFin - fechaHoy);
            let dif_hoy_fin = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));

            //verifica que la fecha no se salga de los limites de un año
            if (
                dif_ini_hoy >= 365 ||
                dif_ini_fin >= 365 ||
                dif_hoy_fin >= 365
            ) {
                this.fecha_fin = NaN;
                this.fecha_inicio = NaN;
                this.final = [];
            }

            //verifica que la fecha sea valida
            if (
                auxFechainicio >= auxFechaFin ||
                auxFechainicio < fechaHoy ||
                auxFechaFin <= fechaHoy
            ) {
                this.fecha_fin = NaN;
                this.fecha_inicio = NaN;
                this.final = [];
                console.log("la fecha no es valida");
            } else {
                let fechaInicio = new Date(this.fecha_inicio);
                let fechaFin = new Date(this.fecha_fin);

                fechaInicio = fechaInicio.toISOString().split("T")[0];
                fechaFin = fechaFin.toISOString().split("T")[0];

                const result = await getDocs(collection(db, "Habitaciones"));
                const resultreservas = await getDocs(
                    collection(db, "Reservas")
                );

                let fechaInicioUsuario = Number(
                    fechaInicio.replaceAll("-", "")
                );
                let fechaFinUsuario = Number(fechaFin.replaceAll("-", ""));

                let fechaInicioReserva;
                let fechaFinReserva;

                // buscar en las reservas las habitaciones que ya estan ocupadas en esas fechas
                let HabitacionesOcupadas;
                HabitacionesOcupadas = [];
                resultreservas.forEach((reserva) => {
                    fechaInicioReserva = Number(
                        reserva.data().fechaIngreso.replaceAll("-", "")
                    );
                    fechaFinReserva = Number(
                        reserva.data().fechaSalida.replaceAll("-", "")
                    );

                    if (
                        fechaInicioUsuario <= fechaInicioReserva &&
                        fechaFinUsuario >= fechaFinReserva
                    ) {
                        HabitacionesOcupadas.push(
                            reserva.data().numeroHabitacion
                        );
                    }

                    if (
                        fechaFinUsuario >= fechaInicioReserva &&
                        fechaFinUsuario <= fechaFinReserva
                    ) {
                        HabitacionesOcupadas.push(
                            reserva.data().numeroHabitacion
                        );
                    }

                    if (
                        fechaInicioUsuario >= fechaInicioReserva &&
                        fechaInicioUsuario <= fechaFinReserva
                    ) {
                        HabitacionesOcupadas.push(
                            reserva.data().numeroHabitacion
                        );
                    }
                });

                this.final = [];

                if (isNaN(this.adultos)) {
                    this.adultos = 0;
                }
                if (!Number(this.adultos)) {
                    this.adultos = 0;
                }
                if (isNaN(this.kid) || this.kid == "" || Number(this.kid) < 1) {
                    this.kid = 0;
                }

                setCookie("ninos", this.kid, 1);
                setCookie("adultos", this.adultos, 1);

                if (Number(this.adultos) > 0) {
                    let tamanno = Number(this.adultos) + Number(this.kid) / 2;
                    result.forEach((doc) => {
                        if (HabitacionesOcupadas.includes(doc.data().numero)) {
                            console.log();
                        } else if (
                            Number(doc.data().cantidadCamas) >= tamanno &&
                            Number(doc.data().cantidadCamas) <= tamanno + 2
                        ) {
                            this.final.push(doc.data());
                        }
                    });
                } else {
                    console.log("no cumple la cantidad de adultos");
                }
            }
        },
    },
};

function setCookie(nombre, valor, expiracion) {
    var fechaExpiracion = new Date();
    fechaExpiracion.setTime(
        fechaExpiracion.getTime() + expiracion * 24 * 60 * 60 * 1000
    );
    var cookie =
        nombre +
        "=" +
        encodeURIComponent(valor) +
        "; expires=" +
        fechaExpiracion.toUTCString() +
        "; path=/";
    document.cookie = cookie;
}
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
}
</style>
