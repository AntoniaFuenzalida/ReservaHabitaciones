<script>
import { DatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'
import DropAdmin from "../components/DropAdmin.vue";
import app from '../main'
import { doc, getFirestore, setDoc, getDocs, collection } from "firebase/firestore";

export default {


    data() {
        return {
            cantidadCamas: '',
            descripcion: '',
            numero: '',
            precio: '',
            fecha:'',
            reservas: [],
        }
    },
    created() {
        console.log(this.fecha)
        this.buscarReservas()
    },
    components:
    {
        DropAdmin,
    },

    methods: {
        Sdate(){
            console.log(this.fecha)
            if(this.fecha=='')
            {
                console.log("seleccione una fecha")
            }
            this.buscarReservas(this.fecha)

        },
        //busca todas las reservas de hoy
        async buscarReservas(fechaB) {
            const db = getFirestore(app);
            let hoy
            hoy = new Date()
            hoy = hoy.toISOString().split("T")[0];
            if(fechaB!='')
            {
                hoy=fechaB
            }
            console.log(hoy)
            this.reservas = [];
            var usuario_reservas = [];
            const resul = await getDocs(collection(db, "Reservas"));
            resul.forEach((doc) => {
                console.log(doc.data)
                var accountData = doc.data();
                if (accountData.fechaIngreso == hoy) {
                    this.reservas.push(accountData);
                    usuario_reservas.push(accountData);
                }
            });
            //console.log(this.reservas.length)
            return usuario_reservas;
        },
        async guardarDatos() {
            console.log("Guardando")
            const db = getFirestore(app);
            if (await this.datosCorrectos(true) === 1) {
                await setDoc(doc(db, "Habitaciones", this.numero), {
                    cantidadCamas: this.cantidadCamas,
                    descripcion: this.descripcion,
                    numero: this.numero,
                    precio: this.precio,
                })
                console.log("termine de guardar")
            } else {
                console.log("Datos Incorrectos")
            }
        },
        async modificarDatos(numero) {
            console.log(numero)
            const db = getFirestore(app);
            this.numero = numero   // esto es para validar los datos
            if (await this.datosCorrectos(false) == 1) {
                await setDoc(doc(db, "Habitaciones", numero), {
                    cantidadCamas: this.cantidadCamas,
                    descripcion: this.descripcion,
                    numero: numero,
                    precio: this.precio,
                })
            } else {
                console.log("Datos Incorrectos")
            }
        },

        async Cerrarsecion() {
            this.setCookie('usuarioRegistrado', null, 1)
            location.href = "/Cerrar sesión"
        },

        async datosCorrectos(rep) {
            const db = getFirestore(app);
            const querySnapshot = await getDocs(collection(db, "Habitaciones"));
            var correcto = 1

            // numero valido      
            if (!Number(this.numero) && this.numero != "0") {
                correcto = 0
                console.log("El numero de habitacion debe ser un numero")
            }
            else if (this.numero < 1) {
                correcto = 0
                console.log("El numero de habitacion debe ser positivo")
            } else if (rep) {
                // numero de habitacion repetido
                querySnapshot.forEach((doc) => {
                    if (doc.data().numero == this.numero) {
                        correcto = 0
                        console.log("Numero repetido")
                    }
                },
                );
            }

            // precio valido
            if (!Number(this.precio) && this.precio != "0") {
                correcto = 0
                console.log("El precio de la habitacion debe ser un numero")
            } else if (this.precio < 1) {
                correcto = 0
                console.log("El precio de la habitacion debe ser positivo")
            }

            // cantidadCamas valido
            if (!Number(this.cantidadCamas) && this.cantidadCamas != "0") {
                correcto = 0
                console.log("La cantidad de camas de la habitacion debe ser un numero")
            } else if (this.cantidadCamas < 1) {
                correcto = 0
                console.log("La cantidad de camas de la habitacion debe ser positiva")
            }
            return correcto;
        },


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
        setCookie(nombre, valor, expiracion) {
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
        },




    }




}

</script>


<script setup>
import { reactive, ref } from 'vue';


const seleccionado = reactive({
    fecha: NaN,
    reserva: NaN,
    numero: NaN

});
const masks = ref({
    modelValue: 'YYYY-MM-DD',
});


var ArregloReservas = {}
var numHabitacion = {}





const cargarHabitacion = async () => {

    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "Habitaciones"));
    querySnapshot.forEach((doc) => {
        numHabitacion[doc.data().numero] = {
            numero: doc.data().numero,
        }
    }

    );
}

