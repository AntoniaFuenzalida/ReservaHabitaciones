<script>
    import { DatePicker } from 'v-calendar'
    import 'v-calendar/dist/style.css'
   
    import app from '../main'
    import { doc, getFirestore, setDoc, getDocs, collection } from "firebase/firestore";

    export default {
    

    data() {
        return {
            cantidadCamas: '',
            descripcion: '',
            numero: '',
            precio: '',
        }
    },


    methods: {
        async guardarDatos() {
            console.log("guardando")
            const db = getFirestore(app);
            if (await this.sinRepetir()===1){
                await setDoc(doc(db, "Habitaciones", this.numero), {
                cantidadCamas: this.cantidadCamas,
                descripcion: this.descripcion,
                numero: this.numero,
                precio: this.precio,
                })
                console.log("termine de guardar")
            }else{
                console.log("Repetido")
            }         
        },
        async modificarDatos(numero) {
            console.log(numero)
            const db = getFirestore(app);
            await setDoc(doc(db, "Habitaciones", numero), {
                cantidadCamas: this.cantidadCamas,
                descripcion: this.descripcion,
                numero: numero,
                precio: this.precio,
            })
        },
        async sinRepetir() {
            const db = getFirestore(app);
            const querySnapshot = await getDocs(collection(db, "Habitaciones"));
            var rep = 1
            querySnapshot.forEach((doc) => {
                if (doc.data().numero == this.numero){
                    rep = 0
                }
                },
            );
            return rep;
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
    modelValue: 'DD-MM-YYYY',
});


var ArregloReservas = {}
var numHabitacion = {}


const CargarFecha = () => {
    seleccionado.reserva = NaN
    console.log("fecha seleccionada: "+ seleccionado.fecha)
}
const Seleccionar = (reserva) => {
    seleccionado.reserva = reserva
}

const cargarLasReservas = async() =>{
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "Reservas"));
    querySnapshot.forEach((doc) => {
        ArregloReservas["reserva " + doc.data().idReserva] = {
            numeroHabitacion: doc.data().numeroHabitacion.replace(/\r\n/g, ''),
            cantidadCamas: doc.data().cantidadCamas.replace(/\r\n/g, ''),
            cantidadPersonas: doc.data().cantidadPersonas.replace(/\r\n/g, ''),
            estadoReserva: doc.data().estadoReserva.replace(/\r\n/g, ''),
            fechaIngreso: doc.data().fechaIngreso.replace(/\r\n/g, ''),
            fechaSalida: doc.data().fechaSalida.replace(/\r\n/g, ''),
            idReserva: doc.data().idReserva.replace(/\r\n/g, ''),
            nombreCliente: doc.data().nombreCliente.replace(/\r\n/g, ''),
            rut: doc.data().rut.replace(/\r\n/g, '')}
        },
    );
}

const cargarHabitacion = async() =>{
    
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "Habitaciones"));
    querySnapshot.forEach((doc) => {
        numHabitacion[doc.data().numero] = {
            numero: doc.data().numero,
        }
        }

        );
    }

cargarLasReservas()
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
                            <li class="list-group-item mt-3" v-for="reserva in ArregloReservas"
                                :key="reserva.fechaIngreso & reserva.numeroHabitacion">
                                <div class="DropDown"
                                    v-if="reserva.estadoReserva === 'aprobado' && seleccionado.fecha === reserva.fechaIngreso">
                                    <div class="dropdown-header" @click="Seleccionar(reserva)">
                                        <img src="/verde.ico" class="dropdown-icon">
                                        {{ reserva.fechaIngreso }} // habitacion: {{ reserva.numeroHabitacion }}
                                    </div>
                                </div>
                                <div class="dropdown"
                                    v-else-if="reserva.estadoReserva === 'rechazo' && seleccionado.fecha === reserva.fechaIngreso">
                                    <div class="dropdown-header" @click="Seleccionar(reserva)">
                                        <img src="/rojo.ico" class="dropdown-icon">
                                        {{ reserva.fechaIngreso }} // habitacion: {{ reserva.numeroHabitacion }}
                                    </div>
                                </div>
                                <div class="dropdown"
                                    v-else-if="reserva.estadoReserva === 'en espera' && seleccionado.fecha === reserva.fechaIngreso">
                                    <div class="dropdown-header" @click="Seleccionar(reserva)">
                                        <img src="/amarillo.ico" class="dropdown-icon">
                                        {{ reserva.fechaIngreso }} // habitacion: {{ reserva.numeroHabitacion }}
                                    </div>
                                </div>
                                <div class="dropdown"
                                    v-else-if="reserva.estadoReserva === 'Utilizada' && seleccionado.fecha === reserva.fechaIngreso">
                                    <div class="dropdown-header" @click="Seleccionar(reserva)">
                                        <img src="/azul.ico" class="dropdown-icon">
                                        {{ reserva.fechaIngreso }} // habitacion: {{ reserva.numeroHabitacion }}
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
                    Fecha: {{ seleccionado.reserva.fechaIngreso }}
                </li>
                <li class="list-group-item mt-2">
                    habitacion: {{ seleccionado.reserva.numeroHabitacion }}
                </li>
                <li class="list-group-item mt-2">
                    Estado: {{ seleccionado.reserva.estadoReserva }}
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
                                     <span class="input-group-text" >numero</span>
                                 </div>
                                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" name="numero" v-model="numero">
                            </div>                            
                        </div>

                        <div class="row" style="margin-top: 2%;">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                     <span class="input-group-text" >Cantidad Camas</span>
                                 </div>
                                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" name="cantidadCamas" v-model="cantidadCamas">
                            </div>                            
                        </div>

                        <div class="row" style="margin-top: 2%;">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                     <span class="input-group-text">Precio</span>
                                 </div>
                                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" name="precio" v-model="precio">
                            </div>                            
                        </div>

                        <div class="input-group">
                                <textarea class="form-control" aria-label="With textarea" rows="3" name="descripcion" v-model="descripcion" ></textarea>
                        </div>

                       

                    </div>


                </div>
                <div class="modal-footer">
                    
                   <!--  v-for="habitacion in habitaciones" :key="habitacion" -->
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-dark" @click="guardarDatos()" >Guardar</button>
                
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
                            
                                <select v-model="seleccionado.numero"  class="form-control" id="habitacionesSelector">
                                    <option> seleccionar habitacion</option>
                                    <option v-for="numero in numHabitacion" :key="numero">
                                        {{numero.numero}}
                                    </option>
                                </select>
                                
                                


                            </div>
                            
                            
                            <div class="row" style="margin-top: 2%;">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                         <span class="input-group-text" id="cantidadCamas">Cantidad Camas</span>
                                     </div>
                                        <input type="text" class="form-control" aria-label="Default" v-model="cantidadCamas" aria-describedby="inputGroup-sizing-default">
                                </div>                            
                            </div>
    
                            <div class="row" style="margin-top: 2%;">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                         <span class="input-group-text" id="precio">Precio</span>
                                     </div>
                                        <input type="text" class="form-control" aria-label="Default" v-model="precio" aria-describedby="inputGroup-sizing-default">
                                </div>                            
                            </div>
    
                            <div class="input-group">
                                    <textarea class="form-control" aria-label="With textarea" rows="3" v-model="descripcion"></textarea>
                            </div>
    
                           
    
                        </div>
                
            <!-- botones -->
                <div>
                        


                </div>



                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-dark" @click="modificarDatos(seleccionado.numero)" >Guardar</button>
                </div>
            </div>
        </div>
</div></template>



<style></style>