cargarHabitacion()
console.log(numHabitacion)
</script>

<template>
    <!-- Navigation-->
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
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Menú
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="./menu_Usuario">Perfil</a></li>
                                <li><a class="dropdown-item" @click="Cerrarsecion"></a></li>
                                <!--@click="   href="/">Cerrar sesión-->

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
                    <DatePicker @click="this.Sdate()" v-model.string="this.fecha" :masks="masks" />
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card mb-4">
                <div class="card-body">
                    <div class="overflow-scroll" style="max-height: 272px;">
                        <ul class="list-goup">
                            <li class="list-group-item mt-3" v-for="reserva in reservas" :key="reserva"
                                style="align-items: center">
                                <DropAdmin :reserva="reserva" />
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
    <div class="row" style="margin-top: 1%; margin-left: 100px; margin-right: 100px; margin-bottom: 20px;">
        <div class="col">
            <div class="card mt-4" style="margin-left: 20px; margin-right: 20px;">
                <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#ResumenGeneral">Resumen
                    General</button>
            </div>
        </div>
        <div class="col">
            <div class="card mt-4" style="margin-left: 20px; margin-right: 20px;">
                <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#DatosContacto">Cambiar
                    Datos de Contacto</button>
            </div>
        </div>
        <div class="col">
            <div class="card mt-4" style="margin-left: 20px; margin-right: 20px;">
                <button type="button" class="btn btn-dark" data-bs-toggle="modal"
                    data-bs-target="#AgregarHabitacion">Agregar Habitacion</button>
            </div>
        </div>
        <div class="col">
            <div class="card mt-4" style="margin-left: 20px; margin-right: 20px;">
                <button type="button" class="btn btn-dark" data-bs-toggle="modal"
                    data-bs-target="#ModificarHabitacion">Modificar Habitacion</button>
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


                        <div class="row" style="margin-top: 5%;">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">numero</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default" name="numero" v-model="numero">
                            </div>
                        </div>

                        <div class="row" style="margin-top: 2%;">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Cantidad Camas</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default" name="cantidadCamas"
                                    v-model="cantidadCamas">
                            </div>
                        </div>

                        <div class="row" style="margin-top: 2%;">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Precio</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default" name="precio" v-model="precio">
                            </div>
                        </div>

                        <div class="input-group">
                            <textarea class="form-control" aria-label="With textarea" rows="3" name="descripcion"
                                v-model="descripcion"></textarea>
                        </div>



                    </div>


                </div>
                <div class="modal-footer">

                    <!--  v-for="habitacion in habitaciones" :key="habitacion" -->
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-dark" @click="guardarDatos()">Guardar</button>

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

                    <!--  -->
                    <div class="container">
                        <div class="row">

                            <select v-model="seleccionado.numero" class="form-control" id="habitacionesSelector">
                                <option> seleccionar habitacion</option>
                                <option v-for="numero in numHabitacion" :key="numero">
                                    {{ numero.numero }}
                                </option>
                            </select>




                        </div>


                        <div class="row" style="margin-top: 2%;">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="cantidadCamas">Cantidad Camas</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Default" v-model="cantidadCamas"
                                    aria-describedby="inputGroup-sizing-default">
                            </div>
                        </div>

                        <div class="row" style="margin-top: 2%;">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="precio">Precio</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Default" v-model="precio"
                                    aria-describedby="inputGroup-sizing-default">
                            </div>
                        </div>

                        <div class="input-group">
                            <textarea class="form-control" aria-label="With textarea" rows="3"
                                v-model="descripcion"></textarea>
                        </div>



                    </div>

                    <!-- botones -->
                    <div>



                    </div>



                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-dark" @click="modificarDatos(seleccionado.numero)">Guardar</button>
                </div>
            </div>
        </div>
    </div>
</template>



<style></style>